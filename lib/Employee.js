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
}

module.exports = Employee