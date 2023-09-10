document.querySelector("#i1j1").addEventListener("click", jugar11);
document.querySelector("#i2j1").addEventListener("click", jugar21);
document.querySelector("#i3j1").addEventListener("click", jugar31);
document.querySelector("#i1j2").addEventListener("click", jugar12);
document.querySelector("#i2j2").addEventListener("click", jugar22);
document.querySelector("#i3j2").addEventListener("click", jugar32);
document.querySelector("#i1j3").addEventListener("click", jugar13);
document.querySelector("#i2j3").addEventListener("click", jugar23);
document.querySelector("#i3j3").addEventListener("click", jugar33);


let jugador = 1;



function jugar11() {
    if(jugador === 1){
        document.querySelector("#i1j1").textContent = "X";
        jugador = 2;
    } else {
        document.querySelector("#i1j1").textContent = "O";
        jugador = 1;
    }
    document.querySelector("p").innerHTML = "";
}

function jugar21() {
    if(jugador === 1){
        document.querySelector("#i2j1").textContent = "X";
        jugador = 2;
    } else {
        document.querySelector("#i2j1").textContent = "O";
        jugador = 1;
    }
    document.querySelector("p").innerHTML = "";
}

function jugar31() {
    if(jugador === 1){
        document.querySelector("#i3j1").textContent = "X";
        jugador = 2;
    } else {
        document.querySelector("#i3j1").textContent = "O";
        jugador = 1;
    }
    document.querySelector("p").innerHTML = "";
}

function jugar12() {
    if(jugador === 1){
        document.querySelector("#i1j2").textContent = "X";
        jugador = 2;
    } else {
        document.querySelector("#i1j2").textContent = "O";
        jugador = 1;
    }
    document.querySelector("p").innerHTML = "";
}

function jugar22() {
    if(jugador === 1){
        document.querySelector("#i2j2").textContent = "X";
        jugador = 2;
    } else {
        document.querySelector("#i2j2").textContent = "O";
        jugador = 1;
    }
    document.querySelector("p").innerHTML = "";
}

function jugar32() {
    if(jugador === 1){
        document.querySelector("#i3j2").textContent = "X";
        jugador = 2;
    } else {
        document.querySelector("#i3j2").textContent = "O";
        jugador = 1;
    }
    document.querySelector("p").innerHTML = "";
}

function jugar13() {
    if(jugador === 1){
        document.querySelector("#i1j3").textContent = "X";
        jugador = 2;
    } else {
        document.querySelector("#i1j3").textContent = "O";
        jugador = 1;
    }
    document.querySelector("p").innerHTML = "";
}

function jugar23() {
    if(jugador === 1){
        document.querySelector("#i2j3").textContent = "X";
        jugador = 2;
    } else {
        document.querySelector("#i2j3").textContent = "O";
        jugador = 1;
    }
    document.querySelector("p").innerHTML = "";
}

function jugar33() {
    if(jugador === 1){
        document.querySelector("#i3j3").textContent = "X";
        jugador = 2;
    } else {
        document.querySelector("#i3j3").textContent = "O";
        jugador = 1;
    }
    document.querySelector("p").innerHTML = "";
}