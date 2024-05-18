import { isEscKey } from './util.js';

const MESSAGE_SHOW_TIME = 5000;
const downloadErrorMessage = document.querySelector('#data-error').content.querySelector('section');
const uploadErrorMessage = document.querySelector('#error').content.querySelector('section');
const uploadSuccessMessage = document.querySelector('#success').content.querySelector('section');
const uploadErrorMessageButton = uploadErrorMessage.querySelector('.error__button');
const uploadSuccessMessageButton = uploadSuccessMessage.querySelector('.success__button');

const closeSuccessMessageModal = () => {
  document.body.removeEventListener('keydown', onMessageModalEscKeydown);
  document.body.removeEventListener('click', onSuccessMessageWrapperClick);
  uploadSuccessMessage.remove();
};

const closeErrorMessageModal = () => {
  document.body.removeEventListener('keydown', onMessageModalEscKeydown);
  document.body.removeEventListener('click', onErrorMessageWrapperClick);
  uploadErrorMessage.remove();
};

function onMessageModalEscKeydown (evt) {
  if (isEscKey) {
    evt.stopPropagation();
    if (document.querySelector('.success')) {
      closeSuccessMessageModal();
    } else {
      closeErrorMessageModal();
    }
  }
}

function onErrorMessageWrapperClick (evt) {
  if (evt.target.className !== 'error__title' &&
      evt.target.className !== 'error__inner') {
    closeErrorMessageModal();
  }
}

function onSuccessMessageWrapperClick (evt) {
  if (evt.target.className !== 'success__title' &&
      evt.target.className !== 'success__inner') {
    closeSuccessMessageModal();
  }
}

const showDownloadErrorMessage = () => {
  document.body.append(downloadErrorMessage);

  setTimeout(() => {
    downloadErrorMessage.remove();
  }, MESSAGE_SHOW_TIME);
};

const showUploadErrorMessage = () => {
  document.body.append(uploadErrorMessage);
  document.body.addEventListener('keydown', onMessageModalEscKeydown);
  document.body.addEventListener('click', onErrorMessageWrapperClick);
  uploadErrorMessageButton.addEventListener('click', () => {
    uploadErrorMessage.remove();
  });
};

const showUploadSuccessMessage = () => {
  document.body.append(uploadSuccessMessage);
  document.body.addEventListener('keydown', onMessageModalEscKeydown);
  document.body.addEventListener('click', onSuccessMessageWrapperClick);
  uploadSuccessMessageButton.addEventListener('click', () => {
    uploadSuccessMessage.remove();
  });
};

export {
  showDownloadErrorMessage,
  showUploadErrorMessage,
  showUploadSuccessMessage
};
