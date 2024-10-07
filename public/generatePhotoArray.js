const fs = require('fs');
const path = require('path');
const sizeOf = require('image-size');

// Directory containing your images
const imgDir = "./photos/optimized-images-jpg/";
const outputFilePath = './photosObj.js';
const orderFilePath = './photosArr.js';

// Read the order file
const orderFileContent = fs.readFileSync(orderFilePath, 'utf8');
const orderArray = eval(orderFileContent.replace('export const photos =', ''));

// Read the directory and filter out only .jpg files
const availablePhotos = fs.readdirSync(imgDir).filter(file => file.endsWith('.jpg'));

// Create a map of filename to image object
const photoMap = availablePhotos.reduce((acc, filename) => {
  const filepath = path.join(imgDir, filename);
  const dimensions = sizeOf(filepath);
  
  acc[filename] = {
    src: `/photos/optimized-images-jpg/${filename}`,
    alt: '', // Customize alt text as needed
    width: dimensions.width,
    height: dimensions.height
  };
  
  return acc;
}, {});

// Create the ordered array of image objects
const orderedImageObjects = orderArray
  .filter(filename => photoMap[filename]) // Filter out any filenames not found in the directory
  .map(filename => photoMap[filename]);

// Write the array to a new JS file
const outputContent = `export const photos = ${JSON.stringify(orderedImageObjects, null, 2)};`;

fs.writeFileSync(outputFilePath, outputContent, 'utf8');

console.log(`Ordered photo array written to ${outputFilePath}`);