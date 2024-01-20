"use client"
import Header from "@/components/layout/header"
import Title from "@/components/home/title"
import Footer from "@/components/layout/footer"
import Main from "@/components/layout/main"
import Left from "@/components/layout/left"
import Container from "@/components/layout/container"
import Backtop from "@/components/navigation/backtop"
import styles from "@/styles/layout/layout.module.css"
import React, { useState, useEffect, ReactNode } from 'react'
import { usePathname } from 'next/navigation'

export default function Layout({ children }: { children: ReactNode }) {
    const isHomePage = usePathname() === '/';
    const [windowWidth, setWindowWidth] = useState(0);
    const [scrollPosition, setScrollPosition] = useState(0);



    useEffect(() => {
        setScrollPosition(window.scrollY);
        setWindowWidth(window.innerWidth);

        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };
        const handleresize = () => {
            setWindowWidth(window.innerWidth);
        };
        
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleresize);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleresize);
        };
    }, []);

    const blurValue = scrollPosition / 50;
    const renderLeftComponent = windowWidth <= 980 ? null : <Left />;
    
    return (
        <>
            {isHomePage && (
                <div className={styles.background} style={{ height: '100.005vh'}}> 
                    <div className={styles.header} style={{ filter: `blur(${blurValue}px)` }}>
                        <div className={styles.text}>
                            <Container>
                                <Title />
                            </Container>
                        </div>
                    </div>
                </div>
            )}
            <Container large>
                <div className={styles.flexContainer}>
                    {renderLeftComponent}
                    <Main>
                        {children}
                    </Main>
                    <Backtop />
                </div>
            </Container>
            <Footer />
            <div className={styles.layout} style={{ 
                backgroundColor: `rgba(255, 255, 255, ${isHomePage ? blurValue / 15 : 1})`,
                boxShadow: `0 10px 25px 0 rgba(224, 224, 224, ${isHomePage ? blurValue / 30 : 0.5})` 
            }}> 
                <Header />
            </div>
        </>
    )
}
