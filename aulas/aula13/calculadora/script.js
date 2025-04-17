let textValue = '';
let input = document.querySelector("#inputText");

function addNumber(number) {
    textValue += number;
    updateText();
}

function addOperator(operator) {
    textValue += operator;
    updateText();
}

function addDecimal() {
    if (!textValue.endsWith('.')) {
        textValue += '.';
        updateText();
    }
}

function clearText() {
    textValue = '';
    updateText();
}

function updateText() {
    input.value = textValue;
}

function calculate() {
    try {
        textValue = eval(textValue).toString();
        updateText();
    } catch {
        textValue = 'Erro';
        updateText();
        setTimeout(clearText, 1000);
    }
}
