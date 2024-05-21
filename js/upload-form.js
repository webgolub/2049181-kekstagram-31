import { showUploadModal, hideUploadModal, isUploadModalHidden } from './uploadModal.js';
import { FILE_TYPES, FormOptions } from './const.js';
import { isEscKey } from './util.js';
import { validate } from './validation.js';
import { uploadData } from './server.js';
import { showUploadErrorMessage, showUploadSuccessMessage } from './message.js';

const TEXT_FIELD_NAMES = ['hashtags', 'description'];
const SubmitButtonText = {
  BLOCKED: 'Публикую...',
  UNBLOCKED: 'Опубликовать'
};
const form = document.querySelector('.img-upload__form');
const submitButton = form.querySelector('.img-upload__submit');
const imgPreview = form.querySelector('.img-upload__preview > img');
const fileChooser = form.querySelector('.img-upload__input');

const handleSubmitButton = (disabledFlag, buttonText) => {
  submitButton.textContent = buttonText;
  submitButton.disabled = disabledFlag;
};

const isNoTextFields = (evt) => !(TEXT_FIELD_NAMES.includes(evt.target.name));

const renderPicturePreview = () => {
  const file = fileChooser.files[0];
  const fileName = file.name.toLowerCase();
  const fileTypeMatches = FILE_TYPES.some((type) => fileName.endsWith(type));
  if (fileTypeMatches) {
    imgPreview.src = URL.createObjectURL(file);
  }
};

const formChangeHandler = () => {
  if (isUploadModalHidden()) {
    showUploadModal();
  }
  renderPicturePreview();
  validate();
};

const formSubmitHandler = (evt) => {
  const isValid = validate();
  evt.preventDefault();
  if (isValid) {
    const data = new FormData(form);
    handleSubmitButton(true, SubmitButtonText.BLOCKED);
    uploadData(
      () => {
        handleSubmitButton(false, SubmitButtonText.UNBLOCKED);
        hideUploadModal();
        showUploadSuccessMessage();
      },
      () => {
        handleSubmitButton(false, SubmitButtonText.UNBLOCKED);
        showUploadErrorMessage();
      },
      data);
  }
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

fileChooser.addEventListener('change', formChangeHandler);
form.addEventListener('submit', formSubmitHandler);

export {
  onModalCloseButtonClick,
  onModalEscKeydown
};
