const { MongoClient } = require("mongodb");

const MONGO_URI = "mongodb://localhost:27017/";
const client = new MongoClient(MONGO_URI);

let db = null;

async function connectDB() {
  const connectionPromise = await client.connect();
  db = client.db("user");
  return connectionPromise;
}

const getDB = () => {
  //   if (!db) {
  //     await connectDB();
  //   }
  return db;
};

module.exports = { connectDB, getDB };
