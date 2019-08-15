const express = require("express");
const bodyparser = require('body-parser');


const app = express();

const PORT = 5000;

// Middlewares
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());


// Routes
const api = require("./api/routes");
app.use("/api", api);


// Route: Login
// Method: Post
// Open
app.post('/login',(req,res)=>{
  console.log(req.body)
  // { username: 'gargpiyush', password: '123' }
})

// Route: Signup
// Method: Post
// Open
app.post('/signup',(req,res)=>{

})

app.listen(PORT, () => {
  console.log(`Server Started on Port ${PORT}`);
});

