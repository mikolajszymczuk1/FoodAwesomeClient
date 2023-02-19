// @ts-ignore
import routerObj from '@/modules/Router/routerObj.ts';
// @ts-ignore
import userStore from '@/modules/Store/UserStore.ts';

/* eslint-disable max-len */
export default class Navigation {
  readonly activateClassName: string = '--active';

  readonly navigationElementSelector: string = '.navigationBar';

  readonly activateButtonSelector: string = '#activateButton';

  readonly deactivateButtonSelector: string = '#deactivateButton';

  readonly mainLinkTag: string = 'a';

  readonly logoutButtonSelector: string = `${this.navigationElementSelector}__link--logout-button`;

  public navigationElement: HTMLElement;

  public activateButton: HTMLButtonElement;

  public deactivateButton: HTMLButtonElement;

  public logoutButton: HTMLButtonElement;

  init(): void {
    // Get elements
    this.navigationElement = document.querySelector(this.navigationElementSelector) as HTMLElement;
    this.activateButton = this.navigationElement.querySelector(this.activateButtonSelector) as HTMLButtonElement;
    this.deactivateButton = this.navigationElement.querySelector(this.deactivateButtonSelector) as HTMLButtonElement;

    if (userStore.isLoggedIn) {
      this.logoutButton = this.navigationElement.querySelector(this.logoutButtonSelector) as HTMLButtonElement;
    }

    // Add events
    this.activateButton.addEventListener('click', () => this.activateMenu());
    this.deactivateButton.addEventListener('click', () => this.deactivateMenu());

    // Setup links
    this.setupLinks();

    // Init logout event
    if (userStore.isLoggedIn) {
      this.logoutButton.addEventListener('click', () => {
        userStore.logout();
        routerObj.setPage(window.location.pathname);
      });
    }
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

  /**
   * Set up links for all page
   */
  setupLinks(): void {
    const allNavLinks = document.querySelectorAll(this.mainLinkTag); // Get all nav links from all page
    allNavLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const currentLink = e.currentTarget as HTMLAnchorElement;
        const path = currentLink.getAttribute('href');
        window.history.pushState({}, '', path);
        routerObj.setPage(path);
        window.scrollTo({ top: 0 });
      });
    });
  }
}
