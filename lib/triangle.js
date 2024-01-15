const Shape = require('./shape.js');

//child of shape
class Triangle extends Shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
    };
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
    };
};

module.exports = Triangle;