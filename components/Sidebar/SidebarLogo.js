import Link from 'next/link';
import styles from '@components/Sidebar/sidebar.module.scss';

export const SidebarLogo = () => (
    <Link href='/'>
        <div className={styles.logo}>
            <h1>Gofilm<span>.</span>io</h1>
        </div>
    </Link>
)
