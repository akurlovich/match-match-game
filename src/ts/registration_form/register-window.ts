import { Control } from "./controls";
import { RegisterForm } from "./register-form";

export class RegisterWindow extends Control {
  h3element: Control;
  regForm: RegisterForm;

  // regform2: () => void = () => this.regForm.onCanselBtnClick();

  constructor(
    parentNode: HTMLElement,
    tagName = "div",
    className = "",
    content = ""
  ) {
    super(parentNode, tagName = "div", className = "", content = "");
    this.element.className = 'register__window';
    // const h3element: any = new Control(this.element, 'h3', '', 'Register new player'); 
    this.h3element = new Control(this.element, 'h3', '', 'Register new player');
    this.element.appendChild(this.h3element.element);

    this.regForm = new RegisterForm(this.element);
    this.element.appendChild(this.regForm.element);

    
  }
  
  showRegWin() {
    // this.regForm.onCanselBtnClick = () => {console.log('from RW')};
  
  }

  // showParent() {
  //   console.log(this.element.parentElement);
  // }
} 