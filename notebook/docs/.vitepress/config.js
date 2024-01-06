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
    base: '/notebook/',
    title: '笔记',
    // description: 'Jinghe Zhang',
    lastUpdated: true,
    head:[
      ['link', {rel: 'icon', href: 'https://mysite-bucket.oss-cn-wulanchabu.aliyuncs.com/avator/zjh_roundfull.png?x-oss-process=style/small_size_rule'}],
      ['link', {rel: 'stylesheet', href: 'https://mysite-bucket.oss-cn-wulanchabu.aliyuncs.com/GoogleNotoSerifSC.css'}],
      ['link', {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Liu+Jian+Mao+Cao&text=笔记'}],
    ],
    themeConfig: {
        externalLinkIcon: false,
        // search: {
        //   provider: 'local',
        // },
        // aside: true,
        outlineTitle: '大纲',
        // outline: 'deep',
        outline: false,
        aside: false,
        darkModeSwitchLabel: '亮 / 暗',
        // siteTitle: 'this_site',

        
        
        
        
        
        
        
        
        
        // ---------------------------------- nav ----------------------------------
        
        
        
        
        
        
        
        
        
        
        nav: [
          {
            text: '考试', items:[
              { text: '25考研', items: [
                { text: '政治', link: '/Examination/Master-Application/Master-Application-2/101/2024bssc/chapter-1.md'},
                { text: '英语(一)', link: '/Examination/Master-Application/Master-Application-2/201/hbs'},
              ]},
              { text: '山东大学：计算机专硕24考研', items: [
                { text: '数学(二) - 线性代数', link: '/Examination/Master-Application/SDU/302-2/chapter-1'},
                { text: '自命题(832) - 数据结构', link: '/Examination/Master-Application/SDU/832-1/2022'},
                { text: '自命题(832) - 组成原理', link: '/Examination/Master-Application/SDU/832-2/2023'},
              ]},
            ]
          },
          { text: '编程', items:[
            { text: 'C/C++', items: [
              { text: 'C/C++简明双链教程', link: '/Program/CPP/CPP-with-LIXIN/index'},
            ]},
          //   { text: 'Java/Kotlin',  items:[
          //     { text: '耿祥义：Java2实用教程', link: '/Program/Java/XYGeng_Java2/chapter-1'},
          //   ]},
            // { text: '数据结构与算法', items: [
            //   { text: 'Sartaj Sahni：数据结构、算法与应用', link: '/Program/Data-Struct&Algorithm/Sartaj_Sahni-DataStruct/Line-Struct/application'},
            // ]},
            // { text: '设计模式', items:[
            //   { text: 'Erich Gamma等：设计模式-可复用面向对象软件的基础', link:'/Program/Design-Patterns/E.Gamma-Design-Patterns-Elements-of-Reusable-Object-Oriented-Software/chapter-1'}
            // ]},
          ]},
          { text: '项目', items:[
            { text: '石油大学期间', items:[
              // { text: '大创：面向视频流的目标检测系统设计', link: '/Project/listen_or_not/AndroidStudio-ENV'},
              { text: '王勃AWS云上部署Hadoop实验', link: '/Project/Hadoop/Wangbo-51790-1'},
              { text: '此网站搭建', link: '/Project/this_site/Env-Config'},
            ]},
            
            
          ]},
          { text: '首页', link: '/'},
        ],










        // ---------------------------------- sidebar ----------------------------------











        sidebarMenuLabel: "Menu",
        sidebar: {
          'Examination':[
            { text: '25考研', items: [
              { text: '政治', collapsed: true, items: [
                { text: '24肖背诵手册背诵重点', collapsed: true, items: [
                  { text: '马克思主义基本原理', link: '/Examination/Master-Application/Master-Application-2/101/2024bssc/chapter-1'}
                ]},
              ]},
              { text: '英语(一)', collapsed: true, items: [
                { text: '红宝书生词汇总', link: '/Examination/Master-Application/Master-Application-2/201/hbs'},
              ]},
              { text: '计算机统考(408)', collapsed: true, items: [
                  { text: '传输层背诵内容', link: '/Examination/Master-Application/Master-Application-2/408/chapter-5'}
              ]},
            ]},
            { text: '山东大学：计算机专硕24考研',  items:[
              { text: '数学(二) - 线性代数', collapsed: true, items:[
                {text: '汤家凤：线性代数辅导讲义', items:[
                  { text: '前备知识', link: '/Examination/Master-Application/SDU/302-2/normal'},
                  { text: '行列式', link: '/Examination/Master-Application/SDU/302-2/chapter-1'},
                  { text: '矩阵', link: '/Examination/Master-Application/SDU/302-2/chapter-2'},
                  { text: '向量', link: '/Examination/Master-Application/SDU/302-2/chapter-3'},
                  { text: '线性方程组', link: '/Examination/Master-Application/SDU/302-2/chapter-4'},
                ]}
              ]},
              { text: '自命题(832) - 数据结构', collapsed: true, items:[
                { "text": "2022年山大真题分析", "link": "/Examination/Master-Application/SDU/832-1/2022" },
                { "text": "2021年山大真题分析", "link": "/Examination/Master-Application/SDU/832-1/2021" },
                { "text": "2019年山大真题分析", "link": "/Examination/Master-Application/SDU/832-1/2019" },
                { "text": "2024年山大预测2分析", "link": "/Examination/Master-Application/SDU/832-1/2024-2" },
                { "text": "2024年山大预测3分析", "link": "/Examination/Master-Application/SDU/832-1/2024-3" },
              ]},
              { text: '自命题(832) - 组成原理', collapsed: true, items:[
                { text: '王道复习讲义重要习题', collapsed: true,  items:[
                  { text: '浮点数的表示和运算', link: '/Examination/Master-Application/SDU/832-2/Wang-Dao/Float&IEEE754'},
                  { text: 'CPU的功能和基本结构', link: '/Examination/Master-Application/SDU/832-2/Wang-Dao/chapter-5-1'},
                  { text: '指令执行过程', link: '/Examination/Master-Application/SDU/832-2/Wang-Dao/chapter-5-2'},
                  { text: '数据通路的基本结构和功能', link: '/Examination/Master-Application/SDU/832-2/Wang-Dao/chapter-5-3'},
                  { text: '控制器的功能和工作原理', link: '/Examination/Master-Application/SDU/832-2/Wang-Dao/chapter-5-4'},
                  { text: '异常和中断', link: '/Examination/Master-Application/SDU/832-2/Wang-Dao/chapter-5-5'},
                  { text: '指令流水线', link: '/Examination/Master-Application/SDU/832-2/Wang-Dao/chapter-5-6'},
                ]},
                { text: '山大考研重要真题&预测题', collapsed: true,  items:[
                  { "text": "2023年山大真题分析", "link": "/Examination/Master-Application/SDU/832-2/2023" },
                  { "text": "2022年山大真题分析", "link": "/Examination/Master-Application/SDU/832-2/2022" },
                  { "text": "2021年山大真题分析", "link": "/Examination/Master-Application/SDU/832-2/2021" },
                  { "text": "2019年山大真题分析", "link": "/Examination/Master-Application/SDU/832-2/2019" },
                  { "text": "2024年山大预测1分析", "link": "/Examination/Master-Application/SDU/832-2/2024-1" },
                  { "text": "2024年山大预测2分析", "link": "/Examination/Master-Application/SDU/832-2/2024-2" },
                  { "text": "2024年山大预测3分析", "link": "/Examination/Master-Application/SDU/832-2/2024-3" },
                ]},
              ]},

            ]},
          ],
          'Project': [
            { text: '石油大学期间', items:[
              { text: '王勃AWS云上部署Hadoop实验', collapsed: true, items:[
                { text: 'Hadoop实验基础部分(2节点)', link: '/Project/Hadoop/Wangbo-51790-1'},
                { text: 'Hadoop实验扩展部分(9节点)', link: '/Project/Hadoop/Wangbo-51790-2'},
              ]},
              { text: '此网站搭建', collapsed: true, items:[
                { text: '服务器环境配置', link: '/Project/this_site/Env-Config'},
                { text: 'JupyterNotebook搭建', link: '/Project/this_site/Jupyter-Notebook'},
              ]},
            ]},
          ],
          'Program': [
            { text: 'C/C++',  items:[
              { text: 'C/C++简明双链教程', collapsed: true,  items:[
                { text: '一些对本专题的介绍', link: '/Program/CPP/CPP-with-LIXIN/',},
                { text: '周五随堂测试汇总', link: '/Program/CPP/CPP-with-LIXIN/test'},
                { text: 'PTA作业-程序设计基础', link: '/Program/CPP/CPP-with-LIXIN/chapter-2-pta' },
                { text: '循环', link: '/Program/CPP/CPP-with-LIXIN/chapter-4-important' },
                { text: 'PTA作业-循环', link: '/Program/CPP/CPP-with-LIXIN/chapter-4-pta' },
                { text: '数组与字符串', link: '/Program/CPP/CPP-with-LIXIN/chapter-5-important' },
                { text: 'PTA作业-数组与字符串', link: '/Program/CPP/CPP-with-LIXIN/chapter-5-pta' },
                { text: 'PTA作业-指针', link: '/Program/CPP/CPP-with-LIXIN/chapter-6-pta' },
                { text: 'PTA作业-面向对象', link: '/Program/CPP/CPP-with-LIXIN/chapter-7-pta' },
              ]},
            ]},
            // { text: 'Java/Kotlin',  items:[
            //   { text: '耿祥义：Java2实用教程', collapsed: true,  items:[
            //     { text: 'Java入门', link: '/Program/Java/XYGeng_Java2/chapter-1'},
            //     { text: '基本数据类型与数组', link: '/Program/Java/XYGeng_Java2/chapter-2'},
            //     { text: '运算符、表达式和语句', link: '/Program/Java/XYGeng_Java2/chapter-3'},
            //     { text: '类与对象', collapsed: true, items:[
            //       { text: '类和面向对象', link: '/Program/Java/XYGeng_Java2/chapter-4-1'},
            //       { text: '对象的创建与使用', link: '/Program/Java/XYGeng_Java2/chapter-4-2'},
            //       { text: '程序的基本结构', link: '/Program/Java/XYGeng_Java2/chapter-4-3'},
            //       { text: '参数的传值', link: '/Program/Java/XYGeng_Java2/chapter-4-4'},
            //     ]},
            //   ]},
            // ]},
            // { text: '数据结构与算法',  items:[
            //   { text: 'Sartaj Sahni：数据结构、算法与应用', collapsed: true, items:[
            //     { text: '线性存储结构', collapsed: true,  items:[
            //       { text: '线性表的应用', link: '/Program/Data-Struct&Algorithm/Sartaj_Sahni-DataStruct/Line-Struct/application'}
            //     ]},
            //   ]},
            // ]},
            // { text: '设计模式', items:[
            //   { text: 'Erich Gamma等：设计模式-可复用面向对象软件的基础', collapsed:true, items:[
            //     { text: '引言', link: '/Program/Design-Patterns/E.Gamma-Design-Patterns-Elements-of-Reusable-Object-Oriented-Software/chapter-1'},
            //   ]}
            // ]},
          ],
        },











        // ---------------------------------- footer ----------------------------------

        footer: {
          message: '\
          <span class="dark:text-white text-black" style="font-size: small">Copyright © 2024, 张景赫\
          <span class="line-clamp-1">\
          &nbsp;\
              冀公网安备13010202003482号</a>\
            </span>\
          &nbsp;\
          <a href="https://beian.miit.gov.cn/">冀ICP备2023030802号</a> \
            </span>'
        },
    },
  }