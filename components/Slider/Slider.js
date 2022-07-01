import { useState, useEffect, useRef } from 'react';
import styles from 'components/Slider/slider.module.scss';
import { map, eq, find, findIndex, forEach } from 'lodash';
import Image from 'next/image';
import { FaImdb } from 'react-icons/fa';
import { FcLike } from 'react-icons/fc';
import { RiPlayListAddFill } from 'react-icons/ri';
import { IconWrapper } from '@components/UI/IconWrapper/IconWrapper';
import { Number } from 'animations/Number';
import classNames from 'classnames/bind';
import { Trail } from 'animations/Trail';
import { Fade } from 'animations/Fade';

const cx = classNames.bind(styles);

const resetTimeout = ref => {
    if (ref.current) clearTimeout(ref.current);
};

const changeSelectedCard = (selectedCardIndex, cards, animations, setAnimations, setCards) => {
    if (eq(selectedCardIndex, findIndex(cards,{ 'selected': true }))) return

    setAnimations(prevState => map(prevState, item => ({ ...item, visible: false })));

    setCards(prevState => map(prevState, (card, index) => {
        if (eq(index, selectedCardIndex)) return { ...card, selected: true }
        return { ...card,  selected: false }
    }));

    forEach(animations, item => {
        setTimeout(() => setAnimations(prevState => map(prevState, el => {
            if (eq(item.type, el.type)) return { ...el, visible: true }
            return el
        })), item.timeOut)
    });
};

// TODO: Fix problem on FadeOut effect. Title and description changed to new values when FadeOut started. Need save old value for FadeOut and after then start FadeIn with new values.
export const Slider = ({ slides }) => {
    const timeoutRef = useRef(null);

    const [currentIndex, setCurrentIndex] = useState(0);

    const [cards, setCards] = useState(map(slides, (card, index) => {
        return eq(index, currentIndex)
            ? { ...card, selected: true }
            : { ...card,  selected: false }
    }));

    const [animations, setAnimations] = useState([
        { type: 'fade', visible: true, timeOut: 100 },
        { type: 'trail', visible: true, timeOut: 700 }
    ]);

    const selectedCard = find(cards, { selected: true });

    const isShowTrailAnimation = find(animations, { type: 'trail' }).visible;
    const isShowFadeAnimation = find(animations, { type: 'fade' }).visible;

    useEffect(() => {
        resetTimeout(timeoutRef);
        timeoutRef.current = setTimeout(() =>
            setCurrentIndex(prevIndex => eq(prevIndex, (cards.length - 1)) ? 0 : prevIndex + 1), 10000
        );

        return () => resetTimeout(timeoutRef);
    }, [currentIndex]);

    useEffect(() => changeSelectedCard(currentIndex, cards, animations, setAnimations, setCards), [currentIndex]);

    return (
        <div className={styles.sliderContainer}>
            <Trail show={isShowTrailAnimation}>
                <h2 className={styles.sliderTitle}>{selectedCard.title}</h2>
                <p className={styles.sliderOverview}>{selectedCard.overview}</p>
                <div className={styles.sliderRate}>
                    <p>
                        <IconWrapper width={32} height={32} className={cx(styles.icon, styles.iconBackground)}>
                            <FaImdb/>
                        </IconWrapper>
                        <Number numberProps={selectedCard.vote_average} toFixed={1}/>
                    </p>

                    <p>
                        <IconWrapper width={32} height={32}>
                            <FcLike/>
                        </IconWrapper>
                        <Number numberProps={selectedCard.vote_count} toFixed={0}/>
                    </p>
                </div>
            </Trail>
            <Trail show={true}>
                <div className={styles.sliderFooterContainer}>
                    <div className={styles.sliderButtonsContainer}>
                        <button className={cx(styles.sliderButton, styles.sliderWatchButton)}>
                            Перейти
                        </button>
                        <button className={cx(styles.sliderButton, styles.sliderWatchListButton)}>
                            <IconWrapper width={36} height={36}>
                                <RiPlayListAddFill/>
                            </IconWrapper>
                        </button>
                    </div>

                    <div className={styles.sliderNavBarContainer}>
                        {map(cards, (card, i) =>
                            <div
                                className={cx(styles.sliderNavBarDot, { 'selected': eq(i, findIndex(cards,{ 'selected': true })), 'pulse': eq(i, findIndex(cards,{ 'selected': true })) })}
                                key={i}
                                onClick={() => setCurrentIndex(i)}
                            />
                        )}
                    </div>
                </div>
            </Trail>
                <div className={styles.sliderImgContainer}>
                    <Fade show={isShowFadeAnimation}>
                        <Image
                            src={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${selectedCard.backdrop_path}`}
                            alt='slider_poster'
                            width={1600}
                            height={600}
                            className={styles.sliderImg}
                            unoptimized={true}
                        />
                    </Fade>
                </div>
        </div>
    )
}
