import '../css/main.css';
import '../scss/main.scss';
import '../index.html';

import { RegisterWindow } from './register-window1';
import { routerMain } from './router/router';
// import { Control, Control3 } from './router/block';
import { OptionSelect } from './settings_page/options';
import { Control } from './controls';
import { SelectBlock } from './settings_page/select_block';
import { SelectWrapper } from './settings_page/wrapper';
import { ModalRegisterWrapper } from './modal_window_registration/modal_wrapper_reg';

'use strict()';

// routerMain();

//!-модалка с регистрацией--

const innerWrapper = document.getElementById('main__container');
if (!innerWrapper) throw Error ('No app found!!!');
const modalRegWin = new ModalRegisterWrapper(innerWrapper);


// const innerWrapper: HTMLElement | null = document.querySelector('.main__container');
// if (!innerWrapper) throw Error ('No app found!!!');

// const selectedWrapper = new SelectWrapper(innerWrapper, 'div', 'settings__wrapper');
// const selectedWrapper = new SelectWrapper(innerWrapper);

// const selectedDiv = new Control(innerWrapper, 'select', 'settings__options');

// const FirstOption = new OptionSelect(selectedDiv.element, '', 'select game cards type', true, true);
// const FirstOption1 = new OptionSelect(selectedDiv.element, '4x4', '4x4', false, false);
// const FirstOption2 = new OptionSelect(selectedDiv.element, '6x6', '6x6', false, false);
// const FirstOption3 = new OptionSelect(selectedDiv.element, '8x8', '8x8', false, false);



// routerMain();

// testTry();
// document.body.addEventListener('click', (event) => {
//   console.log(event.target);
//   let matches = document.querySelectorAll('[data-link]');
//   console.log(matches);

//   console.log((event.target as HTMLBodyElement).matches('[data-link]'))
//   console.log((event.target as HTMLLinkElement));
//   if ((event.target as HTMLBodyElement).matches('[data-link]')) {
//     console.log('!!!!!!!!!!!!!')
//     event.preventDefault();
//     if (!(event.target as HTMLBodyElement).getAttribute('href')) throw Error ('No href');
//     let linkUrl = ((event.target as HTMLBodyElement).getAttribute('href'));
//     history.pushState(null, '', linkUrl + 'hi');
//   }
// })

// let testlink = document.querySelector('#test-link');
// if (!testlink) throw Error ('no element');
// testlink.addEventListener('click', (e) => {
//   e.preventDefault();
//   history.pushState(null, '', 'HI');
// })

// const navigationTo = (url: string | null) => {
//     // console.log(url)
//     history.pushState(null, '', url + 'HI');
//     router();
// }

// const router = async () => {
//   const routes = [
//     { path: '/', view: Control },
//     { path: '/best_score', view: RegisterWindow },
//     { path: '/settings', view: Control3 }
//   ];

//   const potentialMatches = routes.map(route => {
//     return {
//       route: route,
//       isMatch: location.pathname === route.path
//     };
//   });

//   let match = potentialMatches.find(potentialMatches => potentialMatches.isMatch);

//   if (!match) {
//     match = {
//       route: routes[0],
//       isMatch: true
//     }
//   }

//   // console.log(potentialMatches);
//   // console.log(match);
//   // const view = new match.route.view();

//   // const appElement = document.getElementById('app');
//   // if (!appElement) throw Error('No app element found!!!');
//   // appElement.innerHTML = await view.getHTML();

//   const innerWrapper = document.getElementById('inner-app');
//   if (!innerWrapper) throw Error ('No app found!!!');

//   const view = await new match.route.view(innerWrapper);
//   // const registerWindowHTML = await view();

//   // match.route.view();
// }

// window.addEventListener('popstate', router);

// window.addEventListener('DOMContentLoader', () => {
//   document.body.addEventListener('click', (event) => {
//     console.log((event.target as HTMLBodyElement).matches('[data-link]'))
//     if ((event.target as HTMLBodyElement).matches('[data-link]')) {
//       console.log('!!!!!!!!!!!!!')
//       event.preventDefault;
//       // if (!(event.target as HTMLBodyElement).getAttribute('href')) throw Error ('No href');
//       navigationTo((event.target as HTMLBodyElement).getAttribute('href'));
//     }
//   })

//   console.log('object');
//   router();
// })




// navigationTo();

// routStart();

// const innerWrapper = document.getElementById('inner-app');
// if (!innerWrapper) throw Error ('No app found!!!');
// const registerWindowHTML = new RegisterWindow(innerWrapper);


//!--------
// const registerWindowHTML = new RegisterWindow(innerWrapper, 'div', 'register__window');
// const registerWindowHTML = new RegisterWindow(innerWrapper);


// const aboutPage = document.querySelector("#about_page"),
//       registerPage = document.querySelector("#register_page"),
//       pagesList = document.querySelectorAll(".list__item"),
//       appPosition = document.querySelector(".inner__wrapper");

// const localResolver = (location: string) => {
//   console.log(location)
//   switch (location) {
//     case "#/about/":
//       if (appPosition) {
//         appPosition.innerHTML = `
//           <h1>about page</h1>
//         `;
//       }
//       break;
//     case "#/register/":
//       if (appPosition) {
//         const registerWindowHTML = new RegisterWindow(innerWrapper);
//       }
//   };
// }

// aboutPage?.addEventListener('click', () => {
//   console.log('about')

//   const location = window.location.hash;

//   if (location) {
//     localResolver(location);
//   }
// })

// registerPage?.addEventListener('click', () => {
//   const location = window.location.hash;

//   if (location) {
//     localResolver(location);
//   }
// })

// window.addEventListener("load", () => {
//   const location = window.location.hash;

//   if (location) {
//     localResolver(location);
//   }
// });





// window.addEventListener('DOMContentLoaded', () => {
//   console.log('Hello world!!!');
// });
