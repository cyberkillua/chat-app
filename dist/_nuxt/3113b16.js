;(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    275: function (e, t, n) {
      var content = n(294)
      'string' == typeof content && (content = [[e.i, content, '']]),
        content.locals && (e.exports = content.locals)
      ;(0, n(77).default)('bd6724bc', content, !0, { sourceMap: !1 })
    },
    291: function (e, t, n) {
      'use strict'
      n.r(t)
      n(59), n(31), n(62), n(27)
      var r = n(4),
        o = {
          data: function () {
            return { userName: '', name: null, showMessage: '', messages: [] }
          },
          mounted: function () {
            var e = this
            return Object(r.a)(
              regeneratorRuntime.mark(function t() {
                var n
                return regeneratorRuntime.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            (n = e.$fire.firestore.collection('newchat')),
                            (t.prev = 1),
                            (t.next = 4),
                            n.orderBy('time').onSnapshot(function (t) {
                              t.docChanges().forEach(function (t) {
                                console.log(t.doc.id, ' => ', t.doc.data()),
                                  e.messages.push({
                                    time: t.doc.data().time,
                                    id: t.doc.id,
                                    text: t.doc.data().text,
                                    username: t.doc.data().username,
                                  })
                              })
                            })
                          )
                        case 4:
                          t.next = 9
                          break
                        case 6:
                          ;(t.prev = 6),
                            (t.t0 = t.catch(1)),
                            console.log(t.t0.message)
                        case 9:
                        case 'end':
                          return t.stop()
                      }
                  },
                  t,
                  null,
                  [[1, 6]]
                )
              })
            )()
          },
          methods: {
            updateUsername: function () {
              ;(this.name = this.userName), (this.userName = '')
            },
            sendMessage: function () {
              var e = this
              return Object(r.a)(
                regeneratorRuntime.mark(function t() {
                  var n
                  return regeneratorRuntime.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (
                              ((n = e.$fire.firestore.collection('newchat')),
                              (t.prev = 1),
                              !e.showMessage)
                            ) {
                              t.next = 5
                              break
                            }
                            return (
                              (t.next = 5),
                              n.add({
                                text: e.showMessage,
                                username: e.name,
                                time: new Date().getTime(),
                              })
                            )
                          case 5:
                            ;(e.showMessage = ''), (t.next = 11)
                            break
                          case 8:
                            ;(t.prev = 8), (t.t0 = t.catch(1)), alert(t.t0)
                          case 11:
                          case 'end':
                            return t.stop()
                        }
                    },
                    t,
                    null,
                    [[1, 8]]
                  )
                })
              )()
            },
          },
        },
        c = (n(293), n(54)),
        d = n(98),
        l = n.n(d),
        m = n(333),
        v = n(284),
        h = n(287),
        f = n(335),
        x = n(331),
        component = Object(c.a)(
          o,
          function () {
            var e = this,
              t = e.$createElement,
              n = e._self._c || t
            return n('v-container', [
              n(
                'div',
                [
                  e.name
                    ? n('div', { staticClass: 'message-body' }, [
                        n('h1', { staticClass: 'mb-4 text-center text-h3' }, [
                          e._v('ChatBox'),
                        ]),
                        e._v(' '),
                        n('h4', { staticClass: 'my-4' }, [
                          e._v('Welcome ' + e._s(e.name) + '!'),
                        ]),
                        e._v(' '),
                        n('div', { staticClass: 'card' }, [
                          n(
                            'div',
                            { staticClass: 'cardbody' },
                            e._l(e.messages, function (t) {
                              return n(
                                'div',
                                {
                                  key: t.time,
                                  staticClass: 'grey lighten-3 my-4 pa-2',
                                },
                                [
                                  n(
                                    'span',
                                    { staticClass: 'mgtext text-uppercase' },
                                    [e._v(e._s(t.username))]
                                  ),
                                  e._v(' '),
                                  n('p', { staticClass: 'message' }, [
                                    e._v(e._s(t.text)),
                                  ]),
                                  e._v(' '),
                                  n(
                                    'p',
                                    { staticClass: 'caption grey--text' },
                                    [
                                      e._v(
                                        '\n              ' +
                                          e._s(
                                            new Date(t.time).toDateString()
                                          ) +
                                          ' ,\n              ' +
                                          e._s(
                                            new Date(t.time).toLocaleTimeString(
                                              'en-US',
                                              {
                                                hour: '2-digit',
                                                minute: '2-digit',
                                              }
                                            )
                                          ) +
                                          '\n            '
                                      ),
                                    ]
                                  ),
                                ]
                              )
                            }),
                            0
                          ),
                        ]),
                        e._v(' '),
                        n(
                          'div',
                          { staticClass: 'inputcard' },
                          [
                            n('v-text-field', {
                              staticClass: 'mt-4',
                              attrs: {
                                outlined: '',
                                type: 'text',
                                placeholder: 'Type...',
                              },
                              on: {
                                keyup: function (t) {
                                  return !t.type.indexOf('key') &&
                                    e._k(t.keyCode, 'enter', 13, t.key, 'Enter')
                                    ? null
                                    : e.sendMessage(t)
                                },
                              },
                              model: {
                                value: e.showMessage,
                                callback: function (t) {
                                  e.showMessage = t
                                },
                                expression: 'showMessage',
                              },
                            }),
                            e._v(' '),
                            n(
                              'v-btn',
                              {
                                staticClass: 'mx-4',
                                attrs: { depressed: '', color: 'primary' },
                                on: { click: e.sendMessage },
                              },
                              [e._v('Send')]
                            ),
                          ],
                          1
                        ),
                      ])
                    : n(
                        'v-card',
                        { attrs: { id: 'logincard' } },
                        [
                          n(
                            'p',
                            { staticClass: 'text-h3 text-center py-3 body-1' },
                            [e._v('Join Chat')]
                          ),
                          e._v(' '),
                          n(
                            'label',
                            { staticClass: 'pl-4', attrs: { for: 'username' } },
                            [e._v('Enter a Username')]
                          ),
                          e._v(' '),
                          n('br'),
                          e._v(' '),
                          n(
                            'v-card-actions',
                            [
                              n('v-text-field', {
                                staticClass: 'mt-4',
                                attrs: {
                                  type: 'text',
                                  placeholder: 'Username',
                                  outlined: '',
                                },
                                on: {
                                  keyup: function (t) {
                                    return !t.type.indexOf('key') &&
                                      e._k(
                                        t.keyCode,
                                        'enter',
                                        13,
                                        t.key,
                                        'Enter'
                                      )
                                      ? null
                                      : e.updateUsername(t)
                                  },
                                },
                                model: {
                                  value: e.userName,
                                  callback: function (t) {
                                    e.userName = t
                                  },
                                  expression: 'userName',
                                },
                              }),
                            ],
                            1
                          ),
                          e._v(' '),
                          n(
                            'v-card-actions',
                            { staticClass: 'd-flex justify-center' },
                            [
                              n(
                                'v-btn',
                                {
                                  staticClass: 'button',
                                  attrs: { depressed: '', color: 'primary' },
                                  on: { click: e.updateUsername },
                                },
                                [e._v('Join Chat')]
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                ],
                1
              ),
            ])
          },
          [],
          !1,
          null,
          '590374de',
          null
        )
      t.default = component.exports
      l()(component, {
        VBtn: m.a,
        VCard: v.a,
        VCardActions: h.a,
        VContainer: f.a,
        VTextField: x.a,
      })
    },
    293: function (e, t, n) {
      'use strict'
      n(275)
    },
    294: function (e, t, n) {
      ;(t = n(76)(!1)).push([
        e.i,
        '#logincard[data-v-590374de]{width:40%;margin:100px auto auto}.message-body[data-v-590374de]{margin:auto}.mgtext[data-v-590374de]{color:#00c3ff;font-weight:bolder}.message-text[data-v-590374de]{min-width:10%;border-radius:4px}.card[data-v-590374de]{width:100%;min-height:75vh;margin:auto}.cardbody[data-v-590374de]{min-height:50vh;overflow-x:scroll}.inputcard[data-v-590374de]{margin:auto;width:90%;display:flex;justify-content:space-between;align-items:center}@media screen and (max-width:768px){#logincard[data-v-590374de]{width:100%}}',
        '',
      ]),
        (e.exports = t)
    },
    332: function (e, t, n) {
      'use strict'
      n.r(t)
      var r = { components: { Chatbox: n(291).default } },
        o = n(54),
        component = Object(o.a)(
          r,
          function () {
            var e = this.$createElement
            return (this._self._c || e)('Chatbox')
          },
          [],
          !1,
          null,
          null,
          null
        )
      t.default = component.exports
      installComponents(component, { Chatbox: n(291).default })
    },
  },
])
