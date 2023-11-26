import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

const qaArray = [
    { order: 1, ask: '测试', ans: '测试'},
    { order: 1, ask: '测试', ans: '测试'},
    { order: 1, ask: '测试', ans: '测试'},
    { order: 1, ask: '测试', ans: '测试'},

]

export default function QA() {
    const qaList = qaArray.map(qaItem =>
        // eslint-disable-next-line react/jsx-key
        <Disclosure  as="div" className="mb-2 last:mb-0">
          {({ open }) => (
            <>
                <Disclosure.Button className=" flex w-full h-20 items-center  justify-between rounded-xl bg-gray-100 px-4 py-2 text-left text-sm font-bold text-xl text-gray-900 hover:bg-gray-200 focus:outline-none ">
                
                <span>
                    <span className='text-xl text-purple-400 font-bold'>Q：</span>
                    {qaItem.ask}
                </span>
                </Disclosure.Button>

                <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                {qaItem.ans}
                </Disclosure.Panel>
            </>
          )}
          </Disclosure>
    )
  return (

    <>
        <div className=" flex h-18 w-full flex-col items-stretch rounded-t-[50%]  text-center ">
                <div className="mb-2 flex flex-none items-center justify-center gap-2 text-xl font-bold">
                    <div className="mr-4 h-px flex-1 bg-gradient-to-l from-gray-100 to-white"></div>
                    <h2 className="text-3xl font-bold 2xl:text-4xl">Q&A</h2>
                    <div className="ml-4 h-px flex-1 bg-gradient-to-r from-gray-100 to-white"></div>
                </div>
                <p className="flex-none text-lg text-gray-500 2xl:text-xl">
                    Questions and Answers.
                </p>
        </div>

        <div className="max-w-3xl pl-5 pt-4 m-auto">
            <div className="mx-auto w-full rounded-2xl bg-white p-2">
                    {qaList}
            </div>
        </div>
    </>

    
  )
}