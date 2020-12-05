var btnTranslate = document.querySelector('#btn-translate');
var txtInput = document.querySelector('#txt-input');
var txtOutput = document.querySelector('#txt-output');

function clickHandler() {
    console.log(txtInput);
    console.log(txtOutput);
}

btnTranslate.addEventListener("click", clickHandler);