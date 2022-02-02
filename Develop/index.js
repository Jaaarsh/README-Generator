// DONE: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
//generate Markdown code from the util folder
const generateMarkdown = require("./utils/generateMarkdown");
// DONE: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions for your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information for your project?',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What are the contribution guidelines of your project?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'What are the test instructions for your project?',
    },
    {
        type: 'list',
        message: "Choose a license for your project.",
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License'],
        name: 'licenses'
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub Username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your Email?',
    },
];

// DONE: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), err => {
        if (err) {
            return console.log(err);
        }
    })
};

// DONE: Create a function to initialize app
function init() {
        // Answer the questions, then have readme get generated
        inquirer.prompt(questions).then((data) => {
            console.log("Creating README");
            writeToFile("./read/README.md", data);
            console.log("README Created");
        });
};

// Function call to initialize app
init();
