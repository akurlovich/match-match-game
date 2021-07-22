
import { Game } from "./game/game";
import { ImageCategoryModel } from "./models/image_category_mogel";

export class App {
  game: Game;

  constructor(private readonly rootElement: HTMLElement) {

    this.game = new Game();
    this.game.element.classList.add('game_wrapper');
    this.rootElement.appendChild(this.game.element);
  
  }
  async start() {
    
    const res = await fetch('../assets/images.json');
    const categories: ImageCategoryModel[] = await res.json();
    let indexCategory: number | string | null = sessionStorage.getItem('category');
    if (indexCategory === null) indexCategory = 1;
    const category = categories[+indexCategory];
    const images = category.images.map((name) => `${category.category}/${name}`);
    const imagesArr = [];
    let indexDifficalty: number | string | null = sessionStorage.getItem('difficulty');
    if (indexDifficalty === null) indexDifficalty = 2;
    for (let i = 0; i < (+indexDifficalty * 2); i++) {
      imagesArr.push(images[i]);
    }
    this.game.newGame(imagesArr);
  }
}