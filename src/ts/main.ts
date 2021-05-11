import '../css/main.css';
import '../scss/main.scss';
import '../index.html';

import { RegisterWindow } from './register-window';
import { routerMain } from './router/router';

'use strict()';


// navigationTo();
routerMain();
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
