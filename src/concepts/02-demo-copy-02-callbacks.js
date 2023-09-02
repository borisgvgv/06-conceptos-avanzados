// environmentsComponents recibe el elementoId del htm donde quiero renderizar lo que necesite

import { heroes } from '../data/heroes';


// Un callbacks es una función que recibe un argumento y ese argumento es unna función que se invoca dentro de la función
/**
 *
 * @param {HTMLdivElement} idElementCard
 */
export const callbacksComponent = (idElementCard) => {
  // console.log('callbacksComponent');

  const id1 = '5d86371f1efebc31def272e2';
  const id2 = '5d86371f2343e37870b91ef1';

  findHeroe(id1, (error, heroe) => {
    // Lo que sigue comentado se puede usar pero no es recomendable
    // idElementCard.innerHTML =
    //   nameHeroe?.name || 'El héroe que buscas no existe';
    /// esto nos dice que el heroe no existe pero no nos dice porqué no tenemos un héroe/

    if (error) {
      idElementCard.innerHTML = error;
      return;
    } else {
      idElementCard.innerHTML = heroe.name;
    }
  });
};

//Callback
/**
 *
 * @param {String} idDeHeroe
 * @param {(error: String|Null, heroe: Objet)=>void } callback // void signifiva que no regresa nada
 */
const findHeroe = (idDeHeroe, callback) => {
  const heroe = heroes.find((heroe) => heroe.id === idDeHeroe);
  if (!heroe) {
    callback(`Heroe id ${idDeHeroe} not found.`, null); // poner null aquí es innecesario funcionaría igualmente sin null
    return; // detiene la ejecución de la función y regresa undefined
  }
  callback(null, heroe); // null confirma que no hay error y manda los datos que le pedimos en este caso el id del heroe
};