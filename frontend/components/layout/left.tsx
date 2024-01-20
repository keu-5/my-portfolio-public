"use client"
import Notification from "@/components/left/notification"
import Calendar from "@/components/left/calendar"
import { usePathname } from "next/navigation"
import styles from "@/styles/layout/left.module.css"

export default function Left() {
    const isBlogPage = usePathname() === '/blog';
    const isHomePage = usePathname() === '/';
    const isAboutPage = usePathname() === '/about';
    const isContactPage = usePathname() === '/contact';
    const isWorksPage = usePathname() === '/works';

    return (
        <>
            {isBlogPage && <div className={styles.layout}>
                <Calendar />
            </div>}
            {(isHomePage || isAboutPage || isContactPage || isWorksPage ) && <div className={styles.layout}>
                <Notification />    
            </div>}
        </>
    )
}
