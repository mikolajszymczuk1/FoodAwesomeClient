// @ts-ignore
import Router from '@/modules/Router/Router.ts';
// @ts-ignore
import pages from '@/modules/Page/pages.ts';

// Get root app element
const app = document.querySelector('#app') as HTMLElement;

const routerObj = new Router([
  { route: '/', page: pages.mainPage },
  { route: '/explore', page: pages.explorePage },
  { route: '/login', page: pages.loginPage },
  { route: '/register', page: pages.registerPage },
], app);

export default routerObj;
