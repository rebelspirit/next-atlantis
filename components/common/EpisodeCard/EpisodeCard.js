import styles from './episodeCard.module.scss';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { map, round } from 'lodash';
import { DateUse } from 'lib/DateUse';
import { StringUse } from 'lib/StringUse';
import { IconWrapper } from '@components/common/IconWrapper/IconWrapper';
import { HiChartSquareBar } from 'react-icons/hi';
import { useState, useRef } from 'react';
import classNames from 'classnames/bind';
import ScrollContainer from 'react-indiana-drag-scroll';
import { PersonCardSmall } from '@components/common/PersonCardSmall/PersonCardSmall';
import { ArrayUse } from 'lib/ArrayUse';

const cx = classNames.bind(styles);

const guestsRequiredFields = [ 'name', 'profilePath', 'character' ];

export const EpisodeCard = ({ name, overview, episodeNumber, airDate, voteAverage, runtime, guests, posterPath, images }) => {
    const actorsScrollContainerRef = useRef(null);
    const imagesScrollContainerRef = useRef(null);

    const [opened, setOpened] = useState(false);

    const formattedDate = DateUse.format(airDate, 'YYYY-MM-DD', 'll');

    const roundedVoteAverage = round(voteAverage, 2);

    const calculatedRuntime = StringUse.runtimeLengthString(runtime);

    const checkedGuestsArray = ArrayUse.collectionHasRequiredFields(guests, guestsRequiredFields);

    const onClickToggleCard = () => setOpened(prev => !prev);

    return (
        <div className={cx(styles.episodeCardContainer, { 'opened': opened })} onClick={onClickToggleCard}>
            <div className={styles.episodeCardTop}>
                <div className={styles.episodeCardPosterContainer}>
                    <Image
                        src={`https://image.tmdb.org/t/p/w780${posterPath}`}
                        alt='movie_card'
                        layout='fill'
                        className={cx(styles.episodeCardPoster, { 'opened': opened })}
                        objectFit='contain'
                        objectPosition='left top'
                        loading='lazy'
                        unoptimized
                    />
                </div>

                <div className={styles.episodeCardDescription}>
                    <div className={styles.episodeCardTitleContainer}>
                        <div className={styles.episodeCardVoteAverage}>
                            <IconWrapper width={24} height={24}>
                                <HiChartSquareBar/>
                            </IconWrapper>

                            {roundedVoteAverage}
                        </div>
                        <h3>{name}</h3>
                    </div>
                    <p className={styles.episodeCardDateAndEpisodes}>
                        <span>{'Серия ' + episodeNumber}</span>
                        <span className={styles.circle}/>
                        <span>{formattedDate}</span>
                        <span className={styles.circle}/>
                        <span>{calculatedRuntime}</span>
                    </p>

                    <p className={styles.episodeCardOverview}>
                        {overview}
                    </p>
                </div>
            </div>

            <div className={styles.episodeCardBottom}>
                <h4 className={styles.episodeCardBottomLabel}>Актерский состав</h4>

                <ScrollContainer
                    innerRef={actorsScrollContainerRef}
                    horizontal
                    className={styles.episodeCardScrollLayout}
                >
                    {map(checkedGuestsArray, guest =>
                        <PersonCardSmall
                            key={guest.id}
                            name={guest.originalName}
                            character={guest.character}
                            knownForDepartment={guest.knownForDepartment}
                            poster={guest.profilePath}
                            isShowCharacterName
                        />
                    )}
                </ScrollContainer>

                <h4 className={styles.episodeCardBottomLabel}>Изображения эпизода</h4>

                <ScrollContainer
                    innerRef={imagesScrollContainerRef}
                    horizontal
                    className={styles.episodeCardScrollLayout}
                >
                    {map(images.stills, image =>
                        <div className={styles.episodeCardImgContainer}>
                            <Image
                                src={`https://image.tmdb.org/t/p/w780${image.filePath}`}
                                alt='episode_image'
                                layout='fill'
                                objectFit='cover'
                                objectPosition='top center'
                                className={styles.episodeCardImg}
                                unoptimized
                            />
                        </div>
                    )}
                </ScrollContainer>
            </div>
        </div>
    )
};
