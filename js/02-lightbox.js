import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryMarkup = document.querySelector('.gallery');
const galleryModalImages = createModalImages(galleryItems);

galleryMarkup.insertAdjacentHTML('beforeend', galleryModalImages);

function createModalImages(images){
    return images.map(({preview, original, description})=>{
        return `<li><a class='gallery__link' href='${original}'>
        <img  class='gallery__image' src ='${preview}' alt ='${description}'>
        </a></li>`;}).join('');
}

new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
});


// const lightbox = new SimpleLightbox('.gallery a', {
//     captions: true,
//     captionsData: 'alt',
//     captionDelay: 250,
// });



























// import { galleryItems } from "./gallery-items.js";
// import { addGalleryItems } from "./addGallery-items.js";
// const newGalleryItems = [...galleryItems...addGalleryItems];

// const refs = {
//   imageContainer: document.querySelector(".gallery"),
//   body: document.body,
// };

// const cardgalleryMarkup = makegalleryItems(newGalleryItems);

// refs.imageContainer.insertAdjacentHTML("beforeend", cardgalleryMarkup);

// function makegalleryItems(items) {
//   return items
//     .map(({ preview, description, original }) => {
//       return `<li class="gallery__item"><a class="gallery__link" href="${original}">
//   <img loading="lazy" width="354" height="240" class="gallery__image" src="${preview}" alt="${description}" />
// </a></li>`;
//     })
//     .join("");
// }

// const lightbox = new SimpleLightbox(".gallery a", {
//   captionsData: "alt",
//   captionDelay: 250,
//   scrollZoom: false,
// });

// lightbox.on("shown.simplelightbox", function () {
//   refs.body.classList.add("disable-scroll");
// });
// lightbox.on("closed.simplelightbox", function () {
//   refs.body.classList.remove("disable-scroll");
// });


// const lazyImages = refs.imageContainer.querySelectorAll(".gallery__image");

// lazyImages.forEach((image) =>
//   image.addEventListener("load", onImageLoaded, { once: true })
// );

// function onImageLoaded(event) {
//   event.target.classList.add("appear");
// }

// lazyImages.forEach((image) =>
//   image.addEventListener("mouseenter", onMouseEnter)
// );


// function onMouseEnter(event) {
//   event.target.style.transitionDelay = '100ms';
//   event.target.style.transitionDuration = "500ms";
// }

