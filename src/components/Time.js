import React, { useState } from "react";
import useCalculatedTextStyles from "../common/styles/useCalculatedTextStyles";
import { TimeUtil } from "../utils/TimeUtil";
import CalculatedResults from "./CalculatedResults";
import DistanceInput from "./Input/DistanceInput";
import InputWrapper from "./Input/InputWrapper";
import TabContentWrapper from "./Input/TabContentWrapper";
import TimeInput from "./Input/TimeInput";

const Time = ({ metric }) => {
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

  return (
    <TabContentWrapper>
      <InputWrapper>
        <DistanceInput
          value={distance}
          setValue={setDistance}
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
      <CalculatedResults value={getTime()} label="Calculated Time" />
    </TabContentWrapper>
  );
};

export default Time;
