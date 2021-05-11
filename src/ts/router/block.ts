export class Control {
    element: HTMLElement;
    node: HTMLElement;
    constructor(
      parentNode?: HTMLElement,
      tagName = "div",
      className = "",
      content = ""
    ) {
      this.element = document.createElement(tagName);
      this.element.className = className;
      this.element.innerHTML = '111111111111';
      parentNode && parentNode.appendChild(this.element);
      this.node = this.element;
    }
    async getHTML() {
      return `
        <h1>HELLO WORLD</h1>
      `
    }
  }

  export class Control2 {
    element: HTMLElement;
    node: HTMLElement;
    constructor(
      parentNode?: HTMLElement,
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
    async getHTML() {
      return `
        <h1>BEST Score</h1>
      `
    }
  }

  export class Control3 {
    element: HTMLElement;
    node: HTMLElement;
    constructor(
      parentNode?: HTMLElement,
      tagName = "div",
      className = "",
      content = ""
    ) {
      this.element = document.createElement(tagName);
      this.element.className = className;
      this.element.innerHTML = '333333333333';
      parentNode && parentNode.appendChild(this.element);
      this.node = this.element;
    }
    async getHTML() {
      return `
        <h1>Settings</h1>
      `
    }
  }