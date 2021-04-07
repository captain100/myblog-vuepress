(window.webpackJsonp = window.webpackJsonp || []).push([
  [20],
  {
    186: function(s, t, a) {
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
                a(
                  'h3',
                  { attrs: { id: 'webpack-插件使用-htmlwebpackplugin-心得' } },
                  [
                    a(
                      'a',
                      {
                        staticClass: 'header-anchor',
                        attrs: {
                          href: '#webpack-插件使用-htmlwebpackplugin-心得',
                          'aria-hidden': 'true',
                        },
                      },
                      [s._v('#')],
                    ),
                    s._v(' webpack 插件使用 HtmlWebpackPlugin 心得'),
                  ],
                ),
                s._v(' '),
                a('div', { staticClass: 'language-js line-numbers-mode' }, [
                  a('pre', { pre: !0, attrs: { class: 'language-js' } }, [
                    a('code', [
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [
                          s._v(
                            '// 首先安装插件，并且调整 webpack.config.js 文件',
                          ),
                        ],
                      ),
                      s._v('\nnpm install '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [s._v('--')],
                      ),
                      s._v('save'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [s._v('-')],
                      ),
                      s._v('dev html'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [s._v('-')],
                      ),
                      s._v('webpack'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [s._v('-')],
                      ),
                      s._v('plugin\n\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token comment' } },
                        [s._v('// 在webpack.config.js 中添加')],
                      ),
                      s._v('\n  '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [s._v('const')],
                      ),
                      s._v(' path '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [s._v('=')],
                      ),
                      s._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token function' } },
                        [s._v('require')],
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v('(')],
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        s._v("'path'"),
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v(')')],
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v(';')],
                      ),
                      s._v('\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [s._v('+')],
                      ),
                      s._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [s._v('const')],
                      ),
                      s._v(' HtmlWebpackPlugin '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [s._v('=')],
                      ),
                      s._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token function' } },
                        [s._v('require')],
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v('(')],
                      ),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        s._v("'html-webpack-plugin'"),
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v(')')],
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v(';')],
                      ),
                      s._v('\n\n  module'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v('.')],
                      ),
                      s._v('exports '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [s._v('=')],
                      ),
                      s._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v('{')],
                      ),
                      s._v('\n    entry'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v(':')],
                      ),
                      s._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v('{')],
                      ),
                      s._v('\n      app'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v(':')],
                      ),
                      s._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        s._v("'./src/index.js'"),
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v(',')],
                      ),
                      s._v('\n      print'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v(':')],
                      ),
                      s._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        s._v("'./src/print.js'"),
                      ]),
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
                      s._v('\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [s._v('+')],
                      ),
                      s._v('   plugins'),
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
                      s._v('\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [s._v('+')],
                      ),
                      s._v('     '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token keyword' } },
                        [s._v('new')],
                      ),
                      s._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token class-name' } },
                        [s._v('HtmlWebpackPlugin')],
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v('(')],
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v('{')],
                      ),
                      s._v('\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [s._v('+')],
                      ),
                      s._v('       title'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v(':')],
                      ),
                      s._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        s._v("'管理输出'"),
                      ]),
                      s._v('\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [s._v('+')],
                      ),
                      s._v('     '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v('}')],
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v(')')],
                      ),
                      s._v('\n'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token operator' } },
                        [s._v('+')],
                      ),
                      s._v('   '),
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
                      s._v('\n    output'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v(':')],
                      ),
                      s._v(' '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v('{')],
                      ),
                      s._v('\n      filename'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v(':')],
                      ),
                      s._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        s._v("'[name].bundle.js'"),
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v(',')],
                      ),
                      s._v('\n      path'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v(':')],
                      ),
                      s._v(' path'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v('.')],
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token function' } },
                        [s._v('resolve')],
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v('(')],
                      ),
                      s._v('__dirname'),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v(',')],
                      ),
                      s._v(' '),
                      a('span', { pre: !0, attrs: { class: 'token string' } }, [
                        s._v("'dist'"),
                      ]),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v(')')],
                      ),
                      s._v('\n    '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v('}')],
                      ),
                      s._v('\n  '),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v('}')],
                      ),
                      a(
                        'span',
                        { pre: !0, attrs: { class: 'token punctuation' } },
                        [s._v(';')],
                      ),
                      s._v('\n'),
                    ]),
                  ]),
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
                    a('span', { staticClass: 'line-number' }, [s._v('13')]),
                    a('br'),
                    a('span', { staticClass: 'line-number' }, [s._v('14')]),
                    a('br'),
                    a('span', { staticClass: 'line-number' }, [s._v('15')]),
                    a('br'),
                    a('span', { staticClass: 'line-number' }, [s._v('16')]),
                    a('br'),
                    a('span', { staticClass: 'line-number' }, [s._v('17')]),
                    a('br'),
                    a('span', { staticClass: 'line-number' }, [s._v('18')]),
                    a('br'),
                    a('span', { staticClass: 'line-number' }, [s._v('19')]),
                    a('br'),
                    a('span', { staticClass: 'line-number' }, [s._v('20')]),
                    a('br'),
                    a('span', { staticClass: 'line-number' }, [s._v('21')]),
                    a('br'),
                    a('span', { staticClass: 'line-number' }, [s._v('22')]),
                    a('br'),
                  ]),
                ]),
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
