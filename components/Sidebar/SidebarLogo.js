import Link from 'next/link';
import styles from '@components/Sidebar/sidebar.module.scss';

export const SidebarLogo = () => (
    <Link href='/'>
        <a className={styles.logo}>
            <h1>Gofilm<span>.</span>io</h1>
        </a>
    </Link>
)
