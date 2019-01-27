
//Operators 
/*
Operators basically determine which operation the program is going to perform, depending on 
which ones are used. 
*/

//1. Assignment Operators
/*
Assignment operators assign values to variables which act as containers for values, and these values 
which are stored in memory can be accessed by using the variable's name.
*/
//assigning a number to a variable
var myVar = 1;
//using let to assign a string to a variable
let myLet = "string";
//using const to assign an array to a variable
const myConst = [1, 2, 3];

//left side is the declaration, equal sign is the assignment operator, not to be confused with == or ===
//which are known as comparison operators

/*
They can also be reassigned while an arithmetic operation is occurring, and the side one places 
said operator determines whether the operation happens before or after code is run.
*/
let myNumber = 1;
myNumber += 1; //evaluates to 2, new value is the same before or after declaration
myNumber =+ 1 //evaluates to 2 if console.logged before assignment, 3 if console log after 
//assignment

//there are a few more of these: subtraction, multiplication, division, modulus, just to name a few.
myNumber /= 3; //evaluates to 1
myNumber *= 3; //evaluates to 3, 1 * 3 === 3
myNumber %= 2; //evaluates to 1, so new value is 1
myNumber -= -1; //evaluates to 2, so new value of mynumber is 2.


//2. Arithmetic Operators
/*
Arithmetic operators perform expressions on numeric values, evaluating to new values. 
If you were to use one on anything other than a number, in combination with a number, 
it results in NaN. They take 2 arguments, meaning they are binary operators.
*/
5 + 5; //evaluates to 10
5 * 5; //evaluates to 25
10 - 5; //evaluates to 5
10 / 5; //evaluates to 2
11 % 5; //evaluates to 1

//3. Comparison Operators 
/*
Comparison operators yield booleans. They can be either loose comparisons (==), or strict 
comparison (===), which takes into account the value type as well as the value itself. These 
evaluations are commonly used in control flow, in order to run code if something evaluates to a 
truthy value which will commonly be 'true'.
*/

5 === 5; //evaluates to true, same value, same type
5 === "5"; //false, same value, different type
5 == "5"; //true, same values, relaxed comparison disregards type of value
5 > 6; //evaluates to false, 5 is less than 6
5 >= 5; //evaluates to true, 5 is equal to or less than 5
5 != 5; //evaluates to false, because 5 is in fact equal to 5

//4. Logical Operators
/*
Logical operators also evaluate to true or false, similar to comparison operators. They involve 
comparisons, or the possible evaluation of multiple true or false values.
*/

//&& operator evaluates to true if both conditions evaluate to truthy values
if(1 > 0 && 3 > 2){
    return "These are both true!"; //this only runs because both values were evaluated to be truthy 
} 
//|| operator evaluates to true if either of 2(or more) conditions evaluate to truthy values
if(1 < 0 || 3 > 2){
    return "At least one of these are true!"; //this runs because one of the values is evaluated to be truthy
}

//5. Unary Operators
/*
Unary Operators take in one value, and they can either return the value, evaluate to truthy or falsy, 
or determine what type of value it is, etc. They are versatile and often change based on what data 
type you're working with.
*/
//incrementers are unary operators
let y = 1;
console.log(y++); //evaluates to 2;
let x = 1;
console.log(x--); //evaluates to 0;
typeof 1; //evaluates to 'number'
!true; //evaluates to false
-1; // - makes a number negative
//6. Ternary Operators
/*
Ternary operators operate on 3 values or arguments, to produce a new value.
*/
let age = 20;
(age > 20) ? "Go for it." : "Noperino."; //age is not over 20, so returns "Noperino".
//basically, if the input age(first argument), evaluates to truthy, it produces "Go for it."
//falsy evaluations lead to the value on the other side of the colon being produced.



