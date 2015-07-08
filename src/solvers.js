/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

// window.findNRooksSolution = function(n) {
//   var solutions = undefined;
//   console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solutions));
//   return solutions;
// };



// // return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
// window.countNRooksSolutions = function(n) {
//   var board = new Board({n:n});
//   var solutions = 0; // log the number of solutions

//   // Recursive Function
//   var rSolutionFinder = function(numRooksPlaced){ // numRooksPlaced = row number 
    
//     // BASE CASE
//     if(numRooksPlaced === n) { // if no rows left
//       solutions++; // increment the solution count
//       return; // stop or return
//     } else {
//       for(var i = 0; i < n; i++){ // iterate over possible solutions
//         board.togglePiece(numRooksPlaced, i); // place a piece

//         if(board.hasAnyRooksConflicts() === false){ // check for conflicts
//           rSolutionFinder(numRooksPlaced + 1); // recurse into remaining problem
//         }
//         board.togglePiece(numRooksPlaced, i); // remove a piece
//       }
//     }
//   }
//   rSolutionFinder(0);
//   console.log('Number of solutions for ' + n + ' rooks:', solutions);
//   return solutions;
// };



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var board = new Board({n:n});
  var solutions = 0; // log the number of solutions

  // Recursive Function
  var rSolutionFinder = function(numQueensPlaced){ // numRooksPlaced = row number 
    if(n === 2 || n === 3){
      solutions = 0;
    }
    if(n === 0) {
      solutions = 1;
    }
    // BASE CASE
    if(numQueensPlaced === n) { // if no rows left
      solutions++; // increment the solution count
      return; // stop or return
    } else {
      for(var i = 0; i < n; i++){ // iterate over possible solutions
        board.togglePiece(numQueensPlaced, i); // place a piece

        if(board.hasAnyQueensConflicts() === false){ // check for conflicts
          rSolutionFinder(numQueensPlaced + 1); // recurse into remaining problem
        }
        board.togglePiece(numQueensPlaced, i); // remove a piece
      }
    }
  }
  rSolutionFinder(0);
  console.log('Number of solutions for ' + n + ' queens:', solutions);
  return solutions;
};
