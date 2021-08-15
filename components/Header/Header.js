import { useState, createContext } from 'react';
import styles, { header, navContainer, searchBarContainer } from '@components/Header/header.module.scss';
import { FaTh, FaBell, FaSignInAlt  } from 'react-icons/fa';
import { Logo } from '@components/elements/Logo/Logo';
import { BurgerMenu } from '@components/elements/BurgerMenu/BurgerMenu';
import { Search } from '@components/elements/Search/Search';
import { RoundButton } from '@components/elements/RoundButton/RoundButton';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export const headerContext = createContext({
    mobileSearchOpen: null,
    setMobileSearchOpen: null
});

export const Header = () => {

    const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

    return (
        <headerContext.Provider value={{
            mobileSearchOpen,
            setMobileSearchOpen
        }}>
            <header className={header}>
                <div className={navContainer}>
                    <BurgerMenu/>
                    <Logo/>
                </div>
                <div className={cx(searchBarContainer, {'openMobileSearchBar': mobileSearchOpen})}>
                    <Search/>
                </div>
                <div className={mobileSearchOpen ? cx('navContainer', 'close') : cx('navContainer', 'compressed')}>
                    <RoundButton callback={() => console.log('click')}>
                        <FaTh/>
                    </RoundButton>
                    <RoundButton callback={() => console.log('click')}>
                        <FaBell/>
                    </RoundButton>
                    <RoundButton callback={() => console.log('click')}>
                        <FaSignInAlt/>
                    </RoundButton>
                </div>
            </header>
        </headerContext.Provider>
    )
}
