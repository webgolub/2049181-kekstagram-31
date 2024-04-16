import { generatePictures } from './data.js';
import { renderThumbnails } from './gallery.js';
import './upload-form.js';

const allPictures = generatePictures();

renderThumbnails(allPictures);
