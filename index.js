#!/usr/bin/env node

const inquirer = require("inquirer");
const cfonts = require("cfonts");
const opn = require("opn");

const actions = {
  Truffle() {
    opn("https://truffleframework.com/");
  },
  ConsenSys() {
    opn("https://consensys.net/");
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
I work at Truffle on the Truffle Blockchain Development Framework.
I'm also a member of ConsenSys, a venture production studio
focused on distributed ledger technology.
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
        "GitHub",
        "Quit"
      ]
    }
  ])
  .then(answers => {
    actions[answers.choice]();
    process.exit(1);
  });
