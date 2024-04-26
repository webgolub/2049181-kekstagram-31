import { showUploadModal, hideUploadModal, isUploadModalHidden } from './uploadModal.js';
import { FormOptions } from './const.js';
import { isEscKey } from './util.js';
import { validate } from './validation.js';

const TEXT_FIELD_NAMES = ['hashtags', 'description'];
const form = document.querySelector('.img-upload__form');

const isNoTextFields = (evt) => !(TEXT_FIELD_NAMES.includes(evt.target.name));

const formChangeHandler = () => {
  if (isUploadModalHidden()) {
    showUploadModal();
  }
  validate();
};

const formSubmitHandler = (evt) => {
  // const isValid = validate();
  evt.preventDefault();
  form.submit();
  // if (isValid) {
  //   console.log('+++ valid');
  // } else {
  //   console.log('XXX invalid');
  // }
};

const onModalCloseButtonClick = (evt) => {
  evt.preventDefault();
  hideUploadModal();
};

const onModalEscKeydown = (evt) => {
  if (isEscKey(evt) && isNoTextFields(evt)) {
    evt.preventDefault();
    hideUploadModal();
  }
};

form.method = FormOptions.METHOD;
form.enctype = FormOptions.ENCTYPE;
form.action = FormOptions.ACTION;

form.addEventListener('change', formChangeHandler);
form.addEventListener('submit', formSubmitHandler);

export { onModalCloseButtonClick, onModalEscKeydown };
