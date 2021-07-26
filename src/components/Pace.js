import { TextField } from "@material-ui/core";
import React, { useState } from "react";

const Pace = ({ metric }) => {
  const [time, setTime] = useState("00:00");
  const [distance, setDistance] = useState("");

  const minutesRegexTime = /([0-9]{2}):([0-9]{2})/;
  const hoursRegexTime = /([0-9]{1,}):([0-9]{2}):([0-9]{2})/;

  const getTimeInSeconds = (t) => {
    if (hoursRegexTime.test(time)) {
      let hours = time.match(hoursRegexTime)[1];
      let minutes = time.match(hoursRegexTime)[2];
      let seconds = time.match(hoursRegexTime)[2];

      let totalSeconds =
        Number(hours) * 3600 + Number(minutes) * 60 + Number(seconds);
      return totalSeconds;
    } else if (minutesRegexTime.test(time)) {
      let minutes = time.match(minutesRegexTime)[1];
      let seconds = time.match(minutesRegexTime)[2];

      let totalSeconds = Number(minutes) * 60 + Number(seconds);
      return totalSeconds;
    }
  };

  const getPace = () => {
    try {
      const seconds = getTimeInSeconds(time);

      if (Number(distance) === 0 || seconds === 0) {
        return "00:00";
      }

      const paceInSeconds = seconds / Number(distance);

      const paceMinutesComponent = Math.trunc(paceInSeconds / 60);
      const paceSecondsComponent = (paceInSeconds / 60) % 1;
      const paceSecondsConverted = (paceSecondsComponent * 60).toFixed(1);

      const paceMinutesString =
        paceMinutesComponent === 0 ? "00" : paceMinutesComponent;

      let paceSecondsString;
      if (paceSecondsConverted < 1) {
        paceSecondsString = "00" + (paceSecondsConverted % 1);
      } else if (paceSecondsConverted < 10) {
        paceSecondsString = "0" + paceSecondsConverted;
      } else {
        paceSecondsString = paceSecondsConverted;
      }
      const paceString = paceMinutesString + ":" + paceSecondsString;
      return paceString;
    } catch (e) {
      console.log("error", e);
      return "00:00";
    }
  };

  const formatSetTime = (e) => {
    if (e.key === "Backspace") {
      if (hoursRegexTime.test(time)) {
        let mashedString =
          time.match(hoursRegexTime)[1] +
          time.match(hoursRegexTime)[2] +
          time.match(hoursRegexTime)[3];

        mashedString = mashedString.substring(0, mashedString.length - 1);

        if (mashedString.length === 4) {
          // going from hours -> minutes
          const newTimeString =
            mashedString.substring(0, 2) + ":" + mashedString.substring(2);
          setTime(newTimeString);
        } else {
          const seconds = mashedString.substring(mashedString.length - 2);
          const minutes = mashedString.substring(
            mashedString.length - 4,
            mashedString.length - 2
          );
          const hours = mashedString.substring(0, mashedString.length - 4);

          const newTimeString = hours + ":" + minutes + ":" + seconds;
          setTime(newTimeString);
        }
      } else if (minutesRegexTime.test(time)) {
        let mashedString =
          time.match(minutesRegexTime)[1] + time.match(minutesRegexTime)[2];
        mashedString = "0" + mashedString.substring(0, 3);

        const newTimeString =
          mashedString.substring(0, 2) + ":" + mashedString.substring(2);
        setTime(newTimeString);
      }
    }

    if (/[0-9]/.test(e.key)) {
      if (hoursRegexTime.test(time)) {
        let mashedString =
          time.match(hoursRegexTime)[1] +
          time.match(hoursRegexTime)[2] +
          time.match(hoursRegexTime)[3];

        mashedString += e.key;

        const seconds = mashedString.substring(mashedString.length - 2);
        const minutes = mashedString.substring(
          mashedString.length - 4,
          mashedString.length - 2
        );
        const hours = mashedString.substring(0, mashedString.length - 4);

        const newTimeString = hours + ":" + minutes + ":" + seconds;
        setTime(newTimeString);
      } else if (minutesRegexTime.test(time)) {
        let mashedString =
          time.match(minutesRegexTime)[1] + time.match(minutesRegexTime)[2];
        mashedString += e.key;
        if (mashedString[0] === "0") {
          mashedString = mashedString.substring(1);
          const newTimeString =
            mashedString.substring(0, 2) + ":" + mashedString.substring(2);
          setTime(newTimeString);
        } else {
          // going from minutes -> hours
          const newTimeString =
            mashedString[0] +
            ":" +
            mashedString.substring(1, 3) +
            ":" +
            mashedString.substring(3);
          setTime(newTimeString);
        }
      }
    }
  };

  return (
    <div>
      <div>
        <TextField
          variant="outlined"
          placeholder={"distance"}
          onChange={(e) => setDistance(e.target.value)}
          value={distance}
        />
        <TextField
          variant="outlined"
          placeholder={"time"}
          onKeyDown={formatSetTime}
          value={time}
        />
      </div>
      <div>
        {getPace()}
        {metric ? " /km" : " /mi"}
      </div>
    </div>
  );
};

export default Pace;
