const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Петя',
  'Зоя',
  'Юра',
  'Джонни',
  'Олеся',
  'Игорь'
];

const DESCRIPTIONS = [
  'Я и мой звездюк =)',
  'Снимал рано утром, поэтому фотка заспанная...',
  'В инсту её не добавлю, потому что не хочу',
  'Понравилось сочетание цвета и формы',
  'Не знаю кому как, а мне нравится!',
  'Красиво, не правда ли?'
];

const NUMBER_OF_PHOTOS = 25;

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

const getCounter = makeGetCounter();

const generateComment = () => ({
  id: getCounter(),
  avatar: `img/avatar-${getRandomInteger(1,6)}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES)
});

const generatePhoto = () => {
  const counter = getCounter();
  return {
    id: counter,
    url: `photos/${counter}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomInteger(15, 200),
    comments: Array.from({length: getRandomInteger(0, 30)}, generateComment)
  };
};

const generatedPhotos = Array.from({length: NUMBER_OF_PHOTOS}, generatePhoto);
console.log(generatedPhotos);
