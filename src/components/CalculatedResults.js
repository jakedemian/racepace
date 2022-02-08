import { useMediaQuery } from "@material-ui/core";
import React from "react";
import getClass from "../common/styles/getClass";
import useCalculatedTextStyles from "../common/styles/useCalculatedTextStyles";

const CalculatedResults = (props) => {
  const { label, value, decorator } = props;
  const classes = useCalculatedTextStyles();
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <>
      <div className={getClass(classes.calculatedText, isMobile)}>
        <span className="calculatedText--label">{label}</span>
        <span>
          {value} {decorator}
        </span>
      </div>
    </>
  );
};

export default CalculatedResults;
