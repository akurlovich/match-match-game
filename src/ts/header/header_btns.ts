import { Control } from "../controls";

export class HeaderRegBtn extends Control {

  constructor(
    parentNode: HTMLElement,
    tagName = "button",
    className = "header__button",
    ) {
    super(parentNode);
    this.element.className = className;
    this.element.textContent = 'register new player';

  }
}