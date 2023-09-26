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

// dark mode/light mode
var icon = document.querySelector("[data-theme-toggle]");
loadTheme();

function toggleTheme() {
    let currentThemeSetting = document.querySelector("html").getAttribute("data-theme");

    if (currentThemeSetting === "dark") {
        document.querySelector("html").setAttribute("data-theme", "light");
        currentThemeSetting = "light";
        icon.innerText = "light_mode";

        localStorage.setItem("theme", "light");
    } else {
        document.querySelector("html").setAttribute("data-theme", "dark");
        icon.innerText = "dark_mode";

        localStorage.setItem("theme", "dark");
    }
}

function loadTheme () {
    let SystemThemeSetting = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    let currentThemeSetting = localStorage.getItem("theme");         
    
    if(currentThemeSetting === "dark" || (SystemThemeSetting === true && currentThemeSetting === null)) {
        newTheme = "dark";
        changeIcon = "dark_mode";
    } else {
        newTheme = "light";
        changeIcon = "light_mode";
    }
    
    icon.innerText = changeIcon;
    document.querySelector("html").setAttribute("data-theme", newTheme);
}