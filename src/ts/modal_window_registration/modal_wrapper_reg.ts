import { Control } from "../controls";
import { RegisterForm } from "../registration_form/register-form";
import { RegisterWindow } from "../registration_form/___register-window";

export class ModalRegisterWrapper extends Control {
  h3element: Control;
  // regForm: RegisterForm;
  registrationWindow: Control;
  registrationForm: RegisterForm;
  // modalReg: RegisterWindow;
  // regform3: () => void = () => this.modalReg.regform2();

  constructor(
    parentNode: HTMLElement,
    tagName = "",
    className = "",
    ) {
    super(parentNode);
    this.element.className = 'modal-register-wrapper';

    this.registrationWindow = new Control(this.element, 'div', 'register__window');
    // this.element.className = 'register__window';
    // const h3element: any = new Control(this.element, 'h3', '', 'Register new player'); 
    this.h3element = new Control(this.registrationWindow.element, 'h3', '', 'Register new player');
    // this.element.appendChild(this.h3element.element);

    this.registrationForm = new RegisterForm(this.registrationWindow.element);
    // this.element.appendChild(this.regForm.element);

    


    //!-----
    // this.modalReg = new RegisterWindow(this.element);
    // this.modalReg.addListener(() => console.log('listener1'));
    // this.element.onclick = () => {
    //   this.dispatch();
    //   console.log(this.listeners)

    // }
  }
  // showWin() {
  //   console.log('showWin');
  // }

  // hide() {
  //   this.element.style.display = 'none';
  // }

}