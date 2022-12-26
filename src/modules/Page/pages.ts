// @ts-ignore
import MainPage from '@/modules/MainPage/MainPage.ts';
// @ts-ignore
import ExplorePage from '@/modules/ExplorePage/ExplorePage.ts';

// All application pages
export const mainPage = new MainPage('mainPage', 'templates/mainPage.mustache.html');
export const explorePage = new ExplorePage('explorePage', 'templates/explorePage.mustache.html');