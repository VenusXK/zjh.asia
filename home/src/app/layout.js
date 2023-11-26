// import { Inter, Noto_Sans_SC, Noto_Sans_HK, Liu_Jian_Mao_Cao, Noto_Serif_SC, Noto_Serif_HK } from 'next/font/google'
import { Noto_Sans_SC } from 'next/font/google'
import './globals.css'

// const inter = Inter({ subsets: ['latin'] })
const notoSansSC = Noto_Sans_SC({weight:['600', '900'], subsets: ['latin'] })
// const notoSansHK = Noto_Sans_HK({ subsets: ['latin'] })
// const ljmc = Liu_Jian_Mao_Cao({ weight: ['400'],subsets: ['latin'] })
// const notoSerifHK = Noto_Serif_HK({ weight:['200', '300', '400', '500', '600', '700', '900'], subsets: ['latin'] })
// const notoSerifSC = Noto_Serif_SC({ weight:['200', '300', '400', '500', '600', '700', '900'], subsets: ['latin'] })
export const metadata = {
  title: 'zjh.asia',
  description: 'homepage of zjh.asia',
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
