const inquirer = require("inquirer");
const generatePage = require("./src/page-template");
const { writeFile, copyFile } = require("./src/generate-site");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const teamMembers = {
  manager: [],
  engineers: [],
  interns: [],
};

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
    message: "What is the team manager's email?",
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

const otherMemberPrompts = [
  {
    type: "list",
    message: "What type of team member would you like to add?",
    name: "member",
    choices: ["Engineer", "Intern"],
  },
  {
    type: "input",
    name: "name",
    message: "What is the employee's name?",
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
    message: "What is the employee's ID number?",
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
    message: "What is the employee's email?",
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
    name: "school",
    message: "What is the name of the intern's school?",
    when: ({ member }) => {
      if (member === "Intern") {
        return true;
      } else {
        return false;
      }
    },
    validate: (schoolInput) => {
      if (schoolInput) {
        return true;
      } else {
        console.log("Please enter a school.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "github",
    message: "What is the engineer's github username?",
    when: ({ member }) => {
      if (member === "Engineer") {
        return true;
      } else {
        return false;
      }
    },
    validate: (githubInput) => {
      if (githubInput) {
        return true;
      } else {
        console.log("Please enter a github username.");
        return false;
      }
    },
  },
  {
    type: "confirm",
    name: "confirmAddMember",
    message: "Would you like to add another team member?",
    default: false,
  },
];

const otherMembers = () => {
  return inquirer.prompt(otherMemberPrompts).then((memberData) => {
    if (memberData.member === "Engineer") {
      const { name, id, email, github } = memberData;
      const engineer = new Engineer(name, id, email, github);
      teamMembers.engineers.push(engineer);
    } else {
      const { name, id, email, school } = memberData;
      const intern = new Intern(name, id, email, school);
      teamMembers.interns.push(intern);
    }

    if (memberData.confirmAddMember) {
      return otherMembers();
    } else {
      let members = roleCall();
      return members;
    }
  });
};

const roleCall = () => {
  return teamMembers;
};

inquirer
  .prompt(teamManagerPrompts)
  .then((managerData) => {
    const { name, id, email, officeNumber } = managerData;
    const manager = new Manager(name, id, email, officeNumber);
    teamMembers.manager.push(manager);
  })
  .then(otherMembers)
  .then((teamMembers) => {
    return generatePage(teamMembers);
  })
  .then((pageHTML) => {
    return writeFile(pageHTML);
  })
  .then((writeFileResponse) => {
    console.log(writeFileResponse);
    /* return copyFile(); */
  })
  /*   .then((copyFileResponse) => {
    console.log(copyFileResponse);
  }) */
  .catch((err) => {
    console.log(err);
  });
