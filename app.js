// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos=[];

function agregarAmigo(){
let nombre = document.getElementById('amigo').value;
if (nombre==""){
    alert("Por favor, inserte un nombre.");
} else {
    amigos.push(nombre);
    limpiarCaja();
}
console.log(amigos);
lista = document.querySelector('#listaAmigos');
lista.innerHTML="";

for (let i=0; i<amigos.length;i++){
    var liNode = document.createElement('li');
    var txtNode = document.createTextNode(amigos[i]);
    liNode.appendChild(txtNode);
    lista.appendChild(liNode);
}
}

function limpiarCaja(){
document.getElementById('amigo').value="";
}

function sortearAmigo(){
    if (amigos==""){
        alert("Ingrese nombres para realizar el sorteo");
    } else {
        numeroGenerado= Math.floor(Math.random()*amigos.length);
        console.log(numeroGenerado);
        amigoSorteado=amigos[numeroGenerado];
        resultado=document.getElementById('resultado');
        resultado.innerHTML=`El amigo sorteado es: ${amigoSorteado}`;

    }
    
}