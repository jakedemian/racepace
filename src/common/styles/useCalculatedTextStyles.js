import { makeStyles } from "@material-ui/core";

const useCalculatedTextStyles = makeStyles({
  calculatedText: {
    fontSize: 30,
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginTop: 16,
    "& .calculatedText--label": {
      fontSize: 16,
    },
  },
});

export default useCalculatedTextStyles;
