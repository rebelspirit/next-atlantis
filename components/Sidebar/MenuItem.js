import styles from '@components/Sidebar/sidebar.module.scss';

export const MenuItem = ({ icon, name, link, suffix }) => (
    <li>
        <a href="#">
            <i>
                {icon}
            </i>
            <span className={styles.linkName}>{name}</span>
            {suffix &&
            <i className={styles.suffix}>
                {suffix}
            </i>}
        </a>
    </li>
)
