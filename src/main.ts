import './scss/main.scss';

const app = document.querySelector('#app') as HTMLElement;
const div = document.createElement('div') as HTMLDivElement;

div.classList.add('hello');
div.innerHTML = 'Hello World !';

app.appendChild(div);
