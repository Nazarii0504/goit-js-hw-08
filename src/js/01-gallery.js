import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const imagesContainer = document.querySelector('.gallery');
const imagesMarkup = createImageGallery(galleryItems);

imagesContainer.insertAdjacentHTML('beforeend', imagesMarkup);

export default function createImageGallery() {
    return galleryItems.map(({preview, original, description}) => {
          return `<a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`;
      }).join('');
  }

let gallery = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250});

createImageGallery()
