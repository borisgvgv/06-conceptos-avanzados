// environmentsComponents recibe el elementoId del htm donde quiero renderizar lo que necesite
/**
 *
 * @param {HTMLdivElement} idElementCard
 */
export const promesaRaceComponent = (idElementCard) => {
  idElementCard.innerHTML = 'Loading...';

  const renderValue = (value) => {
    idElementCard.innerHTML = value;
  };
  // Promise.race devuelve la promesa que se resuelva más rápido
  Promise.race([slowPromesa(), mediumPromesa(), fastPromesa()]).then(
    renderValue
  );
};

//Promesas

const slowPromesa = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve('Slow promise');
    }, 1000);
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
    }, 3000);
  });
