const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path'); // Added path module
const Triangle = require('./lib/Triangle');
const Circle = require('./lib/Circle');
const Square = require('./lib/Square');

async function runApplication() {
  try {
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

    let shape;

    switch (shapeResponse.shape) {
      case 'circle':
        shape = new Circle();
        break;
      case 'triangle':
        shape = new Triangle();
        break;
      case 'square':
        shape = new Square();
        break;
      default:
        throw new Error('Invalid shape selected');
    }

    shape.setText(textResponse.text);
    shape.setTextColor(textColorResponse.textColor);
    shape.setShapeColor(shapeColorResponse.shapeColor);

    const svgContent = shape.render();

    // Modified to save in the examples folder
    const outputPath = path.join(__dirname, 'examples', 'logo.svg');
    fs.writeFileSync(outputPath, svgContent);

    console.log(`Generated ${outputPath}`);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

runApplication();