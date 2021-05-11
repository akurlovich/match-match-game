export class Control {
  element: HTMLElement;
  node: HTMLElement;
  constructor(
    parentNode: HTMLElement,
    tagName = "div",
    className = "",
    content = ""
  ) {
    this.element = document.createElement(tagName);
    this.element.className = className;
    this.element.innerHTML = content;
    parentNode && parentNode.appendChild(this.element);
    this.node = this.element;
  }
}