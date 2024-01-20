import Link from 'next/link'
import styles from '@/styles/navigation/navigation.module.css'

export default function Navigation() {
    return (
        <nav>
            <ul className={styles.list}>
                <li>
                    <Link href='/about'>about</Link>
                </li>
                <li>
                    <Link href='/works'>works</Link>
                </li>
                <li>
                    <Link href='/contact'>contact</Link>
                </li>
                <li>
                    <Link href='/blog'>blog</Link>
                </li>
            </ul>
        </nav>
    )
}