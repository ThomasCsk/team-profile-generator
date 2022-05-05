const Manager = require('../lib/Manager');

var manager = new Manager({
  name: 'Dave',
  id: '1',
  email: 'tciszek515@gmail.com',
  office: '3'
});

test(('Creates a new manager'), () => {
  expect(manager.name).toBe('Dave');
  expect(manager.id).toBe('1');
  expect(manager.email).toBe('tciszek515@gmail.com');
  expect(manager.office).toBe('3');
});

test(('gets role'), () => {
  expect(manager.getRole()).toBe('Manager');
});