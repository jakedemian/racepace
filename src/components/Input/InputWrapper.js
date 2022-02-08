import { makeStyles, useMediaQuery } from "@material-ui/core";
import React from "react";
import getClass from "../../common/styles/getClass";

const useStyles = makeStyles({
  inputWrapper: {
    "&--mobile": {
      display: "flex",
      flexDirection: "column",
    },
  },
});

const InputWrapper = (props) => {
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <div className={getClass(classes.inputWrapper, isMobile)}>
      {props.children}
    </div>
  );
};

export default InputWrapper;
