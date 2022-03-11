let board = [
  ['1','-','5','8','-','2','-','-','-'],
  ['-','9','-','-','7','6','4','-','5'],
  ['2','-','-','4','-','-','8','1','9'],
  ['-','1','9','-','-','7','3','-','6'],
  ['7','6','2','-','8','3','-','9','-'],
  ['-','-','-','-','6','1','-','5','-'],
  ['-','-','7','6','-','-','-','3','-'],
  ['4','3','-','-','2','-','5','-','1'],
  ['6','-','-','3','-','8','9','-','-']
]


function sudoku(board) {
  let BoxSize = 9
  let boxSize = 3


  // Ищем пустую ячейку
  function finder(board) {
   for (let i = 0; i < board.length; i++) {
     for (let j = 0; j< board[i].length; j++) {

      if (board[i][j] === '-')
      return [i, j];
      
     }
   }

   return null;
  }


  //Валидатор
  function proverka(num, pos, board) {
    const [r, c] = pos;

    //Проверка по горизонтали
    for (let i = 0; i < board.length; i++) {
      if (board[i][c] === num && i !== c)
      return false;
    }


    //Проверка по вертикали
    for (let i = 0; i < board.length; i++) {
      if (board[r][i] === num && i !== r)
      return false;
    }

//     // Проверка в квадрате
//     const boxRow = Math.floor(r/boxSize) * boxSize
//     const boxCol = Math.floor(c/boxSize) * boxSize

//     for (let i = boxRow; i < boxRow + boxSize; i++) {
//       for (let j = boxCol; j < boxCol + BoxSize; j++) {

//     if (board[i][j] === num && i !== r && j !== c) {
//       return false
//     }

//   }
// }

    return true;
  }

 
  function reshatel() {
    curPos = finder(board)

    if (currPos = null) {
      return true;
    }

    for (let i = 1; i < BoxSize + 1; i++) {
      const num = i.toString();
      const provereno = proverka(num, curPos, board)

      if (provereno) {
        const [x,y] = curPos;
        board[x][y] = num;

        if (reshatel()) {
          return true;
        }
        
        
        // board[x][y] = '-';
        
      }
    }
    return false;
  }


  reshatel()
  return board;
}


console.log(sudoku(board))

