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
};
