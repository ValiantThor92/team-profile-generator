const Employee = require('./Employee');

class Manager extends Employee {
  constructor(name, id, email, phone) {
    // imports from employee
    super(name, id, email);
    // specific to manager
    this.phone = phone;
  }
  getRole() {
    return "Manager";
  }
  getPhone() {
    return this.phone;
  }
}

module.exports = Manager;
