#! /home/andrei/.nvm/versions/node/v14.15.3/bin/node

const inquirer = require('inquirer');
const { exec } = require('child_process');
const fs = require('fs');

const { copyFolder } = require('./moveFiles');
const { QUESTIONS } = require('./prompt');

const CURR_DIR = process.cwd();

inquirer.prompt(QUESTIONS).then((answers) => {
	const projectChoice = answers['project-choice'];
	const projectName = answers['project-name'];
	const templatePath = `${__dirname}/templates/${projectChoice}`;

	fs.mkdirSync(`${CURR_DIR}/${projectName}`);

	copyFolder(templatePath, projectName);

	process.chdir(projectName);
	try {
		const commands = fs.readFileSync('./commands.txt', 'utf8').split('\n');
		for (let i = 0; i < commands.length; i++) {
			console.log(commands[i], '******************');
			exec(commands[i]);
		}
	} catch (e) {
		console.log('No commands file found...');
	}
});
