const questions = [
  {
    type: 'list',
    name: 'menuChoice',
    message: 'Would you like to add another employee?',
    choices: [
      'Engineer',
      'Intern',
      'No'
    ]
  }
]

module.exports = questions;