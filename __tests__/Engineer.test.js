const Engineer = require('../lib/Engineer');

var engineer = new Engineer({
  name: 'Dave',
  id: '1',
  email: 'tciszek515@gmail.com',
  github: 'ThomasCsk'
});

test(('Creates a new engineer'), () => {
  expect(engineer.name).toBe('Dave');
  expect(engineer.id).toBe('1');
  expect(engineer.email).toBe('tciszek515@gmail.com');
  expect(engineer.github).toBe('ThomasCsk');
});

test(('gets github'), () => {
  expect(engineer.getGithub()).toBe('ThomasCsk');
});

test(('gets role'), () => {
  expect(engineer.getRole()).toBe('Engineer');
});