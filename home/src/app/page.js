'use client'
import { Liu_Jian_Mao_Cao,Noto_Sans_SC } from 'next/font/google'
const notoSansSC = Noto_Sans_SC({weight:['600', '900'], subsets: ['latin'] })

export default function Home() {

  return (
    <>
      <div className="container">
        <ul>
          <li><div className="goto"><a href="https://zjh.asia/notebook" target="_blank">笔记</a></div></li>
          <li><div className="goto"><a href="https://zjh.asia/life" target="_blank">生活</a></div></li>
        </ul>
      </div>
      <div className={notoSansSC.className + " footer"}>ZJH.ASIA</div>
    </>
  );
}
