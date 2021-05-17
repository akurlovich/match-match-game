export class Control{
  public node: HTMLElement;
  constructor(
    parentNode: HTMLElement,
    tagName: string = 'div',
    className: string = '',
    content: string = ''
  ) {
    let element = document.createElement(tagName);
    element.textContent = content;
    element.className = className;
    parentNode.appendChild(element);
    this.node = element;
  }
};

export class Button extends Control{
  public node!: HTMLButtonElement;
  public onClick!: () => void;
  
  constructor(parentNode: HTMLElement, caption: string, color: string) {
    super(parentNode, 'button', 'button', caption)
    this.node.textContent = caption;
    this.node.style.backgroundColor = color;
    this.node.style.width = '100px';
    this.node.style.height = '50px';
    this.node.onclick = ()=>{
      this.onClick && this.onClick();
    }
  }
};