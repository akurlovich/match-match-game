import { BaseBlock } from "../baseBlock";
import { Card } from "../card/card";

// const SHOW_TIME = 2;

export class CardsField extends BaseBlock {
  private cards: Card[] = [];
  constructor(tagName = 'div', className = '', styles: string[] = [], content = '') {
    super();
    this.element.className = className;
  }

  clear() {
    this.cards = [];
    this.element.innerHTML = '';
  }

  addCards(cards: Card[]) {
    this.cards = cards;
    this.cards.forEach((card) => this.element.appendChild(card.element));
    setTimeout(() => {
      this.cards.forEach((card) => card.flipToBack());
    }, 3000);
  }
}