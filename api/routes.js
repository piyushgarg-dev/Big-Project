const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.json('Hello Piyush')
});

module.exports = app;