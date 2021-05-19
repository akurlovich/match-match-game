export class BaseBlock {
  element: HTMLElement;
  node: HTMLElement;
  constructor(tagName = 'div', className = '', styles: string[] = [], content = '') {
    this.element = document.createElement(tagName);
    this.element.className = className;
    this.element.innerHTML = content;
    this.element.classList.add(...styles);
    // parentNode && parentNode.appendChild(this.element);
    this.node = this.element;
  };
}
