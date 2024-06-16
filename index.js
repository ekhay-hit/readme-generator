// import requirer package
const inquirer = require("inquirer");
// requiring file system package
const fs = require("fs");
// import function that generate the readme from the following pad
const readmeGenertor = require("./Pages/readme-generator")

// propmting question to user for generating README file
inquirer.prompt([
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "userName",
  },

  {
    type: "input",
    message: "What is your email address?",
    name: "email",
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
  {
    type: "input",
    message: "How can others contribute to your project?",
    name: "contribution",
  },

  {
    type: "input",
    message: "What tests are available for the project?",
    name: "test",
  }
])
.then((data) =>{
  // assigning the result from the function that generate READme to a varaible to be use to write the README
const readmeContent = readmeGenertor(data);

// Writing to a file

      fs.writeFile('README.md',`${readmeContent}\t`, (error) =>
        error ? console.log(error) : console.log('Success'));
});
