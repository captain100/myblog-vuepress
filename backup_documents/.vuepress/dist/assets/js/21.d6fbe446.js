(window.webpackJsonp = window.webpackJsonp || []).push([
  [21],
  {
    187: function(s, t, a) {
      'use strict';
      a.r(t);
      var n = a(0),
        e = Object(n.a)(
          {},
          function() {
            this.$createElement;
            this._self._c;
            return this._m(0);
          },
          [
            function() {
              var s = this,
                t = s.$createElement,
                a = s._self._c || t;
              return a('div', { staticClass: 'content' }, [
                a('h1', { attrs: { id: 'vuepress-组织文档结构' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: {
                        href: '#vuepress-组织文档结构',
                        'aria-hidden': 'true',
                      },
                    },
                    [s._v('#')],
                  ),
                  s._v(' vuepress 组织文档结构'),
                ]),
                s._v(' '),
                a('blockquote', [a('p', [s._v('使用 sidebar 配置文档分组')])]),
                s._v(' '),
                a('h2', { attrs: { id: '不能使用index-md-命名' } }, [
                  a(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: {
                        href: '#不能使用index-md-命名',
                        'aria-hidden': 'true',
                      },
                    },
                    [s._v('#')],
                  ),
                  s._v(' 不能使用index.md 命名'),
                ]),
                s._v(' '),
                a(
                  'div',
                  { staticClass: 'language-javascript line-numbers-mode' },
                  [
                    a(
                      'pre',
                      { pre: !0, attrs: { class: 'language-javascript' } },
                      [
                        a('code', [
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'token comment' } },
                            [
                              s._v(
                                '// 在 .vuepress/config.js 的sidebar中不能设置index.md 文档无法找到文件',
                              ),
                            ],
                          ),
                          s._v('\n \n sidebar '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'token punctuation' } },
                            [s._v(':')],
                          ),
                          s._v(' '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'token punctuation' } },
                            [s._v('[')],
                          ),
                          s._v('\n    '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'token punctuation' } },
                            [s._v('{')],
                          ),
                          s._v('\n        title'),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'token punctuation' } },
                            [s._v(':')],
                          ),
                          s._v(' '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'token string' } },
                            [s._v("'typescript笔记'")],
                          ),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'token punctuation' } },
                            [s._v(',')],
                          ),
                          s._v('\n        collapsable'),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'token punctuation' } },
                            [s._v(':')],
                          ),
                          s._v(' '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'token boolean' } },
                            [s._v('false')],
                          ),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'token punctuation' } },
                            [s._v(',')],
                          ),
                          s._v('\n        children'),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'token punctuation' } },
                            [s._v(':')],
                          ),
                          s._v(' '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'token punctuation' } },
                            [s._v('[')],
                          ),
                          s._v('\n            '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'token punctuation' } },
                            [s._v('[')],
                          ),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'token string' } },
                            [s._v("'/startvuepress/index'")],
                          ),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'token punctuation' } },
                            [s._v(',')],
                          ),
                          s._v(' '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'token string' } },
                            [s._v("'index'")],
                          ),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'token punctuation' } },
                            [s._v(']')],
                          ),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'token punctuation' } },
                            [s._v(',')],
                          ),
                          s._v(' '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'token comment' } },
                            [s._v('// 找不到文件')],
                          ),
                          s._v('\n            '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'token punctuation' } },
                            [s._v('[')],
                          ),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'token string' } },
                            [s._v("'/startvuepress/hahah  '")],
                          ),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'token punctuation' } },
                            [s._v(',')],
                          ),
                          s._v(' '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'token string' } },
                            [s._v("'使用vuepress'")],
                          ),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'token punctuation' } },
                            [s._v(']')],
                          ),
                          s._v('\n        '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'token punctuation' } },
                            [s._v(']')],
                          ),
                          s._v('\n    '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'token punctuation' } },
                            [s._v('}')],
                          ),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'token punctuation' } },
                            [s._v(',')],
                          ),
                          s._v('\n '),
                          a(
                            'span',
                            { pre: !0, attrs: { class: 'token punctuation' } },
                            [s._v(']')],
                          ),
                          s._v('\n'),
                        ]),
                      ],
                    ),
                    s._v(' '),
                    a('div', { staticClass: 'line-numbers-wrapper' }, [
                      a('span', { staticClass: 'line-number' }, [s._v('1')]),
                      a('br'),
                      a('span', { staticClass: 'line-number' }, [s._v('2')]),
                      a('br'),
                      a('span', { staticClass: 'line-number' }, [s._v('3')]),
                      a('br'),
                      a('span', { staticClass: 'line-number' }, [s._v('4')]),
                      a('br'),
                      a('span', { staticClass: 'line-number' }, [s._v('5')]),
                      a('br'),
                      a('span', { staticClass: 'line-number' }, [s._v('6')]),
                      a('br'),
                      a('span', { staticClass: 'line-number' }, [s._v('7')]),
                      a('br'),
                      a('span', { staticClass: 'line-number' }, [s._v('8')]),
                      a('br'),
                      a('span', { staticClass: 'line-number' }, [s._v('9')]),
                      a('br'),
                      a('span', { staticClass: 'line-number' }, [s._v('10')]),
                      a('br'),
                      a('span', { staticClass: 'line-number' }, [s._v('11')]),
                      a('br'),
                      a('span', { staticClass: 'line-number' }, [s._v('12')]),
                      a('br'),
                    ]),
                  ],
                ),
              ]);
            },
          ],
          !1,
          null,
          null,
          null,
        );
      t.default = e.exports;
    },
  },
]);
