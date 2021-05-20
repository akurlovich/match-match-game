import { Control } from "../controls";
import { TimerWrapper } from "../timer/timer_wrapper";
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

    const timer = new TimerWrapper(this.element);
    timer.setTime(40);
    timer.timer();
    

    new App(this.element).start();

  }
}