import styles from './trendsMovieCard.module.scss';
import Link from 'next/link';
import Image from 'next/image';

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
            </div>
        </div>
    )
}
