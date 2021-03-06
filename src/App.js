import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Tab, Tabs, useMediaQuery } from "@material-ui/core";
import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { useState } from "react";
import Pace from "./components/Pace";
import Time from "./components/Time";
import Distance from "./components/Distance";
import Logo from "./assets/racepace.png";
import { primaryColor, secondaryColor } from "./common/themeConstants";
import getClass from "./common/styles/getClass";

const useStyles = makeStyles({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  },
  logoWrapper: {
    display: "flex",
    justifyContent: "center",
    marginBottom: 16,
  },
  logo: {
    width: 450,

    "&--mobile": {
      width: 250,
    },
  },
  tabsWrapper: {
    marginBottom: 16,
    backgroundColor: "#161616",
    color: "white",
    "& .MuiTabs-root": {
      borderRadius: 4,
    },
    "& .MuiButtonBase-root.MuiTab-root": {
      backgroundColor: "#111",
    },
    "& .MuiTabs-indicator": {
      backgroundColor: primaryColor,
    },
    "& .MuiTab-textColorInherit": {
      opacity: 0.5,
    },
    "& .MuiTab-textColorInherit.Mui-selected": {
      opacity: 1,
    },
    "&--mobile": {
      margin: "auto",
      marginBottom: 16,
    },
  },

  toggleWrapper: {
    "& .MuiSwitch-switchBase": { color: secondaryColor },
    "& .MuiSwitch-colorPrimary.Mui-checked": {
      color: primaryColor,
    },
    "& .MuiSwitch-colorPrimary + .MuiSwitch-track": {
      backgroundColor: "#444",
    },
    "& .MuiSwitch-colorPrimary.Mui-checked + .MuiSwitch-track": {
      backgroundColor: primaryColor,
    },
  },
});

function App() {
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-width:600px)");

  const [metric, setMetric] = useState(false);
  const [tab, setTab] = useState(0);

  const tabComponents = [Pace, Time, Distance];

  const CurrentTab = tabComponents[tab];

  return (
    <div className="App">
      <div className={getClass(classes.wrapper, isMobile)}>
        <div className={classes.logoWrapper}>
          <img
            className={getClass(classes.logo, isMobile)}
            src={Logo}
            alt="Racepace Logo"
          />
        </div>
        <Paper className={getClass(classes.tabsWrapper, isMobile)}>
          <Tabs value={tab}>
            <Tab label="Pace" selected onClick={() => setTab(0)}></Tab>
            <Tab label="Time" onClick={() => setTab(1)}></Tab>
            <Tab label="Distance" onClick={() => setTab(2)}></Tab>
          </Tabs>

          <FormControl component="fieldset" className={classes.toggleWrapper}>
            <FormGroup aria-label="position" row>
              <FormControlLabel
                value={metric}
                control={<Switch color="primary" />}
                label={metric ? "Metric" : "Imperial"}
                labelPlacement="end"
                onClick={() => setMetric(!metric)}
              />
            </FormGroup>
          </FormControl>
        </Paper>
        <CurrentTab metric={metric} />
      </div>
    </div>
  );
}

export default App;
