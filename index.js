const inquirer = require("inquirer");
const fs = require("fs");

const questions = () => {
  return inquirer
    .createPromptModule([
      {
        // here, make it so only three letters can be entered.
        type: "input",
        name: "initials",
        message: "please, enter three letter insitials",
      },
      {
        // i think editor is used here because it's changing the color of the text. Research this
        type: "editor",
        name: "text_color",
        message: "Please, enter a color or hexadecimal value for the text",
      },
      {
        type: "list",
        name: "shape",
        message: "Please, select a shape.",
        choices: ["circle", "triangle", "square"],
      },
      {
        // i think editor is used here because it's changing the color of the shape. Research this
        type: "",
        name: "shape_color",
        message: "Please, enter a color or hexadecimal value for the text",
      },
    ])
    .then((answers) => {
      console.log(answers);
      
    });
};

questions();
