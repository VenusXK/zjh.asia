export default function Foot(){
    return (
        <>
        <div className=" w-full h-32 sm:h-26 bg-gradient-to-b from-white to-gray-200 items-center justify-center text-center">
                <div className="line-clamp-1 sm:px-10 text-center translate-y-14" style={{ color: '#888', fontSize: 'small' }}>
                    Copyright © 2023, Jinghe Zhang&nbsp;&nbsp;
                    <a href="https://beian.miit.gov.cn/">冀ICP备2023030802号</a>&nbsp;&nbsp;
                    <img src="https://mysite-bucket.oss-cn-wulanchabu.aliyuncs.com/other_icon/%E5%A4%87%E6%A1%88%E5%9B%BE%E6%A0%87.png" style={{ display: 'inline' }} />
                    冀公网安备13010202003482号
                </div>
        </div>
        </>
    );
}