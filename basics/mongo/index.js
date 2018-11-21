const MongoClient = require("mongodb").MongoClient;

const test = require("assert");

const url = "mongodb://localhost:27017";

const dbName = "test1120";

MongoClient.connect(url, {useNewUrlParser:true},(err, client) => {
  console.log(client.db(dbName));
});
