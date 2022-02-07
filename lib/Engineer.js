const Employee = require("../lib/Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);

    this.github = github;
  }

  getGithub() {
    return `${this.name}'s GitHub is https://github.com/${this.github}`;
  }

  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
