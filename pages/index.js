import { useCallback, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './index.module.scss';
import { slice, floor, flatMap, pick } from 'lodash';
import { Slider } from '@components/Slider/Slider';
import { Movies } from 'Api/Movies';
import { TrendsRow } from '@components/TrendsRow/TrendsRow';
import { SectionTitle } from '@components/UI/SectionTitle/SectionTitle';
import { Serials } from 'Api/Serials';
import { DualTabButtons } from '@components/UI/DualTabButtons/DualTabButtons';

const dualTabButtonsSettings = {
    firstButtonName: 'День',
    secondButtonName: 'Неделя'
};

const getSliderProps = (sliderCount, movies, serials) => {
    const equalPartsCount = floor(sliderCount / 2);
    const slicedMoviesArray = slice(movies, 0, equalPartsCount);
    const slicedSerialsArray = slice(serials, 0, equalPartsCount);

    return flatMap(new Array(equalPartsCount), (_, index) => {
        return [
            pick(slicedMoviesArray[index], ['title', 'vote_average', 'vote_count', 'backdrop_path', 'overview']),
            { title: slicedSerialsArray[index].name, ...pick(slicedSerialsArray[index], ['vote_average', 'vote_count', 'backdrop_path', 'overview']) }
        ]
    });
};

export default function IndexPage(props) {

    const [movies, setMovies] = useState({
        ...props.movies, isWeekTypeSelected: false
    });

    const [serials, setSerials] = useState({
        ...props.serials, isWeekTypeSelected: false
    });

    const [showTrail, setShowTrail] = useState({
        movies: false,
        serials: false
    });

    const sliderProps = getSliderProps(6, movies.trendsOnWeek, serials.trendsOnWeek);


    const delayedShowFadeAnimation = useMemo(() => setTimeout(() => {
        setShowTrail({ movies: true, serials: true })
    }, 300), [movies.isWeekTypeSelected, serials.isWeekTypeSelected]);

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
                        onClick={onClickChangeContentSelectedIntervalType(setSerials, 'serials')}
                        selected={!serials.isWeekTypeSelected}
                        settings={dualTabButtonsSettings}
                    />
                </div>

                <TrendsRow
                    type='serial'
                    mappedContent={serials.isWeekTypeSelected ? serials.trendsOnWeek : serials.trendsOnDay}
                    showTrail={showTrail.serials}
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
                movies: { trendsOnDay: trendMoviesOnDay.data.results, trendsOnWeek: trendMoviesOnWeek.data.results },
                serials: { trendsOnDay: trendSerialsOnDay.data.results, trendsOnWeek: trendSerialsOnWeek.data.results }
            }
        };

    } catch (errors) {
        return { errors }
    }
};

IndexPage.propTypes = {
    movies: PropTypes.object.isRequired,
    serials: PropTypes.object.isRequired
};
