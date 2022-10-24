import { useCallback, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import { slice, floor, flatMap, pick } from 'lodash';
import { Slider } from '@components/Slider/Slider';
import { Movies } from 'Api/Movies';
import { TrendsRow } from '@components/TrendsRow/TrendsRow';
import { SectionTitle } from '@components/common/SectionTitle/SectionTitle';
import { Serials } from 'Api/Serials';
import { DualTabButtons } from '@components/common/DualTabButtons/DualTabButtons';
import { useLoading } from 'hooks/useLoading';
import { ShapeLoader } from '@components/common/ShapeLoader/ShapeLoader';

const dualTabButtonsSettings = {
    firstButtonName: 'День',
    secondButtonName: 'Неделя'
};

const getSliderProps = (sliderCount, movies, tv) => {
    const equalPartsCount = floor(sliderCount / 2);
    const slicedMoviesArray = slice(movies, 0, equalPartsCount);
    const slicedSerialsArray = slice(tv, 0, equalPartsCount);

    return flatMap(new Array(equalPartsCount), (_, index) => {
        return [
            pick(slicedMoviesArray[index], ['title', 'voteAverage', 'voteCount', 'backdropPath', 'overview']),
            { title: slicedSerialsArray[index]?.name, ...pick(slicedSerialsArray[index], ['voteAverage', 'voteCount', 'backdropPath', 'overview']) }
        ]
    });
};

export default function IndexPage(props) {
    const isLoading = useLoading();

    const [movies, setMovies] = useState({
        ...props.movies, isWeekTypeSelected: false
    });

    const [tv, setTv] = useState({
        ...props.tv, isWeekTypeSelected: false
    });

    const [showTrail, setShowTrail] = useState({
        movies: false,
        tv: false
    });

    const sliderProps = getSliderProps(6, movies.trendsOnWeek, tv.trendsOnWeek);


    const delayedShowFadeAnimation = useMemo(() => setTimeout(() => {
        setShowTrail({ movies: true, tv: true })
    }, 300), [movies.isWeekTypeSelected, tv.isWeekTypeSelected]);

    const delayedContentSelectedIntervalType = setState => setTimeout(() => {
        setState(prev => ({ ...prev, isWeekTypeSelected: !prev.isWeekTypeSelected }))
    }, 100);

    const onClickChangeContentSelectedIntervalType = (setState, type) => {
        return () => {
            setShowTrail(prev => ({ ...prev, [type]: false }));

            delayedContentSelectedIntervalType(setState);
        }
    };

    useEffect(() => {
        return () => {
            clearTimeout(delayedShowFadeAnimation)
            clearTimeout(delayedContentSelectedIntervalType)
        }
    }, [showTrail])

    if (isLoading) {
        // TODO: Change loader to CustomContentLoader (like skeleton) for this page. Problem with useLoading hook
        return <ShapeLoader/>
    }

    return (
        <main className={styles.contentContainer}>
            <Slider slides={sliderProps}/>

            <div className={styles.trendsContainer}>
                <div className={styles.trendsTitleContainer}>
                    <SectionTitle title='Популярные фильмы'/>

                    <DualTabButtons
                        onClick={onClickChangeContentSelectedIntervalType(setMovies, 'movies')}
                        selected={!movies.isWeekTypeSelected}
                        settings={dualTabButtonsSettings}
                    />
                </div>
                <TrendsRow
                    type='movie'
                    mappedContent={movies.isWeekTypeSelected ? movies.trendsOnWeek : movies.trendsOnDay}
                    showTrail={showTrail.movies}
                />

                <div className={styles.trendsTitleContainer}>
                    <SectionTitle title='Популярные сериалы'/>

                    <DualTabButtons
                        onClick={onClickChangeContentSelectedIntervalType(setTv, 'tv')}
                        selected={!tv.isWeekTypeSelected}
                        settings={dualTabButtonsSettings}
                    />
                </div>

                <TrendsRow
                    type='tv'
                    mappedContent={tv.isWeekTypeSelected ? tv.trendsOnWeek : tv.trendsOnDay}
                    showTrail={showTrail.tv}
                />
            </div>
        </main>
    );
}

export const getServerSideProps = async () => {
    try {
        const trendMoviesOnDay = await Movies.getTrendsMoviesOnDay();
        const trendMoviesOnWeek = await Movies.getTrendsMoviesOnWeek();
        const trendSerialsOnDay = await Serials.getTrendsSerialsOnDay();
        const trendSerialsOnWeek = await Serials.getTrendsSerialsOnWeek();

        return {
            props: {
                movies: { trendsOnDay: trendMoviesOnDay, trendsOnWeek: trendMoviesOnWeek },
                tv: { trendsOnDay: trendSerialsOnDay, trendsOnWeek: trendSerialsOnWeek }
            }
        };

    } catch (errors) {
        return { errors }
    }
};

IndexPage.propTypes = {
    movies: PropTypes.object.isRequired,
    tv: PropTypes.object.isRequired
};
