import { Control } from "../controls";
import { SelectBlockCategory, SelectBlockDifficulty } from "./select_block";
export class SettingsWrapper extends Control {
  selectedContainerGameType: Control;
  h3ElementGameType: Control;
  selectedDivGameType: SelectBlockCategory;
  selectedContainerDificulty: Control;
  h3ElementDificulty: Control;
  selectedDivDificulty: SelectBlockDifficulty;
  constructor(
    parentNode: HTMLElement,
    tagName = "div",
    className = "settings__wrapper",
    ) {
    super(parentNode);
    this.element.className = className;
    // ----первый селект---
    this.selectedContainerGameType = new Control(this.element, 'div', 'setting__game-type');
    this.h3ElementGameType = new Control(this.selectedContainerGameType.element, 'h3', 'settings__title', 'Game cards');
    this.selectedDivGameType = new SelectBlockCategory(this.selectedContainerGameType.element, 'select', 'settings__options');
    this.selectedDivGameType.element.onchange = () => {
      let category = (this.selectedDivGameType.element as HTMLInputElement).value;
      sessionStorage.setItem('category', category)
      // console.log((this.selectedDivGameType.element as HTMLInputElement).value)
    }
  
    //  -----второй селект-----
    this.selectedContainerDificulty = new Control(this.element, 'div', 'settings__difficulty');
    this.h3ElementDificulty = new Control(this.selectedContainerDificulty.element, 'h3', 'settings__title', 'Difficulty');
    this.selectedDivDificulty = new SelectBlockDifficulty(this.selectedContainerDificulty.element, 'select', 'settings__options');
    this.selectedDivDificulty.element.onchange = () => {
      let difficulty = (this.selectedDivDificulty.element as HTMLInputElement).value;
      sessionStorage.setItem('difficulty', difficulty)
      // console.log((this.selectedDivDificulty.element as HTMLInputElement).value)
    }
  
  }
}
  