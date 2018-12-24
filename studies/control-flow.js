// Control Flow
/*
* Control flow refers to the code blocks that are to be executed based on truthiness or falsiness.
* In a flow chart with if/else statements, there would be a vertical stem with each branch 
* referring to code blocks to be executed IF one of the intersections evaluated to a truthy value.

* If if statement evaluates to a falsy value, the next else if statement is evaluated.  
* Once a code block with a return statement inside is evaluated, the code gears grind to a halt and
* the function returns what it was designed to.
*
* An example of this is a function designed to create a different saying based on what time it is.
*
*/

//warning: all code below is not to be taken seriously, just having fun with this.

//1. If statement example: 
function inspiration(hour){
       if (hour > 0 && hour < 7){
        return "Go out and sieze the day!";
        //2. Else If(any of these evaulate to truthy, execute code block)
    } else if(hour > 6 && hour < 13){
        return "You are on a rock in space and not much matters, so try your best to feel significant!";
    } else if(hour > 12 && hour < 19){
        return "Resistance is futile, so try your best!";
    } else if(hour > 18 && hour < 25){
        return "Someone out there could love you and you might never meet them. Sweet dreams!";
    } 
    //3. Else: Default statement if no if statements evaluate to truthy
    else{
    //else isn't required neccessarily, but if one wanted to keep their code in a code block, one
    //could use one here. It is the default condition if no other if/else if conditions were met.
    return 'Not an hour, my most sincere apologies. Google "time", please.';
    }
}

inspiration(120498); // would result in the default else statement being executed because we've
//gone all the way down the tree to the default statement.


//the if/else if statements represent the tree, the code blocks being the branches to the code blocks which 
//execute if the conditions are right for the branch to sprout.

// 4. Switch Statements
/*
* Similar to the if/else if statement, the control flow branch analogy still stands for switch statements.
* It can be useful in situations where multiple different "cases" are supposed to lead to the execution of the same code.
* 
*/

function switchStatements(color){
    switch(color){
        //cases, if color === any of the cases, it evaluates to truthy and the return statement
        //executes
        case "Red":
        case "Blue":
        case "Dusty Plateau in Westernmost Texas, Land of the Truly Free to do as they Please":
          return "Wow, such beautiful colors.";
          //break statements are needed in switch statements, or the switch statement will keep
          //iterating through cases when we don't want it to unless there is a return statement
        case "Magenta":
          return "This color sucks.";
        case "Purple":
        case "Fuschia":
        case "Baby Blue":
          console.log("Wow, how cute.");
          //break is needed here because console.logging something won't stop the switch statement
          //from iterating through cases
          break;
          //similar to an else statement, this is the default if none of the cases evaluate to truthy
        default: 
          console.log("Not a Color");
          break;
    }
}

switchStatements("Dusty Plateau in Westernmost Texas, Land of the Truly Free to do as they Please");
//the above function call returns, as you might have guessed, "Wow, such beautiful colors."

//Some might find it simpler, but code blocks offer a bit more versatility, so switch statements are less commonly
//used, at least for our current educational purposes.

//To conclude, there are many ways of controlling the flow of statements and codes, but the
//key lies within the format and the order in which your statements are declared. We will touch down on that further in the loops section.