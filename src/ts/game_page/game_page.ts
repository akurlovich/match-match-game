import { Control } from "../controls";
import { App } from "./app";

export class GamePage extends Control {
  newApp: App;

  constructor(
    parentNode: HTMLElement,
    tagName = "div",
    className = "",
    ) {
    super(parentNode);
    this.element.className = 'game_wrapper';
    this.element.id = 'game_wrapper';

    this.newApp = new App(this.element);
    this.newApp.start();

  }
}