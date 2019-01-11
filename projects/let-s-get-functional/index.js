// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('lodown-samkeer1');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 */

var maleCount = function(array) {
  let mCount = 0;
    _.each(array, function(e, i, a){
      if(e.gender === 'male'){
          mCount++;
          }
        });
    return mCount;
};

var femaleCount = function(array){
 return _.reduce(array, function(seed, element, index){
     if(element.gender === 'female'){
         seed += 1;
     }
     //without a return statement, result is the returning of a function instead of a reduction
     return seed;
 }, 0);
};

var oldestCustomer = function(array){
    let x;
    let y;
 for(var i = 0; i < array.length; i++){
     x = array[0].age;
     if(array[i].age > x){
         x = array[i].age;
         y = array[i].name;
     }
 }
 return y;
};

var youngestCustomer = function(array){
let youngName;
_.each(array, function(e, i, a){
    if(!youngName){
        youngName = e;
    }else if(youngName.age > e.age){
        youngName = e;
    }
});
return youngName.name;
};

var averageBalance = function(array){
    
let customerNumber = 0;

_.each(array, function(e, i, a){
    if(e.balance){
        customerNumber++;
    }
});

let balanceStringArray = [];
_.each(array, function(e, i, a){
     balanceStringArray.push(e.balance); 
});
let balanceNumbers = _.map(balanceStringArray, function(e, i, a){
      return parseFloat(e.replace('$', '').replace(',', ''));
});
let totalBalance = _.reduce(balanceNumbers, function(prev, curr){
      return prev + curr;
}, 0);

let average = totalBalance / customerNumber;

return average;
};

var firstLetterCount = function(array, letter){
    //set counter to 0
    let x = 0;
    //iterate each element of array, if name[0].toUpCase == letter.toUpCase add 1 to x
    _.each(array, function(e, i, a){
        if(e.name[0].toUpperCase() === letter.toUpperCase()){
            x++;
        }
    });
    //return result counter
    return x;
};

var friendFirstLetterCount = function(array, customer, letter){
   //iterate through array for customer that matches customer name
     //iterate through that customer's friend list using firstlettercount
     let x = 0;
     _.each(array, function(e, i, a){
          if(e.name === customer){
              for(let i = 0; i < e.friends.length; i++){
                  if(e.friends[i].name[0].toUpperCase() === letter.toUpperCase()){
                      x++;
                  }
              }
          } 
     });
     return x;
};

var friendsCount = function(array, name){
    let result = [];
    _.each(array, function(customers){
        _.each(customers.friends, function(e, i, a){
            if(e.name === name){
                result.push(customers.name);
            }
        });
    });
    return result;
};

var topThreeTags = function(array){
    //pushes all tags into array
    let allTags = [];
    _.each(array, function(e, i, a){
       allTags.push(e.tags); 
    });
    //flattens array for manipulation
    allTags = _.reduce(allTags, function(prev, curr){
        return prev.concat(curr);
    });
    
    let tagCountObj = _.reduce(allTags, function(seed, tag){
       if(seed[tag]){
           seed[tag]++;
       }else{
           seed[tag] = 1;
       }
       return seed;
    }, {});
    
    let result = [];
    
    for(let key in tagCountObj){
        result.push([key, tagCountObj[key]]);
    }
    let result1 = [];
    _.filter(result, function(e, i, a){
        if(e[1] > 2){
            result1.push(e[0]);
        }
    });
    return result1;
};
//make counter for all tags, look up sort function and use that one

var genderCount = function(array){
    //use reduce to create object with male, female, transgender categories
    return _.reduce(array, function(seed, e){
        if(seed[e.gender]){
            seed[e.gender]++;
        }else{
            seed[e.gender] = 1;
        }
        return seed;
    }, {});
    //if !prev.male, curr.gender === male, prev.male = 1
    //else if(curr.gender === male, prev.male++)
    //if !prev.female ''
    //''
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
