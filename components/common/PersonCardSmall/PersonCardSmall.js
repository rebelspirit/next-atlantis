import styles from './personCardSmall.module.scss';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Image from 'next/image';
import { PersonCard } from '@components/common/PersonCard/PersonCard';

export const PersonCardSmall = ({ name, character, knownForDepartment, poster, isShowCharacterName }) => {

    return (
        <div className={styles.smallPersonContainer}>
            <div className={styles.smallPersonCardContainer}>
                <div className={styles.smallPersonCardImgContainer}>
                    <Image
                        src={`https://image.tmdb.org/t/p/w276_and_h350_face${poster}`}
                        alt='guest_card'
                        layout='fill'
                        objectFit='cover'
                        objectPosition='top center'
                        className={styles.smallPersonCardImg}
                        unoptimized
                    />
                </div>
            </div>
            <div className={styles.smallPersonCardFooter}>
                <h2 className={styles.smallPersonCardFooterTitle}>{name}</h2>
                <p className={styles.smallPersonCardFooterDate}>{
                    isShowCharacterName && character
                        ? character
                        : knownForDepartment
                }
                </p>
            </div>
        </div>
    )
};

PersonCardSmall.propTypes = {
    name: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired,
    knownForDepartment: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    isShowCharacterName: PropTypes.bool
};

PersonCardSmall.defaultProps = {
    isShowCharacterName: false
};
