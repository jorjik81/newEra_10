const Triangle = require('./Triangle');
const Circle = require('./Circle');
const Square = require('./Square');

test('Triangle render method', () => {
  const triangle = new Triangle();
  triangle.setShapeColor('blue');
  expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
});

test('Circle render method', () => {
  const circle = new Circle();
  circle.setShapeColor('red');
  expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
});

test('Square render method', () => {
  const square = new Square();
  square.setShapeColor('green');
  expect(square.render()).toEqual('<rect x="50" y="50" width="200" height="200" fill="green" />');
});