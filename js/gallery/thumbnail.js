const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const createThumbnail = ({id, url, description, likes, comments}) => {
  const newPicture = pictureTemplate.cloneNode(true);
  const newPictureImg = newPicture.querySelector('img');

  newPictureImg.src = url;
  newPictureImg.alt = description;
  newPictureImg.dataset.id = id;
  newPicture.querySelector('.picture__likes').textContent = likes;
  newPicture.querySelector('.picture__comments').textContent = comments.length;

  return newPicture;
};

export { createThumbnail };
