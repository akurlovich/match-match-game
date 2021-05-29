import { Control } from "../controls";

export class WinPopupWrapper extends Control {
  container: Control;
  popupText: Control;
  popupBtn: Control;
  score: number;
  min: number | string;
  sec: number | string;
  constructor(
    parentNode: HTMLElement,
    score: number
    ) {
    super(parentNode);
    this.score = score;
    this.min = (~~(this.score/60));
    if (this.min < 10) this.min = '0' + this.min;
    this.sec = this.score % 60;
    if (this.score < 10) this.sec = '0' + this.score;
    this.element.className = 'popup__wrapper';
    this.container = new Control(this.element, 'div', 'popup__container')
    this.popupText = new Control(this.container.element, 'h2', 'popup__text')
    this.popupText.element.textContent = `Congratulations! You successfully found all matches on ${this.min}.${this.sec} minutes.`
    this.popupBtn = new Control(this.container.element, 'button', 'popup__btn', 'ok');
    this.popupBtn.element.onclick = () => {
      this.element.remove();
    }
    
  };
}