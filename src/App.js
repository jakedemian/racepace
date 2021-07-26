import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Tab, Tabs } from "@material-ui/core";
import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { useState } from "react";
import Pace from "./components/Pace";
import Time from "./components/Time";
import Distance from "./components/Distance";

const useStyles = makeStyles({
  wrapper: {
    display: "flex",
    justifyContent: "center",
  },
});

function App() {
  const classes = useStyles();
  const [metric, setMetric] = useState(false);
  const [tab, setTab] = useState(0);

  const tabComponents = [Pace, Time, Distance];

  const CurrentTab = tabComponents[tab];

  return (
    <div className="App">
      <div className={classes.wrapper}>
        <Paper>
          <Tabs value={tab}>
            <Tab label="Pace" selected onClick={() => setTab(0)}></Tab>
            <Tab label="Time" onClick={() => setTab(1)}></Tab>
            <Tab label="Distance" onClick={() => setTab(2)}></Tab>
          </Tabs>

          <FormControl component="fieldset">
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
      </div>
      <CurrentTab metric={metric} />
    </div>
  );
}

export default App;
