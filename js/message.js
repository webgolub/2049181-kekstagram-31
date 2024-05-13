const MESSAGE_SHOW_TIME = 5000;
const downloadErrorMessage = document.querySelector('#data-error').content.querySelector('section');
const uploadErrorMessage = document.querySelector('#error').content.querySelector('section');
const uploadSuccessMessage = document.querySelector('#success').content.querySelector('section');
const uploadErrorMessageButton = uploadErrorMessage.querySelector('.error__button');
const uploadSuccessMessageButton = uploadSuccessMessage.querySelector('.success__button');

const showDownloadErrorMessage = () => {
  document.body.append(downloadErrorMessage);

  setTimeout(() => {
    downloadErrorMessage.remove();
  }, MESSAGE_SHOW_TIME);
};

const showUploadErrorMessage = () => {
  document.body.append(uploadErrorMessage);
  uploadErrorMessageButton.addEventListener('click', () => {
    uploadErrorMessage.remove();
  });
};

const showUploadSuccessMessage = () => {
  document.body.append(uploadSuccessMessage);
  uploadSuccessMessageButton.addEventListener('click', () => {
    uploadSuccessMessage.remove();
  });
};

export {
  showDownloadErrorMessage,
  showUploadErrorMessage,
  showUploadSuccessMessage
};
