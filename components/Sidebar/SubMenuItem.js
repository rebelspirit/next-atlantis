import { useState } from 'react';
import styles from '@components/Sidebar/sidebar.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export const SubMenuItem = ({ icon, arrowIcon, name }) => {
    const [showSunMenu, setShowSubMenu] = useState(false);

    return (
        <li
            className={cx({ 'showMenu': showSunMenu })}
            onClick={() => setShowSubMenu(prev => !prev)}
        >
            <div className={styles.iconLink}>
                <a href="#">
                    <i>
                        {icon}
                    </i>
                    <span className={styles.linkName}>{name}</span>
                </a>
                <i className={cx(styles.dropDownIcon, { 'rotateArrow': showSunMenu } )}>
                    {arrowIcon}
                </i>
            </div>
            <ul className={cx(styles.subMenu)}>
                <li><a className={styles.linkName} href="#">Category</a></li>
                <li><a href="#">HTML & CSS</a></li>
                <li><a href="#">JavaScript</a></li>
                <li><a href="#">PHP & MySQL</a></li>
            </ul>
        </li>
    )
}
