import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Layout from "@/components/layout/layout"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'このサイトでは、これまでのプロジェクトや成果物を詳しく紹介しています。',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta property="og:title" content="Portfolio" />
        <meta property="og:type" content="website" />
        {/*<meta property="og:url" content="{サイトURL}" />*/}
        <meta property="og:image" content="https://avatars.githubusercontent.com/u/135619670?v=4" />
        <meta property="og:site_name" content="Portfolio" />
        <meta property="og:description" content="このサイトでは、これまでのプロジェクトや成果物を詳しく紹介しています。興味を持っていただけた方は、ぜひご覧いただけると嬉しいです。どうぞお気軽にご連絡いただければと思います！"></meta>
        <link rel="apple-touch-icon" sizes="180x180" href="/frontend/images/favicon_package_v0.16/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/frontend/images/favicon_package_v0.16/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/frontend/images/favicon_package_v0.16/favicon-16x16.png" />
        <link rel="manifest" href="/frontend/images/favicon_package_v0.16/site.webmanifest" />
        <link rel="mask-icon" href="/frontend/images/favicon_package_v0.16/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
      </head>
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
