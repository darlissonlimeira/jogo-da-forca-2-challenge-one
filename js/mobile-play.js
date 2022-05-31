const virtualButtons = document.querySelectorAll('.mobile-keyboard__key');

function disableLetterButton(btn) {
    btn.disabled = true;
}

function cleanDisabledLetterButtons() {
    virtualButtons.forEach((btn) => {
        btn.disabled = false;
    });
}

virtualButtons.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        const pressedLetter = event.target.getAttribute('data-key');
        disableLetterButton(btn);
        play(pressedLetter);
    });
});
