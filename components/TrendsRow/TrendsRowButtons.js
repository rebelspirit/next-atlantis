import PropTypes from 'prop-types';
import { ceil } from 'lodash';
import styles from '@components/TrendsRow/trendsRow.module.scss';
import { IconWrapper } from '@components/common/IconWrapper/IconWrapper';
import { GrNext } from 'react-icons/gr';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export const TrendsRowButtons = ({ containerRef, disabledRowButtons: { scrollLeftButton, scrollRightButton } }) => {

    const onScrollRightButton = ref => {
        return () => {
            const remainder = ceil((ref.current.scrollWidth % ref.current.clientWidth) / 4);

            return ref.current.scrollLeft -= (ref.current.clientWidth + remainder);
        }
    };

    const onScrollLeftButton = ref => {
        return () => {
            const remainder = ceil((ref.current.scrollWidth % ref.current.clientWidth) / 4);

            return ref.current.scrollLeft += (ref.current.clientWidth + remainder);
        }
    };

    return (
        <div className={styles.trendsScrollButtonContainer}>
            <button
                disabled={scrollRightButton.disabled}
                className={cx(styles.trendsScrollButton, styles.trendsScrollButtonReverse, { 'disabled': scrollRightButton.disabled })}
                onClick={onScrollRightButton(containerRef)}
            >
                <IconWrapper width={30} height={30} className={styles.trendsScrollButtonIcon}>
                    <GrNext/>
                </IconWrapper>
            </button>
            <button
                disabled={scrollLeftButton.disabled}
                className={cx(styles.trendsScrollButton, { 'disabled': scrollLeftButton.disabled })}
                onClick={onScrollLeftButton(containerRef)}
            >
                <IconWrapper width={30} height={30} className={styles.trendsScrollButtonIcon}>
                    <GrNext/>
                </IconWrapper>
            </button>
        </div>
    )
};

TrendsRowButtons.propTypes = {
    containerRef: PropTypes.object.isRequired,
    disabledRowButtons: PropTypes.object.isRequired,
}

