const Employee = require('./Employee');

class Intern extends Employee {
  constructor(name, id, email, school) {
    // import from employee
    super(name, id, email);
    // specific to intern
    this.school = school;
  }
  getRole() {
    return "Intern";
  }
  getSchool() {
    return this.school;
  }
}

module.exports = Intern;