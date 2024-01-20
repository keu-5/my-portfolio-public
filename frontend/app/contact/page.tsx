import Article from "@/components/home/article"
import Form from "@/components/contact/contact"

export default function Contact() {
    return (
        <Article title="contact" text="制作の依頼・ご相談などお気軽にお問い合わせください。下記フォームよりわかる範囲でご記入ください。必須の項目はかならずご記入お願いします。">
            <Form />
        </Article>
    )
}