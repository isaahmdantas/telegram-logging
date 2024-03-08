function sendMessage() {
    // Obter valores do formulário
    var type = document.getElementById("type").value;
    var message = document.getElementById("message").value;

    if (type && message) {
        console.log(type, message);
    } else {
        alert('Informe os dados obrigatórios!');
    }

}