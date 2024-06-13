const inquirer = require("inquirer");
const fs = require("fs");

inquirer.prompt([
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "userName",
  },
  {
    type: "input",
    message: "What is your project name?",
    name: "projectName",
  },

  {
    type: "input",
    message: "Please write a shot discription of your project?",
    name: "description",
  },
  {
    type: "list",
    message: "What license are you using for your project",
    name: "license",
    choices: ["MIT", "APACHE 2.0", "BSD 3", "None"],
  },

  {
    type: "input",
    message: "What is the usage of the project?",
    name: "usage",
  },
  {
    type: "input",
    message: "What installation required?",
    name: "installation",
  },
]);
