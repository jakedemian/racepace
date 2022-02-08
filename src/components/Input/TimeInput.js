import { InputAdornment, TextField, useMediaQuery } from "@material-ui/core";
import React from "react";
import useTextInputStyles from "../../common/styles/useTextInputStyles";
import { TimeFormHelpers } from "../../utils/TimeFormHelpers";

const TimeInput = (props) => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const { value, setValue, autoFocus, isPace, metric } = props;
  const classes = useTextInputStyles();

  const formatSetTime = (e) => {
    const key = e.nativeEvent.data;
    if (key === null) {
      setValue((t) => TimeFormHelpers.handleBackspaceEntry(t));
    }

    if (/[0-9]/.test(key)) {
      setValue((t) => TimeFormHelpers.handleNumericEntry(t, key));
    }
  };

  return (
    <>
      <TextField
        autoFocus={autoFocus || false}
        className={classes.textInput}
        variant="outlined"
        placeholder={isPace ? "pace" : "time"}
        onChange={formatSetTime}
        value={value}
        label={isPace ? "pace" : "time"}
        style={{ marginBottom: isMobile ? "16px" : null }}
        InputProps={{
          endAdornment: isPace && (
            <InputAdornment position="end">
              <span style={{ color: "white" }}>{metric ? "/km" : "/mi"}</span>
            </InputAdornment>
          ),
        }}
      />
    </>
  );
};

export default TimeInput;
