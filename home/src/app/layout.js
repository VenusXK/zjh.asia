// import { Inter, Noto_Sans_SC, Noto_Sans_HK, Liu_Jian_Mao_Cao, Noto_Serif_SC, Noto_Serif_HK } from 'next/font/google'
import { Liu_Jian_Mao_Cao,Noto_Sans_SC } from 'next/font/google'
import './globals.css'

const notoSansSC = Noto_Sans_SC({weight:['600', '900'], subsets: ['latin'] })
const ljmc = Liu_Jian_Mao_Cao({ weight: ['400'],subsets: ['latin'] })
export const metadata = {
  title: 'ZJH.ASIA',
  description: 'homepage of zjh.asia',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="https://mysite-bucket.oss-cn-wulanchabu.aliyuncs.com/avator/zjh_roundfull.png?x-oss-process=style/small_size_rule" sizes="any" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Noto+Sans+SC" />
      <body className={ljmc.className}>{children}</body>
    </html>
  )
}
