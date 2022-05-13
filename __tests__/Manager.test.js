const Manager = require('../lib/Manager.js');

test('set office number', () => {
    const phone = 100;
    const manager = new Manager('travis', 1, 'email@email.com', phone);

    expect(manager.phone).toBe(phone);
});

// make sure getOfficeNumber() method returns manager office number
test("get manager's office number", () => {
    const phone = 100;
    const manager = new Manager('travis', 1, 'email@email.com', phone);

    expect(manager.getPhone()).toBe(phone);
});

// make sure getRole() method returns manager role
test("get manager's role", () => {
    const role = 'Manager';
    const manager = new Manager('travis', 1, 'email@email.com', 100);

    expect(manager.getRole()).toBe(role);
});