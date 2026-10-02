// Funções
function adicao(){
    const Campo1 = document.querySelector("#Campo1")
    const Campo2 = document.querySelector("#Campo2")

    const somar = Number(Campo1.value) + Number(Campo2.value);

    const elementoResultado = document.querySelector("#resultado")

    elementoResultado.textContent = "Resultado " + somar;
}

function substracao(){
    const Campo1 = document.querySelector("#Campo1")
    const Campo2 = document.querySelector("#Campo2")

    const subtrair = Number(Campo1.value) - Number(Campo2.value);

    const elementoResultado = document.querySelector("#resultado")

    elementoResultado.textContent = "Resultado " + subtrair;
}

function multiplicacao(){
    const Campo1 = document.querySelector("#Campo1")
    const Campo2 = document.querySelector("#Campo2")

    const multiplicar = Number(Campo1.value) * Number(Campo2.value);

    const elementoResultado = document.querySelector("#resultado")

    elementoResultado.textContent = "Resultado " + multiplicar
}

function divisao(){
    const Campo1 = document.querySelector("#Campo1")
    const Campo2 = document.querySelector("#Campo2")

    const dividir = Number(Campo1.value) / Number(Campo2.value);

    const elementoResultado = document.querySelector("#resultado")

    elementoResultado.textContent = "Resultado " + dividir
}

function limparResultado() {
    const Resultado = document.querySelector("#resultado");
    const Campo1 = document.querySelector("#Campo1");
    const Campo2 = document.querySelector("#Campo2");

    Resultado.textContent = "Resultado:";
    Campo1.value = "";
    Campo2.value = "";
}

