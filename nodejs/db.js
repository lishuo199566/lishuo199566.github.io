var mongodb = require("mongodb")

//封装连接数据库
function connectDB(callback) {
    var MongoClient = mongodb.MongoClient;
    var url = "mongodb://127.0.0.1:27017/sms"
    MongoClient.connect(url, function (err, db) {
        // 把连接结果通过 callback 函数传递出去
        callback(err, db);
    });
}

//封装获取全部列表
module.exports.findAll = function (collectionName, callback) {
    connectDB(function (err, db) {
        if (err) {
            throw err;
        }

        db.collection(collectionName).find().toArray(function (err, docs) {
            db.close();
            callback(err, docs);
        });
    });
}

//插入一条数据
module.exports.insertOne = function (collectionName, data, callback) {
    connectDB(function (err, db) {
        if (err) {
            throw err;
        }
        db.collection(collectionName).insertOne(data, function (err, result) {
            db.close();
            callback(err, result)
        })
    });
}


//查询一条数据
module.exports.findOne = function (collectionName, filter, callback) {
    connectDB(function (err, db) {
        if (err) {
            throw err;
        }
        db.collection(collectionName).findOne(filter, function (err, docs) {
            db.close();
            callback(err, docs);
        })
    });
}

//删除一条数据
module.exports.deleteOne= function (collectionName, filter, callback) {
    connectDB(function (err, db) {
        if (err) {
            throw err;
        }
        db.collection(collectionName).deleteOne(filter, function (err, docs) {
            db.close();
            callback(err, docs);
        })
    });
}


module.exports.updateOne = function (collectionName, filter, data, callback) {
    connectDB((err, db) => {
        if (err) {
            throw err;
        }
        db.collection(collectionName).updateOne(filter,data,(err,result)=>{
            db.close();
            callback(err,result)
        })
    })
}





//获取id
module.exports.ObjectID = function (strId) {
    return new mongodb.ObjectID(strId);
};