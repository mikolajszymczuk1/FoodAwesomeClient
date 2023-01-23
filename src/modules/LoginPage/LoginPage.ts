// @ts-ignore
import Page from '@/modules/Page/Page.ts';
// @ts-ignore
import loginService from '@/modules/Services/services.ts';

export default class LoginPage extends Page {
  public async init(): Promise<void> {
    super.init();

    const example = await loginService('Adam', 'kot123');
    console.log(example);
  }
}
