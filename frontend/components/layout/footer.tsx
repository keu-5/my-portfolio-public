import Container from "@/components/layout/container"
import Logo from "@/components/layout/logo"
import Navigation from "@/components/navigation/navigation"
import Sns from "@/components/navigation/sns"
import styles from "@/styles/layout/footer.module.css"

export default function Footer() {
    return (
        <footer className={styles.wrapper}>
            <Container>
                <div className={styles.flexContainer}>
                    <div className={styles.list}>
                        <Logo />
                        <Navigation />
                    </div>
                    <Sns />
                </div>
            </Container>
        </footer>
    )
}