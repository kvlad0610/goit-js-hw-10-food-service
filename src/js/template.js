import itemsTemplate from '../templates/gallery-items.hbs';
import gallery from '../menu.json';

console.log(gallery);

const menu = itemsTemplate(gallery);

console.log(menu);

const galleryRef = document.querySelector('.js-menu');

galleryRef.insertAdjacentHTML('beforeend', menu);
