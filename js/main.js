import { renderThumbnails } from './gallery.js';
import { showDownloadErrorMessage } from './message.js';
import { downloadData } from './server.js';
import './upload-form.js';

downloadData ((data) => {
  renderThumbnails(data);
},
() => {
  showDownloadErrorMessage();
});
