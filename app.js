//const moment = require('moment');
// console.log(moment().locale('es').format('MMM DD YYYY'));

const accion = process.argv[2],
      listaHeroes = require('./tasks.js');
      
let arrHeroes = [];

switch (accion) {
  case 'listar':
    arrHeroes = listaHeroes.leer();
    arrHeroes.forEach((heroe, index) => {
      console.log(index + 1 + ' ++> ' + heroe.nombre);
      
    });
    break;
  case 'saludar':
    const nombreHeroe = process.argv[3];
    if (nombreHeroe === undefined) {
      console.log('Héroe discapacitado, perdón! Inválido!');
    }
    arrHeroes = listaHeroes.saludar(nombreHeroe);
    arrHeroes.forEach((heroe, index) => {
      //console.log(heroe.comentario + '. ' + 'Soy ' + heroe.nombre + '. Mi poder es: ' + heroe.poder + '.');
    });
    break;
  case 'agregar':
    let nuevoHeroe = {
      nombre: process.argv[3],
      poder: process.argv[4],
      comentario: process.argv[5]
    };
    break;
}


