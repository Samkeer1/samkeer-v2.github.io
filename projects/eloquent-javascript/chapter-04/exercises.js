////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, step) {
  //capture result to return
  let result = [];
  //if step is undefined and start is less than end, we iterate forwards
  if(start < end && step === undefined){ step = 1; }
  //if step is undefined and start is greater than end, we iterate backwards
  else if(start > end && step === undefined){ step = -1; }
  //if start is less than end and step is less than 0, it goes backwards instead of forwards to end
  else if(start < end && step < 0){ return []; }
  //if start is less than end, we iterate upwards to end and push numbers
  if(start < end){
    for(let i = start; i <= end; i += step){
      result.push(i);
    }
    //if start is greater than end, iterate starting at end and ending at start and push numbers
  } else if(start > end){
    for(let i = end; i <= start; i += step){
      result.push(i);
    }
  }
  //return result
  return result;
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array) {
return array.reduce(function(prev, curr){
  return prev + curr;
}, 0);
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) {
//use array method that doesn't alter given array(splice)
console.log(array);
let result = [];
   for(let i = array.length - 1; i >= 0; i--){
     result.push(array[i]);
   }
return result;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
for(let i = 0; i < array.length; i++){
  //starting at 0, pop off end and insert at current index. 
  //it will remove the last element from the array, as the array iterates forward.
  array.splice(i, 0, array.pop());
}
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
//base case is where list is null
let list = null;
//helpful to iterate backwards starting high and ending at undefined/null, so we hit our base case
//since arrays are 0 indexed
for(let i = array.length - 1; i >= 0; i--){
  //object structure
   list = {value: array[i], rest: list};
}
//return final value where list hits null after full loop
return list;
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list) {
  //initialization, condition, final expression/iterator
  let result = [];
for(let node = list; node; node = node.rest){
  console.log(node);
  result.push(node.value);
}
  return result;
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(e, list) {
   return {value: e, rest: list};
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, e) {
 //return undefined if list or e is undefined
 if(list === undefined || e === undefined){
   return undefined;
 }else if(e === 0){
   return list.value;
 }else if(list.rest === null){
   return undefined;
 }else{
   return nth(list.rest, e - 1);
 }
 //return value if e is 0, undefined if rest has no value
 //recursive 
}
//I used process of elimination until this worked, I don't fully understand what I did and 
//also not sure if it would work on more tests than the ones given.

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(x, y) {
if(JSON.stringify(x) === JSON.stringify(y)){
  return true;
}
return false;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
