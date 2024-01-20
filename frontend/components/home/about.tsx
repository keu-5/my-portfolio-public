import Image from "next/legacy/image"
import icon from "@/images/profile-icon.png"
import Container from "@/components/layout/container"
import styles from "@/styles/home/about.module.css"

export default function About({easy = false} : { easy?: boolean }) {
    return (
        <div className={styles.wrapper}>
            <Container>
                <div className={styles.flexContainer}>
                    <figure className={styles.image}>
                        <Image
                            src={icon}
                            alt="profile image" 
                            layout='responsive'
                            sizes='(min-width: 1152px) 576px, (min-width: 980px) 50vw, 100vw'
                            priority
                            placeholder='blur'
                        />
                    </figure>
                    <div className={styles.text}>
                        <h2>私のプロフィール</h2>
                        <p>
                            カフェマルテ    Cafe Marte
                        </p>
                        <p>
                            所有資格<br />
                            TOEIC 700/990
                        </p>
                        <p>
                            開発技術<br />
                            React/Next.js, Django, Docker, nginx, postgreSQL
                        </p>
                        <p>
                            [連絡先情報]<br />
                            - メール: [<a href="mailto:test@example.com">test@example.com</a>]<br />
                            - GitHub: [<a href="https://github.com/keu-5" target="_blank" rel="noopener noreferrer">https://github.com/keu-5</a>]
                        </p>
                    </div>
                </div>
                <p className={easy ? styles.delete : styles.create }>
                    こんにちは！私はカフェマルテと申します。私は情報学部生として、最新技術について勉学に励んでおります。<br />
                    私は主に「Webアプリケーション開発」に焦点を当てており、ReactやDjangoを活用して、問題解決のための効果的なソリューションを開発することに力を入れています。 <br />
                    私のモットーは、「徹底的に楽しむ」ことであり、どんなことに対しても前向きに常に学び続ける姿勢を持っています。 <br />
                    私のポートフォリオでは、これまでのプロジェクトや成果物を詳しく紹介しています。興味を持っていただけた方は、ぜひご覧いただけると嬉しいです。どうぞお気軽にご連絡いただければと思います！<br />
                </p>
            </Container>
        </div>
    )
}
