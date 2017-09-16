var express=require("express");

var path=require("path");

var app=express();


var boydParser = require('body-parser');
var router=require("./router.js");

//设置模板引擎
app.set("views",path.join(__dirname,"views"))
app.engine('html', require('ejs').renderFile)//设置文件后缀名
app.set('view engine', 'html');

//post提交获取数据
app.use(boydParser.urlencoded({extended: false}));

app.use(router)

app.listen(9009,()=>{
    console.log("成功");
})