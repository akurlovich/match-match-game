import { Control } from "../controls";
import { GamePage } from "../game_page/game_page";
import { ModalRegisterWrapper } from "../modal_window_registration/modal_wrapper_reg";
import { AvatarImageHeader } from "../registration_form/controls";
import { HeaderRegBtn } from "./header_btns";
import { HeaderLogo } from "./header_logo";
import { HeaderNavigation } from "./header_nav";

export class HeaderWrapper extends Control {
  headerContainer: Control;
  headerLogo: HeaderLogo;
  headerNav: HeaderNavigation;
  btnReg: HeaderRegBtn;
  startBtn: HeaderRegBtn;
  avatar: AvatarImageHeader;

  constructor(
    parentNode: HTMLElement,
    tagName = "div",
    className = "header__wrapper",
    ) {
    super(parentNode);
    this.element.className = className;

    this.headerContainer = new Control(this.element, 'div', 'header__container');
    // this.element.prepend(this.headerContainer.element);

    this.headerLogo = new HeaderLogo(this.headerContainer.element);
    // this.headerContainer.element.appendChild(this.headerLogo.element);

    this.headerNav = new HeaderNavigation(this.headerContainer.element);
    // this.headerContainer.element.appendChild(this.headerNav.element);

    //!--btn start---
    this.startBtn = new HeaderRegBtn(this.headerContainer.element);
    this.startBtn.setContent('start game');
    this.startBtn.element.style.width = '120px';
    this.startBtn.element.style.marginRight = '20px';
    // this.startBtn.element.style.display = 'none';
    this.startBtn.element.onclick = () => {
      const innerWrapper = document.getElementById('main__page');
      if (!innerWrapper) throw Error ('No app found!!!');
      const gameWin = new GamePage(innerWrapper);
    }


    //!--btn registration---
    this.btnReg = new HeaderRegBtn(this.headerContainer.element);
    // new HeaderRegBtn(this.headerContainer.element);
    // this.headerContainer.element.appendChild(this.btnReg.element);
    // this.btnReg.addListener(()=>{alert('hi')});
    this.btnReg.element.onclick = () => {
      // this.btnReg.dispatch();
      // console.log('11111')
      const regWin = new ModalRegisterWrapper(document.body);
      regWin.registrationForm.onCanselBtnClick = () => {
        regWin.element.remove();
        
        // alert('wrong input!')
      };
      regWin.registrationForm.closeRegistrationForm = () => {
        console.log('vse polia zapolneny');
        regWin.element.remove();
        this.startBtn.element.style.display = 'flex';
        this.btnReg.element.style.display = 'none';
        this.avatar.element.style.display = 'flex';
      }
      // this.btnReg.setContent('staart');
      // this.btnReg.addListener(() => {
      //   console.log('hi2')
      // })
      // regWin.showWin();
      // console.log(this.listeners)
    };

    //!--avatar
    this.avatar = new AvatarImageHeader(this.headerContainer.element);
    this.avatar.element.style.display = 'none';
  }
  

}