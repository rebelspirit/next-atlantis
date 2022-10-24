import styles from 'components/common/CollectionCard/collectionCard.module.scss';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Image from 'next/image';

export const CollectionCard = ({ collection }) => {
    return (
        <div className={styles.collectionCardContainer}>
            <h2>{collection.name}</h2>

            <p>Фильмов в коллекции: {collection.parts.length}</p>

            <p className={styles.overview}>{collection.overview}</p>

            <Link href={`/collection/?id=${collection.id}`}>
                <button className={styles.collectionCardButton}>Смотреть коллекцию</button>
            </Link>

            <div className={styles.collectionCardBackdropContainer}>
                <Image
                    src={`https://image.tmdb.org/t/p/w780${collection.backdropPath}`}
                    alt='movie_card'
                    layout='fill'
                    className={styles.collectionCardImg}
                    objectFit='cover'
                    loading='lazy'
                    unoptimized
                />
            </div>
        </div>
    )
};

CollectionCard.propTypes = {
    collection: PropTypes.object.isRequired
};
