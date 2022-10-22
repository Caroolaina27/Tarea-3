var express = require('express');
// var popup = require('popups');


const app = express();
// const popup = popups();
const port = 3000;


const { Student } = require('./student.js');
const { Persona } = require('./person.js');

const persona1 = new Persona('Carolina', 'Araiza', '33', 'M');
const persona2 = new Persona("Victoria", "Araiza", "35", "M");
const persona3 = new Persona("Roman", "Araiza", "30", "H");


var materias1 = {materia1: "Diseno mecanico I", materia2: "Electricidad y Magnatismo", materia3:"Motores"};
var materias2 = {materia1: "Costos I", materia2: "SAP", materia3:"Legislacion Fiscal II"};
var materias3 = {materia1: "Excel Avanzado", materia2: "Informatica", materia3:"Taller de Lectura y Redaccion"};



const alum1 = new Student("Enrique", "Miranda", "16", "H","02IDSABC2020 ", "enrique@mac.com",materias1);
const alum2 = new Student("Norma", "Chavarin", "45", "M","02IDSABC2020 ", "norma@mac.com",materias2);
const alum3 = new Student("Oscar", "Miranda", "40", "H","02IDSABC2020 ", "oscar@mac.com",materias3);




// console.log(student1);
var cantidadDeMaterias  = Object.keys(alum1.materias).length;
var cantMaterias = (`El total de materias del alumn@ ${alum1.getNom()+" "+alum1.getApell()} son: ${cantidadDeMaterias}`);
var fechaDeInicio = "12/27/2022";
var hoy = "09/20/2022";
var diasEstudio = (`El total de días que lleva estudiando son: ${alum1.daysStudying(fechaDeInicio, hoy)}`);
const lista = [];
lista.push({alum1,alum2,alum3});


app.get('/',(req, res) => {
    // popup.alert({
    //     content: 'Hello!'
    // });
    res.format({"text/html":() => {res.send('<h1>BIENVENIDOS ESTUDIANTES</h1>')}    
})
});

app.get('/students',(req, res) => {    
    res.send(lista);
});
app.post('/altas', (req, res) =>{
    const student6 = new Student("Carlitos", "Rugrat", "24", "H","02IDSDEF2020 ", "carlitos@gmail.com",materias4);
    lista.push({student6});
    res.send(lista);    
});

app.get('/cant_materias', (req, res) => {
    res.send(cantMaterias);
});

app.get('/dias_estudio', (req, res) => {
    res.send(diasEstudio);
});

app.listen(port,() =>{
    console.log('Bienvenido, estudiante');    
});