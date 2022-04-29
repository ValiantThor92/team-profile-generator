// imports
const fs = require('fs');
const inquirer = require('inquirer');
const managerQuestions = require('./utils/managerQuestions');
const Manager = require('./lib/Manager');
const subMenuQuestions = require('./utils/subMenuQuestions');
const engineerQuestions = require('./utils/engineerQuestions');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const internQuestions = require('./utils/internQuestions');
const generatePage = require('./utils/generateHTML');
const generateSite = require('./utils/generate-site')