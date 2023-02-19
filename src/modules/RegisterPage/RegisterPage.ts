// @ts-ignore
import Page from '@/modules/Page/Page.ts';
// @ts-ignore
import { registerService } from '@/modules/Services/services.ts';
// @ts-ignore
import routerObj from '@/modules/Router/routerObj.ts';

export default class RegisterPage extends Page {
  readonly formSelector: string = '.formCommon';

  private formElement: HTMLFormElement;

  public init(): void {
    super.init();

    this.formElement = document.querySelector(this.formSelector) as HTMLFormElement;
    this.formElement.addEventListener('submit', (e) => this.submitHandle(e));
  }

  /**
   * Send register data to server
   * @param e event
   */
  private async submitHandle(e: Event): Promise<void> {
    e.preventDefault();
    const registerResponse = await registerService(
      this.formElement.username.value,
      this.formElement.email.value,
      this.formElement.password.value,
      this.formElement.repeatPassword.value,
    );

    if (registerResponse.response === 'OK') {
      routerObj.setPage('/login');
    }

    console.log(registerResponse);
  }
}
