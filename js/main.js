import {
  setOnFilterChangeCallback,
  filterPictures,
  showFilters
} from './filter.js';
import { renderThumbnails } from './gallery.js';
import { showDownloadErrorMessage } from './message.js';
import { downloadData } from './server.js';
import { debounce } from './util.js';
import './upload-form.js';

downloadData ((pictures) => {
  showFilters();
  renderThumbnails(pictures);
  setOnFilterChangeCallback(
    debounce(
      () => renderThumbnails(filterPictures(pictures))
    )
  );
},
() => {
  showDownloadErrorMessage();
});
