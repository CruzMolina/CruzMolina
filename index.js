#!/usr/bin/env node

const inquirer = require("inquirer");
const cfonts = require("cfonts");
const opn = require("opn");

const actions = {
  Truffle() {
    opn("https://www.trufflesuite.com/");
  },
  ConsenSys() {
    opn("https://consensys.net/");
  },
  Crowdbotics() {
    opn("https://www.crowdbotics.com/");
  },
  GitHub() {
    opn("https://github.com/cruzmolina");
  },
  Quit() {
    process.exit(1);
  }
};

cfonts.say("Cruz Molina", {
  font: "chrome",
  colors: ["blue", "white", "blue"]
});

console.log(`Hello! My name is Cruz Molina.
I specialize in Open Source Software Development.
I am currently a maintainer of Truffle,
a JavaScript blockchain development framework.
Previously @ConsenSys & @Crowdbotics.
Thanks for stopping by!
`);

inquirer
  .prompt([
    {
      type: "list",
      name: "choice",
      message: "Where would you like to go?",
      choices: [
        "Truffle",
        "ConsenSys",
        "Crowdbotics",
        "GitHub",
        "Quit"
      ]
    }
  ])
  .then(answers => {
    actions[answers.choice]();
    process.exit(1);
  });
