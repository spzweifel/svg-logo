class Shapes {
    constructor() {
        this.shape_color = ""
    }
    setColor(color){
        this.shape_color = color
    }
}


    
    
//export classes triangle, circle, and square
    
    

class Triangle extends Shapes {
    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shape_color}"/>`
    }
}

class Square extends Shapes {
    render(){
        return `<rect width="100" height="100" fill="${this.shape_color}" />`
    }
}

class Circle extends Shapes{
    render(){
        return `<circle cx="50" cy="50" r="40" stroke-width="3" fill="${this.shape_color}" />`
    }
}

module.exports = {Triangle, Square, Circle}



// these can be used for the tests
// const triangle = new Triangle()
// triangle.setColor(`${shape_color}`)
// expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="${shape_color}"/>')

// const square = new Square()
// square.setColor(`${shape_color}`)
// expect(square.render()).toEqual('<polygon points="" fill="${shape_color}"/>')

// const circle = new Circle()
// circle.setColor(`${shape_color}`)
// expect(circle.render()).toEqual('<polygon points="" fill="${shape_color}"/>')

// () {
//     fs.writeFile("logo.svg", `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    
 //     </scg>`, (err) => err ? console.log(err) : console.log("logo created"))

