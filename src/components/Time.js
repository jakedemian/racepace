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

const Time = ({ metric }) => {
  const classes = useStyles();

  const [pace, setPace] = useState("00:00");
  const [distance, setDistance] = useState("");

  const getTime = () => {
    try {
      const seconds = TimeUtil.getTimeInSeconds(pace);

      if (Number(distance) === 0 || seconds === 0) {
        return "00:00";
      }

      const timeInSeconds = seconds * Number(distance);

      return TimeUtil.secondsToTimeString(timeInSeconds);
    } catch (e) {
      console.log("error", e);
      return "00:00";
    }
  };

  const formatSetPace = (e) => {
    if (e.key === "Backspace") {
      setPace(TimeFormHelpers.handleBackspaceEntry(pace));
    }

    if (/[0-9]/.test(e.key)) {
      setPace(TimeFormHelpers.handleNumericEntry(pace, e.key));
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
          placeholder={"pace"}
          onKeyDown={formatSetPace}
          value={pace}
          label="pace"
        />
      </div>
      <div className={classes.paceText}>{getTime()}</div>
    </div>
  );
};

export default Time;
