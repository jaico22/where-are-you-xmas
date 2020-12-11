import usePageStyles from "./usePageStyles";

const Page : React.FC = (props) => {
    const styles = usePageStyles();
    return (<div className={styles.page}> {props.children}</div>)
}

export default Page;
