// alert("HII")
//prompt("Enter Your Name")
// let a = prompt("Enter Your Name")
// alert(a)
var board = [
    '_', '_', '_', '_', '_', '_', '_', '_', '_'
]
//variables
var player = "X"
//print Board
function showBoard() {
    console.log(board[0], board[1], board[2])
    console.log(board[3], board[4], board[5])
    console.log(board[6], board[7], board[8])
}

function changeBoard(pos, player) {
    if (board[pos] == '_') {
        board[pos] = player
        showBoard()
    }
    else {
        alert("Invalid Move")
    }
}

//function to flip the turns
function flipTurn() {
    if (player == "X")
        player = "0"
    else player = "X"
}
//function to check if give player Wins game or Not
function checkWins(player) {
    //1st row
    if (board[0] == player && board[1] == player && board[2] == player) {
        return true
    }
    //2st row
    if (board[3] == player && board[4] == player && board[5] == player) {
        return true
    }
    //3rd row
    if (board[6] == player && board[7] == player && board[8] == player) {
        return true
    }
    // 1st col
    if (board[0] == player && board[3] == player && board[6] == player) {
        return true
    }
    //2nd col
    if (board[1] == player && board[4] == player && board[7] == player) {
        return true
    }
    //3rd col
    if (board[2] == player && board[5] == player && board[8] == player) {
        return true
    }
    //1st Diagonal
    if (board[0] == player && board[4] == player && board[8] == player) {
        return true
    }
    //2nd Diagonal
    if (board[2] == player && board[4] == player && board[6] == player) {
        return true
    }

}

function checkDraw() {
    var a = checkWins("X")
    var b = checkWins("0")
    //check if no one can win the Game
    if (a == false && b == false) {
        var count = 0
        for (var i = 0; i <= 8; i++) {
            if (board[i] == '_')
                count += 1
        }
        if (count == 0)
            return true
    }
    return false
}

//main Game
while (true) {
    //convert pos into number
    let pos = prompt(player + " : Turn")
    pos = pos * 1
    changeBoard(pos, player)
    let temp = checkWins(player)
    //if wins
    if (temp == true) {
        alert("Congratulation " + player + " : You won the Game!")
        break;
    }
    //Check if the game is draw
    let d = checkDraw()
    if (d == true) {
        alert("Game Is Draw")
        break;
    }

    flipTurn()
}

