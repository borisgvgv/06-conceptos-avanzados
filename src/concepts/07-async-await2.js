import { heroes } from '../data/heroes';
// environmentsComponents recibe el elementoId del htm donde quiero renderizar lo que necesite
/**
 *
 * @param {HTMLdivElement} idElementCard
 */
export const asyncAwait2Component = async (idElementCard) => {
  // console.log(asyncAwait2Component);
  console.time('Start');

  // como son promesas que no dependen una de la otra no tiene sentido llamarlas de esta forma
  // const value1 = await slowPromesa();
  // const value2 = await mediumPromesa();
  // const value3 = await fastPromesa();

  // La forma correcta es la sig para que las muestre de forma simultanea
  const [value1, value2, value3] = await Promise.all([
    slowPromesa(),
    mediumPromesa(),
    fastPromesa(),
  ]);

  idElementCard.innerHTML = `
  value1: ${value1} <br>
  value2: ${value2} <br>
  value3: ${value3} <br>
  `;

  console.timeEnd('Start');
};

//Promesa
const slowPromesa = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve('Slow promise');
    }, 2000);
  });

const mediumPromesa = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve('Medium promise');
    }, 1500);
  });

const fastPromesa = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve('Fast promise');
    }, 1000);
  });
