import { AvatarImage, Control, InputFileFeild, LabelFileFeild } from "./controls";
import { FormInputBlock } from "../registration_form/form-input-block";
import { BtnCansel } from "./btns";
import { DataBaseIDX } from "../DB/DataBaseIDX";
import { MyRecords } from "../DB/iMyRecords";
export class RegisterForm extends Control {
  formMain: Control;
  formInput: Control;
  formAvatar: Control;
  avatarImg: AvatarImage;
  formBtns: Control;
  formBtnAdd: Control;
  formBtnCansel: Control;
  inputBlocks: FormInputBlock[];
  user!: MyRecords;
  regFormValid: boolean = false;
  dataBase: DataBaseIDX;
  inputFile: InputFileFeild;
  labelInputFile: LabelFileFeild;
  urlImage: string | unknown = 'src_image';

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

    this.user = {
      score: 0,
      name: '', 
      second: '', 
      email: '',
      image: '',
      hash: 0,
    }

    this.formMain = new Control(this.element, 'div', 'form__main');
    this.formBtns = new Control(this.element, 'div', 'form__btns');
//!--data base---
    this.dataBase = new DataBaseIDX();
    this.dataBase.init('akurlovich', 'match_game');
//!----------------ADD----
    this.formBtnAdd = new Control(this.formBtns.element, 'button', 'forms__btns-add', 'add user');
    this.formBtnAdd.onClick = async () => {
      let scoreNum = Math.floor(Math.random() * 1000);
      let numHash = (new Date).getTime();
      this.registrationFormValidation();
      if (this.regFormValid) {
        console.log('from onclick 1')
        this.closeRegistrationForm();
        console.log('from onclick 2')
        let resreg = await this.dataBase.addItem<MyRecords>('match_game', {score: scoreNum, name: this.user.name, second: this.user.second, email: this.user.email, image: this.user.image, hash: numHash});
        console.log('to add :', resreg);
      };
      console.log('from onclick 3')
    };

//!----------------cansel---------------
    this.formBtnCansel = new BtnCansel(this.formBtns.element, 'button', 'forms__btns-cansel', 'cansel');
    this.formBtnCansel.element.onclick = () => {
      this.onCanselBtnClick();
      //!--работает
      // const parEl = this.element.parentElement;
      // if (!parEl) throw new Error('no');
      // const parEl2 = parEl.parentElement;
      // if (!parEl2) throw new Error('no two')
      // parEl2.style.display = 'none';
    }

    this.formInput = new Control(this.formMain.element, 'div', 'form__input');
    this.formAvatar = new Control(this.formMain.element, 'div', 'form__avatar');
    this.avatarImg = new AvatarImage(this.formAvatar.element);
    // this.avatarImg.element.setAttribute('src', './assets/avatar.png');
    this.labelInputFile = new LabelFileFeild(this.formAvatar.element);
    this.inputFile = new InputFileFeild(this.formAvatar.element);

    this.inputFile.element.onchange = async (e: Event) => {
      const target = e.target as HTMLInputElement;
      const file: File = (target.files as FileList)[0];

      const base64 = (files: File) =>
        new Promise((resolve, reject) => {
          let reader = new FileReader();
          reader.readAsDataURL(files);
          reader.onload = () => resolve(reader.result);
        });

      this.urlImage = await base64(file);
      // console.log('url :', urlImage)
      this.user.image = this.urlImage as string;
      console.log(this.user.image);
      this.avatarImg.element.src = this.urlImage as string;
      // image.src = urlImage as string;
    };
    
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
      this.user.name = this.inputBlocks[0].getValue();
    } else this.user.name = 'name error';
    if (this.inputBlocks[1].lastNameValidate()) {
      this.user.second = this.inputBlocks[1].getValue();
    } else this.user.second = 'last error';
    if (this.inputBlocks[2].emailValidate()) {
      this.user.email = this.inputBlocks[2].getValue();
    } else this.user.email = 'email error';
    // console.log(this.user);
    this.regFormValid = ((this.inputBlocks[0].firstNameValidate()) && 
      (this.inputBlocks[1].lastNameValidate()) &&
      (this.inputBlocks[2].emailValidate()));
    console.log('from registratoin form valitation', this.regFormValid);
  }
} 