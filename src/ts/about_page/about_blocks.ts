import { Control } from "../controls";

export class AboutBlocks extends Control {
  constructor(
    parentNode: HTMLElement,
    tagName = "",
    className = "",
    ) {
    super(parentNode);
    this.element.className = className;

  }
//-------about__registration------
  aboutRegistrationCircle = new Control(this.element, 'div', 'about__circle-label');
  aboutRegistrationCircleNum = new Control(this.aboutRegistrationCircle.element, 'p', '', '1');
  aboutRegistrationBlockText = new Control(this.element, 'div', 'about__block-text', 'Register new player in game');

}