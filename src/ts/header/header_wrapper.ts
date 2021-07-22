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

  stopLink: Control;
  gameWin!: GamePage;
  
  constructor(
    parentNode: HTMLElement,
    tagName = "div",
    className = "header__wrapper",
    ) {
    super(parentNode);
    this.element.className = className;

    this.headerContainer = new Control(this.element, 'div', 'header__container');

    this.headerLogo = new HeaderLogo(this.headerContainer.element);

    this.headerNav = new HeaderNavigation(this.headerContainer.element);

    //!--btn start---
    this.startBtn = new HeaderRegBtn(this.headerContainer.element);
    this.startBtn.setContent('start game');
    this.startBtn.element.style.width = '120px';
    this.startBtn.element.style.marginRight = '20px';
    this.startBtn.element.style.display = 'none';
    this.startBtn.element.onclick = () => {
      const innerWrapper = document.getElementById('main__page');
      if (!innerWrapper) throw Error ('No app found!!!');
      this.gameWin = new GamePage(innerWrapper);
      this.stopLink.element.style.display = 'flex';
      this.startBtn.element.style.display = 'none';
      this.headerNav.element.style.pointerEvents = 'none';
      setTimeout(() => {
        this.gameWin.newApp.game.popup.onWinBtnClick = () => {
          this.stopLink.element.style.display = 'none';
          this.startBtn.element.style.display = 'flex';
          this.headerNav.element.style.pointerEvents = 'all';
        };
        
      }, 500);

      
    };

    //!--btn registration---
    this.btnReg = new HeaderRegBtn(this.headerContainer.element);
    this.btnReg.element.onclick = () => {
      const regWin = new ModalRegisterWrapper(document.body);
      regWin.registrationForm.onCanselBtnClick = () => {
        regWin.element.remove();
      };
      regWin.registrationForm.closeRegistrationForm = () => {
        // console.log('vse polia zapolneny');
        regWin.element.remove();
        this.startBtn.element.style.display = 'flex';
        this.btnReg.element.style.display = 'none';
        this.avatar.element.style.display = 'flex';
        this.avatar.element.src = sessionStorage.getItem('image') as string;
      }
    };
    //!--stop game--
    // this.stopBtn = new HeaderRegBtn(this.headerContainer.element);
    // this.stopBtn.setContent('stop game');
    // this.stopBtn.element.style.width = '120px';
    // this.stopBtn.element.style.marginRight = '20px';
    // // this.stopBtn.element.style.display = 'none';
    // this.stopBtn.element.onclick = () => {
    //   this.stopBtn.element.style.display = 'none';
    //   this.startBtn.element.style.display = 'flex';
    //   return location.pathname = './';
    // }

    this.stopLink = new Control(this.headerContainer.element, 'a', 'header__button', 'stop game');
    this.stopLink.element.setAttribute('href', '/');
    this.stopLink.element.setAttribute('data-link', '');
    this.stopLink.element.style.width = '120px';
    this.stopLink.element.style.marginRight = '20px';
    this.stopLink.element.style.display = 'none';
    this.stopLink.element.onclick = () => {
      this.gameWin.element.remove();
      this.stopLink.element.style.display = 'none';
      this.startBtn.element.style.display = 'flex';
      this.headerNav.element.style.pointerEvents = 'all';
      // this.gameWin.newApp.game.popup.onWinBtnClick = () => {
      //   this.stopLink.element.style.display = 'none';
      //   this.startBtn.element.style.display = 'flex';
      // }
    };

    // this.gameWin.newApp.game.popup.onWinBtnClick = () => {
    //   this.stopLink.element.style.display = 'none';
    //   this.startBtn.element.style.display = 'flex';
    // }

    //!--avatar
    this.avatar = new AvatarImageHeader(this.headerContainer.element);
    this.avatar.element.style.display = 'none';
  }
  

}