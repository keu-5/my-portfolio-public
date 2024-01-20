"use client"

import styles from "@/styles/layout/blog.module.css"

export default function Blog({ thumbnail, title, date, text, url } : { thumbnail: any, title?: string, date?: string, text?: string, url?: string }) {
    return (
    <li className={styles.card_item}>
        <a href={url} target="_blank" rel="noopener noreferrer">
            <div className={styles.thum_box}>
                <img
                    src={thumbnail}
                    alt="blogs image"
                    width={800}
                    height={600}
                />
            </div>
            <div className={styles.context}>
                <h1 className={styles.title}>{title}</h1><small>{date}</small>
                <p className={styles.desc}>{text}</p>
            </div>
        </a>
    </li>
    )
}