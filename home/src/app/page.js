'use client'
import Image from 'next/image'
import Cert from './cert.js'
import Example from './link.js'
import Poster from './poster.js'
// import Paper from './paper.js'
import Skill from './skill.js'
import QA from './QA.js'
import Target from './target.js'
import Intro from './intro.js'
import Paper from './paper.js'
import Foot from './foot.js'

export default function Home() {

  return (
    <>
      <div className='m-auto sm:min-h-screen bg-purple-50/10'>
        
          <div className='sm:pt-5 '>
            <div className='w-auto h-auto items-center justify-center pt-24 sm:pt-10 overflow-hidden'>
            <div className='max-w-3xl sm:pl-[2%] m-auto sm:ml-[10%]'>
              <Example />
            </div>
            <Cert />
            </div>
            {/* <div className='pt-20'>
              <Skill />
            </div> */}
            {/* <div className='pt-24'>
              <Target />
            </div> */}
            {/* <div className='pt-10'>
              <Paper />
            </div> */}
            
            {/* <div className='pt-20'>
              <QA />
            </div> */}
            
          </div>
      </div>
      
      <div className='absolute bottom-0 w-full'>
        <Foot>
        
        </Foot>
      </div>
    </>
  );
}
