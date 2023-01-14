import { galleryItems } from './gallery-items.js';
// Change code below this line
// console.log(galleryItems);

const galleryImages = document.querySelector('.gallery');
const bodyForGallery = document.body;

const galleryMarkup = createGalleryPictures (galleryItems);
galleryImages.insertAdjacentHTML("beforeend",galleryMarkup);


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


const createModalWindow = (imageSrc) => {
window.instance = basicLightbox.create(
    ` <img src='${imageSrc}'/> `,
    {
    onShow: () =>
        window.addEventListener("keydown", closeModaEsc),
    onClose: () => {
        window.removeEventListener("keydown", closeModaEsc);
        bodyForGallery.classList.remove("disable-scroll");
        },
    }
    );
    return instance;
};


galleryImages.addEventListener('click', openImgOnModal);


function openImgOnModal(event) {
        event.preventDefault();
    if (!event.target.classList.contains("gallery__image")) {
        return;
    };
    createModalWindow(event.target.dataset.source).show();
    bodyForGallery.classList.add("disable-scroll");

    };

function closeModaEsc(event) {
        if (event.code === "Escape" && instance.visible()) {
        instance.close();
        bodyForGallery.classList.remove("disable-scroll");
        };
};

