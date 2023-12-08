import { galleryItems } from './gallery-items.js';
// Change code below this line
const container = document.querySelector('.gallery');

container.insertAdjacentHTML('beforeend', createMarkUp(galleryItems));

function createMarkUp(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => `
    <li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
    </li>
    `).join("")
}
let gallery = new SimpleLightbox(".gallery__item a", { captionsData: "alt", captionDelay: 250, overplayOpacity: 0.5 });




