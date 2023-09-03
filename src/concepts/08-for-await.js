import { heroes } from '../data/heroes';
/**
 *
 * @param {HTMLDivElement} element
 */
export const forAwaitComponent = async (idElementCard) => {
  const id = '5d86371f2343e37870b91ef16';
  //   if (await getHeroAsync(id)) {
  //     idElementCard.innerHTML = 'Si existe';
  //     return;
  //   }
  //   idElementCard.innerHTML = 'No existe';

  const heroIds = heroes.map((heroe) => heroe.id);
  //   console.log(heroIds); // devuelve array de ids
  const heroePromises = getHeroesAsync(heroIds);
  for await (const heroe of heroePromises) {
    idElementCard.innerHTML += `${heroe.name} <br/>`;
  }
};

/**
 *
 * @param {Array<String>} heroIds
 * @returns {Array<Promise>}
 */
const getHeroesAsync = (heroIds) => {
  const heroPromises = [];

  heroIds.forEach((id) => {
    heroPromises.push(getHeroAsync(id));
  });

  return heroPromises;
};

const getHeroAsync = async (id) => {
  await new Promise((resolve) => {
    setTimeout(() => resolve(), 1000);
  });

  return heroes.find((heroe) => heroe.id === id);
};
