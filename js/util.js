const getRandomInteger = (min, max) => {
  const minNumber = Math.ceil(Math.min(min, max));
  const maxNumber = Math.floor(Math.max(min, max));
  return Math.floor(minNumber + Math.random() * (maxNumber - minNumber + 1));
};

const getRandomArrayElement = (items) => items[getRandomInteger(0, items.length - 1)];

const makeGetCounter = () => {
  let prevId = 1;
  return () => prevId++;
};

const isEscKey = (evt) => evt.code === 'Escape';

const isArrayUnique = (items) => !items.some(
  (item, index) => items.indexOf(item, index + 1) !== -1
);

export {
  getRandomArrayElement,
  getRandomInteger,
  makeGetCounter,
  isArrayUnique,
  isEscKey
};
