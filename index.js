#! /home/andrei/.nvm/versions/node/v14.6.0/bin/node

// TODO: add commands file for every template
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
	exec('git init');
});
