const btnTranslate = document.querySelector('#btn-translate');
const txtInput = document.querySelector('#txt-input');
const outputDiv = document.querySelector('#output');

const serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text;
}

function errorHandler(error) {
    alert("Server is not responding currently! Try again after some time.");
}

function clickHandler() {
    const inputText = txtInput.value;
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            const translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
        })
        .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler);