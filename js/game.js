const WORDS = ['ALURA', 'DESAFIO', 'ORACLE', 'HTML', 'JAVA', 'ONE'];

const hitSound = document.querySelector('#hit-sound');
const errorSound = document.querySelector('#error-sound');
const winSound = document.querySelector('#win-sound');
const defeatSound = document.querySelector('#defeat-sound');

let lastWord; // guarda a ultima palavra sorteada para evitar repetiçoes seguidas
let currentWord; // guarda a palavra sorteada
let pressedLetters = []; // guarda as letras que já foram pressionadas
let errorCounter = 0; // conta o numero de erros
let hits = 0; // conta o numero de acertos

function showCorrectLetters(word, letter) {
    for (const [i, l] of [...word].entries()) {
        if (letter === l) {
            writeCorrectletter(i, letter);
            hits++;
        }
    }
}

function cleanCurrentGameData() {
    hits = 0;
    errorCounter = 0;
    pressedLetters = [];
}

function startNewGame() {
    currentWord = selectWord();

    cleanCorrectLetters();
    createLettersSpace(currentWord);
    cleanWrongLetters();
    cleanCurrentGameData();
    cleanDisabledLetterButtons();

    hideEndGameModal();

    cleanCanvas();
}

function play(letter) {
    if (pressedLetters.includes(letter)) {
        return;
    }

    pressedLetters.push(letter);

    if (!currentWord.includes(letter) && errorCounter < 9) {
        showWrongLetters(errorCounter, letter);

        const drawPiece = gamePieces[errorCounter];
        drawPiece();

        errorSound.currentTime = 0;
        errorSound.play();

        errorCounter++;

        if (errorCounter === 9) {
            setTimeout(() => showDefeatModal(), 300);
            defeatSound.play();
        }

        return;
    }

    showCorrectLetters(currentWord, letter);

    hitSound.currentTime = 0;
    hitSound.play();

    if (hits === currentWord.length) {
        setTimeout(() => showWinModal(), 300);
        winSound.play();
    }
}
