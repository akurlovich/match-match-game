import { Control } from "../controls";
import { SelectBlock } from "./select_block";

//!--подключаем в main.js----
// const selectedWrapper = new SelectWrapper(innerWrapper, 'div', 'settings__wrapper');

export class SettingsWrapper extends Control {
  constructor(
    parentNode: HTMLElement,
    tagName = "div",
    className = "settings__wrapper",
    ) {
    super(parentNode);
    this.element.className = className;
  }

  // ----первый селект---
  selectedContainerGameType = new Control(this.element, 'div', 'setting__game-type');
  h3ElementGameType = new Control(this.selectedContainerGameType.element, 'h3', 'settings__title', 'Game cards');
  selectedDivGameType = new SelectBlock(this.selectedContainerGameType.element, 'select', 'settings__options');

  //  -----второй селект-----
  selectedContainerDificulty = new Control(this.element, 'div', 'settings__difficulty');
  h3ElementDificulty = new Control(this.selectedContainerDificulty.element, 'h3', 'settings__title', 'Difficulty');
  selectedDivDificulty = new SelectBlock(this.selectedContainerDificulty.element, 'select', 'settings__options');

}