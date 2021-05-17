import { Control } from "../controls";
import { HeaderWrapper } from "../header/header_wrapper";
import { SettingsWrapper } from "./settings_wrapper";

export class SettingsPage extends Control {
  headerBlock: HeaderWrapper;
  settingsBlock: SettingsWrapper;

  constructor(
    parentNode: HTMLElement,
    tagName = "div",
    className = "wrapper",
    ) {
    super(parentNode);
    this.element.className = className;
    
    this.headerBlock = new HeaderWrapper(this.element);
    this.element.appendChild(this.headerBlock.element);

    this.settingsBlock = new SettingsWrapper(this.element);
    this.element.appendChild(this.settingsBlock.element);

  }
}