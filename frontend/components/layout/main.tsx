import { ReactNode } from 'react'

import styles from "@/styles/layout/main.module.css"

export default function Main({ children }: { children: ReactNode }) {
    return (
        <>
            <main className={styles.flexContainer}>
                    {children}
            </main>
        </>
    )
}