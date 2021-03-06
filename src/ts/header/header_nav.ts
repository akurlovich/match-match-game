import { Control } from "../controls";
import { HeaderLinks } from "./header_links";

export class HeaderNavigation extends Control {
  navUl: Control;
  navLinkAbout: HeaderLinks;
  navLinkScore: HeaderLinks;
  navLinkSettings: HeaderLinks;

  constructor(
    parentNode: HTMLElement,
    tagName = "nav",
    className = "header__nav",
    ) {
    super(parentNode);
    this.element.className = className;
//!---ul---
    this.navUl = new Control(this.element, 'ul', 'nav__list');
    this.element.appendChild(this.navUl.element);
//!--links----
    this.navLinkAbout = new HeaderLinks(this.element, 'a', './assets/about.svg', 'About Game', '/');
    this.navUl.element.appendChild(this.navLinkAbout.element);
    this.navLinkAbout.element.classList.add('header_nav_active');

    this.navLinkScore = new HeaderLinks(this.element, 'a', './assets/score.svg', 'Best Score', '/best_score');
    this.navUl.element.appendChild(this.navLinkScore.element);

    this.navLinkSettings = new HeaderLinks(this.element, 'a', './assets/settings.svg', 'Game Settings', '/settings');
    this.navUl.element.appendChild(this.navLinkSettings.element);

  }
}