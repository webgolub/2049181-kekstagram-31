const overlay = document.querySelector('.big-picture');
const showMoreButton = overlay.querySelector('.social__comments-loader');
const commentsShown = overlay.querySelector('.social__comment-shown-count');
const commentsTotal = overlay.querySelector('.social__comment-total-count');
const commentsContainer = overlay.querySelector('.social__comments');
const commentTemplate = commentsContainer.querySelector(':first-child');

const COMMENTS_STEP = 5;
let allComments = [];
let renderedComments = [];
let currentCount = 0;

const createComment = ({avatar, message, name}) => {
  const newComment = commentTemplate.cloneNode(true);
  const commentImg = newComment.querySelector('img');
  const commentText = newComment.querySelector('p');

  commentImg.src = avatar;
  commentImg.alt = name;
  commentText.textContent = message;

  return newComment;
};

const handleShowMoreButton = (comments) => {
  if (renderedComments.length >= comments.length) {
    showMoreButton.classList.add('hidden');
  } else {
    showMoreButton.classList.remove('hidden');
  }
};

const renderComments = () => {
  renderedComments = allComments.slice(0, currentCount + COMMENTS_STEP);
  handleShowMoreButton(allComments);

  commentsContainer.replaceChildren(...renderedComments.map(createComment));
  commentsShown.textContent = renderedComments.length;
  commentsTotal.textContent = allComments.length;

  currentCount += COMMENTS_STEP;
};

const showComments = (comments) => {
  allComments = comments;
  renderComments(allComments);
  showMoreButton.addEventListener('click', renderComments);
};

const resetComments = () => {
  allComments = [];
  currentCount = 0;
  showMoreButton.removeEventListener('click', renderComments);
};

export { showComments, resetComments };
