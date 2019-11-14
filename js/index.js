const display = document.querySelector('.calc .display');
document.querySelectorAll('.calc .keys button, .calc .opers button')
    .forEach( button => button.addEventListener('click', keyOperPressed));

function keyOperPressed(event) {
    const btnText = event.target.innerText;
    display.value += btnText;
}

document.querySelector('.calc .equal')
    .addEventListener('click', equalPressed);

function equalPressed() {
    display.value = eval(display.value);
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




