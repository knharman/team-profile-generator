const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school
        this.role = "Intern"
    }

    getSchool() {
        return this.school
    }

    getHTML() {
        return `
            <div class="card m-4" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${this.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${this.role}</h6>
                <p class="card-text">ID: ${this.id}</p>
                <p class="card-text"> Email: <a href="mailto: ${this.email}" class="card-link">${this.email}</a></p>
                <p class="card-text"> School: ${this.school}</p>
            </div>
            </div>
        `
    }
}

module.exports = Intern