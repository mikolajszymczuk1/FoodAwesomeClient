export default class Navigation {
  private activateClassName: string;

  private navigationElementSelector: string;

  public navigationElement: HTMLElement;

  public activateButton: HTMLButtonElement;

  public deactivateButton: HTMLButtonElement;

  constructor(
    navigationElementSelector: string,
    activateButtonSelector: string,
    deactivateButtonSelector: string,
    activateClassName: string,
  ) {
    this.navigationElementSelector = navigationElementSelector;
    this.activateClassName = activateClassName;
    this.navigationElement = document.querySelector(navigationElementSelector) as HTMLElement;
    this.activateButton = document.querySelector(activateButtonSelector) as HTMLButtonElement;
    this.deactivateButton = document.querySelector(deactivateButtonSelector) as HTMLButtonElement;
  }

  get fullActivateClassName(): string {
    return this.navigationElementSelector
      .slice(1, this.navigationElementSelector.length) + this.activateClassName;
  }

  /**
   * Active menu by adding special active class name
   */
  activateMenu(): void {
    this.navigationElement.classList.add(this.fullActivateClassName);
  }

  /**
   * Deactivate menu by removing special active class name
   */
  deactivateMenu(): void {
    this.navigationElement.classList.remove(this.fullActivateClassName);
  }
}
