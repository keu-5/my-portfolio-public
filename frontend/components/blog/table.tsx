"use client"
import React, { useEffect, useState } from 'react';
import { getBlog, BlogData } from '@/api/path';
import Daily from "@/components/blog/daily"
import styles from "@/styles/blog/table.module.css"

export default function Table({ large } : { large?: boolean }) {
    const [blogData, setBlogData] = useState<BlogData[] | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getBlog();
                setBlogData(data);
            } catch (error) {
                console.error('Error fetching blog data', error);
            }
        };
        fetchData();
    }, []);

    //NOTE: 67:25  Error: Missing "key" prop for element in iterator  react/jsx-key
    //NOTE: map関数ではkeyを用意しないとbuild時に怒られる
    return (
        <>
            <div className={large ? styles.imagelarge : styles.image}>
                {blogData && blogData
                    .map((blog, index) => (
                            <Daily 
                                id={blog.date}
                                thumbnail={blog.thumbnail}
                                title={blog.title}
                                url={blog.url}
                                text={blog.text}
                                date={blog.date}
                                key={index}
                            />
                    ))}
            </div>
        </>
    )
}
