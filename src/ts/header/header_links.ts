import { Control } from "../controls";

export class HeaderLinks extends Control {
  srcLink: string;
  textLink: string;
  hrefLink: string;

  constructor(
    parentNode: HTMLElement,
    tagName = "a",
    // className = "",
    // content = "",
    srcLink = '',
    textLink = '',
    hrefLink = ''

    ) {
    super(parentNode, tagName);
    this.srcLink = srcLink;
    this.textLink = textLink;
    this.hrefLink = hrefLink;

    this.element.setAttribute('href', `${hrefLink}`);
    this.element.dataset.link = '';
    
    this.element.innerHTML = `
      <li href=${hrefLink} class="list__item" data-link>
        <img href=${hrefLink} src="${srcLink}" alt="" data-link>
        <p href=${hrefLink} data-link>${textLink}</p>
      </li>
      `;
    

  }
}