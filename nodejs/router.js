// 路由模块


var express = require('express');
// 加载 handler 模块
var handler = require('./handler.js');

// 1. 创建路由对象
var router = express.Router();

//引入handler
var handler=require("./handler.js");

// 首页
router.get('/',handler.get.index);
router.get('/index',handler.get.index);

//学员信息列表
router.get("/students",handler.get.students)

//学员添加页面
router.get("/add",handler.get.add)
//学员添加
router.post("/add",handler.post.add)

//查看
router.get("/info",handler.get.info)

//删除
router.get("/delete",handler.get.delete)

//编辑(渲染)；
router.get("/edit",handler.get.edit)

//编辑保存
router.post("/edit",handler.post.edit)

// 3. 返回路由对象
module.exports = router;