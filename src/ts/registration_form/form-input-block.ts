import { Control } from "../controls";

export class FormInputBlock extends Control {
  inputItem: Control;
  inputLabel: Control;
  inputChecked: Control;
  // color: string;
  
  constructor(
    parentNode: HTMLElement,
    labelText: string,
    tagName = "div",
    className = "",
    content = ""
  ) {
    super(parentNode, tagName = "div", className = "", content = "");

    this.element.className = 'form__input-block';

    this.inputItem = new Control(this.element, 'input', 'input-items');

    this.inputLabel = new Control(this.element, 'label', 'form__input-label', labelText);

    this.inputChecked = new Control(this.element, 'div', 'form__input-checked');
    
  }

  getValue() {
    return (this.inputItem.element as HTMLInputElement).value;
  }

  firstNameValidate() {
    const regExp = /^[^0-9][^(~!@#$%*&()_—+=|:;"'`<>,.?\\/\\^\s)]{1,30}$/;
    if (regExp.test((this.inputItem.element as HTMLInputElement).value)) {
      this.setSvgColor('green')
      return true;
      } else {
        this.setSvgColor('red');
        return false;
      };
  };

  lastNameValidate() {
    const regExp = /^[^0-9][^(~!@#$%*&()_—+=|:;"'`<>,.?\\/\\^\s)]{1,30}$/;
    if (regExp.test((this.inputItem.element as HTMLInputElement).value)) {
      this.setSvgColor('green')
      return true;
      } else {
        this.setSvgColor('red');
        return false;
      };
  };

  emailValidate() {
    const regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regExp.test((this.inputItem.element as HTMLInputElement).value)) {
      this.setSvgColor('green')
      return true;
      } else {
        this.setSvgColor('red');
        return false;
      };
  }

  setSvgColor(color: string) {
    this.inputChecked.element.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="18" height="18">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 0H16C17.11 0 18 0.9 18 2V16C18 17.1 17.11 18 16 18H2C0.89 18 0 17.1 0 16V2C0 0.9 0.89 0 2 0ZM2 9L7 14L16 5L14.59 3.58L7 11.17L3.41 7.59L2 9Z" fill="white"/>
        </mask>
        <g mask="url(#mask0)">
        <rect x="-3" y="-3" width="24" height="24" fill="${color}"/>
        </g>
      </svg>
    `;
  }
} 