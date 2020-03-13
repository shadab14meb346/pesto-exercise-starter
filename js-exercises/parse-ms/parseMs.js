const parseMs = milliseconds => {
  const oneDayToNanoseconds = 86400000000000;
  const oneHourToNanoseconds = 3600000000000;
  const oneMinuteToNanoseconds = 60000000000;
  const oneSecondToNanoseconds = 1000000000;
  const oneMillisecondToNanoseconds = 1000000;
  const oneMicrosecondToNanoseconds = 1000;
  const inputInNanoseconds = milliseconds * oneMillisecondToNanoseconds;
  const noOfDays = Math.floor(inputInNanoseconds / oneDayToNanoseconds);
  const noOfHours = Math.floor((inputInNanoseconds % oneDayToNanoseconds) / oneHourToNanoseconds);
  const noOfMinutes = Math.floor((inputInNanoseconds % oneHourToNanoseconds)
    / oneMinuteToNanoseconds);
  const noOfSeconds = Math.floor((inputInNanoseconds % oneMinuteToNanoseconds)
   / oneSecondToNanoseconds);
  const noOfMilliseconds = Math.floor((inputInNanoseconds
     % oneSecondToNanoseconds)
     / oneMillisecondToNanoseconds);
  const noOfMicroseconds = Math.floor((inputInNanoseconds
     % oneMillisecondToNanoseconds)
     / oneMicrosecondToNanoseconds);
  const noOfNanoseconds = inputInNanoseconds % oneMicrosecondToNanoseconds;
  return {
    days: noOfDays,
    hours: noOfHours,
    minutes: noOfMinutes,
    seconds: noOfSeconds,
    milliseconds: noOfMilliseconds,
    microseconds: noOfMicroseconds,
    nanoseconds: noOfNanoseconds,
  };
};

export {
  parseMs,
};
