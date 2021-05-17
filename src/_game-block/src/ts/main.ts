import '../css/main.css';
import '../scss/main.scss';
import '../index.html';

'use strict()';

import { App } from './app';

window.onload = () => {
  const appElement = document.getElementById('app');
  if (!appElement) throw Error('No app element found!!!');
  // new App(appElement);
  new App(appElement).start();
}




// window.addEventListener('DOMContentLoaded', () => {
//   console.log('Hello world!!!');
// });

// import { BaseBlock as Block } from './baseBlock';

// class BaseBlock {
//   constructor(parentNode: HTMLElement, tagName = 'div', className = '', content = '') {
//     const element = document.createElement(tagName);
//     element.className = className;
//     element.innerHTML = content;
//     parentNode && parentNode.appendChild(element);
//     // this.node = element;
//   }
// };

// let firstDiv = new BaseBlock(document.body, 'div', 'wrapper');

// class InputUser extends BaseBlock {
//   constructor(parentNode: HTMLElement) {
//     super();
//   }

// }