import styles from './shapeLoader.module.scss';

export const ShapeLoader = () => {

    return (
        <div className={styles.loadingMessageContainer}>
            <div className={styles.loader}>
                <span/>
                <span/>
                <span/>
                <span/>
            </div>
            <h4>Загрузка..</h4>
        </div>
    )
}
