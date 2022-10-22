const { Persona } = require('./person.js');
//import { Persona } from "./person.js";


class Student extends Persona {

  constructor(nombre, apellidos, edad, genero, matricula, email, materias) {
    super(nombre, apellidos, edad, genero);
    this.matricula = matricula;
    this.email = email;
    this.materias = materias;
  }

  daysStudying(inicio, fin){
    const date1 = new Date(inicio);
    const date2 = new Date(fin);
    const oneDay = 1000 * 60 * 60 * 24;
    const diffInTime = date2.getTime() - date1.getTime();
    const diffInDays = Math.round(diffInTime / oneDay);
    return diffInDays;
  }
};



module.exports = { Student };