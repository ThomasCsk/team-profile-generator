const inquirer = require('inquirer') // Inquirer node package: used to get information back from user based off of question answers
const generateHTML = require('./src/page-template'); // Imported function to generate html file content based off of the answers to questions in this file
const {writeFile, copyFile} = require('./utils/generate-file'); // Functions used to make the required files for the /dist folder

var team = []; // Holds the answers to the questions

const promptManager = () => { // Asks the user for information about the manager
  const questions = [
  {
    type: 'input', // Determines what kind of answer should be given back (a string in this case)
    name: 'name', // the key for this answer's value
    message: 'What is your Manager\'s name?', // The displayed question
    validate: nameInput => { // Checks to see if an answer was given and re-asks the question if none was given
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
  inquirer.prompt(questions) // Displays the questions above in the terminal
  .then((answers) => {
    team.push(answers) // Adds the answers to the team object
  })
  .then(() =>{
    promptMenu(); // Sends the user to the menu
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
    inquirer.prompt(questions) // Displays the questions above in the terminal
    .then((answers) => {
      team.push(answers) // Adds the answers to the team object
    })
    .then(() =>{
      promptMenu(); // Sends the user to the menu
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
    inquirer.prompt(questions) // Displays the questions above in the terminal
    .then((answers) => {
      team.push(answers) // Adds the answers to the team object
    })
    .then(() =>{
      promptMenu(); // Sends the user to the menu
    })
    .catch(err => {
      console.log(err);
    });
}

const promptMenu = () => {
  console.log('--- Menu ---');
  inquirer.prompt({
    type: 'list', // This makes the user choose one of the given choices
    name: 'menu',
    message: 'Would you like to add an engineer to your team, add an intern to your team, or finish building your team?',
    choices: ['Add an engineer', 'Add an intern', 'Finish building team'] // the possible answers
  })
  .then((answers) => {
    if (answers.menu === 'Add an engineer') { 
      promptEngineer(); // Sends the user to the engineer section to add an engineer
    }
    else if(answers.menu === 'Add an intern'){
      promptIntern(); // Sends the user to the intern section to add an intern
    }
    else{
     console.log('Team Completed!'); // Finishes the questions for the user
    }
  })
  .catch(err => {
    console.log(err);
  });
}


promptManager() // Starts the questions
.then(team => {
  console.log(team); // logs all the team members
  return generateHTML(team); // returns the html data generated using the team data
})
.then(html => { 
  return writeFile(html); // Uses the html data to make an html file in the /dist folder
})
.then(fileResponse => {
  console.log(fileResponse); // Checks if the file was correctly made
  return copyFile(); // Copies the css file from the /src folder to the /dist folder
})
.then(fileResponse => { 
  console.log(fileResponse); // Checks if the file was correctly copied
})
.catch(err => {
  console.log(err);
})
