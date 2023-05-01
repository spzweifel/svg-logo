const { Triangle, Square, Circle } = require(".shape.js");

describe('shapes', () => {
    describe("Triangle", () => {
        it('should have a render method present', () => {
            const triangle = new Triangle()
            triangle.setColor(`${shape_color}`)
            expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="${this.shape_color}"/>')
        })
    })
})


// these can be used for the tests


 const square = new Square()
 square.setColor(`${shape_color}`)
 expect(square.render()).toEqual('<polygon points="" fill="${shape_color}"/>')

 const circle = new Circle()
circle.setColor(`${shape_color}`)
 expect(circle.render()).toEqual('<polygon points="" fill="${shape_color}"/>')















// Test('triangle class is present', () => {
//     expect(check1(shapes)).toBe(Triangle)
// })




//The application must include `Triangle`, `Circle`, and `Square` classes, as well as tests for each of these classes using Jest. While not a requirement, it is recommended that you place any common functionality and properties shared by the `Triangle`, `Circle`, and `Square` classes in a parent `Shape` class and use inheritance to reuse the code in the child classes.

// Each shape class should be tested for a `render()` method that returns a string for the corresponding SVG file with the given shape color.