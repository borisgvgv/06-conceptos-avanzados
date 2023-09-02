import { heroes } from '../data/heroes';
/**
 *
 * @param {HTMLdivElement} idElementCard
 */
export const asyncAwaitComponent = async (idElementCard) => {
  const id1 = '5d86371f2343e37870b91ef1';
  const id2 = '5d86371f25a058e5b1c8a65e';

  try {
    /*await necesita que la función dentro de la que se encuentra sea una función asincrona
    por lo que debemos utiliar async en el planteo de la función*/
    const heroe1 = await findHeroe(id1);
    const heroe2 = await findHeroe(id2);

    idElementCard.innerHTML = `${heroe1.name} / ${heroe2.name}`;
  } catch (error) {
    idElementCard.innerHTML = error;
  }
};

//Promesas
const findHeroe = async (id) => {
  const heroe = heroes.find((heroe) => heroe.id === id);
  if (!heroe) throw 'Heroe not found';
  return heroe;
};
