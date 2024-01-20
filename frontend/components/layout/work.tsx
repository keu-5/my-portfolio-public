"use client"
import largeStyles from '@/styles/layout/work_large.module.css'
import styles from "@/styles/layout/work.module.css"

export default function Work({ thumbnail, title, text, url, large } : { thumbnail?: any, title?: string, text?: string, url?: string, large?: boolean }) {
    const style = large ? largeStyles : styles
    
    return (
    <li className={style.card_item}>
        <a href={url} target="_blank" rel="noopener noreferrer">
            <div className={style.thum_box}>
                <img
                    src={thumbnail}
                    alt="works image"
                    width={800}
                    height={600}
                />
            </div>
            <div className={style.context}>
                <h1 className={style.title}>{title}</h1>
                <p className={style.desc}>{text}</p>
            </div>
        </a>
    </li>
    )
}