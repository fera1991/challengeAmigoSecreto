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
    let lista = document.getElementById("listaAmigos")
    lista.innerHTML = "";

    listaNombres.forEach( nombre => {
        let elemento = document.createElement("li");
        elemento.textContent = nombre; 
        lista.appendChild(elemento);
    })
    
}

function sortearAmigo(){
    
    let numeroElegido = Math.floor(Math.random()*listaNombres.length);
    let amigoSorteado = listaNombres[numeroElegido];

    let rederizarGanador = document.getElementById("resultado");
    rederizarGanador.innerText = `El amigo secreto sorteado es: ${amigoSorteado}`;

    listaNombres = [];
    renderizarLista();

}