// @ts-ignore
import MainPage from '@/modules/MainPage/MainPage.ts';
// @ts-ignore
import ExplorePage from '@/modules/ExplorePage/ExplorePage.ts';
// @ts-ignore
import LoginPage from '@/modules/LoginPage/LoginPage.ts';
// @ts-ignore
import RegisterPage from '@/modules/RegisterPage/RegisterPage.ts';

// All application pages
export default {
  mainPage: new MainPage('mainPage'),
  explorePage: new ExplorePage('explorePage'),
  loginPage: new LoginPage('loginPage'),
  registerPage: new RegisterPage('registerPage'),
};
