// @ts-ignore
import Page from '@/modules/Page/Page.ts';
// @ts-ignore
import { Route } from './types.ts';

export default class Router {
  private routes: Route[];

  private appRootElement: HTMLElement;

  constructor(routesConfig: Object[], appRootElement: HTMLElement) {
    this.routes = routesConfig;
    this.appRootElement = appRootElement;
  }

  /**
   * Initialize router | fetch all pages' templates
   */
  async init(): Promise<void> {
    const results: Promise<Page>[] = [];
    for (let i = 0; i < this.routes.length; i += 1) {
      results.push(this.routes[i].page.loadSinglePage());
    }

    await Promise.all(results);
  }

  /**
   * Get all routes
   * @returns {Object[]} Array of routes objects
   */
  getRoutes(): Object[] {
    return this.routes;
  }

  /**
   * Get route object with specific route path
   * @param {string} routePath
   * @returns {Route} single route object
   */
  getTemplate(routePath: string): Route {
    const routeObj = this.routes.find((el: Route) => el.route === routePath) as Route;
    return routeObj;
  }

  /**
   * Set new current page
   * @param {string} routePath route path eg. '/'
   * @param {Object} data extra data for template
   */
  public setPage(routePath: string, data: Object = { }): void {
    if (!this.getTemplate(routePath)) return;
    const currentPage = this.getTemplate(routePath).page;
    const renderedPage = currentPage.render(data);
    this.appRootElement.innerHTML = renderedPage;
    currentPage.init();
  }
}
