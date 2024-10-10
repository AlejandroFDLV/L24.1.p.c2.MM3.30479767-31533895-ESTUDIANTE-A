import Cl_becado from "./Cl_becado.js";
let becado1 = new Cl_becado("Mary", 132, 8);
let becado2 = new Cl_becado("Alirio", 315, 35);

let salida = document.getElementById("Salida");
let mostrarBecado = (becado) => {
    return `
        Nombre del estudiante: ${becado.nombre}
        <br> 
        Acumulado de notas: ${becado.acumNotas}
        <br> 
        Cantidad de materias: ${becado.cntMaterias}
        <br>
        Nota promedio: ${becado.promedio()}
        <br> 
        ${becado.nombre} recibe una beca de ${becado.beca()}      
    `
}
salida.innerHTML += `
    ${mostrarBecado(becado1)}
    <br>
    <br>
    ${mostrarBecado(becado2)}
`