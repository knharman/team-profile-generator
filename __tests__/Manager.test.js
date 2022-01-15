const Manager = require('../lib/Manager');

test('gets name from Manager', () => {
    let manager = new Manager("Kellie", 1274347, "knharman@gmail.com");
    expect(manager.getName()).toBe("Kellie");
});

test('gets ID from Manager', () => {
    let manager = new Manager("Kellie", 1274347, "knharman@gmail.com");
    expect(manager.getId()).toBe(1274347);
});

test('invalid Id', () => {
    let manager = new Manager("Kellie", 0, "knharman@gmail.com");
    expect(manager.getId()).toBe('manager does not have a valid ID');
});

test('gets email from Manager', () => {
    let manager = new Manager("Kellie", 1274347, "knharman@gmail.com")
    expect(manager.getEmail()).toBe("knharman@gmail.com");
});

test('gets role from Manager', () => {
    let manager = new Manager("Kellie", 1274347, "knharman@gmail.com")
    expect(manager.getRole()).toBe("Manager");
});