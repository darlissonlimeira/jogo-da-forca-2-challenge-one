function saveToLocalStorage(word) {
    const hangmanData = JSON.parse(localStorage.getItem('hangmanData')) || [];

    hangmanData.push(word);

    localStorage.setItem('hangmanData', JSON.stringify(hangmanData));
}

function getFromLocalStorage() {
    const hangmanData = JSON.parse(localStorage.getItem('hangmanData')) || [];
    return hangmanData;
}
