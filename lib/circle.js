const Shape = require('./shape.js');

//child of shape
class Circle extends Shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
    };
    render() {
        
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    
    };
};

module.exports = Circle;