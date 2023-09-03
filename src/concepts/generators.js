import { heroes } from '../data/heroes';
// environmentsComponents recibe el elementoId del htm donde quiero renderizar lo que necesite
/**
 *
 * @param {HTMLdivElement} idElementCard
 */
export const generatorFunctionsComponent = (idElementCard) => {};

function* myFirstGeneratorFunction() {
  yield 'Mi primer valor';
  yield 'Segundo valor';
  yield 'Tercer valor';
  yield 'Cuarto valor';

  return 'Ya no hay valores';
  yield 'ya no puedes hacer nada';
}
