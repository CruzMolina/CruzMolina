#!/usr/bin/env node

const inquirer = require("inquirer");
const cfonts = require("cfonts");
const opn = require("opn");

const actions = {
  LinkedIn() {
    opn("https://www.linkedin.com/in/cruzmolina/");
  },
  X() {
    opn("https://x.com/CruzAMolina");
  },
  GitHub() {
    opn("https://github.com/cruzmolina");
  },
  "parallel-revm-lab"() {
    opn("https://github.com/CruzMolina/parallel-revm-lab");
  },
  Truffle() {
    opn("https://trufflesuite.com/");
  },
  Quit() {
    process.exit(1);
  },
};

cfonts.say("Cruz Molina", {
  font: "chrome",
  colors: ["blue", "white", "blue"],
});

console.log(`Hello! My name is Cruz Molina.
I am a senior/staff software engineer focused on
crypto-fintech infrastructure, backend systems, wallets,
DeFi/trading rails, developer tooling, and protocol-adjacent
product engineering.

Recently @KrakenFX / Ink. Previously @TruffleSuite,
@Opyn, @InsrtLabs, and @ConsenSys.
Thanks for stopping by!
`);

inquirer
  .prompt([
    {
      type: "list",
      name: "choice",
      message: "Where would you like to go?",
      choices: [
        "LinkedIn",
        "X",
        "GitHub",
        "parallel-revm-lab",
        "Truffle",
        "Quit",
      ],
    },
  ])
  .then((answers) => {
    actions[answers.choice]();
    process.exit(1);
  });
