const inquirer = require("inquirer");
const { Triangle, Square, Circle } = require("./lib/shape");
const fs = require("fs");
// class Logo {
//   constructor() {
//     this.text = "";
//     this.shape = "";
//   }
//   setText_color(initials, color) {
//     this.text = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${initials}</text>`;
//   }
//   setShape(shape) {
//     this.shape = shape.render();
//   }
//   render() {
//     return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.text}${this.shape}</scg>`;
//   }
// }

const questions = () => {
  return inquirer
    .prompt([
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
      let shape;
      switch (answers.shape) {
        case "circle":
          shape = new Circle(answers.shape_color);
          break;
        case "triangle":
          shape = new Triangle(answers.shape_color);
          break;
        case "square":
          shape = new Square(answers.shape_color);
          break;
      }
      const solution = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${shape.render(answers.shape_color)}
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${
          answers.text_color
        }">${answers.initials}</text>
      </svg>`;
      const name = "logo.svg";
      writeFile(name, solution);
      return solution;
    });
};

//     function genTemplate(Triangle, Square, Circle) {
//       answers.text =
//     }
// };

function writeFile(name, solution) {
  fs.writeFile(name, solution, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("logo created");
    }
  });
}

questions();

//jest is installed. Should run code using jest

// ask jaime why this isn't working.
// ${shape.render(answers.shape_color)}
