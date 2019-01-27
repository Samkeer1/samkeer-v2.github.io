
//Loops
/*
Loops cycle though specified numbers or any type of data until a return or a break statement occurs.
Without a stop condition, and an incrementer, the same value will repeat infinite times, or infinite values 
will be produced, also known as the dreaded infinite loop. This crashes a program.
*/

//1. While loops
/*
While loops continue to loop through data, at a specified rate of incrementation, from a specified 
starting point, until a stopping condition is met.
*/
//If I wanted to count from 1 to 10 using a while loop, I would set my starting number 
//to 0, declare my stopping position 10 by saying continue to loop while the count is under 10.

let i = 0;
while(i < 10){
  i++;
    console.log(i); //if the console.log were before the incrementer added 1, it would produce 0-9
    //this while loop ultimately evaluates to 10, because while i is less than 10, it gets 
    //1 added to it each iteration. You can change the incrementer as well to count by whatever 
    //you want by using the i += (any number here);
}

//2. For loops
/*
For loops are just like while loops but slightly faster. They are declared similarly to while 
loops but the starting variable, the stopping condition and the incrementer are all declared 
within parentheses.
*/

for(let i = 0; i < 10; i++){
    console.log(i);
}
//in this case, it starts at 0, because the incrementer comes after the first console.logging of 
//i. then, while i is under 10, one is added to the previous value for i until it meets that condition.

//3. For in loops
/*
For in loops are used on objects, or lists with variables containing values, also known as keys. 
They loop through all of them.
*/
let obj1 = {nameFirst: 'Sam', nameLast: 'Keer'};

for(let key in obj1){
    console.log(key);
}
//this produces nameFirst, nameLast, or the names of the keys.
//to produce the values, we use bracket notation :
for(let key in obj1){
    console.log(obj1[key]);
}
//this produces the values contained within the keys, logged to the console
// 'Sam' 'Keer'

//4. Incrementing forwards vs backwards
/*
Sometimes we might want to count backwards from a higher value to a lower value. Sometimes we 
might want to count from a lower value upwards. This all can be done using either positive 
incrementation or negative incrementation, combined with starting positions and stop conditions.
*/

//positive incrementation, 1-10:
for(let i = 1; i < 11; i++){
    console.log(i); //produces 1- 10 counting upwards
}
//negative incrementation, 10-1:
for(let i = 10; i > 0; i--){
    console.log(i); //notice how the stop condition is while i is greater than 0. This makes the 
    //last console logged value 1, and the incrementer being negative leads to counting downwards 
    //in increments of 1.
}

//5. Looping over an Array
/*
Arrays are 0 indexed lists, so using bracket notation in combination with a for loop, we can 
incorporate iteration into the position of an array, and access it using the counter 
alongside bracket notation to represent each position of the array. Instead of setting a numeric 
stopping position, if we want to access each element in an array we need to use the length property 
of an array to stop at the very end, that way we don't just end up guessing where to stop.
*/

let myArr1 = [1, 2, 3, 'pickles', {1: "2", 2: "1"}];

for(let i = 0; i < myArr1.length; i++){
    console.log(myArr1[i]); //this produces each element of the array due to the variable in brackets 
    // representing each position in the array, to be console logged for the length of the array.
}

//6. Looping over an Object
/*
We already covered this, but to loop through an object, we can use a For in loop and access the values, 
the elements, or the keys based on how we set up our loop.
*/

//accessing values:
let myObj1 = {3: "forty two", 4: "123", semi : "colon"};
for(let key in myObj1){
    console.log(myObj1[key]); //logs each value stored in each key 
    console.log(key); // logs 3, 4, semi
}
//this is the 'for in loop' we used earlier.

//you can also use the Object.keys function to display all keys, or the Object.values function to 
//display all values and assign them to variables as arrays.

Object.keys(obj1);
Object.values(obj1);