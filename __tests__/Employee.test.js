const Employee = require('../lib/Employee');

test('gets name from employee', () => {
    let employee = new Employee("Kellie", 1274347, "knharman@gmail.com");
    expect(employee.getName()).toBe("Kellie");
});

test('gets ID from employee', () => {
    let employee = new Employee("Kellie", 1274347, "knharman@gmail.com");
    expect(employee.getId()).toBe(1274347);
});

test('invalid Id', () => {
    let employee = new Employee("Kellie", 0, "knharman@gmail.com");
    expect(employee.getId()).toBe('employee does not have a valid ID');
});

test('gets email from employee', () => {
    let employee = new Employee("Kellie", 1274347, "knharman@gmail.com")
    expect(employee.getEmail()).toBe("knharman@gmail.com");
});

test('gets role from employee', () => {
    let employee = new Employee("Kellie", 1274347, "knharman@gmail.com")
    expect(employee.getRole()).toBe("Employee");
});