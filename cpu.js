let playerTurn = "X";
let gameOver = false;

const computerPlay = () => {
    // document.getElementById('PlayerO').value = "CPU";

    if (document.getElementById('playerX').value == " ") {
        alert("Enter player name");
    }
    else if (document.getElementById('playerX').value == document.getElementById('playerO').value) {
        alert("Player names should be different");
    }
    localStorage.setItem('playerX', document.getElementById('playerX').value);
    localStorage.setItem('playerO', document.getElementById('playerO').value);
    localStorage.setItem('playerXScore', 0);
    localStorage.setItem('playerOScore', 0);

    // console.log(playerX, playerO, playerXScore, playerOScore);
}

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

// // Turn of X or O

const setTurn = (playerTurn) => {
    if (playerTurn == "X") {
        document.querySelector("#playerText").innerHTML =
            `TURN - ${playerX} X `;
    }
    else {
        document.querySelector("#playerText").innerHTML =
            `TURN - ${playerO} O `;
    }
}

setTurn(playerTurn);



const handleClick = (e) => {
    if (!gameOver) {
        let box = document.getElementById(e);
        if (playerTurn == "X" && box.innerHTML === "") {
            box.innerHTML = "X";
            box.style.color = "red";
            checkWin();
            playerTurn = "O";
            // setTurn(turn);
            playerTurn = (playerTurn === "X") ? "O" : "X";
            if (!gameOver) {
                computerMove();
            }
        }
    }
}

const checkWin = () => {
    let boxes = document.querySelectorAll(".box");
    let winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < winningCombinations.length; i++) {
        if (boxes[winningCombinations[i][0]].innerHTML === playerTurn &&
            boxes[winningCombinations[i][1]].innerHTML === playerTurn &&
            boxes[winningCombinations[i][2]].innerHTML === playerTurn) {
            gameOver = true;
            alert(`Player ${playerTurn} wins!`);
            break;
        }
    }
    let emptyBoxes = 0;
    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].innerHTML === "") {
            emptyBoxes++;
        }
    }
    if (!gameOver && emptyBoxes === 0) {
        gameOver = true;
        alert(`it's a draw `);
    }
}

const computerMove = () => {
    let boxes = document.querySelectorAll(".box");
    let emptyBoxes = [];
    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].innerHTML === "") {
            emptyBoxes.push(i);
        }
    }
    let randomIndex = Math.floor(Math.random() * emptyBoxes.length);
    boxes[emptyBoxes[randomIndex]].innerHTML = "O";
    checkWin();
    playerTurn = "X";
}



// // Block button pressed
const boxClick = (e) => {
    // console.log(e);
    handleClick(e);
    checkWin();
    // computerMove();
}