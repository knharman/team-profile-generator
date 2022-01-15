const Engineer = require('../lib/Engineer');

test('gets name from engineer', () => {
    let engineer = new Engineer("Kellie", 1274347, "knharman@gmail.com", "knharman");
    expect(engineer.getName()).toBe("Kellie");
});

test('gets ID from engineer', () => {
    let engineer = new Engineer("Kellie", 1274347, "knharman@gmail.com", "knharman");
    expect(engineer.getId()).toBe(1274347);
});

test('invalid Id', () => {
    let engineer = new Engineer("Kellie", 0, "knharman@gmail.com", "knharman");
    expect(engineer.getId()).toBe('employee does not have a valid ID');
});

test('gets email from engineer', () => {
    let engineer = new Engineer("Kellie", 1274347, "knharman@gmail.com", "knharman")
    expect(engineer.getEmail()).toBe("knharman@gmail.com");
});

test('gets role from engineer', () => {
    let engineer = new Engineer("Kellie", 1274347, "knharman@gmail.com", "knharman")
    expect(engineer.getRole()).toBe("Engineer");
});

test('gets github username', () => {
    let engineer = new Engineer("Kellie", 1274347, "knharman@gmail.com", "knharman")
    expect(engineer.getGitHub()).toBe("knharman")
})