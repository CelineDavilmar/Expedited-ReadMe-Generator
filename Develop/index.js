// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "What is your project title?",
        name: 'title',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid Project Title is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Please enter description",
        name: 'description',
        default: 'Description',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A Description is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Please enter the installation instructions",
        name: 'instructions',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid response is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Please enter the contribution guidelines",
        name: 'guidlines',
        default: 'guidlines',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid response is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Please enter the test instructions.",
        name: 'test instructions',
        default: 'test instructions',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid response is required.");
            }
            return true;
        }
    },
    {
        type: 'list',
        message: "Please enter license",
        name: 'license',
        choices: ['MIT', 'ISC', 'GNUPLv3'],

    },
    {
        type: 'input',
        message: "Please enter your GitHub Username.",
        name: 'username',
        default: 'UserName',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid response is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Please enter Email.",
        name: 'email',
        default: 'Email',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid response is required.");
            }
            return true;
        }
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    //fileName = "./ReadME.md"

    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err)
        }
        console.log('README generated')
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((inquirerResponse, data) => {
            console.log("Making README");
            writeToFile("./ReadME.md", generateMarkdown(inquirerResponse, data));
        })
        .catch((err) => {
            console.log(err);
        })
}

// Function call to initialize app
init();

