import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './trendsRow.module.scss';
import ScrollContainer from 'react-indiana-drag-scroll';
import { map, eq } from 'lodash';
import { TrendsContentCard } from '@components/common/TrendsContentCard/TrendsContentCard';
import { TrendsRowButtons } from '@components/TrendsRow/TrendsRowButtons';
import { Trail } from 'animations/Trail';

const getMovieProps = item => ({
    title: item.title,
    date: item.releaseDate
});

const getSerialProps = item => ({
    title: item.name,
    date: item.firstAirDate
});

const getPropsFromContentType = {
    movie: getMovieProps,
    tv: getSerialProps,
};

export const TrendsRow = ({ mappedContent, type, showTrail }) => {
    const scrollContainerRef = useRef(null);
    const [disabledRowButtons, setDisableRowButtons] = useState({
        scrollRightButton: { disabled: true },
        scrollLeftButton: { disabled: false }
    });

    const disableRowButtons = ref => {
        return () => {
            const { scrollLeft, scrollWidth, clientWidth } = ref.current;
            const maxScrollValue = (scrollWidth - clientWidth);

            if (eq(scrollLeft, maxScrollValue)) {
                return setDisableRowButtons(prev => ({ ...prev, scrollLeftButton: { disabled: true } }));
            }
            if (eq(scrollLeft, 0)) {
                return setDisableRowButtons(prev => ({ ...prev, scrollRightButton: { disabled: true } }));
            }
        }
    };

    const activateRowButtons = ref => {
        return () => {
            const { scrollLeft, scrollWidth, clientWidth } = ref.current;
            const maxScrollValue = (scrollWidth - clientWidth);

            const { scrollRightButton, scrollLeftButton } = disabledRowButtons;

            if (scrollLeft > 0 && scrollRightButton.disabled) {
                return setDisableRowButtons(prev => ({ ...prev, scrollRightButton: { disabled: false } }));
            }
            if (scrollLeft < maxScrollValue && scrollLeftButton.disabled) {
                return setDisableRowButtons(prev => ({ ...prev, scrollLeftButton: { disabled: false } }));
            }
        }
    };

    return (
        <div className={styles.trendsRow}>
            <Trail show={showTrail}>
                <ScrollContainer
                    innerRef={scrollContainerRef}
                    className={styles.trendsRowContainer}
                    horizontal
                    onEndScroll={disableRowButtons(scrollContainerRef)}
                    onStartScroll={activateRowButtons(scrollContainerRef)}
                >
                    {map(mappedContent, content =>
                        <TrendsContentCard
                            key={content.id}
                            id={content.id}
                            mediaType={type}
                            image={content.backdropPath}
                            overview={content.overview}
                            {...getPropsFromContentType[type](content)}
                        />
                    )}
                </ScrollContainer>
            </Trail>

            <TrendsRowButtons containerRef={scrollContainerRef} disabledRowButtons={disabledRowButtons}/>
        </div>
    )
};
TrendsRow.propTypes = {
    mappedContent: PropTypes.array.isRequired,
    type: PropTypes.string.isRequired
}
