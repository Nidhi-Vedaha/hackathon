(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
  [2],
  {
    "+Nxv": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return a;
      });
      var r = n("q1tI");
      const a = Object(r.createContext)(void 0);
    },
    "/9aa": function (e, t, n) {
      var r = n("NykK"),
        a = n("ExA7");
      e.exports = function (e) {
        return "symbol" == typeof e || (a(e) && "[object Symbol]" == r(e));
      };
    },
    "9wkL": function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.colorFactory = void 0);
      const r = n("GyRE"),
        a = n("rhws"),
        i = n("snHk");
      t.colorFactory = function (e, t, n = i.config) {
        return Object.assign(
          {},
          ...Object.entries(e).map(([e, i]) => {
            if ("string" !== typeof i) return null;
            const s = a.hexToHsluv(i),
              o = n[e] || [];
            return Object.assign(
              {},
              o.reduce((e, n) => {
                var { name: i } = n,
                  o = r.__rest(n, ["name"]);
                const {
                    hue: c = s[0],
                    saturation: u = s[1],
                    lightness: l = s[2],
                    alpha: d = 1,
                  } = o[t],
                  h = (e, t) => ("number" === typeof e ? e : e(t)),
                  [m, f, g] = a
                    .hsluvToRgb([h(c, s[0]), h(u, s[1]), h(l, s[2])])
                    .map((e) => Math.round(255 * e));
                return Object.assign(Object.assign({}, e), {
                  [i]: `rgba(${m}, ${f}, ${g}, ${d})`,
                });
              }, {})
            );
          })
        );
      };
    },
    AP2z: function (e, t, n) {
      var r = n("nmnc"),
        a = Object.prototype,
        i = a.hasOwnProperty,
        s = a.toString,
        o = r ? r.toStringTag : void 0;
      e.exports = function (e) {
        var t = i.call(e, o),
          n = e[o];
        try {
          e[o] = void 0;
          var r = !0;
        } catch (c) {}
        var a = s.call(e);
        return r && (t ? (e[o] = n) : delete e[o]), a;
      };
    },
    BLvk: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return a;
      });
      var r = n("q1tI");
      const a = Object(r.createContext)(void 0);
    },
    EjI8: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return o;
      }),
        n.d(t, "b", function () {
          return i;
        }),
        n.d(t, "c", function () {
          return a;
        }),
        n.d(t, "d", function () {
          return c;
        }),
        n.d(t, "e", function () {
          return r;
        }),
        n.d(t, "f", function () {
          return s;
        });
      const r = {
          props: { "data-polaris-scrollable": !0 },
          selector: "[data-polaris-scrollable]",
        },
        a = {
          props: { "data-polaris-overlay": !0 },
          selector: "[data-polaris-overlay]",
        },
        i = {
          props: { "data-polaris-layer": !0 },
          selector: "[data-polaris-layer]",
        },
        s = {
          props: { "data-polaris-unstyled": !0 },
          selector: "[data-polaris-unstyled]",
        },
        o = {
          props: { "data-polaris-top-bar": !0 },
          selector: "[data-polaris-top-bar]",
        },
        c = { props: ["data-portal-id"], selector: "[data-portal-id]" };
    },
    ExA7: function (e, t) {
      e.exports = function (e) {
        return null != e && "object" == typeof e;
      };
    },
    FI7o: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return r;
      }),
        n.d(t, "b", function () {
          return a;
        });
      class r {
        static get zero() {
          return new r();
        }
        constructor({
          top: e = 0,
          left: t = 0,
          width: n = 0,
          height: r = 0,
        } = {}) {
          (this.top = void 0),
            (this.left = void 0),
            (this.width = void 0),
            (this.height = void 0),
            (this.top = e),
            (this.left = t),
            (this.width = n),
            (this.height = r);
        }
        get center() {
          return {
            x: this.left + this.width / 2,
            y: this.top + this.height / 2,
          };
        }
      }
      function a(e) {
        if (!(e instanceof Element))
          return new r({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        const t = e.getBoundingClientRect();
        return new r({
          top: t.top,
          left: t.left,
          width: t.width,
          height: t.height,
        });
      }
    },
    GZNA: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return a;
      });
      var r = n("q1tI");
      const a = Object(r.createContext)(void 0);
    },
    GoyQ: function (e, t) {
      e.exports = function (e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t);
      };
    },
    GyRE: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "__extends", function () {
          return a;
        }),
        n.d(t, "__assign", function () {
          return i;
        }),
        n.d(t, "__rest", function () {
          return s;
        }),
        n.d(t, "__decorate", function () {
          return o;
        }),
        n.d(t, "__param", function () {
          return c;
        }),
        n.d(t, "__metadata", function () {
          return u;
        }),
        n.d(t, "__awaiter", function () {
          return l;
        }),
        n.d(t, "__generator", function () {
          return d;
        }),
        n.d(t, "__createBinding", function () {
          return h;
        }),
        n.d(t, "__exportStar", function () {
          return m;
        }),
        n.d(t, "__values", function () {
          return f;
        }),
        n.d(t, "__read", function () {
          return g;
        }),
        n.d(t, "__spread", function () {
          return p;
        }),
        n.d(t, "__spreadArrays", function () {
          return v;
        }),
        n.d(t, "__await", function () {
          return b;
        }),
        n.d(t, "__asyncGenerator", function () {
          return y;
        }),
        n.d(t, "__asyncDelegator", function () {
          return F;
        }),
        n.d(t, "__asyncValues", function () {
          return k;
        }),
        n.d(t, "__makeTemplateObject", function () {
          return x;
        }),
        n.d(t, "__importStar", function () {
          return S;
        }),
        n.d(t, "__importDefault", function () {
          return H;
        }),
        n.d(t, "__classPrivateFieldGet", function () {
          return N;
        }),
        n.d(t, "__classPrivateFieldSet", function () {
          return w;
        });
      var r = function (e, t) {
        return (r =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (e, t) {
              e.__proto__ = t;
            }) ||
          function (e, t) {
            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
          })(e, t);
      };
      function a(e, t) {
        function n() {
          this.constructor = e;
        }
        r(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((n.prototype = t.prototype), new n()));
      }
      var i = function () {
        return (i =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var a in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
            return e;
          }).apply(this, arguments);
      };
      function s(e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            t.indexOf(r) < 0 &&
            (n[r] = e[r]);
        if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
          var a = 0;
          for (r = Object.getOwnPropertySymbols(e); a < r.length; a++)
            t.indexOf(r[a]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
              (n[r[a]] = e[r[a]]);
        }
        return n;
      }
      function o(e, t, n, r) {
        var a,
          i = arguments.length,
          s =
            i < 3
              ? t
              : null === r
              ? (r = Object.getOwnPropertyDescriptor(t, n))
              : r;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          s = Reflect.decorate(e, t, n, r);
        else
          for (var o = e.length - 1; o >= 0; o--)
            (a = e[o]) &&
              (s = (i < 3 ? a(s) : i > 3 ? a(t, n, s) : a(t, n)) || s);
        return i > 3 && s && Object.defineProperty(t, n, s), s;
      }
      function c(e, t) {
        return function (n, r) {
          t(n, r, e);
        };
      }
      function u(e, t) {
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.metadata
        )
          return Reflect.metadata(e, t);
      }
      function l(e, t, n, r) {
        return new (n || (n = Promise))(function (a, i) {
          function s(e) {
            try {
              c(r.next(e));
            } catch (t) {
              i(t);
            }
          }
          function o(e) {
            try {
              c(r.throw(e));
            } catch (t) {
              i(t);
            }
          }
          function c(e) {
            var t;
            e.done
              ? a(e.value)
              : ((t = e.value),
                t instanceof n
                  ? t
                  : new n(function (e) {
                      e(t);
                    })).then(s, o);
          }
          c((r = r.apply(e, t || [])).next());
        });
      }
      function d(e, t) {
        var n,
          r,
          a,
          i,
          s = {
            label: 0,
            sent: function () {
              if (1 & a[0]) throw a[1];
              return a[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (i = { next: o(0), throw: o(1), return: o(2) }),
          "function" === typeof Symbol &&
            (i[Symbol.iterator] = function () {
              return this;
            }),
          i
        );
        function o(i) {
          return function (o) {
            return (function (i) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; s; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (a =
                        2 & i[0]
                          ? r.return
                          : i[0]
                          ? r.throw || ((a = r.return) && a.call(r), 0)
                          : r.next) &&
                      !(a = a.call(r, i[1])).done)
                  )
                    return a;
                  switch (((r = 0), a && (i = [2 & i[0], a.value]), i[0])) {
                    case 0:
                    case 1:
                      a = i;
                      break;
                    case 4:
                      return s.label++, { value: i[1], done: !1 };
                    case 5:
                      s.label++, (r = i[1]), (i = [0]);
                      continue;
                    case 7:
                      (i = s.ops.pop()), s.trys.pop();
                      continue;
                    default:
                      if (
                        !(a = (a = s.trys).length > 0 && a[a.length - 1]) &&
                        (6 === i[0] || 2 === i[0])
                      ) {
                        s = 0;
                        continue;
                      }
                      if (3 === i[0] && (!a || (i[1] > a[0] && i[1] < a[3]))) {
                        s.label = i[1];
                        break;
                      }
                      if (6 === i[0] && s.label < a[1]) {
                        (s.label = a[1]), (a = i);
                        break;
                      }
                      if (a && s.label < a[2]) {
                        (s.label = a[2]), s.ops.push(i);
                        break;
                      }
                      a[2] && s.ops.pop(), s.trys.pop();
                      continue;
                  }
                  i = t.call(e, s);
                } catch (o) {
                  (i = [6, o]), (r = 0);
                } finally {
                  n = a = 0;
                }
              if (5 & i[0]) throw i[1];
              return { value: i[0] ? i[1] : void 0, done: !0 };
            })([i, o]);
          };
        }
      }
      function h(e, t, n, r) {
        void 0 === r && (r = n), (e[r] = t[n]);
      }
      function m(e, t) {
        for (var n in e)
          "default" === n || t.hasOwnProperty(n) || (t[n] = e[n]);
      }
      function f(e) {
        var t = "function" === typeof Symbol && Symbol.iterator,
          n = t && e[t],
          r = 0;
        if (n) return n.call(e);
        if (e && "number" === typeof e.length)
          return {
            next: function () {
              return (
                e && r >= e.length && (e = void 0),
                { value: e && e[r++], done: !e }
              );
            },
          };
        throw new TypeError(
          t ? "Object is not iterable." : "Symbol.iterator is not defined."
        );
      }
      function g(e, t) {
        var n = "function" === typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r,
          a,
          i = n.call(e),
          s = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; )
            s.push(r.value);
        } catch (o) {
          a = { error: o };
        } finally {
          try {
            r && !r.done && (n = i.return) && n.call(i);
          } finally {
            if (a) throw a.error;
          }
        }
        return s;
      }
      function p() {
        for (var e = [], t = 0; t < arguments.length; t++)
          e = e.concat(g(arguments[t]));
        return e;
      }
      function v() {
        for (var e = 0, t = 0, n = arguments.length; t < n; t++)
          e += arguments[t].length;
        var r = Array(e),
          a = 0;
        for (t = 0; t < n; t++)
          for (var i = arguments[t], s = 0, o = i.length; s < o; s++, a++)
            r[a] = i[s];
        return r;
      }
      function b(e) {
        return this instanceof b ? ((this.v = e), this) : new b(e);
      }
      function y(e, t, n) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var r,
          a = n.apply(e, t || []),
          i = [];
        return (
          (r = {}),
          s("next"),
          s("throw"),
          s("return"),
          (r[Symbol.asyncIterator] = function () {
            return this;
          }),
          r
        );
        function s(e) {
          a[e] &&
            (r[e] = function (t) {
              return new Promise(function (n, r) {
                i.push([e, t, n, r]) > 1 || o(e, t);
              });
            });
        }
        function o(e, t) {
          try {
            (n = a[e](t)).value instanceof b
              ? Promise.resolve(n.value.v).then(c, u)
              : l(i[0][2], n);
          } catch (r) {
            l(i[0][3], r);
          }
          var n;
        }
        function c(e) {
          o("next", e);
        }
        function u(e) {
          o("throw", e);
        }
        function l(e, t) {
          e(t), i.shift(), i.length && o(i[0][0], i[0][1]);
        }
      }
      function F(e) {
        var t, n;
        return (
          (t = {}),
          r("next"),
          r("throw", function (e) {
            throw e;
          }),
          r("return"),
          (t[Symbol.iterator] = function () {
            return this;
          }),
          t
        );
        function r(r, a) {
          t[r] = e[r]
            ? function (t) {
                return (n = !n)
                  ? { value: b(e[r](t)), done: "return" === r }
                  : a
                  ? a(t)
                  : t;
              }
            : a;
        }
      }
      function k(e) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var t,
          n = e[Symbol.asyncIterator];
        return n
          ? n.call(e)
          : ((e = f(e)),
            (t = {}),
            r("next"),
            r("throw"),
            r("return"),
            (t[Symbol.asyncIterator] = function () {
              return this;
            }),
            t);
        function r(n) {
          t[n] =
            e[n] &&
            function (t) {
              return new Promise(function (r, a) {
                (function (e, t, n, r) {
                  Promise.resolve(r).then(function (t) {
                    e({ value: t, done: n });
                  }, t);
                })(r, a, (t = e[n](t)).done, t.value);
              });
            };
        }
      }
      function x(e, t) {
        return (
          Object.defineProperty
            ? Object.defineProperty(e, "raw", { value: t })
            : (e.raw = t),
          e
        );
      }
      function S(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
        return (t.default = e), t;
      }
      function H(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function N(e, t) {
        if (!t.has(e))
          throw new TypeError("attempted to get private field on non-instance");
        return t.get(e);
      }
      function w(e, t, n) {
        if (!t.has(e))
          throw new TypeError("attempted to set private field on non-instance");
        return t.set(e, n), n;
      }
    },
    JX7q: function (e, t, n) {
      "use strict";
      function r(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      n.d(t, "a", function () {
        return r;
      });
    },
    Jql3: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return i;
      });
      var r = n("q1tI"),
        a = n("Vcon");
      class i extends r.PureComponent {
        componentDidMount() {
          this.attachListener();
        }
        componentDidUpdate(e) {
          let t = Object(a.b)(e, ["passive"]);
          this.detachListener(t), this.attachListener();
        }
        componentWillUnmount() {
          this.detachListener();
        }
        render() {
          return null;
        }
        attachListener() {
          const { event: e, handler: t, capture: n, passive: r } = this.props;
          window.addEventListener(e, t, { capture: n, passive: r });
        }
        detachListener(e) {
          const { event: t, handler: n, capture: r } = e || this.props;
          window.removeEventListener(t, n, r);
        }
      }
    },
    KB7n: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.mergeConfigs = t.colorFactory = void 0);
      var r = n("9wkL");
      Object.defineProperty(t, "colorFactory", {
        enumerable: !0,
        get: function () {
          return r.colorFactory;
        },
      });
      var a = n("LpF5");
      Object.defineProperty(t, "mergeConfigs", {
        enumerable: !0,
        get: function () {
          return a.mergeConfigs;
        },
      });
    },
    KfNM: function (e, t) {
      var n = Object.prototype.toString;
      e.exports = function (e) {
        return n.call(e);
      };
    },
    Kz5y: function (e, t, n) {
      var r = n("WFqU"),
        a = "object" == typeof self && self && self.Object === Object && self,
        i = r || a || Function("return this")();
      e.exports = i;
    },
    LpF5: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.mergeConfigs = t.saturationAdjustmentFn = t.hueRotationFn = void 0),
        (t.hueRotationFn = function (e) {
          return (t) => (360 + t + e) % 360;
        }),
        (t.saturationAdjustmentFn = function (e) {
          return (t) => Math.min(Math.max(t + e, 0), 100);
        }),
        (t.mergeConfigs = function (e, t) {
          return Object.entries(e).reduce((e, [n, r]) => {
            const a = t[n],
              i = [...r];
            return (
              null != a &&
                a.forEach((e) => {
                  const { name: t } = e,
                    n = i.findIndex((e) => e.name === t);
                  -1 === n ? i.push(e) : i.splice(n, 1, e);
                }),
              Object.assign(Object.assign({}, e), { [n]: i })
            );
          }, {});
        });
    },
    NykK: function (e, t, n) {
      var r = n("nmnc"),
        a = n("AP2z"),
        i = n("KfNM"),
        s = r ? r.toStringTag : void 0;
      e.exports = function (e) {
        return null == e
          ? void 0 === e
            ? "[object Undefined]"
            : "[object Null]"
          : s && s in Object(e)
          ? a(e)
          : i(e);
      };
    },
    "PlF/": function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return a;
      });
      var r = n("q1tI");
      const a = Object(r.createContext)(void 0);
    },
    QIyF: function (e, t, n) {
      var r = n("Kz5y");
      e.exports = function () {
        return r.Date.now();
      };
    },
    SB2B: function (e) {
      e.exports = JSON.parse(
        '{"surface":"#111213","onSurface":"#111213","interactive":"#2e72d2","secondary":"#111213","primary":"#008060","critical":"#d82c0d","warning":"#ffc453","highlight":"#5bcdda","success":"#008060","decorative":"#ffc96b"}'
      );
    },
    TO8r: function (e, t) {
      var n = /\s/;
      e.exports = function (e) {
        for (var t = e.length; t-- && n.test(e.charAt(t)); );
        return t;
      };
    },
    Vcon: function (e, t, n) {
      "use strict";
      function r(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function a(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? a(Object(n), !0).forEach(function (t) {
                r(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : a(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function s(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++)
              (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      n.d(t, "a", function () {
        return i;
      }),
        n.d(t, "b", function () {
          return s;
        });
    },
    WFqU: function (e, t, n) {
      (function (t) {
        var n = "object" == typeof t && t && t.Object === Object && t;
        e.exports = n;
      }.call(this, n("yLpj")));
    },
    YcWQ: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return r;
      }),
        n.d(t, "b", function () {
          return a;
        }),
        n.d(t, "c", function () {
          return i;
        });
      const r = 200,
        a = 300,
        i = "20px";
    },
    jXQH: function (e, t, n) {
      var r = n("TO8r"),
        a = /^\s+/;
      e.exports = function (e) {
        return e ? e.slice(0, r(e) + 1).replace(a, "") : e;
      };
    },
    kHNa: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return a;
      });
      var r = n("q1tI");
      const a = Object(r.createContext)(void 0);
    },
    ni8s: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return a;
      });
      var r = n("q1tI");
      const a = Object(r.createContext)(void 0);
    },
    nmnc: function (e, t, n) {
      var r = n("Kz5y").Symbol;
      e.exports = r;
    },
    p1Fn: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return l;
      });
      var r = n("sEfC"),
        a = n.n(r),
        i = n("srL5"),
        s = n("YcWQ"),
        o = n("EjI8"),
        c = n("FI7o");
      const u = 1e3 / 60;
      class l {
        constructor(e) {
          (this.stickyItems = []),
            (this.stuckItems = []),
            (this.container = null),
            (this.topBarOffset = 0),
            (this.handleResize = a()(
              () => {
                this.manageStickyItems();
              },
              u,
              { leading: !0, trailing: !0, maxWait: u }
            )),
            (this.handleScroll = a()(
              () => {
                this.manageStickyItems();
              },
              u,
              { leading: !0, trailing: !0, maxWait: u }
            )),
            e && this.setContainer(e);
        }
        registerStickyItem(e) {
          this.stickyItems.push(e);
        }
        unregisterStickyItem(e) {
          const t = this.stickyItems.findIndex(({ stickyNode: t }) => e === t);
          this.stickyItems.splice(t, 1);
        }
        setContainer(e) {
          (this.container = e),
            d(e) && this.setTopBarOffset(e),
            this.container.addEventListener("scroll", this.handleScroll),
            window.addEventListener("resize", this.handleResize),
            this.manageStickyItems();
        }
        removeScrollListener() {
          this.container &&
            (this.container.removeEventListener("scroll", this.handleScroll),
            window.removeEventListener("resize", this.handleResize));
        }
        manageStickyItems() {
          if (this.stickyItems.length <= 0) return;
          const e = this.container
            ? d((t = this.container))
              ? document.body.scrollTop || document.documentElement.scrollTop
              : t.scrollTop
            : 0;
          var t;
          const n = Object(c.b)(this.container).top + this.topBarOffset;
          this.stickyItems.forEach((t) => {
            const { handlePositioning: r } = t,
              {
                sticky: a,
                top: i,
                left: s,
                width: o,
              } = this.evaluateStickyItem(t, e, n);
            this.updateStuckItems(t, a), r(a, i, s, o);
          });
        }
        evaluateStickyItem(e, t, n) {
          const {
            stickyNode: r,
            placeHolderNode: a,
            boundingElement: o,
            offset: c,
            disableWhenStacked: u,
          } = e;
          if (u && Object(i.b)().matches)
            return { sticky: !1, top: 0, left: 0, width: "auto" };
          const l = c
              ? this.getOffset(r) + parseInt(s.c, 10)
              : this.getOffset(r),
            d = t + l,
            h = a.getBoundingClientRect().top - n + t,
            m = n + l,
            f = a.getBoundingClientRect().width,
            g = a.getBoundingClientRect().left;
          let p;
          if (null == o) p = d >= h;
          else {
            const e = r.getBoundingClientRect().height,
              a = o.getBoundingClientRect().bottom - e + t - n;
            p = d >= h && d < a;
          }
          return { sticky: p, top: m, left: g, width: f };
        }
        updateStuckItems(e, t) {
          const { stickyNode: n } = e;
          t && !this.isNodeStuck(n)
            ? this.addStuckItem(e)
            : !t && this.isNodeStuck(n) && this.removeStuckItem(e);
        }
        addStuckItem(e) {
          this.stuckItems.push(e);
        }
        removeStuckItem(e) {
          const { stickyNode: t } = e,
            n = this.stuckItems.findIndex(({ stickyNode: e }) => t === e);
          this.stuckItems.splice(n, 1);
        }
        getOffset(e) {
          if (0 === this.stuckItems.length) return 0;
          let t = 0,
            n = 0;
          const r = this.stuckItems.length,
            a = Object(c.b)(e);
          for (; n < r; ) {
            const r = this.stuckItems[n].stickyNode;
            if (r === e) break;
            h(a, Object(c.b)(r)) || (t += Object(c.b)(r).height);
            n++;
          }
          return t;
        }
        isNodeStuck(e) {
          return this.stuckItems.findIndex(({ stickyNode: t }) => e === t) >= 0;
        }
        setTopBarOffset(e) {
          const t = e.querySelector(`:not(${o.e.selector}) ${o.a.selector}`);
          this.topBarOffset = t ? t.clientHeight : 0;
        }
      }
      function d(e) {
        return e === document;
      }
      function h(e, t) {
        const n = e.left,
          r = e.left + e.width,
          a = t.left;
        return t.left + t.width < n || r < a;
      }
    },
    qugr: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return a;
      });
      var r = n("q1tI");
      const a = Object(r.createContext)(void 0);
    },
    rCox: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return a;
      });
      var r = n("q1tI");
      const a = Object(r.createContext)(void 0);
    },
    rhws: function (e, t) {
      var n = n || {};
      (n.Geometry = function () {}),
        (n.Geometry.intersectLineLine = function (e, t) {
          var n = (e.intercept - t.intercept) / (t.slope - e.slope);
          return { x: n, y: e.slope * n + e.intercept };
        }),
        (n.Geometry.distanceFromOrigin = function (e) {
          return Math.sqrt(Math.pow(e.x, 2) + Math.pow(e.y, 2));
        }),
        (n.Geometry.distanceLineFromOrigin = function (e) {
          return Math.abs(e.intercept) / Math.sqrt(Math.pow(e.slope, 2) + 1);
        }),
        (n.Geometry.perpendicularThroughPoint = function (e, t) {
          var n = -1 / e.slope;
          return { slope: n, intercept: t.y - n * t.x };
        }),
        (n.Geometry.angleFromOrigin = function (e) {
          return Math.atan2(e.y, e.x);
        }),
        (n.Geometry.normalizeAngle = function (e) {
          var t = 2 * Math.PI;
          return ((e % t) + t) % t;
        }),
        (n.Geometry.lengthOfRayUntilIntersect = function (e, t) {
          return t.intercept / (Math.sin(e) - t.slope * Math.cos(e));
        }),
        (n.Hsluv = function () {}),
        (n.Hsluv.getBounds = function (e) {
          for (
            var t = [],
              r = Math.pow(e + 16, 3) / 1560896,
              a = r > n.Hsluv.epsilon ? r : e / n.Hsluv.kappa,
              i = 0;
            i < 3;

          )
            for (
              var s = i++,
                o = n.Hsluv.m[s][0],
                c = n.Hsluv.m[s][1],
                u = n.Hsluv.m[s][2],
                l = 0;
              l < 2;

            ) {
              var d = l++,
                h = (284517 * o - 94839 * u) * a,
                m =
                  (838422 * u + 769860 * c + 731718 * o) * e * a -
                  769860 * d * e,
                f = (632260 * u - 126452 * c) * a + 126452 * d;
              t.push({ slope: h / f, intercept: m / f });
            }
          return t;
        }),
        (n.Hsluv.maxSafeChromaForL = function (e) {
          for (var t = n.Hsluv.getBounds(e), r = 1 / 0, a = 0; a < t.length; ) {
            var i = t[a];
            ++a;
            var s = n.Geometry.distanceLineFromOrigin(i);
            r = Math.min(r, s);
          }
          return r;
        }),
        (n.Hsluv.maxChromaForLH = function (e, t) {
          for (
            var r = (t / 360) * Math.PI * 2,
              a = n.Hsluv.getBounds(e),
              i = 1 / 0,
              s = 0;
            s < a.length;

          ) {
            var o = a[s];
            ++s;
            var c = n.Geometry.lengthOfRayUntilIntersect(r, o);
            c >= 0 && (i = Math.min(i, c));
          }
          return i;
        }),
        (n.Hsluv.dotProduct = function (e, t) {
          for (var n = 0, r = 0, a = e.length; r < a; ) {
            var i = r++;
            n += e[i] * t[i];
          }
          return n;
        }),
        (n.Hsluv.fromLinear = function (e) {
          return e <= 0.0031308
            ? 12.92 * e
            : 1.055 * Math.pow(e, 0.4166666666666667) - 0.055;
        }),
        (n.Hsluv.toLinear = function (e) {
          return e > 0.04045 ? Math.pow((e + 0.055) / 1.055, 2.4) : e / 12.92;
        }),
        (n.Hsluv.xyzToRgb = function (e) {
          return [
            n.Hsluv.fromLinear(n.Hsluv.dotProduct(n.Hsluv.m[0], e)),
            n.Hsluv.fromLinear(n.Hsluv.dotProduct(n.Hsluv.m[1], e)),
            n.Hsluv.fromLinear(n.Hsluv.dotProduct(n.Hsluv.m[2], e)),
          ];
        }),
        (n.Hsluv.rgbToXyz = function (e) {
          var t = [
            n.Hsluv.toLinear(e[0]),
            n.Hsluv.toLinear(e[1]),
            n.Hsluv.toLinear(e[2]),
          ];
          return [
            n.Hsluv.dotProduct(n.Hsluv.minv[0], t),
            n.Hsluv.dotProduct(n.Hsluv.minv[1], t),
            n.Hsluv.dotProduct(n.Hsluv.minv[2], t),
          ];
        }),
        (n.Hsluv.yToL = function (e) {
          return e <= n.Hsluv.epsilon
            ? (e / n.Hsluv.refY) * n.Hsluv.kappa
            : 116 * Math.pow(e / n.Hsluv.refY, 0.3333333333333333) - 16;
        }),
        (n.Hsluv.lToY = function (e) {
          return e <= 8
            ? (n.Hsluv.refY * e) / n.Hsluv.kappa
            : n.Hsluv.refY * Math.pow((e + 16) / 116, 3);
        }),
        (n.Hsluv.xyzToLuv = function (e) {
          var t = e[0],
            r = e[1],
            a = t + 15 * r + 3 * e[2],
            i = 4 * t,
            s = 9 * r;
          0 != a ? ((i /= a), (s /= a)) : ((i = NaN), (s = NaN));
          var o = n.Hsluv.yToL(r);
          return 0 == o
            ? [0, 0, 0]
            : [o, 13 * o * (i - n.Hsluv.refU), 13 * o * (s - n.Hsluv.refV)];
        }),
        (n.Hsluv.luvToXyz = function (e) {
          var t = e[0],
            r = e[1],
            a = e[2];
          if (0 == t) return [0, 0, 0];
          var i = r / (13 * t) + n.Hsluv.refU,
            s = a / (13 * t) + n.Hsluv.refV,
            o = n.Hsluv.lToY(t),
            c = 0 - (9 * o * i) / ((i - 4) * s - i * s);
          return [c, o, (9 * o - 15 * s * o - s * c) / (3 * s)];
        }),
        (n.Hsluv.luvToLch = function (e) {
          var t,
            n = e[0],
            r = e[1],
            a = e[2],
            i = Math.sqrt(r * r + a * a);
          i < 1e-8
            ? (t = 0)
            : (t = (180 * Math.atan2(a, r)) / Math.PI) < 0 && (t = 360 + t);
          return [n, i, t];
        }),
        (n.Hsluv.lchToLuv = function (e) {
          var t = e[0],
            n = e[1],
            r = (e[2] / 360) * 2 * Math.PI;
          return [t, Math.cos(r) * n, Math.sin(r) * n];
        }),
        (n.Hsluv.hsluvToLch = function (e) {
          var t = e[0],
            r = e[1],
            a = e[2];
          return a > 99.9999999
            ? [100, 0, t]
            : a < 1e-8
            ? [0, 0, t]
            : [a, (n.Hsluv.maxChromaForLH(a, t) / 100) * r, t];
        }),
        (n.Hsluv.lchToHsluv = function (e) {
          var t = e[0],
            r = e[1],
            a = e[2];
          return t > 99.9999999
            ? [a, 0, 100]
            : t < 1e-8
            ? [a, 0, 0]
            : [a, (r / n.Hsluv.maxChromaForLH(t, a)) * 100, t];
        }),
        (n.Hsluv.hpluvToLch = function (e) {
          var t = e[0],
            r = e[1],
            a = e[2];
          return a > 99.9999999
            ? [100, 0, t]
            : a < 1e-8
            ? [0, 0, t]
            : [a, (n.Hsluv.maxSafeChromaForL(a) / 100) * r, t];
        }),
        (n.Hsluv.lchToHpluv = function (e) {
          var t = e[0],
            r = e[1],
            a = e[2];
          return t > 99.9999999
            ? [a, 0, 100]
            : t < 1e-8
            ? [a, 0, 0]
            : [a, (r / n.Hsluv.maxSafeChromaForL(t)) * 100, t];
        }),
        (n.Hsluv.rgbToHex = function (e) {
          for (var t = "#", r = 0; r < 3; ) {
            var a = e[r++],
              i = Math.round(255 * a),
              s = i % 16,
              o = ((i - s) / 16) | 0;
            t += n.Hsluv.hexChars.charAt(o) + n.Hsluv.hexChars.charAt(s);
          }
          return t;
        }),
        (n.Hsluv.hexToRgb = function (e) {
          e = e.toLowerCase();
          for (var t = [], r = 0; r < 3; ) {
            var a = r++,
              i =
                16 * n.Hsluv.hexChars.indexOf(e.charAt(2 * a + 1)) +
                n.Hsluv.hexChars.indexOf(e.charAt(2 * a + 2));
            t.push(i / 255);
          }
          return t;
        }),
        (n.Hsluv.lchToRgb = function (e) {
          return n.Hsluv.xyzToRgb(n.Hsluv.luvToXyz(n.Hsluv.lchToLuv(e)));
        }),
        (n.Hsluv.rgbToLch = function (e) {
          return n.Hsluv.luvToLch(n.Hsluv.xyzToLuv(n.Hsluv.rgbToXyz(e)));
        }),
        (n.Hsluv.hsluvToRgb = function (e) {
          return n.Hsluv.lchToRgb(n.Hsluv.hsluvToLch(e));
        }),
        (n.Hsluv.rgbToHsluv = function (e) {
          return n.Hsluv.lchToHsluv(n.Hsluv.rgbToLch(e));
        }),
        (n.Hsluv.hpluvToRgb = function (e) {
          return n.Hsluv.lchToRgb(n.Hsluv.hpluvToLch(e));
        }),
        (n.Hsluv.rgbToHpluv = function (e) {
          return n.Hsluv.lchToHpluv(n.Hsluv.rgbToLch(e));
        }),
        (n.Hsluv.hsluvToHex = function (e) {
          return n.Hsluv.rgbToHex(n.Hsluv.hsluvToRgb(e));
        }),
        (n.Hsluv.hpluvToHex = function (e) {
          return n.Hsluv.rgbToHex(n.Hsluv.hpluvToRgb(e));
        }),
        (n.Hsluv.hexToHsluv = function (e) {
          return n.Hsluv.rgbToHsluv(n.Hsluv.hexToRgb(e));
        }),
        (n.Hsluv.hexToHpluv = function (e) {
          return n.Hsluv.rgbToHpluv(n.Hsluv.hexToRgb(e));
        }),
        (n.Hsluv.m = [
          [3.240969941904521, -1.537383177570093, -0.498610760293],
          [-0.96924363628087, 1.87596750150772, 0.041555057407175],
          [0.055630079696993, -0.20397695888897, 1.056971514242878],
        ]),
        (n.Hsluv.minv = [
          [0.41239079926595, 0.35758433938387, 0.18048078840183],
          [0.21263900587151, 0.71516867876775, 0.072192315360733],
          [0.019330818715591, 0.11919477979462, 0.95053215224966],
        ]),
        (n.Hsluv.refY = 1),
        (n.Hsluv.refU = 0.19783000664283),
        (n.Hsluv.refV = 0.46831999493879),
        (n.Hsluv.kappa = 903.2962962),
        (n.Hsluv.epsilon = 0.0088564516),
        (n.Hsluv.hexChars = "0123456789abcdef");
      var r = {
        hsluvToRgb: n.Hsluv.hsluvToRgb,
        rgbToHsluv: n.Hsluv.rgbToHsluv,
        hpluvToRgb: n.Hsluv.hpluvToRgb,
        rgbToHpluv: n.Hsluv.rgbToHpluv,
        hsluvToHex: n.Hsluv.hsluvToHex,
        hexToHsluv: n.Hsluv.hexToHsluv,
        hpluvToHex: n.Hsluv.hpluvToHex,
        hexToHpluv: n.Hsluv.hexToHpluv,
        lchToHpluv: n.Hsluv.lchToHpluv,
        hpluvToLch: n.Hsluv.hpluvToLch,
        lchToHsluv: n.Hsluv.lchToHsluv,
        hsluvToLch: n.Hsluv.hsluvToLch,
        lchToLuv: n.Hsluv.lchToLuv,
        luvToLch: n.Hsluv.luvToLch,
        xyzToLuv: n.Hsluv.xyzToLuv,
        luvToXyz: n.Hsluv.luvToXyz,
        xyzToRgb: n.Hsluv.xyzToRgb,
        rgbToXyz: n.Hsluv.rgbToXyz,
        lchToRgb: n.Hsluv.lchToRgb,
        rgbToLch: n.Hsluv.rgbToLch,
      };
      e.exports = r;
    },
    s4An: function (e, t, n) {
      "use strict";
      function r(e, t) {
        return (r =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      n.d(t, "a", function () {
        return r;
      });
    },
    sEfC: function (e, t, n) {
      var r = n("GoyQ"),
        a = n("QIyF"),
        i = n("tLB3"),
        s = Math.max,
        o = Math.min;
      e.exports = function (e, t, n) {
        var c,
          u,
          l,
          d,
          h,
          m,
          f = 0,
          g = !1,
          p = !1,
          v = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");
        function b(t) {
          var n = c,
            r = u;
          return (c = u = void 0), (f = t), (d = e.apply(r, n));
        }
        function y(e) {
          return (f = e), (h = setTimeout(k, t)), g ? b(e) : d;
        }
        function F(e) {
          var n = e - m;
          return void 0 === m || n >= t || n < 0 || (p && e - f >= l);
        }
        function k() {
          var e = a();
          if (F(e)) return x(e);
          h = setTimeout(
            k,
            (function (e) {
              var n = t - (e - m);
              return p ? o(n, l - (e - f)) : n;
            })(e)
          );
        }
        function x(e) {
          return (h = void 0), v && c ? b(e) : ((c = u = void 0), d);
        }
        function S() {
          var e = a(),
            n = F(e);
          if (((c = arguments), (u = this), (m = e), n)) {
            if (void 0 === h) return y(m);
            if (p) return clearTimeout(h), (h = setTimeout(k, t)), b(m);
          }
          return void 0 === h && (h = setTimeout(k, t)), d;
        }
        return (
          (t = i(t) || 0),
          r(n) &&
            ((g = !!n.leading),
            (l = (p = "maxWait" in n) ? s(i(n.maxWait) || 0, t) : l),
            (v = "trailing" in n ? !!n.trailing : v)),
          (S.cancel = function () {
            void 0 !== h && clearTimeout(h), (f = 0), (c = m = u = h = void 0);
          }),
          (S.flush = function () {
            return void 0 === h ? d : x(a());
          }),
          S
        );
      };
    },
    snHk: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.config = void 0);
      const r = n("LpF5");
      t.config = {
        surface: [
          {
            name: "background",
            description:
              "For use as a background color, in components such as Page and Frame backgrounds.",
            light: { lightness: 97 },
            dark: { lightness: 3.3 },
            meta: { figmaName: "Background/Default" },
          },
          {
            name: "backgroundHovered",
            description:
              "For use when an action or navigation is used on a background.",
            light: { lightness: 95.5 },
            dark: { lightness: 3.3 },
            meta: { figmaName: "Background/Hovered" },
          },
          {
            name: "backgroundPressed",
            description:
              "For use when an action or navigation is used on a background.",
            light: { lightness: 94 },
            dark: { lightness: 3.3 },
            meta: { figmaName: "Background/Pressed" },
          },
          {
            name: "backgroundSelected",
            description: "For use in the selected item in navigation",
            light: { lightness: 94 },
            dark: { lightness: 3.3 },
            meta: { figmaName: "Background/Selected" },
          },
          {
            name: "surface",
            description:
              "For use as a background color, in components such as Card, Modal, and Popover.",
            light: { lightness: 100 },
            dark: { lightness: 12.7 },
            meta: { figmaName: "Surface/Default" },
          },
          {
            name: "surfaceNeutral",
            description: "For use as a background color in neutral badges.",
            light: { lightness: 91 },
            dark: { lightness: 21 },
            meta: { figmaName: "Surface Neutral/Default" },
          },
          {
            name: "surfaceNeutralHovered",
            description:
              "For use as a hovered background color in neutral badges.",
            light: { lightness: 88 },
            dark: { lightness: 21 },
            meta: { figmaName: "Surface Neutral/Hovered" },
          },
          {
            name: "surfaceNeutralPressed",
            description:
              "For use as a pressed background color in neutral badges.",
            light: { lightness: 82 },
            dark: { lightness: 21 },
            meta: { figmaName: "Surface Neutral/Pressed" },
          },
          {
            name: "surfaceNeutralDisabled",
            description:
              "For use as a disabled background color in neutral badges.",
            light: { lightness: 95.5 },
            dark: { lightness: 21 },
            meta: { figmaName: "Surface Neutral/Disabled" },
          },
          {
            name: "surfaceNeutralSubdued",
            description: "For use as a background color in neutral banners.",
            light: { lightness: 97 },
            dark: { lightness: 30 },
            meta: { figmaName: "Surface Neutral/Subdued" },
          },
          {
            name: "surfaceSubdued",
            description:
              "For use as a subdued background color, in components such as Card, Modal, and Popover.",
            light: { lightness: 98.5 },
            dark: { lightness: 10 },
            meta: { figmaName: "Surface/Subdued" },
          },
          {
            name: "surfaceDisabled",
            description:
              "For use as a surface color on disabled interactive elements such as option list items and action list items when in a disabled state.",
            light: { lightness: 98.5 },
            dark: { lightness: 10 },
            meta: { figmaName: "Surface/Disabled" },
          },
          {
            name: "surfaceHovered",
            description:
              "For use as a surface color on interactive elements such as resource list items and action list items when in a hovered state.",
            light: { lightness: 97 },
            dark: { lightness: 20 },
            meta: { figmaName: "Surface/Hovered" },
          },
          {
            name: "surfacePressed",
            description:
              "For use as a surface color on interactive elements such as resource list items and action list items when in a pressed state.",
            light: { lightness: 95.5 },
            dark: { lightness: 27 },
            meta: { figmaName: "Surface/Pressed" },
          },
          {
            name: "surfaceDepressed",
            description:
              "For use as a surface color on interactive elements such as resource list items and action list items when in a depressed state.",
            light: { lightness: 94 },
            dark: { lightness: 35 },
            meta: { figmaName: "Surface/Depressed" },
          },
          {
            name: "surfaceSearchField",
            description:
              "For use as a background color, in components on surface elements such as SearchField",
            light: { lightness: 95.5 },
            dark: { lightness: 20 },
            meta: { figmaName: "Surface/SearchField" },
          },
          {
            name: "backdrop",
            description:
              "For use as the background color of the backdrop component for navigation and modal. This color has an alpha of `0.5`.",
            light: { hue: 0, saturation: 0, lightness: 0, alpha: 0.5 },
            dark: { hue: 0, saturation: 0, lightness: 0, alpha: 0.5 },
            meta: { figmaName: "Backdrop" },
          },
          {
            name: "overlay",
            description:
              "For use as the background color of elements which lay on top of surfaces to obscure their contents. This color has an alpha of `0.5`.",
            light: { hue: 0, saturation: 0, lightness: 100, alpha: 0.5 },
            dark: { hue: 0, saturation: 0, lightness: 12.7, alpha: 0.5 },
            meta: { figmaName: "Overlay" },
          },
          {
            name: "shadowFromDimLight",
            description:
              "For use in building shadows for modals. This color has an alpha of `0.02`.",
            light: { lightness: 0, alpha: 0.2 },
            dark: { lightness: 100, alpha: 0.2 },
            meta: { figmaName: "Shadow/From dim light" },
          },
          {
            name: "shadowFromAmbientLight",
            description:
              "For use in building shadows for popovers, and cards. This color has an alpha of `0.05`.",
            light: { hue: 180, saturation: 5, lightness: 8, alpha: 0.05 },
            dark: { hue: 180, saturation: 5, lightness: 8, alpha: 0.05 },
            meta: { figmaName: "Shadow/From ambient light" },
          },
          {
            name: "shadowFromDirectLight",
            description:
              "For use in building shadows for popovers and cards. This color has an alpha of `0.15`.",
            light: { hue: 0, saturation: 0, lightness: 0, alpha: 0.15 },
            dark: { hue: 0, saturation: 0, lightness: 100, alpha: 0.15 },
            meta: { figmaName: "Shadow/From direct light" },
          },
          {
            name: "hintFromDirectLight",
            description: "For use in building shadows scrollables.",
            light: { hue: 0, saturation: 0, lightness: 0, alpha: 0.15 },
            dark: { hue: 0, saturation: 0, lightness: 75, alpha: 0.2 },
            meta: { figmaName: "Hint/From direct light" },
          },
        ],
        onSurface: [
          {
            name: "border",
            description: "For use as the default border on elements.",
            light: { lightness: 60 },
            dark: { lightness: 35 },
            meta: { figmaName: "Border/Default" },
          },
          {
            name: "borderNeutralSubdued",
            description: "For use as the border on banners.",
            light: { lightness: 77 },
            dark: { lightness: 56 },
            meta: { figmaName: "Border Neutral/Subdued" },
          },
          {
            name: "borderHovered",
            description: "Used for borders on hovered interactive elements",
            light: { lightness: 65 },
            dark: { lightness: 35 },
            meta: { figmaName: "Border/Hovered" },
          },
          {
            name: "borderDisabled",
            description: "Used for disabled borders on interactive elements",
            light: { lightness: 85 },
            dark: { lightness: 45 },
            meta: { figmaName: "Border/Disabled" },
          },
          {
            name: "borderSubdued",
            description: "For use as a subdued border on elements.",
            light: {
              saturation: r.saturationAdjustmentFn(-1),
              lightness: 81.9,
            },
            dark: { lightness: 56 },
            meta: { figmaName: "Border/Subdued" },
          },
          {
            name: "borderDepressed",
            description: "For use as a border on depressed elements.",
            light: {
              hue: r.hueRotationFn(-45),
              saturation: r.saturationAdjustmentFn(-4),
              lightness: 37.7,
            },
            dark: {
              hue: r.hueRotationFn(-45),
              saturation: r.saturationAdjustmentFn(-4),
              lightness: 60,
            },
            meta: { figmaName: "Border/Depressed" },
          },
          {
            name: "borderShadow",
            description: "For use as an additional bottom border on elements.",
            light: { lightness: 73 },
            dark: { lightness: 40 },
            meta: { figmaName: "BorderShadow" },
          },
          {
            name: "borderShadowSubdued",
            description:
              "For use as an additional, subdued bottom border on elements.",
            light: { lightness: 77.1 },
            dark: { lightness: 56 },
            meta: { figmaName: "BorderShadow/Subdued" },
          },
          {
            name: "divider",
            description: "For use as a divider between elements.",
            light: {
              saturation: r.saturationAdjustmentFn(-1),
              lightness: 90.1,
            },
            dark: { saturation: r.saturationAdjustmentFn(-1), lightness: 30 },
            meta: { figmaName: "Divider" },
          },
          {
            name: "icon",
            description: "For use as the fill color of icons.",
            light: { lightness: 40.1 },
            dark: { lightness: 70.1 },
            meta: { figmaName: "Icon/Default" },
          },
          {
            name: "iconHovered",
            description: "For use as the fill color of hovered icons.",
            light: { lightness: 10 },
            dark: { lightness: 90 },
            meta: { figmaName: "Icon/Hovered" },
          },
          {
            name: "iconPressed",
            description: "For use as the fill color of pressed icons.",
            light: { lightness: 30 },
            dark: { lightness: 70 },
            meta: { figmaName: "Icon/Pressed" },
          },
          {
            name: "iconDisabled",
            description: "For use as the fill color of disabled icons.",
            light: { lightness: 76.9 },
            dark: { lightness: 36.8 },
            meta: { figmaName: "Icon/Disabled" },
          },
          {
            name: "iconSubdued",
            description: "For use as the fill color of subdued icons.",
            light: { lightness: 59.8 },
            dark: { lightness: 52.1 },
            meta: { figmaName: "Icon/Subdued" },
          },
          {
            name: "text",
            description: "For use as a text color.",
            light: { lightness: 13.1 },
            dark: { lightness: 90.8 },
            meta: { figmaName: "Text/Default" },
          },
          {
            name: "textDisabled",
            description:
              "For use as a disabled text color and as a placeholder text color.",
            light: { lightness: 60 },
            dark: { lightness: 48.2 },
            meta: { figmaName: "Text/Disabled" },
          },
          {
            name: "textSubdued",
            description: "For use as a subdued text color.",
            light: { lightness: 47.4 },
            dark: { lightness: 65.1 },
            meta: { figmaName: "Text/Subdued" },
          },
        ],
        interactive: [
          {
            name: "interactive",
            description:
              "Used for links, plain buttons, and as the fill color for selected checkboxes and radio buttons.",
            light: { lightness: 47 },
            dark: {
              lightness: 65,
              saturation: r.saturationAdjustmentFn(11.2),
              hue: r.hueRotationFn(-7.1),
            },
            meta: { figmaName: "Interactive/Default" },
          },
          {
            name: "interactiveDisabled",
            description: "Used for disabled links and plain buttons.",
            light: { lightness: 78, saturation: 17 },
            dark: { lightness: 42 },
            meta: { figmaName: "Interactive/Disabled" },
          },
          {
            name: "interactiveHovered",
            description: "Used for hovered links and plain buttons.",
            light: { lightness: 35 },
            dark: {
              lightness: 70,
              saturation: r.saturationAdjustmentFn(11.2),
              hue: r.hueRotationFn(-7.1),
            },
            meta: { figmaName: "Interactive/Hovered" },
          },
          {
            name: "interactivePressed",
            description: "Used for pressed links and plain buttons.",
            light: { lightness: 21 },
            dark: {
              lightness: 75,
              saturation: r.saturationAdjustmentFn(11.2),
              hue: r.hueRotationFn(-7.1),
            },
            meta: { figmaName: "Interactive/Pressed" },
          },
          {
            name: "focused",
            description: "For use in the focus ring on interactive elements.",
            light: {
              lightness: 60,
              saturation: r.saturationAdjustmentFn(11.2),
            },
            dark: { lightness: 42 },
            meta: { figmaName: "Focused/Default" },
          },
          {
            name: "surfaceSelected",
            description:
              "For use as a surface color in selected interactive elements, in components such as action list and resource list.",
            light: { lightness: 97, hue: r.hueRotationFn(-12) },
            dark: { lightness: 4 },
            meta: { figmaName: "Surface Selected/Default" },
          },
          {
            name: "surfaceSelectedHovered",
            description:
              "For use as a surface color in selected interactive elements that are hovered, in components such as action list and resource list.",
            light: { lightness: 96, hue: r.hueRotationFn(-12) },
            dark: { lightness: 11 },
            meta: { figmaName: "Surface Selected/Hovered" },
          },
          {
            name: "surfaceSelectedPressed",
            description:
              "For use as a surface color in selected interactive elements that are pressed, in components such as action list and resource list.",
            light: { lightness: 94, hue: r.hueRotationFn(-10) },
            dark: { lightness: 18 },
            meta: { figmaName: "Surface Selected/Pressed" },
          },
          {
            name: "iconOnInteractive",
            description:
              "For use as a fill color for icons on interactive elements.",
            light: { lightness: 100 },
            dark: { lightness: 100 },
            meta: { figmaName: "Icon On/Interactive" },
          },
          {
            name: "textOnInteractive",
            description: "For use as a text color on interactive elements.",
            light: { lightness: 100 },
            dark: { lightness: 100 },
            meta: { figmaName: "Text On/Interactive" },
          },
        ],
        secondary: [
          {
            name: "actionSecondary",
            description:
              "Used for secondary buttons and tertiary buttons, as well as in form elements as a background color and pontentially other secondary surfaces.",
            light: { lightness: 100 },
            dark: { lightness: 34 },
            meta: { figmaName: "Action Secondary/Default" },
          },
          {
            name: "actionSecondaryDisabled",
            description: "Used as a disabled state for secondary buttons",
            light: { lightness: 100 },
            dark: { lightness: 13 },
            meta: { figmaName: "Action Secondary/Disabled" },
          },
          {
            name: "actionSecondaryHovered",
            description: "Used as a hovered state for secondary buttons",
            light: { lightness: 97 },
            dark: { lightness: 37 },
            meta: { figmaName: "Action Secondary/Hovered" },
          },
          {
            name: "actionSecondaryPressed",
            description: "Used as a pressed state for secondary buttons",
            light: { lightness: 95.5 },
            dark: { lightness: 42 },
            meta: { figmaName: "Action Secondary/Pressed" },
          },
          {
            name: "actionSecondaryDepressed",
            description: "Used as a depressed state for secondary buttons",
            light: { hue: r.hueRotationFn(4), lightness: 47.4 },
            dark: { hue: r.hueRotationFn(4), lightness: 53 },
            meta: { figmaName: "Action Secondary/Depressed" },
          },
        ],
        primary: [
          {
            name: "actionPrimary",
            description:
              "Used as the background color for primary actions, and as the fill color for icons and the text color in navigation and tabs to communicate interaction states.",
            light: { lightness: 47.3 },
            dark: { lightness: 47.3 },
            meta: { figmaName: "Action Primary/Default" },
          },
          {
            name: "actionPrimaryDisabled",
            description:
              "Used as the background color for disabled primary actions, and as the fill color for icons and the text color in navigation and tabs to communicate interaction states.",
            light: { lightness: 95, saturation: 0 },
            dark: { lightness: 32 },
            meta: { figmaName: "Action Primary/Disabled" },
          },
          {
            name: "actionPrimaryHovered",
            description:
              "Used as the background color for hovered primary actions, and as the fill color for icons and the text color in navigation and tabs to communicate interaction states.",
            light: { lightness: 41 },
            dark: { lightness: 55 },
            meta: { figmaName: "Action Primary/Hovered" },
          },
          {
            name: "actionPrimaryPressed",
            description:
              "Used as the background color for pressed primary actions, and as the fill color for icons and the text color in navigation and tabs to communicate interaction states.",
            light: { lightness: 35 },
            dark: { lightness: 60 },
            meta: { figmaName: "Action Primary/Pressed" },
          },
          {
            name: "actionPrimaryDepressed",
            description:
              "Used as the background color for pressed primary actions, and as the fill color for icons and the text color in navigation and tabs to communicate interaction states.",
            light: { lightness: 22 },
            dark: { lightness: 65 },
            meta: { figmaName: "Action Primary/Depressed" },
          },
          {
            name: "iconOnPrimary",
            description:
              "For use as a fill color for icons on primary actions. Not for use in icons on navigation and tabs.",
            light: { lightness: 100 },
            dark: { lightness: 98 },
            meta: { figmaName: "Icon On/Primary" },
          },
          {
            name: "textOnPrimary",
            description:
              "For use as a text color on primary actions. Not for use in text on navigation and tabs.",
            light: { lightness: 100 },
            dark: { lightness: 100 },
            meta: { figmaName: "Text On/Primary" },
          },
          {
            name: "textPrimary",
            description:
              "For use as primary text color on background. For use in text in components such as Navigation.",
            light: { lightness: 45.7 },
            dark: { lightness: 52 },
            meta: { figmaName: "Text Primary/Default" },
          },
          {
            name: "textPrimaryHovered",
            description:
              "For use as primary hovered text color on background. For use in text in components such as Navigation.",
            light: { lightness: 40 },
            dark: { lightness: 58 },
            meta: { figmaName: "Text Primary/hover" },
          },
          {
            name: "textPrimaryPressed",
            description:
              "For use as primary pressed text color on background. For use in text in components such as Navigation.",
            light: { lightness: 34 },
            dark: { lightness: 64 },
            meta: { figmaName: "Text Primary/Pressed" },
          },
          {
            name: "surfacePrimarySelected",
            description:
              "Used as a surface color to indicate selected interactive states in navigation and tabs.",
            light: { lightness: 97, saturation: 20 },
            dark: { lightness: 5, saturation: 30 },
            meta: { figmaName: "Surface Primary/Selected" },
          },
          {
            name: "surfacePrimarySelectedHovered",
            description:
              "Used as a surface color to indicate selected interactive states that are hovered in navigation and tabs.",
            light: { lightness: 81, saturation: 22 },
            dark: { lightness: 19, saturation: 22 },
            meta: { figmaName: "Surface Primary/Selected Hovered" },
          },
          {
            name: "surfacePrimarySelectedPressed",
            description:
              "Used as a surface color to indicate selected interactive states that are pressed in navigation and tabs.",
            light: { lightness: 74, saturation: 22 },
            dark: { lightness: 26, saturation: 22 },
            meta: { figmaName: "Surface Primary/Selected Pressed" },
          },
        ],
        critical: [
          {
            name: "borderCritical",
            description:
              "For use as a border on critical components such as an outline on interactive elements in an error state.",
            light: { lightness: 60 },
            dark: { lightness: 50 },
            meta: { figmaName: "Border Critical/Default" },
          },
          {
            name: "borderCriticalSubdued",
            description:
              "For use as a border on critical components such as banners.",
            light: { lightness: 77, saturation: r.saturationAdjustmentFn(-50) },
            dark: { lightness: 50 },
            meta: { figmaName: "Border Critical/Subdued" },
          },
          {
            name: "borderCriticalDisabled",
            description:
              "For use as a disabled border on critical components such as banners, and as an outline on interactive elements in an error state.",
            light: { lightness: 77, saturation: r.saturationAdjustmentFn(2.7) },
            dark: { lightness: 28 },
            meta: { figmaName: "Border Critical/Disabled" },
          },
          {
            name: "iconCritical",
            description:
              "For use as an icon fill color on top of critical elements.",
            light: { lightness: 47.3 },
            dark: { lightness: 48 },
            meta: { figmaName: "Icon/Critical" },
          },
          {
            name: "surfaceCritical",
            description:
              "For use as a surface color on critical elements including badges.",
            light: { lightness: 88 },
            dark: { lightness: 12 },
            meta: { figmaName: "Surface Critical/Default" },
          },
          {
            name: "surfaceCriticalSubdued",
            description:
              "For use as a subdued surface color on critical elements including banners.",
            light: { lightness: 97 },
            dark: { lightness: 12 },
            meta: { figmaName: "Surface Critical/Subdued" },
          },
          {
            name: "surfaceCriticalSubduedHovered",
            description:
              "For use as a surface color on critical interactive elements including action list items in a hovered state.",
            light: { lightness: 96 },
            dark: { lightness: 15, saturation: 60 },
            meta: {
              figmaName: "Surface Critical/Subdued Hovered",
              figmaDescription: "Used on action lists",
            },
          },
          {
            name: "surfaceCriticalSubduedPressed",
            description:
              "For use as a surface color on critical interactive elements including action list items in a pressed state.",
            light: { lightness: 94 },
            dark: { lightness: 22 },
            meta: { figmaName: "Surface Critical/Subdued Pressed" },
          },
          {
            name: "surfaceCriticalSubduedDepressed",
            description:
              "For use as a surface color on critical interactive elements including action list items in a depressed state.",
            light: { lightness: 82 },
            dark: { lightness: 29 },
            meta: { figmaName: "Surface Critical/Subdued Depressed" },
          },
          {
            name: "textCritical",
            description:
              "For use as a text color in inert critical elements such as exception list. Not for use as a text color on banners and badges.",
            light: { lightness: 47.3 },
            dark: { lightness: 65, saturation: 70 },
            meta: { figmaName: "Text/Critical" },
          },
          {
            name: "actionCritical",
            description:
              "For use as the background color for destructive buttons, and as the background color for error toast messages.",
            light: { lightness: 47.5 },
            dark: { lightness: 45 },
            meta: { figmaName: "Action Critical/Default" },
          },
          {
            name: "actionCriticalDisabled",
            description:
              "For use as the background color for disabled destructive buttons, and as the background color for error toast messages.",
            light: { lightness: 95, saturation: 0 },
            dark: { lightness: 41 },
            meta: { figmaName: "Action Critical/Disabled" },
          },
          {
            name: "actionCriticalHovered",
            description:
              "For use as the background color for hovered destructive buttons, and as the background color for error toast messages.",
            light: { lightness: 41, saturation: r.saturationAdjustmentFn(2.7) },
            dark: { lightness: 50 },
            meta: { figmaName: "Action Critical/Hovered" },
          },
          {
            name: "actionCriticalPressed",
            description:
              "For use as the background color for pressed destructive buttons, and as the background color for error toast messages.",
            light: { lightness: 35, saturation: r.saturationAdjustmentFn(2.7) },
            dark: { lightness: 55 },
            meta: { figmaName: "Action Critical/Pressed" },
          },
          {
            name: "actionCriticalDepressed",
            description:
              "For use as the background color for depressed destructive buttons, and as the background color for error toast messages.",
            light: { lightness: 22, saturation: r.saturationAdjustmentFn(2.7) },
            dark: { lightness: 60 },
            meta: { figmaName: "Action Critical/Depressed" },
          },
          {
            name: "iconOnCritical",
            description:
              "For use as a fill color for icons on critical actions.",
            light: { lightness: 100 },
            dark: { lightness: 98 },
            meta: { figmaName: "Icon On/Critical" },
          },
          {
            name: "textOnCritical",
            description: "For use as a text color on critical actions.",
            light: { lightness: 100 },
            dark: { lightness: 100 },
            meta: { figmaName: "Text On/Critical" },
          },
          {
            name: "interactiveCritical",
            description:
              "For use as the text color for destructive interactive elements: links, plain buttons, error state of selected checkboxes and radio buttons, as well as a text color on destructive action list items. Not for use on critical banners and badges.",
            light: { lightness: 47.5 },
            dark: { lightness: 65 },
            meta: { figmaName: "Interactive/Critical" },
          },
          {
            name: "interactiveCriticalDisabled",
            description:
              "For use as a text color in disabled destructive plain buttons, as well as a text color on destructive action list items. Not for use on critical banners and badges.",
            light: { lightness: 72 },
            dark: { lightness: 78 },
            meta: { figmaName: "Interactive/Critical Disabled" },
          },
          {
            name: "interactiveCriticalHovered",
            description:
              "For use as a text color in hovered destructive plain buttons, as well as a text color on destructive action list items. Not for use on critical banners and badges.",
            light: { lightness: 45 },
            dark: { lightness: 70 },
            meta: { figmaName: "Interactive/Critical Hovered" },
          },
          {
            name: "interactiveCriticalPressed",
            description:
              "For use as a text color in pressed destructive plain buttons, as well as a text color on destructive action list items. Not for use on critical banners and badges.",
            light: { lightness: 21 },
            dark: { lightness: 75 },
            meta: { figmaName: "Interactive/Critical Pressed" },
          },
        ],
        warning: [
          {
            name: "borderWarning",
            description: "For use as a border on warning components such as...",
            light: { lightness: 60 },
            dark: { lightness: 50 },
            meta: { figmaName: "Border Warning/Default" },
          },
          {
            name: "borderWarningSubdued",
            description:
              "For use as a border on warning components such as banners.",
            light: { lightness: 77, saturation: r.saturationAdjustmentFn(-40) },
            dark: { lightness: 50 },
            meta: { figmaName: "Border Warning/Subdued" },
          },
          {
            name: "iconWarning",
            description:
              "For use as an icon fill color on top of warning elements.",
            light: { lightness: 60 },
            dark: { lightness: 34 },
            meta: { figmaName: "Icon/Warning" },
          },
          {
            name: "surfaceWarning",
            description:
              "For use as a surface color on warning elements including badges.",
            light: { lightness: 88 },
            dark: { lightness: 50 },
            meta: {
              figmaName: "Surface Warning/Default",
              figmaDescription: "Use for badges",
            },
          },
          {
            name: "surfaceWarningSubdued",
            description:
              "For use as a subdued surface color on warning elements including banners.",
            light: { lightness: 97 },
            dark: { lightness: 26, saturation: 71 },
            meta: {
              figmaName: "Surface Warning/Subdued",
              figmaDescription: "Used for banners",
            },
          },
          {
            name: "surfaceWarningSubduedHovered",
            description:
              "For use as a subdued surface color on warning elements including banners.",
            light: { lightness: 96 },
            dark: { lightness: 28, saturation: 71 },
            meta: {
              figmaName: "Surface Warning/Subdued Hovered",
              figmaDescription: "Used for banners",
            },
          },
          {
            name: "surfaceWarningSubduedPressed",
            description:
              "For use as a subdued surface color on warning elements including banners.",
            light: { lightness: 94 },
            dark: { lightness: 30, saturation: 71 },
            meta: {
              figmaName: "Surface Warning/Subdued Pressed",
              figmaDescription: "Used for banners",
            },
          },
          {
            name: "textWarning",
            description:
              "For use as a text color in inert critical elements such as exception list. Not for use as a text color on banners and badges.",
            light: { lightness: 47.4 },
            dark: { lightness: 64.9 },
            meta: { figmaName: "Text/Warning" },
          },
        ],
        highlight: [
          {
            name: "borderHighlight",
            description:
              "For use as a border on informational components such as...",
            light: { lightness: 60 },
            dark: { lightness: 60 },
            meta: { figmaName: "Border Highlight/Default" },
          },
          {
            name: "borderHighlightSubdued",
            description:
              "For use as a border on informational components such as banners.",
            light: { lightness: 77, saturation: r.saturationAdjustmentFn(-40) },
            dark: { lightness: 60 },
            meta: { figmaName: "Border Highlight/Subdued" },
          },
          {
            name: "iconHighlight",
            description:
              "For use as an icon fill color on top of informational elements.",
            light: {
              lightness: 60,
              saturation: r.saturationAdjustmentFn(19.6),
            },
            dark: { lightness: 42 },
            meta: { figmaName: "Icon/Highlight" },
          },
          {
            name: "surfaceHighlight",
            description:
              "For use as a surface color on information elements including badges.",
            light: {
              lightness: 88,
              saturation: r.saturationAdjustmentFn(-20.4),
            },
            dark: { lightness: 40, saturation: 100 },
            meta: { figmaName: "Surface Highlight/Default" },
          },
          {
            name: "surfaceHighlightSubdued",
            description:
              "For use as a surface color on information elements including banners.",
            light: {
              lightness: 97,
              saturation: r.saturationAdjustmentFn(-20.4),
            },
            dark: { lightness: 20 },
            meta: { figmaName: "Surface Highlight/Subdued" },
          },
          {
            name: "surfaceHighlightSubduedHovered",
            description:
              "For use as a surface color on information elements including banners.",
            light: {
              lightness: 96,
              saturation: r.saturationAdjustmentFn(-20.4),
            },
            dark: { lightness: 22 },
            meta: { figmaName: "Surface Highlight/Subdued Hovered" },
          },
          {
            name: "surfaceHighlightSubduedPressed",
            description:
              "For use as a surface color on information elements including banners.",
            light: {
              lightness: 94,
              saturation: r.saturationAdjustmentFn(-20.4),
            },
            dark: { lightness: 25 },
            meta: { figmaName: "Surface Highlight/Subdued Pressed" },
          },
          {
            name: "textHighlight",
            description:
              "For use as a text color in inert informational elements. Not for use as a text color on banners and badges.",
            light: { lightness: 48 },
            dark: { lightness: 90 },
            meta: { figmaName: "Text/Highlight" },
          },
        ],
        success: [
          {
            name: "borderSuccess",
            description:
              "For use as a border on success components such as text inputs.",
            light: { lightness: 60 },
            dark: { lightness: 50 },
            meta: { figmaName: "Border Success/Default" },
          },
          {
            name: "borderSuccessSubdued",
            description:
              "For use as a border on success components such as banners.",
            light: { lightness: 77, saturation: r.saturationAdjustmentFn(-60) },
            dark: { lightness: 50 },
            meta: { figmaName: "Border Success/Subdued" },
          },
          {
            name: "iconSuccess",
            description:
              "For use as an icon fill color on top of success elements.",
            light: { lightness: 47 },
            dark: { lightness: 35 },
            meta: { figmaName: "Icon/Success" },
          },
          {
            name: "surfaceSuccess",
            description:
              "For use as a surface color on success elements including badges.",
            light: { lightness: 88, saturation: r.saturationAdjustmentFn(-60) },
            dark: { lightness: 35 },
            meta: { figmaName: "Surface Success/Default" },
          },
          {
            name: "surfaceSuccessSubdued",
            description:
              "For use as a surface color on information elements including banners.",
            light: { lightness: 97, saturation: r.saturationAdjustmentFn(-80) },
            dark: { lightness: 20, saturation: r.saturationAdjustmentFn(-40) },
            meta: { figmaName: "Surface Success/Subdued" },
          },
          {
            name: "surfaceSuccessSubduedHovered",
            description:
              "For use as a surface color on information elements including banners.",
            light: { lightness: 96, saturation: r.saturationAdjustmentFn(-80) },
            dark: { lightness: 22, saturation: r.saturationAdjustmentFn(-40) },
            meta: { figmaName: "Surface Success/Subdued Hovered" },
          },
          {
            name: "surfaceSuccessSubduedPressed",
            description:
              "For use as a surface color on information elements including banners.",
            light: { lightness: 94, saturation: r.saturationAdjustmentFn(-80) },
            dark: { lightness: 25, saturation: r.saturationAdjustmentFn(-40) },
            meta: { figmaName: "Surface Success/Subdued Pressed" },
          },
          {
            name: "textSuccess",
            description:
              "For use as a text color in inert success elements. Not for use as a text color on banners and badges.",
            light: { lightness: 47.3 },
            dark: { lightness: 65, saturation: r.saturationAdjustmentFn(-30) },
            meta: { figmaName: "Text/Success" },
          },
        ],
        decorative: [
          {
            name: "decorativeOneIcon",
            description:
              "For use as a decorative icon color that is applied on a decorative surface.",
            light: { hue: r.hueRotationFn(-4.5), lightness: 40 },
            dark: { hue: r.hueRotationFn(-4.5), lightness: 80 },
            meta: { figmaName: "Decorative/Icon/One" },
          },
          {
            name: "decorativeOneSurface",
            description: "For use as a decorative surface color.",
            light: { lightness: 84 },
            dark: {
              hue: r.hueRotationFn(-2.5),
              saturation: r.saturationAdjustmentFn(-2),
              lightness: 46,
            },
            meta: { figmaName: "Decorative/Surface/One" },
          },
          {
            name: "decorativeOneText",
            description:
              "For use as a decorative text color that is applied on a decorative surface.",
            light: { hue: r.hueRotationFn(-4.5), lightness: 18 },
            dark: { lightness: 100 },
            meta: { figmaName: "Decorative/Text/One" },
          },
          {
            name: "decorativeTwoIcon",
            description:
              "For use as a decorative icon color that is applied on a decorative surface.",
            light: {
              hue: r.hueRotationFn(305.5),
              saturation: r.saturationAdjustmentFn(-20),
              lightness: 40,
            },
            dark: {
              hue: r.hueRotationFn(305.5),
              saturation: r.saturationAdjustmentFn(-20),
              lightness: 80,
            },
            meta: { figmaName: "Decorative/Icon/Two" },
          },
          {
            name: "decorativeTwoSurface",
            description: "For use as a decorative surface color.",
            light: { hue: r.hueRotationFn(-26.5), lightness: 84 },
            dark: {
              hue: r.hueRotationFn(-32.5),
              saturation: r.saturationAdjustmentFn(-4),
              lightness: 52,
            },
            meta: { figmaName: "Decorative/Surface/Two" },
          },
          {
            name: "decorativeTwoText",
            description:
              "For use as a decorative text color that is applied on a decorative surface.",
            light: {
              hue: r.hueRotationFn(305.5),
              saturation: r.saturationAdjustmentFn(-20),
              lightness: 14,
            },
            dark: { lightness: 100 },
            meta: { figmaName: "Decorative/Text/Two" },
          },
          {
            name: "decorativeThreeIcon",
            description:
              "For use as a decorative icon color that is applied on a decorative surface.",
            light: { hue: r.hueRotationFn(87.5), lightness: 40 },
            dark: { hue: r.hueRotationFn(87.5), lightness: 80 },
            meta: { figmaName: "Decorative/Icon/Three" },
          },
          {
            name: "decorativeThreeSurface",
            description: "For use as a decorative surface color.",
            light: {
              hue: r.hueRotationFn(87.5),
              saturation: r.saturationAdjustmentFn(-46),
              lightness: 85,
            },
            dark: { hue: r.hueRotationFn(97.5), lightness: 46 },
            meta: { figmaName: "Decorative/Surface/Three" },
          },
          {
            name: "decorativeThreeText",
            description:
              "For use as a decorative text color that is applied on a decorative surface.",
            light: { hue: r.hueRotationFn(87.5), lightness: 16 },
            dark: { lightness: 100 },
            meta: { figmaName: "Decorative/Text/Three" },
          },
          {
            name: "decorativeFourIcon",
            description:
              "For use as a decorative icon color that is applied on a decorative surface.",
            light: { hue: r.hueRotationFn(133.5), lightness: 40 },
            dark: { hue: r.hueRotationFn(133.5), lightness: 80 },
            meta: { figmaName: "Decorative/Icon/Four" },
          },
          {
            name: "decorativeFourSurface",
            description: "For use as a decorative surface color.",
            light: {
              hue: r.hueRotationFn(123.5),
              saturation: r.saturationAdjustmentFn(-44),
              lightness: 84,
            },
            dark: {
              hue: r.hueRotationFn(131.5),
              saturation: r.saturationAdjustmentFn(-5),
              lightness: 47,
            },
            meta: { figmaName: "Decorative/Surface/Four" },
          },
          {
            name: "decorativeFourText",
            description:
              "For use as a decorative text color that is applied on a decorative surface.",
            light: { hue: r.hueRotationFn(133.5), lightness: 16 },
            dark: { lightness: 100 },
            meta: { figmaName: "Decorative/Text/Four" },
          },
          {
            name: "decorativeFiveIcon",
            description:
              "For use as a decorative icon color that is applied on a decorative surface.",
            light: {
              hue: r.hueRotationFn(306.5),
              saturation: r.saturationAdjustmentFn(-22),
              lightness: 40,
            },
            dark: {
              hue: r.hueRotationFn(306.5),
              saturation: r.saturationAdjustmentFn(-22),
              lightness: 80,
            },
            meta: { figmaName: "Decorative/Icon/Five" },
          },
          {
            name: "decorativeFiveSurface",
            description: "For use as a decorative surface color.",
            light: {
              hue: r.hueRotationFn(-53.4),
              saturation: r.saturationAdjustmentFn(-5.4),
              lightness: 85.6,
            },
            dark: {
              hue: r.hueRotationFn(306.5),
              saturation: r.saturationAdjustmentFn(-23),
              lightness: 45,
            },
            meta: { figmaName: "Decorative/Surface/Five" },
          },
          {
            name: "decorativeFiveText",
            description:
              "For use as a decorative text color that is applied on a decorative surface.",
            light: {
              hue: r.hueRotationFn(306.5),
              saturation: r.saturationAdjustmentFn(-22),
              lightness: 16,
            },
            dark: { lightness: 100 },
            meta: { figmaName: "Decorative/Text/Five" },
          },
        ],
      };
    },
    srL5: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return o;
      }),
        n.d(t, "b", function () {
          return c;
        });
      const r = "768px",
        a = "1043px",
        i = {
          media: "",
          addListener: s,
          removeListener: s,
          matches: !1,
          onchange: s,
          addEventListener: s,
          removeEventListener: s,
          dispatchEvent: (e) => !0,
        };
      function s() {}
      function o() {
        return "undefined" === typeof window
          ? i
          : window.matchMedia(`(max-width: ${r})`);
      }
      function c() {
        return "undefined" === typeof window
          ? i
          : window.matchMedia(`(max-width: ${a})`);
      }
    },
    tLB3: function (e, t, n) {
      var r = n("jXQH"),
        a = n("GoyQ"),
        i = n("/9aa"),
        s = /^[-+]0x[0-9a-f]+$/i,
        o = /^0b[01]+$/i,
        c = /^0o[0-7]+$/i,
        u = parseInt;
      e.exports = function (e) {
        if ("number" == typeof e) return e;
        if (i(e)) return NaN;
        if (a(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = a(t) ? t + "" : t;
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = r(e);
        var n = o.test(e);
        return n || c.test(e) ? u(e.slice(2), n ? 2 : 8) : s.test(e) ? NaN : +e;
      };
    },
    tsxB: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return a;
      });
      var r = n("q1tI");
      const a = Object(r.createContext)(void 0);
    },
    wx14: function (e, t, n) {
      "use strict";
      function r() {
        return (r =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      n.d(t, "a", function () {
        return r;
      });
    },
    yBGC: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return p;
      });
      var r = n("q1tI"),
        a = n.n(r),
        i = n("Vcon"),
        s = n("SB2B"),
        o = n("kHNa"),
        c = n("KB7n"),
        u = n("snHk");
      function l(e) {
        return e
          ? Object.entries(e)
              .map((e) => e.join(":"))
              .join(";")
          : "";
      }
      function d(e) {
        return `--p-${e.replace(/([A-Z0-9])/g, "-$1").toLowerCase()}`;
      }
      const h = (function (e) {
          const t = new Map();
          return function (...n) {
            const r = JSON.stringify([e.name, n]);
            return void 0 === t.get(r) && t.set(r, e(...n)), t.get(r);
          };
        })(function (e, t) {
          const {
              colors: n = {},
              colorScheme: r,
              config: a,
              frameOffset: s = "0px",
            } = e,
            o = Object(c.mergeConfigs)(u.config, a || {});
          return (
            (l = Object(i.a)(
              Object(i.a)(Object(i.a)({}, Object(c.colorFactory)(n, r, o)), t),
              {},
              { frameOffset: s }
            )),
            Object.entries(l).reduce(
              (e, [t, n]) => Object(i.a)(Object(i.a)({}, e), {}, { [d(t)]: n }),
              {}
            )
          );
          var l;
        }),
        m = {
          borderRadiusBase: f("4px"),
          borderRadiusWide: f("8px"),
          borderRadiusFull: "50%",
          cardShadow:
            "0px 0px 5px var(--p-shadow-from-ambient-light), 0px 1px 2px var(--p-shadow-from-direct-light)",
          popoverShadow:
            "-1px 0px 20px var(--p-shadow-from-ambient-light), 0px 1px 5px var(--p-shadow-from-direct-light)",
          modalShadow:
            "0px 26px 80px var(--p-shadow-from-dim-light), 0px 0px 1px var(--p-shadow-from-dim-light)",
          topBarShadow: "0 2px 2px -1px var(--p-shadow-from-direct-light)",
          buttonDropShadow: "0 1px 0 rgba(0, 0, 0, 0.05)",
          buttonInnerShadow: "inset 0 -1px 0 rgba(0, 0, 0, 0.2)",
          buttonPressedInnerShadow: "inset 0 1px 0 rgba(0, 0, 0, 0.15)",
          overrideNone: "none",
          overrideTransparent: "transparent",
          overrideOne: "1",
          overrideVisible: "visible",
          overrideZero: "0",
          overrideLoadingZIndex: "514",
          buttonFontWeight: "500",
          nonNullContent: "''",
          choiceSize: f("20px"),
          iconSize: f("10px"),
          choiceMargin: f("1px"),
          controlBorderWidth: f("2px"),
          bannerBorderDefault: g("--p-border-neutral-subdued"),
          bannerBorderSuccess: g("--p-border-success-subdued"),
          bannerBorderHighlight: g("--p-border-highlight-subdued"),
          bannerBorderWarning: g("--p-border-warning-subdued"),
          bannerBorderCritical: g("--p-border-critical-subdued"),
          badgeMixBlendMode: "luminosity",
          thinBorderSubdued: `${f("1px")} solid var(--p-border-subdued)`,
          textFieldSpinnerOffset: f("2px"),
          textFieldFocusRingOffset: f("-4px"),
          textFieldFocusRingBorderRadius: f("7px"),
          buttonGroupItemSpacing: f("-1px"),
          duration100: "100ms",
          duration150: "150ms",
          easeIn: "cubic-bezier(0.5, 0.1, 1, 1)",
          ease: "cubic-bezier(0.4, 0.22, 0.28, 1)",
          rangeSliderThumbSizeBase: f("16px"),
          rangeSliderThumbSizeActive: f("24px"),
          rangeSliderThumbScale: "1.5",
          badgeFontWeight: "400",
        };
      function f(e) {
        return parseInt(e, 10) / 10 + "rem";
      }
      function g(e) {
        return `inset 0 ${f("1px")} 0 0 var(${e}), inset 0 0 0 ${f(
          "1px"
        )} var(${e})`;
      }
      function p({
        theme: e = {},
        alwaysRenderCustomProperties: t = !1,
        children: n,
      }) {
        const c = Object(r.useContext)(o.a),
          u = void 0 === c,
          d = c && c.colorScheme && c.colorScheme,
          f = c && c.colors && c.colors,
          [g, p] = Object(r.useMemo)(() => {
            const { colors: t, colorScheme: n } = e,
              r = Object(i.b)(e, ["colors", "colorScheme"]),
              a = Object(i.a)(
                Object(i.a)(Object(i.a)({}, r), { colorScheme: v(n, d) }),
                {},
                {
                  colors: Object(i.a)(
                    Object(i.a)(Object(i.a)({}, u && s), null != f && f),
                    t
                  ),
                }
              ),
              o = h(a, m);
            return [
              o,
              (function (e, t) {
                const { logo: n, colors: r = {}, colorScheme: a } = e;
                return {
                  logo: n,
                  cssCustomProperties: l(t),
                  colors: r,
                  colorScheme: a,
                };
              })(a, o),
            ];
          }, [u, d, f, e]),
          b = g["--p-background"] || "",
          y = g["--p-text"] || "";
        let F;
        return (
          Object(r.useEffect)(() => {
            u &&
              ((document.body.style.backgroundColor = b),
              (document.body.style.color = y));
          }, [b, y, u]),
          (F = u
            ? g
            : t || (!u && c.cssCustomProperties !== l(g))
            ? Object(i.a)(Object(i.a)({}, g), { color: y })
            : { color: y }),
          a.a.createElement(
            o.a.Provider,
            { value: p },
            a.a.createElement("div", { style: F }, n)
          )
        );
      }
      function v(e, t) {
        return null == e
          ? t || "light"
          : "inverse" === e
          ? "dark" === t || void 0 === t
            ? "light"
            : "dark"
          : e;
      }
    },
    yLpj: function (e, t) {
      var n;
      n = (function () {
        return this;
      })();
      try {
        n = n || new Function("return this")();
      } catch (r) {
        "object" === typeof window && (n = window);
      }
      e.exports = n;
    },
    zLVn: function (e, t, n) {
      "use strict";
      function r(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = {},
          i = Object.keys(e);
        for (r = 0; r < i.length; r++)
          (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
        return a;
      }
      n.d(t, "a", function () {
        return r;
      });
    },
  },
]);
