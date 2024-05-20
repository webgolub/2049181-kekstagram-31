import { createThumbnail } from './thumbnail.js';
import { showPictureModal, hidePictureModal } from './galleryModal.js';
import { isEscKey } from './util.js';

const photosContainer = document.querySelector('.pictures');

const renderThumbnails = (pictures) => {
  const picturesFragment = document.createDocumentFragment();
  if (photosContainer.querySelector('.picture')) {

    photosContainer.querySelectorAll('.picture').forEach((picture) => picture.remove());
  }

  photosContainer.addEventListener('click', (evt) => {
    if (evt.target.closest('.picture')) {
      evt.preventDefault();
      const picture = pictures.find(
        (element) => element.id === Number(evt.target.dataset.id)
      );
      showPictureModal(picture);
    }
  });

  pictures.forEach((picture) => {
    const thumbnail = createThumbnail(picture);
    picturesFragment.append(thumbnail);
  });

  photosContainer.append(picturesFragment);
};

const onModalCloseButtonClick = (evt) => {
  evt.preventDefault();
  hidePictureModal();
};

const onModalEscKeydown = (evt) => {
  evt.preventDefault();
  if (isEscKey(evt)) {
    hidePictureModal();
  }
};

export { renderThumbnails, onModalCloseButtonClick, onModalEscKeydown };
