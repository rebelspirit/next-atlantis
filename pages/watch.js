import styles from 'pages/index.module.scss';
import PropTypes from 'prop-types';
import { map, omit, keys, reverse, compact, eq, some, find, last } from 'lodash';
import { Movies } from 'Api/Movies';
import { Serials } from 'Api/Serials';
import { useLoading } from 'hooks/useLoading';
import { ShapeLoader } from '@components/common/ShapeLoader/ShapeLoader';
import { useEffect, useRef, useState } from 'react';
import { IconWrapper } from '@components/common/IconWrapper/IconWrapper';
import { FaImdb } from 'react-icons/fa';
import { AiFillInstagram, AiFillFacebook, AiOutlineTwitter } from 'react-icons/ai';
import { Common } from 'Api/Common';
import { SectionTitle } from '@components/common/SectionTitle/SectionTitle';
import { PersonCard } from '@components/common/PersonCard/PersonCard';
import ScrollContainer from 'react-indiana-drag-scroll';
import { TrendsContentCard } from '@components/common/TrendsContentCard/TrendsContentCard';
import classNames from 'classnames/bind';
import { ContentDetailsCard } from '@components/common/ContentDetailsCard/ContentDetailsCard';
import { CollectionCard } from '@components/common/CollectionCard/CollectionCard';
import { ExtraInfoColumn } from '@components/common/ExtraInfoColumn/ExtraInfoColumn';
import { SeasonCard } from '@components/common/SeasonCard/SeasonCard';
import Link from 'next/link';

const cx = classNames.bind(styles);

const getMovieProps = item => ({
    title: item.title,
    originalTitle: item.originalTitle,
    date: item.releaseDate
});

const getSerialProps = item => ({
    title: item.name,
    originalTitle: item.originalName,
    date: item.firstAirDate,
    numberOfSeasons: item.numberOfSeasons,
    numberOfEpisodes: item.numberOfEpisodes
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

const seasonsSectionTitleByStatus = {
    'Ended': 'Последний сезон',
    'Returning Series': 'Текущий сезон'
};

export default function WatchPage({ details, actorsStuff, collection, relatedContent, externalIds, countries }) {
    const isLoading = useLoading();
    const actorsScrollContainerRef = useRef(null);
    const relatedContentScrollContainerRef = useRef(null);

    const [isShowPlayer, setShowPlayer] = useState(false);

    const productionCountries = map(details.productionCountries, country => {
        return find(countries, { iso31661: country.iso31661 });
    });

    const sortedExternalIds = compact(reverse(map(keys(omit(externalIds, 'id')), type => {
        if (externalIds[type]) {
            return { type, id: externalIds[type] }
        }
        return null
    })));

    const isExternalIdsSeparateLineExists = some(sortedExternalIds, { type: 'imdbId' }) && sortedExternalIds.length > 1;
    const isShowContentCardCollection = collection && eq(details.contentType, 'movie');
    const isShowContentCardSeason = details.seasons && eq(details.contentType, 'tv');

    const onClickShowPlayer = () => setShowPlayer(true);
    const onClickClosePlayer = () => setShowPlayer(false);

    useEffect(() =>{
        console.log('details', details);
        // console.log('actorsStuff', actorsStuff);
        // console.log('collection', collection);
        // console.log('relatedContent', relatedContent);
        // console.log('externalIds', externalIds);
        // console.log('sortedExternalIds', sortedExternalIds);
        // console.log('countries', countries);
    }, [details, actorsStuff, collection, relatedContent, externalIds, countries, sortedExternalIds]);

    if (isLoading) {
        return <ShapeLoader/>
    }

    return (
        <div className={styles.contentPageContainer}>
            <ContentDetailsCard
                type={details.contentType}
                isShowPlayer={isShowPlayer}
                onClickShowPlayer={onClickShowPlayer}
                onClickClosePlayer={onClickClosePlayer}
                posterPath={details.posterPath}
                backdropPath={details.backdropPath}
                genres={details.genres}
                runtime={details.runtime}
                voteAverage={details.voteAverage}
                voteCount={details.voteCount}
                tagline={details.tagline}
                overview={details.overview}
                iframeSrc={details.iframeSrc}
                {...getPropsFromContentType[details.contentType](details)}
            />

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
                                    character={actor.character}
                                    knownForDepartment={actor.knownForDepartment}
                                    poster={actor.profilePath}
                                    isShowCharacterName
                                />
                            )}
                        </ScrollContainer>
                    </div>

                    {isShowContentCardCollection &&
                        <>
                            <SectionTitle title='Входит в коллекцию'/>
                            <CollectionCard
                                collection={collection}
                            />
                        </>
                    }

                    {isShowContentCardSeason &&
                        <div className={styles.seasonCardContainer}>
                            <SectionTitle title={seasonsSectionTitleByStatus[details.status]}/>

                            <SeasonCard
                                season={last(details.seasons)}
                                episodesCount={last(details.seasons).episodeCount}
                                serialId={details.id}
                                serialName={details.name}
                            />

                            <Link href={`/seasons/?id=${details.id}&seasonsLength=${details.seasonCount}`}>
                                <button className={styles.transparentButton}>Смотреть все сезоны</button>
                            </Link>
                        </div>
                    }

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
                            <a
                                className={cx({ 'separateLine': isExternalIdsSeparateLineExists })}
                                key={socialNetwork.type}
                                href={socialMediaTypes[socialNetwork.type]?.link + socialNetwork.id}
                                target='_blank'
                            >
                                <IconWrapper width={32} height={32}>
                                    {socialMediaTypes[socialNetwork.type]?.icon}
                                </IconWrapper>
                            </a>
                        )}
                    </div>

                    <ExtraInfoColumn
                        content={{ ...details, productionCountries }}
                    />
                </div>

            </div>
        </div>
    )
}

export const getServerSideProps = async ({ query }) => {

    const detailsMediaTypeRequest = {
        movie: id => Movies.getContentDetails(id),
        tv: id => Serials.getContentDetails(id)
    };

    const externalIdsMediaTypeRequest = {
        movie: id => Movies.getMovieExternalIds(id),
        tv: id => Serials.getSerialExternalIds(id)
    };

    const getCollectionRequest = (type, details) => {
        if (eq(type, 'movie')) {
            const { belongsToCollection } = details;

            if (belongsToCollection) {
                return Common.getCollection(belongsToCollection.id)
            }
        }
        return null;
    };

    const details = await detailsMediaTypeRequest[query.type](query.id);
    const actorsStuff = await Common.getActorsStuff(query.type, query.id);
    const collection = await getCollectionRequest(query.type, details);
    const relatedContent = await Common.getRelatedContent(query.type, query.id);
    const externalIds = await externalIdsMediaTypeRequest[query.type](query.id);
    const languages = await Common.getLanguages();
    const countries = await Common.getCountries();

    return {
        props: {
            details,
            actorsStuff,
            collection,
            relatedContent,
            externalIds,
            languages,
            countries
        }
    };
};

WatchPage.propTypes = {
    details: PropTypes.object.isRequired,
    actorsStuff: PropTypes.array.isRequired,
    collection: PropTypes.object,
    relatedContent: PropTypes.array.isRequired,
    externalIds: PropTypes.object.isRequired,
    languages: PropTypes.array.isRequired,
    countries: PropTypes.array.isRequired,
};
