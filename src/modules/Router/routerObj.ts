// @ts-ignore
import Router from '@/modules/Router/Router.ts';
// @ts-ignore
import { mainPage, explorePage } from '@/modules/Page/pages.ts';

// Get root app element
const app = document.querySelector('#app') as HTMLElement;

const routerObj = new Router([
  { route: '/', page: mainPage },
  { route: '/explore', page: explorePage },
], app);

export default routerObj;
