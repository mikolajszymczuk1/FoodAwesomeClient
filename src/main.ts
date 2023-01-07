import '@/scss/main.scss';
// @ts-ignore
import routerObj from '@/modules/Router/routerObj.ts';

window.addEventListener('load', () => routerObj.setPage(window.location.pathname));
window.addEventListener('popstate', () => routerObj.setPage(window.location.pathname));
