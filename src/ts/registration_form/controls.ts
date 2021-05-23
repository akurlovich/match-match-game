import { Observer } from "../observer";

export class Control extends Observer{
  element: HTMLElement;
  node: HTMLElement;
  public onClick!: () => void;
  constructor(
    parentNode: HTMLElement,
    tagName = "div",
    className = "",
    content = ""
  ) {
    super();
    this.element = document.createElement(tagName);
    this.element.className = className;
    this.element.innerHTML = content;
    parentNode && parentNode.appendChild(this.element);
    this.node = this.element;
    this.node.onclick = ()=>{
      this.onClick && this.onClick();
    }
  }
}