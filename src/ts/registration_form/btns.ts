import { Control } from "./controls";

export class BtnCansel extends Control {
  constructor(
    parentNode: HTMLElement,
    tagName = "button",
    className = "forms__btns-cansel",
    content = "cansel"
  ) {
    super(parentNode, tagName = "button", className = "forms__btns-cansel", content = "cansel");
    this.element.textContent = content;
  }
}