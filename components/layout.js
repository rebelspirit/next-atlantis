import { container } from './layout.module.scss'
import { Header } from '@components/Header/Header';

export const Layout = ({ children }) => {
    return (
        <div className='app'>
            <Header/>

            <main className={container}>
                {children}
            </main>

            <footer />
        </div>
    );
}
