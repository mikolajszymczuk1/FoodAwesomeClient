// @ts-ignore
import Page from '@/modules/Page/Page.ts';
// @ts-ignore
import userStore from '@/modules/Store/UserStore.ts';

export default class MainPage extends Page {
  /**
   * Render method for main page
   * @returns {string} rendered template
   */
  public render(): string {
    return super.render({
      isLoggedIn: userStore.isLoggedIn,
    });
  }
}
