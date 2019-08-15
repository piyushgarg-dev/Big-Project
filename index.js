const express = require("express");
const bodyparser = require("body-parser");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://gargpiyush195:jkjk1806@cluster0-vh1hd.mongodb.net/test?retryWrites=true&w=majority";

mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(() => {
    console.log("MongoDb Connected");
  })
  .catch(err => console.log("MongoDb Err: ", err));

const app = express();

const PORT = 5000;

// Middlewares
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

// Models
const User = require("./models/User");

// Routes
const api = require("./api/routes");
app.use("/api", api);

// Route: Login
// Method: Post
// Open
app.post("/login", (req, res) => {
  console.log("New Login: ", req.body);
  // { username: 'gargpiyush', password: '123' }
});

// Route: Signup
// Method: Post
// Open
app.post("/signup", (req, res) => {
  console.log("New Signup: ", req.body);
  User.find({ email: req.body.email }, (err, user) => {
    if (user.length > 0) {
      res.status(500).json({
        msg: "User Already Exists",
        class: "alert alert-danger"
      });
    } else if (err === null) {
      const user = new User();
      user.fullname = req.body.name;
      user.email = req.body.email;
      user.password = req.body.password;
      user.username = req.body.username;

      user.save(err => {
        if (err) {
          res.status(500).json(err);
        } else {
          const tokenOption = {
            _id:user._id,
            fullname:user.fullname,
            email:user.email,
            username:user.username
          }
          var token = jwt.sign({ tokenOption }, "secretkey");
          res.status(200).json({
            msg: "Account Created Successfully",
            class: "alert alert-success",
            token
          });
          
        }
      });
    } else {
      res.status(500).json("user_already_exists");
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server Started on Port ${PORT}`);
});
