homeNewGame.addEventListener('click', () => {
    startNewGame();
    homeSection.classList.add('hidden');
    gameSection.classList.remove('hidden');
});

homeAddWord.addEventListener('click', () => {
    homeSection.classList.add('hidden');
    addWordSection.classList.remove('hidden');
});

gameNew.addEventListener('click', () => {
    startNewGame();
});

gameGiveUp.addEventListener('click', () => {
    gameSection.classList.add('hidden');
    homeSection.classList.remove('hidden');
});

addWordSave.addEventListener('click', () => {
    const success = saveWord();

    if (success) {
        startNewGame();
        addWordSection.classList.add('hidden');
        gameSection.classList.remove('hidden');
    } else {
        return;
    }
});

addWordCancel.addEventListener('click', () => {
    resetWordInput();
    addWordSection.classList.add('hidden');
    homeSection.classList.remove('hidden');
});

modalNewGameBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        startNewGame();
    });
});

modalExitBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        hideEndGameModal();
        gameSection.classList.add('hidden');
        homeSection.classList.remove('hidden');
    });
});
