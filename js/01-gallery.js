import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const galleryImages = document.querySelector('.gallery');


const galleryMarkup = createGalleryPictures (galleryItems);
galleryImages.insertAdjacentHTML("beforeend",galleryMarkup);
// galleryImages.addEventListener('click', onClick());

function createGalleryPictures (images) {
    return images.map(({preview,original,description}) => {
        return`<div class="gallery__item">
            <a class="gallery__link"${preview}">
                <img
                    class="gallery__image"
                    src="${original}"
                    data-source="${preview}"
                    alt="${description}"
                />
            </a>
        </div>`}).join(" ")};


// function onClick (e) {
//     e.preventDefault();
// const image = e.target.classList.contains("gallery")
// if(!image){
//     return;
// }};

// function openModal () {
//     const instance = basicLightbox.create(`
//     <img src="${original}">
// `)

// instance.show()
// }

galleryImages.addEventListener('click', onGalleryItemClick);

function onGalleryItemClick(e){
    e.preventDefault();

    if(e.target.nodeName !== 'IMG'){
        return
    }

const instance = basicLightbox.create(`
    <div class="modal">
    <img src='${e.target.dataset.source}'>
    </div>
`)

instance.show()
}


