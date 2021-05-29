import { Control } from "../controls";

export class WinPopupWrapper extends Control {
  container: Control;
  popupText: Control;
  popupBtn: Control;
  constructor(
    parentNode: HTMLElement,
    score: number
    ) {
    super(parentNode);
    this.element.className = 'popup__wrapper';
    this.container = new Control(this.element, 'div', 'popup__container')
    this.popupText = new Control(this.container.element, 'h2', 'popup__text')
    this.popupText.element.textContent = `Congratulations! You successfully found all matches on ${score} minutes.`
    this.popupBtn = new Control(this.container.element, 'button', 'popup__btn', 'ok');
    
  };
}