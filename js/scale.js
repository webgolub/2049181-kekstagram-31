import { ScaleOptions } from './const.js';

const form = document.querySelector('.img-upload__form');
const scaleValue = form.querySelector('.scale__control--value');
const imagePreview = form.querySelector('.img-upload__preview img');

const getScaleValue = () => Number(scaleValue.value.split('%')[0]);
const setScaleValue = (integer) => {
  scaleValue.value = `${integer}%`;
};

const onScaleButtonClick = (evt) => {
  const target = evt.target;
  let currentScaleValue = getScaleValue();

  if (target.classList.contains('scale__control--bigger') && currentScaleValue < ScaleOptions.MAX) {
    setScaleValue(currentScaleValue += ScaleOptions.STEP);
  } else if (target.classList.contains('scale__control--smaller') && currentScaleValue > ScaleOptions.MIN) {
    setScaleValue(currentScaleValue -= ScaleOptions.STEP);
  }
  imagePreview.style.transform = `scale(${currentScaleValue * 0.01})`; // стиль для масштабирования картинки превью

};

export { onScaleButtonClick };
