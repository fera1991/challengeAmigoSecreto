// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaNombres = [];

function agregarAmigo() {

    let nombreAmigo = document.getElementById("amigo").value;
    
    console.log(nombreAmigo);

    if(nombreAmigo != ""){
        listaNombres.push(nombreAmigo);
    }
    else{
        alert("No dejes vacio el en la entrada de texto");
    }
    
}