import styles from 'components/Slider/slider.module.scss';
import { map, eq } from 'lodash';
import Image from 'next/image';
import { FaImdb } from 'react-icons/fa';
import { FcLike } from 'react-icons/fc';
import { RiPlayListAddFill } from 'react-icons/ri';
import { IconWrapper } from '@components/UserInterfaces/IconWrapper/IconWrapper';
import { Number } from '@components/UserInterfaces/Springs/Number';
import classNames from 'classnames/bind';
import { Trail } from '@components/UserInterfaces/Springs/Trail';
import { useState } from 'react';

const cx = classNames.bind(styles);

const _sliderNavButtons = [
    { link: 'https://image.tmdb.org/t/p/original/s56eyXy8rADp5DpZknfe2HXq4u4.jpg' },
    { link: 'https://image.tmdb.org/t/p/w1280/ktDJ21QQscbMNQfPpZBsNORxdDx.jpg' },
    { link: 'https://image.tmdb.org/t/p/w1280/nDLylQOoIazGyYuWhk21Yww5FCb.jpg' },
]
export const Slider = () => {

    const [sliderNavButtons, setSliderNavButtons] = useState(map(_sliderNavButtons, item => ({ ...item, selected: false })));
    
    const externalImageLoader = path => path;

    return (
        <div className={styles.sliderContainer}>
            <Trail open={true}>
                <h2 className={styles.sliderTitle}>The Witcher</h2>
                <h6 className={styles.sliderTagline}>Худшие монстры - это те, кого мы создаём</h6>
                <div className={styles.sliderRate}>
                    <p>
                        <IconWrapper width={32} height={32} className={cx(styles.icon, styles.iconBackground)}>
                            <FaImdb/>
                        </IconWrapper>
                        <Number numberProps={8.2} toFixed={1}/>
                    </p>

                    <p>
                        <IconWrapper width={32} height={32}>
                            <FcLike/>
                        </IconWrapper>
                        <Number numberProps={1041} toFixed={0}/>
                    </p>
                </div>

                <div className={styles.sliderFooterContainer}>
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
                    <div className={styles.sliderNavBarContainer}>
                        {map(sliderNavButtons, (card, i) =>
                            <div className={cx(styles.sliderNavBarCard, { 'selected': eq(i, 0) })} key={i}>
                                <Image
                                    loader={() => externalImageLoader(card.link)}
                                    src='slider_card'
                                    alt='slider_card'
                                    width={130}
                                    height={80}
                                    className={styles.sliderNavBarImg}
                                />
                            </div>
                        )}
                        {/*<div className={cx(styles.sliderNavBarCard, { 'selected': false })}>*/}
                        {/*    <Image*/}
                        {/*        loader={() => externalImageLoader(`https://image.tmdb.org/t/p/w1280/ktDJ21QQscbMNQfPpZBsNORxdDx.jpg`)}*/}
                        {/*        src='slider_card'*/}
                        {/*        alt='slider_card'*/}
                        {/*        width={130}*/}
                        {/*        height={80}*/}
                        {/*        className={styles.sliderNavBarImg}*/}
                        {/*    />*/}
                        {/*</div>*/}
                        {/*<div className={cx(styles.sliderNavBarCard, { 'selected': false })}>*/}
                        {/*    <Image*/}
                        {/*        loader={() => externalImageLoader(`https://image.tmdb.org/t/p/w1280/nDLylQOoIazGyYuWhk21Yww5FCb.jpg`)}*/}
                        {/*        src='slider_card'*/}
                        {/*        alt='slider_card'*/}
                        {/*        width={130}*/}
                        {/*        height={80}*/}
                        {/*        className={styles.sliderNavBarImg}*/}
                        {/*    />*/}
                        {/*</div>*/}
                    </div>
                </div>
            </Trail>
            <div className={styles.sliderImgContainer}>
                <Image
                    loader={() => externalImageLoader(`https://image.tmdb.org/t/p/original/s56eyXy8rADp5DpZknfe2HXq4u4.jpg`)}
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
