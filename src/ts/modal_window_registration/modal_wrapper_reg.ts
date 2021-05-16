import { Control } from "../controls";
import { RegisterWindow } from "../registration_form/register-window";

export class ModalRegisterWrapper extends Control {
  modalReg: RegisterWindow;
  constructor(
    parentNode: HTMLElement,
    tagName = "",
    className = "",
    ) {
    super(parentNode);
    this.element.className = 'modal-register-wrapper';
    
    this.modalReg = new RegisterWindow(this.element);
  }
  // modalContainer = new Control(this.element, 'div', 'modal-container');

}