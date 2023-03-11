#!/usr/bin/env node

const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");

if (process.argv.length < 3) {
	console.log("You have to provide a name to your api.");
	console.log("For example :");
	console.log("    npx express-graphql-api my-api");
	process.exit(1);
}

const projectName = process.argv[2];
const currentPath = process.cwd();
const projectPath = path.join(currentPath, projectName);
const git_repo = "https://github.com/emrecorbacii/express-graphql-api.git";

try {
	fs.mkdirSync(projectPath);
} catch (err) {
	if (err.code === "EEXIST") {
		if (projectName === ".") {
			main();
		} else {
			console.log(
				`The file ${projectName} already exist in the current directory, please give it another name.`
			);
		}
	} else {
		console.log(error);
	}
	process.exit(1);
}

async function main() {
	try {
		console.log("Downloading files...");
		execSync(`git clone --depth 1 ${git_repo} ${projectPath}`);

		process.chdir(projectPath);

		console.log("Installing dependencies...");
		execSync("npm install");

		console.log("The installation is done !");
		console.log("To start the server, run :");
		console.log("    npm start");
		console.log("for development mode (nodemon) , run :");
		console.log("    npm run dev");
	} catch (error) {
		console.log(error);
	}
}
main();
