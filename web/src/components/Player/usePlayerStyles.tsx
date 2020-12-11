import { makeStyles } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import React from "react";

const useStyles = makeStyles(theme => ({ 
    playerContainer: {
        position: "absolute",
        margin: 50,
        bottom: 0,
        left: 0
    }
}));

export default useStyles;