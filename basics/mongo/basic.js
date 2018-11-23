const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017/";

MongoClient.connect(url, {useNewUrlParser: true}, (err, db) => {
  if (err) throw err;
  const dbo = db.db("test1108");
  dbo.collection("test").find({name: /1$/}).toArray((error, result) => {
    if (error) throw error;
    console.log(result);
    db.close();
  })
});
