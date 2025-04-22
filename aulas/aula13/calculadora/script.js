let textValue = '';
let input = document.querySelector("#inputText");
const LIMITE_CARACTERES = 12;

function addNumber(number) {
    textValue += number;
    updateText();
}

function addOperator(operator) {
    if (textValue.length < LIMITE_CARACTERES && (operator !== '%' || !textValue.endsWith('%'))) {
        textValue += operator;
        updateText();
    }
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
        let conta = textValue.replace(/(\d+)%(\d+)/g, '($1/100)*$2');
        let resultado = eval(conta);
        if (!Number.isInteger(resultado)) {
            resultado = resultado.toFixed(2);
        }

        textValue = resultado.toString();
        updateText();
    } catch {
        textValue = 'Erro';
        updateText();
        setTimeout(clearText, 1000);
    }
}

function deleteLast() {
    textValue = textValue.slice(0, -1);
    updateText();
}
