var e, t;
"function" == typeof (e = globalThis.define) && ((t = e), (e = null)),
  (function (t, r, s, i, n) {
    var a =
        "undefined" != typeof globalThis
          ? globalThis
          : "undefined" != typeof self
          ? self
          : "undefined" != typeof window
          ? window
          : "undefined" != typeof global
          ? global
          : {},
      o = "function" == typeof a[i] && a[i],
      l = o.cache || {},
      c =
        "undefined" != typeof module &&
        "function" == typeof module.require &&
        module.require.bind(module);
    function h(e, r) {
      if (!l[e]) {
        if (!t[e]) {
          var s = "function" == typeof a[i] && a[i];
          if (!r && s) return s(e, !0);
          if (o) return o(e, !0);
          if (c && "string" == typeof e) return c(e);
          var n = Error("Cannot find module '" + e + "'");
          throw ((n.code = "MODULE_NOT_FOUND"), n);
        }
        (d.resolve = function (r) {
          var s = t[e][1][r];
          return null != s ? s : r;
        }),
          (d.cache = {});
        var u = (l[e] = new h.Module(e));
        t[e][0].call(u.exports, d, u, u.exports, this);
      }
      return l[e].exports;
      function d(e) {
        var t = d.resolve(e);
        return !1 === t ? {} : h(t);
      }
    }
    (h.isParcelRequire = !0),
      (h.Module = function (e) {
        (this.id = e), (this.bundle = h), (this.exports = {});
      }),
      (h.modules = t),
      (h.cache = l),
      (h.parent = o),
      (h.register = function (e, r) {
        t[e] = [
          function (e, t) {
            t.exports = r;
          },
          {},
        ];
      }),
      Object.defineProperty(h, "root", {
        get: function () {
          return a[i];
        },
      }),
      (a[i] = h);
    for (var u = 0; u < r.length; u++) h(r[u]);
    if (s) {
      var d = h(s);
      "object" == typeof exports && "undefined" != typeof module
        ? (module.exports = d)
        : "function" == typeof e && e.amd
        ? e(function () {
            return d;
          })
        : n && (this[n] = d);
    }
  })(
    {
      cq3XM: [
        function (e, t, r) {
          e("2c05a2adf83b6286").register(
            JSON.parse(
              '{"abzv4":"index.js","5212Q":"browser.b9f68bc3.js","kFW7B":"interceptor.18d7c0c4.js"}'
            )
          );
        },
        { "2c05a2adf83b6286": "aOnzl" },
      ],
      aOnzl: [
        function (e, t, r) {
          var s = {};
          (t.exports.register = function (e) {
            for (var t = Object.keys(e), r = 0; r < t.length; r++)
              s[t[r]] = e[t[r]];
          }),
            (t.exports.resolve = function (e) {
              var t = s[e];
              if (null == t)
                throw Error("Could not resolve bundle with id " + e);
              return t;
            });
        },
        {},
      ],
      kgW6q: [
        function (e, t, r) {
          e("./messaging"),
            e("../../../background/index"),
            e("./main-world-scripts");
        },
        {
          "./messaging": "iG3ww",
          "../../../background/index": "lSzt3",
          "./main-world-scripts": "8ZbMf",
        },
      ],
      iG3ww: [
        function (e, t, r) {
          var s = e("@parcel/transformer-js/src/esmodule-helpers.js"),
            i = e("~background/messages/activate-enterprise-license"),
            n = s.interopDefault(i),
            a = e("~background/messages/activate-payment"),
            o = s.interopDefault(a),
            l = e("~background/messages/agent"),
            c = s.interopDefault(l),
            h = e("~background/messages/antd-alert"),
            u = s.interopDefault(h),
            d = e("~background/messages/check-xy"),
            p = s.interopDefault(d),
            f = e("~background/messages/create-coinbase-charge"),
            g = s.interopDefault(f),
            m = e("~background/messages/deactivate-enterprise-license"),
            b = s.interopDefault(m),
            y = e("~background/messages/generate-reply"),
            v = s.interopDefault(y),
            _ = e("~background/messages/get-available-replies"),
            w = s.interopDefault(_),
            j = e("~background/messages/get-extension-info"),
            E = s.interopDefault(j),
            S = e("~background/messages/get-settings"),
            T = s.interopDefault(S),
            k = e("~background/messages/get-tab-id"),
            x = s.interopDefault(k),
            A = e("~background/messages/init-session"),
            R = s.interopDefault(A),
            I = e("~background/messages/load-my-account"),
            C = s.interopDefault(I),
            O = e("~background/messages/load-timeline"),
            P = s.interopDefault(O),
            L = e("~background/messages/load-tweet"),
            F = s.interopDefault(L),
            N = e("~background/messages/open-pro-tab"),
            $ = s.interopDefault(N),
            D = e("~background/messages/open-settings-tab"),
            U = s.interopDefault(D),
            q = e("~background/messages/x-handle"),
            M = s.interopDefault(q);
          (globalThis.__plasmoInternalPortMap = new Map()),
            chrome.runtime.onMessageExternal.addListener((e, t, r) => {
              switch (e.name) {
                case "activate-enterprise-license":
                  (0, n.default)({ sender: t, ...e }, { send: (e) => r(e) });
                  break;
                case "activate-payment":
                  (0, o.default)({ sender: t, ...e }, { send: (e) => r(e) });
                  break;
                case "agent":
                  (0, c.default)({ sender: t, ...e }, { send: (e) => r(e) });
                  break;
                case "antd-alert":
                  (0, u.default)({ sender: t, ...e }, { send: (e) => r(e) });
                  break;
                case "check-xy":
                  (0, p.default)({ sender: t, ...e }, { send: (e) => r(e) });
                  break;
                case "create-coinbase-charge":
                  (0, g.default)({ sender: t, ...e }, { send: (e) => r(e) });
                  break;
                case "deactivate-enterprise-license":
                  (0, b.default)({ sender: t, ...e }, { send: (e) => r(e) });
                  break;
                case "generate-reply":
                  (0, v.default)({ sender: t, ...e }, { send: (e) => r(e) });
                  break;
                case "get-available-replies":
                  (0, w.default)({ sender: t, ...e }, { send: (e) => r(e) });
                  break;
                case "get-extension-info":
                  (0, E.default)({ sender: t, ...e }, { send: (e) => r(e) });
                  break;
                case "get-settings":
                  (0, T.default)({ sender: t, ...e }, { send: (e) => r(e) });
                  break;
                case "get-tab-id":
                  (0, x.default)({ sender: t, ...e }, { send: (e) => r(e) });
                  break;
                case "init-session":
                  (0, R.default)({ sender: t, ...e }, { send: (e) => r(e) });
                  break;
                case "load-my-account":
                  (0, C.default)({ sender: t, ...e }, { send: (e) => r(e) });
                  break;
                case "load-timeline":
                  (0, P.default)({ sender: t, ...e }, { send: (e) => r(e) });
                  break;
                case "load-tweet":
                  (0, F.default)({ sender: t, ...e }, { send: (e) => r(e) });
                  break;
                case "open-pro-tab":
                  (0, $.default)({ sender: t, ...e }, { send: (e) => r(e) });
                  break;
                case "open-settings-tab":
                  (0, U.default)({ sender: t, ...e }, { send: (e) => r(e) });
                  break;
                case "x-handle":
                  (0, M.default)({ sender: t, ...e }, { send: (e) => r(e) });
              }
              return !0;
            }),
            chrome.runtime.onMessage.addListener((e, t, r) => {
              switch (e.name) {
                case "activate-enterprise-license":
                  (0, n.default)({ sender: t, ...e }, { send: (e) => r(e) });
                  break;
                case "activate-payment":
                  (0, o.default)({ sender: t, ...e }, { send: (e) => r(e) });
                  break;
                case "agent":
                  (0, c.default)({ sender: t, ...e }, { send: (e) => r(e) });
                  break;
                case "antd-alert":
                  (0, u.default)({ sender: t, ...e }, { send: (e) => r(e) });
                  break;
                case "check-xy":
                  (0, p.default)({ sender: t, ...e }, { send: (e) => r(e) });
                  break;
                case "create-coinbase-charge":
                  (0, g.default)({ sender: t, ...e }, { send: (e) => r(e) });
                  break;
                case "deactivate-enterprise-license":
                  (0, b.default)({ sender: t, ...e }, { send: (e) => r(e) });
                  break;
                case "generate-reply":
                  (0, v.default)({ sender: t, ...e }, { send: (e) => r(e) });
                  break;
                case "get-available-replies":
                  (0, w.default)({ sender: t, ...e }, { send: (e) => r(e) });
                  break;
                case "get-extension-info":
                  (0, E.default)({ sender: t, ...e }, { send: (e) => r(e) });
                  break;
                case "get-settings":
                  (0, T.default)({ sender: t, ...e }, { send: (e) => r(e) });
                  break;
                case "get-tab-id":
                  (0, x.default)({ sender: t, ...e }, { send: (e) => r(e) });
                  break;
                case "init-session":
                  (0, R.default)({ sender: t, ...e }, { send: (e) => r(e) });
                  break;
                case "load-my-account":
                  (0, C.default)({ sender: t, ...e }, { send: (e) => r(e) });
                  break;
                case "load-timeline":
                  (0, P.default)({ sender: t, ...e }, { send: (e) => r(e) });
                  break;
                case "load-tweet":
                  (0, F.default)({ sender: t, ...e }, { send: (e) => r(e) });
                  break;
                case "open-pro-tab":
                  (0, $.default)({ sender: t, ...e }, { send: (e) => r(e) });
                  break;
                case "open-settings-tab":
                  (0, U.default)({ sender: t, ...e }, { send: (e) => r(e) });
                  break;
                case "x-handle":
                  (0, M.default)({ sender: t, ...e }, { send: (e) => r(e) });
              }
              return !0;
            }),
            chrome.runtime.onConnect.addListener(function (e) {
              globalThis.__plasmoInternalPortMap.set(e.name, e),
                e.onMessage.addListener(function (t) {
                  e.name;
                });
            });
        },
        {
          "~background/messages/activate-enterprise-license": "1WYGX",
          "~background/messages/activate-payment": "aGgjx",
          "~background/messages/agent": "9JrCX",
          "~background/messages/antd-alert": "45UhA",
          "~background/messages/check-xy": "hRypJ",
          "~background/messages/create-coinbase-charge": "39szc",
          "~background/messages/deactivate-enterprise-license": "d4BOm",
          "~background/messages/generate-reply": "h8Eb3",
          "~background/messages/get-available-replies": "k1gDo",
          "~background/messages/get-extension-info": "6b7iX",
          "~background/messages/get-settings": "jYqfO",
          "~background/messages/get-tab-id": "9WmkF",
          "~background/messages/init-session": "lzEE8",
          "~background/messages/load-my-account": "huVuo",
          "~background/messages/load-timeline": "jxMYM",
          "~background/messages/load-tweet": "lXQcX",
          "~background/messages/open-pro-tab": "cVmZJ",
          "~background/messages/open-settings-tab": "1wK10",
          "~background/messages/x-handle": "6drpU",
          "@parcel/transformer-js/src/esmodule-helpers.js": "hbR2Q",
        },
      ],
      "1WYGX": [
        function (e, t, r) {
          e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(
            r
          );
          var s = e("@plasmohq/storage");
          let i = new s.Storage(),
            n = async (e, t) => {
              try {
                let r = await i.get("installation_id"),
                  s = {
                    method: "POST",
                    headers: {
                      Accept: "application/json",
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      license: e.body.license,
                      extension_id: "reply-ninja",
                      installation_id: r,
                    }),
                  },
                  n = await fetch("https://xtensions.pro/api/licenses", s),
                  a = await n.json();
                a.error
                  ? t.send({ success: !1, message: a.error })
                  : (await i.set("enterprise_license", e.body.license),
                    t.send({ success: !0 }));
              } catch (e) {
                t.send({ success: !1, message: e });
              }
            };
          r.default = n;
        },
        {
          "@plasmohq/storage": "d6Dja",
          "@parcel/transformer-js/src/esmodule-helpers.js": "hbR2Q",
        },
      ],
      d6Dja: [
        function (e, t, r) {
          var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
          s.defineInteropFlag(r),
            s.export(r, "BaseStorage", () => o),
            s.export(r, "Storage", () => l);
          var i = e("pify"),
            n = s.interopDefault(i),
            a = () => {
              try {
                let e =
                  globalThis.navigator?.userAgent.match(
                    /(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i
                  ) || [];
                if ("Chrome" === e[1])
                  return (
                    100 > parseInt(e[2]) ||
                    globalThis.chrome.runtime?.getManifest()
                      ?.manifest_version === 2
                  );
              } catch {}
              return !1;
            },
            o = class {
              #e;
              #t;
              get primaryClient() {
                return this.#t;
              }
              #r;
              get secondaryClient() {
                return this.#r;
              }
              #s;
              get area() {
                return this.#s;
              }
              get hasWebApi() {
                try {
                  return "u" > typeof window && !!window.localStorage;
                } catch (e) {
                  return console.error(e), !1;
                }
              }
              #i = new Map();
              #n;
              get copiedKeySet() {
                return this.#n;
              }
              isCopied = (e) =>
                this.hasWebApi && (this.allCopied || this.copiedKeySet.has(e));
              #a = !1;
              get allCopied() {
                return this.#a;
              }
              getExtStorageApi = () =>
                globalThis.browser?.storage || globalThis.chrome?.storage;
              get hasExtensionApi() {
                try {
                  return !!this.getExtStorageApi();
                } catch (e) {
                  return console.error(e), !1;
                }
              }
              isWatchSupported = () => this.hasExtensionApi;
              keyNamespace = "";
              isValidKey = (e) => e.startsWith(this.keyNamespace);
              getNamespacedKey = (e) => `${this.keyNamespace}${e}`;
              getUnnamespacedKey = (e) => e.slice(this.keyNamespace.length);
              serde = { serializer: JSON.stringify, deserializer: JSON.parse };
              constructor({
                area: e = "sync",
                allCopied: t = !1,
                copiedKeyList: r = [],
                serde: s = {},
              } = {}) {
                this.setCopiedKeySet(r),
                  (this.#s = e),
                  (this.#a = t),
                  (this.serde = { ...this.serde, ...s });
                try {
                  this.hasWebApi &&
                    (t || r.length > 0) &&
                    (this.#r = window.localStorage);
                } catch {}
                try {
                  this.hasExtensionApi &&
                    ((this.#e = this.getExtStorageApi()),
                    a()
                      ? (this.#t = (0, n.default)(this.#e[this.area], {
                          exclude: ["getBytesInUse"],
                          errorFirst: !1,
                        }))
                      : (this.#t = this.#e[this.area]));
                } catch {}
              }
              setCopiedKeySet(e) {
                this.#n = new Set(e);
              }
              rawGetAll = () => this.#t?.get();
              getAll = async () =>
                Object.entries(await this.rawGetAll())
                  .filter(([e]) => this.isValidKey(e))
                  .reduce(
                    (e, [t, r]) => ((e[this.getUnnamespacedKey(t)] = r), e),
                    {}
                  );
              copy = async (e) => {
                let t = void 0 === e;
                if (
                  (!t && !this.copiedKeySet.has(e)) ||
                  !this.allCopied ||
                  !this.hasExtensionApi
                )
                  return !1;
                let r = this.allCopied
                  ? await this.rawGetAll()
                  : await this.#t.get(
                      (t ? [...this.copiedKeySet] : [e]).map(
                        this.getNamespacedKey
                      )
                    );
                if (!r) return !1;
                let s = !1;
                for (let e in r) {
                  let t = r[e],
                    i = this.#r?.getItem(e);
                  this.#r?.setItem(e, t), (s ||= t !== i);
                }
                return s;
              };
              rawGet = async (e) => (await this.rawGetMany([e]))[e];
              rawGetMany = async (e) =>
                this.hasExtensionApi
                  ? await this.#t.get(e)
                  : e
                      .filter(this.isCopied)
                      .reduce((e, t) => ((e[t] = this.#r?.getItem(t)), e), {});
              rawSet = async (e, t) => await this.rawSetMany({ [e]: t });
              rawSetMany = async (e) => (
                this.#r &&
                  Object.entries(e)
                    .filter(([e]) => this.isCopied(e))
                    .forEach(([e, t]) => this.#r.setItem(e, t)),
                this.hasExtensionApi && (await this.#t.set(e)),
                null
              );
              clear = async (e = !1) => {
                e && this.#r?.clear(), await this.#t.clear();
              };
              rawRemove = async (e) => {
                await this.rawRemoveMany([e]);
              };
              rawRemoveMany = async (e) => {
                this.#r &&
                  e.filter(this.isCopied).forEach((e) => this.#r.removeItem(e)),
                  this.hasExtensionApi && (await this.#t.remove(e));
              };
              removeAll = async () => {
                let e = Object.keys(await this.getAll());
                await this.removeMany(e);
              };
              watch = (e) => {
                let t = this.isWatchSupported();
                return t && this.#o(e), t;
              };
              #o = (e) => {
                for (let t in e) {
                  let r = this.getNamespacedKey(t),
                    s = this.#i.get(r)?.callbackSet || new Set();
                  if ((s.add(e[t]), s.size > 1)) continue;
                  let i = (e, t) => {
                    if (t !== this.area || !e[r]) return;
                    let s = this.#i.get(r);
                    if (!s)
                      throw Error(
                        `Storage comms does not exist for nsKey: ${r}`
                      );
                    Promise.all([
                      this.parseValue(e[r].newValue),
                      this.parseValue(e[r].oldValue),
                    ]).then(([e, r]) => {
                      for (let i of s.callbackSet)
                        i({ newValue: e, oldValue: r }, t);
                    });
                  };
                  this.#e.onChanged.addListener(i),
                    this.#i.set(r, { callbackSet: s, listener: i });
                }
              };
              unwatch = (e) => {
                let t = this.isWatchSupported();
                return t && this.#l(e), t;
              };
              #l(e) {
                for (let t in e) {
                  let r = this.getNamespacedKey(t),
                    s = e[t],
                    i = this.#i.get(r);
                  i &&
                    (i.callbackSet.delete(s),
                    0 === i.callbackSet.size &&
                      (this.#i.delete(r),
                      this.#e.onChanged.removeListener(i.listener)));
                }
              }
              unwatchAll = () => this.#c();
              #c() {
                this.#i.forEach(({ listener: e }) =>
                  this.#e.onChanged.removeListener(e)
                ),
                  this.#i.clear();
              }
              async getItem(e) {
                return this.get(e);
              }
              async getItems(e) {
                return await this.getMany(e);
              }
              async setItem(e, t) {
                await this.set(e, t);
              }
              async setItems(e) {
                await await this.setMany(e);
              }
              async removeItem(e) {
                return this.remove(e);
              }
              async removeItems(e) {
                return await this.removeMany(e);
              }
            },
            l = class extends o {
              get = async (e) => {
                let t = this.getNamespacedKey(e),
                  r = await this.rawGet(t);
                return this.parseValue(r);
              };
              getMany = async (e) => {
                let t = e.map(this.getNamespacedKey),
                  r = await this.rawGetMany(t),
                  s = await Promise.all(Object.values(r).map(this.parseValue));
                return Object.keys(r).reduce(
                  (e, t, r) => ((e[this.getUnnamespacedKey(t)] = s[r]), e),
                  {}
                );
              };
              set = async (e, t) => {
                let r = this.getNamespacedKey(e),
                  s = this.serde.serializer(t);
                return this.rawSet(r, s);
              };
              setMany = async (e) => {
                let t = Object.entries(e).reduce(
                  (e, [t, r]) => (
                    (e[this.getNamespacedKey(t)] = this.serde.serializer(r)), e
                  ),
                  {}
                );
                return await this.rawSetMany(t);
              };
              remove = async (e) => {
                let t = this.getNamespacedKey(e);
                return this.rawRemove(t);
              };
              removeMany = async (e) => {
                let t = e.map(this.getNamespacedKey);
                return await this.rawRemoveMany(t);
              };
              setNamespace = (e) => {
                this.keyNamespace = e;
              };
              parseValue = async (e) => {
                try {
                  if (void 0 !== e) return this.serde.deserializer(e);
                } catch (e) {
                  console.error(e);
                }
              };
            };
        },
        {
          pify: "9arDK",
          "@parcel/transformer-js/src/esmodule-helpers.js": "hbR2Q",
        },
      ],
      "9arDK": [
        function (e, t, r) {
          var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
          s.defineInteropFlag(r), s.export(r, "default", () => a);
          let i = (e, t, r, s) =>
              function (...i) {
                let n = t.promiseModule;
                return new n((n, a) => {
                  t.multiArgs
                    ? i.push((...e) => {
                        t.errorFirst ? (e[0] ? a(e) : (e.shift(), n(e))) : n(e);
                      })
                    : t.errorFirst
                    ? i.push((e, t) => {
                        e ? a(e) : n(t);
                      })
                    : i.push(n);
                  let o = this === r ? s : this;
                  Reflect.apply(e, o, i);
                });
              },
            n = new WeakMap();
          function a(e, t) {
            t = {
              exclude: [/.+(?:Sync|Stream)$/],
              errorFirst: !0,
              promiseModule: Promise,
              ...t,
            };
            let r = typeof e;
            if (!(null !== e && ("object" === r || "function" === r)))
              throw TypeError(
                `Expected \`input\` to be a \`Function\` or \`Object\`, got \`${
                  null === e ? "null" : r
                }\``
              );
            let s = (e, r) => {
                let s = n.get(e);
                if ((s || ((s = {}), n.set(e, s)), r in s)) return s[r];
                let i = (e) =>
                    "string" == typeof e || "symbol" == typeof r
                      ? r === e
                      : e.test(r),
                  a = Reflect.getOwnPropertyDescriptor(e, r),
                  o = void 0 === a || a.writable || a.configurable,
                  l = t.include
                    ? t.include.some((e) => i(e))
                    : !t.exclude.some((e) => i(e)),
                  c = l && o;
                return (s[r] = c), c;
              },
              a = new WeakMap(),
              o = new Proxy(e, {
                apply(e, r, s) {
                  let n = a.get(e);
                  if (n) return Reflect.apply(n, r, s);
                  let l = t.excludeMain ? e : i(e, t, o, e);
                  return a.set(e, l), Reflect.apply(l, r, s);
                },
                get(e, r) {
                  let n = e[r];
                  if (!s(e, r) || n === Function.prototype[r]) return n;
                  let l = a.get(n);
                  if (l) return l;
                  if ("function" == typeof n) {
                    let r = i(n, t, o, e);
                    return a.set(n, r), r;
                  }
                  return n;
                },
              });
            return o;
          }
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "hbR2Q" },
      ],
      hbR2Q: [
        function (e, t, r) {
          (r.interopDefault = function (e) {
            return e && e.__esModule ? e : { default: e };
          }),
            (r.defineInteropFlag = function (e) {
              Object.defineProperty(e, "__esModule", { value: !0 });
            }),
            (r.exportAll = function (e, t) {
              return (
                Object.keys(e).forEach(function (r) {
                  "default" === r ||
                    "__esModule" === r ||
                    t.hasOwnProperty(r) ||
                    Object.defineProperty(t, r, {
                      enumerable: !0,
                      get: function () {
                        return e[r];
                      },
                    });
                }),
                t
              );
            }),
            (r.export = function (e, t, r) {
              Object.defineProperty(e, t, { enumerable: !0, get: r });
            });
        },
        {},
      ],
      aGgjx: [
        function (e, t, r) {
          e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(
            r
          );
          var s = e("@plasmohq/storage");
          let i = new s.Storage(),
            n = async (e, t) => {
              let r = await i.get("installation_id");
              try {
                let s = await fetch(
                  "https://xtensions.pro/api/activate-payment",
                  {
                    method: "POST",
                    headers: {
                      Accept: "application/json",
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      installation_id: r,
                      extension_id: "reply-ninja",
                      user_id: e.body.id,
                      email: e.body.email,
                    }),
                  }
                );
                await s.json(), t.send({ success: !0 });
              } catch (e) {
                e && t.send({ success: !1 });
              }
            };
          r.default = n;
        },
        {
          "@plasmohq/storage": "d6Dja",
          "@parcel/transformer-js/src/esmodule-helpers.js": "hbR2Q",
        },
      ],
      "9JrCX": [
        function (e, t, r) {
          e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(
            r
          );
          var s = e("@plasmohq/storage");
          let i = async (e, t) => {
            try {
              let r = new s.Storage({ area: "local" }),
                i = await r.get("agent-x-running-tabs");
              "startBot" == e.action
                ? (await r.set("agent-x-running-tabs", { ...i, [e.tabId]: !0 }),
                  chrome.tabs.sendMessage(e.tabId, {
                    action: "setTabID",
                    yourTabID: e.tabId,
                  }),
                  chrome.tabs.sendMessage(e.tabId, { action: "startBot" }))
                : "stopBot" == e.action &&
                  (await r.set("agent-x-running-tabs", { ...i, [e.tabId]: !1 }),
                  chrome.tabs.sendMessage(e.tabId, { action: "stopBot" })),
                t.send({ success: !0 });
            } catch (e) {
              t.send({ success: !1 });
            }
          };
          r.default = i;
        },
        {
          "@plasmohq/storage": "d6Dja",
          "@parcel/transformer-js/src/esmodule-helpers.js": "hbR2Q",
        },
      ],
      "45UhA": [
        function (e, t, r) {
          e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(
            r
          );
          let s = async (e, t) => {
            e.sender?.tab?.id
              ? (chrome.tabs.sendMessage(e.sender.tab.id, e.body),
                console.log("sent message"),
                t.send({ success: !0, tabId: e.sender.tab.id }))
              : (console.log("no active tab"),
                t.send({ success: !1, error: "No active tab found" }));
          };
          r.default = s;
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "hbR2Q" },
      ],
      hRypJ: [
        function (e, t, r) {
          e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(
            r
          );
          var s = e("@plasmohq/storage");
          let i = new s.Storage(),
            n = async (e, t) => {
              try {
                let e = await i.get("installation_id"),
                  r = await i.get("enterprise_license"),
                  s = await i.get("user"),
                  n = { u: s?.id, x: "reply-ninja", i: e };
                r && (n.l = r);
                let a = new URLSearchParams(n).toString(),
                  o = await fetch(
                    `https://xtensions.pro/api/payment-status?${a}`
                  ),
                  l = await o.json();
                l.error
                  ? t.send({ success: !1, message: l.error })
                  : ("active" == l.status
                      ? (l.quick = "following")
                      : (l.quick = null),
                    t.send({ success: !0, data: l }));
              } catch (e) {
                t.send({ success: !1, message: e });
              }
            };
          r.default = n;
        },
        {
          "@plasmohq/storage": "d6Dja",
          "@parcel/transformer-js/src/esmodule-helpers.js": "hbR2Q",
        },
      ],
      "39szc": [
        function (e, t, r) {
          e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(
            r
          ),
            new (e("@plasmohq/storage").Storage)();
          let s = async (e, t) => {
            try {
              let r = await fetch(
                "https://xtensions.pro/api/create-coinbase-charge",
                {
                  method: "POST",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    extension_id: "reply-ninja",
                    user_id: e.body.user_id,
                    email: e.body.email,
                    months: e.body.months,
                  }),
                }
              );
              if (!r.ok) throw Error("Something went wrong...");
              let s = await r.json();
              t.send({ success: !0, data: s });
            } catch (e) {
              e && t.send({ success: !1, message: e });
            }
          };
          r.default = s;
        },
        {
          "@plasmohq/storage": "d6Dja",
          "@parcel/transformer-js/src/esmodule-helpers.js": "hbR2Q",
        },
      ],
      d4BOm: [
        function (e, t, r) {
          e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(
            r
          );
          var s = e("@plasmohq/storage");
          let i = new s.Storage(),
            n = async (e, t) => {
              try {
                let r = await i.get("installation_id"),
                  s = {
                    method: "DELETE",
                    headers: {
                      Accept: "application/json",
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      license: e.body.license,
                      extension_id: "reply-ninja",
                      installation_id: r,
                    }),
                  },
                  n = await fetch("https://xtensions.pro/api/licenses", s),
                  a = await n.json();
                a.error
                  ? t.send({ success: !1, message: a.error })
                  : (await i.set("enterprise_license", e.body.license),
                    t.send({ success: !0 }));
              } catch (e) {
                t.send({ success: !1, message: e });
              }
            };
          r.default = n;
        },
        {
          "@plasmohq/storage": "d6Dja",
          "@parcel/transformer-js/src/esmodule-helpers.js": "hbR2Q",
        },
      ],
      h8Eb3: [
        function (e, t, r) {
          e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(
            r
          );
          var s = e("@plasmohq/storage");
          let i = new s.Storage({ area: "local" }),
            n = new s.Storage(),
            a = async (e, t) => {
              try {
                let r = chrome.runtime.getManifest(),
                  s = r.version,
                  a = await n.get("installation_id"),
                  o = await n.get("enterprise_license"),
                  l = await n.get("user"),
                  c = await i.get("latestTweets"),
                  h = c.find(
                    (t) =>
                      t.tweetId === e.pageTweetId ||
                      t.replies?.find((t) => t.id === e.pageTweetId)
                  );
                if (!h)
                  throw Error("Error loading tweet. Try refreshing the page.");
                let u = {
                    method: "POST",
                    headers: {
                      Accept: "application/json",
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      ...h,
                      replyToId: e.pageTweetId,
                      u: l?.id,
                      i: a,
                      l: o,
                      v: s,
                      x: "reply-ninja",
                    }),
                  },
                  d = await fetch("http://localhost:3000/processTweet", u),
                  p = await d.json();
                if (!d.ok) throw p;
                t.send(p);
              } catch (e) {
                t.send({
                  isError: !0,
                  message: e.message ?? "Something went wrong...",
                });
              }
            };
          r.default = a;
        },
        {
          "@plasmohq/storage": "d6Dja",
          "@parcel/transformer-js/src/esmodule-helpers.js": "hbR2Q",
        },
      ],
      k1gDo: [
        (e, t, r) => {
          const { defineInteropFlag } = e(
            "@parcel/transformer-js/src/esmodule-helpers.js"
          );
          defineInteropFlag(r);

          const { Storage } = e("@plasmohq/storage");
          const localStorage = new Storage({ area: "local" });
          const globalStorage = new Storage();

          const fetchReplies = async (request, response) => {
            try {
              // Retrieve necessary data from storage
              const installationId = await globalStorage.get("installation_id");
              const enterpriseLicense = await globalStorage.get(
                "enterprise_license"
              );
              const user = await globalStorage.get("user");

              // Construct query parameters
              const queryParams = {
                u: user?.id,
                x: "reply-ninja",
                i: installationId,
              };

              if (enterpriseLicense) {
                queryParams.l = enterpriseLicense;
              }

              // Prepare URL and fetch API
              const queryString = new URLSearchParams(queryParams).toString();
              const responseObj = await fetch(
                `https://xtensions.pro/api/replies-available?${queryString}`,
                {
                  method: "GET",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  },
                }
              );

              let responseData = await responseObj.json();

              // Modify response data as per requirement
              responseData.message =
                responseData.remainingReplies > 0
                  ? "You still have replies left!"
                  : "You have used all your allowed replies.";

              // You can also modify the response fields like this:
              responseData.allowedReplies = 100; // Reset allowed replies to 10
              responseData.remainingReplies = 100; // Reset remaining replies
              responseData.isFree = false; // Set to false to indicate it's not free anymore

              // Check for errors
              if (!responseObj.ok) {
                throw responseData;
              }

              // Send success response
              response.send(responseData);
            } catch (error) {
              // Handle errors and send error response
              response.send({
                isError: true,
                message: error.message || error,
                errorType: typeof error,
                stack: error.stack || "No stack available",
              });
            }
          };

          r.default = fetchReplies;
        },
        {
          "@plasmohq/storage": "d6Dja",
          "@parcel/transformer-js/src/esmodule-helpers.js": "hbR2Q",
        },
      ],
      "6b7iX": [
        function (e, t, r) {
          e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(
            r
          );
          let s = async (e, t) => {
            try {
              let e = await fetch(
                  "https://xtensions.pro/api/extension-info/reply-ninja",
                  {
                    method: "GET",
                    headers: {
                      Accept: "application/json",
                      "Content-Type": "application/json",
                    },
                  }
                ),
                r = await e.json();
              if (!e.ok) throw r;
              t.send(r);
            } catch (e) {
              t.send({ isError: !0, message: e.message ?? e });
            }
          };
          r.default = s;
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "hbR2Q" },
      ],
      jYqfO: [
        function (e, t, r) {
          e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(
            r
          );
          var s = e("@plasmohq/storage");
          let i = new s.Storage(),
            n = async (e, t) => {
              try {
                let e = await i.get("settings");
                t.send(e);
              } catch (e) {
                t.send({ success: !1, message: e });
              }
            };
          r.default = n;
        },
        {
          "@plasmohq/storage": "d6Dja",
          "@parcel/transformer-js/src/esmodule-helpers.js": "hbR2Q",
        },
      ],
      "9WmkF": [
        function (e, t, r) {
          e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(
            r
          );
          let s = async (e, t, r) => {
            try {
              t.send({ success: !0, tabId: e.sender.tab.id });
            } catch (e) {
              t.send({ success: !1 });
            }
          };
          r.default = s;
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "hbR2Q" },
      ],
      lzEE8: [
        function (e, t, r) {
          e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(
            r
          );
          var s = e("core/supabase");
          new (e("@plasmohq/storage").Storage)();
          let i = async (e, t) => {
            await (0, s.supabase).auth.setSession(e.body),
              t.send({ success: !0 });
          };
          r.default = i;
        },
        {
          "core/supabase": "9q9KP",
          "@plasmohq/storage": "d6Dja",
          "@parcel/transformer-js/src/esmodule-helpers.js": "hbR2Q",
        },
      ],
      "9q9KP": [
        function (e, t, r) {
          var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
          s.defineInteropFlag(r), s.export(r, "supabase", () => o);
          var i = e("@supabase/supabase-js"),
            n = e("@plasmohq/storage");
          let a = new n.Storage({ area: "local" }),
            o = (0, i.createClient)(
              "https://xgbtjpdswaudjhsbnpbn.supabase.co",
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhnYnRqcGRzd2F1ZGpoc2JucGJuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY0NDc0OTYsImV4cCI6MjAxMjAyMzQ5Nn0.Gxk8lidQjK21EVzBl7seDXcu5QgUPB1pjAu38_yw030",
              {
                auth: {
                  storage: a,
                  autoRefreshToken: !0,
                  persistSession: !0,
                  detectSessionInUrl: !0,
                },
              }
            );
        },
        {
          "@supabase/supabase-js": "d1Qgp",
          "@plasmohq/storage": "d6Dja",
          "@parcel/transformer-js/src/esmodule-helpers.js": "hbR2Q",
        },
      ],
      d1Qgp: [
        function (e, t, r) {
          var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
          s.defineInteropFlag(r),
            s.export(r, "FunctionsHttpError", () => o.FunctionsHttpError),
            s.export(r, "FunctionsFetchError", () => o.FunctionsFetchError),
            s.export(r, "FunctionsRelayError", () => o.FunctionsRelayError),
            s.export(r, "FunctionsError", () => o.FunctionsError),
            s.export(r, "SupabaseClient", () => n.default),
            s.export(r, "createClient", () => c);
          var i = e("./SupabaseClient"),
            n = s.interopDefault(i),
            a = e("@supabase/gotrue-js");
          s.exportAll(a, r);
          var o = e("@supabase/functions-js"),
            l = e("@supabase/realtime-js");
          s.exportAll(l, r);
          let c = (e, t, r) => new n.default(e, t, r);
        },
        {
          "./SupabaseClient": "iIBPi",
          "@supabase/gotrue-js": "214XC",
          "@supabase/functions-js": !1,
          "@supabase/realtime-js": "cfMaT",
          "@parcel/transformer-js/src/esmodule-helpers.js": "hbR2Q",
        },
      ],
      iIBPi: [
        function (e, t, r) {
          e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(
            r
          );
          var s = e("@supabase/functions-js"),
            i = e("@supabase/postgrest-js"),
            n = e("@supabase/realtime-js"),
            a = e("@supabase/storage-js"),
            o = e("./lib/constants"),
            l = e("./lib/fetch"),
            c = e("./lib/helpers"),
            h = e("./lib/SupabaseAuthClient");
          let u = { headers: o.DEFAULT_HEADERS },
            d = { schema: "public" },
            p = {
              autoRefreshToken: !0,
              persistSession: !0,
              detectSessionInUrl: !0,
              flowType: "implicit",
            },
            f = {};
          r.default = class {
            constructor(e, t, r) {
              var s, n, a, o, h, g, m, b;
              if (((this.supabaseUrl = e), (this.supabaseKey = t), !e))
                throw Error("supabaseUrl is required.");
              if (!t) throw Error("supabaseKey is required.");
              let y = (0, c.stripTrailingSlash)(e);
              (this.realtimeUrl = `${y}/realtime/v1`.replace(/^http/i, "ws")),
                (this.authUrl = `${y}/auth/v1`),
                (this.storageUrl = `${y}/storage/v1`),
                (this.functionsUrl = `${y}/functions/v1`);
              let v = `sb-${
                  new URL(this.authUrl).hostname.split(".")[0]
                }-auth-token`,
                _ = {
                  db: d,
                  realtime: f,
                  auth: Object.assign(Object.assign({}, p), { storageKey: v }),
                  global: u,
                },
                w = (0, c.applySettingDefaults)(null != r ? r : {}, _);
              (this.storageKey =
                null !==
                  (n =
                    null === (s = w.auth) || void 0 === s
                      ? void 0
                      : s.storageKey) && void 0 !== n
                  ? n
                  : ""),
                (this.headers =
                  null !==
                    (o =
                      null === (a = w.global) || void 0 === a
                        ? void 0
                        : a.headers) && void 0 !== o
                    ? o
                    : {}),
                (this.auth = this._initSupabaseAuthClient(
                  null !== (h = w.auth) && void 0 !== h ? h : {},
                  this.headers,
                  null === (g = w.global) || void 0 === g ? void 0 : g.fetch
                )),
                (this.fetch = (0, l.fetchWithAuth)(
                  t,
                  this._getAccessToken.bind(this),
                  null === (m = w.global) || void 0 === m ? void 0 : m.fetch
                )),
                (this.realtime = this._initRealtimeClient(
                  Object.assign({ headers: this.headers }, w.realtime)
                )),
                (this.rest = new i.PostgrestClient(`${y}/rest/v1`, {
                  headers: this.headers,
                  schema:
                    null === (b = w.db) || void 0 === b ? void 0 : b.schema,
                  fetch: this.fetch,
                })),
                this._listenForAuthEvents();
            }
            get functions() {
              return new s.FunctionsClient(this.functionsUrl, {
                headers: this.headers,
                customFetch: this.fetch,
              });
            }
            get storage() {
              return new a.StorageClient(
                this.storageUrl,
                this.headers,
                this.fetch
              );
            }
            from(e) {
              return this.rest.from(e);
            }
            schema(e) {
              return this.rest.schema(e);
            }
            rpc(e, t = {}, r) {
              return this.rest.rpc(e, t, r);
            }
            channel(e, t = { config: {} }) {
              return this.realtime.channel(e, t);
            }
            getChannels() {
              return this.realtime.getChannels();
            }
            removeChannel(e) {
              return this.realtime.removeChannel(e);
            }
            removeAllChannels() {
              return this.realtime.removeAllChannels();
            }
            _getAccessToken() {
              var e, t, r, s, i, n;
              return (
                (r = this),
                (s = void 0),
                (i = void 0),
                (n = function* () {
                  let { data: r } = yield this.auth.getSession();
                  return null !==
                    (t =
                      null === (e = r.session) || void 0 === e
                        ? void 0
                        : e.access_token) && void 0 !== t
                    ? t
                    : null;
                }),
                new (i || (i = Promise))(function (e, t) {
                  function a(e) {
                    try {
                      l(n.next(e));
                    } catch (e) {
                      t(e);
                    }
                  }
                  function o(e) {
                    try {
                      l(n.throw(e));
                    } catch (e) {
                      t(e);
                    }
                  }
                  function l(t) {
                    var r;
                    t.done
                      ? e(t.value)
                      : ((r = t.value) instanceof i
                          ? r
                          : new i(function (e) {
                              e(r);
                            })
                        ).then(a, o);
                  }
                  l((n = n.apply(r, s || [])).next());
                })
              );
            }
            _initSupabaseAuthClient(
              {
                autoRefreshToken: e,
                persistSession: t,
                detectSessionInUrl: r,
                storage: s,
                storageKey: i,
                flowType: n,
                debug: a,
              },
              o,
              l
            ) {
              let c = {
                Authorization: `Bearer ${this.supabaseKey}`,
                apikey: `${this.supabaseKey}`,
              };
              return new h.SupabaseAuthClient({
                url: this.authUrl,
                headers: Object.assign(Object.assign({}, c), o),
                storageKey: i,
                autoRefreshToken: e,
                persistSession: t,
                detectSessionInUrl: r,
                storage: s,
                flowType: n,
                debug: a,
                fetch: l,
              });
            }
            _initRealtimeClient(e) {
              return new n.RealtimeClient(
                this.realtimeUrl,
                Object.assign(Object.assign({}, e), {
                  params: Object.assign(
                    { apikey: this.supabaseKey },
                    null == e ? void 0 : e.params
                  ),
                })
              );
            }
            _listenForAuthEvents() {
              return this.auth.onAuthStateChange((e, t) => {
                this._handleTokenChanged(
                  e,
                  "CLIENT",
                  null == t ? void 0 : t.access_token
                );
              });
            }
            _handleTokenChanged(e, t, r) {
              ("TOKEN_REFRESHED" === e || "SIGNED_IN" === e) &&
              this.changedAccessToken !== r
                ? (this.realtime.setAuth(null != r ? r : null),
                  (this.changedAccessToken = r))
                : "SIGNED_OUT" === e &&
                  (this.realtime.setAuth(this.supabaseKey),
                  "STORAGE" == t && this.auth.signOut(),
                  (this.changedAccessToken = void 0));
            }
          };
        },
        {
          "@supabase/functions-js": "dXCBT",
          "@supabase/postgrest-js": "9sV8Y",
          "@supabase/realtime-js": "cfMaT",
          "@supabase/storage-js": "e2M2J",
          "./lib/constants": "kn5Fy",
          "./lib/fetch": "duFZb",
          "./lib/helpers": "i1iq2",
          "./lib/SupabaseAuthClient": "4udFA",
          "@parcel/transformer-js/src/esmodule-helpers.js": "hbR2Q",
        },
      ],
      dXCBT: [
        function (e, t, r) {
          var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
          s.defineInteropFlag(r),
            s.export(r, "FunctionsClient", () => i.FunctionsClient),
            s.export(r, "FunctionsError", () => n.FunctionsError),
            s.export(r, "FunctionsFetchError", () => n.FunctionsFetchError),
            s.export(r, "FunctionsHttpError", () => n.FunctionsHttpError),
            s.export(r, "FunctionsRelayError", () => n.FunctionsRelayError);
          var i = e("./FunctionsClient"),
            n = e("./types");
        },
        {
          "./FunctionsClient": "jzkYZ",
          "./types": "ejpNS",
          "@parcel/transformer-js/src/esmodule-helpers.js": "hbR2Q",
        },
      ],
      jzkYZ: [
        function (e, t, r) {
          var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
          s.defineInteropFlag(r), s.export(r, "FunctionsClient", () => a);
          var i = e("./helper"),
            n = e("./types");
          class a {
            constructor(e, { headers: t = {}, customFetch: r } = {}) {
              (this.url = e),
                (this.headers = t),
                (this.fetch = (0, i.resolveFetch)(r));
            }
            setAuth(e) {
              this.headers.Authorization = `Bearer ${e}`;
            }
            invoke(e, t = {}) {
              var r, s, i, a, o;
              return (
                (s = this),
                (i = void 0),
                (a = void 0),
                (o = function* () {
                  try {
                    let s;
                    let { headers: i, method: a, body: o } = t,
                      l = {};
                    o &&
                      ((i &&
                        !Object.prototype.hasOwnProperty.call(
                          i,
                          "Content-Type"
                        )) ||
                        !i) &&
                      (("undefined" != typeof Blob && o instanceof Blob) ||
                      o instanceof ArrayBuffer
                        ? ((l["Content-Type"] = "application/octet-stream"),
                          (s = o))
                        : "string" == typeof o
                        ? ((l["Content-Type"] = "text/plain"), (s = o))
                        : "undefined" != typeof FormData &&
                          o instanceof FormData
                        ? (s = o)
                        : ((l["Content-Type"] = "application/json"),
                          (s = JSON.stringify(o))));
                    let c = yield this.fetch(`${this.url}/${e}`, {
                        method: a || "POST",
                        headers: Object.assign(
                          Object.assign(Object.assign({}, l), this.headers),
                          i
                        ),
                        body: s,
                      }).catch((e) => {
                        throw new n.FunctionsFetchError(e);
                      }),
                      h = c.headers.get("x-relay-error");
                    if (h && "true" === h) throw new n.FunctionsRelayError(c);
                    if (!c.ok) throw new n.FunctionsHttpError(c);
                    let u = (
                      null !== (r = c.headers.get("Content-Type")) &&
                      void 0 !== r
                        ? r
                        : "text/plain"
                    )
                      .split(";")[0]
                      .trim();
                    return {
                      data:
                        "application/json" === u
                          ? yield c.json()
                          : "application/octet-stream" === u
                          ? yield c.blob()
                          : "multipart/form-data" === u
                          ? yield c.formData()
                          : yield c.text(),
                      error: null,
                    };
                  } catch (e) {
                    return { data: null, error: e };
                  }
                }),
                new (a || (a = Promise))(function (e, t) {
                  function r(e) {
                    try {
                      l(o.next(e));
                    } catch (e) {
                      t(e);
                    }
                  }
                  function n(e) {
                    try {
                      l(o.throw(e));
                    } catch (e) {
                      t(e);
                    }
                  }
                  function l(t) {
                    var s;
                    t.done
                      ? e(t.value)
                      : ((s = t.value) instanceof a
                          ? s
                          : new a(function (e) {
                              e(s);
                            })
                        ).then(r, n);
                  }
                  l((o = o.apply(s, i || [])).next());
                })
              );
            }
          }
        },
        {
          "./helper": "hOeHl",
          "./types": "ejpNS",
          "@parcel/transformer-js/src/esmodule-helpers.js": "hbR2Q",
        },
      ],
      hOeHl: [
        function (e, t, r) {
          var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
          s.defineInteropFlag(r), s.export(r, "resolveFetch", () => i);
          let i = (t) => {
            let r;
            return (
              (r =
                t ||
                ("undefined" == typeof fetch
                  ? (...t) =>
                      e("3a20110e4344548e").then(({ default: e }) => e(...t))
                  : fetch)),
              (...e) => r(...e)
            );
          };
        },
        {
          "3a20110e4344548e": "VHsL5",
          "@parcel/transformer-js/src/esmodule-helpers.js": "hbR2Q",
        },
      ],
      VHsL5: [
        function (e, t, r) {
          t.exports = e("3962c6220c71a945")(
            e("e0fa32a81d13bf0").getBundleURL("abzv4") +
              "../../" +
              e("7b2acc72d1bf9dfe").resolve("5212Q")
          ).then(() => t.bundle.root("aYemC"));
        },
        {
          "3962c6220c71a945": "kkv7s",
          e0fa32a81d13bf0: "1Ksod",
          "7b2acc72d1bf9dfe": "aOnzl",
        },
      ],
      kkv7s: [
        function (e, t, r) {
          var s = e("8cac51c89fd1baba");
          t.exports = s(function (e) {
            return new Promise(function (t, r) {
              try {
                importScripts(e), t();
              } catch (e) {
                r(e);
              }
            });
          });
        },
        { "8cac51c89fd1baba": "dRtkF" },
      ],
      dRtkF: [
        function (e, t, r) {
          var s = {},
            i = {},
            n = {};
          t.exports = function (e, t) {
            return function (r) {
              var a = (function (e) {
                switch (e) {
                  case "preload":
                    return i;
                  case "prefetch":
                    return n;
                  default:
                    return s;
                }
              })(t);
              return a[r]
                ? a[r]
                : (a[r] = e.apply(null, arguments).catch(function (e) {
                    throw (delete a[r], e);
                  }));
            };
          };
        },
        {},
      ],
      "1Ksod": [
        function (e, t, r) {
          var s = {};
          function i(e) {
            return (
              ("" + e).replace(
                /^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,
                "$1"
              ) + "/"
            );
          }
          (r.getBundleURL = function (e) {
            var t = s[e];
            return (
              t ||
                ((t = (function () {
                  try {
                    throw Error();
                  } catch (t) {
                    var e = ("" + t.stack).match(
                      /(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g
                    );
                    if (e) return i(e[2]);
                  }
                  return "/";
                })()),
                (s[e] = t)),
              t
            );
          }),
            (r.getBaseURL = i),
            (r.getOrigin = function (e) {
              var t = ("" + e).match(
                /(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/
              );
              if (!t) throw Error("Origin not found");
              return t[0];
            });
        },
        {},
      ],
      ejpNS: [
        function (e, t, r) {
          var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
          s.defineInteropFlag(r),
            s.export(r, "FunctionsError", () => i),
            s.export(r, "FunctionsFetchError", () => n),
            s.export(r, "FunctionsRelayError", () => a),
            s.export(r, "FunctionsHttpError", () => o);
          class i extends Error {
            constructor(e, t = "FunctionsError", r) {
              super(e), (this.name = t), (this.context = r);
            }
          }
          class n extends i {
            constructor(e) {
              super(
                "Failed to send a request to the Edge Function",
                "FunctionsFetchError",
                e
              );
            }
          }
          class a extends i {
            constructor(e) {
              super(
                "Relay Error invoking the Edge Function",
                "FunctionsRelayError",
                e
              );
            }
          }
          class o extends i {
            constructor(e) {
              super(
                "Edge Function returned a non-2xx status code",
                "FunctionsHttpError",
                e
              );
            }
          }
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "hbR2Q" },
      ],
      "9sV8Y": [
        function (e, t, r) {
          var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
          s.defineInteropFlag(r),
            s.export(r, "PostgrestClient", () => n.default),
            s.export(r, "PostgrestQueryBuilder", () => o.default),
            s.export(r, "PostgrestFilterBuilder", () => c.default),
            s.export(r, "PostgrestTransformBuilder", () => u.default),
            s.export(r, "PostgrestBuilder", () => p.default);
          var i = e("./PostgrestClient"),
            n = s.interopDefault(i),
            a = e("./PostgrestQueryBuilder"),
            o = s.interopDefault(a),
            l = e("./PostgrestFilterBuilder"),
            c = s.interopDefault(l),
            h = e("./PostgrestTransformBuilder"),
            u = s.interopDefault(h),
            d = e("./PostgrestBuilder"),
            p = s.interopDefault(d);
        },
        {
          "./PostgrestClient": "7pXLT",
          "./PostgrestQueryBuilder": "7QdzZ",
          "./PostgrestFilterBuilder": "jrklu",
          "./PostgrestTransformBuilder": "j48fj",
          "./PostgrestBuilder": "ijmOC",
          "@parcel/transformer-js/src/esmodule-helpers.js": "hbR2Q",
        },
      ],
      "7pXLT": [
        function (e, t, r) {
          var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
          s.defineInteropFlag(r);
          var i = e("./PostgrestQueryBuilder"),
            n = s.interopDefault(i),
            a = e("./PostgrestFilterBuilder"),
            o = s.interopDefault(a),
            l = e("./constants");
          class c {
            constructor(e, { headers: t = {}, schema: r, fetch: s } = {}) {
              (this.url = e),
                (this.headers = Object.assign(
                  Object.assign({}, l.DEFAULT_HEADERS),
                  t
                )),
                (this.schemaName = r),
                (this.fetch = s);
            }
            from(e) {
              let t = new URL(`${this.url}/${e}`);
              return new n.default(t, {
                headers: Object.assign({}, this.headers),
                schema: this.schemaName,
                fetch: this.fetch,
              });
            }
            schema(e) {
              return new c(this.url, {
                headers: this.headers,
                schema: e,
                fetch: this.fetch,
              });
            }
            rpc(e, t = {}, { head: r = !1, count: s } = {}) {
              let i, n;
              let a = new URL(`${this.url}/rpc/${e}`);
              r
                ? ((i = "HEAD"),
                  Object.entries(t).forEach(([e, t]) => {
                    a.searchParams.append(e, `${t}`);
                  }))
                : ((i = "POST"), (n = t));
              let l = Object.assign({}, this.headers);
              return (
                s && (l.Prefer = `count=${s}`),
                new o.default({
                  method: i,
                  url: a,
                  headers: l,
                  schema: this.schemaName,
                  body: n,
                  fetch: this.fetch,
                  allowEmpty: !1,
                })
              );
            }
          }
          r.default = c;
        },
        {
          "./PostgrestQueryBuilder": "7QdzZ",
          "./PostgrestFilterBuilder": "jrklu",
          "./constants": "e1Dre",
          "@parcel/transformer-js/src/esmodule-helpers.js": "hbR2Q",
        },
      ],
      "7QdzZ": [
        function (e, t, r) {
          var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
          s.defineInteropFlag(r);
          var i = e("./PostgrestFilterBuilder"),
            n = s.interopDefault(i);
          r.default = class {
            constructor(e, { headers: t = {}, schema: r, fetch: s }) {
              (this.url = e),
                (this.headers = t),
                (this.schema = r),
                (this.fetch = s);
            }
            select(e, { head: t = !1, count: r } = {}) {
              let s = !1,
                i = (null != e ? e : "*")
                  .split("")
                  .map((e) =>
                    /\s/.test(e) && !s ? "" : ('"' === e && (s = !s), e)
                  )
                  .join("");
              return (
                this.url.searchParams.set("select", i),
                r && (this.headers.Prefer = `count=${r}`),
                new n.default({
                  method: t ? "HEAD" : "GET",
                  url: this.url,
                  headers: this.headers,
                  schema: this.schema,
                  fetch: this.fetch,
                  allowEmpty: !1,
                })
              );
            }
            insert(e, { count: t, defaultToNull: r = !0 } = {}) {
              let s = [];
              if (
                (this.headers.Prefer && s.push(this.headers.Prefer),
                t && s.push(`count=${t}`),
                r || s.push("missing=default"),
                (this.headers.Prefer = s.join(",")),
                Array.isArray(e))
              ) {
                let t = e.reduce((e, t) => e.concat(Object.keys(t)), []);
                if (t.length > 0) {
                  let e = [...new Set(t)].map((e) => `"${e}"`);
                  this.url.searchParams.set("columns", e.join(","));
                }
              }
              return new n.default({
                method: "POST",
                url: this.url,
                headers: this.headers,
                schema: this.schema,
                body: e,
                fetch: this.fetch,
                allowEmpty: !1,
              });
            }
            upsert(
              e,
              {
                onConflict: t,
                ignoreDuplicates: r = !1,
                count: s,
                defaultToNull: i = !0,
              } = {}
            ) {
              let a = [`resolution=${r ? "ignore" : "merge"}-duplicates`];
              if (
                (void 0 !== t && this.url.searchParams.set("on_conflict", t),
                this.headers.Prefer && a.push(this.headers.Prefer),
                s && a.push(`count=${s}`),
                i || a.push("missing=default"),
                (this.headers.Prefer = a.join(",")),
                Array.isArray(e))
              ) {
                let t = e.reduce((e, t) => e.concat(Object.keys(t)), []);
                if (t.length > 0) {
                  let e = [...new Set(t)].map((e) => `"${e}"`);
                  this.url.searchParams.set("columns", e.join(","));
                }
              }
              return new n.default({
                method: "POST",
                url: this.url,
                headers: this.headers,
                schema: this.schema,
                body: e,
                fetch: this.fetch,
                allowEmpty: !1,
              });
            }
            update(e, { count: t } = {}) {
              let r = [];
              return (
                this.headers.Prefer && r.push(this.headers.Prefer),
                t && r.push(`count=${t}`),
                (this.headers.Prefer = r.join(",")),
                new n.default({
                  method: "PATCH",
                  url: this.url,
                  headers: this.headers,
                  schema: this.schema,
                  body: e,
                  fetch: this.fetch,
                  allowEmpty: !1,
                })
              );
            }
            delete({ count: e } = {}) {
              let t = [];
              return (
                e && t.push(`count=${e}`),
                this.headers.Prefer && t.unshift(this.headers.Prefer),
                (this.headers.Prefer = t.join(",")),
                new n.default({
                  method: "DELETE",
                  url: this.url,
                  headers: this.headers,
                  schema: this.schema,
                  fetch: this.fetch,
                  allowEmpty: !1,
                })
              );
            }
          };
        },
        {
          "./PostgrestFilterBuilder": "jrklu",
          "@parcel/transformer-js/src/esmodule-helpers.js": "hbR2Q",
        },
      ],
      jrklu: [
        function (e, t, r) {
          var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
          s.defineInteropFlag(r);
          var i = e("./PostgrestTransformBuilder"),
            n = s.interopDefault(i);
          class a extends n.default {
            eq(e, t) {
              return this.url.searchParams.append(e, `eq.${t}`), this;
            }
            neq(e, t) {
              return this.url.searchParams.append(e, `neq.${t}`), this;
            }
            gt(e, t) {
              return this.url.searchParams.append(e, `gt.${t}`), this;
            }
            gte(e, t) {
              return this.url.searchParams.append(e, `gte.${t}`), this;
            }
            lt(e, t) {
              return this.url.searchParams.append(e, `lt.${t}`), this;
            }
            lte(e, t) {
              return this.url.searchParams.append(e, `lte.${t}`), this;
            }
            like(e, t) {
              return this.url.searchParams.append(e, `like.${t}`), this;
            }
            likeAllOf(e, t) {
              return (
                this.url.searchParams.append(e, `like(all).{${t.join(",")}}`),
                this
              );
            }
            likeAnyOf(e, t) {
              return (
                this.url.searchParams.append(e, `like(any).{${t.join(",")}}`),
                this
              );
            }
            ilike(e, t) {
              return this.url.searchParams.append(e, `ilike.${t}`), this;
            }
            ilikeAllOf(e, t) {
              return (
                this.url.searchParams.append(e, `ilike(all).{${t.join(",")}}`),
                this
              );
            }
            ilikeAnyOf(e, t) {
              return (
                this.url.searchParams.append(e, `ilike(any).{${t.join(",")}}`),
                this
              );
            }
            is(e, t) {
              return this.url.searchParams.append(e, `is.${t}`), this;
            }
            in(e, t) {
              let r = t
                .map((e) =>
                  "string" == typeof e && RegExp("[,()]").test(e)
                    ? `"${e}"`
                    : `${e}`
                )
                .join(",");
              return this.url.searchParams.append(e, `in.(${r})`), this;
            }
            contains(e, t) {
              return (
                "string" == typeof t
                  ? this.url.searchParams.append(e, `cs.${t}`)
                  : Array.isArray(t)
                  ? this.url.searchParams.append(e, `cs.{${t.join(",")}}`)
                  : this.url.searchParams.append(e, `cs.${JSON.stringify(t)}`),
                this
              );
            }
            containedBy(e, t) {
              return (
                "string" == typeof t
                  ? this.url.searchParams.append(e, `cd.${t}`)
                  : Array.isArray(t)
                  ? this.url.searchParams.append(e, `cd.{${t.join(",")}}`)
                  : this.url.searchParams.append(e, `cd.${JSON.stringify(t)}`),
                this
              );
            }
            rangeGt(e, t) {
              return this.url.searchParams.append(e, `sr.${t}`), this;
            }
            rangeGte(e, t) {
              return this.url.searchParams.append(e, `nxl.${t}`), this;
            }
            rangeLt(e, t) {
              return this.url.searchParams.append(e, `sl.${t}`), this;
            }
            rangeLte(e, t) {
              return this.url.searchParams.append(e, `nxr.${t}`), this;
            }
            rangeAdjacent(e, t) {
              return this.url.searchParams.append(e, `adj.${t}`), this;
            }
            overlaps(e, t) {
              return (
                "string" == typeof t
                  ? this.url.searchParams.append(e, `ov.${t}`)
                  : this.url.searchParams.append(e, `ov.{${t.join(",")}}`),
                this
              );
            }
            textSearch(e, t, { config: r, type: s } = {}) {
              let i = "";
              "plain" === s
                ? (i = "pl")
                : "phrase" === s
                ? (i = "ph")
                : "websearch" === s && (i = "w");
              let n = void 0 === r ? "" : `(${r})`;
              return this.url.searchParams.append(e, `${i}fts${n}.${t}`), this;
            }
            match(e) {
              return (
                Object.entries(e).forEach(([e, t]) => {
                  this.url.searchParams.append(e, `eq.${t}`);
                }),
                this
              );
            }
            not(e, t, r) {
              return this.url.searchParams.append(e, `not.${t}.${r}`), this;
            }
            or(e, { foreignTable: t } = {}) {
              let r = t ? `${t}.or` : "or";
              return this.url.searchParams.append(r, `(${e})`), this;
            }
            filter(e, t, r) {
              return this.url.searchParams.append(e, `${t}.${r}`), this;
            }
          }
          r.default = a;
        },
        {
          "./PostgrestTransformBuilder": "j48fj",
          "@parcel/transformer-js/src/esmodule-helpers.js": "hbR2Q",
        },
      ],
      j48fj: [
        function (e, t, r) {
          var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
          s.defineInteropFlag(r);
          var i = e("./PostgrestBuilder"),
            n = s.interopDefault(i);
          class a extends n.default {
            select(e) {
              let t = !1,
                r = (null != e ? e : "*")
                  .split("")
                  .map((e) =>
                    /\s/.test(e) && !t ? "" : ('"' === e && (t = !t), e)
                  )
                  .join("");
              return (
                this.url.searchParams.set("select", r),
                this.headers.Prefer && (this.headers.Prefer += ","),
                (this.headers.Prefer += "return=representation"),
                this
              );
            }
            order(
              e,
              { ascending: t = !0, nullsFirst: r, foreignTable: s } = {}
            ) {
              let i = s ? `${s}.order` : "order",
                n = this.url.searchParams.get(i);
              return (
                this.url.searchParams.set(
                  i,
                  `${n ? `${n},` : ""}${e}.${t ? "asc" : "desc"}${
                    void 0 === r ? "" : r ? ".nullsfirst" : ".nullslast"
                  }`
                ),
                this
              );
            }
            limit(e, { foreignTable: t } = {}) {
              let r = void 0 === t ? "limit" : `${t}.limit`;
              return this.url.searchParams.set(r, `${e}`), this;
            }
            range(e, t, { foreignTable: r } = {}) {
              let s = void 0 === r ? "offset" : `${r}.offset`,
                i = void 0 === r ? "limit" : `${r}.limit`;
              return (
                this.url.searchParams.set(s, `${e}`),
                this.url.searchParams.set(i, `${t - e + 1}`),
                this
              );
            }
            abortSignal(e) {
              return (this.signal = e), this;
            }
            single() {
              return (
                (this.headers.Accept = "application/vnd.pgrst.object+json"),
                this
              );
            }
            maybeSingle() {
              return (
                "GET" === this.method
                  ? (this.headers.Accept = "application/json")
                  : (this.headers.Accept = "application/vnd.pgrst.object+json"),
                (this.isMaybeSingle = !0),
                this
              );
            }
            csv() {
              return (this.headers.Accept = "text/csv"), this;
            }
            geojson() {
              return (this.headers.Accept = "application/geo+json"), this;
            }
            explain({
              analyze: e = !1,
              verbose: t = !1,
              settings: r = !1,
              buffers: s = !1,
              wal: i = !1,
              format: n = "text",
            } = {}) {
              let a = [
                  e ? "analyze" : null,
                  t ? "verbose" : null,
                  r ? "settings" : null,
                  s ? "buffers" : null,
                  i ? "wal" : null,
                ]
                  .filter(Boolean)
                  .join("|"),
                o = this.headers.Accept;
              return (
                (this.headers.Accept = `application/vnd.pgrst.plan+${n}; for="${o}"; options=${a};`),
                this
              );
            }
            rollback() {
              var e;
              return (
                (null !== (e = this.headers.Prefer) && void 0 !== e
                  ? e
                  : ""
                ).trim().length > 0
                  ? (this.headers.Prefer += ",tx=rollback")
                  : (this.headers.Prefer = "tx=rollback"),
                this
              );
            }
            returns() {
              return this;
            }
          }
          r.default = a;
        },
        {
          "./PostgrestBuilder": "ijmOC",
          "@parcel/transformer-js/src/esmodule-helpers.js": "hbR2Q",
        },
      ],
      ijmOC: [
        function (e, t, r) {
          var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
          s.defineInteropFlag(r);
          var i = e("@supabase/node-fetch"),
            n = s.interopDefault(i);
          r.default = class {
            constructor(e) {
              (this.shouldThrowOnError = !1),
                (this.method = e.method),
                (this.url = e.url),
                (this.headers = e.headers),
                (this.schema = e.schema),
                (this.body = e.body),
                (this.shouldThrowOnError = e.shouldThrowOnError),
                (this.signal = e.signal),
                (this.isMaybeSingle = e.isMaybeSingle),
                e.fetch
                  ? (this.fetch = e.fetch)
                  : "undefined" == typeof fetch
                  ? (this.fetch = n.default)
                  : (this.fetch = fetch);
            }
            throwOnError() {
              return (this.shouldThrowOnError = !0), this;
            }
            then(e, t) {
              void 0 === this.schema ||
                (["GET", "HEAD"].includes(this.method)
                  ? (this.headers["Accept-Profile"] = this.schema)
                  : (this.headers["Content-Profile"] = this.schema)),
                "GET" !== this.method &&
                  "HEAD" !== this.method &&
                  (this.headers["Content-Type"] = "application/json");
              let r = this.fetch,
                s = r(this.url.toString(), {
                  method: this.method,
                  headers: this.headers,
                  body: JSON.stringify(this.body),
                  signal: this.signal,
                }).then(async (e) => {
                  var t, r, s;
                  let i = null,
                    n = null,
                    a = null,
                    o = e.status,
                    l = e.statusText;
                  if (e.ok) {
                    if ("HEAD" !== this.method) {
                      let t = await e.text();
                      "" === t ||
                        (n =
                          "text/csv" === this.headers.Accept
                            ? t
                            : this.headers.Accept &&
                              this.headers.Accept.includes(
                                "application/vnd.pgrst.plan+text"
                              )
                            ? t
                            : JSON.parse(t));
                    }
                    let s =
                        null === (t = this.headers.Prefer) || void 0 === t
                          ? void 0
                          : t.match(/count=(exact|planned|estimated)/),
                      c =
                        null === (r = e.headers.get("content-range")) ||
                        void 0 === r
                          ? void 0
                          : r.split("/");
                    s && c && c.length > 1 && (a = parseInt(c[1])),
                      this.isMaybeSingle &&
                        "GET" === this.method &&
                        Array.isArray(n) &&
                        (n.length > 1
                          ? ((i = {
                              code: "PGRST116",
                              details: `Results contain ${n.length} rows, application/vnd.pgrst.object+json requires 1 row`,
                              hint: null,
                              message:
                                "JSON object requested, multiple (or no) rows returned",
                            }),
                            (n = null),
                            (a = null),
                            (o = 406),
                            (l = "Not Acceptable"))
                          : (n = 1 === n.length ? n[0] : null));
                  } else {
                    let t = await e.text();
                    try {
                      (i = JSON.parse(t)),
                        Array.isArray(i) &&
                          404 === e.status &&
                          ((n = []), (i = null), (o = 200), (l = "OK"));
                    } catch (r) {
                      404 === e.status && "" === t
                        ? ((o = 204), (l = "No Content"))
                        : (i = { message: t });
                    }
                    if (
                      (i &&
                        this.isMaybeSingle &&
                        (null === (s = null == i ? void 0 : i.details) ||
                        void 0 === s
                          ? void 0
                          : s.includes("Results contain 0 rows")) &&
                        ((i = null), (o = 200), (l = "OK")),
                      i && this.shouldThrowOnError)
                    )
                      throw i;
                  }
                  let c = {
                    error: i,
                    data: n,
                    count: a,
                    status: o,
                    statusText: l,
                  };
                  return c;
                });
              return (
                this.shouldThrowOnError ||
                  (s = s.catch((e) => {
                    var t, r, s;
                    return {
                      error: {
                        message: `${
                          null !== (t = null == e ? void 0 : e.name) &&
                          void 0 !== t
                            ? t
                            : "FetchError"
                        }: ${null == e ? void 0 : e.message}`,
                        details: `${
                          null !== (r = null == e ? void 0 : e.stack) &&
                          void 0 !== r
                            ? r
                            : ""
                        }`,
                        hint: "",
                        code: `${
                          null !== (s = null == e ? void 0 : e.code) &&
                          void 0 !== s
                            ? s
                            : ""
                        }`,
                      },
                      data: null,
                      count: null,
                      status: 0,
                      statusText: "",
                    };
                  })),
                s.then(e, t)
              );
            }
          };
        },
        {
          "@supabase/node-fetch": "aYemC",
          "@parcel/transformer-js/src/esmodule-helpers.js": "hbR2Q",
        },
      ],
      aYemC: [
        function (e, t, r) {
          var s = arguments[3],
            i = (function () {
              if ("undefined" != typeof self) return self;
              if ("undefined" != typeof window) return window;
              if (void 0 !== s) return s;
              throw Error("unable to locate global object");
            })();
          (t.exports = r = i.fetch),
            i.fetch && (r.default = i.fetch.bind(i)),
            (r.Headers = i.Headers),
            (r.Request = i.Request),
            (r.Response = i.Response);
        },
        {},
      ],
      e1Dre: [
        function (e, t, r) {
          var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
          s.defineInteropFlag(r), s.export(r, "DEFAULT_HEADERS", () => n);
          var i = e("./version");
          let n = { "X-Client-Info": `postgrest-js/${i.version}` };
        },
        {
          "./version": "bn5OS",
          "@parcel/transformer-js/src/esmodule-helpers.js": "hbR2Q",
        },
      ],
      bn5OS: [
        function (e, t, r) {
          var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
          s.defineInteropFlag(r), s.export(r, "version", () => i);
          let i = "1.8.4";
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "hbR2Q" },
      ],
      cfMaT: [
        function (e, t, r) {
          var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
          s.defineInteropFlag(r),
            s.export(r, "RealtimePresence", () => c.default),
            s.export(r, "RealtimeChannel", () => o.default),
            s.export(r, "RealtimeClient", () => n.default),
            s.export(r, "REALTIME_LISTEN_TYPES", () => a.REALTIME_LISTEN_TYPES),
            s.export(
              r,
              "REALTIME_POSTGRES_CHANGES_LISTEN_EVENT",
              () => a.REALTIME_POSTGRES_CHANGES_LISTEN_EVENT
            ),
            s.export(
              r,
              "REALTIME_PRESENCE_LISTEN_EVENTS",
              () => l.REALTIME_PRESENCE_LISTEN_EVENTS
            ),
            s.export(
              r,
              "REALTIME_SUBSCRIBE_STATES",
              () => a.REALTIME_SUBSCRIBE_STATES
            );
          var i = e("./RealtimeClient"),
            n = s.interopDefault(i),
            a = e("./RealtimeChannel"),
            o = s.interopDefault(a),
            l = e("./RealtimePresence"),
            c = s.interopDefault(l);
        },
        {
          "./RealtimeClient": "afZlD",
          "./RealtimeChannel": "iSbep",
          "./RealtimePresence": "7maRr",
          "@parcel/transformer-js/src/esmodule-helpers.js": "hbR2Q",
        },
      ],
      afZlD: [
        function (e, t, r) {
          var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
          s.defineInteropFlag(r);
          var i = e("websocket"),
            n = e("./lib/constants"),
            a = e("./lib/timer"),
            o = s.interopDefault(a),
            l = e("./lib/serializer"),
            c = s.interopDefault(l),
            h = e("./RealtimeChannel"),
            u = s.interopDefault(h);
          let d = () => {};
          r.default = class {
            constructor(t, r) {
              var s, a;
              (this.accessToken = null),
                (this.channels = []),
                (this.endPoint = ""),
                (this.headers = n.DEFAULT_HEADERS),
                (this.params = {}),
                (this.timeout = n.DEFAULT_TIMEOUT),
                (this.transport = i.w3cwebsocket),
                (this.heartbeatIntervalMs = 3e4),
                (this.heartbeatTimer = void 0),
                (this.pendingHeartbeatRef = null),
                (this.ref = 0),
                (this.logger = d),
                (this.conn = null),
                (this.sendBuffer = []),
                (this.serializer = new c.default()),
                (this.stateChangeCallbacks = {
                  open: [],
                  close: [],
                  error: [],
                  message: [],
                }),
                (this.eventsPerSecondLimitMs = 100),
                (this.inThrottle = !1),
                (this._resolveFetch = (t) => {
                  let r;
                  return (
                    (r =
                      t ||
                      ("undefined" == typeof fetch
                        ? (...t) =>
                            e("9173380d96a04ca4").then(({ default: e }) =>
                              e(...t)
                            )
                        : fetch)),
                    (...e) => r(...e)
                  );
                }),
                (this.endPoint = `${t}/${n.TRANSPORTS.websocket}`),
                (null == r ? void 0 : r.params) && (this.params = r.params),
                (null == r ? void 0 : r.headers) &&
                  (this.headers = Object.assign(
                    Object.assign({}, this.headers),
                    r.headers
                  )),
                (null == r ? void 0 : r.timeout) && (this.timeout = r.timeout),
                (null == r ? void 0 : r.logger) && (this.logger = r.logger),
                (null == r ? void 0 : r.transport) &&
                  (this.transport = r.transport),
                (null == r ? void 0 : r.heartbeatIntervalMs) &&
                  (this.heartbeatIntervalMs = r.heartbeatIntervalMs);
              let l =
                null === (s = null == r ? void 0 : r.params) || void 0 === s
                  ? void 0
                  : s.eventsPerSecond;
              l && (this.eventsPerSecondLimitMs = Math.floor(1e3 / l));
              let h =
                null === (a = null == r ? void 0 : r.params) || void 0 === a
                  ? void 0
                  : a.apikey;
              h && (this.accessToken = h),
                (this.reconnectAfterMs = (
                  null == r ? void 0 : r.reconnectAfterMs
                )
                  ? r.reconnectAfterMs
                  : (e) => [1e3, 2e3, 5e3, 1e4][e - 1] || 1e4),
                (this.encode = (null == r ? void 0 : r.encode)
                  ? r.encode
                  : (e, t) => t(JSON.stringify(e))),
                (this.decode = (null == r ? void 0 : r.decode)
                  ? r.decode
                  : this.serializer.decode.bind(this.serializer)),
                (this.reconnectTimer = new o.default(async () => {
                  this.disconnect(), this.connect();
                }, this.reconnectAfterMs)),
                (this.fetch = this._resolveFetch(null == r ? void 0 : r.fetch));
            }
            connect() {
              !this.conn &&
                ((this.conn = new this.transport(
                  this._endPointURL(),
                  [],
                  null,
                  this.headers
                )),
                this.conn &&
                  ((this.conn.binaryType = "arraybuffer"),
                  (this.conn.onopen = () => this._onConnOpen()),
                  (this.conn.onerror = (e) => this._onConnError(e)),
                  (this.conn.onmessage = (e) => this._onConnMessage(e)),
                  (this.conn.onclose = (e) => this._onConnClose(e))));
            }
            disconnect(e, t) {
              this.conn &&
                ((this.conn.onclose = function () {}),
                e ? this.conn.close(e, null != t ? t : "") : this.conn.close(),
                (this.conn = null),
                this.heartbeatTimer && clearInterval(this.heartbeatTimer),
                this.reconnectTimer.reset());
            }
            getChannels() {
              return this.channels;
            }
            async removeChannel(e) {
              let t = await e.unsubscribe();
              return 0 === this.channels.length && this.disconnect(), t;
            }
            async removeAllChannels() {
              let e = await Promise.all(
                this.channels.map((e) => e.unsubscribe())
              );
              return this.disconnect(), e;
            }
            log(e, t, r) {
              this.logger(e, t, r);
            }
            connectionState() {
              switch (this.conn && this.conn.readyState) {
                case n.SOCKET_STATES.connecting:
                  return n.CONNECTION_STATE.Connecting;
                case n.SOCKET_STATES.open:
                  return n.CONNECTION_STATE.Open;
                case n.SOCKET_STATES.closing:
                  return n.CONNECTION_STATE.Closing;
                default:
                  return n.CONNECTION_STATE.Closed;
              }
            }
            isConnected() {
              return this.connectionState() === n.CONNECTION_STATE.Open;
            }
            channel(e, t = { config: {} }) {
              let r = new u.default(`realtime:${e}`, t, this);
              return this.channels.push(r), r;
            }
            push(e) {
              let { topic: t, event: r, payload: s, ref: i } = e,
                n = () => {
                  this.encode(e, (e) => {
                    var t;
                    null === (t = this.conn) || void 0 === t || t.send(e);
                  });
                };
              if (
                (this.log("push", `${t} ${r} (${i})`, s), this.isConnected())
              ) {
                if (["broadcast", "presence", "postgres_changes"].includes(r)) {
                  let e = this._throttle(n)();
                  if (e) return "rate limited";
                } else n();
              } else this.sendBuffer.push(n);
            }
            setAuth(e) {
              (this.accessToken = e),
                this.channels.forEach((t) => {
                  e && t.updateJoinPayload({ access_token: e }),
                    t.joinedOnce &&
                      t._isJoined() &&
                      t._push(n.CHANNEL_EVENTS.access_token, {
                        access_token: e,
                      });
                });
            }
            _makeRef() {
              let e = this.ref + 1;
              return (
                e === this.ref ? (this.ref = 0) : (this.ref = e),
                this.ref.toString()
              );
            }
            _leaveOpenTopic(e) {
              let t = this.channels.find(
                (t) => t.topic === e && (t._isJoined() || t._isJoining())
              );
              t &&
                (this.log("transport", `leaving duplicate topic "${e}"`),
                t.unsubscribe());
            }
            _remove(e) {
              this.channels = this.channels.filter(
                (t) => t._joinRef() !== e._joinRef()
              );
            }
            _endPointURL() {
              return this._appendParams(
                this.endPoint,
                Object.assign({}, this.params, { vsn: n.VSN })
              );
            }
            _onConnMessage(e) {
              this.decode(e.data, (e) => {
                let { topic: t, event: r, payload: s, ref: i } = e;
                ((i && i === this.pendingHeartbeatRef) ||
                  r === (null == s ? void 0 : s.type)) &&
                  (this.pendingHeartbeatRef = null),
                  this.log(
                    "receive",
                    `${s.status || ""} ${t} ${r} ${(i && "(" + i + ")") || ""}`,
                    s
                  ),
                  this.channels
                    .filter((e) => e._isMember(t))
                    .forEach((e) => e._trigger(r, s, i)),
                  this.stateChangeCallbacks.message.forEach((t) => t(e));
              });
            }
            _onConnOpen() {
              this.log("transport", `connected to ${this._endPointURL()}`),
                this._flushSendBuffer(),
                this.reconnectTimer.reset(),
                this.heartbeatTimer && clearInterval(this.heartbeatTimer),
                (this.heartbeatTimer = setInterval(
                  () => this._sendHeartbeat(),
                  this.heartbeatIntervalMs
                )),
                this.stateChangeCallbacks.open.forEach((e) => e());
            }
            _onConnClose(e) {
              this.log("transport", "close", e),
                this._triggerChanError(),
                this.heartbeatTimer && clearInterval(this.heartbeatTimer),
                this.reconnectTimer.scheduleTimeout(),
                this.stateChangeCallbacks.close.forEach((t) => t(e));
            }
            _onConnError(e) {
              this.log("transport", e.message),
                this._triggerChanError(),
                this.stateChangeCallbacks.error.forEach((t) => t(e));
            }
            _triggerChanError() {
              this.channels.forEach((e) => e._trigger(n.CHANNEL_EVENTS.error));
            }
            _appendParams(e, t) {
              if (0 === Object.keys(t).length) return e;
              let r = e.match(/\?/) ? "&" : "?",
                s = new URLSearchParams(t);
              return `${e}${r}${s}`;
            }
            _flushSendBuffer() {
              this.isConnected() &&
                this.sendBuffer.length > 0 &&
                (this.sendBuffer.forEach((e) => e()), (this.sendBuffer = []));
            }
            _sendHeartbeat() {
              var e;
              if (this.isConnected()) {
                if (this.pendingHeartbeatRef) {
                  (this.pendingHeartbeatRef = null),
                    this.log(
                      "transport",
                      "heartbeat timeout. Attempting to re-establish connection"
                    ),
                    null === (e = this.conn) ||
                      void 0 === e ||
                      e.close(n.WS_CLOSE_NORMAL, "hearbeat timeout");
                  return;
                }
                (this.pendingHeartbeatRef = this._makeRef()),
                  this.push({
                    topic: "phoenix",
                    event: "heartbeat",
                    payload: {},
                    ref: this.pendingHeartbeatRef,
                  }),
                  this.setAuth(this.accessToken);
              }
            }
            _throttle(e, t = this.eventsPerSecondLimitMs) {
              return () =>
                !!this.inThrottle ||
                (e(),
                t > 0 &&
                  ((this.inThrottle = !0),
                  setTimeout(() => {
                    this.inThrottle = !1;
                  }, t)),
                !1);
            }
          };
        },
        {
          websocket: "lKCFE",
          "./lib/constants": "j8pWV",
          "./lib/timer": "8yon9",
          "./lib/serializer": "60OEL",
          "./RealtimeChannel": "iSbep",
          "9173380d96a04ca4": "VHsL5",
          "@parcel/transformer-js/src/esmodule-helpers.js": "hbR2Q",
        },
      ],
      lKCFE: [
        function (e, t, r) {
          if ("object" == typeof globalThis) s = globalThis;
          else
            try {
              s = e("cb0c1898a464fa12");
            } catch (e) {
            } finally {
              if ((s || "undefined" == typeof window || (s = window), !s))
                throw Error("Could not determine global this");
            }
          var s,
            i = s.WebSocket || s.MozWebSocket,
            n = e("77e3455576c0d264");
          function a(e, t) {
            return t ? new i(e, t) : new i(e);
          }
          i &&
            ["CONNECTING", "OPEN", "CLOSING", "CLOSED"].forEach(function (e) {
              Object.defineProperty(a, e, {
                get: function () {
                  return i[e];
                },
              });
            }),
            (t.exports = { w3cwebsocket: i ? a : null, version: n });
        },
        { cb0c1898a464fa12: "6yMOe", "77e3455576c0d264": "hw0pq" },
      ],
      "6yMOe": [
        function (e, t, r) {
          var s = function () {
            if ("object" == typeof self && self) return self;
            if ("object" == typeof window && window) return window;
            throw Error("Unable to resolve global `this`");
          };
          t.exports = (function () {
            if (this) return this;
            if ("object" == typeof globalThis && globalThis) return globalThis;
            try {
              Object.defineProperty(Object.prototype, "__global__", {
                get: function () {
                  return this;
                },
                configurable: !0,
              });
            } catch (e) {
              return s();
            }
            try {
              if (!__global__) return s();
              return __global__;
            } finally {
              delete Object.prototype.__global__;
            }
          })();
        },
        {},
      ],
      hw0pq: [
        function (e, t, r) {
          t.exports = e("4f88503f357251e0").version;
        },
        { "4f88503f357251e0": "3NAKM" },
      ],
      "3NAKM": [
        function (e, t, r) {
          t.exports = JSON.parse(
            '{"name":"websocket","description":"Websocket Client & Server Library implementing the WebSocket protocol as specified in RFC 6455.","keywords":["websocket","websockets","socket","networking","comet","push","RFC-6455","realtime","server","client"],"author":"Brian McKelvey <theturtle32@gmail.com> (https://github.com/theturtle32)","contributors":["I\xf1aki Baz Castillo <ibc@aliax.net> (http://dev.sipdoc.net)"],"version":"1.0.34","repository":{"type":"git","url":"https://github.com/theturtle32/WebSocket-Node.git"},"homepage":"https://github.com/theturtle32/WebSocket-Node","engines":{"node":">=4.0.0"},"dependencies":{"bufferutil":"^4.0.1","debug":"^2.2.0","es5-ext":"^0.10.50","typedarray-to-buffer":"^3.1.5","utf-8-validate":"^5.0.2","yaeti":"^0.0.6"},"devDependencies":{"buffer-equal":"^1.0.0","gulp":"^4.0.2","gulp-jshint":"^2.0.4","jshint-stylish":"^2.2.1","jshint":"^2.0.0","tape":"^4.9.1"},"config":{"verbose":false},"scripts":{"test":"tape test/unit/*.js","gulp":"gulp"},"main":"index","directories":{"lib":"./lib"},"browser":"lib/browser.js","license":"Apache-2.0"}'
          );
        },
        {},
      ],
      j8pWV: [
        function (e, t, r) {
          var s,
            i,
            n,
            a,
            o,
            l,
            c,
            h,
            u,
            d = e("@parcel/transformer-js/src/esmodule-helpers.js");
          d.defineInteropFlag(r),
            d.export(r, "DEFAULT_HEADERS", () => f),
            d.export(r, "VSN", () => g),
            d.export(r, "DEFAULT_TIMEOUT", () => m),
            d.export(r, "WS_CLOSE_NORMAL", () => b),
            d.export(r, "SOCKET_STATES", () => o),
            d.export(r, "CHANNEL_STATES", () => l),
            d.export(r, "CHANNEL_EVENTS", () => c),
            d.export(r, "TRANSPORTS", () => h),
            d.export(r, "CONNECTION_STATE", () => u);
          var p = e("./version");
          let f = { "X-Client-Info": `realtime-js/${p.version}` },
            g = "1.0.0",
            m = 1e4,
            b = 1e3;
          ((s = o || (o = {}))[(s.connecting = 0)] = "connecting"),
            (s[(s.open = 1)] = "open"),
            (s[(s.closing = 2)] = "closing"),
            (s[(s.closed = 3)] = "closed"),
            ((i = l || (l = {})).closed = "closed"),
            (i.errored = "errored"),
            (i.joined = "joined"),
            (i.joining = "joining"),
            (i.leaving = "leaving"),
            ((n = c || (c = {})).close = "phx_close"),
            (n.error = "phx_error"),
            (n.join = "phx_join"),
            (n.reply = "phx_reply"),
            (n.leave = "phx_leave"),
            (n.access_token = "access_token"),
            ((h || (h = {})).websocket = "websocket"),
            ((a = u || (u = {})).Connecting = "connecting"),
            (a.Open = "open"),
            (a.Closing = "closing"),
            (a.Closed = "closed");
        },
        {
          "./version": "4i7av",
          "@parcel/transformer-js/src/esmodule-helpers.js": "hbR2Q",
        },
      ],
      "4i7av": [
        function (e, t, r) {
          var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
          s.defineInteropFlag(r), s.export(r, "version", () => i);
          let i = "2.8.0";
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "hbR2Q" },
      ],
      "8yon9": [
        function (e, t, r) {
          e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(
            r
          ),
            (r.default = class {
              constructor(e, t) {
                (this.callback = e),
                  (this.timerCalc = t),
                  (this.timer = void 0),
                  (this.tries = 0),
                  (this.callback = e),
                  (this.timerCalc = t);
              }
              reset() {
                (this.tries = 0), clearTimeout(this.timer);
              }
              scheduleTimeout() {
                clearTimeout(this.timer),
                  (this.timer = setTimeout(() => {
                    (this.tries = this.tries + 1), this.callback();
                  }, this.timerCalc(this.tries + 1)));
              }
            });
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "hbR2Q" },
      ],
      "60OEL": [
        function (e, t, r) {
          e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(
            r
          ),
            (r.default = class {
              constructor() {
                this.HEADER_LENGTH = 1;
              }
              decode(e, t) {
                return e.constructor === ArrayBuffer
                  ? t(this._binaryDecode(e))
                  : "string" == typeof e
                  ? t(JSON.parse(e))
                  : t({});
              }
              _binaryDecode(e) {
                let t = new DataView(e),
                  r = new TextDecoder();
                return this._decodeBroadcast(e, t, r);
              }
              _decodeBroadcast(e, t, r) {
                let s = t.getUint8(1),
                  i = t.getUint8(2),
                  n = this.HEADER_LENGTH + 2,
                  a = r.decode(e.slice(n, n + s));
                n += s;
                let o = r.decode(e.slice(n, n + i));
                n += i;
                let l = JSON.parse(r.decode(e.slice(n, e.byteLength)));
                return { ref: null, topic: a, event: o, payload: l };
              }
            });
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "hbR2Q" },
      ],
      iSbep: [
        function (e, t, r) {
          var s,
            i,
            n,
            a,
            o,
            l,
            c = e("@parcel/transformer-js/src/esmodule-helpers.js");
          c.defineInteropFlag(r),
            c.export(r, "REALTIME_POSTGRES_CHANGES_LISTEN_EVENT", () => a),
            c.export(r, "REALTIME_LISTEN_TYPES", () => o),
            c.export(r, "REALTIME_SUBSCRIBE_STATES", () => l);
          var h = e("./lib/constants"),
            u = e("./lib/push"),
            d = c.interopDefault(u),
            p = e("./lib/timer"),
            f = c.interopDefault(p),
            g = e("./RealtimePresence"),
            m = c.interopDefault(g),
            b = e("./lib/transformers");
          ((s = a || (a = {})).ALL = "*"),
            (s.INSERT = "INSERT"),
            (s.UPDATE = "UPDATE"),
            (s.DELETE = "DELETE"),
            ((i = o || (o = {})).BROADCAST = "broadcast"),
            (i.PRESENCE = "presence"),
            (i.POSTGRES_CHANGES = "postgres_changes"),
            ((n = l || (l = {})).SUBSCRIBED = "SUBSCRIBED"),
            (n.TIMED_OUT = "TIMED_OUT"),
            (n.CLOSED = "CLOSED"),
            (n.CHANNEL_ERROR = "CHANNEL_ERROR");
          class y {
            constructor(e, t = { config: {} }, r) {
              (this.topic = e),
                (this.params = t),
                (this.socket = r),
                (this.bindings = {}),
                (this.state = h.CHANNEL_STATES.closed),
                (this.joinedOnce = !1),
                (this.pushBuffer = []),
                (this.subTopic = e.replace(/^realtime:/i, "")),
                (this.params.config = Object.assign(
                  { broadcast: { ack: !1, self: !1 }, presence: { key: "" } },
                  t.config
                )),
                (this.timeout = this.socket.timeout),
                (this.joinPush = new d.default(
                  this,
                  h.CHANNEL_EVENTS.join,
                  this.params,
                  this.timeout
                )),
                (this.rejoinTimer = new f.default(
                  () => this._rejoinUntilConnected(),
                  this.socket.reconnectAfterMs
                )),
                this.joinPush.receive("ok", () => {
                  (this.state = h.CHANNEL_STATES.joined),
                    this.rejoinTimer.reset(),
                    this.pushBuffer.forEach((e) => e.send()),
                    (this.pushBuffer = []);
                }),
                this._onClose(() => {
                  this.rejoinTimer.reset(),
                    this.socket.log(
                      "channel",
                      `close ${this.topic} ${this._joinRef()}`
                    ),
                    (this.state = h.CHANNEL_STATES.closed),
                    this.socket._remove(this);
                }),
                this._onError((e) => {
                  this._isLeaving() ||
                    this._isClosed() ||
                    (this.socket.log("channel", `error ${this.topic}`, e),
                    (this.state = h.CHANNEL_STATES.errored),
                    this.rejoinTimer.scheduleTimeout());
                }),
                this.joinPush.receive("timeout", () => {
                  this._isJoining() &&
                    (this.socket.log(
                      "channel",
                      `timeout ${this.topic}`,
                      this.joinPush.timeout
                    ),
                    (this.state = h.CHANNEL_STATES.errored),
                    this.rejoinTimer.scheduleTimeout());
                }),
                this._on(h.CHANNEL_EVENTS.reply, {}, (e, t) => {
                  this._trigger(this._replyEventName(t), e);
                }),
                (this.presence = new m.default(this)),
                (this.broadcastEndpointURL = this._broadcastEndpointURL());
            }
            subscribe(e, t = this.timeout) {
              var r, s;
              if (
                (this.socket.isConnected() || this.socket.connect(),
                this.joinedOnce)
              )
                throw "tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance";
              {
                let {
                  config: { broadcast: i, presence: n },
                } = this.params;
                this._onError((t) => e && e("CHANNEL_ERROR", t)),
                  this._onClose(() => e && e("CLOSED"));
                let a = {},
                  o = {
                    broadcast: i,
                    presence: n,
                    postgres_changes:
                      null !==
                        (s =
                          null === (r = this.bindings.postgres_changes) ||
                          void 0 === r
                            ? void 0
                            : r.map((e) => e.filter)) && void 0 !== s
                        ? s
                        : [],
                  };
                this.socket.accessToken &&
                  (a.access_token = this.socket.accessToken),
                  this.updateJoinPayload(Object.assign({ config: o }, a)),
                  (this.joinedOnce = !0),
                  this._rejoin(t),
                  this.joinPush
                    .receive("ok", ({ postgres_changes: t }) => {
                      var r;
                      if (
                        (this.socket.accessToken &&
                          this.socket.setAuth(this.socket.accessToken),
                        void 0 === t)
                      ) {
                        e && e("SUBSCRIBED");
                        return;
                      }
                      {
                        let s = this.bindings.postgres_changes,
                          i =
                            null !== (r = null == s ? void 0 : s.length) &&
                            void 0 !== r
                              ? r
                              : 0,
                          n = [];
                        for (let r = 0; r < i; r++) {
                          let i = s[r],
                            {
                              filter: {
                                event: a,
                                schema: o,
                                table: l,
                                filter: c,
                              },
                            } = i,
                            h = t && t[r];
                          if (
                            h &&
                            h.event === a &&
                            h.schema === o &&
                            h.table === l &&
                            h.filter === c
                          )
                            n.push(
                              Object.assign(Object.assign({}, i), { id: h.id })
                            );
                          else {
                            this.unsubscribe(),
                              e &&
                                e(
                                  "CHANNEL_ERROR",
                                  Error(
                                    "mismatch between server and client bindings for postgres changes"
                                  )
                                );
                            return;
                          }
                        }
                        (this.bindings.postgres_changes = n),
                          e && e("SUBSCRIBED");
                        return;
                      }
                    })
                    .receive("error", (t) => {
                      e &&
                        e(
                          "CHANNEL_ERROR",
                          Error(
                            JSON.stringify(
                              Object.values(t).join(", ") || "error"
                            )
                          )
                        );
                    })
                    .receive("timeout", () => {
                      e && e("TIMED_OUT");
                    });
              }
              return this;
            }
            presenceState() {
              return this.presence.state;
            }
            async track(e, t = {}) {
              return await this.send(
                { type: "presence", event: "track", payload: e },
                t.timeout || this.timeout
              );
            }
            async untrack(e = {}) {
              return await this.send({ type: "presence", event: "untrack" }, e);
            }
            on(e, t, r) {
              return this._on(e, t, r);
            }
            async send(e, t = {}) {
              var r, s;
              if (this._canPush() || "broadcast" !== e.type)
                return new Promise((r) => {
                  var s, i, n;
                  let a = this._push(e.type, e, t.timeout || this.timeout);
                  a.rateLimited && r("rate limited"),
                    "broadcast" !== e.type ||
                      (null ===
                        (n =
                          null ===
                            (i =
                              null === (s = this.params) || void 0 === s
                                ? void 0
                                : s.config) || void 0 === i
                            ? void 0
                            : i.broadcast) || void 0 === n
                        ? void 0
                        : n.ack) ||
                      r("ok"),
                    a.receive("ok", () => r("ok")),
                    a.receive("timeout", () => r("timed out"));
                });
              {
                let { event: i, payload: n } = e,
                  a = {
                    method: "POST",
                    headers: {
                      apikey:
                        null !== (r = this.socket.accessToken) && void 0 !== r
                          ? r
                          : "",
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      messages: [
                        { topic: this.subTopic, event: i, payload: n },
                      ],
                    }),
                  };
                try {
                  let e = await this._fetchWithTimeout(
                    this.broadcastEndpointURL,
                    a,
                    null !== (s = t.timeout) && void 0 !== s ? s : this.timeout
                  );
                  if (e.ok) return "ok";
                  return "error";
                } catch (e) {
                  if ("AbortError" === e.name) return "timed out";
                  return "error";
                }
              }
            }
            updateJoinPayload(e) {
              this.joinPush.updatePayload(e);
            }
            unsubscribe(e = this.timeout) {
              this.state = h.CHANNEL_STATES.leaving;
              let t = () => {
                this.socket.log("channel", `leave ${this.topic}`),
                  this._trigger(
                    h.CHANNEL_EVENTS.close,
                    "leave",
                    this._joinRef()
                  );
              };
              return (
                this.rejoinTimer.reset(),
                this.joinPush.destroy(),
                new Promise((r) => {
                  let s = new d.default(this, h.CHANNEL_EVENTS.leave, {}, e);
                  s
                    .receive("ok", () => {
                      t(), r("ok");
                    })
                    .receive("timeout", () => {
                      t(), r("timed out");
                    })
                    .receive("error", () => {
                      r("error");
                    }),
                    s.send(),
                    this._canPush() || s.trigger("ok", {});
                })
              );
            }
            _broadcastEndpointURL() {
              let e = this.socket.endPoint;
              return (
                (e = (e = e.replace(/^ws/i, "http")).replace(
                  /(\/socket\/websocket|\/socket|\/websocket)\/?$/i,
                  ""
                )).replace(/\/+$/, "") + "/api/broadcast"
              );
            }
            async _fetchWithTimeout(e, t, r) {
              let s = new AbortController(),
                i = setTimeout(() => s.abort(), r),
                n = await this.socket.fetch(
                  e,
                  Object.assign(Object.assign({}, t), { signal: s.signal })
                );
              return clearTimeout(i), n;
            }
            _push(e, t, r = this.timeout) {
              if (!this.joinedOnce)
                throw `tried to push '${e}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
              let s = new d.default(this, e, t, r);
              return (
                this._canPush()
                  ? s.send()
                  : (s.startTimeout(), this.pushBuffer.push(s)),
                s
              );
            }
            _onMessage(e, t, r) {
              return t;
            }
            _isMember(e) {
              return this.topic === e;
            }
            _joinRef() {
              return this.joinPush.ref;
            }
            _trigger(e, t, r) {
              var s, i;
              let n = e.toLocaleLowerCase(),
                { close: a, error: o, leave: l, join: c } = h.CHANNEL_EVENTS;
              if (r && [a, o, l, c].indexOf(n) >= 0 && r !== this._joinRef())
                return;
              let u = this._onMessage(n, t, r);
              if (t && !u)
                throw "channel onMessage callbacks must return the payload, modified or unmodified";
              ["insert", "update", "delete"].includes(n)
                ? null === (s = this.bindings.postgres_changes) ||
                  void 0 === s ||
                  s
                    .filter((e) => {
                      var t, r, s;
                      return (
                        (null === (t = e.filter) || void 0 === t
                          ? void 0
                          : t.event) === "*" ||
                        (null ===
                          (s =
                            null === (r = e.filter) || void 0 === r
                              ? void 0
                              : r.event) || void 0 === s
                          ? void 0
                          : s.toLocaleLowerCase()) === n
                      );
                    })
                    .map((e) => e.callback(u, r))
                : null === (i = this.bindings[n]) ||
                  void 0 === i ||
                  i
                    .filter((e) => {
                      var r, s, i, a, o, l;
                      if (
                        !["broadcast", "presence", "postgres_changes"].includes(
                          n
                        )
                      )
                        return e.type.toLocaleLowerCase() === n;
                      if ("id" in e) {
                        let n = e.id,
                          a =
                            null === (r = e.filter) || void 0 === r
                              ? void 0
                              : r.event;
                        return (
                          n &&
                          (null === (s = t.ids) || void 0 === s
                            ? void 0
                            : s.includes(n)) &&
                          ("*" === a ||
                            (null == a ? void 0 : a.toLocaleLowerCase()) ===
                              (null === (i = t.data) || void 0 === i
                                ? void 0
                                : i.type.toLocaleLowerCase()))
                        );
                      }
                      {
                        let r =
                          null ===
                            (o =
                              null === (a = null == e ? void 0 : e.filter) ||
                              void 0 === a
                                ? void 0
                                : a.event) || void 0 === o
                            ? void 0
                            : o.toLocaleLowerCase();
                        return (
                          "*" === r ||
                          r ===
                            (null === (l = null == t ? void 0 : t.event) ||
                            void 0 === l
                              ? void 0
                              : l.toLocaleLowerCase())
                        );
                      }
                    })
                    .map((e) => {
                      if ("object" == typeof u && "ids" in u) {
                        let e = u.data,
                          {
                            schema: t,
                            table: r,
                            commit_timestamp: s,
                            type: i,
                            errors: n,
                          } = e;
                        u = Object.assign(
                          Object.assign(
                            {},
                            {
                              schema: t,
                              table: r,
                              commit_timestamp: s,
                              eventType: i,
                              new: {},
                              old: {},
                              errors: n,
                            }
                          ),
                          this._getPayloadRecords(e)
                        );
                      }
                      e.callback(u, r);
                    });
            }
            _isClosed() {
              return this.state === h.CHANNEL_STATES.closed;
            }
            _isJoined() {
              return this.state === h.CHANNEL_STATES.joined;
            }
            _isJoining() {
              return this.state === h.CHANNEL_STATES.joining;
            }
            _isLeaving() {
              return this.state === h.CHANNEL_STATES.leaving;
            }
            _replyEventName(e) {
              return `chan_reply_${e}`;
            }
            _on(e, t, r) {
              let s = e.toLocaleLowerCase(),
                i = { type: s, filter: t, callback: r };
              return (
                this.bindings[s]
                  ? this.bindings[s].push(i)
                  : (this.bindings[s] = [i]),
                this
              );
            }
            _off(e, t) {
              let r = e.toLocaleLowerCase();
              return (
                (this.bindings[r] = this.bindings[r].filter((e) => {
                  var s;
                  return !(
                    (null === (s = e.type) || void 0 === s
                      ? void 0
                      : s.toLocaleLowerCase()) === r && y.isEqual(e.filter, t)
                  );
                })),
                this
              );
            }
            static isEqual(e, t) {
              if (Object.keys(e).length !== Object.keys(t).length) return !1;
              for (let r in e) if (e[r] !== t[r]) return !1;
              return !0;
            }
            _rejoinUntilConnected() {
              this.rejoinTimer.scheduleTimeout(),
                this.socket.isConnected() && this._rejoin();
            }
            _onClose(e) {
              this._on(h.CHANNEL_EVENTS.close, {}, e);
            }
            _onError(e) {
              this._on(h.CHANNEL_EVENTS.error, {}, (t) => e(t));
            }
            _canPush() {
              return this.socket.isConnected() && this._isJoined();
            }
            _rejoin(e = this.timeout) {
              this._isLeaving() ||
                (this.socket._leaveOpenTopic(this.topic),
                (this.state = h.CHANNEL_STATES.joining),
                this.joinPush.resend(e));
            }
            _getPayloadRecords(e) {
              let t = { new: {}, old: {} };
              return (
                ("INSERT" === e.type || "UPDATE" === e.type) &&
                  (t.new = b.convertChangeData(e.columns, e.record)),
                ("UPDATE" === e.type || "DELETE" === e.type) &&
                  (t.old = b.convertChangeData(e.columns, e.old_record)),
                t
              );
            }
          }
          r.default = y;
        },
        {
          "./lib/constants": "j8pWV",
          "./lib/push": "3pua4",
          "./lib/timer": "8yon9",
          "./RealtimePresence": "7maRr",
          "./lib/transformers": "lUDaN",
          "@parcel/transformer-js/src/esmodule-helpers.js": "hbR2Q",
        },
      ],
      "3pua4": [
        function (e, t, r) {
          e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(
            r
          );
          var s = e("../lib/constants");
          r.default = class {
            constructor(e, t, r = {}, i = s.DEFAULT_TIMEOUT) {
              (this.channel = e),
                (this.event = t),
                (this.payload = r),
                (this.timeout = i),
                (this.sent = !1),
                (this.timeoutTimer = void 0),
                (this.ref = ""),
                (this.receivedResp = null),
                (this.recHooks = []),
                (this.refEvent = null),
                (this.rateLimited = !1);
            }
            resend(e) {
              (this.timeout = e),
                this._cancelRefEvent(),
                (this.ref = ""),
                (this.refEvent = null),
                (this.receivedResp = null),
                (this.sent = !1),
                this.send();
            }
            send() {
              if (this._hasReceived("timeout")) return;
              this.startTimeout(), (this.sent = !0);
              let e = this.channel.socket.push({
                topic: this.channel.topic,
                event: this.event,
                payload: this.payload,
                ref: this.ref,
                join_ref: this.channel._joinRef(),
              });
              "rate limited" === e && (this.rateLimited = !0);
            }
            updatePayload(e) {
              this.payload = Object.assign(Object.assign({}, this.payload), e);
            }
            receive(e, t) {
              var r;
              return (
                this._hasReceived(e) &&
                  t(
                    null === (r = this.receivedResp) || void 0 === r
                      ? void 0
                      : r.response
                  ),
                this.recHooks.push({ status: e, callback: t }),
                this
              );
            }
            startTimeout() {
              this.timeoutTimer ||
                ((this.ref = this.channel.socket._makeRef()),
                (this.refEvent = this.channel._replyEventName(this.ref)),
                this.channel._on(this.refEvent, {}, (e) => {
                  this._cancelRefEvent(),
                    this._cancelTimeout(),
                    (this.receivedResp = e),
                    this._matchReceive(e);
                }),
                (this.timeoutTimer = setTimeout(() => {
                  this.trigger("timeout", {});
                }, this.timeout)));
            }
            trigger(e, t) {
              this.refEvent &&
                this.channel._trigger(this.refEvent, {
                  status: e,
                  response: t,
                });
            }
            destroy() {
              this._cancelRefEvent(), this._cancelTimeout();
            }
            _cancelRefEvent() {
              this.refEvent && this.channel._off(this.refEvent, {});
            }
            _cancelTimeout() {
              clearTimeout(this.timeoutTimer), (this.timeoutTimer = void 0);
            }
            _matchReceive({ status: e, response: t }) {
              this.recHooks
                .filter((t) => t.status === e)
                .forEach((e) => e.callback(t));
            }
            _hasReceived(e) {
              return this.receivedResp && this.receivedResp.status === e;
            }
          };
        },
        {
          "../lib/constants": "j8pWV",
          "@parcel/transformer-js/src/esmodule-helpers.js": "hbR2Q",
        },
      ],
      "7maRr": [
        function (e, t, r) {
          var s,
            i,
            n = e("@parcel/transformer-js/src/esmodule-helpers.js");
          n.defineInteropFlag(r),
            n.export(r, "REALTIME_PRESENCE_LISTEN_EVENTS", () => i),
            ((s = i || (i = {})).SYNC = "sync"),
            (s.JOIN = "join"),
            (s.LEAVE = "leave");
          class a {
            constructor(e, t) {
              (this.channel = e),
                (this.state = {}),
                (this.pendingDiffs = []),
                (this.joinRef = null),
                (this.caller = {
                  onJoin: () => {},
                  onLeave: () => {},
                  onSync: () => {},
                });
              let r = (null == t ? void 0 : t.events) || {
                state: "presence_state",
                diff: "presence_diff",
              };
              this.channel._on(r.state, {}, (e) => {
                let { onJoin: t, onLeave: r, onSync: s } = this.caller;
                (this.joinRef = this.channel._joinRef()),
                  (this.state = a.syncState(this.state, e, t, r)),
                  this.pendingDiffs.forEach((e) => {
                    this.state = a.syncDiff(this.state, e, t, r);
                  }),
                  (this.pendingDiffs = []),
                  s();
              }),
                this.channel._on(r.diff, {}, (e) => {
                  let { onJoin: t, onLeave: r, onSync: s } = this.caller;
                  this.inPendingSyncState()
                    ? this.pendingDiffs.push(e)
                    : ((this.state = a.syncDiff(this.state, e, t, r)), s());
                }),
                this.onJoin((e, t, r) => {
                  this.channel._trigger("presence", {
                    event: "join",
                    key: e,
                    currentPresences: t,
                    newPresences: r,
                  });
                }),
                this.onLeave((e, t, r) => {
                  this.channel._trigger("presence", {
                    event: "leave",
                    key: e,
                    currentPresences: t,
                    leftPresences: r,
                  });
                }),
                this.onSync(() => {
                  this.channel._trigger("presence", { event: "sync" });
                });
            }
            static syncState(e, t, r, s) {
              let i = this.cloneDeep(e),
                n = this.transformState(t),
                a = {},
                o = {};
              return (
                this.map(i, (e, t) => {
                  n[e] || (o[e] = t);
                }),
                this.map(n, (e, t) => {
                  let r = i[e];
                  if (r) {
                    let s = t.map((e) => e.presence_ref),
                      i = r.map((e) => e.presence_ref),
                      n = t.filter((e) => 0 > i.indexOf(e.presence_ref)),
                      l = r.filter((e) => 0 > s.indexOf(e.presence_ref));
                    n.length > 0 && (a[e] = n), l.length > 0 && (o[e] = l);
                  } else a[e] = t;
                }),
                this.syncDiff(i, { joins: a, leaves: o }, r, s)
              );
            }
            static syncDiff(e, t, r, s) {
              let { joins: i, leaves: n } = {
                joins: this.transformState(t.joins),
                leaves: this.transformState(t.leaves),
              };
              return (
                r || (r = () => {}),
                s || (s = () => {}),
                this.map(i, (t, s) => {
                  var i;
                  let n = null !== (i = e[t]) && void 0 !== i ? i : [];
                  if (((e[t] = this.cloneDeep(s)), n.length > 0)) {
                    let r = e[t].map((e) => e.presence_ref),
                      s = n.filter((e) => 0 > r.indexOf(e.presence_ref));
                    e[t].unshift(...s);
                  }
                  r(t, n, s);
                }),
                this.map(n, (t, r) => {
                  let i = e[t];
                  if (!i) return;
                  let n = r.map((e) => e.presence_ref);
                  (i = i.filter((e) => 0 > n.indexOf(e.presence_ref))),
                    (e[t] = i),
                    s(t, i, r),
                    0 === i.length && delete e[t];
                }),
                e
              );
            }
            static map(e, t) {
              return Object.getOwnPropertyNames(e).map((r) => t(r, e[r]));
            }
            static transformState(e) {
              return Object.getOwnPropertyNames((e = this.cloneDeep(e))).reduce(
                (t, r) => {
                  let s = e[r];
                  return (
                    "metas" in s
                      ? (t[r] = s.metas.map(
                          (e) => (
                            (e.presence_ref = e.phx_ref),
                            delete e.phx_ref,
                            delete e.phx_ref_prev,
                            e
                          )
                        ))
                      : (t[r] = s),
                    t
                  );
                },
                {}
              );
            }
            static cloneDeep(e) {
              return JSON.parse(JSON.stringify(e));
            }
            onJoin(e) {
              this.caller.onJoin = e;
            }
            onLeave(e) {
              this.caller.onLeave = e;
            }
            onSync(e) {
              this.caller.onSync = e;
            }
            inPendingSyncState() {
              return !this.joinRef || this.joinRef !== this.channel._joinRef();
            }
          }
          r.default = a;
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "hbR2Q" },
      ],
      lUDaN: [
        function (e, t, r) {
          var s,
            i,
            n = e("@parcel/transformer-js/src/esmodule-helpers.js");
          n.defineInteropFlag(r),
            n.export(r, "PostgresTypes", () => i),
            n.export(r, "convertChangeData", () => a),
            n.export(r, "convertColumn", () => o),
            n.export(r, "convertCell", () => l),
            n.export(r, "toBoolean", () => h),
            n.export(r, "toNumber", () => u),
            n.export(r, "toJson", () => d),
            n.export(r, "toArray", () => p),
            n.export(r, "toTimestampString", () => f),
            ((s = i || (i = {})).abstime = "abstime"),
            (s.bool = "bool"),
            (s.date = "date"),
            (s.daterange = "daterange"),
            (s.float4 = "float4"),
            (s.float8 = "float8"),
            (s.int2 = "int2"),
            (s.int4 = "int4"),
            (s.int4range = "int4range"),
            (s.int8 = "int8"),
            (s.int8range = "int8range"),
            (s.json = "json"),
            (s.jsonb = "jsonb"),
            (s.money = "money"),
            (s.numeric = "numeric"),
            (s.oid = "oid"),
            (s.reltime = "reltime"),
            (s.text = "text"),
            (s.time = "time"),
            (s.timestamp = "timestamp"),
            (s.timestamptz = "timestamptz"),
            (s.timetz = "timetz"),
            (s.tsrange = "tsrange"),
            (s.tstzrange = "tstzrange");
          let a = (e, t, r = {}) => {
              var s;
              let i = null !== (s = r.skipTypes) && void 0 !== s ? s : [];
              return Object.keys(t).reduce(
                (r, s) => ((r[s] = o(s, e, t, i)), r),
                {}
              );
            },
            o = (e, t, r, s) => {
              let i = t.find((t) => t.name === e),
                n = null == i ? void 0 : i.type,
                a = r[e];
              return n && !s.includes(n) ? l(n, a) : c(a);
            },
            l = (e, t) => {
              if ("_" === e.charAt(0)) {
                let r = e.slice(1, e.length);
                return p(t, r);
              }
              switch (e) {
                case i.bool:
                  return h(t);
                case i.float4:
                case i.float8:
                case i.int2:
                case i.int4:
                case i.int8:
                case i.numeric:
                case i.oid:
                  return u(t);
                case i.json:
                case i.jsonb:
                  return d(t);
                case i.timestamp:
                  return f(t);
                case i.abstime:
                case i.date:
                case i.daterange:
                case i.int4range:
                case i.int8range:
                case i.money:
                case i.reltime:
                case i.text:
                case i.time:
                case i.timestamptz:
                case i.timetz:
                case i.tsrange:
                case i.tstzrange:
                default:
                  return c(t);
              }
            },
            c = (e) => e,
            h = (e) => {
              switch (e) {
                case "t":
                  return !0;
                case "f":
                  return !1;
                default:
                  return e;
              }
            },
            u = (e) => {
              if ("string" == typeof e) {
                let t = parseFloat(e);
                if (!Number.isNaN(t)) return t;
              }
              return e;
            },
            d = (e) => {
              if ("string" == typeof e)
                try {
                  return JSON.parse(e);
                } catch (e) {
                  console.log(`JSON parse error: ${e}`);
                }
              return e;
            },
            p = (e, t) => {
              if ("string" != typeof e) return e;
              let r = e.length - 1,
                s = e[r],
                i = e[0];
              if ("{" === i && "}" === s) {
                let s;
                let i = e.slice(1, r);
                try {
                  s = JSON.parse("[" + i + "]");
                } catch (e) {
                  s = i ? i.split(",") : [];
                }
                return s.map((e) => l(t, e));
              }
              return e;
            },
            f = (e) => ("string" == typeof e ? e.replace(" ", "T") : e);
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "hbR2Q" },
      ],
      e2M2J: [
        function (e, t, r) {
          var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
          s.defineInteropFlag(r),
            s.export(r, "StorageClient", () => i.StorageClient);
          var i = e("./StorageClient"),
            n = e("./lib/types");
          s.exportAll(n, r);
          var a = e("./lib/errors");
          s.exportAll(a, r);
        },
        {
          "./StorageClient": "faT9e",
          "./lib/types": "gCaxL",
          "./lib/errors": "eUAto",
          "@parcel/transformer-js/src/esmodule-helpers.js": "hbR2Q",
        },
      ],
      faT9e: [
        function (e, t, r) {
          var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
          s.defineInteropFlag(r), s.export(r, "StorageClient", () => l);
          var i = e("./packages/StorageFileApi"),
            n = s.interopDefault(i),
            a = e("./packages/StorageBucketApi"),
            o = s.interopDefault(a);
          class l extends o.default {
            constructor(e, t = {}, r) {
              super(e, t, r);
            }
            from(e) {
              return new n.default(this.url, this.headers, e, this.fetch);
            }
          }
        },
        {
          "./packages/StorageFileApi": "kHv3R",
          "./packages/StorageBucketApi": "crQxE",
          "@parcel/transformer-js/src/esmodule-helpers.js": "hbR2Q",
        },
      ],
      kHv3R: [
        function (e, t, r) {
          e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(
            r
          );
          var s = e("../lib/errors"),
            i = e("../lib/fetch"),
            n = e("../lib/helpers"),
            a = function (e, t, r, s) {
              return new (r || (r = Promise))(function (i, n) {
                function a(e) {
                  try {
                    l(s.next(e));
                  } catch (e) {
                    n(e);
                  }
                }
                function o(e) {
                  try {
                    l(s.throw(e));
                  } catch (e) {
                    n(e);
                  }
                }
                function l(e) {
                  var t;
                  e.done
                    ? i(e.value)
                    : ((t = e.value) instanceof r
                        ? t
                        : new r(function (e) {
                            e(t);
                          })
                      ).then(a, o);
                }
                l((s = s.apply(e, t || [])).next());
              });
            };
          let o = {
              limit: 100,
              offset: 0,
              sortBy: { column: "name", order: "asc" },
            },
            l = {
              cacheControl: "3600",
              contentType: "text/plain;charset=UTF-8",
              upsert: !1,
            };
          r.default = class {
            constructor(e, t = {}, r, s) {
              (this.url = e),
                (this.headers = t),
                (this.bucketId = r),
                (this.fetch = (0, n.resolveFetch)(s));
            }
            uploadOrUpdate(e, t, r, i) {
              return a(this, void 0, void 0, function* () {
                try {
                  let s;
                  let n = Object.assign(Object.assign({}, l), i),
                    a = Object.assign(
                      Object.assign({}, this.headers),
                      "POST" === e && { "x-upsert": String(n.upsert) }
                    );
                  "undefined" != typeof Blob && r instanceof Blob
                    ? ((s = new FormData()).append(
                        "cacheControl",
                        n.cacheControl
                      ),
                      s.append("", r))
                    : "undefined" != typeof FormData && r instanceof FormData
                    ? (s = r).append("cacheControl", n.cacheControl)
                    : ((s = r),
                      (a["cache-control"] = `max-age=${n.cacheControl}`),
                      (a["content-type"] = n.contentType));
                  let o = this._removeEmptyFolders(t),
                    c = this._getFinalPath(o),
                    h = yield this.fetch(
                      `${this.url}/object/${c}`,
                      Object.assign(
                        { method: e, body: s, headers: a },
                        (null == n ? void 0 : n.duplex)
                          ? { duplex: n.duplex }
                          : {}
                      )
                    );
                  if (h.ok) return { data: { path: o }, error: null };
                  {
                    let e = yield h.json();
                    return { data: null, error: e };
                  }
                } catch (e) {
                  if ((0, s.isStorageError)(e)) return { data: null, error: e };
                  throw e;
                }
              });
            }
            upload(e, t, r) {
              return a(this, void 0, void 0, function* () {
                return this.uploadOrUpdate("POST", e, t, r);
              });
            }
            uploadToSignedUrl(e, t, r, i) {
              return a(this, void 0, void 0, function* () {
                let n = this._removeEmptyFolders(e),
                  a = this._getFinalPath(n),
                  o = new URL(this.url + `/object/upload/sign/${a}`);
                o.searchParams.set("token", t);
                try {
                  let e;
                  let t = Object.assign({ upsert: l.upsert }, i),
                    s = Object.assign(Object.assign({}, this.headers), {
                      "x-upsert": String(t.upsert),
                    });
                  "undefined" != typeof Blob && r instanceof Blob
                    ? ((e = new FormData()).append(
                        "cacheControl",
                        t.cacheControl
                      ),
                      e.append("", r))
                    : "undefined" != typeof FormData && r instanceof FormData
                    ? (e = r).append("cacheControl", t.cacheControl)
                    : ((e = r),
                      (s["cache-control"] = `max-age=${t.cacheControl}`),
                      (s["content-type"] = t.contentType));
                  let a = yield this.fetch(o.toString(), {
                    method: "PUT",
                    body: e,
                    headers: s,
                  });
                  if (a.ok) return { data: { path: n }, error: null };
                  {
                    let e = yield a.json();
                    return { data: null, error: e };
                  }
                } catch (e) {
                  if ((0, s.isStorageError)(e)) return { data: null, error: e };
                  throw e;
                }
              });
            }
            createSignedUploadUrl(e) {
              return a(this, void 0, void 0, function* () {
                try {
                  let t = this._getFinalPath(e),
                    r = yield (0, i.post)(
                      this.fetch,
                      `${this.url}/object/upload/sign/${t}`,
                      {},
                      { headers: this.headers }
                    ),
                    n = new URL(this.url + r.url),
                    a = n.searchParams.get("token");
                  if (!a) throw new s.StorageError("No token returned by API");
                  return {
                    data: { signedUrl: n.toString(), path: e, token: a },
                    error: null,
                  };
                } catch (e) {
                  if ((0, s.isStorageError)(e)) return { data: null, error: e };
                  throw e;
                }
              });
            }
            update(e, t, r) {
              return a(this, void 0, void 0, function* () {
                return this.uploadOrUpdate("PUT", e, t, r);
              });
            }
            move(e, t) {
              return a(this, void 0, void 0, function* () {
                try {
                  let r = yield (0, i.post)(
                    this.fetch,
                    `${this.url}/object/move`,
                    {
                      bucketId: this.bucketId,
                      sourceKey: e,
                      destinationKey: t,
                    },
                    { headers: this.headers }
                  );
                  return { data: r, error: null };
                } catch (e) {
                  if ((0, s.isStorageError)(e)) return { data: null, error: e };
                  throw e;
                }
              });
            }
            copy(e, t) {
              return a(this, void 0, void 0, function* () {
                try {
                  let r = yield (0, i.post)(
                    this.fetch,
                    `${this.url}/object/copy`,
                    {
                      bucketId: this.bucketId,
                      sourceKey: e,
                      destinationKey: t,
                    },
                    { headers: this.headers }
                  );
                  return { data: { path: r.Key }, error: null };
                } catch (e) {
                  if ((0, s.isStorageError)(e)) return { data: null, error: e };
                  throw e;
                }
              });
            }
            createSignedUrl(e, t, r) {
              return a(this, void 0, void 0, function* () {
                try {
                  let s = this._getFinalPath(e),
                    n = yield (0, i.post)(
                      this.fetch,
                      `${this.url}/object/sign/${s}`,
                      Object.assign(
                        { expiresIn: t },
                        (null == r ? void 0 : r.transform)
                          ? { transform: r.transform }
                          : {}
                      ),
                      { headers: this.headers }
                    ),
                    a = (null == r ? void 0 : r.download)
                      ? `&download=${!0 === r.download ? "" : r.download}`
                      : "",
                    o = encodeURI(`${this.url}${n.signedURL}${a}`);
                  return { data: (n = { signedUrl: o }), error: null };
                } catch (e) {
                  if ((0, s.isStorageError)(e)) return { data: null, error: e };
                  throw e;
                }
              });
            }
            createSignedUrls(e, t, r) {
              return a(this, void 0, void 0, function* () {
                try {
                  let s = yield (0, i.post)(
                      this.fetch,
                      `${this.url}/object/sign/${this.bucketId}`,
                      { expiresIn: t, paths: e },
                      { headers: this.headers }
                    ),
                    n = (null == r ? void 0 : r.download)
                      ? `&download=${!0 === r.download ? "" : r.download}`
                      : "";
                  return {
                    data: s.map((e) =>
                      Object.assign(Object.assign({}, e), {
                        signedUrl: e.signedURL
                          ? encodeURI(`${this.url}${e.signedURL}${n}`)
                          : null,
                      })
                    ),
                    error: null,
                  };
                } catch (e) {
                  if ((0, s.isStorageError)(e)) return { data: null, error: e };
                  throw e;
                }
              });
            }
            download(e, t) {
              return a(this, void 0, void 0, function* () {
                let r = void 0 !== (null == t ? void 0 : t.transform),
                  n = this.transformOptsToQueryString(
                    (null == t ? void 0 : t.transform) || {}
                  ),
                  a = n ? `?${n}` : "";
                try {
                  let t = this._getFinalPath(e),
                    s = yield (0, i.get)(
                      this.fetch,
                      `${this.url}/${
                        r ? "render/image/authenticated" : "object"
                      }/${t}${a}`,
                      { headers: this.headers, noResolveJson: !0 }
                    ),
                    n = yield s.blob();
                  return { data: n, error: null };
                } catch (e) {
                  if ((0, s.isStorageError)(e)) return { data: null, error: e };
                  throw e;
                }
              });
            }
            getPublicUrl(e, t) {
              let r = this._getFinalPath(e),
                s = [],
                i = (null == t ? void 0 : t.download)
                  ? `download=${!0 === t.download ? "" : t.download}`
                  : "";
              "" !== i && s.push(i);
              let n = void 0 !== (null == t ? void 0 : t.transform),
                a = this.transformOptsToQueryString(
                  (null == t ? void 0 : t.transform) || {}
                );
              "" !== a && s.push(a);
              let o = s.join("&");
              return (
                "" !== o && (o = `?${o}`),
                {
                  data: {
                    publicUrl: encodeURI(
                      `${this.url}/${
                        n ? "render/image" : "object"
                      }/public/${r}${o}`
                    ),
                  },
                }
              );
            }
            remove(e) {
              return a(this, void 0, void 0, function* () {
                try {
                  let t = yield (0, i.remove)(
                    this.fetch,
                    `${this.url}/object/${this.bucketId}`,
                    { prefixes: e },
                    { headers: this.headers }
                  );
                  return { data: t, error: null };
                } catch (e) {
                  if ((0, s.isStorageError)(e)) return { data: null, error: e };
                  throw e;
                }
              });
            }
            list(e, t, r) {
              return a(this, void 0, void 0, function* () {
                try {
                  let s = Object.assign(
                      Object.assign(Object.assign({}, o), t),
                      { prefix: e || "" }
                    ),
                    n = yield (0, i.post)(
                      this.fetch,
                      `${this.url}/object/list/${this.bucketId}`,
                      s,
                      { headers: this.headers },
                      r
                    );
                  return { data: n, error: null };
                } catch (e) {
                  if ((0, s.isStorageError)(e)) return { data: null, error: e };
                  throw e;
                }
              });
            }
            _getFinalPath(e) {
              return `${this.bucketId}/${e}`;
            }
            _removeEmptyFolders(e) {
              return e.replace(/^\/|\/$/g, "").replace(/\/+/g, "/");
            }
            transformOptsToQueryString(e) {
              let t = [];
              return (
                e.width && t.push(`width=${e.width}`),
                e.height && t.push(`height=${e.height}`),
                e.resize && t.push(`resize=${e.resize}`),
                e.format && t.push(`format=${e.format}`),
                e.quality && t.push(`quality=${e.quality}`),
                t.join("&")
              );
            }
          };
        },
        {
          "../lib/errors": "eUAto",
          "../lib/fetch": "8FbLL",
          "../lib/helpers": "kvI8t",
          "@parcel/transformer-js/src/esmodule-helpers.js": "hbR2Q",
        },
      ],
      eUAto: [
        function (e, t, r) {
          var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
          s.defineInteropFlag(r),
            s.export(r, "StorageError", () => i),
            s.export(r, "isStorageError", () => n),
            s.export(r, "StorageApiError", () => a),
            s.export(r, "StorageUnknownError", () => o);
          class i extends Error {
            constructor(e) {
              super(e),
                (this.__isStorageError = !0),
                (this.name = "StorageError");
            }
          }
          function n(e) {
            return (
              "object" == typeof e && null !== e && "__isStorageError" in e
            );
          }
          class a extends i {
            constructor(e, t) {
              super(e), (this.name = "StorageApiError"), (this.status = t);
            }
            toJSON() {
              return {
                name: this.name,
                message: this.message,
                status: this.status,
              };
            }
          }
          class o extends i {
            constructor(e, t) {
              super(e),
                (this.name = "StorageUnknownError"),
                (this.originalError = t);
            }
          }
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "hbR2Q" },
      ],
      "8FbLL": [
        function (e, t, r) {
          var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
          s.defineInteropFlag(r),
            s.export(r, "get", () => u),
            s.export(r, "post", () => d),
            s.export(r, "put", () => p),
            s.export(r, "remove", () => f);
          var i = e("./errors"),
            n = e("./helpers"),
            a = function (e, t, r, s) {
              return new (r || (r = Promise))(function (i, n) {
                function a(e) {
                  try {
                    l(s.next(e));
                  } catch (e) {
                    n(e);
                  }
                }
                function o(e) {
                  try {
                    l(s.throw(e));
                  } catch (e) {
                    n(e);
                  }
                }
                function l(e) {
                  var t;
                  e.done
                    ? i(e.value)
                    : ((t = e.value) instanceof r
                        ? t
                        : new r(function (e) {
                            e(t);
                          })
                      ).then(a, o);
                }
                l((s = s.apply(e, t || [])).next());
              });
            };
          let o = (e) =>
              e.msg ||
              e.message ||
              e.error_description ||
              e.error ||
              JSON.stringify(e),
            l = (e, t) =>
              a(void 0, void 0, void 0, function* () {
                let r = yield (0, n.resolveResponse)();
                e instanceof r
                  ? e
                      .json()
                      .then((r) => {
                        t(new i.StorageApiError(o(r), e.status || 500));
                      })
                      .catch((e) => {
                        t(new i.StorageUnknownError(o(e), e));
                      })
                  : t(new i.StorageUnknownError(o(e), e));
              }),
            c = (e, t, r, s) => {
              let i = {
                method: e,
                headers: (null == t ? void 0 : t.headers) || {},
              };
              return "GET" === e
                ? i
                : ((i.headers = Object.assign(
                    { "Content-Type": "application/json" },
                    null == t ? void 0 : t.headers
                  )),
                  (i.body = JSON.stringify(s)),
                  Object.assign(Object.assign({}, i), r));
            };
          function h(e, t, r, s, i, n) {
            return a(this, void 0, void 0, function* () {
              return new Promise((a, o) => {
                e(r, c(t, s, i, n))
                  .then((e) => {
                    if (!e.ok) throw e;
                    return (null == s ? void 0 : s.noResolveJson)
                      ? e
                      : e.json();
                  })
                  .then((e) => a(e))
                  .catch((e) => l(e, o));
              });
            });
          }
          function u(e, t, r, s) {
            return a(this, void 0, void 0, function* () {
              return h(e, "GET", t, r, s);
            });
          }
          function d(e, t, r, s, i) {
            return a(this, void 0, void 0, function* () {
              return h(e, "POST", t, s, i, r);
            });
          }
          function p(e, t, r, s, i) {
            return a(this, void 0, void 0, function* () {
              return h(e, "PUT", t, s, i, r);
            });
          }
          function f(e, t, r, s, i) {
            return a(this, void 0, void 0, function* () {
              return h(e, "DELETE", t, s, i, r);
            });
          }
        },
        {
          "./errors": "eUAto",
          "./helpers": "kvI8t",
          "@parcel/transformer-js/src/esmodule-helpers.js": "hbR2Q",
        },
      ],
      kvI8t: [
        function (e, t, r) {
          var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
          s.defineInteropFlag(r),
            s.export(r, "resolveFetch", () => i),
            s.export(r, "resolveResponse", () => n);
          let i = (t) => {
              let r;
              return (
                (r =
                  t ||
                  ("undefined" == typeof fetch
                    ? (...t) =>
                        e("886a5780b9fafe4c").then(({ default: e }) => e(...t))
                    : fetch)),
                (...e) => r(...e)
              );
            },
            n = () => {
              var t, r, s, i;
              return (
                (t = void 0),
                (r = void 0),
                (s = void 0),
                (i = function* () {
                  return "undefined" == typeof Response
                    ? (yield e("886a5780b9fafe4c")).Response
                    : Response;
                }),
                new (s || (s = Promise))(function (e, n) {
                  function a(e) {
                    try {
                      l(i.next(e));
                    } catch (e) {
                      n(e);
                    }
                  }
                  function o(e) {
                    try {
                      l(i.throw(e));
                    } catch (e) {
                      n(e);
                    }
                  }
                  function l(t) {
                    var r;
                    t.done
                      ? e(t.value)
                      : ((r = t.value) instanceof s
                          ? r
                          : new s(function (e) {
                              e(r);
                            })
                        ).then(a, o);
                  }
                  l((i = i.apply(t, r || [])).next());
                })
              );
            };
        },
        {
          "886a5780b9fafe4c": "VHsL5",
          "@parcel/transformer-js/src/esmodule-helpers.js": "hbR2Q",
        },
      ],
      crQxE: [
        function (e, t, r) {
          e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(
            r
          );
          var s = e("../lib/constants"),
            i = e("../lib/errors"),
            n = e("../lib/fetch"),
            a = e("../lib/helpers"),
            o = function (e, t, r, s) {
              return new (r || (r = Promise))(function (i, n) {
                function a(e) {
                  try {
                    l(s.next(e));
                  } catch (e) {
                    n(e);
                  }
                }
                function o(e) {
                  try {
                    l(s.throw(e));
                  } catch (e) {
                    n(e);
                  }
                }
                function l(e) {
                  var t;
                  e.done
                    ? i(e.value)
                    : ((t = e.value) instanceof r
                        ? t
                        : new r(function (e) {
                            e(t);
                          })
                      ).then(a, o);
                }
                l((s = s.apply(e, t || [])).next());
              });
            };
          r.default = class {
            constructor(e, t = {}, r) {
              (this.url = e),
                (this.headers = Object.assign(
                  Object.assign({}, s.DEFAULT_HEADERS),
                  t
                )),
                (this.fetch = (0, a.resolveFetch)(r));
            }
            listBuckets() {
              return o(this, void 0, void 0, function* () {
                try {
                  let e = yield (0, n.get)(this.fetch, `${this.url}/bucket`, {
                    headers: this.headers,
                  });
                  return { data: e, error: null };
                } catch (e) {
                  if ((0, i.isStorageError)(e)) return { data: null, error: e };
                  throw e;
                }
              });
            }
            getBucket(e) {
              return o(this, void 0, void 0, function* () {
                try {
                  let t = yield (0, n.get)(
                    this.fetch,
                    `${this.url}/bucket/${e}`,
                    { headers: this.headers }
                  );
                  return { data: t, error: null };
                } catch (e) {
                  if ((0, i.isStorageError)(e)) return { data: null, error: e };
                  throw e;
                }
              });
            }
            createBucket(e, t = { public: !1 }) {
              return o(this, void 0, void 0, function* () {
                try {
                  let r = yield (0, n.post)(
                    this.fetch,
                    `${this.url}/bucket`,
                    {
                      id: e,
                      name: e,
                      public: t.public,
                      file_size_limit: t.fileSizeLimit,
                      allowed_mime_types: t.allowedMimeTypes,
                    },
                    { headers: this.headers }
                  );
                  return { data: r, error: null };
                } catch (e) {
                  if ((0, i.isStorageError)(e)) return { data: null, error: e };
                  throw e;
                }
              });
            }
            updateBucket(e, t) {
              return o(this, void 0, void 0, function* () {
                try {
                  let r = yield (0, n.put)(
                    this.fetch,
                    `${this.url}/bucket/${e}`,
                    {
                      id: e,
                      name: e,
                      public: t.public,
                      file_size_limit: t.fileSizeLimit,
                      allowed_mime_types: t.allowedMimeTypes,
                    },
                    { headers: this.headers }
                  );
                  return { data: r, error: null };
                } catch (e) {
                  if ((0, i.isStorageError)(e)) return { data: null, error: e };
                  throw e;
                }
              });
            }
            emptyBucket(e) {
              return o(this, void 0, void 0, function* () {
                try {
                  let t = yield (0, n.post)(
                    this.fetch,
                    `${this.url}/bucket/${e}/empty`,
                    {},
                    { headers: this.headers }
                  );
                  return { data: t, error: null };
                } catch (e) {
                  if ((0, i.isStorageError)(e)) return { data: null, error: e };
                  throw e;
                }
              });
            }
            deleteBucket(e) {
              return o(this, void 0, void 0, function* () {
                try {
                  let t = yield (0, n.remove)(
                    this.fetch,
                    `${this.url}/bucket/${e}`,
                    {},
                    { headers: this.headers }
                  );
                  return { data: t, error: null };
                } catch (e) {
                  if ((0, i.isStorageError)(e)) return { data: null, error: e };
                  throw e;
                }
              });
            }
          };
        },
        {
          "../lib/constants": "d3wTh",
          "../lib/errors": "eUAto",
          "../lib/fetch": "8FbLL",
          "../lib/helpers": "kvI8t",
          "@parcel/transformer-js/src/esmodule-helpers.js": "hbR2Q",
        },
      ],
      d3wTh: [
        function (e, t, r) {
          var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
          s.defineInteropFlag(r), s.export(r, "DEFAULT_HEADERS", () => n);
          var i = e("./version");
          let n = { "X-Client-Info": `storage-js/${i.version}` };
        },
        {
          "./version": "6AF9s",
          "@parcel/transformer-js/src/esmodule-helpers.js": "hbR2Q",
        },
      ],
      "6AF9s": [
        function (e, t, r) {
          var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
          s.defineInteropFlag(r), s.export(r, "version", () => i);
          let i = "2.5.4";
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "hbR2Q" },
      ],
      gCaxL: [
        function (e, t, r) {
          e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(
            r
          );
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "hbR2Q" },
      ],
      kn5Fy: [
        function (e, t, r) {
          var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
          s.defineInteropFlag(r), s.export(r, "DEFAULT_HEADERS", () => n);
          var i = e("./version");
          let n = { "X-Client-Info": `supabase-js/${i.version}` };
        },
        {
          "./version": "f9Sz9",
          "@parcel/transformer-js/src/esmodule-helpers.js": "hbR2Q",
        },
      ],
      f9Sz9: [
        function (e, t, r) {
          var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
          s.defineInteropFlag(r), s.export(r, "version", () => i);
          let i = "2.33.1";
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "hbR2Q" },
      ],
      duFZb: [
        function (e, t, r) {
          var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
          s.defineInteropFlag(r),
            s.export(r, "resolveFetch", () => a),
            s.export(r, "resolveHeadersConstructor", () => o),
            s.export(r, "fetchWithAuth", () => l);
          var i = e("cross-fetch"),
            n = s.interopDefault(i);
          let a = (e) => {
              let t;
              return (
                (t = e || ("undefined" == typeof fetch ? n.default : fetch)),
                (...e) => t(...e)
              );
            },
            o = () => ("undefined" == typeof Headers ? i.Headers : Headers),
            l = (e, t, r) => {
              let s = a(r),
                i = o();
              return (r, n) => {
                var a, o, l, c;
                return (
                  (a = void 0),
                  (o = void 0),
                  (l = void 0),
                  (c = function* () {
                    var a;
                    let o = null !== (a = yield t()) && void 0 !== a ? a : e,
                      l = new i(null == n ? void 0 : n.headers);
                    return (
                      l.has("apikey") || l.set("apikey", e),
                      l.has("Authorization") ||
                        l.set("Authorization", `Bearer ${o}`),
                      s(r, Object.assign(Object.assign({}, n), { headers: l }))
                    );
                  }),
                  new (l || (l = Promise))(function (e, t) {
                    function r(e) {
                      try {
                        i(c.next(e));
                      } catch (e) {
                        t(e);
                      }
                    }
                    function s(e) {
                      try {
                        i(c.throw(e));
                      } catch (e) {
                        t(e);
                      }
                    }
                    function i(t) {
                      var i;
                      t.done
                        ? e(t.value)
                        : ((i = t.value) instanceof l
                            ? i
                            : new l(function (e) {
                                e(i);
                              })
                          ).then(r, s);
                    }
                    i((c = c.apply(a, o || [])).next());
                  })
                );
              };
            };
        },
        {
          "cross-fetch": "2sitr",
          "@parcel/transformer-js/src/esmodule-helpers.js": "hbR2Q",
        },
      ],
      "2sitr": [
        function (e, t, r) {
          var s = "undefined" != typeof self ? self : this,
            i = (function () {
              function e() {
                (this.fetch = !1), (this.DOMException = s.DOMException);
              }
              return (e.prototype = s), new e();
            })();
          (function (e) {
            var t = {
              searchParams: "URLSearchParams" in i,
              iterable: "Symbol" in i && "iterator" in Symbol,
              blob:
                "FileReader" in i &&
                "Blob" in i &&
                (function () {
                  try {
                    return new Blob(), !0;
                  } catch (e) {
                    return !1;
                  }
                })(),
              formData: "FormData" in i,
              arrayBuffer: "ArrayBuffer" in i,
            };
            if (t.arrayBuffer)
              var r = [
                  "[object Int8Array]",
                  "[object Uint8Array]",
                  "[object Uint8ClampedArray]",
                  "[object Int16Array]",
                  "[object Uint16Array]",
                  "[object Int32Array]",
                  "[object Uint32Array]",
                  "[object Float32Array]",
                  "[object Float64Array]",
                ],
                s =
                  ArrayBuffer.isView ||
                  function (e) {
                    return (
                      e && r.indexOf(Object.prototype.toString.call(e)) > -1
                    );
                  };
            function n(e) {
              if (
                ("string" != typeof e && (e = String(e)),
                /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e))
              )
                throw TypeError("Invalid character in header field name");
              return e.toLowerCase();
            }
            function a(e) {
              return "string" != typeof e && (e = String(e)), e;
            }
            function o(e) {
              var r = {
                next: function () {
                  var t = e.shift();
                  return { done: void 0 === t, value: t };
                },
              };
              return (
                t.iterable &&
                  (r[Symbol.iterator] = function () {
                    return r;
                  }),
                r
              );
            }
            function l(e) {
              (this.map = {}),
                e instanceof l
                  ? e.forEach(function (e, t) {
                      this.append(t, e);
                    }, this)
                  : Array.isArray(e)
                  ? e.forEach(function (e) {
                      this.append(e[0], e[1]);
                    }, this)
                  : e &&
                    Object.getOwnPropertyNames(e).forEach(function (t) {
                      this.append(t, e[t]);
                    }, this);
            }
            function c(e) {
              if (e.bodyUsed) return Promise.reject(TypeError("Already read"));
              e.bodyUsed = !0;
            }
            function h(e) {
              return new Promise(function (t, r) {
                (e.onload = function () {
                  t(e.result);
                }),
                  (e.onerror = function () {
                    r(e.error);
                  });
              });
            }
            function u(e) {
              var t = new FileReader(),
                r = h(t);
              return t.readAsArrayBuffer(e), r;
            }
            function d(e) {
              if (e.slice) return e.slice(0);
              var t = new Uint8Array(e.byteLength);
              return t.set(new Uint8Array(e)), t.buffer;
            }
            function p() {
              return (
                (this.bodyUsed = !1),
                (this._initBody = function (e) {
                  if (((this._bodyInit = e), e)) {
                    if ("string" == typeof e) this._bodyText = e;
                    else if (t.blob && Blob.prototype.isPrototypeOf(e))
                      this._bodyBlob = e;
                    else if (t.formData && FormData.prototype.isPrototypeOf(e))
                      this._bodyFormData = e;
                    else if (
                      t.searchParams &&
                      URLSearchParams.prototype.isPrototypeOf(e)
                    )
                      this._bodyText = e.toString();
                    else {
                      var r;
                      t.arrayBuffer &&
                      t.blob &&
                      (r = e) &&
                      DataView.prototype.isPrototypeOf(r)
                        ? ((this._bodyArrayBuffer = d(e.buffer)),
                          (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                        : t.arrayBuffer &&
                          (ArrayBuffer.prototype.isPrototypeOf(e) || s(e))
                        ? (this._bodyArrayBuffer = d(e))
                        : (this._bodyText = e =
                            Object.prototype.toString.call(e));
                    }
                  } else this._bodyText = "";
                  !this.headers.get("content-type") &&
                    ("string" == typeof e
                      ? this.headers.set(
                          "content-type",
                          "text/plain;charset=UTF-8"
                        )
                      : this._bodyBlob && this._bodyBlob.type
                      ? this.headers.set("content-type", this._bodyBlob.type)
                      : t.searchParams &&
                        URLSearchParams.prototype.isPrototypeOf(e) &&
                        this.headers.set(
                          "content-type",
                          "application/x-www-form-urlencoded;charset=UTF-8"
                        ));
                }),
                t.blob &&
                  ((this.blob = function () {
                    var e = c(this);
                    if (e) return e;
                    if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                    if (this._bodyArrayBuffer)
                      return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                    if (!this._bodyFormData)
                      return Promise.resolve(new Blob([this._bodyText]));
                    throw Error("could not read FormData body as blob");
                  }),
                  (this.arrayBuffer = function () {
                    return this._bodyArrayBuffer
                      ? c(this) || Promise.resolve(this._bodyArrayBuffer)
                      : this.blob().then(u);
                  })),
                (this.text = function () {
                  var e,
                    t,
                    r,
                    s = c(this);
                  if (s) return s;
                  if (this._bodyBlob)
                    return (
                      (e = this._bodyBlob),
                      (r = h((t = new FileReader()))),
                      t.readAsText(e),
                      r
                    );
                  if (this._bodyArrayBuffer)
                    return Promise.resolve(
                      (function (e) {
                        for (
                          var t = new Uint8Array(e), r = Array(t.length), s = 0;
                          s < t.length;
                          s++
                        )
                          r[s] = String.fromCharCode(t[s]);
                        return r.join("");
                      })(this._bodyArrayBuffer)
                    );
                  if (!this._bodyFormData)
                    return Promise.resolve(this._bodyText);
                  throw Error("could not read FormData body as text");
                }),
                t.formData &&
                  (this.formData = function () {
                    return this.text().then(m);
                  }),
                (this.json = function () {
                  return this.text().then(JSON.parse);
                }),
                this
              );
            }
            (l.prototype.append = function (e, t) {
              (e = n(e)), (t = a(t));
              var r = this.map[e];
              this.map[e] = r ? r + ", " + t : t;
            }),
              (l.prototype.delete = function (e) {
                delete this.map[n(e)];
              }),
              (l.prototype.get = function (e) {
                return (e = n(e)), this.has(e) ? this.map[e] : null;
              }),
              (l.prototype.has = function (e) {
                return this.map.hasOwnProperty(n(e));
              }),
              (l.prototype.set = function (e, t) {
                this.map[n(e)] = a(t);
              }),
              (l.prototype.forEach = function (e, t) {
                for (var r in this.map)
                  this.map.hasOwnProperty(r) && e.call(t, this.map[r], r, this);
              }),
              (l.prototype.keys = function () {
                var e = [];
                return (
                  this.forEach(function (t, r) {
                    e.push(r);
                  }),
                  o(e)
                );
              }),
              (l.prototype.values = function () {
                var e = [];
                return (
                  this.forEach(function (t) {
                    e.push(t);
                  }),
                  o(e)
                );
              }),
              (l.prototype.entries = function () {
                var e = [];
                return (
                  this.forEach(function (t, r) {
                    e.push([r, t]);
                  }),
                  o(e)
                );
              }),
              t.iterable &&
                (l.prototype[Symbol.iterator] = l.prototype.entries);
            var f = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
            function g(e, t) {
              var r,
                s,
                i = (t = t || {}).body;
              if (e instanceof g) {
                if (e.bodyUsed) throw TypeError("Already read");
                (this.url = e.url),
                  (this.credentials = e.credentials),
                  t.headers || (this.headers = new l(e.headers)),
                  (this.method = e.method),
                  (this.mode = e.mode),
                  (this.signal = e.signal),
                  i ||
                    null == e._bodyInit ||
                    ((i = e._bodyInit), (e.bodyUsed = !0));
              } else this.url = String(e);
              if (
                ((this.credentials =
                  t.credentials || this.credentials || "same-origin"),
                (t.headers || !this.headers) &&
                  (this.headers = new l(t.headers)),
                (this.method =
                  ((s = (r = t.method || this.method || "GET").toUpperCase()),
                  f.indexOf(s) > -1 ? s : r)),
                (this.mode = t.mode || this.mode || null),
                (this.signal = t.signal || this.signal),
                (this.referrer = null),
                ("GET" === this.method || "HEAD" === this.method) && i)
              )
                throw TypeError("Body not allowed for GET or HEAD requests");
              this._initBody(i);
            }
            function m(e) {
              var t = new FormData();
              return (
                e
                  .trim()
                  .split("&")
                  .forEach(function (e) {
                    if (e) {
                      var r = e.split("="),
                        s = r.shift().replace(/\+/g, " "),
                        i = r.join("=").replace(/\+/g, " ");
                      t.append(decodeURIComponent(s), decodeURIComponent(i));
                    }
                  }),
                t
              );
            }
            function b(e, t) {
              t || (t = {}),
                (this.type = "default"),
                (this.status = void 0 === t.status ? 200 : t.status),
                (this.ok = this.status >= 200 && this.status < 300),
                (this.statusText = "statusText" in t ? t.statusText : "OK"),
                (this.headers = new l(t.headers)),
                (this.url = t.url || ""),
                this._initBody(e);
            }
            (g.prototype.clone = function () {
              return new g(this, { body: this._bodyInit });
            }),
              p.call(g.prototype),
              p.call(b.prototype),
              (b.prototype.clone = function () {
                return new b(this._bodyInit, {
                  status: this.status,
                  statusText: this.statusText,
                  headers: new l(this.headers),
                  url: this.url,
                });
              }),
              (b.error = function () {
                var e = new b(null, { status: 0, statusText: "" });
                return (e.type = "error"), e;
              });
            var y = [301, 302, 303, 307, 308];
            (b.redirect = function (e, t) {
              if (-1 === y.indexOf(t)) throw RangeError("Invalid status code");
              return new b(null, { status: t, headers: { location: e } });
            }),
              (e.DOMException = i.DOMException);
            try {
              new e.DOMException();
            } catch (t) {
              (e.DOMException = function (e, t) {
                (this.message = e), (this.name = t);
                var r = Error(e);
                this.stack = r.stack;
              }),
                (e.DOMException.prototype = Object.create(Error.prototype)),
                (e.DOMException.prototype.constructor = e.DOMException);
            }
            function v(r, s) {
              return new Promise(function (i, n) {
                var a = new g(r, s);
                if (a.signal && a.signal.aborted)
                  return n(new e.DOMException("Aborted", "AbortError"));
                var o = new XMLHttpRequest();
                function c() {
                  o.abort();
                }
                (o.onload = function () {
                  var e,
                    t,
                    r = {
                      status: o.status,
                      statusText: o.statusText,
                      headers:
                        ((e = o.getAllResponseHeaders() || ""),
                        (t = new l()),
                        e
                          .replace(/\r?\n[\t ]+/g, " ")
                          .split(/\r?\n/)
                          .forEach(function (e) {
                            var r = e.split(":"),
                              s = r.shift().trim();
                            if (s) {
                              var i = r.join(":").trim();
                              t.append(s, i);
                            }
                          }),
                        t),
                    };
                  r.url =
                    "responseURL" in o
                      ? o.responseURL
                      : r.headers.get("X-Request-URL");
                  var s = "response" in o ? o.response : o.responseText;
                  i(new b(s, r));
                }),
                  (o.onerror = function () {
                    n(TypeError("Network request failed"));
                  }),
                  (o.ontimeout = function () {
                    n(TypeError("Network request failed"));
                  }),
                  (o.onabort = function () {
                    n(new e.DOMException("Aborted", "AbortError"));
                  }),
                  o.open(a.method, a.url, !0),
                  "include" === a.credentials
                    ? (o.withCredentials = !0)
                    : "omit" === a.credentials && (o.withCredentials = !1),
                  "responseType" in o && t.blob && (o.responseType = "blob"),
                  a.headers.forEach(function (e, t) {
                    o.setRequestHeader(t, e);
                  }),
                  a.signal &&
                    (a.signal.addEventListener("abort", c),
                    (o.onreadystatechange = function () {
                      4 === o.readyState &&
                        a.signal.removeEventListener("abort", c);
                    })),
                  o.send(void 0 === a._bodyInit ? null : a._bodyInit);
              });
            }
            (v.polyfill = !0),
              i.fetch ||
                ((i.fetch = v),
                (i.Headers = l),
                (i.Request = g),
                (i.Response = b)),
              (e.Headers = l),
              (e.Request = g),
              (e.Response = b),
              (e.fetch = v),
              Object.defineProperty(e, "__esModule", { value: !0 });
          })({}),
            (i.fetch.ponyfill = !0),
            delete i.fetch.polyfill,
            ((r = i.fetch).default = i.fetch),
            (r.fetch = i.fetch),
            (r.Headers = i.Headers),
            (r.Request = i.Request),
            (r.Response = i.Response),
            (t.exports = r);
        },
        {},
      ],
      i1iq2: [
        function (e, t, r) {
          var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
          function i() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
              /[xy]/g,
              function (e) {
                var t = (16 * Math.random()) | 0;
                return ("x" == e ? t : (3 & t) | 8).toString(16);
              }
            );
          }
          function n(e) {
            return e.replace(/\/$/, "");
          }
          s.defineInteropFlag(r),
            s.export(r, "uuid", () => i),
            s.export(r, "stripTrailingSlash", () => n),
            s.export(r, "isBrowser", () => a),
            s.export(r, "applySettingDefaults", () => o);
          let a = () => "undefined" != typeof window;
          function o(e, t) {
            let { db: r, auth: s, realtime: i, global: n } = e,
              { db: a, auth: o, realtime: l, global: c } = t;
            return {
              db: Object.assign(Object.assign({}, a), r),
              auth: Object.assign(Object.assign({}, o), s),
              realtime: Object.assign(Object.assign({}, l), i),
              global: Object.assign(Object.assign({}, c), n),
            };
          }
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "hbR2Q" },
      ],
      "4udFA": [
        function (e, t, r) {
          var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
          s.defineInteropFlag(r), s.export(r, "SupabaseAuthClient", () => n);
          var i = e("@supabase/gotrue-js");
          class n extends i.GoTrueClient {
            constructor(e) {
              super(e);
            }
          }
        },
        {
          "@supabase/gotrue-js": "214XC",
          "@parcel/transformer-js/src/esmodule-helpers.js": "hbR2Q",
        },
      ],
      "214XC": [
        function (e, t, r) {
          var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
          s.defineInteropFlag(r),
            s.export(r, "navigatorLock", () => h.navigatorLock),
            s.export(
              r,
              "NavigatorLockAcquireTimeoutError",
              () => h.NavigatorLockAcquireTimeoutError
            ),
            s.export(r, "lockInternals", () => h.internals),
            s.export(r, "GoTrueAdminApi", () => n.default),
            s.export(r, "GoTrueClient", () => o.default);
          var i = e("./GoTrueAdminApi"),
            n = s.interopDefault(i),
            a = e("./GoTrueClient"),
            o = s.interopDefault(a),
            l = e("./lib/types");
          s.exportAll(l, r);
          var c = e("./lib/errors");
          s.exportAll(c, r);
          var h = e("./lib/locks");
        },
        {
          "./GoTrueAdminApi": "60Wku",
          "./GoTrueClient": "9zVxQ",
          "./lib/types": "63wqs",
          "./lib/errors": "c0fws",
          "./lib/locks": "9CO74",
          "@parcel/transformer-js/src/esmodule-helpers.js": "hbR2Q",
        },
      ],
      "60Wku": [
        function (e, t, r) {
          e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(
            r
          );
          var s = e("./lib/fetch"),
            i = e("./lib/helpers"),
            n = e("./lib/errors"),
            a = function (e, t) {
              var r = {};
              for (var s in e)
                Object.prototype.hasOwnProperty.call(e, s) &&
                  0 > t.indexOf(s) &&
                  (r[s] = e[s]);
              if (
                null != e &&
                "function" == typeof Object.getOwnPropertySymbols
              )
                for (
                  var i = 0, s = Object.getOwnPropertySymbols(e);
                  i < s.length;
                  i++
                )
                  0 > t.indexOf(s[i]) &&
                    Object.prototype.propertyIsEnumerable.call(e, s[i]) &&
                    (r[s[i]] = e[s[i]]);
              return r;
            };
          r.default = class {
            constructor({ url: e = "", headers: t = {}, fetch: r }) {
              (this.url = e),
                (this.headers = t),
                (this.fetch = (0, i.resolveFetch)(r)),
                (this.mfa = {
                  listFactors: this._listFactors.bind(this),
                  deleteFactor: this._deleteFactor.bind(this),
                });
            }
            async signOut(e, t = "global") {
              try {
                return (
                  await (0, s._request)(
                    this.fetch,
                    "POST",
                    `${this.url}/logout?scope=${t}`,
                    { headers: this.headers, jwt: e, noResolveJson: !0 }
                  ),
                  { data: null, error: null }
                );
              } catch (e) {
                if ((0, n.isAuthError)(e)) return { data: null, error: e };
                throw e;
              }
            }
            async inviteUserByEmail(e, t = {}) {
              try {
                return await (0, s._request)(
                  this.fetch,
                  "POST",
                  `${this.url}/invite`,
                  {
                    body: { email: e, data: t.data },
                    headers: this.headers,
                    redirectTo: t.redirectTo,
                    xform: s._userResponse,
                  }
                );
              } catch (e) {
                if ((0, n.isAuthError)(e))
                  return { data: { user: null }, error: e };
                throw e;
              }
            }
            async generateLink(e) {
              try {
                let { options: t } = e,
                  r = a(e, ["options"]),
                  i = Object.assign(Object.assign({}, r), t);
                return (
                  "newEmail" in r &&
                    ((i.new_email = null == r ? void 0 : r.newEmail),
                    delete i.newEmail),
                  await (0, s._request)(
                    this.fetch,
                    "POST",
                    `${this.url}/admin/generate_link`,
                    {
                      body: i,
                      headers: this.headers,
                      xform: s._generateLinkResponse,
                      redirectTo: null == t ? void 0 : t.redirectTo,
                    }
                  )
                );
              } catch (e) {
                if ((0, n.isAuthError)(e))
                  return { data: { properties: null, user: null }, error: e };
                throw e;
              }
            }
            async createUser(e) {
              try {
                return await (0, s._request)(
                  this.fetch,
                  "POST",
                  `${this.url}/admin/users`,
                  { body: e, headers: this.headers, xform: s._userResponse }
                );
              } catch (e) {
                if ((0, n.isAuthError)(e))
                  return { data: { user: null }, error: e };
                throw e;
              }
            }
            async listUsers(e) {
              var t, r, i, a, o, l, c;
              try {
                let n = { nextPage: null, lastPage: 0, total: 0 },
                  h = await (0, s._request)(
                    this.fetch,
                    "GET",
                    `${this.url}/admin/users`,
                    {
                      headers: this.headers,
                      noResolveJson: !0,
                      query: {
                        page:
                          null !==
                            (r =
                              null === (t = null == e ? void 0 : e.page) ||
                              void 0 === t
                                ? void 0
                                : t.toString()) && void 0 !== r
                            ? r
                            : "",
                        per_page:
                          null !==
                            (a =
                              null === (i = null == e ? void 0 : e.perPage) ||
                              void 0 === i
                                ? void 0
                                : i.toString()) && void 0 !== a
                            ? a
                            : "",
                      },
                      xform: s._noResolveJsonResponse,
                    }
                  );
                if (h.error) throw h.error;
                let u = await h.json(),
                  d =
                    null !== (o = h.headers.get("x-total-count")) &&
                    void 0 !== o
                      ? o
                      : 0,
                  p =
                    null !==
                      (c =
                        null === (l = h.headers.get("link")) || void 0 === l
                          ? void 0
                          : l.split(",")) && void 0 !== c
                      ? c
                      : [];
                return (
                  p.length > 0 &&
                    (p.forEach((e) => {
                      let t = parseInt(
                          e.split(";")[0].split("=")[1].substring(0, 1)
                        ),
                        r = JSON.parse(e.split(";")[1].split("=")[1]);
                      n[`${r}Page`] = t;
                    }),
                    (n.total = parseInt(d))),
                  { data: Object.assign(Object.assign({}, u), n), error: null }
                );
              } catch (e) {
                if ((0, n.isAuthError)(e))
                  return { data: { users: [] }, error: e };
                throw e;
              }
            }
            async getUserById(e) {
              try {
                return await (0, s._request)(
                  this.fetch,
                  "GET",
                  `${this.url}/admin/users/${e}`,
                  { headers: this.headers, xform: s._userResponse }
                );
              } catch (e) {
                if ((0, n.isAuthError)(e))
                  return { data: { user: null }, error: e };
                throw e;
              }
            }
            async updateUserById(e, t) {
              try {
                return await (0, s._request)(
                  this.fetch,
                  "PUT",
                  `${this.url}/admin/users/${e}`,
                  { body: t, headers: this.headers, xform: s._userResponse }
                );
              } catch (e) {
                if ((0, n.isAuthError)(e))
                  return { data: { user: null }, error: e };
                throw e;
              }
            }
            async deleteUser(e, t = !1) {
              try {
                return await (0, s._request)(
                  this.fetch,
                  "DELETE",
                  `${this.url}/admin/users/${e}`,
                  {
                    headers: this.headers,
                    body: { should_soft_delete: t },
                    xform: s._userResponse,
                  }
                );
              } catch (e) {
                if ((0, n.isAuthError)(e))
                  return { data: { user: null }, error: e };
                throw e;
              }
            }
            async _listFactors(e) {
              try {
                let { data: t, error: r } = await (0, s._request)(
                  this.fetch,
                  "GET",
                  `${this.url}/admin/users/${e.userId}/factors`,
                  {
                    headers: this.headers,
                    xform: (e) => ({ data: { factors: e }, error: null }),
                  }
                );
                return { data: t, error: r };
              } catch (e) {
                if ((0, n.isAuthError)(e)) return { data: null, error: e };
                throw e;
              }
            }
            async _deleteFactor(e) {
              try {
                let t = await (0, s._request)(
                  this.fetch,
                  "DELETE",
                  `${this.url}/admin/users/${e.userId}/factors/${e.id}`,
                  { headers: this.headers }
                );
                return { data: t, error: null };
              } catch (e) {
                if ((0, n.isAuthError)(e)) return { data: null, error: e };
                throw e;
              }
            }
          };
        },
        {
          "./lib/fetch": "cXZup",
          "./lib/helpers": "ltLuR",
          "./lib/errors": "c0fws",
          "@parcel/transformer-js/src/esmodule-helpers.js": "hbR2Q",
        },
      ],
      cXZup: [
        function (e, t, r) {
          var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
          s.defineInteropFlag(r),
            s.export(r, "_request", () => u),
            s.export(r, "_sessionResponse", () => p),
            s.export(r, "_userResponse", () => f),
            s.export(r, "_ssoResponse", () => g),
            s.export(r, "_generateLinkResponse", () => m),
            s.export(r, "_noResolveJsonResponse", () => b);
          var i = e("./helpers"),
            n = e("./errors"),
            a = function (e, t) {
              var r = {};
              for (var s in e)
                Object.prototype.hasOwnProperty.call(e, s) &&
                  0 > t.indexOf(s) &&
                  (r[s] = e[s]);
              if (
                null != e &&
                "function" == typeof Object.getOwnPropertySymbols
              )
                for (
                  var i = 0, s = Object.getOwnPropertySymbols(e);
                  i < s.length;
                  i++
                )
                  0 > t.indexOf(s[i]) &&
                    Object.prototype.propertyIsEnumerable.call(e, s[i]) &&
                    (r[s[i]] = e[s[i]]);
              return r;
            };
          let o = (e) =>
              e.msg ||
              e.message ||
              e.error_description ||
              e.error ||
              JSON.stringify(e),
            l = [502, 503, 504];
          async function c(e) {
            let t;
            if (!(0, i.looksLikeFetchResponse)(e))
              throw new n.AuthRetryableFetchError(o(e), 0);
            if (l.includes(e.status))
              throw new n.AuthRetryableFetchError(o(e), e.status);
            try {
              t = await e.json();
            } catch (e) {
              throw new n.AuthUnknownError(o(e), e);
            }
            throw new n.AuthApiError(o(t), e.status || 500);
          }
          let h = (e, t, r, s) => {
            let i = {
              method: e,
              headers: (null == t ? void 0 : t.headers) || {},
            };
            return "GET" === e
              ? i
              : ((i.headers = Object.assign(
                  { "Content-Type": "application/json;charset=UTF-8" },
                  null == t ? void 0 : t.headers
                )),
                (i.body = JSON.stringify(s)),
                Object.assign(Object.assign({}, i), r));
          };
          async function u(e, t, r, s) {
            var i;
            let n = Object.assign({}, null == s ? void 0 : s.headers);
            (null == s ? void 0 : s.jwt) &&
              (n.Authorization = `Bearer ${s.jwt}`);
            let a =
              null !== (i = null == s ? void 0 : s.query) && void 0 !== i
                ? i
                : {};
            (null == s ? void 0 : s.redirectTo) &&
              (a.redirect_to = s.redirectTo);
            let o = Object.keys(a).length
                ? "?" + new URLSearchParams(a).toString()
                : "",
              l = await d(
                e,
                t,
                r + o,
                {
                  headers: n,
                  noResolveJson: null == s ? void 0 : s.noResolveJson,
                },
                {},
                null == s ? void 0 : s.body
              );
            return (null == s ? void 0 : s.xform)
              ? null == s
                ? void 0
                : s.xform(l)
              : { data: Object.assign({}, l), error: null };
          }
          async function d(e, t, r, s, i, a) {
            let l;
            let u = h(t, s, i, a);
            try {
              l = await e(r, u);
            } catch (e) {
              throw (console.error(e), new n.AuthRetryableFetchError(o(e), 0));
            }
            if ((l.ok || (await c(l)), null == s ? void 0 : s.noResolveJson))
              return l;
            try {
              return await l.json();
            } catch (e) {
              await c(e);
            }
          }
          function p(e) {
            var t;
            let r = null;
            e.access_token &&
              e.refresh_token &&
              e.expires_in &&
              ((r = Object.assign({}, e)),
              e.expires_at || (r.expires_at = (0, i.expiresAt)(e.expires_in)));
            let s = null !== (t = e.user) && void 0 !== t ? t : e;
            return { data: { session: r, user: s }, error: null };
          }
          function f(e) {
            var t;
            let r = null !== (t = e.user) && void 0 !== t ? t : e;
            return { data: { user: r }, error: null };
          }
          function g(e) {
            return { data: e, error: null };
          }
          function m(e) {
            let {
                action_link: t,
                email_otp: r,
                hashed_token: s,
                redirect_to: i,
                verification_type: n,
              } = e,
              o = a(e, [
                "action_link",
                "email_otp",
                "hashed_token",
                "redirect_to",
                "verification_type",
              ]),
              l = Object.assign({}, o);
            return {
              data: {
                properties: {
                  action_link: t,
                  email_otp: r,
                  hashed_token: s,
                  redirect_to: i,
                  verification_type: n,
                },
                user: l,
              },
              error: null,
            };
          }
          function b(e) {
            return e;
          }
        },
        {
          "./helpers": "ltLuR",
          "./errors": "c0fws",
          "@parcel/transformer-js/src/esmodule-helpers.js": "hbR2Q",
        },
      ],
      ltLuR: [
        function (e, t, r) {
          var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
          function i(e) {
            let t = Math.round(Date.now() / 1e3);
            return t + e;
          }
          function n() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
              /[xy]/g,
              function (e) {
                let t = (16 * Math.random()) | 0;
                return ("x" == e ? t : (3 & t) | 8).toString(16);
              }
            );
          }
          s.defineInteropFlag(r),
            s.export(r, "expiresAt", () => i),
            s.export(r, "uuid", () => n),
            s.export(r, "isBrowser", () => a),
            s.export(r, "supportsLocalStorage", () => l),
            s.export(r, "parseParametersFromURL", () => c),
            s.export(r, "resolveFetch", () => h),
            s.export(r, "looksLikeFetchResponse", () => u),
            s.export(r, "setItemAsync", () => d),
            s.export(r, "getItemAsync", () => p),
            s.export(r, "removeItemAsync", () => f),
            s.export(r, "decodeBase64URL", () => g),
            s.export(r, "Deferred", () => m),
            s.export(r, "decodeJWTPayload", () => b),
            s.export(r, "sleep", () => y),
            s.export(r, "retryable", () => v),
            s.export(r, "generatePKCEVerifier", () => w),
            s.export(r, "generatePKCEChallenge", () => E);
          let a = () => "undefined" != typeof document,
            o = { tested: !1, writable: !1 },
            l = () => {
              if (!a()) return !1;
              try {
                if ("object" != typeof globalThis.localStorage) return !1;
              } catch (e) {
                return !1;
              }
              if (o.tested) return o.writable;
              let e = `lswt-${Math.random()}${Math.random()}`;
              try {
                globalThis.localStorage.setItem(e, e),
                  globalThis.localStorage.removeItem(e),
                  (o.tested = !0),
                  (o.writable = !0);
              } catch (e) {
                (o.tested = !0), (o.writable = !1);
              }
              return o.writable;
            };
          function c(e) {
            let t = {},
              r = new URL(e);
            if (r.hash && "#" === r.hash[0])
              try {
                let e = new URLSearchParams(r.hash.substring(1));
                e.forEach((e, r) => {
                  t[r] = e;
                });
              } catch (e) {}
            return (
              r.searchParams.forEach((e, r) => {
                t[r] = e;
              }),
              t
            );
          }
          let h = (t) => {
              let r;
              return (
                (r =
                  t ||
                  ("undefined" == typeof fetch
                    ? (...t) =>
                        e("b2ccdf67f6d24e8b").then(({ default: e }) => e(...t))
                    : fetch)),
                (...e) => r(...e)
              );
            },
            u = (e) =>
              "object" == typeof e &&
              null !== e &&
              "status" in e &&
              "ok" in e &&
              "json" in e &&
              "function" == typeof e.json,
            d = async (e, t, r) => {
              await e.setItem(t, JSON.stringify(r));
            },
            p = async (e, t) => {
              let r = await e.getItem(t);
              if (!r) return null;
              try {
                return JSON.parse(r);
              } catch (e) {
                return r;
              }
            },
            f = async (e, t) => {
              await e.removeItem(t);
            };
          function g(e) {
            let t, r, s, i, n, a, o;
            let l =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
              c = "",
              h = 0;
            for (e = e.replace("-", "+").replace("_", "/"); h < e.length; )
              (i = l.indexOf(e.charAt(h++))),
                (n = l.indexOf(e.charAt(h++))),
                (a = l.indexOf(e.charAt(h++))),
                (o = l.indexOf(e.charAt(h++))),
                (t = (i << 2) | (n >> 4)),
                (r = ((15 & n) << 4) | (a >> 2)),
                (s = ((3 & a) << 6) | o),
                (c += String.fromCharCode(t)),
                64 != a && 0 != r && (c += String.fromCharCode(r)),
                64 != o && 0 != s && (c += String.fromCharCode(s));
            return c;
          }
          class m {
            constructor() {
              this.promise = new m.promiseConstructor((e, t) => {
                (this.resolve = e), (this.reject = t);
              });
            }
          }
          function b(e) {
            let t = e.split(".");
            if (3 !== t.length)
              throw Error("JWT is not valid: not a JWT structure");
            if (
              !/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}=?$|[a-z0-9_-]{2}(==)?$)$/i.test(
                t[1]
              )
            )
              throw Error(
                "JWT is not valid: payload is not in base64url format"
              );
            let r = t[1];
            return JSON.parse(g(r));
          }
          async function y(e) {
            return await new Promise((t) => {
              setTimeout(() => t(null), e);
            });
          }
          function v(e, t) {
            let r = new Promise((r, s) => {
              (async () => {
                for (let i = 0; i < 1 / 0; i++)
                  try {
                    let s = await e(i);
                    if (!t(i, null, s)) {
                      r(s);
                      return;
                    }
                  } catch (e) {
                    if (!t(i, e)) {
                      s(e);
                      return;
                    }
                  }
              })();
            });
            return r;
          }
          function _(e) {
            return ("0" + e.toString(16)).substr(-2);
          }
          function w() {
            let e = new Uint32Array(56);
            if ("undefined" == typeof crypto) {
              let e =
                  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",
                t = e.length,
                r = "";
              for (let s = 0; s < 56; s++)
                r += e.charAt(Math.floor(Math.random() * t));
              return r;
            }
            return crypto.getRandomValues(e), Array.from(e, _).join("");
          }
          async function j(e) {
            let t = new TextEncoder(),
              r = t.encode(e),
              s = await crypto.subtle.digest("SHA-256", r),
              i = new Uint8Array(s);
            return Array.from(i)
              .map((e) => String.fromCharCode(e))
              .join("");
          }
          async function E(e) {
            let t =
              "undefined" != typeof crypto &&
              void 0 !== crypto.subtle &&
              "undefined" != typeof TextEncoder;
            if (!t)
              return (
                console.warn(
                  "WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."
                ),
                e
              );
            let r = await j(e);
            return btoa(r)
              .replace(/\+/g, "-")
              .replace(/\//g, "_")
              .replace(/=+$/, "");
          }
          m.promiseConstructor = Promise;
        },
        {
          b2ccdf67f6d24e8b: "VHsL5",
          "@parcel/transformer-js/src/esmodule-helpers.js": "hbR2Q",
        },
      ],
      c0fws: [
        function (e, t, r) {
          var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
          s.defineInteropFlag(r),
            s.export(r, "AuthError", () => i),
            s.export(r, "isAuthError", () => n),
            s.export(r, "AuthApiError", () => a),
            s.export(r, "isAuthApiError", () => o),
            s.export(r, "AuthUnknownError", () => l),
            s.export(r, "CustomAuthError", () => c),
            s.export(r, "AuthSessionMissingError", () => h),
            s.export(r, "AuthInvalidTokenResponseError", () => u),
            s.export(r, "AuthInvalidCredentialsError", () => d),
            s.export(r, "AuthImplicitGrantRedirectError", () => p),
            s.export(r, "AuthPKCEGrantCodeExchangeError", () => f),
            s.export(r, "AuthRetryableFetchError", () => g),
            s.export(r, "isAuthRetryableFetchError", () => m);
          class i extends Error {
            constructor(e, t) {
              super(e),
                (this.__isAuthError = !0),
                (this.name = "AuthError"),
                (this.status = t);
            }
          }
          function n(e) {
            return "object" == typeof e && null !== e && "__isAuthError" in e;
          }
          class a extends i {
            constructor(e, t) {
              super(e, t), (this.name = "AuthApiError"), (this.status = t);
            }
            toJSON() {
              return {
                name: this.name,
                message: this.message,
                status: this.status,
              };
            }
          }
          function o(e) {
            return n(e) && "AuthApiError" === e.name;
          }
          class l extends i {
            constructor(e, t) {
              super(e),
                (this.name = "AuthUnknownError"),
                (this.originalError = t);
            }
          }
          class c extends i {
            constructor(e, t, r) {
              super(e), (this.name = t), (this.status = r);
            }
            toJSON() {
              return {
                name: this.name,
                message: this.message,
                status: this.status,
              };
            }
          }
          class h extends c {
            constructor() {
              super("Auth session missing!", "AuthSessionMissingError", 400);
            }
          }
          class u extends c {
            constructor() {
              super(
                "Auth session or user missing",
                "AuthInvalidTokenResponseError",
                500
              );
            }
          }
          class d extends c {
            constructor(e) {
              super(e, "AuthInvalidCredentialsError", 400);
            }
          }
          class p extends c {
            constructor(e, t = null) {
              super(e, "AuthImplicitGrantRedirectError", 500),
                (this.details = null),
                (this.details = t);
            }
            toJSON() {
              return {
                name: this.name,
                message: this.message,
                status: this.status,
                details: this.details,
              };
            }
          }
          class f extends c {
            constructor(e, t = null) {
              super(e, "AuthPKCEGrantCodeExchangeError", 500),
                (this.details = null),
                (this.details = t);
            }
            toJSON() {
              return {
                name: this.name,
                message: this.message,
                status: this.status,
                details: this.details,
              };
            }
          }
          class g extends c {
            constructor(e, t) {
              super(e, "AuthRetryableFetchError", t);
            }
          }
          function m(e) {
            return n(e) && "AuthRetryableFetchError" === e.name;
          }
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "hbR2Q" },
      ],
      "9zVxQ": [
        function (e, t, r) {
          var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
          s.defineInteropFlag(r);
          var i = e("./GoTrueAdminApi"),
            n = s.interopDefault(i),
            a = e("./lib/constants"),
            o = e("./lib/errors"),
            l = e("./lib/fetch"),
            c = e("./lib/helpers"),
            h = e("./lib/local-storage"),
            u = e("./lib/polyfills"),
            d = e("./lib/version"),
            p = e("./lib/locks");
          (0, u.polyfillGlobalThis)();
          let f = {
            url: a.GOTRUE_URL,
            storageKey: a.STORAGE_KEY,
            autoRefreshToken: !0,
            persistSession: !0,
            detectSessionInUrl: !0,
            headers: a.DEFAULT_HEADERS,
            flowType: "implicit",
            debug: !1,
          };
          async function g(e, t, r) {
            return await r();
          }
          class m {
            constructor(e) {
              var t;
              (this.memoryStorage = null),
                (this.stateChangeEmitters = new Map()),
                (this.autoRefreshTicker = null),
                (this.visibilityChangedCallback = null),
                (this.refreshingDeferred = null),
                (this.initializePromise = null),
                (this.detectSessionInUrl = !0),
                (this.lockAcquired = !1),
                (this.pendingInLock = []),
                (this.broadcastChannel = null),
                (this.logger = console.log),
                (this.instanceID = m.nextInstanceID),
                (m.nextInstanceID += 1),
                this.instanceID > 0 &&
                  (0, c.isBrowser)() &&
                  console.warn(
                    "Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key."
                  );
              let r = Object.assign(Object.assign({}, f), e);
              if (
                ((this.logDebugMessages = !!r.debug),
                "function" == typeof r.debug && (this.logger = r.debug),
                (this.persistSession = r.persistSession),
                (this.storageKey = r.storageKey),
                (this.autoRefreshToken = r.autoRefreshToken),
                (this.admin = new n.default({
                  url: r.url,
                  headers: r.headers,
                  fetch: r.fetch,
                })),
                (this.url = r.url),
                (this.headers = r.headers),
                (this.fetch = (0, c.resolveFetch)(r.fetch)),
                (this.lock = r.lock || g),
                (this.detectSessionInUrl = r.detectSessionInUrl),
                (this.flowType = r.flowType),
                (this.mfa = {
                  verify: this._verify.bind(this),
                  enroll: this._enroll.bind(this),
                  unenroll: this._unenroll.bind(this),
                  challenge: this._challenge.bind(this),
                  listFactors: this._listFactors.bind(this),
                  challengeAndVerify: this._challengeAndVerify.bind(this),
                  getAuthenticatorAssuranceLevel:
                    this._getAuthenticatorAssuranceLevel.bind(this),
                }),
                this.persistSession
                  ? r.storage
                    ? (this.storage = r.storage)
                    : (0, c.supportsLocalStorage)()
                    ? (this.storage = h.localStorageAdapter)
                    : ((this.memoryStorage = {}),
                      (this.storage = (0, h.memoryLocalStorageAdapter)(
                        this.memoryStorage
                      )))
                  : ((this.memoryStorage = {}),
                    (this.storage = (0, h.memoryLocalStorageAdapter)(
                      this.memoryStorage
                    ))),
                (0, c.isBrowser)() &&
                  globalThis.BroadcastChannel &&
                  this.persistSession &&
                  this.storageKey)
              ) {
                try {
                  this.broadcastChannel = new globalThis.BroadcastChannel(
                    this.storageKey
                  );
                } catch (e) {
                  console.error(
                    "Failed to create a new BroadcastChannel, multi-tab state changes will not be available",
                    e
                  );
                }
                null === (t = this.broadcastChannel) ||
                  void 0 === t ||
                  t.addEventListener("message", async (e) => {
                    this._debug(
                      "received broadcast notification from other tab or client",
                      e
                    ),
                      await this._notifyAllSubscribers(
                        e.data.event,
                        e.data.session,
                        !1
                      );
                  });
              }
              this.initialize();
            }
            _debug(...e) {
              return (
                this.logDebugMessages &&
                  this.logger(
                    `GoTrueClient@${this.instanceID} (${
                      d.version
                    }) ${new Date().toISOString()}`,
                    ...e
                  ),
                this
              );
            }
            async initialize() {
              return (
                this.initializePromise ||
                  (this.initializePromise = (async () =>
                    await this._acquireLock(
                      -1,
                      async () => await this._initialize()
                    ))()),
                await this.initializePromise
              );
            }
            async _initialize() {
              try {
                let e = !!(0, c.isBrowser)() && (await this._isPKCEFlow());
                if (
                  (this._debug("#_initialize()", "begin", "is PKCE flow", e),
                  e || (this.detectSessionInUrl && this._isImplicitGrantFlow()))
                ) {
                  let { data: t, error: r } = await this._getSessionFromURL(e);
                  if (r)
                    return (
                      this._debug(
                        "#_initialize()",
                        "error detecting session from URL",
                        r
                      ),
                      await this._removeSession(),
                      { error: r }
                    );
                  let { session: s, redirectType: i } = t;
                  return (
                    this._debug(
                      "#_initialize()",
                      "detected session in URL",
                      s,
                      "redirect type",
                      i
                    ),
                    await this._saveSession(s),
                    setTimeout(async () => {
                      "recovery" === i
                        ? await this._notifyAllSubscribers(
                            "PASSWORD_RECOVERY",
                            s
                          )
                        : await this._notifyAllSubscribers("SIGNED_IN", s);
                    }, 0),
                    { error: null }
                  );
                }
                return await this._recoverAndRefresh(), { error: null };
              } catch (e) {
                if ((0, o.isAuthError)(e)) return { error: e };
                return {
                  error: new o.AuthUnknownError(
                    "Unexpected error during initialization",
                    e
                  ),
                };
              } finally {
                await this._handleVisibilityChange(),
                  this._debug("#_initialize()", "end");
              }
            }
            async signUp(e) {
              var t, r, s;
              try {
                let i;
                if ((await this._removeSession(), "email" in e)) {
                  let { email: r, password: s, options: n } = e,
                    a = null,
                    o = null;
                  if ("pkce" === this.flowType) {
                    let e = (0, c.generatePKCEVerifier)();
                    await (0, c.setItemAsync)(
                      this.storage,
                      `${this.storageKey}-code-verifier`,
                      e
                    ),
                      (a = await (0, c.generatePKCEChallenge)(e)),
                      (o = e === a ? "plain" : "s256");
                  }
                  i = await (0, l._request)(
                    this.fetch,
                    "POST",
                    `${this.url}/signup`,
                    {
                      headers: this.headers,
                      redirectTo: null == n ? void 0 : n.emailRedirectTo,
                      body: {
                        email: r,
                        password: s,
                        data:
                          null !== (t = null == n ? void 0 : n.data) &&
                          void 0 !== t
                            ? t
                            : {},
                        gotrue_meta_security: {
                          captcha_token: null == n ? void 0 : n.captchaToken,
                        },
                        code_challenge: a,
                        code_challenge_method: o,
                      },
                      xform: l._sessionResponse,
                    }
                  );
                } else if ("phone" in e) {
                  let { phone: t, password: n, options: a } = e;
                  i = await (0, l._request)(
                    this.fetch,
                    "POST",
                    `${this.url}/signup`,
                    {
                      headers: this.headers,
                      body: {
                        phone: t,
                        password: n,
                        data:
                          null !== (r = null == a ? void 0 : a.data) &&
                          void 0 !== r
                            ? r
                            : {},
                        channel:
                          null !== (s = null == a ? void 0 : a.channel) &&
                          void 0 !== s
                            ? s
                            : "sms",
                        gotrue_meta_security: {
                          captcha_token: null == a ? void 0 : a.captchaToken,
                        },
                      },
                      xform: l._sessionResponse,
                    }
                  );
                } else
                  throw new o.AuthInvalidCredentialsError(
                    "You must provide either an email or phone number and a password"
                  );
                let { data: n, error: a } = i;
                if (a || !n)
                  return { data: { user: null, session: null }, error: a };
                let h = n.session,
                  u = n.user;
                return (
                  n.session &&
                    (await this._saveSession(n.session),
                    await this._notifyAllSubscribers("SIGNED_IN", h)),
                  { data: { user: u, session: h }, error: null }
                );
              } catch (e) {
                if ((0, o.isAuthError)(e))
                  return { data: { user: null, session: null }, error: e };
                throw e;
              }
            }
            async signInWithPassword(e) {
              try {
                let t;
                if ((await this._removeSession(), "email" in e)) {
                  let { email: r, password: s, options: i } = e;
                  t = await (0, l._request)(
                    this.fetch,
                    "POST",
                    `${this.url}/token?grant_type=password`,
                    {
                      headers: this.headers,
                      body: {
                        email: r,
                        password: s,
                        gotrue_meta_security: {
                          captcha_token: null == i ? void 0 : i.captchaToken,
                        },
                      },
                      xform: l._sessionResponse,
                    }
                  );
                } else if ("phone" in e) {
                  let { phone: r, password: s, options: i } = e;
                  t = await (0, l._request)(
                    this.fetch,
                    "POST",
                    `${this.url}/token?grant_type=password`,
                    {
                      headers: this.headers,
                      body: {
                        phone: r,
                        password: s,
                        gotrue_meta_security: {
                          captcha_token: null == i ? void 0 : i.captchaToken,
                        },
                      },
                      xform: l._sessionResponse,
                    }
                  );
                } else
                  throw new o.AuthInvalidCredentialsError(
                    "You must provide either an email or phone number and a password"
                  );
                let { data: r, error: s } = t;
                if (s) return { data: { user: null, session: null }, error: s };
                if (!r || !r.session || !r.user)
                  return {
                    data: { user: null, session: null },
                    error: new o.AuthInvalidTokenResponseError(),
                  };
                return (
                  r.session &&
                    (await this._saveSession(r.session),
                    await this._notifyAllSubscribers("SIGNED_IN", r.session)),
                  { data: { user: r.user, session: r.session }, error: s }
                );
              } catch (e) {
                if ((0, o.isAuthError)(e))
                  return { data: { user: null, session: null }, error: e };
                throw e;
              }
            }
            async signInWithOAuth(e) {
              var t, r, s, i;
              return (
                await this._removeSession(),
                await this._handleProviderSignIn(e.provider, {
                  redirectTo:
                    null === (t = e.options) || void 0 === t
                      ? void 0
                      : t.redirectTo,
                  scopes:
                    null === (r = e.options) || void 0 === r
                      ? void 0
                      : r.scopes,
                  queryParams:
                    null === (s = e.options) || void 0 === s
                      ? void 0
                      : s.queryParams,
                  skipBrowserRedirect:
                    null === (i = e.options) || void 0 === i
                      ? void 0
                      : i.skipBrowserRedirect,
                })
              );
            }
            async exchangeCodeForSession(e) {
              return (
                await this.initializePromise,
                this._acquireLock(-1, async () =>
                  this._exchangeCodeForSession(e)
                )
              );
            }
            async _exchangeCodeForSession(e) {
              let t = await (0, c.getItemAsync)(
                  this.storage,
                  `${this.storageKey}-code-verifier`
                ),
                { data: r, error: s } = await (0, l._request)(
                  this.fetch,
                  "POST",
                  `${this.url}/token?grant_type=pkce`,
                  {
                    headers: this.headers,
                    body: { auth_code: e, code_verifier: t },
                    xform: l._sessionResponse,
                  }
                );
              return (await (0, c.removeItemAsync)(
                this.storage,
                `${this.storageKey}-code-verifier`
              ),
              s)
                ? { data: { user: null, session: null }, error: s }
                : r && r.session && r.user
                ? (r.session &&
                    (await this._saveSession(r.session),
                    await this._notifyAllSubscribers("SIGNED_IN", r.session)),
                  { data: r, error: s })
                : {
                    data: { user: null, session: null },
                    error: new o.AuthInvalidTokenResponseError(),
                  };
            }
            async signInWithIdToken(e) {
              await this._removeSession();
              try {
                let {
                    options: t,
                    provider: r,
                    token: s,
                    access_token: i,
                    nonce: n,
                  } = e,
                  a = await (0, l._request)(
                    this.fetch,
                    "POST",
                    `${this.url}/token?grant_type=id_token`,
                    {
                      headers: this.headers,
                      body: {
                        provider: r,
                        id_token: s,
                        access_token: i,
                        nonce: n,
                        gotrue_meta_security: {
                          captcha_token: null == t ? void 0 : t.captchaToken,
                        },
                      },
                      xform: l._sessionResponse,
                    }
                  ),
                  { data: c, error: h } = a;
                if (h) return { data: { user: null, session: null }, error: h };
                if (!c || !c.session || !c.user)
                  return {
                    data: { user: null, session: null },
                    error: new o.AuthInvalidTokenResponseError(),
                  };
                return (
                  c.session &&
                    (await this._saveSession(c.session),
                    await this._notifyAllSubscribers("SIGNED_IN", c.session)),
                  { data: c, error: h }
                );
              } catch (e) {
                if ((0, o.isAuthError)(e))
                  return { data: { user: null, session: null }, error: e };
                throw e;
              }
            }
            async signInWithOtp(e) {
              var t, r, s, i, n;
              try {
                if ((await this._removeSession(), "email" in e)) {
                  let { email: s, options: i } = e,
                    n = null,
                    a = null;
                  if ("pkce" === this.flowType) {
                    let e = (0, c.generatePKCEVerifier)();
                    await (0, c.setItemAsync)(
                      this.storage,
                      `${this.storageKey}-code-verifier`,
                      e
                    ),
                      (n = await (0, c.generatePKCEChallenge)(e)),
                      (a = e === n ? "plain" : "s256");
                  }
                  let { error: o } = await (0, l._request)(
                    this.fetch,
                    "POST",
                    `${this.url}/otp`,
                    {
                      headers: this.headers,
                      body: {
                        email: s,
                        data:
                          null !== (t = null == i ? void 0 : i.data) &&
                          void 0 !== t
                            ? t
                            : {},
                        create_user:
                          null ===
                            (r = null == i ? void 0 : i.shouldCreateUser) ||
                          void 0 === r ||
                          r,
                        gotrue_meta_security: {
                          captcha_token: null == i ? void 0 : i.captchaToken,
                        },
                        code_challenge: n,
                        code_challenge_method: a,
                      },
                      redirectTo: null == i ? void 0 : i.emailRedirectTo,
                    }
                  );
                  return { data: { user: null, session: null }, error: o };
                }
                if ("phone" in e) {
                  let { phone: t, options: r } = e,
                    { data: a, error: o } = await (0, l._request)(
                      this.fetch,
                      "POST",
                      `${this.url}/otp`,
                      {
                        headers: this.headers,
                        body: {
                          phone: t,
                          data:
                            null !== (s = null == r ? void 0 : r.data) &&
                            void 0 !== s
                              ? s
                              : {},
                          create_user:
                            null ===
                              (i = null == r ? void 0 : r.shouldCreateUser) ||
                            void 0 === i ||
                            i,
                          gotrue_meta_security: {
                            captcha_token: null == r ? void 0 : r.captchaToken,
                          },
                          channel:
                            null !== (n = null == r ? void 0 : r.channel) &&
                            void 0 !== n
                              ? n
                              : "sms",
                        },
                      }
                    );
                  return {
                    data: {
                      user: null,
                      session: null,
                      messageId: null == a ? void 0 : a.message_id,
                    },
                    error: o,
                  };
                }
                throw new o.AuthInvalidCredentialsError(
                  "You must provide either an email or phone number."
                );
              } catch (e) {
                if ((0, o.isAuthError)(e))
                  return { data: { user: null, session: null }, error: e };
                throw e;
              }
            }
            async verifyOtp(e) {
              var t, r;
              try {
                let s, i;
                "email_change" !== e.type &&
                  "phone_change" !== e.type &&
                  (await this._removeSession()),
                  "options" in e &&
                    ((s =
                      null === (t = e.options) || void 0 === t
                        ? void 0
                        : t.redirectTo),
                    (i =
                      null === (r = e.options) || void 0 === r
                        ? void 0
                        : r.captchaToken));
                let { data: n, error: a } = await (0, l._request)(
                  this.fetch,
                  "POST",
                  `${this.url}/verify`,
                  {
                    headers: this.headers,
                    body: Object.assign(Object.assign({}, e), {
                      gotrue_meta_security: { captcha_token: i },
                    }),
                    redirectTo: s,
                    xform: l._sessionResponse,
                  }
                );
                if (a) throw a;
                if (!n) throw Error("An error occurred on token verification.");
                let o = n.session,
                  c = n.user;
                return (
                  (null == o ? void 0 : o.access_token) &&
                    (await this._saveSession(o),
                    await this._notifyAllSubscribers("SIGNED_IN", o)),
                  { data: { user: c, session: o }, error: null }
                );
              } catch (e) {
                if ((0, o.isAuthError)(e))
                  return { data: { user: null, session: null }, error: e };
                throw e;
              }
            }
            async signInWithSSO(e) {
              var t, r, s;
              try {
                return (
                  await this._removeSession(),
                  await (0, l._request)(this.fetch, "POST", `${this.url}/sso`, {
                    body: Object.assign(
                      Object.assign(
                        Object.assign(
                          Object.assign(
                            Object.assign(
                              {},
                              "providerId" in e
                                ? { provider_id: e.providerId }
                                : null
                            ),
                            "domain" in e ? { domain: e.domain } : null
                          ),
                          {
                            redirect_to:
                              null !==
                                (r =
                                  null === (t = e.options) || void 0 === t
                                    ? void 0
                                    : t.redirectTo) && void 0 !== r
                                ? r
                                : void 0,
                          }
                        ),
                        (
                          null === (s = null == e ? void 0 : e.options) ||
                          void 0 === s
                            ? void 0
                            : s.captchaToken
                        )
                          ? {
                              gotrue_meta_security: {
                                captcha_token: e.options.captchaToken,
                              },
                            }
                          : null
                      ),
                      { skip_http_redirect: !0 }
                    ),
                    headers: this.headers,
                    xform: l._ssoResponse,
                  })
                );
              } catch (e) {
                if ((0, o.isAuthError)(e)) return { data: null, error: e };
                throw e;
              }
            }
            async reauthenticate() {
              return (
                await this.initializePromise,
                await this._acquireLock(
                  -1,
                  async () => await this._reauthenticate()
                )
              );
            }
            async _reauthenticate() {
              try {
                return await this._useSession(async (e) => {
                  let {
                    data: { session: t },
                    error: r,
                  } = e;
                  if (r) throw r;
                  if (!t) throw new o.AuthSessionMissingError();
                  let { error: s } = await (0, l._request)(
                    this.fetch,
                    "GET",
                    `${this.url}/reauthenticate`,
                    { headers: this.headers, jwt: t.access_token }
                  );
                  return { data: { user: null, session: null }, error: s };
                });
              } catch (e) {
                if ((0, o.isAuthError)(e))
                  return { data: { user: null, session: null }, error: e };
                throw e;
              }
            }
            async resend(e) {
              try {
                "email_change" != e.type &&
                  "phone_change" != e.type &&
                  (await this._removeSession());
                let t = `${this.url}/resend`;
                if ("email" in e) {
                  let { email: r, type: s, options: i } = e,
                    { error: n } = await (0, l._request)(
                      this.fetch,
                      "POST",
                      t,
                      {
                        headers: this.headers,
                        body: {
                          email: r,
                          type: s,
                          gotrue_meta_security: {
                            captcha_token: null == i ? void 0 : i.captchaToken,
                          },
                        },
                        redirectTo: null == i ? void 0 : i.emailRedirectTo,
                      }
                    );
                  return { data: { user: null, session: null }, error: n };
                }
                if ("phone" in e) {
                  let { phone: r, type: s, options: i } = e,
                    { data: n, error: a } = await (0, l._request)(
                      this.fetch,
                      "POST",
                      t,
                      {
                        headers: this.headers,
                        body: {
                          phone: r,
                          type: s,
                          gotrue_meta_security: {
                            captcha_token: null == i ? void 0 : i.captchaToken,
                          },
                        },
                      }
                    );
                  return {
                    data: {
                      user: null,
                      session: null,
                      messageId: null == n ? void 0 : n.message_id,
                    },
                    error: a,
                  };
                }
                throw new o.AuthInvalidCredentialsError(
                  "You must provide either an email or phone number and a type"
                );
              } catch (e) {
                if ((0, o.isAuthError)(e))
                  return { data: { user: null, session: null }, error: e };
                throw e;
              }
            }
            async getSession() {
              return (
                await this.initializePromise,
                this._acquireLock(-1, async () =>
                  this._useSession(async (e) => e)
                )
              );
            }
            async _acquireLock(e, t) {
              this._debug("#_acquireLock", "begin", e);
              try {
                if (this.lockAcquired) {
                  let e = this.pendingInLock.length
                      ? this.pendingInLock[this.pendingInLock.length - 1]
                      : Promise.resolve(),
                    r = (async () => (await e, await t()))();
                  return (
                    this.pendingInLock.push(
                      (async () => {
                        try {
                          await r;
                        } catch (e) {}
                      })()
                    ),
                    r
                  );
                }
                return await this.lock(
                  `lock:${this.storageKey}`,
                  e,
                  async () => {
                    this._debug(
                      "#_acquireLock",
                      "lock acquired for storage key",
                      this.storageKey
                    );
                    try {
                      this.lockAcquired = !0;
                      let e = t();
                      for (
                        this.pendingInLock.push(
                          (async () => {
                            try {
                              await e;
                            } catch (e) {}
                          })()
                        ),
                          await e;
                        this.pendingInLock.length;

                      ) {
                        let e = [...this.pendingInLock];
                        await Promise.all(e),
                          this.pendingInLock.splice(0, e.length);
                      }
                      return await e;
                    } finally {
                      this._debug(
                        "#_acquireLock",
                        "lock released for storage key",
                        this.storageKey
                      ),
                        (this.lockAcquired = !1);
                    }
                  }
                );
              } finally {
                this._debug("#_acquireLock", "end");
              }
            }
            async _useSession(e) {
              this._debug("#_useSession", "begin");
              try {
                let t = await this.__loadSession();
                return await e(t);
              } finally {
                this._debug("#_useSession", "end");
              }
            }
            async __loadSession() {
              this._debug("#__loadSession()", "begin"),
                this.lockAcquired ||
                  this._debug(
                    "#__loadSession()",
                    "used outside of an acquired lock!",
                    Error().stack
                  );
              try {
                let e = null,
                  t = await (0, c.getItemAsync)(this.storage, this.storageKey);
                if (
                  (this._debug("#getSession()", "session from storage", t),
                  null !== t &&
                    (this._isValidSession(t)
                      ? (e = t)
                      : (this._debug(
                          "#getSession()",
                          "session from storage is not valid"
                        ),
                        await this._removeSession())),
                  !e)
                )
                  return { data: { session: null }, error: null };
                let r = !!e.expires_at && e.expires_at <= Date.now() / 1e3;
                if (
                  (this._debug(
                    "#__loadSession()",
                    `session has${r ? "" : " not"} expired`,
                    "expires_at",
                    e.expires_at
                  ),
                  !r)
                )
                  return { data: { session: e }, error: null };
                let { session: s, error: i } = await this._callRefreshToken(
                  e.refresh_token
                );
                if (i) return { data: { session: null }, error: i };
                return { data: { session: s }, error: null };
              } finally {
                this._debug("#__loadSession()", "end");
              }
            }
            async getUser(e) {
              return e
                ? await this._getUser(e)
                : (await this.initializePromise,
                  this._acquireLock(-1, async () => await this._getUser()));
            }
            async _getUser(e) {
              try {
                if (e)
                  return await (0, l._request)(
                    this.fetch,
                    "GET",
                    `${this.url}/user`,
                    { headers: this.headers, jwt: e, xform: l._userResponse }
                  );
                return await this._useSession(async (e) => {
                  var t, r;
                  let { data: s, error: i } = e;
                  if (i) throw i;
                  return await (0, l._request)(
                    this.fetch,
                    "GET",
                    `${this.url}/user`,
                    {
                      headers: this.headers,
                      jwt:
                        null !==
                          (r =
                            null === (t = s.session) || void 0 === t
                              ? void 0
                              : t.access_token) && void 0 !== r
                          ? r
                          : void 0,
                      xform: l._userResponse,
                    }
                  );
                });
              } catch (e) {
                if ((0, o.isAuthError)(e))
                  return { data: { user: null }, error: e };
                throw e;
              }
            }
            async updateUser(e, t = {}) {
              return (
                await this.initializePromise,
                await this._acquireLock(
                  -1,
                  async () => await this._updateUser(e, t)
                )
              );
            }
            async _updateUser(e, t = {}) {
              try {
                return await this._useSession(async (r) => {
                  let { data: s, error: i } = r;
                  if (i) throw i;
                  if (!s.session) throw new o.AuthSessionMissingError();
                  let n = s.session,
                    a = null,
                    h = null;
                  if ("pkce" === this.flowType && null != e.email) {
                    let e = (0, c.generatePKCEVerifier)();
                    await (0, c.setItemAsync)(
                      this.storage,
                      `${this.storageKey}-code-verifier`,
                      e
                    ),
                      (a = await (0, c.generatePKCEChallenge)(e)),
                      (h = e === a ? "plain" : "s256");
                  }
                  let { data: u, error: d } = await (0, l._request)(
                    this.fetch,
                    "PUT",
                    `${this.url}/user`,
                    {
                      headers: this.headers,
                      redirectTo: null == t ? void 0 : t.emailRedirectTo,
                      body: Object.assign(Object.assign({}, e), {
                        code_challenge: a,
                        code_challenge_method: h,
                      }),
                      jwt: n.access_token,
                      xform: l._userResponse,
                    }
                  );
                  if (d) throw d;
                  return (
                    (n.user = u.user),
                    await this._saveSession(n),
                    await this._notifyAllSubscribers("USER_UPDATED", n),
                    { data: { user: n.user }, error: null }
                  );
                });
              } catch (e) {
                if ((0, o.isAuthError)(e))
                  return { data: { user: null }, error: e };
                throw e;
              }
            }
            _decodeJWT(e) {
              return (0, c.decodeJWTPayload)(e);
            }
            async setSession(e) {
              return (
                await this.initializePromise,
                await this._acquireLock(
                  -1,
                  async () => await this._setSession(e)
                )
              );
            }
            async _setSession(e) {
              try {
                if (!e.access_token || !e.refresh_token)
                  throw new o.AuthSessionMissingError();
                let t = Date.now() / 1e3,
                  r = t,
                  s = !0,
                  i = null,
                  n = (0, c.decodeJWTPayload)(e.access_token);
                if ((n.exp && (s = (r = n.exp) <= t), s)) {
                  let { session: t, error: r } = await this._callRefreshToken(
                    e.refresh_token
                  );
                  if (r)
                    return { data: { user: null, session: null }, error: r };
                  if (!t)
                    return { data: { user: null, session: null }, error: null };
                  i = t;
                } else {
                  let { data: s, error: n } = await this._getUser(
                    e.access_token
                  );
                  if (n) throw n;
                  (i = {
                    access_token: e.access_token,
                    refresh_token: e.refresh_token,
                    user: s.user,
                    token_type: "bearer",
                    expires_in: r - t,
                    expires_at: r,
                  }),
                    await this._saveSession(i),
                    await this._notifyAllSubscribers("SIGNED_IN", i);
                }
                return { data: { user: i.user, session: i }, error: null };
              } catch (e) {
                if ((0, o.isAuthError)(e))
                  return { data: { session: null, user: null }, error: e };
                throw e;
              }
            }
            async refreshSession(e) {
              return (
                await this.initializePromise,
                await this._acquireLock(
                  -1,
                  async () => await this._refreshSession(e)
                )
              );
            }
            async _refreshSession(e) {
              try {
                return await this._useSession(async (t) => {
                  var r;
                  if (!e) {
                    let { data: s, error: i } = t;
                    if (i) throw i;
                    e = null !== (r = s.session) && void 0 !== r ? r : void 0;
                  }
                  if (!(null == e ? void 0 : e.refresh_token))
                    throw new o.AuthSessionMissingError();
                  let { session: s, error: i } = await this._callRefreshToken(
                    e.refresh_token
                  );
                  return i
                    ? { data: { user: null, session: null }, error: i }
                    : s
                    ? { data: { user: s.user, session: s }, error: null }
                    : { data: { user: null, session: null }, error: null };
                });
              } catch (e) {
                if ((0, o.isAuthError)(e))
                  return { data: { user: null, session: null }, error: e };
                throw e;
              }
            }
            async _getSessionFromURL(e) {
              try {
                if (!(0, c.isBrowser)())
                  throw new o.AuthImplicitGrantRedirectError(
                    "No browser detected."
                  );
                if (
                  "implicit" !== this.flowType ||
                  this._isImplicitGrantFlow()
                ) {
                  if ("pkce" == this.flowType && !e)
                    throw new o.AuthPKCEGrantCodeExchangeError(
                      "Not a valid PKCE flow url."
                    );
                } else
                  throw new o.AuthImplicitGrantRedirectError(
                    "Not a valid implicit grant flow url."
                  );
                let t = (0, c.parseParametersFromURL)(window.location.href);
                if (e) {
                  if (!t.code)
                    throw new o.AuthPKCEGrantCodeExchangeError(
                      "No code detected."
                    );
                  let { data: e, error: r } =
                    await this._exchangeCodeForSession(t.code);
                  if (r) throw r;
                  let s = new URL(window.location.href);
                  return (
                    s.searchParams.delete("code"),
                    window.history.replaceState(
                      window.history.state,
                      "",
                      s.toString()
                    ),
                    {
                      data: { session: e.session, redirectType: null },
                      error: null,
                    }
                  );
                }
                if (t.error || t.error_description || t.error_code)
                  throw new o.AuthImplicitGrantRedirectError(
                    t.error_description ||
                      "Error in URL with unspecified error_description",
                    {
                      error: t.error || "unspecified_error",
                      code: t.error_code || "unspecified_code",
                    }
                  );
                let {
                  provider_token: r,
                  provider_refresh_token: s,
                  access_token: i,
                  refresh_token: n,
                  expires_in: a,
                  expires_at: l,
                  token_type: h,
                } = t;
                if (!i || !a || !n || !h)
                  throw new o.AuthImplicitGrantRedirectError(
                    "No session defined in URL"
                  );
                let u = Math.round(Date.now() / 1e3),
                  d = parseInt(a),
                  p = u + d;
                l && (p = parseInt(l));
                let f = p - u;
                1e3 * f <= 3e4 &&
                  console.warn(
                    `@supabase/gotrue-js: Session as retrieved from URL expires in ${f}s, should have been closer to ${d}s`
                  );
                let g = p - d;
                u - g >= 120
                  ? console.warn(
                      "@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",
                      g,
                      p,
                      u
                    )
                  : u - g < 0 &&
                    console.warn(
                      "@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clok for skew",
                      g,
                      p,
                      u
                    );
                let { data: m, error: b } = await this._getUser(i);
                if (b) throw b;
                let y = {
                  provider_token: r,
                  provider_refresh_token: s,
                  access_token: i,
                  expires_in: d,
                  expires_at: p,
                  refresh_token: n,
                  token_type: h,
                  user: m.user,
                };
                return (
                  (window.location.hash = ""),
                  this._debug(
                    "#_getSessionFromURL()",
                    "clearing window.location.hash"
                  ),
                  { data: { session: y, redirectType: t.type }, error: null }
                );
              } catch (e) {
                if ((0, o.isAuthError)(e))
                  return {
                    data: { session: null, redirectType: null },
                    error: e,
                  };
                throw e;
              }
            }
            _isImplicitGrantFlow() {
              let e = (0, c.parseParametersFromURL)(window.location.href);
              return !!(
                (0, c.isBrowser)() &&
                (e.access_token || e.error_description)
              );
            }
            async _isPKCEFlow() {
              let e = (0, c.parseParametersFromURL)(window.location.href),
                t = await (0, c.getItemAsync)(
                  this.storage,
                  `${this.storageKey}-code-verifier`
                );
              return !!(e.code && t);
            }
            async signOut(e = { scope: "global" }) {
              return (
                await this.initializePromise,
                await this._acquireLock(-1, async () => await this._signOut(e))
              );
            }
            async _signOut({ scope: e } = { scope: "global" }) {
              return await this._useSession(async (t) => {
                var r;
                let { data: s, error: i } = t;
                if (i) return { error: i };
                let n =
                  null === (r = s.session) || void 0 === r
                    ? void 0
                    : r.access_token;
                if (n) {
                  let { error: t } = await this.admin.signOut(n, e);
                  if (
                    t &&
                    !(
                      (0, o.isAuthApiError)(t) &&
                      (404 === t.status || 401 === t.status)
                    )
                  )
                    return { error: t };
                }
                return (
                  "others" !== e &&
                    (await this._removeSession(),
                    await (0, c.removeItemAsync)(
                      this.storage,
                      `${this.storageKey}-code-verifier`
                    ),
                    await this._notifyAllSubscribers("SIGNED_OUT", null)),
                  { error: null }
                );
              });
            }
            onAuthStateChange(e) {
              let t = (0, c.uuid)(),
                r = {
                  id: t,
                  callback: e,
                  unsubscribe: () => {
                    this._debug(
                      "#unsubscribe()",
                      "state change callback with id removed",
                      t
                    ),
                      this.stateChangeEmitters.delete(t);
                  },
                };
              return (
                this._debug(
                  "#onAuthStateChange()",
                  "registered callback with id",
                  t
                ),
                this.stateChangeEmitters.set(t, r),
                (async () => {
                  await this.initializePromise,
                    await this._acquireLock(-1, async () => {
                      this._emitInitialSession(t);
                    });
                })(),
                { data: { subscription: r } }
              );
            }
            async _emitInitialSession(e) {
              return await this._useSession(async (t) => {
                var r, s;
                try {
                  let {
                    data: { session: s },
                    error: i,
                  } = t;
                  if (i) throw i;
                  await (null === (r = this.stateChangeEmitters.get(e)) ||
                  void 0 === r
                    ? void 0
                    : r.callback("INITIAL_SESSION", s)),
                    this._debug(
                      "INITIAL_SESSION",
                      "callback id",
                      e,
                      "session",
                      s
                    );
                } catch (t) {
                  await (null === (s = this.stateChangeEmitters.get(e)) ||
                  void 0 === s
                    ? void 0
                    : s.callback("INITIAL_SESSION", null)),
                    this._debug(
                      "INITIAL_SESSION",
                      "callback id",
                      e,
                      "error",
                      t
                    ),
                    console.error(t);
                }
              });
            }
            async resetPasswordForEmail(e, t = {}) {
              let r = null,
                s = null;
              if ("pkce" === this.flowType) {
                let e = (0, c.generatePKCEVerifier)();
                await (0, c.setItemAsync)(
                  this.storage,
                  `${this.storageKey}-code-verifier`,
                  e
                ),
                  (r = await (0, c.generatePKCEChallenge)(e)),
                  (s = e === r ? "plain" : "s256");
              }
              try {
                return await (0, l._request)(
                  this.fetch,
                  "POST",
                  `${this.url}/recover`,
                  {
                    body: {
                      email: e,
                      code_challenge: r,
                      code_challenge_method: s,
                      gotrue_meta_security: { captcha_token: t.captchaToken },
                    },
                    headers: this.headers,
                    redirectTo: t.redirectTo,
                  }
                );
              } catch (e) {
                if ((0, o.isAuthError)(e)) return { data: null, error: e };
                throw e;
              }
            }
            async _refreshAccessToken(e) {
              let t = `#_refreshAccessToken(${e.substring(0, 5)}...)`;
              this._debug(t, "begin");
              try {
                let r = Date.now();
                return await (0, c.retryable)(
                  async (r) => (
                    await (0, c.sleep)(200 * r),
                    this._debug(t, "refreshing attempt", r),
                    await (0, l._request)(
                      this.fetch,
                      "POST",
                      `${this.url}/token?grant_type=refresh_token`,
                      {
                        body: { refresh_token: e },
                        headers: this.headers,
                        xform: l._sessionResponse,
                      }
                    )
                  ),
                  (e, t, s) =>
                    s &&
                    s.error &&
                    (0, o.isAuthRetryableFetchError)(s.error) &&
                    Date.now() + (e + 1) * 200 - r < 3e4
                );
              } catch (e) {
                if ((this._debug(t, "error", e), (0, o.isAuthError)(e)))
                  return { data: { session: null, user: null }, error: e };
                throw e;
              } finally {
                this._debug(t, "end");
              }
            }
            _isValidSession(e) {
              return (
                "object" == typeof e &&
                null !== e &&
                "access_token" in e &&
                "refresh_token" in e &&
                "expires_at" in e
              );
            }
            async _handleProviderSignIn(e, t) {
              let r = await this._getUrlForProvider(e, {
                redirectTo: t.redirectTo,
                scopes: t.scopes,
                queryParams: t.queryParams,
              });
              return (
                this._debug(
                  "#_handleProviderSignIn()",
                  "provider",
                  e,
                  "options",
                  t,
                  "url",
                  r
                ),
                (0, c.isBrowser)() &&
                  !t.skipBrowserRedirect &&
                  window.location.assign(r),
                { data: { provider: e, url: r }, error: null }
              );
            }
            async _recoverAndRefresh() {
              var e;
              let t = "#_recoverAndRefresh()";
              this._debug(t, "begin");
              try {
                let r = await (0, c.getItemAsync)(
                  this.storage,
                  this.storageKey
                );
                if (
                  (this._debug(t, "session from storage", r),
                  !this._isValidSession(r))
                ) {
                  this._debug(t, "session is not valid"),
                    null !== r && (await this._removeSession());
                  return;
                }
                let s = Math.round(Date.now() / 1e3),
                  i =
                    (null !== (e = r.expires_at) && void 0 !== e ? e : 1 / 0) <
                    s + a.EXPIRY_MARGIN;
                if (
                  (this._debug(
                    t,
                    `session has${i ? "" : " not"} expired with margin of ${
                      a.EXPIRY_MARGIN
                    }s`
                  ),
                  i)
                ) {
                  if (this.autoRefreshToken && r.refresh_token) {
                    let { error: e } = await this._callRefreshToken(
                      r.refresh_token
                    );
                    e &&
                      (console.error(e),
                      (0, o.isAuthRetryableFetchError)(e) ||
                        (this._debug(
                          t,
                          "refresh failed with a non-retryable error, removing the session",
                          e
                        ),
                        await this._removeSession()));
                  }
                } else await this._notifyAllSubscribers("SIGNED_IN", r);
              } catch (e) {
                this._debug(t, "error", e), console.error(e);
                return;
              } finally {
                this._debug(t, "end");
              }
            }
            async _callRefreshToken(e) {
              var t, r;
              if (!e) throw new o.AuthSessionMissingError();
              if (this.refreshingDeferred)
                return this.refreshingDeferred.promise;
              let s = `#_callRefreshToken(${e.substring(0, 5)}...)`;
              this._debug(s, "begin");
              try {
                this.refreshingDeferred = new c.Deferred();
                let { data: t, error: r } = await this._refreshAccessToken(e);
                if (r) throw r;
                if (!t.session) throw new o.AuthSessionMissingError();
                await this._saveSession(t.session),
                  await this._notifyAllSubscribers(
                    "TOKEN_REFRESHED",
                    t.session
                  );
                let s = { session: t.session, error: null };
                return this.refreshingDeferred.resolve(s), s;
              } catch (e) {
                if ((this._debug(s, "error", e), (0, o.isAuthError)(e))) {
                  let r = { session: null, error: e };
                  return (
                    null === (t = this.refreshingDeferred) ||
                      void 0 === t ||
                      t.resolve(r),
                    r
                  );
                }
                throw (
                  (null === (r = this.refreshingDeferred) ||
                    void 0 === r ||
                    r.reject(e),
                  e)
                );
              } finally {
                (this.refreshingDeferred = null), this._debug(s, "end");
              }
            }
            async _notifyAllSubscribers(e, t, r = !0) {
              let s = `#_notifyAllSubscribers(${e})`;
              this._debug(s, "begin", t, `broadcast = ${r}`);
              try {
                this.broadcastChannel &&
                  r &&
                  this.broadcastChannel.postMessage({ event: e, session: t });
                let s = [],
                  i = Array.from(this.stateChangeEmitters.values()).map(
                    async (r) => {
                      try {
                        await r.callback(e, t);
                      } catch (e) {
                        s.push(e);
                      }
                    }
                  );
                if ((await Promise.all(i), s.length > 0)) {
                  for (let e = 0; e < s.length; e += 1) console.error(s[e]);
                  throw s[0];
                }
              } finally {
                this._debug(s, "end");
              }
            }
            async _saveSession(e) {
              this._debug("#_saveSession()", e), await this._persistSession(e);
            }
            _persistSession(e) {
              return (
                this._debug("#_persistSession()", e),
                (0, c.setItemAsync)(this.storage, this.storageKey, e)
              );
            }
            async _removeSession() {
              this._debug("#_removeSession()"),
                await (0, c.removeItemAsync)(this.storage, this.storageKey);
            }
            _removeVisibilityChangedCallback() {
              this._debug("#_removeVisibilityChangedCallback()");
              let e = this.visibilityChangedCallback;
              this.visibilityChangedCallback = null;
              try {
                e &&
                  (0, c.isBrowser)() &&
                  (null == window ? void 0 : window.removeEventListener) &&
                  window.removeEventListener("visibilitychange", e);
              } catch (e) {
                console.error("removing visibilitychange callback failed", e);
              }
            }
            async _startAutoRefresh() {
              await this._stopAutoRefresh(),
                this._debug("#_startAutoRefresh()");
              let e = setInterval(() => this._autoRefreshTokenTick(), 3e4);
              (this.autoRefreshTicker = e),
                e && "object" == typeof e && "function" == typeof e.unref
                  ? e.unref()
                  : "undefined" != typeof Deno &&
                    "function" == typeof Deno.unrefTimer &&
                    Deno.unrefTimer(e),
                setTimeout(async () => {
                  await this.initializePromise,
                    await this._autoRefreshTokenTick();
                }, 0);
            }
            async _stopAutoRefresh() {
              this._debug("#_stopAutoRefresh()");
              let e = this.autoRefreshTicker;
              (this.autoRefreshTicker = null), e && clearInterval(e);
            }
            async startAutoRefresh() {
              this._removeVisibilityChangedCallback(),
                await this._startAutoRefresh();
            }
            async stopAutoRefresh() {
              this._removeVisibilityChangedCallback(),
                await this._stopAutoRefresh();
            }
            async _autoRefreshTokenTick() {
              this._debug("#_autoRefreshTokenTick()", "begin");
              try {
                await this._acquireLock(0, async () => {
                  try {
                    let e = Date.now();
                    try {
                      return await this._useSession(async (t) => {
                        let {
                          data: { session: r },
                        } = t;
                        if (!r || !r.refresh_token || !r.expires_at) {
                          this._debug("#_autoRefreshTokenTick()", "no session");
                          return;
                        }
                        let s = Math.floor((1e3 * r.expires_at - e) / 3e4);
                        this._debug(
                          "#_autoRefreshTokenTick()",
                          `access token expires in ${s} ticks, a tick lasts 30000ms, refresh threshold is 3 ticks`
                        ),
                          s <= 3 &&
                            (await this._callRefreshToken(r.refresh_token));
                      });
                    } catch (e) {
                      console.error(
                        "Auto refresh tick failed with error. This is likely a transient error.",
                        e
                      );
                    }
                  } finally {
                    this._debug("#_autoRefreshTokenTick()", "end");
                  }
                });
              } catch (e) {
                if (
                  e.isAcquireTimeout ||
                  e instanceof p.LockAcquireTimeoutError
                )
                  this._debug("auto refresh token tick lock not available");
                else throw e;
              }
            }
            async _handleVisibilityChange() {
              if (
                (this._debug("#_handleVisibilityChange()"),
                !(0, c.isBrowser)() ||
                  !(null == window ? void 0 : window.addEventListener))
              )
                return this.autoRefreshToken && this.startAutoRefresh(), !1;
              try {
                (this.visibilityChangedCallback = async () =>
                  await this._onVisibilityChanged(!1)),
                  null == window ||
                    window.addEventListener(
                      "visibilitychange",
                      this.visibilityChangedCallback
                    ),
                  await this._onVisibilityChanged(!0);
              } catch (e) {
                console.error("_handleVisibilityChange", e);
              }
            }
            async _onVisibilityChanged(e) {
              let t = `#_onVisibilityChanged(${e})`;
              this._debug(t, "visibilityState", document.visibilityState),
                "visible" === document.visibilityState
                  ? (this.autoRefreshToken && this._startAutoRefresh(),
                    e ||
                      (await this.initializePromise,
                      await this._acquireLock(-1, async () => {
                        if ("visible" !== document.visibilityState) {
                          this._debug(
                            t,
                            "acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting"
                          );
                          return;
                        }
                        await this._recoverAndRefresh();
                      })))
                  : "hidden" === document.visibilityState &&
                    this.autoRefreshToken &&
                    this._stopAutoRefresh();
            }
            async _getUrlForProvider(e, t) {
              let r = [`provider=${encodeURIComponent(e)}`];
              if (
                ((null == t ? void 0 : t.redirectTo) &&
                  r.push(`redirect_to=${encodeURIComponent(t.redirectTo)}`),
                (null == t ? void 0 : t.scopes) &&
                  r.push(`scopes=${encodeURIComponent(t.scopes)}`),
                "pkce" === this.flowType)
              ) {
                let e = (0, c.generatePKCEVerifier)();
                await (0, c.setItemAsync)(
                  this.storage,
                  `${this.storageKey}-code-verifier`,
                  e
                );
                let t = await (0, c.generatePKCEChallenge)(e),
                  s = e === t ? "plain" : "s256";
                this._debug(
                  "PKCE",
                  "code verifier",
                  `${e.substring(0, 5)}...`,
                  "code challenge",
                  t,
                  "method",
                  s
                );
                let i = new URLSearchParams({
                  code_challenge: `${encodeURIComponent(t)}`,
                  code_challenge_method: `${encodeURIComponent(s)}`,
                });
                r.push(i.toString());
              }
              if (null == t ? void 0 : t.queryParams) {
                let e = new URLSearchParams(t.queryParams);
                r.push(e.toString());
              }
              return `${this.url}/authorize?${r.join("&")}`;
            }
            async _unenroll(e) {
              try {
                return await this._useSession(async (t) => {
                  var r;
                  let { data: s, error: i } = t;
                  return i
                    ? { data: null, error: i }
                    : await (0, l._request)(
                        this.fetch,
                        "DELETE",
                        `${this.url}/factors/${e.factorId}`,
                        {
                          headers: this.headers,
                          jwt:
                            null === (r = null == s ? void 0 : s.session) ||
                            void 0 === r
                              ? void 0
                              : r.access_token,
                        }
                      );
                });
              } catch (e) {
                if ((0, o.isAuthError)(e)) return { data: null, error: e };
                throw e;
              }
            }
            async _enroll(e) {
              try {
                return await this._useSession(async (t) => {
                  var r, s;
                  let { data: i, error: n } = t;
                  if (n) return { data: null, error: n };
                  let { data: a, error: o } = await (0, l._request)(
                    this.fetch,
                    "POST",
                    `${this.url}/factors`,
                    {
                      body: {
                        friendly_name: e.friendlyName,
                        factor_type: e.factorType,
                        issuer: e.issuer,
                      },
                      headers: this.headers,
                      jwt:
                        null === (r = null == i ? void 0 : i.session) ||
                        void 0 === r
                          ? void 0
                          : r.access_token,
                    }
                  );
                  return o
                    ? { data: null, error: o }
                    : ((null === (s = null == a ? void 0 : a.totp) ||
                      void 0 === s
                        ? void 0
                        : s.qr_code) &&
                        (a.totp.qr_code = `data:image/svg+xml;utf-8,${a.totp.qr_code}`),
                      { data: a, error: null });
                });
              } catch (e) {
                if ((0, o.isAuthError)(e)) return { data: null, error: e };
                throw e;
              }
            }
            async _verify(e) {
              return this._acquireLock(-1, async () => {
                try {
                  return await this._useSession(async (t) => {
                    var r;
                    let { data: s, error: i } = t;
                    if (i) return { data: null, error: i };
                    let { data: n, error: a } = await (0, l._request)(
                      this.fetch,
                      "POST",
                      `${this.url}/factors/${e.factorId}/verify`,
                      {
                        body: { code: e.code, challenge_id: e.challengeId },
                        headers: this.headers,
                        jwt:
                          null === (r = null == s ? void 0 : s.session) ||
                          void 0 === r
                            ? void 0
                            : r.access_token,
                      }
                    );
                    return a
                      ? { data: null, error: a }
                      : (await this._saveSession(
                          Object.assign(
                            {
                              expires_at:
                                Math.round(Date.now() / 1e3) + n.expires_in,
                            },
                            n
                          )
                        ),
                        await this._notifyAllSubscribers(
                          "MFA_CHALLENGE_VERIFIED",
                          n
                        ),
                        { data: n, error: a });
                  });
                } catch (e) {
                  if ((0, o.isAuthError)(e)) return { data: null, error: e };
                  throw e;
                }
              });
            }
            async _challenge(e) {
              return this._acquireLock(-1, async () => {
                try {
                  return await this._useSession(async (t) => {
                    var r;
                    let { data: s, error: i } = t;
                    return i
                      ? { data: null, error: i }
                      : await (0, l._request)(
                          this.fetch,
                          "POST",
                          `${this.url}/factors/${e.factorId}/challenge`,
                          {
                            headers: this.headers,
                            jwt:
                              null === (r = null == s ? void 0 : s.session) ||
                              void 0 === r
                                ? void 0
                                : r.access_token,
                          }
                        );
                  });
                } catch (e) {
                  if ((0, o.isAuthError)(e)) return { data: null, error: e };
                  throw e;
                }
              });
            }
            async _challengeAndVerify(e) {
              let { data: t, error: r } = await this._challenge({
                factorId: e.factorId,
              });
              return r
                ? { data: null, error: r }
                : await this._verify({
                    factorId: e.factorId,
                    challengeId: t.id,
                    code: e.code,
                  });
            }
            async _listFactors() {
              let {
                data: { user: e },
                error: t,
              } = await this.getUser();
              if (t) return { data: null, error: t };
              let r = (null == e ? void 0 : e.factors) || [],
                s = r.filter(
                  (e) => "totp" === e.factor_type && "verified" === e.status
                );
              return { data: { all: r, totp: s }, error: null };
            }
            async _getAuthenticatorAssuranceLevel() {
              return this._acquireLock(
                -1,
                async () =>
                  await this._useSession(async (e) => {
                    var t, r;
                    let {
                      data: { session: s },
                      error: i,
                    } = e;
                    if (i) return { data: null, error: i };
                    if (!s)
                      return {
                        data: {
                          currentLevel: null,
                          nextLevel: null,
                          currentAuthenticationMethods: [],
                        },
                        error: null,
                      };
                    let n = this._decodeJWT(s.access_token),
                      a = null;
                    n.aal && (a = n.aal);
                    let o = a,
                      l =
                        null !==
                          (r =
                            null === (t = s.user.factors) || void 0 === t
                              ? void 0
                              : t.filter((e) => "verified" === e.status)) &&
                        void 0 !== r
                          ? r
                          : [];
                    l.length > 0 && (o = "aal2");
                    let c = n.amr || [];
                    return {
                      data: {
                        currentLevel: a,
                        nextLevel: o,
                        currentAuthenticationMethods: c,
                      },
                      error: null,
                    };
                  })
              );
            }
          }
          (r.default = m), (m.nextInstanceID = 0);
        },
        {
          "./GoTrueAdminApi": "60Wku",
          "./lib/constants": "i2jrv",
          "./lib/errors": "c0fws",
          "./lib/fetch": "cXZup",
          "./lib/helpers": "ltLuR",
          "./lib/local-storage": "fPyo9",
          "./lib/polyfills": "4xGbi",
          "./lib/version": "bRy1y",
          "./lib/locks": "9CO74",
          "@parcel/transformer-js/src/esmodule-helpers.js": "hbR2Q",
        },
      ],
      i2jrv: [
        function (e, t, r) {
          var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
          s.defineInteropFlag(r),
            s.export(r, "GOTRUE_URL", () => n),
            s.export(r, "STORAGE_KEY", () => a),
            s.export(r, "AUDIENCE", () => o),
            s.export(r, "DEFAULT_HEADERS", () => l),
            s.export(r, "EXPIRY_MARGIN", () => c),
            s.export(r, "NETWORK_FAILURE", () => h);
          var i = e("./version");
          let n = "http://localhost:9999",
            a = "supabase.auth.token",
            o = "",
            l = { "X-Client-Info": `gotrue-js/${i.version}` },
            c = 10,
            h = { MAX_RETRIES: 10, RETRY_INTERVAL: 2 };
        },
        {
          "./version": "bRy1y",
          "@parcel/transformer-js/src/esmodule-helpers.js": "hbR2Q",
        },
      ],
      bRy1y: [
        function (e, t, r) {
          var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
          s.defineInteropFlag(r), s.export(r, "version", () => i);
          let i = "2.55.0";
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "hbR2Q" },
      ],
      fPyo9: [
        function (e, t, r) {
          var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
          s.defineInteropFlag(r),
            s.export(r, "localStorageAdapter", () => n),
            s.export(r, "memoryLocalStorageAdapter", () => a);
          var i = e("./helpers");
          let n = {
            getItem: (e) =>
              (0, i.supportsLocalStorage)()
                ? globalThis.localStorage.getItem(e)
                : null,
            setItem: (e, t) => {
              (0, i.supportsLocalStorage)() &&
                globalThis.localStorage.setItem(e, t);
            },
            removeItem: (e) => {
              (0, i.supportsLocalStorage)() &&
                globalThis.localStorage.removeItem(e);
            },
          };
          function a(e = {}) {
            return {
              getItem: (t) => e[t] || null,
              setItem: (t, r) => {
                e[t] = r;
              },
              removeItem: (t) => {
                delete e[t];
              },
            };
          }
        },
        {
          "./helpers": "ltLuR",
          "@parcel/transformer-js/src/esmodule-helpers.js": "hbR2Q",
        },
      ],
      "4xGbi": [
        function (e, t, r) {
          var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
          function i() {
            if ("object" != typeof globalThis)
              try {
                Object.defineProperty(Object.prototype, "__magic__", {
                  get: function () {
                    return this;
                  },
                  configurable: !0,
                }),
                  (__magic__.globalThis = __magic__),
                  delete Object.prototype.__magic__;
              } catch (e) {
                "undefined" != typeof self && (self.globalThis = self);
              }
          }
          s.defineInteropFlag(r), s.export(r, "polyfillGlobalThis", () => i);
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "hbR2Q" },
      ],
      "9CO74": [
        function (e, t, r) {
          var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
          s.defineInteropFlag(r),
            s.export(r, "internals", () => n),
            s.export(r, "LockAcquireTimeoutError", () => a),
            s.export(r, "NavigatorLockAcquireTimeoutError", () => o),
            s.export(r, "navigatorLock", () => l);
          var i = e("./helpers");
          let n = {
            debug: !!(
              globalThis &&
              (0, i.supportsLocalStorage)() &&
              globalThis.localStorage &&
              "true" ===
                globalThis.localStorage.getItem(
                  "supabase.gotrue-js.locks.debug"
                )
            ),
          };
          class a extends Error {
            constructor(e) {
              super(e), (this.isAcquireTimeout = !0);
            }
          }
          class o extends a {}
          async function l(e, t, r) {
            n.debug &&
              console.log(
                "@supabase/gotrue-js: navigatorLock: acquire lock",
                e,
                t
              );
            let s = new globalThis.AbortController();
            return (
              t > 0 &&
                setTimeout(() => {
                  s.abort(),
                    n.debug &&
                      console.log(
                        "@supabase/gotrue-js: navigatorLock acquire timed out",
                        e
                      );
                }, t),
              await globalThis.navigator.locks.request(
                e,
                0 === t
                  ? { mode: "exclusive", ifAvailable: !0 }
                  : { mode: "exclusive", signal: s.signal },
                async (s) => {
                  if (s) {
                    n.debug &&
                      console.log(
                        "@supabase/gotrue-js: navigatorLock: acquired",
                        e,
                        s.name
                      );
                    try {
                      return await r();
                    } finally {
                      n.debug &&
                        console.log(
                          "@supabase/gotrue-js: navigatorLock: released",
                          e,
                          s.name
                        );
                    }
                  } else if (0 === t)
                    throw (
                      (n.debug &&
                        console.log(
                          "@supabase/gotrue-js: navigatorLock: not immediately available",
                          e
                        ),
                      new o(
                        `Acquiring an exclusive Navigator LockManager lock "${e}" immediately failed`
                      ))
                    );
                  else {
                    if (n.debug)
                      try {
                        let e = await globalThis.navigator.locks.query();
                        console.log(
                          "@supabase/gotrue-js: Navigator LockManager state",
                          JSON.stringify(e, null, "  ")
                        );
                      } catch (e) {
                        console.warn(
                          "@supabase/gotrue-js: Error when querying Navigator LockManager state",
                          e
                        );
                      }
                    return (
                      console.warn(
                        "@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"
                      ),
                      await r()
                    );
                  }
                }
              )
            );
          }
        },
        {
          "./helpers": "ltLuR",
          "@parcel/transformer-js/src/esmodule-helpers.js": "hbR2Q",
        },
      ],
      "63wqs": [
        function (e, t, r) {
          e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(
            r
          );
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "hbR2Q" },
      ],
      huVuo: [
        function (e, t, r) {
          e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(
            r
          );
          var s = e("@plasmohq/storage");
          let i = new s.Storage({ area: "local" }),
            n = async (e, t) => {
              try {
                await i.set("my_x_account", e.data), t.send({ success: !0 });
              } catch (e) {
                t.send({ isError: !0, message: e });
              }
            };
          r.default = n;
        },
        {
          "@plasmohq/storage": "d6Dja",
          "@parcel/transformer-js/src/esmodule-helpers.js": "hbR2Q",
        },
      ],
      jxMYM: [
        function (e, t, r) {
          e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(
            r
          );
          var s = e("@plasmohq/storage");
          let i = new s.Storage({ area: "local" }),
            n = async (e, t) => {
              try {
                let r = await i.get("latestTimeline"),
                  s = r ?? [];
                (s = (s = (s = s.concat(e.toSave)).slice(-400)).filter(
                  (e, t, r) => t === r.findIndex((t) => t.id === e.id)
                )),
                  await i.set("latestTimeline", s),
                  await i.get("latestTimeline"),
                  t.send({ success: !0 });
              } catch (e) {
                t.send({ isError: !0, message: e });
              }
            };
          r.default = n;
        },
        {
          "@plasmohq/storage": "d6Dja",
          "@parcel/transformer-js/src/esmodule-helpers.js": "hbR2Q",
        },
      ],
      lXQcX: [
        function (e, t, r) {
          e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(
            r
          );
          var s = e("@plasmohq/storage");
          let i = new s.Storage({ area: "local" }),
            n = async (e, t) => {
              try {
                let r = await i.get("latestTweets"),
                  s = r ?? [];
                s.push(e.tweetData),
                  s.length > 10 && s.shift(),
                  await i.set("latestTweets", s),
                  t.send({ success: !0 });
              } catch (e) {
                t.send({ isError: !0, message: e });
              }
            };
          r.default = n;
        },
        {
          "@plasmohq/storage": "d6Dja",
          "@parcel/transformer-js/src/esmodule-helpers.js": "hbR2Q",
        },
      ],
      cVmZJ: [
        function (e, t, r) {
          e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(
            r
          );
          let s = async (e, t) => {
            try {
              chrome.tabs.create({
                url: chrome.runtime.getURL("tabs/pro.html"),
              }),
                t.send({ success: !0 });
            } catch (e) {
              t.send({ success: !1 });
            }
          };
          r.default = s;
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "hbR2Q" },
      ],
      "1wK10": [
        function (e, t, r) {
          e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(
            r
          );
          let s = async (e, t) => {
            try {
              chrome.tabs.create({
                url: chrome.runtime.getURL("./options.html"),
              }),
                t.send({ success: !0 });
            } catch (e) {
              t.send({ success: !1 });
            }
          };
          r.default = s;
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "hbR2Q" },
      ],
      "6drpU": [
        function (e, t, r) {
          e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(
            r
          );
          let s = async (e, t) => {
            try {
              let e = await fetch("https://xtensions.pro/api/x-handle", {
                  method: "GET",
                  headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  },
                }),
                r = await e.json();
              t.send({ success: !0, data: r.handle });
            } catch (e) {
              t.send({ success: !1, message: e });
            }
          };
          r.default = s;
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "hbR2Q" },
      ],
      lSzt3: [
        function (e, t, r) {
          var s = e("@plasmohq/storage"),
            i = e("uuid");
          let n = new s.Storage();
          chrome.runtime.onInstalled.addListener(async ({ reason: e }) => {
            let t = await n.get("installation_id");
            t || (await n.set("installation_id", (0, i.v4)()));
          });
        },
        { "@plasmohq/storage": "d6Dja", uuid: "3Ce5h" },
      ],
      "3Ce5h": [
        function (e, t, r) {
          var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
          s.defineInteropFlag(r),
            s.export(r, "v1", () => n.default),
            s.export(r, "v3", () => o.default),
            s.export(r, "v4", () => c.default),
            s.export(r, "v5", () => u.default),
            s.export(r, "NIL", () => p.default),
            s.export(r, "version", () => g.default),
            s.export(r, "validate", () => b.default),
            s.export(r, "stringify", () => v.default),
            s.export(r, "parse", () => w.default);
          var i = e("./v1.js"),
            n = s.interopDefault(i),
            a = e("./v3.js"),
            o = s.interopDefault(a),
            l = e("./v4.js"),
            c = s.interopDefault(l),
            h = e("./v5.js"),
            u = s.interopDefault(h),
            d = e("./nil.js"),
            p = s.interopDefault(d),
            f = e("./version.js"),
            g = s.interopDefault(f),
            m = e("./validate.js"),
            b = s.interopDefault(m),
            y = e("./stringify.js"),
            v = s.interopDefault(y),
            _ = e("./parse.js"),
            w = s.interopDefault(_);
        },
        {
          "./v1.js": !1,
          "./v3.js": !1,
          "./v4.js": "d8naC",
          "./v5.js": !1,
          "./nil.js": !1,
          "./version.js": !1,
          "./validate.js": !1,
          "./stringify.js": !1,
          "./parse.js": !1,
          "@parcel/transformer-js/src/esmodule-helpers.js": "hbR2Q",
        },
      ],
      d8naC: [
        function (e, t, r) {
          var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
          s.defineInteropFlag(r);
          var i = e("./native.js"),
            n = s.interopDefault(i),
            a = e("./rng.js"),
            o = s.interopDefault(a),
            l = e("./stringify.js");
          r.default = function (e, t, r) {
            if (n.default.randomUUID && !t && !e)
              return (0, n.default).randomUUID();
            e = e || {};
            let s = e.random || (e.rng || (0, o.default))();
            if (((s[6] = (15 & s[6]) | 64), (s[8] = (63 & s[8]) | 128), t)) {
              r = r || 0;
              for (let e = 0; e < 16; ++e) t[r + e] = s[e];
              return t;
            }
            return (0, l.unsafeStringify)(s);
          };
        },
        {
          "./native.js": "l3x4o",
          "./rng.js": "9Sfn8",
          "./stringify.js": "hfoOu",
          "@parcel/transformer-js/src/esmodule-helpers.js": "hbR2Q",
        },
      ],
      l3x4o: [
        function (e, t, r) {
          e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(
            r
          );
          let s =
            "undefined" != typeof crypto &&
            crypto.randomUUID &&
            crypto.randomUUID.bind(crypto);
          r.default = { randomUUID: s };
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "hbR2Q" },
      ],
      "9Sfn8": [
        function (e, t, r) {
          let s;
          var i = e("@parcel/transformer-js/src/esmodule-helpers.js");
          i.defineInteropFlag(r), i.export(r, "default", () => a);
          let n = new Uint8Array(16);
          function a() {
            if (
              !s &&
              !(s =
                "undefined" != typeof crypto &&
                crypto.getRandomValues &&
                crypto.getRandomValues.bind(crypto))
            )
              throw Error(
                "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
              );
            return s(n);
          }
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "hbR2Q" },
      ],
      hfoOu: [
        function (e, t, r) {
          var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
          s.defineInteropFlag(r), s.export(r, "unsafeStringify", () => o);
          var i = e("./validate.js"),
            n = s.interopDefault(i);
          let a = [];
          for (let e = 0; e < 256; ++e) a.push((e + 256).toString(16).slice(1));
          function o(e, t = 0) {
            return (
              a[e[t + 0]] +
              a[e[t + 1]] +
              a[e[t + 2]] +
              a[e[t + 3]] +
              "-" +
              a[e[t + 4]] +
              a[e[t + 5]] +
              "-" +
              a[e[t + 6]] +
              a[e[t + 7]] +
              "-" +
              a[e[t + 8]] +
              a[e[t + 9]] +
              "-" +
              a[e[t + 10]] +
              a[e[t + 11]] +
              a[e[t + 12]] +
              a[e[t + 13]] +
              a[e[t + 14]] +
              a[e[t + 15]]
            );
          }
          r.default = function (e, t = 0) {
            let r = o(e, t);
            if (!(0, n.default)(r))
              throw TypeError("Stringified UUID is invalid");
            return r;
          };
        },
        {
          "./validate.js": "baFdE",
          "@parcel/transformer-js/src/esmodule-helpers.js": "hbR2Q",
        },
      ],
      baFdE: [
        function (e, t, r) {
          var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
          s.defineInteropFlag(r);
          var i = e("./regex.js"),
            n = s.interopDefault(i);
          r.default = function (e) {
            return "string" == typeof e && (0, n.default).test(e);
          };
        },
        {
          "./regex.js": "gF42W",
          "@parcel/transformer-js/src/esmodule-helpers.js": "hbR2Q",
        },
      ],
      gF42W: [
        function (e, t, r) {
          e("@parcel/transformer-js/src/esmodule-helpers.js").defineInteropFlag(
            r
          ),
            (r.default =
              /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);
        },
        { "@parcel/transformer-js/src/esmodule-helpers.js": "hbR2Q" },
      ],
      "8ZbMf": [
        function (e, t, r) {
          var s = e("@parcel/transformer-js/src/esmodule-helpers.js"),
            i = e("url:../../../contents/interceptor"),
            n = s.interopDefault(i);
          chrome.scripting
            .registerContentScripts([
              {
                id: "contentsInterceptor",
                js: [(0, n.default).split("/").pop().split("?")[0]],
                matches: ["*://*.twitter.com/*", "*://*.x.com/*"],
                runAt: "document_start",
                world: "MAIN",
              },
            ])
            .catch((e) => {});
        },
        {
          "url:../../../contents/interceptor": "44gWR",
          "@parcel/transformer-js/src/esmodule-helpers.js": "hbR2Q",
        },
      ],
      "44gWR": [
        function (e, t, r) {
          t.exports =
            e("e4527608ffc06220").getBundleURL("abzv4") +
            "../../" +
            e("932b6c037cd26c51").resolve("kFW7B");
        },
        { e4527608ffc06220: "1Ksod", "932b6c037cd26c51": "aOnzl" },
      ],
    },
    ["cq3XM", "kgW6q"],
    "kgW6q",
    "parcelRequirea88a"
  ),
  (globalThis.define = t);
