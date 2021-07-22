
import { Control } from "../controls";
import { DataBaseIDX } from "../DB/DataBaseIDX";
import { MyRecords } from "../DB/iMyRecords";

export class WinPopupWrapper extends Control {
  container: Control;
  popupText!: Control;
  popupBtn!: Control;
  score: number = 0;
  min!: number | string;
  sec!: number | string;
  wrongCounter: number = 0;
  rightCounter: number = 0;
  totalScore: number = 0;

  dataBase: DataBaseIDX;
  user!: MyRecords;

  onWinBtnClick: () => void = () => {};

  constructor(
    parentNode: HTMLElement,
    score?: number,
    wrongCounter?: number,
    rightCounter?: number
    ) {
    super(parentNode);
    this.dataBase = new DataBaseIDX();
    this.dataBase.init('akurlovich', 'match_game');
    this.user = {
      score: 0,
      name: '', 
      second: '', 
      email: '',
      image: './assets/avatar.png',
      hash: 0,
    };

    this.element.className = 'popup__wrapper';
    this.container = new Control(this.element, 'div', 'popup__container')
    this.popupBtn = new Control(this.container.element, 'a', 'popup__btn', 'ok');
    this.popupBtn.element.setAttribute('href', '/best_score')
    this.popupBtn.element.setAttribute('data-link', '')
    this.popupBtn.element.onclick = async () => {
      setTimeout(() => {
        this.element.remove();
        this.onWinBtnClick();
      }, 300);
      let numHash = (new Date).getTime();
      let resreg = await this.dataBase.addItem<MyRecords>('match_game', {
        score: this.totalScore, 
        name: sessionStorage.getItem('name') === null ? 'name error' : (sessionStorage.getItem('name') as string), 
        second: sessionStorage.getItem('second') === null ? 'last name error' : (sessionStorage.getItem('second') as string), 
        email: sessionStorage.getItem('email') === null ? 'email error' : (sessionStorage.getItem('email') as string), 
        image: sessionStorage.getItem('image') === null ? './assets/avatar.png' : (sessionStorage.getItem('image') as string), 
        hash: numHash
      });
      
    };
  };
  setCounter(score: number, wrongCounter: number, rightCounter: number) {
    this.score = score;
    this.min = (~~(this.score/60));
    if (this.min < 10) this.min = '0' + this.min;
    this.sec = this.score % 60;
    if (this.score < 10) this.sec = '0' + this.score;
    this.wrongCounter = wrongCounter;
    this.rightCounter = rightCounter;
    this.totalScore = (((this.rightCounter - this.wrongCounter) * 100) - (this.score * 10));
    if (this.totalScore < 0) this.totalScore = 0;
    this.popupText = new Control(this.container.element, 'h2', 'popup__text')
    this.popupText.element.textContent = `Congratulations! You successfully found all matches on ${this.min}.${this.sec} minutes. You score: ${this.totalScore}`
  };
  
}
