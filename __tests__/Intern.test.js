const Intern = require('../lib/Intern');

var intern = new Intern({
  name: 'Dave',
  id: '1',
  email: 'tciszek515@gmail.com',
  school: 'University of Richmond'
});

test(('Creates a new intern'), () => {
  expect(intern.name).toBe('Dave');
  expect(intern.id).toBe('1');
  expect(intern.email).toBe('tciszek515@gmail.com');
  expect(intern.school).toBe('University of Richmond');
});

test(('gets role'), () => {
  expect(intern.getRole()).toBe('Intern');
});