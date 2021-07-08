//jshint esvers:6
const express = require("express");

const bodyParser= require("body-parser");



const ejs = require('ejs');
const { urlencoded } = require("body-parser");

const app = express();

var items =["Buy food","cook food","eat food"];

let work = [];

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

app.set("view engine","ejs");



app.get("/",function(req,res){


    let today=new Date();

    let options = {
        weekday: "long",
        day:"numeric",
        month:"long"
    };
    
   let day = today.toLocaleDateString("en-US",options)

    res.render("list",{kindofday: day,newlistitem: items});
});


app.get("/work",function(req,res){
    res.render("list",{listTitle: "work List",newlistitem: items});
})

app.post("/",function(req,res){
    var item = req.body.newitem;

    items.push(item);
    res.redirect("/");
});

app.post("/work",function(req,res){
   var item = req.body.newitem;

   work.push(item);

   res.redirect("/work");
})

app.listen(8080,function(){
    console.log("server started on port 8080");
})