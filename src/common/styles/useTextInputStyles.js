import { makeStyles } from "@material-ui/core";
import { inputBackground, primaryColor } from "../themeConstants";

const useTextInputStyles = makeStyles({
  textInput: {
    backgroundColor: inputBackground,
    borderRadius: 4,
    margin: "auto 4px",

    "& input": {
      color: "white",
    },
    "& label, & label.Mui-focused": {
      color: primaryColor,
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: primaryColor,
    },
  },
});

export default useTextInputStyles;
