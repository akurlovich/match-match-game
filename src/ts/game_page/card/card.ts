import { BaseBlock } from '../baseBlock';
import './card.scss';

const FLIP_CLASS = 'flipped';

export class Card extends BaseBlock {
  private cardItemFront: BaseBlock;
  private cardItemBack: BaseBlock;
  private cardItem: BaseBlock;

  isFlipped = false;

  // constructor(private readonly rootElement: HTMLElement, readonly image?: string) {
  constructor(readonly image?: string) {
    super();
    this.element = document.createElement('div');
    this.element.className = 'card-container';

    this.cardItem = new BaseBlock('div', 'card');
    this.element.appendChild(this.cardItem.element);

    this.cardItemFront = new BaseBlock('div', 'card__front');
    this.cardItem.element.appendChild(this.cardItemFront.element);
    this.cardItemFront.element.style.backgroundImage = `url(../../assets/${image})`;

    this.cardItemBack = new BaseBlock('div', 'card__back');
    this.cardItem.element.appendChild(this.cardItemBack.element);
  }

  flipToBack() {
    console.log('to back')
    this.isFlipped = true;
    return this.flip(true);
  }

  flipToFront() {
    this.isFlipped = false;
    return this.flip();
  };

  private flip(isFront = false): Promise<void> {
    return new Promise((resolve) => {
      console.log('toggle');
      // this.element.classList.toggle(FLIP_CLASS, isFront);
      this.element.classList.toggle(FLIP_CLASS);

      // if (this.element.classList.contains(FLIP_CLASS)) {
      //   this.element.classList.remove(FLIP_CLASS);
      // } else {
      //   this.element.classList.add(FLIP_CLASS);
      // }


      this.element.addEventListener('transitionend', () => resolve(), {
        once: true,
      });
    })
  }
}