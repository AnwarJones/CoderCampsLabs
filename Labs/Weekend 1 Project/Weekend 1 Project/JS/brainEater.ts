const boxSize = 50;
const canvas = (<HTMLCanvasElement>document.getElementById('canvas'));
let ctx = canvas.getContext("2d");
ctx.fillStyle = "#FF000";
let firstRow = 1;
let lastRow = 21;

const emptyBlock = 0;
const outerBlock = 1;
const wallBlock = 2;
const playerBlock = 3;

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
    for (let x = 0; x<20; x++){
        let position = boxSize * x;
        ctx.fillRect(position, 0, boxSize, boxSize);
    }
    for (let y = 1; y < 20; y++) {
        let position = boxSize * y;
        ctx.fillRect(boxSize * 19, position, boxSize, boxSize);
    }
    for (let x = 19; x > -1; x--) {
        let position = boxSize * x;
        ctx.fillRect(position, boxSize * 19, boxSize, boxSize);
    }
    for (let y = 19; y>0; y--){
        let position = boxSize * y;
        ctx.fillRect(0, position, boxSize, boxSize);
    }
}





//make array
let playField = new Array(441);

function drawPlayField() {
    let count = 0
    for (let i = 0; i < 21; i++) {
        for (let z = 0; z < 21; z++) {
            let positionX = z * boxSize + boxSize;
            let positionY = i * boxSize;
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
    let y: number = 1;
    
    let playerSpawn = {
        xPos:0,
        yPos:0
    }
    playerSpawn.yPos = Math.floor(Math.random() * 19) + 2;//left off y pos is giving us trouble
    playerSpawn.xPos = Math.floor(Math.random() * 19) + 2;
    for (let i = 0; i < 442; i++) {
        if (i % 21==0 && i!=0) {
            y++;            
        }
        let x = i % 21 + 1;
        let posX = x * boxSize - boxSize;
        let posY = y * boxSize - boxSize;
        if (x == firstRow || x == lastRow || y == firstRow || y == lastRow) {
            playField.push(outerBlock);
            drawBlock(posX, posY)
        }
        else if (x == playerSpawn.xPos && y == playerSpawn.yPos) {
            playField.push(playerBlock)
            drawHero(posX, posY);
        }
        else if ((y + 3) % 2 == 0 && Math.floor(Math.random() * 10) < 8){
            drawWall(posX, posY)
            playField.push(wallBlock);
        }
        else {
            drawEmpty(posX, posY);
            playField.push(emptyBlock);
        }
    }

}
startPlayField()

//look up arrow key movement on javascript, 