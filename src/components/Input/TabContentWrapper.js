import { makeStyles, useMediaQuery } from "@material-ui/core";
import React from "react";
import getClass from "../../common/styles/getClass";

const useStyles = makeStyles({
  tabContentWrapper: {
    display: "flex",
    flexDirection: "column",

    "&--mobile": {
      display: "flex",
      flexDirection: "column-reverse",
    },
  },
});

const TabContentWrapper = (props) => {
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <div className={getClass(classes.tabContentWrapper, isMobile)}>
      {props.children}
    </div>
  );
};

export default TabContentWrapper;
