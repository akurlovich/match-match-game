import { Control } from "../controls";

export class BestScoreBlocks extends Control {
  constructor(
    parentNode: HTMLElement,
    tagName = "",
    className = "",
    score: number,
    name: string, 
    second: string, 
    email: string,
    image: string,
    ) {
    super(parentNode);
    this.element.className = className;
    this.element.innerHTML = ` 
      <div class="best-score__name-block">
        <img src="${image}" alt="" class="name-block__avatar">
        <div class="name-block__text">
          <div class="name-block__names">${name} ${second}</div>
          <div class="name-block__email">${email}</div>
        </div>
      </div>
        <div class="best-score__score-block">
        <div class="score-block__text">Score:</div>
        <div class="score-block__score">${score}</div>
      </div>
      `;
  };
}