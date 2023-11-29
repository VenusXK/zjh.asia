'use client'
import { Liu_Jian_Mao_Cao,Noto_Sans_SC } from 'next/font/google'
const notoSansSC = Noto_Sans_SC({weight:['600', '900'], subsets: ['latin'] })

export default function Home() {

  return (
    <>
      <div className="container">
        <ul>
          <li><a href="https://zjh.asia/notebook" target="_blank"><div className="goto">笔记</div></a></li>
          <li><a href="https://zjh.asia/life" target="_blank"><div className="goto">生活</div></a></li>
        </ul>
      </div>
      <div className={notoSansSC.className + " footer"}>ZJH.ASIA</div>
    </>
  );
}
