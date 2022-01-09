import { makeStyles, TextField } from "@material-ui/core";
import React, { useState } from "react";
import {
  inputBackground,
  primaryColor,
  secondaryColor,
} from "../common/themeConstants";
import { TimeFormHelpers } from "../utils/TimeFormHelpers";
import { TimeUtil } from "../utils/TimeUtil";

const useStyles = makeStyles({
  paceText: {
    fontSize: 30,
    color: "white",
  },
  textField: {
    backgroundColor: inputBackground,
    borderRadius: 4,
    margin: "auto 4px",

    "& input": {
      color: "white",
    },
    "& label, & label.Mui-focused": {
      color: primaryColor,
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: primaryColor,
    },
  },
});

const Pace = ({ metric }) => {
  const classes = useStyles();

  const [time, setTime] = useState("00:00");
  const [distance, setDistance] = useState("");

  const getPace = () => {
    try {
      const seconds = TimeUtil.getTimeInSeconds(time);

      if (Number(distance) === 0 || seconds === 0) {
        return "00:00";
      }

      const paceInSeconds = seconds / Number(distance);

      const paceMinutesComponent = Math.trunc(paceInSeconds / 60);
      const paceSecondsComponent = (paceInSeconds / 60) % 1;
      const paceSecondsConverted = (paceSecondsComponent * 60).toFixed(1);

      const paceMinutesString =
        paceMinutesComponent === 0 ? "00" : paceMinutesComponent.toString();

      let paceSecondsString;
      if (paceSecondsConverted < 1) {
        paceSecondsString = "0" + (paceSecondsConverted % 1);
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
      setTime(TimeFormHelpers.handleBackspaceEntry(time));
    }

    if (/[0-9]/.test(e.key)) {
      setTime(TimeFormHelpers.handleNumericEntry(time, e.key));
    }
  };

  return (
    <div>
      <div>
        <TextField
          autoFocus
          className={`${classes.textField}`}
          variant="outlined"
          placeholder={"distance"}
          onChange={(e) => setDistance(e.target.value)}
          value={distance}
          label={metric ? "kilometers" : "miles"}
        />
        <TextField
          className={classes.textField}
          variant="outlined"
          placeholder={"time"}
          onKeyDown={formatSetTime}
          value={time}
          label="time"
        />
      </div>
      <div className={classes.paceText}>
        {getPace()}
        {metric ? " /km" : " /mi"}
      </div>
    </div>
  );
};

export default Pace;
