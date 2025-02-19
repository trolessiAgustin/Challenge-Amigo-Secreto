// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

/*
    PASOS DEL AMIGO SECRETO

    1) INGRESAR AMIGOS PARA SORTEAR
    2) INGRESARLOS EN UN VECTOR
    3) MOSTRAR LA LISTA EN PANTALLA  
*/
listaAmigos = [];

function asignarElementoTexto(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    }


function añadirAmigo(){
    let amigoSecreto = document.getElementById(`amigo`).value;
    listaAmigos.push(` ${amigoSecreto}`);
    asignarElementoTexto('#listaAmigos', listaAmigos);
    console.log(amigoSecreto);
}

function sortearAmigo(){
    limpiarCaja();
    asignarElementoTexto('#listaAmigos', "");
    let sortearAmigo = parseInt(Math.floor(Math.random()*listaAmigos.length));
    let amigoSorteado = listaAmigos[sortearAmigo];
    asignarElementoTexto('#resultado', amigoSorteado);
    console.log(amigoSorteado);
}

function limpiarCaja(){
    document.querySelector(`#listaAmigos`).value = "";
}



