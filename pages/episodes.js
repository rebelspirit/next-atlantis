import styles from './index.module.scss';
import PropTypes from 'prop-types';
import { useLoading } from 'hooks/useLoading';
import { ShapeLoader } from '@components/common/ShapeLoader/ShapeLoader';
import { useEffect } from 'react';
import { map, toNumber } from 'lodash';
import { Serials } from 'Api/Serials';
import SeasonsPage from 'pages/seasons';
import { SectionTitle } from '@components/common/SectionTitle/SectionTitle';
import { EpisodeCard } from '@components/common/EpisodeCard/EpisodeCard';

export default function EpisodesPage({ details, seasonNumber, episodes, images }) {
    const isLoading = useLoading();

    useEffect(() => {
        console.log('episodes', episodes);
        console.log('images', images);
    }, [episodes, images])

    if (isLoading) {
        return <ShapeLoader/>
    }

    return (
        <div className={styles.contentPageContainer}>
            <SectionTitle title={`Сезон ${seasonNumber}, сериала "${details.name}"`}/>

            {map(episodes, (episode, index) =>
                <EpisodeCard
                    key={episode.id}
                    name={episode.name}
                    overview={episode.overview}
                    episodeNumber={episode.episodeNumber}
                    airDate={episode.airDate}
                    voteAverage={episode.voteAverage}
                    runtime={episode.runtime}
                    guests={episode.guestStars}
                    posterPath={episode.stillPath}
                    images={images[index]}
                />
            )}
        </div>
    )
};

export const getServerSideProps = async ({ query }) => {

    const details = await Serials.getContentDetails(query.id);

    const episodes = await Promise.all(map(new Array(toNumber(query.episodesLength)), (_, index) => {
        return Serials.getSerialEpisodesDetails(query.id, query.season, index + 1);
    }));

    const images = await Promise.all(map(new Array(toNumber(query.episodesLength)), (_, index) => {
        return Serials.getSerialEpisodeImages(query.id, query.season, index + 1);
    }));

    return {
        props: {
            details,
            seasonNumber: query.season,
            episodes,
            images
        }
    };
};

SeasonsPage.propTypes = {
    details: PropTypes.object.isRequired,
    seasonNumber: PropTypes.number.isRequired,
    episodes: PropTypes.array.isRequired,
    images: PropTypes.array.isRequired
};
