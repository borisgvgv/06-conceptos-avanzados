/* Las promesas es un objeto especial de js y consisten en un pacto entre dos partes del código
en las cuales una se compromete
a hacer un trabajo y la otra está esperando el cumplimiento de esa promesa 
para realizar su tarea*/

import { heroes } from '../data/heroes';

/**
 *
 * @param {HTMLdivElement} idElementCard
 */
export const promisesComponent = (idElementCard) => {
  const renderHeroe = (heroe) => {
    idElementCard.innerHTML = heroe.name;
  };
  const renderTowHeroe = (heroe1, heroe2) => {
    idElementCard.innerHTML = `<h1>Heroes:</h1><h3>${heroe1.name}</h3><h3>${heroe2.name}</h3>`;
  };
  const renderError = (error) => {
    idElementCard.innerHTML = `<h1>Error:</h1><h3>${error}</h3>`;
  };

  //llamamos a la promesa
  const id1 = '5d86371f1efebc31def272e2';
  const id2 = '5d86371f2343e37870b91ef1';

  //! Forma 3
  Promise.all([findHeroe(id1), findHeroe(id2)])
    .then(([heroe1, heroe2]) => renderTowHeroe(heroe1, heroe2))
    .catch(renderError);

  //! Forma 1
  // findHeroe(id1)
  //   .then((heroe1) => {
  //     findHeroe(id2)
  //       .then((heroe2) => {
  //         renderTowHeroe(heroe1, heroe2);
  //       })
  //       .catch(renderError);
  //   })
  //   .catch(renderError);

  // ! Forma 2
  // let heroe1;
  // findHeroe(id1)
  //   .then((heroe) => {
  //     heroe1 = heroe;
  //     return findHeroe(id2);
  //   })
  //   .then((heroe2) => {
  //     renderTowHeroe(heroe1, heroe2);
  //   })
  //   .catch(renderError);

  // findHeroe(id1).then((superHeroe) => renderHeroe(superHeroe));
  /* Si los argumentos que mandamos al renderHeroe son exactamente iguales a los que le pasamos como argumento 
  se puede mandar directamente el nombre de la función resumiendo de esta forma el código */
  //.then cuando devuelve el resultado que pedimos cuando no hay error tomando la función renderHeroe() como argumento
  //.catch devuelve el error encontrado tomando la función renderError() como argumento
  //.finally Limpeza del código

  // findHeroe(id1).then(renderHeroe).catch(renderError);
};

// Promesa
/**
 *
 * @param {String} id
 * @returns {promise}
 */
const findHeroe = (id) => {
  //---  creamos la promesa
  // La new Promise recibe como argumento una función anónima que como argumentos tiene el resolve y el reject
  // resolve : Es una función que va a obtener el valor producto de mi promesa. En este caso el id del heroe
  // reject : Es el fallo de la promesa cuando no se logra realizar

  return new Promise((resolve, reject) => {
    const heroe = heroes.find((heroe) => heroe.id === id);

    if (heroe) {
      resolve(heroe);
      return; // detiene la ejecución de la función y regresa undefined
    }
    reject(`Heroe with id ${id} is not found`);
  });

  // return promise;
  /* Este return lo omitimos al final porque puede hacerse al declarar la --new Promise-- más arriba 
  sin tener que declararla con -- const promise = new Promise((resolve, reject)...-- */
};
