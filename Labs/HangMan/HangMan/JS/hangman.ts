//Variable Declaration

let wordsArray = ['fish', 'traffic', 'marching', 'tadpole', 'television'];
let max = wordsArray.length;

//Generate random number to be used in selecting a game word
function getRandom(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}

let wrongCount = 0;
let letterGuess = prompt("Guess a letter");

let wordSelector = getRandom(0, max);
let chosenWord = wordsArray[wordSelector];
let selectArray = chosenWord.split('');
let blanks = []
function blanksCreate() {
    for (let i in selectArray) {
        blanks.push(' x ');
    }
}
blanksCreate();



let h = '';
for (let letter in selectArray) {

    h += "<img class = 'blank' id = '" + letter + "' src = 'http://rlv.zcache.com/blank_white_toiletry_labels_blank_square_sticker-r5bb9e59042814d99a50a840459bb7bcc_v9wf3_8byvr_512.jpg' alt = 'blank'/>";

}
document.getElementById('hangman').innerHTML = h;


function displayblanks(){
    console.log(blanks);
}

displayblanks()

function endGame() {
    function checkArrays(selectArray, blanks) {
        for (let i in selectArray) {
            if (selectArray[i] != blanks[i]) {
                return false;
            }
            else {
                return true;
            }
        }

    }
}

let isWordGuessed = false;
let playGame = true;
while (playGame) {

    while (isWordGuessed != true) {

        while (wrongCount < 6) {


            letterGuess;

            //find index values of a given letter

        
            let letterIndex = [];

            function letterChange() {
                for (let i of letterIndex) {
                    blanks[i] = letterGuess;
                }
            }
            let indexVal = chosenWord.indexOf(letterGuess);
            if (indexVal == -1) {
                console.log("not found");
                wrongCount++;
                displayblanks();
            }
            else {
                while (indexVal != -1) {
                    letterIndex.push(indexVal);
                    indexVal = chosenWord.indexOf((letterGuess), indexVal + 1);

                }
                letterChange();
                displayblanks();
                
            }
            if (endGame()) {
                isWordGuessed = true;
                wrongCount = 6;
                break;
            }
                   
        }
        if (wrongCount = 6) {
            playGame = false;
            break;
        }

        
    }
}


//Create the blank spaces in HTML document









//do {
//    let letterGuess = prompt("Guess a letter");
//    isWordGuessed = true;
//}
//while (isWordGuessed == false){
    
//}




//Replace blank space with Letter

//function changeToLetter() {
//    for (let val of letterIndex) {
//        document.getElementById(val).innerHTML = `<h1>${letterGuess}</h1>`; 
//    }

//}

//function changeToLetter() {
//    for (let i = 0; i <= letterIndex.length; i++) {
//        h += `<h1>${letterGuess}</h1>`;
//        document.getElementById(letterIndex[i]).innerHTML = h ;
//    }
//}
//changeToLetter();