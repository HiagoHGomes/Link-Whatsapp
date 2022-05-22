document.querySelector('input[type=number]').oninvalid = function() {

  // remove mensagens de erro antigas
  this.setCustomValidity("");

  // reexecuta validação
  if (!this.validity.valid) {

      // se inválido, coloca mensagem de erro
      this.setCustomValidity("Adicione somente numeros, sem caracteres especiais ou letras.");
  } 
};


  function gerar() {
    let url = document.getElementById("number").value;
    if(!url) {
      alert("Campo vazio. Insira um numero de Whatsapp para continuar.")
      return;
    }

    var numero = document.querySelector('input#number')
    var res = document.getElementById('res')
    var n1 = Number(numero.value)
    var wpp = n1
    var link = document.getElementById('link')
    res.innerHTML = `Seu link do Whatsapp é:`;
    link.innerHTML =  `https://wa.me/55${n1}`;
  }

  function copiar() {
    var link = document.getElementById('link');

    link.select();
    link.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(link.value);

    alert(`URL copiada: ${link.value}`);
}