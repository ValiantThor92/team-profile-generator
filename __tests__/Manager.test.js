const Test = require('jest');
const Manager = require('../lib/Manager');

describe('Manager', () => {
  describe('Can generate an Manager object', () => {
    it('Can properly generate object', () => {
      const Trevor = new Manager()
      expect(typeof(Trevor)).toBe("object")
    })
  })

  describe('Can set constructor properties', () => {
    it('Can set the school', () => {
      const officeNumber = 42069;
      const newManager = new Manager('Trevor', 1, 'morningwood@gmail.com')
      expect(newManager.officeNumber).toBe(officeNumber);
    })
  })

  describe('Can use methods', () => {
    it('Can get school property using getschool()', () => {
      const officeNumber = 42069;
      const newManager = new Manager('Trevor', 1, 'morningwood@gmail.com')
      expect(newManager.getofficeNumber()).toBe(officeNumber);
    })

    it('Returns Manager when using getRole()', () => {
      const role = 'Manager'
      const newManager = new Manager('Trevor', 1, 'morningwood@gmail.com')
      expect(newManager.getRole()).toBe(role)
    })
  })
});