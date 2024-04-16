import { onModalCloseButtonClick, onModalEscKeydown } from './upload-form.js';

const form = document.querySelector('.img-upload__form');
const uploadModal = form.querySelector('.img-upload__overlay');
const closeButton = uploadModal.querySelector('.img-upload__cancel');

const showUploadModal = () => {
  uploadModal.classList.remove('hidden');
  document.body.classList.add('modal-open');

  closeButton.addEventListener('click', onModalCloseButtonClick);
  document.addEventListener('keydown', onModalEscKeydown);
};

const hideUploadModal = () => {
  uploadModal.classList.add('hidden');
  document.body.classList.remove('modal-open');
  form.reset();

  closeButton.removeEventListener('click', onModalCloseButtonClick);
  document.removeEventListener('keydown', onModalEscKeydown);
};

const isUploadModalHidden = () => uploadModal.classList.contains('hidden');

export { showUploadModal, hideUploadModal, isUploadModalHidden };
