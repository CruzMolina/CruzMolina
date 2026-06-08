#!/usr/bin/env node

const links = [
  ["GitHub", "https://github.com/CruzMolina"],
  ["LinkedIn", "https://www.linkedin.com/in/cruzmolina/"],
  ["X", "https://x.com/CruzAMolina"],
  ["parallel-revm-lab", "https://github.com/CruzMolina/parallel-revm-lab"],
];

console.log(`
Cruz Molina

Senior/staff software engineer focused on crypto-fintech infrastructure:
backend systems, wallets, DeFi/trading rails, developer tooling, and
protocol-adjacent product engineering.

Recently: Kraken / Ink. Previously: Truffle, Opyn, Insrt, and Consensys.

Selected links:
${links.map(([label, url]) => `- ${label}: ${url}`).join("\n")}
`);
