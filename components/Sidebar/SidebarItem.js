import PropTypes from 'prop-types';
import styles from '@components/Sidebar/sidebar.module.scss';
import { map, eq } from 'lodash';
import { IconWrapper } from '@components/common/IconWrapper/IconWrapper';
import Link from 'next/link';
import { useRouter } from 'next/router';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export const SidebarItem = ({ sectionName, itemsArray }) => {
    const { pathname } = useRouter();

    return (
        <div className={styles.sectionItemContainer}>
            <h6 className={styles.sectionTitle}>{sectionName}</h6>

            {map(itemsArray, item =>
                <Link href={item.link} key={item.name}>
                    <div className={cx(styles.sectionItem, { 'selected': eq(pathname, item.link) })}>
                        <IconWrapper width={24} height={24} className={styles.icon}>
                            {item.icon}
                        </IconWrapper>
                        <p>{item.name}</p>
                    </div>
                </Link>
            )}
        </div>
    )
};

SidebarItem.propTypes = {
    sectionName: PropTypes.string.isRequired,
    itemsArray: PropTypes.array.isRequired
};
