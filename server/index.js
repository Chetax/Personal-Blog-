const express=require('express');
const app=express();
app.get('/user',()=>{
    console.log("hello Word");
})
app.listen('8000',()=>{
    console.log('Server Started!!!');
})