const MongoClient = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017/";

MongoClient.connect(url, {useNewUrlParser: true}, (err, db) => {
  if (err) throw err;
  const dbo = db.db("test1108");
  dbo.collection("testCopy").drop((error, res) => {
    if (error) throw error;
    console.log(res);
    db.close();
  });
  dbo.collection("testCopy").deleteOne({name: "maomaogou"}, (error, res) => {
    if (error) throw error;
    console.log(res);
    db.close();
  });
  dbo.collection("testCopy").deleteMany({name: "maomaogou"}, (error, res) => {
    if (error) throw error;
    console.log(res);
    db.close();
  });
});
