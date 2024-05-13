

const Url = {
  DOWNLOAD: 'https://31.javascript.htmlacademy.pro/kekstagram/data',
  UPLOAD: 'https://31.javascript.htmlacademy.pro/kekstagram '
};

const downloadData = async (onSuccess, onFail) => {
  try {
    const response = await fetch(Url.DOWNLOAD);
    if (!response.ok) {
      onFail();
    } else {
      const data = await response.json();
      onSuccess(data);
    }
  } catch (err) {
    onFail();
  }
};

const uploadData = async (onSuccess, onFail, data) => {
  try {
    const response = await fetch(Url.UPLOAD, {
      method: 'POST',
      body: data
    });
    if (!response.ok) {
      onFail();
    } else {
      onSuccess();
    }
  } catch (err) {
    onFail();
  }
};
export { downloadData, uploadData };
