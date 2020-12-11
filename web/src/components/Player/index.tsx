import React from "react"
import ReactPlayer from 'react-player'
import useStyles from "./usePlayerStyles"

type PlayerProps = {
    url: string;
}
const Player : React.FunctionComponent<PlayerProps> = (props) => {
    const {url} = props;
    const styles = useStyles();
    return (
    <div className={styles.playerContainer}>
        <ReactPlayer url={url} playing={true} width={300} height={300}/>
    </div>)
}

export default Player;