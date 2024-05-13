const MESSAGE_SHOW_TIME = 5000;
const dataErrorMessage = document.querySelector('#data-error').content.querySelector('section');

const showMessage = (message) => {
  if (message === 'data-error') {
    message = dataErrorMessage;
  }
  document.body.append(message);

  setTimeout(() => {
    message.remove();
  }, MESSAGE_SHOW_TIME);

};

export { showMessage };
