import { FilterName, RANDOM_PHOTOS_COUNT } from './const.js';

const ACTIVE_CLASS = 'img-filters__button--active';
const filters = document.querySelector('.img-filters');
let onFilterChangeCallback = null;
let currentFilter = FilterName.DEFAULT;
let lastFilter = null;

const setOnFilterChangeCallback = (callback) => {
  onFilterChangeCallback = callback;
};

const onFiltersClick = (evt) => {
  if (evt.target.type === 'button' &&
      evt.target.id !== currentFilter) {
    lastFilter = currentFilter;
    currentFilter = evt.target.id;
    filters.querySelector(`#${lastFilter}`).classList.remove(ACTIVE_CLASS);
    evt.target.classList.add(ACTIVE_CLASS);
    onFilterChangeCallback();
  }
};

const showFilters = () => {
  filters.classList.remove('img-filters--inactive');
  filters.addEventListener('click', onFiltersClick);
};

const shuffleArray = (array) => {
  let currentIndex = array.length;

  while (currentIndex !== 0) {
    const randomIndex = Math.floor((Math.random() * currentIndex));
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
};

const sortPicturesByComments = (pictureA, pictureB) => pictureB.comments.length - pictureA.comments.length;

const filterPictures = (data) => {
  let filteredData = data;

  if (currentFilter === FilterName.DISCUSSED) {
    filteredData = data.slice().sort(sortPicturesByComments);
  } else if (currentFilter === FilterName.RANDOM) {
    filteredData = shuffleArray(data.slice()).slice(0, RANDOM_PHOTOS_COUNT);
  }

  return filteredData;
};

export {
  showFilters,
  filterPictures,
  setOnFilterChangeCallback
};
