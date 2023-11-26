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

const certArr = [
    
    { order:1, title: 'test1', color: 'orange', content: contentHello},
    { order: 2, title: 'test2', color: 'purple', content: contentIntro},
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

function CelebrateModel({logo1, logo2, logo3, text1, text2, classLogo1, classLogo2, classLogo3, classText1, classText2}){
    return (
        <div className="flex w-full flex-col items-stretch rounded-t-[50%] text-center">
            <div className="mb-2 items-center justify-center font-bold">
                <div className={classLogo1}><img src={logo1}></img></div>
                <div className={classLogo2}><img src={logo2}></img></div>
                <div className={classLogo3}><img src={logo3}></img></div>
                <div className={classText1}>{text1}</div>
                <div className={classText2}>{text2}</div>
            </div>
        </div>
    );
}


function ContentModel({logo, text1, text2, classLogo, classText1, classText2}){
    return (
        <div className="flex w-full flex-col items-stretch rounded-t-[50%] text-center">
            <div className="mb-2 items-center justify-center font-bold">
                <div className={classLogo}><img src={logo}></img></div>
                <div className={classText1}>{text1}</div>
                <div className={classText2}>{text2}</div>
            </div>
        </div>
    );
}

function contentHello(){
    return (
        <CelebrateModel
        logo3="https://mysite-bucket.oss-cn-wulanchabu.aliyuncs.com/illustrations/glow-confetti.png"
        classLogo3="scale-[1.2] sm:scale-[0.83] rotate-45 absolute w-[800px] top-[300px] left-[10px] sm:left-[-110px] m-auto p-4 sm:px-10 "
        logo2="https://mysite-bucket.oss-cn-wulanchabu.aliyuncs.com/illustrations/atomic-confetti.png"
        classLogo2="scale-[1.2] sm:scale-[0.83] absolute w-[800px] rotate-90 sm:rotate-0 left-[30px] top-[300px] sm:top-[20px] sm:left-[-100px] m-auto p-4 sm:px-10"
        logo1="https://mysite-bucket.oss-cn-wulanchabu.aliyuncs.com/illustrations/glow-confetti.png" 
        classLogo1="scale-[1.2] sm:scale-[0.83] absolute w-[800px] top-[40px] left-[550px] sm:top-[0px] sm:left-[-90px] m-auto p-4 sm:px-10"
        text1="欢迎光临" classText1=" z-10 text-6xl sm:text-4xl p-2 sm:px-10"
        text2="ZJH.ASIA" classText2="text-6xl sm:text-4xl p-2 sm:px-10">
    </CelebrateModel>
    );
}


function contentIntro(){
    return (
        <ContentModel
            logo="https://mysite-bucket.oss-cn-wulanchabu.aliyuncs.com/illustrations/active-young-man-thinking%20%281%29.png" 
            classLogo="w-[200px] m-auto p-4 sm:px-10"
            text1="我是张小赫" classText1="text-6xl sm:text-4xl p-2 sm:px-10"
            text2="这里是我的个人网站" classText2="text-6xl sm:text-4xl p-2 sm:px-10">
        </ContentModel>
    );
}


