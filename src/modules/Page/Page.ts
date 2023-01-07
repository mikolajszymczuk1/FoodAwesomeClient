// @ts-ignore
import liquidEngine from '@/modules/LiquidTemplateEngine/LiquidTemplateEngine.ts';

export default class Page {
  protected pageName: string;

  constructor(pageName: string) {
    this.pageName = pageName;
  }

  /**
   * Function render template and return rendered page
   * `This method should be overridden`
   * @param {Object} data extra data for render process
   * @returns {string} rendered mustache template
   */
  public render(data: Object = { }): string {
    return liquidEngine.renderFileSync(this.pageName, data) as string;
  }
}
