const inputText = document.getElementById('input-text');
const resultText = document.getElementById('result-text');
const encryptBtn = document.getElementById('encrypt-btn');
const decryptBtn = document.getElementById('decrypt-btn');
const copyBtn = document.getElementById('copy-btn');
const validationMessage = document.getElementById('validation-message');


function encryptText(text) {
    return text.replace(/e/g, 'enter')
               .replace(/i/g, 'imes')
               .replace(/a/g, 'ai')
               .replace(/o/g, 'ober')
               .replace(/u/g, 'ufat');
}


function decryptText(text) {
    return text.replace(/enter/g, 'e')
               .replace(/imes/g, 'i')
               .replace(/ai/g, 'a')
               .replace(/ober/g, 'o')
               .replace(/ufat/g, 'u');
}

function isValidText(text) {
    const regex = /^[a-z\s]+$/;
    return regex.test(text);
}

function showValidationMessage(message) {
    validationMessage.textContent = message;
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Texto copiado!');
    });
}

const message_alert = 'Letras maiúsculas e caracteres especiais não são permitidos.';
const urlImage = './assets/Vector2.png'


function showValidationMessage(message) {
    
    if (message) {
        validationMessage.innerHTML = `<img src="${urlImage}" alt="Alerta"> ${message_alert}`;
    } else {
        validationMessage.innerHTML = '';
    }
}
encryptBtn.addEventListener('click', () => {
    const text = inputText.value;
    if (isValidText(text)) {
        const encryptedText = encryptText(text);
        resultText.textContent = encryptedText;
        showValidationMessage('');
    } else {
        showValidationMessage(message_alert);
    }
});

decryptBtn.addEventListener('click', () => {
    const text = inputText.value;
    if (isValidText(text)) {
        const decryptedText = decryptText(text);
        resultText.textContent = decryptedText;
        showValidationMessage('');
    } else {
        showValidationMessage(message_alert);
        
    }
});

copyBtn.addEventListener('click', () => {
    const text = resultText.textContent;
    if (text) {
        copyToClipboard(text);
    }
});


function updateResultText() {
    const inputText = document.getElementById("input-text").value;
    const copyButton = document.getElementById("copy-btn");
    const imageContainerRight = document.getElementById("image-container-right");
    const infContainerRight = document.getElementById("nothing-message");
    const textPreference = document.getElementById("text-preference");

    if (inputText.trim() !== "") {
        copyButton.style.display = "block";
        imageContainerRight.style.display = "none";
        infContainerRight.style.display = "none";
        textPreference.style.display = "none"
    } else {
        copyButton.style.display = "none";
        imageContainerRight.style.display = "block";
        infContainerRight.style.display = "block";
        textPreference.style.display = "block"
    }
}

document.addEventListener("DOMContentLoaded", function() {
    updateResultText();
});


function reloadPage() {
    location.reload();
}





function clearText() {
    const resultText = document.getElementById('result-text');
    resultText.innerText = '';
    updateText('');
}

document.getElementById('clear-btn').addEventListener('click', clearText);

function reloadPage() {
    location.reload();
}

document.getElementById('reload-btn').addEventListener('click', reloadPage);


window.onload = checkTextAndToggleImage;