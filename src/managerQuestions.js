const inquirer = require('inquirer');
const promptEngineer = require('./promptEngineer')
const promptIntern = require('./promptIntern')
const generateHTML = require('./generateHTML')

const managerQuestions = function () {
    // inquirer
    //     .prompt([
    //         {
    //             type: 'input',
    //             name: 'name',
    //             message: "What is the Team Manager's name?"
    //         },
    //         {
    //             type: 'input',
    //             name: 'id',
    //             message: "What is the Team Manager's employee ID?"
    //         },
    //         {
    //             type: 'input',
    //             name: 'email',
    //             message: "What is the Team Manager's email address?"
    //         },
    //         {
    //             type: 'input',
    //             name: 'office',
    //             message: "What is the Team Manager's office number?"
    //         },
    //         {
    //             type: 'list',
    //             name: 'addition',
    //             message: "Would you like to add an Engineer, add an Intern, or quit?",
    //             choices: ['Engineer', 'Intern', 'Quit']
    //         },
    //     ])
    //     .then((answers) => {
    //         answers.employees = []

    //         switch (answers.addition) {
    //             case 'Engineer':
    //                 console.log("user picked Engineer")
    //                 promptEngineer(answers)
    //                 break;
    //             case 'Intern':
    //                 console.log("user picked Intern")
    //                 promptIntern(answers)
    //                 break;
    //             default:
    //                 console.log("user picked quit")
    //                 console.log(answers)
    //                 generateHTML(answers)
    //         }
    //     })
    //     .catch((error) => {
    //         console.error(error)
    //     });

    generateHTML()
}

module.exports = managerQuestions