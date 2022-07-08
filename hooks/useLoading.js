import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export const useLoading = page => {
    const { events } = useRouter();
    const router = useRouter();
    const [isLoading, setLoading] = useState(false);

    const startLoading = () => {
        console.log('routeChangeStart');
        setLoading(true)
    };
    const stopLoading = () => {
        console.log('routeChangeComplete');
        setLoading(false)
    };

    useEffect(() => {
        console.log(page);
        events.on('routeChangeStart', startLoading);
        events.on('routeChangeComplete', stopLoading);

        return () => {
            console.log('return');
            events.off('routeChangeStart', startLoading);
            events.off('routeChangeComplete', stopLoading);
        }
    }, []);

    return isLoading;
}
