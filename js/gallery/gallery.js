import { createThumbnail } from './thumbnail.js';
import { showPictureModal, hidePictureModal } from './modal.js';

const photosContainer = document.querySelector('.pictures');

const renderThumbnails = (pictures) => {
  const picturesFragment = document.createDocumentFragment();

  pictures.forEach((picture) => {
    const thumbnail = createThumbnail(picture);

    thumbnail.addEventListener('click', () => showPictureModal(picture));
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
  if (evt.code === 'Escape') {
    hidePictureModal();
  }
};

export { renderThumbnails, onModalCloseButtonClick, onModalEscKeydown };
