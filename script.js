function converterUpperCase() {
  var texto = document.getElementById("texto").value;
  var resultado = document.getElementById("resultado");
  resultado.innerHTML = texto.toUpperCase();
}

function converterLowerCase() {
    var texto = document.getElementById("texto").value;
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = texto.toLowerCase();
}

function converterSpecial() {
    var texto = document.getElementById("texto").value;
    const palavras = texto.split(" ");
    var resultado = document.getElementById("resultado");

    // map > percorre o array e retorna um novo array

    //                                  podia ser qlqr nome aqui
    resultado.innerHTML = palavras.map((palavra) => {
        return palavra.charAt(0).toUpperCase() + palavra.slice(1);
    }).join(" ");
}
