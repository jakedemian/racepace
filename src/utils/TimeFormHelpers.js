export class TimeFormHelpers {
  static minutesRegexTime = /([0-9]{2}):([0-9]{2})/;
  static hoursRegexTime = /([0-9]{1,}):([0-9]{2}):([0-9]{2})/;

  static handleBackspaceEntry(time) {
    if (TimeFormHelpers.hoursRegexTime.test(time)) {
      let mashedString =
        time.match(TimeFormHelpers.hoursRegexTime)[1] +
        time.match(TimeFormHelpers.hoursRegexTime)[2] +
        time.match(TimeFormHelpers.hoursRegexTime)[3];

      mashedString = mashedString.substring(0, mashedString.length - 1);

      if (mashedString.length === 4) {
        // going from hours -> minutes
        const newTimeString =
          mashedString.substring(0, 2) + ":" + mashedString.substring(2);
        return newTimeString;
      } else {
        const seconds = mashedString.substring(mashedString.length - 2);
        const minutes = mashedString.substring(
          mashedString.length - 4,
          mashedString.length - 2
        );
        const hours = mashedString.substring(0, mashedString.length - 4);

        const newTimeString = hours + ":" + minutes + ":" + seconds;
        return newTimeString;
      }
    } else if (TimeFormHelpers.minutesRegexTime.test(time)) {
      let mashedString =
        time.match(TimeFormHelpers.minutesRegexTime)[1] +
        time.match(TimeFormHelpers.minutesRegexTime)[2];
      mashedString = "0" + mashedString.substring(0, 3);

      const newTimeString =
        mashedString.substring(0, 2) + ":" + mashedString.substring(2);
      return newTimeString;
    }
  }

  static handleNumericEntry(time, enteredCharacter) {
    if (TimeFormHelpers.hoursRegexTime.test(time)) {
      let mashedString =
        time.match(TimeFormHelpers.hoursRegexTime)[1] +
        time.match(TimeFormHelpers.hoursRegexTime)[2] +
        time.match(TimeFormHelpers.hoursRegexTime)[3];

      mashedString += enteredCharacter;

      const seconds = mashedString.substring(mashedString.length - 2);
      const minutes = mashedString.substring(
        mashedString.length - 4,
        mashedString.length - 2
      );
      const hours = mashedString.substring(0, mashedString.length - 4);

      const newTimeString = hours + ":" + minutes + ":" + seconds;
      return newTimeString;
    } else if (TimeFormHelpers.minutesRegexTime.test(time)) {
      let mashedString =
        time.match(TimeFormHelpers.minutesRegexTime)[1] +
        time.match(TimeFormHelpers.minutesRegexTime)[2];
      mashedString += enteredCharacter;
      if (mashedString[0] === "0") {
        mashedString = mashedString.substring(1);
        const newTimeString =
          mashedString.substring(0, 2) + ":" + mashedString.substring(2);
        return newTimeString;
      } else {
        // going from minutes -> hours
        const newTimeString =
          mashedString[0] +
          ":" +
          mashedString.substring(1, 3) +
          ":" +
          mashedString.substring(3);
        return newTimeString;
      }
    }
  }
}
