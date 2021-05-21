import { Control } from "./controls";
import { FormInputBlock } from "../form_input/form-input-block";
import { BtnCansel } from "./btns";

interface NewUser{
  first: string, 
  second: string, 
  email: string,
};
export class RegisterForm extends Control {
  formMain: Control;
  formInput: Control;
  formAvatar: Control;
  avatarImg: Control | HTMLImageElement;
  formBtns: Control;
  formBtnAdd: Control;
  formBtnCansel: Control;
  inputBlocks: FormInputBlock[];
  user!: NewUser;
  regFormValid: boolean = false;

  onCanselBtnClick: () => void = () => {};
  closeRegistrationForm: () => void = () => {};

  constructor(
    parentNode: HTMLElement,
    tagName = "div",
    className = "",
    content = ""
  ) {
    super(parentNode, tagName = "div", className = "", content = "");
    this.element.className = 'register-form';

    this.formMain = new Control(this.element, 'div', 'form__main');
    this.formBtns = new Control(this.element, 'div', 'form__btns');
//!----------------ADD----
    this.formBtnAdd = new Control(this.formBtns.element, 'button', 'forms__btns-add');
    this.formBtnAdd.element.textContent = 'add user';
    this.user = {
      first: '',
      second: '',
      email: ''
    };
    this.formBtnAdd.element.onclick = () => {
      this.registrationFormValidation();
      if (this.regFormValid) {
        this.closeRegistrationForm();
      }
    }

//!----------------cansel---------------
    this.formBtnCansel = new BtnCansel(this.formBtns.element, 'button', 'forms__btns-cansel');
    this.formBtnCansel.element.textContent = 'cansel';

    this.formBtnCansel.element.onclick = () => {
      // this.formBtnCansel.dispatch();
      this.onCanselBtnClick();
      // console.log('from btn');
      // console.log(this.listeners)
      //!--работает
      // const parEl = this.element.parentElement;
      // if (!parEl) throw new Error('no');
      // const parEl2 = parEl.parentElement;
      // if (!parEl2) throw new Error('no two')
      // parEl2.style.display = 'none';
    }

    this.formInput = new Control(this.formMain.element, 'div', 'form__input');
    this.formAvatar = new Control(this.formMain.element, 'div', 'form__avatar');
    this.avatarImg = new Control(this.formAvatar.element, 'img');
    this.avatarImg.element.setAttribute('src', './assets/avatar.png');

    this.inputBlocks = [
      new FormInputBlock(this.formInput.element, 'First name'), 
      new FormInputBlock(this.formInput.element, 'Second name'),
      new FormInputBlock(this.formInput.element, 'E-mail')
    ];

//!------- const regPart1 = /^(([^<>()[]\.;:\s@"]+(\.[^<>()[\]\\.;:\s@"]+))|(".+"))/;
//!------- const regPart2 = /@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
// почта /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm 
//https://www.elma-bpm.ru/KB/article-6127.html
//https://habr.com/ru/post/123845/
//https://proglib.io/p/33-regexp/
//http://regexpres.narod.ru/calculator.html
//https://ru.infobyip.com/regularexpressioncalculator.php
//https://emailregex.com/

    this.inputBlocks.map((elem, index) => {
      elem.setSvgColor('red');
      elem.element.addEventListener('input', () => {
        switch (index) {
          case 0: 
            elem.firstNameValidate();
            break;
          case 1:
            elem.lastNameValidate();
            break;
          case 2:
            elem.emailValidate();
            break;
        }
      })
    })
  }
  registrationFormValidation() {
    if (this.inputBlocks[0].firstNameValidate()) {
      this.user.first = this.inputBlocks[0].getValue();
    } else this.user.first = 'name error';
    if (this.inputBlocks[1].lastNameValidate()) {
      this.user.second = this.inputBlocks[1].getValue();
    } else this.user.second = 'last error';
    if (this.inputBlocks[2].emailValidate()) {
      this.user.email = this.inputBlocks[2].getValue();
    } else this.user.email = 'email error';
    console.log(this.user);
    this.regFormValid = ((this.inputBlocks[0].firstNameValidate()) && 
      (this.inputBlocks[1].lastNameValidate()) &&
      (this.inputBlocks[2].emailValidate()));
    console.log(this.regFormValid);
  }
} 