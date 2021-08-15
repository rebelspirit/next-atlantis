import styles from './search.module.scss'
import { FaSearch, FaTimes  } from 'react-icons/fa'
import { headerContext } from '@components/Header/Header'
import { RoundButton } from '@components/elements/RoundButton/RoundButton'
import { useContext } from 'react'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

export const Search = () => {
    const {
        mobileSearchOpen,
        setMobileSearchOpen
    } = useContext(headerContext)

    return (
        <>
            <div className={cx('search', {'active': mobileSearchOpen})}>
                <input
                    type='text'
                    placeholder='Введите запрос'
                    // onKeyPress={searchWhenEnterPress}
                    // onFocus={toggle}
                />
                <button
                    type='button'
                    // disabled={loading}
                    // onClick={sendSearchRequest}
                >
                    <FaSearch/>
                </button>
            </div>

            {!mobileSearchOpen && <RoundButton extendedClassName='active' callback={() => setMobileSearchOpen(true)}>
                <FaSearch/>
            </RoundButton>}
            {mobileSearchOpen && <RoundButton callback={() => setMobileSearchOpen(false)}>
                <FaTimes/>
            </RoundButton>}
        </>
    )
}
