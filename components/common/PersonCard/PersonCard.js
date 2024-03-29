import styles from 'components/common/PersonCard/personCard.module.scss';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Image from 'next/image';

export const PersonCard = ({ id, name, character, knownForDepartment, poster, isShowCharacterName }) => {

    return (
        <div className={styles.personContainer}>
            <div className={styles.personCardContainer}>
                <div className={styles.personCardImgContainer}>
                    <Link href={`/person/?id=${id}`}>
                        <Image
                            src={`https://image.tmdb.org/t/p/w780${poster}`}
                            alt='actor_card'
                            width={160}
                            height={235}
                            className={styles.personCardImg}
                            unoptimized
                        />
                    </Link>
                </div>
            </div>
            <div className={styles.personCardFooter}>
                <h2 className={styles.personCardFooterTitle}>{name}</h2>
                <p className={styles.personCardFooterDate}>{
                    isShowCharacterName && character
                        ? character
                        : knownForDepartment
                }
                </p>
            </div>
        </div>
    )
};

PersonCard.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired,
    knownForDepartment: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    isShowCharacterName: PropTypes.bool
};

PersonCard.defaultProps = {
    isShowCharacterName: false
};
