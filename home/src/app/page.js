'use client'
import TheMenu from './menu';

const text = "暂时 的 得意 和 挫折 从 人生 长度 来看 并不 重要 开心 才是 最重要的 :-)"
const text_split = text.split(' ');

function ShadeEachChar(){
  const shade = text_split.map((char, index) => {
    if(char === "开心"){
      return <span key={index} className='delay-500 duration-200 ease-in hover:text-white hover:bg-purple-500 dark:hover:bg-amber-500 z-10 hover:cursor-default'>开心</span>
    }
    else{
      return <span key={index} className='delay-500 duration-1000 hover:text-black dark:hover:text-white hover:cursor-default'>{char}</span>
    }
  })
  return <div>{shade}</div>
}


export default function Home() {

  return (
    <div className='max-w-[85%] m-auto mb-20'>
      <div className='theMenu'>
        <TheMenu></TheMenu>
      </div>
      <div className=' text-white/0 dark:text-white/0 m-auto w-full text-left text-9xl sm:text-8xl '>
          <ShadeEachChar />
      </div>
    </div>
  );
}
