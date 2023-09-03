import './style.css';
import javascriptLogo from './javascript.svg';
import viteLogo from '/vite.svg';
import { environmentsComponents } from './src/concepts/01-environments';
import { callbacksComponent } from './src/concepts/02-callbacks';
import { promisesComponent } from './src/concepts/03-promesas';
import { promesaRaceComponent } from './src/concepts/04-promesa-race';
import { asyncComponent } from './src/concepts/05-async';
import { asyncAwaitComponent } from './src/concepts/06-async-await';
import { asyncAwait2Component } from './src/concepts/07-async-await2';
import { forAwaitComponent } from './src/concepts/08-for-await';
import { generatorFunctionsComponent } from './src/concepts/generators';

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
// asyncComponent(idElementCard);
// asyncAwaitComponent(idElementCard);
// asyncAwait2Component(idElementCard);
// forAwaitComponent(idElementCard);
generatorFunctionsComponent(idElementCard);