import { Noto_Sans_SC } from 'next/font/google'
import './globals.css'

const notoSansSC = Noto_Sans_SC({weight:['600', '900'], subsets: ['latin'] })
export const metadata = {
  title: 'ZJH.ASIA',
  description: 'ZJH.ASIA',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="https://mysite-bucket.oss-cn-wulanchabu.aliyuncs.com/avator/zjh_roundfull.png?x-oss-process=style/small_size_rule" sizes="any" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Noto+Sans+SC" />
      <body className={notoSansSC.className}>{children}</body>
    </html>
  )
}
