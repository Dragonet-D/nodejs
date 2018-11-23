const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, {useNewUrlParser: true}, (err, db) => {
  if (err) throw err;
  const dbo = db.db("test1108");
  dbo.collection("test").aggregate([
    {
      $lookup: {
        from: "products",
        localField: "product_id",
        foreignField: "_id",
        as: "orderdetails"
      }
    }
  ]).toArray((error, res) => {
    if (error) throw error;
    console.log(res);
    db.close();
  })
});
