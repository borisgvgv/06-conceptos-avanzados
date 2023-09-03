import { heroes } from '../data/heroes';
// environmentsComponents recibe el elementoId del htm donde quiero renderizar lo que necesite
/**
 *
 * @param {HTMLdivElement} idElementCard
 */
export const generatorFunctions2Component = (idElementCard) => {
  const genId = idGenerator();
  // console.log(genId.next());

  const boton = document.createElement('button');
  boton.innerText = 'Click me';
  idElementCard.append(boton);

  //creando funcion para el botón
  const renderBoton = () => {
    const { value } = genId.next();
    boton.innerText = `Click ${value}`;
  };
  //  boton.addEventListener("click", (event) => renderBoton()) // se resume a
  boton.addEventListener('click', renderBoton);
};

function* idGenerator() {
  let currentId = 0;
  while (true) {
    yield ++currentId;
  }
}

// Función generadora
function* myFirstGeneratorFunction() {
  yield 'Mi primer valor';
  yield 'Segundo valor';
  yield 'Tercer valor';
  yield 'Cuarto valor';

  return 'Ya no hay valores';
  yield 'ya no puedes hacer nada';
}
