// @ts-ignore
import { Route } from './types.ts';

export default class Router {
  private routes: Object[];

  private appRootElement: HTMLElement;

  constructor(routesConfig: Object[], appRootElement: HTMLElement) {
    this.routes = routesConfig;
    this.appRootElement = appRootElement;
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
    const completedRoutePath = `/${routePath}`;
    if (!this.getTemplate(completedRoutePath)) return;
    const currentPage = this.getTemplate(completedRoutePath).page;
    const renderedPage = currentPage.render(data);
    this.appRootElement.innerHTML = renderedPage;
    currentPage.init();
  }
}
