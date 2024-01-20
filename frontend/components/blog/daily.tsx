"use client"

import styles from "@/styles/blog/daily.module.css"

export default function Daily({ thumbnail, title, date, text, url, id } : { thumbnail: any, title?: string, date?: string, text?: string, url?: string, id?: string }) {
    return (
        <>
            <li className={styles.card_item}>
                <a href={url} id={id} target="_blank" rel="noopener noreferrer" className={styles.flexContainer}>
                    <div className={thumbnail ? styles.context : styles.context_dismiss}>
                        <h1 className={styles.title}>{date} : {title}</h1>
                        <p className={styles.desc}>{text}</p>
                    </div>
                    <div className={thumbnail ? styles.thum_box : styles.dismiss}>
                        <img
                            src={thumbnail}
                            alt="blogs image"
                        />
                    </div>
                </a>
            </li>
        </>
    )
}
