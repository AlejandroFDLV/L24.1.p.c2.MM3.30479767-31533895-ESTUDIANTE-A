export default class Cl_estudiante {
    constructor(nombre, acumNotas, cntMaterias){
        this.nombre = nombre;
        this.acumNotas = acumNotas;
        this.cntMaterias = cntMaterias;
    }
    promedio(){
        return this.acumNotas / this.cntMaterias;
    }
}