import '@/scss/main.scss';
// @ts-ignore
import Router from '@/modules/Router/Router.ts';
// @ts-ignore
import MainPage from '@/modules/MainPage/MainPage.ts';
// @ts-ignore
import ExplorePage from '@/modules/ExplorePage/ExplorePage.ts';

// Get root app element
const app = document.querySelector('#app') as HTMLElement;

// Router
let router: Router;

// Pages
let mainPage: MainPage;
let explorePage: ExplorePage;

// Create pages objects
const createAllPages = async () => {
  mainPage = new MainPage('mainPage', 'templates/mainPage.mustache.html');
  explorePage = new ExplorePage('explorePage', 'templates/explorePage.mustache.html');
  await mainPage.loadSinglePage();
  await explorePage.loadSinglePage();
};

// Init function
const init = async () => {
  await createAllPages();
  router = new Router([
    { route: '/', page: mainPage },
    { route: '/explore', page: explorePage },
  ], app);

  router.setPage(window.location.hash.slice(1) || '');
};

init();

window.addEventListener('hashchange', () => router.setPage(window.location.hash.slice(1) || ''));
