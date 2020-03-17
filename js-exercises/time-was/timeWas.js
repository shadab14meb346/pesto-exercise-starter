const SECONDS = 1000;
const MINUTES = SECONDS * 60;
const HOURS = MINUTES * 60;
const DAYS = HOURS * 24;
const WEEKS = DAYS * 7;
const MONTHS = DAYS * 30;
const YEARS = MONTHS * 12;

const resultTimeUnit = timeInMilliseconds => {
  const timeDifference = Date.now() - timeInMilliseconds;
  if (timeDifference === SECONDS) return 'second ago';
  if (timeDifference === MINUTES) return 'minute ago';
  if (timeDifference === HOURS) return 'hour ago';
  if (timeDifference === DAYS) return 'day ago';
  if (timeDifference === WEEKS) return 'week ago';
  if (timeDifference === MONTHS) return 'month ago';
  if (timeDifference === YEARS) return 'year ago';
  if (timeDifference < SECONDS) return 'just now';
  if (timeDifference < MINUTES && timeDifference > SECONDS) return 'seconds ago';
  if (timeDifference < HOURS && timeDifference > MINUTES) return 'minutes ago';
  if (timeDifference < DAYS && timeDifference > HOURS) return 'hours ago';
  if (timeDifference < WEEKS && timeDifference > DAYS) return 'days ago';
  if (timeDifference < MONTHS && timeDifference > WEEKS) return 'weeks ago';
  if (timeDifference < YEARS && timeDifference > MONTHS) return 'months ago';
  if (timeDifference > YEARS) return 'years ago';
};

const timeInSeconds = timeInMilliseconds => Math.floor(timeInMilliseconds / SECONDS);

const timeInMinutes = timeInMilliseconds => Math.floor(timeInMilliseconds / MINUTES);

const timeInHours = timeInMilliseconds => Math.floor(timeInMilliseconds / HOURS);
const timeInDays = timeInMilliseconds => Math.floor(timeInMilliseconds / DAYS);

const timeInWeeks = timeInMilliseconds => Math.floor(timeInMilliseconds / WEEKS);
const timeInMonths = timeInMilliseconds => Math.floor(timeInMilliseconds / MONTHS);

const timeInYears = timeInMilliseconds => Math.floor(timeInMilliseconds / YEARS);


function timeWas(timeInMilliseconds) {
  const timeUnit = resultTimeUnit(timeInMilliseconds);
  const timeDifference = Date.now() - timeInMilliseconds;
  if (timeUnit === 'just now') return timeUnit;
  if (timeUnit.includes('second')) {
    return `${timeInSeconds(timeDifference)} ${timeUnit}`;
  }
  if (timeUnit.includes('minute')) {
    return `${timeInMinutes(timeDifference)} ${timeUnit}`;
  }
  if (timeUnit.includes('hour')) {
    return `${timeInHours(timeDifference)} ${timeUnit}`;
  }
  if (timeUnit.includes('day')) {
    return `${timeInDays(timeDifference)} ${timeUnit}`;
  }
  if (timeUnit.includes('week')) {
    return `${timeInWeeks(timeDifference)} ${timeUnit}`;
  }
  if (timeUnit.includes('month')) {
    return `${timeInMonths(timeDifference)} ${timeUnit}`;
  }
  if (timeUnit.includes('year')) {
    return `${timeInYears(timeDifference)} ${timeUnit}`;
  }
}

export {
  timeWas,
};
