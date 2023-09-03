import { heroes } from '../data/heroes';
// environmentsComponents recibe el elementoId del htm donde quiero renderizar lo que necesite
/**
 *
 * @param {HTMLdivElement} idElementCard
 */
export const generatorFunctionsComponent = (idElementCard) => {
  // para usar una función generadora tengo que invocarla de esta forma
  const myGenerator = myFirstGeneratorFunction();

  //Buscar valores (value) de la funcion generadora
  console.log(myGenerator.next()); // Devuelve Object { value: "Mi primer valor", done: false }
  console.log(myGenerator.next()); // Devuelve Object { value: "Mi segundo valor", done: false }
  console.log(myGenerator.next()); // Devuelve Object { value: "Mi tercer valor", done: false }
  console.log(myGenerator.next()); // Devuelve Object { value: "Mi cuarto valor", done: false}
  console.log(myGenerator.next()); // Devuelve Object { value: "ya no puedes hacer nada", done: true }
  console.log(myGenerator.next()); // Devuelve Object { value: undefined, done: true }
};

// Función generadora
function* myFirstGeneratorFunction() {
  yield 'Mi primer valor';
  yield 'Segundo valor';
  yield 'Tercer valor';
  yield 'Cuarto valor';

  return 'Ya no hay valores';
  yield 'ya no puedes hacer nada';
}
