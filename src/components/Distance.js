import React, { useState } from "react";
import { TimeUtil } from "../utils/TimeUtil";
import CalculatedResults from "./CalculatedResults";
import InputWrapper from "./Input/InputWrapper";
import TabContentWrapper from "./Input/TabContentWrapper";
import TimeInput from "./Input/TimeInput";

const Distance = ({ metric }) => {
  const [pace, setPace] = useState("00:00");
  const [time, setTime] = useState("00:00");

  const getDistance = () => {
    const units = metric ? "kilometers" : "miles";
    try {
      const paceSeconds = TimeUtil.getTimeInSeconds(pace);
      const timeSeconds = TimeUtil.getTimeInSeconds(time);

      if (Number(timeSeconds) === 0 || paceSeconds === 0) {
        return `0 ${units}`;
      }

      return `${Number(timeSeconds / paceSeconds).toFixed(2)} ${units}`;
    } catch (e) {
      console.log("error", e);
      return `0 ${units}`;
    }
  };

  return (
    <TabContentWrapper>
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
    </TabContentWrapper>
  );
};

export default Distance;
