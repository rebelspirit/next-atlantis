import styles from './trendsMovieCard.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { FaPlay } from 'react-icons/fa';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
export const TrendsMovieCard = () => {

    return (
        <div className={styles.trendsCardContainer}>
            <div className={styles.trendsImgContainer}>
                <Link href="#">
                    <a>
                        <Image
                            src='https://image.tmdb.org/t/p/w780/aknvFyJUQQoZFtmFnYzKi4vGv4J.jpg'
                            alt='trends_card'
                            layout='fill'
                            className={styles.trendsCardImg}
                            unoptimized={true}
                        />
                    </a>
                </Link>
                <div className={styles.trendsCardPlayIcon}>
                    <FaPlay/>
                </div>
            </div>
            <h3 className={cx(styles.trendsTitle, styles.trendsCardTitle)}>Полуночная месса</h3>
            <h4 className={cx(styles.trendsTitle, styles.trendsCardOriginalTitle)}>Midnight Mass</h4>
        </div>
    )
}
