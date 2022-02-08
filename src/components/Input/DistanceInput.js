import { TextField, useMediaQuery } from "@material-ui/core";
import React, { useEffect, useRef } from "react";
import processDistanceInput from "../../common/processDistanceInput";
import useTextInputStyles from "../../common/styles/useTextInputStyles";

const DistanceInput = (props) => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const { value, setValue, metric, autoFocus } = props;
  const classes = useTextInputStyles();
  const ref = useRef(null);

  const onKeyPress = (e) => {
    const numberKeyPressed = processDistanceInput(e.key);

    if (numberKeyPressed === "Backspace") {
      setValue((val) => val.substring(0, val.length - 1));
    } else if (numberKeyPressed) {
      setValue((val) => (val += numberKeyPressed));
    }
  };

  useEffect(() => {
    ref.current.addEventListener("keydown", onKeyPress);
  }, []);

  return (
    <>
      <TextField
        ref={ref}
        autoFocus={autoFocus || false}
        className={classes.textInput}
        variant="outlined"
        placeholder={"distance"}
        value={value}
        label={metric ? "kilometers" : "miles"}
        style={{ marginBottom: isMobile ? "16px" : null }}
      />
    </>
  );
};

export default DistanceInput;
