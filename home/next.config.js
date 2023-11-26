/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '',
    output: 'export',
    images: {
        domains:['mysite-bucket.oss-cn-wulanchabu.aliyuncs.com']
    },
}

module.exports = nextConfig



