// environmentsComponents recibe el elementoId del htm donde quiero renderizar lo que necesite
/**
 *
 * @param {HTMLdivElement} idElementCard
 */
export const environmentsComponents = (idElementCard) => {
  //ver variables de entorno en vit = import.meta.env, usualmente en las app de node se usa una variable llamada process.env
  console.log(import.meta.env);

  const html =
    //   Imprimir variable de entorno
    `
  DEV: ${import.meta.env.DEV} <br>
  MODE: ${import.meta.env.MODE} <br>
  PROD: ${import.meta.env.PROD} <br>
  URL:: ${import.meta.env.VITE_BASE_URL} <br>
  `;

  idElementCard.innerHTML = html;
};
