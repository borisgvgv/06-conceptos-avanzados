// environmentsComponents recibe el elementoId del htm donde quiero renderizar lo que necesite

import { heroes } from '../data/heroes';

// Un callbacks es una función que recibe un argumento y ese argumento es unna función que se invoca dentro de la función
/**
 *
 * @param {HTMLdivElement} idElementCard
 */
export const callbacksComponent = (idElementCard) => {
  // console.log('callbacksComponent');

  //Callback
  /**
   *
   * @param {String} idDeHeroe
   * @param {(error: String|Null, heroe: Objet)=>void } callback // void signifiva que no regresa nada
   */
  const findHeroe = (idDeHeroe, callback) => {
    const heroe = heroes.find((heroe) => heroe.id === idDeHeroe);
    if (!heroe) {
      callback(`Heroe id ${idDeHeroe} not found.`);
      return; // undefined
    }
    callback(null, heroe);
  };

  const id = '5d86371f1efebc31def272e2';
  findHeroe(id, (error, nameHeroe) => {
    /// esto nos dice que el eroe no existe pero no nos dice porqué no tenemos un héroe/
    // idElementCard.innerHTML =
    //   nameHeroe?.name || 'El héroe que buscas no existe';

    if (error) {
      idElementCard.innerHTML = error;
      return;
    }
    idElementCard.innerHTML = nameHeroe.name;
  });
};
