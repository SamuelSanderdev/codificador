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

const message_alert = 'Letras maiúsculas e caracteres especiais não são permitidos.';
const urlImage = './assets/Vector2.png'

// Função para mostrar mensagem de validação
function showValidationMessage(message) {
    // Certifique-se de que há um elemento com este ID no seu HTML
    if (message) {
        validationMessage.innerHTML = `<img src="${urlImage}" alt="Alerta"> ${message_alert}`;
    } else {
        validationMessage.innerHTML = '';
    }
}
// Adiciona evento de clique para criptografar
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

// Adiciona evento de clique para descriptografar
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

// Adiciona evento de clique para copiar o texto
copyBtn.addEventListener('click', () => {
    const text = resultText.textContent;
    if (text) {
        copyToClipboard(text);
    }
});



// Função para verificar o conteúdo do textarea e atualizar a visibilidade dos elementos
function updateResultText() {
    const inputText = document.getElementById("input-text").value;
    const copyButton = document.getElementById("copy-btn");
    const imageContainerRight = document.getElementById("image-container-right");
    const infContainerRight = document.getElementById("nothing-message");
    const textPreference = document.getElementById("text-preference");

    if (inputText.trim() !== "") {
        // Se o texto não estiver vazio
        copyButton.style.display = "block";
        imageContainerRight.style.display = "none";
        infContainerRight.style.display = "none";
        textPreference.style.display = "none"
    } else {
        // Se o texto estiver vazio
        copyButton.style.display = "none";
        imageContainerRight.style.display = "block";
        infContainerRight.style.display = "block";
        textPreference.style.display = "block"
    }
}

// Função para recarregar a página
function reloadPage() {
    location.reload();
}

// Chamar updateResultText quando a página carrega para definir estados iniciais
document.addEventListener("DOMContentLoaded", function() {
    updateResultText();
});


// Função para recarregar a página
function reloadPage() {
    location.reload();
}





function clearText() {
    const resultText = document.getElementById('result-text');
    resultText.innerText = '';
    updateText(''); // Chama a função updateText para garantir que a imagem seja exibida
}

// Event listener para o botão de limpar
document.getElementById('clear-btn').addEventListener('click', clearText);

function reloadPage() {
    location.reload();
}

document.getElementById('reload-btn').addEventListener('click', reloadPage);

// Chama a função quando a página é carregada
window.onload = checkTextAndToggleImage;