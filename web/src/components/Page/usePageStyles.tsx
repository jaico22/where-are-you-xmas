import { makeStyles } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import React from "react";

const useStyles = makeStyles(theme => ({ 
    page: {
        width: "100vw",
        height: "100vh",
        backgroundColor: "#0e0629"
    }
}));

export default useStyles;