class Shape {
  constructor() {
    this.text = '';
    this.textColor = '';
    this.shapeColor = '';
  }

  setText(text) {
    this.text = text;
  }

  setTextColor(textColor) {
    this.textColor = textColor;
  }

  setShapeColor(shapeColor) {
    this.shapeColor = shapeColor;
  }

  render() {
    throw new Error('Method not implemented');
  }
}

module.exports = Shape;