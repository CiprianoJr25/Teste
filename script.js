function adicionarTarefa() {

    // Captura os dados do cliente usando o Input
    const tarefasInput = document.getElementById("tarefasInput"); //obtem o elemento input
    let tarefas = tarefasInput.value.trim(); //obtem o valor do input
    const mensagem = document.getElementById("mensagem");

    if (tarefas == "") {
        const mensagemErro = "Digite uma tarefa para ser inserida na lista!"; //mensagem de sucesso
        mensagem.textContent = mensagemErro; //envia a mensagem
        mensagem.style.color = "#A34743";
    }

    else {
        // Adiciona tarelas na lista (UL)
        const listaTarefas = document.getElementById("listaTarefas"); //obtem o elemento input
        let novaTarefa = document.createElement("li"); //cria o elemento li dentro da UL (lista de tarefas)

        novaTarefa.textContent = tarefas; // adiciona o valor obtido no input ao elemento li
        listaTarefas.appendChild(novaTarefa); // dis que na UL lista de tarefas receberá as terafas li

        // Mensagem final de sucesso
        const mensagemSucesso = "Tarefa adicionada com sucesso!"; //mensagem de sucesso
        mensagem.textContent = mensagemSucesso; //envia a mensagem
        mensagem.style.color = "#28A745";
    }

    // Limpa o campo de entrada
    tarefasInput.value = "";
}