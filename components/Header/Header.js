import styles from './header.module.scss';
import { RiSearch2Line } from 'react-icons/ri';
import { IoMoon, IoNotifications } from 'react-icons/io5';
import { NightMode } from '@components/UserInterfaces/NightMode/NightMode';
export const Header = () => {

    return (
        <header className={styles.header}>
            <div className={styles.searchContainer}>
                <div className={styles.searchField}>
                    <i><RiSearch2Line/></i>
                    <input type="text" placeholder='Search..'/>
                </div>
            </div>
            <div className={styles.userContainer}>
                <NightMode callback={() => console.log('change')} isChecked={false} id='test'/>
                <button className={styles.userContainerButton}>
                    <i>
                        <IoNotifications/>
                    </i>
                </button>
            </div>
        </header>
    )
}
