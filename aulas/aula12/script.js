alert("ola mundo");

let titulo = document.querySelector("#titulo");
titulo.textContent = "novo texto";
titulo.style.color = "red";

function mostraAlerta(){
    alert("funciona");
}

function mostraTexto(texto){
    alert(texto);
}

mostraTexto("Feliz Páscoa!");
