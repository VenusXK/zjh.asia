'use client'
import { Liu_Jian_Mao_Cao } from 'next/font/google'
import TheMenu from './menu';

const ljmc = Liu_Jian_Mao_Cao({ weight: ['400'],subsets: ['latin'] })


export default function Home() {

  return (
    <>
      <div className='theMenu'>
        <TheMenu></TheMenu>
      </div>

      <div className={"container " + ljmc.className}>
        <ul>
          <li><div className="goto"><a href="https://zjh.asia/notebook" target="_blank">笔记</a></div></li>
          <li><div className="goto"><a href="https://zjh.asia/life" target="_blank">生活</a></div></li>
        </ul>
      </div>
    </>
  );
}
