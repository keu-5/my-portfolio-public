import styles from "@/styles/home/title.module.css"

//NOTE: reactでは表示する文字列に'を使う場合&apos;にしなければならない
export default function Title() {
    return (
        <div className={styles.flexContainer}>
            <div className={styles.text}>
                <h1 className={styles.title}>PORTFOLIO</h1>
                <p className={styles.subtitle}>From Lines of Code to Digital Solutions: My Engineer&apos;s Journey</p>
            </div>
        </div>
    )
}
