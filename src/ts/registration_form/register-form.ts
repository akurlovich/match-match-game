import { Control } from "./controls";
import { FormInputBlock } from "../form_input/form-input-block";

export class RegisterForm extends Control {
  formMain: Control;
  formInput: Control;
  formAvatar: Control;
  avatarImg: Control | HTMLImageElement;
  formBtns: Control;
  formBtnAdd: Control;
  formBtnCansel: Control;
  inputBlocks: FormInputBlock[];

  constructor(
    parentNode: HTMLElement,
    tagName = "div",
    className = "",
    content = ""
  ) {
    super(parentNode, tagName = "div", className = "", content = "");

    this.element.className = 'register-form';

    this.formMain = new Control(this.element, 'div', 'form__main');
    this.element.appendChild(this.formMain.element);

    this.formBtns = new Control(this.element, 'div', 'form__btns');
    this.element.appendChild(this.formBtns.element);

    this.formBtnAdd = new Control(this.element, 'button', 'forms__btns-add');
    this.formBtns.element.appendChild(this.formBtnAdd.element);
    // (this.formBtnAdd.element as HTMLInputElement).value = 'add user';
    this.formBtnAdd.element.textContent = 'add user';

    this.formBtnCansel = new Control(this.element, 'button', 'forms__btns-cansel');
    this.formBtns.element.appendChild(this.formBtnCansel.element);
    this.formBtnCansel.element.textContent = 'cansel';

    this.formInput = new Control(this.element, 'div', 'form__input');
    this.formMain.element.appendChild(this.formInput.element);

    this.formAvatar = new Control(this.element, 'div', 'form__avatar');
    this.formMain.element.appendChild(this.formAvatar.element);

    this.avatarImg = new Control(this.element, 'img');
    this.formAvatar.element.appendChild(this.avatarImg.element);
    this.avatarImg.element.setAttribute('src', '../../images/crocodile.png');


    this.inputBlocks = [
      new FormInputBlock(this.element, 'First name'), 
      new FormInputBlock(this.element, 'Second name'),
      new FormInputBlock(this.element, 'E-mail')
    ];

    // this.inputBlocks.forEach((elem) => {
    //   this.formInput.element.appendChild(elem.element)
    //   elem.element.addEventListener('input', () => {
    //     console.log();
    //   })
    // })

    this.inputBlocks.map((elem, index) => {
      this.formInput.element.appendChild(elem.element);
      elem.setSvgColor('red');
      elem.element.addEventListener('input', () => {
        switch (index) {
          case 0: 
            // console.log('one');
            elem.firstNameValidate();
            break;
          case 1:
            elem.lastNameValidate();
            // console.log('two')
            // if ((elem.element.firstChild as HTMLInputElement).value.length > 5) {
            //   elem.setSvgColor('#018786')
            // } else {
            //     elem.setSvgColor('red');
            // }
            break;
          case 2:
            elem.emailValidate();
            // console.log('tree')
            break;
        }
        // console.log(index);
      })
    })

    // this.inputBlocks[0].setSvgColor('red');
    // this.inputBlocks[0].element.addEventListener('input', () => {
      // console.log('input');
      // console.log((this.inputBlocks[0].element.firstChild as HTMLInputElement).value);

      // console.log((this.inputBlocks[0].element as HTMLInputElement).value);
    //   console.log((this.inputBlocks[0].element.firstChild as HTMLInputElement).value.length > 5);
    //   if ((this.inputBlocks[0].element.firstChild as HTMLInputElement).value.length > 5) {
    //     this.inputBlocks[0].setSvgColor('#018786');
    //   } 
    //   else {
    //     this.inputBlocks[0].setSvgColor('red');
    //   }
    // })

  }

  // showParent() {
  //   console.log(this.element.parentElement);
  // }
} 