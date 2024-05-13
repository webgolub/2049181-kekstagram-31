const DOWNLOAD_URL = 'https://31.javascript.htmlacademy.pro/kekstagram/data';

const downloadData = async () => {
  const response = await fetch(DOWNLOAD_URL);
  const data = await response.json();
  return data;
};

export { downloadData };
