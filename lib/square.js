const Shape = require('./shape.js');

//child of shape
class Square extends Shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
    };
    render() {
        return 
        return `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`;
    };
};

module.exports = Square;