// imports
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');

const managerQuestions = require('./utils/managerQuestions');
const subMenuQuestions = require('./utils/subMenuQuestions');
const engineerQuestions = require('./utils/engineerQuestions');
const internQuestions = require('./utils/internQuestions');

const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const generatePage = require('./utils/generateHTML');
const generateSite = require('./utils/generate-site')

const officeTeam = []

function init() {
  console.log('application initiated')
  addManager()
}

function addManager() {
  inquirer.prompt(managerQuestions)
  .then(answers => {
    const newManager = new Manager(
      answers.managerName,
      answers.managerId,
      answers.managerEmail,
      answers.managerPhone
    );
    officeTeam.push(newManager);
    subMenu()
  })
}

function subMenu() {
  inquirer.prompt(subMenuQuestions)
  .then( answer => {
    if (answer.menuChoice === 'Engineer') {
      addEngineer()
    } else if (answer.menuChoice === 'Intern') {
      addIntern()
    } else {
      buildTeam()
    }
  })
}

function addEngineer() {
  inquirer.prompt(engineerQuestions)
  .then(answers => {
    const newEngineer = new Engineer(
      answers.engineerName,
      answers.engineerId,
      answers.engineerEmail,
      answers.engineerGitHub
    );
    officeTeam.push(newEngineer);
    subMenu()
  })
}

function addIntern() {
  inquirer.prompt(internQuestions)
  .then(answers => {
    const newIntern = new Intern(
      answers.internName,
      answers.internId,
      answers.internEmail,
      answers.internSchool
    );
    officeTeam.push(newIntern);
    subMenu()
  })
}

function buildTeam() {
  if (!fs.existsSync('dist')) {
    fs.mkdirSync('dist');
  }

  fs.writeFileSync(`${process.cwd()}/dist/index.html`, generatePage(officeTeam))
 
  generateSite()
}

init()
