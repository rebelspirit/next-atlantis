import styles from './contentDetailsCard.module.scss';
import PropTypes from 'prop-types';
import Image from 'next/image';
import classNames from 'classnames/bind';
import { DateUse } from 'lib/DateUse';
import { floor, map, round } from 'lodash';
import { VotingPercentCircle } from '@components/common/VotingPercentCircle/VotingPercentCircle';
import { IconWrapper } from '@components/common/IconWrapper/IconWrapper';
import { FcLike } from 'react-icons/fc';
import { Number } from 'animations/Number';
import { IoPlayCircle } from 'react-icons/io5';
import { RiArrowGoBackLine } from 'react-icons/ri';
import { StringUse } from 'lib/StringUse';

const cx = classNames.bind(styles);

const contentRuntimeLength = number => {
    const runtimeHours = floor((number / 60));
    const runtimeMinutes = round(((number / 60) - runtimeHours) * 60);

    return runtimeHours + ' ч. ' + runtimeMinutes + ' минут';
};

export const ContentDetailsCard = ({
    isShowPlayer,
    onClickShowPlayer,
    onClickClosePlayer,
    title,
    originalTitle,
    posterPath,
    backdropPath,
    releaseDate,
    genres,
    runtime,
    voteAverage,
    voteCount,
    tagline,
    overview,
    iframeSrc
}) => {

    const taglineString = StringUse.fixTaglineString(tagline);

    return (
        <div className={styles.contentDetailsContainer}>
            <div className={cx(styles.contentDetailsWrapper, { 'rotate': isShowPlayer })}>
                <div className={cx(styles.contentDetailsFront, { 'rotate': isShowPlayer })}>
                    <div className={styles.posterContainer}>
                        <Image
                            src={`https://image.tmdb.org/t/p/w780${posterPath}`}
                            alt='content_card'
                            width={280}
                            height={430}
                            className={styles.posterImg}
                            unoptimized
                            loading='lazy'
                        />
                    </div>

                    <div className={styles.contentDescriptionContainer}>
                        <h1 className={styles.title}>{title}</h1>
                        <p className={styles.originalTitle}>{originalTitle}</p>

                        <div className={styles.contentFeaturesContainer}>
                            <span>{DateUse.format(releaseDate, 'YYYY-MM-DD', 'll')}</span>
                            <span className={styles.circle}/>
                            <div className={styles.genresContainer}>
                                {map(genres, genre =>
                                        <span key={genre.id} className={styles.genre}>
                                    {genre.name}
                                </span>
                                )}
                            </div>
                            <span className={styles.circle}/>
                            <span>{contentRuntimeLength(runtime)}</span>
                        </div>

                        <div className={styles.controlsContainer}>
                            <div className={styles.voteRatingContainer}>
                                <VotingPercentCircle voteAverage={voteAverage}/>
                                <p>Пользовательский <br/> рейтинг</p>
                            </div>
                            <div className={styles.voteCountContainer}>
                                <IconWrapper width={42} height={42}>
                                    <FcLike/>
                                </IconWrapper>
                                <Number numberProps={voteCount} toFixed={0}/>
                            </div>
                        </div>

                        <div className={styles.overviewContainer}>
                            <h6>Содержание</h6>
                            {tagline &&
                                <p className={styles.tagLine}>«{taglineString}»</p>
                            }
                            <p>{overview}</p>
                        </div>

                        <div className={styles.buttonsContainer}>
                            <button
                                className={styles.watchOnlineButton}
                                onClick={onClickShowPlayer}
                            >
                                Смотреть онлайн
                                <IconWrapper width={32} height={32}>
                                    <IoPlayCircle/>
                                </IconWrapper>
                            </button>
                        </div>
                    </div>

                    <div className={styles.backdropContainer}>
                        <Image
                            src={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${backdropPath}`}
                            alt='backdrop_poster'
                            width={1400}
                            height={525}
                            className={styles.backdropImg}
                            unoptimized
                            loading='lazy'
                        />
                    </div>
                </div>
                <div className={cx(styles.contentDetailsBack, { 'rotate': isShowPlayer })}>
                    <div className={styles.contentDetailsClosePlayerButton} onClick={onClickClosePlayer}>
                        <IconWrapper width={21} height={21}>
                            <RiArrowGoBackLine/>
                        </IconWrapper>
                    </div>

                    <iframe
                        src={iframeSrc}
                        title='movie'
                        scrolling='no'
                        frameBorder='0'
                        allowFullScreen
                    />
                </div>
            </div>
        </div>
    )
};

ContentDetailsCard.propTypes = {
    isShowPlayer: PropTypes.bool.isRequired,
    onClickShowPlayer: PropTypes.func.isRequired,
    onClickClosePlayer: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    originalTitle: PropTypes.string.isRequired,
    posterPath: PropTypes.string.isRequired,
    backdropPath: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    runtime: PropTypes.number.isRequired,
    voteAverage: PropTypes.number.isRequired,
    voteCount: PropTypes.number.isRequired,
    tagline: PropTypes.string,
    overview: PropTypes.string,
    iframeSrc: PropTypes.string,
};
