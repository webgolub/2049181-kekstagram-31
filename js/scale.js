const form = document.querySelector('.img-upload__form');
const scaleValue = form.querySelector('.scale__control--value');
const ScaleOptions = {
  MIN: 25,
  MAX: 100,
  STEP: 25
};

const getScaleValue = () => Number(scaleValue.value.split('%')[0]);
const setScaleValue = (integer) => {
  scaleValue.value = `${integer}%`;
};

const onScaleButtonClick = (evt) => {
  const target = evt.target;
  if (target.type === 'button') {
    let currentScaleValue = getScaleValue();

    if (target.classList.contains('scale__control--bigger') && currentScaleValue < ScaleOptions.MAX) {
      setScaleValue(currentScaleValue += ScaleOptions.STEP);
    } else if (target.classList.contains('scale__control--smaller') && currentScaleValue > ScaleOptions.MIN) {
      setScaleValue(currentScaleValue -= ScaleOptions.STEP);
    }
  }
};

export { onScaleButtonClick };
