import { Control } from "../controls";
import { BestScoreBlocks } from "./best-cscore_blocks";

export class BestScoreWrapper extends Control {
  bestScoreH3: Control;
  bestScoreBlock: BestScoreBlocks;

  constructor(
    parentNode: HTMLElement,
    tagName = "div",
    className = "best-score__wrapper",
    ) {
    super(parentNode);
    this.element.className = className;

    this.bestScoreH3 = new Control(this.element, 'h3', 'best-score__title', 'Best players:');
    this.element.appendChild(this.bestScoreH3.element);

    this.bestScoreBlock = new BestScoreBlocks(this.element, 'div', 'best-score__block');
    this.element.appendChild(this.bestScoreBlock.element);
    console.log(this.bestScoreBlock.element);

  }
}