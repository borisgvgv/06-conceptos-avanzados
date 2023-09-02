import './style.css';
import javascriptLogo from './javascript.svg';
import viteLogo from '/vite.svg';
import { environmentsComponents } from './src/concepts/01-environments';
import { callbacksComponent } from './src/concepts/demo-copy-02-callbacks';
import { promisesComponent } from './src/concepts/promesas';
import { promesaRaceComponent } from './src/concepts/promesa-race';
import { asyncComponent } from './src/concepts/async';

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    
    <div class="card">
 
    </div>
    
  </div>
`;

// Ref HTML
const idElementCard = document.querySelector('.card');

// Llamadas
// environmentsComponents(idElementCard);
// callbacksComponent(idElementCard);
// promisesComponent(idElementCard);
// promesaRaceComponent(idElementCard);
asyncComponent(idElementCard);