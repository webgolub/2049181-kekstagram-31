import { generatePictures } from './data.js';
import { renderPictures } from './pictures.js';

const allPictures = generatePictures();

renderPictures(allPictures);
