import styles from 'pages/index.module.scss';
import PropTypes from 'prop-types';
import { map, omit, keys, reverse, compact, pick, some } from 'lodash';
import { Movies } from 'Api/Movies';
import { Serials } from 'Api/Serials';
import { useLoading } from 'hooks/useLoading';
import { SapeLoader } from '@components/common/ShapeLoader/ShapeLoader';
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
import { ContentDetailsCard } from '@components/ContentDetailsCard/ContentDetailsCard';

const cx = classNames.bind(styles);

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

export default function WatchPage({ details, actorsStuff, relatedContent, externalIds }) {
    const isLoading = useLoading();
    const actorsScrollContainerRef = useRef(null);
    const relatedContentScrollContainerRef = useRef(null);

    const [isShowPlayer, setShowPlayer] = useState(false);

    const sortedExternalIds = compact(reverse(map(keys(omit(pick(externalIds, ['imdbId', 'twitterId', 'instagramId', 'facebookId' ]), 'id')), type => {
        if (externalIds[type]) {
            return { type, id: externalIds[type] }
        }
        return null
    })));

    const isExternalIdsSeparateLineExists = some(sortedExternalIds, { type: 'imdbId' }) && sortedExternalIds.length > 1;

    const onClickShowPlayer = () => setShowPlayer(true);
    const onClickClosePlayer = () => setShowPlayer(false);

    useEffect(() =>{
        // console.log('details', details);
        console.log('actorsStuff', actorsStuff);
        //console.log('relatedContent', relatedContent);
        // console.log('externalIds', externalIds);
        // console.log('sortedExternalIds', sortedExternalIds);
    }, [details, actorsStuff, relatedContent, externalIds, sortedExternalIds]);

    if (isLoading) {
        return <SapeLoader/>
    }

    return (
        <div className={styles.contentPageContainer}>
            <ContentDetailsCard
                isShowPlayer={isShowPlayer}
                onClickShowPlayer={onClickShowPlayer}
                onClickClosePlayer={onClickClosePlayer}
                title={details.title}
                originalTitle={details.originalTitle}
                posterPath={details.posterPath}
                backdropPath={details.backdropPath}
                releaseDate={details.releaseDate}
                genres={details.genres}
                runtime={details.runtime}
                voteAverage={details.voteAverage}
                voteCount={details.voteCount}
                tagline={details.tagline}
                overview={details.overview}
                iframeSrc={details.iframeSrc}
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
