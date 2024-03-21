import { showUploadModal, hideUploadModal } from './uploadModal.js';
import { FormOptions } from './const.js';
import { isEscKey } from './util.js';

const TEXT_FIELD_NAMES = ['hashtags', 'description'];
const form = document.querySelector('.img-upload__form');

const isNoTextFields = (evt) => !(TEXT_FIELD_NAMES.includes(evt.target.name));

const formChangeHandler = () => {
  showUploadModal();
};

const onModalCloseButtonClick = (evt) => {
  evt.preventDefault();
  hideUploadModal();
};

const onModalEscKeydown = (evt) => {
  evt.preventDefault();
  if (isEscKey(evt) && isNoTextFields(evt)) {
    hideUploadModal();
  }
};

form.method = FormOptions.method;
form.enctype = FormOptions.enctype;
form.action = FormOptions.action;

form.addEventListener('change', formChangeHandler);

export { onModalCloseButtonClick, onModalEscKeydown };
