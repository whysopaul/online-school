'use client'

import { RefObject, useEffect } from "react";

export function useOnClickOutside<T extends HTMLElement = HTMLElement>(ref: RefObject<T>, handler: (event: Event) => void) {
    useEffect(
        () => {
            const listener = (event: Event) => {
                // Do nothing if clicking ref's element or descendent elements
                // @ts-expect-error
                if (!ref.current || ref.current.contains(event.target)) {
                    return;
                }

                handler(event);
            };

            document.addEventListener('mousedown', listener);
            document.addEventListener('touchstart', listener);

            return () => {
                document.removeEventListener('mousedown', listener);
                document.removeEventListener('touchstart', listener);
            };
        },
        // Add ref and handler to effect dependencies
        // It's worth noting that because passed in handler is a new ...
        // ... function on every render that will cause this effect ...
        // ... callback/cleanup to run every render. It's not a big deal ...
        // ... but to optimize you can wrap handler in useCallback before ...
        // ... passing it into this hook.
        [ref, handler]
    );
}