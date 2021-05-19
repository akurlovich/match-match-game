import { Control } from "../controls";

export class Timer extends Control {
  data: { value: any; };
  timerId: any;
  startTime: any;

  constructor(
    parentNode: HTMLElement,
    tagName = "",
    className = "",
    ) {
    super(parentNode);
    this.data = {
      value: 0
    };
    this.timerId = null;
    this.setValue(0);
  }

  setValue(value: number) {
    this.data.value = value;
    this.refresh();
  };

  start() {
    this.stop();
    this.setValue(0);
    this.startTime = new Date();
    this.timerId = setInterval(() => {
      let currentTime = new Date();
      // this.setValue(Math.floor(new Date(currentTime - this.startTime) / 1000));
    }, 1000);
  };

  stop() {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
    return this.data.value;
  }

  refresh() {
    if (this.data.value) {
      this.element.textContent = this.data.value.toString();
    }
  }
}