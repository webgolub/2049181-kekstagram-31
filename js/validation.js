import { ValidationOptions } from './const.js';
import { isArrayUnique } from './util.js';

const form = document.querySelector('.img-upload__form');
const commentInput = form.querySelector('.text__description');
const hashtagInput = form.querySelector('.text__hashtags');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--error',
  errorTextClass: 'img-upload__field-wrapper--error'
});

const parseHashtagsInput = (value) => value !== '' ? value.trim().toLowerCase().split(' ') : [];

pristine.addValidator(commentInput, (value) => value.length <= ValidationOptions.commentLength,
  'Комментарий не длиннее 140 символов');

pristine.addValidator(hashtagInput, (value) => parseHashtagsInput(value).every((hashtag) => ValidationOptions.hashtagEndingRegExp.test(hashtag)),
  'Хэштеги разделяются пробелом');

pristine.addValidator(hashtagInput, (value) => parseHashtagsInput(value).every((hashtag) => ValidationOptions.hashtagRegExp.test(hashtag)),
  'Хэштег начинается с # и состоит из букв и цифр');

pristine.addValidator(hashtagInput, (value) => parseHashtagsInput(value).every((hashtag) => hashtag.length >= ValidationOptions.hashtagLengthMin && hashtag.length <= ValidationOptions.hashtagLengthMax),
  'Длинна хэштега от 1 до 19 символов после #');

pristine.addValidator(hashtagInput, (value) => isArrayUnique(parseHashtagsInput(value)),
  'Хэштеги не должны повторяться');

pristine.addValidator(hashtagInput, (value) => parseHashtagsInput(value).length <= ValidationOptions.hashtagMaxCount,
  'Не больше 5 хештегов');

const validate = () => pristine.validate();

export { validate };
