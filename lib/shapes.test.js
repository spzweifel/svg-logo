const { Triangle, Square, Circle } = require("./lib/shape");


Test('triangle class is present', () => {
    expect(check1(shapes)).toBe(Triangle)
})
//The application must include `Triangle`, `Circle`, and `Square` classes, as well as tests for each of these classes using Jest. While not a requirement, it is recommended that you place any common functionality and properties shared by the `Triangle`, `Circle`, and `Square` classes in a parent `Shape` class and use inheritance to reuse the code in the child classes.

// Each shape class should be tested for a `render()` method that returns a string for the corresponding SVG file with the given shape color.