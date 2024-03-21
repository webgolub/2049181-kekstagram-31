import { generatePictures } from './data.js';
import { renderThumbnails } from './gallery.js';

const allPictures = generatePictures();

renderThumbnails(allPictures);
