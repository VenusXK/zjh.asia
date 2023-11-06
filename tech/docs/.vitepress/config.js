// import { defineConfig } from 'vitepress'

module.exports = {
    markdown: {
      theme: {
        light: 'slack-ochin',
        dark: 'slack-dark'
      },
      lineNumbers: true,
      math: true,
    },
    base: '/',
    title: 'ZJH.ASIA',
    // description: 'Jinghe Zhang',
    lastUpdated: true,
    head:[
      ['link', {rel: 'icon', href: 'https://mysite-bucket.oss-cn-wulanchabu.aliyuncs.com/avator/zjh_roundfull.png?x-oss-process=style/small_size_rule'}],
    ],
    themeConfig: {
        search: {
          provider: 'local',
        },
        aside: true,
        outlineTitle: '大纲',
        outline: 'deep',
        darkModeSwitchLabel: '亮 / 暗',
        // siteTitle: 'zjh.asia',

        // ---------------------------------- nav ----------------------------------
        nav: [
          {
            text: '程序设计',
            items:[{
                text: '程序设计C/C++',
                items: [
                  {text: '李昕：C/C++简明双链教程', link: '/CPP/CPP-with-LIXIN/index'},
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
            text: '深入计算机',
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
          '/SFTang-Computer-Consist/': [
            {
              text: '关于: 计算机组成原理（第3版）', link: '/SFTang-Computer-Consist/intro',
            },
            {
              text: '存储器', 
              items: [
                {text: '存储器的数据存放', link: '/SFTang-Computer-Consist/存储器的数据存放'},
                {text: '多体并行存储器系统', link: '/SFTang-Computer-Consist/多体并行存储器系统'},
                {text: '存储器的扩展及与CPU的连接', link: '/SFTang-Computer-Consist/存储器的扩展及与CPU的连接'},
                {text: '高速缓冲存储器', link: '/SFTang-Computer-Consist/高速缓冲存储器'},
              ]
            }
          ],
          'CPP': [
            { text: '程序设计C/C++',  items:[
              { text: '李昕：C/C++简明双链教程', collapsed: true,  items:[
                {text: '一些对本专题的介绍', link: '/CPP/CPP-with-LIXIN/',},
                {text: '周五随堂测试汇总', link: '/CPP/CPP-with-LIXIN/test'},
                { text: '程序设计基础', collapsed: true, items:[
                  {text: '程序设计基础：上课重点', link: '/CPP/CPP-with-LIXIN/chapter-2-important' },
                  {text: '程序设计基础：PTA作业', link: '/CPP/CPP-with-LIXIN/chapter-2-pta' },
                ]},
                { text: '循环', collapsed: true, items:[
                  {text: '循环：上课重点', link: '/CPP/CPP-with-LIXIN/chapter-4-important' },
                  {text: '循环：PTA作业', link: '/CPP/CPP-with-LIXIN/chapter-4-pta' },
                ]},
                { text: '数组与字符串', collapsed: true, items:[
                  {text: '数组与字符串：上课重点', link: '/CPP/CPP-with-LIXIN/chapter-5-important' },
                  {text: '数组与字符串：PTA作业', link: '/CPP/CPP-with-LIXIN/chapter-5-pta' },
                ]},           
                { text: '指针', collapsed: true, items:[
                  {text: '指针：上课重点', link: '' },
                  {text: '指针：PTA作业', link: '' },
                ]},             
                { text: '面向对象', collapsed: true, items:[
                  {text: '面向对象：上课重点', link: '' },
                  {text: '面向对象：PTA作业', link: '' },
                ]},             
                { text: '模板和容器', collapsed: true, items:[
                  {text: '模板和容器：上课重点', link: '' },
                  {text: '模板和容器：PTA作业', link: '' },
                ]},
              ]},
            ]},
          ],
          '/Sartaj_Sahni-DataStruct/': [
            {
              text: '关于：数据结构、算法与应用', link: '/Sartaj_Sahni-DataStruct/intro',
            },
            {
              text: '线性表',
              items: [
                { text: '线性表的应用', link: '/Sartaj_Sahni-DataStruct/线性表/线性表的应用' }
              ]
            }
          ],
        },

        externalLinkIcon: false,
    },

  }