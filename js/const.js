const DEBOUNCE_TIMEOUT = 500;
const RANDOM_PHOTOS_COUNT = 10;

const FormOptions = {
  METHOD: 'POST',
  ENCTYPE: 'multipart/form-data',
  ACTION: 'https://31.javascript.htmlacademy.pro/kekstagram'
};

const ValidationOptions = {
  COMMENT_LENGTH: 140,
  HASHTAG_ENDING_REGXP: /[^-_=+;:,.]$/m,
  HASHTAG_REGXP: /^#[a-zA-Zа-яА-ЯёЁ0-9]{0,}$/,
  HASHTAG_LENGTH_MIN: 2,
  HASHTAG_LENGTH_MAX: 20,
  HASHTAG_MAX_COUNT: 5
};

const ScaleOptions = {
  MIN: 25,
  MAX: 100,
  STEP: 25
};

const FilterName = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed'
};

export {
  DEBOUNCE_TIMEOUT,
  RANDOM_PHOTOS_COUNT,
  FormOptions,
  ValidationOptions,
  ScaleOptions,
  FilterName
};
