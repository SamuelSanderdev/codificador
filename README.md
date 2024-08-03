
# Documentação do Código JavaScript
#
### <p>Este documento fornece uma explicação detalhada do código JavaScript utilizado para criptografar e descriptografar texto em uma página web. O código também inclui funcionalidades de validação de entrada, cópia de texto para a área de transferência, e atualização de elementos da interface do usuário com base no conteúdo do texto.</p>


## Índice

<ol>
    <li>Descrição dos Elementos do DOM </li>
    <li>Funções de Criptografia e Descriptografia</li>
    <li>Funções de Validação e Mensagem</li>
    <li>Funções de Interação com a Página</li>
    <li> Eventos e Atualizações de Interface</li>
    <li> Função de Recarregar e Limpar Texto </li>
<ol>

<ul> <h1>Tecnologias utilizadas</h1> 
    <li><img src='./assets/icon-html.png'> HTML</li>
    <li><img src='./assets/icon-css.png'> CSS</li>
    <li><img src='./assets/icon-javascrip.png'> JAVASCRIPT</li>
</ul>

## Descrição dos Elementos do DOM

<img src='./assets/image-1.png' alt='chamada elementos'>

<p>Estes elementos do DOM são selecionados usando getElementById para manipulação posterior:</p>

<ul>
    <li>inputText: campo de entrada de texto.</li>
    <li>resultText: área onde o texto criptografado ou descriptografado é exibido.</li>
    <li>encryptBtn: botão para criptografar o texto.</li>
    <li>decryptBtn: botão para descriptografar o texto.</li>
    <li>copyBtn: botão para copiar o texto resultante para a área de transferência.</li>
    <li>validationMessage: área para exibir mensagens de validação.</li>
</ul>

## Funções de Criptografia e Descriptografia

### Função de Criptografia

<img src='./assets/image-2.png' alt='criptografar'>

<p>Esta função substitui caracteres específicos no texto de entrada por sequências predeterminadas para criptografá-lo.</p>

### Função de Descriptografia

<img src='./assets/image-3.png' alt='descriptografar'>

<p>Esta função reverte o processo de criptografia, substituindo as sequências criptografadas pelos caracteres originais.</p>

## Funções de Validação e Mensagem

### Função de Validação de Texto

<img src='./assets/image-4.png' alt='Validação de Texto'>

<p> Verifica se o texto contém apenas letras minúsculas e espaços.</p>

### Função para Exibir Mensagem de Validação

<img src='./assets/image-7.png' alt='Mensagem de validacao'>

<p>Exibe uma mensagem de validação com um ícone de alerta quando o texto contém caracteres inválidos.</p>

## Funções de Interação com a Página

###  Função para Copiar Texto

<img src='./assets/image-6.png' alt='copiar texo'>

<p>Copia o texto fornecido para a área de transferência e exibe um alerta.</p>

### Função para Atualizar Elementos com Base no Texto

<img src='./assets/image-11.png' alt='copiar texo'>

<p>Atualiza a visibilidade de elementos na interface com base no conteúdo do campo de entrada de texto.</p>

## Eventos e Atualizações de Interface

### Evento de Criptografia

<img src='./assets/image-8.png' alt='criptografia'>

<p>Adiciona um evento de clique ao botão de criptografia, criptografando o texto de entrada se for válido.</p>

### Evento de Descriptografia


<img src='./assets/image-9.png' alt='descriptografia'>

<p>Adiciona um evento de clique ao botão de descriptografia, descriptografando o texto de entrada se for válido.</p>

### Evento de Cópia de Texto


<img src='./assets/image-10.png' alt='copia texto'>

<p>Adiciona um evento de clique ao botão de copiar, copiando o texto resultante para a área de transferência.</p>

### Evento para Atualização Inicial

<img src='./assets/image-12.png' alt='atualizacao inicial'>

<p>Chama a função updateResultText quando a página é carregada para definir os estados iniciais dos elementos.</p>

## Função de Recarregar e Limpar Texto

### Função para Recarregar a Página

<img src='./assets/image-13.png' alt='recarrega pagina'>

<p>Recarrega a página quando o botão de recarregar é clicado.</p>

### Função para Limpar Texto

<img src='./assets/image-18.png' alt='limpa texto'>

<p>Limpa o texto exibido e chama updateText para atualizar a interface.</p>

### Chamada de Função ao Carregar a Página

<img src='./assets/image-20.png' alt='carrega pagina'>

<p>Chama a função checkTextAndToggleImage quando a página é carregada, para garantir que os elementos da interface estejam corretamente atualizados.</p>


#### <p>Esta documentação detalha cada parte do código JavaScript, proporcionando uma compreensão clara das funcionalidades implementadas e como elas interagem com a interface do usuário.</p>