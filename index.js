/* Requirements for question prompts
1. what is the project title?
2. what is the description of the project?
3. What is the installation instructions?
4. What is the usage of this project?
5. What is the liscence? make sure to include a license badge near the top of README. 
    also include a notice of what liscense the app is covered under.
6. Who are the contributor?
7. What are the tests? 
8. What are the questions?
    add question, "What is the github username?"
    another one, "what is the email address?", and instructions of how to reach me
Table of Contents (guides to corresponding section of the README when it is clicked)
*/

const inquirer= require('inquirer')
const fs = require('fs')

const markdown = require('./markdown')


//Questions that will appear in the terminal
inquirer.prompt([
    {
        type: "input",
        name: "Title", 
        message: 'what is the title of the project?',
    },
    {
        type: "input",
        name: "Table", 
        message: 'Table of contents',
    },
    {
        type: "input",
        name: "Description", 
        message: 'what is the description of this project??',
    },
    {
        type: "input",
        name: "Installation", 
        message: 'what is the installation?',
    },
    {
        type: "input",
        name: "Usage", 
        message: 'what is the usage of this project?',
    },
    {
        type: "input",
        name: "License", 
        message: 'What is the license?',
    },
    {
        type: "input",
        name: "Contributors", 
        message: 'wh0 are the contributors',
    },
    {
        type: "input",
        name: "Tests", 
        message: 'what are the tests?',
    },
    {
        type: "input",
        name: "Username", 
        message: 'what is the username?',
    },
    {
        type: "input",
        name: "Email", 
        message: 'what is your email?',
    }
]).then((answers)=> {
    console.log(answers)
    
    fs.writeFile('README.md', markdown(answers), function (err) {
        if (err) throw err;
        console.log(markdown);
    }); 
})


  




