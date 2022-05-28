function drawWord() {
    const wordsData = [...WORDS, ...getFromLocalStorage()];
    const randomIndex = Math.floor(Math.random() * wordsData.length);
    currentWord = wordsData[randomIndex];

    while (currentWord === lastWord) {
        currentWord = drawWord();
    }

    return currentWord;
}

function selectWord() {
    currentWord = drawWord();
    lastWord = currentWord;

    return currentWord;
}
