'use client'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { usePathname } from "next/navigation"
import styles from "@/styles/navigation/backtop.module.css"

export default function Backtop() {
    const isBlogPage = usePathname() === '/blog';
    const isHomePage = usePathname() === '/';
    const isAboutPage = usePathname() === '/about';
    const isContactPage = usePathname() === '/contact';
    const isWorksPage = usePathname() === '/works';

    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const opecityValue = scrollPosition / 500;

    function onScrollTop(): any {
        window.scroll({ top: 0, behavior: 'smooth' })
    }

    return (
        <>
            {(isHomePage || isAboutPage || isContactPage || isBlogPage || isWorksPage) && <div className={styles.event} style={{ opacity: `${opecityValue}` }} onClick={onScrollTop}>
                <FontAwesomeIcon className={styles.icon} icon={faChevronUp} />
                <span className='sr-only'>トップに戻る</span>
            </div>}
        </>
    )
}
