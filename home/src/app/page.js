'use client'
import TheMenu from './menu';

const text = "暂时的得意和挫折|从人生长度来看|并不重要|开心|才最重要 :-)"
const text_split = text.split('|');

function ShadeEachChar(){
  const shade = text_split.map((char, index) => {
    if(char.at(0) === "开"){
      return <>
      <span key={index} className='duration-100 ease-in hover:text-amber-300 dark:hover:text-purple-500 hover:bg-purple-500 dark:hover:bg-amber-300 z-10 hover:cursor-default'>
        <span className='underline decoration-wavy'>开心</span>
        {char.slice(2)}</span>
      </>
      
    }
    else{
      return <span key={index} className='duration-500 hover:text-black dark:hover:text-white hover:cursor-default'>{char}</span>
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
      {/*  */}
      <div className='m-auto text-stone-200 dark:text-black  w-full text-left text-9xl sm:text-8xl '>
          <ShadeEachChar />
      </div>
    </div>
  );
}
