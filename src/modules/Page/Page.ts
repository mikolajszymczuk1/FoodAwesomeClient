import Mustache from 'mustache';

export default class Page {
  private pageName: string;

  private template: string;

  constructor(pageName: string, template: string) {
    this.pageName = pageName;
    this.template = template;
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
   * Function that load and return single template
   * @param {string} templatePath template to load
   * @returns {Promise<string>} fetched template
   */
  public static async loadSinglePage(templatePath: string): Promise<string> {
    const response = await fetch(templatePath);
    const template = await response.text();
    return template;
  }
}
