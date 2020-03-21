const fs = require('fs');

const superHeroes = {
  archivoHeroes: './superheroes/heroes.json',
  leer: function() {
    return JSON.parse(fs.readFileSync(this.archivoHeroes, 'utf-8'));
  },
  saludar: function(nombre) {
    let listaHeroes = this.leer();
    saludoHeroe = listaHeroes.filter((heroe)=>{
      return heroe.nombre === nombre;
    });
    return saludoHeroe;
  }
}

//  if (nombreHeroe) {
//    console.log(heroe.comentario + '. ' + 'Soy ' + heroe.nombre + '. Mi poder es: ' + heroe.poder + '.');
//  } else {
//    console.log('Héroe discapacitado, perdón! Inválido!');
//  }

module.exports = superHeroes;