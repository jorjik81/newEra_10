const inquirer = require('inquirer');
const fs = require('fs');
const Triangle = require('./Triangle');
const Circle = require('./Circle');
const Square = require('./Square');

async function promptUser() {
  // Implement user prompts using inquirer
  // ...

  // Return user input
  return {
    text: '', // user input for text
    textColor: '', // user input for text color
    shape: '', // user input for shape
    shapeColor: '', // user input for shape color
  };
}

function generateSVG(userInput) {
  // Generate SVG content based on user input
  // ...

  // Return the SVG content
  return '<svg width="300" height="200">' + /* ... */ + '</svg>';
}

function saveSVG(svgContent) {
  // Save the SVG content to a file named 'logo.svg'
  fs.writeFileSync('./logo.svg', svgContent);
}

(async () => {
  try {
    const userInput = await promptUser();
    const svgContent = generateSVG(userInput);
    saveSVG(svgContent);
    console.log('Generated logo.svg');
  } catch (error) {
    console.error('Error:', error.message);
  }
})();