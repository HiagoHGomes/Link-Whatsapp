document.querySelector('input[type=number]').oninvalid = function() {

    // remove mensagens de erro antigas
    this.setCustomValidity("");
  
    // reexecuta validação
    if (!this.validity.valid) {
  
        // se inválido, coloca mensagem de erro
        this.setCustomValidity("Adicione somente numeros, sem caracteres especiais ou letras.");
    }
  };