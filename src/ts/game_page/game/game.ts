import { BaseBlock } from "../baseBlock";
import { Card } from "../card/card";
import { delay } from "../delay";
import { CardsField } from "../game-field/cards_field";

const FLIP_DELAY = 500;

export class Game extends BaseBlock {
  private readonly cardField: CardsField;
  private activeCard?: Card;
  private isAnimation = false;
  counter: number = 0;

  constructor() {
    super();
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
  }


  private async cardHandler(card: Card) {
    console.log(this.isAnimation, card.isFlipped);
    if (this.isAnimation) {
      // console.log('22222')
      return;
    }
    if (!card.isFlipped) {
      // console.log('111111')
      return;
    }
    
    this.isAnimation = true;

    await card.flipToBack();

    if (!this.activeCard) {
      this.activeCard = card;
      // console.log('hi')
      this.isAnimation = false;
      return;
    };
    
    if (this.activeCard.image != card.image) {
      await delay(FLIP_DELAY);
      await Promise.all([this.activeCard.flipToBack(), card.flipToBack()])  
    } else {
      this.counter++;
      console.log(this.counter);
    }

    this.activeCard = undefined;
    this.isAnimation = false;
  }
  
}