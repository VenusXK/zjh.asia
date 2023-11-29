import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import Lanuagge from './skill';
import './cert.css';

// import required modules
import { EffectCards } from 'swiper/modules';

import { useSwiperSlide } from 'swiper/react';
import { useSwiper } from 'swiper/react';



import { Liu_Jian_Mao_Cao,Noto_Sans_SC } from 'next/font/google'

const notoSansSC = Noto_Sans_SC({weight:['600', '900'], subsets: ['latin'] })
const ljmc = Liu_Jian_Mao_Cao({ weight: ['400'],subsets: ['latin'] })



const certArr = [
    
    { order:1, title: 'test1', color: 'orange', content: contentHello},
    { order: 2, title: 'test2', color: 'purple', content: contentIntro},
    // { order: 2, title: 'test2', color: 'purple', content: contentCoffee},
    // { order: 2, title: 'test2', color: 'yellow', content: Lanuagge},
];

function SlideTitle() {
    const swiperSlide = useSwiperSlide();
}    

function HrefRender(){
    const hrefList = certArr.map(certItem => 
        <SwiperSlide key={certItem.order} className={"cert-swiper-slide swiper-slide-" + certItem.color}>
            <SlideTitle></SlideTitle>
                <certItem.content />
        </SwiperSlide>
    );

    return (
        <div className='m-auto pt-4'>
                <Swiper
                    effect={'cards'}
                    grabCursor={false}
                    modules={[EffectCards]}
                    className="cert-swiper"
                >
                    {hrefList}  
                </Swiper>
                
        </div>
    );
}


export default function Cert() {
  return (
    <>
      <HrefRender />
    </>
  );
}

function contentIntro(){
    return (
        <ContentModel
            logo="https://mysite-bucket.oss-cn-wulanchabu.aliyuncs.com/illustrations/active-young-man-thinking%20%281%29.png" 
            classLogo="w-[200px] m-auto p-4 sm:px-10"
            // text1="我是" classText1="text-5xl sm:text-4xl p-2 sm:px-10"
            text2="My Name" classText2={ljmc.className + " text-9xl sm:text-6xl text-right pr-24 sm:px-10"}>
        </ContentModel>
    );
}

function ContentModel({logo, text1, text2, classLogo, classText1, classText2}){
    return (
        <div className="flex w-full flex-col items-stretch rounded-t-[50%] text-center">
            <div className="mb-2 items-center justify-center font-bold">
                {/* <div className={classLogo}><img src={logo}></img></div> */}
                <div className={classText1}>{text1}</div>
                <div className={classText2}>{text2}</div>
            </div>
        </div>
    );
}

function contentHello(){
    return (
        <div className="flex w-full flex-col items-stretch rounded-t-[50%] text-center">
        <div className="mb-2 items-center justify-center font-bold">
            {/* <div className="scale-[1.8] sm:scale-[0.83] absolute w-[800px] top-[40px] left-[550px] sm:top-[0px] sm:left-[-90px] m-auto p-4 sm:px-10"><img src="https://mysite-bucket.oss-cn-wulanchabu.aliyuncs.com/illustrations/glow-confetti.png"></img></div> */}
            {/* <div className="scale-[1.8] sm:scale-[0.83] absolute w-[800px] rotate-90 sm:rotate-0 left-[30px] top-[300px] sm:top-[20px] sm:left-[-100px] m-auto p-4 sm:px-10"><img src="https://mysite-bucket.oss-cn-wulanchabu.aliyuncs.com/illustrations/atomic-confetti.png"></img></div>
            <div className="scale-[1.8] sm:scale-[0.83] rotate-45 absolute w-[800px] top-[300px] left-[0px] sm:left-[-110px] m-auto p-4 sm:px-10"><img src="https://mysite-bucket.oss-cn-wulanchabu.aliyuncs.com/illustrations/glow-confetti.png"></img></div> */}
            <div className=' w-[120%] sm:w-[500px] h-[120%] sm:h-[200%] -mx-20  -mt-28 sm:mt-0 m-auto'>
            <div className={ljmc.className + ' italic absolute top-[30%] sm:top-[50%] left-[10%] bottom-0 text-[200px] sm:text-8xl text-white m-auto'}>Hello</div>
            <div className={ " italic z-10 text-8xl sm:text-5xl sm:px-3 leading-tight sm:leading-normal m-auto"}>你好&nbsp;你好&nbsp;你好&nbsp;你好<br />你好&nbsp;你好&nbsp;你好&nbsp;你好<br />你好&nbsp;你好&nbsp;你好&nbsp;你好<br />你好&nbsp;你好&nbsp;你好&nbsp;你好<br />你好&nbsp;你好&nbsp;你好&nbsp;你好<br />你好&nbsp;你好&nbsp;你好&nbsp;你好<br />你好&nbsp;你好&nbsp;你好&nbsp;你好<br />你好&nbsp;你好&nbsp;你好&nbsp;你好<br /></div>
            </div>
        </div>
    </div>
    );
}

