import React, { useState } from "react";
import useCalculatedTextStyles from "../common/styles/useCalculatedTextStyles";
import { TimeUtil } from "../utils/TimeUtil";
import CalculatedResults from "./CalulatedResults";
import InputWrapper from "./Input/InputWrapper";
import TimeInput from "./Input/TimeInput";

const Distance = ({ metric }) => {
  const classes = useCalculatedTextStyles();

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

  return (
    <div>
      <InputWrapper>
        <TimeInput
          value={time}
          setValue={setTime}
          metric={metric}
          autoFocus={true}
        />
        <TimeInput
          value={pace}
          setValue={setPace}
          metric={metric}
          isPace={true}
        />
      </InputWrapper>
      <CalculatedResults value={getDistance()} label="Calculated Distance" />
    </div>
  );
};

export default Distance;
