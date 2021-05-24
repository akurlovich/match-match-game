import { Control } from "../controls";
import { DataBaseIDX } from "../DB/DataBaseIDX";
import { MyRecords } from "../DB/iMyRecords";
import { BestScoreBlocks } from "./best-cscore_blocks";
import { BestScorePage } from "./best-score_page";

export class BestScoreWrapper extends Control {
  bestScoreH3: Control;
  bestScoreBlock: BestScoreBlocks;
  inputBlocks: BestScoreBlocks[] = [];
  // userDBlength: number;
  dataBase2: DataBaseIDX;
  // resultFiltered: MyRecords[];

  constructor(
    parentNode: HTMLElement,
    tagName = "div",
    className = "best-score__wrapper",
    ) {
    super(parentNode);
    this.element.className = className;

    this.dataBase2 = new DataBaseIDX();
    this.dataBase2.init('akurlovich', 'match_game');

    this.bestScoreH3 = new Control(this.element, 'h3', 'best-score__title', 'Best players:');
    
    this.bestScoreBlock = new BestScoreBlocks(this.element, 'div', 'best-score__block');
   
    // let result = async () => {
    //   let resultFiltered = await this.dataBase.sortFilter<MyRecords>('match_game');
    //   console.log(result);
    // }
    // result();
    setTimeout(() => {
      this.dataBase2.readAllnew('match_game');
      
    }, 2000);

    for (let i = 1; i <= 10; i++) {
      this.inputBlocks.push(new BestScoreBlocks(this.element, 'div', 'best-score__block'))
    }

  }
}