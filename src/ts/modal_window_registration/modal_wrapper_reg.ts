import { Control } from "../controls";
import { RegisterForm } from "../registration_form/register-form";
export class ModalRegisterWrapper extends Control {
  h3element: Control;
  registrationWindow: Control;
  registrationForm: RegisterForm;

  constructor(
    parentNode: HTMLElement,
    tagName = "",
    className = "",
    ) {
    super(parentNode);
    this.element.className = 'modal-register-wrapper';

    this.registrationWindow = new Control(this.element, 'div', 'register__window');
    this.h3element = new Control(this.registrationWindow.element, 'h3', '', 'Register new player');
    this.registrationForm = new RegisterForm(this.registrationWindow.element);
  }
}