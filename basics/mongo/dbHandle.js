const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, {useNewUrlParser: true}, (err, db) => {
  if (err) throw err;
  const dbo = db.db("test1108");
  const myosbj = { name: "maomaogou", age: 25 };
  dbo.collection("test1123").insertOne(myosbj, (err, res) => {
    if (err) throw err;
    console.log("insert success");
    db.close();
  })
});
