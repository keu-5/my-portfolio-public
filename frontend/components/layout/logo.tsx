import Link from "next/link"
import styles from "@/styles/layout/logo.module.css"

export default function Logo({boxOn = false}) {
    return (
        <Link href="/" className={boxOn ? styles.box : styles.basic}>PORTFOLIO</Link>
    )
}