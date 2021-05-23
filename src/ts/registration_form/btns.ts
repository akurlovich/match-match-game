import { Control } from "./controls";

export class BtnCansel extends Control {
  constructor(
    parentNode: HTMLElement,
    tagName = "button",
    className = "forms__btns-cansel",
    content = "cansel"
  ) {
    super(parentNode, tagName = "button", className = "forms__btns-cansel", content = "cansel");
    this.element.textContent = content;
    // this.dispatch();
    // this.addListener(() => {console.log('listener1')});
    // this.element.onclick = () => {
    //   this.addListener(() => {
    //     console.log('hi')
    //   })
    //   console.log(this.listeners)
    //   this.dispatch();
    // }
  }
}