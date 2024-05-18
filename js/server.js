const BASE_URL = 'https://31.javascript.htmlacademy.pro/kekstagram';

const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/'
};

const downloadData = async (onSuccess, onFail) => {
  try {
    const response = await fetch(`${BASE_URL}${Route.GET_DATA}`);
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
    const response = await fetch(`${BASE_URL}${Route.SEND_DATA}`, {
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
