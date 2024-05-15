import { useEffect } from 'react';
import { createPortal } from 'react-dom';

function Portal({ children }) {
    // const portal = document.getElementById('__next');
    const portal = document.querySelector('body');
    const el = document.createElement('div');

    useEffect(() => {
        portal.appendChild(el);
        return () => portal.removeChild(el);
    }, [el, portal]);

    return createPortal(children, el);
}

export { Portal };
