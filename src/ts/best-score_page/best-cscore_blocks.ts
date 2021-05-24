import { Control } from "../controls";

export class BestScoreBlocks extends Control {
  constructor(
    parentNode: HTMLElement,
    tagName = "",
    className = "",
    email = "",
    score: number
    ) {
    super(parentNode);
    this.element.className = className;
    this.element.innerHTML = ` 
      <div class="best-score__name-block">
        <img src="./assets/avatar.png" alt="" class="name-block__avatar">
        <div class="name-block__text">
          <div class="name-block__names">Jone Smit</div>
          <div class="name-block__email">${email}</div>
        </div>
      </div>
        <div class="best-score__score-block">
        <div class="score-block__text">Score:</div>
        <div class="score-block__score">${score}</div>
      </div>
      `;
  };
  // setEmail(email: string) {
  //   this.
  // }

}