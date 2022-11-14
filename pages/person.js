import PropTypes from 'prop-types';
import styles from './index.module.scss';
import Image from 'next/image';
import { Fragment } from 'react';
import { split, map } from 'lodash';
import { useEffect, useRef } from 'react';
import { useLoading } from 'hooks/useLoading';
import { ShapeLoader } from '@components/common/ShapeLoader/ShapeLoader';
import { SectionTitle } from '@components/common/SectionTitle/SectionTitle';
import { Common } from 'Api/Common';
import { ContentCardAlt } from '@components/common/ContentCardAlt/ContentCardAlt';
import { SocialNetworks } from '@components/common/SocialNetworks/SocialNetworks';
import { ArrayUse } from 'lib/ArrayUse';
import ScrollContainer from 'react-indiana-drag-scroll';
import { PersonExtraInfoColumn } from '@components/common/PersonExtraInfoColumn/PersonExtraInfoColumn';
import { PersonKnownFor } from '@components/common/PerosonKnownFor/PersonKnownFor';

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

export default function PersonPage({ personDetails, personFameFor, personExternalIds }) {
    const isLoading = useLoading();
    const castScrollContainerRef = useRef(null);

    const splitBiography = split(personDetails.biography, '\n\n');

    const sortedExternalIds = ArrayUse.convertExternalIdsObjToArray(personExternalIds);

    useEffect(() => {
        console.log('personDetails', personDetails);
        console.log('personFameFor', personFameFor);
        console.log('personExternalIds', personExternalIds);
    }, [personDetails, personFameFor, personExternalIds])

    if (isLoading) {
        return <ShapeLoader/>
    }

    return (
        <div className={styles.contentPageContainer}>
            <div className={styles.personDetailsContainer}>
                <div className={styles.personDetailsMain}>
                    <SectionTitle title={personDetails.name}/>

                    <h3 className={styles.personDetailsSubTitle}>Биография</h3>

                    <p className={styles.personDetailsBiography}>
                        {map(splitBiography, (textLine, index) =>
                            <Fragment key={'line' + index}>
                                <span>{textLine}</span>
                                <br/>
                                <br/>
                            </Fragment>
                        )}
                    </p>

                    <SectionTitle title='Известность за'/>

                    <div className={styles.personDetailsCastContainer}>
                        <ScrollContainer
                            innerRef={castScrollContainerRef}
                            horizontal
                            className={styles.personDetailsScrollLayout}
                        >
                            {map(personFameFor.cast, content =>
                                <ContentCardAlt
                                    key={content.id}
                                    id={content.id}
                                    mediaType={content.mediaType}
                                    image={content.backdropPath}
                                    overview={content.overview}
                                    {...getPropsFromContentType[content.mediaType](content)}
                                />,
                            )}
                        </ScrollContainer>
                    </div>

                    <SectionTitle title='Актёрское искусство'/>

                    <PersonKnownFor
                        cast={personFameFor.cast}
                    />
                </div>
                <div className={styles.personDetailsSub}>
                    <div className={styles.personDetailsPosterContainer}>
                        <Image
                            className={styles.personDetailsPosterImg}
                            src={`https://image.tmdb.org/t/p/w780${personDetails.profilePath}`}
                            alt='person_card'
                            layout='fill'
                            objectFit='cover'
                            objectPosition='center'
                            loading='lazy'
                            unoptimized
                        />
                    </div>

                    <SocialNetworks
                        externalIds={sortedExternalIds}
                    />

                    <PersonExtraInfoColumn
                        data={personDetails}
                    />
                </div>
            </div>
        </div>
    )
};

export const getServerSideProps = async ({ query }) => {
    const personDetails = await Common.getPersonDetails(query.id);
    const personFameFor = await Common.getPersonFameFor(query.id);
    const personExternalIds = await Common.getPersonExternalIds(query.id);

    return {
        props: {
            personDetails,
            personFameFor,
            personExternalIds
        }
    };
};

PersonPage.propTypes = {
    personDetails: PropTypes.object.isRequired,
    personFameFor: PropTypes.object.isRequired,
    personExternalIds: PropTypes.object.isRequired,
};
