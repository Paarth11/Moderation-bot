/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
const path = require('path');
const getAllFiles = require('./getAllFiles');

module.exports = () => {
  const localCommands = [];

  const commandCategories = getAllFiles(
    path.join(__dirname, '..', 'commands'),
    true
  );
  for (const commandCategory of commandCategories) {
    const commandFiles = getAllFiles(commandCategory); // all files in command ie:ping , ban etc

    for (const commandFile of commandFiles) {
      const commandObject = require(commandFile);
      localCommands.push(commandObject); // pushing all the commands in the localCommands array
    }
  }
  return localCommands;
};
