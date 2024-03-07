const keyboard = document.getElementById('keyboard');
const textarea = document.getElementById('textarea');

const keys = [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ç'],
    ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.'],
    ['Ctrl', 'Space', 'Backspace']
];

keys.forEach(row => {
    const rowElement = document.createElement('div');
    rowElement.classList.add('keyboard-row');

    row.forEach(key => {
        const keyElement = document.createElement('div');
        keyElement.classList.add('key');
        keyElement.textContent = key;
        keyElement.addEventListener('click', () => handleKeyClick(key));
        rowElement.appendChild(keyElement);
    });

    keyboard.appendChild(rowElement);
});

function handleKeyClick(key) {
    switch (key) {
        case 'Backspace':
            textarea.value = textarea.value.slice(0, -1);
            break;
        case 'Space':
            textarea.value += ' ';
            break;
        case 'Enter':
            textarea.value += '\n';
            break;
        default:
            textarea.value += key;
    }
}
