// @ts-ignore
import Page from '@/modules/Page/Page.ts';
// @ts-ignore
import { loginService } from '@/modules/Services/services.ts';
// @ts-ignore
import userStore from '@/modules/Store/UserStore.ts';
// @ts-ignore
import routerObj from '@/modules/Router/routerObj.ts';

export default class LoginPage extends Page {
  readonly formSelector: string = '.formCommon';

  private emailInput: HTMLInputElement;

  private passwordInput: HTMLInputElement;

  private formElement: HTMLFormElement;

  public init(): void {
    super.init();

    this.formElement = document.querySelector(this.formSelector) as HTMLFormElement;
    this.emailInput = this.formElement.email as HTMLInputElement;
    // eslint-disable-next-line max-len
    this.passwordInput = this.formElement.password as HTMLInputElement;
    this.formElement.addEventListener('submit', (e) => this.submitHandle(e));
  }

  /**
   * Send login data to server
   * @param e event
   */
  private async submitHandle(e: Event): Promise<void> {
    e.preventDefault();
    const { token } = await loginService(this.emailInput.value, this.passwordInput.value);
    if (token) {
      userStore.login(token);
      routerObj.setPage('/');
    }
  }
}
