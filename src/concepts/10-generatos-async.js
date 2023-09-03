import { heroes } from '../data/heroes';
// environmentsComponents recibe el elementoId del htm donde quiero renderizar lo que necesite
/**
 *
 * @param {HTMLdivElement} idElementCard
 */
export const generatorAsyncComponent = async (idElementCard) => {
  const heroeGenerator = getHeroeGenerator();
  let isFinished = false;
  do {
    const { value, done } = await heroeGenerator.next();
    isFinished = done;
    if (isFinished) break;
    idElementCard.innerHTML = value;
  } while (!isFinished);
};

async function* getHeroeGenerator() {
  for (const heroe of heroes) {
    //await sleep() hace que demore 1s en disparar cada unaa de las emiciones que le mandemos con el yield
    await sleep();
    yield heroe.name;
  }
  return 'Ya no hay más heroes';
}

const sleep = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 500);
  });
};
