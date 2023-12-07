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


container.addEventListener("click", handleClick);

function handleClick(event) {
    event.preventDefault();

    if (event.target === event.currentTarget) {
        return
    }

    // const currentImage = event.target.closest(".gallery__link") //*//


    let gallery = new SimpleLightbox(".gallery__item a", { captionsData: "alt", captionDelay: 250, overplayOpacity: 0.5 });
    gallery.on("show.simpleLightbox", function () {
        `
        <img class="gallery__item" scr="${galleryItems.original}" alt="${galleryItems.description}">
        `
    });





    document.addEventListener("keydown", handleClickClose);


};

function handleClickClose(event) {
    if (event.key === "Escape" || event.currentTarget !== "UL") {
        gallery.on("close.simplelightbox", function () {

        });
        document.removeEventListener("keydown", handleClickClose);
    }

}
// console.log(galleryItems);
