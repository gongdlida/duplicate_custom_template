const fs = require("fs");
const inquirer = require("inquirer");

/*
fs module is for reading the contents of your templates directory,
returning an array of the names of the starter projects inside.
 */
const CHOICES = fs.readdirSync(`${__dirname}/templates`);

const MESSAGE =
  "Project name must include letters, numbers, underscores and hashes.";
// fs has two versions of methods (readdir [=async] & readdirSync [=sync])
const QUESTIONS = [
  {
    name: "project-choice",
    type: "list",
    message: "What project template would you like to duplicate?",
    choices: CHOICES
  },
  {
    name: "project-path",
    type: "input",
    message: "Project path:",
    validate: function(input){
      if (input === undefined||/^([A-Za-z\-\d])+$/.test(input)) {
        return true;
      } else {
        return MESSAGE;
      }
    }
  },
  {
    name: "project-name",
    type: "input",
    message: "Project name:",
    validate: function(input) {
      if (/^([A-Za-z\-\d])+$/.test(input)) {
        return true;
      } else {
        return MESSAGE;
      }
    }
  }
];

const ROOT_DIR = process.cwd();

// inquirer.prompt is for showing messages to terminal
inquirer.prompt(QUESTIONS).then(answers => {
  const projectChoice = answers["project-choice"];
  const projectPath = answers["project-path"];
  const projectName = answers["project-name"];

  const templatePath = `${__dirname}/templates/${projectChoice}`;
  const newProjectPath = `${ROOT_DIR}/${projectPath}/${projectName}`;
  
  if(!fs.existsSync(`${ROOT_DIR}/${projectPath}`)){
    // if doesn't have the folder directory, create folder
    fs.mkdirSync(`${ROOT_DIR}/${projectPath}`)
  }

  fs.mkdirSync(`${ROOT_DIR}/${projectPath}/${projectName}`); // 해당 위치에 폴더 생성
  createDirectoryContents(templatePath, newProjectPath);
});

const createDirectoryContents = (templatePath, newProjectPath) => {
  const listToDuplicate = fs.readdirSync(templatePath);

  listToDuplicate.forEach(file => {

    // get stats about the current file
    const stats = fs.statSync(`${templatePath}/${file}`);
    
    if (stats.isFile()) {
      const contents = fs.readFileSync(`${templatePath}/${file}`, "utf8");
      const writePath = `${newProjectPath}/${file}`;

      fs.writeFileSync(writePath, contents, "utf8");
    } else if (stats.isDirectory()) {
      fs.mkdirSync(`${newProjectPath}/${file}`);

      // recursive call
      createDirectoryContents(
        `${templatePath}/${file}`,
        `${newProjectPath}/${file}`
      );
    }
  });
};
