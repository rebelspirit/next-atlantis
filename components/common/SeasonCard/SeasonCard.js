import styles from 'components/common/SeasonCard/SeasonCard.module.scss';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';
import { DateUse } from 'lib/DateUse';

export const SeasonCard = ({ season, episodesCount, serialId, serialName }) => {

    const formattedDate = DateUse.format(season.airDate, 'YYYY-MM-DD', 'll');
    const year = DateUse.format(season.airDate, 'YYYY-MM-DD', 'YYYY');

    const overviewPlug = `${season.name} сериала "${serialName}", вышел ${formattedDate}`;

    return (
        <Link href={`/episodes/?id=${serialId}&season=${season.seasonNumber}&episodesLength=${episodesCount}`}>
            <div className={styles.seasonCardContainer}>
                <div className={styles.seasonCardPosterContainer}>
                    <Image
                        src={`https://image.tmdb.org/t/p/w780${season.posterPath}`}
                        alt='movie_card'
                        layout='fill'
                        className={styles.seasonCardPoster}
                        objectFit='contain'
                        objectPosition='left center'
                        loading='lazy'
                        unoptimized
                    />
                </div>

                <div className={styles.seasonCardDescription}>
                    <h3>{season.name}</h3>
                    <p className={styles.seasonCardDateAndEpisodes}>
                        <span>{year}</span>
                        <span className={styles.circle}/>
                        <span>{season.episodeCount || season.episodes.length} эпизодов</span>
                    </p>

                    <p className={styles.seasonCardOverview}>
                        {!!season.overview ? season.overview : overviewPlug}
                    </p>
                </div>
            </div>
        </Link>
    )
};
SeasonCard.propTypes = {
    season: PropTypes.object.isRequired,
    episodesCount: PropTypes.number.isRequired,
    serialId: PropTypes.number.isRequired,
    serialName: PropTypes.string.isRequired
};
