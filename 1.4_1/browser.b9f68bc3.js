var e, n;
"function" == typeof (e = globalThis.define) && ((n = e), (e = null)),
  (function (n, o, t, r, f) {
    var i =
        "undefined" != typeof globalThis
          ? globalThis
          : "undefined" != typeof self
          ? self
          : "undefined" != typeof window
          ? window
          : "undefined" != typeof global
          ? global
          : {},
      u = "function" == typeof i[r] && i[r],
      d = u.cache || {},
      l =
        "undefined" != typeof module &&
        "function" == typeof module.require &&
        module.require.bind(module);
    function a(e, o) {
      if (!d[e]) {
        if (!n[e]) {
          var t = "function" == typeof i[r] && i[r];
          if (!o && t) return t(e, !0);
          if (u) return u(e, !0);
          if (l && "string" == typeof e) return l(e);
          var f = Error("Cannot find module '" + e + "'");
          throw ((f.code = "MODULE_NOT_FOUND"), f);
        }
        (c.resolve = function (o) {
          var t = n[e][1][o];
          return null != t ? t : o;
        }),
          (c.cache = {});
        var s = (d[e] = new a.Module(e));
        n[e][0].call(s.exports, c, s, s.exports, this);
      }
      return d[e].exports;
      function c(e) {
        var n = c.resolve(e);
        return !1 === n ? {} : a(n);
      }
    }
    (a.isParcelRequire = !0),
      (a.Module = function (e) {
        (this.id = e), (this.bundle = a), (this.exports = {});
      }),
      (a.modules = n),
      (a.cache = d),
      (a.parent = u),
      (a.register = function (e, o) {
        n[e] = [
          function (e, n) {
            n.exports = o;
          },
          {},
        ];
      }),
      Object.defineProperty(a, "root", {
        get: function () {
          return i[r];
        },
      }),
      (i[r] = a);
    for (var s = 0; s < o.length; s++) a(o[s]);
    if (t) {
      var c = a(t);
      "object" == typeof exports && "undefined" != typeof module
        ? (module.exports = c)
        : "function" == typeof e && e.amd
        ? e(function () {
            return c;
          })
        : f && (this[f] = c);
    }
  })(
    {
      aYemC: [
        function (e, n, o) {
          var t = arguments[3],
            r = (function () {
              if ("undefined" != typeof self) return self;
              if ("undefined" != typeof window) return window;
              if (void 0 !== t) return t;
              throw Error("unable to locate global object");
            })();
          (n.exports = o = r.fetch),
            r.fetch && (o.default = r.fetch.bind(r)),
            (o.Headers = r.Headers),
            (o.Request = r.Request),
            (o.Response = r.Response);
        },
        {},
      ],
    },
    ["aYemC"],
    "aYemC",
    "parcelRequirea88a"
  ),
  (globalThis.define = n);
