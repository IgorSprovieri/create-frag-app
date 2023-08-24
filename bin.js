#! /usr/bin/env node
const { exec } = require("child_process");

const args = process.argv;
const appName = args[2];

if (!appName) {
  console.log("Error: App name is required");
  process.exit(2);
}

exec(
  `git clone https://github.com/IgorSprovieri/create-frag-app.git ${appName}`
);
