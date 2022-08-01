import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export const useLoading = () => {
    const { events } = useRouter();
    const [isLoading, setLoading] = useState(false);

    const startLoading = () => setLoading(true);
    const stopLoading = () => setLoading(false);

    useEffect(() => {
        events.on('routeChangeStart', startLoading);
        events.on('routeChangeComplete', stopLoading);

        return () => {
            events.off('routeChangeStart', startLoading);
            events.off('routeChangeComplete', stopLoading);
        }
    }, []);

    return isLoading;
}
