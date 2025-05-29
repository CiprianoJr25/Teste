function adicionarTarefa() {

    // Captura os dados do cliente usando o Input
    let tarefasInput = document.getElementById("tarefasInput"); //obtem o elemento input
    let tarefas = tarefasInput.value; //obtem o valor do input

    // Adiciona tarelas na lista (UL)
    let listaTarefas = document.getElementById("listaTarefas"); //obtem o elemento input
    let novaTarefa = document.createElement("li"); //cria o elemento li dentro da UL (lista de tarefas)

    novaTarefa.textContent = tarefas; // adiciona o valor obtido no input ao elemento li
    listaTarefas.appendChild(novaTarefa); // dis que na UL lista de tarefas receberá as terafas li

    // Mensagem final de sucesso
    let mensagem = "Tarefa adicionada com sucesso!"; //mensagem de sucesso
    document.getElementById("mensagem").textContent = mensagem; //envia a mensagem

    // Limpa o campo de entrada
    tarefasInput.value = "";
}