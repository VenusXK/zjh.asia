import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { CubeTransparentIcon } from '@heroicons/react/20/solid'

export default function TheMenu() {
  return (
    <>
    <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-none px-4 py-2 text-sm font-medium text-black  hover:text-gray-900/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
          {/* <span className='text-lg -translate-y-1 tracking-wide'>jeyhin</span> */}
          <CubeTransparentIcon
            className="-mr-1 ml-2 h-10 md:h-8 sm:h-6 duration-1000 text-black"
            aria-hidden="true"
          />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 w-[300px] origin-top-right">
            <div className="px-1 py-1 ">
              <a href='http://zjh.asia:8888' target='_blank'>
                
                <Menu.Item>
                  {({ active }) => (
                    <>
                    
                    <button
                      className={`${
                        active ? 'underline' : ''
                      } group flex w-full items-center rounded-md px-2 py-2 text-lg md:text-base sm:text-sm`}
                    >
                    
                      {/* <EditActiveIcon
                          className="mr-2 h-5 w-5"
                          aria-hidden="true"
                        /> */}
                        <div className='text-right w-full'>
                        Jupyter Notebook
                        </div>
                      
                    </button>
                    </>
                  )}
                </Menu.Item>
              </a>
            </div>
          </Menu.Items>
          
        </Transition>
      </Menu>
    </>

  )
}

function EditActiveIcon(props) {
  return (
    <img className='w-3 mx-2' src='https://mysite-bucket.oss-cn-wulanchabu.aliyuncs.com/language_logo/jupyter-seeklogo.com.svg'></img>
  )
}

