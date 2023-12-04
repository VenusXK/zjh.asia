'use client'
import { Liu_Jian_Mao_Cao } from 'next/font/google'
const ljmc = Liu_Jian_Mao_Cao({ weight: ['400'],subsets: ['latin'] })

export default function Home() {

  return (
    <>
      <div className='jupyter'>
        <a href='http://zjh.asia:8888' target='_blank'>
          <img src='https://mysite-bucket.oss-cn-wulanchabu.aliyuncs.com/language_logo/jupyter-seeklogo.com.svg'></img>
        </a>
      </div>
      <div className={"container " + ljmc.className}>
        <ul>
          <li><div className="goto"><a href="https://zjh.asia/notebook" target="_blank">笔记</a></div></li>
          <li><div className="goto"><a href="https://zjh.asia/life" target="_blank">生活</a></div></li>
        </ul>
      </div>
      <div className={" footer"}>ZJH.ASIA</div>
    </>
  );
}
