import styles from 'pages/index.module.scss';
import PropTypes from 'prop-types';
import { floor, round } from 'lodash';
import { Movies } from 'Api/Movies';
import { Serials } from 'Api/Serials';
import { useLoading } from 'hooks/useLoading';
import { SapeLoader } from '@components/UI/ShapeLoader/ShapeLoader';
import { useEffect } from 'react';
import Image from 'next/image';
import { VotingPercentCircle } from '@components/UI/VotingPercentCircle/VotingPercentCircle';
import { DateUse } from 'lib/DateUse';

const contentRuntimeLength = number => {
    const runtimeHours = floor((number / 60));
    const runtimeMinutes = round(((number / 60) - runtimeHours) * 60);

    return runtimeHours + ' ч. ' + runtimeMinutes + ' минут';
};

export default function WatchPage({ details }) {
    const isLoading = useLoading();

    useEffect(() =>{
        console.log('details', details);
    }, [details])

    if (isLoading) {
        return <SapeLoader/>
    }

    return (
        <div className={styles.contentPageContainer}>

            <div className={styles.contentDetailsContainer}>

                <div className={styles.posterContainer}>
                    <Image
                        src={`https://image.tmdb.org/t/p/w780${details.posterPath}`}
                        alt='content_card'
                        width={280}
                        height={430}
                        className={styles.posterImg}
                        unoptimized
                        loading='lazy'
                    />
                </div>

                <div className={styles.contentDescriptionContainer}>
                    <h1 className={styles.title}>{details.title}</h1>
                    <p className={styles.originalTitle}>{details.originalTitle}</p>

                    <div className={styles.contentFeaturesContainer}>
                        <span>{DateUse.format(details.releaseDate, 'YYYY-MM-DD', 'll')}</span>
                        <span className={styles.circle}/>
                        <span>боевик, приключения, фэнтези</span>
                        <span className={styles.circle}/>
                        <span>{contentRuntimeLength(details.runtime)}</span>
                    </div>

                    <div className={styles.controlsContainer}>
                        <div className={styles.voteRatingContainer}>
                            <VotingPercentCircle voteAverage={details.voteAverage}/>
                            <p>Пользовательский <br/> рейтинг</p>
                        </div>
                    </div>

                    <div className={styles.overviewContainer}>
                        <h6>Обзор</h6>
                        <p>{details.overview}</p>
                    </div>

                </div>

                <div className={styles.backdropContainer}>
                    <Image
                        src={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${details.backdropPath}`}
                        alt='slider_poster'
                        width={1400}
                        height={525}
                        className={styles.backdropImg}
                        unoptimized
                        loading='lazy'
                    />
                </div>
            </div>

            {/*<iframe*/}
            {/*    width={700}*/}
            {/*    height={400}*/}
            {/*    title='movie'*/}
            {/*    allowFullScreen*/}
            {/*    scrolling="no"*/}
            {/*    src={details.iframeSrc}*/}
            {/*/>*/}

        </div>
    )
}

export const getServerSideProps = async ({ query }) => {

    const mediaTypes = {
        movie: id => Movies.getContentDetails(id),
        tv: id => Serials.getContentDetails(id)
    };

    const details = await mediaTypes[query.type](query.id);

    return {
        props: {
            details,
        }
    };
};

WatchPage.propTypes = {
    details: PropTypes.object.isRequired
};
