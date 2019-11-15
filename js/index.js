const display = document.querySelector('.calc .display');
document.querySelectorAll('.calc .keys button, .calc .opers button')
    .forEach( button => button.addEventListener('click', keyOperPressed));

function keyOperPressed(event) {
    const btnText = event.target.innerText;
    display.value += btnText;
    if (/[+-/*%]/.test(this.value) && /[+-/*%]$/.test(display.value)) {
    display.value = display.value.replace(display.value[display.value.length - 1], '');
  }
}

document.querySelector('.calc .equal')
    .addEventListener('click', equalPressed);

function equalPressed() {
    if (eval(display.value) === Infinity) {
        display.value = 'You cannot divide by 0';
    } else {
        display.value = eval(display.value);
    }    
}

document.querySelector('.calc .clean')
    .addEventListener('click', cleanPressed);

function cleanPressed() {
    display.value = '';
}

document.querySelector('.calc .delete')
    .addEventListener('click', deletePressed);

function deletePressed() {
    display.value = display.value.slice(0, -1);
}




