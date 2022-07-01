import styles from './header.module.scss';
import { RiSearch2Line } from 'react-icons/ri';
import { IoNotifications } from 'react-icons/io5';
import { BsChatDotsFill } from 'react-icons/bs';
import { NightMode } from '@components/UI/NightMode/NightMode';
import { IconWrapper } from '@components/UI/IconWrapper/IconWrapper';
import { UserAvatar } from '@components/UI/UserAvatar/UserAvatar';

export const Header = () => {

    return (
        <header className={styles.header}>
            <div className={styles.searchContainer}>
                <div className={styles.searchField}>
                    <IconWrapper width={16} height={16} className={styles.icon}>
                        <RiSearch2Line/>
                    </IconWrapper>
                    <input type="text" placeholder='Search..'/>
                </div>
            </div>
            <div className={styles.userContainer}>
                <NightMode callback={() => console.log('change')} isChecked={false}/>
                <button className={styles.userContainerButton}>
                    <IconWrapper width={24} height={24} className={styles.icon}>
                        <IoNotifications/>
                    </IconWrapper>
                </button>
                <button className={styles.userContainerButton}>
                    <IconWrapper width={24} height={24} className={styles.icon}>
                        <BsChatDotsFill/>
                    </IconWrapper>
                </button>

                <UserAvatar/>
            </div>
        </header>
    )
}
