import PropTypes from 'prop-types';
import styles from '@components/Sidebar/sidebar.module.scss';
import { map } from 'lodash';

export const SidebarItem = ({ sectionName, itemsArray }) => (
    <div className={styles.sectionItemContainer}>
        <h6 className={styles.sectionTitle}>{sectionName}</h6>
        {map(itemsArray, item =>
            <div className={styles.sectionItem} key={item.name}>
                <i>
                    {item.icon}
                </i>
                <p>
                    {item.name}
                </p>
            </div>
        )}
    </div>
)
SidebarItem.propTypes = {
    sectionName: PropTypes.string.isRequired,
    itemsArray: PropTypes.array.isRequired
}
