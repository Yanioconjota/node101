const fs = require('fs');

const superHeroes = {
  archivoHeroes: './superheroes/heroes.json',
  leer: function() {
    return JSON.parse(fs.readFileSync(this.archivoHeroes, 'utf-8'));
  },
  escribir: function (nuevoHeroe) {
    fs.writeFileSync(this.archivoHeroes, JSON.stringify(nuevoHeroe, null, ' '))
  },
  saludar: function(nombre) {
    let listaHeroes = this.leer();
    saludoHeroe = listaHeroes.filter((heroe)=>{
      return heroe.nombre === nombre;
    });
    return saludoHeroe;
  },
  crear: function(nuevoHeroe) {
    let listaHeroes = this.leer();
    listaHeroes.push(nuevoHeroe);
    this.escribir(listaHeroes);
  }
}

module.exports = superHeroes;