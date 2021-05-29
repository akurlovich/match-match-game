import { TimerWrapper } from "../../timer/timer_wrapper";
import { WinPopupWrapper } from "../../win_popup/win_popup_wrapper";
import { BaseBlock } from "../baseBlock";
import { Card } from "../card/card";
import { delay } from "../delay";
import { CardsField } from "../game-field/cards_field";

// const FLIP_DELAY = 500;

export class Game extends BaseBlock {
  private readonly cardField: CardsField;
  private activeCard?: Card;
  private isAnimation = false;
  counter: number = 0;
  timer: TimerWrapper;

  constructor() {
    super();
    this.timer = new TimerWrapper(this.element);
    this.timer.setTime(5);
    this.timer.timer();
    
    this.cardField = new CardsField('div', 'card-field');
    this.element.appendChild(this.cardField.element);
  }
  newGame (images: string[]) {
    this.cardField.clear();

    const cards = images
      .concat(images)  
      .map((url) => new Card(url))
      .sort(() => Math.random() - 0.5);

    cards.forEach((card) => {
      card.element.addEventListener('click', () => {
        console.log('click');
        this.cardHandler(card);

      });
    });
    
    this.cardField.addCards(cards);
  };

  private async cardHandler(card: Card) {
    console.log(this.isAnimation, card.isFlipped);
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
      await delay(300);
      await Promise.all([this.activeCard.flipToBack(), card.flipToBack()])  
    } else {
      this.counter++;
      console.log(this.counter);
      if (this.counter === 2) {
        this.timer.stopTime();
        console.log('timer')
        console.log(this.timer.getTime());
        const popup = new WinPopupWrapper(document.body, this.timer.getTime());
      }
    };

    this.activeCard = undefined;
    this.isAnimation = false;
  };
}