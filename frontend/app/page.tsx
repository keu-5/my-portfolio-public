import Article from "@/components/home/article"
import About from "@/components/home/about"
import Works from "@/components/layout/works"
import Blogs from "@/components/layout/blogs"
import ScrollToTopOnMount from "@/components/home/scrollToTopOnMount"
import Contact from "@/components/contact/contact"

export default function Home() {
  return (
    <>
      <ScrollToTopOnMount />
      <Article 
        title="About">
        <About easy />
      </Article>
      <Article 
        title="Works"
        text="これまで開発したものをご紹介します。今後も新しい挑戦に向けて、より効果的なソリューションを提供していきます。お楽しみに！"
      >
        <Works />
      </Article>
      <Article 
        title="Blogs" 
        text="このサイトではブログも投稿しております。新着情報やトピックに関する最新のアップデートをお届けするため、定期的にブログを更新しています。また、読者の皆様からのコメントやフィードバックもお待ちしております。サイトを通じて、より深くコミュニケーションを図りながら、有益な情報を共有していければと考えています。ぜひ、お気軽にご参加ください！"
      >
        <Blogs />
      </Article>
      <Article 
        title="contact" 
        text="制作の依頼・ご相談などお気軽にお問い合わせください。下記フォームよりわかる範囲でご記入ください。必須の項目はかならずご記入お願いします。"
      >
        <Contact />
      </Article>
    </>
  )
}
