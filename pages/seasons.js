import styles from './index.module.scss';
import PropTypes from 'prop-types';
import { SeasonCard } from '@components/common/SeasonCard/SeasonCard';
import { map, toNumber } from 'lodash';
import { Serials } from 'Api/Serials';
import { useEffect } from 'react';
import { SectionTitle } from '@components/common/SectionTitle/SectionTitle';
import { useLoading } from 'hooks/useLoading';
import { ShapeLoader } from '@components/common/ShapeLoader/ShapeLoader';

export default function SeasonsPage({ details, seasons }) {
    const isLoading = useLoading();

    useEffect(() => {
        console.log('seasons', seasons);
        console.log('details', details);
    }, [seasons, details])

    if (isLoading) {
        return <ShapeLoader/>
    }

    return (
        <div className={styles.seasonsListContainer}>
            <SectionTitle title={`Все сезоны сериала: "${details.name}"`}/>

            {map(seasons, season =>
                <div className={styles.seasonCard} key={season.id}>
                    <SeasonCard
                        season={season}
                        episodesCount={season.episodeCount}
                        serialId={details.id}
                        serialName={details.name}
                    />
                </div>
            )}
        </div>
    )
};

export const getServerSideProps = async ({ query }) => {

    const details = await Serials.getContentDetails(query.id);

    const seasons = await Promise.all(map(new Array(toNumber(query.seasonsLength)), (_, index) => {
        return Serials.getSerialSeasonDetails(query.id, index + 1);
    }));

    return {
        props: {
            details,
            seasons
        }
    };
};

SeasonsPage.propTypes = {
    details: PropTypes.object.isRequired,
    seasons: PropTypes.array.isRequired
};
