import { Control } from "../controls";
import { App } from "./app";

export class GamePage extends Control {

  constructor(
    parentNode: HTMLElement,
    tagName = "div",
    className = "",
    ) {
    super(parentNode);
    this.element.className = 'game_wrapper';
    this.element.id = 'game_wrapper';

    new App(this.element).start();

  }
}