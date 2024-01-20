"use client"
import React, { useEffect, useState } from 'react';
import { getWork, BlogDataWork } from '@/api/path';
import Work from "@/components/layout/work"
import styles from "@/styles/layout/works.module.css"

//NOTE: これを使えばブログできる
export default function Works({ large } : { large?: boolean }) {
    const [workData, setWorkData] = useState<BlogDataWork[] | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getWork();
                setWorkData(data);
            } catch (error) {
                console.error('Error fetching work data', error);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <div className={styles.image}>
                {workData && workData
                    .slice(0, 50)
                    .map((work, index) => (
                        <Work 
                            thumbnail={work.thumbnail}
                            title={work.title}
                            url={work.url}
                            text={work.text}
                            large={large}
                            key={index}
                        />
                ))}
            </div>
        </>
    )
}
