// TODO: Include packages needed for this application
const inquierer = require('inquirer');

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

}

// TODO: Create a function to initialize app
function init() {
    try {
        const answers = await inquirer.prompt(questions);
        answers.licenseBadge = licenseBadge(answers.license);
        let data = generateMarkdown(answers);
        await writeFileAsync("created-README.md", data);
    } catch (err) {
        throw err;
    }
}

// Function call to initialize app
init();
