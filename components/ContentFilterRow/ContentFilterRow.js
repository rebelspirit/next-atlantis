import { map, filter, floor, sum } from 'lodash';
import { useSelector } from 'react-redux';
import styles from '@components/ContentFilterRow/contentFilterRow.module.scss';
import { moviesFilterButtonsData } from '@components/ContentFilterRow/contentFilterConfig';
import { useWindowSize } from 'hooks/useWindowSize';
import classNames from 'classnames/bind';
import { ContentFilterSlideButton } from '@components/ContentFilterRow/ContentFilterSlideButton';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useEffect, useRef, useState } from 'react';

const cx = classNames.bind(styles);

export const ContentFilterRow = () => {
    const { isOpenSidebar } = useSelector(store => store.sidebar);

    const nodes = new Map();

    const container = useRef(null);
    const [nodesWidth, setNodesWidth] = useState(null);

    const size = useWindowSize();

    const checkNodes = nodes => sum(map(filter([...nodes.values()], node => node != null), node => {
        const margin = parseFloat(window.getComputedStyle(node).marginLeft) + parseFloat(window.getComputedStyle(node).marginRight);

        return node.getBoundingClientRect().width + margin;
    }));

    useEffect(() => setNodesWidth(floor(checkNodes(nodes))), [nodes.size]);

    useEffect(() => console.log(nodes), [nodes]);
    useEffect(() => console.log('nodesWidth', nodesWidth), [nodesWidth]);


    return (
        <section
            ref={container}
            className={cx(styles.contentFilterRow, { 'isOpenSidebar': isOpenSidebar })}>
            <ContentFilterSlideButton className={styles.contentFilterSlideButtonLeft}>
                <IoIosArrowForward/>
            </ContentFilterSlideButton>
            <div className={styles.contentFilterButtonsContainer}>
                {map(moviesFilterButtonsData, button =>
                    <button
                        ref={elem => nodes.set(button.name, elem)}
                        className={styles.contentFilterButton}
                        key={button.name}
                    >
                        {button.name}
                    </button>
                )}
            </div>
            <ContentFilterSlideButton className={styles.contentFilterSlideButtonRight}>
                <IoIosArrowBack/>
            </ContentFilterSlideButton>
        </section>
    )
}
