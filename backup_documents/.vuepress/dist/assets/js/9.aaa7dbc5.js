(window.webpackJsonp = window.webpackJsonp || []).push([
  [9],
  {
    175: function(s, t, e) {
      'use strict';
      e.r(t);
      var n = e(0),
        a = Object(n.a)(
          {},
          function() {
            var s = this,
              t = s.$createElement,
              e = s._self._c || t;
            return e('div', { staticClass: 'content' }, [
              s._m(0),
              s._v(' '),
              s._m(1),
              s._v(' '),
              s._m(2),
              s._v(' '),
              e('p', [
                s._v('这里有官方的下载地址'),
                e(
                  'a',
                  {
                    attrs: {
                      href: 'https://flutterchina.club/setup-macos/',
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    },
                  },
                  [s._v('flutter官方官网'), e('OutboundLink')],
                  1,
                ),
                s._v(
                  ' 考虑到flutter还是在不断更新迭代为了快速跟进新功能并且有时需要查看源码方便所以通过git clone 将仓库clone到本地通过 git checkout 控制flutter的版本',
                ),
              ]),
              s._v(' '),
              s._m(3),
              s._m(4),
              s._v(' '),
              s._m(5),
              s._m(6),
              s._v(' '),
              s._m(7),
              s._m(8),
              s._v(' '),
              e('p', [
                s._v(
                  '添加vscode的扩展插件  flutter\nVisual Studio Code (VS Code) 安装\nVS Code: 轻量级编辑器，支持Flutter运行和调试.',
                ),
              ]),
              s._v(' '),
              s._m(9),
              s._m(10),
              s._v(' '),
              e('p', [s._v('使用vscode 调试开发配置 debug 使用F5 唤起调试')]),
              s._v(' '),
              s._m(11),
              s._m(12),
              s._v(' '),
              s._m(13),
            ]);
          },
          [
            function() {
              var s = this.$createElement,
                t = this._self._c || s;
              return t(
                'h1',
                { attrs: { id: 'flutter-for-web-项目环境搭建' } },
                [
                  t(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: {
                        href: '#flutter-for-web-项目环境搭建',
                        'aria-hidden': 'true',
                      },
                    },
                    [this._v('#')],
                  ),
                  this._v(' flutter for web 项目环境搭建'),
                ],
              );
            },
            function() {
              var s = this,
                t = s.$createElement,
                e = s._self._c || t;
              return e('blockquote', [
                e('p', [
                  s._v('个人使用习惯原因，操作系统 macos 是flutter使用的的是'),
                  e('code', [s._v('flutter for macos')]),
                  s._v(' ，终端使用'),
                  e('code', [s._v('item2')]),
                  s._v(' 样式是'),
                  e('code', [s._v('zsh')]),
                  s._v('，编辑器'),
                  e('code', [s._v('vscode')]),
                  s._v(' 基于上述环境配置'),
                ]),
              ]);
            },
            function() {
              var s = this.$createElement,
                t = this._self._c || s;
              return t('h3', { attrs: { id: '安装flutter-sdk' } }, [
                t(
                  'a',
                  {
                    staticClass: 'header-anchor',
                    attrs: { href: '#安装flutter-sdk', 'aria-hidden': 'true' },
                  },
                  [this._v('#')],
                ),
                this._v(' 安装flutter sdk'),
              ]);
            },
            function() {
              var s = this.$createElement,
                t = this._self._c || s;
              return t(
                'div',
                { staticClass: 'language-shell line-numbers-mode' },
                [
                  t('pre', { pre: !0, attrs: { class: 'language-text' } }, [
                    t('code', [
                      this._v(
                        '// 下载flutter sdk\ngit clone -b master https://github.com/flutter/flutter.git\n\n// 指定flutter 运行版本\ngit checkout v1.6.3\n',
                      ),
                    ]),
                  ]),
                  this._v(' '),
                  t('div', { staticClass: 'line-numbers-wrapper' }, [
                    t('span', { staticClass: 'line-number' }, [this._v('1')]),
                    t('br'),
                    t('span', { staticClass: 'line-number' }, [this._v('2')]),
                    t('br'),
                    t('span', { staticClass: 'line-number' }, [this._v('3')]),
                    t('br'),
                    t('span', { staticClass: 'line-number' }, [this._v('4')]),
                    t('br'),
                    t('span', { staticClass: 'line-number' }, [this._v('5')]),
                    t('br'),
                  ]),
                ],
              );
            },
            function() {
              var s = this.$createElement,
                t = this._self._c || s;
              return t('h3', { attrs: { id: '配置环境变量' } }, [
                t(
                  'a',
                  {
                    staticClass: 'header-anchor',
                    attrs: { href: '#配置环境变量', 'aria-hidden': 'true' },
                  },
                  [this._v('#')],
                ),
                this._v(' 配置环境变量'),
              ]);
            },
            function() {
              var s = this,
                t = s.$createElement,
                e = s._self._c || t;
              return e('div', { staticClass: 'language- line-numbers-mode' }, [
                e('pre', { pre: !0, attrs: { class: 'language-text' } }, [
                  e('code', [
                    s._v(
                      '// 设置zshrc的配置文件\nvim .zshrc\n\n// 添加环境变量\nexport $PATH_TO_FLUTTER_GIT_DIRECTORY=/Users/qiushi/worksplace/flutter // 设置flutter sdk 本地地址\nexport PUB_HOSTED_URL=https://pub.flutter-io.cn //国内用户需要设置\nexport FLUTTER_STORAGE_BASE_URL=https://storage.flutter-io.cn //国内用户需要设置\nexport PATH=$PATH_TO_FLUTTER_GIT_DIRECTORY/flutter/bin:$PATH\n\n\n\n// 添加flutter全局安装指令 将.pub-cache/bin的地址配置到Path环境变量\nexport PATH="$PATH":"$HOME/.pub-cache/bin"\n\n\n// 使环境变量生效\nsource ~/.zshrc\n',
                    ),
                  ]),
                ]),
                s._v(' '),
                e('div', { staticClass: 'line-numbers-wrapper' }, [
                  e('span', { staticClass: 'line-number' }, [s._v('1')]),
                  e('br'),
                  e('span', { staticClass: 'line-number' }, [s._v('2')]),
                  e('br'),
                  e('span', { staticClass: 'line-number' }, [s._v('3')]),
                  e('br'),
                  e('span', { staticClass: 'line-number' }, [s._v('4')]),
                  e('br'),
                  e('span', { staticClass: 'line-number' }, [s._v('5')]),
                  e('br'),
                  e('span', { staticClass: 'line-number' }, [s._v('6')]),
                  e('br'),
                  e('span', { staticClass: 'line-number' }, [s._v('7')]),
                  e('br'),
                  e('span', { staticClass: 'line-number' }, [s._v('8')]),
                  e('br'),
                  e('span', { staticClass: 'line-number' }, [s._v('9')]),
                  e('br'),
                  e('span', { staticClass: 'line-number' }, [s._v('10')]),
                  e('br'),
                  e('span', { staticClass: 'line-number' }, [s._v('11')]),
                  e('br'),
                  e('span', { staticClass: 'line-number' }, [s._v('12')]),
                  e('br'),
                  e('span', { staticClass: 'line-number' }, [s._v('13')]),
                  e('br'),
                  e('span', { staticClass: 'line-number' }, [s._v('14')]),
                  e('br'),
                  e('span', { staticClass: 'line-number' }, [s._v('15')]),
                  e('br'),
                  e('span', { staticClass: 'line-number' }, [s._v('16')]),
                  e('br'),
                  e('span', { staticClass: 'line-number' }, [s._v('17')]),
                  e('br'),
                ]),
              ]);
            },
            function() {
              var s = this.$createElement,
                t = this._self._c || s;
              return t(
                'h3',
                { attrs: { id: '配置webdev-作用打包构架web应用' } },
                [
                  t(
                    'a',
                    {
                      staticClass: 'header-anchor',
                      attrs: {
                        href: '#配置webdev-作用打包构架web应用',
                        'aria-hidden': 'true',
                      },
                    },
                    [this._v('#')],
                  ),
                  this._v(' 配置webdev 作用打包构架web应用'),
                ],
              );
            },
            function() {
              var s = this,
                t = s.$createElement,
                e = s._self._c || t;
              return e('div', { staticClass: 'language- line-numbers-mode' }, [
                e('pre', { pre: !0, attrs: { class: 'language-text' } }, [
                  e('code', [
                    s._v(
                      'flutter pub global activate webdev\n// webdev 依赖dart 需要将dart-sdk 配置到环境变量 找到 flutter bin/cache/dart-sdk/bin\n/Users/qiushi/worksplace/flutter/bin/cache/dart-sdk/bin\n\n配置到PATH环境变变量中\necho $PATH // 查看环境变量是否生效  \n\n',
                    ),
                  ]),
                ]),
                s._v(' '),
                e('div', { staticClass: 'line-numbers-wrapper' }, [
                  e('span', { staticClass: 'line-number' }, [s._v('1')]),
                  e('br'),
                  e('span', { staticClass: 'line-number' }, [s._v('2')]),
                  e('br'),
                  e('span', { staticClass: 'line-number' }, [s._v('3')]),
                  e('br'),
                  e('span', { staticClass: 'line-number' }, [s._v('4')]),
                  e('br'),
                  e('span', { staticClass: 'line-number' }, [s._v('5')]),
                  e('br'),
                  e('span', { staticClass: 'line-number' }, [s._v('6')]),
                  e('br'),
                  e('span', { staticClass: 'line-number' }, [s._v('7')]),
                  e('br'),
                ]),
              ]);
            },
            function() {
              var s = this.$createElement,
                t = this._self._c || s;
              return t('h3', { attrs: { id: 'vscode-安装插件' } }, [
                t(
                  'a',
                  {
                    staticClass: 'header-anchor',
                    attrs: { href: '#vscode-安装插件', 'aria-hidden': 'true' },
                  },
                  [this._v('#')],
                ),
                this._v(' vscode 安装插件'),
              ]);
            },
            function() {
              var s = this,
                t = s.$createElement,
                e = s._self._c || t;
              return e('div', { staticClass: 'language- line-numbers-mode' }, [
                e('pre', { pre: !0, attrs: { class: 'language-text' } }, [
                  e('code', [
                    s._v(
                      '// 安装 VS Code \nVS Code, 安装1.20.1或更高版本.\n// 安装Flutter插件\n1.启动 VS Code\n2. 调用 View>Command Palette… 或 F1\n3. 输入 `install extension`,\n4. 在搜索框输入 flutter , 在搜索结果列表中选择 ‘Flutter’, 然后点击 Install\n5. 选择 ‘OK’ 重新启动 VS Code\n// 通过Flutter Doctor验证您的设置\n1. 调用 View>Command Palette… \n2. 输入 ‘doctor’, 然后选择 ‘Flutter: Run Flutter Doctor’ action\n3. 查看“OUTPUT”窗口中的输出是否有问题\n\n',
                    ),
                  ]),
                ]),
                s._v(' '),
                e('div', { staticClass: 'line-numbers-wrapper' }, [
                  e('span', { staticClass: 'line-number' }, [s._v('1')]),
                  e('br'),
                  e('span', { staticClass: 'line-number' }, [s._v('2')]),
                  e('br'),
                  e('span', { staticClass: 'line-number' }, [s._v('3')]),
                  e('br'),
                  e('span', { staticClass: 'line-number' }, [s._v('4')]),
                  e('br'),
                  e('span', { staticClass: 'line-number' }, [s._v('5')]),
                  e('br'),
                  e('span', { staticClass: 'line-number' }, [s._v('6')]),
                  e('br'),
                  e('span', { staticClass: 'line-number' }, [s._v('7')]),
                  e('br'),
                  e('span', { staticClass: 'line-number' }, [s._v('8')]),
                  e('br'),
                  e('span', { staticClass: 'line-number' }, [s._v('9')]),
                  e('br'),
                  e('span', { staticClass: 'line-number' }, [s._v('10')]),
                  e('br'),
                  e('span', { staticClass: 'line-number' }, [s._v('11')]),
                  e('br'),
                  e('span', { staticClass: 'line-number' }, [s._v('12')]),
                  e('br'),
                  e('span', { staticClass: 'line-number' }, [s._v('13')]),
                  e('br'),
                ]),
              ]);
            },
            function() {
              var s = this.$createElement,
                t = this._self._c || s;
              return t('h3', { attrs: { id: '本地调试' } }, [
                t(
                  'a',
                  {
                    staticClass: 'header-anchor',
                    attrs: { href: '#本地调试', 'aria-hidden': 'true' },
                  },
                  [this._v('#')],
                ),
                this._v(' 本地调试'),
              ]);
            },
            function() {
              var s = this,
                t = s.$createElement,
                e = s._self._c || t;
              return e('div', { staticClass: 'language- line-numbers-mode' }, [
                e('pre', { pre: !0, attrs: { class: 'language-text' } }, [
                  e('code', [
                    s._v(
                      '{\n    // 使用 IntelliSense 了解相关属性。 \n    // 悬停以查看现有属性的描述。   \n    // 欲了解更多信息，请访问: https://go.microsoft.com/fwlink/?linkid=830387\n    "version": "0.2.0",s\n    "configurations": [\n        {\n            "name": "Dart",\n            "program": "lib/main.dart",\n            "request": "launch",\n            "type": "dart"\n        }               \n    ]   \n}\n',
                    ),
                  ]),
                ]),
                s._v(' '),
                e('div', { staticClass: 'line-numbers-wrapper' }, [
                  e('span', { staticClass: 'line-number' }, [s._v('1')]),
                  e('br'),
                  e('span', { staticClass: 'line-number' }, [s._v('2')]),
                  e('br'),
                  e('span', { staticClass: 'line-number' }, [s._v('3')]),
                  e('br'),
                  e('span', { staticClass: 'line-number' }, [s._v('4')]),
                  e('br'),
                  e('span', { staticClass: 'line-number' }, [s._v('5')]),
                  e('br'),
                  e('span', { staticClass: 'line-number' }, [s._v('6')]),
                  e('br'),
                  e('span', { staticClass: 'line-number' }, [s._v('7')]),
                  e('br'),
                  e('span', { staticClass: 'line-number' }, [s._v('8')]),
                  e('br'),
                  e('span', { staticClass: 'line-number' }, [s._v('9')]),
                  e('br'),
                  e('span', { staticClass: 'line-number' }, [s._v('10')]),
                  e('br'),
                  e('span', { staticClass: 'line-number' }, [s._v('11')]),
                  e('br'),
                  e('span', { staticClass: 'line-number' }, [s._v('12')]),
                  e('br'),
                  e('span', { staticClass: 'line-number' }, [s._v('13')]),
                  e('br'),
                  e('span', { staticClass: 'line-number' }, [s._v('14')]),
                  e('br'),
                ]),
              ]);
            },
            function() {
              var s = this.$createElement,
                t = this._self._c || s;
              return t('h3', { attrs: { id: 'ios模拟器调试' } }, [
                t(
                  'a',
                  {
                    staticClass: 'header-anchor',
                    attrs: { href: '#ios模拟器调试', 'aria-hidden': 'true' },
                  },
                  [this._v('#')],
                ),
                this._v(' ios模拟器调试'),
              ]);
            },
            function() {
              var s = this.$createElement,
                t = this._self._c || s;
              return t('div', { staticClass: 'language- line-numbers-mode' }, [
                t('pre', { pre: !0, attrs: { class: 'language-text' } }, [
                  t('code', [
                    this._v(
                      '\x3c!-- 打开ios 模拟器 --\x3e\nopen -a Simulator\n\x3c!-- 运行flutter app --\x3e\nflutter run \n\n',
                    ),
                  ]),
                ]),
                this._v(' '),
                t('div', { staticClass: 'line-numbers-wrapper' }, [
                  t('span', { staticClass: 'line-number' }, [this._v('1')]),
                  t('br'),
                  t('span', { staticClass: 'line-number' }, [this._v('2')]),
                  t('br'),
                  t('span', { staticClass: 'line-number' }, [this._v('3')]),
                  t('br'),
                  t('span', { staticClass: 'line-number' }, [this._v('4')]),
                  t('br'),
                  t('span', { staticClass: 'line-number' }, [this._v('5')]),
                  t('br'),
                ]),
              ]);
            },
          ],
          !1,
          null,
          null,
          null,
        );
      t.default = a.exports;
    },
  },
]);
