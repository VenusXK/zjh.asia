// import { defineConfig } from 'vitepress'

module.exports = {
    markdown: {
      theme: {
        light: 'github-light',
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
        externalLinkIcon: false,
        // search: {
        //   provider: 'local',
        // },
        aside: true,
        outlineTitle: '大纲',
        outline: 'deep',
        darkModeSwitchLabel: '亮 / 暗',
        // siteTitle: 'zjh.asia',

        // ---------------------------------- nav ----------------------------------
        nav: [
          { text: '面经', items:[
            // { text: '我的经历', items: [
            //   { text: '2023冬季(大四)实习投递', link: '/Face-Warp/My-Experience/2023-Winter/2023-11-Pico.md' }
            // ]},
            { text: '企业面经', items: [
              {text: '字节跳动', link: '/Face-Warp/Enterprise/Byte-Dance/Pico-2022' },
              {text: '货拉拉', link: '/Face-Warp/Enterprise/Huolala/Android-2023' }
            ]}
          ]},
          { text: '底层', items:[
            { text: '计算机组成原理', items: [
              {text: '唐朔飞：计算机组成原理', link: '/Basement/SFTang-Computer-Consist/Multi-Body-Parallel-Memory-Body'},
            ]},
          ]},
          { text: '编程', items:[
            { text: '程序设计C/C++', items: [
              {text: '李昕：C/C++简明双链教程', link: '/Program/CPP/CPP-with-LIXIN/index'}
            ]},
            { text: '数据结构与算法', items: [
              { text: '何海涛：剑指OfferI&II', link: '/Program/OfferI&II/Binary-Tree'},
              { text: 'Sartaj Sahni：数据结构、算法与应用', link: '/Program/Sartaj_Sahni-DataStruct/Line-Struct/application'}
            ]},
          ]},
          { text: '美术', items:[
              {text: '互联网观点解读', link: '/Art/From-Internet/Canvas-Self-Study-Advice'}
          ]},
          { text: '生活记录', link: 'https://zjh.asia/life/' },
        ],

        // ---------------------------------- sidebar ----------------------------------

        sidebarMenuLabel: "Menu",
        sidebar: {
          'Art': [
            { text: '互联网观点解读', collapsed: true, items:[
                { text: '自学建议', collapsed: true,  items:[
                  {text: '油画自学建议', link: '/Art/From-Internet/Canvas-Self-Study-Advice'},
                  {text: '素描自学建议', link: '/Art/From-Internet/Canvas-Self-Study-Advice'},
                ]}
            ]},
          ],
          'Face-Warp': [
            // { text: '我的经历',  items:[
            //   { text: '2023冬季(大四)实习投递', collapsed: true, items:[
            //     {text: '字节跳动(PICO)Android开发', link: '/Face-Warp/My-Experience/2023-Winter/2023-11-Pico.md' },
            //     {text: '歌尔研发实习', link: '/Face-Warp/My-Experience/2023-Winter/2023-11-Goertek' }
            //   ]}
            // ]},
            { text: '企业面经',  items:[
              // { text: '未归类', link: '/Face-Warp/Fragment'},
              { text: '字节跳动', collapsed: true, items:[
                {text: '2022春季PICO青岛面经 1', link: '/Face-Warp/Enterprise/Byte-Dance/Pico-2022' },
                {text: '2022春季PICO青岛面经 2', link: '/Face-Warp/Enterprise/Byte-Dance/Pico-2022-2'},
              ]},
              { text: '货拉拉', collapsed: true, items:[
                {text: '2023春季安卓日常实习面经', link: '/Face-Warp/Enterprise/Huolala/Android-2023.md'},
              ]},
            ]},
          ],
          'Basement': [
            { text: '计算机组成原理',  items:[
              { text: '唐朔飞：计算机组成原理', collapsed: true,  items:[
                { text: '存储器', collapsed: true,  items:[
                  {text: '存储器的数据存放', link: '/Basement/SFTang-Computer-Consist/存储器的数据存放'},
                  {text: '多体并行存储器系统', link: '/Basement/SFTang-Computer-Consist/Multi-Body-Parallel-Memory-Body'},
                  {text: '存储器的扩展及与CPU的连接', link: '/Basement/SFTang-Computer-Consist/存储器的扩展及与CPU的连接'},
                  {text: '高速缓冲存储器', link: '/Basement/SFTang-Computer-Consist/高速缓冲存储器'},
                ]}
              ]},
            ]},
          ],
          'Program': [
            { text: '程序设计C/C++',  items:[
              { text: '李昕：C/C++简明双链教程', collapsed: true,  items:[
                {text: '一些对本专题的介绍', link: '/Program/CPP/CPP-with-LIXIN/',},
                {text: '周五随堂测试汇总', link: '/Program/CPP/CPP-with-LIXIN/test'},
                { text: '程序设计基础', collapsed: true, items:[
                  {text: '程序设计基础：上课重点', link: '/Program/CPP/CPP-with-LIXIN/chapter-2-important' },
                  {text: '程序设计基础：PTA作业', link: '/Program/CPP/CPP-with-LIXIN/chapter-2-pta' },
                ]},
                { text: '循环', collapsed: true, items:[
                  {text: '循环：上课重点', link: '/Program/CPP/CPP-with-LIXIN/chapter-4-important' },
                  {text: '循环：PTA作业', link: '/Program/CPP/CPP-with-LIXIN/chapter-4-pta' },
                ]},
                { text: '数组与字符串', collapsed: true, items:[
                  {text: '数组与字符串：上课重点', link: '/Program/CPP/CPP-with-LIXIN/chapter-5-important' },
                  {text: '数组与字符串：PTA作业', link: '/Program/CPP/CPP-with-LIXIN/chapter-5-pta' },
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
            { text: '数据结构与算法',  items:[
              { text: '何海涛：剑指OfferI&II', collapsed: true,  items:[
                {text: '二叉树相关算法', link: '/Program/OfferI&II/Binary-Tree'},
              ]},
              { text: 'Sartaj：数据结构算法与应用', collapsed: true, items:[
                { text: '线性存储结构', collapsed: true,  items:[
                  {text: '线性表的应用', link: '/Program/Sartaj_Sahni-DataStruct/Line-Struct/application'}
                ]},
              ]},
            ]},
          ]
        },

        // ---------------------------------- footer ----------------------------------

        footer: {
          message: '<span style="color: #d4d4d7; font-size: small">Copyright © 2023, Jinghe Zhang\
          &nbsp;\
          <a href="https://beian.miit.gov.cn/">冀ICP备2023030802号</a> \
          &nbsp;\
          <img src="https://mysite-bucket.oss-cn-wulanchabu.aliyuncs.com/other_icon/%E5%A4%87%E6%A1%88%E5%9B%BE%E6%A0%87.png" style="display: inline">\
              冀公网安备13010202003482号</a>\
            </span>'
        },
    },
  }