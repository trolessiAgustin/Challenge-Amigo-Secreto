// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Creo la lista
let amigos = [];


// Creo una funcion para Asignar textos a elementos del apartado HTML
function asignarElementoTexto(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    }

// Desarrollo la funcion para Agregar Amigo
function añadirAmigo(){
    let amigoSecreto = document.getElementById(`amigo`).value.trim();
    // el trim al final del document es para limpiar los espacios vacios en el string
    

    if (amigoSecreto === '') { // Verifico si el nombre ingresado esta vacio
        alert('Por favor, inserte un nombre.');
        return;
    } else if (amigos.includes(amigoSecreto)) { // Verifico si el nombre ingresado esta en la lista
        alert('Este amigo ya está en la lista.');
        return;
    }
    
    amigos.push(` ${amigoSecreto}`); // Agrego el amigo a la lista de Amigos
     document.getElementById("amigo").value = ""; // Se vacia la linea de texto donde insertamos el amigo

    console.log(amigoSecreto);
    actualizarListaAmigos();
}

function sortearAmigo(){

    let sortearAmigo = parseInt(Math.floor(Math.random()*amigos.length));
    let amigoSorteado = amigos[sortearAmigo];
    asignarElementoTexto('#resultado', amigoSorteado);

    if(amigos.length === 0){
        asignarElementoTexto('#resultado', "Todos los amigos fueron sorteados");
        asignarElementoTexto('#listaAmigos', "");
    }   
     let pos = amigos.indexOf(amigoSorteado);
     let eleminarElemento = amigos.splice(sortearAmigo, 1);
     actualizarListaAmigos();

    console.log(amigoSorteado);
    console.log(amigos);

}


function actualizarListaAmigos() {
    asignarElementoTexto('#listaAmigos', ""); //Limpio la lista anterior

    for (let i = 0; i < amigos.length; i++) {
        let nuevoElemento = document.createElement("li"); // Creo un nuevo elemento <li>
        nuevoElemento.textContent = amigos[i]; // Asigno el nombre del amigo nuevo agregado
        listaAmigos.appendChild(nuevoElemento); // Agrego el <li> a la lista
    }
}

