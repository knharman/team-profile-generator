const inquirer = require("inquirer")
const promptEngineer = require('./promptEngineer')

const promptIntern = function (previousAnswers) {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the Intern's name?"
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the Intern's employee ID?"
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the Intern's email address?"
            },
            {
                type: 'input',
                name: 'school',
                message: "What school does the Intern attend?"
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
            }
        })
        .catch((error) => {
            console.error(error)
        });
}


module.exports = promptIntern