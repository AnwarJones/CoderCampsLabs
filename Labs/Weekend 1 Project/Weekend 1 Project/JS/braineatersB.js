var canvas = document.getElementById('canvas');
var boxSize = 50;
var firstRow = 1;
var lastRow = 21;
var emptyBlock = 0;
var outerBlock = 1;
var wallBlock = 2;
var player = 3;
var zed = 4;
var ctx = canvas.getContext("2d");
var playFieldArray = [];
var heroImage = new Image();
var zombieImage = new Image();
var wallImage = new Image();
var playerPositionIndex;
var zedPositionIndex;
var isKeyPressed = false;
var isMoveLeft = false;
var isMoveRight = false;
var isMoveUp = false;
var isMoveDown = false;
//heroImage.src = http://media.popcultcha.com.au/media/catalog/product/cache/1/image/330x350/0f396e8a55728e79b48334e699243c07/r/i/rick-grimes-walking-dead.png;
//zombieImage.src = http://www.kupoday.net/bootstrap/zombie.png;
function drawBlock(x, y) {
    ctx.fillStyle = "#000000";
    ctx.fillRect(x, y, boxSize, boxSize);
}
function drawEmpty(x, y) {
    ctx.fillStyle = "#999966";
    ctx.fillRect(x, y, boxSize, boxSize);
}
function drawWall(x, y) {
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(x, y, boxSize, boxSize);
}
function drawHero(x, y) {
    ctx.fillStyle = "#0000CC";
    ctx.fillRect(x, y, boxSize, boxSize);
}
function drawZed(x, y) {
    ctx.fillStyle = "orange";
    ctx.fillRect(x, y, boxSize, boxSize);
}
//Zombie Functions
var Zombie = (function () {
    function Zombie(xPos, yPos) {
        this.xPos = xPos;
        this.yPos = yPos;
    }
    return Zombie;
})();
var zedArray = [];
function zedSpawn() {
    var xPos = Math.floor(Math.random() * 19) + 2;
    var yPos = Math.floor(Math.random() * 19) + 2;
    zedArray.push(new Zombie(xPos, yPos));
}
function zedAdd() {
    var zedRNG = Math.floor(Math.random() * 441) + 1;
    if (playFieldArray[zedRNG] != zed && playFieldArray[zedRNG] != outerBlock && playFieldArray[zedRNG] != wallBlock && playFieldArray[zedRNG] != player) {
        playFieldArray[zedRNG] = zed;
    }
}
function moveZedLeft() {
    if (playFieldArray[zedPositionIndex - 1] == 0) {
        playFieldArray[zedPositionIndex - 1] = zed;
        playFieldArray[zedPositionIndex] = emptyBlock;
        zedPositionIndex--;
    }
}
function moveZedRight() {
    if (playFieldArray[zedPositionIndex + 1] == 0) {
        playFieldArray[zedPositionIndex + 1] = zed;
        playFieldArray[zedPositionIndex] = emptyBlock;
        zedPositionIndex++;
    }
}
function moveZedUp() {
    if (playFieldArray[zedPositionIndex - 21] == 0) {
        playFieldArray[zedPositionIndex - 21] = zed;
        playFieldArray[zedPositionIndex] = emptyBlock;
        zedPositionIndex -= 21;
    }
}
function moveZedDown() {
    if (playFieldArray[zedPositionIndex + 21] == 0) {
        playFieldArray[zedPositionIndex + 21] = zed;
        playFieldArray[zedPositionIndex] = emptyBlock;
        zedPositionIndex += 21;
    }
}
function moveZeds() {
    for (var z in playFieldArray) {
        if (playFieldArray[z] == zed) {
            zedPositionIndex = playFieldArray[z];
            zedMovement(zedMoved());
        }
    }
}
function zedMoved() {
    if ((playFieldArray[zedPositionIndex + 21] != 0) && (playFieldArray[zedPositionIndex - 21] != 0)) {
        return Math.floor(Math.random() * (2)) + 1;
    }
    else {
        return Math.floor(Math.random() * (4)) + 1;
    }
}
function zedMovement(move) {
    if (move == 1) {
        moveZedLeft();
    }
    else if (move == 2) {
        moveZedRight();
    }
    else if (move == 3) {
        moveZedDown();
    }
    else {
        moveZedUp();
    }
}
startPlayField();
drawPlayField();
function drawPlayField() {
    //zedSpawn();
    if (isMoveLeft) {
        moveLeft();
    }
    else if (isMoveRight) {
        moveRight();
    }
    else if (isMoveUp) {
        moveUp();
    }
    else if (isMoveDown) {
        moveDown();
    }
    //redraw play field function
    var count = 0;
    for (var i = 0; i < 21; i++) {
        for (var z = 0; z < 21; z++) {
            count++;
            var positionX = z * boxSize + boxSize;
            var positionY = i * boxSize;
            if (playFieldArray[count] == outerBlock) {
                drawBlock(positionX, positionY);
            }
            else if (playFieldArray[count] == emptyBlock) {
                drawEmpty(positionX, positionY);
            }
            else if (playFieldArray[count] == wallBlock) {
                drawWall(positionX, positionY);
            }
            else if (playFieldArray[count] == zed) {
                zedPositionIndex = count;
                console.log(zedPositionIndex);
                drawZed(positionX, positionY);
            }
            else if (playFieldArray[count] == player) {
                playerPositionIndex = count;
                drawHero(positionX, positionY);
            }
        }
    }
}
function startPlayField() {
    var y = 1;
    //next line creates players spawn object
    var playerSpawn = {
        xPos: 0,
        yPos: 0
    };
    zedSpawn();
    playerSpawn.yPos = Math.floor(Math.random() * 19) + 2;
    playerSpawn.xPos = Math.floor(Math.random() * 19) + 2;
    for (var i = 0; i < 442; i++) {
        if (i % 21 == 0 && i != 0) {
            y++;
        }
        var x = i % 21 + 1;
        var positionX = x * boxSize - boxSize;
        var positionY = y * boxSize - boxSize;
        if (x == firstRow || x == lastRow || y == firstRow || y == lastRow) {
            playFieldArray.push(outerBlock);
            drawBlock(positionX, positionY);
        }
        else if (x == playerSpawn.xPos && y == playerSpawn.yPos) {
            playFieldArray.push(player);
            drawHero(positionX, positionY);
        }
        else if (x == zedArray[0].xPos && y == zedArray[0].yPos) {
            playFieldArray.push(zed);
            drawZed(positionX, positionY);
        }
        else if ((y + 3) % 2 == 0 && Math.floor(Math.random() * 10) < 8) {
            playFieldArray.push(wallBlock);
            drawWall(positionX, positionY);
        }
        else {
            playFieldArray.push(emptyBlock);
            drawEmpty(positionX, positionY);
        }
    }
}
setInterval(function () {
    drawPlayField();
}, 100);
var movementInterval = setInterval(function () {
    zedMovement(zedMoved());
}, 1000);
var spawnInterval = setInterval(function () { zedAdd(); }, 10000);
function moveLeft() {
    if (playFieldArray[playerPositionIndex - 1] == 0) {
        playFieldArray[playerPositionIndex - 1] = player;
        playFieldArray[playerPositionIndex] = emptyBlock;
        playerPositionIndex--;
    }
}
function moveRight() {
    if (playFieldArray[playerPositionIndex + 1] == 0) {
        playFieldArray[playerPositionIndex + 1] = player;
        playFieldArray[playerPositionIndex] = emptyBlock;
        playerPositionIndex++;
    }
}
function moveUp() {
    if (playFieldArray[playerPositionIndex - 21] == 0) {
        playFieldArray[playerPositionIndex - 21] = player;
        playFieldArray[playerPositionIndex] = emptyBlock;
        playerPositionIndex -= 21;
    }
}
function moveDown() {
    if (playFieldArray[playerPositionIndex + 21] == 0) {
        playFieldArray[playerPositionIndex + 21] = player;
        playFieldArray[playerPositionIndex] = emptyBlock;
        playerPositionIndex += 21;
    }
}
onkeydown = function (event) {
    console.log(event.keyCode);
    var code = event.keyCode;
    switch (code) {
        case 37:
            if (!isMoveRight && !isMoveUp && !isMoveDown) {
                isMoveLeft = true;
            }
            break;
        case 38:
            if (!isMoveRight && !isMoveLeft && !isMoveDown) {
                isMoveUp = true;
            }
            break;
        case 39:
            if (!isMoveLeft && !isMoveUp && !isMoveDown) {
                isMoveRight = true;
            }
            break;
        case 40:
            if (!isMoveLeft && !isMoveUp && !isMoveRight) {
                isMoveDown = true;
            }
            break;
    }
    event.preventDefault();
};
onkeyup = function (event) {
    console.log(event.keyCode);
    var code = event.keyCode;
    switch (code) {
        case 37:
            isMoveLeft = false;
            break;
        case 38:
            isMoveUp = false;
            break;
        case 39:
            isMoveRight = false;
            break;
        case 40:
            isMoveDown = false;
            break;
    }
    event.preventDefault();
};
function zedChaseLeft() {
    if ((playFieldArray[zedPositionIndex - 1] == 0 || playFieldArray[zedPositionIndex - 1] == 3) && (playerPositionIndex < zedPositionIndex)) {
        //Move zombie left
        moveZedLeft();
    }
}
function zedChaseRight() {
    if ((playFieldArray[zedPositionIndex + 1] == 0 || playFieldArray[zedPositionIndex + 1] == 3) && (playerPositionIndex > zedPositionIndex)) {
        //Move zombie Right
        moveZedRight();
    }
}
function zedChaseUp() {
    if ((playFieldArray[zedPositionIndex - 21] == 0 || playFieldArray[zedPositionIndex - 21] == 3) && (playerPositionIndex < zedPositionIndex)) {
        //Move zombie Up
        moveZedUp;
    }
}
function zedChaseDown() {
    if ((playFieldArray[zedPositionIndex + 21] == 0 || playFieldArray[zedPositionIndex + 21] == 3) && (playerPositionIndex > zedPositionIndex)) {
        //Move zombie Down
        moveZedDown;
    }
}
