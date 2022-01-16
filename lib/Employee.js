class Employee {
    constructor(name, id, email){
        this.name = name
        this.id = id
        this.email = email
        this.role = "Employee"
    }

    getName() {
        return this.name
    }

    getId() {
        if(this.id > 0) {
            return this.id
        } else {
            return 'employee does not have a valid ID'
        }
    }

    getEmail() {
        return this.email
    }

    getRole() {
        return this.role
    }

    getHTML() {
        return `
            <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${this.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${this.role}</h6>
            </div>
            </div>
        `
    }
}

module.exports = Employee