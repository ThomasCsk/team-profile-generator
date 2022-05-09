const Employee = require('./Employee')

class Intern extends Employee{
  constructor(data){
    super(data)

    this.school = data.school
  }
  
  getRole(){
    return 'Intern'
  }
}

module.exports = Intern;