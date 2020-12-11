import { Fade, Grow, Slide, Zoom } from "@material-ui/core";
import React, { useEffect } from "react";
import useSadFadingImagesReducer from "./useSadFadingImagesReducer"
import useStyles from "./useSadFadingImagesStyles";
type SadFadingImagesProps = {
    urls : string[],
    delayMs: number,
    speed: number
}

const SadFadingImages : React.FC<SadFadingImagesProps> = props => {
    const [state, dispatch] = useSadFadingImagesReducer(props.urls);

    useEffect(() => {
        const fadeInterval = setInterval(() => dispatch({type: "SET_FADE_STATE", payload: {fadeState: !state.fadeState}}), props.delayMs/2) 
        return () => {
            clearInterval(fadeInterval);
        }
    })
    const styles = useStyles({delayMs: props.delayMs});
    return (
    <div className={
        state.swipeFromLeft 
            ? (state.fadeState ? styles.animatedItemLeft : styles.animatedItemExitingLeft ) 
            : (state.fadeState ? styles.animatedItemRight : styles.animatedItemExitingRight)
        } 
    >      
        <div className={styles.imageBase}>
            <img className={styles.image} src={state.currentImage} />
        </div>
    </div>)
}

export default SadFadingImages;