import { makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles(theme => ({ 
  imageBase: {
    zIndex: 10,
    mask: "radial-gradient(ellipse, white, transparent 70%)",
    width: "fit-content"
  },
    image: {
      maxWidth: "1000px",
      height: "auto",
      zIndex: 9
    },
    // Left -> right animation
    animatedItemLeft: {
      width: "fit-content",
      animation: `$leftEnter 10000ms`,
      animationTimingFunction: "linear",
    },
    animatedItemExitingLeft: {
      width: "fit-content",
      animation: `$leftExit 10000ms`,
      animationTimingFunction: "linear",
    },
    "@keyframes leftEnter": {
      "0%": {
        opacity: -1,
        transform: "translateY(-100%) translateX(-100%)"
      },
      "100%": {
        opacity: 1,
        transform: "translateY(50%) translateX(50%)"
      }
    },
    "@keyframes leftExit": {
      "0%": {
          opacity: 1,
          transform: "translateY(50%) translateX(50%)"
        },
      "100%": {
        opacity: -1,
        transform: "translateY(200%) translateX(200%)"
      }
    },
    // right -> left animation
    animatedItemRight: {
      width: "fit-content",
      animation: `$rightEnter 10000ms`,
      animationTimingFunction: "linear",
    },
    animatedItemExitingRight: {
      width: "fit-content",
      animation: `$rightExt 10000ms`,
      animationTimingFunction: "linear",
    },
    "@keyframes rightEnter": {
      "0%": {
        opacity: -1,
        transform: "translateY(-100%) translateX(100%)"
      },
      "100%": {
        opacity: 1,
        transform: "translateY(50%) translateX(50%)"
      }
    },
    "@keyframes rightExt": {
      "0%": {
          opacity: 1,
          transform: "translateY(50%) translateX(50%)"
      },
      "100%": {
        opacity: -0.5,
        transform: "translateY(200%) translateX(-200%)"
      }
    }      
}));

export default useStyles;