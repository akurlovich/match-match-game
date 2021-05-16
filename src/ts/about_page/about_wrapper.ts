import { Control } from "../controls";
import { AboutContainer } from "./about_container";

export class AboutWrapper extends Control {
  constructor(
    parentNode: HTMLElement,
    tagName = "div",
    className = "start__wrapper",
    ) {
    super(parentNode);
    this.element.className = className;
  }

  h3Element = new Control(this.element, 'h3', 'window-title', 'How to play?');
  aboutContainer = new AboutContainer(this.element);


}