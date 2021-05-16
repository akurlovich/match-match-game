import { Control } from "../controls";

export class BestScoreWrapper extends Control {
  constructor(
    parentNode: HTMLElement,
    tagName = "div",
    className = "best-score__wrapper",
    ) {
    super(parentNode);
    this.element.className = className;
  }
}