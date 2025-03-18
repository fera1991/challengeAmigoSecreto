// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Lista de nombre de amigos a
let listaNombres = [];

function agregarAmigo() {

    //Obtener valor del input
    let nombreAmigo = document.getElementById("amigo").value;
    
    console.log(nombreAmigo);

    //Verifica si el input no esta vacio.
    if(nombreAmigo != ""){
        //agrega el nombre del amigo a la lista.
        document.getElementById("resultado").innerText = "";
        listaNombres.push(nombreAmigo);
        nombreAmigo = "";
        renderizarLista();
    }
    else{
        //Imprime un alert para indicarle al usuario que no deje vacio el texto.
        alert("Por favor, ingrese un nombre válido.");
    }
    
    //Limpiar input
    document.getElementById("amigo").value = "";
}

function renderizarLista() {
    //Se obtiene la el elemento ul y se limpia para renderizarlo al completo, se puede reutilizar este rederizado al llamar al ganador para limpiar  la lista.
    let lista = document.getElementById("listaAmigos")
    lista.innerHTML = "";

    //Se recorre la lista de amigos para agregarlos cada uno como un hijo de elemento ul y renderizarlo como un elemento li.
    listaNombres.forEach( nombre => {
        let elemento = document.createElement("li");
        elemento.textContent = nombre; 
        lista.appendChild(elemento);
    })
    
}

function sortearAmigo(){
    
    //Verificacion que la lista de nombre de amigos no este vacia.
    if(listaNombres.length != 0){
        //Se obtiene un numero aleatorio segun la cantidad de elementos de la lista.
        let numeroElegido = Math.floor(Math.random()*listaNombres.length);
        let amigoSorteado = listaNombres[numeroElegido];
        
        //Se renderisa el nombre del ganador.
        let rederizarGanador = document.getElementById("resultado");
        rederizarGanador.innerText = `El amigo secreto sorteado es: ${amigoSorteado}`;
        
        //Se limpia la lista para que solo se muestre el ganador.
        listaNombres = [];
        renderizarLista();
    }
    else{
        //Mensaje al usuario para que agrege un nombre a la lista.
        alert("Debes agregar al menos un amigo para participar en el sorteo.")
    }

}


