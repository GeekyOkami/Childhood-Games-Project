const ticTacToe=document.querySelector("#tic-tac-toe");
const rps=document.querySelector("#rock");
const snake=document.querySelector("#snake");
const ludo=document.querySelector("#ludo");

ticTacToe.addEventListener('click',openTTT);
rps.addEventListener('click',stone);
snake.addEventListener('click',snakegame);
ludo.addEventListener('click',Ludo);

function openTTT(){
    window.open("./Tic Tac Toe/index.html");
}

function snakegame(){
    window.open("./Snake Game/index.html");
}

function stone(){
    window.open("./Stone Paper Scissors/index.html");
}

function Ludo(){
    window.open("./Ludo Game/index.html");
}