const fs = require('fs');

const CURR_DIR = process.cwd();
function copyFolder(templatePath, newProjectPath) {
	const filesToCreate = fs.readdirSync(templatePath);
	filesToCreate.forEach((file) => {
		const origFilePath = `${templatePath}/${file}`;

		// get stats about the current file
		const stats = fs.statSync(origFilePath);

		if (stats.isFile()) {
			const contents = fs.readFileSync(origFilePath, 'utf8');

			// Rename
			if (file === '.npmignore') file = '.gitignore';

			const writePath = `${CURR_DIR}/${newProjectPath}/${file}`;
			fs.writeFileSync(writePath, contents, 'utf8');
		} else if (stats.isDirectory()) {
			fs.mkdirSync(`${CURR_DIR}/${newProjectPath}/${file}`);

			// recursive call
			copyFolder(`${templatePath}/${file}`, `${newProjectPath}/${file}`);
		}
	});
}

module.exports = { copyFolder };
