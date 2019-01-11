
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(num) {
  let x = "";
while(x.length < num){
  console.log(x += "#");
}
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz(start, num){
  let i = start;
  while(i <= num){
    if(i % 15 === 0 && i !== 0){
      console.log("fizzbuzz");
    }else if(i % 5 === 0 && i !== 0){
      console.log("buzz");
    }else if(i % 3 === 0 && i !== 0){
      console.log("fizz");
    }else{
      console.log(i);
    } 
    i++;
  }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(size) {
//make width x length
//make height y number of rows
//if it's an odd numbered row(1st, 3rd) aka if row % 2 === 1 start with " "
//if it's an even numbered row, (2nd, 4th) aka if row % 2 === 0 start with "#"
var chessBoard = '';
for(let x = 0; x < size; x++){
   for(let y = 0; y < size; y++){
     if((x + y) % 2 === 0){
       chessBoard += ' ';
     }else{
       chessBoard += '#';
     }
   }
  chessBoard += '\n';
}
console.log(chessBoard);
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}