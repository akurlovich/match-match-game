import { Control } from "../controls";
import { RegisterWindow } from "../registration_form/register-window";

export class ModalRegisterWrapper extends Control {
  constructor(
    parentNode: HTMLElement,
    tagName = "",
    className = "",
    ) {
    super(parentNode);
    this.element.className = 'modal-register-wrapper';
  }
  // modalContainer = new Control(this.element, 'div', 'modal-container');
  modalReg = new RegisterWindow(this.element);

}