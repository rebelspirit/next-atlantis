import styles from './slider.module.scss';
import Image from 'next/image';
import { FaImdb } from 'react-icons/fa';
import { FcLike } from 'react-icons/fc';
import { RiPlayListAddFill } from 'react-icons/ri';
import { IconWrapper } from '@components/UserInterfaces/IconWrapper/IconWrapper';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export const Slider = () => {

    const externalImageLoader = () => `https://image.tmdb.org/t/p/original/s56eyXy8rADp5DpZknfe2HXq4u4.jpg`;

    return (
        <div className={styles.sliderContainer}>
            <h2 className={styles.sliderTitle}>The Witcher</h2>
            <h6 className={styles.sliderTagline}>Худшие монстры - это те, кого мы создаём</h6>
            <div className={styles.sliderRate}>
                <p>
                    <IconWrapper width={32} height={32} className={styles.icon}>
                        <FaImdb/>
                    </IconWrapper>
                    <span>8.2</span>
                </p>

                <p>
                    <IconWrapper width={32} height={32}>
                        <FcLike/>
                    </IconWrapper>
                    <span>1041</span>
                </p>
            </div>

            <div className={styles.sliderButtonsContainer}>
                <button className={cx(styles.sliderButton, styles.sliderWatchButton)}>
                    Watch
                </button>
                <button className={cx(styles.sliderButton, styles.sliderWatchListButton)}>
                    <IconWrapper width={36} height={36}>
                        <RiPlayListAddFill/>
                    </IconWrapper>
                </button>
            </div>
            <div className={styles.sliderImgContainer}>
                <Image
                    loader={externalImageLoader}
                    src='slider_poster'
                    alt='slider_poster'
                    width={1600}
                    height={600}
                    className={styles.sliderImg}
                />
            </div>

        </div>
    )
}
