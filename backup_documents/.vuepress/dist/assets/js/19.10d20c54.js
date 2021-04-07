(window.webpackJsonp = window.webpackJsonp || []).push([
  [19],
  {
    185: function(e, s, t) {
      'use strict';
      t.r(s);
      var a = t(0),
        n = Object(a.a)(
          {},
          function() {
            var e = this,
              s = e.$createElement,
              t = e._self._c || s;
            return t('div', { staticClass: 'content' }, [
              e._m(0),
              e._v(' '),
              e._m(1),
              t('p', [e._v('\b\b')]),
              e._v(' '),
              e._m(2),
              e._v(' '),
              e._m(3),
              e._m(4),
              e._v(' '),
              e._m(5),
              e._m(6),
              e._v(' '),
              e._m(7),
              e._m(8),
              e._v(' '),
              e._m(9),
              e._m(10),
              e._v(' '),
              t('p', [
                t(
                  'a',
                  {
                    attrs: {
                      href: 'https://segmentfault.com/a/1190000012789253',
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    },
                  },
                  [
                    e._v('从零开始搭建一个简单的基于webpack的vue开发环境'),
                    t('OutboundLink'),
                  ],
                  1,
                ),
              ]),
            ]);
          },
          [
            function() {
              var e = this.$createElement,
                s = this._self._c || e;
              return s('h3', { attrs: { id: '搭建环境步骤' } }, [
                s(
                  'a',
                  {
                    staticClass: 'header-anchor',
                    attrs: { href: '#搭建环境步骤', 'aria-hidden': 'true' },
                  },
                  [this._v('#')],
                ),
                this._v(' 搭建环境步骤'),
              ]);
            },
            function() {
              var e = this,
                s = e.$createElement,
                t = e._self._c || s;
              return t(
                'div',
                { staticClass: 'language-do line-numbers-mode' },
                [
                  t('pre', { pre: !0, attrs: { class: 'language-text' } }, [
                    t('code', [
                      e._v(
                        '// 创建文件\n$ mkdir popeye-vue-popup\n// 进入文件\n$ cd popeye-vue-popup\n// \b初始化git\n$ git init\n// 初始化npm\n$ npm init\n\b// \b引入webpack\n$ npm i webpack webpack-dev-server -D\n// 安装vue \n$ npm i vue -S\n// 使用cnpm 加速\n$ npm install -g cnpm --registry=https://registry.npm.taobao.org\n',
                      ),
                    ]),
                  ]),
                  e._v(' '),
                  t('div', { staticClass: 'line-numbers-wrapper' }, [
                    t('span', { staticClass: 'line-number' }, [e._v('1')]),
                    t('br'),
                    t('span', { staticClass: 'line-number' }, [e._v('2')]),
                    t('br'),
                    t('span', { staticClass: 'line-number' }, [e._v('3')]),
                    t('br'),
                    t('span', { staticClass: 'line-number' }, [e._v('4')]),
                    t('br'),
                    t('span', { staticClass: 'line-number' }, [e._v('5')]),
                    t('br'),
                    t('span', { staticClass: 'line-number' }, [e._v('6')]),
                    t('br'),
                    t('span', { staticClass: 'line-number' }, [e._v('7')]),
                    t('br'),
                    t('span', { staticClass: 'line-number' }, [e._v('8')]),
                    t('br'),
                    t('span', { staticClass: 'line-number' }, [e._v('9')]),
                    t('br'),
                    t('span', { staticClass: 'line-number' }, [e._v('10')]),
                    t('br'),
                    t('span', { staticClass: 'line-number' }, [e._v('11')]),
                    t('br'),
                    t('span', { staticClass: 'line-number' }, [e._v('12')]),
                    t('br'),
                    t('span', { staticClass: 'line-number' }, [e._v('13')]),
                    t('br'),
                    t('span', { staticClass: 'line-number' }, [e._v('14')]),
                    t('br'),
                  ]),
                ],
              );
            },
            function() {
              var e = this.$createElement,
                s = this._self._c || e;
              return s('h3', { attrs: { id: 'webpack-配置' } }, [
                s(
                  'a',
                  {
                    staticClass: 'header-anchor',
                    attrs: { href: '#webpack-配置', 'aria-hidden': 'true' },
                  },
                  [this._v('#')],
                ),
                this._v(' webpack 配置'),
              ]);
            },
            function() {
              var e = this,
                s = e.$createElement,
                t = e._self._c || s;
              return t(
                'div',
                { staticClass: 'language-do line-numbers-mode' },
                [
                  t('pre', { pre: !0, attrs: { class: 'language-text' } }, [
                    t('code', [
                      e._v(
                        "\x3c!-- 安装webpack plugin --\x3e\ncnpm i -D webpack-cli\ncnpm i -D html-webpack-plugin webpack-bundle-analyzer \ncnpm i -D clean-webpack-plugin vue-style-loader\ncnpm i -D vue-loader css-loader vue-style-loader sass-loader  vue-template-compiler\n\nresolve: {\n\n    extensions: ['.js', '.vue'] // 省略扩展名\n}\n\n",
                      ),
                    ]),
                  ]),
                  e._v(' '),
                  t('div', { staticClass: 'line-numbers-wrapper' }, [
                    t('span', { staticClass: 'line-number' }, [e._v('1')]),
                    t('br'),
                    t('span', { staticClass: 'line-number' }, [e._v('2')]),
                    t('br'),
                    t('span', { staticClass: 'line-number' }, [e._v('3')]),
                    t('br'),
                    t('span', { staticClass: 'line-number' }, [e._v('4')]),
                    t('br'),
                    t('span', { staticClass: 'line-number' }, [e._v('5')]),
                    t('br'),
                    t('span', { staticClass: 'line-number' }, [e._v('6')]),
                    t('br'),
                    t('span', { staticClass: 'line-number' }, [e._v('7')]),
                    t('br'),
                    t('span', { staticClass: 'line-number' }, [e._v('8')]),
                    t('br'),
                    t('span', { staticClass: 'line-number' }, [e._v('9')]),
                    t('br'),
                    t('span', { staticClass: 'line-number' }, [e._v('10')]),
                    t('br'),
                    t('span', { staticClass: 'line-number' }, [e._v('11')]),
                    t('br'),
                  ]),
                ],
              );
            },
            function() {
              var e = this.$createElement,
                s = this._self._c || e;
              return s('h3', { attrs: { id: 'babel-配置' } }, [
                s(
                  'a',
                  {
                    staticClass: 'header-anchor',
                    attrs: { href: '#babel-配置', 'aria-hidden': 'true' },
                  },
                  [this._v('#')],
                ),
                this._v(' babel 配置'),
              ]);
            },
            function() {
              var e = this.$createElement,
                s = this._self._c || e;
              return s('div', { staticClass: 'language- line-numbers-mode' }, [
                s('pre', { pre: !0, attrs: { class: 'language-text' } }, [
                  s('code', [
                    this._v(
                      'cnpm i -D @babel/core @babel/cli @babel/preset-env\n',
                    ),
                  ]),
                ]),
                this._v(' '),
                s('div', { staticClass: 'line-numbers-wrapper' }, [
                  s('span', { staticClass: 'line-number' }, [this._v('1')]),
                  s('br'),
                ]),
              ]);
            },
            function() {
              var e = this.$createElement,
                s = this._self._c || e;
              return s('h3', { attrs: { id: 'vue-依赖' } }, [
                s(
                  'a',
                  {
                    staticClass: 'header-anchor',
                    attrs: { href: '#vue-依赖', 'aria-hidden': 'true' },
                  },
                  [this._v('#')],
                ),
                this._v(' vue 依赖'),
              ]);
            },
            function() {
              var e = this.$createElement,
                s = this._self._c || e;
              return s('div', { staticClass: 'language- line-numbers-mode' }, [
                s('pre', { pre: !0, attrs: { class: 'language-text' } }, [
                  s('code', [this._v('cnpm i -S vue-template-compiler vue\n')]),
                ]),
                this._v(' '),
                s('div', { staticClass: 'line-numbers-wrapper' }, [
                  s('span', { staticClass: 'line-number' }, [this._v('1')]),
                  s('br'),
                ]),
              ]);
            },
            function() {
              var e = this.$createElement,
                s = this._self._c || e;
              return s('h3', { attrs: { id: '设置npm-启动' } }, [
                s(
                  'a',
                  {
                    staticClass: 'header-anchor',
                    attrs: { href: '#设置npm-启动', 'aria-hidden': 'true' },
                  },
                  [this._v('#')],
                ),
                this._v(' 设置npm 启动'),
              ]);
            },
            function() {
              var e = this.$createElement,
                s = this._self._c || e;
              return s('div', { staticClass: 'language- line-numbers-mode' }, [
                s('pre', { pre: !0, attrs: { class: 'language-text' } }, [
                  s('code', [
                    this._v(
                      ' "scripts": {\n    "test": "echo \\"Error: no test specified\\" && exit 1",\n    "dev": "webpack-dev-server --open --hot",\n    "build": "webpack --progress --hide-modules"\n  },\n',
                    ),
                  ]),
                ]),
                this._v(' '),
                s('div', { staticClass: 'line-numbers-wrapper' }, [
                  s('span', { staticClass: 'line-number' }, [this._v('1')]),
                  s('br'),
                  s('span', { staticClass: 'line-number' }, [this._v('2')]),
                  s('br'),
                  s('span', { staticClass: 'line-number' }, [this._v('3')]),
                  s('br'),
                  s('span', { staticClass: 'line-number' }, [this._v('4')]),
                  s('br'),
                  s('span', { staticClass: 'line-number' }, [this._v('5')]),
                  s('br'),
                ]),
              ]);
            },
            function() {
              var e = this.$createElement,
                s = this._self._c || e;
              return s('h3', { attrs: { id: '参考文档' } }, [
                s(
                  'a',
                  {
                    staticClass: 'header-anchor',
                    attrs: { href: '#参考文档', 'aria-hidden': 'true' },
                  },
                  [this._v('#')],
                ),
                this._v(' 参考文档'),
              ]);
            },
          ],
          !1,
          null,
          null,
          null,
        );
      s.default = n.exports;
    },
  },
]);
