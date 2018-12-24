//Functions

//1. Function Declaration!
/*
The two steps to using functions are declaration/definition, and invoking/calling/running said function.
Functions are reusable blocks of code that perform behaviors.
They are called/run/invoked by writing the function name followed by a pair of open and closed parentheses "()"
If they take arguments(if they have parameters), the arguments go within this pair of parentheses.
*/
//declaration, relevant name, parentheses, parameter x serves as placeholder for any arguments
function returnX(x){
    //function body inside curly braces
    //return x
    return x;
    //closing curly brace to close function block/scope
}

//2. Parameters vs Arguments
/*
Parameters serve as placeholders for arguments to be passed to the function. 
Everything that has the same symbol as the parameters assume the value of the argument passed 
to the function.

That being said, arguments are the values the parameters serve as placeholders for, to be run through 
the function's code.
*/

//param1 and param2 are plaecholders for the first input value(or argument) to have the second argument
//subtracted from it
function param(param1, param2){
    return param1 - param2;
}

//arguments are 3 and 2, resulting in 1 because 3 is passed to param1 and 2 is passed to param2
param(3, 2); 

//3. Named function
/*
Instead of a function assigned to a variable, a named function is declared by stating function and then 
the function's name, followed by the usual: parentheses, parameters, and the function's code block.
*/

//function assigned to variable
//requires semicolon on end of block statement as is the case with normal variable declaration
let plusOne = function(x){
    return x + 1;
};
//function declared as function, no semicolon required after function code block
function plusTwo(x){
    return x + 2;
}

//4. Function assignment to variable
/*
We just covered this in 3, but if we really need to go over it again, to assign a function to 
a variable, we declare a variable, and assign a function to it.
*/
//let is the variable declaration, plusOne is the variable name, it's assigned a function that returns 
//the argument plus 1
let plusOne = function(x){
    return x + 1;
};

//5. Whether or Not A Function Requires Arguments
/*
Does a function require arguments? Yes and no!
If a function takes parameters, has no defaults set to the parameters, and has no control flow telling 
the function what to do in the case that there is an undefined parameter, the results will be undefined.

There are functions that perform tasks and require no input, and these functions don't require parameters.

Parameters are basically variables. If you don't assign them or set them to anything, they're undefined.
*/

//makeQuote takes a parameter, but if its not given any arguments, it'll evaluate to undefined
//therefore, returning the first block of code.
function makeQuote(x){
    if(x === undefined){
        return "True bliss comes from within.";
    }
  return "The meaning of life is: " + x;
}
//this function won't yield undefined unless x is assigned to undefined, this is a default parameter
function makeQuotev2(x = "Wow what a great quote"){
    if(x === undefined){
        return "True bliss comes from within.";
    }
  return x;
}

//6. Scope
/*
functions produce their own local scope, variable declaration within cannot be accessed outside the function scope unless 
special circumstances occur, such as closures. Global scopes cannot access data within 
function scopes, but functions can access data from the global scope. 
There can be infinite nested scopes, all with access to everything outside them, but everything 
outside a scope has no access to the code within.
*/
function nestScope(b){
    let q = 2 + b;
    return (x) => x + q;
}
//as demonstrated above, function nestScope has a function nested within the parent function.
//the nested function has access to q, but the outer function has no access to variable x.
//if it were to be called in a piece of the parent function, it would yield a reference error!

//7. Closures
// these two needs must be met for a closure to work:
//Closures are functions with access to variables within their parent scope(another function)
//after the parent function has closed.

function makeClosure(){
    let outerVar = 3;
    return () => outerVar + 5;
}
//if I were to call makeClosure(), i would get [function] because it takes no parameters.
//if I were to call makeClosure()(), i would return 8 because I called a function
//that returns a function, and called that function with my second set of parentheses.

//first class functions are functions that either take a function as a parameter or return functions
function baseMultiply(base){
    return (x) => x * base;
}

let base3 = baseMultiply(3); //returns function where base is 3, x is parameter

//base3 would be equal to (x) => x * 3, because base has been set to 3 in this case

base3(2); //evaluates to 6, because 2 is multiplied by the base set to 3

//8. Higher Order Functions
/*
Higher order functions either take a function as an argument, or return functions.
They can be used to do anything, from manipulating complex data to filtering primitive data types.
*/

//array containing 1, 2, 3
let p = [1, 2, 3];

//higher order function that takes a function with parameters representing previous and current
//values. Reduce has the ability to reduce a data set to a single value, by manipulating 
//the data in any desired fashion.
p.reduce(function(prev, curr){
    return prev + curr;
}, 0); 
//returns 6, because seed(the 3rd parameter) is set to 0, which acts as the first value of previous,
// then the first current value is 1, to be added to 0, which becomes the next prev value.
//from there, 2 is added to the previous value of 1, making 3. From there, 3 is added to the previous value 
//of 3, making the final reduction of every value in this array 6 by using simple addition.