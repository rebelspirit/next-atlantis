import styles from './PersonKnownFor.module.scss';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { map, reverse, sortBy } from 'lodash';
import { DateUse } from 'lib/DateUse';

const contentMediaTypeName = {
    movie: content => content.title,
    tv: content => content.name
};

const contentMediaTypeDate = {
    movie: content => DateUse.format(content.releaseDate, 'YYYY-MM-DD', 'YYYY'),
    tv: content => DateUse.format(content.firstAirDate, 'YYYY-MM-DD', 'YYYY')
};

const transformCastCollectionArray = cast => {
    return reverse(sortBy(map(cast, content => ({
        ...content,
        releaseYear: contentMediaTypeDate[content.mediaType](content)
    })), 'releaseYear'))
};

export const PersonKnownFor = ({ cast }) => {
    return (
        <div className={styles.personKnownForContainer}>
            {map(transformCastCollectionArray(cast), content =>
                <Link href={`/watch?type=${content.mediaType}&id=${content.id}`}>
                    <a className={styles.personKnownForRow}>
                        <p className={styles.personKnownForDate}>{content.releaseYear}</p>

                        <div className={styles.personKnownFor}>
                            <p className={styles.personKnownForContentName}>{contentMediaTypeName[content.mediaType](content)}</p>
                            {!!content.character && <span>как</span>}
                            {!!content.character && <p>{content.character}</p>}
                        </div>
                    </a>
                </Link>
            )}
        </div>
    )
};

PersonKnownFor.propTypes = {
    cast: PropTypes.array
};

PersonKnownFor.defaultProps = {
    cast: []
};
