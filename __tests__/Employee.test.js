const test = require('jest');
const { describe } = require('yargs');
const Employee = require('../lib/Employee');

describe('Employee', () => {
  describe('create employee object', () => {
    it('Can properly generate object', () => {
      const employee = new Employee()
      expect(typeof(employee)).toBe("object")
    })
  })

  describe('Can set constructor properties', () => {
    it('Can set the name', () => {
      const name = 'Travis';
      const employee = new Employee(name)
      expect(employee.name).toBe(name);
    })

    it('Can set the ID', () => {
      const testID = 1;
      const employee = new Employee('Travis', testID)
      expect(employee.id).toBe(testID)
    })

    it('Can set the Email', () => {
      const email = 'magnafunk72@gmail.com';
      const employee = new Employee('Travis', 1, email)
      expect(employee.email).toBe(email)
    })
  })

  describe('Can use methods', () => {
    it('Can get name property using getName()', () => {
      const name = 'Travis';
      const employee = new Employee(name);
      expect(employee.getName()).toBe(name);
    })

    it('Can get ID property using getId()', () => {
      const testID = 1;
      const employee = new Employee('Travis', testID)
      expect(employee.getId()).toBe(testID)
    })

    it('Can get Email property using getEmail()', () => {
      const email = 'email@gmail.com';
      const employee = new Employee('Travis', 1, email)
      expect(employee.getEmail()).toBe(email)
    })
    
    it('Returns Employee when using getRole()', () => {
      const role = 'Employee'
      const employee = new Employee('Travis', 1, 'magnafunk72@gmail.com')
      expect(employee.getRole()).toBe(role)
    })
  })
});