;(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    167: function (t, r, e) {
      var content = e(225)
      'string' == typeof content && (content = [[t.i, content, '']]),
        content.locals && (t.exports = content.locals)
      ;(0, e(77).default)('73749020', content, !0, { sourceMap: !1 })
    },
    189: function (t, r, e) {
      'use strict'
      var n = {
          data: function () {
            return {}
          },
        },
        o = e(54),
        c = e(98),
        l = e.n(c),
        d = e(267),
        component = Object(o.a)(
          n,
          function () {
            var t = this.$createElement,
              r = this._self._c || t
            return r('v-app', [r('nuxt')], 1)
          },
          [],
          !1,
          null,
          null,
          null
        )
      r.a = component.exports
      l()(component, { VApp: d.a })
    },
    195: function (t, r, e) {
      e(196), (t.exports = e(197))
    },
    224: function (t, r, e) {
      'use strict'
      e(167)
    },
    225: function (t, r, e) {
      ;(r = e(76)(!1)).push([t.i, 'h1[data-v-7e41b9db]{font-size:20px}', '']),
        (t.exports = r)
    },
    38: function (t, r, e) {
      'use strict'
      var n = {
          layout: 'empty',
          props: { error: { type: Object, default: null } },
          data: function () {
            return {
              pageNotFound: '404 Not Found',
              otherError: 'An error occurred',
            }
          },
          head: function () {
            return {
              title:
                404 === this.error.statusCode
                  ? this.pageNotFound
                  : this.otherError,
            }
          },
        },
        o = (e(224), e(54)),
        c = e(98),
        l = e.n(c),
        d = e(267),
        component = Object(o.a)(
          n,
          function () {
            var t = this,
              r = t.$createElement,
              e = t._self._c || r
            return e(
              'v-app',
              { attrs: { light: '' } },
              [
                404 === t.error.statusCode
                  ? e('h1', [t._v('\n    ' + t._s(t.pageNotFound) + '\n  ')])
                  : e('h1', [t._v('\n    ' + t._s(t.otherError) + '\n  ')]),
                t._v(' '),
                e('NuxtLink', { attrs: { to: '/' } }, [t._v(' Home page ')]),
              ],
              1
            )
          },
          [],
          !1,
          null,
          '7e41b9db',
          null
        )
      r.a = component.exports
      l()(component, { VApp: d.a })
    },
  },
  [[195, 4, 2, 5]],
])
