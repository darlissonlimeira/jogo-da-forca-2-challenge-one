const winModal = document.querySelector('#modal-win');
const defeatModal = document.querySelector('#modal-defeat');

function showWinModal() {
    winModal.classList.remove('hidden-modal');
}

function showDefeatModal() {
    defeatModal.classList.remove('hidden-modal');
}

function hideEndGameModal() {
    winModal.classList.add('hidden-modal');
    defeatModal.classList.add('hidden-modal');
}
