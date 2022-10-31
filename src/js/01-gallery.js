import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = createImagesMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup); 

function createImagesMarkup (galleryItems) {
  return galleryItems.map(({preview, original, description}) => {
    return `  
      <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
    </div>
    `;
  }).join('');
}

  const modalWindow = new SimpleLightbox('.gallery a',
    {
      captionsData: `alt`,
      captionDelay: 250,
    });

  modalWindow.show();
  
  galleryContainer.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      modalWindow.close()
    }
  })
console.log(galleryItems);