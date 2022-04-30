const Test = require('jest');
const Intern = require('../lib/Intern');

describe('Intern', () => {
  describe('Can generate an Intern object', () => {
    it('Can properly generate object', () => {
      const Travis = new Intern()
      expect(typeof(Travis)).toBe("object")
    })
  })

  describe('Can set constructor properties', () => {
    it('Can set the school', () => {
      const school = 'University of Oregon';
      const newIntern = new Intern('Travis', 1, 'currentlycrying@gmail.com')
      expect(newIntern.school).toBe(school);
    })

  })

  describe('Can use methods', () => {
    it('Can get school property using getschool()', () => {
      const school = 'University of Oregon';
      const newIntern = new Intern('Travis', 1, 'currentlycrying@gmail.com')
      expect(newIntern.getSchool()).toBe(school);
    })

    it('Returns Intern when using getRole()', () => {
      const role = 'Intern'
      const newIntern = new Intern('Travis', 1, 'currentlycrying@gmail.com')
      expect(newIntern.getRole()).toBe(role)
    })
  })
});