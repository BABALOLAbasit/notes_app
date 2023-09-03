const { MongoClient } = require('mongodb');

const url = 'mongodb+srv://babalolabasit:luminous@cluster0.swejg6h.mongodb.net/'; // MongoDB connection URL
const dbName = 'notes-app'; // Database name

async function connectToMongo() {
  const client = new MongoClient(url, { useUnifiedTopology: true });

  try {
    await client.connect();
    console.log('Connected to MongoDB');
    return client.db(dbName);
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    throw err;
  }
}

module.exports = connectToMongo;
