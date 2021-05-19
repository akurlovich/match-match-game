import { BaseBlock } from "./baseBlock";
import { Card } from "./card/card";
import { CardsField } from "./game-field/cards_field";
import { Game } from "./game/game";
import { ImageCategoryModel } from "./models/image_category_mogel";

export class App {
  private readonly game: Game;

  constructor(private readonly rootElement: HTMLElement) {

    this.game = new Game();
    this.game.element.classList.add('game_wrapper');
    this.rootElement.appendChild(this.game.element);
  
  }
  async start() {
    const res = await fetch('../assets/images.json');
    const categories: ImageCategoryModel[] = await res.json();

    const cat = categories[0];
    const images = cat.images.map((name) => `${cat.category}/${name}`);
    this.game.newGame(images);
  }
}