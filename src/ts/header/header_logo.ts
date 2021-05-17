import { Control } from "../controls";

export class HeaderLogo extends Control {

  constructor(
    parentNode: HTMLElement,
    tagName = "div",
    className = "header__logo",
    ) {
    super(parentNode);
    this.element.className = className;
    this.element.innerHTML = `
      <div class="logo__text logo__text--up">
        <p>match</p>
      </div>
      <div class="logo__text logo__text--down">
        <p>match</p>
      </div>
      `;

  }
}