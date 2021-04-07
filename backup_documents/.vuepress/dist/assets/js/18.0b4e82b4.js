(window.webpackJsonp = window.webpackJsonp || []).push([
  [18],
  {
    184: function(e, t, a) {
      'use strict';
      a.r(t);
      var s = a(0),
        r = Object(s.a)(
          {},
          function() {
            var e = this.$createElement,
              t = this._self._c || e;
            return t('div', { staticClass: 'content' }, [
              this._m(0),
              this._v(' '),
              this._m(1),
              this._v(' '),
              t('p', [
                this._v('之前使用 '),
                t(
                  'a',
                  {
                    attrs: {
                      href:
                        'https://github.com/FormidableLabs/webpack-dashboard/blob/05e7589abb63f206fe7d29c39766eef2346e70b5/dashboard/index.js',
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    },
                  },
                  [this._v('webpack-dashboard'), t('OutboundLink')],
                  1,
                ),
                this._v(
                  '\n这是在控制台输出的webpack plugin 所以借鉴它实现一个网页版的构建管理页面',
                ),
              ]),
            ]);
          },
          [
            function() {
              var e = this.$createElement,
                t = this._self._c || e;
              return t('h3', { attrs: { id: '开发webpack插件' } }, [
                t(
                  'a',
                  {
                    staticClass: 'header-anchor',
                    attrs: { href: '#开发webpack插件', 'aria-hidden': 'true' },
                  },
                  [this._v('#')],
                ),
                this._v(' 开发webpack插件'),
              ]);
            },
            function() {
              var e = this.$createElement,
                t = this._self._c || e;
              return t('blockquote', [
                t('p', [
                  this._v(
                    '一个偶然的机会，使用了rax的调试淘宝收货地址组建，对rax的构建流程印象深刻。webpack 的构架日志都是输出到控制台上，对于前端性能我们是很关注的构建的产物的大小和数量，以及相互之间的依赖，在控制台中展示不是很好看，没有一个整体的把控所以想实现一个webpack 构架输出到前端页面中展示',
                  ),
                ]),
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
