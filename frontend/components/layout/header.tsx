import Navigation from "@/components/navigation/navigation"
import Container from "@/components/layout/container"
import Logo from "@/components/layout/logo"
import styles from "@/styles/layout/header.module.css"

export default function Header() {
    return (
        <Container large>
            <header className={ styles.flexContainer }>
                <Logo boxOn />
                <Navigation />
            </header>
        </Container>
    )
}