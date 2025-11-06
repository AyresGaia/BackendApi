const { MongoClient } = require('mongodb');

const url = 'mongodb+srv://tigermaster3002_db_user:root@healthinfo.eei2dzw.mongodb.net/?retryWrites=true&w=majority&appName=healthinfo';
const dbName = 'healthinfo';

let db;

const connectDB = async () => {
  if (db) return db;
  const client = new MongoClient(url);
  await client.connect();
  console.log('Connected to MongoDB');
  db = client.db(dbName);
  return db;
};

module.exports = connectDB;
