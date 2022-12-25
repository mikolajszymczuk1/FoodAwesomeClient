// @ts-ignore
import Page from '@/modules/Page/Page.ts';
// @ts-ignore
import Navigation from '@/modules/Navigation/Navigation.ts';

export default class MainPage extends Page {
  // eslint-disable-next-line class-methods-use-this
  public init(): void {
    // Init Navigation
    const navigation = new Navigation();
    navigation.init();
  }
}
