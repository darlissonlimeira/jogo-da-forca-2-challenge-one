const WORDS = ['ALURA', 'DESAFIO', 'ORACLE', 'HTML', 'JAVA', 'ONE'];

let lastWord;
let currentWord;
let pressedLetters = [];
let errorCounter = 0;
let hits = 0;

function showCorrectLetters(word, letter) {
    for (const [i, l] of [...word].entries()) {
        if (letter === l) {
            writeCorrectletter(i, letter);
            hits++;
        }
    }
}

function clearCurrentGameData() {
    hits = 0;
    errorCounter = 0;
    pressedLetters = [];
}

function startNewGame() {
    currentWord = selectWord();

    clearCorrectLetters();
    createLettersSpace(currentWord);
    clearWrongLetters();
    hideEndGameModal();
    clearCurrentGameData();
    clearDisabledLetterButtons();

    clearCanvas();
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

        errorCounter++;

        if (errorCounter === 9) {
            setTimeout(() => showDefeatModal(), 300);
        }

        return;
    }

    showCorrectLetters(currentWord, letter);

    if (hits === currentWord.length) {
        setTimeout(() => showWinModal(), 300);
    }
}
