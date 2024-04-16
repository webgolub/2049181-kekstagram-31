const FormOptions = {
  method: 'POST',
  enctype: 'multipart/form-data',
  action: 'https://31.javascript.htmlacademy.pro/kekstagram'
};

const ValidationOptions = {
  commentLength: 140,
  hashtagEndingRegExp: /[^-_=+;:,.]$/m,
  hashtagRegExp: /^#[a-zA-Zа-яА-ЯёЁ0-9]{0,}$/,
  hashtagLengthMin: 2,
  hashtagLengthMax: 20,
  hashtagMaxCount: 5
};

export { FormOptions, ValidationOptions };
