import Cl_estudiante from "./Cl_estudiante.js";
export default class Cl_becado extends Cl_estudiante {
    constructor(nombre, acumNotas, cntMaterias) {
        super(nombre, acumNotas, cntMaterias);
    }
    beca(){
        if(this.promedio() >= 15){
            return 30;
        } else if(this.promedio() >=10 && this.promedio() < 15){
            return 20;
        } else {
            return "0, no le corresponde";
        }
    }

}
