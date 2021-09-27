import styles from './trendsRow.module.scss';
import { TrendsMovieCard } from '@components/UserInterfaces/TrendsMovieCard/TrendsMovieCard';

export const TrendsRow = () => {

    return (
        <div className={styles.trendsContainer}>
            <h2 className={styles.trendsSectionTitle}>Trends "Serials"</h2>
            <p className={styles.trendsSectionDescription}>on this week</p>
            {/*<input type="range" id="vol" name="vol" min="0" max="50"/>*/}

            <div className={styles.trendsCardsRow}>
                <TrendsMovieCard/>
                <TrendsMovieCard/>
                <TrendsMovieCard/>
                <TrendsMovieCard/>
                <TrendsMovieCard/>
                <TrendsMovieCard/>
                <TrendsMovieCard/>
            </div>
        </div>
    )
}
