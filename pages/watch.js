import styles from 'pages/index.module.scss';
import PropTypes from 'prop-types';
import { floor, round, map, omit, keys, reverse, compact } from 'lodash';
import { Movies } from 'Api/Movies';
import { Serials } from 'Api/Serials';
import { useLoading } from 'hooks/useLoading';
import { SapeLoader } from '@components/UI/ShapeLoader/ShapeLoader';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { VotingPercentCircle } from '@components/UI/VotingPercentCircle/VotingPercentCircle';
import { DateUse } from 'lib/DateUse';
import { IconWrapper } from '@components/UI/IconWrapper/IconWrapper';
import { FcLike } from 'react-icons/fc';
import { IoPlayCircle } from 'react-icons/io5';
import { FaImdb } from 'react-icons/fa';
import { AiFillInstagram, AiFillFacebook, AiOutlineTwitter } from 'react-icons/ai';
import { Number } from 'animations/Number';
import { Common } from 'Api/Common';
import { SectionTitle } from '@components/UI/SectionTitle/SectionTitle';
import { PersonCard } from '@components/UI/PersonCard/PersonCard';
import ScrollContainer from 'react-indiana-drag-scroll';
import { TrendsContentCard } from '@components/UI/TrendsContentCard/TrendsContentCard';


const getMovieProps = item => ({
    title: item.title,
    date: item.releaseDate
});

const getSerialProps = item => ({
    title: item.name,
    date: item.firstAirDate
});

const getPropsFromContentType = {
    movie: getMovieProps,
    tv: getSerialProps,
};

const socialMediaTypes = {
    facebookId: {
        link: 'https://www.facebook.com/',
        icon: <AiFillFacebook/>
    },
    instagramId: {
        link: 'https://www.instagram.com/',
        icon: <AiFillInstagram/>
    },
    twitterId: {
        link: 'https://twitter.com/',
        icon: <AiOutlineTwitter/>
    },
    imdbId: {
        link: 'https://www.imdb.com/title/',
        icon: <FaImdb/>
    }
};

const contentRuntimeLength = number => {
    const runtimeHours = floor((number / 60));
    const runtimeMinutes = round(((number / 60) - runtimeHours) * 60);

    return runtimeHours + ' ч. ' + runtimeMinutes + ' минут';
};

export default function WatchPage({ details, actorsStuff, relatedContent, externalIds }) {
    const isLoading = useLoading();
    const actorsScrollContainerRef = useRef(null);
    const relatedContentScrollContainerRef = useRef(null);


    const sortedExternalIds = compact(reverse(map(keys(omit(externalIds, 'id')), type => {
        if (externalIds[type]) {
            return { type, id: externalIds[type] }
        }
        return null
    })));

    useEffect(() =>{
        console.log('details', details);
        console.log('actorsStuff', actorsStuff);
        console.log('relatedContent', relatedContent);
        console.log('externalIds', externalIds);
        console.log('sortedExternalIds', sortedExternalIds);
    }, [details, actorsStuff, relatedContent, externalIds, sortedExternalIds])

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
                        <div className={styles.genresContainer}>
                            {map(details.genres, genre =>
                                <span key={genre.id} className={styles.genre}>
                                    {genre.name}
                                </span>
                            )}
                        </div>
                        <span className={styles.circle}/>
                        <span>{contentRuntimeLength(details.runtime)}</span>
                    </div>

                    <div className={styles.controlsContainer}>
                        <div className={styles.voteRatingContainer}>
                            <VotingPercentCircle voteAverage={details.voteAverage}/>
                            <p>Пользовательский <br/> рейтинг</p>
                        </div>
                        <div className={styles.voteCountContainer}>
                            <IconWrapper width={42} height={42}>
                                <FcLike/>
                            </IconWrapper>
                            <Number numberProps={details.voteCount} toFixed={0}/>
                        </div>
                    </div>

                    <div className={styles.overviewContainer}>
                        <h6>Содержание</h6>
                        {details.tagline &&
                            <p className={styles.tagLine}>«{details.tagline}»</p>
                        }
                        <p>{details.overview}</p>
                    </div>

                    <div className={styles.buttonsContainer}>
                        <button className={styles.watchOnlineButton}>
                            Смотреть онлайн
                            <IconWrapper width={32} height={32}>
                                <IoPlayCircle/>
                            </IconWrapper>
                        </button>
                    </div>

                    {/*<Image*/}
                    {/*    src={`https://image.tmdb.org/t/p/w780/gz66EfNoYPqHTYI4q9UEN4CbHRc.png`}*/}
                    {/*    alt='content_card'*/}
                    {/*    width={140}*/}
                    {/*    height={140}*/}
                    {/*    className={styles.posterImg}*/}
                    {/*    unoptimized*/}
                    {/*    loading='lazy'*/}
                    {/*/>*/}

                </div>

                <div className={styles.backdropContainer}>
                    <Image
                        src={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${details.backdropPath}`}
                        alt='backdrop_poster'
                        width={1400}
                        height={525}
                        className={styles.backdropImg}
                        unoptimized
                        loading='lazy'
                    />
                </div>
            </div>

            <div className={styles.contentUsefulInformation}>

                <div className={styles.contentUsefulInformationMain}>
                    <SectionTitle title='В главных ролях'/>
                    <div className={styles.actorsStuffContainer}>
                        <ScrollContainer
                            innerRef={actorsScrollContainerRef}
                            horizontal
                            className={styles.actorsStuffScrollLayout}
                        >
                            {map(actorsStuff, actor =>
                                <PersonCard
                                    key={actor.id}
                                    name={actor.name}
                                    knownForDepartment={actor.knownForDepartment}
                                    poster={actor.profilePath}
                                />
                            )}
                        </ScrollContainer>
                    </div>

                    <SectionTitle title='Рекомендации'/>
                    <div className={styles.relatedContentContainer}>
                        <ScrollContainer
                            innerRef={relatedContentScrollContainerRef}
                            horizontal
                            className={styles.relatedContentScrollLayout}
                        >
                            {map(relatedContent, content =>
                                <TrendsContentCard
                                    key={content.id}
                                    id={content.id}
                                    mediaType={content.mediaType}
                                    image={content.backdropPath}
                                    overview={content.overview}
                                    {...getPropsFromContentType[content.mediaType](content)}
                                />
                            )}
                        </ScrollContainer>
                    </div>
                </div>

                <div className={styles.contentUsefulInformationSecondary}>
                    <div className={styles.socialNetworksContainer}>
                        {map(sortedExternalIds, socialNetwork =>
                            <a key={socialNetwork.type} href={socialMediaTypes[socialNetwork.type] + socialNetwork.id}>
                                <IconWrapper width={32} height={32}>
                                    {socialMediaTypes[socialNetwork.type].icon}
                                </IconWrapper>
                            </a>
                        )}
                    </div>

                    <h6>Статус</h6>
                    <p>Выпущено</p>

                    <h6>Исходный язык</h6>
                    <p>английский</p>

                    <h6>Бюджет</h6>
                    <p>$170,000,000.00</p>

                    <h6>Сборы</h6>
                    <p>$1,424,000,000.00</p>
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

    const detailsMediaTypes = {
        movie: id => Movies.getContentDetails(id),
        tv: id => Serials.getContentDetails(id)
    };
    const externalIdsMediaTypes = {
        movie: id => Movies.getMovieExternalIds(id),
        tv: id => Serials.getSerialExternalIds(id)
    };

    const details = await detailsMediaTypes[query.type](query.id);
    const actorsStuff = await Common.getActorsStuff(query.type, query.id);
    const relatedContent = await Common.getRelatedContent(query.type, query.id);
    const externalIds = await externalIdsMediaTypes[query.type](query.id);

    return {
        props: {
            details,
            actorsStuff,
            relatedContent,
            externalIds
        }
    };
};

WatchPage.propTypes = {
    details: PropTypes.object.isRequired,
    actorsStuff: PropTypes.array.isRequired,
    relatedContent: PropTypes.array.isRequired,
    externalIds: PropTypes.object.isRequired
};
