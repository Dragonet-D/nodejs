const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/test1108';
MongoClient.connect(url,{ useNewUrlParser: true }, function (err, db) {
  if (err) throw err;
  console.log('数据库已创建');
  const dbase = db.db("test1108");
  dbase.createCollection('test1123', function (err, res) {
    if (err) throw err;
    console.log("创建集合!");
    db.close();
  });
});
