var e, t;
"function" == typeof (e = globalThis.define) && ((t = e), (e = null)),
  (function (t, r, s, n, l) {
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
      o = "function" == typeof a[n] && a[n],
      u = o.cache || {},
      i =
        "undefined" != typeof module &&
        "function" == typeof module.require &&
        module.require.bind(module);
    function c(e, r) {
      if (!u[e]) {
        if (!t[e]) {
          var s = "function" == typeof a[n] && a[n];
          if (!r && s) return s(e, !0);
          if (o) return o(e, !0);
          if (i && "string" == typeof e) return i(e);
          var l = Error("Cannot find module '" + e + "'");
          throw ((l.code = "MODULE_NOT_FOUND"), l);
        }
        (f.resolve = function (r) {
          var s = t[e][1][r];
          return null != s ? s : r;
        }),
          (f.cache = {});
        var d = (u[e] = new c.Module(e));
        t[e][0].call(d.exports, f, d, d.exports, this);
      }
      return u[e].exports;
      function f(e) {
        var t = f.resolve(e);
        return !1 === t ? {} : c(t);
      }
    }
    (c.isParcelRequire = !0),
      (c.Module = function (e) {
        (this.id = e), (this.bundle = c), (this.exports = {});
      }),
      (c.modules = t),
      (c.cache = u),
      (c.parent = o),
      (c.register = function (e, r) {
        t[e] = [
          function (e, t) {
            t.exports = r;
          },
          {},
        ];
      }),
      Object.defineProperty(c, "root", {
        get: function () {
          return a[n];
        },
      }),
      (a[n] = c);
    for (var d = 0; d < r.length; d++) c(r[d]);
    if (s) {
      var f = c(s);
      "object" == typeof exports && "undefined" != typeof module
        ? (module.exports = f)
        : "function" == typeof e && e.amd
        ? e(function () {
            return f;
          })
        : l && (this[l] = f);
    }
  })(
    {
      "995Gz": [
        function (e, t, r) {
          var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
          s.defineInteropFlag(r), s.export(r, "config", () => l);
          var n = e("@plasmohq/messaging");
          let l = {
            matches: ["*://*.twitter.com/*", "*://*.x.com/*"],
            run_at: "document_start",
            world: "MAIN",
          };
          function a(e, t) {
            let r = [];
            return (
              (function e(s) {
                if (Array.isArray(s)) s.forEach((t) => e(t));
                else if ("object" == typeof s && null !== s)
                  for (let n in s) n === t && r.push(s[n]), e(s[n]);
              })(e),
              r
            );
          }
          let o = (e) =>
              (e.result?.note_tweet?.note_tweet_results?.result?.text
                ? e.result?.note_tweet?.note_tweet_results?.result?.text
                : e.result?.legacy?.full_text ?? ""
              ).replace(/https:\/\/t.co[^\s]*/g, ""),
            u = (e, t) => e.replace(/^(@\w+\s)+/, ""),
            i = async (e) => {
              if (e?.length <= 0) return;
              let t = a(
                  e.filter(
                    (e) =>
                      e.entryId.startsWith("tweet-") ||
                      e.entryId.startsWith("conversationthread-")
                  ),
                  "tweet_results"
                ),
                r = t.filter(
                  (e) => !e.result.legacy?.full_text?.startsWith("@")
                );
              if (0 == r.length) return;
              let s =
                r[0].result.core?.user_results?.result?.legacy?.screen_name;
              if (
                !s ||
                0 ==
                  (r = r.filter(
                    (e) =>
                      e.result.core?.user_results?.result?.legacy
                        ?.screen_name == s
                  )).length
              )
                return;
              let l = t
                .filter((e) => e.result.legacy?.full_text?.startsWith(`@${s}`))
                .map((e) => ({
                  id: e.result.rest_id,
                  x_handle:
                    e.result.core.user_results.result.legacy.screen_name,
                  x_username: e.result.core.user_results.result.legacy.name,
                  text: u(o(e), s),
                  media: e.result?.legacy?.entities?.media?.map((e) => ({
                    image: e.media_url_https,
                    video: e.video_info?.variants?.[0]?.url,
                  })),
                }));
              l = l.filter((e) => e.text.length > 0);
              let i = {
                tweetId: r[0].result.rest_id,
                x_handle: s,
                x_username: r[0].result.core.user_results.result.legacy.name,
                tweets: r.map((e) => ({
                  text: o(e),
                  quote_tweet: e.result.quoted_status_result
                    ? {
                        x_handle:
                          e.result.quoted_status_result.result.core.user_results
                            .result.legacy.screen_name,
                        x_username:
                          e.result.quoted_status_result.result.core.user_results
                            .result.legacy.name,
                        text: o(e.result.quoted_status_result),
                      }
                    : null,
                })),
                replies: l,
              };
              await (0, n.sendToBackground)({
                name: "load-tweet",
                tweetData: i,
                extensionId: "pnfpeamclhnlpfjebknbbananbpakcml",
              });
            },
            c = async (e) => {
              if (e?.length <= 0) return;
              let t = a(e, "tweet_results").filter(
                  (e) =>
                    e.result?.core?.user_results?.result &&
                    "Tweet" === e.result.__typename
                ),
                r = t.map((e) => {
                  let t = e.result.legacy.full_text.startsWith("@"),
                    r = !!e.result.legacy.retweeted_status_result,
                    s = !!e.result.legacy.quoted_status_result,
                    n = r ? e.result.legacy.retweeted_status_result : e;
                  return {
                    id: n.result.rest_id,
                    user: {
                      x_handle:
                        n.result.core.user_results.result.legacy.screen_name,
                      x_username: n.result.core.user_results.result.legacy.name,
                      follower_count:
                        n.result.core.user_results.result.legacy
                          .followers_count,
                      following_count:
                        n.result.core.user_results.result.legacy.friends_count,
                      tweet_count:
                        n.result.core.user_results.result.legacy.statuses_count,
                      following:
                        n.result.core.user_results.result.legacy.following,
                      follows_me:
                        n.result.core.user_results.result.legacy.followed_by,
                      is_blue_verified:
                        n.result.core.user_results.result.is_blue_verified,
                    },
                    tweet: {
                      tweet_id: n.result.rest_id,
                      text: o(n),
                      likes: n.result.legacy.favorite_count,
                      retweets: n.result.legacy.retweet_count,
                      replies: n.result.legacy.reply_count,
                      views: n.result.views?.count,
                      bookmarks: n.result.legacy.bookmark_count,
                      timestamp: n.result.legacy.created_at,
                      is_reply: t,
                      is_quote: s,
                      is_retweet: r,
                    },
                  };
                });
              await (0, n.sendToBackground)({
                name: "load-timeline",
                toSave: r,
                extensionId: "pnfpeamclhnlpfjebknbbananbpakcml",
              });
            },
            d = async (e) => {
              await (0, n.sendToBackground)({
                name: "load-my-account",
                data: { x_handle: e.screen_name },
                extensionId: "pnfpeamclhnlpfjebknbbananbpakcml",
              });
            },
            f = window.XMLHttpRequest.prototype.open;
          window.XMLHttpRequest.prototype.open = function () {
            return (
              this.addEventListener("load", function (e) {
                if ("" == this.responseType || "text" == this.responseType) {
                  let e = this.responseText,
                    t = e && e.startsWith("{") ? JSON.parse(e) : null;
                  this.responseURL.includes("settings.json") && d(t);
                  let r = (function e(t, r) {
                    for (let s in t)
                      if (t.hasOwnProperty(s)) {
                        if ("object" == typeof t[s]) {
                          let n = e(t[s], r);
                          if (n) return n;
                        } else if ("type" === s && t[s] === r) return t;
                      }
                    return null;
                  })(t, "TimelineAddEntries");
                  r &&
                    (this.responseURL.includes("/TweetDetail?")
                      ? i(r?.entries)
                      : c(r?.entries));
                }
              }),
              f.apply(this, arguments)
            );
          };
        },
        {
          "@plasmohq/messaging": "bq7mF",
          "@parcel/transformer-js/src/esmodule-helpers.js": "hbR2Q",
        },
      ],
      bq7mF: [
        function (e, t, r) {
          var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
          s.defineInteropFlag(r),
            s.export(r, "relay", () => g),
            s.export(r, "relayMessage", () => _),
            s.export(r, "sendToActiveContentScript", () => p),
            s.export(r, "sendToBackground", () => d),
            s.export(r, "sendToBackgroundViaRelay", () => m),
            s.export(r, "sendToContentScript", () => f),
            s.export(r, "sendViaRelay", () => y);
          var n = e("nanoid"),
            l = globalThis.browser?.tabs || globalThis.chrome?.tabs,
            a = () => {
              let e = globalThis.browser?.runtime || globalThis.chrome?.runtime;
              if (!e) throw Error("Extension runtime is not available");
              return e;
            },
            o = () => {
              if (!l) throw Error("Extension tabs API is not available");
              return l;
            },
            u = async () => {
              let e = o(),
                [t] = await e.query({ active: !0, currentWindow: !0 });
              return t;
            },
            i = (e, t) =>
              !t.__internal &&
              e.source === globalThis.window &&
              e.data.name === t.name &&
              (void 0 === t.relayId || e.data.relayId === t.relayId),
            c = (e, t, r = globalThis.window) => {
              let s = async (s) => {
                if (i(s, e) && !s.data.relayed) {
                  let n = {
                      name: e.name,
                      relayId: e.relayId,
                      body: s.data.body,
                    },
                    l = await t?.(n);
                  r.postMessage(
                    {
                      name: e.name,
                      relayId: e.relayId,
                      instanceId: s.data.instanceId,
                      body: l,
                      relayed: !0,
                    },
                    { targetOrigin: e.targetOrigin || "/" }
                  );
                }
              };
              return (
                r.addEventListener("message", s),
                () => r.removeEventListener("message", s)
              );
            },
            d = async (e) => a().sendMessage(e.extensionId ?? null, e),
            f = async (e) => {
              let t = "number" == typeof e.tabId ? e.tabId : (await u())?.id;
              if (!t) throw Error("No active tab found to send message to.");
              return o().sendMessage(t, e);
            },
            p = f,
            _ = (e) => c(e, d),
            g = _,
            m = (e, t = globalThis.window) =>
              new Promise((r, s) => {
                let l = (0, n.nanoid)(),
                  a = new AbortController();
                t.addEventListener(
                  "message",
                  (t) => {
                    i(t, e) &&
                      t.data.relayed &&
                      t.data.instanceId === l &&
                      (r(t.data.body), a.abort());
                  },
                  { signal: a.signal }
                ),
                  t.postMessage(
                    { ...e, instanceId: l },
                    { targetOrigin: e.targetOrigin || "/" }
                  );
              }),
            y = m;
        },
        {
          nanoid: "WGs0a",
          "@parcel/transformer-js/src/esmodule-helpers.js": "hbR2Q",
        },
      ],
      WGs0a: [
        function (e, t, r) {
          var s = e("@parcel/transformer-js/src/esmodule-helpers.js");
          s.defineInteropFlag(r),
            s.export(r, "urlAlphabet", () => n.urlAlphabet),
            s.export(r, "random", () => l),
            s.export(r, "customRandom", () => a),
            s.export(r, "customAlphabet", () => o),
            s.export(r, "nanoid", () => u);
          var n = e("./url-alphabet/index.js");
          let l = (e) => crypto.getRandomValues(new Uint8Array(e)),
            a = (e, t, r) => {
              let s = (2 << (Math.log(e.length - 1) / Math.LN2)) - 1,
                n = -~((1.6 * s * t) / e.length);
              return (l = t) => {
                let a = "";
                for (;;) {
                  let t = r(n),
                    o = n;
                  for (; o--; )
                    if ((a += e[t[o] & s] || "").length === l) return a;
                }
              };
            },
            o = (e, t = 21) => a(e, t, l),
            u = (e = 21) =>
              crypto
                .getRandomValues(new Uint8Array(e))
                .reduce(
                  (e, t) => (
                    (t &= 63) < 36
                      ? (e += t.toString(36))
                      : t < 62
                      ? (e += (t - 26).toString(36).toUpperCase())
                      : t > 62
                      ? (e += "-")
                      : (e += "_"),
                    e
                  ),
                  ""
                );
        },
        {
          "./url-alphabet/index.js": !1,
          "@parcel/transformer-js/src/esmodule-helpers.js": "hbR2Q",
        },
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
    },
    ["995Gz"],
    "995Gz",
    "parcelRequirea88a"
  ),
  (globalThis.define = t);
