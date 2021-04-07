(window.webpackJsonp = window.webpackJsonp || []).push([
  [17],
  {
    183: function(s, t, n) {
      'use strict';
      n.r(t);
      var a = n(0),
        r = Object(a.a)(
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
                n = s._self._c || t;
              return n('div', { staticClass: 'content' }, [
                n('h3', { attrs: { id: '使用typescript-开发npm包' } }, [
                  n(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: {
                        href: '#使用typescript-开发npm包',
                        'aria-hidden': 'true',
                      },
                    },
                    [s._v('#')],
                  ),
                  s._v(' 使用typescript 开发npm包'),
                ]),
                s._v(' '),
                n('h4', { attrs: { id: '为什么要用typescript-编写函数库' } }, [
                  n(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: {
                        href: '#为什么要用typescript-编写函数库',
                        'aria-hidden': 'true',
                      },
                    },
                    [s._v('#')],
                  ),
                  s._v(' 为什么要用typescript 编写函数库'),
                ]),
                s._v(' '),
                n('p', [
                  s._v(
                    'typescript是由类型定义的JavaScript的超级，使用typescript编写函数库，不仅可是使开发者带来开发效率的提高和静态检查的好处，还能对使用方带来用户开发体现',
                  ),
                ]),
                s._v(' '),
                n('h4', { attrs: { id: '开发步骤' } }, [
                  n(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: { href: '#开发步骤', 'aria-hidden': 'true' },
                    },
                    [s._v('#')],
                  ),
                  s._v(' 开发步骤'),
                ]),
                s._v(' '),
                n(
                  'div',
                  { staticClass: 'language-javascript line-numbers-mode' },
                  [
                    n(
                      'pre',
                      { pre: !0, attrs: { class: 'language-javascript' } },
                      [
                        n('code', [
                          n(
                            'span',
                            { pre: !0, attrs: { class: 'token comment' } },
                            [s._v('// 1、创建项目文件')],
                          ),
                          s._v('\nmkdir npm'),
                          n(
                            'span',
                            { pre: !0, attrs: { class: 'token operator' } },
                            [s._v('-')],
                          ),
                          s._v('ts'),
                          n(
                            'span',
                            { pre: !0, attrs: { class: 'token operator' } },
                            [s._v('-')],
                          ),
                          s._v('demo\n'),
                          n(
                            'span',
                            { pre: !0, attrs: { class: 'token comment' } },
                            [s._v('// 2、初始化 npm 引入package.json')],
                          ),
                          s._v('\nnpm init\n'),
                          n(
                            'span',
                            { pre: !0, attrs: { class: 'token comment' } },
                            [s._v('// 3、配置tsconfig.json')],
                          ),
                          s._v('\n'),
                          n(
                            'span',
                            { pre: !0, attrs: { class: 'token punctuation' } },
                            [s._v('{')],
                          ),
                          s._v('\n    '),
                          n(
                            'span',
                            { pre: !0, attrs: { class: 'token string' } },
                            [s._v('"compilerOptions"')],
                          ),
                          n(
                            'span',
                            { pre: !0, attrs: { class: 'token punctuation' } },
                            [s._v(':')],
                          ),
                          s._v(' '),
                          n(
                            'span',
                            { pre: !0, attrs: { class: 'token punctuation' } },
                            [s._v('{')],
                          ),
                          s._v('\n        '),
                          n(
                            'span',
                            { pre: !0, attrs: { class: 'token string' } },
                            [s._v('"target"')],
                          ),
                          n(
                            'span',
                            { pre: !0, attrs: { class: 'token punctuation' } },
                            [s._v(':')],
                          ),
                          s._v(' '),
                          n(
                            'span',
                            { pre: !0, attrs: { class: 'token string' } },
                            [s._v('"es5"')],
                          ),
                          n(
                            'span',
                            { pre: !0, attrs: { class: 'token punctuation' } },
                            [s._v(',')],
                          ),
                          s._v('\n        '),
                          n(
                            'span',
                            { pre: !0, attrs: { class: 'token string' } },
                            [s._v('"module"')],
                          ),
                          n(
                            'span',
                            { pre: !0, attrs: { class: 'token punctuation' } },
                            [s._v(':')],
                          ),
                          s._v(' '),
                          n(
                            'span',
                            { pre: !0, attrs: { class: 'token string' } },
                            [s._v('"commonjs"')],
                          ),
                          n(
                            'span',
                            { pre: !0, attrs: { class: 'token punctuation' } },
                            [s._v(',')],
                          ),
                          s._v('\n        '),
                          n(
                            'span',
                            { pre: !0, attrs: { class: 'token string' } },
                            [s._v('"moduleResolution"')],
                          ),
                          n(
                            'span',
                            { pre: !0, attrs: { class: 'token punctuation' } },
                            [s._v(':')],
                          ),
                          s._v(' '),
                          n(
                            'span',
                            { pre: !0, attrs: { class: 'token string' } },
                            [s._v('"node"')],
                          ),
                          n(
                            'span',
                            { pre: !0, attrs: { class: 'token punctuation' } },
                            [s._v(',')],
                          ),
                          s._v('\n        '),
                          n(
                            'span',
                            { pre: !0, attrs: { class: 'token string' } },
                            [s._v('"outDir"')],
                          ),
                          n(
                            'span',
                            { pre: !0, attrs: { class: 'token punctuation' } },
                            [s._v(':')],
                          ),
                          s._v(' '),
                          n(
                            'span',
                            { pre: !0, attrs: { class: 'token string' } },
                            [s._v('"dist/cmjs"')],
                          ),
                          n(
                            'span',
                            { pre: !0, attrs: { class: 'token punctuation' } },
                            [s._v(',')],
                          ),
                          s._v('\n        '),
                          n(
                            'span',
                            { pre: !0, attrs: { class: 'token string' } },
                            [s._v('"rootDir"')],
                          ),
                          n(
                            'span',
                            { pre: !0, attrs: { class: 'token punctuation' } },
                            [s._v(':')],
                          ),
                          s._v(' '),
                          n(
                            'span',
                            { pre: !0, attrs: { class: 'token string' } },
                            [s._v('"./src"')],
                          ),
                          n(
                            'span',
                            { pre: !0, attrs: { class: 'token punctuation' } },
                            [s._v(',')],
                          ),
                          s._v('\n        '),
                          n(
                            'span',
                            { pre: !0, attrs: { class: 'token string' } },
                            [s._v('"declaration"')],
                          ),
                          n(
                            'span',
                            { pre: !0, attrs: { class: 'token punctuation' } },
                            [s._v(':')],
                          ),
                          s._v(' '),
                          n(
                            'span',
                            { pre: !0, attrs: { class: 'token boolean' } },
                            [s._v('true')],
                          ),
                          n(
                            'span',
                            { pre: !0, attrs: { class: 'token punctuation' } },
                            [s._v(',')],
                          ),
                          s._v('\n        '),
                          n(
                            'span',
                            { pre: !0, attrs: { class: 'token string' } },
                            [s._v('"sourceMap"')],
                          ),
                          n(
                            'span',
                            { pre: !0, attrs: { class: 'token punctuation' } },
                            [s._v(':')],
                          ),
                          s._v(' '),
                          n(
                            'span',
                            { pre: !0, attrs: { class: 'token boolean' } },
                            [s._v('true')],
                          ),
                          n(
                            'span',
                            { pre: !0, attrs: { class: 'token punctuation' } },
                            [s._v(',')],
                          ),
                          s._v('\n        '),
                          n(
                            'span',
                            { pre: !0, attrs: { class: 'token string' } },
                            [s._v('"lib"')],
                          ),
                          n(
                            'span',
                            { pre: !0, attrs: { class: 'token punctuation' } },
                            [s._v(':')],
                          ),
                          s._v(' '),
                          n(
                            'span',
                            { pre: !0, attrs: { class: 'token punctuation' } },
                            [s._v('[')],
                          ),
                          n(
                            'span',
                            { pre: !0, attrs: { class: 'token string' } },
                            [s._v('"dom"')],
                          ),
                          n(
                            'span',
                            { pre: !0, attrs: { class: 'token punctuation' } },
                            [s._v(',')],
                          ),
                          s._v(' '),
                          n(
                            'span',
                            { pre: !0, attrs: { class: 'token string' } },
                            [s._v('"es6"')],
                          ),
                          n(
                            'span',
                            { pre: !0, attrs: { class: 'token punctuation' } },
                            [s._v(']')],
                          ),
                          s._v('\n    '),
                          n(
                            'span',
                            { pre: !0, attrs: { class: 'token punctuation' } },
                            [s._v('}')],
                          ),
                          n(
                            'span',
                            { pre: !0, attrs: { class: 'token punctuation' } },
                            [s._v(',')],
                          ),
                          s._v('\n'),
                          n(
                            'span',
                            { pre: !0, attrs: { class: 'token punctuation' } },
                            [s._v('}')],
                          ),
                          s._v('\n'),
                          n(
                            'span',
                            { pre: !0, attrs: { class: 'token comment' } },
                            [s._v('// 4、设置执行指令和外部引用')],
                          ),
                          s._v('\n修改'),
                          n(
                            'span',
                            { pre: !0, attrs: { class: 'token keyword' } },
                            [s._v('package')],
                          ),
                          n(
                            'span',
                            { pre: !0, attrs: { class: 'token punctuation' } },
                            [s._v('.')],
                          ),
                          s._v('json 文件a\n  '),
                          n(
                            'span',
                            { pre: !0, attrs: { class: 'token string' } },
                            [s._v('"main"')],
                          ),
                          n(
                            'span',
                            { pre: !0, attrs: { class: 'token punctuation' } },
                            [s._v(':')],
                          ),
                          s._v(' '),
                          n(
                            'span',
                            { pre: !0, attrs: { class: 'token string' } },
                            [s._v('"dist/cmjs/index.js"')],
                          ),
                          n(
                            'span',
                            { pre: !0, attrs: { class: 'token punctuation' } },
                            [s._v(',')],
                          ),
                          s._v('\n  '),
                          n(
                            'span',
                            { pre: !0, attrs: { class: 'token string' } },
                            [s._v('"scripts"')],
                          ),
                          n(
                            'span',
                            { pre: !0, attrs: { class: 'token punctuation' } },
                            [s._v(':')],
                          ),
                          s._v(' '),
                          n(
                            'span',
                            { pre: !0, attrs: { class: 'token punctuation' } },
                            [s._v('{')],
                          ),
                          s._v('\n    '),
                          n(
                            'span',
                            { pre: !0, attrs: { class: 'token string' } },
                            [s._v('"test"')],
                          ),
                          n(
                            'span',
                            { pre: !0, attrs: { class: 'token punctuation' } },
                            [s._v(':')],
                          ),
                          s._v(' '),
                          n(
                            'span',
                            { pre: !0, attrs: { class: 'token string' } },
                            [
                              s._v(
                                '"echo \\"Error: no test specified\\" && exit 1"',
                              ),
                            ],
                          ),
                          n(
                            'span',
                            { pre: !0, attrs: { class: 'token punctuation' } },
                            [s._v(',')],
                          ),
                          s._v('\n    '),
                          n(
                            'span',
                            { pre: !0, attrs: { class: 'token string' } },
                            [s._v('"build:cmjs"')],
                          ),
                          n(
                            'span',
                            { pre: !0, attrs: { class: 'token punctuation' } },
                            [s._v(':')],
                          ),
                          s._v(' '),
                          n(
                            'span',
                            { pre: !0, attrs: { class: 'token string' } },
                            [s._v('"tsc -P tsconfig.json"')],
                          ),
                          n(
                            'span',
                            { pre: !0, attrs: { class: 'token punctuation' } },
                            [s._v(',')],
                          ),
                          s._v('\n    '),
                          n(
                            'span',
                            { pre: !0, attrs: { class: 'token string' } },
                            [s._v('"build:es6"')],
                          ),
                          n(
                            'span',
                            { pre: !0, attrs: { class: 'token punctuation' } },
                            [s._v(':')],
                          ),
                          s._v(' '),
                          n(
                            'span',
                            { pre: !0, attrs: { class: 'token string' } },
                            [
                              s._v(
                                '"tsc -P tsconfig.json --module ES6 --outDir dist/es6"',
                              ),
                            ],
                          ),
                          n(
                            'span',
                            { pre: !0, attrs: { class: 'token punctuation' } },
                            [s._v(',')],
                          ),
                          s._v('\n    '),
                          n(
                            'span',
                            { pre: !0, attrs: { class: 'token string' } },
                            [s._v('"clear"')],
                          ),
                          n(
                            'span',
                            { pre: !0, attrs: { class: 'token punctuation' } },
                            [s._v(':')],
                          ),
                          s._v(' '),
                          n(
                            'span',
                            { pre: !0, attrs: { class: 'token string' } },
                            [s._v('"rm -rf dist/"')],
                          ),
                          n(
                            'span',
                            { pre: !0, attrs: { class: 'token punctuation' } },
                            [s._v(',')],
                          ),
                          s._v('\n    '),
                          n(
                            'span',
                            { pre: !0, attrs: { class: 'token string' } },
                            [s._v('"build"')],
                          ),
                          n(
                            'span',
                            { pre: !0, attrs: { class: 'token punctuation' } },
                            [s._v(':')],
                          ),
                          s._v(' '),
                          n(
                            'span',
                            { pre: !0, attrs: { class: 'token string' } },
                            [
                              s._v(
                                '"npm run clear; npm run build:cmjs; npm run build:es6"',
                              ),
                            ],
                          ),
                          s._v('\n  '),
                          n(
                            'span',
                            { pre: !0, attrs: { class: 'token punctuation' } },
                            [s._v('}')],
                          ),
                          n(
                            'span',
                            { pre: !0, attrs: { class: 'token punctuation' } },
                            [s._v(',')],
                          ),
                          s._v('  \n'),
                          n(
                            'span',
                            { pre: !0, attrs: { class: 'token comment' } },
                            [s._v('// 5、 npm link 调试')],
                          ),
                          s._v('\n\n'),
                          n(
                            'span',
                            { pre: !0, attrs: { class: 'token comment' } },
                            [s._v('// 6、 发布')],
                          ),
                          s._v('\n\n'),
                        ]),
                      ],
                    ),
                    s._v(' '),
                    n('div', { staticClass: 'line-numbers-wrapper' }, [
                      n('span', { staticClass: 'line-number' }, [s._v('1')]),
                      n('br'),
                      n('span', { staticClass: 'line-number' }, [s._v('2')]),
                      n('br'),
                      n('span', { staticClass: 'line-number' }, [s._v('3')]),
                      n('br'),
                      n('span', { staticClass: 'line-number' }, [s._v('4')]),
                      n('br'),
                      n('span', { staticClass: 'line-number' }, [s._v('5')]),
                      n('br'),
                      n('span', { staticClass: 'line-number' }, [s._v('6')]),
                      n('br'),
                      n('span', { staticClass: 'line-number' }, [s._v('7')]),
                      n('br'),
                      n('span', { staticClass: 'line-number' }, [s._v('8')]),
                      n('br'),
                      n('span', { staticClass: 'line-number' }, [s._v('9')]),
                      n('br'),
                      n('span', { staticClass: 'line-number' }, [s._v('10')]),
                      n('br'),
                      n('span', { staticClass: 'line-number' }, [s._v('11')]),
                      n('br'),
                      n('span', { staticClass: 'line-number' }, [s._v('12')]),
                      n('br'),
                      n('span', { staticClass: 'line-number' }, [s._v('13')]),
                      n('br'),
                      n('span', { staticClass: 'line-number' }, [s._v('14')]),
                      n('br'),
                      n('span', { staticClass: 'line-number' }, [s._v('15')]),
                      n('br'),
                      n('span', { staticClass: 'line-number' }, [s._v('16')]),
                      n('br'),
                      n('span', { staticClass: 'line-number' }, [s._v('17')]),
                      n('br'),
                      n('span', { staticClass: 'line-number' }, [s._v('18')]),
                      n('br'),
                      n('span', { staticClass: 'line-number' }, [s._v('19')]),
                      n('br'),
                      n('span', { staticClass: 'line-number' }, [s._v('20')]),
                      n('br'),
                      n('span', { staticClass: 'line-number' }, [s._v('21')]),
                      n('br'),
                      n('span', { staticClass: 'line-number' }, [s._v('22')]),
                      n('br'),
                      n('span', { staticClass: 'line-number' }, [s._v('23')]),
                      n('br'),
                      n('span', { staticClass: 'line-number' }, [s._v('24')]),
                      n('br'),
                      n('span', { staticClass: 'line-number' }, [s._v('25')]),
                      n('br'),
                      n('span', { staticClass: 'line-number' }, [s._v('26')]),
                      n('br'),
                      n('span', { staticClass: 'line-number' }, [s._v('27')]),
                      n('br'),
                      n('span', { staticClass: 'line-number' }, [s._v('28')]),
                      n('br'),
                      n('span', { staticClass: 'line-number' }, [s._v('29')]),
                      n('br'),
                      n('span', { staticClass: 'line-number' }, [s._v('30')]),
                      n('br'),
                      n('span', { staticClass: 'line-number' }, [s._v('31')]),
                      n('br'),
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
      t.default = r.exports;
    },
  },
]);
