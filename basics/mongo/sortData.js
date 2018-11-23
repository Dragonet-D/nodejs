const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017/";
MongoClient.connect(url, {useNewUrlParser: true}, (err, db) => {
  if (err) {
    throw err;
  }
  const dbo = db.db("test1108");
  dbo.collection("test").find().sort({name: 1}).toArray((error, res) => {
    if (error) throw error;
    console.log(res);
    db.close();
  });
  dbo.collection("test").find().limit(2).toArray((error, res) => {
    if (error) throw error;
    console.log(res);
    db.close();
  });
  dbo.collection("test").find().skip(2).limit(2).toArray((error, res) => {
    if (error) throw error;
    console.log(res);
    db.close();
  });
});
