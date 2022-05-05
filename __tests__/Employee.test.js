const Employee = require('../lib/Employee');
  
var employee = new Employee({
  name: 'Dave',
  id: '1',
  email: 'tciszek515@gmail.com',
});

test(('Creates a new employee'), () => {
  expect(employee.name).toBe('Dave');
  expect(employee.id).toBe('1');
  expect(employee.email).toBe('tciszek515@gmail.com');
});

test(('gets the name from user input'), () => {
  expect(employee.getName()).toBe('Dave');
});

test(('gets the id from the user input'), () => {
  expect(employee.getId()).toBe('1');
});

test(('gets email from user input'), () => {
  expect(employee.getEmail()).toBe('tciszek515@gmail.com');
});

test(('gets the role from the user input'), () => {
  expect(employee.getRole()).toBe('Employee');
});