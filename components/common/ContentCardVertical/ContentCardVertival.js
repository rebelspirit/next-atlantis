import styles from './contentCardVertical.module.scss';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Image from 'next/image';
import { DateUse } from 'lib/DateUse';

export const ContentCardVertival = ({ id, mediaType, title, poster, date }) => {

    const formattedYear = DateUse.format(date, 'YYYY-MM-DD', 'YYYY');

    return (
        <div className={styles.contentContainer}>
            <div className={styles.contentCardContainer}>
                <div className={styles.contentCardImgContainer}>
                    <Link href={`/watch/?type=${mediaType}&id=${id}`}>
                        <Image
                            src={`https://image.tmdb.org/t/p/w780${poster}`}
                            alt='movie_card'
                            loading='lazy'
                            width={240}
                            height={390}
                            className={styles.contentCardImg}
                            unoptimized
                        />
                    </Link>
                </div>
            </div>
            <div className={styles.contentCardFooter}>
                <h2 className={styles.contentCardFooterTitle}>{title}</h2>
                <p className={styles.contentCardFooterDate}>{`${formattedYear} г.`}</p>
            </div>
        </div>
    )
};

ContentCardVertival.propTypes ={
    id: PropTypes.number.isRequired,
    mediaType: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
}
