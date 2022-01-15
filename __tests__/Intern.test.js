const Intern = require('../lib/Intern');

test('gets name from intern', () => {
    let intern = new Intern("Kellie", 1274347, "knharman@gmail.com", "Radford");
    expect(intern.getName()).toBe("Kellie");
});

test('gets ID from intern', () => {
    let intern = new Intern("Kellie", 1274347, "knharman@gmail.com", "Radford");
    expect(intern.getId()).toBe(1274347);
});

test('invalid Id', () => {
    let intern = new Intern("Kellie", 0, "knharman@gmail.com", "Radford");
    expect(intern.getId()).toBe('employee does not have a valid ID');
});

test('gets email from intern', () => {
    let intern = new Intern("Kellie", 1274347, "knharman@gmail.com", "Radford")
    expect(intern.getEmail()).toBe("knharman@gmail.com");
});

test('gets role from intern', () => {
    let intern = new Intern("Kellie", 1274347, "knharman@gmail.com", "Radford")
    expect(intern.getRole()).toBe("Intern");
});

test('gets school from intern', () => {
    let intern = new Intern("Kellie", 1274347, "knharman@gmail.com", "Radford")
    expect(intern.getSchool()).toBe("Radford")
})