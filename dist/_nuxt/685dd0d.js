/*! For license information please see LICENSES */
;(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    289: function (t, e, n) {
      'use strict'
      ;(function (t) {
        n.d(e, 'a', function () {
          return cr
        }),
          n.d(e, 'b', function () {
            return lr
          }),
          n.d(e, 'c', function () {
            return fr
          }),
          n.d(e, 'd', function () {
            return pr
          }),
          n.d(e, 'e', function () {
            return dr
          }),
          n.d(e, 'f', function () {
            return vr
          }),
          n.d(e, 'g', function () {
            return ur
          }),
          n.d(e, 'h', function () {
            return ar
          })
        var r = function (t, b) {
          return (r =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, b) {
                t.__proto__ = b
              }) ||
            function (t, b) {
              for (var p in b)
                Object.prototype.hasOwnProperty.call(b, p) && (t[p] = b[p])
            })(t, b)
        }
        function o(t) {
          var s = 'function' == typeof Symbol && Symbol.iterator,
            e = s && t[s],
            i = 0
          if (e) return e.call(t)
          if (t && 'number' == typeof t.length)
            return {
              next: function () {
                return (
                  t && i >= t.length && (t = void 0),
                  { value: t && t[i++], done: !t }
                )
              },
            }
          throw new TypeError(
            s ? 'Object is not iterable.' : 'Symbol.iterator is not defined.'
          )
        }
        var c,
          h =
            'undefined' != typeof globalThis
              ? globalThis
              : 'undefined' != typeof window
              ? window
              : void 0 !== t
              ? t
              : 'undefined' != typeof self
              ? self
              : {},
          f = f || {},
          l = h || self
        function d() {}
        function v(a) {
          var b = typeof a
          return (
            'array' ==
              (b =
                'object' != b
                  ? b
                  : a
                  ? Array.isArray(a)
                    ? 'array'
                    : b
                  : 'null') ||
            ('object' == b && 'number' == typeof a.length)
          )
        }
        function y(a) {
          var b = typeof a
          return ('object' == b && null != a) || 'function' == b
        }
        var m = 'closure_uid_' + ((1e9 * Math.random()) >>> 0),
          w = 0
        function I(a, b, t) {
          return a.call.apply(a.bind, arguments)
        }
        function _(a, b, t) {
          if (!a) throw Error()
          if (2 < arguments.length) {
            var e = Array.prototype.slice.call(arguments, 2)
            return function () {
              var t = Array.prototype.slice.call(arguments)
              return Array.prototype.unshift.apply(t, e), a.apply(b, t)
            }
          }
          return function () {
            return a.apply(b, arguments)
          }
        }
        function p(a, b, t) {
          return (p =
            Function.prototype.bind &&
            -1 != Function.prototype.bind.toString().indexOf('native code')
              ? I
              : _).apply(null, arguments)
        }
        function E(a, b) {
          var t = Array.prototype.slice.call(arguments, 1)
          return function () {
            var e = t.slice()
            return e.push.apply(e, arguments), a.apply(this, e)
          }
        }
        function q() {
          return Date.now()
        }
        function T(a, b) {
          function t() {}
          ;(t.prototype = b.prototype),
            (a.X = b.prototype),
            (a.prototype = new t()),
            (a.prototype.constructor = a),
            (a.Kb = function (t, e, n) {
              for (
                var g = Array(arguments.length - 2), r = 2;
                r < arguments.length;
                r++
              )
                g[r - 2] = arguments[r]
              return b.prototype[e].apply(t, g)
            })
        }
        function O() {
          ;(this.j = this.j), (this.i = this.i)
        }
        ;(O.prototype.j = !1),
          (O.prototype.ja = function () {
            if (!this.j && ((this.j = !0), this.G(), 0))
              (function (a) {
                ;(Object.prototype.hasOwnProperty.call(a, m) && a[m]) ||
                  (a[m] = ++w)
              })(this)
          }),
          (O.prototype.G = function () {
            if (this.i) for (; this.i.length; ) this.i.shift()()
          })
        var N = Array.prototype.indexOf
            ? function (a, b) {
                return Array.prototype.indexOf.call(a, b, void 0)
              }
            : function (a, b) {
                if ('string' == typeof a)
                  return 'string' != typeof b || 1 != b.length
                    ? -1
                    : a.indexOf(b, 0)
                for (var t = 0; t < a.length; t++)
                  if (t in a && a[t] === b) return t
                return -1
              },
          j = Array.prototype.forEach
            ? function (a, b, t) {
                Array.prototype.forEach.call(a, b, t)
              }
            : function (a, b, t) {
                for (
                  var e = a.length,
                    n = 'string' == typeof a ? a.split('') : a,
                    r = 0;
                  r < e;
                  r++
                )
                  r in n && b.call(t, n[r], r, a)
              }
        function S(a) {
          return Array.prototype.concat.apply([], arguments)
        }
        function A(a) {
          var b = a.length
          if (0 < b) {
            for (var t = Array(b), e = 0; e < b; e++) t[e] = a[e]
            return t
          }
          return []
        }
        function x(a) {
          return /^[\s\xa0]*$/.test(a)
        }
        var D,
          k = String.prototype.trim
            ? function (a) {
                return a.trim()
              }
            : function (a) {
                return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
              }
        function C(a, b) {
          return -1 != a.indexOf(b)
        }
        function P(a, b) {
          return a < b ? -1 : a > b ? 1 : 0
        }
        t: {
          var L = l.navigator
          if (L) {
            var R = L.userAgent
            if (R) {
              D = R
              break t
            }
          }
          D = ''
        }
        function V(a, b, t) {
          for (var e in a) b.call(t, a[e], e, a)
        }
        function M(a) {
          var b = {}
          for (var t in a) b[t] = a[t]
          return b
        }
        var U = 'constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf'.split(
          ' '
        )
        function F(a, b) {
          for (var t, e, n = 1; n < arguments.length; n++) {
            for (t in (e = arguments[n])) a[t] = e[t]
            for (var r = 0; r < U.length; r++)
              (t = U[r]),
                Object.prototype.hasOwnProperty.call(e, t) && (a[t] = e[t])
          }
        }
        function z(a) {
          return z[' '](a), a
        }
        z[' '] = d
        var G,
          a,
          H = C(D, 'Opera'),
          B = C(D, 'Trident') || C(D, 'MSIE'),
          K = C(D, 'Edge'),
          J = K || B,
          W =
            C(D, 'Gecko') &&
            !(C(D.toLowerCase(), 'webkit') && !C(D, 'Edge')) &&
            !(C(D, 'Trident') || C(D, 'MSIE')) &&
            !C(D, 'Edge'),
          X = C(D.toLowerCase(), 'webkit') && !C(D, 'Edge')
        function Y() {
          var a = l.document
          return a ? a.documentMode : void 0
        }
        t: {
          var Q = '',
            $ =
              ((a = D),
              W
                ? /rv:([^\);]+)(\)|;)/.exec(a)
                : K
                ? /Edge\/([\d\.]+)/.exec(a)
                : B
                ? /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a)
                : X
                ? /WebKit\/(\S+)/.exec(a)
                : H
                ? /(?:Version)[ \/]?(\S+)/.exec(a)
                : void 0)
          if (($ && (Q = $ ? $[1] : ''), B)) {
            var Z = Y()
            if (null != Z && Z > parseFloat(Q)) {
              G = String(Z)
              break t
            }
          }
          G = Q
        }
        var tt,
          et = {}
        function nt(a) {
          return (function (a, b) {
            var t = et
            return Object.prototype.hasOwnProperty.call(t, a)
              ? t[a]
              : (t[a] = b(a))
          })(a, function () {
            for (
              var b = 0,
                t = k(String(G)).split('.'),
                e = k(String(a)).split('.'),
                g = Math.max(t.length, e.length),
                n = 0;
              0 == b && n < g;
              n++
            ) {
              var r = t[n] || '',
                o = e[n] || ''
              do {
                if (
                  ((r = /(\d*)(\D*)(.*)/.exec(r) || ['', '', '', '']),
                  (o = /(\d*)(\D*)(.*)/.exec(o) || ['', '', '', '']),
                  0 == r[0].length && 0 == o[0].length)
                )
                  break
                ;(b =
                  P(
                    0 == r[1].length ? 0 : parseInt(r[1], 10),
                    0 == o[1].length ? 0 : parseInt(o[1], 10)
                  ) ||
                  P(0 == r[2].length, 0 == o[2].length) ||
                  P(r[2], o[2])),
                  (r = r[3]),
                  (o = o[3])
              } while (0 == b)
            }
            return 0 <= b
          })
        }
        if (l.document && B) {
          var it = Y()
          tt = it || parseInt(G, 10) || void 0
        } else tt = void 0
        var ot = tt,
          st = !B || 9 <= Number(ot),
          ut = B && !nt('9'),
          at = (function () {
            if (!l.addEventListener || !Object.defineProperty) return !1
            var a = !1,
              b = Object.defineProperty({}, 'passive', {
                get: function () {
                  a = !0
                },
              })
            try {
              l.addEventListener('test', d, b),
                l.removeEventListener('test', d, b)
            } catch (t) {}
            return a
          })()
        function ct(a, b) {
          ;(this.type = a),
            (this.a = this.target = b),
            (this.defaultPrevented = !1)
        }
        function ht(a, b) {
          if (
            (ct.call(this, a ? a.type : ''),
            (this.relatedTarget = this.a = this.target = null),
            (this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0),
            (this.key = ''),
            (this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1),
            (this.pointerId = 0),
            (this.pointerType = ''),
            (this.c = null),
            a)
          ) {
            var t = (this.type = a.type),
              e =
                a.changedTouches && a.changedTouches.length
                  ? a.changedTouches[0]
                  : null
            if (
              ((this.target = a.target || a.srcElement),
              (this.a = b),
              (b = a.relatedTarget))
            ) {
              if (W) {
                t: {
                  try {
                    z(b.nodeName)
                    var n = !0
                    break t
                  } catch (t) {}
                  n = !1
                }
                n || (b = null)
              }
            } else
              'mouseover' == t
                ? (b = a.fromElement)
                : 'mouseout' == t && (b = a.toElement)
            ;(this.relatedTarget = b),
              e
                ? ((this.clientX = void 0 !== e.clientX ? e.clientX : e.pageX),
                  (this.clientY = void 0 !== e.clientY ? e.clientY : e.pageY),
                  (this.screenX = e.screenX || 0),
                  (this.screenY = e.screenY || 0))
                : ((this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX),
                  (this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY),
                  (this.screenX = a.screenX || 0),
                  (this.screenY = a.screenY || 0)),
              (this.button = a.button),
              (this.key = a.key || ''),
              (this.ctrlKey = a.ctrlKey),
              (this.altKey = a.altKey),
              (this.shiftKey = a.shiftKey),
              (this.metaKey = a.metaKey),
              (this.pointerId = a.pointerId || 0),
              (this.pointerType =
                'string' == typeof a.pointerType
                  ? a.pointerType
                  : ft[a.pointerType] || ''),
              (this.c = a),
              a.defaultPrevented && this.b()
          }
        }
        ;(ct.prototype.b = function () {
          this.defaultPrevented = !0
        }),
          T(ht, ct)
        var ft = { 2: 'touch', 3: 'pen', 4: 'mouse' }
        ht.prototype.b = function () {
          ht.X.b.call(this)
          var a = this.c
          if (a.preventDefault) a.preventDefault()
          else if (((a.returnValue = !1), ut))
            try {
              ;(a.ctrlKey || (112 <= a.keyCode && 123 >= a.keyCode)) &&
                (a.keyCode = -1)
            } catch (t) {}
        }
        var lt = 'closure_listenable_' + ((1e6 * Math.random()) | 0),
          pt = 0
        function vt(a, b, t, e, n) {
          ;(this.listener = a),
            (this.proxy = null),
            (this.src = b),
            (this.type = t),
            (this.capture = !!e),
            (this.ca = n),
            (this.key = ++pt),
            (this.Y = this.Z = !1)
        }
        function yt(a) {
          ;(a.Y = !0),
            (a.listener = null),
            (a.proxy = null),
            (a.src = null),
            (a.ca = null)
        }
        function gt(a) {
          ;(this.src = a), (this.a = {}), (this.b = 0)
        }
        function bt(a, b) {
          var t = b.type
          if (t in a.a) {
            var e,
              n = a.a[t],
              r = N(n, b)
            ;(e = 0 <= r) && Array.prototype.splice.call(n, r, 1),
              e && (yt(b), 0 == a.a[t].length && (delete a.a[t], a.b--))
          }
        }
        function mt(a, b, t, e) {
          for (var n = 0; n < a.length; ++n) {
            var r = a[n]
            if (!r.Y && r.listener == b && r.capture == !!t && r.ca == e)
              return n
          }
          return -1
        }
        gt.prototype.add = function (a, b, t, e, n) {
          var r = a.toString()
          ;(a = this.a[r]) || ((a = this.a[r] = []), this.b++)
          var g = mt(a, b, e, n)
          return (
            -1 < g
              ? ((b = a[g]), t || (b.Z = !1))
              : (((b = new vt(b, this.src, r, !!e, n)).Z = t), a.push(b)),
            b
          )
        }
        var wt = 'closure_lm_' + ((1e6 * Math.random()) | 0),
          It = {}
        function _t(a, b, t, e, n) {
          if (e && e.once)
            return (function t(a, b, e, n, r) {
              if (Array.isArray(b)) {
                for (var o = 0; o < b.length; o++) t(a, b[o], e, n, r)
                return null
              }
              return (
                (e = xt(e)),
                a && a[lt]
                  ? a.wa(b, e, y(n) ? !!n.capture : !!n, r)
                  : Et(a, b, e, !0, n, r)
              )
            })(a, b, t, e, n)
          if (Array.isArray(b)) {
            for (var r = 0; r < b.length; r++) _t(a, b[r], t, e, n)
            return null
          }
          return (
            (t = xt(t)),
            a && a[lt]
              ? a.va(b, t, y(e) ? !!e.capture : !!e, n)
              : Et(a, b, t, !1, e, n)
          )
        }
        function Et(a, b, t, e, n, r) {
          if (!b) throw Error('Invalid event type')
          var g = y(n) ? !!n.capture : !!n
          if (g && !st) return null
          var o = St(a)
          if ((o || (a[wt] = o = new gt(a)), (t = o.add(b, t, e, g, r)).proxy))
            return t
          if (
            ((e = (function () {
              var a = jt,
                b = st
                  ? function (t) {
                      return a.call(b.src, b.listener, t)
                    }
                  : function (t) {
                      if (!(t = a.call(b.src, b.listener, t))) return t
                    }
              return b
            })()),
            (t.proxy = e),
            (e.src = a),
            (e.listener = t),
            a.addEventListener)
          )
            at || (n = g),
              void 0 === n && (n = !1),
              a.addEventListener(b.toString(), e, n)
          else if (a.attachEvent) a.attachEvent(Ot(b.toString()), e)
          else {
            if (!a.addListener || !a.removeListener)
              throw Error('addEventListener and attachEvent are unavailable.')
            a.addListener(e)
          }
          return t
        }
        function Tt(a) {
          if ('number' != typeof a && a && !a.Y) {
            var b = a.src
            if (b && b[lt]) bt(b.c, a)
            else {
              var t = a.type,
                e = a.proxy
              b.removeEventListener
                ? b.removeEventListener(t, e, a.capture)
                : b.detachEvent
                ? b.detachEvent(Ot(t), e)
                : b.addListener && b.removeListener && b.removeListener(e),
                (t = St(b))
                  ? (bt(t, a), 0 == t.b && ((t.src = null), (b[wt] = null)))
                  : yt(a)
            }
          }
        }
        function Ot(a) {
          return a in It ? It[a] : (It[a] = 'on' + a)
        }
        function Nt(a, b) {
          var t = a.listener,
            e = a.ca || a.src
          return a.Z && Tt(a), t.call(e, b)
        }
        function jt(a, b) {
          if (a.Y) return !0
          if (!st) {
            if (!b)
              t: {
                b = ['window', 'event']
                for (var t = l, e = 0; e < b.length; e++)
                  if (null == (t = t[b[e]])) {
                    b = null
                    break t
                  }
                b = t
              }
            return Nt(a, (b = new ht(b, this)))
          }
          return Nt(a, new ht(b, this))
        }
        function St(a) {
          return (a = a[wt]) instanceof gt ? a : null
        }
        var At = '__closure_events_fn_' + ((1e9 * Math.random()) >>> 0)
        function xt(a) {
          return 'function' == typeof a
            ? a
            : (a[At] ||
                (a[At] = function (b) {
                  return a.handleEvent(b)
                }),
              a[At])
        }
        function Dt() {
          O.call(this),
            (this.c = new gt(this)),
            (this.J = this),
            (this.C = null)
        }
        function kt(a, b) {
          var t,
            e = a.C
          if (e) for (t = []; e; e = e.C) t.push(e)
          if (((a = a.J), (e = b.type || b), 'string' == typeof b))
            b = new ct(b, a)
          else if (b instanceof ct) b.target = b.target || a
          else {
            var n = b
            F((b = new ct(e, a)), n)
          }
          if (((n = !0), t))
            for (var r = t.length - 1; 0 <= r; r--) {
              var g = (b.a = t[r])
              n = Ct(g, e, !0, b) && n
            }
          if (
            ((n = Ct((g = b.a = a), e, !0, b) && n),
            (n = Ct(g, e, !1, b) && n),
            t)
          )
            for (r = 0; r < t.length; r++)
              n = Ct((g = b.a = t[r]), e, !1, b) && n
        }
        function Ct(a, b, t, e) {
          if (!(b = a.c.a[String(b)])) return !0
          b = b.concat()
          for (var n = !0, r = 0; r < b.length; ++r) {
            var g = b[r]
            if (g && !g.Y && g.capture == t) {
              var o = g.listener,
                c = g.ca || g.src
              g.Z && bt(a.c, g), (n = !1 !== o.call(c, e) && n)
            }
          }
          return n && !e.defaultPrevented
        }
        T(Dt, O),
          (Dt.prototype[lt] = !0),
          ((c = Dt.prototype).addEventListener = function (a, b, t, e) {
            _t(this, a, b, t, e)
          }),
          (c.removeEventListener = function (a, b, t, e) {
            !(function t(a, b, e, n, r) {
              if (Array.isArray(b))
                for (var o = 0; o < b.length; o++) t(a, b[o], e, n, r)
              else
                (n = y(n) ? !!n.capture : !!n),
                  (e = xt(e)),
                  a && a[lt]
                    ? ((a = a.c),
                      (b = String(b).toString()) in a.a &&
                        -1 < (e = mt((o = a.a[b]), e, n, r)) &&
                        (yt(o[e]),
                        Array.prototype.splice.call(o, e, 1),
                        0 == o.length && (delete a.a[b], a.b--)))
                    : a &&
                      (a = St(a)) &&
                      ((b = a.a[b.toString()]),
                      (a = -1),
                      b && (a = mt(b, e, n, r)),
                      (e = -1 < a ? b[a] : null) && Tt(e))
            })(this, a, b, t, e)
          }),
          (c.G = function () {
            if ((Dt.X.G.call(this), this.c)) {
              var t,
                a = this.c
              for (t in a.a) {
                for (var e = a.a[t], n = 0; n < e.length; n++) yt(e[n])
                delete a.a[t], a.b--
              }
            }
            this.C = null
          }),
          (c.va = function (a, b, t, e) {
            return this.c.add(String(a), b, !1, t, e)
          }),
          (c.wa = function (a, b, t, e) {
            return this.c.add(String(a), b, !0, t, e)
          })
        var Pt = l.JSON.stringify
        function Lt() {
          this.b = this.a = null
        }
        var Rt,
          Vt = new ((function () {
            function t(a, b) {
              ;(this.c = a), (this.f = b), (this.b = 0), (this.a = null)
            }
            return (
              (t.prototype.get = function () {
                var a
                return (
                  0 < this.b
                    ? (this.b--,
                      (a = this.a),
                      (this.a = a.next),
                      (a.next = null))
                    : (a = this.c()),
                  a
                )
              }),
              t
            )
          })())(
            function () {
              return new Ut()
            },
            function (a) {
              a.reset()
            }
          )
        function Mt() {
          var a = Gt,
            b = null
          return (
            a.a &&
              ((b = a.a),
              (a.a = a.a.next),
              a.a || (a.b = null),
              (b.next = null)),
            b
          )
        }
        function Ut() {
          this.next = this.b = this.a = null
        }
        function Ft(a) {
          l.setTimeout(function () {
            throw a
          }, 0)
        }
        function qt(a, b) {
          Rt ||
            (function () {
              var a = l.Promise.resolve(void 0)
              Rt = function () {
                a.then(Ht)
              }
            })(),
            zt || (Rt(), (zt = !0)),
            Gt.add(a, b)
        }
        ;(Lt.prototype.add = function (a, b) {
          var t = Vt.get()
          t.set(a, b), this.b ? (this.b.next = t) : (this.a = t), (this.b = t)
        }),
          (Ut.prototype.set = function (a, b) {
            ;(this.a = a), (this.b = b), (this.next = null)
          }),
          (Ut.prototype.reset = function () {
            this.next = this.b = this.a = null
          })
        var zt = !1,
          Gt = new Lt()
        function Ht() {
          for (var a; (a = Mt()); ) {
            try {
              a.a.call(a.b)
            } catch (t) {
              Ft(t)
            }
            var b = Vt
            b.f(a), 100 > b.b && (b.b++, (a.next = b.a), (b.a = a))
          }
          zt = !1
        }
        function Bt(a, b) {
          Dt.call(this),
            (this.b = a || 1),
            (this.a = b || l),
            (this.f = p(this.Za, this)),
            (this.g = q())
        }
        function Kt(a) {
          ;(a.aa = !1), a.M && (a.a.clearTimeout(a.M), (a.M = null))
        }
        function Jt(a, b, t) {
          if ('function' == typeof a) t && (a = p(a, t))
          else {
            if (!a || 'function' != typeof a.handleEvent)
              throw Error('Invalid listener argument')
            a = p(a.handleEvent, a)
          }
          return 2147483647 < Number(b) ? -1 : l.setTimeout(a, b || 0)
        }
        function Wt(a) {
          a.a = Jt(function () {
            ;(a.a = null), a.c && ((a.c = !1), Wt(a))
          }, a.h)
          var b = a.b
          ;(a.b = null), a.g.apply(null, b)
        }
        T(Bt, Dt),
          ((c = Bt.prototype).aa = !1),
          (c.M = null),
          (c.Za = function () {
            if (this.aa) {
              var a = q() - this.g
              0 < a && a < 0.8 * this.b
                ? (this.M = this.a.setTimeout(this.f, this.b - a))
                : (this.M && (this.a.clearTimeout(this.M), (this.M = null)),
                  kt(this, 'tick'),
                  this.aa && (Kt(this), this.start()))
            }
          }),
          (c.start = function () {
            ;(this.aa = !0),
              this.M ||
                ((this.M = this.a.setTimeout(this.f, this.b)), (this.g = q()))
          }),
          (c.G = function () {
            Bt.X.G.call(this), Kt(this), delete this.a
          })
        var Xt = (function (t) {
          function e(a, b) {
            var e = t.call(this) || this
            return (
              (e.g = a), (e.h = b), (e.b = null), (e.c = !1), (e.a = null), e
            )
          }
          return (
            (function (t, b) {
              function e() {
                this.constructor = t
              }
              r(t, b),
                (t.prototype =
                  null === b
                    ? Object.create(b)
                    : ((e.prototype = b.prototype), new e()))
            })(e, t),
            (e.prototype.f = function (a) {
              ;(this.b = arguments), this.a ? (this.c = !0) : Wt(this)
            }),
            (e.prototype.G = function () {
              t.prototype.G.call(this),
                this.a &&
                  (l.clearTimeout(this.a),
                  (this.a = null),
                  (this.c = !1),
                  (this.b = null))
            }),
            e
          )
        })(O)
        function Yt(a) {
          O.call(this), (this.b = a), (this.a = {})
        }
        T(Yt, O)
        var Qt = []
        function $t(a, b, t, e) {
          Array.isArray(t) || (t && (Qt[0] = t.toString()), (t = Qt))
          for (var n = 0; n < t.length; n++) {
            var r = _t(b, t[n], e || a.handleEvent, !1, a.b || a)
            if (!r) break
            a.a[r.key] = r
          }
        }
        function Zt(a) {
          V(
            a.a,
            function (b, t) {
              this.a.hasOwnProperty(t) && Tt(b)
            },
            a
          ),
            (a.a = {})
        }
        function te() {
          this.a = !0
        }
        function ee(a, b, t, e) {
          a.info(function () {
            return (
              'XMLHTTP TEXT (' +
              b +
              '): ' +
              (function (a, b) {
                if (!a.a) return b
                if (!b) return null
                try {
                  var t = JSON.parse(b)
                  if (t)
                    for (a = 0; a < t.length; a++)
                      if (Array.isArray(t[a])) {
                        var e = t[a]
                        if (!(2 > e.length)) {
                          var n = e[1]
                          if (Array.isArray(n) && !(1 > n.length)) {
                            var r = n[0]
                            if ('noop' != r && 'stop' != r && 'close' != r)
                              for (var g = 1; g < n.length; g++) n[g] = ''
                          }
                        }
                      }
                  return Pt(t)
                } catch (t) {
                  return b
                }
              })(a, t) +
              (e ? ' ' + e : '')
            )
          })
        }
        ;(Yt.prototype.G = function () {
          Yt.X.G.call(this), Zt(this)
        }),
          (Yt.prototype.handleEvent = function () {
            throw Error('EventHandler.handleEvent not implemented')
          }),
          (te.prototype.info = function () {})
        var ne = {},
          re = null
        function ie() {
          return (re = re || new Dt())
        }
        function oe(a) {
          ct.call(this, ne.Fa, a)
        }
        function se(a) {
          var b = ie()
          kt(b, new oe(b, a))
        }
        function ue(a, b) {
          ct.call(this, ne.STAT_EVENT, a), (this.stat = b)
        }
        function ae(a) {
          var b = ie()
          kt(b, new ue(b, a))
        }
        function ce(a) {
          ct.call(this, ne.Ga, a)
        }
        function he(a, b) {
          if ('function' != typeof a)
            throw Error('Fn must not be null and must be a function')
          return l.setTimeout(function () {
            a()
          }, b)
        }
        ;(ne.Fa = 'serverreachability'),
          T(oe, ct),
          (ne.STAT_EVENT = 'statevent'),
          T(ue, ct),
          (ne.Ga = 'timingevent'),
          T(ce, ct)
        var fe = {
            NO_ERROR: 0,
            $a: 1,
            nb: 2,
            mb: 3,
            hb: 4,
            lb: 5,
            ob: 6,
            Da: 7,
            TIMEOUT: 8,
            rb: 9,
          },
          le = {
            fb: 'complete',
            Bb: 'success',
            Ea: 'error',
            Da: 'abort',
            tb: 'ready',
            ub: 'readystatechange',
            TIMEOUT: 'timeout',
            pb: 'incrementaldata',
            sb: 'progress',
            ib: 'downloadprogress',
            Jb: 'uploadprogress',
          }
        function pe() {}
        function de(a) {
          var b
          return (b = a.a) || (b = a.a = {}), b
        }
        function ve() {}
        pe.prototype.a = null
        var ye,
          ge = { OPEN: 'a', eb: 'b', Ea: 'c', qb: 'd' }
        function be() {
          ct.call(this, 'd')
        }
        function me() {
          ct.call(this, 'c')
        }
        function we() {}
        function Ie(a, b, t, e) {
          ;(this.g = a),
            (this.c = b),
            (this.f = t),
            (this.S = e || 1),
            (this.J = new Yt(this)),
            (this.P = _e),
            (a = J ? 125 : void 0),
            (this.R = new Bt(a)),
            (this.B = null),
            (this.b = !1),
            (this.j = this.l = this.i = this.H = this.u = this.T = this.o = null),
            (this.s = []),
            (this.a = null),
            (this.D = 0),
            (this.h = this.m = null),
            (this.N = -1),
            (this.A = !1),
            (this.O = 0),
            (this.F = null),
            (this.V = this.C = this.U = this.I = !1)
        }
        T(be, ct), T(me, ct), T(we, pe), (ye = new we())
        var _e = 45e3,
          Ee = {},
          Te = {}
        function Oe(a, b, t) {
          ;(a.H = 1), (a.i = Je(qe(b))), (a.j = t), (a.I = !0), Ne(a, null)
        }
        function Ne(a, b) {
          ;(a.u = q()), Ae(a), (a.l = qe(a.i))
          var t = a.l,
            e = a.S
          Array.isArray(e) || (e = [String(e)]),
            sn(t.b, 't', e),
            (a.D = 0),
            (a.a = Zn(a.g, a.g.C ? b : null)),
            0 < a.O && (a.F = new Xt(p(a.Ca, a, a.a), a.O)),
            $t(a.J, a.a, 'readystatechange', a.Xa),
            (b = a.B ? M(a.B) : {}),
            a.j
              ? (a.m || (a.m = 'POST'),
                (b['Content-Type'] = 'application/x-www-form-urlencoded'),
                a.a.ba(a.l, a.m, a.j, b))
              : ((a.m = 'GET'), a.a.ba(a.l, a.m, null, b)),
            se(1),
            (function (a, b, t, e, n, r) {
              a.info(function () {
                if (a.a)
                  if (r)
                    for (
                      var g = '', o = r.split('&'), c = 0;
                      c < o.length;
                      c++
                    ) {
                      var u = o[c].split('=')
                      if (1 < u.length) {
                        var h = u[0]
                        u = u[1]
                        var f = h.split('_')
                        g =
                          2 <= f.length && 'type' == f[1]
                            ? g + (h + '=') + u + '&'
                            : g + (h + '=redacted&')
                      }
                    }
                  else g = null
                else g = r
                return (
                  'XMLHTTP REQ (' +
                  e +
                  ') [attempt ' +
                  n +
                  ']: ' +
                  b +
                  '\n' +
                  t +
                  '\n' +
                  g
                )
              })
            })(a.c, a.m, a.l, a.f, a.S, a.j)
        }
        function je(a, b, t) {
          for (var e = !0; !a.A && a.D < t.length; ) {
            var n = Se(a, t)
            if (n == Te) {
              4 == b && ((a.h = 4), ae(14), (e = !1)),
                ee(a.c, a.f, null, '[Incomplete Response]')
              break
            }
            if (n == Ee) {
              ;(a.h = 4), ae(15), ee(a.c, a.f, t, '[Invalid Chunk]'), (e = !1)
              break
            }
            ee(a.c, a.f, n, null), Pe(a, n)
          }
          4 == b && 0 == t.length && ((a.h = 1), ae(16), (e = !1)),
            (a.b = a.b && e),
            e
              ? 0 < t.length &&
                !a.V &&
                ((a.V = !0),
                (b = a.g).a == a &&
                  b.U &&
                  !b.F &&
                  (b.c.info(
                    'Great, no buffering proxy detected. Bytes received: ' +
                      t.length
                  ),
                  Bn(b),
                  (b.F = !0),
                  ae(11)))
              : (ee(a.c, a.f, t, '[Invalid Chunked Response]'), Ce(a), ke(a))
        }
        function Se(a, b) {
          var t = a.D,
            e = b.indexOf('\n', t)
          return -1 == e
            ? Te
            : ((t = Number(b.substring(t, e))),
              isNaN(t)
                ? Ee
                : (e += 1) + t > b.length
                ? Te
                : ((b = b.substr(e, t)), (a.D = e + t), b))
        }
        function Ae(a) {
          ;(a.T = q() + a.P), xe(a, a.P)
        }
        function xe(a, b) {
          if (null != a.o) throw Error('WatchDog timer not null')
          a.o = he(p(a.Va, a), b)
        }
        function De(a) {
          a.o && (l.clearTimeout(a.o), (a.o = null))
        }
        function ke(a) {
          0 == a.g.v || a.A || Wn(a.g, a)
        }
        function Ce(a) {
          De(a)
          var b = a.F
          b && 'function' == typeof b.ja && b.ja(),
            (a.F = null),
            Kt(a.R),
            Zt(a.J),
            a.a && ((b = a.a), (a.a = null), b.abort(), b.ja())
        }
        function Pe(a, b) {
          try {
            var t = a.g
            if (0 != t.v && (t.a == a || pn(t.b, a)))
              if (((t.I = a.N), !a.C && pn(t.b, a) && 3 == t.v)) {
                try {
                  var e = t.ka.a.parse(b)
                } catch (t) {
                  e = null
                }
                if (Array.isArray(e) && 3 == e.length) {
                  var n = e
                  if (0 == n[0]) {
                    t: if (!t.j) {
                      if (t.a) {
                        if (!(t.a.u + 3e3 < a.u)) break t
                        Jn(t), Rn(t)
                      }
                      Hn(t), ae(18)
                    }
                  } else
                    (t.oa = n[1]),
                      0 < t.oa - t.P &&
                        37500 > n[2] &&
                        t.H &&
                        0 == t.o &&
                        !t.m &&
                        (t.m = he(p(t.Sa, t), 6e3))
                  if (1 >= ln(t.b) && t.ea) {
                    try {
                      t.ea()
                    } catch (t) {}
                    t.ea = void 0
                  }
                } else Yn(t, 11)
              } else if (((a.C || t.a == a) && Jn(t), !x(b)))
                for (b = e = t.ka.a.parse(b), e = 0; e < b.length; e++)
                  if (((n = b[e]), (t.P = n[0]), (n = n[1]), 2 == t.v))
                    if ('c' == n[0]) {
                      ;(t.J = n[1]), (t.ga = n[2])
                      var r = n[3]
                      null != r && ((t.ha = r), t.c.info('VER=' + t.ha))
                      var g = n[4]
                      null != g && ((t.pa = g), t.c.info('SVER=' + t.pa))
                      var o = n[5]
                      if (null != o && 'number' == typeof o && 0 < o) {
                        var c = 1.5 * o
                        ;(t.D = c),
                          t.c.info('backChannelRequestTimeoutMs_=' + c)
                      }
                      c = t
                      var u = a.a
                      if (u) {
                        var h = u.a
                          ? u.a.getResponseHeader('X-Client-Wire-Protocol')
                          : null
                        if (h) {
                          var f = c.b
                          !f.a &&
                            (C(h, 'spdy') || C(h, 'quic') || C(h, 'h2')) &&
                            ((f.f = f.g),
                            (f.a = new Set()),
                            f.b && (dn(f, f.b), (f.b = null)))
                        }
                        if (c.A) {
                          var l = u.a
                            ? u.a.getResponseHeader('X-HTTP-Session-Id')
                            : null
                          l && ((c.na = l), Ke(c.B, c.A, l))
                        }
                      }
                      ;(t.v = 3),
                        t.f && t.f.ta(),
                        t.U &&
                          ((t.N = q() - a.u),
                          t.c.info('Handshake RTT: ' + t.N + 'ms'))
                      var d = a
                      if (
                        (((c = t).la = $n(c, c.C ? c.ga : null, c.fa)), d.C)
                      ) {
                        vn(c.b, d)
                        var v = d,
                          y = c.D
                        y && v.setTimeout(y), v.o && (De(v), Ae(v)), (c.a = d)
                      } else Gn(c)
                      0 < t.g.length && Un(t)
                    } else ('stop' != n[0] && 'close' != n[0]) || Yn(t, 7)
                  else
                    3 == t.v &&
                      ('stop' == n[0] || 'close' == n[0]
                        ? 'stop' == n[0]
                          ? Yn(t, 7)
                          : Ln(t)
                        : 'noop' != n[0] && t.f && t.f.sa(n),
                      (t.o = 0))
            se(4)
          } catch (t) {}
        }
        function Le(a, b) {
          if (a.forEach && 'function' == typeof a.forEach) a.forEach(b, void 0)
          else if (v(a) || 'string' == typeof a) j(a, b, void 0)
          else {
            if (a.L && 'function' == typeof a.L) var t = a.L()
            else if (a.K && 'function' == typeof a.K) t = void 0
            else if (v(a) || 'string' == typeof a) {
              t = []
              for (var e = a.length, n = 0; n < e; n++) t.push(n)
            } else for (n in ((t = []), (e = 0), a)) t[e++] = n
            n = (e = (function (a) {
              if (a.K && 'function' == typeof a.K) return a.K()
              if ('string' == typeof a) return a.split('')
              if (v(a)) {
                for (var b = [], t = a.length, e = 0; e < t; e++) b.push(a[e])
                return b
              }
              for (e in ((b = []), (t = 0), a)) b[t++] = a[e]
              return b
            })(a)).length
            for (var r = 0; r < n; r++) b.call(void 0, e[r], t && t[r], a)
          }
        }
        function Re(a, b) {
          ;(this.b = {}), (this.a = []), (this.c = 0)
          var t = arguments.length
          if (1 < t) {
            if (t % 2) throw Error('Uneven number of arguments')
            for (var e = 0; e < t; e += 2)
              this.set(arguments[e], arguments[e + 1])
          } else if (a)
            if (a instanceof Re)
              for (t = a.L(), e = 0; e < t.length; e++)
                this.set(t[e], a.get(t[e]))
            else for (e in a) this.set(e, a[e])
        }
        function Ve(a) {
          if (a.c != a.a.length) {
            for (var b = 0, t = 0; b < a.a.length; ) {
              var e = a.a[b]
              Me(a.b, e) && (a.a[t++] = e), b++
            }
            a.a.length = t
          }
          if (a.c != a.a.length) {
            var n = {}
            for (t = b = 0; b < a.a.length; )
              Me(n, (e = a.a[b])) || ((a.a[t++] = e), (n[e] = 1)), b++
            a.a.length = t
          }
        }
        function Me(a, b) {
          return Object.prototype.hasOwnProperty.call(a, b)
        }
        ;((c = Ie.prototype).setTimeout = function (a) {
          this.P = a
        }),
          (c.Xa = function (a) {
            a = a.target
            var b = this.F
            b && 3 == Dn(a) ? b.f() : this.Ca(a)
          }),
          (c.Ca = function (a) {
            try {
              if (a == this.a)
                t: {
                  var b = Dn(this.a),
                    t = this.a.ua(),
                    e = this.a.W()
                  if (!(3 > b || (3 == b && !J && !this.a.$()))) {
                    this.A || 4 != b || 7 == t || se(8 == t || 0 >= e ? 3 : 2),
                      De(this)
                    var n = this.a.W()
                    this.N = n
                    var r = this.a.$()
                    if (
                      ((this.b = 200 == n),
                      (function (a, b, t, e, n, r, g) {
                        a.info(function () {
                          return (
                            'XMLHTTP RESP (' +
                            e +
                            ') [ attempt ' +
                            n +
                            ']: ' +
                            b +
                            '\n' +
                            t +
                            '\n' +
                            r +
                            ' ' +
                            g
                          )
                        })
                      })(this.c, this.m, this.l, this.f, this.S, b, n),
                      this.b)
                    ) {
                      if (this.U && !this.C) {
                        e: {
                          if (this.a) {
                            var g,
                              o = this.a
                            if (
                              (g = o.a
                                ? o.a.getResponseHeader(
                                    'X-HTTP-Initial-Response'
                                  )
                                : null) &&
                              !x(g)
                            ) {
                              var c = g
                              break e
                            }
                          }
                          c = null
                        }
                        if (!c) {
                          ;(this.b = !1),
                            (this.h = 3),
                            ae(12),
                            Ce(this),
                            ke(this)
                          break t
                        }
                        ee(
                          this.c,
                          this.f,
                          c,
                          'Initial handshake response via X-HTTP-Initial-Response'
                        ),
                          (this.C = !0),
                          Pe(this, c)
                      }
                      this.I
                        ? (je(this, b, r),
                          J &&
                            this.b &&
                            3 == b &&
                            ($t(this.J, this.R, 'tick', this.Wa),
                            this.R.start()))
                        : (ee(this.c, this.f, r, null), Pe(this, r)),
                        4 == b && Ce(this),
                        this.b &&
                          !this.A &&
                          (4 == b
                            ? Wn(this.g, this)
                            : ((this.b = !1), Ae(this)))
                    } else
                      400 == n && 0 < r.indexOf('Unknown SID')
                        ? ((this.h = 3), ae(12))
                        : ((this.h = 0), ae(13)),
                        Ce(this),
                        ke(this)
                  }
                }
            } catch (t) {}
          }),
          (c.Wa = function () {
            if (this.a) {
              var a = Dn(this.a),
                b = this.a.$()
              this.D < b.length &&
                (De(this), je(this, a, b), this.b && 4 != a && Ae(this))
            }
          }),
          (c.cancel = function () {
            ;(this.A = !0), Ce(this)
          }),
          (c.Va = function () {
            this.o = null
            var a = q()
            0 <= a - this.T
              ? ((function (a, b) {
                  a.info(function () {
                    return 'TIMEOUT: ' + b
                  })
                })(this.c, this.l),
                2 != this.H && (se(3), ae(17)),
                Ce(this),
                (this.h = 2),
                ke(this))
              : xe(this, this.T - a)
          }),
          ((c = Re.prototype).K = function () {
            Ve(this)
            for (var a = [], b = 0; b < this.a.length; b++)
              a.push(this.b[this.a[b]])
            return a
          }),
          (c.L = function () {
            return Ve(this), this.a.concat()
          }),
          (c.get = function (a, b) {
            return Me(this.b, a) ? this.b[a] : b
          }),
          (c.set = function (a, b) {
            Me(this.b, a) || (this.c++, this.a.push(a)), (this.b[a] = b)
          }),
          (c.forEach = function (a, b) {
            for (var t = this.L(), e = 0; e < t.length; e++) {
              var n = t[e],
                r = this.get(n)
              a.call(b, r, n, this)
            }
          })
        var Ue = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/
        function Fe(a, b) {
          if (
            ((this.c = this.j = this.f = ''),
            (this.h = null),
            (this.i = this.g = ''),
            (this.a = !1),
            a instanceof Fe)
          ) {
            ;(this.a = void 0 !== b ? b : a.a),
              ze(this, a.f),
              (this.j = a.j),
              Ge(this, a.c),
              He(this, a.h),
              (this.g = a.g),
              (b = a.b)
            var t = new en()
            ;(t.c = b.c),
              b.a && ((t.a = new Re(b.a)), (t.b = b.b)),
              Be(this, t),
              (this.i = a.i)
          } else
            a && (t = String(a).match(Ue))
              ? ((this.a = !!b),
                ze(this, t[1] || '', !0),
                (this.j = We(t[2] || '')),
                Ge(this, t[3] || '', !0),
                He(this, t[4]),
                (this.g = We(t[5] || '', !0)),
                Be(this, t[6] || '', !0),
                (this.i = We(t[7] || '')))
              : ((this.a = !!b), (this.b = new en(null, this.a)))
        }
        function qe(a) {
          return new Fe(a)
        }
        function ze(a, b, t) {
          ;(a.f = t ? We(b, !0) : b), a.f && (a.f = a.f.replace(/:$/, ''))
        }
        function Ge(a, b, t) {
          a.c = t ? We(b, !0) : b
        }
        function He(a, b) {
          if (b) {
            if (((b = Number(b)), isNaN(b) || 0 > b))
              throw Error('Bad port number ' + b)
            a.h = b
          } else a.h = null
        }
        function Be(a, b, t) {
          b instanceof en
            ? ((a.b = b),
              (function (a, b) {
                b &&
                  !a.f &&
                  (nn(a),
                  (a.c = null),
                  a.a.forEach(function (t, e) {
                    var n = e.toLowerCase()
                    e != n && (rn(this, e), sn(this, n, t))
                  }, a)),
                  (a.f = b)
              })(a.b, a.a))
            : (t || (b = Xe(b, Ze)), (a.b = new en(b, a.a)))
        }
        function Ke(a, b, t) {
          a.b.set(b, t)
        }
        function Je(a) {
          return (
            Ke(
              a,
              'zx',
              Math.floor(2147483648 * Math.random()).toString(36) +
                Math.abs(Math.floor(2147483648 * Math.random()) ^ q()).toString(
                  36
                )
            ),
            a
          )
        }
        function We(a, b) {
          return a
            ? b
              ? decodeURI(a.replace(/%25/g, '%2525'))
              : decodeURIComponent(a)
            : ''
        }
        function Xe(a, b, t) {
          return 'string' == typeof a
            ? ((a = encodeURI(a).replace(b, dd)),
              t && (a = a.replace(/%25([0-9a-fA-F]{2})/g, '%$1')),
              a)
            : null
        }
        function dd(a) {
          return (
            '%' +
            (((a = a.charCodeAt(0)) >> 4) & 15).toString(16) +
            (15 & a).toString(16)
          )
        }
        Fe.prototype.toString = function () {
          var a = [],
            b = this.f
          b && a.push(Xe(b, Ye, !0), ':')
          var t = this.c
          return (
            (t || 'file' == b) &&
              (a.push('//'),
              (b = this.j) && a.push(Xe(b, Ye, !0), '@'),
              a.push(
                encodeURIComponent(String(t)).replace(
                  /%25([0-9a-fA-F]{2})/g,
                  '%$1'
                )
              ),
              null != (t = this.h) && a.push(':', String(t))),
            (t = this.g) &&
              (this.c && '/' != t.charAt(0) && a.push('/'),
              a.push(Xe(t, '/' == t.charAt(0) ? $e : Qe, !0))),
            (t = this.b.toString()) && a.push('?', t),
            (t = this.i) && a.push('#', Xe(t, tn)),
            a.join('')
          )
        }
        var Ye = /[#\/\?@]/g,
          Qe = /[#\?:]/g,
          $e = /[#\?]/g,
          Ze = /[#\?@]/g,
          tn = /#/g
        function en(a, b) {
          ;(this.b = this.a = null), (this.c = a || null), (this.f = !!b)
        }
        function nn(a) {
          a.a ||
            ((a.a = new Re()),
            (a.b = 0),
            a.c &&
              (function (a, b) {
                if (a) {
                  a = a.split('&')
                  for (var t = 0; t < a.length; t++) {
                    var e = a[t].indexOf('='),
                      n = null
                    if (0 <= e) {
                      var r = a[t].substring(0, e)
                      n = a[t].substring(e + 1)
                    } else r = a[t]
                    b(r, n ? decodeURIComponent(n.replace(/\+/g, ' ')) : '')
                  }
                }
              })(a.c, function (b, t) {
                a.add(decodeURIComponent(b.replace(/\+/g, ' ')), t)
              }))
        }
        function rn(a, b) {
          nn(a),
            (b = un(a, b)),
            Me(a.a.b, b) &&
              ((a.c = null),
              (a.b -= a.a.get(b).length),
              Me((a = a.a).b, b) &&
                (delete a.b[b], a.c--, a.a.length > 2 * a.c && Ve(a)))
        }
        function on(a, b) {
          return nn(a), (b = un(a, b)), Me(a.a.b, b)
        }
        function sn(a, b, t) {
          rn(a, b),
            0 < t.length &&
              ((a.c = null), a.a.set(un(a, b), A(t)), (a.b += t.length))
        }
        function un(a, b) {
          return (b = String(b)), a.f && (b = b.toLowerCase()), b
        }
        ;((c = en.prototype).add = function (a, b) {
          nn(this), (this.c = null), (a = un(this, a))
          var t = this.a.get(a)
          return t || this.a.set(a, (t = [])), t.push(b), (this.b += 1), this
        }),
          (c.forEach = function (a, b) {
            nn(this),
              this.a.forEach(function (t, e) {
                j(
                  t,
                  function (t) {
                    a.call(b, t, e, this)
                  },
                  this
                )
              }, this)
          }),
          (c.L = function () {
            nn(this)
            for (
              var a = this.a.K(), b = this.a.L(), t = [], e = 0;
              e < b.length;
              e++
            )
              for (var n = a[e], r = 0; r < n.length; r++) t.push(b[e])
            return t
          }),
          (c.K = function (a) {
            nn(this)
            var b = []
            if ('string' == typeof a)
              on(this, a) && (b = S(b, this.a.get(un(this, a))))
            else {
              a = this.a.K()
              for (var t = 0; t < a.length; t++) b = S(b, a[t])
            }
            return b
          }),
          (c.set = function (a, b) {
            return (
              nn(this),
              (this.c = null),
              on(this, (a = un(this, a))) && (this.b -= this.a.get(a).length),
              this.a.set(a, [b]),
              (this.b += 1),
              this
            )
          }),
          (c.get = function (a, b) {
            return a && 0 < (a = this.K(a)).length ? String(a[0]) : b
          }),
          (c.toString = function () {
            if (this.c) return this.c
            if (!this.a) return ''
            for (var a = [], b = this.a.L(), t = 0; t < b.length; t++) {
              var e = b[t],
                n = encodeURIComponent(String(e))
              e = this.K(e)
              for (var r = 0; r < e.length; r++) {
                var g = n
                '' !== e[r] && (g += '=' + encodeURIComponent(String(e[r]))),
                  a.push(g)
              }
            }
            return (this.c = a.join('&'))
          })
        var an = function (a, b) {
          ;(this.b = a), (this.a = b)
        }
        function cn(a) {
          ;(this.g = a || hn),
            l.PerformanceNavigationTiming
              ? (a =
                  0 <
                    (a = l.performance.getEntriesByType('navigation')).length &&
                  ('hq' == a[0].nextHopProtocol ||
                    'h2' == a[0].nextHopProtocol))
              : (a = !!(l.ia && l.ia.ya && l.ia.ya() && l.ia.ya().Lb)),
            (this.f = a ? this.g : 1),
            (this.a = null),
            1 < this.f && (this.a = new Set()),
            (this.b = null),
            (this.c = [])
        }
        var hn = 10
        function fn(a) {
          return !!a.b || (!!a.a && a.a.size >= a.f)
        }
        function ln(a) {
          return a.b ? 1 : a.a ? a.a.size : 0
        }
        function pn(a, b) {
          return a.b ? a.b == b : !!a.a && a.a.has(b)
        }
        function dn(a, b) {
          a.a ? a.a.add(b) : (a.b = b)
        }
        function vn(a, b) {
          a.b && a.b == b ? (a.b = null) : a.a && a.a.has(b) && a.a.delete(b)
        }
        function yn(a) {
          var t, e
          if (null != a.b) return a.c.concat(a.b.s)
          if (null != a.a && 0 !== a.a.size) {
            var b = a.c
            try {
              for (
                var n = o(a.a.values()), r = n.next();
                !r.done;
                r = n.next()
              ) {
                var c = r.value
                b = b.concat(c.s)
              }
            } catch (e) {
              t = { error: e }
            } finally {
              try {
                r && !r.done && (e = n.return) && e.call(n)
              } finally {
                if (t) throw t.error
              }
            }
            return b
          }
          return A(a.c)
        }
        function gn() {}
        function bn() {
          this.a = new gn()
        }
        function mn(a, b, t) {
          var e = t || ''
          try {
            Le(a, function (t, n) {
              var g = t
              y(t) && (g = Pt(t)), b.push(e + n + '=' + encodeURIComponent(g))
            })
          } catch (t) {
            throw (b.push(e + 'type=' + encodeURIComponent('_badmap')), t)
          }
        }
        function wn(a, b, t, e, n) {
          try {
            ;(b.onload = null),
              (b.onerror = null),
              (b.onabort = null),
              (b.ontimeout = null),
              n(e)
          } catch (t) {}
        }
        ;(cn.prototype.cancel = function () {
          var t, e
          if (((this.c = yn(this)), this.b)) this.b.cancel(), (this.b = null)
          else if (this.a && 0 !== this.a.size) {
            try {
              for (
                var n = o(this.a.values()), r = n.next();
                !r.done;
                r = n.next()
              ) {
                r.value.cancel()
              }
            } catch (e) {
              t = { error: e }
            } finally {
              try {
                r && !r.done && (e = n.return) && e.call(n)
              } finally {
                if (t) throw t.error
              }
            }
            this.a.clear()
          }
        }),
          (gn.prototype.stringify = function (a) {
            return l.JSON.stringify(a, void 0)
          }),
          (gn.prototype.parse = function (a) {
            return l.JSON.parse(a, void 0)
          })
        var In = l.JSON.parse
        function _n(a) {
          Dt.call(this),
            (this.headers = new Re()),
            (this.H = a || null),
            (this.b = !1),
            (this.s = this.a = null),
            (this.B = ''),
            (this.h = 0),
            (this.f = ''),
            (this.g = this.A = this.l = this.u = !1),
            (this.o = 0),
            (this.m = null),
            (this.I = En),
            (this.D = this.F = !1)
        }
        T(_n, Dt)
        var En = '',
          Tn = /^https?$/i,
          td = ['POST', 'PUT']
        function On(a) {
          return 'content-type' == a.toLowerCase()
        }
        function Nn(a, b) {
          ;(a.b = !1),
            a.a && ((a.g = !0), a.a.abort(), (a.g = !1)),
            (a.f = b),
            (a.h = 5),
            jn(a),
            An(a)
        }
        function jn(a) {
          a.u || ((a.u = !0), kt(a, 'complete'), kt(a, 'error'))
        }
        function Sn(a) {
          if (a.b && void 0 !== f && (!a.s[1] || 4 != Dn(a) || 2 != a.W()))
            if (a.l && 4 == Dn(a)) Jt(a.za, 0, a)
            else if ((kt(a, 'readystatechange'), 4 == Dn(a))) {
              a.b = !1
              try {
                var t,
                  e = a.W()
                t: switch (e) {
                  case 200:
                  case 201:
                  case 202:
                  case 204:
                  case 206:
                  case 304:
                  case 1223:
                    var b = !0
                    break t
                  default:
                    b = !1
                }
                if (!(t = b)) {
                  var n
                  if ((n = 0 === e)) {
                    var r = String(a.B).match(Ue)[1] || null
                    if (!r && l.self && l.self.location) {
                      var o = l.self.location.protocol
                      r = o.substr(0, o.length - 1)
                    }
                    n = !Tn.test(r ? r.toLowerCase() : '')
                  }
                  t = n
                }
                if (t) kt(a, 'complete'), kt(a, 'success')
                else {
                  a.h = 6
                  try {
                    var c = 2 < Dn(a) ? a.a.statusText : ''
                  } catch (e) {
                    c = ''
                  }
                  ;(a.f = c + ' [' + a.W() + ']'), jn(a)
                }
              } finally {
                An(a)
              }
            }
        }
        function An(a, b) {
          if (a.a) {
            xn(a)
            var t = a.a,
              e = a.s[0] ? d : null
            ;(a.a = null), (a.s = null), b || kt(a, 'ready')
            try {
              t.onreadystatechange = e
            } catch (t) {}
          }
        }
        function xn(a) {
          a.a && a.D && (a.a.ontimeout = null),
            a.m && (l.clearTimeout(a.m), (a.m = null))
        }
        function Dn(a) {
          return a.a ? a.a.readyState : 0
        }
        function kn(a, b, t) {
          t: {
            for (e in t) {
              var e = !1
              break t
            }
            e = !0
          }
          e ||
            ((t = (function (a) {
              var b = ''
              return (
                V(a, function (t, e) {
                  ;(b += e), (b += ':'), (b += t), (b += '\r\n')
                }),
                b
              )
            })(t)),
            'string' == typeof a
              ? null != t && encodeURIComponent(String(t))
              : Ke(a, b, t))
        }
        function Cn(a, b, t) {
          return (
            (t && t.internalChannelParams && t.internalChannelParams[a]) || b
          )
        }
        function Pn(a) {
          ;(this.pa = 0),
            (this.g = []),
            (this.c = new te()),
            (this.ga = this.la = this.B = this.fa = this.a = this.na = this.A = this.V = this.i = this.O = this.l = null),
            (this.Oa = this.R = 0),
            (this.La = Cn('failFast', !1, a)),
            (this.H = this.m = this.j = this.h = this.f = null),
            (this.S = !0),
            (this.I = this.oa = this.P = -1),
            (this.T = this.o = this.u = 0),
            (this.Ha = Cn('baseRetryDelayMs', 5e3, a)),
            (this.Ra = Cn('retryDelaySeedMs', 1e4, a)),
            (this.Ma = Cn('forwardChannelMaxRetries', 2, a)),
            (this.ma = Cn('forwardChannelRequestTimeoutMs', 2e4, a)),
            (this.Na = (a && a.g) || void 0),
            (this.D = void 0),
            (this.C = (a && a.supportsCrossDomainXhr) || !1),
            (this.J = ''),
            (this.b = new cn(a && a.concurrentRequestLimit)),
            (this.ka = new bn()),
            (this.da = (a && a.fastHandshake) || !1),
            (this.Ia = (a && a.b) || !1),
            a && a.f && (this.c.a = !1),
            a && a.forceLongPolling && (this.S = !1),
            (this.U =
              (!this.da && this.S && a && a.detectBufferingProxy) || !1),
            (this.ea = void 0),
            (this.N = 0),
            (this.F = !1),
            (this.s = null),
            (this.Ka = (a && a.c) || !1) &&
              this.c.info('Opt-in to enable Chrome Origin Trials.')
        }
        function Ln(a) {
          if ((Vn(a), 3 == a.v)) {
            var b = a.R++,
              t = qe(a.B)
            Ke(t, 'SID', a.J),
              Ke(t, 'RID', b),
              Ke(t, 'TYPE', 'terminate'),
              qn(a, t),
              ((b = new Ie(a, a.c, b, void 0)).H = 2),
              (b.i = Je(qe(t))),
              (t = !1),
              l.navigator &&
                l.navigator.sendBeacon &&
                (t = l.navigator.sendBeacon(b.i.toString(), '')),
              !t && l.Image && ((new Image().src = b.i), (t = !0)),
              t || ((b.a = Zn(b.g, null)), b.a.ba(b.i)),
              (b.u = q()),
              Ae(b)
          }
          Qn(a)
        }
        function Rn(a) {
          a.a && (Bn(a), a.a.cancel(), (a.a = null))
        }
        function Vn(a) {
          Rn(a),
            a.j && (l.clearTimeout(a.j), (a.j = null)),
            Jn(a),
            a.b.cancel(),
            a.h && ('number' == typeof a.h && l.clearTimeout(a.h), (a.h = null))
        }
        function Mn(a, b) {
          a.g.push(new an(a.Oa++, b)), 3 == a.v && Un(a)
        }
        function Un(a) {
          fn(a.b) || a.h || ((a.h = !0), qt(a.Ba, a), (a.u = 0))
        }
        function Fn(a, b) {
          var t
          t = b ? b.f : a.R++
          var e = qe(a.B)
          Ke(e, 'SID', a.J),
            Ke(e, 'RID', t),
            Ke(e, 'AID', a.P),
            qn(a, e),
            a.i && a.l && kn(e, a.i, a.l),
            (t = new Ie(a, a.c, t, a.u + 1)),
            null === a.i && (t.B = a.l),
            b && (a.g = b.s.concat(a.g)),
            (b = zn(a, t, 1e3)),
            t.setTimeout(
              Math.round(0.5 * a.ma) + Math.round(0.5 * a.ma * Math.random())
            ),
            dn(a.b, t),
            Oe(t, e, b)
        }
        function qn(a, b) {
          a.f &&
            Le({}, function (t, e) {
              Ke(b, e, t)
            })
        }
        function zn(a, b, t) {
          t = Math.min(a.g.length, t)
          var e = a.f ? p(a.f.Ja, a.f, a) : null
          t: for (var n = a.g, r = -1; ; ) {
            var g = ['count=' + t]
            ;-1 == r
              ? 0 < t
                ? ((r = n[0].b), g.push('ofs=' + r))
                : (r = 0)
              : g.push('ofs=' + r)
            for (var o = !0, c = 0; c < t; c++) {
              var u = n[c].b,
                h = n[c].a
              if (0 > (u -= r)) (r = Math.max(0, n[c].b - 100)), (o = !1)
              else
                try {
                  mn(h, g, 'req' + u + '_')
                } catch (t) {
                  e && e(h)
                }
            }
            if (o) {
              e = g.join('&')
              break t
            }
          }
          return (a = a.g.splice(0, t)), (b.s = a), e
        }
        function Gn(a) {
          a.a || a.j || ((a.T = 1), qt(a.Aa, a), (a.o = 0))
        }
        function Hn(a) {
          return (
            !(a.a || a.j || 3 <= a.o) &&
            (a.T++, (a.j = he(p(a.Aa, a), Xn(a, a.o))), a.o++, !0)
          )
        }
        function Bn(a) {
          null != a.s && (l.clearTimeout(a.s), (a.s = null))
        }
        function Kn(a) {
          ;(a.a = new Ie(a, a.c, 'rpc', a.T)),
            null === a.i && (a.a.B = a.l),
            (a.a.O = 0)
          var b = qe(a.la)
          Ke(b, 'RID', 'rpc'),
            Ke(b, 'SID', a.J),
            Ke(b, 'CI', a.H ? '0' : '1'),
            Ke(b, 'AID', a.P),
            qn(a, b),
            Ke(b, 'TYPE', 'xmlhttp'),
            a.i && a.l && kn(b, a.i, a.l),
            a.D && a.a.setTimeout(a.D)
          var t = a.a
          ;(a = a.ga),
            (t.H = 1),
            (t.i = Je(qe(b))),
            (t.j = null),
            (t.I = !0),
            Ne(t, a)
        }
        function Jn(a) {
          null != a.m && (l.clearTimeout(a.m), (a.m = null))
        }
        function Wn(a, b) {
          var t = null
          if (a.a == b) {
            Jn(a), Bn(a), (a.a = null)
            var e = 2
          } else {
            if (!pn(a.b, b)) return
            ;(t = b.s), vn(a.b, b), (e = 1)
          }
          if (((a.I = b.N), 0 != a.v))
            if (b.b)
              if (1 == e) {
                ;(t = b.j ? b.j.length : 0), (b = q() - b.u)
                var n = a.u
                kt((e = ie()), new ce(e, t, b, n)), Un(a)
              } else Gn(a)
            else if (
              3 == (n = b.h) ||
              (0 == n && 0 < a.I) ||
              !(
                (1 == e &&
                  (function (a, b) {
                    return (
                      !(ln(a.b) >= a.b.f - (a.h ? 1 : 0)) &&
                      (a.h
                        ? ((a.g = b.s.concat(a.g)), !0)
                        : !(1 == a.v || 2 == a.v || a.u >= (a.La ? 0 : a.Ma)) &&
                          ((a.h = he(p(a.Ba, a, b), Xn(a, a.u))), a.u++, !0))
                    )
                  })(a, b)) ||
                (2 == e && Hn(a))
              )
            )
              switch (
                (t && 0 < t.length && ((b = a.b), (b.c = b.c.concat(t))), n)
              ) {
                case 1:
                  Yn(a, 5)
                  break
                case 4:
                  Yn(a, 10)
                  break
                case 3:
                  Yn(a, 6)
                  break
                default:
                  Yn(a, 2)
              }
        }
        function Xn(a, b) {
          var t = a.Ha + Math.floor(Math.random() * a.Ra)
          return a.f || (t *= 2), t * b
        }
        function Yn(a, b) {
          if ((a.c.info('Error code ' + b), 2 == b)) {
            var t = null
            a.f && (t = null)
            var e = p(a.Ya, a)
            t ||
              ((t = new Fe('//www.google.com/images/cleardot.gif')),
              (l.location && 'http' == l.location.protocol) || ze(t, 'https'),
              Je(t)),
              (function (a, b) {
                var t = new te()
                if (l.Image) {
                  var e = new Image()
                  ;(e.onload = E(wn, t, e, 'TestLoadImage: loaded', !0, b)),
                    (e.onerror = E(wn, t, e, 'TestLoadImage: error', !1, b)),
                    (e.onabort = E(wn, t, e, 'TestLoadImage: abort', !1, b)),
                    (e.ontimeout = E(
                      wn,
                      t,
                      e,
                      'TestLoadImage: timeout',
                      !1,
                      b
                    )),
                    l.setTimeout(function () {
                      e.ontimeout && e.ontimeout()
                    }, 1e4),
                    (e.src = a)
                } else b(!1)
              })(t.toString(), e)
          } else ae(2)
          ;(a.v = 0), a.f && a.f.ra(b), Qn(a), Vn(a)
        }
        function Qn(a) {
          ;(a.v = 0),
            (a.I = -1),
            a.f &&
              ((0 == yn(a.b).length && 0 == a.g.length) ||
                ((a.b.c.length = 0), A(a.g), (a.g.length = 0)),
              a.f.qa())
        }
        function $n(a, b, t) {
          var e = (function (a) {
            return a instanceof Fe ? qe(a) : new Fe(a, void 0)
          })(t)
          if ('' != e.c) b && Ge(e, b + '.' + e.c), He(e, e.h)
          else {
            var n = l.location
            e = (function (a, b, t, e) {
              var n = new Fe(null, void 0)
              return (
                a && ze(n, a), b && Ge(n, b), t && He(n, t), e && (n.g = e), n
              )
            })(n.protocol, b ? b + '.' + n.hostname : n.hostname, +n.port, t)
          }
          return (
            a.V &&
              V(a.V, function (t, g) {
                Ke(e, g, t)
              }),
            (b = a.A),
            (t = a.na),
            b && t && Ke(e, b, t),
            Ke(e, 'VER', a.ha),
            qn(a, e),
            e
          )
        }
        function Zn(a, b) {
          if (b && !a.C)
            throw Error("Can't create secondary domain capable XhrIo object.")
          return ((b = new _n(a.Na)).F = a.C), b
        }
        function er() {}
        function nr() {
          if (B && !(10 <= Number(ot)))
            throw Error('Environmental error: no available transport.')
        }
        function rr(a, b) {
          Dt.call(this),
            (this.a = new Pn(b)),
            (this.o = a),
            (this.b = (b && b.messageUrlParams) || null),
            (a = (b && b.messageHeaders) || null),
            b &&
              b.clientProtocolHeaderRequired &&
              (a
                ? (a['X-Client-Protocol'] = 'webchannel')
                : (a = { 'X-Client-Protocol': 'webchannel' })),
            (this.a.l = a),
            (a = (b && b.initMessageHeaders) || null),
            b &&
              b.messageContentType &&
              (a
                ? (a['X-WebChannel-Content-Type'] = b.messageContentType)
                : (a = { 'X-WebChannel-Content-Type': b.messageContentType })),
            b &&
              b.a &&
              (a
                ? (a['X-WebChannel-Client-Profile'] = b.a)
                : (a = { 'X-WebChannel-Client-Profile': b.a })),
            (this.a.O = a),
            (a = b && b.httpHeadersOverwriteParam) && !x(a) && (this.a.i = a),
            (this.m = (b && b.supportsCrossDomainXhr) || !1),
            (this.l = (b && b.sendRawJson) || !1),
            (b = b && b.httpSessionIdParam) &&
              !x(b) &&
              ((this.a.A = b),
              null !== (a = this.b) &&
                b in a &&
                b in (a = this.b) &&
                delete a[b]),
            (this.f = new sr(this))
        }
        function ir(a) {
          be.call(this)
          var b = a.__sm__
          if (b) {
            t: {
              for (var t in b) {
                a = t
                break t
              }
              a = void 0
            }
            ;(this.c = a)
              ? ((a = this.c),
                (this.data = null !== b && a in b ? b[a] : void 0))
              : (this.data = b)
          } else this.data = a
        }
        function or() {
          me.call(this), (this.status = 1)
        }
        function sr(a) {
          this.a = a
        }
        ;((c = _n.prototype).ba = function (a, b, t, e) {
          if (this.a)
            throw Error(
              '[goog.net.XhrIo] Object is active with another request=' +
                this.B +
                '; newUri=' +
                a
            )
          ;(b = b ? b.toUpperCase() : 'GET'),
            (this.B = a),
            (this.f = ''),
            (this.h = 0),
            (this.u = !1),
            (this.b = !0),
            (this.a = new XMLHttpRequest()),
            (this.s = this.H ? de(this.H) : de(ye)),
            (this.a.onreadystatechange = p(this.za, this))
          try {
            ;(this.A = !0), this.a.open(b, String(a), !0), (this.A = !1)
          } catch (t) {
            return void Nn(this, t)
          }
          a = t || ''
          var n = new Re(this.headers)
          e &&
            Le(e, function (t, g) {
              n.set(g, t)
            }),
            (e = (function (a) {
              t: {
                for (
                  var b = On,
                    t = a.length,
                    e = 'string' == typeof a ? a.split('') : a,
                    n = 0;
                  n < t;
                  n++
                )
                  if (n in e && b.call(void 0, e[n], n, a)) {
                    b = n
                    break t
                  }
                b = -1
              }
              return 0 > b ? null : 'string' == typeof a ? a.charAt(b) : a[b]
            })(n.L())),
            (t = l.FormData && a instanceof l.FormData),
            !(0 <= N(td, b)) ||
              e ||
              t ||
              n.set(
                'Content-Type',
                'application/x-www-form-urlencoded;charset=utf-8'
              ),
            n.forEach(function (t, g) {
              this.a.setRequestHeader(g, t)
            }, this),
            this.I && (this.a.responseType = this.I),
            'withCredentials' in this.a &&
              this.a.withCredentials !== this.F &&
              (this.a.withCredentials = this.F)
          try {
            xn(this),
              0 < this.o &&
                ((this.D = (function (a) {
                  return (
                    B &&
                    nt(9) &&
                    'number' == typeof a.timeout &&
                    void 0 !== a.ontimeout
                  )
                })(this.a))
                  ? ((this.a.timeout = this.o),
                    (this.a.ontimeout = p(this.xa, this)))
                  : (this.m = Jt(this.xa, this.o, this))),
              (this.l = !0),
              this.a.send(a),
              (this.l = !1)
          } catch (t) {
            Nn(this, t)
          }
        }),
          (c.xa = function () {
            void 0 !== f &&
              this.a &&
              ((this.f = 'Timed out after ' + this.o + 'ms, aborting'),
              (this.h = 8),
              kt(this, 'timeout'),
              this.abort(8))
          }),
          (c.abort = function (a) {
            this.a &&
              this.b &&
              ((this.b = !1),
              (this.g = !0),
              this.a.abort(),
              (this.g = !1),
              (this.h = a || 7),
              kt(this, 'complete'),
              kt(this, 'abort'),
              An(this))
          }),
          (c.G = function () {
            this.a &&
              (this.b &&
                ((this.b = !1), (this.g = !0), this.a.abort(), (this.g = !1)),
              An(this, !0)),
              _n.X.G.call(this)
          }),
          (c.za = function () {
            this.j || (this.A || this.l || this.g ? Sn(this) : this.Ua())
          }),
          (c.Ua = function () {
            Sn(this)
          }),
          (c.W = function () {
            try {
              return 2 < Dn(this) ? this.a.status : -1
            } catch (t) {
              return -1
            }
          }),
          (c.$ = function () {
            try {
              return this.a ? this.a.responseText : ''
            } catch (t) {
              return ''
            }
          }),
          (c.Pa = function (a) {
            if (this.a) {
              var b = this.a.responseText
              return (
                a && 0 == b.indexOf(a) && (b = b.substring(a.length)), In(b)
              )
            }
          }),
          (c.ua = function () {
            return this.h
          }),
          (c.Qa = function () {
            return 'string' == typeof this.f ? this.f : String(this.f)
          }),
          ((c = Pn.prototype).ha = 8),
          (c.v = 1),
          (c.Ba = function (a) {
            if (this.h)
              if (((this.h = null), 1 == this.v)) {
                if (!a) {
                  ;(this.R = Math.floor(1e5 * Math.random())), (a = this.R++)
                  var t,
                    b = new Ie(this, this.c, a, void 0),
                    e = this.l
                  if (
                    (this.O && (e ? F((e = M(e)), this.O) : (e = this.O)),
                    null === this.i && (b.B = e),
                    this.da)
                  )
                    t: {
                      for (var n = (t = 0); n < this.g.length; n++) {
                        var r = this.g[n]
                        if (
                          void 0 ===
                          (r =
                            '__data__' in r.a &&
                            'string' == typeof (r = r.a.__data__)
                              ? r.length
                              : void 0)
                        )
                          break
                        if (4096 < (t += r)) {
                          t = n
                          break t
                        }
                        if (4096 === t || n === this.g.length - 1) {
                          t = n + 1
                          break t
                        }
                      }
                      t = 1e3
                    }
                  else t = 1e3
                  ;(t = zn(this, b, t)),
                    Ke((n = qe(this.B)), 'RID', a),
                    Ke(n, 'CVER', 22),
                    this.A && Ke(n, 'X-HTTP-Session-Id', this.A),
                    qn(this, n),
                    this.i && e && kn(n, this.i, e),
                    dn(this.b, b),
                    this.Ia && Ke(n, 'TYPE', 'init'),
                    this.da
                      ? (Ke(n, '$req', t),
                        Ke(n, 'SID', 'null'),
                        (b.U = !0),
                        Oe(b, n, null))
                      : Oe(b, n, t),
                    (this.v = 2)
                }
              } else
                3 == this.v &&
                  (a
                    ? Fn(this, a)
                    : 0 == this.g.length || fn(this.b) || Fn(this))
          }),
          (c.Aa = function () {
            if (
              ((this.j = null),
              Kn(this),
              this.U && !(this.F || null == this.a || 0 >= this.N))
            ) {
              var a = 2 * this.N
              this.c.info('BP detection timer enabled: ' + a),
                (this.s = he(p(this.Ta, this), a))
            }
          }),
          (c.Ta = function () {
            this.s &&
              ((this.s = null),
              this.c.info('BP detection timeout reached.'),
              this.c.info(
                'Buffering proxy detected and switch to long-polling!'
              ),
              (this.H = !1),
              (this.F = !0),
              ae(10),
              Rn(this),
              Kn(this))
          }),
          (c.Sa = function () {
            null != this.m && ((this.m = null), Rn(this), Hn(this), ae(19))
          }),
          (c.Ya = function (a) {
            a
              ? (this.c.info('Successfully pinged google.com'), ae(2))
              : (this.c.info('Failed to ping google.com'), ae(1))
          }),
          ((c = er.prototype).ta = function () {}),
          (c.sa = function () {}),
          (c.ra = function () {}),
          (c.qa = function () {}),
          (c.Ja = function () {}),
          (nr.prototype.a = function (a, b) {
            return new rr(a, b)
          }),
          T(rr, Dt),
          (rr.prototype.g = function () {
            ;(this.a.f = this.f), this.m && (this.a.C = !0)
            var a = this.a,
              b = this.o,
              t = this.b || void 0
            ae(0),
              (a.fa = b),
              (a.V = t || {}),
              (a.H = a.S),
              (a.B = $n(a, null, a.fa)),
              Un(a)
          }),
          (rr.prototype.close = function () {
            Ln(this.a)
          }),
          (rr.prototype.h = function (a) {
            if ('string' == typeof a) {
              var b = {}
              ;(b.__data__ = a), Mn(this.a, b)
            } else
              this.l
                ? (((b = {}).__data__ = Pt(a)), Mn(this.a, b))
                : Mn(this.a, a)
          }),
          (rr.prototype.G = function () {
            ;(this.a.f = null),
              delete this.f,
              Ln(this.a),
              delete this.a,
              rr.X.G.call(this)
          }),
          T(ir, be),
          T(or, me),
          T(sr, er),
          (sr.prototype.ta = function () {
            kt(this.a, 'a')
          }),
          (sr.prototype.sa = function (a) {
            kt(this.a, new ir(a))
          }),
          (sr.prototype.ra = function (a) {
            kt(this.a, new or(a))
          }),
          (sr.prototype.qa = function () {
            kt(this.a, 'b')
          }),
          (nr.prototype.createWebChannel = nr.prototype.a),
          (rr.prototype.send = rr.prototype.h),
          (rr.prototype.open = rr.prototype.g),
          (rr.prototype.close = rr.prototype.close),
          (fe.NO_ERROR = 0),
          (fe.TIMEOUT = 8),
          (fe.HTTP_ERROR = 6),
          (le.COMPLETE = 'complete'),
          (ve.EventType = ge),
          (ge.OPEN = 'a'),
          (ge.CLOSE = 'b'),
          (ge.ERROR = 'c'),
          (ge.MESSAGE = 'd'),
          (Dt.prototype.listen = Dt.prototype.va),
          (_n.prototype.listenOnce = _n.prototype.wa),
          (_n.prototype.getLastError = _n.prototype.Qa),
          (_n.prototype.getLastErrorCode = _n.prototype.ua),
          (_n.prototype.getStatus = _n.prototype.W),
          (_n.prototype.getResponseJson = _n.prototype.Pa),
          (_n.prototype.getResponseText = _n.prototype.$),
          (_n.prototype.send = _n.prototype.ba)
        var ur = function () {
            return new nr()
          },
          ar = function () {
            return ie()
          },
          cr = fe,
          fr = le,
          lr = ne,
          pr = {
            gb: 0,
            jb: 1,
            kb: 2,
            Db: 3,
            Ib: 4,
            Fb: 5,
            Gb: 6,
            Eb: 7,
            Cb: 8,
            Hb: 9,
            PROXY: 10,
            NOPROXY: 11,
            Ab: 12,
            wb: 13,
            xb: 14,
            vb: 15,
            yb: 16,
            zb: 17,
            bb: 18,
            ab: 19,
            cb: 20,
          },
          dr = ve,
          vr = _n
      }.call(this, n(41)))
    },
    326: function (t, e, n) {
      'use strict'
      ;(function (t) {
        n.d(e, 'a', function () {
          return pc
        }),
          n.d(e, 'b', function () {
            return P
          }),
          n.d(e, 'c', function () {
            return fc
          }),
          n.d(e, 'd', function () {
            return dc
          }),
          n.d(e, 'e', function () {
            return Ic
          }),
          n.d(e, 'f', function () {
            return Na
          }),
          n.d(e, 'g', function () {
            return gc
          }),
          n.d(e, 'h', function () {
            return _c
          }),
          n.d(e, 'i', function () {
            return Oc
          }),
          n.d(e, 'j', function () {
            return Oa
          }),
          n.d(e, 'k', function () {
            return vc
          }),
          n.d(e, 'l', function () {
            return Vu
          }),
          n.d(e, 'm', function () {
            return Ac
          }),
          n.d(e, 'n', function () {
            return hc
          }),
          n.d(e, 'o', function () {
            return Sc
          }),
          n.d(e, 'p', function () {
            return Nc
          }),
          n.d(e, 'q', function () {
            return Ec
          }),
          n.d(e, 'r', function () {
            return B
          })
        var r = n(274),
          o = n(271),
          c = n(289),
          h = n(269),
          f = new r.b('@firebase/firestore')
        function l() {
          return f.logLevel
        }
        function d(t) {
          for (var e = [], n = 1; n < arguments.length; n++)
            e[n - 1] = arguments[n]
          if (f.logLevel <= r.a.DEBUG) {
            var i = e.map(m)
            f.debug.apply(f, Object(h.g)(['Firestore (8.2.5): ' + t], i))
          }
        }
        function v(t) {
          for (var e = [], n = 1; n < arguments.length; n++)
            e[n - 1] = arguments[n]
          if (f.logLevel <= r.a.ERROR) {
            var i = e.map(m)
            f.error.apply(f, Object(h.g)(['Firestore (8.2.5): ' + t], i))
          }
        }
        function y(t) {
          for (var e = [], n = 1; n < arguments.length; n++)
            e[n - 1] = arguments[n]
          if (f.logLevel <= r.a.WARN) {
            var i = e.map(m)
            f.warn.apply(f, Object(h.g)(['Firestore (8.2.5): ' + t], i))
          }
        }
        function m(t) {
          if ('string' == typeof t) return t
          try {
            return (e = t), JSON.stringify(e)
          } catch (e) {
            return t
          }
          var e
        }
        function w(t) {
          void 0 === t && (t = 'Unexpected state')
          var e = 'FIRESTORE (8.2.5) INTERNAL ASSERTION FAILED: ' + t
          throw (v(e), new Error(e))
        }
        function I(t, e) {
          t || w()
        }
        function _(t, e) {
          return t
        }
        function E(t) {
          var e = 'undefined' != typeof self && (self.crypto || self.msCrypto),
            n = new Uint8Array(t)
          if (e && 'function' == typeof e.getRandomValues) e.getRandomValues(n)
          else
            for (var r = 0; r < t; r++) n[r] = Math.floor(256 * Math.random())
          return n
        }
        var T = (function () {
          function t() {}
          return (
            (t.t = function () {
              for (
                var t =
                    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
                  e = Math.floor(256 / t.length) * t.length,
                  n = '';
                n.length < 20;

              )
                for (var r = E(40), i = 0; i < r.length; ++i)
                  n.length < 20 && r[i] < e && (n += t.charAt(r[i] % t.length))
              return n
            }),
            t
          )
        })()
        function O(t, e) {
          return t < e ? -1 : t > e ? 1 : 0
        }
        function N(t, e, n) {
          return (
            t.length === e.length &&
            t.every(function (t, r) {
              return n(t, e[r])
            })
          )
        }
        function j(t) {
          return t + '\0'
        }
        var S = (function () {
          function t(t) {
            this.i = t
          }
          return (
            (t.fromBase64String = function (e) {
              return new t(atob(e))
            }),
            (t.fromUint8Array = function (e) {
              return new t(
                (function (t) {
                  for (var e = '', n = 0; n < t.length; ++n)
                    e += String.fromCharCode(t[n])
                  return e
                })(e)
              )
            }),
            (t.prototype.toBase64 = function () {
              return (t = this.i), btoa(t)
              var t
            }),
            (t.prototype.toUint8Array = function () {
              return (function (t) {
                for (var e = new Uint8Array(t.length), n = 0; n < t.length; n++)
                  e[n] = t.charCodeAt(n)
                return e
              })(this.i)
            }),
            (t.prototype.o = function () {
              return 2 * this.i.length
            }),
            (t.prototype.u = function (t) {
              return O(this.i, t.i)
            }),
            (t.prototype.isEqual = function (t) {
              return this.i === t.i
            }),
            t
          )
        })()
        S.h = new S('')
        var A = {
            OK: 'ok',
            CANCELLED: 'cancelled',
            UNKNOWN: 'unknown',
            INVALID_ARGUMENT: 'invalid-argument',
            DEADLINE_EXCEEDED: 'deadline-exceeded',
            NOT_FOUND: 'not-found',
            ALREADY_EXISTS: 'already-exists',
            PERMISSION_DENIED: 'permission-denied',
            UNAUTHENTICATED: 'unauthenticated',
            RESOURCE_EXHAUSTED: 'resource-exhausted',
            FAILED_PRECONDITION: 'failed-precondition',
            ABORTED: 'aborted',
            OUT_OF_RANGE: 'out-of-range',
            UNIMPLEMENTED: 'unimplemented',
            INTERNAL: 'internal',
            UNAVAILABLE: 'unavailable',
            DATA_LOSS: 'data-loss',
          },
          x = (function (t) {
            function e(e, n) {
              var r = this
              return (
                ((r = t.call(this, n) || this).code = e),
                (r.message = n),
                (r.name = 'FirebaseError'),
                (r.toString = function () {
                  return r.name + ': [code=' + r.code + ']: ' + r.message
                }),
                r
              )
            }
            return Object(h.c)(e, t), e
          })(Error),
          D = (function () {
            function t(t) {
              this.l = t
            }
            return (
              (t.fromBase64String = function (e) {
                try {
                  return new t(S.fromBase64String(e))
                } catch (e) {
                  throw new x(
                    A.INVALID_ARGUMENT,
                    'Failed to construct data from Base64 string: ' + e
                  )
                }
              }),
              (t.fromUint8Array = function (e) {
                return new t(S.fromUint8Array(e))
              }),
              (t.prototype.toBase64 = function () {
                return this.l.toBase64()
              }),
              (t.prototype.toUint8Array = function () {
                return this.l.toUint8Array()
              }),
              (t.prototype.toString = function () {
                return 'Bytes(base64: ' + this.toBase64() + ')'
              }),
              (t.prototype.isEqual = function (t) {
                return this.l.isEqual(t.l)
              }),
              t
            )
          })(),
          q = function (t) {
            this._ = t
          }
        function k() {
          if ('undefined' == typeof Uint8Array)
            throw new x(
              A.UNIMPLEMENTED,
              'Uint8Arrays are not available in this environment.'
            )
        }
        function C() {
          if ('undefined' == typeof atob)
            throw new x(
              A.UNIMPLEMENTED,
              'Blobs are unavailable in Firestore in this environment.'
            )
        }
        var P = (function (t) {
            function e() {
              return (null !== t && t.apply(this, arguments)) || this
            }
            return (
              Object(h.c)(e, t),
              (e.fromBase64String = function (t) {
                return C(), new e(D.fromBase64String(t))
              }),
              (e.fromUint8Array = function (t) {
                return k(), new e(D.fromUint8Array(t))
              }),
              (e.prototype.toBase64 = function () {
                return C(), this._.toBase64()
              }),
              (e.prototype.toUint8Array = function () {
                return k(), this._.toUint8Array()
              }),
              (e.prototype.isEqual = function (t) {
                return this._.isEqual(t._)
              }),
              (e.prototype.toString = function () {
                return 'Blob(base64: ' + this.toBase64() + ')'
              }),
              e
            )
          })(q),
          L = function (t, e, n, r, i, o) {
            ;(this.T = t),
              (this.persistenceKey = e),
              (this.host = n),
              (this.ssl = r),
              (this.forceLongPolling = i),
              (this.I = o)
          },
          R = (function () {
            function t(t, e) {
              ;(this.projectId = t), (this.database = e || '(default)')
            }
            return (
              Object.defineProperty(t.prototype, 'm', {
                get: function () {
                  return '(default)' === this.database
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.isEqual = function (e) {
                return (
                  e instanceof t &&
                  e.projectId === this.projectId &&
                  e.database === this.database
                )
              }),
              t
            )
          })(),
          V = (function () {
            function t(t) {
              this.uid = t
            }
            return (
              (t.prototype.A = function () {
                return null != this.uid
              }),
              (t.prototype.R = function () {
                return this.A() ? 'uid:' + this.uid : 'anonymous-user'
              }),
              (t.prototype.isEqual = function (t) {
                return t.uid === this.uid
              }),
              t
            )
          })()
        ;(V.UNAUTHENTICATED = new V(null)),
          (V.P = new V('google-credentials-uid')),
          (V.g = new V('first-party-uid'))
        var M = function (t, e) {
            ;(this.user = e),
              (this.type = 'OAuth'),
              (this.V = {}),
              (this.V.Authorization = 'Bearer ' + t)
          },
          U = (function () {
            function t() {
              this.p = null
            }
            return (
              (t.prototype.getToken = function () {
                return Promise.resolve(null)
              }),
              (t.prototype.v = function () {}),
              (t.prototype.S = function (t) {
                ;(this.p = t), t(V.UNAUTHENTICATED)
              }),
              (t.prototype.D = function () {
                this.p = null
              }),
              t
            )
          })(),
          F = (function () {
            function t(t) {
              var e = this
              ;(this.C = null),
                (this.currentUser = V.UNAUTHENTICATED),
                (this.N = !1),
                (this.F = 0),
                (this.p = null),
                (this.forceRefresh = !1),
                (this.C = function () {
                  e.F++,
                    (e.currentUser = e.O()),
                    (e.N = !0),
                    e.p && e.p(e.currentUser)
                }),
                (this.F = 0),
                (this.auth = t.getImmediate({ optional: !0 })),
                this.auth
                  ? this.auth.addAuthTokenListener(this.C)
                  : (this.C(null),
                    t.get().then(
                      function (t) {
                        ;(e.auth = t), e.C && e.auth.addAuthTokenListener(e.C)
                      },
                      function () {}
                    ))
            }
            return (
              (t.prototype.getToken = function () {
                var t = this,
                  e = this.F,
                  n = this.forceRefresh
                return (
                  (this.forceRefresh = !1),
                  this.auth
                    ? this.auth.getToken(n).then(function (n) {
                        return t.F !== e
                          ? (d(
                              'FirebaseCredentialsProvider',
                              'getToken aborted due to token change.'
                            ),
                            t.getToken())
                          : n
                          ? (I('string' == typeof n.accessToken),
                            new M(n.accessToken, t.currentUser))
                          : null
                      })
                    : Promise.resolve(null)
                )
              }),
              (t.prototype.v = function () {
                this.forceRefresh = !0
              }),
              (t.prototype.S = function (t) {
                ;(this.p = t), this.N && t(this.currentUser)
              }),
              (t.prototype.D = function () {
                this.auth && this.auth.removeAuthTokenListener(this.C),
                  (this.C = null),
                  (this.p = null)
              }),
              (t.prototype.O = function () {
                var t = this.auth && this.auth.getUid()
                return I(null === t || 'string' == typeof t), new V(t)
              }),
              t
            )
          })(),
          z = (function () {
            function t(t, e) {
              ;(this.k = t),
                (this.M = e),
                (this.type = 'FirstParty'),
                (this.user = V.g)
            }
            return (
              Object.defineProperty(t.prototype, 'V', {
                get: function () {
                  var t = { 'X-Goog-AuthUser': this.M },
                    e = this.k.auth.getAuthHeaderValueForFirstParty([])
                  return e && (t.Authorization = e), t
                },
                enumerable: !1,
                configurable: !0,
              }),
              t
            )
          })(),
          G = (function () {
            function t(t, e) {
              ;(this.k = t), (this.M = e)
            }
            return (
              (t.prototype.getToken = function () {
                return Promise.resolve(new z(this.k, this.M))
              }),
              (t.prototype.S = function (t) {
                t(V.g)
              }),
              (t.prototype.D = function () {}),
              (t.prototype.v = function () {}),
              t
            )
          })(),
          H = (function () {
            function t(t, e) {
              var n = this
              ;(this.previousValue = t),
                e &&
                  ((e.L = function (t) {
                    return n.$(t)
                  }),
                  (this.B = function (t) {
                    return e.q(t)
                  }))
            }
            return (
              (t.prototype.$ = function (t) {
                return (
                  (this.previousValue = Math.max(t, this.previousValue)),
                  this.previousValue
                )
              }),
              (t.prototype.next = function () {
                var t = ++this.previousValue
                return this.B && this.B(t), t
              }),
              t
            )
          })()
        H.U = -1
        var B = (function () {
            function t(t, e) {
              if (((this.seconds = t), (this.nanoseconds = e), e < 0))
                throw new x(
                  A.INVALID_ARGUMENT,
                  'Timestamp nanoseconds out of range: ' + e
                )
              if (e >= 1e9)
                throw new x(
                  A.INVALID_ARGUMENT,
                  'Timestamp nanoseconds out of range: ' + e
                )
              if (t < -62135596800)
                throw new x(
                  A.INVALID_ARGUMENT,
                  'Timestamp seconds out of range: ' + t
                )
              if (t >= 253402300800)
                throw new x(
                  A.INVALID_ARGUMENT,
                  'Timestamp seconds out of range: ' + t
                )
            }
            return (
              (t.now = function () {
                return t.fromMillis(Date.now())
              }),
              (t.fromDate = function (e) {
                return t.fromMillis(e.getTime())
              }),
              (t.fromMillis = function (e) {
                var n = Math.floor(e / 1e3)
                return new t(n, 1e6 * (e - 1e3 * n))
              }),
              (t.prototype.toDate = function () {
                return new Date(this.toMillis())
              }),
              (t.prototype.toMillis = function () {
                return 1e3 * this.seconds + this.nanoseconds / 1e6
              }),
              (t.prototype.K = function (t) {
                return this.seconds === t.seconds
                  ? O(this.nanoseconds, t.nanoseconds)
                  : O(this.seconds, t.seconds)
              }),
              (t.prototype.isEqual = function (t) {
                return (
                  t.seconds === this.seconds &&
                  t.nanoseconds === this.nanoseconds
                )
              }),
              (t.prototype.toString = function () {
                return (
                  'Timestamp(seconds=' +
                  this.seconds +
                  ', nanoseconds=' +
                  this.nanoseconds +
                  ')'
                )
              }),
              (t.prototype.toJSON = function () {
                return { seconds: this.seconds, nanoseconds: this.nanoseconds }
              }),
              (t.prototype.valueOf = function () {
                var t = this.seconds - -62135596800
                return (
                  String(t).padStart(12, '0') +
                  '.' +
                  String(this.nanoseconds).padStart(9, '0')
                )
              }),
              t
            )
          })(),
          K = (function () {
            function t(t) {
              this.timestamp = t
            }
            return (
              (t.W = function (e) {
                return new t(e)
              }),
              (t.min = function () {
                return new t(new B(0, 0))
              }),
              (t.prototype.u = function (t) {
                return this.timestamp.K(t.timestamp)
              }),
              (t.prototype.isEqual = function (t) {
                return this.timestamp.isEqual(t.timestamp)
              }),
              (t.prototype.j = function () {
                return (
                  1e6 * this.timestamp.seconds +
                  this.timestamp.nanoseconds / 1e3
                )
              }),
              (t.prototype.toString = function () {
                return 'SnapshotVersion(' + this.timestamp.toString() + ')'
              }),
              (t.prototype.G = function () {
                return this.timestamp
              }),
              t
            )
          })(),
          J = (function () {
            function t(t, e, n) {
              void 0 === e ? (e = 0) : e > t.length && w(),
                void 0 === n ? (n = t.length - e) : n > t.length - e && w(),
                (this.segments = t),
                (this.offset = e),
                (this.H = n)
            }
            return (
              Object.defineProperty(t.prototype, 'length', {
                get: function () {
                  return this.H
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.isEqual = function (e) {
                return 0 === t.J(this, e)
              }),
              (t.prototype.child = function (e) {
                var n = this.segments.slice(this.offset, this.limit())
                return (
                  e instanceof t
                    ? e.forEach(function (t) {
                        n.push(t)
                      })
                    : n.push(e),
                  this.Y(n)
                )
              }),
              (t.prototype.limit = function () {
                return this.offset + this.length
              }),
              (t.prototype.X = function (t) {
                return (
                  (t = void 0 === t ? 1 : t),
                  this.Y(this.segments, this.offset + t, this.length - t)
                )
              }),
              (t.prototype.Z = function () {
                return this.Y(this.segments, this.offset, this.length - 1)
              }),
              (t.prototype.tt = function () {
                return this.segments[this.offset]
              }),
              (t.prototype.et = function () {
                return this.get(this.length - 1)
              }),
              (t.prototype.get = function (t) {
                return this.segments[this.offset + t]
              }),
              (t.prototype.nt = function () {
                return 0 === this.length
              }),
              (t.prototype.st = function (t) {
                if (t.length < this.length) return !1
                for (var e = 0; e < this.length; e++)
                  if (this.get(e) !== t.get(e)) return !1
                return !0
              }),
              (t.prototype.it = function (t) {
                if (this.length + 1 !== t.length) return !1
                for (var e = 0; e < this.length; e++)
                  if (this.get(e) !== t.get(e)) return !1
                return !0
              }),
              (t.prototype.forEach = function (t) {
                for (var e = this.offset, n = this.limit(); e < n; e++)
                  t(this.segments[e])
              }),
              (t.prototype.rt = function () {
                return this.segments.slice(this.offset, this.limit())
              }),
              (t.J = function (t, e) {
                for (var n = Math.min(t.length, e.length), r = 0; r < n; r++) {
                  var i = t.get(r),
                    o = e.get(r)
                  if (i < o) return -1
                  if (i > o) return 1
                }
                return t.length < e.length ? -1 : t.length > e.length ? 1 : 0
              }),
              t
            )
          })(),
          W = (function (t) {
            function e() {
              return (null !== t && t.apply(this, arguments)) || this
            }
            return (
              Object(h.c)(e, t),
              (e.prototype.Y = function (t, n, r) {
                return new e(t, n, r)
              }),
              (e.prototype.ot = function () {
                return this.rt().join('/')
              }),
              (e.prototype.toString = function () {
                return this.ot()
              }),
              (e.ct = function () {
                for (var t = [], n = 0; n < arguments.length; n++)
                  t[n] = arguments[n]
                for (var r = [], i = 0, o = t; i < o.length; i++) {
                  var u = o[i]
                  if (u.indexOf('//') >= 0)
                    throw new x(
                      A.INVALID_ARGUMENT,
                      'Invalid segment (' +
                        u +
                        '). Paths must not contain // in them.'
                    )
                  r.push.apply(
                    r,
                    u.split('/').filter(function (t) {
                      return t.length > 0
                    })
                  )
                }
                return new e(r)
              }),
              (e.at = function () {
                return new e([])
              }),
              e
            )
          })(J),
          X = /^[_a-zA-Z][_a-zA-Z0-9]*$/,
          rt = (function (t) {
            function e() {
              return (null !== t && t.apply(this, arguments)) || this
            }
            return (
              Object(h.c)(e, t),
              (e.prototype.Y = function (t, n, r) {
                return new e(t, n, r)
              }),
              (e.ut = function (t) {
                return X.test(t)
              }),
              (e.prototype.ot = function () {
                return this.rt()
                  .map(function (t) {
                    return (
                      (t = t.replace(/\\/g, '\\\\').replace(/`/g, '\\`')),
                      e.ut(t) || (t = '`' + t + '`'),
                      t
                    )
                  })
                  .join('.')
              }),
              (e.prototype.toString = function () {
                return this.ot()
              }),
              (e.prototype.ht = function () {
                return 1 === this.length && '__name__' === this.get(0)
              }),
              (e.lt = function () {
                return new e(['__name__'])
              }),
              (e._t = function (t) {
                for (
                  var n = [],
                    r = '',
                    i = 0,
                    o = function () {
                      if (0 === r.length)
                        throw new x(
                          A.INVALID_ARGUMENT,
                          'Invalid field path (' +
                            t +
                            "). Paths must not be empty, begin with '.', end with '.', or contain '..'"
                        )
                      n.push(r), (r = '')
                    },
                    u = !1;
                  i < t.length;

                ) {
                  var s = t[i]
                  if ('\\' === s) {
                    if (i + 1 === t.length)
                      throw new x(
                        A.INVALID_ARGUMENT,
                        'Path has trailing escape character: ' + t
                      )
                    var a = t[i + 1]
                    if ('\\' !== a && '.' !== a && '`' !== a)
                      throw new x(
                        A.INVALID_ARGUMENT,
                        'Path has invalid escape sequence: ' + t
                      )
                    ;(r += a), (i += 2)
                  } else
                    '`' === s
                      ? ((u = !u), i++)
                      : '.' !== s || u
                      ? ((r += s), i++)
                      : (o(), i++)
                }
                if ((o(), u))
                  throw new x(
                    A.INVALID_ARGUMENT,
                    'Unterminated ` in path: ' + t
                  )
                return new e(n)
              }),
              (e.at = function () {
                return new e([])
              }),
              e
            )
          })(J),
          Y = (function () {
            function t(t) {
              this.path = t
            }
            return (
              (t.ft = function (e) {
                return new t(W.ct(e))
              }),
              (t.dt = function (e) {
                return new t(W.ct(e).X(5))
              }),
              (t.prototype.wt = function (t) {
                return (
                  this.path.length >= 2 &&
                  this.path.get(this.path.length - 2) === t
                )
              }),
              (t.prototype.isEqual = function (t) {
                return null !== t && 0 === W.J(this.path, t.path)
              }),
              (t.prototype.toString = function () {
                return this.path.toString()
              }),
              (t.J = function (t, e) {
                return W.J(t.path, e.path)
              }),
              (t.Et = function (t) {
                return t.length % 2 == 0
              }),
              (t.Tt = function (e) {
                return new t(new W(e.slice()))
              }),
              t
            )
          })()
        function Q(t) {
          var e = 0
          for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e++
          return e
        }
        function $(t, e) {
          for (var n in t)
            Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n])
        }
        function Z(t) {
          for (var e in t)
            if (Object.prototype.hasOwnProperty.call(t, e)) return !1
          return !0
        }
        var tt = (function () {
            function t(t) {
              ;(this.fields = t), t.sort(rt.J)
            }
            return (
              (t.prototype.It = function (t) {
                for (var e = 0, n = this.fields; e < n.length; e++)
                  if (n[e].st(t)) return !0
                return !1
              }),
              (t.prototype.isEqual = function (t) {
                return N(this.fields, t.fields, function (t, e) {
                  return t.isEqual(e)
                })
              }),
              t
            )
          })(),
          et = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/)
        function nt(t) {
          if ((I(!!t), 'string' == typeof t)) {
            var e = 0,
              n = et.exec(t)
            if ((I(!!n), n[1])) {
              var r = n[1]
              ;(r = (r + '000000000').substr(0, 9)), (e = Number(r))
            }
            var i = new Date(t)
            return { seconds: Math.floor(i.getTime() / 1e3), nanos: e }
          }
          return { seconds: it(t.seconds), nanos: it(t.nanos) }
        }
        function it(t) {
          return 'number' == typeof t ? t : 'string' == typeof t ? Number(t) : 0
        }
        function ot(t) {
          return 'string' == typeof t
            ? S.fromBase64String(t)
            : S.fromUint8Array(t)
        }
        function st(t) {
          var e, n
          return (
            'server_timestamp' ===
            (null ===
              (n = (
                (null === (e = null == t ? void 0 : t.mapValue) || void 0 === e
                  ? void 0
                  : e.fields) || {}
              ).__type__) || void 0 === n
              ? void 0
              : n.stringValue)
          )
        }
        function ut(t) {
          var e = nt(t.mapValue.fields.__local_write_time__.timestampValue)
          return new B(e.seconds, e.nanos)
        }
        function at(t) {
          return null == t
        }
        function ct(t) {
          return 0 === t && 1 / t == -1 / 0
        }
        function ht(t) {
          return (
            'number' == typeof t &&
            Number.isInteger(t) &&
            !ct(t) &&
            t <= Number.MAX_SAFE_INTEGER &&
            t >= Number.MIN_SAFE_INTEGER
          )
        }
        function ft(t) {
          return 'nullValue' in t
            ? 0
            : 'booleanValue' in t
            ? 1
            : 'integerValue' in t || 'doubleValue' in t
            ? 2
            : 'timestampValue' in t
            ? 3
            : 'stringValue' in t
            ? 5
            : 'bytesValue' in t
            ? 6
            : 'referenceValue' in t
            ? 7
            : 'geoPointValue' in t
            ? 8
            : 'arrayValue' in t
            ? 9
            : 'mapValue' in t
            ? st(t)
              ? 4
              : 10
            : w()
        }
        function lt(t, e) {
          var n = ft(t)
          if (n !== ft(e)) return !1
          switch (n) {
            case 0:
              return !0
            case 1:
              return t.booleanValue === e.booleanValue
            case 4:
              return ut(t).isEqual(ut(e))
            case 3:
              return (function (t, e) {
                if (
                  'string' == typeof t.timestampValue &&
                  'string' == typeof e.timestampValue &&
                  t.timestampValue.length === e.timestampValue.length
                )
                  return t.timestampValue === e.timestampValue
                var n = nt(t.timestampValue),
                  r = nt(e.timestampValue)
                return n.seconds === r.seconds && n.nanos === r.nanos
              })(t, e)
            case 5:
              return t.stringValue === e.stringValue
            case 6:
              return (function (t, e) {
                return ot(t.bytesValue).isEqual(ot(e.bytesValue))
              })(t, e)
            case 7:
              return t.referenceValue === e.referenceValue
            case 8:
              return (function (t, e) {
                return (
                  it(t.geoPointValue.latitude) ===
                    it(e.geoPointValue.latitude) &&
                  it(t.geoPointValue.longitude) ===
                    it(e.geoPointValue.longitude)
                )
              })(t, e)
            case 2:
              return (function (t, e) {
                if ('integerValue' in t && 'integerValue' in e)
                  return it(t.integerValue) === it(e.integerValue)
                if ('doubleValue' in t && 'doubleValue' in e) {
                  var n = it(t.doubleValue),
                    r = it(e.doubleValue)
                  return n === r ? ct(n) === ct(r) : isNaN(n) && isNaN(r)
                }
                return !1
              })(t, e)
            case 9:
              return N(t.arrayValue.values || [], e.arrayValue.values || [], lt)
            case 10:
              return (function (t, e) {
                var n = t.mapValue.fields || {},
                  r = e.mapValue.fields || {}
                if (Q(n) !== Q(r)) return !1
                for (var i in n)
                  if (
                    n.hasOwnProperty(i) &&
                    (void 0 === r[i] || !lt(n[i], r[i]))
                  )
                    return !1
                return !0
              })(t, e)
            default:
              return w()
          }
        }
        function pt(t, e) {
          return (
            void 0 !==
            (t.values || []).find(function (t) {
              return lt(t, e)
            })
          )
        }
        function vt(t, e) {
          var n = ft(t),
            r = ft(e)
          if (n !== r) return O(n, r)
          switch (n) {
            case 0:
              return 0
            case 1:
              return O(t.booleanValue, e.booleanValue)
            case 2:
              return (function (t, e) {
                var n = it(t.integerValue || t.doubleValue),
                  r = it(e.integerValue || e.doubleValue)
                return n < r
                  ? -1
                  : n > r
                  ? 1
                  : n === r
                  ? 0
                  : isNaN(n)
                  ? isNaN(r)
                    ? 0
                    : -1
                  : 1
              })(t, e)
            case 3:
              return yt(t.timestampValue, e.timestampValue)
            case 4:
              return yt(ut(t), ut(e))
            case 5:
              return O(t.stringValue, e.stringValue)
            case 6:
              return (function (t, e) {
                var n = ot(t),
                  r = ot(e)
                return n.u(r)
              })(t.bytesValue, e.bytesValue)
            case 7:
              return (function (t, e) {
                for (
                  var n = t.split('/'), r = e.split('/'), i = 0;
                  i < n.length && i < r.length;
                  i++
                ) {
                  var o = O(n[i], r[i])
                  if (0 !== o) return o
                }
                return O(n.length, r.length)
              })(t.referenceValue, e.referenceValue)
            case 8:
              return (function (t, e) {
                var n = O(it(t.latitude), it(e.latitude))
                return 0 !== n ? n : O(it(t.longitude), it(e.longitude))
              })(t.geoPointValue, e.geoPointValue)
            case 9:
              return (function (t, e) {
                for (
                  var n = t.values || [], r = e.values || [], i = 0;
                  i < n.length && i < r.length;
                  ++i
                ) {
                  var o = vt(n[i], r[i])
                  if (o) return o
                }
                return O(n.length, r.length)
              })(t.arrayValue, e.arrayValue)
            case 10:
              return (function (t, e) {
                var n = t.fields || {},
                  r = Object.keys(n),
                  i = e.fields || {},
                  o = Object.keys(i)
                r.sort(), o.sort()
                for (var u = 0; u < r.length && u < o.length; ++u) {
                  var s = O(r[u], o[u])
                  if (0 !== s) return s
                  var a = vt(n[r[u]], i[o[u]])
                  if (0 !== a) return a
                }
                return O(r.length, o.length)
              })(t.mapValue, e.mapValue)
            default:
              throw w()
          }
        }
        function yt(t, e) {
          if (
            'string' == typeof t &&
            'string' == typeof e &&
            t.length === e.length
          )
            return O(t, e)
          var n = nt(t),
            r = nt(e),
            i = O(n.seconds, r.seconds)
          return 0 !== i ? i : O(n.nanos, r.nanos)
        }
        function gt(t) {
          return (function t(e) {
            return 'nullValue' in e
              ? 'null'
              : 'booleanValue' in e
              ? '' + e.booleanValue
              : 'integerValue' in e
              ? '' + e.integerValue
              : 'doubleValue' in e
              ? '' + e.doubleValue
              : 'timestampValue' in e
              ? (function (t) {
                  var e = nt(t)
                  return 'time(' + e.seconds + ',' + e.nanos + ')'
                })(e.timestampValue)
              : 'stringValue' in e
              ? e.stringValue
              : 'bytesValue' in e
              ? ot(e.bytesValue).toBase64()
              : 'referenceValue' in e
              ? ((r = e.referenceValue), Y.dt(r).toString())
              : 'geoPointValue' in e
              ? 'geo(' +
                (n = e.geoPointValue).latitude +
                ',' +
                n.longitude +
                ')'
              : 'arrayValue' in e
              ? (function (e) {
                  for (
                    var n = '[', r = !0, o = 0, i = e.values || [];
                    o < i.length;
                    o++
                  )
                    r ? (r = !1) : (n += ','), (n += t(i[o]))
                  return n + ']'
                })(e.arrayValue)
              : 'mapValue' in e
              ? (function (e) {
                  for (
                    var n = '{',
                      r = !0,
                      o = 0,
                      i = Object.keys(e.fields || {}).sort();
                    o < i.length;
                    o++
                  ) {
                    var c = i[o]
                    r ? (r = !1) : (n += ','), (n += c + ':' + t(e.fields[c]))
                  }
                  return n + '}'
                })(e.mapValue)
              : w()
            var n, r
          })(t)
        }
        function bt(t, e) {
          return {
            referenceValue:
              'projects/' +
              t.projectId +
              '/databases/' +
              t.database +
              '/documents/' +
              e.path.ot(),
          }
        }
        function mt(t) {
          return !!t && 'integerValue' in t
        }
        function wt(t) {
          return !!t && 'arrayValue' in t
        }
        function It(t) {
          return !!t && 'nullValue' in t
        }
        function _t(t) {
          return !!t && 'doubleValue' in t && isNaN(Number(t.doubleValue))
        }
        function Et(t) {
          return !!t && 'mapValue' in t
        }
        var Tt = (function () {
            function t(t) {
              this.proto = t
            }
            return (
              (t.empty = function () {
                return new t({ mapValue: {} })
              }),
              (t.prototype.field = function (t) {
                if (t.nt()) return this.proto
                for (var e = this.proto, n = 0; n < t.length - 1; ++n) {
                  if (!e.mapValue.fields) return null
                  if (!Et((e = e.mapValue.fields[t.get(n)]))) return null
                }
                return (e = (e.mapValue.fields || {})[t.et()]) || null
              }),
              (t.prototype.isEqual = function (t) {
                return lt(this.proto, t.proto)
              }),
              t
            )
          })(),
          Ot = (function () {
            function t(t) {
              void 0 === t && (t = Tt.empty()),
                (this.At = t),
                (this.Rt = new Map())
            }
            return (
              (t.prototype.set = function (t, e) {
                return this.Pt(t, e), this
              }),
              (t.prototype.delete = function (t) {
                return this.Pt(t, null), this
              }),
              (t.prototype.Pt = function (t, e) {
                for (var n = this.Rt, r = 0; r < t.length - 1; ++r) {
                  var i = t.get(r),
                    o = n.get(i)
                  o instanceof Map
                    ? (n = o)
                    : o && 10 === ft(o)
                    ? ((o = new Map(Object.entries(o.mapValue.fields || {}))),
                      n.set(i, o),
                      (n = o))
                    : ((o = new Map()), n.set(i, o), (n = o))
                }
                n.set(t.et(), e)
              }),
              (t.prototype.yt = function () {
                var t = this.gt(rt.at(), this.Rt)
                return null != t ? new Tt(t) : this.At
              }),
              (t.prototype.gt = function (t, e) {
                var n = this,
                  r = !1,
                  i = this.At.field(t),
                  o = Et(i) ? Object.assign({}, i.mapValue.fields) : {}
                return (
                  e.forEach(function (e, i) {
                    if (e instanceof Map) {
                      var u = n.gt(t.child(i), e)
                      null != u && ((o[i] = u), (r = !0))
                    } else null !== e ? ((o[i] = e), (r = !0)) : o.hasOwnProperty(i) && (delete o[i], (r = !0))
                  }),
                  r ? { mapValue: { fields: o } } : null
                )
              }),
              t
            )
          })()
        function Nt(t) {
          var e = []
          return (
            $(t.fields || {}, function (t, n) {
              var r = new rt([t])
              if (Et(n)) {
                var i = Nt(n.mapValue).fields
                if (0 === i.length) e.push(r)
                else
                  for (var o = 0, u = i; o < u.length; o++) {
                    var s = u[o]
                    e.push(r.child(s))
                  }
              } else e.push(r)
            }),
            new tt(e)
          )
        }
        var jt = function (t, e) {
            ;(this.key = t), (this.version = e)
          },
          St = (function (t) {
            function e(e, n, r, i) {
              var o = this
              return (
                ((o = t.call(this, e, n) || this).Vt = r),
                (o.bt = !!i.bt),
                (o.hasCommittedMutations = !!i.hasCommittedMutations),
                o
              )
            }
            return (
              Object(h.c)(e, t),
              (e.prototype.field = function (t) {
                return this.Vt.field(t)
              }),
              (e.prototype.data = function () {
                return this.Vt
              }),
              (e.prototype.vt = function () {
                return this.Vt.proto
              }),
              (e.prototype.isEqual = function (t) {
                return (
                  t instanceof e &&
                  this.key.isEqual(t.key) &&
                  this.version.isEqual(t.version) &&
                  this.bt === t.bt &&
                  this.hasCommittedMutations === t.hasCommittedMutations &&
                  this.Vt.isEqual(t.Vt)
                )
              }),
              (e.prototype.toString = function () {
                return (
                  'Document(' +
                  this.key +
                  ', ' +
                  this.version +
                  ', ' +
                  this.Vt.toString() +
                  ', {hasLocalMutations: ' +
                  this.bt +
                  '}), {hasCommittedMutations: ' +
                  this.hasCommittedMutations +
                  '})'
                )
              }),
              Object.defineProperty(e.prototype, 'hasPendingWrites', {
                get: function () {
                  return this.bt || this.hasCommittedMutations
                },
                enumerable: !1,
                configurable: !0,
              }),
              e
            )
          })(jt),
          At = (function (t) {
            function e(e, n, r) {
              var i = this
              return (
                ((i = t.call(this, e, n) || this).hasCommittedMutations = !(
                  !r || !r.hasCommittedMutations
                )),
                i
              )
            }
            return (
              Object(h.c)(e, t),
              (e.prototype.toString = function () {
                return 'NoDocument(' + this.key + ', ' + this.version + ')'
              }),
              Object.defineProperty(e.prototype, 'hasPendingWrites', {
                get: function () {
                  return this.hasCommittedMutations
                },
                enumerable: !1,
                configurable: !0,
              }),
              (e.prototype.isEqual = function (t) {
                return (
                  t instanceof e &&
                  t.hasCommittedMutations === this.hasCommittedMutations &&
                  t.version.isEqual(this.version) &&
                  t.key.isEqual(this.key)
                )
              }),
              e
            )
          })(jt),
          xt = (function (t) {
            function e() {
              return (null !== t && t.apply(this, arguments)) || this
            }
            return (
              Object(h.c)(e, t),
              (e.prototype.toString = function () {
                return 'UnknownDocument(' + this.key + ', ' + this.version + ')'
              }),
              Object.defineProperty(e.prototype, 'hasPendingWrites', {
                get: function () {
                  return !0
                },
                enumerable: !1,
                configurable: !0,
              }),
              (e.prototype.isEqual = function (t) {
                return (
                  t instanceof e &&
                  t.version.isEqual(this.version) &&
                  t.key.isEqual(this.key)
                )
              }),
              e
            )
          })(jt),
          Dt = function (t, e, n, r, i, o, u) {
            void 0 === e && (e = null),
              void 0 === n && (n = []),
              void 0 === r && (r = []),
              void 0 === i && (i = null),
              void 0 === o && (o = null),
              void 0 === u && (u = null),
              (this.path = t),
              (this.collectionGroup = e),
              (this.orderBy = n),
              (this.filters = r),
              (this.limit = i),
              (this.startAt = o),
              (this.endAt = u),
              (this.St = null)
          }
        function kt(t, e, n, r, i, o, u) {
          return (
            void 0 === e && (e = null),
            void 0 === n && (n = []),
            void 0 === r && (r = []),
            void 0 === i && (i = null),
            void 0 === o && (o = null),
            void 0 === u && (u = null),
            new Dt(t, e, n, r, i, o, u)
          )
        }
        function Ct(t) {
          var e = _(t)
          if (null === e.St) {
            var n = e.path.ot()
            null !== e.collectionGroup && (n += '|cg:' + e.collectionGroup),
              (n += '|f:'),
              (n += e.filters
                .map(function (t) {
                  return (function (t) {
                    return t.field.ot() + t.op.toString() + gt(t.value)
                  })(t)
                })
                .join(',')),
              (n += '|ob:'),
              (n += e.orderBy
                .map(function (t) {
                  return (function (t) {
                    return t.field.ot() + t.dir
                  })(t)
                })
                .join(',')),
              at(e.limit) || ((n += '|l:'), (n += e.limit)),
              e.startAt && ((n += '|lb:'), (n += Kt(e.startAt))),
              e.endAt && ((n += '|ub:'), (n += Kt(e.endAt))),
              (e.St = n)
          }
          return e.St
        }
        function Pt(t, e) {
          if (t.limit !== e.limit) return !1
          if (t.orderBy.length !== e.orderBy.length) return !1
          for (var n = 0; n < t.orderBy.length; n++)
            if (!Wt(t.orderBy[n], e.orderBy[n])) return !1
          if (t.filters.length !== e.filters.length) return !1
          for (var r = 0; r < t.filters.length; r++)
            if (
              ((i = t.filters[r]),
              (o = e.filters[r]),
              i.op !== o.op ||
                !i.field.isEqual(o.field) ||
                !lt(i.value, o.value))
            )
              return !1
          var i, o
          return (
            t.collectionGroup === e.collectionGroup &&
            !!t.path.isEqual(e.path) &&
            !!Yt(t.startAt, e.startAt) &&
            Yt(t.endAt, e.endAt)
          )
        }
        function Lt(t) {
          return (
            Y.Et(t.path) && null === t.collectionGroup && 0 === t.filters.length
          )
        }
        var Rt = (function (t) {
            function e(e, n, r) {
              var i = this
              return (
                ((i = t.call(this) || this).field = e),
                (i.op = n),
                (i.value = r),
                i
              )
            }
            return (
              Object(h.c)(e, t),
              (e.create = function (t, n, r) {
                return t.ht()
                  ? 'in' === n || 'not-in' === n
                    ? this.Dt(t, n, r)
                    : new Vt(t, n, r)
                  : 'array-contains' === n
                  ? new qt(t, r)
                  : 'in' === n
                  ? new zt(t, r)
                  : 'not-in' === n
                  ? new Gt(t, r)
                  : 'array-contains-any' === n
                  ? new Ht(t, r)
                  : new e(t, n, r)
              }),
              (e.Dt = function (t, e, n) {
                return 'in' === e ? new Mt(t, n) : new Ut(t, n)
              }),
              (e.prototype.matches = function (t) {
                var e = t.field(this.field)
                return '!=' === this.op
                  ? null !== e && this.Ct(vt(e, this.value))
                  : null !== e &&
                      ft(this.value) === ft(e) &&
                      this.Ct(vt(e, this.value))
              }),
              (e.prototype.Ct = function (t) {
                switch (this.op) {
                  case '<':
                    return t < 0
                  case '<=':
                    return t <= 0
                  case '==':
                    return 0 === t
                  case '!=':
                    return 0 !== t
                  case '>':
                    return t > 0
                  case '>=':
                    return t >= 0
                  default:
                    return w()
                }
              }),
              (e.prototype.xt = function () {
                return (
                  ['<', '<=', '>', '>=', '!=', 'not-in'].indexOf(this.op) >= 0
                )
              }),
              e
            )
          })(function () {}),
          Vt = (function (t) {
            function e(e, n, r) {
              var i = this
              return (
                ((i = t.call(this, e, n, r) || this).key = Y.dt(
                  r.referenceValue
                )),
                i
              )
            }
            return (
              Object(h.c)(e, t),
              (e.prototype.matches = function (t) {
                var e = Y.J(t.key, this.key)
                return this.Ct(e)
              }),
              e
            )
          })(Rt),
          Mt = (function (t) {
            function e(e, n) {
              var r = this
              return (
                ((r = t.call(this, e, 'in', n) || this).keys = Ft('in', n)), r
              )
            }
            return (
              Object(h.c)(e, t),
              (e.prototype.matches = function (t) {
                return this.keys.some(function (e) {
                  return e.isEqual(t.key)
                })
              }),
              e
            )
          })(Rt),
          Ut = (function (t) {
            function e(e, n) {
              var r = this
              return (
                ((r = t.call(this, e, 'not-in', n) || this).keys = Ft(
                  'not-in',
                  n
                )),
                r
              )
            }
            return (
              Object(h.c)(e, t),
              (e.prototype.matches = function (t) {
                return !this.keys.some(function (e) {
                  return e.isEqual(t.key)
                })
              }),
              e
            )
          })(Rt)
        function Ft(t, e) {
          var n
          return (
            (null === (n = e.arrayValue) || void 0 === n ? void 0 : n.values) ||
            []
          ).map(function (t) {
            return Y.dt(t.referenceValue)
          })
        }
        var qt = (function (t) {
            function e(e, n) {
              return t.call(this, e, 'array-contains', n) || this
            }
            return (
              Object(h.c)(e, t),
              (e.prototype.matches = function (t) {
                var e = t.field(this.field)
                return wt(e) && pt(e.arrayValue, this.value)
              }),
              e
            )
          })(Rt),
          zt = (function (t) {
            function e(e, n) {
              return t.call(this, e, 'in', n) || this
            }
            return (
              Object(h.c)(e, t),
              (e.prototype.matches = function (t) {
                var e = t.field(this.field)
                return null !== e && pt(this.value.arrayValue, e)
              }),
              e
            )
          })(Rt),
          Gt = (function (t) {
            function e(e, n) {
              return t.call(this, e, 'not-in', n) || this
            }
            return (
              Object(h.c)(e, t),
              (e.prototype.matches = function (t) {
                if (pt(this.value.arrayValue, { nullValue: 'NULL_VALUE' }))
                  return !1
                var e = t.field(this.field)
                return null !== e && !pt(this.value.arrayValue, e)
              }),
              e
            )
          })(Rt),
          Ht = (function (t) {
            function e(e, n) {
              return t.call(this, e, 'array-contains-any', n) || this
            }
            return (
              Object(h.c)(e, t),
              (e.prototype.matches = function (t) {
                var e = this,
                  n = t.field(this.field)
                return (
                  !(!wt(n) || !n.arrayValue.values) &&
                  n.arrayValue.values.some(function (t) {
                    return pt(e.value.arrayValue, t)
                  })
                )
              }),
              e
            )
          })(Rt),
          Bt = function (t, e) {
            ;(this.position = t), (this.before = e)
          }
        function Kt(t) {
          return (
            (t.before ? 'b' : 'a') +
            ':' +
            t.position
              .map(function (t) {
                return gt(t)
              })
              .join(',')
          )
        }
        var Jt = function (t, e) {
          void 0 === e && (e = 'asc'), (this.field = t), (this.dir = e)
        }
        function Wt(t, e) {
          return t.dir === e.dir && t.field.isEqual(e.field)
        }
        function Xt(t, e, n) {
          for (var r = 0, i = 0; i < t.position.length; i++) {
            var o = e[i],
              u = t.position[i]
            if (
              ((r = o.field.ht()
                ? Y.J(Y.dt(u.referenceValue), n.key)
                : vt(u, n.field(o.field))),
              'desc' === o.dir && (r *= -1),
              0 !== r)
            )
              break
          }
          return t.before ? r <= 0 : r < 0
        }
        function Yt(t, e) {
          if (null === t) return null === e
          if (null === e) return !1
          if (t.before !== e.before || t.position.length !== e.position.length)
            return !1
          for (var n = 0; n < t.position.length; n++)
            if (!lt(t.position[n], e.position[n])) return !1
          return !0
        }
        var Qt = function (t, e, n, r, i, o, u, s) {
          void 0 === e && (e = null),
            void 0 === n && (n = []),
            void 0 === r && (r = []),
            void 0 === i && (i = null),
            void 0 === o && (o = 'F'),
            void 0 === u && (u = null),
            void 0 === s && (s = null),
            (this.path = t),
            (this.collectionGroup = e),
            (this.Nt = n),
            (this.filters = r),
            (this.limit = i),
            (this.limitType = o),
            (this.startAt = u),
            (this.endAt = s),
            (this.Ft = null),
            (this.Ot = null),
            this.startAt,
            this.endAt
        }
        function $t(t, e, n, r, i, o, u, s) {
          return new Qt(t, e, n, r, i, o, u, s)
        }
        function Zt(t) {
          return new Qt(t)
        }
        function te(t) {
          return !at(t.limit) && 'F' === t.limitType
        }
        function ee(t) {
          return !at(t.limit) && 'L' === t.limitType
        }
        function ne(t) {
          return t.Nt.length > 0 ? t.Nt[0].field : null
        }
        function re(t) {
          for (var e = 0, n = t.filters; e < n.length; e++) {
            var r = n[e]
            if (r.xt()) return r.field
          }
          return null
        }
        function ie(t) {
          return null !== t.collectionGroup
        }
        function oe(t) {
          var e = _(t)
          if (null === e.Ft) {
            e.Ft = []
            var n = re(e),
              r = ne(e)
            if (null !== n && null === r)
              n.ht() || e.Ft.push(new Jt(n)), e.Ft.push(new Jt(rt.lt(), 'asc'))
            else {
              for (var i = !1, o = 0, u = e.Nt; o < u.length; o++) {
                var s = u[o]
                e.Ft.push(s), s.field.ht() && (i = !0)
              }
              if (!i) {
                var a = e.Nt.length > 0 ? e.Nt[e.Nt.length - 1].dir : 'asc'
                e.Ft.push(new Jt(rt.lt(), a))
              }
            }
          }
          return e.Ft
        }
        function se(t) {
          var e = _(t)
          if (!e.Ot)
            if ('F' === e.limitType)
              e.Ot = kt(
                e.path,
                e.collectionGroup,
                oe(e),
                e.filters,
                e.limit,
                e.startAt,
                e.endAt
              )
            else {
              for (var n = [], r = 0, i = oe(e); r < i.length; r++) {
                var o = i[r],
                  u = 'desc' === o.dir ? 'asc' : 'desc'
                n.push(new Jt(o.field, u))
              }
              var s = e.endAt
                  ? new Bt(e.endAt.position, !e.endAt.before)
                  : null,
                a = e.startAt
                  ? new Bt(e.startAt.position, !e.startAt.before)
                  : null
              e.Ot = kt(e.path, e.collectionGroup, n, e.filters, e.limit, s, a)
            }
          return e.Ot
        }
        function ue(t, e, n) {
          return new Qt(
            t.path,
            t.collectionGroup,
            t.Nt.slice(),
            t.filters.slice(),
            e,
            n,
            t.startAt,
            t.endAt
          )
        }
        function ae(t, e) {
          return Pt(se(t), se(e)) && t.limitType === e.limitType
        }
        function ce(t) {
          return Ct(se(t)) + '|lt:' + t.limitType
        }
        function he(t) {
          return (
            'Query(target=' +
            (function (t) {
              var e = t.path.ot()
              return (
                null !== t.collectionGroup &&
                  (e += ' collectionGroup=' + t.collectionGroup),
                t.filters.length > 0 &&
                  (e +=
                    ', filters: [' +
                    t.filters
                      .map(function (t) {
                        return (
                          (e = t).field.ot() + ' ' + e.op + ' ' + gt(e.value)
                        )
                        var e
                      })
                      .join(', ') +
                    ']'),
                at(t.limit) || (e += ', limit: ' + t.limit),
                t.orderBy.length > 0 &&
                  (e +=
                    ', orderBy: [' +
                    t.orderBy
                      .map(function (t) {
                        return (function (t) {
                          return t.field.ot() + ' (' + t.dir + ')'
                        })(t)
                      })
                      .join(', ') +
                    ']'),
                t.startAt && (e += ', startAt: ' + Kt(t.startAt)),
                t.endAt && (e += ', endAt: ' + Kt(t.endAt)),
                'Target(' + e + ')'
              )
            })(se(t)) +
            '; limitType=' +
            t.limitType +
            ')'
          )
        }
        function fe(t, e) {
          return (
            (function (t, e) {
              var n = e.key.path
              return null !== t.collectionGroup
                ? e.key.wt(t.collectionGroup) && t.path.st(n)
                : Y.Et(t.path)
                ? t.path.isEqual(n)
                : t.path.it(n)
            })(t, e) &&
            (function (t, e) {
              for (var n = 0, r = t.Nt; n < r.length; n++) {
                var i = r[n]
                if (!i.field.ht() && null === e.field(i.field)) return !1
              }
              return !0
            })(t, e) &&
            (function (t, e) {
              for (var n = 0, r = t.filters; n < r.length; n++)
                if (!r[n].matches(e)) return !1
              return !0
            })(t, e) &&
            (function (t, e) {
              return !(
                (t.startAt && !Xt(t.startAt, oe(t), e)) ||
                (t.endAt && Xt(t.endAt, oe(t), e))
              )
            })(t, e)
          )
        }
        function le(t) {
          return function (e, n) {
            for (var r = !1, i = 0, o = oe(t); i < o.length; i++) {
              var u = o[i],
                s = pe(u, e, n)
              if (0 !== s) return s
              r = r || u.field.ht()
            }
            return 0
          }
        }
        function pe(t, e, n) {
          var r = t.field.ht()
            ? Y.J(e.key, n.key)
            : (function (t, e, n) {
                var r = e.field(t),
                  i = n.field(t)
                return null !== r && null !== i ? vt(r, i) : w()
              })(t.field, e, n)
          switch (t.dir) {
            case 'asc':
              return r
            case 'desc':
              return -1 * r
            default:
              return w()
          }
        }
        var de = (function () {
          function t(t, e, n, r, i, o, u) {
            void 0 === i && (i = K.min()),
              void 0 === o && (o = K.min()),
              void 0 === u && (u = S.h),
              (this.target = t),
              (this.targetId = e),
              (this.kt = n),
              (this.sequenceNumber = r),
              (this.Mt = i),
              (this.lastLimboFreeSnapshotVersion = o),
              (this.resumeToken = u)
          }
          return (
            (t.prototype.Lt = function (e) {
              return new t(
                this.target,
                this.targetId,
                this.kt,
                e,
                this.Mt,
                this.lastLimboFreeSnapshotVersion,
                this.resumeToken
              )
            }),
            (t.prototype.$t = function (e, n) {
              return new t(
                this.target,
                this.targetId,
                this.kt,
                this.sequenceNumber,
                n,
                this.lastLimboFreeSnapshotVersion,
                e
              )
            }),
            (t.prototype.Bt = function (e) {
              return new t(
                this.target,
                this.targetId,
                this.kt,
                this.sequenceNumber,
                this.Mt,
                e,
                this.resumeToken
              )
            }),
            t
          )
        })()
        function ve(t, e) {
          if (t.qt) {
            if (isNaN(e)) return { doubleValue: 'NaN' }
            if (e === 1 / 0) return { doubleValue: 'Infinity' }
            if (e === -1 / 0) return { doubleValue: '-Infinity' }
          }
          return { doubleValue: ct(e) ? '-0' : e }
        }
        function ye(t) {
          return { integerValue: '' + t }
        }
        function ge(t, e) {
          return ht(e) ? ye(e) : ve(t, e)
        }
        var be = function () {
          this.Ut = void 0
        }
        function me(t, e, n) {
          return t instanceof _e
            ? (function (t, e) {
                var n = {
                  fields: {
                    __type__: { stringValue: 'server_timestamp' },
                    __local_write_time__: {
                      timestampValue: {
                        seconds: t.seconds,
                        nanos: t.nanoseconds,
                      },
                    },
                  },
                }
                return e && (n.fields.__previous_value__ = e), { mapValue: n }
              })(n, e)
            : t instanceof Ee
            ? Te(t, e)
            : t instanceof Oe
            ? Ne(t, e)
            : (function (t, e) {
                var n = Ie(t, e),
                  r = Se(n) + Se(t.Qt)
                return mt(n) && mt(t.Qt) ? ye(r) : ve(t.Kt, r)
              })(t, e)
        }
        function we(t, e, n) {
          return t instanceof Ee ? Te(t, e) : t instanceof Oe ? Ne(t, e) : n
        }
        function Ie(t, e) {
          return t instanceof je
            ? mt((n = e)) ||
              (function (t) {
                return !!t && 'doubleValue' in t
              })(n)
              ? e
              : { integerValue: 0 }
            : null
          var n
        }
        var _e = (function (t) {
            function e() {
              return (null !== t && t.apply(this, arguments)) || this
            }
            return Object(h.c)(e, t), e
          })(be),
          Ee = (function (t) {
            function e(e) {
              var n = this
              return ((n = t.call(this) || this).elements = e), n
            }
            return Object(h.c)(e, t), e
          })(be)
        function Te(t, e) {
          for (
            var n = Ae(e),
              r = function (t) {
                n.some(function (e) {
                  return lt(e, t)
                }) || n.push(t)
              },
              i = 0,
              o = t.elements;
            i < o.length;
            i++
          )
            r(o[i])
          return { arrayValue: { values: n } }
        }
        var Oe = (function (t) {
          function e(e) {
            var n = this
            return ((n = t.call(this) || this).elements = e), n
          }
          return Object(h.c)(e, t), e
        })(be)
        function Ne(t, e) {
          for (
            var n = Ae(e),
              r = function (t) {
                n = n.filter(function (e) {
                  return !lt(e, t)
                })
              },
              i = 0,
              o = t.elements;
            i < o.length;
            i++
          )
            r(o[i])
          return { arrayValue: { values: n } }
        }
        var je = (function (t) {
          function e(e, n) {
            var r = this
            return ((r = t.call(this) || this).Kt = e), (r.Qt = n), r
          }
          return Object(h.c)(e, t), e
        })(be)
        function Se(t) {
          return it(t.integerValue || t.doubleValue)
        }
        function Ae(t) {
          return wt(t) && t.arrayValue.values ? t.arrayValue.values.slice() : []
        }
        var xe = function (t, e) {
            ;(this.field = t), (this.transform = e)
          },
          De = function (t, e) {
            ;(this.version = t), (this.transformResults = e)
          },
          ke = (function () {
            function t(t, e) {
              ;(this.updateTime = t), (this.exists = e)
            }
            return (
              (t.Wt = function () {
                return new t()
              }),
              (t.exists = function (e) {
                return new t(void 0, e)
              }),
              (t.updateTime = function (e) {
                return new t(e)
              }),
              Object.defineProperty(t.prototype, 'jt', {
                get: function () {
                  return void 0 === this.updateTime && void 0 === this.exists
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.isEqual = function (t) {
                return (
                  this.exists === t.exists &&
                  (this.updateTime
                    ? !!t.updateTime && this.updateTime.isEqual(t.updateTime)
                    : !t.updateTime)
                )
              }),
              t
            )
          })()
        function Ce(t, e) {
          return void 0 !== t.updateTime
            ? e instanceof St && e.version.isEqual(t.updateTime)
            : void 0 === t.exists || t.exists === e instanceof St
        }
        var Pe = function () {}
        function Le(t, e, n) {
          return t instanceof Fe
            ? (function (t, e, n) {
                var r = t.value
                if (n.transformResults) {
                  var i = Ge(t.fieldTransforms, e, n.transformResults)
                  r = Be(t.fieldTransforms, r, i)
                }
                return new St(t.key, n.version, r, {
                  hasCommittedMutations: !0,
                })
              })(t, e, n)
            : t instanceof qe
            ? (function (t, e, n) {
                if (!Ce(t.Gt, e)) return new xt(t.key, n.version)
                var r = ze(
                  t,
                  e,
                  n.transformResults
                    ? Ge(t.fieldTransforms, e, n.transformResults)
                    : []
                )
                return new St(t.key, n.version, r, {
                  hasCommittedMutations: !0,
                })
              })(t, e, n)
            : (function (t, e, n) {
                return new At(t.key, n.version, { hasCommittedMutations: !0 })
              })(t, 0, n)
        }
        function Re(t, e, n, r) {
          return t instanceof Fe
            ? (function (t, e, n, r) {
                if (!Ce(t.Gt, e)) return e
                var i = t.value,
                  o = He(t.fieldTransforms, n, e)
                i = Be(t.fieldTransforms, i, o)
                var u = Ue(e)
                return new St(t.key, u, i, { bt: !0 })
              })(t, e, r)
            : t instanceof qe
            ? (function (t, e, n, r) {
                if (!Ce(t.Gt, e)) return e
                var i = Ue(e),
                  o = ze(t, e, He(t.fieldTransforms, n, e))
                return new St(t.key, i, o, { bt: !0 })
              })(t, e, r)
            : (function (t, e) {
                return Ce(t.Gt, e) ? new At(t.key, K.min()) : e
              })(t, e)
        }
        function Ve(t, e) {
          return (function (t, e) {
            for (var n = null, r = 0, i = t; r < i.length; r++) {
              var o = i[r],
                u = e instanceof St ? e.field(o.field) : void 0,
                s = Ie(o.transform, u || null)
              null != s &&
                (n = null == n ? new Ot().set(o.field, s) : n.set(o.field, s))
            }
            return n ? n.yt() : null
          })(t.fieldTransforms, e)
        }
        function Me(t, e) {
          return (
            t.type === e.type &&
            !!t.key.isEqual(e.key) &&
            !!t.Gt.isEqual(e.Gt) &&
            !!(function (t, e) {
              return (
                (void 0 === t && void 0 === e) ||
                (!(!t || !e) &&
                  N(t, e, function (t, e) {
                    return (function (t, e) {
                      return (
                        t.field.isEqual(e.field) &&
                        (function (t, e) {
                          return (t instanceof Ee && e instanceof Ee) ||
                            (t instanceof Oe && e instanceof Oe)
                            ? N(t.elements, e.elements, lt)
                            : t instanceof je && e instanceof je
                            ? lt(t.Qt, e.Qt)
                            : t instanceof _e && e instanceof _e
                        })(t.transform, e.transform)
                      )
                    })(t, e)
                  }))
              )
            })(t.fieldTransforms, e.fieldTransforms) &&
            (0 === t.type
              ? t.value.isEqual(e.value)
              : 1 !== t.type || (t.data.isEqual(e.data) && t.zt.isEqual(e.zt)))
          )
        }
        function Ue(t) {
          return t instanceof St ? t.version : K.min()
        }
        var Fe = (function (t) {
            function e(e, n, r, i) {
              void 0 === i && (i = [])
              var o = this
              return (
                ((o = t.call(this) || this).key = e),
                (o.value = n),
                (o.Gt = r),
                (o.fieldTransforms = i),
                (o.type = 0),
                o
              )
            }
            return Object(h.c)(e, t), e
          })(Pe),
          qe = (function (t) {
            function e(e, n, r, i, o) {
              void 0 === o && (o = [])
              var u = this
              return (
                ((u = t.call(this) || this).key = e),
                (u.data = n),
                (u.zt = r),
                (u.Gt = i),
                (u.fieldTransforms = o),
                (u.type = 1),
                u
              )
            }
            return Object(h.c)(e, t), e
          })(Pe)
        function ze(t, e, n) {
          var r
          return (
            (r = (function (t, e) {
              var n = new Ot(e)
              return (
                t.zt.fields.forEach(function (e) {
                  if (!e.nt()) {
                    var r = t.data.field(e)
                    null !== r ? n.set(e, r) : n.delete(e)
                  }
                }),
                n.yt()
              )
            })(t, (r = e instanceof St ? e.data() : Tt.empty()))),
            Be(t.fieldTransforms, r, n)
          )
        }
        function Ge(t, e, n) {
          var r = []
          I(t.length === n.length)
          for (var i = 0; i < n.length; i++) {
            var o = t[i],
              u = o.transform,
              s = null
            e instanceof St && (s = e.field(o.field)), r.push(we(u, s, n[i]))
          }
          return r
        }
        function He(t, e, n, r) {
          for (var i = [], o = 0, u = t; o < u.length; o++) {
            var s = u[o],
              a = s.transform,
              c = null
            n instanceof St && (c = n.field(s.field)), i.push(me(a, c, e))
          }
          return i
        }
        function Be(t, e, n) {
          for (var r = new Ot(e), i = 0; i < t.length; i++) {
            var o = t[i]
            r.set(o.field, n[i])
          }
          return r.yt()
        }
        var Ke,
          Je,
          We = (function (t) {
            function e(e, n) {
              var r = this
              return (
                ((r = t.call(this) || this).key = e),
                (r.Gt = n),
                (r.type = 2),
                (r.fieldTransforms = []),
                r
              )
            }
            return Object(h.c)(e, t), e
          })(Pe),
          Xe = (function (t) {
            function e(e, n) {
              var r = this
              return (
                ((r = t.call(this) || this).key = e),
                (r.Gt = n),
                (r.type = 3),
                (r.fieldTransforms = []),
                r
              )
            }
            return Object(h.c)(e, t), e
          })(Pe),
          Ye = function (t) {
            this.count = t
          }
        function Qe(t) {
          switch (t) {
            case A.OK:
              return w()
            case A.CANCELLED:
            case A.UNKNOWN:
            case A.DEADLINE_EXCEEDED:
            case A.RESOURCE_EXHAUSTED:
            case A.INTERNAL:
            case A.UNAVAILABLE:
            case A.UNAUTHENTICATED:
              return !1
            case A.INVALID_ARGUMENT:
            case A.NOT_FOUND:
            case A.ALREADY_EXISTS:
            case A.PERMISSION_DENIED:
            case A.FAILED_PRECONDITION:
            case A.ABORTED:
            case A.OUT_OF_RANGE:
            case A.UNIMPLEMENTED:
            case A.DATA_LOSS:
              return !0
            default:
              return w()
          }
        }
        function $e(t) {
          if (void 0 === t) return v('GRPC error has no .code'), A.UNKNOWN
          switch (t) {
            case Ke.OK:
              return A.OK
            case Ke.CANCELLED:
              return A.CANCELLED
            case Ke.UNKNOWN:
              return A.UNKNOWN
            case Ke.DEADLINE_EXCEEDED:
              return A.DEADLINE_EXCEEDED
            case Ke.RESOURCE_EXHAUSTED:
              return A.RESOURCE_EXHAUSTED
            case Ke.INTERNAL:
              return A.INTERNAL
            case Ke.UNAVAILABLE:
              return A.UNAVAILABLE
            case Ke.UNAUTHENTICATED:
              return A.UNAUTHENTICATED
            case Ke.INVALID_ARGUMENT:
              return A.INVALID_ARGUMENT
            case Ke.NOT_FOUND:
              return A.NOT_FOUND
            case Ke.ALREADY_EXISTS:
              return A.ALREADY_EXISTS
            case Ke.PERMISSION_DENIED:
              return A.PERMISSION_DENIED
            case Ke.FAILED_PRECONDITION:
              return A.FAILED_PRECONDITION
            case Ke.ABORTED:
              return A.ABORTED
            case Ke.OUT_OF_RANGE:
              return A.OUT_OF_RANGE
            case Ke.UNIMPLEMENTED:
              return A.UNIMPLEMENTED
            case Ke.DATA_LOSS:
              return A.DATA_LOSS
            default:
              return w()
          }
        }
        ;((Je = Ke || (Ke = {}))[(Je.OK = 0)] = 'OK'),
          (Je[(Je.CANCELLED = 1)] = 'CANCELLED'),
          (Je[(Je.UNKNOWN = 2)] = 'UNKNOWN'),
          (Je[(Je.INVALID_ARGUMENT = 3)] = 'INVALID_ARGUMENT'),
          (Je[(Je.DEADLINE_EXCEEDED = 4)] = 'DEADLINE_EXCEEDED'),
          (Je[(Je.NOT_FOUND = 5)] = 'NOT_FOUND'),
          (Je[(Je.ALREADY_EXISTS = 6)] = 'ALREADY_EXISTS'),
          (Je[(Je.PERMISSION_DENIED = 7)] = 'PERMISSION_DENIED'),
          (Je[(Je.UNAUTHENTICATED = 16)] = 'UNAUTHENTICATED'),
          (Je[(Je.RESOURCE_EXHAUSTED = 8)] = 'RESOURCE_EXHAUSTED'),
          (Je[(Je.FAILED_PRECONDITION = 9)] = 'FAILED_PRECONDITION'),
          (Je[(Je.ABORTED = 10)] = 'ABORTED'),
          (Je[(Je.OUT_OF_RANGE = 11)] = 'OUT_OF_RANGE'),
          (Je[(Je.UNIMPLEMENTED = 12)] = 'UNIMPLEMENTED'),
          (Je[(Je.INTERNAL = 13)] = 'INTERNAL'),
          (Je[(Je.UNAVAILABLE = 14)] = 'UNAVAILABLE'),
          (Je[(Je.DATA_LOSS = 15)] = 'DATA_LOSS')
        var Ze = (function () {
            function t(t, e) {
              ;(this.J = t), (this.root = e || en.EMPTY)
            }
            return (
              (t.prototype.Ht = function (e, n) {
                return new t(
                  this.J,
                  this.root.Ht(e, n, this.J).copy(null, null, en.Jt, null, null)
                )
              }),
              (t.prototype.remove = function (e) {
                return new t(
                  this.J,
                  this.root
                    .remove(e, this.J)
                    .copy(null, null, en.Jt, null, null)
                )
              }),
              (t.prototype.get = function (t) {
                for (var e = this.root; !e.nt(); ) {
                  var n = this.J(t, e.key)
                  if (0 === n) return e.value
                  n < 0 ? (e = e.left) : n > 0 && (e = e.right)
                }
                return null
              }),
              (t.prototype.indexOf = function (t) {
                for (var e = 0, n = this.root; !n.nt(); ) {
                  var r = this.J(t, n.key)
                  if (0 === r) return e + n.left.size
                  r < 0 ? (n = n.left) : ((e += n.left.size + 1), (n = n.right))
                }
                return -1
              }),
              (t.prototype.nt = function () {
                return this.root.nt()
              }),
              Object.defineProperty(t.prototype, 'size', {
                get: function () {
                  return this.root.size
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.Yt = function () {
                return this.root.Yt()
              }),
              (t.prototype.Xt = function () {
                return this.root.Xt()
              }),
              (t.prototype.Zt = function (t) {
                return this.root.Zt(t)
              }),
              (t.prototype.forEach = function (t) {
                this.Zt(function (e, n) {
                  return t(e, n), !1
                })
              }),
              (t.prototype.toString = function () {
                var t = []
                return (
                  this.Zt(function (e, n) {
                    return t.push(e + ':' + n), !1
                  }),
                  '{' + t.join(', ') + '}'
                )
              }),
              (t.prototype.te = function (t) {
                return this.root.te(t)
              }),
              (t.prototype.ee = function () {
                return new tn(this.root, null, this.J, !1)
              }),
              (t.prototype.ne = function (t) {
                return new tn(this.root, t, this.J, !1)
              }),
              (t.prototype.se = function () {
                return new tn(this.root, null, this.J, !0)
              }),
              (t.prototype.ie = function (t) {
                return new tn(this.root, t, this.J, !0)
              }),
              t
            )
          })(),
          tn = (function () {
            function t(t, e, n, r) {
              ;(this.re = r), (this.oe = [])
              for (var i = 1; !t.nt(); )
                if (((i = e ? n(t.key, e) : 1), r && (i *= -1), i < 0))
                  t = this.re ? t.left : t.right
                else {
                  if (0 === i) {
                    this.oe.push(t)
                    break
                  }
                  this.oe.push(t), (t = this.re ? t.right : t.left)
                }
            }
            return (
              (t.prototype.ce = function () {
                var t = this.oe.pop(),
                  e = { key: t.key, value: t.value }
                if (this.re)
                  for (t = t.left; !t.nt(); ) this.oe.push(t), (t = t.right)
                else for (t = t.right; !t.nt(); ) this.oe.push(t), (t = t.left)
                return e
              }),
              (t.prototype.ae = function () {
                return this.oe.length > 0
              }),
              (t.prototype.ue = function () {
                if (0 === this.oe.length) return null
                var t = this.oe[this.oe.length - 1]
                return { key: t.key, value: t.value }
              }),
              t
            )
          })(),
          en = (function () {
            function t(e, n, r, i, o) {
              ;(this.key = e),
                (this.value = n),
                (this.color = null != r ? r : t.RED),
                (this.left = null != i ? i : t.EMPTY),
                (this.right = null != o ? o : t.EMPTY),
                (this.size = this.left.size + 1 + this.right.size)
            }
            return (
              (t.prototype.copy = function (e, n, r, i, o) {
                return new t(
                  null != e ? e : this.key,
                  null != n ? n : this.value,
                  null != r ? r : this.color,
                  null != i ? i : this.left,
                  null != o ? o : this.right
                )
              }),
              (t.prototype.nt = function () {
                return !1
              }),
              (t.prototype.Zt = function (t) {
                return (
                  this.left.Zt(t) || t(this.key, this.value) || this.right.Zt(t)
                )
              }),
              (t.prototype.te = function (t) {
                return (
                  this.right.te(t) || t(this.key, this.value) || this.left.te(t)
                )
              }),
              (t.prototype.min = function () {
                return this.left.nt() ? this : this.left.min()
              }),
              (t.prototype.Yt = function () {
                return this.min().key
              }),
              (t.prototype.Xt = function () {
                return this.right.nt() ? this.key : this.right.Xt()
              }),
              (t.prototype.Ht = function (t, e, n) {
                var r = this,
                  i = n(t, r.key)
                return (r =
                  i < 0
                    ? r.copy(null, null, null, r.left.Ht(t, e, n), null)
                    : 0 === i
                    ? r.copy(null, e, null, null, null)
                    : r.copy(null, null, null, null, r.right.Ht(t, e, n))).he()
              }),
              (t.prototype.le = function () {
                if (this.left.nt()) return t.EMPTY
                var e = this
                return (
                  e.left._e() || e.left.left._e() || (e = e.fe()),
                  (e = e.copy(null, null, null, e.left.le(), null)).he()
                )
              }),
              (t.prototype.remove = function (e, n) {
                var r,
                  i = this
                if (n(e, i.key) < 0)
                  i.left.nt() ||
                    i.left._e() ||
                    i.left.left._e() ||
                    (i = i.fe()),
                    (i = i.copy(null, null, null, i.left.remove(e, n), null))
                else {
                  if (
                    (i.left._e() && (i = i.de()),
                    i.right.nt() ||
                      i.right._e() ||
                      i.right.left._e() ||
                      (i = i.we()),
                    0 === n(e, i.key))
                  ) {
                    if (i.right.nt()) return t.EMPTY
                    ;(r = i.right.min()),
                      (i = i.copy(r.key, r.value, null, null, i.right.le()))
                  }
                  i = i.copy(null, null, null, null, i.right.remove(e, n))
                }
                return i.he()
              }),
              (t.prototype._e = function () {
                return this.color
              }),
              (t.prototype.he = function () {
                var t = this
                return (
                  t.right._e() && !t.left._e() && (t = t.Ee()),
                  t.left._e() && t.left.left._e() && (t = t.de()),
                  t.left._e() && t.right._e() && (t = t.Te()),
                  t
                )
              }),
              (t.prototype.fe = function () {
                var t = this.Te()
                return (
                  t.right.left._e() &&
                    (t = (t = (t = t.copy(
                      null,
                      null,
                      null,
                      null,
                      t.right.de()
                    )).Ee()).Te()),
                  t
                )
              }),
              (t.prototype.we = function () {
                var t = this.Te()
                return t.left.left._e() && (t = (t = t.de()).Te()), t
              }),
              (t.prototype.Ee = function () {
                var e = this.copy(null, null, t.RED, null, this.right.left)
                return this.right.copy(null, null, this.color, e, null)
              }),
              (t.prototype.de = function () {
                var e = this.copy(null, null, t.RED, this.left.right, null)
                return this.left.copy(null, null, this.color, null, e)
              }),
              (t.prototype.Te = function () {
                var t = this.left.copy(
                    null,
                    null,
                    !this.left.color,
                    null,
                    null
                  ),
                  e = this.right.copy(null, null, !this.right.color, null, null)
                return this.copy(null, null, !this.color, t, e)
              }),
              (t.prototype.Ie = function () {
                var t = this.me()
                return Math.pow(2, t) <= this.size + 1
              }),
              (t.prototype.me = function () {
                if (this._e() && this.left._e()) throw w()
                if (this.right._e()) throw w()
                var t = this.left.me()
                if (t !== this.right.me()) throw w()
                return t + (this._e() ? 0 : 1)
              }),
              t
            )
          })()
        ;(en.EMPTY = null),
          (en.RED = !0),
          (en.Jt = !1),
          (en.EMPTY = new ((function () {
            function t() {
              this.size = 0
            }
            return (
              Object.defineProperty(t.prototype, 'key', {
                get: function () {
                  throw w()
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, 'value', {
                get: function () {
                  throw w()
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, 'color', {
                get: function () {
                  throw w()
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, 'left', {
                get: function () {
                  throw w()
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, 'right', {
                get: function () {
                  throw w()
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.copy = function (t, e, n, r, i) {
                return this
              }),
              (t.prototype.Ht = function (t, e, n) {
                return new en(t, e)
              }),
              (t.prototype.remove = function (t, e) {
                return this
              }),
              (t.prototype.nt = function () {
                return !0
              }),
              (t.prototype.Zt = function (t) {
                return !1
              }),
              (t.prototype.te = function (t) {
                return !1
              }),
              (t.prototype.Yt = function () {
                return null
              }),
              (t.prototype.Xt = function () {
                return null
              }),
              (t.prototype._e = function () {
                return !1
              }),
              (t.prototype.Ie = function () {
                return !0
              }),
              (t.prototype.me = function () {
                return 0
              }),
              t
            )
          })())())
        var nn = (function () {
            function t(t) {
              ;(this.J = t), (this.data = new Ze(this.J))
            }
            return (
              (t.prototype.has = function (t) {
                return null !== this.data.get(t)
              }),
              (t.prototype.first = function () {
                return this.data.Yt()
              }),
              (t.prototype.last = function () {
                return this.data.Xt()
              }),
              Object.defineProperty(t.prototype, 'size', {
                get: function () {
                  return this.data.size
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.indexOf = function (t) {
                return this.data.indexOf(t)
              }),
              (t.prototype.forEach = function (t) {
                this.data.Zt(function (e, n) {
                  return t(e), !1
                })
              }),
              (t.prototype.Ae = function (t, e) {
                for (var n = this.data.ne(t[0]); n.ae(); ) {
                  var r = n.ce()
                  if (this.J(r.key, t[1]) >= 0) return
                  e(r.key)
                }
              }),
              (t.prototype.Re = function (t, e) {
                var n
                for (
                  n = void 0 !== e ? this.data.ne(e) : this.data.ee();
                  n.ae();

                )
                  if (!t(n.ce().key)) return
              }),
              (t.prototype.Pe = function (t) {
                var e = this.data.ne(t)
                return e.ae() ? e.ce().key : null
              }),
              (t.prototype.ee = function () {
                return new rn(this.data.ee())
              }),
              (t.prototype.ne = function (t) {
                return new rn(this.data.ne(t))
              }),
              (t.prototype.add = function (t) {
                return this.copy(this.data.remove(t).Ht(t, !0))
              }),
              (t.prototype.delete = function (t) {
                return this.has(t) ? this.copy(this.data.remove(t)) : this
              }),
              (t.prototype.nt = function () {
                return this.data.nt()
              }),
              (t.prototype.ye = function (t) {
                var e = this
                return (
                  e.size < t.size && ((e = t), (t = this)),
                  t.forEach(function (t) {
                    e = e.add(t)
                  }),
                  e
                )
              }),
              (t.prototype.isEqual = function (e) {
                if (!(e instanceof t)) return !1
                if (this.size !== e.size) return !1
                for (var n = this.data.ee(), r = e.data.ee(); n.ae(); ) {
                  var i = n.ce().key,
                    o = r.ce().key
                  if (0 !== this.J(i, o)) return !1
                }
                return !0
              }),
              (t.prototype.rt = function () {
                var t = []
                return (
                  this.forEach(function (e) {
                    t.push(e)
                  }),
                  t
                )
              }),
              (t.prototype.toString = function () {
                var t = []
                return (
                  this.forEach(function (e) {
                    return t.push(e)
                  }),
                  'SortedSet(' + t.toString() + ')'
                )
              }),
              (t.prototype.copy = function (e) {
                var n = new t(this.J)
                return (n.data = e), n
              }),
              t
            )
          })(),
          rn = (function () {
            function t(t) {
              this.ge = t
            }
            return (
              (t.prototype.ce = function () {
                return this.ge.ce().key
              }),
              (t.prototype.ae = function () {
                return this.ge.ae()
              }),
              t
            )
          })(),
          on = new Ze(Y.J)
        function sn() {
          return on
        }
        function un() {
          return sn()
        }
        var an = new Ze(Y.J)
        function cn() {
          return an
        }
        var hn = new Ze(Y.J)
        function fn() {
          return hn
        }
        var ln = new nn(Y.J)
        function pn() {
          for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
          for (var n = ln, r = 0, i = t; r < i.length; r++) {
            var o = i[r]
            n = n.add(o)
          }
          return n
        }
        var dn = new nn(O)
        function vn() {
          return dn
        }
        var yn = (function () {
            function t(t) {
              ;(this.J = t
                ? function (e, n) {
                    return t(e, n) || Y.J(e.key, n.key)
                  }
                : function (t, e) {
                    return Y.J(t.key, e.key)
                  }),
                (this.Ve = cn()),
                (this.pe = new Ze(this.J))
            }
            return (
              (t.be = function (e) {
                return new t(e.J)
              }),
              (t.prototype.has = function (t) {
                return null != this.Ve.get(t)
              }),
              (t.prototype.get = function (t) {
                return this.Ve.get(t)
              }),
              (t.prototype.first = function () {
                return this.pe.Yt()
              }),
              (t.prototype.last = function () {
                return this.pe.Xt()
              }),
              (t.prototype.nt = function () {
                return this.pe.nt()
              }),
              (t.prototype.indexOf = function (t) {
                var e = this.Ve.get(t)
                return e ? this.pe.indexOf(e) : -1
              }),
              Object.defineProperty(t.prototype, 'size', {
                get: function () {
                  return this.pe.size
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.forEach = function (t) {
                this.pe.Zt(function (e, n) {
                  return t(e), !1
                })
              }),
              (t.prototype.add = function (t) {
                var e = this.delete(t.key)
                return e.copy(e.Ve.Ht(t.key, t), e.pe.Ht(t, null))
              }),
              (t.prototype.delete = function (t) {
                var e = this.get(t)
                return e
                  ? this.copy(this.Ve.remove(t), this.pe.remove(e))
                  : this
              }),
              (t.prototype.isEqual = function (e) {
                if (!(e instanceof t)) return !1
                if (this.size !== e.size) return !1
                for (var n = this.pe.ee(), r = e.pe.ee(); n.ae(); ) {
                  var i = n.ce().key,
                    o = r.ce().key
                  if (!i.isEqual(o)) return !1
                }
                return !0
              }),
              (t.prototype.toString = function () {
                var t = []
                return (
                  this.forEach(function (e) {
                    t.push(e.toString())
                  }),
                  0 === t.length
                    ? 'DocumentSet ()'
                    : 'DocumentSet (\n  ' + t.join('  \n') + '\n)'
                )
              }),
              (t.prototype.copy = function (e, n) {
                var r = new t()
                return (r.J = this.J), (r.Ve = e), (r.pe = n), r
              }),
              t
            )
          })(),
          gn = (function () {
            function t() {
              this.ve = new Ze(Y.J)
            }
            return (
              (t.prototype.track = function (t) {
                var e = t.doc.key,
                  n = this.ve.get(e)
                n
                  ? 0 !== t.type && 3 === n.type
                    ? (this.ve = this.ve.Ht(e, t))
                    : 3 === t.type && 1 !== n.type
                    ? (this.ve = this.ve.Ht(e, { type: n.type, doc: t.doc }))
                    : 2 === t.type && 2 === n.type
                    ? (this.ve = this.ve.Ht(e, { type: 2, doc: t.doc }))
                    : 2 === t.type && 0 === n.type
                    ? (this.ve = this.ve.Ht(e, { type: 0, doc: t.doc }))
                    : 1 === t.type && 0 === n.type
                    ? (this.ve = this.ve.remove(e))
                    : 1 === t.type && 2 === n.type
                    ? (this.ve = this.ve.Ht(e, { type: 1, doc: n.doc }))
                    : 0 === t.type && 1 === n.type
                    ? (this.ve = this.ve.Ht(e, { type: 2, doc: t.doc }))
                    : w()
                  : (this.ve = this.ve.Ht(e, t))
              }),
              (t.prototype.Se = function () {
                var t = []
                return (
                  this.ve.Zt(function (e, n) {
                    t.push(n)
                  }),
                  t
                )
              }),
              t
            )
          })(),
          bn = (function () {
            function t(t, e, n, r, i, o, u, s) {
              ;(this.query = t),
                (this.docs = e),
                (this.De = n),
                (this.docChanges = r),
                (this.Ce = i),
                (this.fromCache = o),
                (this.xe = u),
                (this.Ne = s)
            }
            return (
              (t.Fe = function (e, n, r, i) {
                var o = []
                return (
                  n.forEach(function (t) {
                    o.push({ type: 0, doc: t })
                  }),
                  new t(e, n, yn.be(n), o, r, i, !0, !1)
                )
              }),
              Object.defineProperty(t.prototype, 'hasPendingWrites', {
                get: function () {
                  return !this.Ce.nt()
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.isEqual = function (t) {
                if (
                  !(
                    this.fromCache === t.fromCache &&
                    this.xe === t.xe &&
                    this.Ce.isEqual(t.Ce) &&
                    ae(this.query, t.query) &&
                    this.docs.isEqual(t.docs) &&
                    this.De.isEqual(t.De)
                  )
                )
                  return !1
                var e = this.docChanges,
                  n = t.docChanges
                if (e.length !== n.length) return !1
                for (var r = 0; r < e.length; r++)
                  if (e[r].type !== n[r].type || !e[r].doc.isEqual(n[r].doc))
                    return !1
                return !0
              }),
              t
            )
          })(),
          mn = (function () {
            function t(t, e, n, r, i) {
              ;(this.Mt = t),
                (this.Oe = e),
                (this.ke = n),
                (this.Me = r),
                (this.Le = i)
            }
            return (
              (t.$e = function (e, n) {
                var r = new Map()
                return (
                  r.set(e, wn.Be(e, n)), new t(K.min(), r, vn(), sn(), pn())
                )
              }),
              t
            )
          })(),
          wn = (function () {
            function t(t, e, n, r, i) {
              ;(this.resumeToken = t),
                (this.qe = e),
                (this.Ue = n),
                (this.Qe = r),
                (this.Ke = i)
            }
            return (
              (t.Be = function (e, n) {
                return new t(S.h, n, pn(), pn(), pn())
              }),
              t
            )
          })(),
          In = function (t, e, n, r) {
            ;(this.We = t),
              (this.removedTargetIds = e),
              (this.key = n),
              (this.je = r)
          },
          _n = function (t, e) {
            ;(this.targetId = t), (this.Ge = e)
          },
          En = function (t, e, n, r) {
            void 0 === n && (n = S.h),
              void 0 === r && (r = null),
              (this.state = t),
              (this.targetIds = e),
              (this.resumeToken = n),
              (this.cause = r)
          },
          Tn = (function () {
            function t() {
              ;(this.ze = 0),
                (this.He = jn()),
                (this.Je = S.h),
                (this.Ye = !1),
                (this.Xe = !0)
            }
            return (
              Object.defineProperty(t.prototype, 'qe', {
                get: function () {
                  return this.Ye
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, 'resumeToken', {
                get: function () {
                  return this.Je
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, 'Ze', {
                get: function () {
                  return 0 !== this.ze
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, 'tn', {
                get: function () {
                  return this.Xe
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.en = function (t) {
                t.o() > 0 && ((this.Xe = !0), (this.Je = t))
              }),
              (t.prototype.nn = function () {
                var t = pn(),
                  e = pn(),
                  n = pn()
                return (
                  this.He.forEach(function (r, i) {
                    switch (i) {
                      case 0:
                        t = t.add(r)
                        break
                      case 2:
                        e = e.add(r)
                        break
                      case 1:
                        n = n.add(r)
                        break
                      default:
                        w()
                    }
                  }),
                  new wn(this.Je, this.Ye, t, e, n)
                )
              }),
              (t.prototype.sn = function () {
                ;(this.Xe = !1), (this.He = jn())
              }),
              (t.prototype.rn = function (t, e) {
                ;(this.Xe = !0), (this.He = this.He.Ht(t, e))
              }),
              (t.prototype.on = function (t) {
                ;(this.Xe = !0), (this.He = this.He.remove(t))
              }),
              (t.prototype.cn = function () {
                this.ze += 1
              }),
              (t.prototype.an = function () {
                this.ze -= 1
              }),
              (t.prototype.un = function () {
                ;(this.Xe = !0), (this.Ye = !0)
              }),
              t
            )
          })(),
          On = (function () {
            function t(t) {
              ;(this.hn = t),
                (this.ln = new Map()),
                (this._n = sn()),
                (this.fn = Nn()),
                (this.dn = new nn(O))
            }
            return (
              (t.prototype.wn = function (t) {
                for (var e = 0, n = t.We; e < n.length; e++) {
                  var r = n[e]
                  t.je instanceof St
                    ? this.En(r, t.je)
                    : t.je instanceof At && this.Tn(r, t.key, t.je)
                }
                for (var i = 0, o = t.removedTargetIds; i < o.length; i++)
                  (r = o[i]), this.Tn(r, t.key, t.je)
              }),
              (t.prototype.In = function (t) {
                var e = this
                this.mn(t, function (n) {
                  var r = e.An(n)
                  switch (t.state) {
                    case 0:
                      e.Rn(n) && r.en(t.resumeToken)
                      break
                    case 1:
                      r.an(), r.Ze || r.sn(), r.en(t.resumeToken)
                      break
                    case 2:
                      r.an(), r.Ze || e.removeTarget(n)
                      break
                    case 3:
                      e.Rn(n) && (r.un(), r.en(t.resumeToken))
                      break
                    case 4:
                      e.Rn(n) && (e.Pn(n), r.en(t.resumeToken))
                      break
                    default:
                      w()
                  }
                })
              }),
              (t.prototype.mn = function (t, e) {
                var n = this
                t.targetIds.length > 0
                  ? t.targetIds.forEach(e)
                  : this.ln.forEach(function (t, r) {
                      n.Rn(r) && e(r)
                    })
              }),
              (t.prototype.yn = function (t) {
                var e = t.targetId,
                  n = t.Ge.count,
                  r = this.gn(e)
                if (r) {
                  var i = r.target
                  if (Lt(i))
                    if (0 === n) {
                      var o = new Y(i.path)
                      this.Tn(e, o, new At(o, K.min()))
                    } else I(1 === n)
                  else
                    this.Vn(e) !== n && (this.Pn(e), (this.dn = this.dn.add(e)))
                }
              }),
              (t.prototype.pn = function (t) {
                var e = this,
                  n = new Map()
                this.ln.forEach(function (r, i) {
                  var o = e.gn(i)
                  if (o) {
                    if (r.qe && Lt(o.target)) {
                      var u = new Y(o.target.path)
                      null !== e._n.get(u) ||
                        e.bn(i, u) ||
                        e.Tn(i, u, new At(u, t))
                    }
                    r.tn && (n.set(i, r.nn()), r.sn())
                  }
                })
                var r = pn()
                this.fn.forEach(function (t, n) {
                  var i = !0
                  n.Re(function (t) {
                    var n = e.gn(t)
                    return !n || 2 === n.kt || ((i = !1), !1)
                  }),
                    i && (r = r.add(t))
                })
                var i = new mn(t, n, this.dn, this._n, r)
                return (
                  (this._n = sn()), (this.fn = Nn()), (this.dn = new nn(O)), i
                )
              }),
              (t.prototype.En = function (t, e) {
                if (this.Rn(t)) {
                  var n = this.bn(t, e.key) ? 2 : 0
                  this.An(t).rn(e.key, n),
                    (this._n = this._n.Ht(e.key, e)),
                    (this.fn = this.fn.Ht(e.key, this.vn(e.key).add(t)))
                }
              }),
              (t.prototype.Tn = function (t, e, n) {
                if (this.Rn(t)) {
                  var r = this.An(t)
                  this.bn(t, e) ? r.rn(e, 1) : r.on(e),
                    (this.fn = this.fn.Ht(e, this.vn(e).delete(t))),
                    n && (this._n = this._n.Ht(e, n))
                }
              }),
              (t.prototype.removeTarget = function (t) {
                this.ln.delete(t)
              }),
              (t.prototype.Vn = function (t) {
                var e = this.An(t).nn()
                return this.hn.Sn(t).size + e.Ue.size - e.Ke.size
              }),
              (t.prototype.cn = function (t) {
                this.An(t).cn()
              }),
              (t.prototype.An = function (t) {
                var e = this.ln.get(t)
                return e || ((e = new Tn()), this.ln.set(t, e)), e
              }),
              (t.prototype.vn = function (t) {
                var e = this.fn.get(t)
                return e || ((e = new nn(O)), (this.fn = this.fn.Ht(t, e))), e
              }),
              (t.prototype.Rn = function (t) {
                var e = null !== this.gn(t)
                return (
                  e ||
                    d('WatchChangeAggregator', 'Detected inactive target', t),
                  e
                )
              }),
              (t.prototype.gn = function (t) {
                var e = this.ln.get(t)
                return e && e.Ze ? null : this.hn.Dn(t)
              }),
              (t.prototype.Pn = function (t) {
                var e = this
                this.ln.set(t, new Tn()),
                  this.hn.Sn(t).forEach(function (n) {
                    e.Tn(t, n, null)
                  })
              }),
              (t.prototype.bn = function (t, e) {
                return this.hn.Sn(t).has(e)
              }),
              t
            )
          })()
        function Nn() {
          return new Ze(Y.J)
        }
        function jn() {
          return new Ze(Y.J)
        }
        var Sn = { asc: 'ASCENDING', desc: 'DESCENDING' },
          An = {
            '<': 'LESS_THAN',
            '<=': 'LESS_THAN_OR_EQUAL',
            '>': 'GREATER_THAN',
            '>=': 'GREATER_THAN_OR_EQUAL',
            '==': 'EQUAL',
            '!=': 'NOT_EQUAL',
            'array-contains': 'ARRAY_CONTAINS',
            in: 'IN',
            'not-in': 'NOT_IN',
            'array-contains-any': 'ARRAY_CONTAINS_ANY',
          },
          xn = function (t, e) {
            ;(this.T = t), (this.qt = e)
          }
        function Dn(t, e) {
          return t.qt
            ? new Date(1e3 * e.seconds)
                .toISOString()
                .replace(/\.\d*/, '')
                .replace('Z', '') +
                '.' +
                ('000000000' + e.nanoseconds).slice(-9) +
                'Z'
            : { seconds: '' + e.seconds, nanos: e.nanoseconds }
        }
        function kn(t, e) {
          return t.qt ? e.toBase64() : e.toUint8Array()
        }
        function Cn(t, e) {
          return Dn(t, e.G())
        }
        function Pn(t) {
          return (
            I(!!t),
            K.W(
              (function (t) {
                var e = nt(t)
                return new B(e.seconds, e.nanos)
              })(t)
            )
          )
        }
        function Ln(t, e) {
          return (function (t) {
            return new W(['projects', t.projectId, 'databases', t.database])
          })(t)
            .child('documents')
            .child(e)
            .ot()
        }
        function Rn(t) {
          var e = W.ct(t)
          return I(ir(e)), e
        }
        function Vn(t, e) {
          return Ln(t.T, e.path)
        }
        function Mn(t, e) {
          var n = Rn(e)
          if (n.get(1) !== t.T.projectId)
            throw new x(
              A.INVALID_ARGUMENT,
              'Tried to deserialize key from different project: ' +
                n.get(1) +
                ' vs ' +
                t.T.projectId
            )
          if (n.get(3) !== t.T.database)
            throw new x(
              A.INVALID_ARGUMENT,
              'Tried to deserialize key from different database: ' +
                n.get(3) +
                ' vs ' +
                t.T.database
            )
          return new Y(zn(n))
        }
        function Un(t, e) {
          return Ln(t.T, e)
        }
        function Fn(t) {
          var e = Rn(t)
          return 4 === e.length ? W.at() : zn(e)
        }
        function qn(t) {
          return new W([
            'projects',
            t.T.projectId,
            'databases',
            t.T.database,
          ]).ot()
        }
        function zn(t) {
          return I(t.length > 4 && 'documents' === t.get(4)), t.X(5)
        }
        function Gn(t, e, n) {
          return { name: Vn(t, e), fields: n.proto.mapValue.fields }
        }
        function Hn(t, e, n) {
          var r = Mn(t, e.name),
            i = Pn(e.updateTime),
            o = new Tt({ mapValue: { fields: e.fields } })
          return new St(r, i, o, { hasCommittedMutations: !!n })
        }
        function Bn(t, e) {
          var n
          if (e instanceof Fe) n = { update: Gn(t, e.key, e.value) }
          else if (e instanceof We) n = { delete: Vn(t, e.key) }
          else if (e instanceof qe)
            n = { update: Gn(t, e.key, e.data), updateMask: rr(e.zt) }
          else {
            if (!(e instanceof Xe)) return w()
            n = { verify: Vn(t, e.key) }
          }
          return (
            e.fieldTransforms.length > 0 &&
              (n.updateTransforms = e.fieldTransforms.map(function (t) {
                return (function (t, e) {
                  var n = e.transform
                  if (n instanceof _e)
                    return {
                      fieldPath: e.field.ot(),
                      setToServerValue: 'REQUEST_TIME',
                    }
                  if (n instanceof Ee)
                    return {
                      fieldPath: e.field.ot(),
                      appendMissingElements: { values: n.elements },
                    }
                  if (n instanceof Oe)
                    return {
                      fieldPath: e.field.ot(),
                      removeAllFromArray: { values: n.elements },
                    }
                  if (n instanceof je)
                    return { fieldPath: e.field.ot(), increment: n.Qt }
                  throw w()
                })(0, t)
              })),
            e.Gt.jt ||
              (n.currentDocument = (function (t, e) {
                return void 0 !== e.updateTime
                  ? { updateTime: Cn(t, e.updateTime) }
                  : void 0 !== e.exists
                  ? { exists: e.exists }
                  : w()
              })(t, e.Gt)),
            n
          )
        }
        function tr(t, e) {
          var n = e.currentDocument
              ? (function (t) {
                  return void 0 !== t.updateTime
                    ? ke.updateTime(Pn(t.updateTime))
                    : void 0 !== t.exists
                    ? ke.exists(t.exists)
                    : ke.Wt()
                })(e.currentDocument)
              : ke.Wt(),
            r = e.updateTransforms
              ? e.updateTransforms.map(function (e) {
                  return (function (t, e) {
                    var n = null
                    if ('setToServerValue' in e)
                      I('REQUEST_TIME' === e.setToServerValue), (n = new _e())
                    else if ('appendMissingElements' in e) {
                      var r = e.appendMissingElements.values || []
                      n = new Ee(r)
                    } else if ('removeAllFromArray' in e) {
                      var i = e.removeAllFromArray.values || []
                      n = new Oe(i)
                    } else 'increment' in e ? (n = new je(t, e.increment)) : w()
                    var o = rt._t(e.fieldPath)
                    return new xe(o, n)
                  })(t, e)
                })
              : []
          if (e.update) {
            e.update.name
            var i = Mn(t, e.update.name),
              o = new Tt({ mapValue: { fields: e.update.fields } })
            if (e.updateMask) {
              var u = (function (t) {
                var e = t.fieldPaths || []
                return new tt(
                  e.map(function (t) {
                    return rt._t(t)
                  })
                )
              })(e.updateMask)
              return new qe(i, o, u, n, r)
            }
            return new Fe(i, o, n, r)
          }
          if (e.delete) {
            var s = Mn(t, e.delete)
            return new We(s, n)
          }
          if (e.verify) {
            var a = Mn(t, e.verify)
            return new Xe(a, n)
          }
          return w()
        }
        function Kn(t, e) {
          return { documents: [Un(t, e.path)] }
        }
        function Jn(t, e) {
          var n = { structuredQuery: {} },
            r = e.path
          null !== e.collectionGroup
            ? ((n.parent = Un(t, r)),
              (n.structuredQuery.from = [
                { collectionId: e.collectionGroup, allDescendants: !0 },
              ]))
            : ((n.parent = Un(t, r.Z())),
              (n.structuredQuery.from = [{ collectionId: r.et() }]))
          var i = (function (t) {
            if (0 !== t.length) {
              var e = t.map(function (t) {
                return (function (t) {
                  if ('==' === t.op) {
                    if (_t(t.value))
                      return {
                        unaryFilter: { field: Zn(t.field), op: 'IS_NAN' },
                      }
                    if (It(t.value))
                      return {
                        unaryFilter: { field: Zn(t.field), op: 'IS_NULL' },
                      }
                  } else if ('!=' === t.op) {
                    if (_t(t.value))
                      return {
                        unaryFilter: { field: Zn(t.field), op: 'IS_NOT_NAN' },
                      }
                    if (It(t.value))
                      return {
                        unaryFilter: { field: Zn(t.field), op: 'IS_NOT_NULL' },
                      }
                  }
                  return {
                    fieldFilter: {
                      field: Zn(t.field),
                      op: $n(t.op),
                      value: t.value,
                    },
                  }
                })(t)
              })
              return 1 === e.length
                ? e[0]
                : { compositeFilter: { op: 'AND', filters: e } }
            }
          })(e.filters)
          i && (n.structuredQuery.where = i)
          var o = (function (t) {
            if (0 !== t.length)
              return t.map(function (t) {
                return (function (t) {
                  return { field: Zn(t.field), direction: Qn(t.dir) }
                })(t)
              })
          })(e.orderBy)
          o && (n.structuredQuery.orderBy = o)
          var u = (function (t, e) {
            return t.qt || at(e) ? e : { value: e }
          })(t, e.limit)
          return (
            null !== u && (n.structuredQuery.limit = u),
            e.startAt && (n.structuredQuery.startAt = Xn(e.startAt)),
            e.endAt && (n.structuredQuery.endAt = Xn(e.endAt)),
            n
          )
        }
        function Wn(t) {
          var e = Fn(t.parent),
            n = t.structuredQuery,
            r = n.from ? n.from.length : 0,
            i = null
          if (r > 0) {
            I(1 === r)
            var o = n.from[0]
            o.allDescendants
              ? (i = o.collectionId)
              : (e = e.child(o.collectionId))
          }
          var u = []
          n.where &&
            (u = (function t(e) {
              return e
                ? void 0 !== e.unaryFilter
                  ? [nr(e)]
                  : void 0 !== e.fieldFilter
                  ? [hr(e)]
                  : void 0 !== e.compositeFilter
                  ? e.compositeFilter.filters
                      .map(function (e) {
                        return t(e)
                      })
                      .reduce(function (t, e) {
                        return t.concat(e)
                      })
                  : w()
                : []
            })(n.where))
          var s = []
          n.orderBy &&
            (s = n.orderBy.map(function (t) {
              return (function (t) {
                return new Jt(
                  er(t.field),
                  (function (t) {
                    switch (t) {
                      case 'ASCENDING':
                        return 'asc'
                      case 'DESCENDING':
                        return 'desc'
                      default:
                        return
                    }
                  })(t.direction)
                )
              })(t)
            }))
          var a = null
          n.limit &&
            (a = (function (t) {
              var e
              return at((e = 'object' == typeof t ? t.value : t)) ? null : e
            })(n.limit))
          var c = null
          n.startAt && (c = Yn(n.startAt))
          var h = null
          return n.endAt && (h = Yn(n.endAt)), $t(e, i, s, u, a, 'F', c, h)
        }
        function Xn(t) {
          return { before: t.before, values: t.position }
        }
        function Yn(t) {
          var e = !!t.before,
            n = t.values || []
          return new Bt(n, e)
        }
        function Qn(t) {
          return Sn[t]
        }
        function $n(t) {
          return An[t]
        }
        function Zn(t) {
          return { fieldPath: t.ot() }
        }
        function er(t) {
          return rt._t(t.fieldPath)
        }
        function hr(t) {
          return Rt.create(
            er(t.fieldFilter.field),
            (function (t) {
              switch (t) {
                case 'EQUAL':
                  return '=='
                case 'NOT_EQUAL':
                  return '!='
                case 'GREATER_THAN':
                  return '>'
                case 'GREATER_THAN_OR_EQUAL':
                  return '>='
                case 'LESS_THAN':
                  return '<'
                case 'LESS_THAN_OR_EQUAL':
                  return '<='
                case 'ARRAY_CONTAINS':
                  return 'array-contains'
                case 'IN':
                  return 'in'
                case 'NOT_IN':
                  return 'not-in'
                case 'ARRAY_CONTAINS_ANY':
                  return 'array-contains-any'
                case 'OPERATOR_UNSPECIFIED':
                default:
                  return w()
              }
            })(t.fieldFilter.op),
            t.fieldFilter.value
          )
        }
        function nr(t) {
          switch (t.unaryFilter.op) {
            case 'IS_NAN':
              var e = er(t.unaryFilter.field)
              return Rt.create(e, '==', { doubleValue: NaN })
            case 'IS_NULL':
              var n = er(t.unaryFilter.field)
              return Rt.create(n, '==', { nullValue: 'NULL_VALUE' })
            case 'IS_NOT_NAN':
              var r = er(t.unaryFilter.field)
              return Rt.create(r, '!=', { doubleValue: NaN })
            case 'IS_NOT_NULL':
              var i = er(t.unaryFilter.field)
              return Rt.create(i, '!=', { nullValue: 'NULL_VALUE' })
            case 'OPERATOR_UNSPECIFIED':
            default:
              return w()
          }
        }
        function rr(t) {
          var e = []
          return (
            t.fields.forEach(function (t) {
              return e.push(t.ot())
            }),
            { fieldPaths: e }
          )
        }
        function ir(t) {
          return (
            t.length >= 4 && 'projects' === t.get(0) && 'databases' === t.get(2)
          )
        }
        var or = function () {
            var t = this
            this.promise = new Promise(function (e, n) {
              ;(t.resolve = e), (t.reject = n)
            })
          },
          sr = (function () {
            function t(t) {
              var e = this
              ;(this.Cn = null),
                (this.xn = null),
                (this.result = void 0),
                (this.error = void 0),
                (this.Nn = !1),
                (this.Fn = !1),
                t(
                  function (t) {
                    ;(e.Nn = !0), (e.result = t), e.Cn && e.Cn(t)
                  },
                  function (t) {
                    ;(e.Nn = !0), (e.error = t), e.xn && e.xn(t)
                  }
                )
            }
            return (
              (t.prototype.catch = function (t) {
                return this.next(void 0, t)
              }),
              (t.prototype.next = function (e, n) {
                var r = this
                return (
                  this.Fn && w(),
                  (this.Fn = !0),
                  this.Nn
                    ? this.error
                      ? this.On(n, this.error)
                      : this.kn(e, this.result)
                    : new t(function (t, i) {
                        ;(r.Cn = function (n) {
                          r.kn(e, n).next(t, i)
                        }),
                          (r.xn = function (e) {
                            r.On(n, e).next(t, i)
                          })
                      })
                )
              }),
              (t.prototype.Mn = function () {
                var t = this
                return new Promise(function (e, n) {
                  t.next(e, n)
                })
              }),
              (t.prototype.Ln = function (e) {
                try {
                  var n = e()
                  return n instanceof t ? n : t.resolve(n)
                } catch (e) {
                  return t.reject(e)
                }
              }),
              (t.prototype.kn = function (e, n) {
                return e
                  ? this.Ln(function () {
                      return e(n)
                    })
                  : t.resolve(n)
              }),
              (t.prototype.On = function (e, n) {
                return e
                  ? this.Ln(function () {
                      return e(n)
                    })
                  : t.reject(n)
              }),
              (t.resolve = function (e) {
                return new t(function (t, n) {
                  t(e)
                })
              }),
              (t.reject = function (e) {
                return new t(function (t, n) {
                  n(e)
                })
              }),
              (t.$n = function (e) {
                return new t(function (t, n) {
                  var r = 0,
                    i = 0,
                    o = !1
                  e.forEach(function (e) {
                    ++r,
                      e.next(
                        function () {
                          ++i, o && i === r && t()
                        },
                        function (t) {
                          return n(t)
                        }
                      )
                  }),
                    (o = !0),
                    i === r && t()
                })
              }),
              (t.Bn = function (e) {
                for (
                  var n = t.resolve(!1),
                    r = function (e) {
                      n = n.next(function (n) {
                        return n ? t.resolve(n) : e()
                      })
                    },
                    i = 0,
                    o = e;
                  i < o.length;
                  i++
                )
                  r(o[i])
                return n
              }),
              (t.forEach = function (t, e) {
                var n = this,
                  r = []
                return (
                  t.forEach(function (t, i) {
                    r.push(e.call(n, t, i))
                  }),
                  this.$n(r)
                )
              }),
              t
            )
          })(),
          ur = (function () {
            function t(t, e) {
              var n = this
              ;(this.action = t),
                (this.transaction = e),
                (this.aborted = !1),
                (this.qn = new or()),
                (this.transaction.oncomplete = function () {
                  n.qn.resolve()
                }),
                (this.transaction.onabort = function () {
                  e.error ? n.qn.reject(new br(t, e.error)) : n.qn.resolve()
                }),
                (this.transaction.onerror = function (e) {
                  var r = vr(e.target.error)
                  n.qn.reject(new br(t, r))
                })
            }
            return (
              (t.open = function (e, n, r, i) {
                try {
                  return new t(n, e.transaction(i, r))
                } catch (e) {
                  throw new br(n, e)
                }
              }),
              Object.defineProperty(t.prototype, 'Un', {
                get: function () {
                  return this.qn.promise
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.abort = function (t) {
                t && this.qn.reject(t),
                  this.aborted ||
                    (d(
                      'SimpleDb',
                      'Aborting transaction:',
                      t ? t.message : 'Client-initiated abort'
                    ),
                    (this.aborted = !0),
                    this.transaction.abort())
              }),
              (t.prototype.store = function (t) {
                var e = this.transaction.objectStore(t)
                return new lr(e)
              }),
              t
            )
          })(),
          ar = (function () {
            function e(t, n, i) {
              ;(this.name = t),
                (this.version = n),
                (this.Qn = i),
                12.2 === e.Kn(Object(o.g)()) &&
                  v(
                    'Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.'
                  )
            }
            return (
              (e.delete = function (t) {
                return (
                  d('SimpleDb', 'Removing database:', t),
                  pr(window.indexedDB.deleteDatabase(t)).Mn()
                )
              }),
              (e.Wn = function () {
                if ('undefined' == typeof indexedDB) return !1
                if (e.jn()) return !0
                var t = Object(o.g)(),
                  n = e.Kn(t),
                  i = 0 < n && n < 10,
                  r = e.Gn(t),
                  u = 0 < r && r < 4.5
                return !(
                  t.indexOf('MSIE ') > 0 ||
                  t.indexOf('Trident/') > 0 ||
                  t.indexOf('Edge/') > 0 ||
                  i ||
                  u
                )
              }),
              (e.jn = function () {
                var e
                return (
                  void 0 !== t &&
                  'YES' ===
                    (null === (e = t.env) || void 0 === e ? void 0 : e.zn)
                )
              }),
              (e.Hn = function (t, e) {
                return t.store(e)
              }),
              (e.Kn = function (t) {
                var e = t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),
                  n = e ? e[1].split('_').slice(0, 2).join('.') : '-1'
                return Number(n)
              }),
              (e.Gn = function (t) {
                var e = t.match(/Android ([\d.]+)/i),
                  n = e ? e[1].split('.').slice(0, 2).join('.') : '-1'
                return Number(n)
              }),
              (e.prototype.Jn = function (t) {
                return Object(h.b)(this, void 0, void 0, function () {
                  var e,
                    n = this
                  return Object(h.d)(this, function (r) {
                    switch (r.label) {
                      case 0:
                        return this.db
                          ? [3, 2]
                          : (d('SimpleDb', 'Opening database:', this.name),
                            (e = this),
                            [
                              4,
                              new Promise(function (e, r) {
                                var i = indexedDB.open(n.name, n.version)
                                ;(i.onsuccess = function (t) {
                                  var n = t.target.result
                                  e(n)
                                }),
                                  (i.onblocked = function () {
                                    r(
                                      new br(
                                        t,
                                        'Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed.'
                                      )
                                    )
                                  }),
                                  (i.onerror = function (e) {
                                    var n = e.target.error
                                    'VersionError' === n.name
                                      ? r(
                                          new x(
                                            A.FAILED_PRECONDITION,
                                            'A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.'
                                          )
                                        )
                                      : r(new br(t, n))
                                  }),
                                  (i.onupgradeneeded = function (t) {
                                    d(
                                      'SimpleDb',
                                      'Database "' +
                                        n.name +
                                        '" requires upgrade from version:',
                                      t.oldVersion
                                    )
                                    var e = t.target.result
                                    n.Qn.Yn(
                                      e,
                                      i.transaction,
                                      t.oldVersion,
                                      n.version
                                    ).next(function () {
                                      d(
                                        'SimpleDb',
                                        'Database upgrade to version ' +
                                          n.version +
                                          ' complete'
                                      )
                                    })
                                  })
                              }),
                            ])
                      case 1:
                        ;(e.db = r.sent()), (r.label = 2)
                      case 2:
                        return [
                          2,
                          (this.Xn &&
                            (this.db.onversionchange = function (t) {
                              return n.Xn(t)
                            }),
                          this.db),
                        ]
                    }
                  })
                })
              }),
              (e.prototype.Zn = function (t) {
                ;(this.Xn = t),
                  this.db &&
                    (this.db.onversionchange = function (e) {
                      return t(e)
                    })
              }),
              (e.prototype.runTransaction = function (t, e, n, r) {
                return Object(h.b)(this, void 0, void 0, function () {
                  var i, o, u, s, a
                  return Object(h.d)(this, function (c) {
                    switch (c.label) {
                      case 0:
                        ;(i = 'readonly' === e),
                          (o = 0),
                          (u = function () {
                            var e, u, a, c, f
                            return Object(h.d)(this, function (h) {
                              switch (h.label) {
                                case 0:
                                  ++o, (h.label = 1)
                                case 1:
                                  return h.trys.push([1, 4, , 5]), [4, s.Jn(t)]
                                case 2:
                                  return (
                                    (s.db = h.sent()),
                                    (e = ur.open(
                                      s.db,
                                      t,
                                      i ? 'readonly' : 'readwrite',
                                      n
                                    )),
                                    (u = r(e)
                                      .catch(function (t) {
                                        return e.abort(t), sr.reject(t)
                                      })
                                      .Mn()),
                                    (a = {}),
                                    u.catch(function () {}),
                                    [4, e.Un]
                                  )
                                case 3:
                                  return [2, ((a.value = (h.sent(), u)), a)]
                                case 4:
                                  return (
                                    (c = h.sent()),
                                    (f = 'FirebaseError' !== c.name && o < 3),
                                    d(
                                      'SimpleDb',
                                      'Transaction failed with error:',
                                      c.message,
                                      'Retrying:',
                                      f
                                    ),
                                    s.close(),
                                    f
                                      ? [3, 5]
                                      : [2, { value: Promise.reject(c) }]
                                  )
                                case 5:
                                  return [2]
                              }
                            })
                          }),
                          (s = this),
                          (c.label = 1)
                      case 1:
                        return [5, u()]
                      case 2:
                        if ('object' == typeof (a = c.sent()))
                          return [2, a.value]
                        c.label = 3
                      case 3:
                        return [3, 1]
                      case 4:
                        return [2]
                    }
                  })
                })
              }),
              (e.prototype.close = function () {
                this.db && this.db.close(), (this.db = void 0)
              }),
              e
            )
          })(),
          cr = (function () {
            function t(t) {
              ;(this.ts = t), (this.es = !1), (this.ns = null)
            }
            return (
              Object.defineProperty(t.prototype, 'Nn', {
                get: function () {
                  return this.es
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, 'ss', {
                get: function () {
                  return this.ns
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, 'cursor', {
                set: function (t) {
                  this.ts = t
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.done = function () {
                this.es = !0
              }),
              (t.prototype.rs = function (t) {
                this.ns = t
              }),
              (t.prototype.delete = function () {
                return pr(this.ts.delete())
              }),
              t
            )
          })(),
          br = (function (t) {
            function e(e, n) {
              var r = this
              return (
                ((r =
                  t.call(
                    this,
                    A.UNAVAILABLE,
                    "IndexedDB transaction '" + e + "' failed: " + n
                  ) || this).name = 'IndexedDbTransactionError'),
                r
              )
            }
            return Object(h.c)(e, t), e
          })(x)
        function fr(t) {
          return 'IndexedDbTransactionError' === t.name
        }
        var lr = (function () {
          function t(t) {
            this.store = t
          }
          return (
            (t.prototype.put = function (t, e) {
              var n
              return (
                void 0 !== e
                  ? (d('SimpleDb', 'PUT', this.store.name, t, e),
                    (n = this.store.put(e, t)))
                  : (d('SimpleDb', 'PUT', this.store.name, '<auto-key>', t),
                    (n = this.store.put(t))),
                pr(n)
              )
            }),
            (t.prototype.add = function (t) {
              return (
                d('SimpleDb', 'ADD', this.store.name, t, t),
                pr(this.store.add(t))
              )
            }),
            (t.prototype.get = function (t) {
              var e = this
              return pr(this.store.get(t)).next(function (n) {
                return (
                  void 0 === n && (n = null),
                  d('SimpleDb', 'GET', e.store.name, t, n),
                  n
                )
              })
            }),
            (t.prototype.delete = function (t) {
              return (
                d('SimpleDb', 'DELETE', this.store.name, t),
                pr(this.store.delete(t))
              )
            }),
            (t.prototype.count = function () {
              return (
                d('SimpleDb', 'COUNT', this.store.name), pr(this.store.count())
              )
            }),
            (t.prototype.os = function (t, e) {
              var n = this.cursor(this.options(t, e)),
                r = []
              return this.cs(n, function (t, e) {
                r.push(e)
              }).next(function () {
                return r
              })
            }),
            (t.prototype.us = function (t, e) {
              d('SimpleDb', 'DELETE ALL', this.store.name)
              var n = this.options(t, e)
              n.hs = !1
              var r = this.cursor(n)
              return this.cs(r, function (t, e, n) {
                return n.delete()
              })
            }),
            (t.prototype.ls = function (t, e) {
              var n
              e ? (n = t) : ((n = {}), (e = t))
              var r = this.cursor(n)
              return this.cs(r, e)
            }),
            (t.prototype._s = function (t) {
              var e = this.cursor({})
              return new sr(function (n, r) {
                ;(e.onerror = function (t) {
                  var e = vr(t.target.error)
                  r(e)
                }),
                  (e.onsuccess = function (e) {
                    var r = e.target.result
                    r
                      ? t(r.primaryKey, r.value).next(function (t) {
                          t ? r.continue() : n()
                        })
                      : n()
                  })
              })
            }),
            (t.prototype.cs = function (t, e) {
              var n = []
              return new sr(function (r, i) {
                ;(t.onerror = function (t) {
                  i(t.target.error)
                }),
                  (t.onsuccess = function (t) {
                    var i = t.target.result
                    if (i) {
                      var o = new cr(i),
                        u = e(i.primaryKey, i.value, o)
                      if (u instanceof sr) {
                        var s = u.catch(function (t) {
                          return o.done(), sr.reject(t)
                        })
                        n.push(s)
                      }
                      o.Nn
                        ? r()
                        : null === o.ss
                        ? i.continue()
                        : i.continue(o.ss)
                    } else r()
                  })
              }).next(function () {
                return sr.$n(n)
              })
            }),
            (t.prototype.options = function (t, e) {
              var n = void 0
              return (
                void 0 !== t && ('string' == typeof t ? (n = t) : (e = t)),
                { index: n, range: e }
              )
            }),
            (t.prototype.cursor = function (t) {
              var e = 'next'
              if ((t.reverse && (e = 'prev'), t.index)) {
                var n = this.store.index(t.index)
                return t.hs
                  ? n.openKeyCursor(t.range, e)
                  : n.openCursor(t.range, e)
              }
              return this.store.openCursor(t.range, e)
            }),
            t
          )
        })()
        function pr(t) {
          return new sr(function (e, n) {
            ;(t.onsuccess = function (t) {
              var n = t.target.result
              e(n)
            }),
              (t.onerror = function (t) {
                var e = vr(t.target.error)
                n(e)
              })
          })
        }
        var dr = !1
        function vr(t) {
          var e = ar.Kn(Object(o.g)())
          if (e >= 12.2 && e < 13) {
            var n =
              'An internal error was encountered in the Indexed Database server'
            if (t.message.indexOf(n) >= 0) {
              var i = new x(
                'internal',
                "IOS_INDEXEDDB_BUG1: IndexedDb has thrown '" +
                  n +
                  "'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround."
              )
              return (
                dr ||
                  ((dr = !0),
                  setTimeout(function () {
                    throw i
                  }, 0)),
                i
              )
            }
          }
          return t
        }
        var yr = (function () {
          function t(t, e, n, r, i) {
            ;(this.fs = t),
              (this.ds = e),
              (this.ws = n),
              (this.op = r),
              (this.Es = i),
              (this.Ts = new or()),
              (this.then = this.Ts.promise.then.bind(this.Ts.promise)),
              this.Ts.promise.catch(function (t) {})
          }
          return (
            (t.Is = function (e, n, r, i, o) {
              var u = new t(e, n, Date.now() + r, i, o)
              return u.start(r), u
            }),
            (t.prototype.start = function (t) {
              var e = this
              this.As = setTimeout(function () {
                return e.Rs()
              }, t)
            }),
            (t.prototype.Ps = function () {
              return this.Rs()
            }),
            (t.prototype.cancel = function (t) {
              null !== this.As &&
                (this.clearTimeout(),
                this.Ts.reject(
                  new x(
                    A.CANCELLED,
                    'Operation cancelled' + (t ? ': ' + t : '')
                  )
                ))
            }),
            (t.prototype.Rs = function () {
              var t = this
              this.fs.ys(function () {
                return null !== t.As
                  ? (t.clearTimeout(),
                    t.op().then(function (e) {
                      return t.Ts.resolve(e)
                    }))
                  : Promise.resolve()
              })
            }),
            (t.prototype.clearTimeout = function () {
              null !== this.As &&
                (this.Es(this), clearTimeout(this.As), (this.As = null))
            }),
            t
          )
        })()
        function gr(t, e) {
          if ((v('AsyncQueue', e + ': ' + t), fr(t)))
            return new x(A.UNAVAILABLE, e + ': ' + t)
          throw t
        }
        var mr =
            'The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.',
          wr = (function () {
            function t() {
              this.gs = []
            }
            return (
              (t.prototype.Vs = function (t) {
                this.gs.push(t)
              }),
              (t.prototype.ps = function () {
                this.gs.forEach(function (t) {
                  return t()
                })
              }),
              t
            )
          })()
        function Ir(t) {
          for (var e = '', n = 0; n < t.length; n++)
            e.length > 0 && (e = Er(e)), (e = _r(t.get(n), e))
          return Er(e)
        }
        function _r(t, e) {
          for (var n = e, r = t.length, i = 0; i < r; i++) {
            var o = t.charAt(i)
            switch (o) {
              case '\0':
                n += ''
                break
              case '':
                n += ''
                break
              default:
                n += o
            }
          }
          return n
        }
        function Er(t) {
          return t + ''
        }
        function Tr(t) {
          var e = t.length
          if ((I(e >= 2), 2 === e))
            return I('' === t.charAt(0) && '' === t.charAt(1)), W.at()
          for (var n = e - 2, r = [], i = '', o = 0; o < e; ) {
            var u = t.indexOf('', o)
            switch (((u < 0 || u > n) && w(), t.charAt(u + 1))) {
              case '':
                var s = t.substring(o, u),
                  a = void 0
                0 === i.length ? (a = s) : ((a = i += s), (i = '')), r.push(a)
                break
              case '':
                ;(i += t.substring(o, u)), (i += '\0')
                break
              case '':
                i += t.substring(o, u + 1)
                break
              default:
                w()
            }
            o = u + 2
          }
          return new W(r)
        }
        var Or = function (t, e) {
            ;(this.seconds = t), (this.nanoseconds = e)
          },
          Nr = function (t, e, n) {
            ;(this.ownerId = t),
              (this.allowTabSynchronization = e),
              (this.leaseTimestampMs = n)
          }
        ;(Nr.store = 'owner'), (Nr.key = 'owner')
        var jr = function (t, e, n) {
          ;(this.userId = t),
            (this.lastAcknowledgedBatchId = e),
            (this.lastStreamToken = n)
        }
        ;(jr.store = 'mutationQueues'), (jr.keyPath = 'userId')
        var Sr = function (t, e, n, r, i) {
          ;(this.userId = t),
            (this.batchId = e),
            (this.localWriteTimeMs = n),
            (this.baseMutations = r),
            (this.mutations = i)
        }
        ;(Sr.store = 'mutations'),
          (Sr.keyPath = 'batchId'),
          (Sr.userMutationsIndex = 'userMutationsIndex'),
          (Sr.userMutationsKeyPath = ['userId', 'batchId'])
        var Ar = (function () {
          function t() {}
          return (
            (t.prefixForUser = function (t) {
              return [t]
            }),
            (t.prefixForPath = function (t, e) {
              return [t, Ir(e)]
            }),
            (t.key = function (t, e, n) {
              return [t, Ir(e), n]
            }),
            t
          )
        })()
        ;(Ar.store = 'documentMutations'), (Ar.PLACEHOLDER = new Ar())
        var xr = function (t, e) {
            ;(this.path = t), (this.readTime = e)
          },
          Dr = function (t, e) {
            ;(this.path = t), (this.version = e)
          },
          kr = function (t, e, n, r, i, o) {
            ;(this.unknownDocument = t),
              (this.noDocument = e),
              (this.document = n),
              (this.hasCommittedMutations = r),
              (this.readTime = i),
              (this.parentPath = o)
          }
        ;(kr.store = 'remoteDocuments'),
          (kr.readTimeIndex = 'readTimeIndex'),
          (kr.readTimeIndexPath = 'readTime'),
          (kr.collectionReadTimeIndex = 'collectionReadTimeIndex'),
          (kr.collectionReadTimeIndexPath = ['parentPath', 'readTime'])
        var Cr = function (t) {
          this.byteSize = t
        }
        ;(Cr.store = 'remoteDocumentGlobal'),
          (Cr.key = 'remoteDocumentGlobalKey')
        var Pr = function (t, e, n, r, i, o, u) {
          ;(this.targetId = t),
            (this.canonicalId = e),
            (this.readTime = n),
            (this.resumeToken = r),
            (this.lastListenSequenceNumber = i),
            (this.lastLimboFreeSnapshotVersion = o),
            (this.query = u)
        }
        ;(Pr.store = 'targets'),
          (Pr.keyPath = 'targetId'),
          (Pr.queryTargetsIndexName = 'queryTargetsIndex'),
          (Pr.queryTargetsKeyPath = ['canonicalId', 'targetId'])
        var Lr = function (t, e, n) {
          ;(this.targetId = t), (this.path = e), (this.sequenceNumber = n)
        }
        ;(Lr.store = 'targetDocuments'),
          (Lr.keyPath = ['targetId', 'path']),
          (Lr.documentTargetsIndex = 'documentTargetsIndex'),
          (Lr.documentTargetsKeyPath = ['path', 'targetId'])
        var Rr = function (t, e, n, r) {
          ;(this.highestTargetId = t),
            (this.highestListenSequenceNumber = e),
            (this.lastRemoteSnapshotVersion = n),
            (this.targetCount = r)
        }
        ;(Rr.key = 'targetGlobalKey'), (Rr.store = 'targetGlobal')
        var Vr = function (t, e) {
          ;(this.collectionId = t), (this.parent = e)
        }
        ;(Vr.store = 'collectionParents'),
          (Vr.keyPath = ['collectionId', 'parent'])
        var Mr = function (t, e, n, r) {
          ;(this.clientId = t),
            (this.updateTimeMs = e),
            (this.networkEnabled = n),
            (this.inForeground = r)
        }
        ;(Mr.store = 'clientMetadata'), (Mr.keyPath = 'clientId')
        var Ur = function (t, e, n) {
          ;(this.bundleId = t), (this.createTime = e), (this.version = n)
        }
        ;(Ur.store = 'bundles'), (Ur.keyPath = 'bundleId')
        var Fr = function (t, e, n) {
          ;(this.name = t), (this.readTime = e), (this.bundledQuery = n)
        }
        ;(Fr.store = 'namedQueries'), (Fr.keyPath = 'name')
        var qr = Object(h.g)(
            Object(h.g)(
              Object(h.g)(
                Object(h.g)(
                  [
                    jr.store,
                    Sr.store,
                    Ar.store,
                    kr.store,
                    Pr.store,
                    Nr.store,
                    Rr.store,
                    Lr.store,
                  ],
                  [Mr.store]
                ),
                [Cr.store]
              ),
              [Vr.store]
            ),
            [Ur.store, Fr.store]
          ),
          zr = (function (t) {
            function e(e, n) {
              var r = this
              return ((r = t.call(this) || this).bs = e), (r.vs = n), r
            }
            return Object(h.c)(e, t), e
          })(wr)
        function Gr(t, e) {
          var n = _(t)
          return ar.Hn(n.bs, e)
        }
        var Hr = (function () {
            function t(t, e, n, r) {
              ;(this.batchId = t),
                (this.Ss = e),
                (this.baseMutations = n),
                (this.mutations = r)
            }
            return (
              (t.prototype.Ds = function (t, e, n) {
                for (var r = n.Cs, i = 0; i < this.mutations.length; i++) {
                  var o = this.mutations[i]
                  o.key.isEqual(t) && (e = Le(o, e, r[i]))
                }
                return e
              }),
              (t.prototype.xs = function (t, e) {
                for (var n = 0, r = this.baseMutations; n < r.length; n++)
                  (u = r[n]).key.isEqual(t) && (e = Re(u, e, 0, this.Ss))
                for (var i = 0, o = this.mutations; i < o.length; i++) {
                  var u
                  ;(u = o[i]).key.isEqual(t) && (e = Re(u, e, 0, this.Ss))
                }
                return e
              }),
              (t.prototype.Ns = function (t) {
                var e = this,
                  n = t
                return (
                  this.mutations.forEach(function (r) {
                    var i = e.xs(r.key, t.get(r.key))
                    i && (n = n.Ht(r.key, i))
                  }),
                  n
                )
              }),
              (t.prototype.keys = function () {
                return this.mutations.reduce(function (t, e) {
                  return t.add(e.key)
                }, pn())
              }),
              (t.prototype.isEqual = function (t) {
                return (
                  this.batchId === t.batchId &&
                  N(this.mutations, t.mutations, function (t, e) {
                    return Me(t, e)
                  }) &&
                  N(this.baseMutations, t.baseMutations, function (t, e) {
                    return Me(t, e)
                  })
                )
              }),
              t
            )
          })(),
          Br = (function () {
            function t(t, e, n, r) {
              ;(this.batch = t), (this.Fs = e), (this.Cs = n), (this.Os = r)
            }
            return (
              (t.from = function (e, n, r) {
                I(e.mutations.length === r.length)
                for (var i = fn(), o = e.mutations, u = 0; u < o.length; u++)
                  i = i.Ht(o[u].key, r[u].version)
                return new t(e, n, r, i)
              }),
              t
            )
          })(),
          Kr = function (t) {
            this.ks = t
          }
        function Jr(t, e) {
          if (e.document) return Hn(t.ks, e.document, !!e.hasCommittedMutations)
          if (e.noDocument) {
            var n = Y.Tt(e.noDocument.path),
              r = $r(e.noDocument.readTime)
            return new At(n, r, {
              hasCommittedMutations: !!e.hasCommittedMutations,
            })
          }
          if (e.unknownDocument) {
            var i = Y.Tt(e.unknownDocument.path)
            return (r = $r(e.unknownDocument.version)), new xt(i, r)
          }
          return w()
        }
        function Wr(t, e, n) {
          var r = Xr(n),
            i = e.key.path.Z().rt()
          if (e instanceof St) {
            var o = (function (t, e) {
                return {
                  name: Vn(t, e.key),
                  fields: e.vt().mapValue.fields,
                  updateTime: Dn(t, e.version.G()),
                }
              })(t.ks, e),
              u = e.hasCommittedMutations
            return new kr(null, null, o, u, r, i)
          }
          if (e instanceof At) {
            var s = e.key.path.rt(),
              a = Qr(e.version)
            return (
              (u = e.hasCommittedMutations),
              new kr(null, new xr(s, a), null, u, r, i)
            )
          }
          if (e instanceof xt) {
            var c = e.key.path.rt(),
              h = Qr(e.version)
            return new kr(new Dr(c, h), null, null, !0, r, i)
          }
          return w()
        }
        function Xr(t) {
          var e = t.G()
          return [e.seconds, e.nanoseconds]
        }
        function Yr(t) {
          var e = new B(t[0], t[1])
          return K.W(e)
        }
        function Qr(t) {
          var e = t.G()
          return new Or(e.seconds, e.nanoseconds)
        }
        function $r(t) {
          var e = new B(t.seconds, t.nanoseconds)
          return K.W(e)
        }
        function Zr(t, e) {
          for (
            var n = (e.baseMutations || []).map(function (e) {
                return tr(t.ks, e)
              }),
              r = e.mutations.length - 1;
            r >= 0;
            --r
          ) {
            var i = e.mutations[r]
            void 0 !== (null == i ? void 0 : i.transform) &&
              ((e.mutations[r - 1].updateTransforms =
                i.transform.fieldTransforms),
              e.mutations.splice(r, 1),
              --r)
          }
          var o = e.mutations.map(function (e) {
              return tr(t.ks, e)
            }),
            u = B.fromMillis(e.localWriteTimeMs)
          return new Hr(e.batchId, u, n, o)
        }
        function ti(t) {
          var e,
            n,
            r = $r(t.readTime),
            i =
              void 0 !== t.lastLimboFreeSnapshotVersion
                ? $r(t.lastLimboFreeSnapshotVersion)
                : K.min()
          return (
            void 0 !== t.query.documents
              ? (I(1 === (n = t.query).documents.length),
                (e = se(Zt(Fn(n.documents[0])))))
              : (e = (function (t) {
                  return se(Wn(t))
                })(t.query)),
            new de(
              e,
              t.targetId,
              0,
              t.lastListenSequenceNumber,
              r,
              i,
              S.fromBase64String(t.resumeToken)
            )
          )
        }
        function ei(t, e) {
          var n,
            r = Qr(e.Mt),
            i = Qr(e.lastLimboFreeSnapshotVersion)
          n = Lt(e.target) ? Kn(t.ks, e.target) : Jn(t.ks, e.target)
          var o = e.resumeToken.toBase64()
          return new Pr(e.targetId, Ct(e.target), r, o, e.sequenceNumber, i, n)
        }
        function ni(t) {
          var e = Wn({ parent: t.parent, structuredQuery: t.structuredQuery })
          return 'LAST' === t.limitType ? ue(e, e.limit, 'L') : e
        }
        var li = (function () {
          function t() {}
          return (
            (t.prototype.Ms = function (t, e) {
              return ri(t)
                .get(e)
                .next(function (t) {
                  if (t)
                    return {
                      id: (e = t).bundleId,
                      createTime: $r(e.createTime),
                      version: e.version,
                    }
                  var e
                })
            }),
            (t.prototype.Ls = function (t, e) {
              return ri(t).put({
                bundleId: (n = e).id,
                createTime: Qr(Pn(n.createTime)),
                version: n.version,
              })
              var n
            }),
            (t.prototype.$s = function (t, e) {
              return ii(t)
                .get(e)
                .next(function (t) {
                  if (t)
                    return {
                      name: (e = t).name,
                      query: ni(e.bundledQuery),
                      readTime: $r(e.readTime),
                    }
                  var e
                })
            }),
            (t.prototype.Bs = function (t, e) {
              return ii(t).put(
                (function (t) {
                  return {
                    name: t.name,
                    readTime: Qr(Pn(t.readTime)),
                    bundledQuery: t.bundledQuery,
                  }
                })(e)
              )
            }),
            t
          )
        })()
        function ri(t) {
          return Gr(t, Ur.store)
        }
        function ii(t) {
          return Gr(t, Fr.store)
        }
        var oi = (function () {
            function t() {
              this.qs = new si()
            }
            return (
              (t.prototype.Us = function (t, e) {
                return this.qs.add(e), sr.resolve()
              }),
              (t.prototype.Qs = function (t, e) {
                return sr.resolve(this.qs.getEntries(e))
              }),
              t
            )
          })(),
          si = (function () {
            function t() {
              this.index = {}
            }
            return (
              (t.prototype.add = function (t) {
                var e = t.et(),
                  n = t.Z(),
                  r = this.index[e] || new nn(W.J),
                  i = !r.has(n)
                return (this.index[e] = r.add(n)), i
              }),
              (t.prototype.has = function (t) {
                var e = t.et(),
                  n = t.Z(),
                  r = this.index[e]
                return r && r.has(n)
              }),
              (t.prototype.getEntries = function (t) {
                return (this.index[t] || new nn(W.J)).rt()
              }),
              t
            )
          })(),
          ui = (function () {
            function t() {
              this.Ks = new si()
            }
            return (
              (t.prototype.Us = function (t, e) {
                var n = this
                if (!this.Ks.has(e)) {
                  var r = e.et(),
                    i = e.Z()
                  t.Vs(function () {
                    n.Ks.add(e)
                  })
                  var o = { collectionId: r, parent: Ir(i) }
                  return ai(t).put(o)
                }
                return sr.resolve()
              }),
              (t.prototype.Qs = function (t, e) {
                var n = [],
                  r = IDBKeyRange.bound([e, ''], [j(e), ''], !1, !0)
                return ai(t)
                  .os(r)
                  .next(function (t) {
                    for (var r = 0, i = t; r < i.length; r++) {
                      var o = i[r]
                      if (o.collectionId !== e) break
                      n.push(Tr(o.parent))
                    }
                    return n
                  })
              }),
              t
            )
          })()
        function ai(t) {
          return Gr(t, Vr.store)
        }
        var ci = { Ws: !1, js: 0, Gs: 0, zs: 0 },
          hi = (function () {
            function t(t, e, n) {
              ;(this.Hs = t), (this.Js = e), (this.Ys = n)
            }
            return (
              (t.Xs = function (e) {
                return new t(e, t.Zs, t.ti)
              }),
              t
            )
          })()
        function fi(t) {
          return Object(h.b)(this, void 0, void 0, function () {
            return Object(h.d)(this, function (e) {
              if (t.code !== A.FAILED_PRECONDITION || t.message !== mr) throw t
              return d('LocalStore', 'Unexpectedly lost primary lease'), [2]
            })
          })
        }
        ;(hi.Zs = 10),
          (hi.ti = 1e3),
          (hi.ei = new hi(41943040, hi.Zs, hi.ti)),
          (hi.ni = new hi(-1, 0, 0))
        var pi = (function () {
            function t(t, e) {
              ;(this.si = t), (this.ii = e), (this.ri = {})
            }
            return (
              (t.prototype.get = function (t) {
                var e = this.si(t),
                  n = this.ri[e]
                if (void 0 !== n)
                  for (var r = 0, i = n; r < i.length; r++) {
                    var o = i[r],
                      u = o[0],
                      s = o[1]
                    if (this.ii(u, t)) return s
                  }
              }),
              (t.prototype.has = function (t) {
                return void 0 !== this.get(t)
              }),
              (t.prototype.set = function (t, e) {
                var n = this.si(t),
                  r = this.ri[n]
                if (void 0 !== r) {
                  for (var i = 0; i < r.length; i++)
                    if (this.ii(r[i][0], t)) return void (r[i] = [t, e])
                  r.push([t, e])
                } else this.ri[n] = [[t, e]]
              }),
              (t.prototype.delete = function (t) {
                var e = this.si(t),
                  n = this.ri[e]
                if (void 0 === n) return !1
                for (var r = 0; r < n.length; r++)
                  if (this.ii(n[r][0], t))
                    return (
                      1 === n.length ? delete this.ri[e] : n.splice(r, 1), !0
                    )
                return !1
              }),
              (t.prototype.forEach = function (t) {
                $(this.ri, function (e, n) {
                  for (var r = 0, i = n; r < i.length; r++) {
                    var o = i[r],
                      u = o[0],
                      s = o[1]
                    t(u, s)
                  }
                })
              }),
              (t.prototype.nt = function () {
                return Z(this.ri)
              }),
              t
            )
          })(),
          di = (function () {
            function t() {
              ;(this.oi = new pi(
                function (t) {
                  return t.toString()
                },
                function (t, e) {
                  return t.isEqual(e)
                }
              )),
                (this.ci = !1)
            }
            return (
              (t.prototype.ai = function (t) {
                var e = this.oi.get(t)
                return e ? e.readTime : K.min()
              }),
              (t.prototype.ui = function (t, e) {
                this.hi(), this.oi.set(t.key, { li: t, readTime: e })
              }),
              (t.prototype._i = function (t, e) {
                void 0 === e && (e = null),
                  this.hi(),
                  this.oi.set(t, { li: null, readTime: e })
              }),
              (t.prototype.fi = function (t, e) {
                this.hi()
                var n = this.oi.get(e)
                return void 0 !== n ? sr.resolve(n.li) : this.di(t, e)
              }),
              (t.prototype.getEntries = function (t, e) {
                return this.wi(t, e)
              }),
              (t.prototype.apply = function (t) {
                return this.hi(), (this.ci = !0), this.Ei(t)
              }),
              (t.prototype.hi = function () {}),
              t
            )
          })()
        function vi(t, e, n) {
          var r = t.store(Sr.store),
            i = t.store(Ar.store),
            o = [],
            u = IDBKeyRange.only(n.batchId),
            s = 0,
            a = r.ls({ range: u }, function (t, e, n) {
              return s++, n.delete()
            })
          o.push(
            a.next(function () {
              I(1 === s)
            })
          )
          for (var c = [], h = 0, f = n.mutations; h < f.length; h++) {
            var l = f[h],
              p = Ar.key(e, l.key.path, n.batchId)
            o.push(i.delete(p)), c.push(l.key)
          }
          return sr.$n(o).next(function () {
            return c
          })
        }
        function yi(t) {
          var e
          if (t.document) e = t.document
          else if (t.unknownDocument) e = t.unknownDocument
          else {
            if (!t.noDocument) throw w()
            e = t.noDocument
          }
          return JSON.stringify(e).length
        }
        var gi = (function () {
          function t(t, e, n, r) {
            ;(this.userId = t),
              (this.Kt = e),
              (this.Ti = n),
              (this.Ii = r),
              (this.mi = {})
          }
          return (
            (t.Ai = function (e, n, r, i) {
              return I('' !== e.uid), new t(e.A() ? e.uid : '', n, r, i)
            }),
            (t.prototype.Ri = function (t) {
              var e = !0,
                n = IDBKeyRange.bound(
                  [this.userId, Number.NEGATIVE_INFINITY],
                  [this.userId, Number.POSITIVE_INFINITY]
                )
              return mi(t)
                .ls(
                  { index: Sr.userMutationsIndex, range: n },
                  function (t, n, r) {
                    ;(e = !1), r.done()
                  }
                )
                .next(function () {
                  return e
                })
            }),
            (t.prototype.Pi = function (t, e, n, r) {
              var i = this,
                o = wi(t),
                u = mi(t)
              return u.add({}).next(function (s) {
                I('number' == typeof s)
                for (
                  var a = new Hr(s, e, n, r),
                    c = (function (t, e, n) {
                      var r = n.baseMutations.map(function (e) {
                          return Bn(t.ks, e)
                        }),
                        i = n.mutations.map(function (e) {
                          return Bn(t.ks, e)
                        })
                      return new Sr(e, n.batchId, n.Ss.toMillis(), r, i)
                    })(i.Kt, i.userId, a),
                    h = [],
                    f = new nn(function (t, e) {
                      return O(t.ot(), e.ot())
                    }),
                    l = 0,
                    p = r;
                  l < p.length;
                  l++
                ) {
                  var d = p[l],
                    v = Ar.key(i.userId, d.key.path, s)
                  ;(f = f.add(d.key.path.Z())),
                    h.push(u.put(c)),
                    h.push(o.put(v, Ar.PLACEHOLDER))
                }
                return (
                  f.forEach(function (e) {
                    h.push(i.Ti.Us(t, e))
                  }),
                  t.Vs(function () {
                    i.mi[s] = a.keys()
                  }),
                  sr.$n(h).next(function () {
                    return a
                  })
                )
              })
            }),
            (t.prototype.yi = function (t, e) {
              var n = this
              return mi(t)
                .get(e)
                .next(function (t) {
                  return t ? (I(t.userId === n.userId), Zr(n.Kt, t)) : null
                })
            }),
            (t.prototype.gi = function (t, e) {
              var n = this
              return this.mi[e]
                ? sr.resolve(this.mi[e])
                : this.yi(t, e).next(function (t) {
                    if (t) {
                      var r = t.keys()
                      return (n.mi[e] = r), r
                    }
                    return null
                  })
            }),
            (t.prototype.Vi = function (t, e) {
              var n = this,
                r = e + 1,
                i = IDBKeyRange.lowerBound([this.userId, r]),
                o = null
              return mi(t)
                .ls(
                  { index: Sr.userMutationsIndex, range: i },
                  function (t, e, i) {
                    e.userId === n.userId &&
                      (I(e.batchId >= r), (o = Zr(n.Kt, e))),
                      i.done()
                  }
                )
                .next(function () {
                  return o
                })
            }),
            (t.prototype.pi = function (t) {
              var e = IDBKeyRange.upperBound([
                  this.userId,
                  Number.POSITIVE_INFINITY,
                ]),
                n = -1
              return mi(t)
                .ls(
                  { index: Sr.userMutationsIndex, range: e, reverse: !0 },
                  function (t, e, r) {
                    ;(n = e.batchId), r.done()
                  }
                )
                .next(function () {
                  return n
                })
            }),
            (t.prototype.bi = function (t) {
              var e = this,
                n = IDBKeyRange.bound(
                  [this.userId, -1],
                  [this.userId, Number.POSITIVE_INFINITY]
                )
              return mi(t)
                .os(Sr.userMutationsIndex, n)
                .next(function (t) {
                  return t.map(function (t) {
                    return Zr(e.Kt, t)
                  })
                })
            }),
            (t.prototype.vi = function (t, e) {
              var n = this,
                r = Ar.prefixForPath(this.userId, e.path),
                i = IDBKeyRange.lowerBound(r),
                o = []
              return wi(t)
                .ls({ range: i }, function (r, i, u) {
                  var s = r[0],
                    a = r[1],
                    c = r[2],
                    h = Tr(a)
                  if (s === n.userId && e.path.isEqual(h))
                    return mi(t)
                      .get(c)
                      .next(function (t) {
                        if (!t) throw w()
                        I(t.userId === n.userId), o.push(Zr(n.Kt, t))
                      })
                  u.done()
                })
                .next(function () {
                  return o
                })
            }),
            (t.prototype.Si = function (t, e) {
              var n = this,
                r = new nn(O),
                i = []
              return (
                e.forEach(function (e) {
                  var o = Ar.prefixForPath(n.userId, e.path),
                    u = IDBKeyRange.lowerBound(o),
                    s = wi(t).ls({ range: u }, function (t, i, o) {
                      var u = t[0],
                        s = t[1],
                        a = t[2],
                        c = Tr(s)
                      u === n.userId && e.path.isEqual(c)
                        ? (r = r.add(a))
                        : o.done()
                    })
                  i.push(s)
                }),
                sr.$n(i).next(function () {
                  return n.Di(t, r)
                })
              )
            }),
            (t.prototype.Ci = function (t, e) {
              var n = this,
                r = e.path,
                i = r.length + 1,
                o = Ar.prefixForPath(this.userId, r),
                u = IDBKeyRange.lowerBound(o),
                s = new nn(O)
              return wi(t)
                .ls({ range: u }, function (t, e, o) {
                  var u = t[0],
                    a = t[1],
                    c = t[2],
                    h = Tr(a)
                  u === n.userId && r.st(h)
                    ? h.length === i && (s = s.add(c))
                    : o.done()
                })
                .next(function () {
                  return n.Di(t, s)
                })
            }),
            (t.prototype.Di = function (t, e) {
              var n = this,
                r = [],
                i = []
              return (
                e.forEach(function (e) {
                  i.push(
                    mi(t)
                      .get(e)
                      .next(function (t) {
                        if (null === t) throw w()
                        I(t.userId === n.userId), r.push(Zr(n.Kt, t))
                      })
                  )
                }),
                sr.$n(i).next(function () {
                  return r
                })
              )
            }),
            (t.prototype.xi = function (t, e) {
              var n = this
              return vi(t.bs, this.userId, e).next(function (r) {
                return (
                  t.Vs(function () {
                    n.Ni(e.batchId)
                  }),
                  sr.forEach(r, function (e) {
                    return n.Ii.Fi(t, e)
                  })
                )
              })
            }),
            (t.prototype.Ni = function (t) {
              delete this.mi[t]
            }),
            (t.prototype.Oi = function (t) {
              var e = this
              return this.Ri(t).next(function (n) {
                if (!n) return sr.resolve()
                var r = IDBKeyRange.lowerBound(Ar.prefixForUser(e.userId)),
                  i = []
                return wi(t)
                  .ls({ range: r }, function (t, n, r) {
                    if (t[0] === e.userId) {
                      var o = Tr(t[1])
                      i.push(o)
                    } else r.done()
                  })
                  .next(function () {
                    I(0 === i.length)
                  })
              })
            }),
            (t.prototype.ki = function (t, e) {
              return bi(t, this.userId, e)
            }),
            (t.prototype.Mi = function (t) {
              var e = this
              return Ii(t)
                .get(this.userId)
                .next(function (t) {
                  return t || new jr(e.userId, -1, '')
                })
            }),
            t
          )
        })()
        function bi(t, e, n) {
          var r = Ar.prefixForPath(e, n.path),
            i = r[1],
            o = IDBKeyRange.lowerBound(r),
            u = !1
          return wi(t)
            .ls({ range: o, hs: !0 }, function (t, n, r) {
              var o = t[0],
                s = t[1]
              t[2], o === e && s === i && (u = !0), r.done()
            })
            .next(function () {
              return u
            })
        }
        function mi(t) {
          return Gr(t, Sr.store)
        }
        function wi(t) {
          return Gr(t, Ar.store)
        }
        function Ii(t) {
          return Gr(t, jr.store)
        }
        var _i = (function () {
            function t(t) {
              this.Li = t
            }
            return (
              (t.prototype.next = function () {
                return (this.Li += 2), this.Li
              }),
              (t.$i = function () {
                return new t(0)
              }),
              (t.Bi = function () {
                return new t(-1)
              }),
              t
            )
          })(),
          Ei = (function () {
            function t(t, e) {
              ;(this.Ii = t), (this.Kt = e)
            }
            return (
              (t.prototype.qi = function (t) {
                var e = this
                return this.Ui(t).next(function (n) {
                  var r = new _i(n.highestTargetId)
                  return (
                    (n.highestTargetId = r.next()),
                    e.Qi(t, n).next(function () {
                      return n.highestTargetId
                    })
                  )
                })
              }),
              (t.prototype.Ki = function (t) {
                return this.Ui(t).next(function (t) {
                  return K.W(
                    new B(
                      t.lastRemoteSnapshotVersion.seconds,
                      t.lastRemoteSnapshotVersion.nanoseconds
                    )
                  )
                })
              }),
              (t.prototype.Wi = function (t) {
                return this.Ui(t).next(function (t) {
                  return t.highestListenSequenceNumber
                })
              }),
              (t.prototype.ji = function (t, e, n) {
                var r = this
                return this.Ui(t).next(function (i) {
                  return (
                    (i.highestListenSequenceNumber = e),
                    n && (i.lastRemoteSnapshotVersion = n.G()),
                    e > i.highestListenSequenceNumber &&
                      (i.highestListenSequenceNumber = e),
                    r.Qi(t, i)
                  )
                })
              }),
              (t.prototype.Gi = function (t, e) {
                var n = this
                return this.zi(t, e).next(function () {
                  return n.Ui(t).next(function (r) {
                    return (r.targetCount += 1), n.Hi(e, r), n.Qi(t, r)
                  })
                })
              }),
              (t.prototype.Ji = function (t, e) {
                return this.zi(t, e)
              }),
              (t.prototype.Yi = function (t, e) {
                var n = this
                return this.Xi(t, e.targetId)
                  .next(function () {
                    return Ti(t).delete(e.targetId)
                  })
                  .next(function () {
                    return n.Ui(t)
                  })
                  .next(function (e) {
                    return (
                      I(e.targetCount > 0), (e.targetCount -= 1), n.Qi(t, e)
                    )
                  })
              }),
              (t.prototype.Zi = function (t, e, n) {
                var r = this,
                  i = 0,
                  o = []
                return Ti(t)
                  .ls(function (u, s) {
                    var a = ti(s)
                    a.sequenceNumber <= e &&
                      null === n.get(a.targetId) &&
                      (i++, o.push(r.Yi(t, a)))
                  })
                  .next(function () {
                    return sr.$n(o)
                  })
                  .next(function () {
                    return i
                  })
              }),
              (t.prototype.mn = function (t, e) {
                return Ti(t).ls(function (t, n) {
                  var r = ti(n)
                  e(r)
                })
              }),
              (t.prototype.Ui = function (t) {
                return Oi(t)
                  .get(Rr.key)
                  .next(function (t) {
                    return I(null !== t), t
                  })
              }),
              (t.prototype.Qi = function (t, e) {
                return Oi(t).put(Rr.key, e)
              }),
              (t.prototype.zi = function (t, e) {
                return Ti(t).put(ei(this.Kt, e))
              }),
              (t.prototype.Hi = function (t, e) {
                var n = !1
                return (
                  t.targetId > e.highestTargetId &&
                    ((e.highestTargetId = t.targetId), (n = !0)),
                  t.sequenceNumber > e.highestListenSequenceNumber &&
                    ((e.highestListenSequenceNumber = t.sequenceNumber),
                    (n = !0)),
                  n
                )
              }),
              (t.prototype.tr = function (t) {
                return this.Ui(t).next(function (t) {
                  return t.targetCount
                })
              }),
              (t.prototype.er = function (t, e) {
                var n = Ct(e),
                  r = IDBKeyRange.bound(
                    [n, Number.NEGATIVE_INFINITY],
                    [n, Number.POSITIVE_INFINITY]
                  ),
                  i = null
                return Ti(t)
                  .ls(
                    { range: r, index: Pr.queryTargetsIndexName },
                    function (t, n, r) {
                      var o = ti(n)
                      Pt(e, o.target) && ((i = o), r.done())
                    }
                  )
                  .next(function () {
                    return i
                  })
              }),
              (t.prototype.nr = function (t, e, n) {
                var r = this,
                  i = [],
                  o = Ni(t)
                return (
                  e.forEach(function (e) {
                    var u = Ir(e.path)
                    i.push(o.put(new Lr(n, u))), i.push(r.Ii.sr(t, n, e))
                  }),
                  sr.$n(i)
                )
              }),
              (t.prototype.ir = function (t, e, n) {
                var r = this,
                  i = Ni(t)
                return sr.forEach(e, function (e) {
                  var o = Ir(e.path)
                  return sr.$n([i.delete([n, o]), r.Ii.rr(t, n, e)])
                })
              }),
              (t.prototype.Xi = function (t, e) {
                var n = Ni(t),
                  r = IDBKeyRange.bound([e], [e + 1], !1, !0)
                return n.delete(r)
              }),
              (t.prototype.cr = function (t, e) {
                var n = IDBKeyRange.bound([e], [e + 1], !1, !0),
                  r = Ni(t),
                  i = pn()
                return r
                  .ls({ range: n, hs: !0 }, function (t, e, n) {
                    var r = Tr(t[1]),
                      o = new Y(r)
                    i = i.add(o)
                  })
                  .next(function () {
                    return i
                  })
              }),
              (t.prototype.ki = function (t, e) {
                var n = Ir(e.path),
                  r = IDBKeyRange.bound([n], [j(n)], !1, !0),
                  i = 0
                return Ni(t)
                  .ls(
                    { index: Lr.documentTargetsIndex, hs: !0, range: r },
                    function (t, e, n) {
                      var r = t[0]
                      t[1], 0 !== r && (i++, n.done())
                    }
                  )
                  .next(function () {
                    return i > 0
                  })
              }),
              (t.prototype.Dn = function (t, e) {
                return Ti(t)
                  .get(e)
                  .next(function (t) {
                    return t ? ti(t) : null
                  })
              }),
              t
            )
          })()
        function Ti(t) {
          return Gr(t, Pr.store)
        }
        function Oi(t) {
          return Gr(t, Rr.store)
        }
        function Ni(t) {
          return Gr(t, Lr.store)
        }
        function ji(t, e) {
          var n = t[0],
            r = t[1],
            i = e[0],
            o = e[1],
            u = O(n, i)
          return 0 === u ? O(r, o) : u
        }
        var Si = (function () {
            function t(t) {
              ;(this.ar = t), (this.buffer = new nn(ji)), (this.ur = 0)
            }
            return (
              (t.prototype.hr = function () {
                return ++this.ur
              }),
              (t.prototype.lr = function (t) {
                var e = [t, this.hr()]
                if (this.buffer.size < this.ar) this.buffer = this.buffer.add(e)
                else {
                  var n = this.buffer.last()
                  ji(e, n) < 0 && (this.buffer = this.buffer.delete(n).add(e))
                }
              }),
              Object.defineProperty(t.prototype, 'maxValue', {
                get: function () {
                  return this.buffer.last()[0]
                },
                enumerable: !1,
                configurable: !0,
              }),
              t
            )
          })(),
          Ai = (function () {
            function t(t, e) {
              ;(this._r = t), (this.fs = e), (this.dr = !1), (this.wr = null)
            }
            return (
              (t.prototype.start = function (t) {
                ;-1 !== this._r.params.Hs && this.Er(t)
              }),
              (t.prototype.stop = function () {
                this.wr && (this.wr.cancel(), (this.wr = null))
              }),
              Object.defineProperty(t.prototype, 'Tr', {
                get: function () {
                  return null !== this.wr
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.Er = function (t) {
                var e = this,
                  n = this.dr ? 3e5 : 6e4
                d(
                  'LruGarbageCollector',
                  'Garbage collection scheduled in ' + n + 'ms'
                ),
                  (this.wr = this.fs.Ir(
                    'lru_garbage_collection',
                    n,
                    function () {
                      return Object(h.b)(e, void 0, void 0, function () {
                        var e
                        return Object(h.d)(this, function (n) {
                          switch (n.label) {
                            case 0:
                              ;(this.wr = null), (this.dr = !0), (n.label = 1)
                            case 1:
                              return (
                                n.trys.push([1, 3, , 7]), [4, t.mr(this._r)]
                              )
                            case 2:
                              return n.sent(), [3, 7]
                            case 3:
                              return fr((e = n.sent()))
                                ? (d(
                                    'LruGarbageCollector',
                                    'Ignoring IndexedDB error during garbage collection: ',
                                    e
                                  ),
                                  [3, 6])
                                : [3, 4]
                            case 4:
                              return [4, fi(e)]
                            case 5:
                              n.sent(), (n.label = 6)
                            case 6:
                              return [3, 7]
                            case 7:
                              return [4, this.Er(t)]
                            case 8:
                              return n.sent(), [2]
                          }
                        })
                      })
                    }
                  ))
              }),
              t
            )
          })(),
          xi = (function () {
            function t(t, e) {
              ;(this.Ar = t), (this.params = e)
            }
            return (
              (t.prototype.Rr = function (t, e) {
                return this.Ar.Pr(t).next(function (t) {
                  return Math.floor((e / 100) * t)
                })
              }),
              (t.prototype.yr = function (t, e) {
                var n = this
                if (0 === e) return sr.resolve(H.U)
                var r = new Si(e)
                return this.Ar.mn(t, function (t) {
                  return r.lr(t.sequenceNumber)
                })
                  .next(function () {
                    return n.Ar.gr(t, function (t) {
                      return r.lr(t)
                    })
                  })
                  .next(function () {
                    return r.maxValue
                  })
              }),
              (t.prototype.Zi = function (t, e, n) {
                return this.Ar.Zi(t, e, n)
              }),
              (t.prototype.Vr = function (t, e) {
                return this.Ar.Vr(t, e)
              }),
              (t.prototype.pr = function (t, e) {
                var n = this
                return -1 === this.params.Hs
                  ? (d(
                      'LruGarbageCollector',
                      'Garbage collection skipped; disabled'
                    ),
                    sr.resolve(ci))
                  : this.br(t).next(function (r) {
                      return r < n.params.Hs
                        ? (d(
                            'LruGarbageCollector',
                            'Garbage collection skipped; Cache size ' +
                              r +
                              ' is lower than threshold ' +
                              n.params.Hs
                          ),
                          ci)
                        : n.vr(t, e)
                    })
              }),
              (t.prototype.br = function (t) {
                return this.Ar.br(t)
              }),
              (t.prototype.vr = function (t, e) {
                var n,
                  i,
                  o,
                  u,
                  s,
                  a,
                  c,
                  h = this,
                  f = Date.now()
                return this.Rr(t, this.params.Js)
                  .next(function (e) {
                    return (
                      e > h.params.Ys
                        ? (d(
                            'LruGarbageCollector',
                            'Capping sequence numbers to collect down to the maximum of ' +
                              h.params.Ys +
                              ' from ' +
                              e
                          ),
                          (i = h.params.Ys))
                        : (i = e),
                      (u = Date.now()),
                      h.yr(t, i)
                    )
                  })
                  .next(function (r) {
                    return (n = r), (s = Date.now()), h.Zi(t, n, e)
                  })
                  .next(function (e) {
                    return (o = e), (a = Date.now()), h.Vr(t, n)
                  })
                  .next(function (t) {
                    return (
                      (c = Date.now()),
                      l() <= r.a.DEBUG &&
                        d(
                          'LruGarbageCollector',
                          'LRU Garbage Collection\n\tCounted targets in ' +
                            (u - f) +
                            'ms\n\tDetermined least recently used ' +
                            i +
                            ' in ' +
                            (s - u) +
                            'ms\n\tRemoved ' +
                            o +
                            ' targets in ' +
                            (a - s) +
                            'ms\n\tRemoved ' +
                            t +
                            ' documents in ' +
                            (c - a) +
                            'ms\nTotal Duration: ' +
                            (c - f) +
                            'ms'
                        ),
                      sr.resolve({ Ws: !0, js: i, Gs: o, zs: t })
                    )
                  })
              }),
              t
            )
          })(),
          Di = (function () {
            function t(t, e) {
              ;(this.db = t),
                (this._r = (function (t, e) {
                  return new xi(t, e)
                })(this, e))
            }
            return (
              (t.prototype.Pr = function (t) {
                var e = this.Sr(t)
                return this.db
                  .Dr()
                  .tr(t)
                  .next(function (t) {
                    return e.next(function (e) {
                      return t + e
                    })
                  })
              }),
              (t.prototype.Sr = function (t) {
                var e = 0
                return this.gr(t, function (t) {
                  e++
                }).next(function () {
                  return e
                })
              }),
              (t.prototype.mn = function (t, e) {
                return this.db.Dr().mn(t, e)
              }),
              (t.prototype.gr = function (t, e) {
                return this.Cr(t, function (t, n) {
                  return e(n)
                })
              }),
              (t.prototype.sr = function (t, e, n) {
                return ki(t, n)
              }),
              (t.prototype.rr = function (t, e, n) {
                return ki(t, n)
              }),
              (t.prototype.Zi = function (t, e, n) {
                return this.db.Dr().Zi(t, e, n)
              }),
              (t.prototype.Fi = function (t, e) {
                return ki(t, e)
              }),
              (t.prototype.Nr = function (t, e) {
                return (function (t, e) {
                  var n = !1
                  return Ii(t)
                    ._s(function (r) {
                      return bi(t, r, e).next(function (t) {
                        return t && (n = !0), sr.resolve(!t)
                      })
                    })
                    .next(function () {
                      return n
                    })
                })(t, e)
              }),
              (t.prototype.Vr = function (t, e) {
                var n = this,
                  r = this.db.Or().Fr(),
                  i = [],
                  o = 0
                return this.Cr(t, function (u, s) {
                  if (s <= e) {
                    var a = n.Nr(t, u).next(function (e) {
                      if (!e)
                        return (
                          o++,
                          r.fi(t, u).next(function () {
                            return r._i(u), Ni(t).delete([0, Ir(u.path)])
                          })
                        )
                    })
                    i.push(a)
                  }
                })
                  .next(function () {
                    return sr.$n(i)
                  })
                  .next(function () {
                    return r.apply(t)
                  })
                  .next(function () {
                    return o
                  })
              }),
              (t.prototype.removeTarget = function (t, e) {
                var n = e.Lt(t.vs)
                return this.db.Dr().Ji(t, n)
              }),
              (t.prototype.kr = function (t, e) {
                return ki(t, e)
              }),
              (t.prototype.Cr = function (t, e) {
                var n,
                  r = Ni(t),
                  i = H.U
                return r
                  .ls({ index: Lr.documentTargetsIndex }, function (t, r) {
                    var o = t[0],
                      u = (t[1], r.path),
                      s = r.sequenceNumber
                    0 === o
                      ? (i !== H.U && e(new Y(Tr(n)), i), (i = s), (n = u))
                      : (i = H.U)
                  })
                  .next(function () {
                    i !== H.U && e(new Y(Tr(n)), i)
                  })
              }),
              (t.prototype.br = function (t) {
                return this.db.Or().Mr(t)
              }),
              t
            )
          })()
        function ki(t, e) {
          return Ni(t).put(
            (function (t, e) {
              return new Lr(0, Ir(t.path), e)
            })(e, t.vs)
          )
        }
        var Ci = (function () {
            function t(t, e) {
              ;(this.Kt = t), (this.Ti = e)
            }
            return (
              (t.prototype.ui = function (t, e, n) {
                return Ri(t).put(Vi(e), n)
              }),
              (t.prototype._i = function (t, e) {
                var n = Ri(t),
                  r = Vi(e)
                return n.delete(r)
              }),
              (t.prototype.updateMetadata = function (t, e) {
                var n = this
                return this.getMetadata(t).next(function (r) {
                  return (r.byteSize += e), n.Lr(t, r)
                })
              }),
              (t.prototype.fi = function (t, e) {
                var n = this
                return Ri(t)
                  .get(Vi(e))
                  .next(function (t) {
                    return n.$r(t)
                  })
              }),
              (t.prototype.Br = function (t, e) {
                var n = this
                return Ri(t)
                  .get(Vi(e))
                  .next(function (t) {
                    var e = n.$r(t)
                    return e ? { li: e, size: yi(t) } : null
                  })
              }),
              (t.prototype.getEntries = function (t, e) {
                var n = this,
                  r = un()
                return this.qr(t, e, function (t, e) {
                  var i = n.$r(e)
                  r = r.Ht(t, i)
                }).next(function () {
                  return r
                })
              }),
              (t.prototype.Ur = function (t, e) {
                var n = this,
                  r = un(),
                  i = new Ze(Y.J)
                return this.qr(t, e, function (t, e) {
                  var o = n.$r(e)
                  o
                    ? ((r = r.Ht(t, o)), (i = i.Ht(t, yi(e))))
                    : ((r = r.Ht(t, null)), (i = i.Ht(t, 0)))
                }).next(function () {
                  return { Qr: r, Kr: i }
                })
              }),
              (t.prototype.qr = function (t, e, n) {
                if (e.nt()) return sr.resolve()
                var r = IDBKeyRange.bound(
                    e.first().path.rt(),
                    e.last().path.rt()
                  ),
                  i = e.ee(),
                  o = i.ce()
                return Ri(t)
                  .ls({ range: r }, function (t, e, r) {
                    for (var u = Y.Tt(t); o && Y.J(o, u) < 0; )
                      n(o, null), (o = i.ce())
                    o &&
                      o.isEqual(u) &&
                      (n(o, e), (o = i.ae() ? i.ce() : null)),
                      o ? r.rs(o.path.rt()) : r.done()
                  })
                  .next(function () {
                    for (; o; ) n(o, null), (o = i.ae() ? i.ce() : null)
                  })
              }),
              (t.prototype.Wr = function (t, e, n) {
                var r = this,
                  i = cn(),
                  o = e.path.length + 1,
                  u = {}
                if (n.isEqual(K.min())) {
                  var s = e.path.rt()
                  u.range = IDBKeyRange.lowerBound(s)
                } else {
                  var a = e.path.rt(),
                    c = Xr(n)
                  ;(u.range = IDBKeyRange.lowerBound([a, c], !0)),
                    (u.index = kr.collectionReadTimeIndex)
                }
                return Ri(t)
                  .ls(u, function (t, n, u) {
                    if (t.length === o) {
                      var s = Jr(r.Kt, n)
                      e.path.st(s.key.path)
                        ? s instanceof St && fe(e, s) && (i = i.Ht(s.key, s))
                        : u.done()
                    }
                  })
                  .next(function () {
                    return i
                  })
              }),
              (t.prototype.Fr = function (t) {
                return new Pi(this, !!t && t.jr)
              }),
              (t.prototype.Mr = function (t) {
                return this.getMetadata(t).next(function (t) {
                  return t.byteSize
                })
              }),
              (t.prototype.getMetadata = function (t) {
                return Li(t)
                  .get(Cr.key)
                  .next(function (t) {
                    return I(!!t), t
                  })
              }),
              (t.prototype.Lr = function (t, e) {
                return Li(t).put(Cr.key, e)
              }),
              (t.prototype.$r = function (t) {
                if (t) {
                  var e = Jr(this.Kt, t)
                  return e instanceof At && e.version.isEqual(K.min())
                    ? null
                    : e
                }
                return null
              }),
              t
            )
          })(),
          Pi = (function (t) {
            function e(e, n) {
              var r = this
              return (
                ((r = t.call(this) || this).Gr = e),
                (r.jr = n),
                (r.zr = new pi(
                  function (t) {
                    return t.toString()
                  },
                  function (t, e) {
                    return t.isEqual(e)
                  }
                )),
                r
              )
            }
            return (
              Object(h.c)(e, t),
              (e.prototype.Ei = function (t) {
                var e = this,
                  n = [],
                  r = 0,
                  i = new nn(function (t, e) {
                    return O(t.ot(), e.ot())
                  })
                return (
                  this.oi.forEach(function (o, u) {
                    var s = e.zr.get(o)
                    if (u.li) {
                      var a = Wr(e.Gr.Kt, u.li, e.ai(o))
                      i = i.add(o.path.Z())
                      var c = yi(a)
                      ;(r += c - s), n.push(e.Gr.ui(t, o, a))
                    } else if (((r -= s), e.jr)) {
                      var h = Wr(e.Gr.Kt, new At(o, K.min()), e.ai(o))
                      n.push(e.Gr.ui(t, o, h))
                    } else n.push(e.Gr._i(t, o))
                  }),
                  i.forEach(function (r) {
                    n.push(e.Gr.Ti.Us(t, r))
                  }),
                  n.push(this.Gr.updateMetadata(t, r)),
                  sr.$n(n)
                )
              }),
              (e.prototype.di = function (t, e) {
                var n = this
                return this.Gr.Br(t, e).next(function (t) {
                  return null === t
                    ? (n.zr.set(e, 0), null)
                    : (n.zr.set(e, t.size), t.li)
                })
              }),
              (e.prototype.wi = function (t, e) {
                var n = this
                return this.Gr.Ur(t, e).next(function (t) {
                  var e = t.Qr
                  return (
                    t.Kr.forEach(function (t, e) {
                      n.zr.set(t, e)
                    }),
                    e
                  )
                })
              }),
              e
            )
          })(di)
        function Li(t) {
          return Gr(t, Cr.store)
        }
        function Ri(t) {
          return Gr(t, kr.store)
        }
        function Vi(t) {
          return t.path.rt()
        }
        var Mi = (function () {
          function t(t) {
            this.Kt = t
          }
          return (
            (t.prototype.Yn = function (t, e, n, r) {
              var i = this
              I(n < r && n >= 0 && r <= 11)
              var o = new ur('createOrUpgrade', e)
              n < 1 &&
                r >= 1 &&
                ((function (t) {
                  t.createObjectStore(Nr.store)
                })(t),
                (function (t) {
                  t.createObjectStore(jr.store, { keyPath: jr.keyPath }),
                    t
                      .createObjectStore(Sr.store, {
                        keyPath: Sr.keyPath,
                        autoIncrement: !0,
                      })
                      .createIndex(
                        Sr.userMutationsIndex,
                        Sr.userMutationsKeyPath,
                        { unique: !0 }
                      ),
                    t.createObjectStore(Ar.store)
                })(t),
                Ui(t),
                (function (t) {
                  t.createObjectStore(kr.store)
                })(t))
              var u = sr.resolve()
              return (
                n < 3 &&
                  r >= 3 &&
                  (0 !== n &&
                    ((function (t) {
                      t.deleteObjectStore(Lr.store),
                        t.deleteObjectStore(Pr.store),
                        t.deleteObjectStore(Rr.store)
                    })(t),
                    Ui(t)),
                  (u = u.next(function () {
                    return (function (t) {
                      var e = t.store(Rr.store),
                        n = new Rr(0, 0, K.min().G(), 0)
                      return e.put(Rr.key, n)
                    })(o)
                  }))),
                n < 4 &&
                  r >= 4 &&
                  (0 !== n &&
                    (u = u.next(function () {
                      return (function (t, e) {
                        return e
                          .store(Sr.store)
                          .os()
                          .next(function (n) {
                            t.deleteObjectStore(Sr.store),
                              t
                                .createObjectStore(Sr.store, {
                                  keyPath: Sr.keyPath,
                                  autoIncrement: !0,
                                })
                                .createIndex(
                                  Sr.userMutationsIndex,
                                  Sr.userMutationsKeyPath,
                                  { unique: !0 }
                                )
                            var r = e.store(Sr.store),
                              i = n.map(function (t) {
                                return r.put(t)
                              })
                            return sr.$n(i)
                          })
                      })(t, o)
                    })),
                  (u = u.next(function () {
                    !(function (t) {
                      t.createObjectStore(Mr.store, { keyPath: Mr.keyPath })
                    })(t)
                  }))),
                n < 5 &&
                  r >= 5 &&
                  (u = u.next(function () {
                    return i.Hr(o)
                  })),
                n < 6 &&
                  r >= 6 &&
                  (u = u.next(function () {
                    return (
                      (function (t) {
                        t.createObjectStore(Cr.store)
                      })(t),
                      i.Jr(o)
                    )
                  })),
                n < 7 &&
                  r >= 7 &&
                  (u = u.next(function () {
                    return i.Yr(o)
                  })),
                n < 8 &&
                  r >= 8 &&
                  (u = u.next(function () {
                    return i.Xr(t, o)
                  })),
                n < 9 &&
                  r >= 9 &&
                  (u = u.next(function () {
                    !(function (t) {
                      t.objectStoreNames.contains('remoteDocumentChanges') &&
                        t.deleteObjectStore('remoteDocumentChanges')
                    })(t),
                      (function (t) {
                        var e = t.objectStore(kr.store)
                        e.createIndex(kr.readTimeIndex, kr.readTimeIndexPath, {
                          unique: !1,
                        }),
                          e.createIndex(
                            kr.collectionReadTimeIndex,
                            kr.collectionReadTimeIndexPath,
                            { unique: !1 }
                          )
                      })(e)
                  })),
                n < 10 &&
                  r >= 10 &&
                  (u = u.next(function () {
                    return i.Zr(o)
                  })),
                n < 11 &&
                  r >= 11 &&
                  (u = u.next(function () {
                    !(function (t) {
                      t.createObjectStore(Ur.store, { keyPath: Ur.keyPath })
                    })(t),
                      (function (t) {
                        t.createObjectStore(Fr.store, { keyPath: Fr.keyPath })
                      })(t)
                  })),
                u
              )
            }),
            (t.prototype.Jr = function (t) {
              var e = 0
              return t
                .store(kr.store)
                .ls(function (t, n) {
                  e += yi(n)
                })
                .next(function () {
                  var n = new Cr(e)
                  return t.store(Cr.store).put(Cr.key, n)
                })
            }),
            (t.prototype.Hr = function (t) {
              var e = this,
                n = t.store(jr.store),
                r = t.store(Sr.store)
              return n.os().next(function (n) {
                return sr.forEach(n, function (n) {
                  var i = IDBKeyRange.bound(
                    [n.userId, -1],
                    [n.userId, n.lastAcknowledgedBatchId]
                  )
                  return r.os(Sr.userMutationsIndex, i).next(function (r) {
                    return sr.forEach(r, function (r) {
                      I(r.userId === n.userId)
                      var i = Zr(e.Kt, r)
                      return vi(t, n.userId, i).next(function () {})
                    })
                  })
                })
              })
            }),
            (t.prototype.Yr = function (t) {
              var e = t.store(Lr.store),
                n = t.store(kr.store)
              return t
                .store(Rr.store)
                .get(Rr.key)
                .next(function (t) {
                  var r = []
                  return n
                    .ls(function (n, i) {
                      var o = new W(n),
                        u = (function (t) {
                          return [0, Ir(t)]
                        })(o)
                      r.push(
                        e.get(u).next(function (n) {
                          return n
                            ? sr.resolve()
                            : (function (n) {
                                return e.put(
                                  new Lr(
                                    0,
                                    Ir(n),
                                    t.highestListenSequenceNumber
                                  )
                                )
                              })(o)
                        })
                      )
                    })
                    .next(function () {
                      return sr.$n(r)
                    })
                })
            }),
            (t.prototype.Xr = function (t, e) {
              t.createObjectStore(Vr.store, { keyPath: Vr.keyPath })
              var n = e.store(Vr.store),
                r = new si(),
                i = function (t) {
                  if (r.add(t)) {
                    var e = t.et(),
                      i = t.Z()
                    return n.put({ collectionId: e, parent: Ir(i) })
                  }
                }
              return e
                .store(kr.store)
                .ls({ hs: !0 }, function (t, e) {
                  var n = new W(t)
                  return i(n.Z())
                })
                .next(function () {
                  return e.store(Ar.store).ls({ hs: !0 }, function (t, e) {
                    t[0]
                    var n = t[1],
                      r = (t[2], Tr(n))
                    return i(r.Z())
                  })
                })
            }),
            (t.prototype.Zr = function (t) {
              var e = this,
                n = t.store(Pr.store)
              return n.ls(function (t, r) {
                var i = ti(r),
                  o = ei(e.Kt, i)
                return n.put(o)
              })
            }),
            t
          )
        })()
        function Ui(t) {
          t
            .createObjectStore(Lr.store, { keyPath: Lr.keyPath })
            .createIndex(Lr.documentTargetsIndex, Lr.documentTargetsKeyPath, {
              unique: !0,
            }),
            t
              .createObjectStore(Pr.store, { keyPath: Pr.keyPath })
              .createIndex(Pr.queryTargetsIndexName, Pr.queryTargetsKeyPath, {
                unique: !0,
              }),
            t.createObjectStore(Rr.store)
        }
        var Fi =
            'Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.',
          qi = (function () {
            function t(e, n, r, i, o, u, s, a, c, h) {
              if (
                ((this.allowTabSynchronization = e),
                (this.persistenceKey = n),
                (this.clientId = r),
                (this.eo = o),
                (this.window = u),
                (this.document = s),
                (this.no = c),
                (this.so = h),
                (this.io = null),
                (this.ro = !1),
                (this.isPrimary = !1),
                (this.networkEnabled = !0),
                (this.oo = null),
                (this.inForeground = !1),
                (this.co = null),
                (this.ao = null),
                (this.uo = Number.NEGATIVE_INFINITY),
                (this.ho = function (t) {
                  return Promise.resolve()
                }),
                !t.Wn())
              )
                throw new x(
                  A.UNIMPLEMENTED,
                  'This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.'
                )
              ;(this.Ii = new Di(this, i)),
                (this.lo = n + 'main'),
                (this.Kt = new Kr(a)),
                (this._o = new ar(this.lo, 11, new Mi(this.Kt))),
                (this.fo = new Ei(this.Ii, this.Kt)),
                (this.Ti = new ui()),
                (this.wo = (function (t, e) {
                  return new Ci(t, e)
                })(this.Kt, this.Ti)),
                (this.Eo = new li()),
                this.window && this.window.localStorage
                  ? (this.To = this.window.localStorage)
                  : ((this.To = null),
                    !1 === h &&
                      v(
                        'IndexedDbPersistence',
                        'LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page.'
                      ))
            }
            return (
              (t.prototype.start = function () {
                var t = this
                return this.Io()
                  .then(function () {
                    if (!t.isPrimary && !t.allowTabSynchronization)
                      throw new x(A.FAILED_PRECONDITION, Fi)
                    return (
                      t.mo(),
                      t.Ao(),
                      t.Ro(),
                      t.runTransaction(
                        'getHighestListenSequenceNumber',
                        'readonly',
                        function (e) {
                          return t.fo.Wi(e)
                        }
                      )
                    )
                  })
                  .then(function (e) {
                    t.io = new H(e, t.no)
                  })
                  .then(function () {
                    t.ro = !0
                  })
                  .catch(function (e) {
                    return t._o && t._o.close(), Promise.reject(e)
                  })
              }),
              (t.prototype.Po = function (t) {
                var e = this
                return (
                  (this.ho = function (n) {
                    return Object(h.b)(e, void 0, void 0, function () {
                      return Object(h.d)(this, function (e) {
                        return this.Tr ? [2, t(n)] : [2]
                      })
                    })
                  }),
                  t(this.isPrimary)
                )
              }),
              (t.prototype.yo = function (t) {
                var e = this
                this._o.Zn(function (n) {
                  return Object(h.b)(e, void 0, void 0, function () {
                    return Object(h.d)(this, function (e) {
                      switch (e.label) {
                        case 0:
                          return null === n.newVersion ? [4, t()] : [3, 2]
                        case 1:
                          e.sent(), (e.label = 2)
                        case 2:
                          return [2]
                      }
                    })
                  })
                })
              }),
              (t.prototype.Vo = function (t) {
                var e = this
                this.networkEnabled !== t &&
                  ((this.networkEnabled = t),
                  this.eo.ys(function () {
                    return Object(h.b)(e, void 0, void 0, function () {
                      return Object(h.d)(this, function (t) {
                        switch (t.label) {
                          case 0:
                            return this.Tr ? [4, this.Io()] : [3, 2]
                          case 1:
                            t.sent(), (t.label = 2)
                          case 2:
                            return [2]
                        }
                      })
                    })
                  }))
              }),
              (t.prototype.Io = function () {
                var t = this
                return this.runTransaction(
                  'updateClientMetadataAndTryBecomePrimary',
                  'readwrite',
                  function (e) {
                    return Gi(e)
                      .put(
                        new Mr(
                          t.clientId,
                          Date.now(),
                          t.networkEnabled,
                          t.inForeground
                        )
                      )
                      .next(function () {
                        if (t.isPrimary)
                          return t.po(e).next(function (e) {
                            e ||
                              ((t.isPrimary = !1),
                              t.eo.bo(function () {
                                return t.ho(!1)
                              }))
                          })
                      })
                      .next(function () {
                        return t.vo(e)
                      })
                      .next(function (n) {
                        return t.isPrimary && !n
                          ? t.So(e).next(function () {
                              return !1
                            })
                          : !!n &&
                              t.Do(e).next(function () {
                                return !0
                              })
                      })
                  }
                )
                  .catch(function (e) {
                    if (fr(e))
                      return (
                        d(
                          'IndexedDbPersistence',
                          'Failed to extend owner lease: ',
                          e
                        ),
                        t.isPrimary
                      )
                    if (!t.allowTabSynchronization) throw e
                    return (
                      d(
                        'IndexedDbPersistence',
                        'Releasing owner lease after error during lease refresh',
                        e
                      ),
                      !1
                    )
                  })
                  .then(function (e) {
                    t.isPrimary !== e &&
                      t.eo.bo(function () {
                        return t.ho(e)
                      }),
                      (t.isPrimary = e)
                  })
              }),
              (t.prototype.po = function (t) {
                var e = this
                return zi(t)
                  .get(Nr.key)
                  .next(function (t) {
                    return sr.resolve(e.Co(t))
                  })
              }),
              (t.prototype.xo = function (t) {
                return Gi(t).delete(this.clientId)
              }),
              (t.prototype.No = function () {
                return Object(h.b)(this, void 0, void 0, function () {
                  var t,
                    e,
                    n,
                    r,
                    i = this
                  return Object(h.d)(this, function (o) {
                    switch (o.label) {
                      case 0:
                        return !this.isPrimary || this.Fo(this.uo, 18e5)
                          ? [3, 2]
                          : ((this.uo = Date.now()),
                            [
                              4,
                              this.runTransaction(
                                'maybeGarbageCollectMultiClientState',
                                'readwrite-primary',
                                function (t) {
                                  var e = Gr(t, Mr.store)
                                  return e.os().next(function (t) {
                                    var n = i.Oo(t, 18e5),
                                      r = t.filter(function (t) {
                                        return -1 === n.indexOf(t)
                                      })
                                    return sr
                                      .forEach(r, function (t) {
                                        return e.delete(t.clientId)
                                      })
                                      .next(function () {
                                        return r
                                      })
                                  })
                                }
                              ).catch(function () {
                                return []
                              }),
                            ])
                      case 1:
                        if (((t = o.sent()), this.To))
                          for (e = 0, n = t; e < n.length; e++)
                            (r = n[e]), this.To.removeItem(this.ko(r.clientId))
                        o.label = 2
                      case 2:
                        return [2]
                    }
                  })
                })
              }),
              (t.prototype.Ro = function () {
                var t = this
                this.ao = this.eo.Ir(
                  'client_metadata_refresh',
                  4e3,
                  function () {
                    return t
                      .Io()
                      .then(function () {
                        return t.No()
                      })
                      .then(function () {
                        return t.Ro()
                      })
                  }
                )
              }),
              (t.prototype.Co = function (t) {
                return !!t && t.ownerId === this.clientId
              }),
              (t.prototype.vo = function (t) {
                var e = this
                return this.so
                  ? sr.resolve(!0)
                  : zi(t)
                      .get(Nr.key)
                      .next(function (n) {
                        if (
                          null !== n &&
                          e.Fo(n.leaseTimestampMs, 5e3) &&
                          !e.Mo(n.ownerId)
                        ) {
                          if (e.Co(n) && e.networkEnabled) return !0
                          if (!e.Co(n)) {
                            if (!n.allowTabSynchronization)
                              throw new x(A.FAILED_PRECONDITION, Fi)
                            return !1
                          }
                        }
                        return (
                          !(!e.networkEnabled || !e.inForeground) ||
                          Gi(t)
                            .os()
                            .next(function (t) {
                              return (
                                void 0 ===
                                e.Oo(t, 5e3).find(function (t) {
                                  if (e.clientId !== t.clientId) {
                                    var n =
                                        !e.networkEnabled && t.networkEnabled,
                                      r = !e.inForeground && t.inForeground,
                                      i = e.networkEnabled === t.networkEnabled
                                    if (n || (r && i)) return !0
                                  }
                                  return !1
                                })
                              )
                            })
                        )
                      })
                      .next(function (t) {
                        return (
                          e.isPrimary !== t &&
                            d(
                              'IndexedDbPersistence',
                              'Client ' +
                                (t ? 'is' : 'is not') +
                                ' eligible for a primary lease.'
                            ),
                          t
                        )
                      })
              }),
              (t.prototype.Lo = function () {
                return Object(h.b)(this, void 0, void 0, function () {
                  var t = this
                  return Object(h.d)(this, function (e) {
                    switch (e.label) {
                      case 0:
                        return (
                          (this.ro = !1),
                          this.$o(),
                          this.ao && (this.ao.cancel(), (this.ao = null)),
                          this.Bo(),
                          this.qo(),
                          [
                            4,
                            this._o.runTransaction(
                              'shutdown',
                              'readwrite',
                              [Nr.store, Mr.store],
                              function (e) {
                                var n = new zr(e, H.U)
                                return t.So(n).next(function () {
                                  return t.xo(n)
                                })
                              }
                            ),
                          ]
                        )
                      case 1:
                        return e.sent(), this._o.close(), this.Uo(), [2]
                    }
                  })
                })
              }),
              (t.prototype.Oo = function (t, e) {
                var n = this
                return t.filter(function (t) {
                  return n.Fo(t.updateTimeMs, e) && !n.Mo(t.clientId)
                })
              }),
              (t.prototype.Qo = function () {
                var t = this
                return this.runTransaction(
                  'getActiveClients',
                  'readonly',
                  function (e) {
                    return Gi(e)
                      .os()
                      .next(function (e) {
                        return t.Oo(e, 18e5).map(function (t) {
                          return t.clientId
                        })
                      })
                  }
                )
              }),
              Object.defineProperty(t.prototype, 'Tr', {
                get: function () {
                  return this.ro
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.Ko = function (t) {
                return gi.Ai(t, this.Kt, this.Ti, this.Ii)
              }),
              (t.prototype.Dr = function () {
                return this.fo
              }),
              (t.prototype.Or = function () {
                return this.wo
              }),
              (t.prototype.Wo = function () {
                return this.Ti
              }),
              (t.prototype.jo = function () {
                return this.Eo
              }),
              (t.prototype.runTransaction = function (t, e, n) {
                var r = this
                d('IndexedDbPersistence', 'Starting transaction:', t)
                var i,
                  o = 'readonly' === e ? 'readonly' : 'readwrite'
                return this._o
                  .runTransaction(t, o, qr, function (o) {
                    return (
                      (i = new zr(o, r.io ? r.io.next() : H.U)),
                      'readwrite-primary' === e
                        ? r
                            .po(i)
                            .next(function (t) {
                              return !!t || r.vo(i)
                            })
                            .next(function (e) {
                              if (!e)
                                throw (
                                  (v(
                                    "Failed to obtain primary lease for action '" +
                                      t +
                                      "'."
                                  ),
                                  (r.isPrimary = !1),
                                  r.eo.bo(function () {
                                    return r.ho(!1)
                                  }),
                                  new x(A.FAILED_PRECONDITION, mr))
                                )
                              return n(i)
                            })
                            .next(function (t) {
                              return r.Do(i).next(function () {
                                return t
                              })
                            })
                        : r.Go(i).next(function () {
                            return n(i)
                          })
                    )
                  })
                  .then(function (t) {
                    return i.ps(), t
                  })
              }),
              (t.prototype.Go = function (t) {
                var e = this
                return zi(t)
                  .get(Nr.key)
                  .next(function (t) {
                    if (
                      null !== t &&
                      e.Fo(t.leaseTimestampMs, 5e3) &&
                      !e.Mo(t.ownerId) &&
                      !e.Co(t) &&
                      !(
                        e.so ||
                        (e.allowTabSynchronization && t.allowTabSynchronization)
                      )
                    )
                      throw new x(A.FAILED_PRECONDITION, Fi)
                  })
              }),
              (t.prototype.Do = function (t) {
                var e = new Nr(
                  this.clientId,
                  this.allowTabSynchronization,
                  Date.now()
                )
                return zi(t).put(Nr.key, e)
              }),
              (t.Wn = function () {
                return ar.Wn()
              }),
              (t.prototype.So = function (t) {
                var e = this,
                  n = zi(t)
                return n.get(Nr.key).next(function (t) {
                  return e.Co(t)
                    ? (d('IndexedDbPersistence', 'Releasing primary lease.'),
                      n.delete(Nr.key))
                    : sr.resolve()
                })
              }),
              (t.prototype.Fo = function (t, e) {
                var n = Date.now()
                return !(
                  t < n - e ||
                  (t > n &&
                    (v(
                      'Detected an update time that is in the future: ' +
                        t +
                        ' > ' +
                        n
                    ),
                    1))
                )
              }),
              (t.prototype.mo = function () {
                var t = this
                null !== this.document &&
                  'function' == typeof this.document.addEventListener &&
                  ((this.co = function () {
                    t.eo.ys(function () {
                      return (
                        (t.inForeground =
                          'visible' === t.document.visibilityState),
                        t.Io()
                      )
                    })
                  }),
                  this.document.addEventListener('visibilitychange', this.co),
                  (this.inForeground =
                    'visible' === this.document.visibilityState))
              }),
              (t.prototype.Bo = function () {
                this.co &&
                  (this.document.removeEventListener(
                    'visibilitychange',
                    this.co
                  ),
                  (this.co = null))
              }),
              (t.prototype.Ao = function () {
                var t,
                  e = this
                'function' ==
                  typeof (null === (t = this.window) || void 0 === t
                    ? void 0
                    : t.addEventListener) &&
                  ((this.oo = function () {
                    e.$o(),
                      e.eo.ys(function () {
                        return e.Lo()
                      })
                  }),
                  this.window.addEventListener('unload', this.oo))
              }),
              (t.prototype.qo = function () {
                this.oo &&
                  (this.window.removeEventListener('unload', this.oo),
                  (this.oo = null))
              }),
              (t.prototype.Mo = function (t) {
                var e
                try {
                  var n =
                    null !==
                    (null === (e = this.To) || void 0 === e
                      ? void 0
                      : e.getItem(this.ko(t)))
                  return (
                    d(
                      'IndexedDbPersistence',
                      "Client '" +
                        t +
                        "' " +
                        (n ? 'is' : 'is not') +
                        ' zombied in LocalStorage'
                    ),
                    n
                  )
                } catch (t) {
                  return (
                    v(
                      'IndexedDbPersistence',
                      'Failed to get zombied client id.',
                      t
                    ),
                    !1
                  )
                }
              }),
              (t.prototype.$o = function () {
                if (this.To)
                  try {
                    this.To.setItem(this.ko(this.clientId), String(Date.now()))
                  } catch (t) {
                    v('Failed to set zombie client id.', t)
                  }
              }),
              (t.prototype.Uo = function () {
                if (this.To)
                  try {
                    this.To.removeItem(this.ko(this.clientId))
                  } catch (t) {}
              }),
              (t.prototype.ko = function (t) {
                return 'firestore_zombie_' + this.persistenceKey + '_' + t
              }),
              t
            )
          })()
        function zi(t) {
          return Gr(t, Nr.store)
        }
        function Gi(t) {
          return Gr(t, Mr.store)
        }
        function Hi(t, e) {
          var n = t.projectId
          return (
            t.m || (n += '.' + t.database), 'firestore/' + e + '/' + n + '/'
          )
        }
        var Bi = function (t, e) {
            ;(this.progress = t), (this.zo = e)
          },
          Ki = (function () {
            function t(t, e, n) {
              ;(this.wo = t), (this.Ho = e), (this.Ti = n)
            }
            return (
              (t.prototype.Jo = function (t, e) {
                var n = this
                return this.Ho.vi(t, e).next(function (r) {
                  return n.Yo(t, e, r)
                })
              }),
              (t.prototype.Yo = function (t, e, n) {
                return this.wo.fi(t, e).next(function (t) {
                  for (var r = 0, i = n; r < i.length; r++) t = i[r].xs(e, t)
                  return t
                })
              }),
              (t.prototype.Xo = function (t, e, n) {
                var r = un()
                return (
                  e.forEach(function (t, e) {
                    for (var i = 0, o = n; i < o.length; i++) e = o[i].xs(t, e)
                    r = r.Ht(t, e)
                  }),
                  r
                )
              }),
              (t.prototype.Zo = function (t, e) {
                var n = this
                return this.wo.getEntries(t, e).next(function (e) {
                  return n.tc(t, e)
                })
              }),
              (t.prototype.tc = function (t, e) {
                var n = this
                return this.Ho.Si(t, e).next(function (r) {
                  var i = n.Xo(t, e, r),
                    o = sn()
                  return (
                    i.forEach(function (t, e) {
                      e || (e = new At(t, K.min())), (o = o.Ht(t, e))
                    }),
                    o
                  )
                })
              }),
              (t.prototype.Wr = function (t, e, n) {
                return (function (t) {
                  return (
                    Y.Et(t.path) &&
                    null === t.collectionGroup &&
                    0 === t.filters.length
                  )
                })(e)
                  ? this.ec(t, e.path)
                  : ie(e)
                  ? this.nc(t, e, n)
                  : this.sc(t, e, n)
              }),
              (t.prototype.ec = function (t, e) {
                return this.Jo(t, new Y(e)).next(function (t) {
                  var e = cn()
                  return t instanceof St && (e = e.Ht(t.key, t)), e
                })
              }),
              (t.prototype.nc = function (t, e, n) {
                var r = this,
                  i = e.collectionGroup,
                  o = cn()
                return this.Ti.Qs(t, i).next(function (u) {
                  return sr
                    .forEach(u, function (u) {
                      var s = (function (t, e) {
                        return new Qt(
                          e,
                          null,
                          t.Nt.slice(),
                          t.filters.slice(),
                          t.limit,
                          t.limitType,
                          t.startAt,
                          t.endAt
                        )
                      })(e, u.child(i))
                      return r.sc(t, s, n).next(function (t) {
                        t.forEach(function (t, e) {
                          o = o.Ht(t, e)
                        })
                      })
                    })
                    .next(function () {
                      return o
                    })
                })
              }),
              (t.prototype.sc = function (t, e, n) {
                var r,
                  i,
                  o = this
                return this.wo
                  .Wr(t, e, n)
                  .next(function (n) {
                    return (r = n), o.Ho.Ci(t, e)
                  })
                  .next(function (e) {
                    return (
                      (i = e),
                      o.ic(t, i, r).next(function (t) {
                        r = t
                        for (var e = 0, n = i; e < n.length; e++)
                          for (
                            var o = n[e], u = 0, s = o.mutations;
                            u < s.length;
                            u++
                          ) {
                            var a = s[u],
                              c = a.key,
                              h = Re(a, r.get(c), 0, o.Ss)
                            r = h instanceof St ? r.Ht(c, h) : r.remove(c)
                          }
                      })
                    )
                  })
                  .next(function () {
                    return (
                      r.forEach(function (t, n) {
                        fe(e, n) || (r = r.remove(t))
                      }),
                      r
                    )
                  })
              }),
              (t.prototype.ic = function (t, e, n) {
                for (var r = pn(), i = 0, o = e; i < o.length; i++)
                  for (var u = 0, s = o[i].mutations; u < s.length; u++) {
                    var a = s[u]
                    a instanceof qe &&
                      null === n.get(a.key) &&
                      (r = r.add(a.key))
                  }
                var c = n
                return this.wo.getEntries(t, r).next(function (t) {
                  return (
                    t.forEach(function (t, e) {
                      null !== e && e instanceof St && (c = c.Ht(t, e))
                    }),
                    c
                  )
                })
              }),
              t
            )
          })(),
          Ji = (function () {
            function t(t, e, n, r) {
              ;(this.targetId = t),
                (this.fromCache = e),
                (this.rc = n),
                (this.oc = r)
            }
            return (
              (t.cc = function (e, n) {
                for (
                  var r = pn(), i = pn(), o = 0, u = n.docChanges;
                  o < u.length;
                  o++
                ) {
                  var s = u[o]
                  switch (s.type) {
                    case 0:
                      r = r.add(s.doc.key)
                      break
                    case 1:
                      i = i.add(s.doc.key)
                  }
                }
                return new t(e, n.fromCache, r, i)
              }),
              t
            )
          })(),
          Wi = (function () {
            function t() {}
            return (
              (t.prototype.ac = function (t) {
                this.uc = t
              }),
              (t.prototype.Wr = function (t, e, n, i) {
                var o = this
                return (function (t) {
                  return (
                    0 === t.filters.length &&
                    null === t.limit &&
                    null == t.startAt &&
                    null == t.endAt &&
                    (0 === t.Nt.length ||
                      (1 === t.Nt.length && t.Nt[0].field.ht()))
                  )
                })(e) || n.isEqual(K.min())
                  ? this.hc(t, e)
                  : this.uc.Zo(t, i).next(function (u) {
                      var s = o.lc(e, u)
                      return (te(e) || ee(e)) && o._c(e.limitType, s, i, n)
                        ? o.hc(t, e)
                        : (l() <= r.a.DEBUG &&
                            d(
                              'QueryEngine',
                              'Re-using previous result from %s to execute query: %s',
                              n.toString(),
                              he(e)
                            ),
                          o.uc.Wr(t, e, n).next(function (t) {
                            return (
                              s.forEach(function (e) {
                                t = t.Ht(e.key, e)
                              }),
                              t
                            )
                          }))
                    })
              }),
              (t.prototype.lc = function (t, e) {
                var n = new nn(le(t))
                return (
                  e.forEach(function (e, r) {
                    r instanceof St && fe(t, r) && (n = n.add(r))
                  }),
                  n
                )
              }),
              (t.prototype._c = function (t, e, n, r) {
                if (n.size !== e.size) return !0
                var i = 'F' === t ? e.last() : e.first()
                return !!i && (i.hasPendingWrites || i.version.u(r) > 0)
              }),
              (t.prototype.hc = function (t, e) {
                return (
                  l() <= r.a.DEBUG &&
                    d(
                      'QueryEngine',
                      'Using full collection scan to execute query:',
                      he(e)
                    ),
                  this.uc.Wr(t, e, K.min())
                )
              }),
              t
            )
          })(),
          Xi = (function () {
            function t(t, e, n, r) {
              ;(this.persistence = t),
                (this.fc = e),
                (this.Kt = r),
                (this.dc = new Ze(O)),
                (this.wc = new pi(function (t) {
                  return Ct(t)
                }, Pt)),
                (this.Ec = K.min()),
                (this.Ho = t.Ko(n)),
                (this.Tc = t.Or()),
                (this.fo = t.Dr()),
                (this.Ic = new Ki(this.Tc, this.Ho, this.persistence.Wo())),
                (this.Eo = t.jo()),
                this.fc.ac(this.Ic)
            }
            return (
              (t.prototype.mr = function (t) {
                var e = this
                return this.persistence.runTransaction(
                  'Collect garbage',
                  'readwrite-primary',
                  function (n) {
                    return t.pr(n, e.dc)
                  }
                )
              }),
              t
            )
          })()
        function Yi(t, e, n, r) {
          return new Xi(t, e, n, r)
        }
        function Qi(t, e) {
          return Object(h.b)(this, void 0, void 0, function () {
            var n, r, i, o
            return Object(h.d)(this, function (u) {
              switch (u.label) {
                case 0:
                  return (
                    (n = _(t)),
                    (r = n.Ho),
                    (i = n.Ic),
                    [
                      4,
                      n.persistence.runTransaction(
                        'Handle user change',
                        'readonly',
                        function (t) {
                          var o
                          return n.Ho.bi(t)
                            .next(function (u) {
                              return (
                                (o = u),
                                (r = n.persistence.Ko(e)),
                                (i = new Ki(n.Tc, r, n.persistence.Wo())),
                                r.bi(t)
                              )
                            })
                            .next(function (e) {
                              for (
                                var n = [], r = [], u = pn(), s = 0, a = o;
                                s < a.length;
                                s++
                              ) {
                                var c = a[s]
                                n.push(c.batchId)
                                for (
                                  var h = 0, f = c.mutations;
                                  h < f.length;
                                  h++
                                ) {
                                  var l = f[h]
                                  u = u.add(l.key)
                                }
                              }
                              for (var p = 0, d = e; p < d.length; p++) {
                                var v = d[p]
                                r.push(v.batchId)
                                for (
                                  var y = 0, m = v.mutations;
                                  y < m.length;
                                  y++
                                ) {
                                  var g = m[y]
                                  u = u.add(g.key)
                                }
                              }
                              return i.Zo(t, u).next(function (t) {
                                return { mc: t, Ac: n, Rc: r }
                              })
                            })
                        }
                      ),
                    ]
                  )
                case 1:
                  return (
                    (o = u.sent()),
                    [2, ((n.Ho = r), (n.Ic = i), n.fc.ac(n.Ic), o)]
                  )
              }
            })
          })
        }
        function $i(t, e) {
          var n = _(t)
          return n.persistence.runTransaction(
            'Acknowledge batch',
            'readwrite-primary',
            function (t) {
              var r = e.batch.keys(),
                i = n.Tc.Fr({ jr: !0 })
              return (function (t, e, n, r) {
                var i = n.batch,
                  o = i.keys(),
                  u = sr.resolve()
                return (
                  o.forEach(function (t) {
                    u = u
                      .next(function () {
                        return r.fi(e, t)
                      })
                      .next(function (e) {
                        var o = e,
                          u = n.Os.get(t)
                        I(null !== u),
                          (!o || o.version.u(u) < 0) &&
                            (o = i.Ds(t, o, n)) &&
                            r.ui(o, n.Fs)
                      })
                  }),
                  u.next(function () {
                    return t.Ho.xi(e, i)
                  })
                )
              })(n, t, e, i)
                .next(function () {
                  return i.apply(t)
                })
                .next(function () {
                  return n.Ho.Oi(t)
                })
                .next(function () {
                  return n.Ic.Zo(t, r)
                })
            }
          )
        }
        function Zi(t) {
          var e = _(t)
          return e.persistence.runTransaction(
            'Get last remote snapshot version',
            'readonly',
            function (t) {
              return e.fo.Ki(t)
            }
          )
        }
        function to(t, e) {
          var n = _(t),
            r = e.Mt,
            i = n.dc
          return n.persistence
            .runTransaction(
              'Apply remote event',
              'readwrite-primary',
              function (t) {
                var o = n.Tc.Fr({ jr: !0 })
                i = n.dc
                var u = []
                e.Oe.forEach(function (e, o) {
                  var s = i.get(o)
                  if (s) {
                    u.push(
                      n.fo.ir(t, e.Ke, o).next(function () {
                        return n.fo.nr(t, e.Ue, o)
                      })
                    )
                    var a = e.resumeToken
                    if (a.o() > 0) {
                      var c = s.$t(a, r).Lt(t.vs)
                      ;(i = i.Ht(o, c)),
                        (function (t, e, n) {
                          return (
                            I(e.resumeToken.o() > 0),
                            0 === t.resumeToken.o() ||
                              e.Mt.j() - t.Mt.j() >= 3e8 ||
                              n.Ue.size + n.Qe.size + n.Ke.size > 0
                          )
                        })(s, c, e) && u.push(n.fo.Ji(t, c))
                    }
                  }
                })
                var s = sn()
                if (
                  (e.Me.forEach(function (r, i) {
                    e.Le.has(r) && u.push(n.persistence.Ii.kr(t, r))
                  }),
                  u.push(
                    eo(t, o, e.Me, r, void 0).next(function (t) {
                      s = t
                    })
                  ),
                  !r.isEqual(K.min()))
                ) {
                  var a = n.fo.Ki(t).next(function (e) {
                    return n.fo.ji(t, t.vs, r)
                  })
                  u.push(a)
                }
                return sr
                  .$n(u)
                  .next(function () {
                    return o.apply(t)
                  })
                  .next(function () {
                    return n.Ic.tc(t, s)
                  })
              }
            )
            .then(function (t) {
              return (n.dc = i), t
            })
        }
        function eo(t, e, n, r, i) {
          var o = pn()
          return (
            n.forEach(function (t) {
              return (o = o.add(t))
            }),
            e.getEntries(t, o).next(function (t) {
              var o = sn()
              return (
                n.forEach(function (n, u) {
                  var s = t.get(n),
                    a = (null == i ? void 0 : i.get(n)) || r
                  u instanceof At && u.version.isEqual(K.min())
                    ? (e._i(n, a), (o = o.Ht(n, u)))
                    : null == s ||
                      u.version.u(s.version) > 0 ||
                      (0 === u.version.u(s.version) && s.hasPendingWrites)
                    ? (e.ui(u, a), (o = o.Ht(n, u)))
                    : d(
                        'LocalStore',
                        'Ignoring outdated watch update for ',
                        n,
                        '. Current version:',
                        s.version,
                        ' Watch version:',
                        u.version
                      )
                }),
                o
              )
            })
          )
        }
        function no(t, e) {
          var n = _(t)
          return n.persistence.runTransaction(
            'Get next mutation batch',
            'readonly',
            function (t) {
              return void 0 === e && (e = -1), n.Ho.Vi(t, e)
            }
          )
        }
        function ro(t, e) {
          var n = _(t)
          return n.persistence
            .runTransaction('Allocate target', 'readwrite', function (t) {
              var r
              return n.fo.er(t, e).next(function (i) {
                return i
                  ? ((r = i), sr.resolve(r))
                  : n.fo.qi(t).next(function (i) {
                      return (
                        (r = new de(e, i, 0, t.vs)),
                        n.fo.Gi(t, r).next(function () {
                          return r
                        })
                      )
                    })
              })
            })
            .then(function (t) {
              var r = n.dc.get(t.targetId)
              return (
                (null === r || t.Mt.u(r.Mt) > 0) &&
                  ((n.dc = n.dc.Ht(t.targetId, t)), n.wc.set(e, t.targetId)),
                t
              )
            })
        }
        function io(t, e, n) {
          return Object(h.b)(this, void 0, void 0, function () {
            var r, i, o, u
            return Object(h.d)(this, function (s) {
              switch (s.label) {
                case 0:
                  ;(r = _(t)),
                    (i = r.dc.get(e)),
                    (o = n ? 'readwrite' : 'readwrite-primary'),
                    (s.label = 1)
                case 1:
                  return (
                    s.trys.push([1, 4, , 5]),
                    n
                      ? [3, 3]
                      : [
                          4,
                          r.persistence.runTransaction(
                            'Release target',
                            o,
                            function (t) {
                              return r.persistence.Ii.removeTarget(t, i)
                            }
                          ),
                        ]
                  )
                case 2:
                  s.sent(), (s.label = 3)
                case 3:
                  return [3, 5]
                case 4:
                  if (!fr((u = s.sent()))) throw u
                  return (
                    d(
                      'LocalStore',
                      'Failed to update sequence numbers for target ' +
                        e +
                        ': ' +
                        u
                    ),
                    [3, 5]
                  )
                case 5:
                  return (r.dc = r.dc.remove(e)), r.wc.delete(i.target), [2]
              }
            })
          })
        }
        function oo(t, e, n) {
          var r = _(t),
            i = K.min(),
            o = pn()
          return r.persistence.runTransaction(
            'Execute query',
            'readonly',
            function (t) {
              return (function (t, e, n) {
                var r = _(t),
                  i = r.wc.get(n)
                return void 0 !== i ? sr.resolve(r.dc.get(i)) : r.fo.er(e, n)
              })(r, t, se(e))
                .next(function (e) {
                  if (e)
                    return (
                      (i = e.lastLimboFreeSnapshotVersion),
                      r.fo.cr(t, e.targetId).next(function (t) {
                        o = t
                      })
                    )
                })
                .next(function () {
                  return r.fc.Wr(t, e, n ? i : K.min(), n ? o : pn())
                })
                .next(function (t) {
                  return { documents: t, Pc: o }
                })
            }
          )
        }
        function so(t, e) {
          var n = _(t),
            r = _(n.fo),
            i = n.dc.get(e)
          return i
            ? Promise.resolve(i.target)
            : n.persistence.runTransaction(
                'Get target data',
                'readonly',
                function (t) {
                  return r.Dn(t, e).next(function (t) {
                    return t ? t.target : null
                  })
                }
              )
        }
        function uo(t) {
          var e = _(t)
          return e.persistence
            .runTransaction(
              'Get new document changes',
              'readonly',
              function (t) {
                return (function (t, e, n) {
                  var r = _(t),
                    i = sn(),
                    o = Xr(n),
                    u = Ri(e),
                    s = IDBKeyRange.lowerBound(o, !0)
                  return u
                    .ls({ index: kr.readTimeIndex, range: s }, function (t, e) {
                      var n = Jr(r.Kt, e)
                      ;(i = i.Ht(n.key, n)), (o = e.readTime)
                    })
                    .next(function () {
                      return { zo: i, readTime: Yr(o) }
                    })
                })(e.Tc, t, e.Ec)
              }
            )
            .then(function (t) {
              var n = t.zo,
                r = t.readTime
              return (e.Ec = r), n
            })
        }
        function ao(t) {
          return Object(h.b)(this, void 0, void 0, function () {
            var e
            return Object(h.d)(this, function (n) {
              return [
                2,
                (e = _(t)).persistence
                  .runTransaction(
                    'Synchronize last document change read time',
                    'readonly',
                    function (t) {
                      return (function (t) {
                        var e = Ri(t),
                          n = K.min()
                        return e
                          .ls(
                            { index: kr.readTimeIndex, reverse: !0 },
                            function (t, e, r) {
                              e.readTime && (n = Yr(e.readTime)), r.done()
                            }
                          )
                          .next(function () {
                            return n
                          })
                      })(t)
                    }
                  )
                  .then(function (t) {
                    e.Ec = t
                  }),
              ]
            })
          })
        }
        function co(t, e, n, r) {
          return Object(h.b)(this, void 0, void 0, function () {
            var i, o, u, s, a, c, f, l, d, p
            return Object(h.d)(this, function (h) {
              switch (h.label) {
                case 0:
                  for (
                    i = _(t), o = pn(), u = sn(), s = fn(), a = 0, c = n;
                    a < c.length;
                    a++
                  )
                    (f = c[a]),
                      (l = e.yc(f.metadata.name)),
                      f.document && (o = o.add(l)),
                      (u = u.Ht(l, e.gc(f))),
                      (s = s.Ht(l, e.Vc(f.metadata.readTime)))
                  return (
                    (d = i.Tc.Fr({ jr: !0 })),
                    [
                      4,
                      ro(
                        i,
                        (function (t) {
                          return se(Zt(W.ct('__bundle__/docs/' + t)))
                        })(r)
                      ),
                    ]
                  )
                case 1:
                  return (
                    (p = h.sent()),
                    [
                      2,
                      i.persistence.runTransaction(
                        'Apply bundle documents',
                        'readwrite',
                        function (t) {
                          return eo(t, d, u, K.min(), s)
                            .next(function (e) {
                              return d.apply(t), e
                            })
                            .next(function (e) {
                              return i.fo
                                .Xi(t, p.targetId)
                                .next(function () {
                                  return i.fo.nr(t, o, p.targetId)
                                })
                                .next(function () {
                                  return i.Ic.tc(t, e)
                                })
                            })
                        }
                      ),
                    ]
                  )
              }
            })
          })
        }
        function ho(t, e, n) {
          return (
            void 0 === n && (n = pn()),
            Object(h.b)(this, void 0, void 0, function () {
              var r, i
              return Object(h.d)(this, function (o) {
                switch (o.label) {
                  case 0:
                    return [4, ro(t, se(ni(e.bundledQuery)))]
                  case 1:
                    return (
                      (r = o.sent()),
                      [
                        2,
                        (i = _(t)).persistence.runTransaction(
                          'Save named query',
                          'readwrite',
                          function (t) {
                            var o = Pn(e.readTime)
                            if (r.Mt.u(o) >= 0) return i.Eo.Bs(t, e)
                            var u = r.$t(S.h, o)
                            return (
                              (i.dc = i.dc.Ht(u.targetId, u)),
                              i.fo
                                .Ji(t, u)
                                .next(function () {
                                  return i.fo.Xi(t, r.targetId)
                                })
                                .next(function () {
                                  return i.fo.nr(t, n, r.targetId)
                                })
                                .next(function () {
                                  return i.Eo.Bs(t, e)
                                })
                            )
                          }
                        ),
                      ]
                    )
                }
              })
            })
          )
        }
        var fo = (function () {
            function t(t) {
              ;(this.Kt = t), (this.bc = new Map()), (this.vc = new Map())
            }
            return (
              (t.prototype.Ms = function (t, e) {
                return sr.resolve(this.bc.get(e))
              }),
              (t.prototype.Ls = function (t, e) {
                var n
                return (
                  this.bc.set(e.id, {
                    id: (n = e).id,
                    version: n.version,
                    createTime: Pn(n.createTime),
                  }),
                  sr.resolve()
                )
              }),
              (t.prototype.$s = function (t, e) {
                return sr.resolve(this.vc.get(e))
              }),
              (t.prototype.Bs = function (t, e) {
                return (
                  this.vc.set(
                    e.name,
                    (function (t) {
                      return {
                        name: t.name,
                        query: ni(t.bundledQuery),
                        readTime: Pn(t.readTime),
                      }
                    })(e)
                  ),
                  sr.resolve()
                )
              }),
              t
            )
          })(),
          lo = (function () {
            function t() {
              ;(this.Sc = new nn(po.Dc)), (this.Cc = new nn(po.xc))
            }
            return (
              (t.prototype.nt = function () {
                return this.Sc.nt()
              }),
              (t.prototype.sr = function (t, e) {
                var n = new po(t, e)
                ;(this.Sc = this.Sc.add(n)), (this.Cc = this.Cc.add(n))
              }),
              (t.prototype.Nc = function (t, e) {
                var n = this
                t.forEach(function (t) {
                  return n.sr(t, e)
                })
              }),
              (t.prototype.rr = function (t, e) {
                this.Fc(new po(t, e))
              }),
              (t.prototype.Oc = function (t, e) {
                var n = this
                t.forEach(function (t) {
                  return n.rr(t, e)
                })
              }),
              (t.prototype.kc = function (t) {
                var e = this,
                  n = new Y(new W([])),
                  r = new po(n, t),
                  i = new po(n, t + 1),
                  o = []
                return (
                  this.Cc.Ae([r, i], function (t) {
                    e.Fc(t), o.push(t.key)
                  }),
                  o
                )
              }),
              (t.prototype.Mc = function () {
                var t = this
                this.Sc.forEach(function (e) {
                  return t.Fc(e)
                })
              }),
              (t.prototype.Fc = function (t) {
                ;(this.Sc = this.Sc.delete(t)), (this.Cc = this.Cc.delete(t))
              }),
              (t.prototype.Lc = function (t) {
                var e = new Y(new W([])),
                  n = new po(e, t),
                  r = new po(e, t + 1),
                  i = pn()
                return (
                  this.Cc.Ae([n, r], function (t) {
                    i = i.add(t.key)
                  }),
                  i
                )
              }),
              (t.prototype.ki = function (t) {
                var e = new po(t, 0),
                  n = this.Sc.Pe(e)
                return null !== n && t.isEqual(n.key)
              }),
              t
            )
          })(),
          po = (function () {
            function t(t, e) {
              ;(this.key = t), (this.$c = e)
            }
            return (
              (t.Dc = function (t, e) {
                return Y.J(t.key, e.key) || O(t.$c, e.$c)
              }),
              (t.xc = function (t, e) {
                return O(t.$c, e.$c) || Y.J(t.key, e.key)
              }),
              t
            )
          })(),
          vo = (function () {
            function t(t, e) {
              ;(this.Ti = t),
                (this.Ii = e),
                (this.Ho = []),
                (this.Bc = 1),
                (this.qc = new nn(po.Dc))
            }
            return (
              (t.prototype.Ri = function (t) {
                return sr.resolve(0 === this.Ho.length)
              }),
              (t.prototype.Pi = function (t, e, n, r) {
                var i = this.Bc
                this.Bc++, this.Ho.length > 0 && this.Ho[this.Ho.length - 1]
                var o = new Hr(i, e, n, r)
                this.Ho.push(o)
                for (var u = 0, s = r; u < s.length; u++) {
                  var a = s[u]
                  ;(this.qc = this.qc.add(new po(a.key, i))),
                    this.Ti.Us(t, a.key.path.Z())
                }
                return sr.resolve(o)
              }),
              (t.prototype.yi = function (t, e) {
                return sr.resolve(this.Uc(e))
              }),
              (t.prototype.Vi = function (t, e) {
                var n = e + 1,
                  r = this.Qc(n),
                  i = r < 0 ? 0 : r
                return sr.resolve(this.Ho.length > i ? this.Ho[i] : null)
              }),
              (t.prototype.pi = function () {
                return sr.resolve(0 === this.Ho.length ? -1 : this.Bc - 1)
              }),
              (t.prototype.bi = function (t) {
                return sr.resolve(this.Ho.slice())
              }),
              (t.prototype.vi = function (t, e) {
                var n = this,
                  r = new po(e, 0),
                  i = new po(e, Number.POSITIVE_INFINITY),
                  o = []
                return (
                  this.qc.Ae([r, i], function (t) {
                    var e = n.Uc(t.$c)
                    o.push(e)
                  }),
                  sr.resolve(o)
                )
              }),
              (t.prototype.Si = function (t, e) {
                var n = this,
                  r = new nn(O)
                return (
                  e.forEach(function (t) {
                    var e = new po(t, 0),
                      i = new po(t, Number.POSITIVE_INFINITY)
                    n.qc.Ae([e, i], function (t) {
                      r = r.add(t.$c)
                    })
                  }),
                  sr.resolve(this.Kc(r))
                )
              }),
              (t.prototype.Ci = function (t, e) {
                var n = e.path,
                  r = n.length + 1,
                  i = n
                Y.Et(i) || (i = i.child(''))
                var o = new po(new Y(i), 0),
                  u = new nn(O)
                return (
                  this.qc.Re(function (t) {
                    var e = t.key.path
                    return (
                      !!n.st(e) && (e.length === r && (u = u.add(t.$c)), !0)
                    )
                  }, o),
                  sr.resolve(this.Kc(u))
                )
              }),
              (t.prototype.Kc = function (t) {
                var e = this,
                  n = []
                return (
                  t.forEach(function (t) {
                    var r = e.Uc(t)
                    null !== r && n.push(r)
                  }),
                  n
                )
              }),
              (t.prototype.xi = function (t, e) {
                var n = this
                I(0 === this.Wc(e.batchId, 'removed')), this.Ho.shift()
                var r = this.qc
                return sr
                  .forEach(e.mutations, function (i) {
                    var o = new po(i.key, e.batchId)
                    return (r = r.delete(o)), n.Ii.Fi(t, i.key)
                  })
                  .next(function () {
                    n.qc = r
                  })
              }),
              (t.prototype.Ni = function (t) {}),
              (t.prototype.ki = function (t, e) {
                var n = new po(e, 0),
                  r = this.qc.Pe(n)
                return sr.resolve(e.isEqual(r && r.key))
              }),
              (t.prototype.Oi = function (t) {
                return this.Ho.length, sr.resolve()
              }),
              (t.prototype.Wc = function (t, e) {
                return this.Qc(t)
              }),
              (t.prototype.Qc = function (t) {
                return 0 === this.Ho.length ? 0 : t - this.Ho[0].batchId
              }),
              (t.prototype.Uc = function (t) {
                var e = this.Qc(t)
                return e < 0 || e >= this.Ho.length ? null : this.Ho[e]
              }),
              t
            )
          })(),
          yo = (function () {
            function t(t, e) {
              ;(this.Ti = t),
                (this.jc = e),
                (this.docs = new Ze(Y.J)),
                (this.size = 0)
            }
            return (
              (t.prototype.ui = function (t, e, n) {
                var r = e.key,
                  i = this.docs.get(r),
                  o = i ? i.size : 0,
                  u = this.jc(e)
                return (
                  (this.docs = this.docs.Ht(r, {
                    li: e,
                    size: u,
                    readTime: n,
                  })),
                  (this.size += u - o),
                  this.Ti.Us(t, r.path.Z())
                )
              }),
              (t.prototype._i = function (t) {
                var e = this.docs.get(t)
                e && ((this.docs = this.docs.remove(t)), (this.size -= e.size))
              }),
              (t.prototype.fi = function (t, e) {
                var n = this.docs.get(e)
                return sr.resolve(n ? n.li : null)
              }),
              (t.prototype.getEntries = function (t, e) {
                var n = this,
                  r = un()
                return (
                  e.forEach(function (t) {
                    var e = n.docs.get(t)
                    r = r.Ht(t, e ? e.li : null)
                  }),
                  sr.resolve(r)
                )
              }),
              (t.prototype.Wr = function (t, e, n) {
                for (
                  var r = cn(),
                    i = new Y(e.path.child('')),
                    o = this.docs.ne(i);
                  o.ae();

                ) {
                  var u = o.ce(),
                    s = u.key,
                    a = u.value,
                    c = a.li,
                    h = a.readTime
                  if (!e.path.st(s.path)) break
                  h.u(n) <= 0 ||
                    (c instanceof St && fe(e, c) && (r = r.Ht(c.key, c)))
                }
                return sr.resolve(r)
              }),
              (t.prototype.Gc = function (t, e) {
                return sr.forEach(this.docs, function (t) {
                  return e(t)
                })
              }),
              (t.prototype.Fr = function (t) {
                return new go(this)
              }),
              (t.prototype.Mr = function (t) {
                return sr.resolve(this.size)
              }),
              t
            )
          })(),
          go = (function (t) {
            function e(e) {
              var n = this
              return ((n = t.call(this) || this).Gr = e), n
            }
            return (
              Object(h.c)(e, t),
              (e.prototype.Ei = function (t) {
                var e = this,
                  n = []
                return (
                  this.oi.forEach(function (r, i) {
                    i && i.li ? n.push(e.Gr.ui(t, i.li, e.ai(r))) : e.Gr._i(r)
                  }),
                  sr.$n(n)
                )
              }),
              (e.prototype.di = function (t, e) {
                return this.Gr.fi(t, e)
              }),
              (e.prototype.wi = function (t, e) {
                return this.Gr.getEntries(t, e)
              }),
              e
            )
          })(di),
          bo = (function () {
            function t(t) {
              ;(this.persistence = t),
                (this.zc = new pi(function (t) {
                  return Ct(t)
                }, Pt)),
                (this.lastRemoteSnapshotVersion = K.min()),
                (this.highestTargetId = 0),
                (this.Hc = 0),
                (this.Jc = new lo()),
                (this.targetCount = 0),
                (this.Yc = _i.$i())
            }
            return (
              (t.prototype.mn = function (t, e) {
                return (
                  this.zc.forEach(function (t, n) {
                    return e(n)
                  }),
                  sr.resolve()
                )
              }),
              (t.prototype.Ki = function (t) {
                return sr.resolve(this.lastRemoteSnapshotVersion)
              }),
              (t.prototype.Wi = function (t) {
                return sr.resolve(this.Hc)
              }),
              (t.prototype.qi = function (t) {
                return (
                  (this.highestTargetId = this.Yc.next()),
                  sr.resolve(this.highestTargetId)
                )
              }),
              (t.prototype.ji = function (t, e, n) {
                return (
                  n && (this.lastRemoteSnapshotVersion = n),
                  e > this.Hc && (this.Hc = e),
                  sr.resolve()
                )
              }),
              (t.prototype.zi = function (t) {
                this.zc.set(t.target, t)
                var e = t.targetId
                e > this.highestTargetId &&
                  ((this.Yc = new _i(e)), (this.highestTargetId = e)),
                  t.sequenceNumber > this.Hc && (this.Hc = t.sequenceNumber)
              }),
              (t.prototype.Gi = function (t, e) {
                return this.zi(e), (this.targetCount += 1), sr.resolve()
              }),
              (t.prototype.Ji = function (t, e) {
                return this.zi(e), sr.resolve()
              }),
              (t.prototype.Yi = function (t, e) {
                return (
                  this.zc.delete(e.target),
                  this.Jc.kc(e.targetId),
                  (this.targetCount -= 1),
                  sr.resolve()
                )
              }),
              (t.prototype.Zi = function (t, e, n) {
                var r = this,
                  i = 0,
                  o = []
                return (
                  this.zc.forEach(function (u, s) {
                    s.sequenceNumber <= e &&
                      null === n.get(s.targetId) &&
                      (r.zc.delete(u), o.push(r.Xi(t, s.targetId)), i++)
                  }),
                  sr.$n(o).next(function () {
                    return i
                  })
                )
              }),
              (t.prototype.tr = function (t) {
                return sr.resolve(this.targetCount)
              }),
              (t.prototype.er = function (t, e) {
                var n = this.zc.get(e) || null
                return sr.resolve(n)
              }),
              (t.prototype.nr = function (t, e, n) {
                return this.Jc.Nc(e, n), sr.resolve()
              }),
              (t.prototype.ir = function (t, e, n) {
                this.Jc.Oc(e, n)
                var r = this.persistence.Ii,
                  i = []
                return (
                  r &&
                    e.forEach(function (e) {
                      i.push(r.Fi(t, e))
                    }),
                  sr.$n(i)
                )
              }),
              (t.prototype.Xi = function (t, e) {
                return this.Jc.kc(e), sr.resolve()
              }),
              (t.prototype.cr = function (t, e) {
                var n = this.Jc.Lc(e)
                return sr.resolve(n)
              }),
              (t.prototype.ki = function (t, e) {
                return sr.resolve(this.Jc.ki(e))
              }),
              t
            )
          })(),
          mo = (function () {
            function t(t, e) {
              var n = this
              ;(this.Xc = {}),
                (this.io = new H(0)),
                (this.ro = !1),
                (this.ro = !0),
                (this.Ii = t(this)),
                (this.fo = new bo(this)),
                (this.Ti = new oi()),
                (this.wo = (function (t, e) {
                  return new yo(t, function (t) {
                    return n.Ii.Zc(t)
                  })
                })(this.Ti)),
                (this.Kt = new Kr(e)),
                (this.Eo = new fo(this.Kt))
            }
            return (
              (t.prototype.start = function () {
                return Promise.resolve()
              }),
              (t.prototype.Lo = function () {
                return (this.ro = !1), Promise.resolve()
              }),
              Object.defineProperty(t.prototype, 'Tr', {
                get: function () {
                  return this.ro
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.yo = function () {}),
              (t.prototype.Vo = function () {}),
              (t.prototype.Wo = function () {
                return this.Ti
              }),
              (t.prototype.Ko = function (t) {
                var e = this.Xc[t.R()]
                return (
                  e || ((e = new vo(this.Ti, this.Ii)), (this.Xc[t.R()] = e)), e
                )
              }),
              (t.prototype.Dr = function () {
                return this.fo
              }),
              (t.prototype.Or = function () {
                return this.wo
              }),
              (t.prototype.jo = function () {
                return this.Eo
              }),
              (t.prototype.runTransaction = function (t, e, n) {
                var r = this
                d('MemoryPersistence', 'Starting transaction:', t)
                var i = new wo(this.io.next())
                return (
                  this.Ii.ta(),
                  n(i)
                    .next(function (t) {
                      return r.Ii.ea(i).next(function () {
                        return t
                      })
                    })
                    .Mn()
                    .then(function (t) {
                      return i.ps(), t
                    })
                )
              }),
              (t.prototype.na = function (t, e) {
                return sr.Bn(
                  Object.values(this.Xc).map(function (n) {
                    return function () {
                      return n.ki(t, e)
                    }
                  })
                )
              }),
              t
            )
          })(),
          wo = (function (t) {
            function e(e) {
              var n = this
              return ((n = t.call(this) || this).vs = e), n
            }
            return Object(h.c)(e, t), e
          })(wr),
          Io = (function () {
            function t(t) {
              ;(this.persistence = t), (this.sa = new lo()), (this.ia = null)
            }
            return (
              (t.ra = function (e) {
                return new t(e)
              }),
              Object.defineProperty(t.prototype, 'oa', {
                get: function () {
                  if (this.ia) return this.ia
                  throw w()
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.sr = function (t, e, n) {
                return (
                  this.sa.sr(n, e), this.oa.delete(n.toString()), sr.resolve()
                )
              }),
              (t.prototype.rr = function (t, e, n) {
                return this.sa.rr(n, e), this.oa.add(n.toString()), sr.resolve()
              }),
              (t.prototype.Fi = function (t, e) {
                return this.oa.add(e.toString()), sr.resolve()
              }),
              (t.prototype.removeTarget = function (t, e) {
                var n = this
                this.sa.kc(e.targetId).forEach(function (t) {
                  return n.oa.add(t.toString())
                })
                var r = this.persistence.Dr()
                return r
                  .cr(t, e.targetId)
                  .next(function (t) {
                    t.forEach(function (t) {
                      return n.oa.add(t.toString())
                    })
                  })
                  .next(function () {
                    return r.Yi(t, e)
                  })
              }),
              (t.prototype.ta = function () {
                this.ia = new Set()
              }),
              (t.prototype.ea = function (t) {
                var e = this,
                  n = this.persistence.Or().Fr()
                return sr
                  .forEach(this.oa, function (r) {
                    var i = Y.ft(r)
                    return e.ca(t, i).next(function (t) {
                      t || n._i(i)
                    })
                  })
                  .next(function () {
                    return (e.ia = null), n.apply(t)
                  })
              }),
              (t.prototype.kr = function (t, e) {
                var n = this
                return this.ca(t, e).next(function (t) {
                  t ? n.oa.delete(e.toString()) : n.oa.add(e.toString())
                })
              }),
              (t.prototype.Zc = function (t) {
                return 0
              }),
              (t.prototype.ca = function (t, e) {
                var n = this
                return sr.Bn([
                  function () {
                    return sr.resolve(n.sa.ki(e))
                  },
                  function () {
                    return n.persistence.Dr().ki(t, e)
                  },
                  function () {
                    return n.persistence.na(t, e)
                  },
                ])
              }),
              t
            )
          })()
        function _o(t, e) {
          return 'firestore_clients_' + t + '_' + e
        }
        function Eo(t, e, n) {
          var r = 'firestore_mutations_' + t + '_' + n
          return e.A() && (r += '_' + e.uid), r
        }
        function To(t, e) {
          return 'firestore_targets_' + t + '_' + e
        }
        var Oo = (function () {
            function t(t, e, n, r) {
              ;(this.user = t),
                (this.batchId = e),
                (this.state = n),
                (this.error = r)
            }
            return (
              (t.aa = function (e, n, r) {
                var i = JSON.parse(r),
                  o =
                    'object' == typeof i &&
                    -1 !==
                      ['pending', 'acknowledged', 'rejected'].indexOf(
                        i.state
                      ) &&
                    (void 0 === i.error || 'object' == typeof i.error),
                  u = void 0
                return (
                  o &&
                    i.error &&
                    (o =
                      'string' == typeof i.error.message &&
                      'string' == typeof i.error.code) &&
                    (u = new x(i.error.code, i.error.message)),
                  o
                    ? new t(e, n, i.state, u)
                    : (v(
                        'SharedClientState',
                        "Failed to parse mutation state for ID '" +
                          n +
                          "': " +
                          r
                      ),
                      null)
                )
              }),
              (t.prototype.ua = function () {
                var t = { state: this.state, updateTimeMs: Date.now() }
                return (
                  this.error &&
                    (t.error = {
                      code: this.error.code,
                      message: this.error.message,
                    }),
                  JSON.stringify(t)
                )
              }),
              t
            )
          })(),
          No = (function () {
            function t(t, e, n) {
              ;(this.targetId = t), (this.state = e), (this.error = n)
            }
            return (
              (t.aa = function (e, n) {
                var r = JSON.parse(n),
                  i =
                    'object' == typeof r &&
                    -1 !==
                      ['not-current', 'current', 'rejected'].indexOf(r.state) &&
                    (void 0 === r.error || 'object' == typeof r.error),
                  o = void 0
                return (
                  i &&
                    r.error &&
                    (i =
                      'string' == typeof r.error.message &&
                      'string' == typeof r.error.code) &&
                    (o = new x(r.error.code, r.error.message)),
                  i
                    ? new t(e, r.state, o)
                    : (v(
                        'SharedClientState',
                        "Failed to parse target state for ID '" + e + "': " + n
                      ),
                      null)
                )
              }),
              (t.prototype.ua = function () {
                var t = { state: this.state, updateTimeMs: Date.now() }
                return (
                  this.error &&
                    (t.error = {
                      code: this.error.code,
                      message: this.error.message,
                    }),
                  JSON.stringify(t)
                )
              }),
              t
            )
          })(),
          jo = (function () {
            function t(t, e) {
              ;(this.clientId = t), (this.activeTargetIds = e)
            }
            return (
              (t.aa = function (e, n) {
                for (
                  var r = JSON.parse(n),
                    i =
                      'object' == typeof r &&
                      r.activeTargetIds instanceof Array,
                    o = vn(),
                    u = 0;
                  i && u < r.activeTargetIds.length;
                  ++u
                )
                  (i = ht(r.activeTargetIds[u])),
                    (o = o.add(r.activeTargetIds[u]))
                return i
                  ? new t(e, o)
                  : (v(
                      'SharedClientState',
                      "Failed to parse client data for instance '" +
                        e +
                        "': " +
                        n
                    ),
                    null)
              }),
              t
            )
          })(),
          So = (function () {
            function t(t, e) {
              ;(this.clientId = t), (this.onlineState = e)
            }
            return (
              (t.aa = function (e) {
                var n = JSON.parse(e)
                return 'object' == typeof n &&
                  -1 !==
                    ['Unknown', 'Online', 'Offline'].indexOf(n.onlineState) &&
                  'string' == typeof n.clientId
                  ? new t(n.clientId, n.onlineState)
                  : (v(
                      'SharedClientState',
                      'Failed to parse online state: ' + e
                    ),
                    null)
              }),
              t
            )
          })(),
          Ao = (function () {
            function t() {
              this.activeTargetIds = vn()
            }
            return (
              (t.prototype.ha = function (t) {
                this.activeTargetIds = this.activeTargetIds.add(t)
              }),
              (t.prototype.la = function (t) {
                this.activeTargetIds = this.activeTargetIds.delete(t)
              }),
              (t.prototype.ua = function () {
                var t = {
                  activeTargetIds: this.activeTargetIds.rt(),
                  updateTimeMs: Date.now(),
                }
                return JSON.stringify(t)
              }),
              t
            )
          })(),
          xo = (function () {
            function t(t, e, n, r, i) {
              ;(this.window = t),
                (this.eo = e),
                (this.persistenceKey = n),
                (this._a = r),
                (this.fa = null),
                (this.da = null),
                (this.L = null),
                (this.wa = this.Ea.bind(this)),
                (this.Ta = new Ze(O)),
                (this.Tr = !1),
                (this.Ia = [])
              var o = n.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
              ;(this.storage = this.window.localStorage),
                (this.currentUser = i),
                (this.ma = _o(this.persistenceKey, this._a)),
                (this.Aa = (function (t) {
                  return 'firestore_sequence_number_' + t
                })(this.persistenceKey)),
                (this.Ta = this.Ta.Ht(this._a, new Ao())),
                (this.Ra = new RegExp('^firestore_clients_' + o + '_([^_]*)$')),
                (this.Pa = new RegExp(
                  '^firestore_mutations_' + o + '_(\\d+)(?:_(.*))?$'
                )),
                (this.ya = new RegExp('^firestore_targets_' + o + '_(\\d+)$')),
                (this.ga = (function (t) {
                  return 'firestore_online_state_' + t
                })(this.persistenceKey)),
                (this.Va = (function (t) {
                  return 'firestore_bundle_loaded_' + t
                })(this.persistenceKey)),
                this.window.addEventListener('storage', this.wa)
            }
            return (
              (t.Wn = function (t) {
                return !(!t || !t.localStorage)
              }),
              (t.prototype.start = function () {
                return Object(h.b)(this, void 0, void 0, function () {
                  var t,
                    e,
                    n,
                    r,
                    i,
                    o,
                    u,
                    s,
                    a,
                    c,
                    f,
                    l = this
                  return Object(h.d)(this, function (h) {
                    switch (h.label) {
                      case 0:
                        return [4, this.fa.Qo()]
                      case 1:
                        for (t = h.sent(), e = 0, n = t; e < n.length; e++)
                          (r = n[e]) !== this._a &&
                            (i = this.getItem(_o(this.persistenceKey, r))) &&
                            (o = jo.aa(r, i)) &&
                            (this.Ta = this.Ta.Ht(o.clientId, o))
                        for (
                          this.pa(),
                            (u = this.storage.getItem(this.ga)) &&
                              (s = this.ba(u)) &&
                              this.va(s),
                            a = 0,
                            c = this.Ia;
                          a < c.length;
                          a++
                        )
                          (f = c[a]), this.Ea(f)
                        return (
                          (this.Ia = []),
                          this.window.addEventListener('unload', function () {
                            return l.Lo()
                          }),
                          (this.Tr = !0),
                          [2]
                        )
                    }
                  })
                })
              }),
              (t.prototype.q = function (t) {
                this.setItem(this.Aa, JSON.stringify(t))
              }),
              (t.prototype.Sa = function () {
                return this.Da(this.Ta)
              }),
              (t.prototype.Ca = function (t) {
                var e = !1
                return (
                  this.Ta.forEach(function (n, r) {
                    r.activeTargetIds.has(t) && (e = !0)
                  }),
                  e
                )
              }),
              (t.prototype.xa = function (t) {
                this.Na(t, 'pending')
              }),
              (t.prototype.Fa = function (t, e, n) {
                this.Na(t, e, n), this.Oa(t)
              }),
              (t.prototype.ka = function (t) {
                var e = 'not-current'
                if (this.Ca(t)) {
                  var n = this.storage.getItem(To(this.persistenceKey, t))
                  if (n) {
                    var r = No.aa(t, n)
                    r && (e = r.state)
                  }
                }
                return this.Ma.ha(t), this.pa(), e
              }),
              (t.prototype.La = function (t) {
                this.Ma.la(t), this.pa()
              }),
              (t.prototype.$a = function (t) {
                return this.Ma.activeTargetIds.has(t)
              }),
              (t.prototype.Ba = function (t) {
                this.removeItem(To(this.persistenceKey, t))
              }),
              (t.prototype.qa = function (t, e, n) {
                this.Ua(t, e, n)
              }),
              (t.prototype.Qa = function (t, e, n) {
                var r = this
                e.forEach(function (t) {
                  r.Oa(t)
                }),
                  (this.currentUser = t),
                  n.forEach(function (t) {
                    r.xa(t)
                  })
              }),
              (t.prototype.Ka = function (t) {
                this.Wa(t)
              }),
              (t.prototype.ja = function () {
                this.Ga()
              }),
              (t.prototype.Lo = function () {
                this.Tr &&
                  (this.window.removeEventListener('storage', this.wa),
                  this.removeItem(this.ma),
                  (this.Tr = !1))
              }),
              (t.prototype.getItem = function (t) {
                var e = this.storage.getItem(t)
                return d('SharedClientState', 'READ', t, e), e
              }),
              (t.prototype.setItem = function (t, e) {
                d('SharedClientState', 'SET', t, e), this.storage.setItem(t, e)
              }),
              (t.prototype.removeItem = function (t) {
                d('SharedClientState', 'REMOVE', t), this.storage.removeItem(t)
              }),
              (t.prototype.Ea = function (t) {
                var e = this,
                  n = t
                if (n.storageArea === this.storage) {
                  if (
                    (d('SharedClientState', 'EVENT', n.key, n.newValue),
                    n.key === this.ma)
                  )
                    return void v(
                      'Received WebStorage notification for local change. Another client might have garbage-collected our state'
                    )
                  this.eo.bo(function () {
                    return Object(h.b)(e, void 0, void 0, function () {
                      var t, e, r, i, o, u
                      return Object(h.d)(this, function (s) {
                        if (this.Tr) {
                          if (null !== n.key)
                            if (this.Ra.test(n.key)) {
                              if (null == n.newValue)
                                return (
                                  (t = this.za(n.key)), [2, this.Ha(t, null)]
                                )
                              if ((e = this.Ja(n.key, n.newValue)))
                                return [2, this.Ha(e.clientId, e)]
                            } else if (this.Pa.test(n.key)) {
                              if (
                                null !== n.newValue &&
                                (r = this.Ya(n.key, n.newValue))
                              )
                                return [2, this.Xa(r)]
                            } else if (this.ya.test(n.key)) {
                              if (
                                null !== n.newValue &&
                                (i = this.Za(n.key, n.newValue))
                              )
                                return [2, this.tu(i)]
                            } else if (n.key === this.ga) {
                              if (
                                null !== n.newValue &&
                                (o = this.ba(n.newValue))
                              )
                                return [2, this.va(o)]
                            } else if (n.key === this.Aa)
                              (u = (function (t) {
                                var e = H.U
                                if (null != t)
                                  try {
                                    var n = JSON.parse(t)
                                    I('number' == typeof n), (e = n)
                                  } catch (t) {
                                    v(
                                      'SharedClientState',
                                      'Failed to read sequence number from WebStorage',
                                      t
                                    )
                                  }
                                return e
                              })(n.newValue)) !== H.U && this.L(u)
                            else if (n.key === this.Va) return [2, this.fa.eu()]
                        } else this.Ia.push(n)
                        return [2]
                      })
                    })
                  })
                }
              }),
              Object.defineProperty(t.prototype, 'Ma', {
                get: function () {
                  return this.Ta.get(this._a)
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.pa = function () {
                this.setItem(this.ma, this.Ma.ua())
              }),
              (t.prototype.Na = function (t, e, n) {
                var r = new Oo(this.currentUser, t, e, n),
                  i = Eo(this.persistenceKey, this.currentUser, t)
                this.setItem(i, r.ua())
              }),
              (t.prototype.Oa = function (t) {
                var e = Eo(this.persistenceKey, this.currentUser, t)
                this.removeItem(e)
              }),
              (t.prototype.Wa = function (t) {
                var e = { clientId: this._a, onlineState: t }
                this.storage.setItem(this.ga, JSON.stringify(e))
              }),
              (t.prototype.Ua = function (t, e, n) {
                var r = To(this.persistenceKey, t),
                  i = new No(t, e, n)
                this.setItem(r, i.ua())
              }),
              (t.prototype.Ga = function () {
                this.setItem(this.Va, 'value-not-used')
              }),
              (t.prototype.za = function (t) {
                var e = this.Ra.exec(t)
                return e ? e[1] : null
              }),
              (t.prototype.Ja = function (t, e) {
                var n = this.za(t)
                return jo.aa(n, e)
              }),
              (t.prototype.Ya = function (t, e) {
                var n = this.Pa.exec(t),
                  r = Number(n[1]),
                  i = void 0 !== n[2] ? n[2] : null
                return Oo.aa(new V(i), r, e)
              }),
              (t.prototype.Za = function (t, e) {
                var n = this.ya.exec(t),
                  r = Number(n[1])
                return No.aa(r, e)
              }),
              (t.prototype.ba = function (t) {
                return So.aa(t)
              }),
              (t.prototype.Xa = function (t) {
                return Object(h.b)(this, void 0, void 0, function () {
                  return Object(h.d)(this, function (e) {
                    return t.user.uid === this.currentUser.uid
                      ? [2, this.fa.nu(t.batchId, t.state, t.error)]
                      : (d(
                          'SharedClientState',
                          'Ignoring mutation for non-active user ' + t.user.uid
                        ),
                        [2])
                  })
                })
              }),
              (t.prototype.tu = function (t) {
                return this.fa.su(t.targetId, t.state, t.error)
              }),
              (t.prototype.Ha = function (t, e) {
                var n = this,
                  r = e ? this.Ta.Ht(t, e) : this.Ta.remove(t),
                  i = this.Da(this.Ta),
                  o = this.Da(r),
                  u = [],
                  s = []
                return (
                  o.forEach(function (t) {
                    i.has(t) || u.push(t)
                  }),
                  i.forEach(function (t) {
                    o.has(t) || s.push(t)
                  }),
                  this.fa.iu(u, s).then(function () {
                    n.Ta = r
                  })
                )
              }),
              (t.prototype.va = function (t) {
                this.Ta.get(t.clientId) && this.da(t.onlineState)
              }),
              (t.prototype.Da = function (t) {
                var e = vn()
                return (
                  t.forEach(function (t, n) {
                    e = e.ye(n.activeTargetIds)
                  }),
                  e
                )
              }),
              t
            )
          })(),
          Do = (function () {
            function t() {
              ;(this.ru = new Ao()),
                (this.ou = {}),
                (this.da = null),
                (this.L = null)
            }
            return (
              (t.prototype.xa = function (t) {}),
              (t.prototype.Fa = function (t, e, n) {}),
              (t.prototype.ka = function (t) {
                return this.ru.ha(t), this.ou[t] || 'not-current'
              }),
              (t.prototype.qa = function (t, e, n) {
                this.ou[t] = e
              }),
              (t.prototype.La = function (t) {
                this.ru.la(t)
              }),
              (t.prototype.$a = function (t) {
                return this.ru.activeTargetIds.has(t)
              }),
              (t.prototype.Ba = function (t) {
                delete this.ou[t]
              }),
              (t.prototype.Sa = function () {
                return this.ru.activeTargetIds
              }),
              (t.prototype.Ca = function (t) {
                return this.ru.activeTargetIds.has(t)
              }),
              (t.prototype.start = function () {
                return (this.ru = new Ao()), Promise.resolve()
              }),
              (t.prototype.Qa = function (t, e, n) {}),
              (t.prototype.Ka = function (t) {}),
              (t.prototype.Lo = function () {}),
              (t.prototype.q = function (t) {}),
              (t.prototype.ja = function () {}),
              t
            )
          })(),
          ko = (function () {
            function t() {}
            return (
              (t.prototype.cu = function (t) {}),
              (t.prototype.Lo = function () {}),
              t
            )
          })(),
          Co = (function () {
            function t() {
              var t = this
              ;(this.au = function () {
                return t.uu()
              }),
                (this.hu = function () {
                  return t.lu()
                }),
                (this._u = []),
                this.fu()
            }
            return (
              (t.prototype.cu = function (t) {
                this._u.push(t)
              }),
              (t.prototype.Lo = function () {
                window.removeEventListener('online', this.au),
                  window.removeEventListener('offline', this.hu)
              }),
              (t.prototype.fu = function () {
                window.addEventListener('online', this.au),
                  window.addEventListener('offline', this.hu)
              }),
              (t.prototype.uu = function () {
                d(
                  'ConnectivityMonitor',
                  'Network connectivity changed: AVAILABLE'
                )
                for (var t = 0, e = this._u; t < e.length; t++) (0, e[t])(0)
              }),
              (t.prototype.lu = function () {
                d(
                  'ConnectivityMonitor',
                  'Network connectivity changed: UNAVAILABLE'
                )
                for (var t = 0, e = this._u; t < e.length; t++) (0, e[t])(1)
              }),
              (t.Wn = function () {
                return (
                  'undefined' != typeof window &&
                  void 0 !== window.addEventListener &&
                  void 0 !== window.removeEventListener
                )
              }),
              t
            )
          })(),
          Po = {
            BatchGetDocuments: 'batchGet',
            Commit: 'commit',
            RunQuery: 'runQuery',
          },
          Lo = (function () {
            function t(t) {
              ;(this.du = t.du), (this.wu = t.wu)
            }
            return (
              (t.prototype.Eu = function (t) {
                this.Tu = t
              }),
              (t.prototype.Iu = function (t) {
                this.mu = t
              }),
              (t.prototype.onMessage = function (t) {
                this.Au = t
              }),
              (t.prototype.close = function () {
                this.wu()
              }),
              (t.prototype.send = function (t) {
                this.du(t)
              }),
              (t.prototype.Ru = function () {
                this.Tu()
              }),
              (t.prototype.Pu = function (t) {
                this.mu(t)
              }),
              (t.prototype.yu = function (t) {
                this.Au(t)
              }),
              t
            )
          })(),
          Ro = (function (t) {
            function e(e) {
              var n = this
              return (
                ((n = t.call(this, e) || this).forceLongPolling =
                  e.forceLongPolling),
                (n.I = e.I),
                n
              )
            }
            return (
              Object(h.c)(e, t),
              (e.prototype.Du = function (t, e, n, r) {
                return new Promise(function (i, o) {
                  var u = new c.f()
                  u.listenOnce(c.c.COMPLETE, function () {
                    try {
                      switch (u.getLastErrorCode()) {
                        case c.a.NO_ERROR:
                          var e = u.getResponseJson()
                          d('Connection', 'XHR received:', JSON.stringify(e)),
                            i(e)
                          break
                        case c.a.TIMEOUT:
                          d('Connection', 'RPC "' + t + '" timed out'),
                            o(new x(A.DEADLINE_EXCEEDED, 'Request time out'))
                          break
                        case c.a.HTTP_ERROR:
                          var n = u.getStatus()
                          if (
                            (d(
                              'Connection',
                              'RPC "' + t + '" failed with status:',
                              n,
                              'response text:',
                              u.getResponseText()
                            ),
                            n > 0)
                          ) {
                            var r = u.getResponseJson().error
                            if (r && r.status && r.message) {
                              var s = (function (t) {
                                var e = t.toLowerCase().replace(/_/g, '-')
                                return Object.values(A).indexOf(e) >= 0
                                  ? e
                                  : A.UNKNOWN
                              })(r.status)
                              o(new x(s, r.message))
                            } else
                              o(
                                new x(
                                  A.UNKNOWN,
                                  'Server responded with status ' +
                                    u.getStatus()
                                )
                              )
                          } else o(new x(A.UNAVAILABLE, 'Connection failed.'))
                          break
                        default:
                          w()
                      }
                    } finally {
                      d('Connection', 'RPC "' + t + '" completed.')
                    }
                  })
                  var s = JSON.stringify(r)
                  u.send(e, 'POST', s, n, 15)
                })
              }),
              (e.prototype.xu = function (t, e) {
                var n = [
                    this.Vu,
                    '/',
                    'google.firestore.v1.Firestore',
                    '/',
                    t,
                    '/channel',
                  ],
                  r = Object(c.g)(),
                  h = Object(c.h)(),
                  f = {
                    httpSessionIdParam: 'gsessionid',
                    initMessageHeaders: {},
                    messageUrlParams: {
                      database:
                        'projects/' +
                        this.T.projectId +
                        '/databases/' +
                        this.T.database,
                    },
                    sendRawJson: !0,
                    supportsCrossDomainXhr: !0,
                    internalChannelParams: {
                      forwardChannelRequestTimeoutMs: 6e5,
                    },
                    forceLongPolling: this.forceLongPolling,
                    detectBufferingProxy: this.I,
                  }
                this.Su(f.initMessageHeaders, e),
                  Object(o.l)() ||
                    Object(o.n)() ||
                    Object(o.j)() ||
                    Object(o.k)() ||
                    Object(o.o)() ||
                    Object(o.i)() ||
                    (f.httpHeadersOverwriteParam = '$httpHeaders')
                var l = n.join('')
                d('Connection', 'Creating WebChannel: ' + l, f)
                var g = r.createWebChannel(l, f),
                  v = !1,
                  b = !1,
                  m = new Lo({
                    du: function (t) {
                      b
                        ? d(
                            'Connection',
                            'Not sending because WebChannel is closed:',
                            t
                          )
                        : (v ||
                            (d('Connection', 'Opening WebChannel transport.'),
                            g.open(),
                            (v = !0)),
                          d('Connection', 'WebChannel sending:', t),
                          g.send(t))
                    },
                    wu: function () {
                      return g.close()
                    },
                  }),
                  w = function (t, e, n) {
                    t.listen(e, function (t) {
                      try {
                        n(t)
                      } catch (t) {
                        setTimeout(function () {
                          throw t
                        }, 0)
                      }
                    })
                  }
                return (
                  w(g, c.e.EventType.OPEN, function () {
                    b || d('Connection', 'WebChannel transport opened.')
                  }),
                  w(g, c.e.EventType.CLOSE, function () {
                    b ||
                      ((b = !0),
                      d('Connection', 'WebChannel transport closed'),
                      m.Pu())
                  }),
                  w(g, c.e.EventType.ERROR, function (t) {
                    b ||
                      ((b = !0),
                      y('Connection', 'WebChannel transport errored:', t),
                      m.Pu(
                        new x(
                          A.UNAVAILABLE,
                          'The operation could not be completed'
                        )
                      ))
                  }),
                  w(g, c.e.EventType.MESSAGE, function (t) {
                    var e
                    if (!b) {
                      var n = t.data[0]
                      I(!!n)
                      var r = n,
                        i =
                          r.error ||
                          (null === (e = r[0]) || void 0 === e
                            ? void 0
                            : e.error)
                      if (i) {
                        d('Connection', 'WebChannel received error:', i)
                        var o = i.status,
                          u = (function (t) {
                            var e = Ke[t]
                            if (void 0 !== e) return $e(e)
                          })(o),
                          s = i.message
                        void 0 === u &&
                          ((u = A.INTERNAL),
                          (s =
                            'Unknown error status: ' +
                            o +
                            ' with message ' +
                            i.message)),
                          (b = !0),
                          m.Pu(new x(u, s)),
                          g.close()
                      } else d('Connection', 'WebChannel received:', n), m.yu(n)
                    }
                  }),
                  w(h, c.b.STAT_EVENT, function (t) {
                    t.stat === c.d.PROXY
                      ? d('Connection', 'Detected buffering proxy')
                      : t.stat === c.d.NOPROXY &&
                        d('Connection', 'Detected no buffering proxy')
                  }),
                  setTimeout(function () {
                    m.Ru()
                  }, 0),
                  m
                )
              }),
              e
            )
          })(
            (function () {
              function t(t) {
                ;(this.gu = t), (this.T = t.T)
                var e = t.ssl ? 'https' : 'http'
                ;(this.Vu = e + '://' + t.host),
                  (this.pu =
                    'projects/' +
                    this.T.projectId +
                    '/databases/' +
                    this.T.database +
                    '/documents')
              }
              return (
                (t.prototype.bu = function (t, e, n, r) {
                  var i = this.vu(t, e)
                  d('RestConnection', 'Sending: ', i, n)
                  var o = {}
                  return (
                    this.Su(o, r),
                    this.Du(t, i, o, n).then(
                      function (t) {
                        return d('RestConnection', 'Received: ', t), t
                      },
                      function (e) {
                        throw (
                          (y(
                            'RestConnection',
                            t + ' failed with error: ',
                            e,
                            'url: ',
                            i,
                            'request:',
                            n
                          ),
                          e)
                        )
                      }
                    )
                  )
                }),
                (t.prototype.Cu = function (t, e, n, r) {
                  return this.bu(t, e, n, r)
                }),
                (t.prototype.Su = function (t, e) {
                  if (
                    ((t['X-Goog-Api-Client'] = 'gl-js/ fire/8.2.5'),
                    (t['Content-Type'] = 'text/plain'),
                    e)
                  )
                    for (var n in e.V) e.V.hasOwnProperty(n) && (t[n] = e.V[n])
                }),
                (t.prototype.vu = function (t, e) {
                  var n = Po[t]
                  return this.Vu + '/v1/' + e + ':' + n
                }),
                t
              )
            })()
          )
        function Vo() {
          return 'undefined' != typeof window ? window : null
        }
        function Mo() {
          return 'undefined' != typeof document ? document : null
        }
        function Uo(t) {
          return new xn(t, !0)
        }
        var Fo = (function () {
            function t(t, e, n, r, i) {
              void 0 === n && (n = 1e3),
                void 0 === r && (r = 1.5),
                void 0 === i && (i = 6e4),
                (this.eo = t),
                (this.ds = e),
                (this.Nu = n),
                (this.Fu = r),
                (this.Ou = i),
                (this.ku = 0),
                (this.Mu = null),
                (this.Lu = Date.now()),
                this.reset()
            }
            return (
              (t.prototype.reset = function () {
                this.ku = 0
              }),
              (t.prototype.$u = function () {
                this.ku = this.Ou
              }),
              (t.prototype.Bu = function (t) {
                var e = this
                this.cancel()
                var n = Math.floor(this.ku + this.qu()),
                  r = Math.max(0, Date.now() - this.Lu),
                  i = Math.max(0, n - r)
                i > 0 &&
                  d(
                    'ExponentialBackoff',
                    'Backing off for ' +
                      i +
                      ' ms (base delay: ' +
                      this.ku +
                      ' ms, delay with jitter: ' +
                      n +
                      ' ms, last attempt: ' +
                      r +
                      ' ms ago)'
                  ),
                  (this.Mu = this.eo.Ir(this.ds, i, function () {
                    return (e.Lu = Date.now()), t()
                  })),
                  (this.ku *= this.Fu),
                  this.ku < this.Nu && (this.ku = this.Nu),
                  this.ku > this.Ou && (this.ku = this.Ou)
              }),
              (t.prototype.Uu = function () {
                null !== this.Mu && (this.Mu.Ps(), (this.Mu = null))
              }),
              (t.prototype.cancel = function () {
                null !== this.Mu && (this.Mu.cancel(), (this.Mu = null))
              }),
              (t.prototype.qu = function () {
                return (Math.random() - 0.5) * this.ku
              }),
              t
            )
          })(),
          qo = (function () {
            function t(t, e, n, r, i, o) {
              ;(this.eo = t),
                (this.Qu = n),
                (this.Ku = r),
                (this.Wu = i),
                (this.listener = o),
                (this.state = 0),
                (this.ju = 0),
                (this.Gu = null),
                (this.stream = null),
                (this.zu = new Fo(t, e))
            }
            return (
              (t.prototype.Hu = function () {
                return 1 === this.state || 2 === this.state || 4 === this.state
              }),
              (t.prototype.Ju = function () {
                return 2 === this.state
              }),
              (t.prototype.start = function () {
                3 !== this.state ? this.auth() : this.Yu()
              }),
              (t.prototype.stop = function () {
                return Object(h.b)(this, void 0, void 0, function () {
                  return Object(h.d)(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return this.Hu() ? [4, this.close(0)] : [3, 2]
                      case 1:
                        t.sent(), (t.label = 2)
                      case 2:
                        return [2]
                    }
                  })
                })
              }),
              (t.prototype.Xu = function () {
                ;(this.state = 0), this.zu.reset()
              }),
              (t.prototype.Zu = function () {
                var t = this
                this.Ju() &&
                  null === this.Gu &&
                  (this.Gu = this.eo.Ir(this.Qu, 6e4, function () {
                    return t.th()
                  }))
              }),
              (t.prototype.eh = function (t) {
                this.nh(), this.stream.send(t)
              }),
              (t.prototype.th = function () {
                return Object(h.b)(this, void 0, void 0, function () {
                  return Object(h.d)(this, function (t) {
                    return this.Ju() ? [2, this.close(0)] : [2]
                  })
                })
              }),
              (t.prototype.nh = function () {
                this.Gu && (this.Gu.cancel(), (this.Gu = null))
              }),
              (t.prototype.close = function (t, e) {
                return Object(h.b)(this, void 0, void 0, function () {
                  return Object(h.d)(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return (
                          this.nh(),
                          this.zu.cancel(),
                          this.ju++,
                          3 !== t
                            ? this.zu.reset()
                            : e && e.code === A.RESOURCE_EXHAUSTED
                            ? (v(e.toString()),
                              v(
                                'Using maximum backoff delay to prevent overloading the backend.'
                              ),
                              this.zu.$u())
                            : e && e.code === A.UNAUTHENTICATED && this.Wu.v(),
                          null !== this.stream &&
                            (this.sh(),
                            this.stream.close(),
                            (this.stream = null)),
                          (this.state = t),
                          [4, this.listener.Iu(e)]
                        )
                      case 1:
                        return n.sent(), [2]
                    }
                  })
                })
              }),
              (t.prototype.sh = function () {}),
              (t.prototype.auth = function () {
                var t = this
                this.state = 1
                var e = this.ih(this.ju),
                  n = this.ju
                this.Wu.getToken().then(
                  function (e) {
                    t.ju === n && t.rh(e)
                  },
                  function (n) {
                    e(function () {
                      var e = new x(
                        A.UNKNOWN,
                        'Fetching auth token failed: ' + n.message
                      )
                      return t.oh(e)
                    })
                  }
                )
              }),
              (t.prototype.rh = function (t) {
                var e = this,
                  n = this.ih(this.ju)
                ;(this.stream = this.ah(t)),
                  this.stream.Eu(function () {
                    n(function () {
                      return (e.state = 2), e.listener.Eu()
                    })
                  }),
                  this.stream.Iu(function (t) {
                    n(function () {
                      return e.oh(t)
                    })
                  }),
                  this.stream.onMessage(function (t) {
                    n(function () {
                      return e.onMessage(t)
                    })
                  })
              }),
              (t.prototype.Yu = function () {
                var t = this
                ;(this.state = 4),
                  this.zu.Bu(function () {
                    return Object(h.b)(t, void 0, void 0, function () {
                      return Object(h.d)(this, function (t) {
                        return (this.state = 0), this.start(), [2]
                      })
                    })
                  })
              }),
              (t.prototype.oh = function (t) {
                return (
                  d('PersistentStream', 'close with error: ' + t),
                  (this.stream = null),
                  this.close(3, t)
                )
              }),
              (t.prototype.ih = function (t) {
                var e = this
                return function (n) {
                  e.eo.ys(function () {
                    return e.ju === t
                      ? n()
                      : (d(
                          'PersistentStream',
                          'stream callback skipped by getCloseGuardedDispatcher.'
                        ),
                        Promise.resolve())
                  })
                }
              }),
              t
            )
          })(),
          zo = (function (t) {
            function e(e, n, r, i, o) {
              var u = this
              return (
                ((u =
                  t.call(
                    this,
                    e,
                    'listen_stream_connection_backoff',
                    'listen_stream_idle',
                    n,
                    r,
                    o
                  ) || this).Kt = i),
                u
              )
            }
            return (
              Object(h.c)(e, t),
              (e.prototype.ah = function (t) {
                return this.Ku.xu('Listen', t)
              }),
              (e.prototype.onMessage = function (t) {
                this.zu.reset()
                var e = (function (t, e) {
                    var n
                    if ('targetChange' in e) {
                      e.targetChange
                      var r = (function (t) {
                          return 'NO_CHANGE' === t
                            ? 0
                            : 'ADD' === t
                            ? 1
                            : 'REMOVE' === t
                            ? 2
                            : 'CURRENT' === t
                            ? 3
                            : 'RESET' === t
                            ? 4
                            : w()
                        })(e.targetChange.targetChangeType || 'NO_CHANGE'),
                        i = e.targetChange.targetIds || [],
                        o = (function (t, e) {
                          return t.qt
                            ? (I(void 0 === e || 'string' == typeof e),
                              S.fromBase64String(e || ''))
                            : (I(void 0 === e || e instanceof Uint8Array),
                              S.fromUint8Array(e || new Uint8Array()))
                        })(t, e.targetChange.resumeToken),
                        u =
                          (s = e.targetChange.cause) &&
                          (function (t) {
                            var e = void 0 === t.code ? A.UNKNOWN : $e(t.code)
                            return new x(e, t.message || '')
                          })(s)
                      n = new En(r, i, o, u || null)
                    } else if ('documentChange' in e) {
                      e.documentChange,
                        (r = e.documentChange).document,
                        r.document.name,
                        r.document.updateTime,
                        (i = Mn(t, r.document.name)),
                        (o = Pn(r.document.updateTime))
                      var s = new Tt({
                          mapValue: { fields: r.document.fields },
                        }),
                        a = ((u = new St(i, o, s, {})), r.targetIds || []),
                        c = r.removedTargetIds || []
                      n = new In(a, c, u.key, u)
                    } else if ('documentDelete' in e)
                      e.documentDelete,
                        (r = e.documentDelete).document,
                        (i = Mn(t, r.document)),
                        (o = r.readTime ? Pn(r.readTime) : K.min()),
                        (s = new At(i, o)),
                        (u = r.removedTargetIds || []),
                        (n = new In([], u, s.key, s))
                    else if ('documentRemove' in e)
                      e.documentRemove,
                        (r = e.documentRemove).document,
                        (i = Mn(t, r.document)),
                        (o = r.removedTargetIds || []),
                        (n = new In([], o, i, null))
                    else {
                      if (!('filter' in e)) return w()
                      e.filter
                      var h = e.filter
                      h.targetId,
                        (r = h.count || 0),
                        (i = new Ye(r)),
                        (o = h.targetId),
                        (n = new _n(o, i))
                    }
                    return n
                  })(this.Kt, t),
                  n = (function (t) {
                    if (!('targetChange' in t)) return K.min()
                    var e = t.targetChange
                    return e.targetIds && e.targetIds.length
                      ? K.min()
                      : e.readTime
                      ? Pn(e.readTime)
                      : K.min()
                  })(t)
                return this.listener.uh(e, n)
              }),
              (e.prototype.hh = function (t) {
                var e = {}
                ;(e.database = qn(this.Kt)),
                  (e.addTarget = (function (t, e) {
                    var n,
                      r = e.target
                    return (
                      ((n = Lt(r)
                        ? { documents: Kn(t, r) }
                        : { query: Jn(t, r) }).targetId = e.targetId),
                      e.resumeToken.o() > 0
                        ? (n.resumeToken = kn(t, e.resumeToken))
                        : e.Mt.u(K.min()) > 0 && (n.readTime = Dn(t, e.Mt.G())),
                      n
                    )
                  })(this.Kt, t))
                var n = (function (t, e) {
                  var n = (function (t, e) {
                    switch (e) {
                      case 0:
                        return null
                      case 1:
                        return 'existence-filter-mismatch'
                      case 2:
                        return 'limbo-document'
                      default:
                        return w()
                    }
                  })(0, e.kt)
                  return null == n ? null : { 'goog-listen-tags': n }
                })(this.Kt, t)
                n && (e.labels = n), this.eh(e)
              }),
              (e.prototype.lh = function (t) {
                var e = {}
                ;(e.database = qn(this.Kt)), (e.removeTarget = t), this.eh(e)
              }),
              e
            )
          })(qo),
          Go = (function (t) {
            function e(e, n, r, i, o) {
              var u = this
              return (
                ((u =
                  t.call(
                    this,
                    e,
                    'write_stream_connection_backoff',
                    'write_stream_idle',
                    n,
                    r,
                    o
                  ) || this).Kt = i),
                (u._h = !1),
                u
              )
            }
            return (
              Object(h.c)(e, t),
              Object.defineProperty(e.prototype, 'fh', {
                get: function () {
                  return this._h
                },
                enumerable: !1,
                configurable: !0,
              }),
              (e.prototype.start = function () {
                ;(this._h = !1),
                  (this.lastStreamToken = void 0),
                  t.prototype.start.call(this)
              }),
              (e.prototype.sh = function () {
                this._h && this.dh([])
              }),
              (e.prototype.ah = function (t) {
                return this.Ku.xu('Write', t)
              }),
              (e.prototype.onMessage = function (t) {
                if (
                  (I(!!t.streamToken),
                  (this.lastStreamToken = t.streamToken),
                  this._h)
                ) {
                  this.zu.reset()
                  var e = (function (t, e) {
                      return t && t.length > 0
                        ? (I(void 0 !== e),
                          t.map(function (t) {
                            return (function (t, e) {
                              var n = t.updateTime ? Pn(t.updateTime) : Pn(e)
                              n.isEqual(K.min()) && (n = Pn(e))
                              var r = null
                              return (
                                t.transformResults &&
                                  t.transformResults.length > 0 &&
                                  (r = t.transformResults),
                                new De(n, r)
                              )
                            })(t, e)
                          }))
                        : []
                    })(t.writeResults, t.commitTime),
                    n = Pn(t.commitTime)
                  return this.listener.wh(n, e)
                }
                return (
                  I(!t.writeResults || 0 === t.writeResults.length),
                  (this._h = !0),
                  this.listener.Eh()
                )
              }),
              (e.prototype.Th = function () {
                var t = {}
                ;(t.database = qn(this.Kt)), this.eh(t)
              }),
              (e.prototype.dh = function (t) {
                var e = this,
                  n = {
                    streamToken: this.lastStreamToken,
                    writes: t.map(function (t) {
                      return Bn(e.Kt, t)
                    }),
                  }
                this.eh(n)
              }),
              e
            )
          })(qo),
          Ho = (function (t) {
            function e(e, n, r) {
              var i = this
              return (
                ((i = t.call(this) || this).credentials = e),
                (i.Ku = n),
                (i.Kt = r),
                (i.Ih = !1),
                i
              )
            }
            return (
              Object(h.c)(e, t),
              (e.prototype.mh = function () {
                if (this.Ih)
                  throw new x(
                    A.FAILED_PRECONDITION,
                    'The client has already been terminated.'
                  )
              }),
              (e.prototype.bu = function (t, e, n) {
                var r = this
                return (
                  this.mh(),
                  this.credentials
                    .getToken()
                    .then(function (i) {
                      return r.Ku.bu(t, e, n, i)
                    })
                    .catch(function (t) {
                      throw (
                        (t.code === A.UNAUTHENTICATED && r.credentials.v(), t)
                      )
                    })
                )
              }),
              (e.prototype.Cu = function (t, e, n) {
                var r = this
                return (
                  this.mh(),
                  this.credentials
                    .getToken()
                    .then(function (i) {
                      return r.Ku.Cu(t, e, n, i)
                    })
                    .catch(function (t) {
                      throw (
                        (t.code === A.UNAUTHENTICATED && r.credentials.v(), t)
                      )
                    })
                )
              }),
              (e.prototype.terminate = function () {
                this.Ih = !1
              }),
              e
            )
          })(function () {}),
          Bo = (function () {
            function t(t, e) {
              ;(this.fs = t),
                (this.da = e),
                (this.state = 'Unknown'),
                (this.Ah = 0),
                (this.Rh = null),
                (this.Ph = !0)
            }
            return (
              (t.prototype.yh = function () {
                var t = this
                0 === this.Ah &&
                  (this.gh('Unknown'),
                  (this.Rh = this.fs.Ir(
                    'online_state_timeout',
                    1e4,
                    function () {
                      return (
                        (t.Rh = null),
                        t.Vh("Backend didn't respond within 10 seconds."),
                        t.gh('Offline'),
                        Promise.resolve()
                      )
                    }
                  )))
              }),
              (t.prototype.ph = function (t) {
                'Online' === this.state
                  ? this.gh('Unknown')
                  : (this.Ah++,
                    this.Ah >= 1 &&
                      (this.bh(),
                      this.Vh(
                        'Connection failed 1 times. Most recent error: ' +
                          t.toString()
                      ),
                      this.gh('Offline')))
              }),
              (t.prototype.set = function (t) {
                this.bh(),
                  (this.Ah = 0),
                  'Online' === t && (this.Ph = !1),
                  this.gh(t)
              }),
              (t.prototype.gh = function (t) {
                t !== this.state && ((this.state = t), this.da(t))
              }),
              (t.prototype.Vh = function (t) {
                var e =
                  'Could not reach Cloud Firestore backend. ' +
                  t +
                  '\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.'
                this.Ph ? (v(e), (this.Ph = !1)) : d('OnlineStateTracker', e)
              }),
              (t.prototype.bh = function () {
                null !== this.Rh && (this.Rh.cancel(), (this.Rh = null))
              }),
              t
            )
          })(),
          Ko = function (t, e, n, r, i) {
            var o = this
            ;(this.Sh = t),
              (this.Dh = e),
              (this.fs = n),
              (this.Ch = {}),
              (this.xh = []),
              (this.Nh = new Map()),
              (this.Fh = new Set()),
              (this.Oh = []),
              (this.kh = i),
              this.kh.cu(function (t) {
                n.ys(function () {
                  return Object(h.b)(o, void 0, void 0, function () {
                    return Object(h.d)(this, function (t) {
                      switch (t.label) {
                        case 0:
                          return es(this)
                            ? (d(
                                'RemoteStore',
                                'Restarting streams for network reachability change.'
                              ),
                              [
                                4,
                                (function (t) {
                                  return Object(h.b)(
                                    this,
                                    void 0,
                                    void 0,
                                    function () {
                                      var e
                                      return Object(h.d)(this, function (n) {
                                        switch (n.label) {
                                          case 0:
                                            return (
                                              (e = _(t)).Fh.add(4), [4, Wo(e)]
                                            )
                                          case 1:
                                            return (
                                              n.sent(),
                                              e.Mh.set('Unknown'),
                                              e.Fh.delete(4),
                                              [4, Jo(e)]
                                            )
                                          case 2:
                                            return n.sent(), [2]
                                        }
                                      })
                                    }
                                  )
                                })(this),
                              ])
                            : [3, 2]
                        case 1:
                          t.sent(), (t.label = 2)
                        case 2:
                          return [2]
                      }
                    })
                  })
                })
              }),
              (this.Mh = new Bo(n, r))
          }
        function Jo(t) {
          return Object(h.b)(this, void 0, void 0, function () {
            var e, n
            return Object(h.d)(this, function (r) {
              switch (r.label) {
                case 0:
                  if (!es(t)) return [3, 4]
                  ;(e = 0), (n = t.Oh), (r.label = 1)
                case 1:
                  return e < n.length ? [4, (0, n[e])(!0)] : [3, 4]
                case 2:
                  r.sent(), (r.label = 3)
                case 3:
                  return e++, [3, 1]
                case 4:
                  return [2]
              }
            })
          })
        }
        function Wo(t) {
          return Object(h.b)(this, void 0, void 0, function () {
            var e, n
            return Object(h.d)(this, function (r) {
              switch (r.label) {
                case 0:
                  ;(e = 0), (n = t.Oh), (r.label = 1)
                case 1:
                  return e < n.length ? [4, (0, n[e])(!1)] : [3, 4]
                case 2:
                  r.sent(), (r.label = 3)
                case 3:
                  return e++, [3, 1]
                case 4:
                  return [2]
              }
            })
          })
        }
        function Xo(t, e) {
          var n = _(t)
          n.Nh.has(e.targetId) ||
            (n.Nh.set(e.targetId, e), ts(n) ? Zo(n) : ys(n).Ju() && Qo(n, e))
        }
        function Yo(t, e) {
          var n = _(t),
            r = ys(n)
          n.Nh.delete(e),
            r.Ju() && $o(n, e),
            0 === n.Nh.size && (r.Ju() ? r.Zu() : es(n) && n.Mh.set('Unknown'))
        }
        function Qo(t, e) {
          t.Lh.cn(e.targetId), ys(t).hh(e)
        }
        function $o(t, e) {
          t.Lh.cn(e), ys(t).lh(e)
        }
        function Zo(t) {
          ;(t.Lh = new On({
            Sn: function (e) {
              return t.Ch.Sn(e)
            },
            Dn: function (e) {
              return t.Nh.get(e) || null
            },
          })),
            ys(t).start(),
            t.Mh.yh()
        }
        function ts(t) {
          return es(t) && !ys(t).Hu() && t.Nh.size > 0
        }
        function es(t) {
          return 0 === _(t).Fh.size
        }
        function ns(t) {
          t.Lh = void 0
        }
        function rs(t) {
          return Object(h.b)(this, void 0, void 0, function () {
            return Object(h.d)(this, function (e) {
              return (
                t.Nh.forEach(function (e, n) {
                  Qo(t, e)
                }),
                [2]
              )
            })
          })
        }
        function is(t, e) {
          return Object(h.b)(this, void 0, void 0, function () {
            return Object(h.d)(this, function (n) {
              return (
                ns(t), ts(t) ? (t.Mh.ph(e), Zo(t)) : t.Mh.set('Unknown'), [2]
              )
            })
          })
        }
        function os(t, e, n) {
          return Object(h.b)(this, void 0, void 0, function () {
            var r, i, o
            return Object(h.d)(this, function (u) {
              switch (u.label) {
                case 0:
                  if (
                    (t.Mh.set('Online'),
                    !(e instanceof En && 2 === e.state && e.cause))
                  )
                    return [3, 6]
                  u.label = 1
                case 1:
                  return (
                    u.trys.push([1, 3, , 5]),
                    [
                      4,
                      (function (t, e) {
                        return Object(h.b)(this, void 0, void 0, function () {
                          var n, r, i, o
                          return Object(h.d)(this, function (u) {
                            switch (u.label) {
                              case 0:
                                ;(n = e.cause),
                                  (r = 0),
                                  (i = e.targetIds),
                                  (u.label = 1)
                              case 1:
                                return r < i.length
                                  ? ((o = i[r]),
                                    t.Nh.has(o) ? [4, t.Ch.$h(o, n)] : [3, 3])
                                  : [3, 5]
                              case 2:
                                u.sent(),
                                  t.Nh.delete(o),
                                  t.Lh.removeTarget(o),
                                  (u.label = 3)
                              case 3:
                                u.label = 4
                              case 4:
                                return r++, [3, 1]
                              case 5:
                                return [2]
                            }
                          })
                        })
                      })(t, e),
                    ]
                  )
                case 2:
                  return u.sent(), [3, 5]
                case 3:
                  return (
                    (r = u.sent()),
                    d(
                      'RemoteStore',
                      'Failed to remove targets %s: %s ',
                      e.targetIds.join(','),
                      r
                    ),
                    [4, ss(t, r)]
                  )
                case 4:
                  return u.sent(), [3, 5]
                case 5:
                  return [3, 13]
                case 6:
                  if (
                    (e instanceof In
                      ? t.Lh.wn(e)
                      : e instanceof _n
                      ? t.Lh.yn(e)
                      : t.Lh.In(e),
                    n.isEqual(K.min()))
                  )
                    return [3, 13]
                  u.label = 7
                case 7:
                  return u.trys.push([7, 11, , 13]), [4, Zi(t.Sh)]
                case 8:
                  return (
                    (i = u.sent()),
                    n.u(i) >= 0
                      ? [
                          4,
                          (function (t, e) {
                            var n = t.Lh.pn(e)
                            return (
                              n.Oe.forEach(function (n, r) {
                                if (n.resumeToken.o() > 0) {
                                  var i = t.Nh.get(r)
                                  i && t.Nh.set(r, i.$t(n.resumeToken, e))
                                }
                              }),
                              n.ke.forEach(function (e) {
                                var n = t.Nh.get(e)
                                if (n) {
                                  t.Nh.set(e, n.$t(S.h, n.Mt)), $o(t, e)
                                  var r = new de(
                                    n.target,
                                    e,
                                    1,
                                    n.sequenceNumber
                                  )
                                  Qo(t, r)
                                }
                              }),
                              t.Ch.Bh(n)
                            )
                          })(t, n),
                        ]
                      : [3, 10]
                  )
                case 9:
                  u.sent(), (u.label = 10)
                case 10:
                  return [3, 13]
                case 11:
                  return (
                    d(
                      'RemoteStore',
                      'Failed to raise snapshot:',
                      (o = u.sent())
                    ),
                    [4, ss(t, o)]
                  )
                case 12:
                  return u.sent(), [3, 13]
                case 13:
                  return [2]
              }
            })
          })
        }
        function ss(t, e, n) {
          return Object(h.b)(this, void 0, void 0, function () {
            var r = this
            return Object(h.d)(this, function (i) {
              switch (i.label) {
                case 0:
                  if (!fr(e)) throw e
                  return t.Fh.add(1), [4, Wo(t)]
                case 1:
                  return (
                    i.sent(),
                    t.Mh.set('Offline'),
                    n ||
                      (n = function () {
                        return Zi(t.Sh)
                      }),
                    t.fs.bo(function () {
                      return Object(h.b)(r, void 0, void 0, function () {
                        return Object(h.d)(this, function (e) {
                          switch (e.label) {
                            case 0:
                              return (
                                d('RemoteStore', 'Retrying IndexedDB access'),
                                [4, n()]
                              )
                            case 1:
                              return e.sent(), t.Fh.delete(1), [4, Jo(t)]
                            case 2:
                              return e.sent(), [2]
                          }
                        })
                      })
                    }),
                    [2]
                  )
              }
            })
          })
        }
        function us(t, e) {
          return e().catch(function (n) {
            return ss(t, n, e)
          })
        }
        function as(t) {
          return Object(h.b)(this, void 0, void 0, function () {
            var e, n, r, i, o
            return Object(h.d)(this, function (u) {
              switch (u.label) {
                case 0:
                  ;(e = _(t)),
                    (n = gs(e)),
                    (r = e.xh.length > 0 ? e.xh[e.xh.length - 1].batchId : -1),
                    (u.label = 1)
                case 1:
                  if (
                    !(function (t) {
                      return es(t) && t.xh.length < 10
                    })(e)
                  )
                    return [3, 7]
                  u.label = 2
                case 2:
                  return u.trys.push([2, 4, , 6]), [4, no(e.Sh, r)]
                case 3:
                  return null === (i = u.sent())
                    ? (0 === e.xh.length && n.Zu(), [3, 7])
                    : ((r = i.batchId),
                      (function (t, e) {
                        t.xh.push(e)
                        var n = gs(t)
                        n.Ju() && n.fh && n.dh(e.mutations)
                      })(e, i),
                      [3, 6])
                case 4:
                  return (o = u.sent()), [4, ss(e, o)]
                case 5:
                  return u.sent(), [3, 6]
                case 6:
                  return [3, 1]
                case 7:
                  return cs(e) && hs(e), [2]
              }
            })
          })
        }
        function cs(t) {
          return es(t) && !gs(t).Hu() && t.xh.length > 0
        }
        function hs(t) {
          gs(t).start()
        }
        function fs(t) {
          return Object(h.b)(this, void 0, void 0, function () {
            return Object(h.d)(this, function (e) {
              return gs(t).Th(), [2]
            })
          })
        }
        function ls(t) {
          return Object(h.b)(this, void 0, void 0, function () {
            var e, n, r, i
            return Object(h.d)(this, function (o) {
              for (e = gs(t), n = 0, r = t.xh; n < r.length; n++)
                (i = r[n]), e.dh(i.mutations)
              return [2]
            })
          })
        }
        function ps(t, e, n) {
          return Object(h.b)(this, void 0, void 0, function () {
            var r, i
            return Object(h.d)(this, function (o) {
              switch (o.label) {
                case 0:
                  return (
                    (r = t.xh.shift()),
                    (i = Br.from(r, e, n)),
                    [
                      4,
                      us(t, function () {
                        return t.Ch.qh(i)
                      }),
                    ]
                  )
                case 1:
                  return o.sent(), [4, as(t)]
                case 2:
                  return o.sent(), [2]
              }
            })
          })
        }
        function ds(t, e) {
          return Object(h.b)(this, void 0, void 0, function () {
            return Object(h.d)(this, function (n) {
              switch (n.label) {
                case 0:
                  return e && gs(t).fh
                    ? [
                        4,
                        (function (t, e) {
                          return Object(h.b)(this, void 0, void 0, function () {
                            var n, r
                            return Object(h.d)(this, function (i) {
                              switch (i.label) {
                                case 0:
                                  return Qe((r = e.code)) && r !== A.ABORTED
                                    ? ((n = t.xh.shift()),
                                      gs(t).Xu(),
                                      [
                                        4,
                                        us(t, function () {
                                          return t.Ch.Uh(n.batchId, e)
                                        }),
                                      ])
                                    : [3, 3]
                                case 1:
                                  return i.sent(), [4, as(t)]
                                case 2:
                                  i.sent(), (i.label = 3)
                                case 3:
                                  return [2]
                              }
                            })
                          })
                        })(t, e),
                      ]
                    : [3, 2]
                case 1:
                  n.sent(), (n.label = 2)
                case 2:
                  return cs(t) && hs(t), [2]
              }
            })
          })
        }
        function vs(t, e) {
          return Object(h.b)(this, void 0, void 0, function () {
            var n
            return Object(h.d)(this, function (i) {
              switch (i.label) {
                case 0:
                  return (n = _(t)), e ? (n.Fh.delete(2), [4, Jo(n)]) : [3, 2]
                case 1:
                  return i.sent(), [3, 5]
                case 2:
                  return e ? [3, 4] : (n.Fh.add(2), [4, Wo(n)])
                case 3:
                  i.sent(), n.Mh.set('Unknown'), (i.label = 4)
                case 4:
                  i.label = 5
                case 5:
                  return [2]
              }
            })
          })
        }
        function ys(t) {
          var e = this
          return (
            t.Qh ||
              ((t.Qh = (function (t, e, n) {
                var r = _(t)
                return r.mh(), new zo(e, r.Ku, r.credentials, r.Kt, n)
              })(t.Dh, t.fs, {
                Eu: rs.bind(null, t),
                Iu: is.bind(null, t),
                uh: os.bind(null, t),
              })),
              t.Oh.push(function (n) {
                return Object(h.b)(e, void 0, void 0, function () {
                  return Object(h.d)(this, function (e) {
                    switch (e.label) {
                      case 0:
                        return n
                          ? (t.Qh.Xu(),
                            ts(t) ? Zo(t) : t.Mh.set('Unknown'),
                            [3, 3])
                          : [3, 1]
                      case 1:
                        return [4, t.Qh.stop()]
                      case 2:
                        e.sent(), ns(t), (e.label = 3)
                      case 3:
                        return [2]
                    }
                  })
                })
              })),
            t.Qh
          )
        }
        function gs(t) {
          var e = this
          return (
            t.Kh ||
              ((t.Kh = (function (t, e, n) {
                var r = _(t)
                return r.mh(), new Go(e, r.Ku, r.credentials, r.Kt, n)
              })(t.Dh, t.fs, {
                Eu: fs.bind(null, t),
                Iu: ds.bind(null, t),
                Eh: ls.bind(null, t),
                wh: ps.bind(null, t),
              })),
              t.Oh.push(function (n) {
                return Object(h.b)(e, void 0, void 0, function () {
                  return Object(h.d)(this, function (e) {
                    switch (e.label) {
                      case 0:
                        return n ? (t.Kh.Xu(), [4, as(t)]) : [3, 2]
                      case 1:
                        return e.sent(), [3, 4]
                      case 2:
                        return [4, t.Kh.stop()]
                      case 3:
                        e.sent(),
                          t.xh.length > 0 &&
                            (d(
                              'RemoteStore',
                              'Stopping write stream with ' +
                                t.xh.length +
                                ' pending writes'
                            ),
                            (t.xh = [])),
                          (e.label = 4)
                      case 4:
                        return [2]
                    }
                  })
                })
              })),
            t.Kh
          )
        }
        var bs = function () {
            ;(this.Wh = void 0), (this.listeners = [])
          },
          ms = function () {
            ;(this.queries = new pi(function (t) {
              return ce(t)
            }, ae)),
              (this.onlineState = 'Unknown'),
              (this.jh = new Set())
          }
        function ws(t, e) {
          return Object(h.b)(this, void 0, void 0, function () {
            var n, r, i, o, u, s, a
            return Object(h.d)(this, function (c) {
              switch (c.label) {
                case 0:
                  if (
                    ((n = _(t)),
                    (r = e.query),
                    (i = !1),
                    (o = n.queries.get(r)) || ((i = !0), (o = new bs())),
                    !i)
                  )
                    return [3, 4]
                  c.label = 1
                case 1:
                  return c.trys.push([1, 3, , 4]), (u = o), [4, n.Gh(r)]
                case 2:
                  return (u.Wh = c.sent()), [3, 4]
                case 3:
                  return (
                    (s = c.sent()),
                    (a = gr(
                      s,
                      "Initialization of query '" + he(e.query) + "' failed"
                    )),
                    [2, void e.onError(a)]
                  )
                case 4:
                  return (
                    n.queries.set(r, o),
                    o.listeners.push(e),
                    e.zh(n.onlineState),
                    o.Wh && e.Hh(o.Wh) && Ts(n),
                    [2]
                  )
              }
            })
          })
        }
        function Is(t, e) {
          return Object(h.b)(this, void 0, void 0, function () {
            var n, r, i, o, u
            return Object(h.d)(this, function (s) {
              return (
                (n = _(t)),
                (r = e.query),
                (i = !1),
                (o = n.queries.get(r)) &&
                  (u = o.listeners.indexOf(e)) >= 0 &&
                  (o.listeners.splice(u, 1), (i = 0 === o.listeners.length)),
                i ? [2, (n.queries.delete(r), n.Jh(r))] : [2]
              )
            })
          })
        }
        function _s(t, e) {
          for (var n = _(t), r = !1, i = 0, o = e; i < o.length; i++) {
            var u = o[i],
              s = u.query,
              a = n.queries.get(s)
            if (a) {
              for (var c = 0, h = a.listeners; c < h.length; c++)
                h[c].Hh(u) && (r = !0)
              a.Wh = u
            }
          }
          r && Ts(n)
        }
        function Es(t, e, n) {
          var r = _(t),
            i = r.queries.get(e)
          if (i)
            for (var o = 0, u = i.listeners; o < u.length; o++) u[o].onError(n)
          r.queries.delete(e)
        }
        function Ts(t) {
          t.jh.forEach(function (t) {
            t.next()
          })
        }
        var Os = (function () {
            function t(t, e, n) {
              ;(this.query = t),
                (this.Yh = e),
                (this.Xh = !1),
                (this.Zh = null),
                (this.onlineState = 'Unknown'),
                (this.options = n || {})
            }
            return (
              (t.prototype.Hh = function (t) {
                if (!this.options.includeMetadataChanges) {
                  for (var e = [], n = 0, r = t.docChanges; n < r.length; n++) {
                    var i = r[n]
                    3 !== i.type && e.push(i)
                  }
                  t = new bn(
                    t.query,
                    t.docs,
                    t.De,
                    e,
                    t.Ce,
                    t.fromCache,
                    t.xe,
                    !0
                  )
                }
                var o = !1
                return (
                  this.Xh
                    ? this.tl(t) && (this.Yh.next(t), (o = !0))
                    : this.el(t, this.onlineState) && (this.nl(t), (o = !0)),
                  (this.Zh = t),
                  o
                )
              }),
              (t.prototype.onError = function (t) {
                this.Yh.error(t)
              }),
              (t.prototype.zh = function (t) {
                this.onlineState = t
                var e = !1
                return (
                  this.Zh &&
                    !this.Xh &&
                    this.el(this.Zh, t) &&
                    (this.nl(this.Zh), (e = !0)),
                  e
                )
              }),
              (t.prototype.el = function (t, e) {
                if (!t.fromCache) return !0
                var n = 'Offline' !== e
                return !(
                  (this.options.sl && n) ||
                  (t.docs.nt() && 'Offline' !== e)
                )
              }),
              (t.prototype.tl = function (t) {
                if (t.docChanges.length > 0) return !0
                var e =
                  this.Zh && this.Zh.hasPendingWrites !== t.hasPendingWrites
                return (
                  !(!t.xe && !e) && !0 === this.options.includeMetadataChanges
                )
              }),
              (t.prototype.nl = function (t) {
                ;(t = bn.Fe(t.query, t.docs, t.Ce, t.fromCache)),
                  (this.Xh = !0),
                  this.Yh.next(t)
              }),
              t
            )
          })(),
          Ns = (function () {
            function t(t, e) {
              ;(this.payload = t), (this.byteLength = e)
            }
            return (
              (t.prototype.il = function () {
                return 'metadata' in this.payload
              }),
              t
            )
          })(),
          js = (function () {
            function t(t) {
              this.Kt = t
            }
            return (
              (t.prototype.yc = function (t) {
                return Mn(this.Kt, t)
              }),
              (t.prototype.gc = function (t) {
                return t.metadata.exists
                  ? Hn(this.Kt, t.document, !1)
                  : new At(
                      this.yc(t.metadata.name),
                      this.Vc(t.metadata.readTime)
                    )
              }),
              (t.prototype.Vc = function (t) {
                return Pn(t)
              }),
              t
            )
          })()
        !(function () {
          function t(t, e, n) {
            ;(this.rl = t),
              (this.Sh = e),
              (this.Kt = n),
              (this.queries = []),
              (this.documents = []),
              (this.progress = Ss(t))
          }
          ;(t.prototype.ol = function (t) {
            this.progress.bytesLoaded += t.byteLength
            var e = this.progress.documentsLoaded
            return (
              t.payload.namedQuery
                ? this.queries.push(t.payload.namedQuery)
                : t.payload.documentMetadata
                ? (this.documents.push({
                    metadata: t.payload.documentMetadata,
                  }),
                  t.payload.documentMetadata.exists || ++e)
                : t.payload.document &&
                  ((this.documents[this.documents.length - 1].document =
                    t.payload.document),
                  ++e),
              e !== this.progress.documentsLoaded
                ? ((this.progress.documentsLoaded = e),
                  Object.assign({}, this.progress))
                : null
            )
          }),
            (t.prototype.cl = function (t) {
              for (
                var e = new Map(), n = new js(this.Kt), r = 0, i = t;
                r < i.length;
                r++
              ) {
                var o = i[r]
                if (o.metadata.queries)
                  for (
                    var u = n.yc(o.metadata.name),
                      s = 0,
                      a = o.metadata.queries;
                    s < a.length;
                    s++
                  ) {
                    var c = a[s],
                      h = (e.get(c) || pn()).add(u)
                    e.set(c, h)
                  }
              }
              return e
            }),
            (t.prototype.complete = function () {
              return Object(h.b)(this, void 0, void 0, function () {
                var t, e, n, r, i
                return Object(h.d)(this, function (o) {
                  switch (o.label) {
                    case 0:
                      return [
                        4,
                        co(
                          this.Sh,
                          new js(this.Kt),
                          this.documents,
                          this.rl.id
                        ),
                      ]
                    case 1:
                      ;(t = o.sent()),
                        (e = this.cl(this.documents)),
                        (n = 0),
                        (r = this.queries),
                        (o.label = 2)
                    case 2:
                      return n < r.length
                        ? ((i = r[n]), [4, ho(this.Sh, i, e.get(i.name))])
                        : [3, 5]
                    case 3:
                      o.sent(), (o.label = 4)
                    case 4:
                      return n++, [3, 2]
                    case 5:
                      return [
                        2,
                        ((this.progress.taskState = 'Success'),
                        new Bi(Object.assign({}, this.progress), t)),
                      ]
                  }
                })
              })
            })
        })()
        function Ss(t) {
          return {
            taskState: 'Running',
            documentsLoaded: 0,
            bytesLoaded: 0,
            totalDocuments: t.totalDocuments,
            totalBytes: t.totalBytes,
          }
        }
        var As = function (t) {
            this.key = t
          },
          xs = function (t) {
            this.key = t
          },
          Ds = (function () {
            function t(t, e) {
              ;(this.query = t),
                (this.al = e),
                (this.ul = null),
                (this.qe = !1),
                (this.hl = pn()),
                (this.Ce = pn()),
                (this.ll = le(t)),
                (this._l = new yn(this.ll))
            }
            return (
              Object.defineProperty(t.prototype, 'fl', {
                get: function () {
                  return this.al
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.dl = function (t, e) {
                var n = this,
                  r = e ? e.wl : new gn(),
                  i = e ? e._l : this._l,
                  o = e ? e.Ce : this.Ce,
                  u = i,
                  s = !1,
                  a =
                    te(this.query) && i.size === this.query.limit
                      ? i.last()
                      : null,
                  c =
                    ee(this.query) && i.size === this.query.limit
                      ? i.first()
                      : null
                if (
                  (t.Zt(function (t, e) {
                    var h = i.get(t),
                      f = e instanceof St ? e : null
                    f && (f = fe(n.query, f) ? f : null)
                    var l = !!h && n.Ce.has(h.key),
                      p =
                        !!f &&
                        (f.bt || (n.Ce.has(f.key) && f.hasCommittedMutations)),
                      d = !1
                    h && f
                      ? h.data().isEqual(f.data())
                        ? l !== p && (r.track({ type: 3, doc: f }), (d = !0))
                        : n.El(h, f) ||
                          (r.track({ type: 2, doc: f }),
                          (d = !0),
                          ((a && n.ll(f, a) > 0) || (c && n.ll(f, c) < 0)) &&
                            (s = !0))
                      : !h && f
                      ? (r.track({ type: 0, doc: f }), (d = !0))
                      : h &&
                        !f &&
                        (r.track({ type: 1, doc: h }),
                        (d = !0),
                        (a || c) && (s = !0)),
                      d &&
                        (f
                          ? ((u = u.add(f)), (o = p ? o.add(t) : o.delete(t)))
                          : ((u = u.delete(t)), (o = o.delete(t))))
                  }),
                  te(this.query) || ee(this.query))
                )
                  for (; u.size > this.query.limit; ) {
                    var h = te(this.query) ? u.last() : u.first()
                    ;(u = u.delete(h.key)),
                      (o = o.delete(h.key)),
                      r.track({ type: 1, doc: h })
                  }
                return { _l: u, wl: r, _c: s, Ce: o }
              }),
              (t.prototype.El = function (t, e) {
                return t.bt && e.hasCommittedMutations && !e.bt
              }),
              (t.prototype.Ei = function (t, e, n) {
                var r = this,
                  i = this._l
                ;(this._l = t._l), (this.Ce = t.Ce)
                var o = t.wl.Se()
                o.sort(function (t, e) {
                  return (
                    (function (t, e) {
                      var n = function (t) {
                        switch (t) {
                          case 0:
                            return 1
                          case 2:
                          case 3:
                            return 2
                          case 1:
                            return 0
                          default:
                            return w()
                        }
                      }
                      return n(t) - n(e)
                    })(t.type, e.type) || r.ll(t.doc, e.doc)
                  )
                }),
                  this.Tl(n)
                var u = e ? this.Il() : [],
                  s = 0 === this.hl.size && this.qe ? 1 : 0,
                  a = s !== this.ul
                return (
                  (this.ul = s),
                  0 !== o.length || a
                    ? {
                        snapshot: new bn(
                          this.query,
                          t._l,
                          i,
                          o,
                          t.Ce,
                          0 === s,
                          a,
                          !1
                        ),
                        ml: u,
                      }
                    : { ml: u }
                )
              }),
              (t.prototype.zh = function (t) {
                return this.qe && 'Offline' === t
                  ? ((this.qe = !1),
                    this.Ei(
                      { _l: this._l, wl: new gn(), Ce: this.Ce, _c: !1 },
                      !1
                    ))
                  : { ml: [] }
              }),
              (t.prototype.Al = function (t) {
                return !this.al.has(t) && !!this._l.has(t) && !this._l.get(t).bt
              }),
              (t.prototype.Tl = function (t) {
                var e = this
                t &&
                  (t.Ue.forEach(function (t) {
                    return (e.al = e.al.add(t))
                  }),
                  t.Qe.forEach(function (t) {}),
                  t.Ke.forEach(function (t) {
                    return (e.al = e.al.delete(t))
                  }),
                  (this.qe = t.qe))
              }),
              (t.prototype.Il = function () {
                var t = this
                if (!this.qe) return []
                var e = this.hl
                ;(this.hl = pn()),
                  this._l.forEach(function (e) {
                    t.Al(e.key) && (t.hl = t.hl.add(e.key))
                  })
                var n = []
                return (
                  e.forEach(function (e) {
                    t.hl.has(e) || n.push(new xs(e))
                  }),
                  this.hl.forEach(function (t) {
                    e.has(t) || n.push(new As(t))
                  }),
                  n
                )
              }),
              (t.prototype.Rl = function (t) {
                ;(this.al = t.Pc), (this.hl = pn())
                var e = this.dl(t.documents)
                return this.Ei(e, !0)
              }),
              (t.prototype.Pl = function () {
                return bn.Fe(this.query, this._l, this.Ce, 0 === this.ul)
              }),
              t
            )
          })(),
          ks = function (t, e, n) {
            ;(this.query = t), (this.targetId = e), (this.view = n)
          },
          Cs = function (t) {
            ;(this.key = t), (this.yl = !1)
          },
          Ps = (function () {
            function t(t, e, n, r, i, o) {
              ;(this.Sh = t),
                (this.gl = e),
                (this.Vl = n),
                (this.pl = r),
                (this.currentUser = i),
                (this.bl = o),
                (this.vl = {}),
                (this.Sl = new pi(function (t) {
                  return ce(t)
                }, ae)),
                (this.Dl = new Map()),
                (this.Cl = []),
                (this.xl = new Ze(Y.J)),
                (this.Nl = new Map()),
                (this.Fl = new lo()),
                (this.Ol = {}),
                (this.kl = new Map()),
                (this.Ml = _i.Bi()),
                (this.onlineState = 'Unknown'),
                (this.Ll = void 0)
            }
            return (
              Object.defineProperty(t.prototype, '$l', {
                get: function () {
                  return !0 === this.Ll
                },
                enumerable: !1,
                configurable: !0,
              }),
              t
            )
          })()
        function Ls(t, e) {
          return Object(h.b)(this, void 0, void 0, function () {
            var n, r, i, o, u, s
            return Object(h.d)(this, function (a) {
              switch (a.label) {
                case 0:
                  return (
                    (n = hu(t)),
                    (o = n.Sl.get(e))
                      ? ((r = o.targetId),
                        n.pl.ka(r),
                        (i = o.view.Pl()),
                        [3, 4])
                      : [3, 1]
                  )
                case 1:
                  return [4, ro(n.Sh, se(e))]
                case 2:
                  return (
                    (u = a.sent()),
                    (s = n.pl.ka(u.targetId)),
                    (r = u.targetId),
                    [4, Rs(n, e, r, 'current' === s)]
                  )
                case 3:
                  ;(i = a.sent()), n.$l && Xo(n.gl, u), (a.label = 4)
                case 4:
                  return [2, i]
              }
            })
          })
        }
        function Rs(t, e, n, r) {
          return Object(h.b)(this, void 0, void 0, function () {
            var i, o, u, s, a, c
            return Object(h.d)(this, function (f) {
              switch (f.label) {
                case 0:
                  return (
                    (t.Bl = function (e, n, r) {
                      return (function (t, e, n, r) {
                        return Object(h.b)(this, void 0, void 0, function () {
                          var i, o, u
                          return Object(h.d)(this, function (s) {
                            switch (s.label) {
                              case 0:
                                return (i = e.view.dl(n))._c
                                  ? [
                                      4,
                                      oo(t.Sh, e.query, !1).then(function (t) {
                                        var n = t.documents
                                        return e.view.dl(n, i)
                                      }),
                                    ]
                                  : [3, 2]
                              case 1:
                                ;(i = s.sent()), (s.label = 2)
                              case 2:
                                return (
                                  (o = r && r.Oe.get(e.targetId)),
                                  (u = e.view.Ei(i, t.$l, o)),
                                  [2, (Xs(t, e.targetId, u.ml), u.snapshot)]
                                )
                            }
                          })
                        })
                      })(t, e, n, r)
                    }),
                    [4, oo(t.Sh, e, !0)]
                  )
                case 1:
                  return (
                    (i = f.sent()),
                    (o = new Ds(e, i.Pc)),
                    (u = o.dl(i.documents)),
                    (s = wn.Be(n, r && 'Offline' !== t.onlineState)),
                    (a = o.Ei(u, t.$l, s)),
                    Xs(t, n, a.ml),
                    (c = new ks(e, n, o)),
                    [
                      2,
                      (t.Sl.set(e, c),
                      t.Dl.has(n) ? t.Dl.get(n).push(e) : t.Dl.set(n, [e]),
                      a.snapshot),
                    ]
                  )
              }
            })
          })
        }
        function Vs(t, e) {
          return Object(h.b)(this, void 0, void 0, function () {
            var n, r, i
            return Object(h.d)(this, function (o) {
              switch (o.label) {
                case 0:
                  return (
                    (n = _(t)),
                    (r = n.Sl.get(e)),
                    (i = n.Dl.get(r.targetId)).length > 1
                      ? [
                          2,
                          (n.Dl.set(
                            r.targetId,
                            i.filter(function (t) {
                              return !ae(t, e)
                            })
                          ),
                          void n.Sl.delete(e)),
                        ]
                      : n.$l
                      ? (n.pl.La(r.targetId),
                        n.pl.Ca(r.targetId)
                          ? [3, 2]
                          : [
                              4,
                              io(n.Sh, r.targetId, !1)
                                .then(function () {
                                  n.pl.Ba(r.targetId),
                                    Yo(n.gl, r.targetId),
                                    Js(n, r.targetId)
                                })
                                .catch(fi),
                            ])
                      : [3, 3]
                  )
                case 1:
                  o.sent(), (o.label = 2)
                case 2:
                  return [3, 5]
                case 3:
                  return Js(n, r.targetId), [4, io(n.Sh, r.targetId, !0)]
                case 4:
                  o.sent(), (o.label = 5)
                case 5:
                  return [2]
              }
            })
          })
        }
        function Ms(t, e, n) {
          return Object(h.b)(this, void 0, void 0, function () {
            var r, i, o, u
            return Object(h.d)(this, function (s) {
              switch (s.label) {
                case 0:
                  ;(r = fu(t)), (s.label = 1)
                case 1:
                  return (
                    s.trys.push([1, 5, , 6]),
                    [
                      4,
                      (function (t, e) {
                        var n,
                          r = _(t),
                          i = B.now(),
                          o = e.reduce(function (t, e) {
                            return t.add(e.key)
                          }, pn())
                        return r.persistence
                          .runTransaction(
                            'Locally write mutations',
                            'readwrite',
                            function (t) {
                              return r.Ic.Zo(t, o).next(function (o) {
                                n = o
                                for (
                                  var u = [], s = 0, a = e;
                                  s < a.length;
                                  s++
                                ) {
                                  var c = a[s],
                                    h = Ve(c, n.get(c.key))
                                  null != h &&
                                    u.push(
                                      new qe(
                                        c.key,
                                        h,
                                        Nt(h.proto.mapValue),
                                        ke.exists(!0)
                                      )
                                    )
                                }
                                return r.Ho.Pi(t, i, u, e)
                              })
                            }
                          )
                          .then(function (t) {
                            var e = t.Ns(n)
                            return { batchId: t.batchId, oi: e }
                          })
                      })(r.Sh, e),
                    ]
                  )
                case 2:
                  return (
                    (i = s.sent()),
                    r.pl.xa(i.batchId),
                    (function (t, e, n) {
                      var r = t.Ol[t.currentUser.R()]
                      r || (r = new Ze(O)),
                        (r = r.Ht(e, n)),
                        (t.Ol[t.currentUser.R()] = r)
                    })(r, i.batchId, n),
                    [4, $s(r, i.oi)]
                  )
                case 3:
                  return s.sent(), [4, as(r.gl)]
                case 4:
                  return s.sent(), [3, 6]
                case 5:
                  return (
                    (o = s.sent()),
                    (u = gr(o, 'Failed to persist write')),
                    n.reject(u),
                    [3, 6]
                  )
                case 6:
                  return [2]
              }
            })
          })
        }
        function Us(t, e) {
          return Object(h.b)(this, void 0, void 0, function () {
            var n, r
            return Object(h.d)(this, function (i) {
              switch (i.label) {
                case 0:
                  ;(n = _(t)), (i.label = 1)
                case 1:
                  return i.trys.push([1, 4, , 6]), [4, to(n.Sh, e)]
                case 2:
                  return (
                    (r = i.sent()),
                    e.Oe.forEach(function (t, e) {
                      var r = n.Nl.get(e)
                      r &&
                        (I(t.Ue.size + t.Qe.size + t.Ke.size <= 1),
                        t.Ue.size > 0
                          ? (r.yl = !0)
                          : t.Qe.size > 0
                          ? I(r.yl)
                          : t.Ke.size > 0 && (I(r.yl), (r.yl = !1)))
                    }),
                    [4, $s(n, r, e)]
                  )
                case 3:
                  return i.sent(), [3, 6]
                case 4:
                  return [4, fi(i.sent())]
                case 5:
                  return i.sent(), [3, 6]
                case 6:
                  return [2]
              }
            })
          })
        }
        function Fs(t, e, n) {
          var r = _(t)
          if ((r.$l && 0 === n) || (!r.$l && 1 === n)) {
            var i = []
            r.Sl.forEach(function (t, n) {
              var r = n.view.zh(e)
              r.snapshot && i.push(r.snapshot)
            }),
              (function (t, e) {
                var n = _(t)
                n.onlineState = e
                var r = !1
                n.queries.forEach(function (t, n) {
                  for (var i = 0, o = n.listeners; i < o.length; i++)
                    o[i].zh(e) && (r = !0)
                }),
                  r && Ts(n)
              })(r.Vl, e),
              i.length && r.vl.uh(i),
              (r.onlineState = e),
              r.$l && r.pl.Ka(e)
          }
        }
        function qs(t, e, n) {
          return Object(h.b)(this, void 0, void 0, function () {
            var r, i, o, u, s, a
            return Object(h.d)(this, function (c) {
              switch (c.label) {
                case 0:
                  return (
                    (r = _(t)).pl.qa(e, 'rejected', n),
                    (i = r.Nl.get(e)),
                    (o = i && i.key)
                      ? ((u = (u = new Ze(Y.J)).Ht(o, new At(o, K.min()))),
                        (s = pn().add(o)),
                        (a = new mn(K.min(), new Map(), new nn(O), u, s)),
                        [4, Us(r, a)])
                      : [3, 2]
                  )
                case 1:
                  return (
                    c.sent(),
                    (r.xl = r.xl.remove(o)),
                    r.Nl.delete(e),
                    Qs(r),
                    [3, 4]
                  )
                case 2:
                  return [
                    4,
                    io(r.Sh, e, !1)
                      .then(function () {
                        return Js(r, e, n)
                      })
                      .catch(fi),
                  ]
                case 3:
                  c.sent(), (c.label = 4)
                case 4:
                  return [2]
              }
            })
          })
        }
        function zs(t, e) {
          return Object(h.b)(this, void 0, void 0, function () {
            var n, r, i
            return Object(h.d)(this, function (o) {
              switch (o.label) {
                case 0:
                  ;(n = _(t)), (r = e.batch.batchId), (o.label = 1)
                case 1:
                  return o.trys.push([1, 4, , 6]), [4, $i(n.Sh, e)]
                case 2:
                  return (
                    (i = o.sent()),
                    Ks(n, r, null),
                    Bs(n, r),
                    n.pl.Fa(r, 'acknowledged'),
                    [4, $s(n, i)]
                  )
                case 3:
                  return o.sent(), [3, 6]
                case 4:
                  return [4, fi(o.sent())]
                case 5:
                  return o.sent(), [3, 6]
                case 6:
                  return [2]
              }
            })
          })
        }
        function Gs(t, e, n) {
          return Object(h.b)(this, void 0, void 0, function () {
            var r, i
            return Object(h.d)(this, function (o) {
              switch (o.label) {
                case 0:
                  ;(r = _(t)), (o.label = 1)
                case 1:
                  return (
                    o.trys.push([1, 4, , 6]),
                    [
                      4,
                      (function (t, e) {
                        var n = _(t)
                        return n.persistence.runTransaction(
                          'Reject batch',
                          'readwrite-primary',
                          function (t) {
                            var r
                            return n.Ho.yi(t, e)
                              .next(function (e) {
                                return (
                                  I(null !== e), (r = e.keys()), n.Ho.xi(t, e)
                                )
                              })
                              .next(function () {
                                return n.Ho.Oi(t)
                              })
                              .next(function () {
                                return n.Ic.Zo(t, r)
                              })
                          }
                        )
                      })(r.Sh, e),
                    ]
                  )
                case 2:
                  return (
                    (i = o.sent()),
                    Ks(r, e, n),
                    Bs(r, e),
                    r.pl.Fa(e, 'rejected', n),
                    [4, $s(r, i)]
                  )
                case 3:
                  return o.sent(), [3, 6]
                case 4:
                  return [4, fi(o.sent())]
                case 5:
                  return o.sent(), [3, 6]
                case 6:
                  return [2]
              }
            })
          })
        }
        function Hs(t, e) {
          return Object(h.b)(this, void 0, void 0, function () {
            var n, r, i, o, u
            return Object(h.d)(this, function (s) {
              switch (s.label) {
                case 0:
                  es((n = _(t)).gl) ||
                    d(
                      'SyncEngine',
                      "The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled."
                    ),
                    (s.label = 1)
                case 1:
                  return (
                    s.trys.push([1, 3, , 4]),
                    [
                      4,
                      (function (t) {
                        var e = _(t)
                        return e.persistence.runTransaction(
                          'Get highest unacknowledged batch id',
                          'readonly',
                          function (t) {
                            return e.Ho.pi(t)
                          }
                        )
                      })(n.Sh),
                    ]
                  )
                case 2:
                  return -1 === (r = s.sent())
                    ? [2, void e.resolve()]
                    : ((i = n.kl.get(r) || []).push(e), n.kl.set(r, i), [3, 4])
                case 3:
                  return (
                    (o = s.sent()),
                    (u = gr(
                      o,
                      'Initialization of waitForPendingWrites() operation failed'
                    )),
                    e.reject(u),
                    [3, 4]
                  )
                case 4:
                  return [2]
              }
            })
          })
        }
        function Bs(t, e) {
          ;(t.kl.get(e) || []).forEach(function (t) {
            t.resolve()
          }),
            t.kl.delete(e)
        }
        function Ks(t, e, n) {
          var r = _(t),
            i = r.Ol[r.currentUser.R()]
          if (i) {
            var o = i.get(e)
            o && (n ? o.reject(n) : o.resolve(), (i = i.remove(e))),
              (r.Ol[r.currentUser.R()] = i)
          }
        }
        function Js(t, e, n) {
          void 0 === n && (n = null), t.pl.La(e)
          for (var r = 0, i = t.Dl.get(e); r < i.length; r++) {
            var o = i[r]
            t.Sl.delete(o), n && t.vl.ql(o, n)
          }
          t.Dl.delete(e),
            t.$l &&
              t.Fl.kc(e).forEach(function (e) {
                t.Fl.ki(e) || Ws(t, e)
              })
        }
        function Ws(t, e) {
          var n = t.xl.get(e)
          null !== n &&
            (Yo(t.gl, n), (t.xl = t.xl.remove(e)), t.Nl.delete(n), Qs(t))
        }
        function Xs(t, e, n) {
          for (var r = 0, i = n; r < i.length; r++) {
            var o = i[r]
            o instanceof As
              ? (t.Fl.sr(o.key, e), Ys(t, o))
              : o instanceof xs
              ? (d('SyncEngine', 'Document no longer in limbo: ' + o.key),
                t.Fl.rr(o.key, e),
                t.Fl.ki(o.key) || Ws(t, o.key))
              : w()
          }
        }
        function Ys(t, e) {
          var n = e.key
          t.xl.get(n) ||
            (d('SyncEngine', 'New document in limbo: ' + n),
            t.Cl.push(n),
            Qs(t))
        }
        function Qs(t) {
          for (; t.Cl.length > 0 && t.xl.size < t.bl; ) {
            var e = t.Cl.shift(),
              n = t.Ml.next()
            t.Nl.set(n, new Cs(e)),
              (t.xl = t.xl.Ht(e, n)),
              Xo(t.gl, new de(se(Zt(e.path)), n, 2, H.U))
          }
        }
        function $s(t, e, n) {
          return Object(h.b)(this, void 0, void 0, function () {
            var r, i, o, u
            return Object(h.d)(this, function (s) {
              switch (s.label) {
                case 0:
                  return (
                    (r = _(t)),
                    (i = []),
                    (o = []),
                    (u = []),
                    r.Sl.nt()
                      ? [3, 3]
                      : (r.Sl.forEach(function (t, s) {
                          u.push(
                            r.Bl(s, e, n).then(function (t) {
                              if (t) {
                                r.$l &&
                                  r.pl.qa(
                                    s.targetId,
                                    t.fromCache ? 'not-current' : 'current'
                                  ),
                                  i.push(t)
                                var e = Ji.cc(s.targetId, t)
                                o.push(e)
                              }
                            })
                          )
                        }),
                        [4, Promise.all(u)])
                  )
                case 1:
                  return (
                    s.sent(),
                    r.vl.uh(i),
                    [
                      4,
                      (function (t, e) {
                        return Object(h.b)(this, void 0, void 0, function () {
                          var n, r, i, o, u, s, a, c, f
                          return Object(h.d)(this, function (h) {
                            switch (h.label) {
                              case 0:
                                ;(n = _(t)), (h.label = 1)
                              case 1:
                                return (
                                  h.trys.push([1, 3, , 4]),
                                  [
                                    4,
                                    n.persistence.runTransaction(
                                      'notifyLocalViewChanges',
                                      'readwrite',
                                      function (t) {
                                        return sr.forEach(e, function (e) {
                                          return sr
                                            .forEach(e.rc, function (r) {
                                              return n.persistence.Ii.sr(
                                                t,
                                                e.targetId,
                                                r
                                              )
                                            })
                                            .next(function () {
                                              return sr.forEach(
                                                e.oc,
                                                function (r) {
                                                  return n.persistence.Ii.rr(
                                                    t,
                                                    e.targetId,
                                                    r
                                                  )
                                                }
                                              )
                                            })
                                        })
                                      }
                                    ),
                                  ]
                                )
                              case 2:
                                return h.sent(), [3, 4]
                              case 3:
                                if (!fr((r = h.sent()))) throw r
                                return (
                                  d(
                                    'LocalStore',
                                    'Failed to update sequence numbers: ' + r
                                  ),
                                  [3, 4]
                                )
                              case 4:
                                for (i = 0, o = e; i < o.length; i++)
                                  (u = o[i]),
                                    (s = u.targetId),
                                    u.fromCache ||
                                      ((a = n.dc.get(s)),
                                      (c = a.Mt),
                                      (f = a.Bt(c)),
                                      (n.dc = n.dc.Ht(s, f)))
                                return [2]
                            }
                          })
                        })
                      })(r.Sh, o),
                    ]
                  )
                case 2:
                  s.sent(), (s.label = 3)
                case 3:
                  return [2]
              }
            })
          })
        }
        function Zs(t, e) {
          return Object(h.b)(this, void 0, void 0, function () {
            var n, r
            return Object(h.d)(this, function (i) {
              switch (i.label) {
                case 0:
                  return (n = _(t)).currentUser.isEqual(e)
                    ? [3, 3]
                    : (d('SyncEngine', 'User change. New user:', e.R()),
                      [4, Qi(n.Sh, e)])
                case 1:
                  return (
                    (r = i.sent()),
                    (n.currentUser = e),
                    (function (t, e) {
                      t.kl.forEach(function (t) {
                        t.forEach(function (t) {
                          t.reject(
                            new x(
                              A.CANCELLED,
                              "'waitForPendingWrites' promise is rejected due to a user change."
                            )
                          )
                        })
                      }),
                        t.kl.clear()
                    })(n),
                    n.pl.Qa(e, r.Ac, r.Rc),
                    [4, $s(n, r.mc)]
                  )
                case 2:
                  i.sent(), (i.label = 3)
                case 3:
                  return [2]
              }
            })
          })
        }
        function tu(t, e) {
          var n = _(t),
            r = n.Nl.get(e)
          if (r && r.yl) return pn().add(r.key)
          var i = pn(),
            o = n.Dl.get(e)
          if (!o) return i
          for (var u = 0, s = o; u < s.length; u++) {
            var a = s[u],
              c = n.Sl.get(a)
            i = i.ye(c.view.fl)
          }
          return i
        }
        function eu(t, e) {
          return Object(h.b)(this, void 0, void 0, function () {
            var n, r, i
            return Object(h.d)(this, function (o) {
              switch (o.label) {
                case 0:
                  return [4, oo((n = _(t)).Sh, e.query, !0)]
                case 1:
                  return (
                    (r = o.sent()),
                    (i = e.view.Rl(r)),
                    [2, (n.$l && Xs(n, e.targetId, i.ml), i)]
                  )
              }
            })
          })
        }
        function nu(t) {
          return Object(h.b)(this, void 0, void 0, function () {
            var e
            return Object(h.d)(this, function (n) {
              return [
                2,
                uo((e = _(t)).Sh).then(function (t) {
                  return $s(e, t)
                }),
              ]
            })
          })
        }
        function ru(t, e, n, r) {
          return Object(h.b)(this, void 0, void 0, function () {
            var i, o
            return Object(h.d)(this, function (u) {
              switch (u.label) {
                case 0:
                  return [
                    4,
                    (function (t, e) {
                      var n = _(t),
                        r = _(n.Ho)
                      return n.persistence.runTransaction(
                        'Lookup mutation documents',
                        'readonly',
                        function (t) {
                          return r.gi(t, e).next(function (e) {
                            return e ? n.Ic.Zo(t, e) : sr.resolve(null)
                          })
                        }
                      )
                    })((i = _(t)).Sh, e),
                  ]
                case 1:
                  return null === (o = u.sent())
                    ? [3, 6]
                    : 'pending' !== n
                    ? [3, 3]
                    : [4, as(i.gl)]
                case 2:
                  return u.sent(), [3, 4]
                case 3:
                  'acknowledged' === n || 'rejected' === n
                    ? (Ks(i, e, r || null),
                      Bs(i, e),
                      (function (t, e) {
                        _(_(t).Ho).Ni(e)
                      })(i.Sh, e))
                    : w(),
                    (u.label = 4)
                case 4:
                  return [4, $s(i, o)]
                case 5:
                  return u.sent(), [3, 7]
                case 6:
                  d('SyncEngine', 'Cannot apply mutation batch with id: ' + e),
                    (u.label = 7)
                case 7:
                  return [2]
              }
            })
          })
        }
        function iu(t, e) {
          return Object(h.b)(this, void 0, void 0, function () {
            var n, r, i, o, u, s, a, c
            return Object(h.d)(this, function (h) {
              switch (h.label) {
                case 0:
                  return (
                    hu((n = _(t))),
                    fu(n),
                    !0 !== e || !0 === n.Ll
                      ? [3, 3]
                      : ((r = n.pl.Sa()), [4, ou(n, r.rt())])
                  )
                case 1:
                  return (i = h.sent()), (n.Ll = !0), [4, vs(n.gl, !0)]
                case 2:
                  for (h.sent(), o = 0, u = i; o < u.length; o++)
                    (s = u[o]), Xo(n.gl, s)
                  return [3, 7]
                case 3:
                  return !1 !== e || !1 === n.Ll
                    ? [3, 7]
                    : ((a = []),
                      (c = Promise.resolve()),
                      n.Dl.forEach(function (t, e) {
                        n.pl.$a(e)
                          ? a.push(e)
                          : (c = c.then(function () {
                              return Js(n, e), io(n.Sh, e, !0)
                            })),
                          Yo(n.gl, e)
                      }),
                      [4, c])
                case 4:
                  return h.sent(), [4, ou(n, a)]
                case 5:
                  return (
                    h.sent(),
                    (function (t) {
                      var e = _(t)
                      e.Nl.forEach(function (t, n) {
                        Yo(e.gl, n)
                      }),
                        e.Fl.Mc(),
                        (e.Nl = new Map()),
                        (e.xl = new Ze(Y.J))
                    })(n),
                    (n.Ll = !1),
                    [4, vs(n.gl, !1)]
                  )
                case 6:
                  h.sent(), (h.label = 7)
                case 7:
                  return [2]
              }
            })
          })
        }
        function ou(t, e, n) {
          return Object(h.b)(this, void 0, void 0, function () {
            var n, r, i, o, u, s, a, c, f, l, d, p, v, y
            return Object(h.d)(this, function (h) {
              switch (h.label) {
                case 0:
                  ;(n = _(t)),
                    (r = []),
                    (i = []),
                    (o = 0),
                    (u = e),
                    (h.label = 1)
                case 1:
                  return o < u.length
                    ? ((s = u[o]),
                      (a = void 0),
                      (c = n.Dl.get(s)) && 0 !== c.length
                        ? [4, ro(n.Sh, se(c[0]))]
                        : [3, 7])
                    : [3, 13]
                case 2:
                  ;(a = h.sent()), (f = 0), (l = c), (h.label = 3)
                case 3:
                  return f < l.length
                    ? ((d = l[f]), (p = n.Sl.get(d)), [4, eu(n, p)])
                    : [3, 6]
                case 4:
                  ;(v = h.sent()).snapshot && i.push(v.snapshot), (h.label = 5)
                case 5:
                  return f++, [3, 3]
                case 6:
                  return [3, 11]
                case 7:
                  return [4, so(n.Sh, s)]
                case 8:
                  return (y = h.sent()), [4, ro(n.Sh, y)]
                case 9:
                  return (a = h.sent()), [4, Rs(n, su(y), s, !1)]
                case 10:
                  h.sent(), (h.label = 11)
                case 11:
                  r.push(a), (h.label = 12)
                case 12:
                  return o++, [3, 1]
                case 13:
                  return [2, (n.vl.uh(i), r)]
              }
            })
          })
        }
        function su(t) {
          return $t(
            t.path,
            t.collectionGroup,
            t.orderBy,
            t.filters,
            t.limit,
            'F',
            t.startAt,
            t.endAt
          )
        }
        function uu(t) {
          var e = _(t)
          return _(_(e.Sh).persistence).Qo()
        }
        function au(t, e, n, r) {
          return Object(h.b)(this, void 0, void 0, function () {
            var i, o, u
            return Object(h.d)(this, function (s) {
              switch (s.label) {
                case 0:
                  return (i = _(t)).Ll
                    ? (d(
                        'SyncEngine',
                        'Ignoring unexpected query state notification.'
                      ),
                      [3, 8])
                    : [3, 1]
                case 1:
                  if (!i.Dl.has(e)) return [3, 8]
                  switch (n) {
                    case 'current':
                    case 'not-current':
                      return [3, 2]
                    case 'rejected':
                      return [3, 5]
                  }
                  return [3, 7]
                case 2:
                  return [4, uo(i.Sh)]
                case 3:
                  return (
                    (o = s.sent()),
                    (u = mn.$e(e, 'current' === n)),
                    [4, $s(i, o, u)]
                  )
                case 4:
                  return s.sent(), [3, 8]
                case 5:
                  return [4, io(i.Sh, e, !0)]
                case 6:
                  return s.sent(), Js(i, e, r), [3, 8]
                case 7:
                  w(), (s.label = 8)
                case 8:
                  return [2]
              }
            })
          })
        }
        function cu(t, e, n) {
          return Object(h.b)(this, void 0, void 0, function () {
            var r, i, o, u, s, a, c, f, l, v
            return Object(h.d)(this, function (p) {
              switch (p.label) {
                case 0:
                  if (!(r = hu(t)).Ll) return [3, 10]
                  ;(i = 0), (o = e), (p.label = 1)
                case 1:
                  return i < o.length
                    ? ((u = o[i]),
                      r.Dl.has(u)
                        ? (d(
                            'SyncEngine',
                            'Adding an already active target ' + u
                          ),
                          [3, 5])
                        : [4, so(r.Sh, u)])
                    : [3, 6]
                case 2:
                  return (s = p.sent()), [4, ro(r.Sh, s)]
                case 3:
                  return (a = p.sent()), [4, Rs(r, su(s), a.targetId, !1)]
                case 4:
                  p.sent(), Xo(r.gl, a), (p.label = 5)
                case 5:
                  return i++, [3, 1]
                case 6:
                  ;(c = function (t) {
                    return Object(h.d)(this, function (e) {
                      switch (e.label) {
                        case 0:
                          return r.Dl.has(t)
                            ? [
                                4,
                                io(r.Sh, t, !1)
                                  .then(function () {
                                    Yo(r.gl, t), Js(r, t)
                                  })
                                  .catch(fi),
                              ]
                            : [3, 2]
                        case 1:
                          e.sent(), (e.label = 2)
                        case 2:
                          return [2]
                      }
                    })
                  }),
                    (f = 0),
                    (l = n),
                    (p.label = 7)
                case 7:
                  return f < l.length ? ((v = l[f]), [5, c(v)]) : [3, 10]
                case 8:
                  p.sent(), (p.label = 9)
                case 9:
                  return f++, [3, 7]
                case 10:
                  return [2]
              }
            })
          })
        }
        function hu(t) {
          var e = _(t)
          return (
            (e.gl.Ch.Bh = Us.bind(null, e)),
            (e.gl.Ch.Sn = tu.bind(null, e)),
            (e.gl.Ch.$h = qs.bind(null, e)),
            (e.vl.uh = _s.bind(null, e.Vl)),
            (e.vl.ql = Es.bind(null, e.Vl)),
            e
          )
        }
        function fu(t) {
          var e = _(t)
          return (
            (e.gl.Ch.qh = zs.bind(null, e)), (e.gl.Ch.Uh = Gs.bind(null, e)), e
          )
        }
        var lu = (function () {
            function t() {
              this.synchronizeTabs = !1
            }
            return (
              (t.prototype.initialize = function (t) {
                return Object(h.b)(this, void 0, void 0, function () {
                  return Object(h.d)(this, function (e) {
                    switch (e.label) {
                      case 0:
                        return (
                          (this.Kt = Uo(t.gu.T)),
                          (this.pl = this.jl(t)),
                          (this.persistence = this.Gl(t)),
                          [4, this.persistence.start()]
                        )
                      case 1:
                        return (
                          e.sent(),
                          (this.zl = this.Hl(t)),
                          (this.Sh = this.Jl(t)),
                          [2]
                        )
                    }
                  })
                })
              }),
              (t.prototype.Hl = function (t) {
                return null
              }),
              (t.prototype.Jl = function (t) {
                return Yi(this.persistence, new Wi(), t.Yl, this.Kt)
              }),
              (t.prototype.Gl = function (t) {
                return new mo(Io.ra, this.Kt)
              }),
              (t.prototype.jl = function (t) {
                return new Do()
              }),
              (t.prototype.terminate = function () {
                return Object(h.b)(this, void 0, void 0, function () {
                  return Object(h.d)(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return this.zl && this.zl.stop(), [4, this.pl.Lo()]
                      case 1:
                        return t.sent(), [4, this.persistence.Lo()]
                      case 2:
                        return t.sent(), [2]
                    }
                  })
                })
              }),
              t
            )
          })(),
          pu = (function (t) {
            function e(e, n, r) {
              var i = this
              return (
                ((i = t.call(this) || this).Xl = e),
                (i.cacheSizeBytes = n),
                (i.forceOwnership = r),
                (i.synchronizeTabs = !1),
                i
              )
            }
            return (
              Object(h.c)(e, t),
              (e.prototype.initialize = function (e) {
                return Object(h.b)(this, void 0, void 0, function () {
                  return Object(h.d)(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return [4, t.prototype.initialize.call(this, e)]
                      case 1:
                        return n.sent(), [4, ao(this.Sh)]
                      case 2:
                        return n.sent(), [4, this.Xl.initialize(this, e)]
                      case 3:
                        return n.sent(), [4, fu(this.Xl.fa)]
                      case 4:
                        return n.sent(), [4, as(this.Xl.gl)]
                      case 5:
                        return n.sent(), [2]
                    }
                  })
                })
              }),
              (e.prototype.Jl = function (t) {
                return Yi(this.persistence, new Wi(), t.Yl, this.Kt)
              }),
              (e.prototype.Hl = function (t) {
                var e = this.persistence.Ii._r
                return new Ai(e, t.fs)
              }),
              (e.prototype.Gl = function (t) {
                var e = Hi(t.gu.T, t.gu.persistenceKey),
                  n =
                    void 0 !== this.cacheSizeBytes
                      ? hi.Xs(this.cacheSizeBytes)
                      : hi.ei
                return new qi(
                  this.synchronizeTabs,
                  e,
                  t.clientId,
                  n,
                  t.fs,
                  Vo(),
                  Mo(),
                  this.Kt,
                  this.pl,
                  !!this.forceOwnership
                )
              }),
              (e.prototype.jl = function (t) {
                return new Do()
              }),
              e
            )
          })(lu),
          du = (function (t) {
            function e(e, n) {
              var r = this
              return (
                ((r = t.call(this, e, n, !1) || this).Xl = e),
                (r.cacheSizeBytes = n),
                (r.synchronizeTabs = !0),
                r
              )
            }
            return (
              Object(h.c)(e, t),
              (e.prototype.initialize = function (e) {
                return Object(h.b)(this, void 0, void 0, function () {
                  var n,
                    r = this
                  return Object(h.d)(this, function (i) {
                    switch (i.label) {
                      case 0:
                        return [4, t.prototype.initialize.call(this, e)]
                      case 1:
                        return (
                          i.sent(),
                          (n = this.Xl.fa),
                          this.pl instanceof xo
                            ? ((this.pl.fa = {
                                nu: ru.bind(null, n),
                                su: au.bind(null, n),
                                iu: cu.bind(null, n),
                                Qo: uu.bind(null, n),
                                eu: nu.bind(null, n),
                              }),
                              [4, this.pl.start()])
                            : [3, 3]
                        )
                      case 2:
                        i.sent(), (i.label = 3)
                      case 3:
                        return [
                          4,
                          this.persistence.Po(function (t) {
                            return Object(h.b)(r, void 0, void 0, function () {
                              return Object(h.d)(this, function (e) {
                                switch (e.label) {
                                  case 0:
                                    return [4, iu(this.Xl.fa, t)]
                                  case 1:
                                    return (
                                      e.sent(),
                                      this.zl &&
                                        (t && !this.zl.Tr
                                          ? this.zl.start(this.Sh)
                                          : t || this.zl.stop()),
                                      [2]
                                    )
                                }
                              })
                            })
                          }),
                        ]
                      case 4:
                        return i.sent(), [2]
                    }
                  })
                })
              }),
              (e.prototype.jl = function (t) {
                var e = Vo()
                if (!xo.Wn(e))
                  throw new x(
                    A.UNIMPLEMENTED,
                    'IndexedDB persistence is only available on platforms that support LocalStorage.'
                  )
                var n = Hi(t.gu.T, t.gu.persistenceKey)
                return new xo(e, t.fs, n, t.clientId, t.Yl)
              }),
              e
            )
          })(pu),
          vu = (function () {
            function t() {}
            return (
              (t.prototype.initialize = function (t, e) {
                return Object(h.b)(this, void 0, void 0, function () {
                  var n = this
                  return Object(h.d)(this, function (r) {
                    switch (r.label) {
                      case 0:
                        return this.Sh
                          ? [3, 2]
                          : ((this.Sh = t.Sh),
                            (this.pl = t.pl),
                            (this.Dh = this.Zl(e)),
                            (this.gl = this.t_(e)),
                            (this.Vl = this.e_(e)),
                            (this.fa = this.n_(e, !t.synchronizeTabs)),
                            (this.pl.da = function (t) {
                              return Fs(n.fa, t, 1)
                            }),
                            (this.gl.Ch.s_ = Zs.bind(null, this.fa)),
                            [4, vs(this.gl, this.fa.$l)])
                      case 1:
                        r.sent(), (r.label = 2)
                      case 2:
                        return [2]
                    }
                  })
                })
              }),
              (t.prototype.e_ = function (t) {
                return new ms()
              }),
              (t.prototype.Zl = function (t) {
                var e,
                  n = Uo(t.gu.T),
                  r = ((e = t.gu), new Ro(e))
                return (function (t, e, n) {
                  return new Ho(t, e, n)
                })(t.credentials, r, n)
              }),
              (t.prototype.t_ = function (t) {
                var e,
                  n,
                  r,
                  i,
                  o,
                  u = this
                return (
                  (e = this.Sh),
                  (n = this.Dh),
                  (r = t.fs),
                  (i = function (t) {
                    return Fs(u.fa, t, 0)
                  }),
                  (o = Co.Wn() ? new Co() : new ko()),
                  new Ko(e, n, r, i, o)
                )
              }),
              (t.prototype.n_ = function (t, e) {
                return (function (t, e, n, r, i, o, u) {
                  var s = new Ps(t, e, n, r, i, o)
                  return u && (s.Ll = !0), s
                })(this.Sh, this.gl, this.Vl, this.pl, t.Yl, t.bl, e)
              }),
              (t.prototype.terminate = function () {
                return (function (t) {
                  return Object(h.b)(this, void 0, void 0, function () {
                    var e
                    return Object(h.d)(this, function (n) {
                      switch (n.label) {
                        case 0:
                          return (
                            (e = _(t)),
                            d('RemoteStore', 'RemoteStore shutting down.'),
                            e.Fh.add(5),
                            [4, Wo(e)]
                          )
                        case 1:
                          return n.sent(), e.kh.Lo(), e.Mh.set('Unknown'), [2]
                      }
                    })
                  })
                })(this.gl)
              }),
              t
            )
          })()
        var yu = (function () {
            function t(t) {
              ;(this.observer = t), (this.muted = !1)
            }
            return (
              (t.prototype.next = function (t) {
                this.observer.next && this.i_(this.observer.next, t)
              }),
              (t.prototype.error = function (t) {
                this.observer.error
                  ? this.i_(this.observer.error, t)
                  : console.error('Uncaught Error in snapshot listener:', t)
              }),
              (t.prototype.r_ = function () {
                this.muted = !0
              }),
              (t.prototype.i_ = function (t, e) {
                var n = this
                this.muted ||
                  setTimeout(function () {
                    n.muted || t(e)
                  }, 0)
              }),
              t
            )
          })(),
          gu =
            ((function () {
              function t(t, e) {
                var n = this
                ;(this.o_ = t),
                  (this.Kt = e),
                  (this.metadata = new or()),
                  (this.buffer = new Uint8Array()),
                  (this.c_ = new TextDecoder('utf-8')),
                  this.a_().then(
                    function (t) {
                      t && t.il()
                        ? n.metadata.resolve(t.payload.metadata)
                        : n.metadata.reject(
                            new Error(
                              'The first element of the bundle is not a metadata, it is\n             ' +
                                JSON.stringify(null == t ? void 0 : t.payload)
                            )
                          )
                    },
                    function (t) {
                      return n.metadata.reject(t)
                    }
                  )
              }
              ;(t.prototype.close = function () {
                return this.o_.cancel()
              }),
                (t.prototype.getMetadata = function () {
                  return Object(h.b)(this, void 0, void 0, function () {
                    return Object(h.d)(this, function (t) {
                      return [2, this.metadata.promise]
                    })
                  })
                }),
                (t.prototype.Kl = function () {
                  return Object(h.b)(this, void 0, void 0, function () {
                    return Object(h.d)(this, function (t) {
                      switch (t.label) {
                        case 0:
                          return [4, this.getMetadata()]
                        case 1:
                          return [2, (t.sent(), this.a_())]
                      }
                    })
                  })
                }),
                (t.prototype.a_ = function () {
                  return Object(h.b)(this, void 0, void 0, function () {
                    var t, e, n, r
                    return Object(h.d)(this, function (i) {
                      switch (i.label) {
                        case 0:
                          return [4, this.u_()]
                        case 1:
                          return null === (t = i.sent())
                            ? [2, null]
                            : ((e = this.c_.decode(t)),
                              (n = Number(e)),
                              isNaN(n) &&
                                this.h_(
                                  'length string (' +
                                    e +
                                    ') is not valid number'
                                ),
                              [4, this.l_(n)])
                        case 2:
                          return (
                            (r = i.sent()),
                            [2, new Ns(JSON.parse(r), t.length + n)]
                          )
                      }
                    })
                  })
                }),
                (t.prototype.__ = function () {
                  return this.buffer.findIndex(function (t) {
                    return t === '{'.charCodeAt(0)
                  })
                }),
                (t.prototype.u_ = function () {
                  return Object(h.b)(this, void 0, void 0, function () {
                    var t, e
                    return Object(h.d)(this, function (n) {
                      switch (n.label) {
                        case 0:
                          return this.__() < 0 ? [4, this.f_()] : [3, 3]
                        case 1:
                          if (n.sent()) return [3, 3]
                          n.label = 2
                        case 2:
                          return [3, 0]
                        case 3:
                          return 0 === this.buffer.length
                            ? [2, null]
                            : ((t = this.__()) < 0 &&
                                this.h_(
                                  'Reached the end of bundle when a length string is expected.'
                                ),
                              (e = this.buffer.slice(0, t)),
                              [2, ((this.buffer = this.buffer.slice(t)), e)])
                      }
                    })
                  })
                }),
                (t.prototype.l_ = function (t) {
                  return Object(h.b)(this, void 0, void 0, function () {
                    var e
                    return Object(h.d)(this, function (n) {
                      switch (n.label) {
                        case 0:
                          return this.buffer.length < t
                            ? [4, this.f_()]
                            : [3, 3]
                        case 1:
                          n.sent() &&
                            this.h_(
                              'Reached the end of bundle when more is expected.'
                            ),
                            (n.label = 2)
                        case 2:
                          return [3, 0]
                        case 3:
                          return (
                            (e = this.c_.decode(this.buffer.slice(0, t))),
                            [2, ((this.buffer = this.buffer.slice(t)), e)]
                          )
                      }
                    })
                  })
                }),
                (t.prototype.h_ = function (t) {
                  throw (
                    (this.o_.cancel(), new Error('Invalid bundle format: ' + t))
                  )
                }),
                (t.prototype.f_ = function () {
                  return Object(h.b)(this, void 0, void 0, function () {
                    var t, e
                    return Object(h.d)(this, function (n) {
                      switch (n.label) {
                        case 0:
                          return [4, this.o_.read()]
                        case 1:
                          return (
                            (t = n.sent()).done ||
                              ((e = new Uint8Array(
                                this.buffer.length + t.value.length
                              )).set(this.buffer),
                              e.set(t.value, this.buffer.length),
                              (this.buffer = e)),
                            [2, t.done]
                          )
                      }
                    })
                  })
                })
            })(),
            (function () {
              function t() {
                for (var t = [], e = 0; e < arguments.length; e++)
                  t[e] = arguments[e]
                for (var n = 0; n < t.length; ++n)
                  if (0 === t[n].length)
                    throw new x(
                      A.INVALID_ARGUMENT,
                      'Invalid field name at argument $(i + 1). Field names must not be empty.'
                    )
                this.d_ = new rt(t)
              }
              return (
                (t.prototype.isEqual = function (t) {
                  return this.d_.isEqual(t.d_)
                }),
                t
              )
            })()),
          bu = function (t) {
            this._methodName = t
          }
        function mu(t, e, n) {
          if (!n)
            throw new x(
              A.INVALID_ARGUMENT,
              'Function ' + t + '() cannot be called with an empty ' + e + '.'
            )
        }
        function wu(t, e) {
          if (void 0 === e) return { merge: !1 }
          if (void 0 !== e.mergeFields && void 0 !== e.merge)
            throw new x(
              A.INVALID_ARGUMENT,
              'Invalid options passed to function ' +
                t +
                '(): You cannot specify both "merge" and "mergeFields".'
            )
          return e
        }
        function Iu(t, e, n, r) {
          if (!0 === e && !0 === r)
            throw new x(
              A.INVALID_ARGUMENT,
              t + ' and ' + n + ' cannot be used together.'
            )
        }
        function _u(t) {
          if (!Y.Et(t))
            throw new x(
              A.INVALID_ARGUMENT,
              'Invalid document reference. Document references must have an even number of segments, but ' +
                t +
                ' has ' +
                t.length +
                '.'
            )
        }
        function Eu(t) {
          if (Y.Et(t))
            throw new x(
              A.INVALID_ARGUMENT,
              'Invalid collection reference. Collection references must have an odd number of segments, but ' +
                t +
                ' has ' +
                t.length +
                '.'
            )
        }
        function Tu(t) {
          if (void 0 === t) return 'undefined'
          if (null === t) return 'null'
          if ('string' == typeof t)
            return (
              t.length > 20 && (t = t.substring(0, 20) + '...'),
              JSON.stringify(t)
            )
          if ('number' == typeof t || 'boolean' == typeof t) return '' + t
          if ('object' == typeof t) {
            if (t instanceof Array) return 'an array'
            var e = (function (t) {
              if (t.constructor) {
                var e = /function\s+([^\s(]+)\s*\(/.exec(
                  t.constructor.toString()
                )
                if (e && e.length > 1) return e[1]
              }
              return null
            })(t)
            return e ? 'a custom ' + e + ' object' : 'an object'
          }
          return 'function' == typeof t ? 'a function' : w()
        }
        function Ou(t, e) {
          if (('_delegate' in t && (t = t._), !(t instanceof e))) {
            if (e.name === t.constructor.name)
              throw new x(
                A.INVALID_ARGUMENT,
                'Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?'
              )
            var n = Tu(t)
            throw new x(
              A.INVALID_ARGUMENT,
              "Expected type '" + e.name + "', but it was: " + n
            )
          }
          return t
        }
        function Nu(t, e) {
          if (e <= 0)
            throw new x(
              A.INVALID_ARGUMENT,
              'Function ' +
                t +
                '() requires a positive number, but it was: ' +
                e +
                '.'
            )
        }
        var ju = (function () {
            function t(t) {
              var e
              if (void 0 === t.host) {
                if (void 0 !== t.ssl)
                  throw new x(
                    A.INVALID_ARGUMENT,
                    "Can't provide ssl option if host option is not set"
                  )
                ;(this.host = 'firestore.googleapis.com'), (this.ssl = !0)
              } else
                (this.host = t.host),
                  (this.ssl = null === (e = t.ssl) || void 0 === e || e)
              if (
                ((this.credentials = t.credentials),
                (this.ignoreUndefinedProperties = !!t.ignoreUndefinedProperties),
                void 0 === t.cacheSizeBytes)
              )
                this.cacheSizeBytes = 41943040
              else {
                if (-1 !== t.cacheSizeBytes && t.cacheSizeBytes < 1048576)
                  throw new x(
                    A.INVALID_ARGUMENT,
                    'cacheSizeBytes must be at least 1048576'
                  )
                this.cacheSizeBytes = t.cacheSizeBytes
              }
              ;(this.experimentalForceLongPolling = !!t.experimentalForceLongPolling),
                (this.experimentalAutoDetectLongPolling = !!t.experimentalAutoDetectLongPolling),
                Iu(
                  'experimentalForceLongPolling',
                  t.experimentalForceLongPolling,
                  'experimentalAutoDetectLongPolling',
                  t.experimentalAutoDetectLongPolling
                )
            }
            return (
              (t.prototype.isEqual = function (t) {
                return (
                  this.host === t.host &&
                  this.ssl === t.ssl &&
                  this.credentials === t.credentials &&
                  this.cacheSizeBytes === t.cacheSizeBytes &&
                  this.experimentalForceLongPolling ===
                    t.experimentalForceLongPolling &&
                  this.experimentalAutoDetectLongPolling ===
                    t.experimentalAutoDetectLongPolling &&
                  this.ignoreUndefinedProperties === t.ignoreUndefinedProperties
                )
              }),
              t
            )
          })(),
          Su = new Map(),
          Au = (function () {
            function t(t, e) {
              ;(this.w_ = '(lite)'),
                (this.E_ = new ju({})),
                (this.T_ = !1),
                t instanceof R
                  ? ((this.I_ = t), (this.m_ = new U()))
                  : ((this.A_ = t),
                    (this.I_ = (function (t) {
                      if (
                        !Object.prototype.hasOwnProperty.apply(t.options, [
                          'projectId',
                        ])
                      )
                        throw new x(
                          A.INVALID_ARGUMENT,
                          '"projectId" not provided in firebase.initializeApp.'
                        )
                      return new R(t.options.projectId)
                    })(t)),
                    (this.m_ = new F(e)))
            }
            return (
              Object.defineProperty(t.prototype, 'app', {
                get: function () {
                  if (!this.A_)
                    throw new x(
                      A.FAILED_PRECONDITION,
                      "Firestore was not initialized using the Firebase SDK. 'app' is not available"
                    )
                  return this.A_
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, 'R_', {
                get: function () {
                  return this.T_
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, 'P_', {
                get: function () {
                  return void 0 !== this.y_
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.g_ = function (t) {
                if (this.T_)
                  throw new x(
                    A.FAILED_PRECONDITION,
                    'Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.'
                  )
                ;(this.E_ = new ju(t)),
                  void 0 !== t.credentials &&
                    (this.m_ = (function (t) {
                      if (!t) return new U()
                      switch (t.type) {
                        case 'gapi':
                          var e = t.client
                          return (
                            I(
                              !(
                                'object' != typeof e ||
                                null === e ||
                                !e.auth ||
                                !e.auth.getAuthHeaderValueForFirstParty
                              )
                            ),
                            new G(e, t.sessionIndex || '0')
                          )
                        case 'provider':
                          return t.client
                        default:
                          throw new x(
                            A.INVALID_ARGUMENT,
                            'makeCredentialsProvider failed due to invalid credential type'
                          )
                      }
                    })(t.credentials))
              }),
              (t.prototype.V_ = function () {
                return this.E_
              }),
              (t.prototype.p_ = function () {
                return (this.T_ = !0), this.E_
              }),
              (t.prototype._delete = function () {
                return this.y_ || (this.y_ = this.b_()), this.y_
              }),
              (t.prototype.toJSON = function () {
                return { app: this.A_, T: this.I_, settings: this.E_ }
              }),
              (t.prototype.b_ = function () {
                return (
                  this,
                  (t = Su.get(this)) &&
                    (d('ComponentProvider', 'Removing Datastore'),
                    Su.delete(this),
                    t.terminate()),
                  Promise.resolve()
                )
                var t
              }),
              t
            )
          })(),
          xu = (function () {
            function t(t, e, n) {
              ;(this.v_ = e),
                (this.S_ = n),
                (this.type = 'document'),
                (this.firestore = t)
            }
            return (
              Object.defineProperty(t.prototype, 'D_', {
                get: function () {
                  return this.S_.path
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, 'id', {
                get: function () {
                  return this.S_.path.et()
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, 'path', {
                get: function () {
                  return this.S_.path.ot()
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, 'parent', {
                get: function () {
                  return new ku(this.firestore, this.v_, this.S_.path.Z())
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.withConverter = function (e) {
                return new t(this.firestore, e, this.S_)
              }),
              t
            )
          })(),
          Du = (function () {
            function t(t, e, n) {
              ;(this.v_ = e),
                (this.C_ = n),
                (this.type = 'query'),
                (this.firestore = t)
            }
            return (
              (t.prototype.withConverter = function (e) {
                return new t(this.firestore, e, this.C_)
              }),
              t
            )
          })(),
          ku = (function (t) {
            function e(e, n, r) {
              var i = this
              return (
                ((i = t.call(this, e, n, Zt(r)) || this).firestore = e),
                (i.D_ = r),
                (i.type = 'collection'),
                i
              )
            }
            return (
              Object(h.c)(e, t),
              Object.defineProperty(e.prototype, 'id', {
                get: function () {
                  return this.C_.path.et()
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, 'path', {
                get: function () {
                  return this.C_.path.ot()
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, 'parent', {
                get: function () {
                  var t = this.D_.Z()
                  return t.nt() ? null : new xu(this.firestore, null, new Y(t))
                },
                enumerable: !1,
                configurable: !0,
              }),
              (e.prototype.withConverter = function (t) {
                return new e(this.firestore, t, this.D_)
              }),
              e
            )
          })(Du)
        function Cu(t, e) {
          for (var n, r = [], i = 2; i < arguments.length; i++)
            r[i - 2] = arguments[i]
          if (
            (t instanceof q && (t = t._),
            mu('collection', 'path', e),
            t instanceof Au)
          )
            return (
              Eu((n = W.ct.apply(W, Object(h.g)([e], r)))), new ku(t, null, n)
            )
          if (!(t instanceof xu || t instanceof ku))
            throw new x(
              A.INVALID_ARGUMENT,
              'Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore'
            )
          return (
            Eu((n = W.ct.apply(W, Object(h.g)([t.path], r)).child(W.ct(e)))),
            new ku(t.firestore, null, n)
          )
        }
        function Pu(t, e) {
          for (var n, r = [], i = 2; i < arguments.length; i++)
            r[i - 2] = arguments[i]
          if (
            (t instanceof q && (t = t._),
            1 === arguments.length && (e = T.t()),
            mu('doc', 'path', e),
            t instanceof Au)
          )
            return (
              _u((n = W.ct.apply(W, Object(h.g)([e], r)))),
              new xu(t, null, new Y(n))
            )
          if (!(t instanceof xu || t instanceof ku))
            throw new x(
              A.INVALID_ARGUMENT,
              'Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore'
            )
          return (
            _u((n = t.D_.child(W.ct.apply(W, Object(h.g)([e], r))))),
            new xu(t.firestore, t instanceof ku ? t.v_ : null, new Y(n))
          )
        }
        function Lu(t, e) {
          return (
            t instanceof q && (t = t._),
            e instanceof q && (e = e._),
            (t instanceof xu || t instanceof ku) &&
              (e instanceof xu || e instanceof ku) &&
              t.firestore === e.firestore &&
              t.path === e.path &&
              t.v_ === e.v_
          )
        }
        function Ru(t, e) {
          return (
            t instanceof q && (t = t._),
            e instanceof q && (e = e._),
            t instanceof Du &&
              e instanceof Du &&
              t.firestore === e.firestore &&
              ae(t.C_, e.C_) &&
              t.v_ === e.v_
          )
        }
        var Vu = (function () {
            function t(t, e) {
              if (!isFinite(t) || t < -90 || t > 90)
                throw new x(
                  A.INVALID_ARGUMENT,
                  'Latitude must be a number between -90 and 90, but was: ' + t
                )
              if (!isFinite(e) || e < -180 || e > 180)
                throw new x(
                  A.INVALID_ARGUMENT,
                  'Longitude must be a number between -180 and 180, but was: ' +
                    e
                )
              ;(this.x_ = t), (this.N_ = e)
            }
            return (
              Object.defineProperty(t.prototype, 'latitude', {
                get: function () {
                  return this.x_
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, 'longitude', {
                get: function () {
                  return this.N_
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.isEqual = function (t) {
                return this.x_ === t.x_ && this.N_ === t.N_
              }),
              (t.prototype.toJSON = function () {
                return { latitude: this.x_, longitude: this.N_ }
              }),
              (t.prototype.K = function (t) {
                return O(this.x_, t.x_) || O(this.N_, t.N_)
              }),
              t
            )
          })(),
          Mu = /^__.*__$/,
          Uu = (function () {
            function t(t, e, n) {
              ;(this.data = t), (this.zt = e), (this.fieldTransforms = n)
            }
            return (
              (t.prototype.F_ = function (t, e) {
                return null !== this.zt
                  ? new qe(t, this.data, this.zt, e, this.fieldTransforms)
                  : new Fe(t, this.data, e, this.fieldTransforms)
              }),
              t
            )
          })(),
          Fu = (function () {
            function t(t, e, n) {
              ;(this.data = t), (this.zt = e), (this.fieldTransforms = n)
            }
            return (
              (t.prototype.F_ = function (t, e) {
                return new qe(t, this.data, this.zt, e, this.fieldTransforms)
              }),
              t
            )
          })()
        function qu(t) {
          switch (t) {
            case 0:
            case 2:
            case 1:
              return !0
            case 3:
            case 4:
              return !1
            default:
              throw w()
          }
        }
        var zu = (function () {
            function t(t, e, n, r, i, o) {
              ;(this.settings = t),
                (this.T = e),
                (this.Kt = n),
                (this.ignoreUndefinedProperties = r),
                void 0 === i && this.O_(),
                (this.fieldTransforms = i || []),
                (this.zt = o || [])
            }
            return (
              Object.defineProperty(t.prototype, 'path', {
                get: function () {
                  return this.settings.path
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, 'k_', {
                get: function () {
                  return this.settings.k_
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.M_ = function (e) {
                return new t(
                  Object.assign(Object.assign({}, this.settings), e),
                  this.T,
                  this.Kt,
                  this.ignoreUndefinedProperties,
                  this.fieldTransforms,
                  this.zt
                )
              }),
              (t.prototype.L_ = function (t) {
                var e,
                  n =
                    null === (e = this.path) || void 0 === e
                      ? void 0
                      : e.child(t),
                  r = this.M_({ path: n, B_: !1 })
                return r.q_(t), r
              }),
              (t.prototype.U_ = function (t) {
                var e,
                  n =
                    null === (e = this.path) || void 0 === e
                      ? void 0
                      : e.child(t),
                  r = this.M_({ path: n, B_: !1 })
                return r.O_(), r
              }),
              (t.prototype.Q_ = function (t) {
                return this.M_({ path: void 0, B_: !0 })
              }),
              (t.prototype.K_ = function (t) {
                return aa(
                  t,
                  this.settings.methodName,
                  this.settings.W_ || !1,
                  this.path,
                  this.settings.j_
                )
              }),
              (t.prototype.contains = function (t) {
                return (
                  void 0 !==
                    this.zt.find(function (e) {
                      return t.st(e)
                    }) ||
                  void 0 !==
                    this.fieldTransforms.find(function (e) {
                      return t.st(e.field)
                    })
                )
              }),
              (t.prototype.O_ = function () {
                if (this.path)
                  for (var t = 0; t < this.path.length; t++)
                    this.q_(this.path.get(t))
              }),
              (t.prototype.q_ = function (t) {
                if (0 === t.length)
                  throw this.K_('Document fields must not be empty')
                if (qu(this.k_) && Mu.test(t))
                  throw this.K_(
                    'Document fields cannot begin and end with "__"'
                  )
              }),
              t
            )
          })(),
          Gu = (function () {
            function t(t, e, n) {
              ;(this.T = t),
                (this.ignoreUndefinedProperties = e),
                (this.Kt = n || Uo(t))
            }
            return (
              (t.prototype.G_ = function (t, e, n, r) {
                return (
                  void 0 === r && (r = !1),
                  new zu(
                    {
                      k_: t,
                      methodName: e,
                      j_: n,
                      path: rt.at(),
                      B_: !1,
                      W_: r,
                    },
                    this.T,
                    this.Kt,
                    this.ignoreUndefinedProperties
                  )
                )
              }),
              t
            )
          })()
        function Hu(t) {
          var e = t.p_(),
            n = Uo(t.I_)
          return new Gu(t.I_, !!e.ignoreUndefinedProperties, n)
        }
        function Bu(t, e, n, r, i, o) {
          void 0 === o && (o = {})
          var u = t.G_(o.merge || o.mergeFields ? 2 : 0, e, n, i)
          ia('Data must be an object, but it was:', u, r)
          var s,
            a,
            c = na(r, u)
          if (o.merge) (s = new tt(u.zt)), (a = u.fieldTransforms)
          else if (o.mergeFields) {
            for (var h = [], f = 0, l = o.mergeFields; f < l.length; f++) {
              var p = oa(e, l[f], n)
              if (!u.contains(p))
                throw new x(
                  A.INVALID_ARGUMENT,
                  "Field '" +
                    p +
                    "' is specified in your field mask but missing from your input data."
                )
              ca(h, p) || h.push(p)
            }
            ;(s = new tt(h)),
              (a = u.fieldTransforms.filter(function (t) {
                return s.It(t.field)
              }))
          } else (s = null), (a = u.fieldTransforms)
          return new Uu(new Tt(c), s, a)
        }
        var Ku = (function (t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this
          }
          return (
            Object(h.c)(e, t),
            (e.prototype.z_ = function (t) {
              if (2 !== t.k_)
                throw 1 === t.k_
                  ? t.K_(
                      this._methodName +
                        '() can only appear at the top level of your update data'
                    )
                  : t.K_(
                      this._methodName +
                        '() cannot be used with set() unless you pass {merge:true}'
                    )
              return t.zt.push(t.path), null
            }),
            (e.prototype.isEqual = function (t) {
              return t instanceof e
            }),
            e
          )
        })(bu)
        function Ju(t, e, n) {
          return new zu(
            { k_: 3, j_: e.settings.j_, methodName: t._methodName, B_: n },
            e.T,
            e.Kt,
            e.ignoreUndefinedProperties
          )
        }
        var Wu = (function (t) {
            function e() {
              return (null !== t && t.apply(this, arguments)) || this
            }
            return (
              Object(h.c)(e, t),
              (e.prototype.z_ = function (t) {
                return new xe(t.path, new _e())
              }),
              (e.prototype.isEqual = function (t) {
                return t instanceof e
              }),
              e
            )
          })(bu),
          Xu = (function (t) {
            function e(e, n) {
              var r = this
              return ((r = t.call(this, e) || this).H_ = n), r
            }
            return (
              Object(h.c)(e, t),
              (e.prototype.z_ = function (t) {
                var e = Ju(this, t, !0),
                  n = this.H_.map(function (t) {
                    return ea(t, e)
                  }),
                  r = new Ee(n)
                return new xe(t.path, r)
              }),
              (e.prototype.isEqual = function (t) {
                return this === t
              }),
              e
            )
          })(bu),
          Yu = (function (t) {
            function e(e, n) {
              var r = this
              return ((r = t.call(this, e) || this).H_ = n), r
            }
            return (
              Object(h.c)(e, t),
              (e.prototype.z_ = function (t) {
                var e = Ju(this, t, !0),
                  n = this.H_.map(function (t) {
                    return ea(t, e)
                  }),
                  r = new Oe(n)
                return new xe(t.path, r)
              }),
              (e.prototype.isEqual = function (t) {
                return this === t
              }),
              e
            )
          })(bu),
          Qu = (function (t) {
            function e(e, n) {
              var r = this
              return ((r = t.call(this, e) || this).J_ = n), r
            }
            return (
              Object(h.c)(e, t),
              (e.prototype.z_ = function (t) {
                var e = new je(t.Kt, ge(t.Kt, this.J_))
                return new xe(t.path, e)
              }),
              (e.prototype.isEqual = function (t) {
                return this === t
              }),
              e
            )
          })(bu)
        function $u(t, e, n, r) {
          var i = t.G_(1, e, n)
          ia('Data must be an object, but it was:', i, r)
          var o = [],
            u = new Ot()
          $(r, function (t, r) {
            var s = ua(e, t, n)
            r instanceof q && (r = r._)
            var a = i.U_(s)
            if (r instanceof Ku) o.push(s)
            else {
              var c = ea(r, a)
              null != c && (o.push(s), u.set(s, c))
            }
          })
          var s = new tt(o)
          return new Fu(u.yt(), s, i.fieldTransforms)
        }
        function Zu(t, e, n, r, i, o) {
          var u = t.G_(1, e, n),
            s = [oa(e, r, n)],
            a = [i]
          if (o.length % 2 != 0)
            throw new x(
              A.INVALID_ARGUMENT,
              'Function ' +
                e +
                '() needs to be called with an even number of arguments that alternate between field names and values.'
            )
          for (var c = 0; c < o.length; c += 2)
            s.push(oa(e, o[c])), a.push(o[c + 1])
          for (var h = [], f = new Ot(), l = s.length - 1; l >= 0; --l)
            if (!ca(h, s[l])) {
              var p = s[l],
                d = a[l]
              d instanceof q && (d = d._)
              var v = u.U_(p)
              if (d instanceof Ku) h.push(p)
              else {
                var y = ea(d, v)
                null != y && (h.push(p), f.set(p, y))
              }
            }
          var m = new tt(h)
          return new Fu(f.yt(), m, u.fieldTransforms)
        }
        function ta(t, e, n, r) {
          return void 0 === r && (r = !1), ea(n, t.G_(r ? 4 : 3, e))
        }
        function ea(t, e) {
          if ((t instanceof q && (t = t._), ra(t)))
            return ia('Unsupported field value:', e, t), na(t, e)
          if (t instanceof bu)
            return (
              (function (t, e) {
                if (!qu(e.k_))
                  throw e.K_(
                    t._methodName +
                      '() can only be used with update() and set()'
                  )
                if (!e.path)
                  throw e.K_(
                    t._methodName +
                      '() is not currently supported inside arrays'
                  )
                var n = t.z_(e)
                n && e.fieldTransforms.push(n)
              })(t, e),
              null
            )
          if ((e.path && e.zt.push(e.path), t instanceof Array)) {
            if (e.settings.B_ && 4 !== e.k_)
              throw e.K_('Nested arrays are not supported')
            return (function (t, e) {
              for (var n = [], r = 0, i = 0, o = t; i < o.length; i++) {
                var u = ea(o[i], e.Q_(r))
                null == u && (u = { nullValue: 'NULL_VALUE' }), n.push(u), r++
              }
              return { arrayValue: { values: n } }
            })(t, e)
          }
          return (function (t, e) {
            if ((t instanceof q && (t = t._), null === t))
              return { nullValue: 'NULL_VALUE' }
            if ('number' == typeof t) return ge(e.Kt, t)
            if ('boolean' == typeof t) return { booleanValue: t }
            if ('string' == typeof t) return { stringValue: t }
            if (t instanceof Date) {
              var n = B.fromDate(t)
              return { timestampValue: Dn(e.Kt, n) }
            }
            if (t instanceof B)
              return (
                (n = new B(t.seconds, 1e3 * Math.floor(t.nanoseconds / 1e3))),
                { timestampValue: Dn(e.Kt, n) }
              )
            if (t instanceof Vu)
              return {
                geoPointValue: { latitude: t.latitude, longitude: t.longitude },
              }
            if (t instanceof D) return { bytesValue: kn(e.Kt, t.l) }
            if (t instanceof xu) {
              n = e.T
              var r = t.firestore.I_
              if (!r.isEqual(n))
                throw e.K_(
                  'Document reference is for database ' +
                    r.projectId +
                    '/' +
                    r.database +
                    ' but should be for database ' +
                    n.projectId +
                    '/' +
                    n.database
                )
              return { referenceValue: Ln(t.firestore.I_ || e.T, t.S_.path) }
            }
            if (void 0 === t && e.ignoreUndefinedProperties) return null
            throw e.K_('Unsupported field value: ' + Tu(t))
          })(t, e)
        }
        function na(t, e) {
          var n = {}
          return (
            Z(t)
              ? e.path && e.path.length > 0 && e.zt.push(e.path)
              : $(t, function (t, r) {
                  var i = ea(r, e.L_(t))
                  null != i && (n[t] = i)
                }),
            { mapValue: { fields: n } }
          )
        }
        function ra(t) {
          return !(
            'object' != typeof t ||
            null === t ||
            t instanceof Array ||
            t instanceof Date ||
            t instanceof B ||
            t instanceof Vu ||
            t instanceof D ||
            t instanceof xu ||
            t instanceof bu
          )
        }
        function ia(t, e, n) {
          if (
            !ra(n) ||
            !(function (t) {
              return (
                'object' == typeof t &&
                null !== t &&
                (Object.getPrototypeOf(t) === Object.prototype ||
                  null === Object.getPrototypeOf(t))
              )
            })(n)
          ) {
            var r = Tu(n)
            throw 'an object' === r
              ? e.K_(t + ' a custom object')
              : e.K_(t + ' ' + r)
          }
        }
        function oa(t, e, n) {
          if ((e instanceof q && (e = e._), e instanceof gu)) return e.d_
          if ('string' == typeof e) return ua(t, e)
          throw aa(
            'Field path arguments must be of type string or FieldPath.',
            t,
            !1,
            void 0,
            n
          )
        }
        var sa = new RegExp('[~\\*/\\[\\]]')
        function ua(t, e, n) {
          if (e.search(sa) >= 0)
            throw aa(
              'Invalid field path (' +
                e +
                "). Paths must not contain '~', '*', '/', '[', or ']'",
              t,
              !1,
              void 0,
              n
            )
          try {
            return new (gu.bind.apply(
              gu,
              Object(h.g)([void 0], e.split('.'))
            ))().d_
          } catch (r) {
            throw aa(
              'Invalid field path (' +
                e +
                "). Paths must not be empty, begin with '.', end with '.', or contain '..'",
              t,
              !1,
              void 0,
              n
            )
          }
        }
        function aa(t, e, n, r, i) {
          var o = r && !r.nt(),
            u = void 0 !== i,
            s = 'Function ' + e + '() called with invalid data'
          n && (s += ' (via `toFirestore()`)')
          var a = ''
          return (
            (o || u) &&
              ((a += ' (found'),
              o && (a += ' in field ' + r),
              u && (a += ' in document ' + i),
              (a += ')')),
            new x(A.INVALID_ARGUMENT, (s += '. ') + t + a)
          )
        }
        function ca(t, e) {
          return t.some(function (t) {
            return t.isEqual(e)
          })
        }
        var ha = (function () {
            function t(t) {
              ;(this.Dh = t),
                (this.Y_ = new Map()),
                (this.mutations = []),
                (this.X_ = !1),
                (this.Z_ = null),
                (this.tf = new Set())
            }
            return (
              (t.prototype.ef = function (t) {
                return Object(h.b)(this, void 0, void 0, function () {
                  var e,
                    n = this
                  return Object(h.d)(this, function (r) {
                    switch (r.label) {
                      case 0:
                        if ((this.nf(), this.mutations.length > 0))
                          throw new x(
                            A.INVALID_ARGUMENT,
                            'Firestore transactions require all reads to be executed before all writes.'
                          )
                        return [
                          4,
                          (function (t, e) {
                            return Object(h.b)(
                              this,
                              void 0,
                              void 0,
                              function () {
                                var n, r, i, o, u, s
                                return Object(h.d)(this, function (a) {
                                  switch (a.label) {
                                    case 0:
                                      return (
                                        (n = _(t)),
                                        (r = qn(n.Kt) + '/documents'),
                                        (i = {
                                          documents: e.map(function (t) {
                                            return Vn(n.Kt, t)
                                          }),
                                        }),
                                        [4, n.Cu('BatchGetDocuments', r, i)]
                                      )
                                    case 1:
                                      return (
                                        (o = a.sent()),
                                        (u = new Map()),
                                        o.forEach(function (t) {
                                          var e = (function (t, e) {
                                            return 'found' in e
                                              ? (function (t, e) {
                                                  I(!!e.found),
                                                    e.found.name,
                                                    e.found.updateTime
                                                  var n = Mn(t, e.found.name),
                                                    r = Pn(e.found.updateTime),
                                                    i = new Tt({
                                                      mapValue: {
                                                        fields: e.found.fields,
                                                      },
                                                    })
                                                  return new St(n, r, i, {})
                                                })(t, e)
                                              : 'missing' in e
                                              ? (function (t, e) {
                                                  I(!!e.missing),
                                                    I(!!e.readTime)
                                                  var n = Mn(t, e.missing),
                                                    r = Pn(e.readTime)
                                                  return new At(n, r)
                                                })(t, e)
                                              : w()
                                          })(n.Kt, t)
                                          u.set(e.key.toString(), e)
                                        }),
                                        (s = []),
                                        [
                                          2,
                                          (e.forEach(function (t) {
                                            var e = u.get(t.toString())
                                            I(!!e), s.push(e)
                                          }),
                                          s),
                                        ]
                                      )
                                  }
                                })
                              }
                            )
                          })(this.Dh, t),
                        ]
                      case 1:
                        return [
                          2,
                          ((e = r.sent()).forEach(function (t) {
                            t instanceof At || t instanceof St ? n.sf(t) : w()
                          }),
                          e),
                        ]
                    }
                  })
                })
              }),
              (t.prototype.set = function (t, e) {
                this.write(e.F_(t, this.Gt(t))), this.tf.add(t.toString())
              }),
              (t.prototype.update = function (t, e) {
                try {
                  this.write(e.F_(t, this.rf(t)))
                } catch (t) {
                  this.Z_ = t
                }
                this.tf.add(t.toString())
              }),
              (t.prototype.delete = function (t) {
                this.write(new We(t, this.Gt(t))), this.tf.add(t.toString())
              }),
              (t.prototype.commit = function () {
                return Object(h.b)(this, void 0, void 0, function () {
                  var t,
                    e = this
                  return Object(h.d)(this, function (n) {
                    switch (n.label) {
                      case 0:
                        if ((this.nf(), this.Z_)) throw this.Z_
                        return (
                          (t = this.Y_),
                          this.mutations.forEach(function (e) {
                            t.delete(e.key.toString())
                          }),
                          t.forEach(function (t, n) {
                            var r = Y.ft(n)
                            e.mutations.push(new Xe(r, e.Gt(r)))
                          }),
                          [
                            4,
                            (function (t, e) {
                              return Object(h.b)(
                                this,
                                void 0,
                                void 0,
                                function () {
                                  var n, r, i
                                  return Object(h.d)(this, function (o) {
                                    switch (o.label) {
                                      case 0:
                                        return (
                                          (n = _(t)),
                                          (r = qn(n.Kt) + '/documents'),
                                          (i = {
                                            writes: e.map(function (t) {
                                              return Bn(n.Kt, t)
                                            }),
                                          }),
                                          [4, n.bu('Commit', r, i)]
                                        )
                                      case 1:
                                        return o.sent(), [2]
                                    }
                                  })
                                }
                              )
                            })(this.Dh, this.mutations),
                          ]
                        )
                      case 1:
                        return n.sent(), (this.X_ = !0), [2]
                    }
                  })
                })
              }),
              (t.prototype.sf = function (t) {
                var e
                if (t instanceof St) e = t.version
                else {
                  if (!(t instanceof At)) throw w()
                  e = K.min()
                }
                var n = this.Y_.get(t.key.toString())
                if (n) {
                  if (!e.isEqual(n))
                    throw new x(
                      A.ABORTED,
                      'Document version changed between two reads.'
                    )
                } else this.Y_.set(t.key.toString(), e)
              }),
              (t.prototype.Gt = function (t) {
                var e = this.Y_.get(t.toString())
                return !this.tf.has(t.toString()) && e
                  ? ke.updateTime(e)
                  : ke.Wt()
              }),
              (t.prototype.rf = function (t) {
                var e = this.Y_.get(t.toString())
                if (!this.tf.has(t.toString()) && e) {
                  if (e.isEqual(K.min()))
                    throw new x(
                      A.INVALID_ARGUMENT,
                      "Can't update a document that doesn't exist."
                    )
                  return ke.updateTime(e)
                }
                return ke.exists(!0)
              }),
              (t.prototype.write = function (t) {
                this.nf(), this.mutations.push(t)
              }),
              (t.prototype.nf = function () {}),
              t
            )
          })(),
          fa = (function () {
            function t(t, e, n, r) {
              ;(this.fs = t),
                (this.Dh = e),
                (this.updateFunction = n),
                (this.Ts = r),
                (this.cf = 5),
                (this.zu = new Fo(this.fs, 'transaction_retry'))
            }
            return (
              (t.prototype.run = function () {
                this.af()
              }),
              (t.prototype.af = function () {
                var t = this
                this.zu.Bu(function () {
                  return Object(h.b)(t, void 0, void 0, function () {
                    var t,
                      e,
                      n = this
                    return Object(h.d)(this, function (r) {
                      return (
                        (t = new ha(this.Dh)),
                        (e = this.uf(t)) &&
                          e
                            .then(function (e) {
                              n.fs.ys(function () {
                                return t
                                  .commit()
                                  .then(function () {
                                    n.Ts.resolve(e)
                                  })
                                  .catch(function (t) {
                                    n.hf(t)
                                  })
                              })
                            })
                            .catch(function (t) {
                              n.hf(t)
                            }),
                        [2]
                      )
                    })
                  })
                })
              }),
              (t.prototype.uf = function (t) {
                try {
                  var e = this.updateFunction(t)
                  return !at(e) && e.catch && e.then
                    ? e
                    : (this.Ts.reject(
                        Error('Transaction callback must return a Promise')
                      ),
                      null)
                } catch (t) {
                  return this.Ts.reject(t), null
                }
              }),
              (t.prototype.hf = function (t) {
                var e = this
                this.cf > 0 && this.lf(t)
                  ? ((this.cf -= 1),
                    this.fs.ys(function () {
                      return e.af(), Promise.resolve()
                    }))
                  : this.Ts.reject(t)
              }),
              (t.prototype.lf = function (t) {
                if ('FirebaseError' === t.name) {
                  var e = t.code
                  return (
                    'aborted' === e || 'failed-precondition' === e || !Qe(e)
                  )
                }
                return !1
              }),
              t
            )
          })(),
          la = (function () {
            function t(t, e, n) {
              var r = this
              ;(this.credentials = t),
                (this.fs = e),
                (this.gu = n),
                (this.user = V.UNAUTHENTICATED),
                (this.clientId = T.t()),
                (this._f = function () {}),
                (this.N = new or()),
                this.credentials.S(function (t) {
                  d('FirestoreClient', 'Received user=', t.uid),
                    (r.user = t),
                    r._f(t),
                    r.N.resolve()
                })
            }
            return (
              (t.prototype.getConfiguration = function () {
                return Object(h.b)(this, void 0, void 0, function () {
                  return Object(h.d)(this, function (t) {
                    switch (t.label) {
                      case 0:
                        return [4, this.N.promise]
                      case 1:
                        return [
                          2,
                          (t.sent(),
                          {
                            fs: this.fs,
                            gu: this.gu,
                            clientId: this.clientId,
                            credentials: this.credentials,
                            Yl: this.user,
                            bl: 100,
                          }),
                        ]
                    }
                  })
                })
              }),
              (t.prototype.ff = function (t) {
                var e = this
                ;(this._f = t),
                  this.N.promise.then(function () {
                    return e._f(e.user)
                  })
              }),
              (t.prototype.df = function () {
                if (this.fs.wf)
                  throw new x(
                    A.FAILED_PRECONDITION,
                    'The client has already been terminated.'
                  )
              }),
              (t.prototype.terminate = function () {
                var t = this
                this.fs.Ef()
                var e = new or()
                return (
                  this.fs.Tf(function () {
                    return Object(h.b)(t, void 0, void 0, function () {
                      var t, n
                      return Object(h.d)(this, function (r) {
                        switch (r.label) {
                          case 0:
                            return (
                              r.trys.push([0, 5, , 6]),
                              this.If ? [4, this.If.terminate()] : [3, 2]
                            )
                          case 1:
                            r.sent(), (r.label = 2)
                          case 2:
                            return this.mf ? [4, this.mf.terminate()] : [3, 4]
                          case 3:
                            r.sent(), (r.label = 4)
                          case 4:
                            return this.credentials.D(), e.resolve(), [3, 6]
                          case 5:
                            return (
                              (t = r.sent()),
                              (n = gr(t, 'Failed to shutdown persistence')),
                              e.reject(n),
                              [3, 6]
                            )
                          case 6:
                            return [2]
                        }
                      })
                    })
                  }),
                  e.promise
                )
              }),
              t
            )
          })()
        function pa(t, e) {
          return Object(h.b)(this, void 0, void 0, function () {
            var n,
              r,
              i = this
            return Object(h.d)(this, function (o) {
              switch (o.label) {
                case 0:
                  return (
                    t.fs.Af(),
                    d(
                      'FirestoreClient',
                      'Initializing OfflineComponentProvider'
                    ),
                    [4, t.getConfiguration()]
                  )
                case 1:
                  return (n = o.sent()), [4, e.initialize(n)]
                case 2:
                  return (
                    o.sent(),
                    (r = n.Yl),
                    t.ff(function (n) {
                      r.isEqual(n) ||
                        ((r = n),
                        t.fs.bo(function () {
                          return Object(h.b)(i, void 0, void 0, function () {
                            return Object(h.d)(this, function (t) {
                              switch (t.label) {
                                case 0:
                                  return [4, Qi(e.Sh, n)]
                                case 1:
                                  return t.sent(), [2]
                              }
                            })
                          })
                        }))
                    }),
                    e.persistence.yo(function () {
                      return t.terminate()
                    }),
                    (t.mf = e),
                    [2]
                  )
              }
            })
          })
        }
        function da(t, e) {
          return Object(h.b)(this, void 0, void 0, function () {
            var n, r
            return Object(h.d)(this, function (i) {
              switch (i.label) {
                case 0:
                  return t.fs.Af(), [4, va(t)]
                case 1:
                  return (
                    (n = i.sent()),
                    d(
                      'FirestoreClient',
                      'Initializing OnlineComponentProvider'
                    ),
                    [4, t.getConfiguration()]
                  )
                case 2:
                  return (r = i.sent()), [4, e.initialize(n, r)]
                case 3:
                  return (
                    i.sent(),
                    t.ff(function (n) {
                      return t.fs.bo(function () {
                        return (function (t, e) {
                          return Object(h.b)(this, void 0, void 0, function () {
                            var n, r
                            return Object(h.d)(this, function (i) {
                              switch (i.label) {
                                case 0:
                                  return (
                                    (n = _(t)).fs.Af(),
                                    d(
                                      'RemoteStore',
                                      'RemoteStore received new credentials'
                                    ),
                                    (r = es(n)),
                                    n.Fh.add(3),
                                    [4, Wo(n)]
                                  )
                                case 1:
                                  return (
                                    i.sent(),
                                    r && n.Mh.set('Unknown'),
                                    [4, n.Ch.s_(e)]
                                  )
                                case 2:
                                  return i.sent(), n.Fh.delete(3), [4, Jo(n)]
                                case 3:
                                  return i.sent(), [2]
                              }
                            })
                          })
                        })(e.gl, n)
                      })
                    }),
                    (t.If = e),
                    [2]
                  )
              }
            })
          })
        }
        function va(t) {
          return Object(h.b)(this, void 0, void 0, function () {
            return Object(h.d)(this, function (e) {
              switch (e.label) {
                case 0:
                  return t.mf
                    ? [3, 2]
                    : (d(
                        'FirestoreClient',
                        'Using default OfflineComponentProvider'
                      ),
                      [4, pa(t, new lu())])
                case 1:
                  e.sent(), (e.label = 2)
                case 2:
                  return [2, t.mf]
              }
            })
          })
        }
        function ya(t) {
          return Object(h.b)(this, void 0, void 0, function () {
            return Object(h.d)(this, function (e) {
              switch (e.label) {
                case 0:
                  return t.If
                    ? [3, 2]
                    : (d(
                        'FirestoreClient',
                        'Using default OnlineComponentProvider'
                      ),
                      [4, da(t, new vu())])
                case 1:
                  e.sent(), (e.label = 2)
                case 2:
                  return [2, t.If]
              }
            })
          })
        }
        function ga(t) {
          return va(t).then(function (t) {
            return t.persistence
          })
        }
        function ba(t) {
          return va(t).then(function (t) {
            return t.Sh
          })
        }
        function ma(t) {
          return ya(t).then(function (t) {
            return t.gl
          })
        }
        function wa(t) {
          return ya(t).then(function (t) {
            return t.fa
          })
        }
        function Ia(t) {
          return Object(h.b)(this, void 0, void 0, function () {
            var e, n
            return Object(h.d)(this, function (r) {
              switch (r.label) {
                case 0:
                  return [4, ya(t)]
                case 1:
                  return (
                    (e = r.sent()),
                    [
                      2,
                      (((n = e.Vl).Gh = Ls.bind(null, e.fa)),
                      (n.Jh = Vs.bind(null, e.fa)),
                      n),
                    ]
                  )
              }
            })
          })
        }
        function _a(t, e, n) {
          var r = this
          void 0 === n && (n = {})
          var i = new or()
          return (
            t.fs.ys(function () {
              return Object(h.b)(r, void 0, void 0, function () {
                var r
                return Object(h.d)(this, function (o) {
                  switch (o.label) {
                    case 0:
                      return (
                        (r = function (t, e, n, r, i) {
                          var o = new yu({
                              next: function (o) {
                                e.ys(function () {
                                  return Is(t, u)
                                })
                                var s = o.docs.has(n)
                                !s && o.fromCache
                                  ? i.reject(
                                      new x(
                                        A.UNAVAILABLE,
                                        'Failed to get document because the client is offline.'
                                      )
                                    )
                                  : s &&
                                    o.fromCache &&
                                    r &&
                                    'server' === r.source
                                  ? i.reject(
                                      new x(
                                        A.UNAVAILABLE,
                                        'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)'
                                      )
                                    )
                                  : i.resolve(o)
                              },
                              error: function (t) {
                                return i.reject(t)
                              },
                            }),
                            u = new Os(Zt(n.path), o, {
                              includeMetadataChanges: !0,
                              sl: !0,
                            })
                          return ws(t, u)
                        }),
                        [4, Ia(t)]
                      )
                    case 1:
                      return [2, r.apply(void 0, [o.sent(), t.fs, e, n, i])]
                  }
                })
              })
            }),
            i.promise
          )
        }
        function Ea(t, e, n) {
          var r = this
          void 0 === n && (n = {})
          var i = new or()
          return (
            t.fs.ys(function () {
              return Object(h.b)(r, void 0, void 0, function () {
                var r
                return Object(h.d)(this, function (o) {
                  switch (o.label) {
                    case 0:
                      return (
                        (r = function (t, e, n, r, i) {
                          var o = new yu({
                              next: function (n) {
                                e.ys(function () {
                                  return Is(t, u)
                                }),
                                  n.fromCache && 'server' === r.source
                                    ? i.reject(
                                        new x(
                                          A.UNAVAILABLE,
                                          'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)'
                                        )
                                      )
                                    : i.resolve(n)
                              },
                              error: function (t) {
                                return i.reject(t)
                              },
                            }),
                            u = new Os(n, o, {
                              includeMetadataChanges: !0,
                              sl: !0,
                            })
                          return ws(t, u)
                        }),
                        [4, Ia(t)]
                      )
                    case 1:
                      return [2, r.apply(void 0, [o.sent(), t.fs, e, n, i])]
                  }
                })
              })
            }),
            i.promise
          )
        }
        var Ta = (function () {
            function t() {
              var t = this
              ;(this.Rf = Promise.resolve()),
                (this.Pf = []),
                (this.yf = !1),
                (this.gf = []),
                (this.Vf = null),
                (this.pf = !1),
                (this.bf = []),
                (this.zu = new Fo(this, 'async_queue_retry')),
                (this.vf = function () {
                  var e = Mo()
                  e &&
                    d(
                      'AsyncQueue',
                      'Visibility state changed to ' + e.visibilityState
                    ),
                    t.zu.Uu()
                })
              var e = Mo()
              e &&
                'function' == typeof e.addEventListener &&
                e.addEventListener('visibilitychange', this.vf)
            }
            return (
              Object.defineProperty(t.prototype, 'wf', {
                get: function () {
                  return this.yf
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.ys = function (t) {
                this.enqueue(t)
              }),
              (t.prototype.Tf = function (t) {
                this.Sf(), this.Df(t)
              }),
              (t.prototype.Ef = function () {
                if (!this.yf) {
                  this.yf = !0
                  var t = Mo()
                  t &&
                    'function' == typeof t.removeEventListener &&
                    t.removeEventListener('visibilitychange', this.vf)
                }
              }),
              (t.prototype.enqueue = function (t) {
                return (
                  this.Sf(), this.yf ? new Promise(function (t) {}) : this.Df(t)
                )
              }),
              (t.prototype.bo = function (t) {
                var e = this
                this.ys(function () {
                  return e.Pf.push(t), e.Cf()
                })
              }),
              (t.prototype.Cf = function () {
                return Object(h.b)(this, void 0, void 0, function () {
                  var t,
                    e = this
                  return Object(h.d)(this, function (n) {
                    switch (n.label) {
                      case 0:
                        if (0 === this.Pf.length) return [3, 5]
                        n.label = 1
                      case 1:
                        return n.trys.push([1, 3, , 4]), [4, this.Pf[0]()]
                      case 2:
                        return (
                          n.sent(), this.Pf.shift(), this.zu.reset(), [3, 4]
                        )
                      case 3:
                        if (!fr((t = n.sent()))) throw t
                        return (
                          d(
                            'AsyncQueue',
                            'Operation failed with retryable error: ' + t
                          ),
                          [3, 4]
                        )
                      case 4:
                        this.Pf.length > 0 &&
                          this.zu.Bu(function () {
                            return e.Cf()
                          }),
                          (n.label = 5)
                      case 5:
                        return [2]
                    }
                  })
                })
              }),
              (t.prototype.Df = function (t) {
                var e = this,
                  n = this.Rf.then(function () {
                    return (
                      (e.pf = !0),
                      t()
                        .catch(function (t) {
                          throw (
                            ((e.Vf = t),
                            (e.pf = !1),
                            v(
                              'INTERNAL UNHANDLED ERROR: ',
                              (function (t) {
                                var e = t.message || ''
                                return (
                                  t.stack &&
                                    (e = t.stack.includes(t.message)
                                      ? t.stack
                                      : t.message + '\n' + t.stack),
                                  e
                                )
                              })(t)
                            ),
                            t)
                          )
                        })
                        .then(function (t) {
                          return (e.pf = !1), t
                        })
                    )
                  })
                return (this.Rf = n), n
              }),
              (t.prototype.Ir = function (t, e, n) {
                var r = this
                this.Sf(), this.bf.indexOf(t) > -1 && (e = 0)
                var i = yr.Is(this, t, e, n, function (t) {
                  return r.xf(t)
                })
                return this.gf.push(i), i
              }),
              (t.prototype.Sf = function () {
                this.Vf && w()
              }),
              (t.prototype.Af = function () {}),
              (t.prototype.Nf = function () {
                return Object(h.b)(this, void 0, void 0, function () {
                  var t
                  return Object(h.d)(this, function (e) {
                    switch (e.label) {
                      case 0:
                        return [4, (t = this.Rf)]
                      case 1:
                        e.sent(), (e.label = 2)
                      case 2:
                        if (t !== this.Rf) return [3, 0]
                        e.label = 3
                      case 3:
                        return [2]
                    }
                  })
                })
              }),
              (t.prototype.Ff = function (t) {
                for (var e = 0, n = this.gf; e < n.length; e++)
                  if (n[e].ds === t) return !0
                return !1
              }),
              (t.prototype.Of = function (t) {
                var e = this
                return this.Nf().then(function () {
                  e.gf.sort(function (t, e) {
                    return t.ws - e.ws
                  })
                  for (var n = 0, r = e.gf; n < r.length; n++) {
                    var i = r[n]
                    if ((i.Ps(), 'all' !== t && i.ds === t)) break
                  }
                  return e.Nf()
                })
              }),
              (t.prototype.kf = function (t) {
                this.bf.push(t)
              }),
              (t.prototype.xf = function (t) {
                var e = this.gf.indexOf(t)
                this.gf.splice(e, 1)
              }),
              t
            )
          })(),
          Oa = -1,
          Na = (function (t) {
            function e(e, n) {
              var r = this
              return (
                ((r = t.call(this, e, n) || this).Mf = new Ta()),
                (r.w_ = 'name' in e ? e.name : '[DEFAULT]'),
                r
              )
            }
            return (
              Object(h.c)(e, t),
              (e.prototype.b_ = function () {
                return this.Lf || Sa(this), this.Lf.terminate()
              }),
              e
            )
          })(Au)
        function ja(t) {
          return t.Lf || Sa(t), t.Lf.df(), t.Lf
        }
        function Sa(t) {
          var e = t.p_(),
            n = (function (t, e, n) {
              return new L(
                t,
                e,
                n.host,
                n.ssl,
                n.experimentalForceLongPolling,
                n.experimentalAutoDetectLongPolling
              )
            })(t.I_, t.w_, e)
          t.Lf = new la(t.m_, t.Mf, n)
        }
        function Aa(t, e, n) {
          var r = this,
            i = new or()
          return t.fs
            .enqueue(function () {
              return Object(h.b)(r, void 0, void 0, function () {
                var r
                return Object(h.d)(this, function (o) {
                  switch (o.label) {
                    case 0:
                      return o.trys.push([0, 3, , 4]), [4, pa(t, n)]
                    case 1:
                      return o.sent(), [4, da(t, e)]
                    case 2:
                      return o.sent(), i.resolve(), [3, 4]
                    case 3:
                      if (
                        !(function (t) {
                          return 'FirebaseError' === t.name
                            ? t.code === A.FAILED_PRECONDITION ||
                                t.code === A.UNIMPLEMENTED
                            : !(
                                'undefined' != typeof DOMException &&
                                t instanceof DOMException
                              ) ||
                                22 === t.code ||
                                20 === t.code ||
                                11 === t.code
                        })((r = o.sent()))
                      )
                        throw r
                      return (
                        console.warn(
                          'Error enabling offline persistence. Falling back to persistence disabled: ' +
                            r
                        ),
                        i.reject(r),
                        [3, 4]
                      )
                    case 4:
                      return [2]
                  }
                })
              })
            })
            .then(function () {
              return i.promise
            })
        }
        function xa(t) {
          if (t.R_ || t.P_)
            throw new x(
              A.FAILED_PRECONDITION,
              'Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.'
            )
        }
        var Da = (function () {
            function t() {}
            return (
              (t.prototype.$f = function (t, e) {
                switch ((void 0 === e && (e = 'none'), ft(t))) {
                  case 0:
                    return null
                  case 1:
                    return t.booleanValue
                  case 2:
                    return it(t.integerValue || t.doubleValue)
                  case 3:
                    return this.Bf(t.timestampValue)
                  case 4:
                    return this.qf(t, e)
                  case 5:
                    return t.stringValue
                  case 6:
                    return this.Uf(ot(t.bytesValue))
                  case 7:
                    return this.Qf(t.referenceValue)
                  case 8:
                    return this.Kf(t.geoPointValue)
                  case 9:
                    return this.Wf(t.arrayValue, e)
                  case 10:
                    return this.jf(t.mapValue, e)
                  default:
                    throw w()
                }
              }),
              (t.prototype.jf = function (t, e) {
                var n = this,
                  r = {}
                return (
                  $(t.fields || {}, function (t, i) {
                    r[t] = n.$f(i, e)
                  }),
                  r
                )
              }),
              (t.prototype.Kf = function (t) {
                return new Vu(it(t.latitude), it(t.longitude))
              }),
              (t.prototype.Wf = function (t, e) {
                var n = this
                return (t.values || []).map(function (t) {
                  return n.$f(t, e)
                })
              }),
              (t.prototype.qf = function (t, e) {
                switch (e) {
                  case 'previous':
                    var n = (function dt(t) {
                      var e = t.mapValue.fields.__previous_value__
                      return st(e) ? dt(e) : e
                    })(t)
                    return null == n ? null : this.$f(n, e)
                  case 'estimate':
                    return this.Bf(ut(t))
                  default:
                    return null
                }
              }),
              (t.prototype.Bf = function (t) {
                var e = nt(t)
                return new B(e.seconds, e.nanos)
              }),
              (t.prototype.Gf = function (t, e) {
                var n = W.ct(t)
                I(ir(n))
                var r = new R(n.get(1), n.get(3)),
                  i = new Y(n.X(5))
                return (
                  r.isEqual(e) ||
                    v(
                      'Document ' +
                        i +
                        ' contains a document reference within a different database (' +
                        r.projectId +
                        '/' +
                        r.database +
                        ') which is not supported. It will be treated as a reference in the current database (' +
                        e.projectId +
                        '/' +
                        e.database +
                        ') instead.'
                    ),
                  i
                )
              }),
              t
            )
          })(),
          ka = (function () {
            function t(t, e, n, r, i) {
              ;(this.zf = t),
                (this.Hf = e),
                (this.S_ = n),
                (this.Jf = r),
                (this.v_ = i)
            }
            return (
              Object.defineProperty(t.prototype, 'id', {
                get: function () {
                  return this.S_.path.et()
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, 'ref', {
                get: function () {
                  return new xu(this.zf, this.v_, this.S_)
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.exists = function () {
                return null !== this.Jf
              }),
              (t.prototype.data = function () {
                if (this.Jf) {
                  if (this.v_) {
                    var t = new Ca(this.zf, this.Hf, this.S_, this.Jf, null)
                    return this.v_.fromFirestore(t)
                  }
                  return this.Hf.$f(this.Jf.vt())
                }
              }),
              (t.prototype.get = function (t) {
                if (this.Jf) {
                  var e = this.Jf.data().field(Pa('DocumentSnapshot.get', t))
                  if (null !== e) return this.Hf.$f(e)
                }
              }),
              t
            )
          })(),
          Ca = (function (t) {
            function e() {
              return (null !== t && t.apply(this, arguments)) || this
            }
            return (
              Object(h.c)(e, t),
              (e.prototype.data = function () {
                return t.prototype.data.call(this)
              }),
              e
            )
          })(ka)
        function Pa(t, e) {
          return 'string' == typeof e
            ? ua(t, e)
            : e instanceof q
            ? e._.d_
            : e.d_
        }
        function La(t) {
          if (ee(t) && 0 === t.Nt.length)
            throw new x(
              A.UNIMPLEMENTED,
              'limitToLast() queries require specifying at least one orderBy() clause'
            )
        }
        var Ra = function () {}
        function Va(t) {
          for (var e = [], n = 1; n < arguments.length; n++)
            e[n - 1] = arguments[n]
          for (var r = 0, i = e; r < i.length; r++) {
            var o = i[r]
            t = o.Yf(t)
          }
          return t
        }
        var Ma = (function (t) {
            function e(e, n, r) {
              var i = this
              return (
                ((i = t.call(this) || this).Xf = e),
                (i.Zf = n),
                (i.td = r),
                (i.type = 'where'),
                i
              )
            }
            return (
              Object(h.c)(e, t),
              (e.prototype.Yf = function (t) {
                var e = Hu(t.firestore),
                  n = (function (t, e, n, r, i, o, u) {
                    var s
                    if (i.ht()) {
                      if ('array-contains' === o || 'array-contains-any' === o)
                        throw new x(
                          A.INVALID_ARGUMENT,
                          "Invalid Query. You can't perform '" +
                            o +
                            "' queries on FieldPath.documentId()."
                        )
                      if ('in' === o || 'not-in' === o) {
                        Ba(u, o)
                        for (var a = [], c = 0, h = u; c < h.length; c++) {
                          var f = h[c]
                          a.push(Ha(r, t, f))
                        }
                        s = { arrayValue: { values: a } }
                      } else s = Ha(r, t, u)
                    } else
                      ('in' !== o &&
                        'not-in' !== o &&
                        'array-contains-any' !== o) ||
                        Ba(u, o),
                        (s = ta(n, 'where', u, 'in' === o || 'not-in' === o))
                    var l = Rt.create(i, o, s)
                    return (
                      (function (t, e) {
                        if (e.xt()) {
                          var n = re(t)
                          if (null !== n && !n.isEqual(e.field))
                            throw new x(
                              A.INVALID_ARGUMENT,
                              "Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '" +
                                n.toString() +
                                "' and '" +
                                e.field.toString() +
                                "'"
                            )
                          var r = ne(t)
                          null !== r && Ka(t, e.field, r)
                        }
                        var i = (function (t, e) {
                          for (var n = 0, r = t.filters; n < r.length; n++) {
                            var i = r[n]
                            if (e.indexOf(i.op) >= 0) return i.op
                          }
                          return null
                        })(
                          t,
                          (function (t) {
                            switch (t) {
                              case '!=':
                                return ['!=', 'not-in']
                              case 'array-contains':
                                return [
                                  'array-contains',
                                  'array-contains-any',
                                  'not-in',
                                ]
                              case 'in':
                                return ['array-contains-any', 'in', 'not-in']
                              case 'array-contains-any':
                                return [
                                  'array-contains',
                                  'array-contains-any',
                                  'in',
                                  'not-in',
                                ]
                              case 'not-in':
                                return [
                                  'array-contains',
                                  'array-contains-any',
                                  'in',
                                  'not-in',
                                  '!=',
                                ]
                              default:
                                return []
                            }
                          })(e.op)
                        )
                        if (null !== i)
                          throw i === e.op
                            ? new x(
                                A.INVALID_ARGUMENT,
                                "Invalid query. You cannot use more than one '" +
                                  e.op.toString() +
                                  "' filter."
                              )
                            : new x(
                                A.INVALID_ARGUMENT,
                                "Invalid query. You cannot use '" +
                                  e.op.toString() +
                                  "' filters with '" +
                                  i.toString() +
                                  "' filters."
                              )
                      })(t, l),
                      l
                    )
                  })(t.C_, 0, e, t.firestore.I_, this.Xf, this.Zf, this.td)
                return new Du(
                  t.firestore,
                  t.v_,
                  (function (t, e) {
                    var n = t.filters.concat([e])
                    return new Qt(
                      t.path,
                      t.collectionGroup,
                      t.Nt.slice(),
                      n,
                      t.limit,
                      t.limitType,
                      t.startAt,
                      t.endAt
                    )
                  })(t.C_, n)
                )
              }),
              e
            )
          })(Ra),
          Ua = (function (t) {
            function e(e, n) {
              var r = this
              return (
                ((r = t.call(this) || this).Xf = e),
                (r.ed = n),
                (r.type = 'orderBy'),
                r
              )
            }
            return (
              Object(h.c)(e, t),
              (e.prototype.Yf = function (t) {
                var e = (function (t, e, n) {
                  if (null !== t.startAt)
                    throw new x(
                      A.INVALID_ARGUMENT,
                      'Invalid query. You must not call startAt() or startAfter() before calling orderBy().'
                    )
                  if (null !== t.endAt)
                    throw new x(
                      A.INVALID_ARGUMENT,
                      'Invalid query. You must not call endAt() or endBefore() before calling orderBy().'
                    )
                  var r = new Jt(e, n)
                  return (
                    (function (t, e) {
                      if (null === ne(t)) {
                        var n = re(t)
                        null !== n && Ka(t, n, e.field)
                      }
                    })(t, r),
                    r
                  )
                })(t.C_, this.Xf, this.ed)
                return new Du(
                  t.firestore,
                  t.v_,
                  (function (t, e) {
                    var n = t.Nt.concat([e])
                    return new Qt(
                      t.path,
                      t.collectionGroup,
                      n,
                      t.filters.slice(),
                      t.limit,
                      t.limitType,
                      t.startAt,
                      t.endAt
                    )
                  })(t.C_, e)
                )
              }),
              e
            )
          })(Ra),
          Fa = (function (t) {
            function e(e, n, r) {
              var i = this
              return (
                ((i = t.call(this) || this).type = e), (i.nd = n), (i.sd = r), i
              )
            }
            return (
              Object(h.c)(e, t),
              (e.prototype.Yf = function (t) {
                return new Du(t.firestore, t.v_, ue(t.C_, this.nd, this.sd))
              }),
              e
            )
          })(Ra),
          qa = (function (t) {
            function e(e, n, r) {
              var i = this
              return (
                ((i = t.call(this) || this).type = e), (i.rd = n), (i.od = r), i
              )
            }
            return (
              Object(h.c)(e, t),
              (e.prototype.Yf = function (t) {
                var e = Ga(t, this.type, this.rd, this.od)
                return new Du(
                  t.firestore,
                  t.v_,
                  (function (t, e) {
                    return new Qt(
                      t.path,
                      t.collectionGroup,
                      t.Nt.slice(),
                      t.filters.slice(),
                      t.limit,
                      t.limitType,
                      e,
                      t.endAt
                    )
                  })(t.C_, e)
                )
              }),
              e
            )
          })(Ra),
          za = (function (t) {
            function e(e, n, r) {
              var i = this
              return (
                ((i = t.call(this) || this).type = e), (i.rd = n), (i.od = r), i
              )
            }
            return (
              Object(h.c)(e, t),
              (e.prototype.Yf = function (t) {
                var e = Ga(t, this.type, this.rd, this.od)
                return new Du(
                  t.firestore,
                  t.v_,
                  (function (t, e) {
                    return new Qt(
                      t.path,
                      t.collectionGroup,
                      t.Nt.slice(),
                      t.filters.slice(),
                      t.limit,
                      t.limitType,
                      t.startAt,
                      e
                    )
                  })(t.C_, e)
                )
              }),
              e
            )
          })(Ra)
        function Ga(t, e, n, r) {
          if ((n[0] instanceof q && (n[0] = n[0]._), n[0] instanceof ka))
            return (function (t, e, n, r, i) {
              if (!r)
                throw new x(
                  A.NOT_FOUND,
                  "Can't use a DocumentSnapshot that doesn't exist for " +
                    n +
                    '().'
                )
              for (var o = [], u = 0, s = oe(t); u < s.length; u++) {
                var a = s[u]
                if (a.field.ht()) o.push(bt(e, r.key))
                else {
                  var c = r.field(a.field)
                  if (st(c))
                    throw new x(
                      A.INVALID_ARGUMENT,
                      'Invalid query. You are trying to start or end a query using a document for which the field "' +
                        a.field +
                        '" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)'
                    )
                  if (null === c) {
                    var h = a.field.ot()
                    throw new x(
                      A.INVALID_ARGUMENT,
                      "Invalid query. You are trying to start or end a query using a document for which the field '" +
                        h +
                        "' (used as the orderBy) does not exist."
                    )
                  }
                  o.push(c)
                }
              }
              return new Bt(o, i)
            })(t.C_, t.firestore.I_, e, n[0].Jf, r)
          var i = Hu(t.firestore)
          return (function (t, e, n, r, i, o) {
            var u = t.Nt
            if (i.length > u.length)
              throw new x(
                A.INVALID_ARGUMENT,
                'Too many arguments provided to ' +
                  r +
                  '(). The number of arguments must be less than or equal to the number of orderBy() clauses'
              )
            for (var s = [], a = 0; a < i.length; a++) {
              var c = i[a]
              if (u[a].field.ht()) {
                if ('string' != typeof c)
                  throw new x(
                    A.INVALID_ARGUMENT,
                    'Invalid query. Expected a string for document ID in ' +
                      r +
                      '(), but got a ' +
                      typeof c
                  )
                if (!ie(t) && -1 !== c.indexOf('/'))
                  throw new x(
                    A.INVALID_ARGUMENT,
                    'Invalid query. When querying a collection and ordering by FieldPath.documentId(), the value passed to ' +
                      r +
                      "() must be a plain document ID, but '" +
                      c +
                      "' contains a slash."
                  )
                var h = t.path.child(W.ct(c))
                if (!Y.Et(h))
                  throw new x(
                    A.INVALID_ARGUMENT,
                    'Invalid query. When querying a collection group and ordering by FieldPath.documentId(), the value passed to ' +
                      r +
                      "() must result in a valid document path, but '" +
                      h +
                      "' is not because it contains an odd number of segments."
                  )
                var f = new Y(h)
                s.push(bt(e, f))
              } else {
                var l = ta(n, r, c)
                s.push(l)
              }
            }
            return new Bt(s, o)
          })(t.C_, t.firestore.I_, i, e, n, r)
        }
        function Ha(t, e, n) {
          if ((n instanceof q && (n = n._), 'string' == typeof n)) {
            if ('' === n)
              throw new x(
                A.INVALID_ARGUMENT,
                'Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.'
              )
            if (!ie(e) && -1 !== n.indexOf('/'))
              throw new x(
                A.INVALID_ARGUMENT,
                "Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '" +
                  n +
                  "' contains a '/' character."
              )
            var r = e.path.child(W.ct(n))
            if (!Y.Et(r))
              throw new x(
                A.INVALID_ARGUMENT,
                "Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '" +
                  r +
                  "' is not because it has an odd number of segments (" +
                  r.length +
                  ').'
              )
            return bt(t, new Y(r))
          }
          if (n instanceof xu) return bt(t, n.S_)
          throw new x(
            A.INVALID_ARGUMENT,
            'Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: ' +
              Tu(n) +
              '.'
          )
        }
        function Ba(t, e) {
          if (!Array.isArray(t) || 0 === t.length)
            throw new x(
              A.INVALID_ARGUMENT,
              "Invalid Query. A non-empty array is required for '" +
                e.toString() +
                "' filters."
            )
          if (t.length > 10)
            throw new x(
              A.INVALID_ARGUMENT,
              "Invalid Query. '" +
                e.toString() +
                "' filters support a maximum of 10 elements in the value array."
            )
        }
        function Ka(t, e, n) {
          if (!n.isEqual(e))
            throw new x(
              A.INVALID_ARGUMENT,
              "Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '" +
                e.toString() +
                "' and so you must also use '" +
                e.toString() +
                "' as your first argument to orderBy(), but your first orderBy() is on field '" +
                n.toString() +
                "' instead."
            )
        }
        function Ja(t) {
          return (function (t, e) {
            if ('object' != typeof t || null === t) return !1
            for (
              var n = t, r = 0, i = ['next', 'error', 'complete'];
              r < i.length;
              r++
            ) {
              var o = i[r]
              if (o in n && 'function' == typeof n[o]) return !0
            }
            return !1
          })(t)
        }
        function Wa(t, e, n) {
          return t
            ? n && (n.merge || n.mergeFields)
              ? t.toFirestore(e, n)
              : t.toFirestore(e)
            : e
        }
        var Xa = (function (t) {
            function e(e) {
              var n = this
              return ((n = t.call(this) || this).firestore = e), n
            }
            return (
              Object(h.c)(e, t),
              (e.prototype.Uf = function (t) {
                return new D(t)
              }),
              (e.prototype.Qf = function (t) {
                var e = this.Gf(t, this.firestore.I_)
                return new xu(this.firestore, null, e)
              }),
              e
            )
          })(Da),
          Ya = (function () {
            function t(t, e) {
              ;(this.hasPendingWrites = t), (this.fromCache = e)
            }
            return (
              (t.prototype.isEqual = function (t) {
                return (
                  this.hasPendingWrites === t.hasPendingWrites &&
                  this.fromCache === t.fromCache
                )
              }),
              t
            )
          })(),
          Qa = (function (t) {
            function e(e, n, r, i, o, u) {
              var s = this
              return (
                ((s = t.call(this, e, n, r, i, u) || this).zf = e),
                (s.ad = e),
                (s.metadata = o),
                s
              )
            }
            return (
              Object(h.c)(e, t),
              (e.prototype.exists = function () {
                return t.prototype.exists.call(this)
              }),
              (e.prototype.data = function (t) {
                if ((void 0 === t && (t = {}), this.Jf)) {
                  if (this.v_) {
                    var e = new $a(
                      this.zf,
                      this.Hf,
                      this.S_,
                      this.Jf,
                      this.metadata,
                      null
                    )
                    return this.v_.fromFirestore(e, t)
                  }
                  return this.Hf.$f(this.Jf.vt(), t.serverTimestamps)
                }
              }),
              (e.prototype.get = function (t, e) {
                if ((void 0 === e && (e = {}), this.Jf)) {
                  var n = this.Jf.data().field(Pa('DocumentSnapshot.get', t))
                  if (null !== n) return this.Hf.$f(n, e.serverTimestamps)
                }
              }),
              e
            )
          })(ka),
          $a = (function (t) {
            function e() {
              return (null !== t && t.apply(this, arguments)) || this
            }
            return (
              Object(h.c)(e, t),
              (e.prototype.data = function (e) {
                return void 0 === e && (e = {}), t.prototype.data.call(this, e)
              }),
              e
            )
          })(Qa),
          Za = (function () {
            function t(t, e, n, r) {
              ;(this.zf = t),
                (this.Hf = e),
                (this.ud = r),
                (this.metadata = new Ya(r.hasPendingWrites, r.fromCache)),
                (this.query = n)
            }
            return (
              Object.defineProperty(t.prototype, 'docs', {
                get: function () {
                  var t = []
                  return (
                    this.forEach(function (e) {
                      return t.push(e)
                    }),
                    t
                  )
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, 'size', {
                get: function () {
                  return this.ud.docs.size
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(t.prototype, 'empty', {
                get: function () {
                  return 0 === this.size
                },
                enumerable: !1,
                configurable: !0,
              }),
              (t.prototype.forEach = function (t, e) {
                var n = this
                this.ud.docs.forEach(function (r) {
                  t.call(
                    e,
                    new $a(
                      n.zf,
                      n.Hf,
                      r.key,
                      r,
                      new Ya(n.ud.Ce.has(r.key), n.ud.fromCache),
                      n.query.v_
                    )
                  )
                })
              }),
              (t.prototype.docChanges = function (t) {
                void 0 === t && (t = {})
                var e = !!t.includeMetadataChanges
                if (e && this.ud.Ne)
                  throw new x(
                    A.INVALID_ARGUMENT,
                    'To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().'
                  )
                return (
                  (this.hd && this.ld === e) ||
                    ((this.hd = (function (t, e) {
                      if (t.ud.De.nt()) {
                        var n = 0
                        return t.ud.docChanges.map(function (e) {
                          var r = new $a(
                            t.zf,
                            t.Hf,
                            e.doc.key,
                            e.doc,
                            new Ya(t.ud.Ce.has(e.doc.key), t.ud.fromCache),
                            t.query.v_
                          )
                          return (
                            e.doc,
                            {
                              type: 'added',
                              doc: r,
                              oldIndex: -1,
                              newIndex: n++,
                            }
                          )
                        })
                      }
                      var r = t.ud.De
                      return t.ud.docChanges
                        .filter(function (t) {
                          return e || 3 !== t.type
                        })
                        .map(function (e) {
                          var n = new $a(
                              t.zf,
                              t.Hf,
                              e.doc.key,
                              e.doc,
                              new Ya(t.ud.Ce.has(e.doc.key), t.ud.fromCache),
                              t.query.v_
                            ),
                            i = -1,
                            o = -1
                          return (
                            0 !== e.type &&
                              ((i = r.indexOf(e.doc.key)),
                              (r = r.delete(e.doc.key))),
                            1 !== e.type &&
                              (o = (r = r.add(e.doc)).indexOf(e.doc.key)),
                            {
                              type: tc(e.type),
                              doc: n,
                              oldIndex: i,
                              newIndex: o,
                            }
                          )
                        })
                    })(this, e)),
                    (this.ld = e)),
                  this.hd
                )
              }),
              t
            )
          })()
        function tc(t) {
          switch (t) {
            case 0:
              return 'added'
            case 2:
            case 3:
              return 'modified'
            case 1:
              return 'removed'
            default:
              return w()
          }
        }
        function ec(t, e) {
          return t instanceof Qa && e instanceof Qa
            ? t.zf === e.zf &&
                t.S_.isEqual(e.S_) &&
                (null === t.Jf ? null === e.Jf : t.Jf.isEqual(e.Jf)) &&
                t.v_ === e.v_
            : t instanceof Za &&
                e instanceof Za &&
                t.zf === e.zf &&
                Ru(t.query, e.query) &&
                t.metadata.isEqual(e.metadata) &&
                t.ud.isEqual(e.ud)
        }
        var nc = (function (t) {
          function e(e) {
            var n = this
            return ((n = t.call(this) || this).firestore = e), n
          }
          return (
            Object(h.c)(e, t),
            (e.prototype.Uf = function (t) {
              return new D(t)
            }),
            (e.prototype.Qf = function (t) {
              var e = this.Gf(t, this.firestore.I_)
              return new xu(this.firestore, null, e)
            }),
            e
          )
        })(Da)
        function rc(t, e, n) {
          for (var r = [], i = 3; i < arguments.length; i++)
            r[i - 3] = arguments[i]
          t = Ou(t, xu)
          var o = Ou(t.firestore, Na),
            u = Hu(o)
          return (
            e instanceof q && (e = e._),
            oc(o, [
              ('string' == typeof e || e instanceof gu
                ? Zu(u, 'updateDoc', t.S_, e, n, r)
                : $u(u, 'updateDoc', t.S_, e)
              ).F_(t.S_, ke.exists(!0)),
            ])
          )
        }
        function ic(t) {
          for (var e, n, r, i = [], o = 1; o < arguments.length; o++)
            i[o - 1] = arguments[o]
          t instanceof q && (t = t._)
          var u = { includeMetadataChanges: !1 },
            s = 0
          'object' != typeof i[s] || Ja(i[s]) || ((u = i[s]), s++)
          var a,
            c,
            f,
            l = { includeMetadataChanges: u.includeMetadataChanges }
          if (Ja(i[s])) {
            var d = i[s]
            ;(i[s] =
              null === (e = d.next) || void 0 === e ? void 0 : e.bind(d)),
              (i[s + 1] =
                null === (n = d.error) || void 0 === n ? void 0 : n.bind(d)),
              (i[s + 2] =
                null === (r = d.complete) || void 0 === r ? void 0 : r.bind(d))
          }
          if (t instanceof xu)
            (c = Ou(t.firestore, Na)),
              (f = Zt(t.S_.path)),
              (a = {
                next: function (e) {
                  i[s] && i[s](sc(c, t, e))
                },
                error: i[s + 1],
                complete: i[s + 2],
              })
          else {
            var p = Ou(t, Du)
            ;(c = Ou(p.firestore, Na)), (f = p.C_)
            var v = new nc(c)
            ;(a = {
              next: function (t) {
                i[s] && i[s](new Za(c, v, p, t))
              },
              error: i[s + 1],
              complete: i[s + 2],
            }),
              La(t.C_)
          }
          return (function (t, e, n, r) {
            var i = this,
              o = new yu(r),
              u = new Os(e, o, n)
            return (
              t.fs.ys(function () {
                return Object(h.b)(i, void 0, void 0, function () {
                  var e
                  return Object(h.d)(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return (e = ws), [4, Ia(t)]
                      case 1:
                        return [2, e.apply(void 0, [n.sent(), u])]
                    }
                  })
                })
              }),
              function () {
                o.r_(),
                  t.fs.ys(function () {
                    return Object(h.b)(i, void 0, void 0, function () {
                      var e
                      return Object(h.d)(this, function (n) {
                        switch (n.label) {
                          case 0:
                            return (e = Is), [4, Ia(t)]
                          case 1:
                            return [2, e.apply(void 0, [n.sent(), u])]
                        }
                      })
                    })
                  })
              }
            )
          })(ja(c), f, l, a)
        }
        function oc(t, e) {
          return (function (t, e) {
            var n = this,
              r = new or()
            return (
              t.fs.ys(function () {
                return Object(h.b)(n, void 0, void 0, function () {
                  var n
                  return Object(h.d)(this, function (i) {
                    switch (i.label) {
                      case 0:
                        return (n = Ms), [4, wa(t)]
                      case 1:
                        return [2, n.apply(void 0, [i.sent(), e, r])]
                    }
                  })
                })
              }),
              r.promise
            )
          })(ja(t), e)
        }
        function sc(t, e, n) {
          var r = n.docs.get(e.S_),
            i = new nc(t)
          return new Qa(
            t,
            i,
            e.S_,
            r,
            new Ya(n.hasPendingWrites, n.fromCache),
            e.v_
          )
        }
        var uc = (function () {
          function t(t, e) {
            ;(this.zf = t),
              (this._d = e),
              (this.fd = []),
              (this.dd = !1),
              (this.wd = Hu(t))
          }
          return (
            (t.prototype.set = function (t, e, n) {
              this.Ed()
              var r = ac(t, this.zf),
                i = Wa(r.v_, e, n),
                o = Bu(this.wd, 'WriteBatch.set', r.S_, i, null !== r.v_, n)
              return this.fd.push(o.F_(r.S_, ke.Wt())), this
            }),
            (t.prototype.update = function (t, e, n) {
              for (var r = [], i = 3; i < arguments.length; i++)
                r[i - 3] = arguments[i]
              this.Ed()
              var o,
                u = ac(t, this.zf)
              return (
                e instanceof q && (e = e._),
                (o =
                  'string' == typeof e || e instanceof gu
                    ? Zu(this.wd, 'WriteBatch.update', u.S_, e, n, r)
                    : $u(this.wd, 'WriteBatch.update', u.S_, e)),
                this.fd.push(o.F_(u.S_, ke.exists(!0))),
                this
              )
            }),
            (t.prototype.delete = function (t) {
              this.Ed()
              var e = ac(t, this.zf)
              return (this.fd = this.fd.concat(new We(e.S_, ke.Wt()))), this
            }),
            (t.prototype.commit = function () {
              return (
                this.Ed(),
                (this.dd = !0),
                this.fd.length > 0 ? this._d(this.fd) : Promise.resolve()
              )
            }),
            (t.prototype.Ed = function () {
              if (this.dd)
                throw new x(
                  A.FAILED_PRECONDITION,
                  'A write batch can no longer be used after commit() has been called.'
                )
            }),
            t
          )
        })()
        function ac(t, e) {
          if ((t instanceof q && (t = t._), t.firestore !== e))
            throw new x(
              A.INVALID_ARGUMENT,
              'Provided document reference is from a different Firestore instance.'
            )
          return t
        }
        var cc = (function (t) {
            function e(e, n) {
              var r = this
              return ((r = t.call(this, e, n) || this).zf = e), r
            }
            return (
              Object(h.c)(e, t),
              (e.prototype.get = function (e) {
                var n = this,
                  r = ac(e, this.zf),
                  i = new nc(this.zf)
                return t.prototype.get.call(this, e).then(function (t) {
                  return new Qa(n.zf, i, r.S_, t.Jf, new Ya(!1, !1), r.v_)
                })
              }),
              e
            )
          })(
            (function () {
              function t(t, e) {
                ;(this.zf = t), (this.Td = e), (this.wd = Hu(t))
              }
              return (
                (t.prototype.get = function (t) {
                  var e = this,
                    n = ac(t, this.zf),
                    r = new Xa(this.zf)
                  return this.Td.ef([n.S_]).then(function (t) {
                    if (!t || 1 !== t.length) return w()
                    var i = t[0]
                    if (i instanceof At)
                      return new ka(e.zf, r, n.S_, null, n.v_)
                    if (i instanceof St) return new ka(e.zf, r, i.key, i, n.v_)
                    throw w()
                  })
                }),
                (t.prototype.set = function (t, e, n) {
                  var r = ac(t, this.zf),
                    i = Wa(r.v_, e, n),
                    o = Bu(
                      this.wd,
                      'Transaction.set',
                      r.S_,
                      i,
                      null !== r.v_,
                      n
                    )
                  return this.Td.set(r.S_, o), this
                }),
                (t.prototype.update = function (t, e, n) {
                  for (var r = [], i = 3; i < arguments.length; i++)
                    r[i - 3] = arguments[i]
                  var o,
                    u = ac(t, this.zf)
                  return (
                    e instanceof q && (e = e._),
                    (o =
                      'string' == typeof e || e instanceof gu
                        ? Zu(this.wd, 'Transaction.update', u.S_, e, n, r)
                        : $u(this.wd, 'Transaction.update', u.S_, e)),
                    this.Td.update(u.S_, o),
                    this
                  )
                }),
                (t.prototype.delete = function (t) {
                  var e = ac(t, this.zf)
                  return this.Td.delete(e.S_), this
                }),
                t
              )
            })()
          ),
          hc = (function () {
            function t() {}
            return (
              (t.prototype.enableIndexedDbPersistence = function (t, e) {
                return (function (t, e) {
                  xa((t = Ou(t, Na)))
                  var n = ja(t),
                    r = t.p_(),
                    i = new vu()
                  return Aa(
                    n,
                    i,
                    new pu(
                      i,
                      r.cacheSizeBytes,
                      null == e ? void 0 : e.forceOwnership
                    )
                  )
                })(t._, { forceOwnership: e })
              }),
              (t.prototype.enableMultiTabIndexedDbPersistence = function (t) {
                return (function (t) {
                  xa((t = Ou(t, Na)))
                  var e = ja(t),
                    n = t.p_(),
                    r = new vu()
                  return Aa(e, r, new du(r, n.cacheSizeBytes))
                })(t._)
              }),
              (t.prototype.clearIndexedDbPersistence = function (t) {
                return (function (t) {
                  var e = this
                  if (t.R_ && !t.P_)
                    throw new x(
                      A.FAILED_PRECONDITION,
                      'Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.'
                    )
                  var n = new or()
                  return (
                    t.Mf.Tf(function () {
                      return Object(h.b)(e, void 0, void 0, function () {
                        var e
                        return Object(h.d)(this, function (r) {
                          switch (r.label) {
                            case 0:
                              return (
                                r.trys.push([0, 2, , 3]),
                                [
                                  4,
                                  (function (t) {
                                    return Object(h.b)(
                                      this,
                                      void 0,
                                      void 0,
                                      function () {
                                        var e
                                        return Object(h.d)(this, function (n) {
                                          switch (n.label) {
                                            case 0:
                                              return ar.Wn()
                                                ? ((e = t + 'main'),
                                                  [4, ar.delete(e)])
                                                : [2, Promise.resolve()]
                                            case 1:
                                              return n.sent(), [2]
                                          }
                                        })
                                      }
                                    )
                                  })(Hi(t.I_, t.w_)),
                                ]
                              )
                            case 1:
                              return r.sent(), n.resolve(), [3, 3]
                            case 2:
                              return (e = r.sent()), n.reject(e), [3, 3]
                            case 3:
                              return [2]
                          }
                        })
                      })
                    }),
                    n.promise
                  )
                })(t._)
              }),
              t
            )
          })(),
          fc = (function (t) {
            function e(e, n, r) {
              var i = this
              return (
                ((i = t.call(this, n) || this).Id = r),
                (i.INTERNAL = {
                  delete: function () {
                    return i.terminate()
                  },
                }),
                e instanceof R || (i.md = e),
                i
              )
            }
            return (
              Object(h.c)(e, t),
              Object.defineProperty(e.prototype, 'I_', {
                get: function () {
                  return this._.I_
                },
                enumerable: !1,
                configurable: !0,
              }),
              (e.prototype.settings = function (t) {
                t.merge &&
                  delete (t = Object.assign(Object.assign({}, this._.V_()), t))
                    .merge,
                  this._.g_(t)
              }),
              (e.prototype.useEmulator = function (t, e) {
                !(function (t, e, n) {
                  var r = (t = Ou(t, Au)).V_()
                  'firestore.googleapis.com' !== r.host &&
                    r.host !== e &&
                    y(
                      'Host has been set in both settings() and useEmulator(), emulator host will be used'
                    ),
                    t.g_(
                      Object.assign(Object.assign({}, r), {
                        host: e + ':' + n,
                        ssl: !1,
                      })
                    )
                })(this._, t, e)
              }),
              (e.prototype.enableNetwork = function () {
                return (function (t) {
                  var e = this
                  return t.fs.enqueue(function () {
                    return Object(h.b)(e, void 0, void 0, function () {
                      var e, n
                      return Object(h.d)(this, function (r) {
                        switch (r.label) {
                          case 0:
                            return [4, ga(t)]
                          case 1:
                            return (e = r.sent()), [4, ma(t)]
                          case 2:
                            return (
                              (n = r.sent()),
                              [
                                2,
                                (e.Vo(!0),
                                (function (t) {
                                  var e = _(t)
                                  return e.Fh.delete(0), Jo(e)
                                })(n)),
                              ]
                            )
                        }
                      })
                    })
                  })
                })(ja(Ou(this._, Na)))
              }),
              (e.prototype.disableNetwork = function () {
                return (function (t) {
                  var e = this
                  return t.fs.enqueue(function () {
                    return Object(h.b)(e, void 0, void 0, function () {
                      var e, n
                      return Object(h.d)(this, function (r) {
                        switch (r.label) {
                          case 0:
                            return [4, ga(t)]
                          case 1:
                            return (e = r.sent()), [4, ma(t)]
                          case 2:
                            return (
                              (n = r.sent()),
                              [
                                2,
                                (e.Vo(!1),
                                (function (t) {
                                  return Object(h.b)(
                                    this,
                                    void 0,
                                    void 0,
                                    function () {
                                      var e
                                      return Object(h.d)(this, function (n) {
                                        switch (n.label) {
                                          case 0:
                                            return (
                                              (e = _(t)).Fh.add(0), [4, Wo(e)]
                                            )
                                          case 1:
                                            return (
                                              n.sent(), e.Mh.set('Offline'), [2]
                                            )
                                        }
                                      })
                                    }
                                  )
                                })(n)),
                              ]
                            )
                        }
                      })
                    })
                  })
                })(ja(Ou(this._, Na)))
              }),
              (e.prototype.enablePersistence = function (t) {
                var e = !1,
                  n = !1
                return (
                  t &&
                    Iu(
                      'synchronizeTabs',
                      (e = !!t.synchronizeTabs),
                      'experimentalForceOwningTab',
                      (n = !!t.experimentalForceOwningTab)
                    ),
                  e
                    ? this.Id.enableMultiTabIndexedDbPersistence(this)
                    : this.Id.enableIndexedDbPersistence(this, n)
                )
              }),
              (e.prototype.clearPersistence = function () {
                return this.Id.clearIndexedDbPersistence(this)
              }),
              (e.prototype.terminate = function () {
                return (
                  this.md &&
                    (this.md._removeServiceInstance('firestore'),
                    this.md._removeServiceInstance('firestore-exp')),
                  this._._delete()
                )
              }),
              (e.prototype.waitForPendingWrites = function () {
                return (function (t) {
                  var e = this,
                    n = new or()
                  return (
                    t.fs.ys(function () {
                      return Object(h.b)(e, void 0, void 0, function () {
                        var e
                        return Object(h.d)(this, function (r) {
                          switch (r.label) {
                            case 0:
                              return (e = Hs), [4, wa(t)]
                            case 1:
                              return [2, e.apply(void 0, [r.sent(), n])]
                          }
                        })
                      })
                    }),
                    n.promise
                  )
                })(ja(Ou(this._, Na)))
              }),
              (e.prototype.onSnapshotsInSync = function (t) {
                return (function (t, e) {
                  return (function (t, e) {
                    var n = this,
                      r = new yu(e)
                    return (
                      t.fs.ys(function () {
                        return Object(h.b)(n, void 0, void 0, function () {
                          var e
                          return Object(h.d)(this, function (n) {
                            switch (n.label) {
                              case 0:
                                return (
                                  (e = function (t, e) {
                                    _(t).jh.add(e), e.next()
                                  }),
                                  [4, Ia(t)]
                                )
                              case 1:
                                return [2, e.apply(void 0, [n.sent(), r])]
                            }
                          })
                        })
                      }),
                      function () {
                        r.r_(),
                          t.fs.ys(function () {
                            return Object(h.b)(n, void 0, void 0, function () {
                              var e
                              return Object(h.d)(this, function (n) {
                                switch (n.label) {
                                  case 0:
                                    return (
                                      (e = function (t, e) {
                                        _(t).jh.delete(e)
                                      }),
                                      [4, Ia(t)]
                                    )
                                  case 1:
                                    return [2, e.apply(void 0, [n.sent(), r])]
                                }
                              })
                            })
                          })
                      }
                    )
                  })(ja((t = Ou(t, Na))), Ja(e) ? e : { next: e })
                })(this._, t)
              }),
              Object.defineProperty(e.prototype, 'app', {
                get: function () {
                  if (!this.md)
                    throw new x(
                      A.FAILED_PRECONDITION,
                      "Firestore was not initialized using the Firebase SDK. 'app' is not available"
                    )
                  return this.md
                },
                enumerable: !1,
                configurable: !0,
              }),
              (e.prototype.collection = function (t) {
                try {
                  return new Nc(this, Cu(this._, t))
                } catch (t) {
                  throw bc(t, 'collection()', 'Firestore.collection()')
                }
              }),
              (e.prototype.doc = function (t) {
                try {
                  return new gc(this, Pu(this._, t))
                } catch (t) {
                  throw bc(t, 'doc()', 'Firestore.doc()')
                }
              }),
              (e.prototype.collectionGroup = function (t) {
                try {
                  return new Ec(
                    this,
                    (function (t, e) {
                      if (
                        ((t = Ou(t, Au)),
                        mu('collectionGroup', 'collection id', e),
                        e.indexOf('/') >= 0)
                      )
                        throw new x(
                          A.INVALID_ARGUMENT,
                          "Invalid collection ID '" +
                            e +
                            "' passed to function collectionGroup(). Collection IDs must not contain '/'."
                        )
                      return new Du(
                        t,
                        null,
                        (function (t) {
                          return new Qt(W.at(), t)
                        })(e)
                      )
                    })(this._, t)
                  )
                } catch (t) {
                  throw bc(
                    t,
                    'collectionGroup()',
                    'Firestore.collectionGroup()'
                  )
                }
              }),
              (e.prototype.runTransaction = function (t) {
                var e = this
                return (function (t, e) {
                  return (function (t, e) {
                    var n = this,
                      r = new or()
                    return (
                      t.fs.ys(function () {
                        return Object(h.b)(n, void 0, void 0, function () {
                          var n
                          return Object(h.d)(this, function (i) {
                            switch (i.label) {
                              case 0:
                                return [
                                  4,
                                  (function (t) {
                                    return ya(t).then(function (t) {
                                      return t.Dh
                                    })
                                  })(t),
                                ]
                              case 1:
                                return (
                                  (n = i.sent()),
                                  new fa(t.fs, n, e, r).run(),
                                  [2]
                                )
                            }
                          })
                        })
                      }),
                      r.promise
                    )
                  })(ja(t), function (n) {
                    return e(new cc(t, n))
                  })
                })(this._, function (n) {
                  return t(new dc(e, n))
                })
              }),
              (e.prototype.batch = function () {
                var t = this
                return (
                  ja(this._),
                  new vc(
                    new uc(this._, function (e) {
                      return oc(t._, e)
                    })
                  )
                )
              }),
              (e.prototype.loadBundle = function (t) {
                throw new x(
                  A.FAILED_PRECONDITION,
                  '"loadBundle()" does not exist, have you imported "firebase/firestore/bundle"?'
                )
              }),
              (e.prototype.namedQuery = function (t) {
                throw new x(
                  A.FAILED_PRECONDITION,
                  '"namedQuery()" does not exist, have you imported "firebase/firestore/bundle"?'
                )
              }),
              e
            )
          })(q),
          lc = (function (t) {
            function e(e) {
              var n = this
              return ((n = t.call(this) || this).firestore = e), n
            }
            return (
              Object(h.c)(e, t),
              (e.prototype.Uf = function (t) {
                return new P(new D(t))
              }),
              (e.prototype.Qf = function (t) {
                var e = this.Gf(t, this.firestore.I_)
                return gc.Ad(e, this.firestore, null)
              }),
              e
            )
          })(Da)
        function pc(t) {
          var e
          ;(e = t), f.setLogLevel(e)
        }
        var dc = (function (t) {
            function e(e, n) {
              var r = this
              return (
                ((r = t.call(this, n) || this).zf = e), (r.Hf = new lc(e)), r
              )
            }
            return (
              Object(h.c)(e, t),
              (e.prototype.get = function (t) {
                var e = this,
                  n = jc(t)
                return this._.get(n).then(function (t) {
                  return new Ic(
                    e.zf,
                    new Qa(e.zf._, e.Hf, t.S_, t.Jf, t.metadata, n.v_)
                  )
                })
              }),
              (e.prototype.set = function (t, e, n) {
                var r = jc(t)
                return (
                  n
                    ? (wu('Transaction.set', n), this._.set(r, e, n))
                    : this._.set(r, e),
                  this
                )
              }),
              (e.prototype.update = function (t, e, n) {
                for (var r, i = [], o = 3; o < arguments.length; o++)
                  i[o - 3] = arguments[o]
                var u = jc(t)
                return (
                  2 === arguments.length
                    ? this._.update(u, e)
                    : (r = this._).update.apply(r, Object(h.g)([u, e, n], i)),
                  this
                )
              }),
              (e.prototype.delete = function (t) {
                var e = jc(t)
                return this._.delete(e), this
              }),
              e
            )
          })(q),
          vc = (function (t) {
            function e() {
              return (null !== t && t.apply(this, arguments)) || this
            }
            return (
              Object(h.c)(e, t),
              (e.prototype.set = function (t, e, n) {
                var r = jc(t)
                return (
                  n
                    ? (wu('WriteBatch.set', n), this._.set(r, e, n))
                    : this._.set(r, e),
                  this
                )
              }),
              (e.prototype.update = function (t, e, n) {
                for (var r, i = [], o = 3; o < arguments.length; o++)
                  i[o - 3] = arguments[o]
                var u = jc(t)
                return (
                  2 === arguments.length
                    ? this._.update(u, e)
                    : (r = this._).update.apply(r, Object(h.g)([u, e, n], i)),
                  this
                )
              }),
              (e.prototype.delete = function (t) {
                var e = jc(t)
                return this._.delete(e), this
              }),
              (e.prototype.commit = function () {
                return this._.commit()
              }),
              e
            )
          })(q),
          yc = (function (t) {
            function e(e, n, r) {
              var i = this
              return ((i = t.call(this, r) || this).zf = e), (i.Hf = n), i
            }
            return (
              Object(h.c)(e, t),
              (e.prototype.fromFirestore = function (t, e) {
                var n = new $a(this.zf._, this.Hf, t.S_, t.Jf, t.metadata, null)
                return this._.fromFirestore(
                  new _c(this.zf, n),
                  null != e ? e : {}
                )
              }),
              (e.prototype.toFirestore = function (t, e) {
                return e ? this._.toFirestore(t, e) : this._.toFirestore(t)
              }),
              (e.Rd = function (t, n) {
                var r = e.Pd,
                  i = r.get(t)
                i || ((i = new WeakMap()), r.set(t, i))
                var o = i.get(n)
                return o || ((o = new e(t, new lc(t), n)), i.set(n, o)), o
              }),
              e
            )
          })(q)
        yc.Pd = new WeakMap()
        var gc = (function (t) {
          function e(e, n) {
            var r = this
            return (
              ((r = t.call(this, n) || this).firestore = e),
              (r.Hf = new lc(e)),
              r
            )
          }
          return (
            Object(h.c)(e, t),
            (e.yd = function (t, n, r) {
              if (t.length % 2 != 0)
                throw new x(
                  A.INVALID_ARGUMENT,
                  'Invalid document reference. Document references must have an even number of segments, but ' +
                    t.ot() +
                    ' has ' +
                    t.length
                )
              return new e(n, new xu(n._, r, new Y(t)))
            }),
            (e.Ad = function (t, n, r) {
              return new e(n, new xu(n._, r, t))
            }),
            Object.defineProperty(e.prototype, 'id', {
              get: function () {
                return this._.id
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'parent', {
              get: function () {
                return new Nc(this.firestore, this._.parent)
              },
              enumerable: !1,
              configurable: !0,
            }),
            Object.defineProperty(e.prototype, 'path', {
              get: function () {
                return this._.path
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.prototype.collection = function (t) {
              try {
                return new Nc(this.firestore, Cu(this._, t))
              } catch (t) {
                throw bc(t, 'collection()', 'DocumentReference.collection()')
              }
            }),
            (e.prototype.isEqual = function (t) {
              return (
                t instanceof q && (t = t._), t instanceof xu && Lu(this._, t)
              )
            }),
            (e.prototype.set = function (t, e) {
              e = wu('DocumentReference.set', e)
              try {
                return (function (t, e, n) {
                  t = Ou(t, xu)
                  var r = Ou(t.firestore, Na),
                    i = Wa(t.v_, e, n)
                  return oc(r, [
                    Bu(Hu(r), 'setDoc', t.S_, i, null !== t.v_, n).F_(
                      t.S_,
                      ke.Wt()
                    ),
                  ])
                })(this._, t, e)
              } catch (t) {
                throw bc(t, 'setDoc()', 'DocumentReference.set()')
              }
            }),
            (e.prototype.update = function (t, e) {
              for (var n = [], r = 2; r < arguments.length; r++)
                n[r - 2] = arguments[r]
              try {
                return 1 === arguments.length
                  ? rc(this._, t)
                  : rc.apply(void 0, Object(h.g)([this._, t, e], n))
              } catch (t) {
                throw bc(t, 'updateDoc()', 'DocumentReference.update()')
              }
            }),
            (e.prototype.delete = function () {
              return oc(Ou((t = this._).firestore, Na), [new We(t.S_, ke.Wt())])
              var t
            }),
            (e.prototype.onSnapshot = function () {
              for (var t = this, e = [], n = 0; n < arguments.length; n++)
                e[n] = arguments[n]
              var r = mc(e),
                i = wc(e, function (e) {
                  return new Ic(
                    t.firestore,
                    new Qa(t.firestore._, t.Hf, e.S_, e.Jf, e.metadata, t._.v_)
                  )
                })
              return ic(this._, r, i)
            }),
            (e.prototype.get = function (t) {
              var e = this
              return ('cache' === (null == t ? void 0 : t.source)
                ? (function (t) {
                    t = Ou(t, xu)
                    var e = Ou(t.firestore, Na),
                      n = ja(e),
                      r = new nc(e)
                    return (function (t, e) {
                      var n = this,
                        r = new or()
                      return (
                        t.fs.ys(function () {
                          return Object(h.b)(n, void 0, void 0, function () {
                            var n
                            return Object(h.d)(this, function (i) {
                              switch (i.label) {
                                case 0:
                                  return (
                                    (n = function (t, e, n) {
                                      return Object(h.b)(
                                        this,
                                        void 0,
                                        void 0,
                                        function () {
                                          var r, i
                                          return Object(h.d)(
                                            this,
                                            function (o) {
                                              switch (o.label) {
                                                case 0:
                                                  return (
                                                    o.trys.push([0, 2, , 3]),
                                                    [
                                                      4,
                                                      (function (t, e) {
                                                        var n = _(t)
                                                        return n.persistence.runTransaction(
                                                          'read document',
                                                          'readonly',
                                                          function (t) {
                                                            return n.Ic.Jo(t, e)
                                                          }
                                                        )
                                                      })(t, e),
                                                    ]
                                                  )
                                                case 1:
                                                  return (
                                                    (i = o.sent()) instanceof St
                                                      ? n.resolve(i)
                                                      : i instanceof At
                                                      ? n.resolve(null)
                                                      : n.reject(
                                                          new x(
                                                            A.UNAVAILABLE,
                                                            "Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"
                                                          )
                                                        ),
                                                    [3, 3]
                                                  )
                                                case 2:
                                                  return (
                                                    (r = o.sent()),
                                                    (i = gr(
                                                      r,
                                                      "Failed to get document '" +
                                                        e +
                                                        ' from cache'
                                                    )),
                                                    n.reject(i),
                                                    [3, 3]
                                                  )
                                                case 3:
                                                  return [2]
                                              }
                                            }
                                          )
                                        }
                                      )
                                    }),
                                    [4, ba(t)]
                                  )
                                case 1:
                                  return [2, n.apply(void 0, [i.sent(), e, r])]
                              }
                            })
                          })
                        }),
                        r.promise
                      )
                    })(n, t.S_).then(function (n) {
                      return new Qa(
                        e,
                        r,
                        t.S_,
                        n,
                        new Ya(n instanceof St && n.bt, !0),
                        t.v_
                      )
                    })
                  })(this._)
                : 'server' === (null == t ? void 0 : t.source)
                ? (function (t) {
                    t = Ou(t, xu)
                    var e = Ou(t.firestore, Na)
                    return _a(ja(e), t.S_, { source: 'server' }).then(function (
                      n
                    ) {
                      return sc(e, t, n)
                    })
                  })(this._)
                : (function (t) {
                    t = Ou(t, xu)
                    var e = Ou(t.firestore, Na)
                    return _a(ja(e), t.S_).then(function (n) {
                      return sc(e, t, n)
                    })
                  })(this._)
              ).then(function (t) {
                return new Ic(
                  e.firestore,
                  new Qa(e.firestore._, e.Hf, t.S_, t.Jf, t.metadata, e._.v_)
                )
              })
            }),
            (e.prototype.withConverter = function (t) {
              return new e(
                this.firestore,
                this._.withConverter(yc.Rd(this.firestore, t))
              )
            }),
            e
          )
        })(q)
        function bc(t, e, n) {
          return (t.message = t.message.replace(e, n)), t
        }
        function mc(t) {
          for (var e = 0, n = t; e < n.length; e++) {
            var r = n[e]
            if ('object' == typeof r && !Ja(r)) return r
          }
          return {}
        }
        function wc(t, e) {
          var n, r, i
          return {
            next: function (t) {
              i.next && i.next(e(t))
            },
            error:
              null ===
                (n = (i = Ja(t[0])
                  ? t[0]
                  : Ja(t[1])
                  ? t[1]
                  : 'function' == typeof t[0]
                  ? { next: t[0], error: t[1], complete: t[2] }
                  : { next: t[1], error: t[2], complete: t[3] }).error) ||
              void 0 === n
                ? void 0
                : n.bind(i),
            complete:
              null === (r = i.complete) || void 0 === r ? void 0 : r.bind(i),
          }
        }
        var Ic = (function (t) {
            function e(e, n) {
              var r = this
              return ((r = t.call(this, n) || this).zf = e), r
            }
            return (
              Object(h.c)(e, t),
              Object.defineProperty(e.prototype, 'ref', {
                get: function () {
                  return new gc(this.zf, this._.ref)
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, 'id', {
                get: function () {
                  return this._.id
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, 'metadata', {
                get: function () {
                  return this._.metadata
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, 'exists', {
                get: function () {
                  return this._.exists()
                },
                enumerable: !1,
                configurable: !0,
              }),
              (e.prototype.data = function (t) {
                return this._.data(t)
              }),
              (e.prototype.get = function (t, e) {
                return this._.get(t, e)
              }),
              (e.prototype.isEqual = function (t) {
                return ec(this._, t._)
              }),
              e
            )
          })(q),
          _c = (function (t) {
            function e() {
              return (null !== t && t.apply(this, arguments)) || this
            }
            return (
              Object(h.c)(e, t),
              (e.prototype.data = function (t) {
                return this._.data(t)
              }),
              e
            )
          })(Ic),
          Ec = (function (t) {
            function e(e, n) {
              var r = this
              return (
                ((r = t.call(this, n) || this).firestore = e),
                (r.Hf = new lc(e)),
                r
              )
            }
            return (
              Object(h.c)(e, t),
              (e.prototype.where = function (t, n, r) {
                try {
                  return new e(
                    this.firestore,
                    Va(
                      this._,
                      (function (t, e, n) {
                        var r = e,
                          i = Pa('where', t)
                        return new Ma(i, r, n)
                      })(t, n, r)
                    )
                  )
                } catch (t) {
                  throw bc(t, /(orderBy|where)\(\)/, 'Query.$1()')
                }
              }),
              (e.prototype.orderBy = function (t, n) {
                try {
                  return new e(
                    this.firestore,
                    Va(
                      this._,
                      (function (t, e) {
                        void 0 === e && (e = 'asc')
                        var n = e,
                          r = Pa('orderBy', t)
                        return new Ua(r, n)
                      })(t, n)
                    )
                  )
                } catch (t) {
                  throw bc(t, /(orderBy|where)\(\)/, 'Query.$1()')
                }
              }),
              (e.prototype.limit = function (t) {
                try {
                  return new e(
                    this.firestore,
                    Va(
                      this._,
                      (function (t) {
                        return Nu('limit', t), new Fa('limit', t, 'F')
                      })(t)
                    )
                  )
                } catch (t) {
                  throw bc(t, 'limit()', 'Query.limit()')
                }
              }),
              (e.prototype.limitToLast = function (t) {
                try {
                  return new e(
                    this.firestore,
                    Va(
                      this._,
                      (function (t) {
                        return (
                          Nu('limitToLast', t), new Fa('limitToLast', t, 'L')
                        )
                      })(t)
                    )
                  )
                } catch (t) {
                  throw bc(t, 'limitToLast()', 'Query.limitToLast()')
                }
              }),
              (e.prototype.startAt = function () {
                for (var t = [], n = 0; n < arguments.length; n++)
                  t[n] = arguments[n]
                try {
                  return new e(
                    this.firestore,
                    Va(
                      this._,
                      function () {
                        for (var t = [], e = 0; e < arguments.length; e++)
                          t[e] = arguments[e]
                        return new qa('startAt', t, !0)
                      }.apply(void 0, t)
                    )
                  )
                } catch (t) {
                  throw bc(t, 'startAt()', 'Query.startAt()')
                }
              }),
              (e.prototype.startAfter = function () {
                for (var t = [], n = 0; n < arguments.length; n++)
                  t[n] = arguments[n]
                try {
                  return new e(
                    this.firestore,
                    Va(
                      this._,
                      function () {
                        for (var t = [], e = 0; e < arguments.length; e++)
                          t[e] = arguments[e]
                        return new qa('startAfter', t, !1)
                      }.apply(void 0, t)
                    )
                  )
                } catch (t) {
                  throw bc(t, 'startAfter()', 'Query.startAfter()')
                }
              }),
              (e.prototype.endBefore = function () {
                for (var t = [], n = 0; n < arguments.length; n++)
                  t[n] = arguments[n]
                try {
                  return new e(
                    this.firestore,
                    Va(
                      this._,
                      function () {
                        for (var t = [], e = 0; e < arguments.length; e++)
                          t[e] = arguments[e]
                        return new za('endBefore', t, !0)
                      }.apply(void 0, t)
                    )
                  )
                } catch (t) {
                  throw bc(t, 'endBefore()', 'Query.endBefore()')
                }
              }),
              (e.prototype.endAt = function () {
                for (var t = [], n = 0; n < arguments.length; n++)
                  t[n] = arguments[n]
                try {
                  return new e(
                    this.firestore,
                    Va(
                      this._,
                      function () {
                        for (var t = [], e = 0; e < arguments.length; e++)
                          t[e] = arguments[e]
                        return new za('endAt', t, !1)
                      }.apply(void 0, t)
                    )
                  )
                } catch (t) {
                  throw bc(t, 'endAt()', 'Query.endAt()')
                }
              }),
              (e.prototype.isEqual = function (t) {
                return Ru(this._, t._)
              }),
              (e.prototype.get = function (t) {
                var e = this
                return ('cache' === (null == t ? void 0 : t.source)
                  ? (function (t) {
                      t = Ou(t, Du)
                      var e = Ou(t.firestore, Na),
                        n = ja(e),
                        r = new nc(e)
                      return (function (t, e) {
                        var n = this,
                          r = new or()
                        return (
                          t.fs.ys(function () {
                            return Object(h.b)(n, void 0, void 0, function () {
                              var n
                              return Object(h.d)(this, function (i) {
                                switch (i.label) {
                                  case 0:
                                    return (
                                      (n = function (t, e, n) {
                                        return Object(h.b)(
                                          this,
                                          void 0,
                                          void 0,
                                          function () {
                                            var r, i, o, u, s
                                            return Object(h.d)(
                                              this,
                                              function (a) {
                                                switch (a.label) {
                                                  case 0:
                                                    return (
                                                      a.trys.push([0, 2, , 3]),
                                                      [4, oo(t, e, !0)]
                                                    )
                                                  case 1:
                                                    return (
                                                      (s = a.sent()),
                                                      (r = new Ds(e, s.Pc)),
                                                      (i = r.dl(s.documents)),
                                                      (o = r.Ei(i, !1)),
                                                      n.resolve(o.snapshot),
                                                      [3, 3]
                                                    )
                                                  case 2:
                                                    return (
                                                      (u = a.sent()),
                                                      (s = gr(
                                                        u,
                                                        "Failed to execute query '" +
                                                          e +
                                                          ' against cache'
                                                      )),
                                                      n.reject(s),
                                                      [3, 3]
                                                    )
                                                  case 3:
                                                    return [2]
                                                }
                                              }
                                            )
                                          }
                                        )
                                      }),
                                      [4, ba(t)]
                                    )
                                  case 1:
                                    return [
                                      2,
                                      n.apply(void 0, [i.sent(), e, r]),
                                    ]
                                }
                              })
                            })
                          }),
                          r.promise
                        )
                      })(n, t.C_).then(function (n) {
                        return new Za(e, r, t, n)
                      })
                    })(this._)
                  : 'server' === (null == t ? void 0 : t.source)
                  ? (function (t) {
                      t = Ou(t, Du)
                      var e = Ou(t.firestore, Na),
                        n = ja(e),
                        r = new nc(e)
                      return Ea(n, t.C_, { source: 'server' }).then(function (
                        n
                      ) {
                        return new Za(e, r, t, n)
                      })
                    })(this._)
                  : (function (t) {
                      t = Ou(t, Du)
                      var e = Ou(t.firestore, Na),
                        n = ja(e),
                        r = new nc(e)
                      return (
                        La(t.C_),
                        Ea(n, t.C_).then(function (n) {
                          return new Za(e, r, t, n)
                        })
                      )
                    })(this._)
                ).then(function (t) {
                  return new Oc(
                    e.firestore,
                    new Za(e.firestore._, e.Hf, e._, t.ud)
                  )
                })
              }),
              (e.prototype.onSnapshot = function () {
                for (var t = this, e = [], n = 0; n < arguments.length; n++)
                  e[n] = arguments[n]
                var r = mc(e),
                  i = wc(e, function (e) {
                    return new Oc(
                      t.firestore,
                      new Za(t.firestore._, t.Hf, t._, e.ud)
                    )
                  })
                return ic(this._, r, i)
              }),
              (e.prototype.withConverter = function (t) {
                return new e(
                  this.firestore,
                  this._.withConverter(yc.Rd(this.firestore, t))
                )
              }),
              e
            )
          })(q),
          Tc = (function (t) {
            function e(e, n) {
              var r = this
              return ((r = t.call(this, n) || this).zf = e), r
            }
            return (
              Object(h.c)(e, t),
              Object.defineProperty(e.prototype, 'type', {
                get: function () {
                  return this._.type
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, 'doc', {
                get: function () {
                  return new _c(this.zf, this._.doc)
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, 'oldIndex', {
                get: function () {
                  return this._.oldIndex
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, 'newIndex', {
                get: function () {
                  return this._.newIndex
                },
                enumerable: !1,
                configurable: !0,
              }),
              e
            )
          })(q),
          Oc = (function (t) {
            function e(e, n) {
              var r = this
              return ((r = t.call(this, n) || this).zf = e), r
            }
            return (
              Object(h.c)(e, t),
              Object.defineProperty(e.prototype, 'query', {
                get: function () {
                  return new Ec(this.zf, this._.query)
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, 'metadata', {
                get: function () {
                  return this._.metadata
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, 'size', {
                get: function () {
                  return this._.size
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, 'empty', {
                get: function () {
                  return this._.empty
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, 'docs', {
                get: function () {
                  var t = this
                  return this._.docs.map(function (e) {
                    return new _c(t.zf, e)
                  })
                },
                enumerable: !1,
                configurable: !0,
              }),
              (e.prototype.docChanges = function (t) {
                var e = this
                return this._.docChanges(t).map(function (t) {
                  return new Tc(e.zf, t)
                })
              }),
              (e.prototype.forEach = function (t, e) {
                var n = this
                this._.forEach(function (r) {
                  t.call(e, new _c(n.zf, r))
                })
              }),
              (e.prototype.isEqual = function (t) {
                return ec(this._, t._)
              }),
              e
            )
          })(q),
          Nc = (function (t) {
            function e(e, n) {
              var r = this
              return (
                ((r = t.call(this, e, n) || this).firestore = e), (r._ = n), r
              )
            }
            return (
              Object(h.c)(e, t),
              Object.defineProperty(e.prototype, 'id', {
                get: function () {
                  return this._.id
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, 'path', {
                get: function () {
                  return this._.path
                },
                enumerable: !1,
                configurable: !0,
              }),
              Object.defineProperty(e.prototype, 'parent', {
                get: function () {
                  var t = this._.parent
                  return t ? new gc(this.firestore, t) : null
                },
                enumerable: !1,
                configurable: !0,
              }),
              (e.prototype.doc = function (t) {
                try {
                  return new gc(
                    this.firestore,
                    void 0 === t ? Pu(this._) : Pu(this._, t)
                  )
                } catch (t) {
                  throw bc(t, 'doc()', 'CollectionReference.doc()')
                }
              }),
              (e.prototype.add = function (t) {
                var e = this
                return (function (t, e) {
                  var n = Ou(t.firestore, Na),
                    r = Pu(t),
                    i = Wa(t.v_, e)
                  return oc(n, [
                    Bu(
                      Hu(t.firestore),
                      'addDoc',
                      r.S_,
                      i,
                      null !== t.v_,
                      {}
                    ).F_(r.S_, ke.exists(!1)),
                  ]).then(function () {
                    return r
                  })
                })(this._, t).then(function (t) {
                  return new gc(e.firestore, t)
                })
              }),
              (e.prototype.isEqual = function (t) {
                return Lu(this._, t._)
              }),
              (e.prototype.withConverter = function (t) {
                return new e(
                  this.firestore,
                  this._.withConverter(yc.Rd(this.firestore, t))
                )
              }),
              e
            )
          })(Ec)
        function jc(t) {
          return t instanceof q && (t = t._), Ou(t, xu)
        }
        var Sc = (function (t) {
            function e() {
              for (var e = [], n = 0; n < arguments.length; n++)
                e[n] = arguments[n]
              return (
                t.call(
                  this,
                  new (gu.bind.apply(gu, Object(h.g)([void 0], e)))()
                ) || this
              )
            }
            return (
              Object(h.c)(e, t),
              (e.documentId = function () {
                return new e(rt.lt().ot())
              }),
              (e.prototype.isEqual = function (t) {
                return (
                  t instanceof q && (t = t._),
                  t instanceof gu && this._.d_.isEqual(t.d_)
                )
              }),
              e
            )
          })(q),
          Ac = (function (t) {
            function e() {
              return (null !== t && t.apply(this, arguments)) || this
            }
            return (
              Object(h.c)(e, t),
              (e.serverTimestamp = function () {
                var t = new Wu('serverTimestamp')
                return (t._methodName = 'FieldValue.serverTimestamp'), new e(t)
              }),
              (e.delete = function () {
                var t = new Ku('deleteField')
                return (t._methodName = 'FieldValue.delete'), new e(t)
              }),
              (e.arrayUnion = function () {
                for (var t = [], n = 0; n < arguments.length; n++)
                  t[n] = arguments[n]
                var r = function () {
                  for (var t = [], e = 0; e < arguments.length; e++)
                    t[e] = arguments[e]
                  return new Xu('arrayUnion', t)
                }.apply(void 0, t)
                return (r._methodName = 'FieldValue.arrayUnion'), new e(r)
              }),
              (e.arrayRemove = function () {
                for (var t = [], n = 0; n < arguments.length; n++)
                  t[n] = arguments[n]
                var r = function () {
                  for (var t = [], e = 0; e < arguments.length; e++)
                    t[e] = arguments[e]
                  return new Yu('arrayRemove', t)
                }.apply(void 0, t)
                return (r._methodName = 'FieldValue.arrayRemove'), new e(r)
              }),
              (e.increment = function (t) {
                var n = (function (t) {
                  return new Qu('increment', t)
                })(t)
                return (n._methodName = 'FieldValue.increment'), new e(n)
              }),
              (e.prototype.isEqual = function (t) {
                return this._.isEqual(t._)
              }),
              e
            )
          })(q)
        !(function () {
          function t() {
            ;(this.gd = {}),
              (this.Vd = new or()),
              (this.pd = {
                taskState: 'Running',
                totalBytes: 0,
                totalDocuments: 0,
                bytesLoaded: 0,
                documentsLoaded: 0,
              })
          }
          ;(t.prototype.onProgress = function (t, e, n) {
            this.gd = { next: t, error: e, complete: n }
          }),
            (t.prototype.catch = function (t) {
              return this.Vd.promise.catch(t)
            }),
            (t.prototype.then = function (t, e) {
              return this.Vd.promise.then(t, e)
            }),
            (t.prototype.Ul = function (t) {
              this.Ql(t),
                this.gd.complete && this.gd.complete(),
                this.Vd.resolve(t)
            }),
            (t.prototype.Wl = function (t) {
              ;(this.pd.taskState = 'Error'),
                this.gd.next && this.gd.next(this.pd),
                this.gd.error && this.gd.error(t),
                this.Vd.reject(t)
            }),
            (t.prototype.Ql = function (t) {
              ;(this.pd = t), this.gd.next && this.gd.next(t)
            })
        })()
      }.call(this, n(132)))
    },
    334: function (t, e, n) {
      'use strict'
      n.r(e)
      var r,
        o = n(270),
        c = (n(274), n(271), n(289), n(326)),
        h = n(288),
        f = {
          Firestore: c.c,
          GeoPoint: c.l,
          Timestamp: c.r,
          Blob: c.b,
          Transaction: c.d,
          WriteBatch: c.k,
          DocumentReference: c.g,
          DocumentSnapshot: c.e,
          Query: c.q,
          QueryDocumentSnapshot: c.h,
          QuerySnapshot: c.i,
          CollectionReference: c.p,
          FieldPath: c.o,
          FieldValue: c.m,
          setLogLevel: c.a,
          CACHE_SIZE_UNLIMITED: c.j,
        }
      ;(function (t, e) {
        t.INTERNAL.registerComponent(
          new h.a(
            'firestore',
            function (t) {
              return (function (t, e) {
                return new c.c(t, new c.f(t, e), new c.n())
              })(
                t.getProvider('app').getImmediate(),
                t.getProvider('auth-internal')
              )
            },
            'PUBLIC'
          ).setServiceProps(Object.assign({}, f))
        )
      })((r = o.a)),
        r.registerVersion('@firebase/firestore', '2.1.4')
    },
  },
])
