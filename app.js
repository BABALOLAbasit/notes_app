const { addNoteToMongo, listNotesFromMongo } = require('./notes');
const chalk = require('chalk');

const command = process.argv[2];

if (command === 'add') {
  const title = process.argv[3].split('=')[1];
  const body = process.argv[4].split('=')[1];
  addNoteToMongo(title, body);
} else if (command === 'list') {
  listNotesFromMongo();
} else if (command === 'read') {
  // Implement read logic
} else if (command === 'remove') {
  // Implement remove logic
} else {
  console.log(chalk.yellow('Invalid command. Use "add," "list," "read," or "remove."'));
}
