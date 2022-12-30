import styles from '@components/common/ContentCardHorizontal/contentCardHorizontal.module.scss';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Image from 'next/image';
import { FaPlay } from 'react-icons/fa';
import { IconWrapper } from '@components/common/IconWrapper/IconWrapper';
import { DateUse } from 'lib/DateUse';
import { ContentCardHorizontalFooter } from '@components/common/ContentCardHorizontal/ContentCardHorizontalFooter';
import img from 'public/img/testsrc.png';

export const ContentCardHorizontal = ({ id, mediaType, image, title, date, overview }) => {

    const formattedYear = DateUse.format(date, 'YYYY-MM-DD', 'll');

    return (
        <div className={styles.contentCardAltContainer}>
            <div className={styles.contentCardAltCardWrapper}>
                <IconWrapper width={48} height={48} className={styles.contentCardAltPlayIcon}>
                    <FaPlay/>
                </IconWrapper>
                <div className={styles.contentCardAltImgContainer}>
                    <Link href={`/watch/?type=${mediaType}&id=${id}`}>
                        <Image
                            //src={`https://image.tmdb.org/t/p/w780${image}`}
                            src={img}
                            alt='trends_card'
                            width={300}
                            height={170}
                            className={styles.contentCardAltImg}
                            unoptimized
                        />
                    </Link>
                </div>
            </div>

            <ContentCardHorizontalFooter
                title={title}
                date={formattedYear}
                overview={overview}
            />
        </div>
    )
};

ContentCardHorizontal.propTypes = {
    id: PropTypes.number.isRequired,
    mediaType: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string,
    overview: PropTypes.string
};
