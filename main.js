const btns = document.querySelectorAll('.cell')
let playerTurn = 'X'
btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        
        let btnValue = e.target.innerHTML;
        if(btnValue.length < 1){
            e.target.innerHTML = playerTurn
            playerTurn === 'X' ? playerTurn = 'O' : playerTurn = 'X'
        }
    
})
let checkWin =
    [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6],
    [1, 4, 7], [2, 5, 8], [2, 4, 6], [0, 4, 8]]   

// let currentPlayer = 'X';
// let gameBoard = ['', '', '', '', '', '', '', '', ''];
// let gameActive = true;

// function handleCellClick(index) {
//     if (gameBoard[index] === '' && gameActive) {
//         gameBoard[index] = currentPlayer;
//         document.getElementById('status').innerText = `Player ${currentPlayer}'s turn`;
//         document.getElementById('board').children[index].innerText = currentPlayer;

//         if (checkWin()) {
//             document.getElementById('status').innerText = `Player ${currentPlayer} wins!`;
//             gameActive = false;
//         } else if (gameBoard.every(cell => cell !== '')) {
//             document.getElementById('status').innerText = 'It\'s a tie!';
//             gameActive = false;
//         } else {
//             currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
//         }
//     }
// }

// function checkWin() {
//     const winPatterns = [
//         [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
//         [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
//         [0, 4, 8], [2, 4, 6]             // Diagonals
//     ];

//     return winPatterns.some(pattern => (
//         gameBoard[pattern[0]] !== '' &&
//         gameBoard[pattern[0]] === gameBoard[pattern[1]] &&
//         gameBoard[pattern[1]] === gameBoard[pattern[2]]
//     ));
// }

// function resetGame() {
//     currentPlayer = 'X';
//     gameBoard = ['', '', '', '', '', '', '', '', ''];
//     gameActive = true;
//     document.getElementById('status').innerText = `Player ${currentPlayer}'s turn`;
    
    // const cells = document.getElementById('board').children;
//     for (let i = 0; i < cells.length; i++) {
//         cells[i].innerText = '';
// //     }
// }

 
