const titulo = document.getElementById("titulo");
console.log(titulo.textContent);
titulo.textContent = "JavaScript alterou este título";

const descricao = document.getElementById("descricao");
console.log(descricao.textContent);
descricao.textContent = "O conteúdo foi alterado pelo DOM.";

const titulo1 = document.querySelector("#titulo");
console.log(titulo1);

const mensagem = document.querySelector(".mensagem");
console.log(mensagem);

const botao = document.querySelector("#botao");

const mensagens = document.querySelectorAll(".mensagem");

for (let cont = 0; cont < mensagens.length; cont++) {
    console.log(mensagens[cont].textContent);
}

// --- Funções ---

function mostrarMensagem() {
    titulo.textContent = "Botão Clicado!";
}

function alternarDestaque() {
    titulo.classList.toggle("destaque");
}

function mostrarNome() {
    const inputNome = document.querySelector("#nome");
    const resultado = document.querySelector("#resultado");

    if (inputNome.value.trim() === "") {
        resultado.textContent = "Digite um nome.";
    } else {
        resultado.textContent = `Olá, ${inputNome.value}!`;
    }
}

function trocarImagem() {
    const imagem = document.querySelector("#imagem");

    imagem.src = "https://upload.wikimedia.org/wikipedia/pt/4/43/FCBarcelona.svg";
    imagem.alt = "Escudo do Barça";
    imagem.style.width = "200px";
}

const link = document.querySelector("#link");
if (link) {
    link.href = "https://developer.mozilla.org";
    link.textContent = "Abrir documentação";
}

// --- Criando parágrafos dinamicamente ---
function adicionarParagrafo() {
    const novoParagrafo = document.createElement("p");
    novoParagrafo.textContent = "Este elemento foi criado pelo JavaScript";

    const conteudo = document.querySelector("#conteudo");
    conteudo.appendChild(novoParagrafo);
}

// --- Renderizando a lista de frutas ---
const frutas = ["Maçã", "Banana", "Laranja", "Uva"];
const lista = document.querySelector("#lista");

for (let cont = 0; cont < frutas.length; cont++) {
    const fruta = document.createElement("li");
    fruta.textContent = frutas[cont];
    lista.appendChild(fruta);
}

// --- Removendo elementos ---
function removerAviso() {
    const aviso = document.querySelector("#aviso");
    if (aviso) {
        aviso.remove();
    }
}