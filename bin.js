#! /usr/bin/env node
const { exec } = require("child_process");

try {
  const args = process.argv;
  const appName = args[2];

  if (!appName) {
    throw new Error("Error: App name is required");
  }

  exec(
    `git clone https://github.com/IgorSprovieri/create-frag-app.git ${appName}`
  );
} catch (error) {
  console.log(error);
  process.exit(2);
}
