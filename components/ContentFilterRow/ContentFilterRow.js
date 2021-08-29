import { useEffect, useRef, useState } from 'react';
import { map, filter, floor, sum } from 'lodash';
import { useSelector } from 'react-redux';
import styles from '@components/ContentFilterRow/contentFilterRow.module.scss';
import { moviesFilterButtonsData } from '@components/ContentFilterRow/contentFilterConfig';
import { useWindowSize } from 'hooks/useWindowSize';
import classNames from 'classnames/bind';
import { ContentFilterSlideButton } from '@components/ContentFilterRow/ContentFilterSlideButton';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const cx = classNames.bind(styles);

export const ContentFilterRow = () => {
    const { isOpenSidebar } = useSelector(store => store.sidebar);

    const nodes = new Map();

    const container = useRef(null);

    const [nodesWidth, setNodesWidth] = useState(null);
    const [navigation, setNavigation] = useState({
        startButtonDisplay: false,
        endButtonDisplay: false,
        offset: 0
    });

    const size = useWindowSize();

    const checkNodes = nodes => sum(map(filter([...nodes.values()], node => node != null), node => {
        const margin = parseFloat(window.getComputedStyle(node).marginLeft) + parseFloat(window.getComputedStyle(node).marginRight);

        return node.getBoundingClientRect().width + margin;
    }));

    const navigationHandlerRules = (size, containerWidth, nodesWidth) => {
        const { width: screenWidth } = size;
        console.log({ screenWidth, containerWidth, nodesWidth, offset: nodesWidth - containerWidth });

        if (nodesWidth > containerWidth) {
            setNavigation({
                ...navigation,
                endButtonDisplay: true,
                offset: nodesWidth - containerWidth
            })
        }
    }

    const rightButtonHandler = step => {
        console.log('step', step);
        container.current.scrollLeft += step

        setNavigation({
            ...navigation,
            endButtonDisplay: false,
            startButtonDisplay: true
        })
    }
    const leftButtonHandler = step => {
        console.log('step', step);
        container.current.scrollLeft = -container.current.offsetWidth

        setNavigation({
            ...navigation,
            endButtonDisplay: true,
            startButtonDisplay: false
        })
    }

    useEffect(() => setNodesWidth(floor(checkNodes(nodes))), [isOpenSidebar]);
    useEffect(() => {
        if (size.width) {
            navigationHandlerRules(size, container.current.offsetWidth, nodesWidth)
        }
    }, [size, isOpenSidebar]);

    return (
        <section
            //ref={container}
            className={cx(styles.contentFilterRow, { 'isOpenSidebar': isOpenSidebar })}>
            <ContentFilterSlideButton className={cx(styles.contentFilterSlideButtonLeft,  { 'visible': navigation.startButtonDisplay })} callback={() => leftButtonHandler(navigation.offset)}>
                <IoIosArrowBack />
            </ContentFilterSlideButton>
            <div className={cx(styles.contentFilterButtonsContainer, { 'rightOffset': navigation.endButtonDisplay, 'leftOffset': navigation.startButtonDisplay })}
                 ref={container}
                 // style={{ transform: `translateX(${navigation.offset}px)` }}
                >
                {map(moviesFilterButtonsData, button =>
                    <div
                        ref={elem => nodes.set(button.name, elem)}
                        className={styles.contentFilterButton}
                        key={button.name}
                    >
                        {button.name}
                    </div>
                )}
            </div>
            <ContentFilterSlideButton className={cx(styles.contentFilterSlideButtonRight, { 'visible': navigation.endButtonDisplay })} callback={() => rightButtonHandler(navigation.offset)}>
                <IoIosArrowForward />
            </ContentFilterSlideButton>
        </section>
    )
}
