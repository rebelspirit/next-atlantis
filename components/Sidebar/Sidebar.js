import styles from './sidebar.module.scss';
import { sidebarConfig } from '@components/Sidebar/sidebarConfig';
import { SidebarItem } from '@components/Sidebar/SidebarItem';
import { SidebarLogo } from '@components/Sidebar/SidebarLogo';

export const Sidebar = () => {
    const { general, content, useful } = sidebarConfig;

    return (
        <aside className={styles.sidebar}>
            <div className={styles.stickySection}>
                <SidebarLogo/>

                <nav className={styles.section}>
                    <SidebarItem itemsArray={general} sectionName='Главное'/>
                    <SidebarItem itemsArray={content} sectionName='Материалы'/>
                    <SidebarItem itemsArray={useful} sectionName='Полезное'/>
                </nav>
            </div>
        </aside>
    )
}
