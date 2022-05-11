const Employee = require('./Employee');

class Manager extends Employee{
  constructor(data){
    super(data);
    this.office = data.office;
  };

  getOffice(){
    return this.office;
  };
  getRole(){
    return 'Manager';
  };
};

module.exports = Manager;