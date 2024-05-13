import { renderThumbnails } from './gallery.js';
import { downloadData } from './server.js';
import './upload-form.js';

const allPictures = await downloadData();

renderThumbnails(allPictures);
