import { TimerWrapper } from "../../timer/timer_wrapper";
import { WinPopupWrapper } from "../../win_popup/win_popup_wrapper";
import { BaseBlock } from "../baseBlock";
import { Card } from "../card/card";
import { delay } from "../delay";
import { CardsField } from "../game-field/cards_field";
export class Game extends BaseBlock {
  private readonly cardField: CardsField;
  private activeCard?: Card;
  private isAnimation = false;
  counter: number = 0;
  timer: TimerWrapper;
  wrongCounter: number = 0;
  popup!: WinPopupWrapper;

  constructor() {
    super();
    this.timer = new TimerWrapper(this.element);
    this.timer.setTime(31);
    this.timer.timer();
    
    this.cardField = new CardsField('div', 'card-field');
    this.element.appendChild(this.cardField.element);

    this.popup = new WinPopupWrapper(document.body);
    this.popup.element.style.display = 'none';
  }
  newGame (images: string[]) {
    this.cardField.clear();

    const cards = images
      .concat(images)  
      .map((url) => new Card(url))
      .sort(() => Math.random() - 0.5);

    cards.forEach((card) => {
      card.element.addEventListener('click', () => {
        this.cardHandler(card);
      });
    });
    
    this.cardField.addCards(cards);
  };

  private async cardHandler(card: Card) {
    if (this.isAnimation) return;
    if (!card.isFlipped) return;
    
    this.isAnimation = true;

    await card.flipToBack();

    if (!this.activeCard) {
      this.activeCard = card;
      this.isAnimation = false;
      return;
    };
    
    if (this.activeCard.image != card.image) {
      this.activeCard.element.classList.add('wrong-card');
      card.element.classList.add('wrong-card');
      setTimeout(() => {
        if (!this.activeCard) throw new Error('no card');
        this.activeCard.element.classList.remove('wrong-card');
        card.element.classList.remove('wrong-card');
      }, 200);
      this.wrongCounter++;
      await delay(300);
      await Promise.all([this.activeCard.flipToBack(), card.flipToBack()]);
    } else {
      this.activeCard.element.classList.add('right-card');
      card.element.classList.add('right-card');
      setTimeout(() => {
        if (!this.activeCard) throw new Error('no card');
        this.activeCard.element.classList.remove('right-card');
        card.element.classList.remove('right-card');
      }, 200);
      this.counter++;
      let indexDifficalty: number | string | null = sessionStorage.getItem('difficulty');
      if (indexDifficalty === null) indexDifficalty = 2;
      if (this.counter === (+indexDifficalty * 2)) {
        this.timer.stopTime();
        this.popup.setCounter(this.timer.getTime(), this.wrongCounter, this.counter);
        this.popup.element.style.display = 'block';
      }
    };

    this.activeCard = undefined;
    this.isAnimation = false;
  };
}