import styles from './userAvatar.module.scss';
import Image from 'next/image';
import avatar from '../../../public/img/avatar.jpeg';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export const UserAvatar = () => {

    return (
        <div className={styles.userAvatarContainer}>
            <div className={cx(styles.circle, styles.redCircle)}>
                <svg viewBox="0 0 100 100">
                    <path fillRule="evenodd" clipRule="evenodd" d="M 50,50m 0,-41.5a 41.5,41.5 0 1 1 0,83a 41.5,41.5 0 1 1 0,-83" strokeWidth="5" fillOpacity="0"/>
                </svg>
            </div>

            <div className={styles.avatar}>
                <Image src={avatar} alt="user_avatar"/>
            </div>

            <div className={cx(styles.circle, styles.greyCircle)}>
                <svg viewBox="0 0 100 100">
                    <path fillRule="evenodd" clipRule="evenodd" d="M 50,50m 0,-41.5a 41.5,41.5 0 1 1 0,83a 41.5,41.5 0 1 1 0,-83" strokeWidth="5" fillOpacity="0"/>
                </svg>
            </div>
        </div>
    )
}
