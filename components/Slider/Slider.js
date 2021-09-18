import { useState, useEffect } from 'react';
import styles from 'components/Slider/slider.module.scss';
import { map, eq, find, findIndex, forEach } from 'lodash';
import Image from 'next/image';
import { FaImdb } from 'react-icons/fa';
import { FcLike } from 'react-icons/fc';
import { RiPlayListAddFill } from 'react-icons/ri';
import { IconWrapper } from '@components/UserInterfaces/IconWrapper/IconWrapper';
import { Number } from '@components/UserInterfaces/Springs/Number';
import classNames from 'classnames/bind';
import { Trail } from '@components/UserInterfaces/Springs/Trail';
import { Fade } from '@components/UserInterfaces/Springs/Fade';

const cx = classNames.bind(styles);

const _sliderCards = [
    { link: 'https://image.tmdb.org/t/p/original/s56eyXy8rADp5DpZknfe2HXq4u4.jpg', title: 'The Witcher', desc: 'Худшие монстры - это те, кого мы создаём', rank: 8.2, votes: 1041 },
    { link: 'https://image.tmdb.org/t/p/original/ktDJ21QQscbMNQfPpZBsNORxdDx.jpg', title: 'Lucifer', desc: 'The devil inside you', rank: 7.2, votes: 2041 },
    { link: 'https://image.tmdb.org/t/p/original/eyG9srihv68ScRdEbJZj66WT4O0.jpg', title: 'Flash', desc: 'Быстрейший среди живых!', rank: 6.8, votes: 560 },
];

export const Slider = () => {
    const [cards, setCards] = useState(map(_sliderCards, (card, index) => {
        if (eq(index, 0)) return { ...card, selected: true }
        return { ...card,  selected: false }
    }));

    const [animations, setAnimations] = useState([
        { type: 'fade', visible: true, timeOut: 100 },
        { type: 'trail', visible: true, timeOut: 700 }
    ])

    const selectedCard = find(cards, { selected: true });

    const changeSelectedCard = newSelectedCardIndex => {
        if (eq(newSelectedCardIndex, findIndex(cards,{ 'selected': true }))) return

        setAnimations(prevState => map(prevState, item => ({ ...item, visible: false })));

        setCards(prevState => map(prevState, (card, index) => {
            if (eq(index, newSelectedCardIndex)) return { ...card, selected: true }
            return { ...card,  selected: false }
        }));

        forEach(animations, item => {
            setTimeout(() => setAnimations(prevState => map(prevState, el => {
                if (eq(item.type, el.type)) return { ...el, visible: true }
                return el
            })), item.timeOut)
        });
    };

    // const sliderLoop = () => {
    //     const selectedIndex = findIndex(cards, { 'selected': true });
    //     console.log('selectedIndex', selectedIndex);
    //
    //     if (eq((selectedIndex + 1), cards.length)) {
    //         console.log('Last item in array');
    //         return setCards(prevState => map(prevState, (card, index) => {
    //             if (eq(index, 0)) return { ...card, selected: true }
    //             return { ...card,  selected: false }
    //         }));
    //     }
    //     console.log('New selected item index', (selectedIndex + 1));
    //     return setCards(prevState => map(prevState, (card, index) => {
    //         if (eq(index, (selectedIndex + 1))) return { ...card, selected: true }
    //         return { ...card,  selected: false }
    //     }))
    // }
    //
    // useEffect(() => {
    //     setInterval(() => sliderLoop(), 5000);
    //
    //     return () => clearInterval();
    // }, []);
    //
    // useEffect(() => console.log(cards), [cards])

    return (
        <div className={styles.sliderContainer}>
            <Trail show={find(animations, { type: 'trail' }).visible }>
                <h2 className={styles.sliderTitle}>{selectedCard.title}</h2>
                <h6 className={styles.sliderTagline}>{selectedCard.desc}</h6>
                <div className={styles.sliderRate}>
                    <p>
                        <IconWrapper width={32} height={32} className={cx(styles.icon, styles.iconBackground)}>
                            <FaImdb/>
                        </IconWrapper>
                        <Number numberProps={selectedCard.rank} toFixed={1}/>
                    </p>

                    <p>
                        <IconWrapper width={32} height={32}>
                            <FcLike/>
                        </IconWrapper>
                        <Number numberProps={selectedCard.votes} toFixed={0}/>
                    </p>
                </div>
            </Trail>
            <Trail show={true}>
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
                        {map(cards, (card, i) =>
                            <div
                                className={cx(styles.sliderNavBarCard, { 'selected': eq(i, findIndex(cards,{ 'selected': true })) })}
                                key={i}
                                onClick={() => changeSelectedCard(i)}
                            >
                                <Image
                                    src={card.link}
                                    alt='slider_card'
                                    width={130}
                                    height={80}
                                    className={styles.sliderNavBarImg}
                                    unoptimized={true}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </Trail>
                <div className={styles.sliderImgContainer}>
                    <Fade show={find(animations, { type: 'fade' }).visible}>
                        <Image
                            src={selectedCard.link}
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
