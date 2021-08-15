import { logo, logoTextGreen, logoTextDomain } from './logo.module.scss'
import Link from 'next/link'

export const Logo = () => (
    <Link href="/"
    >
        <a className={logo}>
            <span className={logoTextGreen}>go</span>
            <span>film</span>
            <span className={logoTextDomain}>.io</span>
        </a>
    </Link>
)
