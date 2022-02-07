const inquirer = require("inquirer");

const teamManagerPrompts = [
  {
    type: "input",
    name: "name",
    message: "What is the team manager's name?",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter a name.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "id",
    message: "What is the team manager's ID number?",
    validate: (idInput) => {
      if (idInput) {
        return true;
      } else {
        console.log("Please enter an ID number.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "What is the team managers email?",
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log("Please enter an email address.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "officeNumber",
    message: "What is the team manager's office number?",
    validate: (officeNumberInput) => {
      if (officeNumberInput) {
        return true;
      } else {
        console.log("Please enter an office number.");
        return false;
      }
    },
  },
];
const otherMemberPrompts = [];

const initializePrompts = () => {
  return inquirer.prompt(teamManagerPrompts);
};

initializePrompts().then((data) => {
  console.log(data);
});
