import { useSelector } from 'react-redux';
import { map } from 'lodash';
import styles from './sidebar.module.scss';
import classNames from 'classnames/bind';
import { MenuItem } from '@components/Sidebar/MenuItem';
import { sidebarConfig } from '@components/Sidebar/sidebarConfig';
import { Logo } from '@components/elements/Logo/Logo';
import { BiMenuAltLeft, BiMenuAltRight } from 'react-icons/bi';

const cx = classNames.bind(styles);

export const Sidebar = () => {
    const { isOpenSidebar } = useSelector(store => store.sidebar);
    const { header, main, footer } = sidebarConfig;

    return (
        <div className={cx(styles.sidebar, { 'close': !isOpenSidebar })}>
            <nav className={styles.navLinks}>
                {map(header, item => <MenuItem key={item.name} {...item} />)}
                {/*<li>*/}
                {/*    <a href="#">*/}
                {/*        <i className='bx bx-grid-alt'>*/}
                {/*            <FaHome/>*/}
                {/*        </i>*/}
                {/*        <span className={styles.linkName}>Dashboard</span>*/}
                {/*    </a>*/}
                {/*    <ul className={cx(styles.subMenu, styles.blank)}>*/}
                {/*        <li><a className={styles.linkName} href="#">Category</a></li>*/}
                {/*    </ul>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <div className={styles.iconLink}>*/}
                {/*        <a href="#">*/}
                {/*            <i className='bx bx-collection'/>*/}
                {/*            <span className={styles.linkName}>Category</span>*/}
                {/*        </a>*/}
                {/*        <i className='bx bxs-chevron-down arrow'/>*/}
                {/*    </div>*/}
                {/*    <ul className={styles.subMenu}>*/}
                {/*        <li><a className={styles.linkName} href="#">Category</a></li>*/}
                {/*        <li><a href="#">HTML & CSS</a></li>*/}
                {/*        <li><a href="#">JavaScript</a></li>*/}
                {/*        <li><a href="#">PHP & MySQL</a></li>*/}
                {/*    </ul>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <div className={styles.iconLink}>*/}
                {/*        <a href="#">*/}
                {/*            <i className='bx bx-book-alt'/>*/}
                {/*            <span className={styles.linkName}>Posts</span>*/}
                {/*        </a>*/}
                {/*        <i className='bx bxs-chevron-down arrow'/>*/}
                {/*    </div>*/}
                {/*    <ul className={styles.subMenu}>*/}
                {/*        <li><a className={styles.linkName} href="#">Posts</a></li>*/}
                {/*        <li><a href="#">Web Design</a></li>*/}
                {/*        <li><a href="#">Login Form</a></li>*/}
                {/*        <li><a href="#">Card Design</a></li>*/}
                {/*    </ul>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <a href="#">*/}
                {/*        <i className='bx bx-pie-chart-alt-2'/>*/}
                {/*        <span className={styles.linkName}>Analytics</span>*/}
                {/*    </a>*/}
                {/*    <ul className={cx(styles.subMenu, styles.blank)}>*/}
                {/*        <li><a className={styles.linkName} href="#">Analytics</a></li>*/}
                {/*    </ul>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <a href="#">*/}
                {/*        <i className='bx bx-line-chart'/>*/}
                {/*        <span className={styles.linkName}>Chart</span>*/}
                {/*    </a>*/}
                {/*    <ul className={cx(styles.subMenu, styles.blank)}>*/}
                {/*        <li><a className={styles.linkName} href="#">Chart</a></li>*/}
                {/*    </ul>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <div className={styles.iconLink}>*/}
                {/*        <a href="#">*/}
                {/*            <i className='bx bx-plug'/>*/}
                {/*            <span className={styles.linkName}>Plugins</span>*/}
                {/*        </a>*/}
                {/*        <i className='bx bxs-chevron-down arrow'/>*/}
                {/*    </div>*/}
                {/*    <ul className={styles.subMenu}>*/}
                {/*        <li><a className={styles.linkName} href="#">Plugins</a></li>*/}
                {/*        <li><a href="#">UI Face</a></li>*/}
                {/*        <li><a href="#">Pigments</a></li>*/}
                {/*        <li><a href="#">Box Icons</a></li>*/}
                {/*    </ul>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <a href="#">*/}
                {/*        <i className='bx bx-compass'/>*/}
                {/*        <span className={styles.linkName}>Explore</span>*/}
                {/*    </a>*/}
                {/*    <ul className={cx(styles.subMenu, styles.blank)}>*/}
                {/*        <li><a className={styles.linkName} href="#">Explore</a></li>*/}
                {/*    </ul>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <a href="#">*/}
                {/*        <i className='bx bx-history'/>*/}
                {/*        <span className={styles.linkName}>History</span>*/}
                {/*    </a>*/}
                {/*    <ul className={cx(styles.subMenu, styles.blank)}>*/}
                {/*        <li><a className={styles.linkName} href="#">History</a></li>*/}
                {/*    </ul>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <a href="#">*/}
                {/*        <i className='bx bx-cog'/>*/}
                {/*        <span className={styles.linkName}>Setting</span>*/}
                {/*    </a>*/}
                {/*    <ul className={cx(styles.subMenu, styles.blank)}>*/}
                {/*        <li><a className={styles.linkName} href="#">Setting</a></li>*/}
                {/*    </ul>*/}
                {/*</li>*/}
                {/*<li>*/}
                {/*    <div className={styles.profileDetails}>*/}
                {/*        <div className={styles.profileContent}>*/}
                {/*            <img src="image/profile.jpg" alt="profileImg"/>*/}
                {/*        </div>*/}
                {/*        <div className="name-job">*/}
                {/*            <div className={styles.profileName}>Prem Shahi</div>*/}
                {/*            <div className={styles.job}>Web Desginer</div>*/}
                {/*        </div>*/}
                {/*        <i className='bx bx-log-out'/>*/}
                {/*    </div>*/}
                {/*</li>*/}
            </nav>
            <nav className={styles.navLinks}>
                {map(main, item => <MenuItem key={item.name} {...item} />)}
            </nav>
            <nav className={styles.navLinks}>
                {map(footer, item => <MenuItem key={item.name} {...item} />)}
            </nav>
        </div>
    )
}
