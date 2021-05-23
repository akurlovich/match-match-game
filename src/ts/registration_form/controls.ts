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
    this.element.textContent = content;
    parentNode && parentNode.appendChild(this.element);
    this.node = this.element;
    this.node.onclick = ()=>{
      this.onClick && this.onClick();
    }
  }
}; 
export class InputFileFeild {
  element: HTMLInputElement;
  constructor(
    parentNode: HTMLElement,
  ) {
    this.element = document.createElement('input');
    this.element.className = 'input_file';
    this.element.id = 'upload-photo';
    this.element.style.visibility = 'hidden';
    this.element.setAttribute('type', 'file');
    parentNode && parentNode.appendChild(this.element);
  };
};

export class LabelFileFeild {
  element: HTMLLabelElement;
  constructor(
    parentNode: HTMLElement,
  ) {
    this.element = document.createElement('label');
    this.element.textContent = 'Choose Avatar Image...'
    this.element.className = 'label_input_file';
    // this.element.style.visibility = 'hidden';
    this.element.setAttribute('for', 'upload-photo');
    parentNode && parentNode.appendChild(this.element);
  };
};

export class AvatarImage {
  element: HTMLImageElement;
  constructor(
    parentNode: HTMLElement,
  ) {
    this.element = document.createElement('img');
    this.element.src = './assets/avatar.png';
    // this.element.textContent = 'Choose Avatar Image...'
    this.element.className = 'avatar_img';
    // this.element.style.visibility = 'hidden';
    // this.element.setAttribute('for', 'upload-photo');
    parentNode && parentNode.appendChild(this.element);
  };
};