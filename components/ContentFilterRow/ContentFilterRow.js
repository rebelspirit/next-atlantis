import { map } from 'lodash';
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
    const size = useWindowSize();

    return (
        <section className={cx(styles.contentFilterRow, { 'isOpenSidebar': isOpenSidebar })}>
            <ContentFilterSlideButton className={styles.contentFilterSlideButtonLeft}>
                <IoIosArrowForward/>
            </ContentFilterSlideButton>
            <div className={styles.contentFilterButtonsContainer}>
                {map(moviesFilterButtonsData, data =>
                    <button
                        className={styles.contentFilterButton}
                        key={data.name}
                    >
                        {data.name}
                    </button>
                )}
            </div>
        </section>
    )
}
