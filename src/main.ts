import '@/scss/main.scss';
// @ts-ignore
import Router from '@/modules/Router/Router.ts';
// @ts-ignore
import Page from '@/modules/Page/Page.ts';
// @ts-ignore
import Navigation from '@/modules/Navigation/Navigation.ts';

// Get root app element
const app = document.querySelector('#app') as HTMLElement;

// Router
let router: Router;

// Pages
let mainPage: Page;

// Create pages objects
const loadAllPages = async () => {
  mainPage = new Page('mainPage', await Page.loadSinglePage('templates/mainPage.mustache.html'));
};

// Init function
const init = async () => {
  await loadAllPages();
  router = new Router([
    { route: '/', page: mainPage },
  ], app);

  router.setPage('/');

  // Init Navigation
  const navigation = new Navigation('.navigationBar', '#activateButton', '#deactivateButton', '--active');
};

init();
