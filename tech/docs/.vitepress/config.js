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
    base: '/',
    title: 'ZJH.ASIA',
    // description: 'Jinghe Zhang',
    lastUpdated: true,
    head:[
      ['link', {rel: 'icon', href: 'https://mysite-bucket.oss-cn-wulanchabu.aliyuncs.com/avator/zjh_roundfull.png?x-oss-process=style/small_size_rule'}],
    ],
    // Theme related configurations.
    themeConfig: {
        darkModeSwitchLabel: "明暗主题",
        // appearance: false,
        aside: true,
        outlineTitle: '内容目录',
        outlineBadges: true,
        outline: 'deep',
        // siteTitle: '景赫的小网站',

        // ---------------------------------- nav ----------------------------------
        nav: [
          // {
          //   text: '公开课',
          // },
          {
            text: '读书笔记',
            items:[
              {
                text: 'Online Judge',
                items: [
                  {text: '何海涛：剑指Offer I&II', link: 'OfferI&II/intro'},
                  {text: '李昕：C/C++简明双链教程', link: 'CPP-with-LIXIN/intro'},
                ]
              },
              {
                text: '深入理解计算机',
                items: [
                  {text: 'Sartaj Sahni：数据结构、算法与应用', link: 'Sartaj_Sahni-DataStruct/intro'},
                  {text: '唐朔飞：计算机组成原理（第3版）', link: '/SFTang-Computer-Consist/intro'},
                ]
              },
            ]
          },
          {
            text: '生活记录', link: 'https://zjh.asia/life/'
          },
          {
            text: '关于我', link: 'https://zjh.asia/aboutme/'
          },
        ],

        footer: {
          
          message: '<span style="color: #d4d4d7; font-size: small">Copyright © 2023, Jinghe Zhang\
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
          '/OfferI&II/': [
            {
              text: '开篇', link: '/OfferI&II/intro',
            },
            {
              text: '二叉树相关算法', link: '/OfferI&II/Binary-Tree',
            },
          ],
          '/Thinking-of-Howto/': [
            {
              text: '开篇', link: '/Thinking-of-Howto/intro',
            },
            {
              text: '时间分配', 
              items: [
                {
                  text: '时间分配方案及举例', link: '/Thinking-of-Howto/time-split',
                },
              ]
            }
          ],
          '/SFTang-Computer-Consist/': [
            {
              text: '关于: 计算机组成原理（第3版）', link: '/SFTang-Computer-Consist/关于',
            },
            {
              text: '存储器', 
              items: [
                {
                  text: '存储器的数据存放', link: '/SFTang-Computer-Consist/存储器的数据存放',
                },
                {
                  text: '多体并行存储器系统', link: '/SFTang-Computer-Consist/多体并行存储器系统',
                },
                {
                  text: '存储器的扩展及与CPU的连接', link: '/SFTang-Computer-Consist/存储器的扩展及与CPU的连接',
                },
                {
                  text: '高速缓冲存储器', link: '/SFTang-Computer-Consist/高速缓冲存储器',
                },
              ]
            }
          ],
          '/CPP-with-LIXIN/': [
            {
              text: '开篇', link: '/CPP-with-LIXIN/about',
            },
            {
              text: '第二章 程序设计基础',
              items: [
                { text: '教学内容精粹', link: '/CPP-with-LIXIN/chapter-2-important' },
                { text: 'PTA作业', link: '/CPP-with-LIXIN/chapter-2-pta' }
              ]
            }
          ],
          '/Sartaj_Sahni-DataStruct/': [
            {
              text: '关于：数据结构、算法与应用', link: '/Sartaj_Sahni-DataStruct/intro',
            },
            {
              text: '线性表',
              items: [
                // This shows `/guide/index.md` page.
                { text: '线性表的应用', link: '/Sartaj_Sahni-DataStruct/线性表/线性表的应用' }
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