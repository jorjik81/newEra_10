const inquirer = require('inquirer');
const { Triangle, Circle, Square } = require('./lib/shapes');

async function runApplication() {
  // TODO: Implement the logic to collect user input and generate the logo

  // Example usage:
  const textResponse = await inquirer.prompt({
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters for the text:',
    validate: (input) => input.length > 0 && input.length <= 3,
  });

  const textColorResponse = await inquirer.prompt({
    type: 'input',
    name: 'textColor',
    message: 'Enter a color keyword or hexadecimal number for the text color:',
  });

  const shapeResponse = await inquirer.prompt({
    type: 'list',
    name: 'shape',
    message: 'Choose a shape:',
    choices: ['circle', 'triangle', 'square'],
  });

  const shapeColorResponse = await inquirer.prompt({
    type: 'input',
    name: 'shapeColor',
    message: 'Enter a color keyword or hexadecimal number for the shape color:',
  });

  // TODO: Create an instance of the selected shape class (Triangle, Circle, or Square)
  // and set the text, textColor, and shapeColor properties.

  // TODO: Call the render() method of the shape instance to get the SVG content.

  // TODO: Write the SVG content to a file named 'logo.svg'.

  console.log('Generated logo.svg');
}

runApplication();