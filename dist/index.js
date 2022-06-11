"use strict";
function e(e) {
  if (e && e.__esModule) return e;
  var t = Object.create(null);
  return (
    e &&
      Object.keys(e).forEach(function (n) {
        if ("default" !== n) {
          var i = Object.getOwnPropertyDescriptor(e, n);
          Object.defineProperty(
            t,
            n,
            i.get
              ? i
              : {
                  enumerable: !0,
                  get: function () {
                    return e[n];
                  },
                }
          );
        }
      }),
    (t.default = e),
    Object.freeze(t)
  );
}
Object.defineProperty(exports, "__esModule", { value: !0 });
var t = e(require("react"));
const { useEffect: n, useState: i, useRef: r } = t,
  o = /Windows.*Chrome|Windows.*Firefox|Linux.*Chrome/,
  s = {
    enabled: !0,
    url: "https://ipv4.icanhazip.com/",
    timeout: 5e3,
    interval: 5e3,
  };
class a {
  pollingConfigs;
  static instance;
  intervalId;
  constructor(e = s) {
    this.pollingConfigs = e;
  }
  setIntervalId(e) {
    this.intervalId = e;
  }
  getIntervalId() {
    return this.intervalId;
  }
  static getInstance(e) {
    return (
      a.instance || (a.instance = new a()),
      a.instance.setPollingConfigs(e),
      a.instance
    );
  }
  setPollingConfigs(e) {
    o.test(navigator?.userAgent)
      ? "object" == typeof e && e.enabled
        ? (this.pollingConfigs = { ...s, ...e })
        : e && (this.pollingConfigs = s)
      : (this.pollingConfigs = { ...s, enabled: !1 });
  }
  ping({ url: e, timeout: t }) {
    return new Promise((n, i) => {
      const r = new XMLHttpRequest();
      (r.onerror = i),
        (r.ontimeout = i),
        (r.onreadystatechange = () => {
          r.readyState === r.HEADERS_RECEIVED && (r.status ? n() : i());
        }),
        r.open("HEAD", e),
        (r.timeout = t),
        r.send();
    });
  }
}
exports.useOnlineEffect = (e = !0) => {
  const [t, r] = i(!0),
    o = a.getInstance(e),
    s = () => {
      r(!0);
    },
    l = () => {
      r(!1);
    };
  return (
    n(() => {
      window.addEventListener("online", s),
        window.addEventListener("offline", l);
      let e = o.getIntervalId();
      const { enabled: t, url: n, timeout: i, interval: a } = o.pollingConfigs;
      return (
        t &&
          n &&
          (e && clearInterval(e),
          (e = window.setInterval(async () => {
            try {
              await o.ping({ url: n, timeout: i }), r(!0);
            } catch (e) {
              r(!1);
            }
          }, a)),
          o.setIntervalId(e)),
        () => {
          window.removeEventListener("online", s),
            window.removeEventListener("offline", l),
            t && clearInterval(e);
        }
      );
    }, []),
    { isOnline: t }
  );
};
