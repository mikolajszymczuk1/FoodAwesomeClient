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
   */
  public setPage(routePath: string): void {
    if (!this.getTemplate(routePath)) return;
    const currentPage = this.getTemplate(routePath).page;
    const renderedPage: string = currentPage.render();
    this.appRootElement.innerHTML = renderedPage;
    currentPage.init();
    window.history.replaceState({}, '', routePath);
  }
}
