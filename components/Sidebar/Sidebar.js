import styles from './sidebar.module.scss';
import { sidebarConfig } from '@components/Sidebar/sidebarConfig';
import { SidebarItem } from '@components/Sidebar/SidebarItem';
import { SidebarLogo } from '@components/Sidebar/SidebarLogo';

export const Sidebar = () => {
    const { menu, content, general } = sidebarConfig;

    return (
        <aside className={styles.sidebar}>
            <SidebarLogo/>

            <nav className={styles.section}>
                <SidebarItem itemsArray={menu} sectionName='Menu'/>
                <SidebarItem itemsArray={content} sectionName='Content'/>
                <SidebarItem itemsArray={general} sectionName='General'/>
            </nav>
        </aside>
    )
}
