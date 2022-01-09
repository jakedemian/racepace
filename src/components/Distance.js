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

const Distance = ({ metric }) => {
  const classes = useStyles();

  const [pace, setPace] = useState("00:00");
  const [time, setTime] = useState("00:00");

  const getDistance = () => {
    const units = metric ? "kilometers" : "miles";
    try {
      const paceSeconds = TimeUtil.getTimeInSeconds(pace);
      const timeSeconds = TimeUtil.getTimeInSeconds(time);

      if (Number(timeSeconds) === 0 || paceSeconds === 0) {
        return `-- ${units}`;
      }

      return `${Number(timeSeconds / paceSeconds).toFixed(2)} ${units}`;
    } catch (e) {
      console.log("error", e);
      return `-- ${units}`;
    }
  };

  const formatSetTime = (e, val, settingFunc) => {
    if (e.key === "Backspace") {
      settingFunc(TimeFormHelpers.handleBackspaceEntry(val));
    }

    if (/[0-9]/.test(e.key)) {
      settingFunc(TimeFormHelpers.handleNumericEntry(val, e.key));
    }
  };

  return (
    <div>
      <div>
        <TextField
          autoFocus
          className={`${classes.textField}`}
          onKeyDown={(e) => formatSetTime(e, time, setTime)}
          variant="outlined"
          placeholder={"time"}
          value={time}
          label={"time"}
        />
        <TextField
          className={classes.textField}
          variant="outlined"
          placeholder={"pace"}
          onKeyDown={(e) => formatSetTime(e, pace, setPace)}
          value={pace}
          label="pace"
        />
      </div>
      <div className={classes.paceText}>{getDistance()}</div>
    </div>
  );
};

export default Distance;
