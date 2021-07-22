import '../css/main.css';
import '../scss/main.scss';
import '../index.html';

import { routerMain } from './router/router';
import { Control } from './controls';
import { HeaderWrapper } from './header/header_wrapper';
import { HeaderLinks } from './header/header_links';

'use strict()';

const wrapper = new Control(document.body, 'div', 'wrapper');
document.body.append(wrapper.element)
wrapper.element.id = 'main__container';

const headerBlock = new HeaderWrapper(document.body);
wrapper.element.append(headerBlock.element)

const mainPage = new Control(document.body, 'div', 'main__block');
wrapper.element.appendChild(mainPage.element);
mainPage.element.id = 'main__page';
    
routerMain();

let navArr: Array<HeaderLinks> = [headerBlock.headerNav.navLinkAbout, headerBlock.headerNav.navLinkScore, headerBlock.headerNav.navLinkSettings];


document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    for (let i = 0; i < 3; i++) {
      navArr[i].element.classList.remove('header_nav_active')
    }
    if (location.pathname === '/') headerBlock.headerNav.navLinkAbout.element.classList.add('header_nav_active');
    if (location.pathname === '/best_score') headerBlock.headerNav.navLinkScore.element.classList.add('header_nav_active');
    if (location.pathname === '/settings') headerBlock.headerNav.navLinkSettings.element.classList.add('header_nav_active');
      
  }, 100);
})

headerBlock.element.addEventListener('click', () => {
  setTimeout(() => {
    for (let i = 0; i < 3; i++) {
      navArr[i].element.classList.remove('header_nav_active')
    }
    if (location.pathname === '/') headerBlock.headerNav.navLinkAbout.element.classList.add('header_nav_active');
    if (location.pathname === '/best_score') headerBlock.headerNav.navLinkScore.element.classList.add('header_nav_active');
    if (location.pathname === '/settings') headerBlock.headerNav.navLinkSettings.element.classList.add('header_nav_active');
      
  }, 100);

});

