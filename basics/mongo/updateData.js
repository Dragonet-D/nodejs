const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017/";

MongoClient.connect(url, {useNewUrlParser: true}, (err, db) => {
  if (err) throw err;
  const dbo = db.db("test1108");
  dbo.collection("test").updateMany({name: /1$/}, {$set: {age: 25}}, (error, res) => {
    if (error) throw error;
    console.log(res);
    db.close();
  })
});
