import Image from 'next/image'

const languageArr = [
    // {name: 'Android', key: '1', logo:'https://mysite-bucket.oss-cn-wulanchabu.aliyuncs.com/language_logo/Android_logo_2023_%28stacked%29.svg', sizeClass: 'w-32 pr-4'},
    // {name: 'NextJS', key: '1', logo:'https://mysite-bucket.oss-cn-wulanchabu.aliyuncs.com/language_logo/Nextjs-logo.svg', sizeClass: 'w-44'},
    // {name: 'React', key: '1', logo:'https://mysite-bucket.oss-cn-wulanchabu.aliyuncs.com/language_logo/reactjs-ar21.svg', sizeClass: 'w-44'},
    // {name: 'Kotlin', key: '1', logo:'https://mysite-bucket.oss-cn-wulanchabu.aliyuncs.com/language_logo/kotlinlang-ar21.svg', sizeClass: 'w-44'},
    // {name: 'Python', key: '1', logo:'https://mysite-bucket.oss-cn-wulanchabu.aliyuncs.com/language_logo/python-ar21.svg', sizeClass: 'w-44'},
    {name: 'Java', key: '1', logo:'https://mysite-bucket.oss-cn-wulanchabu.aliyuncs.com/language_logo/java-ar21.svg', sizeClass: 'w-72 sm:w-48' },
    {name: 'C/C++', key: '4', logo:'https://mysite-bucket.oss-cn-wulanchabu.aliyuncs.com/language_logo/The_C_and_C%2B%2B_programming_languages_wordart.svg', sizeClass: 'w-36 sm:w-32'},
]

export default function Lanuagge(){
    const languageList = languageArr.map(languageItem =>
        <Image src={languageItem.logo} width={100} height={100} key={languageItem.key} className={languageItem.sizeClass + ' inline m-2 sm:m-0'} alt={languageItem.logo} ></Image>    
    )
    return (
        <div className='max-w-3xl text-center  m-auto'>
            {/* <div className="m-auto text-center">
                {languageList}
            </div> */}
            <div className="w-auto flex items-center  text-center m-auto text-6xl sm:text-4xl pt-6">
                <span className='w-full font-bold text-center'>正在考研</span>
            </div>
        </div>
        
        
    );
}
