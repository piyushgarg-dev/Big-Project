const mongoose = require('mongoose');
var moment = require('moment');

const UserSchema = mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    joinedOn:{
        type:String,
        default:moment().format('MMMM Do YYYY, h:mm:ss a')
        
    }
})

const User = (module.exports = mongoose.model('User',UserSchema));