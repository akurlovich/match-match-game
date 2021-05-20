import { Control } from "../controls";
import { Timer } from "./timer";
import { TimerComponent } from "./timer_templare";

export class TimerWrapper extends Control {
  // timer: TimerComponent;
  counter: number = -1;
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
  timer() {
    this.counter++;
    if (this.counter > 10) return;
    this.element.innerHTML = `
      <div class="timer__block">
        <span>00 : ${this.counter}</span>
      </div>
      `;
    setTimeout(() => {
      this.timer();
    }, 1000)
  }
}
