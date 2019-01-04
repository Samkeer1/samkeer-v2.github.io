//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// function objectValues(object) {
//   return Object.values(object);   <<<<< //does the same thing... but okay.
// } 
   function objectValues(object){
       let result = [];
         for(let key in object){
             result.push(object[key]);
         }
       return result;
   }

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {   //does the same thing... but okay. 
    return Object.keys(object).join(" ");
}
//   function keysToString(object){
//       let result = [];
//          for(let key in object){
//              result.push(key);
//          }
//       return result.join(" "); 
//   }

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    let result = [];
        for(let key in object){
            if(typeof object[key] === 'string'){
                result.push(object[key]);
            }
        }
    return result.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if(Array.isArray(collection)){
        return 'array';
    }else if(!collection === null || !collection instanceof Date){
    }else if(typeof collection === 'object'){
        return 'object';
    }
  return 'something else';
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    return string[0].toUpperCase() + string.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    //final result array to join together at the end
    let result = [];
    //array to put my split up string to alter each element
    let manipulationArr = string.split(" ");
    //for loop to change every element of array
    for(let i = 0; i < manipulationArr.length; i++){
        //push manipulated array, manipulated by taking each element's first letter, capitalizing it
        // then adding the rest of each element with their first letters sliced off
        result.push(manipulationArr[i][0].toUpperCase() + manipulationArr[i].slice(1));
    }
    //joined back into initial string, now capitalized
    return result.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
  return 'Welcome ' + object.name[0].toUpperCase() + object.name.slice(1).toLowerCase() + "!";
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
  return `${object['name'][0].toUpperCase() + object.name.slice(1).toLowerCase()} is a ${object['species'][0].toUpperCase() + object.species.slice(1).toLowerCase()}`; 
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//takes an object parameter
function maybeNoises(object) {
    //loop through object keys to check if there's a noises array
    for(let key in object){
        console.log(object[key]);
        if(object[key].length > 0){
            return object[key].join(" ");
        }
    //if there is a noises array but no noises in the array, return 'there are no noises'
    //if there is a noises array and there are noises in it, return the array joined with a " "
    }
    return 'there are no noises';
    //outside the loop, aka if there is no noises array, return 'there are no noises'
}


//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
  let iteration = string.split(" ");
   for(let i = 0; i < iteration.length; i++){
        if(iteration[i] === word){
           return true;
       }
   }
return false;
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
      object.friends.push(name);
        return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//take name and object parameters
function isFriend(name, object) {
//return true if name is part of the 'friends' key in object
for(let key in object){
    //iterate through friends index
    for(let i = 0; i < object[key].length; i++){
        //if name is equal to any part of the friends array, return true.
        if(name === object.friends[i]){
            return true;
        }
      }
    }
return false;
//return false otherwise
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////


function nonFriends(name, array){
    //array with all names, created to compare to given name's friends list
    let result = [];
    //create list of all names
    let allNames = array.map(function(e, i, a){
       return e.name;
    });
    //find named object in given array
    //create list of name's friends
    for(let i = 0; i < array.length; i++){
        if(array[i].name === name){
            var nameFriends = array[i].friends;
        }
    }
    //create result array without name object, and without the names in name's friend list
    // if name object's friends include any of the entire name list, don't push. if it
    //doesn't include the friends, do push to result.
    for(let i = 0; i < allNames.length; i++){
       if(nameFriends.includes(allNames[i])){
       }else{
           result.push(allNames[i]);
       }
    }
    //removing objects own name from result
    for(let i = 0; i < result.length; i++){
        if(result[i] === name){
            result.splice(i, 1);
        }
    }
    return result;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//take object, key, value
function updateObject(object, key, value) {
object[key] = value;
        //iterate through object
        //if key doesn't exist, create it
    //if key already exists in object, update it
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
//remove any properties on object(keys) that are listed in the array
for(let key in object){
    for(let i = 0; i < array.length; i++){
        if(key === array[i]){
            delete object[key];
        }
    }
}
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array, result = []) {
//take an array, removing all duplicates
// base case --> when initial array is undefined
if(array[0] === undefined){
    return result;
} else if(result.includes(array[0])){
    return dedup(array.slice(1), result);
} else{
    result.push(array[0]);
    return dedup(array.slice(1), result);
}
}


//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}