import { TextField, useMediaQuery } from "@material-ui/core";
import React from "react";
import useTextInputStyles from "../../common/styles/useTextInputStyles";
import { TimeFormHelpers } from "../../utils/TimeFormHelpers";

const TimeInput = (props) => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const { value, setValue, autoFocus, isPace } = props;
  const classes = useTextInputStyles();

  const formatSetTime = (e) => {
    if (e.key === "Backspace") {
      setValue((t) => TimeFormHelpers.handleBackspaceEntry(t));
    }

    if (/[0-9]/.test(e.key)) {
      setValue((t) => TimeFormHelpers.handleNumericEntry(t, e.key));
    }
  };

  return (
    <>
      <TextField
        autoFocus={autoFocus || false}
        className={classes.textInput}
        variant="outlined"
        placeholder={isPace ? "pace" : "time"}
        onKeyDown={formatSetTime}
        value={value}
        label={isPace ? "pace" : "time"}
        style={{ marginBottom: isMobile ? "16px" : null }}
      />
    </>
  );
};

export default TimeInput;
