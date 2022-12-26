import '@/scss/main.scss';
// @ts-ignore
import routerObj from '@/modules/Router/routerObj.ts';

const init = async () => {
  await routerObj.init();
  routerObj.setPage('/');
};

init();
