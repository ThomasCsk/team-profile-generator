const inquirer = require('inquirer')

var team = [];

const promptQuestions = () =>{
  const promptManager = () => {
    const questions = [
    {
      type: 'input',
      name: 'name',
      message: 'What is your Manager\'s name?',
      validate: nameInput => {
        if(nameInput){
          return true;
        }
        else{
          console.log('Please enter your Team Manager\'s name.');
          return false;
        };
      }
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is your Manager\'s employee ID?',
      validate: idInput => {
        if(idInput){
          return true;
        }
        else{
          console.log('Please enter your Team Manager\'s employee ID.');
          return false;
        };
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your Manager\'s email address?',
      validate: emailInput => {
        if(emailInput){
          return true;
        }
        else{
          console.log('Please enter your Team Manager\'s email address.');
          return false;
        };
      }
    },
    {
      type: 'input',
      name: 'office',
      message: 'What is your Manager\'s office number?',
      validate: officeInput => {
        if(officeInput){
          return true;
        }
        else{
          console.log('Please enter your Team Manager\'s office number.');
          return false;
        };
      }
    }];
    console.log('--- Manager ---');
    inquirer.prompt(questions)
    .then((answers) => {
      team.push(answers)
    })
    .then(() =>{
      promptMenu();
    })
    .catch(err => {
      console.log(err);
    })
  };

  const promptEngineer = () => {
    const questions = [
      {
        type: 'input',
        name: 'name',
        message: 'What is your Engineer\'s name?',
        validate: nameInput => {
          if(nameInput){
            return true;
          }
          else{
            console.log('Please enter your Engineer\'s name.');
            return false;
          };
        }
      },
      {
        type: 'input',
        name: 'id',
        message: 'What is your Engineer\'s employee ID?',
        validate: idInput => {
          if(idInput){
            return true;
          }
          else{
            console.log('Please enter your Engineer\'s employee ID.');
            return false;
          };
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your Engineer\'s email address?',
        validate: emailInput => {
          if(emailInput){
            return true;
          }
          else{
            console.log('Please enter your Engineer\'s email address.');
            return false;
          };
        }
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your Engineer\'s GitHub username?',
        validate: githubInput => {
          if(githubInput){
            return true;
          }
          else{
            console.log('Please enter your Engineer\'s GitHub username.');
            return false;
          };
        }
      }];

      console.log('--- Engineer ---');
      inquirer.prompt(questions)
      .then((answers) => {
        team.push(answers)
      })
      .then(() =>{
        promptMenu();
      })
      .catch(err => {
        console.log(err);
      })
  }

  const promptIntern = () => {
    const questions = [
      {
        type: 'input',
        name: 'name',
        message: 'What is your Intern\'s name?',
        validate: nameInput => {
          if(nameInput){
            return true;
          }
          else{
            console.log('Please enter your Intern\'s name.');
            return false;
          };
        }
      },
      {
        type: 'input',
        name: 'id',
        message: 'What is your Intern\'s employee ID?',
        validate: idInput => {
          if(idInput){
            return true;
          }
          else{
            console.log('Please enter your Intern\'s employee ID.');
            return false;
          };
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your Intern\'s email address?',
        validate: emailInput => {
          if(emailInput){
            return true;
          }
          else{
            console.log('Please enter your Intern\'s email address.');
            return false;
          };
        }
      },
      {
        type: 'input',
        name: 'school',
        message: 'Where does your Intern attend school?',
        validate: schoolInput => {
          if(schoolInput){
            return true;
          }
          else{
            console.log('Please enter your Intern\'s school.');
            return false;
          };
        }
      }];
    
      console.log('--- Intern ---');
      inquirer.prompt(questions)
      .then((answers) => {
        team.push(answers)
      })
      .then(() =>{
        promptMenu();
      })
      .catch(err => {
        console.log(err);
      });
  }

  const promptMenu = () => {
    console.log('--- Menu ---');
    inquirer.prompt({
      type: 'list',
      name: 'menu',
      message: 'Would you like to add an engineer to your team, add an intern to your team, or finish building your team?',
      choices: ['Add an engineer', 'Add an intern', 'Finish building team']
    })
    .then((answers) => {
      if (answers.menu === 'Add an engineer') {
        promptEngineer();
      }
      else if(answers.menu === 'Add an intern'){
        promptIntern();
      }
      else{
      console.log('Team Completed!');
      }
    })
    .catch(err => {
      console.log(err);
    });
  }
  promptManager()
}

module.exports = promptQuestions;