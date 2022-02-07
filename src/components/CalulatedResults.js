import React from "react";
import useCalculatedTextStyles from "../common/styles/useCalculatedTextStyles";

const CalculatedResults = (props) => {
  const { label, value, decorator } = props;
  const classes = useCalculatedTextStyles();

  return (
    <>
      <div className={classes.calculatedText}>
        <span className="calculatedText--label">{label}</span>
        <span>
          {value} {decorator}
        </span>
      </div>
    </>
  );
};

export default CalculatedResults;
