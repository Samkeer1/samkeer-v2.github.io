
/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

// 4. let //
if(x === y){ // basic example of block scope, the 'if statement'.
let myCar = "Foreign"; //declaration
let myCar = "Something else"; //reassignment doesn't work with constants, you get a "duplicate declaration error"
myCar = "Foreign"; //declared globally, overwrites myCar as a global variable. no longer scoped
}

//5. Const
/*
Const declares a constant value that cannot be changed or reassigned, and is constrained to 
it's block or function scope. The only way to change a value assigned to const, is if const is 
assigned to a variable that is mutable.
*/
const unChangeable = 1;
const unChangeAble += 1; //doesn't work, results in error.

var xyz = [1, 2, 3];
const someWhatChangeable = xyz; 
console.log(someWhatChangeable); //returns [1, 2, 3];
xyz.push(4);
console.log(someWhatChangeable); //returns [1, 2, 3, 4];
//this works because it's referring to a complex data type, if the const were set equal to a 
//primitive data type, it wouldn't be mutable.

//6. Hoisting
/*
Hoisting is the process of hoisting variable and function declarations to the top of their scope.
This is done by the interpreter, before the code is run. The difference between variable hoisting and function hoisting is 
when a function is interpreted, the entire function body is brought to the top of the scope. With variables, 
only the declaration is hoisted without its value. This is why it's good practice to declare all neccessary variables 
towards the top of the code you're writing.
*/

function hoistAllDay(x){
    return x + 2;
}
hoistAllDay(hoistMe); //results in undefined, because the code is interpreted like this:
let hoistMe = 2; 

//function hoistAllDay(x){
//   return x + 2;
//}
hoistAllDay(hoistMe);
let hoistMe;

//then the code is run like this:
hoistAllDay(undefined){
    return undefined + 2; //result is NaN because let hoistMe = 2 wasn't declared until after the function.
}

//7. Scope
/*
Scope and hoisting go hand in hand, because hoisting involves not only the global scope, but local scopes too.
So we know that functions and variables get hoisted to the tops of their scopes, not always the global scope.
Scopes, however, have somewhat of a juristiction. Parent scopes don't have access to variables declared within their child scopes, 
but conversely child scopes have access to data outside their scopes. Variables declared in block scope, not neccessarily function scope 
are hoisted above and beyond their scope. Function scope, however, doesn't allow any variables declared within 
it's block code to exit. Functions, however, have access to all variables in the global scope. There can be 
as many nested scopes as a function requires to achieve its purpose, each following suit. 
Child scopes have access to all their parent scopes, none of the parents have access to their 
child scopes.
*/



//Global vs Local scope
/*
The global scope, otherwise known as the window, has a wide variety of properties that are built in, 
so this is why declaring variables with let and const are important. Var declarations can override 
current variable assignments, leading to potential pitfalls. The window can be seen as the entire picture, 
with every local scope within it having access to all it's information. 

Local scope, however, refers to code declared within the global scope either within a function, or a block 
of code that the window has no access to.
*/

let globalScope = "I'm globally accessible.";

function localScope(x){
    var newX = x;
}
localScope(globalScope);
console.log(newX); //returns undefined, because var is function scoped. 
//within the function, if you were to console.log(newX), it would show up as "I'm globally accessible."

let x;
if(x === undefined){
    let z = 5; //this code is executed, however let is block scoped, so the global scope will not have 
    //access to variable z.
    var y = 10; //var is function scoped, but not block scoped, so y is now a globally accessible 
    //variable
}