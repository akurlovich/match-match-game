import { Control } from "../controls";
import { RegisterWindow } from "../registration_form/register-window";

export class ModalRegisterWrapper extends Control {
  modalReg: RegisterWindow;
  // regform3: () => void = () => this.modalReg.regform2();

  constructor(
    parentNode: HTMLElement,
    tagName = "",
    className = "",
    ) {
    super(parentNode);
    this.element.className = 'modal-register-wrapper';
    
    this.modalReg = new RegisterWindow(this.element);
    // this.modalReg.addListener(() => console.log('listener1'));
  }
  // modalContainer = new Control(this.element, 'div', 'modal-container');
  // hide() {
  //   this.element.style.display = 'none';
  // }
  hide() {
    this.element.style.display = 'none';
  }

}