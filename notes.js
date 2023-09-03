const fs = require('fs');
const chalk = require('chalk');
const connectToMongo = require('./db');

// Add a new note to MongoDB
async function addNoteToMongo(title, body) {
  const db = await connectToMongo();
  const notesCollection = db.collection('notes');
  const note = { title, body };

  try {
    const result = await notesCollection.insertOne(note);
    console.log(chalk.green('Note added successfully to MongoDB!'));
    return result;
  } catch (err) {
    console.error(chalk.red('Error adding note to MongoDB:'), err);
    throw err;
  }
}

// List all notes from MongoDB
async function listNotesFromMongo() {
  const db = await connectToMongo();
  const notesCollection = db.collection('notes');

  try {
    const notes = await notesCollection.find().toArray();
    console.log(chalk.blue('Notes:'));
    notes.forEach((note) => {
      console.log(chalk.cyan(`Title: ${note.title}`));
      console.log(`Body: ${note.body}`);
    });
  } catch (err) {
    console.error(chalk.red('Error listing notes from MongoDB:'), err);
    throw err;
  }
}

// Implement read and remove functions similarly.

module.exports = {
  addNoteToMongo,
  listNotesFromMongo,
  // Add other CRUD functions here.
};
