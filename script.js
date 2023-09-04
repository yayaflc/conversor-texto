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

    // split > separa o texto em um array
    var palavras = texto.split(" ");
    var resultado = document.getElementById("resultado");

    // map > percorre o array e retorna um novo array
    //                             podia ser qlqr nome aqui, seria o "item individual", que percorre o array 1 de cada vez
    resultado.innerHTML = palavras.map((palavra) => {
        // charAt > retorna o caractere na posição informada
        // slice > retorna uma parte do texto
        return palavra.charAt(0).toUpperCase() + palavra.slice(1);
    }).join(" ");
}
