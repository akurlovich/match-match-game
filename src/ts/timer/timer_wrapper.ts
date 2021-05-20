import { Control } from "../controls";
import { Timer } from "./timer";
import { TimerComponent } from "./timer_templare";

export class TimerWrapper extends Control {
  // timer: TimerComponent;
  // timer: TimerComponent;
  counter!: number;
  coutNum!: number | string;
  constructor(
    parentNode: HTMLElement,
    tagName = "div",
    className = "timer__container",
    content = "cansel"
  ) {
    super(parentNode, tagName = "div", className = "timer__container", content = "");
    
    // this.timer = new TimerComponent();  
    // console.log(this.timer.display);
    // console.log(this.timer.start());
    // console.log(this.timer.timer());
    // timer() {

  }
  // let counter: number = 0;
  setTime(sec: number = 30) {
    this.counter = sec;
  }
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
    if (this.counter <= 0) return;
    setTimeout(() => {
      this.timer();
    }, 1000)
  }
}
