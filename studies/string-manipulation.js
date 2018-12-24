//String Manipulation
/*
String manipulation can involve methods, operators, assignment, etc. There are many useful 
ways to manipulate strings to meet the needs of most issues.

Strings, despite being primitive data types, are accessed in a similar manner to arrays: 
bracket notation. 
*/
 
//1. String Manipulation with Operators
/*
One can do many things with operators, and strings can also be manipulated using them. 
One can use assignment operators, logical operators, arithmetic operators, etc. to manipulate strings 
in any way imaginable.
*/
let x = "I am a very well written String!";
x + " I might just be the best string ever created... just wow."; //arithmetic operator

//assignment operator:
x += " But I am just a string nonetheless..."; //changes the string x is set to.

//2. Escaping from the Text
/*
In order to write certain characters within strings, such as apostrophes, slashes, new lines, etc.,
one must understand the syntax involved in doing so. Let's say we need to post a hyperlink in 
our string, how would we do this? Escape the text.
*/
let newX = "I\'m a new\n line of \'text\'.";
newX; //evaluates to:
//I'm a new
// line of 'text'.

//There are many more examples of escaping the text, but those are some basics.

//3. Regular expressions
/*
Regular expressions are ways of manipulating characters, text, numbers, etc. They are also very 
helpful with string manipulation. The replace function allows us to pinpoint characters we want to 
ignore, change, change all of, change some of, do whatever we want to with; and replace them with whatever we want.
*/

let newY = "I\'m about to be manipulated.";
let newY1 = newY.replace(/ /g, "+"); //replaces all instances of spaces in this string with "+"s.
console.log(newY1); //yields "I'm+about+to+be+manipulated."

//4. Manipulation via String Methods
/*
Strings have many built in functions called methods. There is, of course, string.length which is a property 
as indicated by it being preceded by dot notation. If it's not clear by now, everything is pretty much an object 
and objects, like everything else, have built in properties and methods. These are going to be 
your bread and butter when it comes to string manipulation, but I'm just going to cover some 
simple ones to give someone new to this a basic understanding.
*/

let myNewString = "I am going to be manipulated to the point of no return.";
myNewString.toLowerCase(); //sets every letter to lower case
myNewString.charAt(0).toUpperCase(); //set the first letter back to uppercase
myNewString.startsWith("I"); // returns true
myNewString.slice(29); //cuts the string before the 29th character off // returns "point of no return."
myNewString.split(""); //turns the string into an array with each character representing an 
//individual element in the array.
"This String".concat(" Is", " A", " Very", " Nice", " String"); //returns
//"This String Is A Very Nice String".
myNewString.charAt(myNewString.length - 1); // returns ".", for it's the last letter in the string.

//To conclude, strings are manipulatable in very similar ways to arrays but it's important to differentiate 
//the methods and properties each have, because they are also very different data types.