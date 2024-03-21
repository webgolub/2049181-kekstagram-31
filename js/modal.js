import { showComments, resetComments } from './comments.js';
import { onModalCloseButtonClick, onModalEscKeydown } from './gallery.js';

const overlay = document.querySelector('.big-picture');
const img = overlay.querySelector('.big-picture__img :first-child');
const caption = overlay.querySelector('.social__caption');
const likesCount = overlay.querySelector('.likes-count');
const closeButton = overlay.querySelector('.big-picture__cancel');

const showPictureModal = ({url, description, likes, comments}) => {
  overlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  overlay.scrollTo(0, 0);

  img.src = url;
  caption.textContent = description;
  likesCount.textContent = likes;
  showComments(comments);

  closeButton.addEventListener('click', onModalCloseButtonClick);
  document.addEventListener('keydown', onModalEscKeydown);
};

const hidePictureModal = () => {
  overlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  resetComments();

  closeButton.removeEventListener('click', onModalCloseButtonClick);
  document.removeEventListener('keydown', onModalEscKeydown);
};

export { showPictureModal, hidePictureModal };
