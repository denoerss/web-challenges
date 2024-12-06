console.clear();

/*
1: Create the data for a book in an online store. Define variables for the following details:
  - The title of the book
  - The author of the book
  - The book's rating
  - The number of copies sold
*/

// --v-- write your code here --v--
const title = "What is Media Archaeology?";
const author = "Jussi Parikka";
let rating = 4.2;
let copiesSold = 2545;
// --^-- write your code here --^--

/*
2: Log all variables to the console, for example:

Title: The Lord of the Javascript
Author: Mario
Rating: 4.2
Sales: 120

Then:
- Increase the number of sales.
- Update the book's rating.
- Log all variables to the console again after making these updates.
*/

// --v-- write your code here --v--
console.log(
  "LOG 1_ALL VARIABLES",
  "Title:",
  title,
  "/ Author:",
  author,
  "/ Rating:",
  rating,
  "/ Copies Sold:",
  copiesSold
);

copiesSold += 143;
rating = 4.3;

console.log(
  "LOG 2_INCREASED #1",
  "Title:",
  title,
  "/ Author:",
  author,
  "/ Rating:",
  rating,
  "/ Copies Sold:",
  copiesSold
);
// --^-- write your code here --^--

/*
3: The logging code above is repetitive and hard to maintain.
   Refactor your code by doing the following:

 - Write a function called `logBookData` that logs all the book details to the console.
 - Replace the existing `console.log` statements with calls to this function.
 - Then, increase the number of sales two more times and log the updated details after each increase.
*/

// --v-- write your code here --v--
function logBookData(title, author, rating, copiesSold) {
  console.log("Title:", title);
  console.log("Author:", author);
  console.log("Rating:", rating);
  console.log("Copies Sold:", copiesSold);
}

console.log("LOG 3_FUNCTION-LOG");
logBookData(title, author, rating, copiesSold);

rating = 3.2;
copiesSold += 12;

console.log("LOG 4_INCREASED #2");
logBookData(title, author, rating, copiesSold);

rating = 3.5;
copiesSold += 34;

console.log("LOG 5_INCREASED #3");
logBookData(title, author, rating, copiesSold);
// --^-- write your code here --^--
