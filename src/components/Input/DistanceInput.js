import { TextField, useMediaQuery } from "@material-ui/core";
import React from "react";
import processDistanceInput from "../../common/processDistanceInput";
import useTextInputStyles from "../../common/styles/useTextInputStyles";

const DistanceInput = (props) => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const { value, setValue, metric, autoFocus } = props;
  const classes = useTextInputStyles();

  const onMilesChanged = (e) => {
    const numberKeyPressed = processDistanceInput(e.key);

    if (numberKeyPressed === "Backspace") {
      setValue((val) => val.substring(0, val.length - 1));
    } else if (numberKeyPressed) {
      setValue((val) => (val += numberKeyPressed));
    }
  };

  return (
    <>
      <TextField
        autoFocus={autoFocus || false}
        className={classes.textInput}
        variant="outlined"
        placeholder={"distance"}
        onKeyDown={onMilesChanged}
        value={value}
        label={metric ? "kilometers" : "miles"}
        style={{ marginBottom: isMobile ? "16px" : null }}
      />
    </>
  );
};

export default DistanceInput;