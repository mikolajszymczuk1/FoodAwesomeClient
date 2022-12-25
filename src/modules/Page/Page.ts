import Mustache from 'mustache';

export default class Page {
  private pageName: string;

  private template: string;

  private templatePath: string;

  constructor(pageName: string, templatePath: string) {
    this.pageName = pageName;
    this.templatePath = templatePath;
  }

  /**
   * Return page template
   * @returns {string}
   */
  get pageTemplate(): string {
    return this.template;
  }

  /**
   * Function render template and return rendered page
   * @param {Object} data extra data for template
   * @returns {string} rendered mustache template
   */
  public render(data: Object): string {
    return Mustache.render(this.template, data);
  }

  /**
   * Function that load single template
   * @returns {Promise<void>} set template for current page
   */
  public async loadSinglePage(): Promise<void> {
    const response = await fetch(this.templatePath);
    const template = await response.text();
    this.template = template;
  }
}
