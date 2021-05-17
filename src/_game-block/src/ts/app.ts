import { BaseBlock } from "./baseBlock";
import { Card } from "./card/card";
import { CardsField } from "./game-field/cards_field";
import { Game } from "./game/game";
import { ImageCategoryModel } from "./models/image_category_mogel";

export class App {
  // private readonly rootElement: HTMLElement;
  // constructor(rootElement: HTMLElement) {
  //   this.rootElement = rootElement;
  // };
  // private readonly cardWrapper: CardsField;
  private readonly game: Game;
  // private cardField: BaseBlock;
  // private cardContainer: BaseBlock;
  // private cardItem: Card;
  // private cardItem2: Card;
  // private cardItem3: Card;
  // private cardItemBack: BaseBlock;


  constructor(private readonly rootElement: HTMLElement) {
  
    // this.cardWrapper = new CardsField('div', 'card-field');
    // this.rootElement.appendChild(this.cardWrapper.element);

    this.game = new Game();
    this.rootElement.appendChild(this.game.element);
    // console.log(this.game.element);
    // this.game.newGame(['http']);

    // this.cardItem = new Card();
    // this.cardItem2 = new Card();
    // this.cardItem3 = new Card();
    // this.cardWrapper.addCards([this.cardItem, this.cardItem2, this.cardItem3]);
  }
  async start() {
    const res = await fetch('../assets/images.json');
    const categories: ImageCategoryModel[] = await res.json();

    // console.log(res);
    // console.log(categories);
    // console.log(res.json());

    const cat = categories[0];
    const images = cat.images.map((name) => `${cat.category}/${name}`);
    this.game.newGame(images);
  }
}