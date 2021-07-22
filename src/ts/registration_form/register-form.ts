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
  urlImage: string | unknown;

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
      image: './assets/avatar.png',
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
      // let scoreNum = Math.floor(Math.random() * 1000);
      let numHash = (new Date).getTime();
      this.registrationFormValidation();
      if (this.regFormValid) {
        sessionStorage.setItem('name', this.user.name);
        sessionStorage.setItem('second', this.user.second);
        sessionStorage.setItem('email', this.user.email);
        sessionStorage.setItem('image', this.user.image);
        this.closeRegistrationForm();
        let resreg = await this.dataBase.addItem<MyRecords>('match_game', {
          score: 0, 
          name: this.user.name, 
          second: this.user.second, 
          email: this.user.email, 
          image: this.user.image, 
          hash: numHash
        });
      };
    };

    this.formBtnCansel = new BtnCansel(this.formBtns.element, 'button', 'forms__btns-cansel', 'cansel');
    this.formBtnCansel.element.onclick = () => this.onCanselBtnClick();

    this.formInput = new Control(this.formMain.element, 'div', 'form__input');
    this.formAvatar = new Control(this.formMain.element, 'div', 'form__avatar');
    this.avatarImg = new AvatarImage(this.formAvatar.element);
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
      this.user.image = this.urlImage as string;
      this.avatarImg.element.src = this.urlImage as string;
    };
    
    this.inputBlocks = [
      new FormInputBlock(this.formInput.element, 'First name'), 
      new FormInputBlock(this.formInput.element, 'Second name'),
      new FormInputBlock(this.formInput.element, 'E-mail')
    ];

    this.inputBlocks.map((elem, index) => {
      elem.setSvgColor('red');
      elem.element.addEventListener('input', () => {
        if ((this.inputBlocks[0].firstNameValidate()) && 
      (this.inputBlocks[1].lastNameValidate()) &&
      (this.inputBlocks[2].emailValidate())) {
        this.formBtnAdd.element.style.backgroundColor = '#2196F3';
        this.formBtnAdd.element.style.pointerEvents = 'auto'
      } else {
        this.formBtnAdd.element.style.backgroundColor = 'grey';
        this.formBtnAdd.element.style.pointerEvents = 'none'
      };

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
    if (this.inputBlocks[0].firstNameValidate()) this.user.name = this.inputBlocks[0].getValue();
    if (this.inputBlocks[1].lastNameValidate()) this.user.second = this.inputBlocks[1].getValue();
    if (this.inputBlocks[2].emailValidate()) this.user.email = this.inputBlocks[2].getValue();
    this.regFormValid = ((this.inputBlocks[0].firstNameValidate()) && 
      (this.inputBlocks[1].lastNameValidate()) &&
      (this.inputBlocks[2].emailValidate()));
  }
} 