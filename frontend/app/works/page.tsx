import Article from "@/components/home/article"
import Tile from "@/components/layout/works"

export default function Works() {
    return (
        <Article 
            title="Works"
            text="これまで開発したものをご紹介します。今後も新しい挑戦に向けて、より効果的なソリューションを提供していきます。お楽しみに！"
        >
            <Tile large/> {/*コンポーネントを使うときは一文字目は大文字でないといけない */}
        </Article>
    )
}