import styles from "@/styles/home/article.module.css"
import { ReactNode } from 'react'

export default function Layout({ children, title, text }: { children: ReactNode, title: any, text?: string}) {
    return (
        <div className={styles.flexContainer}>
            <div className={styles.text}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.comment}>{text}</p>
                <div>{children}</div>
            </div>
        </div>
    )
}