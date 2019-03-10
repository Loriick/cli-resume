#!/usr/bin/env node
const inquirer = require("inquirer");
const chalk = require("chalk");

const response = chalk.bold.green;

const resume = require("./resume.json");

const resumePrompts = {
  type: "list",
  name: "resumeOptions",
  message: "Learn more about me",
  choices: [...Object.keys(resume), "Exit"]
};

const main = () => {
  console.log(
    "Hi, I'm Lorick I'm 30years old and a I'm French front-end developer, I'm study at Hetic and work at Adot a French company from Paris"
  );
  resumeHandler();
};

const resumeHandler = () => {
  inquirer.prompt(resumePrompts).then(answer => {
    if (answer.resumeOptions == "Exit") {
      return;
    }
    const option = answer.resumeOptions;
    console.log(response("--------------------------------------"));
    resume[`${option}`].forEach(info => {
      console.log(response("|   => " + info));
    });
    console.log(response("--------------------------------------"));
    inquirer
      .prompt({
        type: "list",
        name: "exitBack",
        message: "Go back or Exit?",
        choices: ["Back", "Exit"]
      })
      .then(choice => {
        if (choice.exitBack == "Back") {
          resumeHandler();
        } else {
          return;
        }
      });
  });
};

main();
