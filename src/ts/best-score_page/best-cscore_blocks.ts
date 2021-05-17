import { Control } from "../controls";

export class BestScoreBlocks extends Control {
  constructor(
    parentNode: HTMLElement,
    tagName = "",
    className = "",
    ) {
    super(parentNode);
    this.element.className = className;
    this.element.innerHTML = ` 
      <div class="best-score__name-block">
        <img src="./assets/avatar.png" alt="" class="name-block__avatar">
        <div class="name-block__text">
          <div class="name-block__names">Jone Smit</div>
          <div class="name-block__email">jonesmit@gmail.com</div>
        </div>
      </div>
        <div class="best-score__score-block">
        <div class="score-block__text">Score:</div>
        <div class="score-block__score">456</div>
      </div>
      `

  }
//-------about__registration------
  
//-------about__register-new-----
  // aboutRegisterNew = new Control(this.element.parentElement, 'div', 'about__circle-label');


}