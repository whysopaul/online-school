'use client'

import { useEffect, useState } from "react"

export const ANGLE_UP = <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 448 512" fill="currentColor"><path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" /></svg>

export default function ScrollToTop() {

    // const scrollButtonRef = useRef<HTMLButtonElement>(null)

    const [bodyTop, setBodyTop] = useState<number>(0)
    // const [scrollButtonTop, setScrollButtonTop] = useState<number | undefined>(0)
    const [screenHeight, setScreenHeight] = useState(0)

    useEffect(() => {
        setBodyTop(document?.body.getBoundingClientRect().top)
        // setScrollButtonTop(scrollButtonRef.current?.getBoundingClientRect().top)
        setScreenHeight(window?.innerHeight)

        const updateTopValues = () => {
            setBodyTop(document?.body.getBoundingClientRect().top)
            // setScrollButtonTop(scrollButtonRef.current?.getBoundingClientRect().top)
            setScreenHeight(window?.innerHeight)
        }

        window?.addEventListener('scroll', updateTopValues)

        return () => {
            window?.removeEventListener('scroll', updateTopValues)
        }
    }, [, bodyTop, screenHeight])

    return <>
        <button className='scroll-to-top-button' style={-bodyTop > screenHeight ? { opacity: 1, visibility: 'visible' } : { opacity: 0, visibility: 'hidden' }} onClick={() => window?.scrollTo({ top: 0, behavior: 'smooth' })}/* ref={scrollButtonRef} */>{ANGLE_UP}</button>
    </>
}