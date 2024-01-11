class Shape {
    constructor() {
      this.color = '';
    }
  
    setColor(color) {
      this.color = color;
    }
  
    render() {
      // Implement render method in child classes
      throw new Error('Method not implemented');
    }
  }
  
  module.exports = Shape;