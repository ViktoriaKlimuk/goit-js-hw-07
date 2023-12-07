import { galleryItems } from './gallery-items.js';
// Change code below this line
const container = document.querySelector('.gallery');

container.insertAdjacentHTML('beforeend', createMarkUp(galleryItems));

function createMarkUp(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => `
    <li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
        </a>
    </li>
    `).join("")
}


container.addEventListener("click", handleClick);

function handleClick(event) {
    event.preventDefault();

    if (event.target === event.currentTarget) {
        return
    }

    const currentImage = event.target.closest(".gallery__link") //*//

    const istance = basicLightbox.create(
        `
        <div>
        <img src="${event.target.dataset.source}" width="800" height="600">
    </div>
        `
    );


    istance.show();

    document.addEventListener("keydown", handleClickClose);

    function handleClickClose(event) {
        if (event.key === "Escape" || event.currentTarget !== "UL") {
            istance.close();
            document.removeEventListener("keydown", handleClickClose);
        }

    }
};
// console.log(galleryItems);
