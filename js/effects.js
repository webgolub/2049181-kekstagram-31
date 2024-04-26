const form = document.querySelector('.img-upload__form');
const sliderContainer = form.querySelector('.effect-level__slider');
const effectLevelValue = form.querySelector('.effect-level__value');
const imagePreview = form.querySelector('.img-upload__preview img');

const Effect = {
  NONE: 'none',
  CHROME: 'chrome',
  SEPIA: 'sepia',
  MARVIN: 'marvin',
  PHOBOS: 'phobos',
  HEAT: 'heat'
};

const SliderOptions = {
  [Effect.NONE]: {min: 1, max: 100, step: 1},
  [Effect.CHROME]: {min: 0, max:1, step: 0.1},
  [Effect.SEPIA]: {min: 0, max: 1, step: 0.1},
  [Effect.MARVIN]: {min: 0, max: 100, step: 1},
  [Effect.PHOBOS]: {min: 0, max: 3, step: 0.1},
  [Effect.HEAT]: {min: 1, max: 3, step: 0.1}
};

const EffectOptions = {
  [Effect.NONE]: () => (imagePreview.style.filter = ''),
  [Effect.CHROME]: () => (imagePreview.style.filter = `grayscale(${effectLevelValue.value})`),
  [Effect.SEPIA]: () => (imagePreview.style.filter = `sepia(${effectLevelValue.value})`),
  [Effect.MARVIN]: () => (imagePreview.style.filter = `invert(${effectLevelValue.value}%)`),
  [Effect.PHOBOS]: () => (imagePreview.style.filter = `blur(${effectLevelValue.value}px)`),
  [Effect.HEAT]: () => (imagePreview.style.filter = `brightness(${effectLevelValue.value})`)
};

noUiSlider.create(sliderContainer, {
  start: 100,
  step: 1,
  connect: 'lower',
  range: {
    'min': 0,
    'max': 100
  }
});

const createSliderOptions = ({min, max, step}) => ({
  start: max,
  step: step,
  connect: 'lower',
  range: {
    min: min,
    max: max
  }
});

let currentEffect = Effect.NONE;
const slider = sliderContainer.noUiSlider;

const updateImagePreview = () => {
  EffectOptions[currentEffect]();
};

slider.on('update', () => {
  effectLevelValue.value = slider.get();
  updateImagePreview();
});

const updateSlider = () => {
  if (currentEffect === Effect.NONE) {
    sliderContainer.parentElement.classList.add('hidden');
  } else {
    sliderContainer.parentElement.classList.remove('hidden');
  }

  slider.updateOptions(createSliderOptions(SliderOptions[currentEffect]));
};

const onEffectsListClick = (evt) => {
  if (evt.target.name) {
    currentEffect = evt.target.value;
    updateSlider();
  }
};

const resetEffects = () => {
  currentEffect = Effect.NONE;
  effectLevelValue.value = 100;
  updateSlider();
};

export { onEffectsListClick, resetEffects };
