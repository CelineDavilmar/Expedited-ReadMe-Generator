// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "What is your project title?",
        name: 'projectTitle',
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
        default: 'description',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A Discription is required.");
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
                return console.log("A Discription is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Please enter the test instructions.",
        name: 'test',
        default: 'test',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A Discription is required.");
            }
            return true;
        }
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
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
            writeToFile("README.md", inquirerResponse, data);
        })
        .catch((err) => {
            console.log(err);
        })
}

// Function call to initialize app
init();

