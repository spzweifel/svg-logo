const inquirer = require("inquirer");
const {Triangle, Square, Circle} = require("./lib/shape")
const fs = require("fs");
class Logo {
  constructor() {
    this.text = "";
    this.shape = "";
  }
  setText_color(initials, color){
    this.text = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${initials}</text>`
  }
  setShape(shape){
    this.shape = shape.render();
  }
  render(){
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.text}${this.shape}</scg>`
  }
}




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
      fs.writeFile("logo.svg", answers, (err) => 
      err ? console.log(err) : console.log("logo created")
      )
    });
};




questions();