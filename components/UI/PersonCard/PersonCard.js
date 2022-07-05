import styles from 'components/UI/PersonCard/personCard.module.scss';
import Link from 'next/link';
import Image from 'next/image';

export const PersonCard = ({ name, knownForDepartment, poster }) => {

    return (
        <div className={styles.personContainer}>
            <div className={styles.personCardContainer}>
                <div className={styles.personCardImgContainer}>
                    <Link href="#">
                        <a>
                            <Image
                                src={`https://image.tmdb.org/t/p/w780${poster}`}
                                alt='actor_card'
                                width={160}
                                height={220}
                                className={styles.personCardImg}
                                unoptimized={true}
                            />
                        </a>
                    </Link>
                </div>
            </div>
            <div className={styles.personCardFooter}>
                <h2 className={styles.personCardFooterTitle}>{name}</h2>
                <p className={styles.personCardFooterDate}>{knownForDepartment}</p>
            </div>
        </div>
    )
}
