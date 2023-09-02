import { heroes } from '../data/heroes';
// environmentsComponents recibe el elementoId del htm donde quiero renderizar lo que necesite
/**
 *
 * @param {HTMLdivElement} idElementCard
 */
export const asyncComponent = (idElementCard) => {
  const id1 = '5d86371fd55e2e2a30fe1ccb2';
  // console.log(findHeroe(id1)); // Devuelve el objeto encontrado

  findHeroe(id1)
    .then((name) => (idElementCard.innerHTML = name))
    .catch((error) => (idElementCard.innerHTML = error));
};

// Funciones asincronas con async
/**
 *
 * @param {String} id
 * @returns {Promise<String>}
 */

// async devuelve una promesa que resuelve lo que le mandemos como return
/* la funcion con async siempre resuelve el resultado correcto si no encuentra el
el resultado corroecto lo evalua con hereo? en el return y devuelve undefined */
const findHeroe = async (id) => {
  const heroe = heroes.find((heroe) => heroe.id === id);
  return heroe?.name;
};
