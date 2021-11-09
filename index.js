#!/usr/bin/env node
const figlet = require("figlet");
const chalk = require("chalk");

figlet(" Nazmi Feeroz ", (_, data) => {
  console.clear();
  console.log(chalk.greenBright(data));

  console.log(`
    ${chalk.blue.bold.underline("Nazmi Feeroz")} \u2022 ${chalk.bold.yellow(
    "Software Consultant at Zenika"
  )}

    Nazmi is a full stack developer who is passionate about 
    creating user-friendly and performant web applications. 
    He is a strong advocate in clean code and managing states 
    with state machines.

    Creator of ${chalk.bold("Create Vite React CLI")} (${chalk.red.bold.italic(
    " npx create-vite-react "
  )}), 
    a react template configured with ViteJS, Typescript, 
    Eslint/Prettier and React Testing Library.

    ${chalk.italic(" P.S.: He is handicap without Vim! ")}
${chalk.dim(`
    Github: https://github.com/nazmifeeroz/
    Twitter: https://twitter.com/nazmifeeroz`)}
`);
});
