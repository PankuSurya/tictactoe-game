console.log("Welcome to TicTacToe");



const startGame = () => {
    if (document.getElementById('playerX').value == "" || document.getElementById('playerO').value == ""
    ) {
        alert("Please Enter Players names")
    }
    else if (document.getElementById('playerX').value == document.getElementById('playerO').value) {
        alert("Player names should be different")
    }


    localStorage.setItem('playerX', document.getElementById('playerX').value);
    localStorage.setItem('playerO', document.getElementById('playerO').value);
    localStorage.setItem('playerXScore', 0);
    localStorage.setItem('playerOScore', 0);

    // console.log(playerX, playerO, playerXScore, playerOScore);
}



// GameBoard
let playerX = localStorage.getItem("playerX");
let playerO = localStorage.getItem("playerO");
let playerXScore = localStorage.getItem("playerXScore");
let playerOScore = localStorage.getItem("playerOScore");
// localStorage.removeItem('playerX');

console.log(playerX, playerO, playerXScore, playerOScore);

const setScoreBoard = () => {
    let playerX = localStorage.getItem("playerX");
    // let playerO = localStorage.getItem("playerO");
    let playerXScore = localStorage.getItem("playerXScore");
    let playerOScore = localStorage.getItem("playerOScore");

    document.querySelector(".scoreboard").innerHTML = `
    <p class="score">${playerX} - ${playerXScore}</p>
    <p class="score">${playerO} - ${playerOScore}</p>
    `
}

setScoreBoard();

// Turn of X or O

let turn = "playerX";

const setTurn = (turn) => {
    if (turn == "playerX") {
        document.querySelector("#playerText").innerHTML =
            `TURN - ${playerX} X `;
    }
    else {
        document.querySelector("#playerText").innerHTML =
            `TURN - ${playerO} O `;
    }
}

setTurn("playerX");

// Check the Winner
const checkWin = () => {
    let box0 = document.getElementById("box0").innerHTML;
    let box1 = document.getElementById("box1").innerHTML;
    let box2 = document.getElementById("box2").innerHTML;
    let box3 = document.getElementById("box3").innerHTML;
    let box4 = document.getElementById("box4").innerHTML;
    let box5 = document.getElementById("box5").innerHTML;
    let box6 = document.getElementById("box6").innerHTML;
    let box7 = document.getElementById("box7").innerHTML;
    let box8 = document.getElementById("box8").innerHTML;

    if (box0 == "X" && box1 == "X" && box2 == "X" ||
        box3 == "X" && box4 == "X" && box5 == "X" ||
        box6 == "X" && box7 == "X" && box8 == "X" ||
        box0 == "X" && box3 == "X" && box6 == "X" ||
        box1 == "X" && box4 == "X" && box7 == "X" ||
        box2 == "X" && box5 == "X" && box8 == "X" ||
        box0 == "X" && box4 == "X" && box8 == "X" ||
        box2 == "X" && box4 == "X" && box6 == "X") {
            let playerXScore = localStorage.getItem("playerXScore");
            console.log(playerXScore);
            playerXScore = parseInt(playerXScore) + 1;
            localStorage.setItem("playerXScore", playerXScore);
            setScoreBoard();
            alert("Player X wins");

    }
    else if (box0 == "O" && box1 == "O" && box2 == "O" ||
        box3 == "O" && box4 == "O" && box5 == "O" ||
        box6 == "O" && box7 == "O" && box8 == "O" ||
        box0 == "O" && box3 == "O" && box6 == "O" ||
        box1 == "O" && box4 == "O" && box7 == "O" ||
        box2 == "O" && box5 == "O" && box8 == "O" ||
        box0 == "O" && box4 == "O" && box8 == "O" ||
        box2 == "O" && box4 == "O" && box6 == "O") {
            let playerOScore = localStorage.getItem("playerOScore");
            playerOScore = parseInt(playerOScore) + 1;
            localStorage.setItem("playerOScore", playerOScore);
            setScoreBoard();
            alert("Player O wins");
    }

    else if (box0 != "" && box1 != "" && box2 != "" &&
        box3 != "" && box4 != "" && box5 != "" &&
        box6 != "" && box7 != "" && box8 != "" ) {
            alert("Match Draw");
    }
}

// Shows X or O
const showXnO = (boxid) => {
    let box = document.getElementById(boxid);
    if (turn == "playerX" && box.innerHTML == "") {
        box.innerHTML = "X";
        box.style.color = "red";
        turn = "playerO";
        setTurn(turn);
    }
    else if (turn == "playerO" && box.innerHTML == "") {
        box.innerHTML = "O";
        box.style.color = "blue";
        turn = "playerX";
        setTurn(turn);
    }
}

// Block button pressed
const boxClick = (boxid) => {
    // console.log(boxid);
    showXnO(boxid);
    checkWin();
}
