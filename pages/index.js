import styles from './index.module.scss';
import classNames from 'classnames/bind';
import { Slider } from '@components/Slider/Slider';
import { TrendsMovieCard } from '@components/UserInterfaces/TrendsMovieCard/TrendsMovieCard';

const cx = classNames.bind(styles);

export default function IndexPage() {

    return (
        <main className={cx(styles.contentContainer)}>
            <Slider/>

            <div className={styles.trendsContainer}>
                <h2 className={styles.sectionTitle}>Trends "Serials" on this week</h2>
                {/*<input type="range" id="vol" name="vol" min="0" max="50"/>*/}
                <TrendsMovieCard/>
            </div>
        </main>
    );
}
