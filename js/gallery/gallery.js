import { createThumbnail } from './thumbnail.js';
import { showPictureModal, hidePictureModal } from './modal.js';

const photosContainer = document.querySelector('.pictures');

const renderThumbnails = (pictures) => {
  const picturesFragment = document.createDocumentFragment();

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
  if (evt.code === 'Escape') {
    hidePictureModal();
  }
};

export { renderThumbnails, onModalCloseButtonClick, onModalEscKeydown };
