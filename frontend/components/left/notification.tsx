"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import { getNotification, Notification } from '@/api/path';
import styles from "@/styles/left/notification.module.css"

export default function Notification() {
    const [notificationData, setNotificationData] = useState<Notification[] | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getNotification();
                setNotificationData(data);
            } catch (error) {
                console.error('Error fetching work data', error);
            }
        };
        fetchData();
    }, []);

    //NOTE: その他の通知に関しては保留
    return (
        <div className={styles.container}>
            <h2>お知らせ & トピックス</h2>
            <div className={styles.notification}>
                {notificationData && notificationData
                    .slice(0, 7)
                    .map((log, index) => (
                        <Link href={log.category == 'Blog' ? '/blog' : ('Work' ? '/works' : '')} key={index}>
                            <div className={index % 2 === 0 ? styles.white : styles.glay}>
                                <div className={styles.flexContainer}>
                                    <p className={styles.type}>{log.category}</p>
                                    <p className={styles.date}>{new Date(log.date).toLocaleDateString()}</p>
                                </div>
                                <p className={styles.content}>{log.category}「{log.title}」が追加されました！</p>
                            </div>
                        </Link>
                    )
                )}
            </div>
        </div>
    )
}
