const fs = require('fs');

// Create a book object
const book = {
    title: "The Lost Numbers",
    author: "J.J. Abrams",
    year: 2004
};

// Convert object to JSON string
const jsonString = JSON.stringify(book, null, 2);

// Save to file
fs.writeFileSync('book.json', jsonString);

console.log('Book object created and saved to book.json:');
console.log(jsonString);

// Read the JSON file
const fileContent = fs.readFileSync('book.json', 'utf8');

// Parse JSON string back to object
const parsedBook = JSON.parse(fileContent);

console.log('\nReading and parsing the JSON file:');
console.log('Parsed book object:', parsedBook);
console.log('Book title:', parsedBook.title);
console.log('Book author:', parsedBook.author);
console.log('Book year:', parsedBook.year);

// Update the year
parsedBook.year = 2005;

// Convert updated object back to JSON string
const updatedJsonString = JSON.stringify(parsedBook, null, 2);

// Save the updated JSON back to file
fs.writeFileSync('book.json', updatedJsonString);

console.log('\nUpdating the book year and saving changes:');
console.log('Updated JSON:', updatedJsonString);

