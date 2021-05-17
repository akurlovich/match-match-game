import { Control } from "../controls";
import { HeaderWrapper } from "../header/header_wrapper";
import { BestScoreWrapper } from "./best_score_wrapper";

export class BestScorePage extends Control {
  headerBlock: HeaderWrapper;
  bestScoreBlock: BestScoreWrapper;

  constructor(
    parentNode: HTMLElement,
    tagName = "div",
    className = "wrapper",
    ) {
    super(parentNode);
    this.element.className = className;
    
    this.headerBlock = new HeaderWrapper(this.element);
    this.element.appendChild(this.headerBlock.element);

    this.bestScoreBlock = new BestScoreWrapper(this.element);
    this.element.appendChild(this.bestScoreBlock.element);

  }
}