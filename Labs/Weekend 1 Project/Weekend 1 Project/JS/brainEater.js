var boxSize = 50;
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#FF000";
var firstRow = 1;
var lastRow = 21;
var emptyBlock = 0;
var outerBlock = 1;
var wallBlock = 2;
var playerBlock = 3;
setInterval(drawPlayField, 500);
function drawBlock(x, y) {
    ctx.fillStyle = "#000000";
    ctx.fillRect(x, y, boxSize, boxSize);
}
function drawEmpty(x, y) {
    ctx.fillStyle = '#999966';
    ctx.fillRect(x, y, boxSize, boxSize);
}
function drawWall(x, y) {
    ctx.fillStyle = '#FF0000';
    ctx.fillRect(x, y, boxSize, boxSize);
}
function drawHero(x, y) {
    ctx.fillStyle = '#0000CC';
    ctx.fillRect(x, y, boxSize, boxSize);
}
function createBorder() {
    for (var x = 0; x < 20; x++) {
        var position = boxSize * x;
        ctx.fillRect(position, 0, boxSize, boxSize);
    }
    for (var y = 1; y < 20; y++) {
        var position = boxSize * y;
        ctx.fillRect(boxSize * 19, position, boxSize, boxSize);
    }
    for (var x = 19; x > -1; x--) {
        var position = boxSize * x;
        ctx.fillRect(position, boxSize * 19, boxSize, boxSize);
    }
    for (var y = 19; y > 0; y--) {
        var position = boxSize * y;
        ctx.fillRect(0, position, boxSize, boxSize);
    }
}
//make array
var playField = new Array(441);
function drawPlayField() {
    var count = 0;
    for (var i = 0; i < 21; i++) {
        for (var z = 0; z < 21; z++) {
            var positionX = z * boxSize + boxSize;
            var positionY = i * boxSize;
            console.log(positionX);
            console.log(positionY);
            if (playField[count] == outerBlock) {
                drawBlock(positionX, positionY);
            }
            else if (playField[count] == emptyBlock) {
                drawEmpty(positionX, positionY);
            }
            else if (playField[count] == wallBlock) {
                drawWall(positionX, positionY);
            }
            else if (playField[count] == playerBlock) {
                drawHero;
            }
        }
    }
}
function startPlayField() {
    var y = 1;
    var playerSpawn = {
        xPos: 0,
        yPos: 0
    };
    playerSpawn.yPos = Math.floor(Math.random() * 19) + 2; //left off y pos is giving us trouble
    playerSpawn.xPos = Math.floor(Math.random() * 19) + 2;
    for (var i = 0; i < 442; i++) {
        if (i % 21 == 0 && i != 0) {
            y++;
        }
        var x = i % 21 + 1;
        var posX = x * boxSize - boxSize;
        var posY = y * boxSize - boxSize;
        if (x == firstRow || x == lastRow || y == firstRow || y == lastRow) {
            playField.push(outerBlock);
            drawBlock(posX, posY);
        }
        else if (x == playerSpawn.xPos && y == playerSpawn.yPos) {
            playField.push(playerBlock);
            drawHero(posX, posY);
        }
        else if ((y + 3) % 2 == 0 && Math.floor(Math.random() * 10) < 8) {
            drawWall(posX, posY);
            playField.push(wallBlock);
        }
        else {
            drawEmpty(posX, posY);
            playField.push(emptyBlock);
        }
    }
}
startPlayField();
//look up arrow key movement on javascript,  
