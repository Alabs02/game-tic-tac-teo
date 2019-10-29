$(document).ready(function() {

    let player1 = "X";
    let player2 = "O";

    let currentTurn = 1;
    let movesMade = 0;

    let square = $('.square');
    
    square.on('click', function(e) {
        movesMade ++;

        if (currentTurn == 1) {
            event.target.innerHTML = player1;
            event.target.style.color = 'red';
            currentTurn++;
        } else {
            event.target.innerHTML = player2;
            event.target.style.color = 'green';
            currentTurn--;
        }
    });
    
});