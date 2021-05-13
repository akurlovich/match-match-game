// import { Control } from "../controls"

export class OptionSelect {
  element: HTMLOptionElement;
  constructor(
    parentNode: HTMLElement,
    valueElement: string,
    textContentElement = '',
    disabledElement = false,
    selectedElement = false
  ) {
    this.element = document.createElement('option');
    parentNode.appendChild(this.element);
    this.element.value = valueElement
    this.element.textContent = textContentElement;    
    this.element.disabled = disabledElement;
    this.element.selected = selectedElement;
  }
  setContent(text: string) {
    this.element.textContent = text;
  }
}