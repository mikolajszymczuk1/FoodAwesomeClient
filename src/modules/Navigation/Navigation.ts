/* eslint-disable max-len */
export default class Navigation {
  readonly activateClassName: string = '--active';

  readonly navigationElementSelector: string = '.navigationBar';

  readonly activateButtonSelector: string = '#activateButton';

  readonly deactivateButtonSelector: string = '#deactivateButton';

  public navigationElement: HTMLElement;

  public activateButton: HTMLButtonElement;

  public deactivateButton: HTMLButtonElement;

  constructor() {
    this.navigationElement = document.querySelector(this.navigationElementSelector) as HTMLElement;
    this.activateButton = this.navigationElement.querySelector(this.activateButtonSelector) as HTMLButtonElement;
    this.deactivateButton = this.navigationElement.querySelector(this.deactivateButtonSelector) as HTMLButtonElement;
  }

  init(): void {
    this.activateButton.addEventListener('click', () => this.activateMenu());
    this.deactivateButton.addEventListener('click', () => this.deactivateMenu());
  }

  /**
   * Return full activate class name
   * @returns {string} full class name
   */
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
