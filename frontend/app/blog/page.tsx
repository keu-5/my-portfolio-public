import Article from "@/components/home/article"
import Table from "@/components/blog/table"

export default function Blogs() {
    return (
        <>
            <Article 
                title="Blogs"
                text="このサイトではブログも投稿しております。新着情報やトピックに関する最新のアップデートをお届けするため、定期的にブログを更新しています。また、読者の皆様からのコメントやフィードバックもお待ちしております。サイトを通じて、より深くコミュニケーションを図りながら、有益な情報を共有していければと考えています。ぜひ、お気軽にご参加ください！"
            >
                <Table />
            </Article>
        </>
    )
}
