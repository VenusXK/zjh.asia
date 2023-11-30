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
          { text: '数理', items:[
            { text: '山东大学：计算机专硕考研(数学)', items: [
              { text: '高等数学', link: '/Mathematics/SDU/Advanced-Mathematics/chapter-1'},
              { text: '汤家凤：辅助讲义(线性代数)', link: '/Mathematics/SDU/Linear-Algebra/chapter-1'},
            ]},
            // { text: '图形学', items: [
            //   { text: '^ Steve等：Fundamentals Of Computer Graphics', link: '/Mathematics/SDU/'},
            // ]},
          ]},
          { text: '指导', items:[
            { text: '面试教程', items: [
              { text: '何海涛：剑指Offer名企面试官精讲典型编程题', link: '/Guide/Face-Wrap/OfferI&II/I-chapter-1' },
            ]},
            { text: '学习方法', items:[
              { text: '如何4个月高效刷满500题并形成长期记忆？', link: '/Guide/HowToLearn/Offer-in-4-Month'},
            ]},
          ]},
          { text: '编程', items:[
            { text: 'C/C++', items: [
              { text: '李昕：C/C++简明双链教程', link: '/Program/CPP/CPP-with-LIXIN/index'},
            ]},
            { text: 'Java/Kotlin',  items:[
              { text: '耿祥义：Java2实用教程', link: '/Program/Java/XYGeng_Java2/chapter-1'},
              // { text: '^ 水滴技术团队：Kotlin核心编程', link:'404page'},
              // { text: '^ Dmitry Jemerov等：Kotlin实践', link:'404page'},
            ]},
            { text: '数据结构与算法', items: [
              { text: 'Leetcode：每日一题', link: '/Program/Data-Struct&Algorithm/Leetcode-Daily/dp-1'},
              { text: '山东大学：计算机专硕考研(数据结构)', link: '/Program/SDU/2022'},
              { text: 'Sartaj Sahni：数据结构、算法与应用', link: '/Program/Data-Struct&Algorithm/Sartaj_Sahni-DataStruct/Line-Struct/application'},
            ]},
            { text: '设计模式', items:[
              { text: 'Erich Gamma等：设计模式-可复用面向对象软件的基础', link:'/Program/Design-Patterns/E.Gamma-Design-Patterns-Elements-of-Reusable-Object-Oriented-Software/chapter-1'}
            ]},
            // { text: 'Android', items:[
            //   { text: '^ 欧阳燊：AndroidStudio开发实战-从零基础到APP上线', link: '404page'},
            //   { text: '^ 李刚：疯狂Android讲义', link:'404page'},
            //   { text: '^ 王明发：(Java)Android编程权威指南', link:'404page'},
            //   { text: '^ 王明发：(Kotlin)Android编程权威指南', link:'404page'},
            // ]},
            { text: '项目经验', items:[
              { text: '我的个人网站搭建', link: '/Program/Project/zjh.asia/Env-Config'},
              { text: '面向视频流的目标检测系统设计', link: '/Program/Project/listen_or_not/AndroidStudio-ENV'},
            ]},
          ]},
          { text: '底层', items:[
            { text: '计算机组成原理', items: [
              { text: '王道论坛：复习指导(组成原理)', link: '/Basement/Wang-Dao/Float&IEEE754'},
              { text: '山东大学：计算机专硕考研(组成原理)', link: '/Basement/SDU/2023'},
            ]},
            // { text:'编译原理', items:[
            //   { text: '^ Alfred等：编译原理(龙书)', link: '404page'},
            //   { text: '^ 俞甲子等：程序员的自我修养，编译、装载与库', link: '404page'},
            //   { text: '^ 陈莉君等：深入理解LINUX内核', link: '404page'}
            // ]},
            // { text:'操作系统', items:[
            //   { text: '^ Andrew等：现代操作系统', link: '404page'},
            //   { text: '^ Randal等：深入理解计算机系统', link: '404page'}
            // ]},
          ]},
          // { text: '美术', items:[          
          //     { text: '素描基本技法', items:[
          //       { text: '^ 素描的诀窍', link: '404page'}
          //     ]},
          //     { text: '素描技巧分析', items:[
          //       { text: '^ 艺用人体结构', link: '404page'},
          //       { text: '^ Andrew Loomis：人体素描', link: '404page'},
          //       { text: '^ Andrew Loomis：头手素描', link: '404page'},
          //       { text: '^ Andrew Loomis：素描基础', link: '404page'},
          //       { text: '^ Andrew Loomis：创意插画', link: '404page'},
          //       { text: '^ Roberts：向大师学绘画-素描基础',  link: '404page'},
          //       { text: '^ Roberts：向大师学绘画-人体解剖', link: '404page'},
          //       { text: '^ Roberts：向大师学绘画-人体素描', link: '404page'},
          //       { text: '^ Alan Bryman：人体结构绘画教学', link: '404page'},
          //     ]},
          //     { text: '素描积累', items:[
          //       { text: '^ MENZEL门采尔素描集', link: '404page'},
          //       { text: '^ 素描的艺术-大师速写人物', link: '404page'},
          //       { text: '^ 素描的艺术-大师素描肖像', link: '404page'},
          //     ]},
          //     { text: '现当代素描', items:[
          //       { text: '^ 大师的手稿-探索大师的心历路程', link: '404page'},
          //       { text: '^ 大师的手稿-Odd Nerrum', link: '404page'},
          //       { text: '^ 大师的手稿-Max Beckman', link: '404page'},
          //     ]},       
          // ]},
        ],










        // ---------------------------------- sidebar ----------------------------------











        sidebarMenuLabel: "Menu",
        sidebar: {
          'Mathematics': [
            { text: '山东大学：计算机专硕考研(数学)', items: [
              { text: '高等数学', collapsed: true, items:[
                { text: 'test', link: '/Mathematics/SDU/Advanced-Mathematics/chapter-1'}
              ]},
              { text: '汤家凤：辅助讲义(线性代数)', collapsed: true, items:[
                { text: '行列式', link: '/Mathematics/SDU/Linear-Algebra/chapter-1'}
              ]},
            ]},
            { text: '图形学', items: [
              { text: '^ Steve等：Fundamentals Of Computer Graphics', collapsed: true},
            ]},
          ],
          'Foresight': [
            
          ],
          'Guide': [
            { text: '面试教程', items: [
              { text: '何海涛：剑指Offer名企面试官精讲典型编程题', collapsed: true, items: [
                { text: '面试的流程', link:'/Guide/Face-Wrap/OfferI&II/I-chapter-1'}
              ]},
            ]},
            { text: '学习方法', collapsed: true, items:[
              { text: '如何4个月高效刷满500题并形成长期记忆？', link: '/Guide/HowToLearn/Offer-in-4-Month'},
            ]},
          ],
          'Program': [
            { text: 'C/C++',  items:[
              { text: '李昕：C/C++简明双链教程', collapsed: true,  items:[
                { text: '一些对本专题的介绍', link: '/Program/CPP/CPP-with-LIXIN/',},
                { text: '循环', link: '/Program/CPP/CPP-with-LIXIN/chapter-4-important' },
                { text: '数组与字符串', link: '/Program/CPP/CPP-with-LIXIN/chapter-5-important' },
                { text: '周五随堂测试汇总', link: '/Program/CPP/CPP-with-LIXIN/test'},
                { text: 'PTA作业', collapsed: true, items:[
                  { text: 'PTA作业-程序设计基础', link: '/Program/CPP/CPP-with-LIXIN/chapter-2-pta' },
                  { text: 'PTA作业-循环', link: '/Program/CPP/CPP-with-LIXIN/chapter-4-pta' },
                  { text: 'PTA作业-数组与字符串', link: '/Program/CPP/CPP-with-LIXIN/chapter-5-pta' },
                  { text: 'PTA作业-指针', link: '/Program/CPP/CPP-with-LIXIN/chapter-6-pta' },
                ]},  
              ]},
            ]},
            { text: 'Java/Kotlin',  items:[
              { text: '耿祥义：Java2实用教程', collapsed: true,  items:[
                { text: 'Java入门', link: '/Program/Java/XYGeng_Java2/chapter-1'},
                { text: '基本数据类型与数组', link: '/Program/Java/XYGeng_Java2/chapter-2'},
                { text: '运算符、表达式和语句', link: '/Program/Java/XYGeng_Java2/chapter-3'},
                { text: '类与对象', collapsed: true, items:[
                  { text: '类和面向对象', link: '/Program/Java/XYGeng_Java2/chapter-4-1'},
                  { text: '对象的创建与使用', link: '/Program/Java/XYGeng_Java2/chapter-4-2'},
                  { text: '程序的基本结构', link: '/Program/Java/XYGeng_Java2/chapter-4-3'},
                  { text: '参数的传值', link: '/Program/Java/XYGeng_Java2/chapter-4-4'},
                ]},
              ]},
              // { text: '^ 水滴技术团队：Kotlin核心编程', collapsed: true,  items:[
              // ]},
              // { text: '^ Dmitry Jemerov等：Kotlin实践', collapsed: true,  items:[
              // ]},
            ]},
            { text: '数据结构与算法',  items:[
              { text: 'Leetcode：每日一题', collapsed: true, items:[
                { text: '动态规划', link: '/Program/Data-Struct&Algorithm/Leetcode-Daily/dp-1'},
              ]},
              { text: '山东大学：计算机专硕考研(数据结构)', collapsed: true,  items:[
                { text: '2021年山东大学专硕真题分析', link: '/Program/SDU/2021'},
                { text: '2022年山东大学专硕真题分析', link: '/Program/SDU/2022'},
              ]},
              { text: 'Sartaj Sahni：数据结构、算法与应用', collapsed: true, items:[
                { text: '线性存储结构', collapsed: true,  items:[
                  { text: '线性表的应用', link: '/Program/Data-Struct&Algorithm/Sartaj_Sahni-DataStruct/Line-Struct/application'}
                ]},
              ]},
            ]},
            { text: '设计模式', items:[
              { text: 'Erich Gamma等：设计模式-可复用面向对象软件的基础', collapsed:true, items:[
                { text: '引言', link: '/Program/Design-Patterns/E.Gamma-Design-Patterns-Elements-of-Reusable-Object-Oriented-Software/chapter-1'},
              ]}
            ]},
            // { text: 'Android', items:[
            //   { text: '^ 欧阳燊：AndroidStudio开发实战-从零基础到APP上线', collapsed: true,  items:[
            //   ]},
            //   { text: '^ 李刚：疯狂Android讲义', collapsed: true,  items:[
            //   ]},
            //   { text: '^ 王明发：(Java)Android编程权威指南', collapsed: true,  items:[
            //   ]},
            //   { text: '^ 王明发：(Kotlin)Android编程权威指南', collapsed: true,  items:[
            //   ]},
            // ]},
            { text: '项目经验',  items:[
              { text: '我的个人网站搭建', collapsed: true, items:[
                { text: '环境配置', link: '/Program/Project/zjh.asia/Env-Config'},
              ]},
              { text: '面向视频流的目标检测系统设计', collapsed: true, items:[
              ]},
            ]},
          ],
          'Basement': [
            { text: '计算机组成原理', items:[
              { text: '王道论坛：复习指导(组成原理)', collapsed: true,  items:[
                { text: '数据的表示和运算', collapsed: true,  items:[
                  { text: '浮点数的表示和运算', link: '/Basement/Wang-Dao/Float&IEEE754'},
                ]},
                { text: '中央处理器', collapsed: true,  items:[
                  { text: 'CPU的功能和基本结构', link: '/Basement/Wang-Dao/chapter-5-1'},
                  { text: '指令执行过程', link: '/Basement/Wang-Dao/chapter-5-2'},
                  { text: '数据通路的基本结构和功能', link: '/Basement/Wang-Dao/chapter-5-3'},
                  { text: '控制器的功能和工作原理', link: '/Basement/Wang-Dao/chapter-5-4'},
                  { text: '指令流水线', link: '/Basement/Wang-Dao/chapter-5-6'},
                ]},
              ]},
              { text: '山东大学：计算机专硕考研(组成原理)', collapsed: true,  items:[
                { text: '2024年山东大学专硕预测题1分析', link: '/Basement/SDU/Predict-2024-1'},
                { text: '2023年山东大学专硕真题分析', link: '/Basement/SDU/2023'},
                { text: '2022年山东大学专硕真题分析', link: '/Basement/SDU/2022'},
              ]},
            ]},
            // { text:'编译原理', items:[
            //   { text: '^ Alfred等：编译原理(龙书)', collapsed: true,},
            //   { text: '^ 俞甲子等：程序员的自我修养，编译、装载与库', collapsed: true,},
            //   { text: '^ 陈莉君等：深入理解LINUX内核', collapsed: true,}
            // ]},
            // { text:'操作系统', items:[
            //   { text: '^ Andrew等：现代操作系统', collapsed: true,},
            //   { text: '^ Randal等：深入理解计算机系统', collapsed: true,}
            // ]},
          ],
          'Art': [
            // { text: '素描基本技法', items:[
            //   { text: '^ 素描的诀窍', collapsed: true}
            // ]},
            // { text: '素描技巧分析', items:[
            //   { text: '^ 艺用人体结构', collapsed: true},
            //   { text: '^ Andrew Loomis：人体素描', collapsed: true},
            //   { text: '^ Andrew Loomis：头手素描', collapsed: true},
            //   { text: '^ Andrew Loomis：素描基础', collapsed: true},
            //   { text: '^ Andrew Loomis：创意插画', collapsed: true},
            //   { text: '^ Roberts：向大师学绘画-素描基础', collapsed: true},
            //   { text: '^ Roberts：向大师学绘画-人体解剖', collapsed: true},
            //   { text: '^ Roberts：向大师学绘画-人体素描', collapsed: true},
            //   { text: '^ Alan Bryman：人体结构绘画教学', collapsed: true},
            // ]},
            // { text: '素描积累', items:[
            //   { text: '^ 门采尔素描集', collapsed: true},
            //   { text: '^ 素描的艺术-大师速写人物', collapsed: true},
            //   { text: '^ 素描的艺术-大师素描肖像', collapsed: true},
            // ]},
            // { text: '现当代素描', items:[
            //   { text: '^ 大师的手稿-探索大师的心历路程', collapsed: true},
            //   { text: '^ 大师的手稿-Odd Nerrum', collapsed: true},
            //   { text: '^ 大师的手稿-Max Beckman', collapsed: true},
            // ]},
          ],
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