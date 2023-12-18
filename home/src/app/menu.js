import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { CubeTransparentIcon } from '@heroicons/react/20/solid'

const link_bucket = [
  { id: 0, link_title: '生活记录', display: true, link_href: 'http://zjh.asia/life' },
  { id: 1, link_title: '笔记', display: true, link_href: 'http://zjh.asia/notebook' },
  { id: 2, link_title: 'Jupyter Notebook', display: true, link_href: 'http://zjh.asia:8888' },
  { id: 3, link_title: '肖秀荣', display: true , link_href: 'https://weibo.com/u/1227078145'},
  { id: 4, link_title: '武忠祥', display: true, link_href: 'https://www.weibo.com/n/%E6%AD%A6%E5%BF%A0%E7%A5%A5%E8%80%81%E5%B8%88' },
]

function Menu_list() {
  const link_avaliable = link_bucket.filter(link =>
    link.display === true
  );
  const menu_items = link_avaliable.map(link_avaliable =>
    <div key={link_avaliable.id} className="px-1 py-1 border-b border-white dark:border-black text-white dark:text-black !important">
      <a href={link_avaliable.link_href} target='_blank'>
        <Menu.Item>
          {({ active }) => (                    
              <button
                className={`${
                  active ? 'underline' : ''
                }  group text-right w-full items-center px-2 py-2 text-lg md:text-base sm:text-xl`}
              >

                {link_avaliable.link_title}

              </button>
          )}
        </Menu.Item>
      </a>
    </div>
  );
  return <div>{menu_items}</div>;
}

export default function TheMenu() {
  return (
    <>
    <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="backdrop-invert inline-flex w-full justify-center mb-1 px-4 py-2 text-sm font-medium">
          {/* <span className='text-lg -translate-y-1 tracking-wide'>jeyhin</span> */}
          <CubeTransparentIcon
            className="-mr-1 ml-2 h-10 md:h-9 sm:h-18 duration-1000 text-white dark:text-black bg-black dark:bg-white !important"
            aria-hidden="false"
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
          <Menu.Items className=" backdrop-invert backdrop-blur-sm bg-opacity-40 bg-black/10 dark:bg-white/10 absolute right-0 w-max origin-top-right">
          <Menu_list></Menu_list>

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

