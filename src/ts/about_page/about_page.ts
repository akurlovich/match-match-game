import { Control } from "../controls";
import { HeaderWrapper } from "../header/header_wrapper";
import { AboutWrapper } from "./about_wrapper";

export class AboutPage extends Control {
  headerBlock: HeaderWrapper;
  aboutBlock: AboutWrapper;

  constructor(
    parentNode: HTMLElement,
    tagName = "div",
    className = "wrapper",
    ) {
    super(parentNode);
    this.element.className = className;
    
    this.headerBlock = new HeaderWrapper(this.element);
    this.element.appendChild(this.headerBlock.element);

    this.aboutBlock = new AboutWrapper(this.element);
    this.element.appendChild(this.aboutBlock.element);

  }
}