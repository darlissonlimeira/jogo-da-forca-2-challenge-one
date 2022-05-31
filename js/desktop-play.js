function verifyKeypress(key) {
    if (key.length > 1) {
        return;
    }

    if (key.match(/[^a-zA-Z]/)) {
        return;
    }

    return key.toUpperCase();
}

window.addEventListener('keydown', (event) => {
    if (gameSection.classList.contains('hidden')) {
        return;
    }

    const letter = verifyKeypress(event.key);
    if (!letter) return;

    play(letter);
});
