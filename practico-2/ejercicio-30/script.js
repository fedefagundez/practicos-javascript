document.querySelector("#i1j1").addEventListener("click", jugar11);
document.querySelector("#i2j1").addEventListener("click", jugar21);
document.querySelector("#i3j1").addEventListener("click", jugar31);
document.querySelector("#i1j2").addEventListener("click", jugar12);
document.querySelector("#i2j2").addEventListener("click", jugar22);
document.querySelector("#i3j2").addEventListener("click", jugar32);
document.querySelector("#i1j3").addEventListener("click", jugar13);
document.querySelector("#i2j3").addEventListener("click", jugar23);
document.querySelector("#i3j3").addEventListener("click", jugar33);

document.querySelector("button").addEventListener("click", seleccionarEmoticon);


let jugador = 1;
let emoticonJugador1 = "";
let emoticonJugador2 = "";

function seleccionarEmoticon(){

    let emoticon = document.querySelector("#emoticon").value;

    if(emoticonJugador1 === "" && jugador === 1){
        switch(emoticon) {
            case "1":
                emoticonJugador1 = '&#129312';
                break;
            case "2":
                emoticonJugador1 = '&#129314'
                break;
            case "3":
                emoticonJugador1 = '&#129298'
                break;
        }
        document.querySelector("p").innerHTML = "Jugador 2 debe seleccionar su emoticón...";
        jugador = 2;
    } else if(emoticonJugador2 === "" && jugador === 2){
        switch(emoticon) {
            case "1":
                emoticonJugador2 = '&#129312';
                break;
            case "2":
                emoticonJugador2 = '&#129314'
                break;
            case "3":
                emoticonJugador2 = '&#129298'
                break;
        }
        document.querySelector("p").innerHTML = "Jugador 1 comience el juego...";
        jugador = 1;
    }
}



function jugar11() {
    if(jugador === 1){
        document.querySelector("#i1j1").innerHTML = emoticonJugador1;
        jugador = 2;
    } else {
        document.querySelector("#i1j1").innerHTML = emoticonJugador2;
        jugador = 1;
    }
    document.querySelector("p").innerHTML = "";
}

function jugar21() {
    if(jugador === 1){
        document.querySelector("#i2j1").innerHTML = emoticonJugador1;
        jugador = 2;
    } else {
        document.querySelector("#i2j1").innerHTML = emoticonJugador2;
        jugador = 1;
    }
    document.querySelector("p").innerHTML = "";
}

function jugar31() {
    if(jugador === 1){
        document.querySelector("#i3j1").innerHTML = emoticonJugador1;
        jugador = 2;
    } else {
        document.querySelector("#i3j1").innerHTML = emoticonJugador2;
        jugador = 1;
    }
    document.querySelector("p").innerHTML = "";
}

function jugar12() {
    if(jugador === 1){
        document.querySelector("#i1j2").innerHTML = emoticonJugador1;
        jugador = 2;
    } else {
        document.querySelector("#i1j2").innerHTML = emoticonJugador2;
        jugador = 1;
    }
    document.querySelector("p").innerHTML = "";
}

function jugar22() {
    if(jugador === 1){
        document.querySelector("#i2j2").innerHTML = emoticonJugador1;
        jugador = 2;
    } else {
        document.querySelector("#i2j2").innerHTML = emoticonJugador2;
        jugador = 1;
    }
    document.querySelector("p").innerHTML = "";
}

function jugar32() {
    if(jugador === 1){
        document.querySelector("#i3j2").innerHTML = emoticonJugador1;
        jugador = 2;
    } else {
        document.querySelector("#i3j2").innerHTML = emoticonJugador2;
        jugador = 1;
    }
    document.querySelector("p").innerHTML = "";
}

function jugar13() {
    if(jugador === 1){
        document.querySelector("#i1j3").innerHTML = emoticonJugador1;
        jugador = 2;
    } else {
        document.querySelector("#i1j3").innerHTML = emoticonJugador2;
        jugador = 1;
    }
    document.querySelector("p").innerHTML = "";
}

function jugar23() {
    if(jugador === 1){
        document.querySelector("#i2j3").innerHTML = emoticonJugador1;
        jugador = 2;
    } else {
        document.querySelector("#i2j3").innerHTML = emoticonJugador2;
        jugador = 1;
    }
    document.querySelector("p").innerHTML = "";
}

function jugar33() {
    if(jugador === 1){
        document.querySelector("#i3j3").innerHTML = emoticonJugador1;
        jugador = 2;
    } else {
        document.querySelector("#i3j3").innerHTML = emoticonJugador2;
        jugador = 1;
    }
    document.querySelector("p").innerHTML = "";
}