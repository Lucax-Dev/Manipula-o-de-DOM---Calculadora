function adicionarTarefa() {
    const input = document.querySelector("#novaTarefa");
    const mensagem = document.querySelector("#mensagem");
    const lista = document.querySelector("#listaTarefas");

    // 1. Validação de campo vazio
    if (input.value.trim() === "") {
        mensagem.textContent = "Digite uma tarefa.";
        return;
    } else {
        mensagem.textContent = "";
    }

    // 2. Cria a 'li' da tarefa
    const tarefa = document.createElement("li");
    tarefa.textContent = input.value + " ";

    // 3. Cria o botão 'Excluir' específico para esta tarefa
    const botaoExcluir = document.createElement("button");
    botaoExcluir.textContent = "Excluir";

    // 4. Configura o clique para remover esta tarefa
    botaoExcluir.onclick = function() {
        tarefa.remove();
    };

    // 5. Junta o botão na tarefa e a tarefa na lista
    tarefa.appendChild(botaoExcluir);
    lista.appendChild(tarefa);

    // 6. Limpa o input
    input.value = "";
}