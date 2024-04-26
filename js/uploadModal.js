import { onEffectsListClick, resetEffects } from './effects.js';
import { onScaleButtonClick } from './scale.js';
import { onModalCloseButtonClick, onModalEscKeydown } from './upload-form.js';

const form = document.querySelector('.img-upload__form');
const uploadModal = form.querySelector('.img-upload__overlay');
const closeButton = uploadModal.querySelector('.img-upload__cancel');
const scaleButtonsContainer = form.querySelector('.img-upload__scale');
const effectsList = form.querySelector('.effects__list');

const showUploadModal = () => {
  uploadModal.classList.remove('hidden');
  document.body.classList.add('modal-open');
  resetEffects();

  effectsList.addEventListener('click', onEffectsListClick);
  scaleButtonsContainer.addEventListener('click', onScaleButtonClick);
  closeButton.addEventListener('click', onModalCloseButtonClick);
  document.addEventListener('keydown', onModalEscKeydown);
};

const hideUploadModal = () => {
  uploadModal.classList.add('hidden');
  document.body.classList.remove('modal-open');
  form.reset();

  effectsList.removeEventListener('click', onEffectsListClick);
  scaleButtonsContainer.removeEventListener('click', onScaleButtonClick);
  closeButton.removeEventListener('click', onModalCloseButtonClick);
  document.removeEventListener('keydown', onModalEscKeydown);
};

const isUploadModalHidden = () => uploadModal.classList.contains('hidden');

export { showUploadModal, hideUploadModal, isUploadModalHidden };
