import { InputAdornment, TextField, useMediaQuery } from "@material-ui/core";
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
        onChange={(e) => setValue(e.target.value)}
        value={value}
        label={metric ? "kilometers" : "miles"}
        style={{ marginBottom: isMobile ? "16px" : null }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <span style={{ color: "white" }}>{metric ? "km" : "mi"}</span>
            </InputAdornment>
          ),
        }}
      />
    </>
  );
};

export default DistanceInput;
