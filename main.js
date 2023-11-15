
const btns = document.querySelectorAll('.cell')
let playerTurn = 'X'
btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        
        let btnValue = e.target.innerHTML;
        if(btnValue.length < 1){
            e.target.innerHTML = playerTurn
            playerTurn === 'X' ? playerTurn = 'O' : playerTurn = 'X'
        }
        if checkWin(){
            

    })
})
function checkWin(){
    [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6],
    [1, 4, 7], [2, 5, 8], [2, 4, 6], [0, 4, 8]]   
}