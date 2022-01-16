const inquirer = require("inquirer")
const promptIntern = require('./promptIntern')
const generateHTML = require('./generateHTML')

const promptEngineer = function (previousAnswers) {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the Engineer's name?"
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the Engineer's employee ID?"
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the Engineer's email address?"
            },
            {
                type: 'input',
                name: 'github',
                message: "What is the Engineer's GitHub Username"
            },
            {
                type: 'list',
                name: 'addition',
                message: "Would you like to add an Engineer, add an Intern, or quit?",
                choices: ['Engineer', 'Intern', 'Quit']
            },
        ])
        .then((answers) => {
            previousAnswers.employees.push(answers)
            switch (answers.addition) {
                case 'Engineer':
                    console.log("user picked Engineer")
                    promptEngineer(previousAnswers)
                    break;
                case 'Intern':
                    console.log("user picked Intern")
                    promptIntern(previousAnswers)
                    break;
                default:
                    console.log("user picked quit")
                    console.log(previousAnswers)
                    generateHTML(previousAnswers)
            }
        })
        .catch((error) => {
            console.error(error)
        });
}

module.exports = promptEngineer