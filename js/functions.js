const checkStringLength = (string, length) => string.length <= length;

const isPalindrome = (string) => {
  const stringNormalized = string.replaceAll(' ', '').toLowerCase();
  let stringReversed = '';

  for (let i = stringNormalized.length - 1; i >= 0; i--) {
    stringReversed += stringNormalized[i];
  }

  return stringNormalized === stringReversed;
};

const extractDigits = (string) => {
  let digits = '';

  if (!(typeof(string) === 'string')) {
    string = string.toString();
  }

  for (let i = 0; i < string.length; i++) {
    const item = parseInt(string[i], 10);

    if (!Number.isNaN(item)) {
      digits += item.toString();
    }
  }

  return (digits.length > 0) ? parseInt(digits, 10) : NaN;
};

checkStringLength('string', 3);
isPalindrome('stringgnitrs');
extractDigits(777);
