const fs = require('fs');


// Принимает доску как строку в формате
// вы видите в файле головоломки. возвращается
// что-то, представляющее доску после
// ваш решатель пытался ее решить.
// Как вы представляете свою доску, зависит от вас!

let str = fs.readFileSync('./sudoku-puzzles.txt')
let sudoku = str.join('\n')
console.log(str);
function solve(boardString) {

  console.log('first changes');
}

// Возвращает логическое значение, указывающее,
// или решается не указанная плата.
// Плата ввода будет в любом
// форма `решить` возвращает.
function isSolved(board) {

}

// Принимает доску в той или иной форме и
// возвращает правильно отформатированную строку
// для вывода на экран.
// Плата ввода будет в любом
// форма `решить` возвращает.
function prettyBoard(board) {
  
}

// Экспортирует все функции, чтобы использовать их в другом файле.
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
