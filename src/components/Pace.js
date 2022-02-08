import React, { useState } from "react";
import { TimeUtil } from "../utils/TimeUtil";
import DistanceInput from "./Input/DistanceInput";
import TimeInput from "./Input/TimeInput";
import CalculatedResults from "./CalulatedResults";
import InputWrapper from "./Input/InputWrapper";

const Pace = ({ metric }) => {
  const [time, setTime] = useState("00:00");
  const [distance, setDistance] = useState("");

  const getPace = () => {
    try {
      const seconds = TimeUtil.getTimeInSeconds(time);

      if (Number(distance) === 0 || seconds === 0) {
        return "00:00";
      }

      const paceInSeconds = seconds / Number(distance);

      return TimeUtil.secondsToTimeString(paceInSeconds);
    } catch (e) {
      console.log("error", e);
      return "00:00";
    }
  };

  return (
    <div>
      <InputWrapper>
        <DistanceInput
          value={distance}
          setValue={setDistance}
          metric={metric}
          autoFocus={true}
        />
        <TimeInput value={time} setValue={setTime} />
      </InputWrapper>
      <CalculatedResults
        value={getPace()}
        label="Calculated Pace"
        decorator={metric ? "/km" : "/mi"}
      />
    </div>
  );
};

export default Pace;
