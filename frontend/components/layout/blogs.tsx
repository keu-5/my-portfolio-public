"use client"
import React, { useEffect, useState } from 'react';
import { getBlog, BlogData } from '@/api/path';
import Blog from "@/components/layout/blog"
import styles from "@/styles/layout/blogs.module.css"

export default function Blogs({ large } : { large?: boolean }) {
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

    return (
        <>
            <div className={large ? styles.imagelarge : styles.image}>
                {blogData && blogData
                    .slice(0, 50)
                    .map((blog, index) => (
                        blog.thumbnail && (
                            <Blog 
                                thumbnail={blog.thumbnail}
                                title={blog.title}
                                url={blog.url}
                                text={blog.text}
                                date={blog.date}
                                key={index}
                            />
                        )
                ))}
            </div>
        </>
    )
}
