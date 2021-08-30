import styles from './layout.module.scss'
import { Sidebar } from '@components/Sidebar/Sidebar';
import { Header } from '@components/Header/Header';

export const Layout = ({ children }) => {
    return (
        <div className={styles.app}>
            <Sidebar/>
            <div className={styles.container}>
                <Header/>
                {children}
            </div>
        </div>
    );
}
