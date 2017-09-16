var db=require("./db.js")

module.exports.get={}
module.exports.post={}


//显示列表页
module.exports.get.index=function(req,res){
  res.render("index");
}

//显示学员列表
module.exports.get.students=function(req,res){
  db.findAll("students",function(err,docs){
     if(err){
       throw err;
     }
     res.render("students",{list:docs})
  })
}

//查看
module.exports.get.info=function(req,res){
  //根据id查询数据
  var id=db.ObjectID(req.query._id);
  db.findOne("students",{_id:id},function(err,docs){
    if(err){
      throw err;
    }
    res.render("info",{item:docs})
  })
 
}


//显示添加页面
module.exports.get.add=function(req,res){
  //获取籍贯与专业
  db.findAll("cities",function(err,cities_docs){
    if(err){
      throw err;
    }
    db.findAll("majors",function(err,majors_docs){
      if(err){
        throw err;
      }
      res.render("add",{cities:cities_docs,majors:majors_docs})
   })
 })

}



//添加页面
module.exports.post.add=function(req,res){
  var model = {
    sno: req.body.sno,
    sname: req.body.sname,
    sgender: (req.body.sgender === 'F') ? '女' : '男',
    sbirthday: req.body.sbirthday,
    sphone: req.body.sphone,
    saddr: req.body.saddr,
    smajor: req.body.smajor
  };
 
  db.insertOne("students",model,function(err,resule){
    if(err){
      throw err;
    }
    res.redirect('/students');
  })
}

//删除
module.exports.get.delete=function(req,res){
  var id=db.ObjectID(req.query._id);
  db.deleteOne("students",{_id:id},(err,result)=>{
    if(err){
      throw err;
    }
    res.redirect('/students');
  })
}



//编辑(渲染)
module.exports.get.edit=(req,res)=>{
  //根据id获取数据
  //获取籍贯
  //获取专业
  var objId = db.ObjectID(req.query._id);
  db.findOne("students",{_id:objId},(err,student_docs)=>{
     if(err){
       throw err;
     }
     db.findAll("cities",function(err,cities_docs){
      if(err){
        throw err;
      }
      db.findAll("majors",function(err,majors_docs){
           
        res.render("edit",{item:student_docs,cities:cities_docs,majors:majors_docs})
      })
    })
  })
}

//编辑(保存)
module.exports.post.edit=(req,res)=>{
  var objId = db.ObjectID(req.body._id);
  var model = {
    sno: req.body.sno,
    sname: req.body.sname,
    sgender: (req.body.sgender === 'F') ? '女' : '男',
    sbirthday: req.body.sbirthday,
    sphone: req.body.sphone,
    saddr: req.body.saddr,
    smajor: req.body.smajor
  };
  db.updateOne('students', {_id: objId}, model, function (err, result) {
    if (err) {
      throw err;
    }
    console.log(result.toString())
    res.redirect('/students');
  });
}

