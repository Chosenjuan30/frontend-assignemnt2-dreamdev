const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');


buttons.forEach(button => {
    button.addEventListener('click', () => {
        handleInput(button.dataset.value);
    });
});


document.addEventListener('keydown', (e) => {
    const key = e.key;

    if (!isNaN(key) || ['+', '-', '*', '/', '.'].includes(key)) {
        handleInput(key);
    } else if (key === 'Enter') {
        handleInput('=');
    } else if (key === 'Backspace') {
        handleInput('DEL');
    } else if (key === 'Escape') {
        handleInput('C');
    }
});

function handleInput(value) {
    if (value === 'C') {
        display.value = '';
    } 
    else if (value === 'DEL') {
        display.value = display.value.slice(0, -1);
    } 
    else if (value === '=') {
        calculate();
    } 
    else {
        display.value += value;
    }
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}
