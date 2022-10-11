import styles from './shapeLoader.module.scss';

export const SapeLoader = () => {

    return (
        <div className={styles.loadingMessageContainer}>
            <div className={styles.loader}>
                <span/>
                <span/>
                <span/>
                <span/>
            </div>
            <h4>Loading..</h4>
        </div>
    )
}
