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

            { text: '面试教程', items: [
              {text: '何海涛：剑指Offer名企面试官精讲典型编程题', link: '/Face-Warp/From-Book/OfferI&II/I-chapter-1' },
            ]},
            // { text: '我的经历', link: '/Face-Warp/My-Experience/2023-Winter/2023-11-Goertek'},
            { text: '企业面经', link:'/Face-Warp/Enterprise/Byte-Dance/Pico-2022'},
          ]},
          { text: '底层', items:[
            { text: '计算机组成原理', items: [
              // {text: '唐朔飞：计算机组成原理', link: '/Basement/SFTang-Computer-Consist/Multi-Body-Parallel-Memory-Body'},
              { text: '王道论坛：复习指导(组成原理)', link: '/Basement/Wang-Dao/Float&IEEE754'},
              { text: '山东大学：计算机专硕考研(组成原理)', link: '/Basement/SDU/Examination-2023'},
            ]},
            { text:'编译原理', items:[
              { text: 'Alfred等：Compilers Principles, Techniques, & Tools', link: '404page'},
              { text: '俞甲子等：程序员的自我修养，编译、装载与库', link: '404page'},
              { text: '陈莉君等：深入理解LINUX内核', link: '404page'}
            ]},
            { text:'操作系统', items:[
              { text: 'Andrew等：Modern Operating Systems', link: '404page'},
              { text: 'Randal等：Computer Systems-A Programmer\'s Perspective', link: '404page'}
            ]},
          ]},
          { text: '程序', items:[
            { text: 'C/C++', items: [
              {text: '李昕：C/C++简明双链教程', link: '/Program/CPP/CPP-with-LIXIN/index'},
            ]},
            { text: 'Java/Kotlin',  items:[
              { text: '耿祥义：Java2实用教程', link: '/Program/Java/XYGeng_Java2/Java入门'},
              { text: '水滴技术团队：Kotlin核心编程', link:'404page'},
              { text: 'Dmitry Jemerov等：Kotlin in Action', link:'404page'},
            ]},
            { text: '数据结构与算法', items: [
              { text: '山东大学：计算机专硕考研(数据结构)', link: '/Program/Data-Struct/OfferI&II/Binary-Tree'},
              { text: 'Sartaj Sahni：Data Structures, Algorithms, and Applications in C++', link: '/Program/Data-Struct/Sartaj_Sahni-DataStruct/Line-Struct/application'}
            ]},
            { text: '设计模式', items:[
              { text: 'GOF：Design Patterns Elements of Reusable Object-Oriented Software', link:'404page'}
            ]},
            { text: 'Android', items:[
              { text: '欧阳燊：AndroidStudio开发实战-从零基础到APP上线', link: '404page'},
              { text: '李刚：疯狂Android讲义', link:'404page'},
              { text: '王明发：(Java)Android编程权威指南', link:'404page'},
              { text: '王明发：(Kotlin)Android编程权威指南', link:'404page'},
            ]},
          ]},
          { text: '美术', items:[          
              {text: '素描基本技法', items:[
                {text: '素描的诀窍', link: '404page'}
              ]},
              {text: '素描技巧分析', items:[
                {text: '艺用人体结构', link: '404page'},
                {text: '路米斯：人体素描', link: '404page'},
                {text: '路米斯：头手素描', link: '404page'},
                {text: '路米斯：素描基础', link: '404page'},
                {text: '路米斯：创意插画', link: '404page'},
                {text: 'Roberts：Drawing Lessons from the Great Masters-Sketch Basics',  link: '404page'},
                {text: 'Roberts：Drawing Lessons from the Great Masters-Artistic Anatomy', link: '404page'},
                {text: 'Roberts：Drawing Lessons from the Great Masters-Body Sketches', link: '404page'},
                {text: '伯里曼：人体结构绘画教学', link: '404page'},
              ]},
              {text: '素描积累', items:[
                {text: 'MENZEL门采尔素描集', link: '404page'},
                {text: '素描的艺术-大师速写人物', link: '404page'},
                {text: '素描的艺术-大师素描肖像', link: '404page'},
              ]},
              { text: '现当代素描', items:[
                { text: '大师的手稿-探索大师的心历路程', link: '404page'},
                { text: '大师的手稿-奥德·内尔吕姆', link: '404page'},
                { text: '大师的手稿-马克思·贝克曼', link: '404page'},
              ]},
              {text: '互联网观点解读', link: '/Art/From-Internet/Canvas-Self-Study-Advice'},
          ]},
          { text: '生活记录', link: 'https://zjh.asia/life/' },
        ],










        // ---------------------------------- sidebar ----------------------------------











        sidebarMenuLabel: "Menu",
        sidebar: {
          'Face-Warp': [
            { text: '来自面试书', items: [
              {text: '何海涛：剑指Offer名企面试官精讲典型编程题', collapsed: true, items: [
                {text: '面试的流程', link:'/Face-Warp/From-Book/OfferI&II/I-chapter-1'}
              ]},
            ]},
            // { text: '我的经历',  items:[
            //   { text: '2023冬季(大四)实习投递', collapsed: true, items:[
            //     {text: '歌尔嵌入式软件研发实习', link: '/Face-Warp/My-Experience/2023-Winter/2023-11-Goertek' },
            //     {text: '字节跳动(PICO)Android开发', link: '/Face-Warp/My-Experience/2023-Winter/2023-11-Pico.md' },
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
            { text: '计算机组成原理', items:[
              { text: '山东大学：计算机专硕考研(数据结构)', collapsed: true,  items:[
                {text: '2023年山东大学专硕真题分析', link: '/Basement/SDU/Examination-2023'},
              ]},
              { text: '王道论坛：复习指导(组成原理)', collapsed: true,  items:[
                { text: '数据的表示和运算', collapsed: true,  items:[
                  {text: '浮点数的表示和运算', link: '/Basement/Wang-Dao/Float&IEEE754'},
                ]},
              ]},
            ]},
            { text:'编译原理', items:[
              { text: 'Alfred等：Compilers Principles, Techniques, & Tools', collapsed: true,},
              { text: '俞甲子等：程序员的自我修养，编译、装载与库', collapsed: true,},
              { text: '陈莉君等：深入理解LINUX内核', collapsed: true,}
            ]},
            { text:'操作系统', items:[
              { text: 'Andrew等：Modern Operating Systems', collapsed: true,},
              { text: 'Randal等：Computer Systems-A Programmer\'s Perspective', collapsed: true,}
            ]},
          ],
          'Program': [
            { text: 'C/C++',  items:[
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
            { text: 'Java/Kotlin',  items:[
              { text: '耿祥义：Java2实用教程', collapsed: true,  items:[
                { text: 'Java入门', link: '/Program/Java/XYGeng_Java2/Java入门'},
              ]},
              { text: '水滴技术团队：Kotlin核心编程', collapsed: true,  items:[
              ]},
              { text: 'Dmitry Jemerov等：Kotlin in Action', collapsed: true,  items:[
              ]},
            ]},
            { text: '数据结构与算法',  items:[
              { text: '山东大学：2024年考研(数据结构)', collapsed: true,  items:[
              ]},
              { text: 'Sartaj Sahni：Data Structures, Algorithms, and Applications in C++', collapsed: true, items:[
                { text: '线性存储结构', collapsed: true,  items:[
                  {text: '线性表的应用', link: '/Program/Data-Struct/Sartaj_Sahni-DataStruct/Line-Struct/application'}
                ]},
              ]},
            ]},
            { text: '设计模式', items:[
              { text: 'GOF：Design Patterns Elements of Reusable Object-Oriented Software', collapsed:true}
            ]},
            { text: 'Android', items:[
              { text: '欧阳燊：AndroidStudio开发实战-从零基础到APP上线', collapsed: true,  items:[
              ]},
              { text: '李刚：疯狂Android讲义', collapsed: true,  items:[
              ]},
              { text: '王明发：(Java)Android编程权威指南', collapsed: true,  items:[
              ]},
              { text: '王明发：(Kotlin)Android编程权威指南', collapsed: true,  items:[
              ]},
            ]},
            'Art': [
              { text: '互联网观点解读', collapsed: true, items:[
                  { text: '自学建议', collapsed: true,  items:[
                    {text: '油画自学建议', link: '/Art/From-Internet/Canvas-Self-Study-Advice'},
                    {text: '素描自学建议', link: '/Art/From-Internet/Sketch-Self-Study-Advice'},
                  ]}
              ]},
              {text: '素描基本技法', items:[
                {text: '素描的诀窍', collapsed: true}
              ]},
              {text: '素描技巧分析', items:[
                {text: '艺用人体结构', collapsed: true},
                {text: '路米斯：人体素描', collapsed: true},
                {text: '路米斯：头手素描', collapsed: true},
                {text: '路米斯：素描基础', collapsed: true},
                {text: '路米斯：创意插画', collapsed: true},
                {text: 'Roberts：Drawing Lessons from the Great Masters-Sketch Basics', collapsed: true},
                {text: 'Roberts：Drawing Lessons from the Great Masters-Artistic Anatomy', collapsed: true},
                {text: 'Roberts：Drawing Lessons from the Great Masters-Body Sketches', collapsed: true},
                {text: '伯里曼：人体结构绘画教学', collapsed: true},
              ]},
              {text: '素描积累', items:[
                {text: 'MENZEL门采尔素描集', collapsed: true},
                {text: '素描的艺术-大师速写人物', collapsed: true},
                {text: '素描的艺术-大师素描肖像', collapsed: true},
              ]},
              { text: '现当代素描', items:[
                { text: '大师的手稿-探索大师的心历路程', collapsed: true},
                { text: '大师的手稿-奥德·内尔吕姆', collapsed: true},
                { text: '大师的手稿-马克思·贝克曼', collapsed: true},
              ]}
            ],
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