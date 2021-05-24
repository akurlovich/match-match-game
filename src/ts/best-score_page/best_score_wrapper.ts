import { Control } from "../controls";
import { DataBaseIDX } from "../DB/DataBaseIDX";
import { MyRecords } from "../DB/iMyRecords";
import { BestScoreBlocks } from "./best-cscore_blocks";
import { BestScorePage } from "./best-score_page";

export class BestScoreWrapper extends Control {
  bestScoreH3: Control;
  // bestScoreBlock: BestScoreBlocks;
  inputBlocks: BestScoreBlocks[] = [];
  userDBlength!: number;
  dataBase!: IDBDatabase;
  resultFiltered!: MyRecords[] | void;

  constructor(
    parentNode: HTMLElement,
    tagName = "div",
    className = "best-score__wrapper",
    ) {
    super(parentNode);
    this.element.className = className;

    const iDB = window.indexedDB;
    const openRequest = iDB.open('akurlovich');

    openRequest.onsuccess = () => {
      this.dataBase = openRequest.result;
      let transaction = this.dataBase.transaction('match_game', 'readonly');
      let store = transaction.objectStore('match_game');
      let result = store.index('scoreIDX').openCursor(null, 'prev');
      let resData: Array<MyRecords> = [];

      result.onsuccess = () => {
        let cursor = result.result;
        if (cursor) {
          resData.push(cursor.value);
          cursor.continue();
        }
      };

      transaction.oncomplete = () => {
        console.log('complite filtered', resData.length);
        this.userDBlength = resData.length > 10 ? 10 : resData.length;
        for (let i = 0; i < this.userDBlength; i++) {
          this.inputBlocks.push(new BestScoreBlocks(this.element, 'div', 'best-score__block', resData[i].email, resData[i].score))
          console.log(resData[i].score);
        }
      };
      transaction.onerror = () => { console.log('error filtered') };
      transaction.onabort = () => { console.log('abort filtered') };
    }
    
    console.log('from class ', this.userDBlength)

    this.bestScoreH3 = new Control(this.element, 'h3', 'best-score__title', 'Best players:');
    
    // this.bestScoreBlock = new BestScoreBlocks(this.element, 'div', 'best-score__block');
   
    // setTimeout(() => {
    //   this.resultFiltered = this.dataBase.readAllnew('match_game');
    //   console.log('from page', this.resultFiltered);
      
    // }, 1000);
  

    // for (let i = 1; i <= 10; i++) {
    //   this.inputBlocks.push(new BestScoreBlocks(this.element, 'div', 'best-score__block'))
    // }

  }
}