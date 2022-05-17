const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern')

var managerData = []
var engineerArray = []
var internArray = []

const seperateTeam = team => {
  managerData = team[0]
  for (i = 1; i < team.length; i++) {
    if(team[i].github){
      engineerArray.push(team[i]);
    }
    else if(team[i].school){
      internArray.push(team[i]);
    }
    else{
      console.log("error");
    };
  }
}

const generateManager = () => {
  const manager = new Manager(managerData);

  return`
  <div class="card m-4">
    <div class="card-header">
      <div class="card-header-title">${manager.getName()}</div>
      <div class="card-header-subtitle is-align-self-center pr-4">${manager.getRole()}</div>
    </div>
    <div class="card is-flex is-flex-direction-column p-4">
        <div>ID = ${manager.getId()}</div>
        <div>Email = <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></div>
        <div>Office = ${manager.getOffice()}</div>
    </div>
  </div>
  `;
}

const generateEngineers = () => {
  for (let i = 0; i < engineerArray.length; i++) {
    let engineer = new Engineer(engineerArray[i]);
    let engineerData =`
    <div class="card m-4">
      <div class="card-header">
        <div class="card-header-title">${engineer.getName()}</div>
        <div class="card-header-subtitle is-align-self-center pr-4">${engineer.getRole()}</div>
      </div>
      <div class="card is-flex is-flex-direction-column p-4">
        <div>ID = ${engineer.getId()}</div>
        <div>Email = <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></div>
        <div>GitHub = <a href='https://github.com/${engineer.getGithub()}'>${engineer.getGithub()}</a></div>
      </div>
    </div>
    `;
    engineerArray[i] = engineerData
  }  
  return engineerArray.join(' ');
}

const generateInterns = () => {
  for (let i = 0; i < internArray.length; i++) {
    let intern = new Intern(internArray[i]);
    let internData = `
    <div class="card m-4">
      <div class="card-header">
        <div class="card-header-title">${intern.getName()}</div>
        <div class="card-header-subtitle is-align-self-center pr-4">${intern.getRole()}</div>
      </div>
      <div class="card is-flex is-flex-direction-column p-4">
          <div>ID = ${intern.getId()}</div>
          <div>Email = <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></div>
          <div>School = ${intern.getSchool()}</div>
      </div>
    </div>
    `;
    internArray[i] = internData;
  }
  return internArray.join(' ');
}

const generateHTML = teamData => {
  seperateTeam(teamData);
  
  return `
  <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>My Team</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
      <link rel="stylesheet" href="./style.css">
    </head>

    <body>
      <header>
        <h1 class="is-flex is-justify-content-center py-4">My Team</h1>
      </header>
      <main>
        ${generateManager()}
        ${generateEngineers()}
        ${generateInterns()}
      </main>
    </body>
  </html>
  `;
}

module.exports = generateHTML;