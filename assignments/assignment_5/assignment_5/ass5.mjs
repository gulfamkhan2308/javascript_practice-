// class Shap{
//     constructor(area){
//         this.area= area;

//     }
// }

class Shape {
    calculateArea() {
        
    
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    calculateArea() {
        return 22/7 * this.radius ** 2;
    }
}

class Triangle extends Shape {
    constructor(base, height) {
        super();
        this.base = base;
        this.height = height;
    }

    calculateArea() {
        return 1/2 * this.base * this.height;
    }
}

// Create an instance of the Circle class
let myCircle = new Circle(5);
console.log(`Circle Area: ${myCircle.calculateArea()}`);

// Create an instance of the Triangle class
let myTriangle = new Triangle(4, 6);
console.log(`Triangle Area: ${myTriangle.calculateArea()}`);
