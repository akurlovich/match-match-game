import { Control } from "../controls";
import { ModalRegisterWrapper } from "../modal_window_registration/modal_wrapper_reg";
import { RegisterWindow } from "../registration_form/___register-window";
import { AboutBlocks } from "./about_blocks";

export class AboutContainer extends Control {
  aboutBlockRegistration: Control;
  aboutRegistrationCircle: Control;
  aboutRegistrationCircleNum: Control;
  aboutRegistrationBlockText: Control;
  aboutBlockRegisterNew: Control;
  aboutBlockRegisterNewImg: Control;

  aboutBlockConfiguration: Control;
  aboutConfigurationCircle: Control;
  aboutConfigurationCircleNum: Control;
  aboutConfigurationBlockText: Control;

  aboutBlockSettingBtn: Control;
  aboutBlockSettingBtnMain: Control;
  aboutBlockSettingBtnMainImg: Control;
  aboutBlockSettingBtnMainText: Control;

  aboutBlockStartNewGame: Control;
  aboutStartNewGameCircle: Control;
  aboutStartNewGameCircleNum: Control;
  aboutBlockStartNewGameText: Control;

  aboutBlockCardsField: Control;
  aboutBlockCardsFieldImg: Control;

  constructor(
    parentNode: HTMLElement,
    tagName = "div",
    className = "inner__wrapper",
    ) {
    super(parentNode);
    this.element.className = className;
    //-------about__registration------
    this.aboutBlockRegistration = new Control(this.element, 'div', 'about__registration');
    this.aboutRegistrationCircle = new Control(this.aboutBlockRegistration.element, 'div', 'about__circle-label');
    this.aboutRegistrationCircleNum = new Control(this.aboutRegistrationCircle.element, 'p', '', '1');
    this.aboutRegistrationBlockText = new Control(this.aboutBlockRegistration.element, 'div', 'about__block-text', 'Register new player in game');

  //-------about__register-new-----
    this.aboutBlockRegisterNew = new Control(this.element, 'div', 'about__register-new');
    this.aboutBlockRegisterNewImg = new Control(this.aboutBlockRegisterNew.element, 'img', 'registr-img');
    (this.aboutBlockRegisterNewImg.element as HTMLImageElement).src = './assets/reg-img.svg'
    // this.aboutBlockRegisterNewImg = new Image();
    // this.aboutBlockRegisterNewImg.className = 'registr-img';
    // this.aboutBlockRegisterNewImg.src = './assets/reg-img.svg';
    this.aboutBlockRegisterNew.element.appendChild(this.aboutBlockRegisterNewImg.element);
    this.aboutBlockRegisterNewImg.addListener(() => console.log('listener1'));
    this.aboutBlockRegisterNewImg.element.onclick = () => {
      // this.aboutBlockRegisterNewImg.dispatch();
      const regWin = new ModalRegisterWrapper(document.body);
      
      document.body.appendChild(regWin.element);
      
    }

  //--------about__configuration-----
    this.aboutBlockConfiguration = new Control(this.element, 'div', 'about__configuration');
    this.aboutConfigurationCircle = new Control(this.aboutBlockConfiguration.element, 'div', 'about__circle-label');
    this.aboutConfigurationCircleNum = new Control(this.aboutConfigurationCircle.element, 'p', '', '2');
    this.aboutConfigurationBlockText = new Control(this.aboutBlockConfiguration.element, 'div', 'about__block-text', 'Configure your game settings');
  
  //-----------about__setings-btn-------
    this.aboutBlockSettingBtn = new Control(this.element, 'div', 'about__setings-btn');
    this.aboutBlockSettingBtnMain = new Control(this.aboutBlockSettingBtn.element, 'div', 'setting-btn--main');
    this.aboutBlockSettingBtnMainImg = new Control(this.aboutBlockSettingBtnMain.element, 'img');
    (this.aboutBlockSettingBtnMainImg.element as HTMLImageElement).src = './assets/settings.svg';
    this.aboutBlockSettingBtnMainText = new Control(this.aboutBlockSettingBtnMain.element, 'p', '', 'Game Settings');

    this.aboutBlockSettingBtn.element.onclick = () => {
      return location.href = './settings';
    }

  //----------about__start-new-game-------------
    this.aboutBlockStartNewGame = new Control(this.element, 'div', 'about__start-new-game');
    this.aboutStartNewGameCircle = new Control(this.aboutBlockStartNewGame.element, 'div', 'about__circle-label');
    this.aboutStartNewGameCircleNum = new Control(this.aboutStartNewGameCircle.element, 'p', '', '2');
    this.aboutBlockStartNewGameText = new Control(this.aboutBlockStartNewGame.element, 'div', 'about__block-text', 'Start you new game! Remember card positions and match it before times up.');

  //-----------about__cards-field-------------
    this.aboutBlockCardsField = new Control(this.element, 'div', 'about__cards-field');
    this.aboutBlockCardsFieldImg = new Control(this.aboutBlockCardsField.element, 'img', 'about__card-front');
    (this.aboutBlockCardsFieldImg.element as HTMLImageElement).src = './assets/about_CF.svg';

  

  
  }
}