import { Control } from "../controls";
import { Timer } from "./timer";
import { TimerComponent } from "./timer_templare";

export class TimerWrapper extends Control {
  // timer: TimerComponent;
  // timer: TimerComponent;
  counter!: number;
  coutNum!: number | string;
  playTime!: NodeJS.Timeout;
  countSec!: number | string;
  countMin: number = 0;
  constructor(
    parentNode: HTMLElement,
    tagName = "div",
    className = "timer__container",
    content = "cansel"
  ) {
    super(parentNode, tagName = "div", className = "timer__container", content = "");
  }
  // let counter: number = 0;
  setTime(sec: number = 30) {
    this.counter = sec;
  };
  timer() {
    this.counter--;
    if (this.counter >= 10) {
      this.coutNum = this.counter;
    } else {
      this.coutNum = '0' + this.counter;
    }
    this.element.innerHTML = `
      <div class="timer__block">
      <span>00 : ${this.coutNum}</span>
      </div>
      `;
    if (this.counter < 0) {
      this.gameTime();
      return;
    }
    setTimeout(() => {
      this.timer();
    }, 1000)
  };
  gameTime() {
    this.counter++;
    if (this.counter >= 10) {
      this.countSec = this.counter;
    } else {
      this.countSec = '0' + this.counter;
    };
    if (this.counter >= 60) {
      this.countMin = (~~(this.counter/60))
      this.countSec = this.counter % 60;
      if (this.countSec < 10) this.countSec = '0' + (this.counter % 60);
    }
    this.element.innerHTML = `
      <div class="timer__block">
      <span>0${this.countMin} : ${this.countSec}</span>
      </div>
      `;
    this.playTime = setTimeout(() => {
      this.gameTime();
    }, 1000)
  };

  stopTime() {
    clearTimeout(this.playTime);
  };

  getTime() {
    return this.counter;
  }


}
