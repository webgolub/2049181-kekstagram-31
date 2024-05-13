import { showMessage } from './message.js';

const DOWNLOAD_URL = 'https://31.javascript.htmlacademy.pro/kekstagram/data';

const downloadData = async () => {
  try {
    const response = await fetch(DOWNLOAD_URL);
    const data = await response.json();
    return data;
  } catch {
    showMessage('data-error');
  }
};

export { downloadData };
