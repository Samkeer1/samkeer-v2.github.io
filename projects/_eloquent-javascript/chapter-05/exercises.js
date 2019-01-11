// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(array) {
   return array.reduce(function(prev, curr){
     return prev.concat(curr);
   }, []);
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(start, test, update, body) {
  //sets individual value to start, test function gatekeeper for whether or not value gets updated, if
  //value updated, body(value) is run
  //same for loop structure: initiation, stop condition(does things until test evaluates to undefined, 
  // updates values until stop condition is met)
for(let value = start; test(value); value = update(value)){
  body(value);
}
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(array, test) {
   for(let i = 0; i < array.length; i++){
     if(test(array[i]) === false){
       return false;
     }
   }
  return true;
}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function dominantDirection(text) {
 //countby function expects a collection to loop over and a function that makes a name for each given element
 //returns an array of each type of object, 
 console.log(text);
 let ltrCount = 0;
 let rtlCount = 0;
 let scripts = countBy(text, char => {
   let script = characterScript(char.codePointAt(0));
   return script ? script.name : "none";
 }).filter(({name}) => name != "none");
 
 console.log(scripts);
 for(let i = 0; i < scripts.length; i++){
   for(let y = 0; y < SCRIPTS.length; y++){
     if(scripts[i].name === SCRIPTS[y].name){
       if(SCRIPTS[y].direction === 'ltr'){
         ltrCount++;
       }else if(SCRIPTS[y].direction === 'rtl'){
         rtlCount++;
       }
     }
   }
 }
 console.log(rtlCount);
 console.log(ltrCount);
 //iterate through scripts array, if scripts[i].name === SCRIPTS[i].name
if(ltrCount > rtlCount){
  return "ltr";
}else{
  return "rtl";
}
}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
require('./path/to/jaques_journal.js');
require('./path/to/scripts.js');
if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
