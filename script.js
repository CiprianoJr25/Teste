function adicionarTarefa() {

    if (document.getElementById("tarefasInput").value.trim() === "") {
        alert("Por favor, insira uma tarefa.");
        return;
    }
    else if (document.getElementById("tarefasInput").value.length > 100) {
        alert("A tarefa não pode ter mais de 100 caracteres.");
        return;
    }
    else if (document.getElementById("tarefasInput").value.length < 5) {
        alert("A tarefa deve ter pelo menos 5 caracteres.");
        return;
    }
    else {
        let mensagem = "Tarefa adicionada com sucesso!";

        let tarefasInput = document.getElementById("tarefasInput");
        let tarefas = tarefasInput.value;
        document.getElementById("mensagem").textContent = mensagem;

        let listaTarefas = document.getElementById("listaTarefas");
        let novaTarefa = document.createElement("li");
        novaTarefa.textContent = tarefas;

        listaTarefas.appendChild(novaTarefa);


        tarefasInput.value = ""; // Limpa o campo de entrada

    }
}