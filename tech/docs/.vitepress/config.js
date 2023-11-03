// import { defineConfig } from 'vitepress'

module.exports = {
    markdown: {
      theme: {
        light: 'github-light',
        dark: 'github-dark'
      },
      lineNumbers: true,
    },
    base: '/',
    title: 'ZJH.ASIA',
    // description: 'Jinghe Zhang',
    lastUpdated: true,
    head:[
      ['link', {rel: 'icon', href: 'https://mysite-bucket.oss-cn-wulanchabu.aliyuncs.com/avator/zjh_roundfull.png?x-oss-process=style/small_size_rule'}],
    ],
    themeConfig: {
        darkModeSwitchLabel: " ",
        aside: true,
        outlineTitle: '内容目录',
        // outlineBadges: true,
        outline: 'deep',
        // siteTitle: '景赫的小网站',

        // ---------------------------------- nav ----------------------------------
        nav: [
          {
            text: '程序设计',
            items:[
              {
                text: '公开课',
                items: [
                  {text: '李昕：C/C++简明双链教程', link: 'CPP-with-LIXIN/intro'},
                ]
              },              
              {
                text: '数据结构与算法',
                items: [
                  {text: '何海涛：剑指OfferI&II', link: 'OfferI&II/intro'},
                  {text: 'Sartaj Sahni：数据结构、算法与应用', link: 'Sartaj_Sahni-DataStruct/intro'},
                ]
              },
            ]
          },
          {
            text: '深入理解计算机',
            items:[
              {
                text: '组成原理',
                items: [
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

        // ---------------------------------- sidebar ----------------------------------

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
              text: '时间管理', 
              items: [
                {
                  text: '时间分配方案及举例', link: '/Thinking-of-Howto/time-split',
                },
              ]
            }
          ],
          '/SFTang-Computer-Consist/': [
            {
              text: '关于: 计算机组成原理（第3版）', link: '/SFTang-Computer-Consist/intro',
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
              text: '开篇', link: '/CPP-with-LIXIN/intro',
            },
            {
              text: '第二章 程序设计基础',
              items: [
                { text: '上课重点内容', link: '/CPP-with-LIXIN/chapter-2-important' },
                { text: 'PTA作业', link: '/CPP-with-LIXIN/chapter-2-pta' }
              ]
            },
            {
              text: '第四章 循环',
              items: [
                { text: '上课重点内容', link: '/CPP-with-LIXIN/chapter-4-important' }
              ]
            },
            {
              text: '第五章 数组与字符串',
              items: [
                { text: 'PTA作业', link: '/CPP-with-LIXIN/chapter-5-pta' }
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

        externalLinkIcon: false,
    },

  }