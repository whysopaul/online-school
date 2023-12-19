'use client'

import { useRouter, useSearchParams } from "next/navigation"
import { KeyboardEvent, useEffect, useRef, useState } from "react"
import { useOnClickOutside } from "./utils/HandleClickOutside"

export default function Search() {

    const [isOpenedSearchForm, setIsOpenedSearchForm] = useState(false)

    useEffect(() => {
        if (isOpenedSearchForm) {
            document.body.style.overflow = 'hidden'

            return () => {
                document.body.style.overflow = 'auto'
            }
        }
    }, [isOpenedSearchForm])

    const searchPopupRef = useRef(null)

    useOnClickOutside(searchPopupRef, () => setIsOpenedSearchForm(false))

    const MAGNIFYING_GLASS = <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 512 512" fill="currentColor"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>

    const searchParams = useSearchParams()
    const router = useRouter()

    const params = new URLSearchParams(searchParams)

    const handleSearch = (search_query: string) => {
        // console.log(search_query)

        if (search_query) {
            params.set('query', search_query.trim())
        } else {
            params.delete('query')
        }
    }

    const onSubmit = () => {
        if (!params.get('query')) return
        router.replace('/search?' + params.toString())
        setIsOpenedSearchForm(false)
    }

    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Enter') {
            onSubmit()
        }
    }

    return <>
        <div className='header-search'>
            <button onClick={() => setIsOpenedSearchForm(true)}>
                {MAGNIFYING_GLASS}
            </button>
        </div>
        {isOpenedSearchForm && <>
            <div className='search-backdrop' />
            <div className='search-popup-container' ref={searchPopupRef}>
                <label className='search-popup-form'>
                    <input
                        type='text'
                        placeholder='Поиск'
                        onChange={e => handleSearch(e.target.value)}
                        onKeyDown={handleKeyDown}
                        defaultValue={searchParams.get('query')?.toString()}
                        autoFocus
                    />
                    <button onClick={() => onSubmit()}>
                        {MAGNIFYING_GLASS}
                    </button>
                </label>
            </div>
        </>}
    </>
}