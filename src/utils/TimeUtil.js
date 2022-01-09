import { TimeFormHelpers } from "./TimeFormHelpers";

export const TimeUtil = {
  getTimeInSeconds: (time) => {
    if (TimeFormHelpers.hoursRegexTime.test(time)) {
      let hours = time.match(TimeFormHelpers.hoursRegexTime)[1];
      let minutes = time.match(TimeFormHelpers.hoursRegexTime)[2];
      let seconds = time.match(TimeFormHelpers.hoursRegexTime)[2];

      let totalSeconds =
        Number(hours) * 3600 + Number(minutes) * 60 + Number(seconds);
      return totalSeconds;
    } else if (TimeFormHelpers.minutesRegexTime.test(time)) {
      let minutes = time.match(TimeFormHelpers.minutesRegexTime)[1];
      let seconds = time.match(TimeFormHelpers.minutesRegexTime)[2];

      let totalSeconds = Number(minutes) * 60 + Number(seconds);
      return totalSeconds;
    }
  },
  secondsToTimeString: (seconds) => {
    if (seconds >= 3600) {
      return TimeUtil.secondsToHoursString(seconds);
    } else {
      return TimeUtil.secondsToMinutesString(seconds);
    }
  },
  secondsToMinutesString: (s) => {
    const minutes = s / 60;
    const seconds = (minutes % 1) * 60;

    const minutesString = Math.trunc(minutes);
    const secondsString =
      seconds < 10 ? "0" + Math.round(seconds) : Math.round(seconds);
    return minutesString + ":" + secondsString;
  },
  secondsToHoursString: (s) => {
    const hours = s / 3600;
    const minutes = (hours % 1) * 60;
    const seconds = (minutes % 1) * 60;

    console.log(seconds);

    const hoursString = Math.trunc(hours);
    const minutesString =
      minutes < 10 ? "0" + Math.trunc(minutes) : Math.trunc(minutes);
    const secondsString =
      seconds < 10 ? "0" + Math.round(seconds) : Math.round(seconds);
    return hoursString + ":" + minutesString + ":" + secondsString;
  },
};
