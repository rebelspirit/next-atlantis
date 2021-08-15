import styles from './movieCard.module.scss'
import { CircularProgressBar } from '@components/elements/CircularProgressBar/CircularProgressBar'

export const MovieCard = () => {

    return (
        <a className={styles.movieCardContainer}>
            <img src={'https://image.tmdb.org/t/p/w342/nnY2KwN3XR8D2f4p7w05W7CoCv.jpg'} alt="movie-poster"/>
            <div className={styles.movieCardDescriptionContainer}>
                <h6>Флэш</h6>
                <p>США, 2014</p>
                <p className={styles.movieCardDescription}>В детстве Барри Аллен стал свидетелем убийства своей матери, в котором несправедливо обвинили его отца.</p>
                <CircularProgressBar/>
            </div>
        </a>
    )
}
