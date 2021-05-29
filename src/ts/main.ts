import '../css/main.css';
import '../scss/main.scss';
import '../index.html';

import { routerMain } from './router/router';
import { Control } from './controls';
import { HeaderWrapper } from './header/header_wrapper';


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

