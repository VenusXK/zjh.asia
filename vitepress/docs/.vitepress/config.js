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
    base: '/academic/',
    title: 'Jinghe Zhang',
    description: '张景赫',
    head:[
      ['link', {rel: 'icon', href: 'https://mysite-bucket.oss-cn-wulanchabu.aliyuncs.com/avator/zjh_roundfull.png?x-oss-process=style/small_size_rule'}],
      ['link', {rel: 'stylesheet', href: '/output_vitepress.css'}],
      ['link', { rel: 'stylesheet', href: '/katex.min.css', crossorigin: '' }]
    ],
    // Theme related configurations.
    themeConfig: {
        aside: true,
        outlineTitle: '内容目录',
        outlineBadges: true,
        outline: 'deep',
        siteTitle: 'ACADEMIC',

        // ---------------------------------- nav ----------------------------------
        nav: [
          { text: 'News', link: '/_news/' },
        ],


        // footer
        footer: false,
        // footer: {
        //   message: '技术支持:\
        //   <img src="/vitepress-logo.png" width="20px" style="display:inline;margin-bottom:5px"> \
        //   &&nbsp;&nbsp;<img src="/aliyun.png" width="25px" style="display:inline;margin-bottom:2px">&nbsp; \
        //   &nbsp;|&nbsp;\
        //   <a href="mailto:venusxk6214@foxmail.com" title="venusxk6214@foxmail.com">联系我</a>',
        //   copyright: 'Copyright © 2023 张景赫, All rights reserved. '
        //   // <a href="https://beian.miit.gov.cn/" target="_blank">备案号</a>
        // },

        // last update
        // lastUpdated: {
        //   text: 'Updated at',
        //   formatOptions: {
        //     dateStyle: 'full',
        //     timeStyle: 'medium'
        //   }
        // },

        // external
        sidebarMenuLabel: "Menu",
        externalLinkIcon: true,

        // search
        // search: {
        //   provider: 'local'
        // }
        
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