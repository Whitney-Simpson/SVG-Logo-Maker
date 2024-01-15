const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./lib/questions.js');
const fileName = "./examples/logo.svg";
const setShape = require('./lib/setShape.js')

//function creating svg file using inquirer response and file system
function createLogo(response) {
const svg = setShape(response);
fs.writeFile(fileName, svg, () => console.log("Generated logo.svg"));
}

//initializing questions and creating logo with responses, catch errors
function init() {
    inquirer
    .prompt(questions)
    .then((response) => {
        createLogo(response);
    })
    .catch(err => {
        console.log(err)
    });
}

init();