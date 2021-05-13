import { Control } from "../controls";
import { SelectBlock } from "./select_block";

export class SelectWrapper extends Control{
  selectedContainer = new Control(this.element, 'div', 'setting__game-type');
  h3Element = new Control(this.selectedContainer.element, 'h3', 'settings__title', 'Game cards');
  selectedDiv = new SelectBlock(this.selectedContainer.element, 'select', 'settings__options');
}