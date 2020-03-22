//const moment = require('moment');
// console.log(moment().locale('es').format('MMM DD YYYY'));

const accion = process.argv[2],
      listaHeroes = require('./tasks.js');
      
let arrHeroes = [];
let nombreHeroe = process.argv[3];

switch (accion) {
  case 'listar':
    arrHeroes = listaHeroes.leer();
    arrHeroes.forEach((heroe, index) => {
      console.log(' HÉROE: ' + (index + 1) + ' ' + heroe.nombre + ' ++> PODER: ' + heroe.poder + '.');
      
    });
    break;
  case 'saludar':
    if (!nombreHeroe) {
      console.log('Ese héroe no existe!');
    } else {
      arrHeroes = listaHeroes.saludar(nombreHeroe);
      arrHeroes.forEach((heroe, index) => {
        console.log(heroe.comentario + '. ' + 'Soy ' + heroe.nombre + '. Mi poder es: ' + heroe.poder + '.');
      });
    }
    break;
  case 'crear':
    let nuevoHeroe = {
      nombre: process.argv[3],
      poder: process.argv[4],
      comentario: process.argv[5]
    };
    arrHeroes = listaHeroes.crear(nuevoHeroe);
    arrHeroes = listaHeroes.leer();
    arrHeroes.forEach((heroe, index) => {
      console.log(index + 1 + ' HÉROE: ' + heroe.nombre + '++> PODER: ' + heroe.poder + '.');
    });
    
    break;
}


