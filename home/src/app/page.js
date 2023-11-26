'use client'
import Cert from './cert.js'
import Example from './link.js'
import Skill from './skill.js'
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
          </div>
      </div>
      
      <div className='absolute bottom-0 w-full'>
        <Foot>
        </Foot>
      </div>
    </>
  );
}
