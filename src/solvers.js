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

window.findNRooksSolution = function(n) {
  var solution = 0;
  var board = new Board({n:n});
  var row = n-1
  // BASE CASE
  if(row === n) { // if no rows left
    solution++; // increment the solution count
    return; // stop or return
  }

  for(var i = 0; i < n; i++){ // iterate over possible solutions
    board.togglePiece(row ,i); // place a piece

    if(!board.hasAnyRooksConflicts()){ // condition that eliminates failed solutions
      findNRooksSolution(row + 1); // recurse into remaining problem
    }
    board.togglePiece(row, i); // remove a piece
  }
  
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutions = 0;
  var board = new Board({n:n}); 
  

  //findNRooksSolution(0);

  console.log('Number of solutions for ' + n + ' rooks:', solutions);
  return solution;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0; 
  var board = new Board({n:n});

  if(n === 0){
    solutionCount = 0;
  }
  if(n === 2 || n === 3){
    solutionCount = 0;
  }

  var getSolution = function(row){
    if(row === n){ // if no rows left
      solutionCount++; // increment the solution count
     return; // stop or return
    }

    for(var i = 0; i < n; i++){ // iterate over possible solutions
      board.togglePiece(row ,i);// place a piece
      if(!board.hasAnyQueensConflicts()){// condition that eliminates failed solutions
        getSolution(row + 1);// recurse into remaining problem
      }
      board.togglePiece(row, i);// remove a piece
    }
  }
  getSolution(0);
  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
