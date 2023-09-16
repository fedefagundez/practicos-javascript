document.querySelector("#btnBoton").addEventListener("click", encontrarDepartamento);

function encontrarDepartamento(){
    const matricula = document.querySelector("#txtMatricula").value;
    let departamento = "";

    switch(matricula.charAt(0)){
        case "A":
            departamento = "Canelones";
            break;
        case "B":
            departamento = "Maldonado";
            break;
        case "C":
            departamento = "Rocha";
            break;
        case "D":
            departamento = "Treinta y Tres";
            break;
        case "E":
            departamento = "Cerro Largo";
            break;
        case "F":
            departamento = "Rivera";
            break;
        case "G":
            departamento = "Artigas";
            break;
        case "H":
            departamento = "Salto";
            break;
        case "I":
            departamento = "Paysandú";
            break;
        case "J":
            departamento = "Río Negro";
            break;
        case "K":
            departamento = "Soriano";
            break;
        case "L":
            departamento = "Colonia";
            break;
        case "M":
            departamento = "San José";
            break;
        case "N":
            departamento = "Flores";
            break;
        case "O":
            departamento = "Florida";
            break;
        case "P":
            departamento = "Lavalleja";
            break;
        case "Q":
            departamento = "Durazno";
            break;
        case "R":
            departamento = "Tacuarembó";
            break;
        case "S":
            departamento = "Montevideo";
            break;
    }

    document.querySelector("#pParrafo").innerHTML = `La matricula ${matricula} pertenece al departamento de ${departamento}.`
}