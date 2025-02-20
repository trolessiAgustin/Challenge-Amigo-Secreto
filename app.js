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
    actualizarListaAmigos(); //Muestra y actualiza en pantalla la lista de amigos
}

//Desarrollamos la funcion para Sortear los Amigos
function sortearAmigo(){

/*Elijo un elemento al azar de la lista con el formato Math.Random para seleccionar la posicion 
y guardarlo previamente en una variable*/
    let sortearAmigo = parseInt(Math.floor(Math.random()*amigos.length)); 
    let amigoSorteado = amigos[sortearAmigo];
    asignarElementoTexto('#resultado', amigoSorteado); //Imprimo el amigo sorteado

    if(amigos.length === 0){
        //Si ya no hay amigos por sortear, actualiza y muestra un mensaje
        asignarElementoTexto('#resultado', "No hay amigos por Sortear");
        asignarElementoTexto('#listaAmigos', "");
    }   
    //Elimino el elemento de la lista con .splice
     let eleminarElemento = amigos.splice(sortearAmigo, 1);
     //Actualizo la lista en pantalla, si no hay ningun elemento en la lista de amigos no muestra nada
     actualizarListaAmigos();
}

//Desarrollo la funcion para ir actualizando la lista de amigos en Pantalla
function actualizarListaAmigos() {
    //Limpio la lista de amigos
    asignarElementoTexto('#listaAmigos', "");

    for (let i = 0; i < amigos.length; i++) {
        // Creo un nuevo elemento <li>
        let nuevoElemento = document.createElement("li"); 
        // Asigno el nombre del amigo nuevo agregado
        nuevoElemento.textContent = amigos[i]; 
        // Agrego el <li> a la lista
        listaAmigos.appendChild(nuevoElemento); 
    }
}

