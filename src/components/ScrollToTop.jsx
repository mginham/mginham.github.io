import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        // Only scroll to top for project detail pages
        if (pathname.startsWith('/projects/')) {
            window.scrollTo(0, 0);
        }
    }, [pathname]);

    return null;
}