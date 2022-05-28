function clearCorrectLetters() {
    const letterSpaces = document.querySelectorAll('.letter-space');

    for (const el of letterSpaces) {
        el.remove();
    }
}

function createLettersSpace() {
    const temp = `<li class="h-game-info__correct-letter letter-space"></li>`;
    const wordSpace = document.querySelector('.h-game-info__correct-letters');

    let nodes = '';

    for (let i = 0; i < currentWord.length; i++) {
        nodes += temp;
    }

    wordSpace.innerHTML = nodes;
}

function clearWrongLetters() {
    const wrongLetters = document.querySelectorAll(
        '.h-game-info__wrong-letter'
    );

    for (const letterSpace of wrongLetters) {
        letterSpace.classList.add('hidden-wrong-letter');
        letterSpace.innerHTML = '';
    }
}

function showWrongLetters(index, letter) {
    const wrongLetters = document.querySelectorAll(
        '.h-game-info__wrong-letter'
    );

    wrongLetters[index].classList.remove('hidden-wrong-letter');
    wrongLetters[index].innerHTML = letter;
}

function writeCorrectletter(index, letter) {
    const spaceLetters = document.querySelectorAll(
        '.h-game-info__correct-letter'
    );

    spaceLetters[index].innerHTML = letter;
}
