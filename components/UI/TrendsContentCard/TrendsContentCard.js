import styles from '@components/UI/TrendsContentCard/trendsContentCard.module.scss';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Image from 'next/image';
import { FaPlay } from 'react-icons/fa';
import { IconWrapper } from '@components/UI/IconWrapper/IconWrapper';
import { DateUse } from 'lib/DateUse';
import { TrendsContentCardFooter } from '@components/UI/TrendsContentCard/TrendsContentCardFooter';

export const TrendsContentCard = ({ image, title, date, overview }) => {

    const formattedYear = DateUse.format(date, 'YYYY-MM-DD', 'll');

    return (
        <div className={styles.trendsContainer}>
            <div className={styles.trendsCardContainer}>
                <IconWrapper width={48} height={48} className={styles.trendsCardPlayIcon}>
                    <FaPlay/>
                </IconWrapper>
                <div className={styles.trendsImgContainer}>
                    <Link href="#">
                        <a>
                            <Image
                                src={`https://image.tmdb.org/t/p/w780${image}`}
                                alt='trends_card'
                                width={300}
                                height={170}
                                className={styles.trendsCardImg}
                                unoptimized={true}
                            />
                        </a>
                    </Link>
                </div>
            </div>

            <TrendsContentCardFooter
                title={title}
                date={formattedYear}
                overview={overview}
            />
        </div>
    )
};

TrendsContentCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string,
    overview: PropTypes.string
};
