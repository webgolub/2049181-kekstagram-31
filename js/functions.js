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
  string = String(string);

  for (let i = 0; i < string.length; i++) {
    const item = parseInt(string[i], 10);

    if (!Number.isNaN(item)) {
      digits += item;
    }
  }

  return parseInt(digits, 10);

  // подсказали в discord академии:
  // const number = parseInt(string.toString().replace(/[^\d]/g, ''), 10);
  // return number;
};

const timeToMinutes = (time) => {
  const [hours, minutes] = time.split(':').map((item) => Number(item));

  return hours * 60 + minutes;
};

const isMeetingInWorkTime = (workStart, workEnd, meetingStart, meetingMinutes) => {
  workStart = timeToMinutes(workStart);
  workEnd = timeToMinutes(workEnd);
  meetingStart = timeToMinutes(meetingStart);

  return meetingStart + meetingMinutes <= workEnd && meetingStart >= workStart;
};

checkStringLength('string', 3);
isPalindrome('stringgnitrs');
extractDigits('0text12468768дж4999');
isMeetingInWorkTime('08:00', '17:30', '14:00', 90);
