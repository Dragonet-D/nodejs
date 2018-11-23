const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017/";

MongoClient.connect(url, {useNewUrlParser: true}, (err, db) => {
  if (err) throw err;
  const dbo = db.db("test1108");
  const myobj = [
    { name: 'tencent', url: 'https://qq.com', type: 'cn'},
    { name: 'Google', url: 'https://www.google.com', type: 'en'},
    { name: 'Facebook', url: 'https://www.google.com', type: 'en'}
  ];
  dbo.collection("test").insertMany(myobj, (err, res) => {
    if (err) throw err;
    console.log(res);
    db.close();
  })
});
