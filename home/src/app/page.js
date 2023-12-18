'use client'
import TheMenu from './menu';



export default function Home() {

  return (
    <div className='max-w-[85%] m-auto mb-20'>
      <div className='theMenu'>
        <TheMenu></TheMenu>
      </div>
      <div className='text-black dark:text-white m-auto font-mono w-full text-left text-9xl sm:text-8xl '>
          暂时的得意和挫折从人生的长度上来看并不重要，<strong className='text-red-700 dark:text-red-400 animate-spin'>开心</strong>才是最重要的。
      </div>
    </div>
  );
}
