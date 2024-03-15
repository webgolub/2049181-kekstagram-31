import { onModalCloseButtonClick, onModalEscKeydown } from './gallery.js';

const overlay = document.querySelector('.big-picture');
const img = overlay.querySelector('.big-picture__img :first-child');
const caption = overlay.querySelector('.social__caption');
const likesCount = overlay.querySelector('.likes-count');
const commentsShown = overlay.querySelector('.social__comment-shown-count');
const commentsTotal = overlay.querySelector('.social__comment-total-count');
const commentsContainer = overlay.querySelector('.social__comments');
const commentTemplate = commentsContainer.querySelector(':first-child');
const closeButton = overlay.querySelector('.big-picture__cancel');

const createComment = ({avatar, message, name}) => {
  const newComment = commentTemplate.cloneNode(true);
  const commentImg = newComment.querySelector('img');
  const commentText = newComment.querySelector('p');

  commentImg.src = avatar;
  commentImg.alt = name;
  commentText.textContent = message;

  return newComment;
};

const showPictureModal = ({url, description, likes, comments}) => {
  overlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  overlay.scrollTo(0, 0);

  img.src = url;
  caption.textContent = description;
  likesCount.textContent = likes;
  commentsShown.textContent = 5;
  commentsTotal.textContent = comments.length;
  commentsContainer.replaceChildren(...comments.map(createComment));

  closeButton.addEventListener('click', onModalCloseButtonClick);
  document.addEventListener('keydown', onModalEscKeydown);
};

const hidePictureModal = () => {
  overlay.classList.add('hidden');
  document.body.classList.remove('modal-open');

  closeButton.removeEventListener('click', onModalCloseButtonClick);
  document.removeEventListener('keydown', onModalEscKeydown);
};


export { showPictureModal, hidePictureModal };
