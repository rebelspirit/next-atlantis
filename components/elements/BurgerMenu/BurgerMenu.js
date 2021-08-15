import styles from './burgerMenu.module.scss';
import classNames from 'classnames/bind';
import { sidebarToggle } from 'store/actions/counter.action';
import { useDispatch, useSelector } from 'react-redux';

const cx = classNames.bind(styles);

export const BurgerMenu = () => {
    const dispatch = useDispatch();

    const { isOpenSidebar } = useSelector(store => store.sidebar);

    return (
        <div
            className={cx(styles.burgerMenu, {'open': isOpenSidebar })}
            onClick={() => dispatch(sidebarToggle())}
        >
            <span/>
        </div>
    )
}
