import { fade } from "@material-ui/core";
import {Dispatch, useReducer} from "react";

export type fadingImagesActions = {
    type: "FADING_IMAGES_NEXT"
} | {
    type: "SET_FADE_STATE",
    payload: {
        fadeState: boolean;
    }
}

export type fadingImagesState = {
    images : string[],
    currentImage?: string | undefined,
    currentImageIndex?: number;
    fadeState?: boolean;
    swipeFromLeft?: boolean;
}

function useSadFadingImagesReducer(initialImages : string[]) : [fadingImagesState, Dispatch<fadingImagesActions>] {
    const reducer = (state : fadingImagesState, action: fadingImagesActions) : fadingImagesState => {
        switch (action.type){
            case "SET_FADE_STATE": {
                let nextIndex = (state.currentImageIndex ?? 0) + 1;
                nextIndex = nextIndex >= state.images.length ? 0 : nextIndex;
                const cycleImage = action.payload.fadeState == true;
                return {
                    ...state,
                    fadeState: action.payload.fadeState,
                    currentImage: cycleImage 
                        ? state.images[nextIndex]
                        : state.currentImage,
                    currentImageIndex: cycleImage
                        ? nextIndex
                        : state.currentImageIndex,
                    swipeFromLeft: cycleImage
                        ? !state.swipeFromLeft
                        : state.swipeFromLeft
                }
            }
            default: {
                throw new Error();
            }
        }
    }

    const intialState : fadingImagesState = {
        images: initialImages,
        currentImage: initialImages[0],
        currentImageIndex: 0,
        fadeState: true,
        swipeFromLeft: true
    }

    return useReducer(reducer, intialState)
}

export default useSadFadingImagesReducer;