const Manager = require('../lib/Manager');

test('gets name from Manager', () => {
    let manager = new Manager("Kellie", 1274347, "knharman@gmail.com", 12);
    expect(manager.getName()).toBe("Kellie");
});

test('gets ID from Manager', () => {
    let manager = new Manager("Kellie", 1274347, "knharman@gmail.com", 12)
    expect(manager.getId()).toBe(1274347);
});

test('invalid Id', () => {
    let manager = new Manager("Kellie", 0, "knharman@gmail.com", 12)
    expect(manager.getId()).toBe('employee does not have a valid ID');
});

test('gets email from Manager', () => {
    let manager = new Manager("Kellie", 1274347, "knharman@gmail.com", 12)
    expect(manager.getEmail()).toBe("knharman@gmail.com");
});

test('gets role from Manager', () => {
    let manager = new Manager("Kellie", 1274347, "knharman@gmail.com", 12)
    expect(manager.getRole()).toBe("Manager");
});

test('gets office number', () => {
    let manager = new Manager("Kellie", 1274347, "knharman@gmail.com", 12)
    expect(manager.getOfficeNumber()).toBe(12)
})