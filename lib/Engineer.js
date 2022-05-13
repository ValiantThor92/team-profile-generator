const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name, id, email, github) {
    // imports info from employee class
    super(name, id, email);
    // additional info specific to engineer class
    this.github = github;
  }
  getRole() {
    return "Engineer";
  }
  getGithub() {
    return this.github;
  }
}

module.exports = Engineer;