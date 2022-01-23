const fs = require('fs')

const Manager = require('../lib/Manager')
const Engineer = require('../lib/Engineer')
const Intern = require('../lib/Intern')

/**
 * takes the javaScript object of user input and returns an array of employees
 */
const createEmployeeArray = function(userInput) {
    const employees = []
    const manager = new Manager(userInput.name, userInput.id, userInput.email, userInput.office)
    
    employees.push(manager)

    for(i=0; i < userInput.employees.length; i++) {
        if (userInput.employees[i].github !== undefined) {
            // this is an engineer
            const engineer = new Engineer(userInput.employees[i].name, 
                userInput.employees[i].id, 
                userInput.employees[i].email, 
                userInput.employees[i].github)
    
            employees.push(engineer)
        } else {
            // this is an intern
            const intern = new Intern(userInput.employees[i].name, 
                userInput.employees[i].id, 
                userInput.employees[i].email, 
                userInput.employees[i].school)
    
            employees.push(intern)
        }
    }
    return employees
}

function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
      fs.writeFile(fileName, data, err => {
        // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
        if (err) {
          reject(err);
          // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
          return;
        }
  
        // if everything went well, resolve the Promise and send the successful data to the `.then()` method
        resolve({
          ok: true,
          message: 'File created!'
        });
      });
    });
  }

const generateHTML = function(answers) {
    const employeeArray = createEmployeeArray(answers)
    console.log(employeeArray)

    let employeeCardsHTML = ""

    employeeArray.forEach((employee) => {
        console.log('employeeArray.forEach' + employee.getHTML())
        employeeCardsHTML += employee.getHTML()
    })

    console.log('employee cards HTML' + employeeCardsHTML)
    const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
            <link rel="stylesheet" href="./styles.css">
            <title>My Team</title>
        </head>
        <body>
            <nav class="navbar navbar-light">
                <div class="container-fluid" id="navbarStyle">
                <span class="navbar-brand mb-0 h1" id="navbarStyle">My Team</span>
                </div>
            </nav>
            <div class="container">
                <div class="row">
                    <div class="col d-flex flex-wrap justify-content-center">
                        ${employeeCardsHTML}
                    </div>
                </div>
            </div>
        </body>
        </html>
    `

    writeToFile('./dist/index.html', html)
}




module.exports = generateHTML