const inquirer = require("inquirer");
const fs = require("fs");

const questions = () => {
  return inquirer.prompt([
      {
        // here, make it so only three letters can be entered.
        //look up validate in inquirer documentation
        type: "input",
        name: "initials",
        message: "please, enter three letter initials",
      },
      {
        // i think editor is used here because it's changing the color of the text. Research this
        type: "input",
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
        // i think editor is used here because it's changing the color of the shape. Research this. Don't use editor
        type: "input",
        name: "shape_color",
        message: "Please, enter a color or hexadecimal value for the text",
      },
    ])
    .then((answers) => {
      console.log(answers);
      const svgLogo = genSvg(answers)
      writeToFile(`logo.svg`, svgLogo)
    });
};

function writeToFile(filename, data) {
  fs.writeFile(filename, data, function(err){
    console.log('svg file generated')
  })
}


questions();

//put these in the shapes.js folder
const triangle = new Triangle()
triangle.setColor(`${shape_color}`)
expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="${shape_color}"/>')

const square = new Square()
square.setColor(`${shape_color}`)
expect(square.render()).toEqual('<polygon points="" fill="${shape_color}"/>')

const circle = new Circle()
circle.setColor(`${shape_color}`)
expect(circle.render()).toEqual('<polygon points="" fill="${shape_color}"/>')