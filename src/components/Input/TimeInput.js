import { TextField, useMediaQuery } from "@material-ui/core";
import React, { useEffect, useRef } from "react";
import useTextInputStyles from "../../common/styles/useTextInputStyles";
import { TimeFormHelpers } from "../../utils/TimeFormHelpers";

const TimeInput = (props) => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const { value, setValue, autoFocus, isPace } = props;
  const classes = useTextInputStyles();
  const ref = useRef(null);

  const onKeyPress = (e) => {
    const key = e.key;
    console.log(key);
    if (key === "Backspace") {
      setValue((t) => TimeFormHelpers.handleBackspaceEntry(t));
    }

    if (key === "Enter") {
      ref.current.querySelector("input").blur();
    }

    if (/[0-9]/.test(key)) {
      setValue((t) => TimeFormHelpers.handleNumericEntry(t, key));
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
        placeholder={isPace ? "pace" : "time"}
        value={value}
        label={isPace ? "pace" : "time"}
        style={{ marginBottom: isMobile ? "16px" : null }}
      />
    </>
  );
};

export default TimeInput;
