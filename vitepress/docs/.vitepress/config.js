import { defineConfig } from 'vitepress'
import markdownItKatex from 'markdown-it-katex'


const customElements = [
  'math',
  'maction',
  'maligngroup',
  'malignmark',
  'menclose',
  'merror',
  'mfenced',
  'mfrac',
  'mi',
  'mlongdiv',
  'mmultiscripts',
  'mn',
  'mo',
  'mover',
  'mpadded',
  'mphantom',
  'mroot',
  'mrow',
  'ms',
  'mscarries',
  'mscarry',
  'mscarries',
  'msgroup',
  'mstack',
  'mlongdiv',
  'msline',
  'mstack',
  'mspace',
  'msqrt',
  'msrow',
  'mstack',
  'mstack',
  'mstyle',
  'msub',
  'msup',
  'msubsup',
  'mtable',
  'mtd',
  'mtext',
  'mtr',
  'munder',
  'munderover',
  'semantics',
  'math',
  'mi',
  'mn',
  'mo',
  'ms',
  'mspace',
  'mtext',
  'menclose',
  'merror',
  'mfenced',
  'mfrac',
  'mpadded',
  'mphantom',
  'mroot',
  'mrow',
  'msqrt',
  'mstyle',
  'mmultiscripts',
  'mover',
  'mprescripts',
  'msub',
  'msubsup',
  'msup',
  'munder',
  'munderover',
  'none',
  'maligngroup',
  'malignmark',
  'mtable',
  'mtd',
  'mtr',
  'mlongdiv',
  'mscarries',
  'mscarry',
  'msgroup',
  'msline',
  'msrow',
  'mstack',
  'maction',
  'semantics',
  'annotation',
  'annotation-xml'
]


module.exports = {
    base: '/tech/',
    title: '技术博客',
    description: '张景赫',
    lastUpdated: true,
    head:[
      ['link', {rel: 'icon', href: 'https://mysite-bucket.oss-cn-wulanchabu.aliyuncs.com/avator/zjh_roundfull.png?x-oss-process=style/small_size_rule'}],
      // ['link', {rel: 'stylesheet', href: '/output_vitepress.css'}],
      // ['link', { rel: 'stylesheet', href: '/katex.min.css', crossorigin: '' }]
    ],
    // Theme related configurations.
    themeConfig: {
        aside: true,
        outlineTitle: '内容目录',
        outlineBadges: true,
        outline: 'deep',
        siteTitle: 'ZJH.ASIA/TECH',

        // ---------------------------------- nav ----------------------------------
        nav: [
          {
            text: '读书笔记',
            items:[
              {text: 'Sartaj Sahni：数据结构、算法与应用', link: 'Sartaj_Sahni-DataStruct/'}
            ]
          },
          {
            text: '开发经验',
            items:[
              {text: '静态站点的解决方案', link: '/Static-Site-Development/'}
            ]
          },
          // { text: '简历', link: 'https://zjh.asia/academic/简历.pdf' },
        ],

        footer: {
          
          message: '<span style="color: #d4d4d7; font-size: small">Copyright © 2023, 张景赫\
          &nbsp;\
          <a href="https://beian.miit.gov.cn/">冀ICP备2023030802号</a> \
          &nbsp;\
          <img src="https://mysite-bucket.oss-cn-wulanchabu.aliyuncs.com/other_icon/%E5%A4%87%E6%A1%88%E5%9B%BE%E6%A0%87.png" style="display: inline">\
              冀公网安备13010202003482号</a>\
            </span>'
        },

        // external
        sidebarMenuLabel: "Menu",
        sidebar: {
          '/Sartaj_Sahni-DataStruct/': [
            {
              text: '开篇', link: '/Sartaj_Sahni-DataStruct/index'
              // items: [
              //   // This shows `/guide/index.md` page.
              //   { text: '介绍本书', link: '/Sartaj_Sahni-DataStruct/index' }
              // ]
            }
          ],
          '/Static-Site-Development/': [
            {
              text: '开发经验', 
              items: [
                // This shows `/guide/index.md` page.
                { text: '开篇：为什么要搭建静态博客', link: '/Static-Site-Development/index'},
                { text: '使用阿里云OSS进行图片存储', link: '/Static-Site-Development/阿里云OSS图片存储'},
              ]
            },
            {
              text: '有用的资源', 
              items: [
                // This shows `/guide/index.md` page.
                { text: '插入一些插画图', link: '/Static-Site-Development/插入一些插画图' },
              ]
            }
          ],
        },

        externalLinkIcon: true,
    },

    // plugins
    // katex
    markdown: {
      config: (md) => {
        md.use(markdownItKatex)
      }
    },
    // 由于vitepress编译生成静态html文件时，无法识别插件生成的特殊标签，故需在编译时进行处理，将特殊标签定位自定义标签，防止编译报错
    vue: {
      template: {
        compilerOptions: {
          isCustomElement: (tag) => customElements.includes(tag)
        }
      }
    }

  }