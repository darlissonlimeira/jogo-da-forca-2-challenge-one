function verifyKeypress(key) {
    if (key.length > 1) {
        return;
    }

    if (key.match(/[^A-Z]/)) {
        return;
    }

    return key;
}

window.addEventListener('keydown', (event) => {
    const letter = verifyKeypress(event.key);

    if (!letter) return;

    play(letter);
});
