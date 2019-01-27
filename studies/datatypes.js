//Datatypes
/*
Datatypes are a variety of pieces of data which are stored in memory. They are stored within variables 
which act like boxes for data. Primitive data types are limited in the amount of memory they can occupy per 
variable, whereas complex datatypes can take up as much memory as they want. They are also accessed in 
different ways: primitive datatypes are copied by value, which means whenever you assign a variable to 
an existing primitive datatype containing variable, it'll create a new copy of that data as opposed to 
complex datatypes, which point to the place in the program's memory where the complex datatype is located. 
This means, one must be careful when altering complex datatypes because they can alter two different variables 
if they're both pointing towards the same place in memory.
*/

//1. Number
/*
Numbers are primitive data types that can be used to identify places in an indexed list,
they can be compared to one another to evaluate to a truthy or falsy value, or evaluated in expressions
to result in new numbers. They can also be assigned to variables. They can also be used for dates.
*/
//number assigned to variable num:
let num = 1;

//2. Strings
/*
Strings are primitive data types that contain characters within single or double quotes. 
They have many of their own properties and methods, and an important one is to escape the
text, or to insert quotes inside a string, the quotation marks need to be the opposite of the 
kind of quotation marks used to create the string.
*/
//Example:
//str is declared, this is easily identifiable as a string due to its quotation marks.
//The word "I'm" uses string escape syntax to insert a single quote, the word
//"Stringy" uses single quotes to produce a word in quotes if str is called.
let str = "Hi, I\'m 'Stringy'"; //it is worth noting that the escaped sequence (') is not a part 
//of str; it does, however, alter the way the string appears when logged, or returned.
//3. Boolean
/*
A Boolean is a primitive data type that is a value of either true or false. Comparison
operators yield this type of data. Evaluations to these values in the context of control flow 
can determine which blocks of code are run.
*/
//Example:
2 === '2'; //evaluates to false because 2 isn't "2"
2 > 1; //evaluates to true because 2 is greater than 1

//4. Array
/*
Array is a complex data type that is a "0"-indexed list, meaning the "0th" spot within an array
is going to be its first value. Similar to strings, elements(or spots within the array/ items within the array)
can be accessed using bracket notation with the index number to access that element. Given that 
arrays are complex data types, they can hold an unlimited number of elements.
*/
let arr = [5, 4, "3", "two", 1];
arr[0] === 5; //evaluates to true
arr[arr.length - 1]//evaluates to 1, because arrays have a .length property that starts at the 
//index of 1, so to access the last element of a 0 indexed array, one needs to subtract 1 
//from the end.
arr[arr.length] //evaluates to undefined

//5. Objects
/*
Object literals are complex data types, consisting of unordered key : value pairs. They
are identifiable by being enclosed in a set of curly braces "{ }" and key : value pairs within.
To access the contents of an object, one can use either bracket notation or dot notation.
*/

let obj = {age: 55, nameFirst: "Humphrey", nameLast: "Swaggins" };
obj.age === 55; //evaluates to true
obj['nameFirst']; //evaluates to "Humphrey"
Object.keys(obj); //evaluates to ['age', 'nameFirst', 'nameLast']

//6. Functions
/*
Functions are another complex data type that are declared by stating function, then an optional name,
 then a pair of parentheses containing optional parameters to serve as placeholders for arguments 
 to be passed to the function. Within the function block, which is a local scope, meaning the code within 
 has access to the global or its parent scope, whereas the global scope doesn't have access 
 to the sweet, sweet variables and code within. Functions can do anything from taking other 
 functions as input or producing them as output, as is the case in first class functions, 
 to simply console logging or returning whatever the input is.
*/

//function declaration, name, parentheses with parameter within
function firstClass(base){
    //returns anonymous function evaluating the new paremeter to the power of whatever the base it set to
    return (q) => q ** base;
}

let power3 = firstClass(3);

power3(3); //evaluates to 3 to the 3rd power

//7. Undefined
/*
Undefined stands for the lack of definition of a data type. 
*/

1 / '2' === undefined //evaluates to true, because you cannot divide a string by a number
var z; 
console.log(z); //evaluates to undefined because z is declared but not defined
console.log(f); //(not sure if f is a global variable, but this is just for example!)
//console.logging f evaluates to a reference error because f hasn't even been declared

//the difference between a reference error and undefined, is the acknowledgement of the presence 
//of what's being referred to, but also the absence of a defined data type in it's container.
function returnUndef(){
    let x;
    return x;
}
//this function declares a variable 'let x;', then returns this variable without it being assigned to 
//anything. Therefore, it returns undefined.

//8. Null
/*
Null is a primite data type, placed where one wants to intentionally set an object to nothing.
It is inequal to undefined, so for the sake of control flow, variables can be set to this value 
in order to prevent the code blocks that are to be executed in the case of undefined from executing.
*/

let n = null;

if(n === undefined){
    return "I'm such a string, wow!";
}else{
    return n;
}
//this assignment prevents the n === undefined code block from executing.

//9. NaN
/*
NaN stands for "not a number", and it's the result of using a character that isn't a number 
where a parameter is supposed to be a number, or where an expression includes numbers and a 
different type of character is included.

To avoid this, there is a method called isNaN() that takes in a character, or characters as a parameter
 and evaluates to true or false based on whether it is or isn't a number.
*/
isNaN(5); //evaluates to false because 5 is a number
isNaN("Q"); //evaluates to true because "Q" isn't a number

//10. Infinity vs -Infinity
/*
Infinity stands for the highest possible number, and is to be used when evaluating a number or list that has no upper limit.
Conversely, -Infinity stands for the lowest possible number, and is used when evaluating a number or list
in comparison to the lowest possible number.

If one wanted to find the highest possible number in an array, one could start by comparing each 
element to -Infinity and positively incrementing their way through the numbers.

If one wanted to find the lowest possible number in an array, one could start by comparing 
each element to Infinity and negatively incrementing their way through the numbers.
*/

//11. Complex vs Primitive Values
/*
 Primitive values have a maximum size, and are copied by value whereas complex
 values have no maximum limit to size, and are accessed by referring to the place in memory 
 where they are stored. 
 
 Primitive values are immutable, meaning they can't be changed. They can be reassigned. Complex 
 values are mutable, meaning they can, in fact, be changed in their exact place in memory.
 
 Primitive values include numbers, booleans, undefined, null, strings, and more.
 Complex values include arrays, objects, and more.
*/

//Copy by Reference vs Copy by Value

//primitive data types make completely new copies when passed to a function, 
//but complex data types are simply pointed at wherever they're stored in memory
let x = 1;
let y = x;
// due to the nature of primitive data types, y will simply be coping x, or creating a completely new
// value.
//This means that if you set x to something completely different after copying x's value to y, 
//y wouldn't be changed.

//complex data types are very different.
//instead of a direct copy of information, if you were to assign a variable to a preexisting complex
//data type, it would simply refer to it's place in memory.
//This means that if you assign x to a complex data type, x isn't copying the data, but refering to it's place in memory
//example:
let arr2 = [1, 2, 3];
let arr3 = arr2;
arr3.shift(); //removes the first element of arr(and also returns 1 but that's besides the point),
//They are both pointing to the same piece of data in memory so now both arr2 and arr3 === [2, 3]


