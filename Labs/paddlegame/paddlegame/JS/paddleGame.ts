let canvas;
let canvasContext;
let ballX = 50;
let ballSpeedX = 10;
let ballY = 50;
let ballSpeedY = 4;

let player1Score = 0;

let player2Score = 0;
let showingWinScreen = false;


let paddle1Y = 250;
const Paddle_Height = 100;
const PADDLE_THICKNESS = 10;
const WINNING_SCORE = 3;

let paddle2Y = 250;

function calculateMousePos(evt)
{
    let rect = canvas.getBoundingClientRect();
    let root=document.documentElement;
    let mouseX = evt.clientX - rect.left - root.scrollLeft;
    let mouseY = evt.clientY - rect.top - root.scrollTop;
    return { x: mouseX, y: mouseY };
}
function handleMouseClick(evt) {
    if (showingWinScreen) {
        player1Score = 0;
        player2Score = 0;
        showingWinScreen = false;
    }
}
window.onload = function () {
    canvas = document.getElementById('gameCanvas')
    canvasContext = canvas.getContext('2d');
    
    let framesPerSecond = 30;
    setInterval(() => { moveEverything(), drawEverything() }, 1000 / framesPerSecond);

    canvas.addEventListener('mousemove', function (evt) {
        var mousePos = calculateMousePos(evt);
        paddle1Y = mousePos.y - (Paddle_Height / 2);
    }
        canvas.addEventListener('mousedown', handleMouseClick);
}

function drawEverything() {
    if (showingWinScreen) {
        canvasContext.fillStyle='white';
        canvasContext.fillText("Click to Continue", 100, 100);
        return;
    }
    //draws the screen background
    colorRect(0, 0, canvas.width, canvas.height, 'black')
    //next line draws the left paddle
    colorRect(0, paddle1Y, PADDLE_THICKNESS, Paddle_Height, 'white');
    //next line draws the right paddle
    colorRect(canvas.width - PADDLE_THICKNESS, paddle2Y, PADDLE_THICKNESS, Paddle_Height, 'white');
    //next line draws the ball
    colorCircle(ballX, ballY, 10, 'white');

    canvasContext.fillText(player1Score, 100, 100);
    canvasContext.fillText(player2Score, canvas.width - 100, 100);
}

function colorCircle(centerX, centerY, radius, drawColor) {
    canvasContext.fillStyle = drawColor;
    canvasContext.beginPath();
    canvasContext.arc(centerX, centerY, radius, 0, Math.PI * 2, true);
    canvasContext.fill();

}

function colorRect(leftX, topY, width, height, drawColor) {
    canvasContext.fillStyle = drawColor;
    canvasContext.fillRect(leftX, topY, width, height);

}

function ballReset() {
    if (player1Score >= WINNING_SCORE || player2Score >= WINNING_SCORE) {
        
        showingWinScreen = true;
    }
    ballX = canvas.width / 2;
    ballY = canvas.height / 2;
    ballSpeedX = -ballSpeedX

}

function computerMovement() {
    let paddle2YCenter = paddle2Y + (Paddle_Height/2)
    if (paddle2YCenter < ballY - 35) {
        paddle2Y += 6;
    }
    else if (paddle2YCenter > ballY + 35) {
        paddle2Y -= 6;
    }
   
}

function moveEverything() {
    if (showingWinScreen) {
        return;
    }
    computerMovement();
    ballX += ballSpeedX;
    ballY += ballSpeedY;
    if (ballX > canvas.width) {
        if (ballY > paddle2Y && ballY < paddle2Y + Paddle_Height) {
            ballSpeedX = -ballSpeedX;
            let deltaY = ballY - (paddle2Y + Paddle_Height / 2);
            ballSpeedY = deltaY * .35
            
        }
        else {
            //ballSpeedX = -ballSpeedX;
            player1Score++;//must be before ball reset
            ballReset();
        };
    }
    if (ballX < 0) {
        if (ballY > paddle1Y && ballY < paddle1Y+Paddle_Height) {
            ballSpeedX = -ballSpeedX;
            let deltaY = ballY - (paddle1Y + Paddle_Height / 2);
            ballSpeedY = deltaY * .35;
           
        }
        else {
            //ballSpeedX = -ballSpeedX;
            player2Score++;//must be before ball reset
            ballReset();
            
        }

    }
    
    if (ballY < 0) {
        ballSpeedY = -ballSpeedY;

    }
    if (ballY > canvas.height) {
        ballSpeedY = -ballSpeedY;
    }

}
console.log(ballY)