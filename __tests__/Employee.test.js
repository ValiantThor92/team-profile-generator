const test = require('jest');
const { describe } = require('yargs');
const Employee = require('../lib/Employee');

describe('Employee', () => {
  describe('Can generate an Employee object', () => {
    it('Can properly generate object', () => {
      const Travis = new Employee()
      expect(typeof(Travis)).toBe("object")
    })
  })

  describe('Can set constructor properties', () => {
    it('Can set the name', () => {
      const name = 'Travis';
      const newEmployee = new Employee(name)
      expect(newEmployee.name).toBe(name);
    })

    it('Can set the ID', () => {
      const testID = 1;
      const newEmployee = new Employee('Travis', testID)
      expect(newEmployee.id).toBe(testID)
    })

    it('Can set the Email', () => {
      const email = 'magnafunk72@gmail.com';
      const newEmployee = new Employee('Travis', 1, email)
      expect(newEmployee.email).toBe(email)
    })
  })

  describe('Can use methods', () => {
    it('Can get name property using getName()', () => {
      const name = 'Travis';
      const newEmployee = new Employee(name);
      expect(newEmployee.getName()).toBe(name);
    })

    it('Can get ID property using getId()', () => {
      const testID = 1;
      const newEmployee = new Employee('Travis', testID)
      expect(newEmployee.getId()).toBe(testID)
    })

    it('Can get Email property using getEmail()', () => {
      const email = 'magnafunk72@gmail.com';
      const newEmployee = new Employee('Travis', 1, email)
      expect(newEmployee.getEmail()).toBe(email)
    })
    
    it('Returns Employee when using getRole()', () => {
      const role = 'Employee'
      const newEmployee = new Employee('Travis', 1, 'magnafunk72@gmail.com')
      expect(newEmployee.getRole()).toBe(role)
    })
  })
});