function copiar(){
    const textoOut = document.querySelector('#texto-out').value;
    textoOut.select;
    navigator.clipboard.writeText(textoOut);
    console.log("el texto copiado es: " + textoOut);
    
}

function encriptarTexto(encriptar) {

    var textoACambiar = texto.value;

    if (encriptar) {
        var stringsARecorrer = letras;
        var reemplazo = cifrado;
    }
    if (!encriptar) {
        var stringsARecorrer = cifrado.reverse();
        var reemplazo = letras.reverse();

    }

    for (indice = 0; indice < stringsARecorrer.length; indice++) {

        let re = new RegExp(stringsARecorrer[indice], 'g');

        textoACambiar = textoACambiar.replace(re, reemplazo[indice]);
    }

    inicialBox.style.display = "none";
    finalBox.style.display = "flex";
    document.getElementById("texto-out").innerHTML = textoACambiar;
   // buttonCopiar.style.display = "block";
    document.getElementById("texto-in").value = "";
}



var texto = document.querySelector('#texto-in');
var buttonEncriptador = document.querySelector('#encriptar');
var buttonDesencriptador = document.querySelector('#desencriptar');
var buttonCopiar = document.querySelector('#copiar');
var inicialBox = document.querySelector('#box-inicial')
var finalBox = document.querySelector('#box-final');

var letras = ['e', 'i', 'a', 'o', 'u'];
var cifrado = ['enter', 'imes', 'ai', 'ober', 'ufat'];



