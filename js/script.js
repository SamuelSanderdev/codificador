// Seleciona os elementos do DOM
const inputText = document.getElementById('input-text');
const resultText = document.getElementById('result-text');
const encryptBtn = document.getElementById('encrypt-btn');
const decryptBtn = document.getElementById('decrypt-btn');
const copyBtn = document.getElementById('copy-btn');
const validationMessage = document.getElementById('validation-message');

// Função para criptografar o texto
function encryptText(text) {
    return text.replace(/e/g, 'enter')
               .replace(/i/g, 'imes')
               .replace(/a/g, 'ai')
               .replace(/o/g, 'ober')
               .replace(/u/g, 'ufat');
}

// Função para descriptografar o texto
function decryptText(text) {
    return text.replace(/enter/g, 'e')
               .replace(/imes/g, 'i')
               .replace(/ai/g, 'a')
               .replace(/ober/g, 'o')
               .replace(/ufat/g, 'u');
}

// Função para validar o texto
function isValidText(text) {
    const regex = /^[a-z\s]+$/;
    return regex.test(text);
}

// Função para exibir a mensagem de validação
function showValidationMessage(message) {
    validationMessage.textContent = message;
}

// Função para copiar o texto para a área de transferência
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Texto copiado!');
    });
}

// Adiciona evento de clique para criptografar
encryptBtn.addEventListener('click', () => {
    const text = inputText.value;
    if (isValidText(text)) {
        const encryptedText = encryptText(text);
        resultText.textContent = encryptedText;
        showValidationMessage('');
    } else {
        showValidationMessage('Letras maiúsculas e caracteres especiais não são permitidos.');
    }
});

// Adiciona evento de clique para descriptografar
decryptBtn.addEventListener('click', () => {
    const text = inputText.value;
    if (isValidText(text)) {
        const decryptedText = decryptText(text);
        resultText.textContent = decryptedText;
        showValidationMessage('');
    } else {
        showValidationMessage('Letras maiúsculas e caracteres especiais não são permitidos.');
        
    }
});

// Adiciona evento de clique para copiar o texto
copyBtn.addEventListener('click', () => {
    const text = resultText.textContent;
    if (text) {
        copyToClipboard(text);
    }
});


function textClear() {
    // Se você quiser limpar um campo de entrada de texto
    document.getElementById('inputTexto').value = '';

    // Se você quiser limpar uma área de exibição de texto
    document.getElementById('textarea').innerHTML = '';
};
