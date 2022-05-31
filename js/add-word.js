const wordInput = document.querySelector('#addword-input');
const helpMessage = document.querySelector('.h-add-word__helper-message');

function resetWordInput() {
    helpMessage.classList.remove('alert-text');
    wordInput.value = '';
}

function saveWord() {
    const word = wordInput.value.trim();
    const isValidWord = validateWord(word);

    if (!word || !isValidWord) {
        helpMessage.classList.add('alert-text');
        return;
    }

    resetWordInput();

    saveToLocalStorage(word);

    return word;
}

function validateWord(word) {
    const wordIsInvalide = word.match(/[^A-Z]/);

    if (wordIsInvalide) {
        return;
    }

    return word;
}
