// @ts-ignore
import Page from '@/modules/Page/Page.ts';
// @ts-ignore
import Service from '@/modules/Services/Service.ts';

export default class LoginPage extends Page {
  public async init(): Promise<void> {
    super.init();

    const example = await Service.createRequest('POST', '/auth/login', {
      login: 'Adam',
      password: 'kot123',
    });

    console.log(example);
  }
}
