import { Liquid } from 'liquidjs';

export default new Liquid({
  root: 'templates/',
  partials: 'templates/components/',
  extname: '.liquid.html',
  cache: true,
});
