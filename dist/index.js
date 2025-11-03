import * as b from "react";
import T, { createContext as ge, useRef as q, useLayoutEffect as Ma, useEffect as ue, useId as je, useContext as re, useInsertionEffect as up, useMemo as pe, useCallback as X, Children as gy, isValidElement as ba, useState as oe, Fragment as Ae, createElement as cp, forwardRef as Nr, Component as yy, cloneElement as dp, useSyncExternalStore as My, useReducer as fp, createRef as by } from "react";
import * as xr from "react-dom";
import xy, { flushSync as dt, createPortal as Fu } from "react-dom";
var wy = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {};
function mp(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var zl = { exports: {} }, ir = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kd;
function Yy() {
  if (kd) return ir;
  kd = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function n(r, s, i) {
    var o = null;
    if (i !== void 0 && (o = "" + i), s.key !== void 0 && (o = "" + s.key), "key" in s) {
      i = {};
      for (var a in s)
        a !== "key" && (i[a] = s[a]);
    } else i = s;
    return s = i.ref, {
      $$typeof: e,
      type: r,
      key: o,
      ref: s !== void 0 ? s : null,
      props: i
    };
  }
  return ir.Fragment = t, ir.jsx = n, ir.jsxs = n, ir;
}
var ar = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Dd;
function Ly() {
  return Dd || (Dd = 1, process.env.NODE_ENV !== "production" && function() {
    function e(E) {
      if (E == null) return null;
      if (typeof E == "function")
        return E.$$typeof === $ ? null : E.displayName || E.name || null;
      if (typeof E == "string") return E;
      switch (E) {
        case _:
          return "Fragment";
        case M:
          return "Profiler";
        case v:
          return "StrictMode";
        case k:
          return "Suspense";
        case D:
          return "SuspenseList";
        case Y:
          return "Activity";
      }
      if (typeof E == "object")
        switch (typeof E.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), E.$$typeof) {
          case h:
            return "Portal";
          case x:
            return E.displayName || "Context";
          case y:
            return (E._context.displayName || "Context") + ".Consumer";
          case w:
            var R = E.render;
            return E = E.displayName, E || (E = R.displayName || R.name || "", E = E !== "" ? "ForwardRef(" + E + ")" : "ForwardRef"), E;
          case S:
            return R = E.displayName || null, R !== null ? R : e(E.type) || "Memo";
          case N:
            R = E._payload, E = E._init;
            try {
              return e(E(R));
            } catch {
            }
        }
      return null;
    }
    function t(E) {
      return "" + E;
    }
    function n(E) {
      try {
        t(E);
        var R = !1;
      } catch {
        R = !0;
      }
      if (R) {
        R = console;
        var z = R.error, K = typeof Symbol == "function" && Symbol.toStringTag && E[Symbol.toStringTag] || E.constructor.name || "Object";
        return z.call(
          R,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          K
        ), t(E);
      }
    }
    function r(E) {
      if (E === _) return "<>";
      if (typeof E == "object" && E !== null && E.$$typeof === N)
        return "<...>";
      try {
        var R = e(E);
        return R ? "<" + R + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var E = I.A;
      return E === null ? null : E.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function o(E) {
      if (U.call(E, "key")) {
        var R = Object.getOwnPropertyDescriptor(E, "key").get;
        if (R && R.isReactWarning) return !1;
      }
      return E.key !== void 0;
    }
    function a(E, R) {
      function z() {
        C || (C = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          R
        ));
      }
      z.isReactWarning = !0, Object.defineProperty(E, "key", {
        get: z,
        configurable: !0
      });
    }
    function l() {
      var E = e(this.type);
      return O[E] || (O[E] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), E = this.props.ref, E !== void 0 ? E : null;
    }
    function u(E, R, z, K, ne, G) {
      var W = z.ref;
      return E = {
        $$typeof: p,
        type: E,
        key: R,
        props: z,
        _owner: K
      }, (W !== void 0 ? W : null) !== null ? Object.defineProperty(E, "ref", {
        enumerable: !1,
        get: l
      }) : Object.defineProperty(E, "ref", { enumerable: !1, value: null }), E._store = {}, Object.defineProperty(E._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(E, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(E, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ne
      }), Object.defineProperty(E, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: G
      }), Object.freeze && (Object.freeze(E.props), Object.freeze(E)), E;
    }
    function c(E, R, z, K, ne, G) {
      var W = R.children;
      if (W !== void 0)
        if (K)
          if (H(W)) {
            for (K = 0; K < W.length; K++)
              d(W[K]);
            Object.freeze && Object.freeze(W);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else d(W);
      if (U.call(R, "key")) {
        W = e(E);
        var Q = Object.keys(R).filter(function(he) {
          return he !== "key";
        });
        K = 0 < Q.length ? "{key: someKey, " + Q.join(": ..., ") + ": ...}" : "{key: someKey}", B[W + K] || (Q = 0 < Q.length ? "{" + Q.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          K,
          W,
          Q,
          W
        ), B[W + K] = !0);
      }
      if (W = null, z !== void 0 && (n(z), W = "" + z), o(R) && (n(R.key), W = "" + R.key), "key" in R) {
        z = {};
        for (var se in R)
          se !== "key" && (z[se] = R[se]);
      } else z = R;
      return W && a(
        z,
        typeof E == "function" ? E.displayName || E.name || "Unknown" : E
      ), u(
        E,
        W,
        z,
        s(),
        ne,
        G
      );
    }
    function d(E) {
      f(E) ? E._store && (E._store.validated = 1) : typeof E == "object" && E !== null && E.$$typeof === N && (E._payload.status === "fulfilled" ? f(E._payload.value) && E._payload.value._store && (E._payload.value._store.validated = 1) : E._store && (E._store.validated = 1));
    }
    function f(E) {
      return typeof E == "object" && E !== null && E.$$typeof === p;
    }
    var m = T, p = Symbol.for("react.transitional.element"), h = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), M = Symbol.for("react.profiler"), y = Symbol.for("react.consumer"), x = Symbol.for("react.context"), w = Symbol.for("react.forward_ref"), k = Symbol.for("react.suspense"), D = Symbol.for("react.suspense_list"), S = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), Y = Symbol.for("react.activity"), $ = Symbol.for("react.client.reference"), I = m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, U = Object.prototype.hasOwnProperty, H = Array.isArray, A = console.createTask ? console.createTask : function() {
      return null;
    };
    m = {
      react_stack_bottom_frame: function(E) {
        return E();
      }
    };
    var C, O = {}, L = m.react_stack_bottom_frame.bind(
      m,
      i
    )(), j = A(r(i)), B = {};
    ar.Fragment = _, ar.jsx = function(E, R, z) {
      var K = 1e4 > I.recentlyCreatedOwnerStacks++;
      return c(
        E,
        R,
        z,
        !1,
        K ? Error("react-stack-top-frame") : L,
        K ? A(r(E)) : j
      );
    }, ar.jsxs = function(E, R, z) {
      var K = 1e4 > I.recentlyCreatedOwnerStacks++;
      return c(
        E,
        R,
        z,
        !0,
        K ? Error("react-stack-top-frame") : L,
        K ? A(r(E)) : j
      );
    };
  }()), ar;
}
process.env.NODE_ENV === "production" ? zl.exports = Yy() : zl.exports = Ly();
var g = zl.exports;
const Vu = ge({});
function zu(e) {
  const t = q(null);
  return t.current === null && (t.current = e()), t.current;
}
const Bu = typeof window != "undefined", pp = Bu ? Ma : ue, xa = /* @__PURE__ */ ge(null);
function Wu(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Uu(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
const $t = (e, t, n) => n > t ? t : n < e ? e : n;
function Bl(e, t) {
  return t ? `${e}. For more information and steps for solving, visit https://motion.dev/troubleshooting/${t}` : e;
}
let Kn = () => {
}, Ht = () => {
};
process.env.NODE_ENV !== "production" && (Kn = (e, t, n) => {
  !e && typeof console != "undefined" && console.warn(Bl(t, n));
}, Ht = (e, t, n) => {
  if (!e)
    throw new Error(Bl(t, n));
});
const Ot = {}, hp = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
function _p(e) {
  return typeof e == "object" && e !== null;
}
const vp = (e) => /^0[^.\s]+$/u.test(e);
// @__NO_SIDE_EFFECTS__
function Ku(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const st = /* @__NO_SIDE_EFFECTS__ */ (e) => e, Sy = (e, t) => (n) => t(e(n)), Ir = (...e) => e.reduce(Sy), wr = /* @__NO_SIDE_EFFECTS__ */ (e, t, n) => {
  const r = t - e;
  return r === 0 ? 1 : (n - e) / r;
};
class Gu {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return Wu(this.subscriptions, t), () => Uu(this.subscriptions, t);
  }
  notify(t, n, r) {
    const s = this.subscriptions.length;
    if (s)
      if (s === 1)
        this.subscriptions[0](t, n, r);
      else
        for (let i = 0; i < s; i++) {
          const o = this.subscriptions[i];
          o && o(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const mt = /* @__NO_SIDE_EFFECTS__ */ (e) => e * 1e3, ot = /* @__NO_SIDE_EFFECTS__ */ (e) => e / 1e3;
function gp(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const Td = /* @__PURE__ */ new Set();
function Ju(e, t, n) {
  e || Td.has(t) || (console.warn(Bl(t, n)), Td.add(t));
}
const yp = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, ky = 1e-7, Dy = 12;
function Ty(e, t, n, r, s) {
  let i, o, a = 0;
  do
    o = t + (n - t) / 2, i = yp(o, r, s) - e, i > 0 ? n = o : t = o;
  while (Math.abs(i) > ky && ++a < Dy);
  return o;
}
function Fr(e, t, n, r) {
  if (e === t && n === r)
    return st;
  const s = (i) => Ty(i, 0, 1, e, n);
  return (i) => i === 0 || i === 1 ? i : yp(s(i), t, r);
}
const Mp = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, bp = (e) => (t) => 1 - e(1 - t), xp = /* @__PURE__ */ Fr(0.33, 1.53, 0.69, 0.99), qu = /* @__PURE__ */ bp(xp), wp = /* @__PURE__ */ Mp(qu), Yp = (e) => (e *= 2) < 1 ? 0.5 * qu(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), Xu = (e) => 1 - Math.sin(Math.acos(e)), Lp = bp(Xu), Sp = Mp(Xu), Ey = /* @__PURE__ */ Fr(0.42, 0, 1, 1), jy = /* @__PURE__ */ Fr(0, 0, 0.58, 1), kp = /* @__PURE__ */ Fr(0.42, 0, 0.58, 1), Py = (e) => Array.isArray(e) && typeof e[0] != "number", Dp = (e) => Array.isArray(e) && typeof e[0] == "number", Ed = {
  linear: st,
  easeIn: Ey,
  easeInOut: kp,
  easeOut: jy,
  circIn: Xu,
  circInOut: Sp,
  circOut: Lp,
  backIn: qu,
  backInOut: wp,
  backOut: xp,
  anticipate: Yp
}, Ay = (e) => typeof e == "string", jd = (e) => {
  if (Dp(e)) {
    Ht(e.length === 4, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length");
    const [t, n, r, s] = e;
    return Fr(t, n, r, s);
  } else if (Ay(e))
    return Ht(Ed[e] !== void 0, `Invalid easing type '${e}'`, "invalid-easing-type"), Ed[e];
  return e;
}, oo = [
  "setup",
  // Compute
  "read",
  // Read
  "resolveKeyframes",
  // Write/Read/Write/Read
  "preUpdate",
  // Compute
  "update",
  // Compute
  "preRender",
  // Compute
  "render",
  // Write
  "postRender"
  // Compute
];
function Cy(e, t) {
  let n = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set(), s = !1, i = !1;
  const o = /* @__PURE__ */ new WeakSet();
  let a = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  };
  function l(c) {
    o.has(c) && (u.schedule(c), e()), c(a);
  }
  const u = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (c, d = !1, f = !1) => {
      const p = f && s ? n : r;
      return d && o.add(c), p.has(c) || p.add(c), c;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (c) => {
      r.delete(c), o.delete(c);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (c) => {
      if (a = c, s) {
        i = !0;
        return;
      }
      s = !0, [n, r] = [r, n], n.forEach(l), n.clear(), s = !1, i && (i = !1, u.process(c));
    }
  };
  return u;
}
const $y = 40;
function Tp(e, t) {
  let n = !1, r = !0;
  const s = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, i = () => n = !0, o = oo.reduce((y, x) => (y[x] = Cy(i), y), {}), { setup: a, read: l, resolveKeyframes: u, preUpdate: c, update: d, preRender: f, render: m, postRender: p } = o, h = () => {
    const y = Ot.useManualTiming ? s.timestamp : performance.now();
    n = !1, Ot.useManualTiming || (s.delta = r ? 1e3 / 60 : Math.max(Math.min(y - s.timestamp, $y), 1)), s.timestamp = y, s.isProcessing = !0, a.process(s), l.process(s), u.process(s), c.process(s), d.process(s), f.process(s), m.process(s), p.process(s), s.isProcessing = !1, n && t && (r = !1, e(h));
  }, _ = () => {
    n = !0, r = !0, s.isProcessing || e(h);
  };
  return { schedule: oo.reduce((y, x) => {
    const w = o[x];
    return y[x] = (k, D = !1, S = !1) => (n || _(), w.schedule(k, D, S)), y;
  }, {}), cancel: (y) => {
    for (let x = 0; x < oo.length; x++)
      o[oo[x]].cancel(y);
  }, state: s, steps: o };
}
const { schedule: we, cancel: qt, state: Oe, steps: nl } = /* @__PURE__ */ Tp(typeof requestAnimationFrame != "undefined" ? requestAnimationFrame : st, !0);
let Mo;
function Hy() {
  Mo = void 0;
}
const Ke = {
  now: () => (Mo === void 0 && Ke.set(Oe.isProcessing || Ot.useManualTiming ? Oe.timestamp : performance.now()), Mo),
  set: (e) => {
    Mo = e, queueMicrotask(Hy);
  }
}, Ep = (e) => (t) => typeof t == "string" && t.startsWith(e), Zu = /* @__PURE__ */ Ep("--"), Oy = /* @__PURE__ */ Ep("var(--"), Qu = (e) => Oy(e) ? Ry.test(e.split("/*")[0].trim()) : !1, Ry = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, Gn = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, Yr = {
  ...Gn,
  transform: (e) => $t(0, 1, e)
}, so = {
  ...Gn,
  default: 1
}, _r = (e) => Math.round(e * 1e5) / 1e5, ec = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Ny(e) {
  return e == null;
}
const Iy = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, tc = (e, t) => (n) => !!(typeof n == "string" && Iy.test(n) && n.startsWith(e) || t && !Ny(n) && Object.prototype.hasOwnProperty.call(n, t)), jp = (e, t, n) => (r) => {
  if (typeof r != "string")
    return r;
  const [s, i, o, a] = r.match(ec);
  return {
    [e]: parseFloat(s),
    [t]: parseFloat(i),
    [n]: parseFloat(o),
    alpha: a !== void 0 ? parseFloat(a) : 1
  };
}, Fy = (e) => $t(0, 255, e), rl = {
  ...Gn,
  transform: (e) => Math.round(Fy(e))
}, cn = {
  test: /* @__PURE__ */ tc("rgb", "red"),
  parse: /* @__PURE__ */ jp("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + rl.transform(e) + ", " + rl.transform(t) + ", " + rl.transform(n) + ", " + _r(Yr.transform(r)) + ")"
};
function Vy(e) {
  let t = "", n = "", r = "", s = "";
  return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), s = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), s = e.substring(4, 5), t += t, n += n, r += r, s += s), {
    red: parseInt(t, 16),
    green: parseInt(n, 16),
    blue: parseInt(r, 16),
    alpha: s ? parseInt(s, 16) / 255 : 1
  };
}
const Wl = {
  test: /* @__PURE__ */ tc("#"),
  parse: Vy,
  transform: cn.transform
}, Vr = /* @__NO_SIDE_EFFECTS__ */ (e) => ({
  test: (t) => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), Wt = /* @__PURE__ */ Vr("deg"), yt = /* @__PURE__ */ Vr("%"), ae = /* @__PURE__ */ Vr("px"), zy = /* @__PURE__ */ Vr("vh"), By = /* @__PURE__ */ Vr("vw"), Pd = {
  ...yt,
  parse: (e) => yt.parse(e) / 100,
  transform: (e) => yt.transform(e * 100)
}, Dn = {
  test: /* @__PURE__ */ tc("hsl", "hue"),
  parse: /* @__PURE__ */ jp("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + yt.transform(_r(t)) + ", " + yt.transform(_r(n)) + ", " + _r(Yr.transform(r)) + ")"
}, Pe = {
  test: (e) => cn.test(e) || Wl.test(e) || Dn.test(e),
  parse: (e) => cn.test(e) ? cn.parse(e) : Dn.test(e) ? Dn.parse(e) : Wl.parse(e),
  transform: (e) => typeof e == "string" ? e : e.hasOwnProperty("red") ? cn.transform(e) : Dn.transform(e),
  getAnimatableNone: (e) => {
    const t = Pe.parse(e);
    return t.alpha = 0, Pe.transform(t);
  }
}, Wy = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Uy(e) {
  var t, n;
  return isNaN(e) && typeof e == "string" && (((t = e.match(ec)) == null ? void 0 : t.length) || 0) + (((n = e.match(Wy)) == null ? void 0 : n.length) || 0) > 0;
}
const Pp = "number", Ap = "color", Ky = "var", Gy = "var(", Ad = "${}", Jy = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Lr(e) {
  const t = e.toString(), n = [], r = {
    color: [],
    number: [],
    var: []
  }, s = [];
  let i = 0;
  const a = t.replace(Jy, (l) => (Pe.test(l) ? (r.color.push(i), s.push(Ap), n.push(Pe.parse(l))) : l.startsWith(Gy) ? (r.var.push(i), s.push(Ky), n.push(l)) : (r.number.push(i), s.push(Pp), n.push(parseFloat(l))), ++i, Ad)).split(Ad);
  return { values: n, split: a, indexes: r, types: s };
}
function Cp(e) {
  return Lr(e).values;
}
function $p(e) {
  const { split: t, types: n } = Lr(e), r = t.length;
  return (s) => {
    let i = "";
    for (let o = 0; o < r; o++)
      if (i += t[o], s[o] !== void 0) {
        const a = n[o];
        a === Pp ? i += _r(s[o]) : a === Ap ? i += Pe.transform(s[o]) : i += s[o];
      }
    return i;
  };
}
const qy = (e) => typeof e == "number" ? 0 : Pe.test(e) ? Pe.getAnimatableNone(e) : e;
function Xy(e) {
  const t = Cp(e);
  return $p(e)(t.map(qy));
}
const Xt = {
  test: Uy,
  parse: Cp,
  createTransformer: $p,
  getAnimatableNone: Xy
};
function ol(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function Zy({ hue: e, saturation: t, lightness: n, alpha: r }) {
  e /= 360, t /= 100, n /= 100;
  let s = 0, i = 0, o = 0;
  if (!t)
    s = i = o = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t, l = 2 * n - a;
    s = ol(l, a, e + 1 / 3), i = ol(l, a, e), o = ol(l, a, e - 1 / 3);
  }
  return {
    red: Math.round(s * 255),
    green: Math.round(i * 255),
    blue: Math.round(o * 255),
    alpha: r
  };
}
function Do(e, t) {
  return (n) => n > 0 ? t : e;
}
const ke = (e, t, n) => e + (t - e) * n, sl = (e, t, n) => {
  const r = e * e, s = n * (t * t - r) + r;
  return s < 0 ? 0 : Math.sqrt(s);
}, Qy = [Wl, cn, Dn], eM = (e) => Qy.find((t) => t.test(e));
function Cd(e) {
  const t = eM(e);
  if (Kn(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"), !t)
    return !1;
  let n = t.parse(e);
  return t === Dn && (n = Zy(n)), n;
}
const $d = (e, t) => {
  const n = Cd(e), r = Cd(t);
  if (!n || !r)
    return Do(e, t);
  const s = { ...n };
  return (i) => (s.red = sl(n.red, r.red, i), s.green = sl(n.green, r.green, i), s.blue = sl(n.blue, r.blue, i), s.alpha = ke(n.alpha, r.alpha, i), cn.transform(s));
}, Ul = /* @__PURE__ */ new Set(["none", "hidden"]);
function tM(e, t) {
  return Ul.has(e) ? (n) => n <= 0 ? e : t : (n) => n >= 1 ? t : e;
}
function nM(e, t) {
  return (n) => ke(e, t, n);
}
function nc(e) {
  return typeof e == "number" ? nM : typeof e == "string" ? Qu(e) ? Do : Pe.test(e) ? $d : sM : Array.isArray(e) ? Hp : typeof e == "object" ? Pe.test(e) ? $d : rM : Do;
}
function Hp(e, t) {
  const n = [...e], r = n.length, s = e.map((i, o) => nc(i)(i, t[o]));
  return (i) => {
    for (let o = 0; o < r; o++)
      n[o] = s[o](i);
    return n;
  };
}
function rM(e, t) {
  const n = { ...e, ...t }, r = {};
  for (const s in n)
    e[s] !== void 0 && t[s] !== void 0 && (r[s] = nc(e[s])(e[s], t[s]));
  return (s) => {
    for (const i in r)
      n[i] = r[i](s);
    return n;
  };
}
function oM(e, t) {
  var s;
  const n = [], r = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < t.values.length; i++) {
    const o = t.types[i], a = e.indexes[o][r[o]], l = (s = e.values[a]) != null ? s : 0;
    n[i] = l, r[o]++;
  }
  return n;
}
const sM = (e, t) => {
  const n = Xt.createTransformer(t), r = Lr(e), s = Lr(t);
  return r.indexes.var.length === s.indexes.var.length && r.indexes.color.length === s.indexes.color.length && r.indexes.number.length >= s.indexes.number.length ? Ul.has(e) && !s.values.length || Ul.has(t) && !r.values.length ? tM(e, t) : Ir(Hp(oM(r, s), s.values), n) : (Kn(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different"), Do(e, t));
};
function Op(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number" ? ke(e, t, n) : nc(e)(e, t);
}
const iM = (e) => {
  const t = ({ timestamp: n }) => e(n);
  return {
    start: (n = !0) => we.update(t, n),
    stop: () => qt(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => Oe.isProcessing ? Oe.timestamp : Ke.now()
  };
}, Rp = (e, t, n = 10) => {
  let r = "";
  const s = Math.max(Math.round(t / n), 2);
  for (let i = 0; i < s; i++)
    r += Math.round(e(i / (s - 1)) * 1e4) / 1e4 + ", ";
  return `linear(${r.substring(0, r.length - 2)})`;
}, To = 2e4;
function rc(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < To; )
    t += n, r = e.next(t);
  return t >= To ? 1 / 0 : t;
}
function aM(e, t = 100, n) {
  const r = n({ ...e, keyframes: [0, t] }), s = Math.min(rc(r), To);
  return {
    type: "keyframes",
    ease: (i) => r.next(s * i).value / t,
    duration: /* @__PURE__ */ ot(s)
  };
}
const lM = 5;
function Np(e, t, n) {
  const r = Math.max(t - lM, 0);
  return gp(n - e(r), t - r);
}
const Se = {
  // Default spring physics
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  // Default duration/bounce-based options
  duration: 800,
  // in ms
  bounce: 0.3,
  visualDuration: 0.3,
  // in seconds
  // Rest thresholds
  restSpeed: {
    granular: 0.01,
    default: 2
  },
  restDelta: {
    granular: 5e-3,
    default: 0.5
  },
  // Limits
  minDuration: 0.01,
  // in seconds
  maxDuration: 10,
  // in seconds
  minDamping: 0.05,
  maxDamping: 1
}, il = 1e-3;
function uM({ duration: e = Se.duration, bounce: t = Se.bounce, velocity: n = Se.velocity, mass: r = Se.mass }) {
  let s, i;
  Kn(e <= /* @__PURE__ */ mt(Se.maxDuration), "Spring duration must be 10 seconds or less", "spring-duration-limit");
  let o = 1 - t;
  o = $t(Se.minDamping, Se.maxDamping, o), e = $t(Se.minDuration, Se.maxDuration, /* @__PURE__ */ ot(e)), o < 1 ? (s = (u) => {
    const c = u * o, d = c * e, f = c - n, m = Kl(u, o), p = Math.exp(-d);
    return il - f / m * p;
  }, i = (u) => {
    const d = u * o * e, f = d * n + n, m = Math.pow(o, 2) * Math.pow(u, 2) * e, p = Math.exp(-d), h = Kl(Math.pow(u, 2), o);
    return (-s(u) + il > 0 ? -1 : 1) * ((f - m) * p) / h;
  }) : (s = (u) => {
    const c = Math.exp(-u * e), d = (u - n) * e + 1;
    return -il + c * d;
  }, i = (u) => {
    const c = Math.exp(-u * e), d = (n - u) * (e * e);
    return c * d;
  });
  const a = 5 / e, l = dM(s, i, a);
  if (e = /* @__PURE__ */ mt(e), isNaN(l))
    return {
      stiffness: Se.stiffness,
      damping: Se.damping,
      duration: e
    };
  {
    const u = Math.pow(l, 2) * r;
    return {
      stiffness: u,
      damping: o * 2 * Math.sqrt(r * u),
      duration: e
    };
  }
}
const cM = 12;
function dM(e, t, n) {
  let r = n;
  for (let s = 1; s < cM; s++)
    r = r - e(r) / t(r);
  return r;
}
function Kl(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const fM = ["duration", "bounce"], mM = ["stiffness", "damping", "mass"];
function Hd(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function pM(e) {
  let t = {
    velocity: Se.velocity,
    stiffness: Se.stiffness,
    damping: Se.damping,
    mass: Se.mass,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!Hd(e, mM) && Hd(e, fM))
    if (e.visualDuration) {
      const n = e.visualDuration, r = 2 * Math.PI / (n * 1.2), s = r * r, i = 2 * $t(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(s);
      t = {
        ...t,
        mass: Se.mass,
        stiffness: s,
        damping: i
      };
    } else {
      const n = uM(e);
      t = {
        ...t,
        ...n,
        mass: Se.mass
      }, t.isResolvedFromDuration = !0;
    }
  return t;
}
function Eo(e = Se.visualDuration, t = Se.bounce) {
  const n = typeof e != "object" ? {
    visualDuration: e,
    keyframes: [0, 1],
    bounce: t
  } : e;
  let { restSpeed: r, restDelta: s } = n;
  const i = n.keyframes[0], o = n.keyframes[n.keyframes.length - 1], a = { done: !1, value: i }, { stiffness: l, damping: u, mass: c, duration: d, velocity: f, isResolvedFromDuration: m } = pM({
    ...n,
    velocity: -/* @__PURE__ */ ot(n.velocity || 0)
  }), p = f || 0, h = u / (2 * Math.sqrt(l * c)), _ = o - i, v = /* @__PURE__ */ ot(Math.sqrt(l / c)), M = Math.abs(_) < 5;
  r || (r = M ? Se.restSpeed.granular : Se.restSpeed.default), s || (s = M ? Se.restDelta.granular : Se.restDelta.default);
  let y;
  if (h < 1) {
    const w = Kl(v, h);
    y = (k) => {
      const D = Math.exp(-h * v * k);
      return o - D * ((p + h * v * _) / w * Math.sin(w * k) + _ * Math.cos(w * k));
    };
  } else if (h === 1)
    y = (w) => o - Math.exp(-v * w) * (_ + (p + v * _) * w);
  else {
    const w = v * Math.sqrt(h * h - 1);
    y = (k) => {
      const D = Math.exp(-h * v * k), S = Math.min(w * k, 300);
      return o - D * ((p + h * v * _) * Math.sinh(S) + w * _ * Math.cosh(S)) / w;
    };
  }
  const x = {
    calculatedDuration: m && d || null,
    next: (w) => {
      const k = y(w);
      if (m)
        a.done = w >= d;
      else {
        let D = w === 0 ? p : 0;
        h < 1 && (D = w === 0 ? /* @__PURE__ */ mt(p) : Np(y, w, k));
        const S = Math.abs(D) <= r, N = Math.abs(o - k) <= s;
        a.done = S && N;
      }
      return a.value = a.done ? o : k, a;
    },
    toString: () => {
      const w = Math.min(rc(x), To), k = Rp((D) => x.next(w * D).value, w, 30);
      return w + "ms " + k;
    },
    toTransition: () => {
    }
  };
  return x;
}
Eo.applyToOptions = (e) => {
  const t = aM(e, 100, Eo);
  return e.ease = t.ease, e.duration = /* @__PURE__ */ mt(t.duration), e.type = "keyframes", e;
};
function Gl({ keyframes: e, velocity: t = 0, power: n = 0.8, timeConstant: r = 325, bounceDamping: s = 10, bounceStiffness: i = 500, modifyTarget: o, min: a, max: l, restDelta: u = 0.5, restSpeed: c }) {
  const d = e[0], f = {
    done: !1,
    value: d
  }, m = (S) => a !== void 0 && S < a || l !== void 0 && S > l, p = (S) => a === void 0 ? l : l === void 0 || Math.abs(a - S) < Math.abs(l - S) ? a : l;
  let h = n * t;
  const _ = d + h, v = o === void 0 ? _ : o(_);
  v !== _ && (h = v - d);
  const M = (S) => -h * Math.exp(-S / r), y = (S) => v + M(S), x = (S) => {
    const N = M(S), Y = y(S);
    f.done = Math.abs(N) <= u, f.value = f.done ? v : Y;
  };
  let w, k;
  const D = (S) => {
    m(f.value) && (w = S, k = Eo({
      keyframes: [f.value, p(f.value)],
      velocity: Np(y, S, f.value),
      // TODO: This should be passing * 1000
      damping: s,
      stiffness: i,
      restDelta: u,
      restSpeed: c
    }));
  };
  return D(0), {
    calculatedDuration: null,
    next: (S) => {
      let N = !1;
      return !k && w === void 0 && (N = !0, x(S), D(S)), w !== void 0 && S >= w ? k.next(S - w) : (!N && x(S), f);
    }
  };
}
function hM(e, t, n) {
  const r = [], s = n || Ot.mix || Op, i = e.length - 1;
  for (let o = 0; o < i; o++) {
    let a = s(e[o], e[o + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[o] || st : t;
      a = Ir(l, a);
    }
    r.push(a);
  }
  return r;
}
function _M(e, t, { clamp: n = !0, ease: r, mixer: s } = {}) {
  const i = e.length;
  if (Ht(i === t.length, "Both input and output ranges must be the same length", "range-length"), i === 1)
    return () => t[0];
  if (i === 2 && t[0] === t[1])
    return () => t[1];
  const o = e[0] === e[1];
  e[0] > e[i - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const a = hM(t, r, s), l = a.length, u = (c) => {
    if (o && c < e[0])
      return t[0];
    let d = 0;
    if (l > 1)
      for (; d < e.length - 2 && !(c < e[d + 1]); d++)
        ;
    const f = /* @__PURE__ */ wr(e[d], e[d + 1], c);
    return a[d](f);
  };
  return n ? (c) => u($t(e[0], e[i - 1], c)) : u;
}
function vM(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const s = /* @__PURE__ */ wr(0, t, r);
    e.push(ke(n, 1, s));
  }
}
function gM(e) {
  const t = [0];
  return vM(t, e.length - 1), t;
}
function yM(e, t) {
  return e.map((n) => n * t);
}
function MM(e, t) {
  return e.map(() => t || kp).splice(0, e.length - 1);
}
function Tn({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
  const s = Py(r) ? r.map(jd) : jd(r), i = {
    done: !1,
    value: t[0]
  }, o = yM(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === t.length ? n : gM(t),
    e
  ), a = _M(o, t, {
    ease: Array.isArray(s) ? s : MM(t, s)
  });
  return {
    calculatedDuration: e,
    next: (l) => (i.value = a(l), i.done = l >= e, i)
  };
}
const bM = (e) => e !== null;
function oc(e, { repeat: t, repeatType: n = "loop" }, r, s = 1) {
  const i = e.filter(bM), a = s < 0 || t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
  return !a || r === void 0 ? i[a] : r;
}
const xM = {
  decay: Gl,
  inertia: Gl,
  tween: Tn,
  keyframes: Tn,
  spring: Eo
};
function Ip(e) {
  typeof e.type == "string" && (e.type = xM[e.type]);
}
class sc {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((t) => {
      this.resolve = t;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  /**
   * Allows the animation to be awaited.
   *
   * @deprecated Use `finished` instead.
   */
  then(t, n) {
    return this.finished.then(t, n);
  }
}
const wM = (e) => e / 100;
class ic extends sc {
  constructor(t) {
    super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.stop = () => {
      var r, s;
      const { motionValue: n } = this.options;
      n && n.updatedAt !== Ke.now() && this.tick(Ke.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), (s = (r = this.options).onStop) == null || s.call(r));
    }, this.options = t, this.initAnimation(), this.play(), t.autoplay === !1 && this.pause();
  }
  initAnimation() {
    const { options: t } = this;
    Ip(t);
    const { type: n = Tn, repeat: r = 0, repeatDelay: s = 0, repeatType: i, velocity: o = 0 } = t;
    let { keyframes: a } = t;
    const l = n || Tn;
    process.env.NODE_ENV !== "production" && l !== Tn && Ht(a.length <= 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${a}`, "spring-two-frames"), l !== Tn && typeof a[0] != "number" && (this.mixKeyframes = Ir(wM, Op(a[0], a[1])), a = [0, 100]);
    const u = l({ ...t, keyframes: a });
    i === "mirror" && (this.mirroredGenerator = l({
      ...t,
      keyframes: [...a].reverse(),
      velocity: -o
    })), u.calculatedDuration === null && (u.calculatedDuration = rc(u));
    const { calculatedDuration: c } = u;
    this.calculatedDuration = c, this.resolvedDuration = c + s, this.totalDuration = this.resolvedDuration * (r + 1) - s, this.generator = u;
  }
  updateTime(t) {
    const n = Math.round(t - this.startTime) * this.playbackSpeed;
    this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = n;
  }
  tick(t, n = !1) {
    const { generator: r, totalDuration: s, mixKeyframes: i, mirroredGenerator: o, resolvedDuration: a, calculatedDuration: l } = this;
    if (this.startTime === null)
      return r.next(0);
    const { delay: u = 0, keyframes: c, repeat: d, repeatType: f, repeatDelay: m, type: p, onUpdate: h, finalKeyframe: _ } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - s / this.speed, this.startTime)), n ? this.currentTime = t : this.updateTime(t);
    const v = this.currentTime - u * (this.playbackSpeed >= 0 ? 1 : -1), M = this.playbackSpeed >= 0 ? v < 0 : v > s;
    this.currentTime = Math.max(v, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = s);
    let y = this.currentTime, x = r;
    if (d) {
      const S = Math.min(this.currentTime, s) / a;
      let N = Math.floor(S), Y = S % 1;
      !Y && S >= 1 && (Y = 1), Y === 1 && N--, N = Math.min(N, d + 1), !!(N % 2) && (f === "reverse" ? (Y = 1 - Y, m && (Y -= m / a)) : f === "mirror" && (x = o)), y = $t(0, 1, Y) * a;
    }
    const w = M ? { done: !1, value: c[0] } : x.next(y);
    i && (w.value = i(w.value));
    let { done: k } = w;
    !M && l !== null && (k = this.playbackSpeed >= 0 ? this.currentTime >= s : this.currentTime <= 0);
    const D = this.holdTime === null && (this.state === "finished" || this.state === "running" && k);
    return D && p !== Gl && (w.value = oc(c, this.options, _, this.speed)), h && h(w.value), D && this.finish(), w;
  }
  /**
   * Allows the returned animation to be awaited or promise-chained. Currently
   * resolves when the animation finishes at all but in a future update could/should
   * reject if its cancels.
   */
  then(t, n) {
    return this.finished.then(t, n);
  }
  get duration() {
    return /* @__PURE__ */ ot(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: t = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ ot(t);
  }
  get time() {
    return /* @__PURE__ */ ot(this.currentTime);
  }
  set time(t) {
    var n;
    t = /* @__PURE__ */ mt(t), this.currentTime = t, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.playbackSpeed), (n = this.driver) == null || n.start(!1);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    this.updateTime(Ke.now());
    const n = this.playbackSpeed !== t;
    this.playbackSpeed = t, n && (this.time = /* @__PURE__ */ ot(this.currentTime));
  }
  play() {
    var s, i;
    if (this.isStopped)
      return;
    const { driver: t = iM, startTime: n } = this.options;
    this.driver || (this.driver = t((o) => this.tick(o))), (i = (s = this.options).onPlay) == null || i.call(s);
    const r = this.driver.now();
    this.state === "finished" ? (this.updateFinished(), this.startTime = r) : this.holdTime !== null ? this.startTime = r - this.holdTime : this.startTime || (this.startTime = n != null ? n : r), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    this.state = "paused", this.updateTime(Ke.now()), this.holdTime = this.currentTime;
  }
  complete() {
    this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null;
  }
  finish() {
    var t, n;
    this.notifyFinished(), this.teardown(), this.state = "finished", (n = (t = this.options).onComplete) == null || n.call(t);
  }
  cancel() {
    var t, n;
    this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), (n = (t = this.options).onCancel) == null || n.call(t);
  }
  teardown() {
    this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null;
  }
  stopDriver() {
    this.driver && (this.driver.stop(), this.driver = void 0);
  }
  sample(t) {
    return this.startTime = 0, this.tick(t, !0);
  }
  attachTimeline(t) {
    var n;
    return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), (n = this.driver) == null || n.stop(), t.observe(this);
  }
}
function YM(e) {
  var t;
  for (let n = 1; n < e.length; n++)
    (t = e[n]) != null || (e[n] = e[n - 1]);
}
const dn = (e) => e * 180 / Math.PI, Jl = (e) => {
  const t = dn(Math.atan2(e[1], e[0]));
  return ql(t);
}, LM = {
  x: 4,
  y: 5,
  translateX: 4,
  translateY: 5,
  scaleX: 0,
  scaleY: 3,
  scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
  rotate: Jl,
  rotateZ: Jl,
  skewX: (e) => dn(Math.atan(e[1])),
  skewY: (e) => dn(Math.atan(e[2])),
  skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2
}, ql = (e) => (e = e % 360, e < 0 && (e += 360), e), Od = Jl, Rd = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]), Nd = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]), SM = {
  x: 12,
  y: 13,
  z: 14,
  translateX: 12,
  translateY: 13,
  translateZ: 14,
  scaleX: Rd,
  scaleY: Nd,
  scale: (e) => (Rd(e) + Nd(e)) / 2,
  rotateX: (e) => ql(dn(Math.atan2(e[6], e[5]))),
  rotateY: (e) => ql(dn(Math.atan2(-e[2], e[0]))),
  rotateZ: Od,
  rotate: Od,
  skewX: (e) => dn(Math.atan(e[4])),
  skewY: (e) => dn(Math.atan(e[1])),
  skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2
};
function Xl(e) {
  return e.includes("scale") ? 1 : 0;
}
function Zl(e, t) {
  if (!e || e === "none")
    return Xl(t);
  const n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let r, s;
  if (n)
    r = SM, s = n;
  else {
    const a = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    r = LM, s = a;
  }
  if (!s)
    return Xl(t);
  const i = r[t], o = s[1].split(",").map(DM);
  return typeof i == "function" ? i(o) : o[i];
}
const kM = (e, t) => {
  const { transform: n = "none" } = getComputedStyle(e);
  return Zl(n, t);
};
function DM(e) {
  return parseFloat(e.trim());
}
const Jn = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
], qn = new Set(Jn), Id = (e) => e === Gn || e === ae, TM = /* @__PURE__ */ new Set(["x", "y", "z"]), EM = Jn.filter((e) => !TM.has(e));
function jM(e) {
  const t = [];
  return EM.forEach((n) => {
    const r = e.getValue(n);
    r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
  }), t;
}
const pn = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  // Transform
  x: (e, { transform: t }) => Zl(t, "x"),
  y: (e, { transform: t }) => Zl(t, "y")
};
pn.translateX = pn.x;
pn.translateY = pn.y;
const hn = /* @__PURE__ */ new Set();
let Ql = !1, eu = !1, tu = !1;
function Fp() {
  if (eu) {
    const e = Array.from(hn).filter((r) => r.needsMeasurement), t = new Set(e.map((r) => r.element)), n = /* @__PURE__ */ new Map();
    t.forEach((r) => {
      const s = jM(r);
      s.length && (n.set(r, s), r.render());
    }), e.forEach((r) => r.measureInitialState()), t.forEach((r) => {
      r.render();
      const s = n.get(r);
      s && s.forEach(([i, o]) => {
        var a;
        (a = r.getValue(i)) == null || a.set(o);
      });
    }), e.forEach((r) => r.measureEndState()), e.forEach((r) => {
      r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
    });
  }
  eu = !1, Ql = !1, hn.forEach((e) => e.complete(tu)), hn.clear();
}
function Vp() {
  hn.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (eu = !0);
  });
}
function PM() {
  tu = !0, Vp(), Fp(), tu = !1;
}
class ac {
  constructor(t, n, r, s, i, o = !1) {
    this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...t], this.onComplete = n, this.name = r, this.motionValue = s, this.element = i, this.isAsync = o;
  }
  scheduleResolve() {
    this.state = "scheduled", this.isAsync ? (hn.add(this), Ql || (Ql = !0, we.read(Vp), we.resolveKeyframes(Fp))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, name: n, element: r, motionValue: s } = this;
    if (t[0] === null) {
      const i = s == null ? void 0 : s.get(), o = t[t.length - 1];
      if (i !== void 0)
        t[0] = i;
      else if (r && n) {
        const a = r.readValue(n, o);
        a != null && (t[0] = a);
      }
      t[0] === void 0 && (t[0] = o), s && i === void 0 && s.set(t[0]);
    }
    YM(t);
  }
  setFinalKeyframe() {
  }
  measureInitialState() {
  }
  renderEndStyles() {
  }
  measureEndState() {
  }
  complete(t = !1) {
    this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t), hn.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (hn.delete(this), this.state = "pending");
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const AM = (e) => e.startsWith("--");
function CM(e, t, n) {
  AM(t) ? e.style.setProperty(t, n) : e.style[t] = n;
}
const $M = /* @__PURE__ */ Ku(() => window.ScrollTimeline !== void 0), HM = {};
function OM(e, t) {
  const n = /* @__PURE__ */ Ku(e);
  return () => {
    var r;
    return (r = HM[t]) != null ? r : n();
  };
}
const zp = /* @__PURE__ */ OM(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), cr = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, Fd = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ cr([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ cr([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ cr([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ cr([0.33, 1.53, 0.69, 0.99])
};
function Bp(e, t) {
  if (e)
    return typeof e == "function" ? zp() ? Rp(e, t) : "ease-out" : Dp(e) ? cr(e) : Array.isArray(e) ? e.map((n) => Bp(n, t) || Fd.easeOut) : Fd[e];
}
function RM(e, t, n, { delay: r = 0, duration: s = 300, repeat: i = 0, repeatType: o = "loop", ease: a = "easeOut", times: l } = {}, u = void 0) {
  const c = {
    [t]: n
  };
  l && (c.offset = l);
  const d = Bp(a, s);
  Array.isArray(d) && (c.easing = d);
  const f = {
    delay: r,
    duration: s,
    easing: Array.isArray(d) ? "linear" : d,
    fill: "both",
    iterations: i + 1,
    direction: o === "reverse" ? "alternate" : "normal"
  };
  return u && (f.pseudoElement = u), e.animate(c, f);
}
function Wp(e) {
  return typeof e == "function" && "applyToOptions" in e;
}
function NM({ type: e, ...t }) {
  var n, r;
  return Wp(e) && zp() ? e.applyToOptions(t) : ((n = t.duration) != null || (t.duration = 300), (r = t.ease) != null || (t.ease = "easeOut"), t);
}
class IM extends sc {
  constructor(t) {
    if (super(), this.finishedTime = null, this.isStopped = !1, !t)
      return;
    const { element: n, name: r, keyframes: s, pseudoElement: i, allowFlatten: o = !1, finalKeyframe: a, onComplete: l } = t;
    this.isPseudoElement = !!i, this.allowFlatten = o, this.options = t, Ht(typeof t.type != "string", `Mini animate() doesn't support "type" as a string.`, "mini-spring");
    const u = NM(t);
    this.animation = RM(n, r, s, u, i), u.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
      if (this.finishedTime = this.time, !i) {
        const c = oc(s, this.options, a, this.speed);
        this.updateMotionValue ? this.updateMotionValue(c) : CM(n, r, c), this.animation.cancel();
      }
      l == null || l(), this.notifyFinished();
    };
  }
  play() {
    this.isStopped || (this.animation.play(), this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    var t, n;
    (n = (t = this.animation).finish) == null || n.call(t);
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {
    }
  }
  stop() {
    if (this.isStopped)
      return;
    this.isStopped = !0;
    const { state: t } = this;
    t === "idle" || t === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel());
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * In this method, we commit styles back to the DOM before cancelling
   * the animation.
   *
   * This is designed to be overridden by NativeAnimationExtended, which
   * will create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to also correctly calculate velocity for any subsequent animation
   * while deferring the commit until the next animation frame.
   */
  commitStyles() {
    var t, n;
    this.isPseudoElement || (n = (t = this.animation).commitStyles) == null || n.call(t);
  }
  get duration() {
    var n, r;
    const t = ((r = (n = this.animation.effect) == null ? void 0 : n.getComputedTiming) == null ? void 0 : r.call(n).duration) || 0;
    return /* @__PURE__ */ ot(Number(t));
  }
  get iterationDuration() {
    const { delay: t = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ ot(t);
  }
  get time() {
    return /* @__PURE__ */ ot(Number(this.animation.currentTime) || 0);
  }
  set time(t) {
    this.finishedTime = null, this.animation.currentTime = /* @__PURE__ */ mt(t);
  }
  /**
   * The playback speed of the animation.
   * 1 = normal speed, 2 = double speed, 0.5 = half speed.
   */
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(t) {
    t < 0 && (this.finishedTime = null), this.animation.playbackRate = t;
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return Number(this.animation.startTime);
  }
  set startTime(t) {
    this.animation.startTime = t;
  }
  /**
   * Attaches a timeline to the animation, for instance the `ScrollTimeline`.
   */
  attachTimeline({ timeline: t, observe: n }) {
    var r;
    return this.allowFlatten && ((r = this.animation.effect) == null || r.updateTiming({ easing: "linear" })), this.animation.onfinish = null, t && $M() ? (this.animation.timeline = t, st) : n(this);
  }
}
const Up = {
  anticipate: Yp,
  backInOut: wp,
  circInOut: Sp
};
function FM(e) {
  return e in Up;
}
function VM(e) {
  typeof e.ease == "string" && FM(e.ease) && (e.ease = Up[e.ease]);
}
const Vd = 10;
class zM extends IM {
  constructor(t) {
    VM(t), Ip(t), super(t), t.startTime && (this.startTime = t.startTime), this.options = t;
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * Rather than read commited styles back out of the DOM, we can
   * create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to calculate velocity for any subsequent animation.
   */
  updateMotionValue(t) {
    var u;
    const { motionValue: n, onUpdate: r, onComplete: s, element: i, ...o } = this.options;
    if (!n)
      return;
    if (t !== void 0) {
      n.set(t);
      return;
    }
    const a = new ic({
      ...o,
      autoplay: !1
    }), l = /* @__PURE__ */ mt((u = this.finishedTime) != null ? u : this.time);
    n.setWithVelocity(a.sample(l - Vd).value, a.sample(l).value, Vd), a.stop();
  }
}
const zd = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && // It's animatable if we have a string
(Xt.test(e) || e === "0") && // And it contains numbers and/or colors
!e.startsWith("url("));
function BM(e) {
  const t = e[0];
  if (e.length === 1)
    return !0;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t)
      return !0;
}
function WM(e, t, n, r) {
  const s = e[0];
  if (s === null)
    return !1;
  if (t === "display" || t === "visibility")
    return !0;
  const i = e[e.length - 1], o = zd(s, t), a = zd(i, t);
  return Kn(o === a, `You are trying to animate ${t} from "${s}" to "${i}". "${o ? i : s}" is not an animatable value.`, "value-not-animatable"), !o || !a ? !1 : BM(e) || (n === "spring" || Wp(n)) && r;
}
function nu(e) {
  e.duration = 0, e.type = "keyframes";
}
const UM = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Could be re-enabled now we have support for linear() easing
  // "background-color"
]), KM = /* @__PURE__ */ Ku(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function GM(e) {
  var c;
  const { motionValue: t, name: n, repeatDelay: r, repeatType: s, damping: i, type: o } = e;
  if (!(((c = t == null ? void 0 : t.owner) == null ? void 0 : c.current) instanceof HTMLElement))
    return !1;
  const { onUpdate: l, transformTemplate: u } = t.owner.getProps();
  return KM() && n && UM.has(n) && (n !== "transform" || !u) && /**
   * If we're outputting values to onUpdate then we can't use WAAPI as there's
   * no way to read the value from WAAPI every frame.
   */
  !l && !r && s !== "mirror" && i !== 0 && o !== "inertia";
}
const JM = 40;
class qM extends sc {
  constructor({ autoplay: t = !0, delay: n = 0, type: r = "keyframes", repeat: s = 0, repeatDelay: i = 0, repeatType: o = "loop", keyframes: a, name: l, motionValue: u, element: c, ...d }) {
    var p;
    super(), this.stop = () => {
      var h, _;
      this._animation && (this._animation.stop(), (h = this.stopTimeline) == null || h.call(this)), (_ = this.keyframeResolver) == null || _.cancel();
    }, this.createdAt = Ke.now();
    const f = {
      autoplay: t,
      delay: n,
      type: r,
      repeat: s,
      repeatDelay: i,
      repeatType: o,
      name: l,
      motionValue: u,
      element: c,
      ...d
    }, m = (c == null ? void 0 : c.KeyframeResolver) || ac;
    this.keyframeResolver = new m(a, (h, _, v) => this.onKeyframesResolved(h, _, f, !v), l, u, c), (p = this.keyframeResolver) == null || p.scheduleResolve();
  }
  onKeyframesResolved(t, n, r, s) {
    this.keyframeResolver = void 0;
    const { name: i, type: o, velocity: a, delay: l, isHandoff: u, onUpdate: c } = r;
    this.resolvedAt = Ke.now(), WM(t, i, o, a) || ((Ot.instantAnimations || !l) && (c == null || c(oc(t, r, n))), t[0] = t[t.length - 1], nu(r), r.repeat = 0);
    const f = {
      startTime: s ? this.resolvedAt ? this.resolvedAt - this.createdAt > JM ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
      finalKeyframe: n,
      ...r,
      keyframes: t
    }, m = !u && GM(f) ? new zM({
      ...f,
      element: f.motionValue.owner.current
    }) : new ic(f);
    m.finished.then(() => this.notifyFinished()).catch(st), this.pendingTimeline && (this.stopTimeline = m.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = m;
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(t, n) {
    return this.finished.finally(t).then(() => {
    });
  }
  get animation() {
    var t;
    return this._animation || ((t = this.keyframeResolver) == null || t.resume(), PM()), this._animation;
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(t) {
    this.animation.time = t;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(t) {
    this.animation.speed = t;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(t) {
    return this._animation ? this.stopTimeline = this.animation.attachTimeline(t) : this.pendingTimeline = t, () => this.stop();
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    var t;
    this._animation && this.animation.cancel(), (t = this.keyframeResolver) == null || t.cancel();
  }
}
const XM = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function ZM(e) {
  const t = XM.exec(e);
  if (!t)
    return [,];
  const [, n, r, s] = t;
  return [`--${n != null ? n : r}`, s];
}
const QM = 4;
function Kp(e, t, n = 1) {
  Ht(n <= QM, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
  const [r, s] = ZM(e);
  if (!r)
    return;
  const i = window.getComputedStyle(t).getPropertyValue(r);
  if (i) {
    const o = i.trim();
    return hp(o) ? parseFloat(o) : o;
  }
  return Qu(s) ? Kp(s, t, n + 1) : s;
}
function lc(e, t) {
  var n, r;
  return (r = (n = e == null ? void 0 : e[t]) != null ? n : e == null ? void 0 : e.default) != null ? r : e;
}
const Gp = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...Jn
]), eb = {
  test: (e) => e === "auto",
  parse: (e) => e
}, Jp = (e) => (t) => t.test(e), qp = [Gn, ae, yt, Wt, By, zy, eb], Bd = (e) => qp.find(Jp(e));
function tb(e) {
  return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || vp(e) : !0;
}
const nb = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function rb(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [r] = n.match(ec) || [];
  if (!r)
    return e;
  const s = n.replace(r, "");
  let i = nb.has(t) ? 1 : 0;
  return r !== n && (i *= 100), t + "(" + i + s + ")";
}
const ob = /\b([a-z-]*)\(.*?\)/gu, ru = {
  ...Xt,
  getAnimatableNone: (e) => {
    const t = e.match(ob);
    return t ? t.map(rb).join(" ") : e;
  }
}, Wd = {
  ...Gn,
  transform: Math.round
}, sb = {
  rotate: Wt,
  rotateX: Wt,
  rotateY: Wt,
  rotateZ: Wt,
  scale: so,
  scaleX: so,
  scaleY: so,
  scaleZ: so,
  skew: Wt,
  skewX: Wt,
  skewY: Wt,
  distance: ae,
  translateX: ae,
  translateY: ae,
  translateZ: ae,
  x: ae,
  y: ae,
  z: ae,
  perspective: ae,
  transformPerspective: ae,
  opacity: Yr,
  originX: Pd,
  originY: Pd,
  originZ: ae
}, uc = {
  // Border props
  borderWidth: ae,
  borderTopWidth: ae,
  borderRightWidth: ae,
  borderBottomWidth: ae,
  borderLeftWidth: ae,
  borderRadius: ae,
  radius: ae,
  borderTopLeftRadius: ae,
  borderTopRightRadius: ae,
  borderBottomRightRadius: ae,
  borderBottomLeftRadius: ae,
  // Positioning props
  width: ae,
  maxWidth: ae,
  height: ae,
  maxHeight: ae,
  top: ae,
  right: ae,
  bottom: ae,
  left: ae,
  // Spacing props
  padding: ae,
  paddingTop: ae,
  paddingRight: ae,
  paddingBottom: ae,
  paddingLeft: ae,
  margin: ae,
  marginTop: ae,
  marginRight: ae,
  marginBottom: ae,
  marginLeft: ae,
  // Misc
  backgroundPositionX: ae,
  backgroundPositionY: ae,
  ...sb,
  zIndex: Wd,
  // SVG
  fillOpacity: Yr,
  strokeOpacity: Yr,
  numOctaves: Wd
}, ib = {
  ...uc,
  // Color props
  color: Pe,
  backgroundColor: Pe,
  outlineColor: Pe,
  fill: Pe,
  stroke: Pe,
  // Border props
  borderColor: Pe,
  borderTopColor: Pe,
  borderRightColor: Pe,
  borderBottomColor: Pe,
  borderLeftColor: Pe,
  filter: ru,
  WebkitFilter: ru
}, Xp = (e) => ib[e];
function Zp(e, t) {
  let n = Xp(e);
  return n !== ru && (n = Xt), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
const ab = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function lb(e, t, n) {
  let r = 0, s;
  for (; r < e.length && !s; ) {
    const i = e[r];
    typeof i == "string" && !ab.has(i) && Lr(i).values.length && (s = e[r]), r++;
  }
  if (s && n)
    for (const i of t)
      e[i] = Zp(n, s);
}
class ub extends ac {
  constructor(t, n, r, s, i) {
    super(t, n, r, s, i, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current)
      return;
    super.readKeyframes();
    for (let l = 0; l < t.length; l++) {
      let u = t[l];
      if (typeof u == "string" && (u = u.trim(), Qu(u))) {
        const c = Kp(u, n.current);
        c !== void 0 && (t[l] = c), l === t.length - 1 && (this.finalKeyframe = u);
      }
    }
    if (this.resolveNoneKeyframes(), !Gp.has(r) || t.length !== 2)
      return;
    const [s, i] = t, o = Bd(s), a = Bd(i);
    if (o !== a)
      if (Id(o) && Id(a))
        for (let l = 0; l < t.length; l++) {
          const u = t[l];
          typeof u == "string" && (t[l] = parseFloat(u));
        }
      else pn[r] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this, r = [];
    for (let s = 0; s < t.length; s++)
      (t[s] === null || tb(t[s])) && r.push(s);
    r.length && lb(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current)
      return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = pn[r](t.measureViewportBox(), window.getComputedStyle(t.current)), n[0] = this.measuredOrigin;
    const s = n[n.length - 1];
    s !== void 0 && t.getValue(r, s).jump(s, !1);
  }
  measureEndState() {
    var a;
    const { element: t, name: n, unresolvedKeyframes: r } = this;
    if (!t || !t.current)
      return;
    const s = t.getValue(n);
    s && s.jump(this.measuredOrigin, !1);
    const i = r.length - 1, o = r[i];
    r[i] = pn[n](t.measureViewportBox(), window.getComputedStyle(t.current)), o !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = o), (a = this.removedTransforms) != null && a.length && this.removedTransforms.forEach(([l, u]) => {
      t.getValue(l).set(u);
    }), this.resolveNoneKeyframes();
  }
}
function cb(e, t, n) {
  var r;
  if (e instanceof EventTarget)
    return [e];
  if (typeof e == "string") {
    let s = document;
    const i = (r = n == null ? void 0 : n[e]) != null ? r : s.querySelectorAll(e);
    return i ? Array.from(i) : [];
  }
  return Array.from(e);
}
const Qp = (e, t) => t && typeof e == "number" ? t.transform(e) : e;
function eh(e) {
  return _p(e) && "offsetHeight" in e;
}
const Ud = 30, db = (e) => !isNaN(parseFloat(e));
class fb {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   */
  constructor(t, n = {}) {
    this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (r) => {
      var i;
      const s = Ke.now();
      if (this.updatedAt !== s && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(r), this.current !== this.prev && ((i = this.events.change) == null || i.notify(this.current), this.dependents))
        for (const o of this.dependents)
          o.dirty();
    }, this.hasAnimated = !1, this.setCurrent(t), this.owner = n.owner;
  }
  setCurrent(t) {
    this.current = t, this.updatedAt = Ke.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = db(this.current));
  }
  setPrevFrameValue(t = this.current) {
    this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(t) {
    return process.env.NODE_ENV !== "production" && Ju(!1, 'value.onChange(callback) is deprecated. Switch to value.on("change", callback).'), this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new Gu());
    const r = this.events[t].add(n);
    return t === "change" ? () => {
      r(), we.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : r;
  }
  clearListeners() {
    for (const t in this.events)
      this.events[t].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   */
  attach(t, n) {
    this.passiveEffect = t, this.stopPassiveEffect = n;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(t) {
    this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t);
  }
  setWithVelocity(t, n, r) {
    this.set(n), this.prev = void 0, this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt - r;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(t, n = !0) {
    this.updateAndNotify(t), this.prev = t, this.prevUpdatedAt = this.prevFrameValue = void 0, n && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  dirty() {
    var t;
    (t = this.events.change) == null || t.notify(this.current);
  }
  addDependent(t) {
    this.dependents || (this.dependents = /* @__PURE__ */ new Set()), this.dependents.add(t);
  }
  removeDependent(t) {
    this.dependents && this.dependents.delete(t);
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    return this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    const t = Ke.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > Ud)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, Ud);
    return gp(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   */
  start(t) {
    return this.stop(), new Promise((n) => {
      this.hasAnimated = !0, this.animation = t(n), this.events.animationStart && this.events.animationStart.notify();
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
    });
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    var t, n;
    (t = this.dependents) == null || t.clear(), (n = this.events.destroy) == null || n.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function Fn(e, t) {
  return new fb(e, t);
}
const { schedule: cc } = /* @__PURE__ */ Tp(queueMicrotask, !1), ut = {
  x: !1,
  y: !1
};
function th() {
  return ut.x || ut.y;
}
function mb(e) {
  return e === "x" || e === "y" ? ut[e] ? null : (ut[e] = !0, () => {
    ut[e] = !1;
  }) : ut.x || ut.y ? null : (ut.x = ut.y = !0, () => {
    ut.x = ut.y = !1;
  });
}
function nh(e, t) {
  const n = cb(e), r = new AbortController(), s = {
    passive: !0,
    ...t,
    signal: r.signal
  };
  return [n, s, () => r.abort()];
}
function Kd(e) {
  return !(e.pointerType === "touch" || th());
}
function pb(e, t, n = {}) {
  const [r, s, i] = nh(e, n), o = (a) => {
    if (!Kd(a))
      return;
    const { target: l } = a, u = t(l, a);
    if (typeof u != "function" || !l)
      return;
    const c = (d) => {
      Kd(d) && (u(d), l.removeEventListener("pointerleave", c));
    };
    l.addEventListener("pointerleave", c, s);
  };
  return r.forEach((a) => {
    a.addEventListener("pointerenter", o, s);
  }), i;
}
const rh = (e, t) => t ? e === t ? !0 : rh(e, t.parentElement) : !1, dc = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1, hb = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function _b(e) {
  return hb.has(e.tagName) || e.tabIndex !== -1;
}
const bo = /* @__PURE__ */ new WeakSet();
function Gd(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function al(e, t) {
  e.dispatchEvent(new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 }));
}
const vb = (e, t) => {
  const n = e.currentTarget;
  if (!n)
    return;
  const r = Gd(() => {
    if (bo.has(n))
      return;
    al(n, "down");
    const s = Gd(() => {
      al(n, "up");
    }), i = () => al(n, "cancel");
    n.addEventListener("keyup", s, t), n.addEventListener("blur", i, t);
  });
  n.addEventListener("keydown", r, t), n.addEventListener("blur", () => n.removeEventListener("keydown", r), t);
};
function Jd(e) {
  return dc(e) && !th();
}
function gb(e, t, n = {}) {
  const [r, s, i] = nh(e, n), o = (a) => {
    const l = a.currentTarget;
    if (!Jd(a))
      return;
    bo.add(l);
    const u = t(l, a), c = (m, p) => {
      window.removeEventListener("pointerup", d), window.removeEventListener("pointercancel", f), bo.has(l) && bo.delete(l), Jd(m) && typeof u == "function" && u(m, { success: p });
    }, d = (m) => {
      c(m, l === window || l === document || n.useGlobalTarget || rh(l, m.target));
    }, f = (m) => {
      c(m, !1);
    };
    window.addEventListener("pointerup", d, s), window.addEventListener("pointercancel", f, s);
  };
  return r.forEach((a) => {
    (n.useGlobalTarget ? window : a).addEventListener("pointerdown", o, s), eh(a) && (a.addEventListener("focus", (u) => vb(u, s)), !_b(a) && !a.hasAttribute("tabindex") && (a.tabIndex = 0));
  }), i;
}
function oh(e) {
  return _p(e) && "ownerSVGElement" in e;
}
function yb(e) {
  return oh(e) && e.tagName === "svg";
}
const Ie = (e) => !!(e && e.getVelocity), Mb = [...qp, Pe, Xt], bb = (e) => Mb.find(Jp(e)), fc = ge({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
});
function qd(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function xb(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((s) => {
      const i = qd(s, t);
      return !n && typeof i == "function" && (n = !0), i;
    });
    if (n)
      return () => {
        for (let s = 0; s < r.length; s++) {
          const i = r[s];
          typeof i == "function" ? i() : qd(e[s], null);
        }
      };
  };
}
function wb(...e) {
  return b.useCallback(xb(...e), e);
}
class Yb extends b.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const r = n.offsetParent, s = eh(r) && r.offsetWidth || 0, i = this.props.sizeRef.current;
      i.height = n.offsetHeight || 0, i.width = n.offsetWidth || 0, i.top = n.offsetTop, i.left = n.offsetLeft, i.right = s - i.width - i.left;
    }
    return null;
  }
  /**
   * Required with getSnapshotBeforeUpdate to stop React complaining.
   */
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
}
function Lb({ children: e, isPresent: t, anchorX: n, root: r }) {
  const s = je(), i = q(null), o = q({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    right: 0
  }), { nonce: a } = re(fc), l = wb(i, e == null ? void 0 : e.ref);
  return up(() => {
    const { width: u, height: c, top: d, left: f, right: m } = o.current;
    if (t || !i.current || !u || !c)
      return;
    const p = n === "left" ? `left: ${f}` : `right: ${m}`;
    i.current.dataset.motionPopId = s;
    const h = document.createElement("style");
    a && (h.nonce = a);
    const _ = r != null ? r : document.head;
    return _.appendChild(h), h.sheet && h.sheet.insertRule(`
          [data-motion-pop-id="${s}"] {
            position: absolute !important;
            width: ${u}px !important;
            height: ${c}px !important;
            ${p}px !important;
            top: ${d}px !important;
          }
        `), () => {
      _.contains(h) && _.removeChild(h);
    };
  }, [t]), g.jsx(Yb, { isPresent: t, childRef: i, sizeRef: o, children: b.cloneElement(e, { ref: l }) });
}
const Sb = ({ children: e, initial: t, isPresent: n, onExitComplete: r, custom: s, presenceAffectsLayout: i, mode: o, anchorX: a, root: l }) => {
  const u = zu(kb), c = je();
  let d = !0, f = pe(() => (d = !1, {
    id: c,
    initial: t,
    isPresent: n,
    custom: s,
    onExitComplete: (m) => {
      u.set(m, !0);
      for (const p of u.values())
        if (!p)
          return;
      r && r();
    },
    register: (m) => (u.set(m, !1), () => u.delete(m))
  }), [n, u, r]);
  return i && d && (f = { ...f }), pe(() => {
    u.forEach((m, p) => u.set(p, !1));
  }, [n]), b.useEffect(() => {
    !n && !u.size && r && r();
  }, [n]), o === "popLayout" && (e = g.jsx(Lb, { isPresent: n, anchorX: a, root: l, children: e })), g.jsx(xa.Provider, { value: f, children: e });
};
function kb() {
  return /* @__PURE__ */ new Map();
}
function sh(e = !0) {
  const t = re(xa);
  if (t === null)
    return [!0, null];
  const { isPresent: n, onExitComplete: r, register: s } = t, i = je();
  ue(() => {
    if (e)
      return s(i);
  }, [e]);
  const o = X(() => e && r && r(i), [i, r, e]);
  return !n && r ? [!1, o] : [!0];
}
const io = (e) => e.key || "";
function Xd(e) {
  const t = [];
  return gy.forEach(e, (n) => {
    ba(n) && t.push(n);
  }), t;
}
const mc = ({ children: e, custom: t, initial: n = !0, onExitComplete: r, presenceAffectsLayout: s = !0, mode: i = "sync", propagate: o = !1, anchorX: a = "left", root: l }) => {
  const [u, c] = sh(o), d = pe(() => Xd(e), [e]), f = o && !u ? [] : d.map(io), m = q(!0), p = q(d), h = zu(() => /* @__PURE__ */ new Map()), [_, v] = oe(d), [M, y] = oe(d);
  pp(() => {
    m.current = !1, p.current = d;
    for (let k = 0; k < M.length; k++) {
      const D = io(M[k]);
      f.includes(D) ? h.delete(D) : h.get(D) !== !0 && h.set(D, !1);
    }
  }, [M, f.length, f.join("-")]);
  const x = [];
  if (d !== _) {
    let k = [...d];
    for (let D = 0; D < M.length; D++) {
      const S = M[D], N = io(S);
      f.includes(N) || (k.splice(D, 0, S), x.push(S));
    }
    return i === "wait" && x.length && (k = x), y(Xd(k)), v(d), null;
  }
  process.env.NODE_ENV !== "production" && i === "wait" && M.length > 1 && console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`);
  const { forceRender: w } = re(Vu);
  return g.jsx(g.Fragment, { children: M.map((k) => {
    const D = io(k), S = o && !u ? !1 : d === M || f.includes(D), N = () => {
      if (h.has(D))
        h.set(D, !0);
      else
        return;
      let Y = !0;
      h.forEach(($) => {
        $ || (Y = !1);
      }), Y && (w == null || w(), y(p.current), o && (c == null || c()), r && r());
    };
    return g.jsx(Sb, { isPresent: S, initial: !m.current || n ? void 0 : !1, custom: t, presenceAffectsLayout: s, mode: i, root: l, onExitComplete: S ? void 0 : N, anchorX: a, children: k }, D);
  }) });
}, ih = ge({ strict: !1 }), Zd = {
  animation: [
    "animate",
    "variants",
    "whileHover",
    "whileTap",
    "exit",
    "whileInView",
    "whileFocus",
    "whileDrag"
  ],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
}, Vn = {};
for (const e in Zd)
  Vn[e] = {
    isEnabled: (t) => Zd[e].some((n) => !!t[n])
  };
function Db(e) {
  for (const t in e)
    Vn[t] = {
      ...Vn[t],
      ...e[t]
    };
}
const Tb = /* @__PURE__ */ new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport"
]);
function jo(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || Tb.has(e);
}
let ah = (e) => !jo(e);
function Eb(e) {
  typeof e == "function" && (ah = (t) => t.startsWith("on") ? !jo(t) : e(t));
}
try {
  Eb(require("@emotion/is-prop-valid").default);
} catch {
}
function jb(e, t, n) {
  const r = {};
  for (const s in e)
    s === "values" && typeof e.values == "object" || (ah(s) || n === !0 && jo(s) || !t && !jo(s) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && s.startsWith("onDrag")) && (r[s] = e[s]);
  return r;
}
const wa = /* @__PURE__ */ ge({});
function Ya(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
function Sr(e) {
  return typeof e == "string" || Array.isArray(e);
}
const pc = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], hc = ["initial", ...pc];
function La(e) {
  return Ya(e.animate) || hc.some((t) => Sr(e[t]));
}
function lh(e) {
  return !!(La(e) || e.variants);
}
function Pb(e, t) {
  if (La(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || Sr(n) ? n : void 0,
      animate: Sr(r) ? r : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function Ab(e) {
  const { initial: t, animate: n } = Pb(e, re(wa));
  return pe(() => ({ initial: t, animate: n }), [Qd(t), Qd(n)]);
}
function Qd(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const kr = {};
function Cb(e) {
  for (const t in e)
    kr[t] = e[t], Zu(t) && (kr[t].isCSSVariable = !0);
}
function uh(e, { layout: t, layoutId: n }) {
  return qn.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!kr[e] || e === "opacity");
}
const $b = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, Hb = Jn.length;
function Ob(e, t, n) {
  let r = "", s = !0;
  for (let i = 0; i < Hb; i++) {
    const o = Jn[i], a = e[o];
    if (a === void 0)
      continue;
    let l = !0;
    if (typeof a == "number" ? l = a === (o.startsWith("scale") ? 1 : 0) : l = parseFloat(a) === 0, !l || n) {
      const u = Qp(a, uc[o]);
      if (!l) {
        s = !1;
        const c = $b[o] || o;
        r += `${c}(${u}) `;
      }
      n && (t[o] = u);
    }
  }
  return r = r.trim(), n ? r = n(t, s ? "" : r) : s && (r = "none"), r;
}
function _c(e, t, n) {
  const { style: r, vars: s, transformOrigin: i } = e;
  let o = !1, a = !1;
  for (const l in t) {
    const u = t[l];
    if (qn.has(l)) {
      o = !0;
      continue;
    } else if (Zu(l)) {
      s[l] = u;
      continue;
    } else {
      const c = Qp(u, uc[l]);
      l.startsWith("origin") ? (a = !0, i[l] = c) : r[l] = c;
    }
  }
  if (t.transform || (o || n ? r.transform = Ob(t, e.transform, n) : r.transform && (r.transform = "none")), a) {
    const { originX: l = "50%", originY: u = "50%", originZ: c = 0 } = i;
    r.transformOrigin = `${l} ${u} ${c}`;
  }
}
const vc = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function ch(e, t, n) {
  for (const r in t)
    !Ie(t[r]) && !uh(r, n) && (e[r] = t[r]);
}
function Rb({ transformTemplate: e }, t) {
  return pe(() => {
    const n = vc();
    return _c(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function Nb(e, t) {
  const n = e.style || {}, r = {};
  return ch(r, n, e), Object.assign(r, Rb(e, t)), r;
}
function Ib(e, t) {
  const n = {}, r = Nb(e, t);
  return e.drag && e.dragListener !== !1 && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = r, n;
}
const Fb = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, Vb = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function zb(e, t, n = 1, r = 0, s = !0) {
  e.pathLength = 1;
  const i = s ? Fb : Vb;
  e[i.offset] = ae.transform(-r);
  const o = ae.transform(t), a = ae.transform(n);
  e[i.array] = `${o} ${a}`;
}
function dh(e, {
  attrX: t,
  attrY: n,
  attrScale: r,
  pathLength: s,
  pathSpacing: i = 1,
  pathOffset: o = 0,
  // This is object creation, which we try to avoid per-frame.
  ...a
}, l, u, c) {
  var m, p;
  if (_c(e, a, u), l) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: d, style: f } = e;
  d.transform && (f.transform = d.transform, delete d.transform), (f.transform || d.transformOrigin) && (f.transformOrigin = (m = d.transformOrigin) != null ? m : "50% 50%", delete d.transformOrigin), f.transform && (f.transformBox = (p = c == null ? void 0 : c.transformBox) != null ? p : "fill-box", delete d.transformBox), t !== void 0 && (d.x = t), n !== void 0 && (d.y = n), r !== void 0 && (d.scale = r), s !== void 0 && zb(d, s, i, o, !1);
}
const fh = () => ({
  ...vc(),
  attrs: {}
}), mh = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function Bb(e, t, n, r) {
  const s = pe(() => {
    const i = fh();
    return dh(i, t, mh(r), e.transformTemplate, e.style), {
      ...i.attrs,
      style: { ...i.style }
    };
  }, [t]);
  if (e.style) {
    const i = {};
    ch(i, e.style, e), s.style = { ...i, ...s.style };
  }
  return s;
}
const Wb = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];
function gc(e) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof e != "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    e.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!(Wb.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(e))
    )
  );
}
function Ub(e, t, n, { latestValues: r }, s, i = !1) {
  const a = (gc(e) ? Bb : Ib)(t, r, s, e), l = jb(t, typeof e == "string", i), u = e !== Ae ? { ...l, ...a, ref: n } : {}, { children: c } = t, d = pe(() => Ie(c) ? c.get() : c, [c]);
  return cp(e, {
    ...u,
    children: d
  });
}
function ef(e) {
  const t = [{}, {}];
  return e == null || e.values.forEach((n, r) => {
    t[0][r] = n.get(), t[1][r] = n.getVelocity();
  }), t;
}
function yc(e, t, n, r) {
  if (typeof t == "function") {
    const [s, i] = ef(r);
    t = t(n !== void 0 ? n : e.custom, s, i);
  }
  if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
    const [s, i] = ef(r);
    t = t(n !== void 0 ? n : e.custom, s, i);
  }
  return t;
}
function xo(e) {
  return Ie(e) ? e.get() : e;
}
function Kb({ scrapeMotionValuesFromProps: e, createRenderState: t }, n, r, s) {
  return {
    latestValues: Gb(n, r, s, e),
    renderState: t()
  };
}
function Gb(e, t, n, r) {
  const s = {}, i = r(e, {});
  for (const f in i)
    s[f] = xo(i[f]);
  let { initial: o, animate: a } = e;
  const l = La(e), u = lh(e);
  t && u && !l && e.inherit !== !1 && (o === void 0 && (o = t.initial), a === void 0 && (a = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || o === !1;
  const d = c ? a : o;
  if (d && typeof d != "boolean" && !Ya(d)) {
    const f = Array.isArray(d) ? d : [d];
    for (let m = 0; m < f.length; m++) {
      const p = yc(e, f[m]);
      if (p) {
        const { transitionEnd: h, transition: _, ...v } = p;
        for (const M in v) {
          let y = v[M];
          if (Array.isArray(y)) {
            const x = c ? y.length - 1 : 0;
            y = y[x];
          }
          y !== null && (s[M] = y);
        }
        for (const M in h)
          s[M] = h[M];
      }
    }
  }
  return s;
}
const ph = (e) => (t, n) => {
  const r = re(wa), s = re(xa), i = () => Kb(e, t, r, s);
  return n ? i() : zu(i);
};
function Mc(e, t, n) {
  var i;
  const { style: r } = e, s = {};
  for (const o in r)
    (Ie(r[o]) || t.style && Ie(t.style[o]) || uh(o, e) || ((i = n == null ? void 0 : n.getValue(o)) == null ? void 0 : i.liveStyle) !== void 0) && (s[o] = r[o]);
  return s;
}
const Jb = /* @__PURE__ */ ph({
  scrapeMotionValuesFromProps: Mc,
  createRenderState: vc
});
function hh(e, t, n) {
  const r = Mc(e, t, n);
  for (const s in e)
    if (Ie(e[s]) || Ie(t[s])) {
      const i = Jn.indexOf(s) !== -1 ? "attr" + s.charAt(0).toUpperCase() + s.substring(1) : s;
      r[i] = e[s];
    }
  return r;
}
const qb = /* @__PURE__ */ ph({
  scrapeMotionValuesFromProps: hh,
  createRenderState: fh
}), Xb = Symbol.for("motionComponentSymbol");
function En(e) {
  return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function Zb(e, t, n) {
  return X(
    (r) => {
      r && e.onMount && e.onMount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : En(n) && (n.current = r));
    },
    /**
     * Include externalRef in dependencies to ensure the callback updates
     * when the ref changes, allowing proper ref forwarding.
     */
    [t]
  );
}
const bc = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), Qb = "framerAppearId", _h = "data-" + bc(Qb), vh = ge({});
function ex(e, t, n, r, s) {
  var h, _;
  const { visualElement: i } = re(wa), o = re(ih), a = re(xa), l = re(fc).reducedMotion, u = q(null);
  r = r || o.renderer, !u.current && r && (u.current = r(e, {
    visualState: t,
    parent: i,
    props: n,
    presenceContext: a,
    blockInitialAnimation: a ? a.initial === !1 : !1,
    reducedMotionConfig: l
  }));
  const c = u.current, d = re(vh);
  c && !c.projection && s && (c.type === "html" || c.type === "svg") && tx(u.current, n, s, d);
  const f = q(!1);
  up(() => {
    c && f.current && c.update(n, a);
  });
  const m = n[_h], p = q(!!m && !((h = window.MotionHandoffIsComplete) != null && h.call(window, m)) && ((_ = window.MotionHasOptimisedAnimation) == null ? void 0 : _.call(window, m)));
  return pp(() => {
    c && (f.current = !0, window.MotionIsMounted = !0, c.updateFeatures(), c.scheduleRenderMicrotask(), p.current && c.animationState && c.animationState.animateChanges());
  }), ue(() => {
    c && (!p.current && c.animationState && c.animationState.animateChanges(), p.current && (queueMicrotask(() => {
      var v;
      (v = window.MotionHandoffMarkAsComplete) == null || v.call(window, m);
    }), p.current = !1), c.enteringChildren = void 0);
  }), c;
}
function tx(e, t, n, r) {
  const { layoutId: s, layout: i, drag: o, dragConstraints: a, layoutScroll: l, layoutRoot: u, layoutCrossfade: c } = t;
  e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : gh(e.parent)), e.projection.setOptions({
    layoutId: s,
    layout: i,
    alwaysMeasureLayout: !!o || a && En(a),
    visualElement: e,
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof i == "string" ? i : "both",
    initialPromotionConfig: r,
    crossfade: c,
    layoutScroll: l,
    layoutRoot: u
  });
}
function gh(e) {
  if (e)
    return e.options.allowProjection !== !1 ? e.projection : gh(e.parent);
}
function ll(e, { forwardMotionProps: t = !1 } = {}, n, r) {
  var a, l;
  n && Db(n);
  const s = gc(e) ? qb : Jb;
  function i(u, c) {
    let d;
    const f = {
      ...re(fc),
      ...u,
      layoutId: nx(u)
    }, { isStatic: m } = f, p = Ab(u), h = s(u, m);
    if (!m && Bu) {
      rx(f, n);
      const _ = ox(f);
      d = _.MeasureLayout, p.visualElement = ex(e, h, f, r, _.ProjectionNode);
    }
    return g.jsxs(wa.Provider, { value: p, children: [d && p.visualElement ? g.jsx(d, { visualElement: p.visualElement, ...f }) : null, Ub(e, u, Zb(h, p.visualElement, c), h, m, t)] });
  }
  i.displayName = `motion.${typeof e == "string" ? e : `create(${(l = (a = e.displayName) != null ? a : e.name) != null ? l : ""})`}`;
  const o = Nr(i);
  return o[Xb] = e, o;
}
function nx({ layoutId: e }) {
  const t = re(Vu).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function rx(e, t) {
  const n = re(ih).strict;
  if (process.env.NODE_ENV !== "production" && t && n) {
    const r = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
    e.ignoreStrict ? Kn(!1, r, "lazy-strict-mode") : Ht(!1, r, "lazy-strict-mode");
  }
}
function ox(e) {
  const { drag: t, layout: n } = Vn;
  if (!t && !n)
    return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout: t != null && t.isEnabled(e) || n != null && n.isEnabled(e) ? r.MeasureLayout : void 0,
    ProjectionNode: r.ProjectionNode
  };
}
function sx(e, t) {
  if (typeof Proxy == "undefined")
    return ll;
  const n = /* @__PURE__ */ new Map(), r = (i, o) => ll(i, o, e, t), s = (i, o) => (process.env.NODE_ENV !== "production" && Ju(!1, "motion() is deprecated. Use motion.create() instead."), r(i, o));
  return new Proxy(s, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (i, o) => o === "create" ? r : (n.has(o) || n.set(o, ll(o, void 0, e, t)), n.get(o))
  });
}
function yh({ top: e, left: t, right: n, bottom: r }) {
  return {
    x: { min: t, max: n },
    y: { min: e, max: r }
  };
}
function ix({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function ax(e, t) {
  if (!t)
    return e;
  const n = t({ x: e.left, y: e.top }), r = t({ x: e.right, y: e.bottom });
  return {
    top: n.y,
    left: n.x,
    bottom: r.y,
    right: r.x
  };
}
function ul(e) {
  return e === void 0 || e === 1;
}
function ou({ scale: e, scaleX: t, scaleY: n }) {
  return !ul(e) || !ul(t) || !ul(n);
}
function ln(e) {
  return ou(e) || Mh(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function Mh(e) {
  return tf(e.x) || tf(e.y);
}
function tf(e) {
  return e && e !== "0%";
}
function Po(e, t, n) {
  const r = e - n, s = t * r;
  return n + s;
}
function nf(e, t, n, r, s) {
  return s !== void 0 && (e = Po(e, s, r)), Po(e, n, r) + t;
}
function su(e, t = 0, n = 1, r, s) {
  e.min = nf(e.min, t, n, r, s), e.max = nf(e.max, t, n, r, s);
}
function bh(e, { x: t, y: n }) {
  su(e.x, t.translate, t.scale, t.originPoint), su(e.y, n.translate, n.scale, n.originPoint);
}
const rf = 0.999999999999, of = 1.0000000000001;
function lx(e, t, n, r = !1) {
  const s = n.length;
  if (!s)
    return;
  t.x = t.y = 1;
  let i, o;
  for (let a = 0; a < s; a++) {
    i = n[a], o = i.projectionDelta;
    const { visualElement: l } = i.options;
    l && l.props.style && l.props.style.display === "contents" || (r && i.options.layoutScroll && i.scroll && i !== i.root && Pn(e, {
      x: -i.scroll.offset.x,
      y: -i.scroll.offset.y
    }), o && (t.x *= o.x.scale, t.y *= o.y.scale, bh(e, o)), r && ln(i.latestValues) && Pn(e, i.latestValues));
  }
  t.x < of && t.x > rf && (t.x = 1), t.y < of && t.y > rf && (t.y = 1);
}
function jn(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function sf(e, t, n, r, s = 0.5) {
  const i = ke(e.min, e.max, s);
  su(e, t, n, i, r);
}
function Pn(e, t) {
  sf(e.x, t.x, t.scaleX, t.scale, t.originX), sf(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function xh(e, t) {
  return yh(ax(e.getBoundingClientRect(), t));
}
function ux(e, t, n) {
  const r = xh(e, n), { scroll: s } = t;
  return s && (jn(r.x, s.offset.x), jn(r.y, s.offset.y)), r;
}
const af = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), An = () => ({
  x: af(),
  y: af()
}), lf = () => ({ min: 0, max: 0 }), Te = () => ({
  x: lf(),
  y: lf()
}), iu = { current: null }, wh = { current: !1 };
function cx() {
  if (wh.current = !0, !!Bu)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => iu.current = e.matches;
      e.addEventListener("change", t), t();
    } else
      iu.current = !1;
}
const dx = /* @__PURE__ */ new WeakMap();
function fx(e, t, n) {
  for (const r in t) {
    const s = t[r], i = n[r];
    if (Ie(s))
      e.addValue(r, s);
    else if (Ie(i))
      e.addValue(r, Fn(s, { owner: e }));
    else if (i !== s)
      if (e.hasValue(r)) {
        const o = e.getValue(r);
        o.liveStyle === !0 ? o.jump(s) : o.hasAnimated || o.set(s);
      } else {
        const o = e.getStaticValue(r);
        e.addValue(r, Fn(o !== void 0 ? o : s, { owner: e }));
      }
  }
  for (const r in n)
    t[r] === void 0 && e.removeValue(r);
  return t;
}
const uf = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
class mx {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor({ parent: t, props: n, presenceContext: r, reducedMotionConfig: s, blockInitialAnimation: i, visualState: o }, a = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = ac, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const f = Ke.now();
      this.renderScheduledAt < f && (this.renderScheduledAt = f, we.render(this.render, !1, !0));
    };
    const { latestValues: l, renderState: u } = o;
    this.latestValues = l, this.baseTarget = { ...l }, this.initialValues = n.initial ? { ...l } : {}, this.renderState = u, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = s, this.options = a, this.blockInitialAnimation = !!i, this.isControllingVariants = La(n), this.isVariantNode = lh(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: c, ...d } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const f in d) {
      const m = d[f];
      l[f] !== void 0 && Ie(m) && m.set(l[f]);
    }
  }
  mount(t) {
    var n;
    this.current = t, dx.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((r, s) => this.bindToMotionValue(s, r)), wh.current || cx(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : iu.current, process.env.NODE_ENV !== "production" && Ju(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected.", "reduced-motion-disabled"), (n = this.parent) == null || n.addChild(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    var t;
    this.projection && this.projection.unmount(), qt(this.notifyUpdate), qt(this.render), this.valueSubscriptions.forEach((n) => n()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), (t = this.parent) == null || t.removeChild(this);
    for (const n in this.events)
      this.events[n].clear();
    for (const n in this.features) {
      const r = this.features[n];
      r && (r.unmount(), r.isMounted = !1);
    }
    this.current = null;
  }
  addChild(t) {
    var n;
    this.children.add(t), (n = this.enteringChildren) != null || (this.enteringChildren = /* @__PURE__ */ new Set()), this.enteringChildren.add(t);
  }
  removeChild(t) {
    this.children.delete(t), this.enteringChildren && this.enteringChildren.delete(t);
  }
  bindToMotionValue(t, n) {
    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
    const r = qn.has(t);
    r && this.onBindTransform && this.onBindTransform();
    const s = n.on("change", (o) => {
      this.latestValues[t] = o, this.props.onUpdate && we.preRender(this.notifyUpdate), r && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender();
    });
    let i;
    window.MotionCheckAppearSync && (i = window.MotionCheckAppearSync(this, t, n)), this.valueSubscriptions.set(t, () => {
      s(), i && i(), n.owner && n.stop();
    });
  }
  sortNodePosition(t) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in Vn) {
      const n = Vn[t];
      if (!n)
        continue;
      const { isEnabled: r, Feature: s } = n;
      if (!this.features[t] && s && r(this.props) && (this.features[t] = new s(this)), this.features[t]) {
        const i = this.features[t];
        i.isMounted ? i.update() : (i.mount(), i.isMounted = !0);
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Te();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
    for (let r = 0; r < uf.length; r++) {
      const s = uf[r];
      this.propEventSubscriptions[s] && (this.propEventSubscriptions[s](), delete this.propEventSubscriptions[s]);
      const i = "on" + s, o = t[i];
      o && (this.propEventSubscriptions[s] = this.on(s, o));
    }
    this.prevMotionValues = fx(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return n.variantChildren && n.variantChildren.add(t), () => n.variantChildren.delete(t);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r && (r && this.removeValue(t), this.bindToMotionValue(t, n), this.values.set(t, n), this.latestValues[t] = n.get());
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t])
      return this.props.values[t];
    let r = this.values.get(t);
    return r === void 0 && n !== void 0 && (r = Fn(n === null ? void 0 : n, { owner: this }), this.addValue(t, r)), r;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(t, n) {
    var s;
    let r = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (s = this.getBaseTargetFromProps(this.props, t)) != null ? s : this.readValueFromInstance(this.current, t, this.options);
    return r != null && (typeof r == "string" && (hp(r) || vp(r)) ? r = parseFloat(r) : !bb(r) && Xt.test(n) && (r = Zp(t, n)), this.setBaseTarget(t, Ie(r) ? r.get() : r)), Ie(r) ? r.get() : r;
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(t) {
    var i;
    const { initial: n } = this.props;
    let r;
    if (typeof n == "string" || typeof n == "object") {
      const o = yc(this.props, n, (i = this.presenceContext) == null ? void 0 : i.custom);
      o && (r = o[t]);
    }
    if (n && r !== void 0)
      return r;
    const s = this.getBaseTargetFromProps(this.props, t);
    return s !== void 0 && !Ie(s) ? s : this.initialValues[t] !== void 0 && r === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new Gu()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
  scheduleRenderMicrotask() {
    cc.render(this.render);
  }
}
class Yh extends mx {
  constructor() {
    super(...arguments), this.KeyframeResolver = ub;
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Ie(t) && (this.childSubscription = t.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
}
function Lh(e, { style: t, vars: n }, r, s) {
  const i = e.style;
  let o;
  for (o in t)
    i[o] = t[o];
  s == null || s.applyProjectionStyles(i, r);
  for (o in n)
    i.setProperty(o, n[o]);
}
function px(e) {
  return window.getComputedStyle(e);
}
class hx extends Yh {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = Lh;
  }
  readValueFromInstance(t, n) {
    var r;
    if (qn.has(n))
      return (r = this.projection) != null && r.isProjecting ? Xl(n) : kM(t, n);
    {
      const s = px(t), i = (Zu(n) ? s.getPropertyValue(n) : s[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return xh(t, n);
  }
  build(t, n, r) {
    _c(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Mc(t, n, r);
  }
}
const Sh = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust"
]);
function _x(e, t, n, r) {
  Lh(e, t, void 0, r);
  for (const s in t.attrs)
    e.setAttribute(Sh.has(s) ? s : bc(s), t.attrs[s]);
}
class vx extends Yh {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = Te;
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (qn.has(n)) {
      const r = Xp(n);
      return r && r.default || 0;
    }
    return n = Sh.has(n) ? n : bc(n), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return hh(t, n, r);
  }
  build(t, n, r) {
    dh(t, n, this.isSVGTag, r.transformTemplate, r.style);
  }
  renderInstance(t, n, r, s) {
    _x(t, n, r, s);
  }
  mount(t) {
    this.isSVGTag = mh(t.tagName), super.mount(t);
  }
}
const gx = (e, t) => gc(e) ? new vx(t) : new hx(t, {
  allowProjection: e !== Ae
});
function Hn(e, t, n) {
  const r = e.getProps();
  return yc(r, t, n !== void 0 ? n : r.custom, e);
}
const au = (e) => Array.isArray(e);
function yx(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Fn(n));
}
function Mx(e) {
  return au(e) ? e[e.length - 1] || 0 : e;
}
function bx(e, t) {
  const n = Hn(e, t);
  let { transitionEnd: r = {}, transition: s = {}, ...i } = n || {};
  i = { ...i, ...r };
  for (const o in i) {
    const a = Mx(i[o]);
    yx(e, o, a);
  }
}
function xx(e) {
  return !!(Ie(e) && e.add);
}
function lu(e, t) {
  const n = e.getValue("willChange");
  if (xx(n))
    return n.add(t);
  if (!n && Ot.WillChange) {
    const r = new Ot.WillChange("auto");
    e.addValue("willChange", r), r.add(t);
  }
}
function kh(e) {
  return e.props[_h];
}
const wx = (e) => e !== null;
function Yx(e, { repeat: t, repeatType: n = "loop" }, r) {
  const s = e.filter(wx), i = t && n !== "loop" && t % 2 === 1 ? 0 : s.length - 1;
  return s[i];
}
const Lx = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, Sx = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), kx = {
  type: "keyframes",
  duration: 0.8
}, Dx = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, Tx = (e, { keyframes: t }) => t.length > 2 ? kx : qn.has(e) ? e.startsWith("scale") ? Sx(t[1]) : Lx : Dx;
function Ex({ when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: s, repeat: i, repeatType: o, repeatDelay: a, from: l, elapsed: u, ...c }) {
  return !!Object.keys(c).length;
}
const xc = (e, t, n, r = {}, s, i) => (o) => {
  const a = lc(r, e) || {}, l = a.delay || r.delay || 0;
  let { elapsed: u = 0 } = r;
  u = u - /* @__PURE__ */ mt(l);
  const c = {
    keyframes: Array.isArray(n) ? n : [null, n],
    ease: "easeOut",
    velocity: t.getVelocity(),
    ...a,
    delay: -u,
    onUpdate: (f) => {
      t.set(f), a.onUpdate && a.onUpdate(f);
    },
    onComplete: () => {
      o(), a.onComplete && a.onComplete();
    },
    name: e,
    motionValue: t,
    element: i ? void 0 : s
  };
  Ex(a) || Object.assign(c, Tx(e, c)), c.duration && (c.duration = /* @__PURE__ */ mt(c.duration)), c.repeatDelay && (c.repeatDelay = /* @__PURE__ */ mt(c.repeatDelay)), c.from !== void 0 && (c.keyframes[0] = c.from);
  let d = !1;
  if ((c.type === !1 || c.duration === 0 && !c.repeatDelay) && (nu(c), c.delay === 0 && (d = !0)), (Ot.instantAnimations || Ot.skipAnimations) && (d = !0, nu(c), c.delay = 0), c.allowFlatten = !a.type && !a.ease, d && !i && t.get() !== void 0) {
    const f = Yx(c.keyframes, a);
    if (f !== void 0) {
      we.update(() => {
        c.onUpdate(f), c.onComplete();
      });
      return;
    }
  }
  return a.isSync ? new ic(c) : new qM(c);
};
function jx({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return t[n] = !1, r;
}
function Dh(e, t, { delay: n = 0, transitionOverride: r, type: s } = {}) {
  var c;
  let { transition: i = e.getDefaultTransition(), transitionEnd: o, ...a } = t;
  r && (i = r);
  const l = [], u = s && e.animationState && e.animationState.getState()[s];
  for (const d in a) {
    const f = e.getValue(d, (c = e.latestValues[d]) != null ? c : null), m = a[d];
    if (m === void 0 || u && jx(u, d))
      continue;
    const p = {
      delay: n,
      ...lc(i || {}, d)
    }, h = f.get();
    if (h !== void 0 && !f.isAnimating && !Array.isArray(m) && m === h && !p.velocity)
      continue;
    let _ = !1;
    if (window.MotionHandoffAnimation) {
      const M = kh(e);
      if (M) {
        const y = window.MotionHandoffAnimation(M, d, we);
        y !== null && (p.startTime = y, _ = !0);
      }
    }
    lu(e, d), f.start(xc(d, f, m, e.shouldReduceMotion && Gp.has(d) ? { type: !1 } : p, e, _));
    const v = f.animation;
    v && l.push(v);
  }
  return o && Promise.all(l).then(() => {
    we.update(() => {
      o && bx(e, o);
    });
  }), l;
}
function Th(e, t, n, r = 0, s = 1) {
  const i = Array.from(e).sort((u, c) => u.sortNodePosition(c)).indexOf(t), o = e.size, a = (o - 1) * r;
  return typeof n == "function" ? n(i, o) : s === 1 ? i * r : a - i * r;
}
function uu(e, t, n = {}) {
  var l;
  const r = Hn(e, t, n.type === "exit" ? (l = e.presenceContext) == null ? void 0 : l.custom : void 0);
  let { transition: s = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (s = n.transitionOverride);
  const i = r ? () => Promise.all(Dh(e, r, n)) : () => Promise.resolve(), o = e.variantChildren && e.variantChildren.size ? (u = 0) => {
    const { delayChildren: c = 0, staggerChildren: d, staggerDirection: f } = s;
    return Px(e, t, u, c, d, f, n);
  } : () => Promise.resolve(), { when: a } = s;
  if (a) {
    const [u, c] = a === "beforeChildren" ? [i, o] : [o, i];
    return u().then(() => c());
  } else
    return Promise.all([i(), o(n.delay)]);
}
function Px(e, t, n = 0, r = 0, s = 0, i = 1, o) {
  const a = [];
  for (const l of e.variantChildren)
    l.notify("AnimationStart", t), a.push(uu(l, t, {
      ...o,
      delay: n + (typeof r == "function" ? 0 : r) + Th(e.variantChildren, l, r, s, i)
    }).then(() => l.notify("AnimationComplete", t)));
  return Promise.all(a);
}
function Ax(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const s = t.map((i) => uu(e, i, n));
    r = Promise.all(s);
  } else if (typeof t == "string")
    r = uu(e, t, n);
  else {
    const s = typeof t == "function" ? Hn(e, t, n.custom) : t;
    r = Promise.all(Dh(e, s, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
function Eh(e, t) {
  if (!Array.isArray(t))
    return !1;
  const n = t.length;
  if (n !== e.length)
    return !1;
  for (let r = 0; r < n; r++)
    if (t[r] !== e[r])
      return !1;
  return !0;
}
const Cx = hc.length;
function jh(e) {
  if (!e)
    return;
  if (!e.isControllingVariants) {
    const n = e.parent ? jh(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < Cx; n++) {
    const r = hc[n], s = e.props[r];
    (Sr(s) || s === !1) && (t[r] = s);
  }
  return t;
}
const $x = [...pc].reverse(), Hx = pc.length;
function Ox(e) {
  return (t) => Promise.all(t.map(({ animation: n, options: r }) => Ax(e, n, r)));
}
function Rx(e) {
  let t = Ox(e), n = cf(), r = !0;
  const s = (l) => (u, c) => {
    var f;
    const d = Hn(e, c, l === "exit" ? (f = e.presenceContext) == null ? void 0 : f.custom : void 0);
    if (d) {
      const { transition: m, transitionEnd: p, ...h } = d;
      u = { ...u, ...h, ...p };
    }
    return u;
  };
  function i(l) {
    t = l(e);
  }
  function o(l) {
    const { props: u } = e, c = jh(e.parent) || {}, d = [], f = /* @__PURE__ */ new Set();
    let m = {}, p = 1 / 0;
    for (let _ = 0; _ < Hx; _++) {
      const v = $x[_], M = n[v], y = u[v] !== void 0 ? u[v] : c[v], x = Sr(y), w = v === l ? M.isActive : null;
      w === !1 && (p = _);
      let k = y === c[v] && y !== u[v] && x;
      if (k && r && e.manuallyAnimateOnMount && (k = !1), M.protectedKeys = { ...m }, // If it isn't active and hasn't *just* been set as inactive
      !M.isActive && w === null || // If we didn't and don't have any defined prop for this animation type
      !y && !M.prevProp || // Or if the prop doesn't define an animation
      Ya(y) || typeof y == "boolean")
        continue;
      const D = Nx(M.prevProp, y);
      let S = D || // If we're making this variant active, we want to always make it active
      v === l && M.isActive && !k && x || // If we removed a higher-priority variant (i is in reverse order)
      _ > p && x, N = !1;
      const Y = Array.isArray(y) ? y : [y];
      let $ = Y.reduce(s(v), {});
      w === !1 && ($ = {});
      const { prevResolvedValues: I = {} } = M, U = {
        ...I,
        ...$
      }, H = (O) => {
        S = !0, f.has(O) && (N = !0, f.delete(O)), M.needsAnimating[O] = !0;
        const L = e.getValue(O);
        L && (L.liveStyle = !1);
      };
      for (const O in U) {
        const L = $[O], j = I[O];
        if (m.hasOwnProperty(O))
          continue;
        let B = !1;
        au(L) && au(j) ? B = !Eh(L, j) : B = L !== j, B ? L != null ? H(O) : f.add(O) : L !== void 0 && f.has(O) ? H(O) : M.protectedKeys[O] = !0;
      }
      M.prevProp = y, M.prevResolvedValues = $, M.isActive && (m = { ...m, ...$ }), r && e.blockInitialAnimation && (S = !1);
      const A = k && D;
      S && (!A || N) && d.push(...Y.map((O) => {
        const L = { type: v };
        if (typeof O == "string" && r && !A && e.manuallyAnimateOnMount && e.parent) {
          const { parent: j } = e, B = Hn(j, O);
          if (j.enteringChildren && B) {
            const { delayChildren: E } = B.transition || {};
            L.delay = Th(j.enteringChildren, e, E);
          }
        }
        return {
          animation: O,
          options: L
        };
      }));
    }
    if (f.size) {
      const _ = {};
      if (typeof u.initial != "boolean") {
        const v = Hn(e, Array.isArray(u.initial) ? u.initial[0] : u.initial);
        v && v.transition && (_.transition = v.transition);
      }
      f.forEach((v) => {
        const M = e.getBaseTarget(v), y = e.getValue(v);
        y && (y.liveStyle = !0), _[v] = M != null ? M : null;
      }), d.push({ animation: _ });
    }
    let h = !!d.length;
    return r && (u.initial === !1 || u.initial === u.animate) && !e.manuallyAnimateOnMount && (h = !1), r = !1, h ? t(d) : Promise.resolve();
  }
  function a(l, u) {
    var d;
    if (n[l].isActive === u)
      return Promise.resolve();
    (d = e.variantChildren) == null || d.forEach((f) => {
      var m;
      return (m = f.animationState) == null ? void 0 : m.setActive(l, u);
    }), n[l].isActive = u;
    const c = o(l);
    for (const f in n)
      n[f].protectedKeys = {};
    return c;
  }
  return {
    animateChanges: o,
    setActive: a,
    setAnimateFunction: i,
    getState: () => n,
    reset: () => {
      n = cf(), r = !0;
    }
  };
}
function Nx(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Eh(t, e) : !1;
}
function sn(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function cf() {
  return {
    animate: sn(!0),
    whileInView: sn(),
    whileHover: sn(),
    whileTap: sn(),
    whileDrag: sn(),
    whileFocus: sn(),
    exit: sn()
  };
}
class tn {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
class Ix extends tn {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = Rx(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    Ya(t) && (this.unmountControls = t.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(), { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    this.node.animationState.reset(), (t = this.unmountControls) == null || t.call(this);
  }
}
let Fx = 0;
class Vx extends tn {
  constructor() {
    super(...arguments), this.id = Fx++;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext, { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r)
      return;
    const s = this.node.animationState.setActive("exit", !t);
    n && !t && s.then(() => {
      n(this.id);
    });
  }
  mount() {
    const { register: t, onExitComplete: n } = this.node.presenceContext || {};
    n && n(this.id), t && (this.unmount = t(this.id));
  }
  unmount() {
  }
}
const zx = {
  animation: {
    Feature: Ix
  },
  exit: {
    Feature: Vx
  }
};
function Dr(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function zr(e) {
  return {
    point: {
      x: e.pageX,
      y: e.pageY
    }
  };
}
const Bx = (e) => (t) => dc(t) && e(t, zr(t));
function vr(e, t, n, r) {
  return Dr(e, t, Bx(n), r);
}
const Ph = 1e-4, Wx = 1 - Ph, Ux = 1 + Ph, Ah = 0.01, Kx = 0 - Ah, Gx = 0 + Ah;
function We(e) {
  return e.max - e.min;
}
function Jx(e, t, n) {
  return Math.abs(e - t) <= n;
}
function df(e, t, n, r = 0.5) {
  e.origin = r, e.originPoint = ke(t.min, t.max, e.origin), e.scale = We(n) / We(t), e.translate = ke(n.min, n.max, e.origin) - e.originPoint, (e.scale >= Wx && e.scale <= Ux || isNaN(e.scale)) && (e.scale = 1), (e.translate >= Kx && e.translate <= Gx || isNaN(e.translate)) && (e.translate = 0);
}
function gr(e, t, n, r) {
  df(e.x, t.x, n.x, r ? r.originX : void 0), df(e.y, t.y, n.y, r ? r.originY : void 0);
}
function ff(e, t, n) {
  e.min = n.min + t.min, e.max = e.min + We(t);
}
function qx(e, t, n) {
  ff(e.x, t.x, n.x), ff(e.y, t.y, n.y);
}
function mf(e, t, n) {
  e.min = t.min - n.min, e.max = e.min + We(t);
}
function yr(e, t, n) {
  mf(e.x, t.x, n.x), mf(e.y, t.y, n.y);
}
function nt(e) {
  return [e("x"), e("y")];
}
const Ch = ({ current: e }) => e ? e.ownerDocument.defaultView : null, pf = (e, t) => Math.abs(e - t);
function Xx(e, t) {
  const n = pf(e.x, t.x), r = pf(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class $h {
  constructor(t, n, { transformPagePoint: r, contextWindow: s = window, dragSnapToOrigin: i = !1, distanceThreshold: o = 3 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const f = dl(this.lastMoveEventInfo, this.history), m = this.startEvent !== null, p = Xx(f.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
      if (!m && !p)
        return;
      const { point: h } = f, { timestamp: _ } = Oe;
      this.history.push({ ...h, timestamp: _ });
      const { onStart: v, onMove: M } = this.handlers;
      m || (v && v(this.lastMoveEvent, f), this.startEvent = this.lastMoveEvent), M && M(this.lastMoveEvent, f);
    }, this.handlePointerMove = (f, m) => {
      this.lastMoveEvent = f, this.lastMoveEventInfo = cl(m, this.transformPagePoint), we.update(this.updatePoint, !0);
    }, this.handlePointerUp = (f, m) => {
      this.end();
      const { onEnd: p, onSessionEnd: h, resumeAnimation: _ } = this.handlers;
      if (this.dragSnapToOrigin && _ && _(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const v = dl(f.type === "pointercancel" ? this.lastMoveEventInfo : cl(m, this.transformPagePoint), this.history);
      this.startEvent && p && p(f, v), h && h(f, v);
    }, !dc(t))
      return;
    this.dragSnapToOrigin = i, this.handlers = n, this.transformPagePoint = r, this.distanceThreshold = o, this.contextWindow = s || window;
    const a = zr(t), l = cl(a, this.transformPagePoint), { point: u } = l, { timestamp: c } = Oe;
    this.history = [{ ...u, timestamp: c }];
    const { onSessionStart: d } = n;
    d && d(t, dl(l, this.history)), this.removeListeners = Ir(vr(this.contextWindow, "pointermove", this.handlePointerMove), vr(this.contextWindow, "pointerup", this.handlePointerUp), vr(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), qt(this.updatePoint);
  }
}
function cl(e, t) {
  return t ? { point: t(e.point) } : e;
}
function hf(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function dl({ point: e }, t) {
  return {
    point: e,
    delta: hf(e, Hh(t)),
    offset: hf(e, Zx(t)),
    velocity: Qx(t, 0.1)
  };
}
function Zx(e) {
  return e[0];
}
function Hh(e) {
  return e[e.length - 1];
}
function Qx(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let n = e.length - 1, r = null;
  const s = Hh(e);
  for (; n >= 0 && (r = e[n], !(s.timestamp - r.timestamp > /* @__PURE__ */ mt(t))); )
    n--;
  if (!r)
    return { x: 0, y: 0 };
  const i = /* @__PURE__ */ ot(s.timestamp - r.timestamp);
  if (i === 0)
    return { x: 0, y: 0 };
  const o = {
    x: (s.x - r.x) / i,
    y: (s.y - r.y) / i
  };
  return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
}
function ew(e, { min: t, max: n }, r) {
  return t !== void 0 && e < t ? e = r ? ke(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? ke(n, e, r.max) : Math.min(e, n)), e;
}
function _f(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
  };
}
function tw(e, { top: t, left: n, bottom: r, right: s }) {
  return {
    x: _f(e.x, n, s),
    y: _f(e.y, t, r)
  };
}
function vf(e, t) {
  let n = t.min - e.min, r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function nw(e, t) {
  return {
    x: vf(e.x, t.x),
    y: vf(e.y, t.y)
  };
}
function rw(e, t) {
  let n = 0.5;
  const r = We(e), s = We(t);
  return s > r ? n = /* @__PURE__ */ wr(t.min, t.max - r, e.min) : r > s && (n = /* @__PURE__ */ wr(e.min, e.max - s, t.min)), $t(0, 1, n);
}
function ow(e, t) {
  const n = {};
  return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
const cu = 0.35;
function sw(e = cu) {
  return e === !1 ? e = 0 : e === !0 && (e = cu), {
    x: gf(e, "left", "right"),
    y: gf(e, "top", "bottom")
  };
}
function gf(e, t, n) {
  return {
    min: yf(e, t),
    max: yf(e, n)
  };
}
function yf(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const iw = /* @__PURE__ */ new WeakMap();
class aw {
  constructor(t) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Te(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = t;
  }
  start(t, { snapToCursor: n = !1, distanceThreshold: r } = {}) {
    const { presenceContext: s } = this.visualElement;
    if (s && s.isPresent === !1)
      return;
    const i = (d) => {
      const { dragSnapToOrigin: f } = this.getProps();
      f ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(zr(d).point);
    }, o = (d, f) => {
      const { drag: m, dragPropagation: p, onDragStart: h } = this.getProps();
      if (m && !p && (this.openDragLock && this.openDragLock(), this.openDragLock = mb(m), !this.openDragLock))
        return;
      this.latestPointerEvent = d, this.latestPanInfo = f, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), nt((v) => {
        let M = this.getAxisMotionValue(v).get() || 0;
        if (yt.test(M)) {
          const { projection: y } = this.visualElement;
          if (y && y.layout) {
            const x = y.layout.layoutBox[v];
            x && (M = We(x) * (parseFloat(M) / 100));
          }
        }
        this.originPoint[v] = M;
      }), h && we.postRender(() => h(d, f)), lu(this.visualElement, "transform");
      const { animationState: _ } = this.visualElement;
      _ && _.setActive("whileDrag", !0);
    }, a = (d, f) => {
      this.latestPointerEvent = d, this.latestPanInfo = f;
      const { dragPropagation: m, dragDirectionLock: p, onDirectionLock: h, onDrag: _ } = this.getProps();
      if (!m && !this.openDragLock)
        return;
      const { offset: v } = f;
      if (p && this.currentDirection === null) {
        this.currentDirection = lw(v), this.currentDirection !== null && h && h(this.currentDirection);
        return;
      }
      this.updateAxis("x", f.point, v), this.updateAxis("y", f.point, v), this.visualElement.render(), _ && _(d, f);
    }, l = (d, f) => {
      this.latestPointerEvent = d, this.latestPanInfo = f, this.stop(d, f), this.latestPointerEvent = null, this.latestPanInfo = null;
    }, u = () => nt((d) => {
      var f;
      return this.getAnimationState(d) === "paused" && ((f = this.getAxisMotionValue(d).animation) == null ? void 0 : f.play());
    }), { dragSnapToOrigin: c } = this.getProps();
    this.panSession = new $h(t, {
      onSessionStart: i,
      onStart: o,
      onMove: a,
      onSessionEnd: l,
      resumeAnimation: u
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: c,
      distanceThreshold: r,
      contextWindow: Ch(this.visualElement)
    });
  }
  /**
   * @internal
   */
  stop(t, n) {
    const r = t || this.latestPointerEvent, s = n || this.latestPanInfo, i = this.isDragging;
    if (this.cancel(), !i || !s || !r)
      return;
    const { velocity: o } = s;
    this.startAnimation(o);
    const { onDragEnd: a } = this.getProps();
    a && we.postRender(() => a(r, s));
  }
  /**
   * @internal
   */
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
    const { dragPropagation: r } = this.getProps();
    !r && this.openDragLock && (this.openDragLock(), this.openDragLock = null), n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: s } = this.getProps();
    if (!r || !ao(t, s, this.currentDirection))
      return;
    const i = this.getAxisMotionValue(t);
    let o = this.originPoint[t] + r[t];
    this.constraints && this.constraints[t] && (o = ew(o, this.constraints[t], this.elastic[t])), i.set(o);
  }
  resolveConstraints() {
    var i;
    const { dragConstraints: t, dragElastic: n } = this.getProps(), r = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (i = this.visualElement.projection) == null ? void 0 : i.layout, s = this.constraints;
    t && En(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && r ? this.constraints = tw(r.layoutBox, t) : this.constraints = !1, this.elastic = sw(n), s !== this.constraints && r && this.constraints && !this.hasMutatedConstraints && nt((o) => {
      this.constraints !== !1 && this.getAxisMotionValue(o) && (this.constraints[o] = ow(r.layoutBox[o], this.constraints[o]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !En(t))
      return !1;
    const r = t.current;
    Ht(r !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.", "drag-constraints-ref");
    const { projection: s } = this.visualElement;
    if (!s || !s.layout)
      return !1;
    const i = ux(r, s.root, this.visualElement.getTransformPagePoint());
    let o = nw(s.layout.layoutBox, i);
    if (n) {
      const a = n(ix(o));
      this.hasMutatedConstraints = !!a, a && (o = yh(a));
    }
    return o;
  }
  startAnimation(t) {
    const { drag: n, dragMomentum: r, dragElastic: s, dragTransition: i, dragSnapToOrigin: o, onDragTransitionEnd: a } = this.getProps(), l = this.constraints || {}, u = nt((c) => {
      if (!ao(c, n, this.currentDirection))
        return;
      let d = l && l[c] || {};
      o && (d = { min: 0, max: 0 });
      const f = s ? 200 : 1e6, m = s ? 40 : 1e7, p = {
        type: "inertia",
        velocity: r ? t[c] : 0,
        bounceStiffness: f,
        bounceDamping: m,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...i,
        ...d
      };
      return this.startAxisValueAnimation(c, p);
    });
    return Promise.all(u).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return lu(this.visualElement, t), r.start(xc(t, r, 0, n, this.visualElement, !1));
  }
  stopAnimation() {
    nt((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    nt((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) == null ? void 0 : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) == null ? void 0 : n.state;
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`, r = this.visualElement.getProps(), s = r[n];
    return s || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0);
  }
  snapToCursor(t) {
    nt((n) => {
      const { drag: r } = this.getProps();
      if (!ao(n, r, this.currentDirection))
        return;
      const { projection: s } = this.visualElement, i = this.getAxisMotionValue(n);
      if (s && s.layout) {
        const { min: o, max: a } = s.layout.layoutBox[n];
        i.set(t[n] - ke(o, a, 0.5));
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: t, dragConstraints: n } = this.getProps(), { projection: r } = this.visualElement;
    if (!En(n) || !r || !this.constraints)
      return;
    this.stopAnimation();
    const s = { x: 0, y: 0 };
    nt((o) => {
      const a = this.getAxisMotionValue(o);
      if (a && this.constraints !== !1) {
        const l = a.get();
        s[o] = rw({ min: l, max: l }, this.constraints[o]);
      }
    });
    const { transformTemplate: i } = this.visualElement.getProps();
    this.visualElement.current.style.transform = i ? i({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), nt((o) => {
      if (!ao(o, t, null))
        return;
      const a = this.getAxisMotionValue(o), { min: l, max: u } = this.constraints[o];
      a.set(ke(l, u, s[o]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    iw.set(this.visualElement, this);
    const t = this.visualElement.current, n = vr(t, "pointerdown", (l) => {
      const { drag: u, dragListener: c = !0 } = this.getProps();
      u && c && this.start(l);
    }), r = () => {
      const { dragConstraints: l } = this.getProps();
      En(l) && l.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: s } = this.visualElement, i = s.addEventListener("measure", r);
    s && !s.layout && (s.root && s.root.updateScroll(), s.updateLayout()), we.read(r);
    const o = Dr(window, "resize", () => this.scalePositionWithinConstraints()), a = s.addEventListener("didUpdate", ({ delta: l, hasLayoutChanged: u }) => {
      this.isDragging && u && (nt((c) => {
        const d = this.getAxisMotionValue(c);
        d && (this.originPoint[c] += l[c].translate, d.set(d.get() + l[c].translate));
      }), this.visualElement.render());
    });
    return () => {
      o(), n(), i(), a && a();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: r = !1, dragPropagation: s = !1, dragConstraints: i = !1, dragElastic: o = cu, dragMomentum: a = !0 } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: s,
      dragConstraints: i,
      dragElastic: o,
      dragMomentum: a
    };
  }
}
function ao(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function lw(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
class uw extends tn {
  constructor(t) {
    super(t), this.removeGroupControls = st, this.removeListeners = st, this.controls = new aw(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || st;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Mf = (e) => (t, n) => {
  e && we.postRender(() => e(t, n));
};
class cw extends tn {
  constructor() {
    super(...arguments), this.removePointerDownListener = st;
  }
  onPointerDown(t) {
    this.session = new $h(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Ch(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: s } = this.node.getProps();
    return {
      onSessionStart: Mf(t),
      onStart: Mf(n),
      onMove: r,
      onEnd: (i, o) => {
        delete this.session, s && we.postRender(() => s(i, o));
      }
    };
  }
  mount() {
    this.removePointerDownListener = vr(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const wo = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: !0,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: !1
};
function bf(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const lr = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (ae.test(e))
        e = parseFloat(e);
      else
        return e;
    const n = bf(e, t.target.x), r = bf(e, t.target.y);
    return `${n}% ${r}%`;
  }
}, dw = {
  correct: (e, { treeScale: t, projectionDelta: n }) => {
    const r = e, s = Xt.parse(e);
    if (s.length > 5)
      return r;
    const i = Xt.createTransformer(e), o = typeof s[0] != "number" ? 1 : 0, a = n.x.scale * t.x, l = n.y.scale * t.y;
    s[0 + o] /= a, s[1 + o] /= l;
    const u = ke(a, l, 0.5);
    return typeof s[2 + o] == "number" && (s[2 + o] /= u), typeof s[3 + o] == "number" && (s[3 + o] /= u), i(s);
  }
};
let fl = !1;
class fw extends yy {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: s } = this.props, { projection: i } = t;
    Cb(mw), i && (n.group && n.group.add(i), r && r.register && s && r.register(i), fl && i.root.didUpdate(), i.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), i.setOptions({
      ...i.options,
      onExitComplete: () => this.safeToRemove()
    })), wo.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: n, visualElement: r, drag: s, isPresent: i } = this.props, { projection: o } = r;
    return o && (o.isPresent = i, fl = !0, s || t.layoutDependency !== n || n === void 0 || t.isPresent !== i ? o.willUpdate() : this.safeToRemove(), t.isPresent !== i && (i ? o.promote() : o.relegate() || we.postRender(() => {
      const a = o.getStack();
      (!a || !a.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t && (t.root.didUpdate(), cc.postRender(() => {
      !t.currentAnimation && t.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r } = this.props, { projection: s } = t;
    fl = !0, s && (s.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(s), r && r.deregister && r.deregister(s));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function Oh(e) {
  const [t, n] = sh(), r = re(Vu);
  return g.jsx(fw, { ...e, layoutGroup: r, switchLayoutGroup: re(vh), isPresent: t, safeToRemove: n });
}
const mw = {
  borderRadius: {
    ...lr,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: lr,
  borderTopRightRadius: lr,
  borderBottomLeftRadius: lr,
  borderBottomRightRadius: lr,
  boxShadow: dw
};
function pw(e, t, n) {
  const r = Ie(e) ? e : Fn(e);
  return r.start(xc("", r, t, n)), r.animation;
}
const hw = (e, t) => e.depth - t.depth;
class _w {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    Wu(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    Uu(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(hw), this.isDirty = !1, this.children.forEach(t);
  }
}
function vw(e, t) {
  const n = Ke.now(), r = ({ timestamp: s }) => {
    const i = s - n;
    i >= t && (qt(r), e(i - t));
  };
  return we.setup(r, !0), () => qt(r);
}
const Rh = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], gw = Rh.length, xf = (e) => typeof e == "string" ? parseFloat(e) : e, wf = (e) => typeof e == "number" || ae.test(e);
function yw(e, t, n, r, s, i) {
  var o, a, l, u;
  s ? (e.opacity = ke(0, (o = n.opacity) != null ? o : 1, Mw(r)), e.opacityExit = ke((a = t.opacity) != null ? a : 1, 0, bw(r))) : i && (e.opacity = ke((l = t.opacity) != null ? l : 1, (u = n.opacity) != null ? u : 1, r));
  for (let c = 0; c < gw; c++) {
    const d = `border${Rh[c]}Radius`;
    let f = Yf(t, d), m = Yf(n, d);
    if (f === void 0 && m === void 0)
      continue;
    f || (f = 0), m || (m = 0), f === 0 || m === 0 || wf(f) === wf(m) ? (e[d] = Math.max(ke(xf(f), xf(m), r), 0), (yt.test(m) || yt.test(f)) && (e[d] += "%")) : e[d] = m;
  }
  (t.rotate || n.rotate) && (e.rotate = ke(t.rotate || 0, n.rotate || 0, r));
}
function Yf(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const Mw = /* @__PURE__ */ Nh(0, 0.5, Lp), bw = /* @__PURE__ */ Nh(0.5, 0.95, st);
function Nh(e, t, n) {
  return (r) => r < e ? 0 : r > t ? 1 : n(/* @__PURE__ */ wr(e, t, r));
}
function Lf(e, t) {
  e.min = t.min, e.max = t.max;
}
function et(e, t) {
  Lf(e.x, t.x), Lf(e.y, t.y);
}
function Sf(e, t) {
  e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin;
}
function kf(e, t, n, r, s) {
  return e -= t, e = Po(e, 1 / n, r), s !== void 0 && (e = Po(e, 1 / s, r)), e;
}
function xw(e, t = 0, n = 1, r = 0.5, s, i = e, o = e) {
  if (yt.test(t) && (t = parseFloat(t), t = ke(o.min, o.max, t / 100) - o.min), typeof t != "number")
    return;
  let a = ke(i.min, i.max, r);
  e === i && (a -= t), e.min = kf(e.min, t, n, a, s), e.max = kf(e.max, t, n, a, s);
}
function Df(e, t, [n, r, s], i, o) {
  xw(e, t[n], t[r], t[s], t.scale, i, o);
}
const ww = ["x", "scaleX", "originX"], Yw = ["y", "scaleY", "originY"];
function Tf(e, t, n, r) {
  Df(e.x, t, ww, n ? n.x : void 0, r ? r.x : void 0), Df(e.y, t, Yw, n ? n.y : void 0, r ? r.y : void 0);
}
function Ef(e) {
  return e.translate === 0 && e.scale === 1;
}
function Ih(e) {
  return Ef(e.x) && Ef(e.y);
}
function jf(e, t) {
  return e.min === t.min && e.max === t.max;
}
function Lw(e, t) {
  return jf(e.x, t.x) && jf(e.y, t.y);
}
function Pf(e, t) {
  return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function Fh(e, t) {
  return Pf(e.x, t.x) && Pf(e.y, t.y);
}
function Af(e) {
  return We(e.x) / We(e.y);
}
function Cf(e, t) {
  return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
class Sw {
  constructor() {
    this.members = [];
  }
  add(t) {
    Wu(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (Uu(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((s) => t === s);
    if (n === 0)
      return !1;
    let r;
    for (let s = n; s >= 0; s--) {
      const i = this.members[s];
      if (i.isPresent !== !1) {
        r = i;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && (this.prevLead = r, this.lead = t, t.show(), r)) {
      r.instance && r.scheduleRender(), t.scheduleRender(), t.resumeFrom = r, n && (t.resumeFrom.preserveOpacity = !0), r.snapshot && (t.snapshot = r.snapshot, t.snapshot.latestValues = r.animationValues || r.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: s } = t.options;
      s === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(), r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  /**
   * Clear any leads that have been removed this render to prevent them from being
   * used in future animations and to prevent memory leaks
   */
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function kw(e, t, n) {
  let r = "";
  const s = e.x.translate / t.x, i = e.y.translate / t.y, o = (n == null ? void 0 : n.z) || 0;
  if ((s || i || o) && (r = `translate3d(${s}px, ${i}px, ${o}px) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
    const { transformPerspective: u, rotate: c, rotateX: d, rotateY: f, skewX: m, skewY: p } = n;
    u && (r = `perspective(${u}px) ${r}`), c && (r += `rotate(${c}deg) `), d && (r += `rotateX(${d}deg) `), f && (r += `rotateY(${f}deg) `), m && (r += `skewX(${m}deg) `), p && (r += `skewY(${p}deg) `);
  }
  const a = e.x.scale * t.x, l = e.y.scale * t.y;
  return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none";
}
const ml = ["", "X", "Y", "Z"], Dw = 1e3;
let Tw = 0;
function pl(e, t, n, r) {
  const { latestValues: s } = t;
  s[e] && (n[e] = s[e], t.setStaticValue(e, 0), r && (r[e] = 0));
}
function Vh(e) {
  if (e.hasCheckedOptimisedAppear = !0, e.root === e)
    return;
  const { visualElement: t } = e.options;
  if (!t)
    return;
  const n = kh(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: s, layoutId: i } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", we, !(s || i));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && Vh(r);
}
function zh({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: s }) {
  return class {
    constructor(o = {}, a = t == null ? void 0 : t()) {
      this.id = Tw++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, this.nodes.forEach(Pw), this.nodes.forEach(Hw), this.nodes.forEach(Ow), this.nodes.forEach(Aw);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = o, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new _w());
    }
    addEventListener(o, a) {
      return this.eventHandlers.has(o) || this.eventHandlers.set(o, new Gu()), this.eventHandlers.get(o).add(a);
    }
    notifyListeners(o, ...a) {
      const l = this.eventHandlers.get(o);
      l && l.notify(...a);
    }
    hasListeners(o) {
      return this.eventHandlers.has(o);
    }
    /**
     * Lifecycles
     */
    mount(o) {
      if (this.instance)
        return;
      this.isSVG = oh(o) && !yb(o), this.instance = o;
      const { layoutId: a, layout: l, visualElement: u } = this.options;
      if (u && !u.current && u.mount(o), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (l || a) && (this.isLayoutDirty = !0), e) {
        let c, d = 0;
        const f = () => this.root.updateBlockedByResize = !1;
        we.read(() => {
          d = window.innerWidth;
        }), e(o, () => {
          const m = window.innerWidth;
          m !== d && (d = m, this.root.updateBlockedByResize = !0, c && c(), c = vw(f, 250), wo.hasAnimatedSinceResize && (wo.hasAnimatedSinceResize = !1, this.nodes.forEach(Of)));
        });
      }
      a && this.root.registerSharedNode(a, this), this.options.animate !== !1 && u && (a || l) && this.addEventListener("didUpdate", ({ delta: c, hasLayoutChanged: d, hasRelativeLayoutChanged: f, layout: m }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const p = this.options.transition || u.getDefaultTransition() || Vw, { onLayoutAnimationStart: h, onLayoutAnimationComplete: _ } = u.getProps(), v = !this.targetLayout || !Fh(this.targetLayout, m), M = !d && f;
        if (this.options.layoutRoot || this.resumeFrom || M || d && (v || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
          const y = {
            ...lc(p, "layout"),
            onPlay: h,
            onComplete: _
          };
          (u.shouldReduceMotion || this.options.layoutRoot) && (y.delay = 0, y.type = !1), this.startAnimation(y), this.setAnimationOrigin(c, M);
        } else
          d || Of(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = m;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const o = this.getStack();
      o && o.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), qt(this.updateProjection);
    }
    // only on the root
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
    }
    // Note: currently only running on root node
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(Rw), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: o } = this.options;
      return o && o.getProps().transformTemplate;
    }
    willUpdate(o = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Vh(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c];
        d.shouldResetTransform = !0, d.updateScroll("snapshot"), d.options.layoutRoot && d.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l)
        return;
      const u = this.getTransformTemplate();
      this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0, this.updateSnapshot(), o && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach($f);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(Hf);
        return;
      }
      this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach($w), this.nodes.forEach(Ew), this.nodes.forEach(jw)) : this.nodes.forEach(Hf), this.clearAllSnapshots();
      const a = Ke.now();
      Oe.delta = $t(0, 1e3 / 60, a - Oe.timestamp), Oe.timestamp = a, Oe.isProcessing = !0, nl.update.process(Oe), nl.preRender.process(Oe), nl.render.process(Oe), Oe.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, cc.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(Cw), this.sharedNodes.forEach(Nw);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, we.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      we.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !We(this.snapshot.measuredBox.x) && !We(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++)
          this.path[l].updateScroll();
      const o = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = Te(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a && a.notify("LayoutMeasure", this.layout.layoutBox, o ? o.layoutBox : void 0);
    }
    updateScroll(o = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === o && (a = !1), a && this.instance) {
        const l = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: o,
          isRoot: l,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l
        };
      }
    }
    resetTransform() {
      if (!s)
        return;
      const o = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, a = this.projectionDelta && !Ih(this.projectionDelta), l = this.getTransformTemplate(), u = l ? l(this.latestValues, "") : void 0, c = u !== this.prevTransformTemplateValue;
      o && this.instance && (a || ln(this.latestValues) || c) && (s(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(o = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return o && (l = this.removeTransform(l)), zw(l), {
        animationId: this.root.animationId,
        measuredBox: a,
        layoutBox: l,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      var u;
      const { visualElement: o } = this.options;
      if (!o)
        return Te();
      const a = o.measureViewportBox();
      if (!(((u = this.scroll) == null ? void 0 : u.wasRoot) || this.path.some(Bw))) {
        const { scroll: c } = this.root;
        c && (jn(a.x, c.offset.x), jn(a.y, c.offset.y));
      }
      return a;
    }
    removeElementScroll(o) {
      var l;
      const a = Te();
      if (et(a, o), (l = this.scroll) != null && l.wasRoot)
        return a;
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u], { scroll: d, options: f } = c;
        c !== this.root && d && f.layoutScroll && (d.wasRoot && et(a, o), jn(a.x, d.offset.x), jn(a.y, d.offset.y));
      }
      return a;
    }
    applyTransform(o, a = !1) {
      const l = Te();
      et(l, o);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !a && c.options.layoutScroll && c.scroll && c !== c.root && Pn(l, {
          x: -c.scroll.offset.x,
          y: -c.scroll.offset.y
        }), ln(c.latestValues) && Pn(l, c.latestValues);
      }
      return ln(this.latestValues) && Pn(l, this.latestValues), l;
    }
    removeTransform(o) {
      const a = Te();
      et(a, o);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !ln(u.latestValues))
          continue;
        ou(u.latestValues) && u.updateSnapshot();
        const c = Te(), d = u.measurePageBox();
        et(c, d), Tf(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return ln(this.latestValues) && Tf(a, this.latestValues), a;
    }
    setTargetDelta(o) {
      this.targetDelta = o, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(o) {
      this.options = {
        ...this.options,
        ...o,
        crossfade: o.crossfade !== void 0 ? o.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Oe.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(o = !1) {
      var f;
      const a = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
      const l = !!this.resumingFrom || this !== a;
      if (!(o || l && this.isSharedProjectionDirty || this.isProjectionDirty || (f = this.parent) != null && f.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: c, layoutId: d } = this.options;
      if (!(!this.layout || !(c || d))) {
        if (this.resolvedRelativeTargetAt = Oe.timestamp, !this.targetDelta && !this.relativeTarget) {
          const m = this.getClosestProjectingParent();
          m && m.layout && this.animationProgress !== 1 ? (this.relativeParent = m, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Te(), this.relativeTargetOrigin = Te(), yr(this.relativeTargetOrigin, this.layout.layoutBox, m.layout.layoutBox), et(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = Te(), this.targetWithTransforms = Te()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), qx(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : et(this.target, this.layout.layoutBox), bh(this.target, this.targetDelta)) : et(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
          this.attemptToResolveRelativeTarget = !1;
          const m = this.getClosestProjectingParent();
          m && !!m.resumingFrom == !!this.resumingFrom && !m.options.layoutScroll && m.target && this.animationProgress !== 1 ? (this.relativeParent = m, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Te(), this.relativeTargetOrigin = Te(), yr(this.relativeTargetOrigin, this.target, m.target), et(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || ou(this.parent.latestValues) || Mh(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var p;
      const o = this.getLead(), a = !!this.resumingFrom || this !== o;
      let l = !0;
      if ((this.isProjectionDirty || (p = this.parent) != null && p.isProjectionDirty) && (l = !1), a && (this.isSharedProjectionDirty || this.isTransformDirty) && (l = !1), this.resolvedRelativeTargetAt === Oe.timestamp && (l = !1), l)
        return;
      const { layout: u, layoutId: c } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(u || c))
        return;
      et(this.layoutCorrected, this.layout.layoutBox);
      const d = this.treeScale.x, f = this.treeScale.y;
      lx(this.layoutCorrected, this.treeScale, this.path, a), o.layout && !o.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (o.target = o.layout.layoutBox, o.targetWithTransforms = Te());
      const { target: m } = o;
      if (!m) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Sf(this.prevProjectionDelta.x, this.projectionDelta.x), Sf(this.prevProjectionDelta.y, this.projectionDelta.y)), gr(this.projectionDelta, this.layoutCorrected, m, this.latestValues), (this.treeScale.x !== d || this.treeScale.y !== f || !Cf(this.projectionDelta.x, this.prevProjectionDelta.x) || !Cf(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", m));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(o = !0) {
      var a;
      if ((a = this.options.visualElement) == null || a.scheduleRender(), o) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = An(), this.projectionDelta = An(), this.projectionDeltaWithTransform = An();
    }
    setAnimationOrigin(o, a = !1) {
      const l = this.snapshot, u = l ? l.latestValues : {}, c = { ...this.latestValues }, d = An();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
      const f = Te(), m = l ? l.source : void 0, p = this.layout ? this.layout.source : void 0, h = m !== p, _ = this.getStack(), v = !_ || _.members.length <= 1, M = !!(h && !v && this.options.crossfade === !0 && !this.path.some(Fw));
      this.animationProgress = 0;
      let y;
      this.mixTargetDelta = (x) => {
        const w = x / 1e3;
        Rf(d.x, o.x, w), Rf(d.y, o.y, w), this.setTargetDelta(d), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (yr(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox), Iw(this.relativeTarget, this.relativeTargetOrigin, f, w), y && Lw(this.relativeTarget, y) && (this.isProjectionDirty = !1), y || (y = Te()), et(y, this.relativeTarget)), h && (this.animationValues = c, yw(c, u, this.latestValues, w, M, v)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = w;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(o) {
      var a, l, u;
      this.notifyListeners("animationStart"), (a = this.currentAnimation) == null || a.stop(), (u = (l = this.resumingFrom) == null ? void 0 : l.currentAnimation) == null || u.stop(), this.pendingAnimation && (qt(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = we.update(() => {
        wo.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = Fn(0)), this.currentAnimation = pw(this.motionValue, [0, 1e3], {
          ...o,
          velocity: 0,
          isSync: !0,
          onUpdate: (c) => {
            this.mixTargetDelta(c), o.onUpdate && o.onUpdate(c);
          },
          onStop: () => {
          },
          onComplete: () => {
            o.onComplete && o.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const o = this.getStack();
      o && o.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Dw), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const o = this.getLead();
      let { targetWithTransforms: a, target: l, layout: u, latestValues: c } = o;
      if (!(!a || !l || !u)) {
        if (this !== o && this.layout && u && Bh(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
          l = this.target || Te();
          const d = We(this.layout.layoutBox.x);
          l.x.min = o.target.x.min, l.x.max = l.x.min + d;
          const f = We(this.layout.layoutBox.y);
          l.y.min = o.target.y.min, l.y.max = l.y.min + f;
        }
        et(a, l), Pn(a, c), gr(this.projectionDeltaWithTransform, this.layoutCorrected, a, c);
      }
    }
    registerSharedNode(o, a) {
      this.sharedNodes.has(o) || this.sharedNodes.set(o, new Sw()), this.sharedNodes.get(o).add(a);
      const u = a.options.initialPromotionConfig;
      a.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(a) : void 0
      });
    }
    isLead() {
      const o = this.getStack();
      return o ? o.lead === this : !0;
    }
    getLead() {
      var a;
      const { layoutId: o } = this.options;
      return o ? ((a = this.getStack()) == null ? void 0 : a.lead) || this : this;
    }
    getPrevLead() {
      var a;
      const { layoutId: o } = this.options;
      return o ? (a = this.getStack()) == null ? void 0 : a.prevLead : void 0;
    }
    getStack() {
      const { layoutId: o } = this.options;
      if (o)
        return this.root.sharedNodes.get(o);
    }
    promote({ needsReset: o, transition: a, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      u && u.promote(this, l), o && (this.projectionDelta = void 0, this.needsReset = !0), a && this.setOptions({ transition: a });
    }
    relegate() {
      const o = this.getStack();
      return o ? o.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: o } = this.options;
      if (!o)
        return;
      let a = !1;
      const { latestValues: l } = o;
      if ((l.z || l.rotate || l.rotateX || l.rotateY || l.rotateZ || l.skewX || l.skewY) && (a = !0), !a)
        return;
      const u = {};
      l.z && pl("z", o, u, this.animationValues);
      for (let c = 0; c < ml.length; c++)
        pl(`rotate${ml[c]}`, o, u, this.animationValues), pl(`skew${ml[c]}`, o, u, this.animationValues);
      o.render();
      for (const c in u)
        o.setStaticValue(c, u[c]), this.animationValues && (this.animationValues[c] = u[c]);
      o.scheduleRender();
    }
    applyProjectionStyles(o, a) {
      var p, h;
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible) {
        o.visibility = "hidden";
        return;
      }
      const l = this.getTransformTemplate();
      if (this.needsReset) {
        this.needsReset = !1, o.visibility = "", o.opacity = "", o.pointerEvents = xo(a == null ? void 0 : a.pointerEvents) || "", o.transform = l ? l(this.latestValues, "") : "none";
        return;
      }
      const u = this.getLead();
      if (!this.projectionDelta || !this.layout || !u.target) {
        this.options.layoutId && (o.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, o.pointerEvents = xo(a == null ? void 0 : a.pointerEvents) || ""), this.hasProjected && !ln(this.latestValues) && (o.transform = l ? l({}, "") : "none", this.hasProjected = !1);
        return;
      }
      o.visibility = "";
      const c = u.animationValues || u.latestValues;
      this.applyTransformsToTarget();
      let d = kw(this.projectionDeltaWithTransform, this.treeScale, c);
      l && (d = l(c, d)), o.transform = d;
      const { x: f, y: m } = this.projectionDelta;
      o.transformOrigin = `${f.origin * 100}% ${m.origin * 100}% 0`, u.animationValues ? o.opacity = u === this ? (h = (p = c.opacity) != null ? p : this.latestValues.opacity) != null ? h : 1 : this.preserveOpacity ? this.latestValues.opacity : c.opacityExit : o.opacity = u === this ? c.opacity !== void 0 ? c.opacity : "" : c.opacityExit !== void 0 ? c.opacityExit : 0;
      for (const _ in kr) {
        if (c[_] === void 0)
          continue;
        const { correct: v, applyTo: M, isCSSVariable: y } = kr[_], x = d === "none" ? c[_] : v(c[_], u);
        if (M) {
          const w = M.length;
          for (let k = 0; k < w; k++)
            o[M[k]] = x;
        } else
          y ? this.options.visualElement.renderState.vars[_] = x : o[_] = x;
      }
      this.options.layoutId && (o.pointerEvents = u === this ? xo(a == null ? void 0 : a.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((o) => {
        var a;
        return (a = o.currentAnimation) == null ? void 0 : a.stop();
      }), this.root.nodes.forEach($f), this.root.sharedNodes.clear();
    }
  };
}
function Ew(e) {
  e.updateLayout();
}
function jw(e) {
  var n;
  const t = ((n = e.resumeFrom) == null ? void 0 : n.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: s } = e.layout, { animationType: i } = e.options, o = t.source !== e.layout.source;
    i === "size" ? nt((d) => {
      const f = o ? t.measuredBox[d] : t.layoutBox[d], m = We(f);
      f.min = r[d].min, f.max = f.min + m;
    }) : Bh(i, t.layoutBox, r) && nt((d) => {
      const f = o ? t.measuredBox[d] : t.layoutBox[d], m = We(r[d]);
      f.max = f.min + m, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[d].max = e.relativeTarget[d].min + m);
    });
    const a = An();
    gr(a, r, t.layoutBox);
    const l = An();
    o ? gr(l, e.applyTransform(s, !0), t.measuredBox) : gr(l, r, t.layoutBox);
    const u = !Ih(a);
    let c = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: m } = d;
        if (f && m) {
          const p = Te();
          yr(p, t.layoutBox, f.layoutBox);
          const h = Te();
          yr(h, r, m.layoutBox), Fh(p, h) || (c = !0), d.options.layoutRoot && (e.relativeTarget = h, e.relativeTargetOrigin = p, e.relativeParent = d);
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: t,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: u,
      hasRelativeLayoutChanged: c
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function Pw(e) {
  e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function Aw(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function Cw(e) {
  e.clearSnapshot();
}
function $f(e) {
  e.clearMeasurements();
}
function Hf(e) {
  e.isLayoutDirty = !1;
}
function $w(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function Of(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function Hw(e) {
  e.resolveTargetDelta();
}
function Ow(e) {
  e.calcProjection();
}
function Rw(e) {
  e.resetSkewAndRotation();
}
function Nw(e) {
  e.removeLeadSnapshot();
}
function Rf(e, t, n) {
  e.translate = ke(t.translate, 0, n), e.scale = ke(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function Nf(e, t, n, r) {
  e.min = ke(t.min, n.min, r), e.max = ke(t.max, n.max, r);
}
function Iw(e, t, n, r) {
  Nf(e.x, t.x, n.x, r), Nf(e.y, t.y, n.y, r);
}
function Fw(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const Vw = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, If = (e) => typeof navigator != "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), Ff = If("applewebkit/") && !If("chrome/") ? Math.round : st;
function Vf(e) {
  e.min = Ff(e.min), e.max = Ff(e.max);
}
function zw(e) {
  Vf(e.x), Vf(e.y);
}
function Bh(e, t, n) {
  return e === "position" || e === "preserve-aspect" && !Jx(Af(t), Af(n), 0.2);
}
function Bw(e) {
  var t;
  return e !== e.root && ((t = e.scroll) == null ? void 0 : t.wasRoot);
}
const Ww = zh({
  attachResizeListener: (e, t) => Dr(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), hl = {
  current: void 0
}, Wh = zh({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!hl.current) {
      const e = new Ww({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), hl.current = e;
    }
    return hl.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), Uw = {
  pan: {
    Feature: cw
  },
  drag: {
    Feature: uw,
    ProjectionNode: Wh,
    MeasureLayout: Oh
  }
};
function zf(e, t, n) {
  const { props: r } = e;
  e.animationState && r.whileHover && e.animationState.setActive("whileHover", n === "Start");
  const s = "onHover" + n, i = r[s];
  i && we.postRender(() => i(t, zr(t)));
}
class Kw extends tn {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = pb(t, (n, r) => (zf(this.node, r, "Start"), (s) => zf(this.node, s, "End"))));
  }
  unmount() {
  }
}
class Gw extends tn {
  constructor() {
    super(...arguments), this.isActive = !1;
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
  }
  mount() {
    this.unmount = Ir(Dr(this.node.current, "focus", () => this.onFocus()), Dr(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function Bf(e, t, n) {
  const { props: r } = e;
  if (e.current instanceof HTMLButtonElement && e.current.disabled)
    return;
  e.animationState && r.whileTap && e.animationState.setActive("whileTap", n === "Start");
  const s = "onTap" + (n === "End" ? "" : n), i = r[s];
  i && we.postRender(() => i(t, zr(t)));
}
class Jw extends tn {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = gb(t, (n, r) => (Bf(this.node, r, "Start"), (s, { success: i }) => Bf(this.node, s, i ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
  }
  unmount() {
  }
}
const du = /* @__PURE__ */ new WeakMap(), _l = /* @__PURE__ */ new WeakMap(), qw = (e) => {
  const t = du.get(e.target);
  t && t(e);
}, Xw = (e) => {
  e.forEach(qw);
};
function Zw({ root: e, ...t }) {
  const n = e || document;
  _l.has(n) || _l.set(n, {});
  const r = _l.get(n), s = JSON.stringify(t);
  return r[s] || (r[s] = new IntersectionObserver(Xw, { root: e, ...t })), r[s];
}
function Qw(e, t, n) {
  const r = Zw(t);
  return du.set(e, n), r.observe(e), () => {
    du.delete(e), r.unobserve(e);
  };
}
const e0 = {
  some: 0,
  all: 1
};
class t0 extends tn {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: n, margin: r, amount: s = "some", once: i } = t, o = {
      root: n ? n.current : void 0,
      rootMargin: r,
      threshold: typeof s == "number" ? s : e0[s]
    }, a = (l) => {
      const { isIntersecting: u } = l;
      if (this.isInView === u || (this.isInView = u, i && !u && this.hasEnteredView))
        return;
      u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
      const { onViewportEnter: c, onViewportLeave: d } = this.node.getProps(), f = u ? c : d;
      f && f(l);
    };
    return Qw(this.node.current, o, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver == "undefined")
      return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(n0(t, n)) && this.startObserver();
  }
  unmount() {
  }
}
function n0({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const r0 = {
  inView: {
    Feature: t0
  },
  tap: {
    Feature: Jw
  },
  focus: {
    Feature: Gw
  },
  hover: {
    Feature: Kw
  }
}, o0 = {
  layout: {
    ProjectionNode: Wh,
    MeasureLayout: Oh
  }
}, s0 = {
  ...zx,
  ...r0,
  ...Uw,
  ...o0
}, zn = /* @__PURE__ */ sx(s0, gx);
function i0({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ b.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ b.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ b.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
  }));
}
const a0 = /* @__PURE__ */ b.forwardRef(i0);
function l0({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ b.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ b.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ b.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m19.5 8.25-7.5 7.5-7.5-7.5"
  }));
}
const u0 = /* @__PURE__ */ b.forwardRef(l0);
function c0({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ b.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ b.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ b.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
  }));
}
const d0 = /* @__PURE__ */ b.forwardRef(c0);
function f0({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ b.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ b.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ b.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
  }));
}
const m0 = /* @__PURE__ */ b.forwardRef(f0);
function p0({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ b.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ b.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ b.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M6 18 18 6M6 6l12 12"
  }));
}
const Uh = /* @__PURE__ */ b.forwardRef(p0);
var Kh = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function n() {
      for (var i = "", o = 0; o < arguments.length; o++) {
        var a = arguments[o];
        a && (i = s(i, r(a)));
      }
      return i;
    }
    function r(i) {
      if (typeof i == "string" || typeof i == "number")
        return i;
      if (typeof i != "object")
        return "";
      if (Array.isArray(i))
        return n.apply(null, i);
      if (i.toString !== Object.prototype.toString && !i.toString.toString().includes("[native code]"))
        return i.toString();
      var o = "";
      for (var a in i)
        t.call(i, a) && i[a] && (o = s(o, a));
      return o;
    }
    function s(i, o) {
      return o ? i ? i + " " + o : i + o : i;
    }
    e.exports ? (n.default = n, e.exports = n) : window.classNames = n;
  })();
})(Kh);
var h0 = Kh.exports;
const J = /* @__PURE__ */ mp(h0), Gh = ge({
  activeAccordion: "",
  setActiveAccordion: null
}), yN = ({
  className: e,
  innerClassName: t,
  innerContentClassName: n,
  icon: r,
  label: s,
  labelClassName: i,
  labelHint: o,
  value: a,
  isOpened: l = !1,
  enableOverflow: u,
  children: c,
  disableOpenHide: d = !1,
  headerRightItem: f = /* @__PURE__ */ g.jsx(g.Fragment, {})
}) => {
  const { activeAccordion: m, setActiveAccordion: p } = re(
    Gh
  ), [h, _] = oe(
    m ? m === a : l
  );
  ue(() => {
    m && _(m === a);
  }, [m]);
  const v = () => {
    d || (p && p(h ? "" : a), _(!h));
  };
  return /* @__PURE__ */ g.jsxs("div", { className: e, children: [
    /* @__PURE__ */ g.jsxs(
      "div",
      {
        className: J(
          "flex w-full justify-between items-center gap-[30px] rounded-[11px] bg-light-4-tint font-semibold border border-light-3-tint px-[20px] py-[12px] text-left text-[18px] text-dark focus:outline-none transition-all duration-[180ms] cursor-pointer",
          h && "rounded-b-none",
          !d && "hover:bg-light-3-tint",
          t
        ),
        onClick: v,
        children: [
          /* @__PURE__ */ g.jsxs("div", { className: "flex flex-row items-center justify-between w-full h-[45px]", children: [
            /* @__PURE__ */ g.jsxs("div", { className: "flex items-center gap-[10px]", children: [
              r,
              /* @__PURE__ */ g.jsxs("div", { className: "flex items-center", children: [
                /* @__PURE__ */ g.jsx("span", { className: i, children: s }),
                /* @__PURE__ */ g.jsx("div", { className: "ml-1 text-sm text-light-dark", children: o })
              ] })
            ] }),
            f
          ] }),
          !d && /* @__PURE__ */ g.jsx(
            u0,
            {
              className: J(
                "h-6 w-6 transition-all duration-[280ms]",
                h && "rotate-180 transform"
              )
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ g.jsx(mc, { initial: !1, children: h && /* @__PURE__ */ g.jsx(
      zn.div,
      {
        initial: { height: 0, opacity: 0 },
        animate: {
          height: "auto",
          opacity: 1
        },
        exit: { height: 0, translateY: -16, opacity: 0 },
        transition: { duration: 0.28, type: "tween" },
        className: J(!u && "overflow-hidden"),
        children: /* @__PURE__ */ g.jsx(
          "div",
          {
            className: J(
              "p-[20px] border border-light-3-tint border-t-0 rounded-b-[11px]",
              n
            ),
            children: c
          }
        )
      }
    ) })
  ] });
}, MN = ({ className: e, initialValue: t = "", children: n }) => {
  const [r, s] = oe(t);
  return /* @__PURE__ */ g.jsx("div", { className: e, children: /* @__PURE__ */ g.jsx(
    Gh.Provider,
    {
      value: { activeAccordion: r, setActiveAccordion: s },
      children: n
    }
  ) });
}, Jh = typeof document != "undefined" ? T.useLayoutEffect : () => {
};
var vl;
const _0 = (vl = T.useInsertionEffect) !== null && vl !== void 0 ? vl : Jh;
function v0(e) {
  const t = q(null);
  return _0(() => {
    t.current = e;
  }, [
    e
  ]), X((...n) => {
    const r = t.current;
    return r == null ? void 0 : r(...n);
  }, []);
}
const nn = (e) => {
  var t;
  return (t = e == null ? void 0 : e.ownerDocument) !== null && t !== void 0 ? t : document;
}, fn = (e) => e && "window" in e && e.window === e ? e : nn(e).defaultView || window;
function g0(e) {
  return e !== null && typeof e == "object" && "nodeType" in e && typeof e.nodeType == "number";
}
function y0(e) {
  return g0(e) && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && "host" in e;
}
let M0 = !1;
function wc() {
  return M0;
}
function qh(e, t) {
  if (!wc()) return t && e ? e.contains(t) : !1;
  if (!e || !t) return !1;
  let n = t;
  for (; n !== null; ) {
    if (n === e) return !0;
    n.tagName === "SLOT" && n.assignedSlot ? n = n.assignedSlot.parentNode : y0(n) ? n = n.host : n = n.parentNode;
  }
  return !1;
}
const fu = (e = document) => {
  var t;
  if (!wc()) return e.activeElement;
  let n = e.activeElement;
  for (; n && "shadowRoot" in n && (!((t = n.shadowRoot) === null || t === void 0) && t.activeElement); ) n = n.shadowRoot.activeElement;
  return n;
};
function Xh(e) {
  return wc() && e.target.shadowRoot && e.composedPath ? e.composedPath()[0] : e.target;
}
function Sa(e) {
  var t;
  if (typeof window == "undefined" || window.navigator == null) return !1;
  let n = (t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.brands;
  return Array.isArray(n) && n.some((r) => e.test(r.brand)) || e.test(window.navigator.userAgent);
}
function Yc(e) {
  var t;
  return typeof window != "undefined" && window.navigator != null ? e.test(((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.platform) || window.navigator.platform) : !1;
}
function It(e) {
  if (process.env.NODE_ENV === "test") return e;
  let t = null;
  return () => (t == null && (t = e()), t);
}
const Lc = It(function() {
  return Yc(/^Mac/i);
}), b0 = It(function() {
  return Yc(/^iPhone/i);
}), x0 = It(function() {
  return Yc(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  Lc() && navigator.maxTouchPoints > 1;
}), w0 = It(function() {
  return b0() || x0();
});
It(function() {
  return Lc() || w0();
});
It(function() {
  return Sa(/AppleWebKit/i) && !Y0();
});
const Y0 = It(function() {
  return Sa(/Chrome/i);
}), L0 = It(function() {
  return Sa(/Android/i);
});
It(function() {
  return Sa(/Firefox/i);
});
function Zh() {
  let e = q(/* @__PURE__ */ new Map()), t = X((s, i, o, a) => {
    let l = a != null && a.once ? (...u) => {
      e.current.delete(o), o(...u);
    } : o;
    e.current.set(o, {
      type: i,
      eventTarget: s,
      fn: l,
      options: a
    }), s.addEventListener(i, l, a);
  }, []), n = X((s, i, o, a) => {
    var l;
    let u = ((l = e.current.get(o)) === null || l === void 0 ? void 0 : l.fn) || o;
    s.removeEventListener(i, u, a), e.current.delete(o);
  }, []), r = X(() => {
    e.current.forEach((s, i) => {
      n(s.eventTarget, s.type, i, s.options);
    });
  }, [
    n
  ]);
  return ue(() => r, [
    r
  ]), {
    addGlobalListener: t,
    removeGlobalListener: n,
    removeAllGlobalListeners: r
  };
}
function S0(e) {
  return e.pointerType === "" && e.isTrusted ? !0 : L0() && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType;
}
function Qh(e) {
  let t = e;
  return t.nativeEvent = e, t.isDefaultPrevented = () => t.defaultPrevented, t.isPropagationStopped = () => t.cancelBubble, t.persist = () => {
  }, t;
}
function k0(e, t) {
  Object.defineProperty(e, "target", {
    value: t
  }), Object.defineProperty(e, "currentTarget", {
    value: t
  });
}
function e_(e) {
  let t = q({
    isFocused: !1,
    observer: null
  });
  Jh(() => {
    const r = t.current;
    return () => {
      r.observer && (r.observer.disconnect(), r.observer = null);
    };
  }, []);
  let n = v0((r) => {
    e == null || e(r);
  });
  return X((r) => {
    if (r.target instanceof HTMLButtonElement || r.target instanceof HTMLInputElement || r.target instanceof HTMLTextAreaElement || r.target instanceof HTMLSelectElement) {
      t.current.isFocused = !0;
      let s = r.target, i = (o) => {
        if (t.current.isFocused = !1, s.disabled) {
          let a = Qh(o);
          n(a);
        }
        t.current.observer && (t.current.observer.disconnect(), t.current.observer = null);
      };
      s.addEventListener("focusout", i, {
        once: !0
      }), t.current.observer = new MutationObserver(() => {
        if (t.current.isFocused && s.disabled) {
          var o;
          (o = t.current.observer) === null || o === void 0 || o.disconnect();
          let a = s === document.activeElement ? null : document.activeElement;
          s.dispatchEvent(new FocusEvent("blur", {
            relatedTarget: a
          })), s.dispatchEvent(new FocusEvent("focusout", {
            bubbles: !0,
            relatedTarget: a
          }));
        }
      }), t.current.observer.observe(s, {
        attributes: !0,
        attributeFilter: [
          "disabled"
        ]
      });
    }
  }, [
    n
  ]);
}
let D0 = !1, Br = null, mu = /* @__PURE__ */ new Set(), Mr = /* @__PURE__ */ new Map(), gn = !1, pu = !1;
const T0 = {
  Tab: !0,
  Escape: !0
};
function Sc(e, t) {
  for (let n of mu) n(e, t);
}
function E0(e) {
  return !(e.metaKey || !Lc() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function Ao(e) {
  gn = !0, E0(e) && (Br = "keyboard", Sc("keyboard", e));
}
function rt(e) {
  Br = "pointer", (e.type === "mousedown" || e.type === "pointerdown") && (gn = !0, Sc("pointer", e));
}
function t_(e) {
  S0(e) && (gn = !0, Br = "virtual");
}
function n_(e) {
  e.target === window || e.target === document || D0 || !e.isTrusted || (!gn && !pu && (Br = "virtual", Sc("virtual", e)), gn = !1, pu = !1);
}
function r_() {
  gn = !1, pu = !0;
}
function hu(e) {
  if (typeof window == "undefined" || typeof document == "undefined" || Mr.get(fn(e))) return;
  const t = fn(e), n = nn(e);
  let r = t.HTMLElement.prototype.focus;
  t.HTMLElement.prototype.focus = function() {
    gn = !0, r.apply(this, arguments);
  }, n.addEventListener("keydown", Ao, !0), n.addEventListener("keyup", Ao, !0), n.addEventListener("click", t_, !0), t.addEventListener("focus", n_, !0), t.addEventListener("blur", r_, !1), typeof PointerEvent != "undefined" ? (n.addEventListener("pointerdown", rt, !0), n.addEventListener("pointermove", rt, !0), n.addEventListener("pointerup", rt, !0)) : process.env.NODE_ENV === "test" && (n.addEventListener("mousedown", rt, !0), n.addEventListener("mousemove", rt, !0), n.addEventListener("mouseup", rt, !0)), t.addEventListener("beforeunload", () => {
    o_(e);
  }, {
    once: !0
  }), Mr.set(t, {
    focus: r
  });
}
const o_ = (e, t) => {
  const n = fn(e), r = nn(e);
  t && r.removeEventListener("DOMContentLoaded", t), Mr.has(n) && (n.HTMLElement.prototype.focus = Mr.get(n).focus, r.removeEventListener("keydown", Ao, !0), r.removeEventListener("keyup", Ao, !0), r.removeEventListener("click", t_, !0), n.removeEventListener("focus", n_, !0), n.removeEventListener("blur", r_, !1), typeof PointerEvent != "undefined" ? (r.removeEventListener("pointerdown", rt, !0), r.removeEventListener("pointermove", rt, !0), r.removeEventListener("pointerup", rt, !0)) : process.env.NODE_ENV === "test" && (r.removeEventListener("mousedown", rt, !0), r.removeEventListener("mousemove", rt, !0), r.removeEventListener("mouseup", rt, !0)), Mr.delete(n));
};
function j0(e) {
  const t = nn(e);
  let n;
  return t.readyState !== "loading" ? hu(e) : (n = () => {
    hu(e);
  }, t.addEventListener("DOMContentLoaded", n)), () => o_(e, n);
}
typeof document != "undefined" && j0();
function s_() {
  return Br !== "pointer";
}
const P0 = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
function A0(e, t, n) {
  let r = nn(n == null ? void 0 : n.target);
  const s = typeof window != "undefined" ? fn(n == null ? void 0 : n.target).HTMLInputElement : HTMLInputElement, i = typeof window != "undefined" ? fn(n == null ? void 0 : n.target).HTMLTextAreaElement : HTMLTextAreaElement, o = typeof window != "undefined" ? fn(n == null ? void 0 : n.target).HTMLElement : HTMLElement, a = typeof window != "undefined" ? fn(n == null ? void 0 : n.target).KeyboardEvent : KeyboardEvent;
  return e = e || r.activeElement instanceof s && !P0.has(r.activeElement.type) || r.activeElement instanceof i || r.activeElement instanceof o && r.activeElement.isContentEditable, !(e && t === "keyboard" && n instanceof a && !T0[n.key]);
}
function C0(e, t, n) {
  hu(), ue(() => {
    let r = (s, i) => {
      A0(!!(n != null && n.isTextInput), s, i) && e(s_());
    };
    return mu.add(r), () => {
      mu.delete(r);
    };
  }, t);
}
function $0(e) {
  let { isDisabled: t, onFocus: n, onBlur: r, onFocusChange: s } = e;
  const i = X((l) => {
    if (l.target === l.currentTarget)
      return r && r(l), s && s(!1), !0;
  }, [
    r,
    s
  ]), o = e_(i), a = X((l) => {
    const u = nn(l.target), c = u ? fu(u) : fu();
    l.target === l.currentTarget && c === Xh(l.nativeEvent) && (n && n(l), s && s(!0), o(l));
  }, [
    s,
    n,
    o
  ]);
  return {
    focusProps: {
      onFocus: !t && (n || s || r) ? a : void 0,
      onBlur: !t && (r || s) ? i : void 0
    }
  };
}
function H0(e) {
  let { isDisabled: t, onBlurWithin: n, onFocusWithin: r, onFocusWithinChange: s } = e, i = q({
    isFocusWithin: !1
  }), { addGlobalListener: o, removeAllGlobalListeners: a } = Zh(), l = X((d) => {
    d.currentTarget.contains(d.target) && i.current.isFocusWithin && !d.currentTarget.contains(d.relatedTarget) && (i.current.isFocusWithin = !1, a(), n && n(d), s && s(!1));
  }, [
    n,
    s,
    i,
    a
  ]), u = e_(l), c = X((d) => {
    if (!d.currentTarget.contains(d.target)) return;
    const f = nn(d.target), m = fu(f);
    if (!i.current.isFocusWithin && m === Xh(d.nativeEvent)) {
      r && r(d), s && s(!0), i.current.isFocusWithin = !0, u(d);
      let p = d.currentTarget;
      o(f, "focus", (h) => {
        if (i.current.isFocusWithin && !qh(p, h.target)) {
          let _ = new f.defaultView.FocusEvent("blur", {
            relatedTarget: h.target
          });
          k0(_, p);
          let v = Qh(_);
          l(v);
        }
      }, {
        capture: !0
      });
    }
  }, [
    r,
    s,
    u,
    o,
    l
  ]);
  return t ? {
    focusWithinProps: {
      // These cannot be null, that would conflict in mergeProps
      onFocus: void 0,
      onBlur: void 0
    }
  } : {
    focusWithinProps: {
      onFocus: c,
      onBlur: l
    }
  };
}
let Co = !1, lo = 0;
function _u() {
  Co = !0, setTimeout(() => {
    Co = !1;
  }, 50);
}
function Wf(e) {
  e.pointerType === "touch" && _u();
}
function O0() {
  if (typeof document != "undefined")
    return lo === 0 && (typeof PointerEvent != "undefined" ? document.addEventListener("pointerup", Wf) : process.env.NODE_ENV === "test" && document.addEventListener("touchend", _u)), lo++, () => {
      lo--, !(lo > 0) && (typeof PointerEvent != "undefined" ? document.removeEventListener("pointerup", Wf) : process.env.NODE_ENV === "test" && document.removeEventListener("touchend", _u));
    };
}
function Wr(e) {
  let { onHoverStart: t, onHoverChange: n, onHoverEnd: r, isDisabled: s } = e, [i, o] = oe(!1), a = q({
    isHovered: !1,
    ignoreEmulatedMouseEvents: !1,
    pointerType: "",
    target: null
  }).current;
  ue(O0, []);
  let { addGlobalListener: l, removeAllGlobalListeners: u } = Zh(), { hoverProps: c, triggerHoverEnd: d } = pe(() => {
    let f = (h, _) => {
      if (a.pointerType = _, s || _ === "touch" || a.isHovered || !h.currentTarget.contains(h.target)) return;
      a.isHovered = !0;
      let v = h.currentTarget;
      a.target = v, l(nn(h.target), "pointerover", (M) => {
        a.isHovered && a.target && !qh(a.target, M.target) && m(M, M.pointerType);
      }, {
        capture: !0
      }), t && t({
        type: "hoverstart",
        target: v,
        pointerType: _
      }), n && n(!0), o(!0);
    }, m = (h, _) => {
      let v = a.target;
      a.pointerType = "", a.target = null, !(_ === "touch" || !a.isHovered || !v) && (a.isHovered = !1, u(), r && r({
        type: "hoverend",
        target: v,
        pointerType: _
      }), n && n(!1), o(!1));
    }, p = {};
    return typeof PointerEvent != "undefined" ? (p.onPointerEnter = (h) => {
      Co && h.pointerType === "mouse" || f(h, h.pointerType);
    }, p.onPointerLeave = (h) => {
      !s && h.currentTarget.contains(h.target) && m(h, h.pointerType);
    }) : process.env.NODE_ENV === "test" && (p.onTouchStart = () => {
      a.ignoreEmulatedMouseEvents = !0;
    }, p.onMouseEnter = (h) => {
      !a.ignoreEmulatedMouseEvents && !Co && f(h, "mouse"), a.ignoreEmulatedMouseEvents = !1;
    }, p.onMouseLeave = (h) => {
      !s && h.currentTarget.contains(h.target) && m(h, "mouse");
    }), {
      hoverProps: p,
      triggerHoverEnd: m
    };
  }, [
    t,
    n,
    r,
    s,
    a,
    l,
    u
  ]);
  return ue(() => {
    s && d({
      currentTarget: a.target
    }, a.pointerType);
  }, [
    s
  ]), {
    hoverProps: c,
    isHovered: i
  };
}
function Ur(e = {}) {
  let { autoFocus: t = !1, isTextInput: n, within: r } = e, s = q({
    isFocused: !1,
    isFocusVisible: t || s_()
  }), [i, o] = oe(!1), [a, l] = oe(() => s.current.isFocused && s.current.isFocusVisible), u = X(() => l(s.current.isFocused && s.current.isFocusVisible), []), c = X((m) => {
    s.current.isFocused = m, o(m), u();
  }, [
    u
  ]);
  C0((m) => {
    s.current.isFocusVisible = m, u();
  }, [], {
    isTextInput: n
  });
  let { focusProps: d } = $0({
    isDisabled: r,
    onFocusChange: c
  }), { focusWithinProps: f } = H0({
    isDisabled: !r,
    onFocusWithinChange: c
  });
  return {
    isFocused: i,
    isFocusVisible: a,
    focusProps: r ? f : d
  };
}
var R0 = Object.defineProperty, N0 = (e, t, n) => t in e ? R0(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, gl = (e, t, n) => (N0(e, typeof t != "symbol" ? t + "" : t, n), n);
let I0 = class {
  constructor() {
    gl(this, "current", this.detect()), gl(this, "handoffState", "pending"), gl(this, "currentId", 0);
  }
  set(t) {
    this.current !== t && (this.handoffState = "pending", this.currentId = 0, this.current = t);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window == "undefined" || typeof document == "undefined" ? "server" : "client";
  }
  handoff() {
    this.handoffState === "pending" && (this.handoffState = "complete");
  }
  get isHandoffComplete() {
    return this.handoffState === "complete";
  }
}, Mt = new I0();
function rn(e) {
  var t;
  return Mt.isServer ? null : e == null ? document : (t = e == null ? void 0 : e.ownerDocument) != null ? t : document;
}
function $o(e) {
  var t, n;
  return Mt.isServer ? null : e == null ? document : (n = (t = e == null ? void 0 : e.getRootNode) == null ? void 0 : t.call(e)) != null ? n : document;
}
function i_(e) {
  var t, n;
  return (n = (t = $o(e)) == null ? void 0 : t.activeElement) != null ? n : null;
}
function ka(e) {
  return i_(e) === e;
}
function Da(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
function qe() {
  let e = [], t = { addEventListener(n, r, s, i) {
    return n.addEventListener(r, s, i), t.add(() => n.removeEventListener(r, s, i));
  }, requestAnimationFrame(...n) {
    let r = requestAnimationFrame(...n);
    return t.add(() => cancelAnimationFrame(r));
  }, nextFrame(...n) {
    return t.requestAnimationFrame(() => t.requestAnimationFrame(...n));
  }, setTimeout(...n) {
    let r = setTimeout(...n);
    return t.add(() => clearTimeout(r));
  }, microTask(...n) {
    let r = { current: !0 };
    return Da(() => {
      r.current && n[0]();
    }), t.add(() => {
      r.current = !1;
    });
  }, style(n, r, s) {
    let i = n.style.getPropertyValue(r);
    return Object.assign(n.style, { [r]: s }), this.add(() => {
      Object.assign(n.style, { [r]: i });
    });
  }, group(n) {
    let r = qe();
    return n(r), this.add(() => r.dispose());
  }, add(n) {
    return e.includes(n) || e.push(n), () => {
      let r = e.indexOf(n);
      if (r >= 0) for (let s of e.splice(r, 1)) s();
    };
  }, dispose() {
    for (let n of e.splice(0)) n();
  } };
  return t;
}
function kt() {
  let [e] = oe(qe);
  return ue(() => () => e.dispose(), [e]), e;
}
let Me = (e, t) => {
  Mt.isServer ? ue(e, t) : Ma(e, t);
};
function Ft(e) {
  let t = q(e);
  return Me(() => {
    t.current = e;
  }, [e]), t;
}
let Z = function(e) {
  let t = Ft(e);
  return T.useCallback((...n) => t.current(...n), [t]);
};
function F0(e) {
  let t = e.width / 2, n = e.height / 2;
  return { top: e.clientY - n, right: e.clientX + t, bottom: e.clientY + n, left: e.clientX - t };
}
function V0(e, t) {
  return !(!e || !t || e.right < t.left || e.left > t.right || e.bottom < t.top || e.top > t.bottom);
}
function Ta({ disabled: e = !1 } = {}) {
  let t = q(null), [n, r] = oe(!1), s = kt(), i = Z(() => {
    t.current = null, r(!1), s.dispose();
  }), o = Z((a) => {
    if (s.dispose(), t.current === null) {
      t.current = a.currentTarget, r(!0);
      {
        let l = rn(a.currentTarget);
        s.addEventListener(l, "pointerup", i, !1), s.addEventListener(l, "pointermove", (u) => {
          if (t.current) {
            let c = F0(u);
            r(V0(c, t.current.getBoundingClientRect()));
          }
        }, !1), s.addEventListener(l, "pointercancel", i, !1);
      }
    }
  });
  return { pressed: n, pressProps: e ? {} : { onPointerDown: o, onPointerUp: i, onClick: i } };
}
function Ee(e) {
  return pe(() => e, Object.values(e));
}
let z0 = ge(void 0);
function Kr() {
  return re(z0);
}
function vu(...e) {
  return Array.from(new Set(e.flatMap((t) => typeof t == "string" ? t.split(" ") : []))).filter(Boolean).join(" ");
}
function Ye(e, t, ...n) {
  if (e in t) {
    let s = t[e];
    return typeof s == "function" ? s(...n) : s;
  }
  let r = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((s) => `"${s}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(r, Ye), r;
}
var wt = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(wt || {}), Gt = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(Gt || {});
function xe() {
  let e = W0();
  return X((t) => B0({ mergeRefs: e, ...t }), [e]);
}
function B0({ ourProps: e, theirProps: t, slot: n, defaultTag: r, features: s, visible: i = !0, name: o, mergeRefs: a }) {
  a = a != null ? a : U0;
  let l = a_(t, e);
  if (i) return uo(l, n, r, o, a);
  let u = s != null ? s : 0;
  if (u & 2) {
    let { static: c = !1, ...d } = l;
    if (c) return uo(d, n, r, o, a);
  }
  if (u & 1) {
    let { unmount: c = !0, ...d } = l;
    return Ye(c ? 0 : 1, { 0() {
      return null;
    }, 1() {
      return uo({ ...d, hidden: !0, style: { display: "none" } }, n, r, o, a);
    } });
  }
  return uo(l, n, r, o, a);
}
function uo(e, t = {}, n, r, s) {
  let { as: i = n, children: o, refName: a = "ref", ...l } = yl(e, ["unmount", "static"]), u = e.ref !== void 0 ? { [a]: e.ref } : {}, c = typeof o == "function" ? o(t) : o;
  "className" in l && l.className && typeof l.className == "function" && (l.className = l.className(t)), l["aria-labelledby"] && l["aria-labelledby"] === l.id && (l["aria-labelledby"] = void 0);
  let d = {};
  if (t) {
    let f = !1, m = [];
    for (let [p, h] of Object.entries(t)) typeof h == "boolean" && (f = !0), h === !0 && m.push(p.replace(/([A-Z])/g, (_) => `-${_.toLowerCase()}`));
    if (f) {
      d["data-headlessui-state"] = m.join(" ");
      for (let p of m) d[`data-${p}`] = "";
    }
  }
  if (On(i) && (Object.keys(Kt(l)).length > 0 || Object.keys(Kt(d)).length > 0)) if (!ba(c) || Array.isArray(c) && c.length > 1 || G0(c)) {
    if (Object.keys(Kt(l)).length > 0) throw new Error(['Passing props on "Fragment"!', "", `The current component <${r} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(Kt(l)).concat(Object.keys(Kt(d))).map((f) => `  - ${f}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((f) => `  - ${f}`).join(`
`)].join(`
`));
  } else {
    let f = c.props, m = f == null ? void 0 : f.className, p = typeof m == "function" ? (...v) => vu(m(...v), l.className) : vu(m, l.className), h = p ? { className: p } : {}, _ = a_(c.props, Kt(yl(l, ["ref"])));
    for (let v in d) v in _ && delete d[v];
    return dp(c, Object.assign({}, _, d, u, { ref: s(K0(c), u.ref) }, h));
  }
  return cp(i, Object.assign({}, yl(l, ["ref"]), !On(i) && u, !On(i) && d), c);
}
function W0() {
  let e = q([]), t = X((n) => {
    for (let r of e.current) r != null && (typeof r == "function" ? r(n) : r.current = n);
  }, []);
  return (...n) => {
    if (!n.every((r) => r == null)) return e.current = n, t;
  };
}
function U0(...e) {
  return e.every((t) => t == null) ? void 0 : (t) => {
    for (let n of e) n != null && (typeof n == "function" ? n(t) : n.current = t);
  };
}
function a_(...e) {
  if (e.length === 0) return {};
  if (e.length === 1) return e[0];
  let t = {}, n = {};
  for (let r of e) for (let s in r) s.startsWith("on") && typeof r[s] == "function" ? (n[s] != null || (n[s] = []), n[s].push(r[s])) : t[s] = r[s];
  if (t.disabled || t["aria-disabled"]) for (let r in n) /^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(r) && (n[r] = [(s) => {
    var i;
    return (i = s == null ? void 0 : s.preventDefault) == null ? void 0 : i.call(s);
  }]);
  for (let r in n) Object.assign(t, { [r](s, ...i) {
    let o = n[r];
    for (let a of o) {
      if ((s instanceof Event || (s == null ? void 0 : s.nativeEvent) instanceof Event) && s.defaultPrevented) return;
      a(s, ...i);
    }
  } });
  return t;
}
function Zt(...e) {
  if (e.length === 0) return {};
  if (e.length === 1) return e[0];
  let t = {}, n = {};
  for (let r of e) for (let s in r) s.startsWith("on") && typeof r[s] == "function" ? (n[s] != null || (n[s] = []), n[s].push(r[s])) : t[s] = r[s];
  for (let r in n) Object.assign(t, { [r](...s) {
    let i = n[r];
    for (let o of i) o == null || o(...s);
  } });
  return t;
}
function be(e) {
  var t;
  return Object.assign(Nr(e), { displayName: (t = e.displayName) != null ? t : e.name });
}
function Kt(e) {
  let t = Object.assign({}, e);
  for (let n in t) t[n] === void 0 && delete t[n];
  return t;
}
function yl(e, t = []) {
  let n = Object.assign({}, e);
  for (let r of t) r in n && delete n[r];
  return n;
}
function K0(e) {
  return T.version.split(".")[0] >= "19" ? e.props.ref : e.ref;
}
function On(e) {
  return e === Ae || e === Symbol.for("react.fragment");
}
function G0(e) {
  return On(e.type);
}
function kc(e, t, n) {
  let [r, s] = oe(n), i = e !== void 0, o = q(i), a = q(!1), l = q(!1);
  return i && !o.current && !a.current ? (a.current = !0, o.current = i, console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")) : !i && o.current && !l.current && (l.current = !0, o.current = i, console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")), [i ? e : r, Z((u) => (i || dt(() => s(u)), t == null ? void 0 : t(u)))];
}
function Dc(e) {
  let [t] = oe(e);
  return t;
}
function l_(e = {}, t = null, n = []) {
  for (let [r, s] of Object.entries(e)) c_(n, u_(t, r), s);
  return n;
}
function u_(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function c_(e, t, n) {
  if (Array.isArray(n)) for (let [r, s] of n.entries()) c_(e, u_(t, r.toString()), s);
  else n instanceof Date ? e.push([t, n.toISOString()]) : typeof n == "boolean" ? e.push([t, n ? "1" : "0"]) : typeof n == "string" ? e.push([t, n]) : typeof n == "number" ? e.push([t, `${n}`]) : n == null ? e.push([t, ""]) : J0(n) && !ba(n) && l_(n, t, e);
}
function d_(e) {
  var t, n;
  let r = (t = e == null ? void 0 : e.form) != null ? t : e.closest("form");
  if (r) {
    for (let s of r.elements) if (s !== e && (s.tagName === "INPUT" && s.type === "submit" || s.tagName === "BUTTON" && s.type === "submit" || s.nodeName === "INPUT" && s.type === "image")) {
      s.click();
      return;
    }
    (n = r.requestSubmit) == null || n.call(r);
  }
}
function J0(e) {
  if (Object.prototype.toString.call(e) !== "[object Object]") return !1;
  let t = Object.getPrototypeOf(e);
  return t === null || Object.getPrototypeOf(t) === null;
}
let q0 = "span";
var Bn = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Bn || {});
function X0(e, t) {
  var n;
  let { features: r = 1, ...s } = e, i = { ref: t, "aria-hidden": (r & 2) === 2 ? !0 : (n = s["aria-hidden"]) != null ? n : void 0, hidden: (r & 4) === 4 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(r & 4) === 4 && (r & 2) !== 2 && { display: "none" } } };
  return xe()({ ourProps: i, theirProps: s, slot: {}, defaultTag: q0, name: "Hidden" });
}
let Tr = be(X0), Z0 = ge(null);
function Q0({ children: e }) {
  let t = re(Z0);
  if (!t) return T.createElement(T.Fragment, null, e);
  let { target: n } = t;
  return n ? Fu(T.createElement(T.Fragment, null, e), n) : null;
}
function Tc({ data: e, form: t, disabled: n, onReset: r, overrides: s }) {
  let [i, o] = oe(null), a = kt();
  return ue(() => {
    if (r && i) return a.addEventListener(i, "reset", r);
  }, [i, t, r]), T.createElement(Q0, null, T.createElement(eY, { setForm: o, formId: t }), l_(e).map(([l, u]) => T.createElement(Tr, { features: Bn.Hidden, ...Kt({ key: l, as: "input", type: "hidden", hidden: !0, readOnly: !0, form: t, disabled: n, name: l, value: u, ...s }) })));
}
function eY({ setForm: e, formId: t }) {
  return ue(() => {
    if (t) {
      let n = document.getElementById(t);
      n && e(n);
    }
  }, [e, t]), t ? null : T.createElement(Tr, { features: Bn.Hidden, as: "input", type: "hidden", hidden: !0, readOnly: !0, ref: (n) => {
    if (!n) return;
    let r = n.closest("form");
    r && e(r);
  } });
}
let tY = ge(void 0);
function Ea() {
  return re(tY);
}
function f_(e) {
  return typeof e != "object" || e === null ? !1 : "nodeType" in e;
}
function At(e) {
  return f_(e) && "tagName" in e;
}
function Ge(e) {
  return At(e) && "accessKey" in e;
}
function ft(e) {
  return At(e) && "tabIndex" in e;
}
function nY(e) {
  return At(e) && "style" in e;
}
function rY(e) {
  return Ge(e) && e.nodeName === "IFRAME";
}
function Ho(e) {
  return Ge(e) && e.nodeName === "INPUT";
}
function gu(e) {
  return Ge(e) && e.nodeName === "LABEL";
}
function oY(e) {
  return Ge(e) && e.nodeName === "FIELDSET";
}
function m_(e) {
  return Ge(e) && e.nodeName === "LEGEND";
}
function sY(e) {
  return At(e) ? e.matches('a[href],audio[controls],button,details,embed,iframe,img[usemap],input:not([type="hidden"]),label,select,textarea,video[controls]') : !1;
}
function Oo(e) {
  let t = e.parentElement, n = null;
  for (; t && !oY(t); ) m_(t) && (n = t), t = t.parentElement;
  let r = (t == null ? void 0 : t.getAttribute("disabled")) === "";
  return r && iY(n) ? !1 : r;
}
function iY(e) {
  if (!e) return !1;
  let t = e.previousElementSibling;
  for (; t !== null; ) {
    if (m_(t)) return !1;
    t = t.previousElementSibling;
  }
  return !0;
}
let p_ = Symbol();
function h_(e, t = !0) {
  return Object.assign(e, { [p_]: t });
}
function Le(...e) {
  let t = q(e);
  ue(() => {
    t.current = e;
  }, [e]);
  let n = Z((r) => {
    for (let s of t.current) s != null && (typeof s == "function" ? s(r) : s.current = r);
  });
  return e.every((r) => r == null || (r == null ? void 0 : r[p_])) ? void 0 : n;
}
let ja = ge(null);
ja.displayName = "DescriptionContext";
function __() {
  let e = re(ja);
  if (e === null) {
    let t = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, __), t;
  }
  return e;
}
function Ec() {
  var e, t;
  return (t = (e = re(ja)) == null ? void 0 : e.value) != null ? t : void 0;
}
function v_() {
  let [e, t] = oe([]);
  return [e.length > 0 ? e.join(" ") : void 0, pe(() => function(n) {
    let r = Z((i) => (t((o) => [...o, i]), () => t((o) => {
      let a = o.slice(), l = a.indexOf(i);
      return l !== -1 && a.splice(l, 1), a;
    }))), s = pe(() => ({ register: r, slot: n.slot, name: n.name, props: n.props, value: n.value }), [r, n.slot, n.name, n.props, n.value]);
    return T.createElement(ja.Provider, { value: s }, n.children);
  }, [t])];
}
let aY = "p";
function lY(e, t) {
  let n = je(), r = Kr(), { id: s = `headlessui-description-${n}`, ...i } = e, o = __(), a = Le(t);
  Me(() => o.register(s), [s, o.register]);
  let l = Ee({ ...o.slot, disabled: r || !1 }), u = { ref: a, ...o.props, id: s };
  return xe()({ ourProps: u, theirProps: i, slot: l, defaultTag: aY, name: o.name || "Description" });
}
let uY = be(lY), g_ = Object.assign(uY, {});
var de = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(de || {});
let Pa = ge(null);
Pa.displayName = "LabelContext";
function y_() {
  let e = re(Pa);
  if (e === null) {
    let t = new Error("You used a <Label /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, y_), t;
  }
  return e;
}
function Xn(e) {
  var t, n, r;
  let s = (n = (t = re(Pa)) == null ? void 0 : t.value) != null ? n : void 0;
  return ((r = e == null ? void 0 : e.length) != null ? r : 0) > 0 ? [s, ...e].filter(Boolean).join(" ") : s;
}
function jc({ inherit: e = !1 } = {}) {
  let t = Xn(), [n, r] = oe([]), s = e ? [t, ...n].filter(Boolean) : n;
  return [s.length > 0 ? s.join(" ") : void 0, pe(() => function(i) {
    let o = Z((l) => (r((u) => [...u, l]), () => r((u) => {
      let c = u.slice(), d = c.indexOf(l);
      return d !== -1 && c.splice(d, 1), c;
    }))), a = pe(() => ({ register: o, slot: i.slot, name: i.name, props: i.props, value: i.value }), [o, i.slot, i.name, i.props, i.value]);
    return T.createElement(Pa.Provider, { value: a }, i.children);
  }, [r])];
}
let cY = "label";
function dY(e, t) {
  var n;
  let r = je(), s = y_(), i = Ea(), o = Kr(), { id: a = `headlessui-label-${r}`, htmlFor: l = i != null ? i : (n = s.props) == null ? void 0 : n.htmlFor, passive: u = !1, ...c } = e, d = Le(t);
  Me(() => s.register(a), [a, s.register]);
  let f = Z((h) => {
    let _ = h.currentTarget;
    if (!(h.target !== h.currentTarget && sY(h.target)) && (gu(_) && h.preventDefault(), s.props && "onClick" in s.props && typeof s.props.onClick == "function" && s.props.onClick(h), gu(_))) {
      let v = document.getElementById(_.htmlFor);
      if (v) {
        let M = v.getAttribute("disabled");
        if (M === "true" || M === "") return;
        let y = v.getAttribute("aria-disabled");
        if (y === "true" || y === "") return;
        (Ho(v) && (v.type === "file" || v.type === "radio" || v.type === "checkbox") || v.role === "radio" || v.role === "checkbox" || v.role === "switch") && v.click(), v.focus({ preventScroll: !0 });
      }
    }
  }), m = Ee({ ...s.slot, disabled: o || !1 }), p = { ref: d, ...s.props, id: a, htmlFor: l, onClick: f };
  return u && ("onClick" in p && (delete p.htmlFor, delete p.onClick), "onClick" in c && delete c.onClick), xe()({ ourProps: p, theirProps: c, slot: m, defaultTag: l ? cY : "div", name: s.name || "Label" });
}
let fY = be(dY), Pc = Object.assign(fY, {}), mY = ge(() => {
});
function M_({ value: e, children: t }) {
  return T.createElement(mY.Provider, { value: e }, t);
}
function wn(e, t, n) {
  var o;
  let r = (o = n.initialDeps) != null ? o : [], s;
  function i() {
    var a, l, u, c;
    let d;
    n.key && ((a = n.debug) != null && a.call(n)) && (d = Date.now());
    const f = e();
    if (!(f.length !== r.length || f.some((h, _) => r[_] !== h)))
      return s;
    r = f;
    let p;
    if (n.key && ((l = n.debug) != null && l.call(n)) && (p = Date.now()), s = t(...f), n.key && ((u = n.debug) != null && u.call(n))) {
      const h = Math.round((Date.now() - d) * 100) / 100, _ = Math.round((Date.now() - p) * 100) / 100, v = _ / 16, M = (y, x) => {
        for (y = String(y); y.length < x; )
          y = " " + y;
        return y;
      };
      console.info(
        `%c⏱ ${M(_, 5)} /${M(h, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * v, 120)
        )}deg 100% 31%);`,
        n == null ? void 0 : n.key
      );
    }
    return (c = n == null ? void 0 : n.onChange) == null || c.call(n, s), s;
  }
  return i.updateDeps = (a) => {
    r = a;
  }, i;
}
function Uf(e, t) {
  if (e === void 0)
    throw new Error("Unexpected undefined");
  return e;
}
const pY = (e, t) => Math.abs(e - t) < 1.01, hY = (e, t, n) => {
  let r;
  return function(...s) {
    e.clearTimeout(r), r = e.setTimeout(() => t.apply(this, s), n);
  };
}, Kf = (e) => {
  const { offsetWidth: t, offsetHeight: n } = e;
  return { width: t, height: n };
}, _Y = (e) => e, vY = (e) => {
  const t = Math.max(e.startIndex - e.overscan, 0), n = Math.min(e.endIndex + e.overscan, e.count - 1), r = [];
  for (let s = t; s <= n; s++)
    r.push(s);
  return r;
}, gY = (e, t) => {
  const n = e.scrollElement;
  if (!n)
    return;
  const r = e.targetWindow;
  if (!r)
    return;
  const s = (o) => {
    const { width: a, height: l } = o;
    t({ width: Math.round(a), height: Math.round(l) });
  };
  if (s(Kf(n)), !r.ResizeObserver)
    return () => {
    };
  const i = new r.ResizeObserver((o) => {
    const a = () => {
      const l = o[0];
      if (l != null && l.borderBoxSize) {
        const u = l.borderBoxSize[0];
        if (u) {
          s({ width: u.inlineSize, height: u.blockSize });
          return;
        }
      }
      s(Kf(n));
    };
    e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(a) : a();
  });
  return i.observe(n, { box: "border-box" }), () => {
    i.unobserve(n);
  };
}, Gf = {
  passive: !0
}, Jf = typeof window == "undefined" ? !0 : "onscrollend" in window, yY = (e, t) => {
  const n = e.scrollElement;
  if (!n)
    return;
  const r = e.targetWindow;
  if (!r)
    return;
  let s = 0;
  const i = e.options.useScrollendEvent && Jf ? () => {
  } : hY(
    r,
    () => {
      t(s, !1);
    },
    e.options.isScrollingResetDelay
  ), o = (c) => () => {
    const { horizontal: d, isRtl: f } = e.options;
    s = d ? n.scrollLeft * (f && -1 || 1) : n.scrollTop, i(), t(s, c);
  }, a = o(!0), l = o(!1);
  l(), n.addEventListener("scroll", a, Gf);
  const u = e.options.useScrollendEvent && Jf;
  return u && n.addEventListener("scrollend", l, Gf), () => {
    n.removeEventListener("scroll", a), u && n.removeEventListener("scrollend", l);
  };
}, MY = (e, t, n) => {
  if (t != null && t.borderBoxSize) {
    const r = t.borderBoxSize[0];
    if (r)
      return Math.round(
        r[n.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  return e[n.options.horizontal ? "offsetWidth" : "offsetHeight"];
}, bY = (e, {
  adjustments: t = 0,
  behavior: n
}, r) => {
  var s, i;
  const o = e + t;
  (i = (s = r.scrollElement) == null ? void 0 : s.scrollTo) == null || i.call(s, {
    [r.options.horizontal ? "left" : "top"]: o,
    behavior: n
  });
};
class xY {
  constructor(t) {
    this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.measurementsCache = [], this.itemSizeCache = /* @__PURE__ */ new Map(), this.pendingMeasuredCacheIndexes = [], this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this.elementsCache = /* @__PURE__ */ new Map(), this.observer = /* @__PURE__ */ (() => {
      let n = null;
      const r = () => n || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : n = new this.targetWindow.ResizeObserver((s) => {
        s.forEach((i) => {
          const o = () => {
            this._measureElement(i.target, i);
          };
          this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(o) : o();
        });
      }));
      return {
        disconnect: () => {
          var s;
          (s = r()) == null || s.disconnect(), n = null;
        },
        observe: (s) => {
          var i;
          return (i = r()) == null ? void 0 : i.observe(s, { box: "border-box" });
        },
        unobserve: (s) => {
          var i;
          return (i = r()) == null ? void 0 : i.unobserve(s);
        }
      };
    })(), this.range = null, this.setOptions = (n) => {
      Object.entries(n).forEach(([r, s]) => {
        typeof s == "undefined" && delete n[r];
      }), this.options = {
        debug: !1,
        initialOffset: 0,
        overscan: 1,
        paddingStart: 0,
        paddingEnd: 0,
        scrollPaddingStart: 0,
        scrollPaddingEnd: 0,
        horizontal: !1,
        getItemKey: _Y,
        rangeExtractor: vY,
        onChange: () => {
        },
        measureElement: MY,
        initialRect: { width: 0, height: 0 },
        scrollMargin: 0,
        gap: 0,
        indexAttribute: "data-index",
        initialMeasurementsCache: [],
        lanes: 1,
        isScrollingResetDelay: 150,
        enabled: !0,
        isRtl: !1,
        useScrollendEvent: !1,
        useAnimationFrameWithResizeObserver: !1,
        ...n
      };
    }, this.notify = (n) => {
      var r, s;
      (s = (r = this.options).onChange) == null || s.call(r, this, n);
    }, this.maybeNotify = wn(
      () => (this.calculateRange(), [
        this.isScrolling,
        this.range ? this.range.startIndex : null,
        this.range ? this.range.endIndex : null
      ]),
      (n) => {
        this.notify(n);
      },
      {
        key: process.env.NODE_ENV !== "production" && "maybeNotify",
        debug: () => this.options.debug,
        initialDeps: [
          this.isScrolling,
          this.range ? this.range.startIndex : null,
          this.range ? this.range.endIndex : null
        ]
      }
    ), this.cleanup = () => {
      this.unsubs.filter(Boolean).forEach((n) => n()), this.unsubs = [], this.observer.disconnect(), this.scrollElement = null, this.targetWindow = null;
    }, this._didMount = () => () => {
      this.cleanup();
    }, this._willUpdate = () => {
      var s;
      var n;
      const r = this.options.enabled ? this.options.getScrollElement() : null;
      if (this.scrollElement !== r) {
        if (this.cleanup(), !r) {
          this.maybeNotify();
          return;
        }
        this.scrollElement = r, this.scrollElement && "ownerDocument" in this.scrollElement ? this.targetWindow = this.scrollElement.ownerDocument.defaultView : this.targetWindow = (s = (n = this.scrollElement) == null ? void 0 : n.window) != null ? s : null, this.elementsCache.forEach((i) => {
          this.observer.observe(i);
        }), this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        }), this.unsubs.push(
          this.options.observeElementRect(this, (i) => {
            this.scrollRect = i, this.maybeNotify();
          })
        ), this.unsubs.push(
          this.options.observeElementOffset(this, (i, o) => {
            this.scrollAdjustments = 0, this.scrollDirection = o ? this.getScrollOffset() < i ? "forward" : "backward" : null, this.scrollOffset = i, this.isScrolling = o, this.maybeNotify();
          })
        );
      }
    }, this.getSize = () => {
      var n;
      return this.options.enabled ? (this.scrollRect = (n = this.scrollRect) != null ? n : this.options.initialRect, this.scrollRect[this.options.horizontal ? "width" : "height"]) : (this.scrollRect = null, 0);
    }, this.getScrollOffset = () => {
      var n;
      return this.options.enabled ? (this.scrollOffset = (n = this.scrollOffset) != null ? n : typeof this.options.initialOffset == "function" ? this.options.initialOffset() : this.options.initialOffset, this.scrollOffset) : (this.scrollOffset = null, 0);
    }, this.getFurthestMeasurement = (n, r) => {
      const s = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
      for (let o = r - 1; o >= 0; o--) {
        const a = n[o];
        if (s.has(a.lane))
          continue;
        const l = i.get(
          a.lane
        );
        if (l == null || a.end > l.end ? i.set(a.lane, a) : a.end < l.end && s.set(a.lane, !0), s.size === this.options.lanes)
          break;
      }
      return i.size === this.options.lanes ? Array.from(i.values()).sort((o, a) => o.end === a.end ? o.index - a.index : o.end - a.end)[0] : void 0;
    }, this.getMeasurementOptions = wn(
      () => [
        this.options.count,
        this.options.paddingStart,
        this.options.scrollMargin,
        this.options.getItemKey,
        this.options.enabled
      ],
      (n, r, s, i, o) => (this.pendingMeasuredCacheIndexes = [], {
        count: n,
        paddingStart: r,
        scrollMargin: s,
        getItemKey: i,
        enabled: o
      }),
      {
        key: !1
      }
    ), this.getMeasurements = wn(
      () => [this.getMeasurementOptions(), this.itemSizeCache],
      ({ count: n, paddingStart: r, scrollMargin: s, getItemKey: i, enabled: o }, a) => {
        if (!o)
          return this.measurementsCache = [], this.itemSizeCache.clear(), [];
        this.measurementsCache.length === 0 && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((c) => {
          this.itemSizeCache.set(c.key, c.size);
        }));
        const l = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [];
        const u = this.measurementsCache.slice(0, l);
        for (let c = l; c < n; c++) {
          const d = i(c), f = this.options.lanes === 1 ? u[c - 1] : this.getFurthestMeasurement(u, c), m = f ? f.end + this.options.gap : r + s, p = a.get(d), h = typeof p == "number" ? p : this.options.estimateSize(c), _ = m + h, v = f ? f.lane : c % this.options.lanes;
          u[c] = {
            index: c,
            start: m,
            size: h,
            end: _,
            key: d,
            lane: v
          };
        }
        return this.measurementsCache = u, u;
      },
      {
        key: process.env.NODE_ENV !== "production" && "getMeasurements",
        debug: () => this.options.debug
      }
    ), this.calculateRange = wn(
      () => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ],
      (n, r, s, i) => this.range = n.length > 0 && r > 0 ? wY({
        measurements: n,
        outerSize: r,
        scrollOffset: s,
        lanes: i
      }) : null,
      {
        key: process.env.NODE_ENV !== "production" && "calculateRange",
        debug: () => this.options.debug
      }
    ), this.getVirtualIndexes = wn(
      () => {
        let n = null, r = null;
        const s = this.calculateRange();
        return s && (n = s.startIndex, r = s.endIndex), this.maybeNotify.updateDeps([this.isScrolling, n, r]), [
          this.options.rangeExtractor,
          this.options.overscan,
          this.options.count,
          n,
          r
        ];
      },
      (n, r, s, i, o) => i === null || o === null ? [] : n({
        startIndex: i,
        endIndex: o,
        overscan: r,
        count: s
      }),
      {
        key: process.env.NODE_ENV !== "production" && "getVirtualIndexes",
        debug: () => this.options.debug
      }
    ), this.indexFromElement = (n) => {
      const r = this.options.indexAttribute, s = n.getAttribute(r);
      return s ? parseInt(s, 10) : (console.warn(
        `Missing attribute name '${r}={index}' on measured element.`
      ), -1);
    }, this._measureElement = (n, r) => {
      const s = this.indexFromElement(n), i = this.measurementsCache[s];
      if (!i)
        return;
      const o = i.key, a = this.elementsCache.get(o);
      a !== n && (a && this.observer.unobserve(a), this.observer.observe(n), this.elementsCache.set(o, n)), n.isConnected && this.resizeItem(s, this.options.measureElement(n, r, this));
    }, this.resizeItem = (n, r) => {
      var a;
      const s = this.measurementsCache[n];
      if (!s)
        return;
      const i = (a = this.itemSizeCache.get(s.key)) != null ? a : s.size, o = r - i;
      o !== 0 && ((this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(s, o, this) : s.start < this.getScrollOffset() + this.scrollAdjustments) && (process.env.NODE_ENV !== "production" && this.options.debug && console.info("correction", o), this._scrollToOffset(this.getScrollOffset(), {
        adjustments: this.scrollAdjustments += o,
        behavior: void 0
      })), this.pendingMeasuredCacheIndexes.push(s.index), this.itemSizeCache = new Map(this.itemSizeCache.set(s.key, r)), this.notify(!1));
    }, this.measureElement = (n) => {
      if (!n) {
        this.elementsCache.forEach((r, s) => {
          r.isConnected || (this.observer.unobserve(r), this.elementsCache.delete(s));
        });
        return;
      }
      this._measureElement(n, void 0);
    }, this.getVirtualItems = wn(
      () => [this.getVirtualIndexes(), this.getMeasurements()],
      (n, r) => {
        const s = [];
        for (let i = 0, o = n.length; i < o; i++) {
          const a = n[i], l = r[a];
          s.push(l);
        }
        return s;
      },
      {
        key: process.env.NODE_ENV !== "production" && "getVirtualItems",
        debug: () => this.options.debug
      }
    ), this.getVirtualItemForOffset = (n) => {
      const r = this.getMeasurements();
      if (r.length !== 0)
        return Uf(
          r[b_(
            0,
            r.length - 1,
            (s) => Uf(r[s]).start,
            n
          )]
        );
    }, this.getOffsetForAlignment = (n, r, s = 0) => {
      const i = this.getSize(), o = this.getScrollOffset();
      r === "auto" && (r = n >= o + i ? "end" : "start"), r === "center" ? n += (s - i) / 2 : r === "end" && (n -= i);
      const a = this.getTotalSize() + this.options.scrollMargin - i;
      return Math.max(Math.min(a, n), 0);
    }, this.getOffsetForIndex = (n, r = "auto") => {
      n = Math.max(0, Math.min(n, this.options.count - 1));
      const s = this.measurementsCache[n];
      if (!s)
        return;
      const i = this.getSize(), o = this.getScrollOffset();
      if (r === "auto")
        if (s.end >= o + i - this.options.scrollPaddingEnd)
          r = "end";
        else if (s.start <= o + this.options.scrollPaddingStart)
          r = "start";
        else
          return [o, r];
      const a = r === "end" ? s.end + this.options.scrollPaddingEnd : s.start - this.options.scrollPaddingStart;
      return [
        this.getOffsetForAlignment(a, r, s.size),
        r
      ];
    }, this.isDynamicMode = () => this.elementsCache.size > 0, this.scrollToOffset = (n, { align: r = "start", behavior: s } = {}) => {
      s === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      ), this._scrollToOffset(this.getOffsetForAlignment(n, r), {
        adjustments: void 0,
        behavior: s
      });
    }, this.scrollToIndex = (n, { align: r = "auto", behavior: s } = {}) => {
      s === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      ), n = Math.max(0, Math.min(n, this.options.count - 1));
      let i = 0;
      const o = 10, a = (u) => {
        if (!this.targetWindow) return;
        const c = this.getOffsetForIndex(n, u);
        if (!c) {
          console.warn("Failed to get offset for index:", n);
          return;
        }
        const [d, f] = c;
        this._scrollToOffset(d, { adjustments: void 0, behavior: s }), this.targetWindow.requestAnimationFrame(() => {
          const m = this.getScrollOffset(), p = this.getOffsetForIndex(n, f);
          if (!p) {
            console.warn("Failed to get offset for index:", n);
            return;
          }
          pY(p[0], m) || l(f);
        });
      }, l = (u) => {
        this.targetWindow && (i++, i < o ? (process.env.NODE_ENV !== "production" && this.options.debug && console.info("Schedule retry", i, o), this.targetWindow.requestAnimationFrame(() => a(u))) : console.warn(
          `Failed to scroll to index ${n} after ${o} attempts.`
        ));
      };
      a(r);
    }, this.scrollBy = (n, { behavior: r } = {}) => {
      r === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      ), this._scrollToOffset(this.getScrollOffset() + n, {
        adjustments: void 0,
        behavior: r
      });
    }, this.getTotalSize = () => {
      var i;
      var n;
      const r = this.getMeasurements();
      let s;
      if (r.length === 0)
        s = this.options.paddingStart;
      else if (this.options.lanes === 1)
        s = (i = (n = r[r.length - 1]) == null ? void 0 : n.end) != null ? i : 0;
      else {
        const o = Array(this.options.lanes).fill(null);
        let a = r.length - 1;
        for (; a >= 0 && o.some((l) => l === null); ) {
          const l = r[a];
          o[l.lane] === null && (o[l.lane] = l.end), a--;
        }
        s = Math.max(...o.filter((l) => l !== null));
      }
      return Math.max(
        s - this.options.scrollMargin + this.options.paddingEnd,
        0
      );
    }, this._scrollToOffset = (n, {
      adjustments: r,
      behavior: s
    }) => {
      this.options.scrollToFn(n, { behavior: s, adjustments: r }, this);
    }, this.measure = () => {
      this.itemSizeCache = /* @__PURE__ */ new Map(), this.notify(!1);
    }, this.setOptions(t);
  }
}
const b_ = (e, t, n, r) => {
  for (; e <= t; ) {
    const s = (e + t) / 2 | 0, i = n(s);
    if (i < r)
      e = s + 1;
    else if (i > r)
      t = s - 1;
    else
      return s;
  }
  return e > 0 ? e - 1 : 0;
};
function wY({
  measurements: e,
  outerSize: t,
  scrollOffset: n,
  lanes: r
}) {
  const s = e.length - 1, i = (l) => e[l].start;
  if (e.length <= r)
    return {
      startIndex: 0,
      endIndex: s
    };
  let o = b_(
    0,
    s,
    i,
    n
  ), a = o;
  if (r === 1)
    for (; a < s && e[a].end < n + t; )
      a++;
  else if (r > 1) {
    const l = Array(r).fill(0);
    for (; a < s && l.some((c) => c < n + t); ) {
      const c = e[a];
      l[c.lane] = c.end, a++;
    }
    const u = Array(r).fill(n + t);
    for (; o >= 0 && u.some((c) => c >= n); ) {
      const c = e[o];
      u[c.lane] = c.start, o--;
    }
    o = Math.max(0, o - o % r), a = Math.min(s, a + (r - 1 - a % r));
  }
  return { startIndex: o, endIndex: a };
}
const qf = typeof document != "undefined" ? b.useLayoutEffect : b.useEffect;
function YY(e) {
  const t = b.useReducer(() => ({}), {})[1], n = {
    ...e,
    onChange: (s, i) => {
      var o;
      i ? dt(t) : t(), (o = e.onChange) == null || o.call(e, s, i);
    }
  }, [r] = b.useState(
    () => new xY(n)
  );
  return r.setOptions(n), qf(() => r._didMount(), []), qf(() => r._willUpdate()), r;
}
function LY(e) {
  return YY({
    observeElementRect: gY,
    observeElementOffset: yY,
    scrollToFn: bY,
    ...e
  });
}
function SY(e, t) {
  return e !== null && t !== null && typeof e == "object" && typeof t == "object" && "id" in e && "id" in t ? e.id === t.id : e === t;
}
function x_(e = SY) {
  return X((t, n) => {
    if (typeof e == "string") {
      let r = e;
      return (t == null ? void 0 : t[r]) === (n == null ? void 0 : n[r]);
    }
    return e(t, n);
  }, [e]);
}
function Xf(e) {
  if (e === null) return { width: 0, height: 0 };
  let { width: t, height: n } = e.getBoundingClientRect();
  return { width: t, height: n };
}
function yu(e, t, n = !1) {
  let [r, s] = oe(() => Xf(t));
  return Me(() => {
    if (!t || !e) return;
    let i = qe();
    return i.requestAnimationFrame(function o() {
      i.requestAnimationFrame(o), s((a) => {
        let l = Xf(t);
        return l.width === a.width && l.height === a.height ? a : l;
      });
    }), () => {
      i.dispose();
    };
  }, [t, e]), n ? { width: `${r.width}px`, height: `${r.height}px` } : r;
}
var Ac = ((e) => (e[e.Left = 0] = "Left", e[e.Right = 2] = "Right", e))(Ac || {});
function w_(e) {
  let t = q(null), n = Z((s) => {
    t.current = s.pointerType, !Oo(s.currentTarget) && s.pointerType === "mouse" && s.button === Ac.Left && (s.preventDefault(), e(s));
  }), r = Z((s) => {
    t.current !== "mouse" && (Oo(s.currentTarget) || e(s));
  });
  return { onPointerDown: n, onClick: r };
}
let Y_ = class extends Map {
  constructor(t) {
    super(), this.factory = t;
  }
  get(t) {
    let n = super.get(t);
    return n === void 0 && (n = this.factory(t), this.set(t, n)), n;
  }
};
var kY = Object.defineProperty, DY = (e, t, n) => t in e ? kY(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, TY = (e, t, n) => (DY(e, t + "", n), n), L_ = (e, t, n) => {
  if (!t.has(e)) throw TypeError("Cannot " + n);
}, tt = (e, t, n) => (L_(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Ml = (e, t, n) => {
  if (t.has(e)) throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Zf = (e, t, n, r) => (L_(e, t, "write to private field"), t.set(e, n), n), ht, dr, fr;
let Cc = class {
  constructor(t) {
    Ml(this, ht, {}), Ml(this, dr, new Y_(() => /* @__PURE__ */ new Set())), Ml(this, fr, /* @__PURE__ */ new Set()), TY(this, "disposables", qe()), Zf(this, ht, t), Mt.isServer && this.disposables.microTask(() => {
      this.dispose();
    });
  }
  dispose() {
    this.disposables.dispose();
  }
  get state() {
    return tt(this, ht);
  }
  subscribe(t, n) {
    if (Mt.isServer) return () => {
    };
    let r = { selector: t, callback: n, current: t(tt(this, ht)) };
    return tt(this, fr).add(r), this.disposables.add(() => {
      tt(this, fr).delete(r);
    });
  }
  on(t, n) {
    return Mt.isServer ? () => {
    } : (tt(this, dr).get(t).add(n), this.disposables.add(() => {
      tt(this, dr).get(t).delete(n);
    }));
  }
  send(t) {
    let n = this.reduce(tt(this, ht), t);
    if (n !== tt(this, ht)) {
      Zf(this, ht, n);
      for (let r of tt(this, fr)) {
        let s = r.selector(tt(this, ht));
        S_(r.current, s) || (r.current = s, r.callback(s));
      }
      for (let r of tt(this, dr).get(t.type)) r(tt(this, ht), t);
    }
  }
};
ht = /* @__PURE__ */ new WeakMap(), dr = /* @__PURE__ */ new WeakMap(), fr = /* @__PURE__ */ new WeakMap();
function S_(e, t) {
  return Object.is(e, t) ? !0 : typeof e != "object" || e === null || typeof t != "object" || t === null ? !1 : Array.isArray(e) && Array.isArray(t) ? e.length !== t.length ? !1 : bl(e[Symbol.iterator](), t[Symbol.iterator]()) : e instanceof Map && t instanceof Map || e instanceof Set && t instanceof Set ? e.size !== t.size ? !1 : bl(e.entries(), t.entries()) : Qf(e) && Qf(t) ? bl(Object.entries(e)[Symbol.iterator](), Object.entries(t)[Symbol.iterator]()) : !1;
}
function bl(e, t) {
  do {
    let n = e.next(), r = t.next();
    if (n.done && r.done) return !0;
    if (n.done || r.done || !Object.is(n.value, r.value)) return !1;
  } while (!0);
}
function Qf(e) {
  if (Object.prototype.toString.call(e) !== "[object Object]") return !1;
  let t = Object.getPrototypeOf(e);
  return t === null || Object.getPrototypeOf(t) === null;
}
function xl(e) {
  let [t, n] = e(), r = qe();
  return (...s) => {
    t(...s), r.dispose(), r.microTask(n);
  };
}
var EY = Object.defineProperty, jY = (e, t, n) => t in e ? EY(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, em = (e, t, n) => (jY(e, typeof t != "symbol" ? t + "" : t, n), n), $c = ((e) => (e[e.Push = 0] = "Push", e[e.Pop = 1] = "Pop", e))($c || {});
let PY = { 0(e, t) {
  let n = t.id, r = e.stack, s = e.stack.indexOf(n);
  if (s !== -1) {
    let i = e.stack.slice();
    return i.splice(s, 1), i.push(n), r = i, { ...e, stack: r };
  }
  return { ...e, stack: [...e.stack, n] };
}, 1(e, t) {
  let n = t.id, r = e.stack.indexOf(n);
  if (r === -1) return e;
  let s = e.stack.slice();
  return s.splice(r, 1), { ...e, stack: s };
} }, AY = class k_ extends Cc {
  constructor() {
    super(...arguments), em(this, "actions", { push: (t) => this.send({ type: 0, id: t }), pop: (t) => this.send({ type: 1, id: t }) }), em(this, "selectors", { isTop: (t, n) => t.stack[t.stack.length - 1] === n, inStack: (t, n) => t.stack.includes(n) });
  }
  static new() {
    return new k_({ stack: [] });
  }
  reduce(t, n) {
    return Ye(n.type, PY, t, n);
  }
};
const Zn = new Y_(() => AY.new());
var Mu = { exports: {} }, wl = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tm;
function CY() {
  if (tm) return wl;
  tm = 1;
  var e = T;
  function t(l, u) {
    return l === u && (l !== 0 || 1 / l === 1 / u) || l !== l && u !== u;
  }
  var n = typeof Object.is == "function" ? Object.is : t, r = e.useSyncExternalStore, s = e.useRef, i = e.useEffect, o = e.useMemo, a = e.useDebugValue;
  return wl.useSyncExternalStoreWithSelector = function(l, u, c, d, f) {
    var m = s(null);
    if (m.current === null) {
      var p = { hasValue: !1, value: null };
      m.current = p;
    } else p = m.current;
    m = o(
      function() {
        function _(w) {
          if (!v) {
            if (v = !0, M = w, w = d(w), f !== void 0 && p.hasValue) {
              var k = p.value;
              if (f(k, w))
                return y = k;
            }
            return y = w;
          }
          if (k = y, n(M, w)) return k;
          var D = d(w);
          return f !== void 0 && f(k, D) ? (M = w, k) : (M = w, y = D);
        }
        var v = !1, M, y, x = c === void 0 ? null : c;
        return [
          function() {
            return _(u());
          },
          x === null ? void 0 : function() {
            return _(x());
          }
        ];
      },
      [u, c, d, f]
    );
    var h = r(l, m[0], m[1]);
    return i(
      function() {
        p.hasValue = !0, p.value = h;
      },
      [h]
    ), a(h), h;
  }, wl;
}
var Yl = {};
/**
 * @license React
 * use-sync-external-store-with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nm;
function $Y() {
  return nm || (nm = 1, process.env.NODE_ENV !== "production" && function() {
    function e(l, u) {
      return l === u && (l !== 0 || 1 / l === 1 / u) || l !== l && u !== u;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = T, n = typeof Object.is == "function" ? Object.is : e, r = t.useSyncExternalStore, s = t.useRef, i = t.useEffect, o = t.useMemo, a = t.useDebugValue;
    Yl.useSyncExternalStoreWithSelector = function(l, u, c, d, f) {
      var m = s(null);
      if (m.current === null) {
        var p = { hasValue: !1, value: null };
        m.current = p;
      } else p = m.current;
      m = o(
        function() {
          function _(w) {
            if (!v) {
              if (v = !0, M = w, w = d(w), f !== void 0 && p.hasValue) {
                var k = p.value;
                if (f(k, w))
                  return y = k;
              }
              return y = w;
            }
            if (k = y, n(M, w))
              return k;
            var D = d(w);
            return f !== void 0 && f(k, D) ? (M = w, k) : (M = w, y = D);
          }
          var v = !1, M, y, x = c === void 0 ? null : c;
          return [
            function() {
              return _(u());
            },
            x === null ? void 0 : function() {
              return _(x());
            }
          ];
        },
        [u, c, d, f]
      );
      var h = r(l, m[0], m[1]);
      return i(
        function() {
          p.hasValue = !0, p.value = h;
        },
        [h]
      ), a(h), h;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Yl;
}
process.env.NODE_ENV === "production" ? Mu.exports = CY() : Mu.exports = $Y();
var HY = Mu.exports;
function ye(e, t, n = S_) {
  return HY.useSyncExternalStoreWithSelector(Z((r) => e.subscribe(OY, r)), Z(() => e.state), Z(() => e.state), Z(t), n);
}
function OY(e) {
  return e;
}
function Gr(e, t) {
  let n = je(), r = Zn.get(t), [s, i] = ye(r, X((o) => [r.selectors.isTop(o, n), r.selectors.inStack(o, n)], [r, n]));
  return Me(() => {
    if (e) return r.actions.push(n), () => r.actions.pop(n);
  }, [r, e, n]), e ? i ? s : !0 : !1;
}
let bu = /* @__PURE__ */ new Map(), br = /* @__PURE__ */ new Map();
function rm(e) {
  var t;
  let n = (t = br.get(e)) != null ? t : 0;
  return br.set(e, n + 1), n !== 0 ? () => om(e) : (bu.set(e, { "aria-hidden": e.getAttribute("aria-hidden"), inert: e.inert }), e.setAttribute("aria-hidden", "true"), e.inert = !0, () => om(e));
}
function om(e) {
  var t;
  let n = (t = br.get(e)) != null ? t : 1;
  if (n === 1 ? br.delete(e) : br.set(e, n - 1), n !== 1) return;
  let r = bu.get(e);
  r && (r["aria-hidden"] === null ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", r["aria-hidden"]), e.inert = r.inert, bu.delete(e));
}
function Hc(e, { allowed: t, disallowed: n } = {}) {
  let r = Gr(e, "inert-others");
  Me(() => {
    var s, i;
    if (!r) return;
    let o = qe();
    for (let l of (s = n == null ? void 0 : n()) != null ? s : []) l && o.add(rm(l));
    let a = (i = t == null ? void 0 : t()) != null ? i : [];
    for (let l of a) {
      if (!l) continue;
      let u = rn(l);
      if (!u) continue;
      let c = l.parentElement;
      for (; c && c !== u.body; ) {
        for (let d of c.children) a.some((f) => d.contains(f)) || o.add(rm(d));
        c = c.parentElement;
      }
    }
    return o.dispose;
  }, [r, t, n]);
}
function Oc(e, t, n) {
  let r = Ft((s) => {
    let i = s.getBoundingClientRect();
    i.x === 0 && i.y === 0 && i.width === 0 && i.height === 0 && n();
  });
  ue(() => {
    if (!e) return;
    let s = t === null ? null : Ge(t) ? t : t.current;
    if (!s) return;
    let i = qe();
    if (typeof ResizeObserver != "undefined") {
      let o = new ResizeObserver(() => r.current(s));
      o.observe(s), i.add(() => o.disconnect());
    }
    if (typeof IntersectionObserver != "undefined") {
      let o = new IntersectionObserver(() => r.current(s));
      o.observe(s), i.add(() => o.disconnect());
    }
    return () => i.dispose();
  }, [t, r, e]);
}
let Ro = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "details>summary", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(","), RY = ["[data-autofocus]"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var ct = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e[e.AutoFocus = 64] = "AutoFocus", e))(ct || {}), xu = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(xu || {}), NY = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(NY || {});
function D_(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(Ro)).sort((t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)));
}
function IY(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(RY)).sort((t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var Rc = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(Rc || {});
function T_(e, t = 0) {
  var n;
  return e === ((n = rn(e)) == null ? void 0 : n.body) ? !1 : Ye(t, { 0() {
    return e.matches(Ro);
  }, 1() {
    let r = e;
    for (; r !== null; ) {
      if (r.matches(Ro)) return !0;
      r = r.parentElement;
    }
    return !1;
  } });
}
var FY = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(FY || {});
typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function Ct(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let VY = ["textarea", "input"].join(",");
function zY(e) {
  var t, n;
  return (n = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, VY)) != null ? n : !1;
}
function Nc(e, t = (n) => n) {
  return e.slice().sort((n, r) => {
    let s = t(n), i = t(r);
    if (s === null || i === null) return 0;
    let o = s.compareDocumentPosition(i);
    return o & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : o & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function BY(e, t, n = e === null ? document.body : $o(e)) {
  return Rn(D_(n), t, { relativeTo: e });
}
function Rn(e, t, { sorted: n = !0, relativeTo: r = null, skipElements: s = [] } = {}) {
  let i = Array.isArray(e) ? e.length > 0 ? $o(e[0]) : document : $o(e), o = Array.isArray(e) ? n ? Nc(e) : e : t & 64 ? IY(e) : D_(e);
  s.length > 0 && o.length > 1 && (o = o.filter((m) => !s.some((p) => p != null && "current" in p ? (p == null ? void 0 : p.current) === m : p === m))), r = r != null ? r : i == null ? void 0 : i.activeElement;
  let a = (() => {
    if (t & 5) return 1;
    if (t & 10) return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), l = (() => {
    if (t & 1) return 0;
    if (t & 2) return Math.max(0, o.indexOf(r)) - 1;
    if (t & 4) return Math.max(0, o.indexOf(r)) + 1;
    if (t & 8) return o.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), u = t & 32 ? { preventScroll: !0 } : {}, c = 0, d = o.length, f;
  do {
    if (c >= d || c + d <= 0) return 0;
    let m = l + c;
    if (t & 16) m = (m + d) % d;
    else {
      if (m < 0) return 3;
      if (m >= d) return 1;
    }
    f = o[m], f == null || f.focus(u), c += a;
  } while (f !== i_(f));
  return t & 6 && zY(f) && f.select(), 2;
}
function E_() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function WY() {
  return /Android/gi.test(window.navigator.userAgent);
}
function wu() {
  return E_() || WY();
}
function Cn(e, t, n, r) {
  let s = Ft(n);
  ue(() => {
    if (!e) return;
    function i(o) {
      s.current(o);
    }
    return document.addEventListener(t, i, r), () => document.removeEventListener(t, i, r);
  }, [e, t, r]);
}
function j_(e, t, n, r) {
  let s = Ft(n);
  ue(() => {
    if (!e) return;
    function i(o) {
      s.current(o);
    }
    return window.addEventListener(t, i, r), () => window.removeEventListener(t, i, r);
  }, [e, t, r]);
}
const sm = 30;
function Ic(e, t, n) {
  let r = Ft(n), s = X(function(a, l) {
    if (a.defaultPrevented) return;
    let u = l(a);
    if (u === null || !u.getRootNode().contains(u) || !u.isConnected) return;
    let c = function d(f) {
      return typeof f == "function" ? d(f()) : Array.isArray(f) || f instanceof Set ? f : [f];
    }(t);
    for (let d of c) if (d !== null && (d.contains(u) || a.composed && a.composedPath().includes(d))) return;
    return !T_(u, Rc.Loose) && u.tabIndex !== -1 && a.preventDefault(), r.current(a, u);
  }, [r, t]), i = q(null);
  Cn(e, "pointerdown", (a) => {
    var l, u;
    wu() || (i.current = ((u = (l = a.composedPath) == null ? void 0 : l.call(a)) == null ? void 0 : u[0]) || a.target);
  }, !0), Cn(e, "pointerup", (a) => {
    if (wu() || !i.current) return;
    let l = i.current;
    return i.current = null, s(a, () => l);
  }, !0);
  let o = q({ x: 0, y: 0 });
  Cn(e, "touchstart", (a) => {
    o.current.x = a.touches[0].clientX, o.current.y = a.touches[0].clientY;
  }, !0), Cn(e, "touchend", (a) => {
    let l = { x: a.changedTouches[0].clientX, y: a.changedTouches[0].clientY };
    if (!(Math.abs(l.x - o.current.x) >= sm || Math.abs(l.y - o.current.y) >= sm)) return s(a, () => ft(a.target) ? a.target : null);
  }, !0), j_(e, "blur", (a) => s(a, () => rY(window.document.activeElement) ? window.document.activeElement : null), !0);
}
function yn(...e) {
  return pe(() => rn(...e), [...e]);
}
var UY = ((e) => (e[e.Ignore = 0] = "Ignore", e[e.Select = 1] = "Select", e[e.Close = 2] = "Close", e))(UY || {});
const Et = { Ignore: { kind: 0 }, Select: (e) => ({ kind: 1, target: e }), Close: { kind: 2 } }, KY = 200, im = 5;
function P_(e, { trigger: t, action: n, close: r, select: s }) {
  let i = q(null), o = q(null), a = q(null);
  Cn(e && t !== null, "pointerdown", (l) => {
    f_(l == null ? void 0 : l.target) && t != null && t.contains(l.target) && (o.current = l.x, a.current = l.y, i.current = l.timeStamp);
  }), Cn(e && t !== null, "pointerup", (l) => {
    var u, c;
    let d = i.current;
    if (d === null || (i.current = null, !ft(l.target)) || Math.abs(l.x - ((u = o.current) != null ? u : l.x)) < im && Math.abs(l.y - ((c = a.current) != null ? c : l.y)) < im) return;
    let f = n(l);
    switch (f.kind) {
      case 0:
        return;
      case 1: {
        l.timeStamp - d > KY && (s(f.target), r());
        break;
      }
      case 2: {
        r();
        break;
      }
    }
  }, { capture: !0 });
}
function Fc(e, t, n, r) {
  let s = Ft(n);
  ue(() => {
    e = e != null ? e : window;
    function i(o) {
      s.current(o);
    }
    return e.addEventListener(t, i, r), () => e.removeEventListener(t, i, r);
  }, [e, t, r]);
}
function A_(e) {
  let t = q({ value: "", selectionStart: null, selectionEnd: null });
  return Fc(e, "blur", (n) => {
    let r = n.target;
    Ho(r) && (t.current = { value: r.value, selectionStart: r.selectionStart, selectionEnd: r.selectionEnd });
  }), Z(() => {
    if (!ka(e) && Ho(e) && e.isConnected) {
      if (e.focus({ preventScroll: !0 }), e.value !== t.current.value) e.setSelectionRange(e.value.length, e.value.length);
      else {
        let { selectionStart: n, selectionEnd: r } = t.current;
        n !== null && r !== null && e.setSelectionRange(n, r);
      }
      t.current = { value: "", selectionStart: null, selectionEnd: null };
    }
  });
}
function Aa(e, t) {
  return pe(() => {
    var n;
    if (e.type) return e.type;
    let r = (n = e.as) != null ? n : "button";
    if (typeof r == "string" && r.toLowerCase() === "button" || (t == null ? void 0 : t.tagName) === "BUTTON" && !t.hasAttribute("type")) return "button";
  }, [e.type, e.as, t]);
}
function GY(e) {
  return My(e.subscribe, e.getSnapshot, e.getSnapshot);
}
function JY(e, t) {
  let n = e(), r = /* @__PURE__ */ new Set();
  return { getSnapshot() {
    return n;
  }, subscribe(s) {
    return r.add(s), () => r.delete(s);
  }, dispatch(s, ...i) {
    let o = t[s].call(n, ...i);
    o && (n = o, r.forEach((a) => a()));
  } };
}
function qY() {
  let e;
  return { before({ doc: t }) {
    var n;
    let r = t.documentElement, s = (n = t.defaultView) != null ? n : window;
    e = Math.max(0, s.innerWidth - r.clientWidth);
  }, after({ doc: t, d: n }) {
    let r = t.documentElement, s = Math.max(0, r.clientWidth - r.offsetWidth), i = Math.max(0, e - s);
    n.style(r, "paddingRight", `${i}px`);
  } };
}
function XY() {
  return E_() ? { before({ doc: e, d: t, meta: n }) {
    function r(s) {
      for (let i of n().containers) for (let o of i()) if (o.contains(s)) return !0;
      return !1;
    }
    t.microTask(() => {
      var s;
      if (window.getComputedStyle(e.documentElement).scrollBehavior !== "auto") {
        let a = qe();
        a.style(e.documentElement, "scrollBehavior", "auto"), t.add(() => t.microTask(() => a.dispose()));
      }
      let i = (s = window.scrollY) != null ? s : window.pageYOffset, o = null;
      t.addEventListener(e, "click", (a) => {
        if (ft(a.target)) try {
          let l = a.target.closest("a");
          if (!l) return;
          let { hash: u } = new URL(l.href), c = e.querySelector(u);
          ft(c) && !r(c) && (o = c);
        } catch {
        }
      }, !0), t.group((a) => {
        t.addEventListener(e, "touchstart", (l) => {
          if (a.dispose(), ft(l.target) && nY(l.target)) if (r(l.target)) {
            let u = l.target;
            for (; u.parentElement && r(u.parentElement); ) u = u.parentElement;
            a.style(u, "overscrollBehavior", "contain");
          } else a.style(l.target, "touchAction", "none");
        });
      }), t.addEventListener(e, "touchmove", (a) => {
        if (ft(a.target)) {
          if (Ho(a.target)) return;
          if (r(a.target)) {
            let l = a.target;
            for (; l.parentElement && l.dataset.headlessuiPortal !== "" && !(l.scrollHeight > l.clientHeight || l.scrollWidth > l.clientWidth); ) l = l.parentElement;
            l.dataset.headlessuiPortal === "" && a.preventDefault();
          } else a.preventDefault();
        }
      }, { passive: !1 }), t.add(() => {
        var a;
        let l = (a = window.scrollY) != null ? a : window.pageYOffset;
        i !== l && window.scrollTo(0, i), o && o.isConnected && (o.scrollIntoView({ block: "nearest" }), o = null);
      });
    });
  } } : {};
}
function ZY() {
  return { before({ doc: e, d: t }) {
    t.style(e.documentElement, "overflow", "hidden");
  } };
}
function am(e) {
  let t = {};
  for (let n of e) Object.assign(t, n(t));
  return t;
}
let mn = JY(() => /* @__PURE__ */ new Map(), { PUSH(e, t) {
  var n;
  let r = (n = this.get(e)) != null ? n : { doc: e, count: 0, d: qe(), meta: /* @__PURE__ */ new Set(), computedMeta: {} };
  return r.count++, r.meta.add(t), r.computedMeta = am(r.meta), this.set(e, r), this;
}, POP(e, t) {
  let n = this.get(e);
  return n && (n.count--, n.meta.delete(t), n.computedMeta = am(n.meta)), this;
}, SCROLL_PREVENT(e) {
  let t = { doc: e.doc, d: e.d, meta() {
    return e.computedMeta;
  } }, n = [XY(), qY(), ZY()];
  n.forEach(({ before: r }) => r == null ? void 0 : r(t)), n.forEach(({ after: r }) => r == null ? void 0 : r(t));
}, SCROLL_ALLOW({ d: e }) {
  e.dispose();
}, TEARDOWN({ doc: e }) {
  this.delete(e);
} });
mn.subscribe(() => {
  let e = mn.getSnapshot(), t = /* @__PURE__ */ new Map();
  for (let [n] of e) t.set(n, n.documentElement.style.overflow);
  for (let n of e.values()) {
    let r = t.get(n.doc) === "hidden", s = n.count !== 0;
    (s && !r || !s && r) && mn.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n), n.count === 0 && mn.dispatch("TEARDOWN", n);
  }
});
function QY(e, t, n = () => ({ containers: [] })) {
  let r = GY(mn), s = t ? r.get(t) : void 0, i = s ? s.count > 0 : !1;
  return Me(() => {
    if (!(!t || !e)) return mn.dispatch("PUSH", t, n), () => mn.dispatch("POP", t, n);
  }, [e, t]), i;
}
function Vc(e, t, n = () => [document.body]) {
  let r = Gr(e, "scroll-lock");
  QY(r, t, (s) => {
    var i;
    return { containers: [...(i = s.containers) != null ? i : [], n] };
  });
}
function lm(e) {
  return [e.screenX, e.screenY];
}
function C_() {
  let e = q([-1, -1]);
  return { wasMoved(t) {
    let n = lm(t);
    return e.current[0] === n[0] && e.current[1] === n[1] ? !1 : (e.current = n, !0);
  }, update(t) {
    e.current = lm(t);
  } };
}
function eL(e = 0) {
  let [t, n] = oe(e), r = X((l) => n(l), []), s = X((l) => n((u) => u | l), []), i = X((l) => (t & l) === l, [t]), o = X((l) => n((u) => u & ~l), []), a = X((l) => n((u) => u ^ l), []);
  return { flags: t, setFlag: r, addFlag: s, hasFlag: i, removeFlag: o, toggleFlag: a };
}
var um, cm;
typeof process != "undefined" && typeof globalThis != "undefined" && typeof Element != "undefined" && ((um = process == null ? void 0 : process.env) == null ? void 0 : um.NODE_ENV) === "test" && typeof ((cm = Element == null ? void 0 : Element.prototype) == null ? void 0 : cm.getAnimations) == "undefined" && (Element.prototype.getAnimations = function() {
  return console.warn(["Headless UI has polyfilled `Element.prototype.getAnimations` for your tests.", "Please install a proper polyfill e.g. `jsdom-testing-mocks`, to silence these warnings.", "", "Example usage:", "```js", "import { mockAnimationsApi } from 'jsdom-testing-mocks'", "mockAnimationsApi()", "```"].join(`
`)), [];
});
var tL = ((e) => (e[e.None = 0] = "None", e[e.Closed = 1] = "Closed", e[e.Enter = 2] = "Enter", e[e.Leave = 4] = "Leave", e))(tL || {});
function Ca(e) {
  let t = {};
  for (let n in e) e[n] === !0 && (t[`data-${n}`] = "");
  return t;
}
function $a(e, t, n, r) {
  let [s, i] = oe(n), { hasFlag: o, addFlag: a, removeFlag: l } = eL(e && s ? 3 : 0), u = q(!1), c = q(!1), d = kt();
  return Me(() => {
    var f;
    if (e) {
      if (n && i(!0), !t) {
        n && a(3);
        return;
      }
      return (f = r == null ? void 0 : r.start) == null || f.call(r, n), nL(t, { inFlight: u, prepare() {
        c.current ? c.current = !1 : c.current = u.current, u.current = !0, !c.current && (n ? (a(3), l(4)) : (a(4), l(2)));
      }, run() {
        c.current ? n ? (l(3), a(4)) : (l(4), a(3)) : n ? l(1) : a(1);
      }, done() {
        var m;
        c.current && sL(t) || (u.current = !1, l(7), n || i(!1), (m = r == null ? void 0 : r.end) == null || m.call(r, n));
      } });
    }
  }, [e, n, t, d]), e ? [s, { closed: o(1), enter: o(2), leave: o(4), transition: o(2) || o(4) }] : [n, { closed: void 0, enter: void 0, leave: void 0, transition: void 0 }];
}
function nL(e, { prepare: t, run: n, done: r, inFlight: s }) {
  let i = qe();
  return oL(e, { prepare: t, inFlight: s }), i.nextFrame(() => {
    n(), i.requestAnimationFrame(() => {
      i.add(rL(e, r));
    });
  }), i.dispose;
}
function rL(e, t) {
  var n, r;
  let s = qe();
  if (!e) return s.dispose;
  let i = !1;
  s.add(() => {
    i = !0;
  });
  let o = (r = (n = e.getAnimations) == null ? void 0 : n.call(e).filter((a) => a instanceof CSSTransition)) != null ? r : [];
  return o.length === 0 ? (t(), s.dispose) : (Promise.allSettled(o.map((a) => a.finished)).then(() => {
    i || t();
  }), s.dispose);
}
function oL(e, { inFlight: t, prepare: n }) {
  if (t != null && t.current) {
    n();
    return;
  }
  let r = e.style.transition;
  e.style.transition = "none", n(), e.offsetHeight, e.style.transition = r;
}
function sL(e) {
  var t, n;
  return ((n = (t = e.getAnimations) == null ? void 0 : t.call(e)) != null ? n : []).some((r) => r instanceof CSSTransition && r.playState !== "finished");
}
function iL(e, { container: t, accept: n, walk: r }) {
  let s = q(n), i = q(r);
  ue(() => {
    s.current = n, i.current = r;
  }, [n, r]), Me(() => {
    if (!t || !e) return;
    let o = rn(t);
    if (!o) return;
    let a = s.current, l = i.current, u = Object.assign((d) => a(d), { acceptNode: a }), c = o.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, u, !1);
    for (; c.nextNode(); ) l(c.currentNode);
  }, [t, e, s, i]);
}
function Er(e, t) {
  let n = q([]), r = Z(e);
  ue(() => {
    let s = [...n.current];
    for (let [i, o] of t.entries()) if (n.current[i] !== o) {
      let a = r(t, s);
      return n.current = t, a;
    }
  }, [r, ...t]);
}
function Ha() {
  return typeof window != "undefined";
}
function Qn(e) {
  return $_(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Qe(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Dt(e) {
  var t;
  return (t = ($_(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function $_(e) {
  return Ha() ? e instanceof Node || e instanceof Qe(e).Node : !1;
}
function Fe(e) {
  return Ha() ? e instanceof Element || e instanceof Qe(e).Element : !1;
}
function Yt(e) {
  return Ha() ? e instanceof HTMLElement || e instanceof Qe(e).HTMLElement : !1;
}
function dm(e) {
  return !Ha() || typeof ShadowRoot == "undefined" ? !1 : e instanceof ShadowRoot || e instanceof Qe(e).ShadowRoot;
}
const aL = /* @__PURE__ */ new Set(["inline", "contents"]);
function Jr(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: s
  } = pt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !aL.has(s);
}
const lL = /* @__PURE__ */ new Set(["table", "td", "th"]);
function uL(e) {
  return lL.has(Qn(e));
}
const cL = [":popover-open", ":modal"];
function Oa(e) {
  return cL.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const dL = ["transform", "translate", "scale", "rotate", "perspective"], fL = ["transform", "translate", "scale", "rotate", "perspective", "filter"], mL = ["paint", "layout", "strict", "content"];
function zc(e) {
  const t = Bc(), n = Fe(e) ? pt(e) : e;
  return dL.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || fL.some((r) => (n.willChange || "").includes(r)) || mL.some((r) => (n.contain || "").includes(r));
}
function pL(e) {
  let t = Qt(e);
  for (; Yt(t) && !Wn(t); ) {
    if (zc(t))
      return t;
    if (Oa(t))
      return null;
    t = Qt(t);
  }
  return null;
}
function Bc() {
  return typeof CSS == "undefined" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const hL = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Wn(e) {
  return hL.has(Qn(e));
}
function pt(e) {
  return Qe(e).getComputedStyle(e);
}
function Ra(e) {
  return Fe(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Qt(e) {
  if (Qn(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    dm(e) && e.host || // Fallback.
    Dt(e)
  );
  return dm(t) ? t.host : t;
}
function H_(e) {
  const t = Qt(e);
  return Wn(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Yt(t) && Jr(t) ? t : H_(t);
}
function jr(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const s = H_(e), i = s === ((r = e.ownerDocument) == null ? void 0 : r.body), o = Qe(s);
  if (i) {
    const a = Yu(o);
    return t.concat(o, o.visualViewport || [], Jr(s) ? s : [], a && n ? jr(a) : []);
  }
  return t.concat(s, jr(s, [], n));
}
function Yu(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function _L() {
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? e.brands.map((t) => {
    let {
      brand: n,
      version: r
    } = t;
    return n + "/" + r;
  }).join(" ") : navigator.userAgent;
}
const vL = ["top", "right", "bottom", "left"], Rt = Math.min, Re = Math.max, Pr = Math.round, co = Math.floor, bt = (e) => ({
  x: e,
  y: e
}), gL = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, yL = {
  start: "end",
  end: "start"
};
function Lu(e, t, n) {
  return Re(e, Rt(t, n));
}
function Lt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Nt(e) {
  return e.split("-")[0];
}
function er(e) {
  return e.split("-")[1];
}
function Wc(e) {
  return e === "x" ? "y" : "x";
}
function Uc(e) {
  return e === "y" ? "height" : "width";
}
const ML = /* @__PURE__ */ new Set(["top", "bottom"]);
function gt(e) {
  return ML.has(Nt(e)) ? "y" : "x";
}
function Kc(e) {
  return Wc(gt(e));
}
function bL(e, t, n) {
  n === void 0 && (n = !1);
  const r = er(e), s = Kc(e), i = Uc(s);
  let o = s === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (o = No(o)), [o, No(o)];
}
function xL(e) {
  const t = No(e);
  return [Su(e), t, Su(t)];
}
function Su(e) {
  return e.replace(/start|end/g, (t) => yL[t]);
}
const fm = ["left", "right"], mm = ["right", "left"], wL = ["top", "bottom"], YL = ["bottom", "top"];
function LL(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? mm : fm : t ? fm : mm;
    case "left":
    case "right":
      return t ? wL : YL;
    default:
      return [];
  }
}
function SL(e, t, n, r) {
  const s = er(e);
  let i = LL(Nt(e), n === "start", r);
  return s && (i = i.map((o) => o + "-" + s), t && (i = i.concat(i.map(Su)))), i;
}
function No(e) {
  return e.replace(/left|right|bottom|top/g, (t) => gL[t]);
}
function kL(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function O_(e) {
  return typeof e != "number" ? kL(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Io(e) {
  const {
    x: t,
    y: n,
    width: r,
    height: s
  } = e;
  return {
    width: r,
    height: s,
    top: n,
    left: t,
    right: t + r,
    bottom: n + s,
    x: t,
    y: n
  };
}
function pm(e, t, n) {
  let {
    reference: r,
    floating: s
  } = e;
  const i = gt(t), o = Kc(t), a = Uc(o), l = Nt(t), u = i === "y", c = r.x + r.width / 2 - s.width / 2, d = r.y + r.height / 2 - s.height / 2, f = r[a] / 2 - s[a] / 2;
  let m;
  switch (l) {
    case "top":
      m = {
        x: c,
        y: r.y - s.height
      };
      break;
    case "bottom":
      m = {
        x: c,
        y: r.y + r.height
      };
      break;
    case "right":
      m = {
        x: r.x + r.width,
        y: d
      };
      break;
    case "left":
      m = {
        x: r.x - s.width,
        y: d
      };
      break;
    default:
      m = {
        x: r.x,
        y: r.y
      };
  }
  switch (er(t)) {
    case "start":
      m[o] -= f * (n && u ? -1 : 1);
      break;
    case "end":
      m[o] += f * (n && u ? -1 : 1);
      break;
  }
  return m;
}
const DL = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: s = "absolute",
    middleware: i = [],
    platform: o
  } = n, a = i.filter(Boolean), l = await (o.isRTL == null ? void 0 : o.isRTL(t));
  let u = await o.getElementRects({
    reference: e,
    floating: t,
    strategy: s
  }), {
    x: c,
    y: d
  } = pm(u, r, l), f = r, m = {}, p = 0;
  for (let h = 0; h < a.length; h++) {
    const {
      name: _,
      fn: v
    } = a[h], {
      x: M,
      y,
      data: x,
      reset: w
    } = await v({
      x: c,
      y: d,
      initialPlacement: r,
      placement: f,
      strategy: s,
      middlewareData: m,
      rects: u,
      platform: o,
      elements: {
        reference: e,
        floating: t
      }
    });
    c = M != null ? M : c, d = y != null ? y : d, m = {
      ...m,
      [_]: {
        ...m[_],
        ...x
      }
    }, w && p <= 50 && (p++, typeof w == "object" && (w.placement && (f = w.placement), w.rects && (u = w.rects === !0 ? await o.getElementRects({
      reference: e,
      floating: t,
      strategy: s
    }) : w.rects), {
      x: c,
      y: d
    } = pm(u, f, l)), h = -1);
  }
  return {
    x: c,
    y: d,
    placement: f,
    strategy: s,
    middlewareData: m
  };
};
async function Un(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: s,
    platform: i,
    rects: o,
    elements: a,
    strategy: l
  } = e, {
    boundary: u = "clippingAncestors",
    rootBoundary: c = "viewport",
    elementContext: d = "floating",
    altBoundary: f = !1,
    padding: m = 0
  } = Lt(t, e), p = O_(m), _ = a[f ? d === "floating" ? "reference" : "floating" : d], v = Io(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(_))) == null || n ? _ : _.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: u,
    rootBoundary: c,
    strategy: l
  })), M = d === "floating" ? {
    x: r,
    y: s,
    width: o.floating.width,
    height: o.floating.height
  } : o.reference, y = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), x = await (i.isElement == null ? void 0 : i.isElement(y)) ? await (i.getScale == null ? void 0 : i.getScale(y)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, w = Io(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: M,
    offsetParent: y,
    strategy: l
  }) : M);
  return {
    top: (v.top - w.top + p.top) / x.y,
    bottom: (w.bottom - v.bottom + p.bottom) / x.y,
    left: (v.left - w.left + p.left) / x.x,
    right: (w.right - v.right + p.right) / x.x
  };
}
const TL = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: s,
      rects: i,
      platform: o,
      elements: a,
      middlewareData: l
    } = t, {
      element: u,
      padding: c = 0
    } = Lt(e, t) || {};
    if (u == null)
      return {};
    const d = O_(c), f = {
      x: n,
      y: r
    }, m = Kc(s), p = Uc(m), h = await o.getDimensions(u), _ = m === "y", v = _ ? "top" : "left", M = _ ? "bottom" : "right", y = _ ? "clientHeight" : "clientWidth", x = i.reference[p] + i.reference[m] - f[m] - i.floating[p], w = f[m] - i.reference[m], k = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(u));
    let D = k ? k[y] : 0;
    (!D || !await (o.isElement == null ? void 0 : o.isElement(k))) && (D = a.floating[y] || i.floating[p]);
    const S = x / 2 - w / 2, N = D / 2 - h[p] / 2 - 1, Y = Rt(d[v], N), $ = Rt(d[M], N), I = Y, U = D - h[p] - $, H = D / 2 - h[p] / 2 + S, A = Lu(I, H, U), C = !l.arrow && er(s) != null && H !== A && i.reference[p] / 2 - (H < I ? Y : $) - h[p] / 2 < 0, O = C ? H < I ? H - I : H - U : 0;
    return {
      [m]: f[m] + O,
      data: {
        [m]: A,
        centerOffset: H - A - O,
        ...C && {
          alignmentOffset: O
        }
      },
      reset: C
    };
  }
}), EL = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: s,
        middlewareData: i,
        rects: o,
        initialPlacement: a,
        platform: l,
        elements: u
      } = t, {
        mainAxis: c = !0,
        crossAxis: d = !0,
        fallbackPlacements: f,
        fallbackStrategy: m = "bestFit",
        fallbackAxisSideDirection: p = "none",
        flipAlignment: h = !0,
        ..._
      } = Lt(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const v = Nt(s), M = gt(a), y = Nt(a) === a, x = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), w = f || (y || !h ? [No(a)] : xL(a)), k = p !== "none";
      !f && k && w.push(...SL(a, h, p, x));
      const D = [a, ...w], S = await Un(t, _), N = [];
      let Y = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (c && N.push(S[v]), d) {
        const H = bL(s, o, x);
        N.push(S[H[0]], S[H[1]]);
      }
      if (Y = [...Y, {
        placement: s,
        overflows: N
      }], !N.every((H) => H <= 0)) {
        var $, I;
        const H = ((($ = i.flip) == null ? void 0 : $.index) || 0) + 1, A = D[H];
        if (A && (!(d === "alignment" ? M !== gt(A) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        Y.every((L) => gt(L.placement) === M ? L.overflows[0] > 0 : !0)))
          return {
            data: {
              index: H,
              overflows: Y
            },
            reset: {
              placement: A
            }
          };
        let C = (I = Y.filter((O) => O.overflows[0] <= 0).sort((O, L) => O.overflows[1] - L.overflows[1])[0]) == null ? void 0 : I.placement;
        if (!C)
          switch (m) {
            case "bestFit": {
              var U;
              const O = (U = Y.filter((L) => {
                if (k) {
                  const j = gt(L.placement);
                  return j === M || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  j === "y";
                }
                return !0;
              }).map((L) => [L.placement, L.overflows.filter((j) => j > 0).reduce((j, B) => j + B, 0)]).sort((L, j) => L[1] - j[1])[0]) == null ? void 0 : U[0];
              O && (C = O);
              break;
            }
            case "initialPlacement":
              C = a;
              break;
          }
        if (s !== C)
          return {
            reset: {
              placement: C
            }
          };
      }
      return {};
    }
  };
};
function hm(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function _m(e) {
  return vL.some((t) => e[t] >= 0);
}
const jL = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...s
      } = Lt(e, t);
      switch (r) {
        case "referenceHidden": {
          const i = await Un(t, {
            ...s,
            elementContext: "reference"
          }), o = hm(i, n.reference);
          return {
            data: {
              referenceHiddenOffsets: o,
              referenceHidden: _m(o)
            }
          };
        }
        case "escaped": {
          const i = await Un(t, {
            ...s,
            altBoundary: !0
          }), o = hm(i, n.floating);
          return {
            data: {
              escapedOffsets: o,
              escaped: _m(o)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, R_ = /* @__PURE__ */ new Set(["left", "top"]);
async function PL(e, t) {
  const {
    placement: n,
    platform: r,
    elements: s
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(s.floating)), o = Nt(n), a = er(n), l = gt(n) === "y", u = R_.has(o) ? -1 : 1, c = i && l ? -1 : 1, d = Lt(t, e);
  let {
    mainAxis: f,
    crossAxis: m,
    alignmentAxis: p
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: d.mainAxis || 0,
    crossAxis: d.crossAxis || 0,
    alignmentAxis: d.alignmentAxis
  };
  return a && typeof p == "number" && (m = a === "end" ? p * -1 : p), l ? {
    x: m * c,
    y: f * u
  } : {
    x: f * u,
    y: m * c
  };
}
const AL = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: s,
        y: i,
        placement: o,
        middlewareData: a
      } = t, l = await PL(t, e);
      return o === ((n = a.offset) == null ? void 0 : n.placement) && (r = a.arrow) != null && r.alignmentOffset ? {} : {
        x: s + l.x,
        y: i + l.y,
        data: {
          ...l,
          placement: o
        }
      };
    }
  };
}, CL = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: s
      } = t, {
        mainAxis: i = !0,
        crossAxis: o = !1,
        limiter: a = {
          fn: (_) => {
            let {
              x: v,
              y: M
            } = _;
            return {
              x: v,
              y: M
            };
          }
        },
        ...l
      } = Lt(e, t), u = {
        x: n,
        y: r
      }, c = await Un(t, l), d = gt(Nt(s)), f = Wc(d);
      let m = u[f], p = u[d];
      if (i) {
        const _ = f === "y" ? "top" : "left", v = f === "y" ? "bottom" : "right", M = m + c[_], y = m - c[v];
        m = Lu(M, m, y);
      }
      if (o) {
        const _ = d === "y" ? "top" : "left", v = d === "y" ? "bottom" : "right", M = p + c[_], y = p - c[v];
        p = Lu(M, p, y);
      }
      const h = a.fn({
        ...t,
        [f]: m,
        [d]: p
      });
      return {
        ...h,
        data: {
          x: h.x - n,
          y: h.y - r,
          enabled: {
            [f]: i,
            [d]: o
          }
        }
      };
    }
  };
}, $L = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: s,
        rects: i,
        middlewareData: o
      } = t, {
        offset: a = 0,
        mainAxis: l = !0,
        crossAxis: u = !0
      } = Lt(e, t), c = {
        x: n,
        y: r
      }, d = gt(s), f = Wc(d);
      let m = c[f], p = c[d];
      const h = Lt(a, t), _ = typeof h == "number" ? {
        mainAxis: h,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...h
      };
      if (l) {
        const y = f === "y" ? "height" : "width", x = i.reference[f] - i.floating[y] + _.mainAxis, w = i.reference[f] + i.reference[y] - _.mainAxis;
        m < x ? m = x : m > w && (m = w);
      }
      if (u) {
        var v, M;
        const y = f === "y" ? "width" : "height", x = R_.has(Nt(s)), w = i.reference[d] - i.floating[y] + (x && ((v = o.offset) == null ? void 0 : v[d]) || 0) + (x ? 0 : _.crossAxis), k = i.reference[d] + i.reference[y] + (x ? 0 : ((M = o.offset) == null ? void 0 : M[d]) || 0) - (x ? _.crossAxis : 0);
        p < w ? p = w : p > k && (p = k);
      }
      return {
        [f]: m,
        [d]: p
      };
    }
  };
}, HL = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: s,
        rects: i,
        platform: o,
        elements: a
      } = t, {
        apply: l = () => {
        },
        ...u
      } = Lt(e, t), c = await Un(t, u), d = Nt(s), f = er(s), m = gt(s) === "y", {
        width: p,
        height: h
      } = i.floating;
      let _, v;
      d === "top" || d === "bottom" ? (_ = d, v = f === (await (o.isRTL == null ? void 0 : o.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (v = d, _ = f === "end" ? "top" : "bottom");
      const M = h - c.top - c.bottom, y = p - c.left - c.right, x = Rt(h - c[_], M), w = Rt(p - c[v], y), k = !t.middlewareData.shift;
      let D = x, S = w;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (S = y), (r = t.middlewareData.shift) != null && r.enabled.y && (D = M), k && !f) {
        const Y = Re(c.left, 0), $ = Re(c.right, 0), I = Re(c.top, 0), U = Re(c.bottom, 0);
        m ? S = p - 2 * (Y !== 0 || $ !== 0 ? Y + $ : Re(c.left, c.right)) : D = h - 2 * (I !== 0 || U !== 0 ? I + U : Re(c.top, c.bottom));
      }
      await l({
        ...t,
        availableWidth: S,
        availableHeight: D
      });
      const N = await o.getDimensions(a.floating);
      return p !== N.width || h !== N.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function N_(e) {
  const t = pt(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const s = Yt(e), i = s ? e.offsetWidth : n, o = s ? e.offsetHeight : r, a = Pr(n) !== i || Pr(r) !== o;
  return a && (n = i, r = o), {
    width: n,
    height: r,
    $: a
  };
}
function Gc(e) {
  return Fe(e) ? e : e.contextElement;
}
function Nn(e) {
  const t = Gc(e);
  if (!Yt(t))
    return bt(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: s,
    $: i
  } = N_(t);
  let o = (i ? Pr(n.width) : n.width) / r, a = (i ? Pr(n.height) : n.height) / s;
  return (!o || !Number.isFinite(o)) && (o = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: o,
    y: a
  };
}
const OL = /* @__PURE__ */ bt(0);
function I_(e) {
  const t = Qe(e);
  return !Bc() || !t.visualViewport ? OL : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function RL(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Qe(e) ? !1 : t;
}
function Mn(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const s = e.getBoundingClientRect(), i = Gc(e);
  let o = bt(1);
  t && (r ? Fe(r) && (o = Nn(r)) : o = Nn(e));
  const a = RL(i, n, r) ? I_(i) : bt(0);
  let l = (s.left + a.x) / o.x, u = (s.top + a.y) / o.y, c = s.width / o.x, d = s.height / o.y;
  if (i) {
    const f = Qe(i), m = r && Fe(r) ? Qe(r) : r;
    let p = f, h = Yu(p);
    for (; h && r && m !== p; ) {
      const _ = Nn(h), v = h.getBoundingClientRect(), M = pt(h), y = v.left + (h.clientLeft + parseFloat(M.paddingLeft)) * _.x, x = v.top + (h.clientTop + parseFloat(M.paddingTop)) * _.y;
      l *= _.x, u *= _.y, c *= _.x, d *= _.y, l += y, u += x, p = Qe(h), h = Yu(p);
    }
  }
  return Io({
    width: c,
    height: d,
    x: l,
    y: u
  });
}
function Na(e, t) {
  const n = Ra(e).scrollLeft;
  return t ? t.left + n : Mn(Dt(e)).left + n;
}
function F_(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - Na(e, n), s = n.top + t.scrollTop;
  return {
    x: r,
    y: s
  };
}
function NL(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: s
  } = e;
  const i = s === "fixed", o = Dt(r), a = t ? Oa(t.floating) : !1;
  if (r === o || a && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = bt(1);
  const c = bt(0), d = Yt(r);
  if ((d || !d && !i) && ((Qn(r) !== "body" || Jr(o)) && (l = Ra(r)), Yt(r))) {
    const m = Mn(r);
    u = Nn(r), c.x = m.x + r.clientLeft, c.y = m.y + r.clientTop;
  }
  const f = o && !d && !i ? F_(o, l) : bt(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + c.x + f.x,
    y: n.y * u.y - l.scrollTop * u.y + c.y + f.y
  };
}
function IL(e) {
  return Array.from(e.getClientRects());
}
function FL(e) {
  const t = Dt(e), n = Ra(e), r = e.ownerDocument.body, s = Re(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = Re(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let o = -n.scrollLeft + Na(e);
  const a = -n.scrollTop;
  return pt(r).direction === "rtl" && (o += Re(t.clientWidth, r.clientWidth) - s), {
    width: s,
    height: i,
    x: o,
    y: a
  };
}
const vm = 25;
function VL(e, t) {
  const n = Qe(e), r = Dt(e), s = n.visualViewport;
  let i = r.clientWidth, o = r.clientHeight, a = 0, l = 0;
  if (s) {
    i = s.width, o = s.height;
    const c = Bc();
    (!c || c && t === "fixed") && (a = s.offsetLeft, l = s.offsetTop);
  }
  const u = Na(r);
  if (u <= 0) {
    const c = r.ownerDocument, d = c.body, f = getComputedStyle(d), m = c.compatMode === "CSS1Compat" && parseFloat(f.marginLeft) + parseFloat(f.marginRight) || 0, p = Math.abs(r.clientWidth - d.clientWidth - m);
    p <= vm && (i -= p);
  } else u <= vm && (i += u);
  return {
    width: i,
    height: o,
    x: a,
    y: l
  };
}
const zL = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function BL(e, t) {
  const n = Mn(e, !0, t === "fixed"), r = n.top + e.clientTop, s = n.left + e.clientLeft, i = Yt(e) ? Nn(e) : bt(1), o = e.clientWidth * i.x, a = e.clientHeight * i.y, l = s * i.x, u = r * i.y;
  return {
    width: o,
    height: a,
    x: l,
    y: u
  };
}
function gm(e, t, n) {
  let r;
  if (t === "viewport")
    r = VL(e, n);
  else if (t === "document")
    r = FL(Dt(e));
  else if (Fe(t))
    r = BL(t, n);
  else {
    const s = I_(e);
    r = {
      x: t.x - s.x,
      y: t.y - s.y,
      width: t.width,
      height: t.height
    };
  }
  return Io(r);
}
function V_(e, t) {
  const n = Qt(e);
  return n === t || !Fe(n) || Wn(n) ? !1 : pt(n).position === "fixed" || V_(n, t);
}
function WL(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = jr(e, [], !1).filter((a) => Fe(a) && Qn(a) !== "body"), s = null;
  const i = pt(e).position === "fixed";
  let o = i ? Qt(e) : e;
  for (; Fe(o) && !Wn(o); ) {
    const a = pt(o), l = zc(o);
    !l && a.position === "fixed" && (s = null), (i ? !l && !s : !l && a.position === "static" && !!s && zL.has(s.position) || Jr(o) && !l && V_(e, o)) ? r = r.filter((c) => c !== o) : s = a, o = Qt(o);
  }
  return t.set(e, r), r;
}
function UL(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: s
  } = e;
  const o = [...n === "clippingAncestors" ? Oa(t) ? [] : WL(t, this._c) : [].concat(n), r], a = o[0], l = o.reduce((u, c) => {
    const d = gm(t, c, s);
    return u.top = Re(d.top, u.top), u.right = Rt(d.right, u.right), u.bottom = Rt(d.bottom, u.bottom), u.left = Re(d.left, u.left), u;
  }, gm(t, a, s));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function KL(e) {
  const {
    width: t,
    height: n
  } = N_(e);
  return {
    width: t,
    height: n
  };
}
function GL(e, t, n) {
  const r = Yt(t), s = Dt(t), i = n === "fixed", o = Mn(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = bt(0);
  function u() {
    l.x = Na(s);
  }
  if (r || !r && !i)
    if ((Qn(t) !== "body" || Jr(s)) && (a = Ra(t)), r) {
      const m = Mn(t, !0, i, t);
      l.x = m.x + t.clientLeft, l.y = m.y + t.clientTop;
    } else s && u();
  i && !r && s && u();
  const c = s && !r && !i ? F_(s, a) : bt(0), d = o.left + a.scrollLeft - l.x - c.x, f = o.top + a.scrollTop - l.y - c.y;
  return {
    x: d,
    y: f,
    width: o.width,
    height: o.height
  };
}
function Ll(e) {
  return pt(e).position === "static";
}
function ym(e, t) {
  if (!Yt(e) || pt(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Dt(e) === n && (n = n.ownerDocument.body), n;
}
function z_(e, t) {
  const n = Qe(e);
  if (Oa(e))
    return n;
  if (!Yt(e)) {
    let s = Qt(e);
    for (; s && !Wn(s); ) {
      if (Fe(s) && !Ll(s))
        return s;
      s = Qt(s);
    }
    return n;
  }
  let r = ym(e, t);
  for (; r && uL(r) && Ll(r); )
    r = ym(r, t);
  return r && Wn(r) && Ll(r) && !zc(r) ? n : r || pL(e) || n;
}
const JL = async function(e) {
  const t = this.getOffsetParent || z_, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: GL(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function qL(e) {
  return pt(e).direction === "rtl";
}
const XL = {
  convertOffsetParentRelativeRectToViewportRelativeRect: NL,
  getDocumentElement: Dt,
  getClippingRect: UL,
  getOffsetParent: z_,
  getElementRects: JL,
  getClientRects: IL,
  getDimensions: KL,
  getScale: Nn,
  isElement: Fe,
  isRTL: qL
};
function B_(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function ZL(e, t) {
  let n = null, r;
  const s = Dt(e);
  function i() {
    var a;
    clearTimeout(r), (a = n) == null || a.disconnect(), n = null;
  }
  function o(a, l) {
    a === void 0 && (a = !1), l === void 0 && (l = 1), i();
    const u = e.getBoundingClientRect(), {
      left: c,
      top: d,
      width: f,
      height: m
    } = u;
    if (a || t(), !f || !m)
      return;
    const p = co(d), h = co(s.clientWidth - (c + f)), _ = co(s.clientHeight - (d + m)), v = co(c), y = {
      rootMargin: -p + "px " + -h + "px " + -_ + "px " + -v + "px",
      threshold: Re(0, Rt(1, l)) || 1
    };
    let x = !0;
    function w(k) {
      const D = k[0].intersectionRatio;
      if (D !== l) {
        if (!x)
          return o();
        D ? o(!1, D) : r = setTimeout(() => {
          o(!1, 1e-7);
        }, 1e3);
      }
      D === 1 && !B_(u, e.getBoundingClientRect()) && o(), x = !1;
    }
    try {
      n = new IntersectionObserver(w, {
        ...y,
        // Handle <iframe>s
        root: s.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(w, y);
    }
    n.observe(e);
  }
  return o(!0), i;
}
function W_(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: s = !0,
    ancestorResize: i = !0,
    elementResize: o = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, u = Gc(e), c = s || i ? [...u ? jr(u) : [], ...jr(t)] : [];
  c.forEach((v) => {
    s && v.addEventListener("scroll", n, {
      passive: !0
    }), i && v.addEventListener("resize", n);
  });
  const d = u && a ? ZL(u, n) : null;
  let f = -1, m = null;
  o && (m = new ResizeObserver((v) => {
    let [M] = v;
    M && M.target === u && m && (m.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      var y;
      (y = m) == null || y.observe(t);
    })), n();
  }), u && !l && m.observe(u), m.observe(t));
  let p, h = l ? Mn(e) : null;
  l && _();
  function _() {
    const v = Mn(e);
    h && !B_(h, v) && n(), h = v, p = requestAnimationFrame(_);
  }
  return n(), () => {
    var v;
    c.forEach((M) => {
      s && M.removeEventListener("scroll", n), i && M.removeEventListener("resize", n);
    }), d == null || d(), (v = m) == null || v.disconnect(), m = null, l && cancelAnimationFrame(p);
  };
}
const Sl = Un, QL = AL, eS = CL, tS = EL, nS = HL, rS = jL, Mm = TL, oS = $L, sS = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), s = {
    platform: XL,
    ...n
  }, i = {
    ...s.platform,
    _c: r
  };
  return DL(e, t, {
    ...s,
    platform: i
  });
};
var iS = typeof document != "undefined", aS = function() {
}, Yo = iS ? Ma : aS;
function Fo(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, r, s;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return !1;
      for (r = n; r-- !== 0; )
        if (!Fo(e[r], t[r]))
          return !1;
      return !0;
    }
    if (s = Object.keys(e), n = s.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, s[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const i = s[r];
      if (!(i === "_owner" && e.$$typeof) && !Fo(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function U_(e) {
  return typeof window == "undefined" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function bm(e, t) {
  const n = U_(e);
  return Math.round(t * n) / n;
}
function kl(e) {
  const t = b.useRef(e);
  return Yo(() => {
    t.current = e;
  }), t;
}
function K_(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: s,
    elements: {
      reference: i,
      floating: o
    } = {},
    transform: a = !0,
    whileElementsMounted: l,
    open: u
  } = e, [c, d] = b.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [f, m] = b.useState(r);
  Fo(f, r) || m(r);
  const [p, h] = b.useState(null), [_, v] = b.useState(null), M = b.useCallback((L) => {
    L !== k.current && (k.current = L, h(L));
  }, []), y = b.useCallback((L) => {
    L !== D.current && (D.current = L, v(L));
  }, []), x = i || p, w = o || _, k = b.useRef(null), D = b.useRef(null), S = b.useRef(c), N = l != null, Y = kl(l), $ = kl(s), I = kl(u), U = b.useCallback(() => {
    if (!k.current || !D.current)
      return;
    const L = {
      placement: t,
      strategy: n,
      middleware: f
    };
    $.current && (L.platform = $.current), sS(k.current, D.current, L).then((j) => {
      const B = {
        ...j,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: I.current !== !1
      };
      H.current && !Fo(S.current, B) && (S.current = B, xr.flushSync(() => {
        d(B);
      }));
    });
  }, [f, t, n, $, I]);
  Yo(() => {
    u === !1 && S.current.isPositioned && (S.current.isPositioned = !1, d((L) => ({
      ...L,
      isPositioned: !1
    })));
  }, [u]);
  const H = b.useRef(!1);
  Yo(() => (H.current = !0, () => {
    H.current = !1;
  }), []), Yo(() => {
    if (x && (k.current = x), w && (D.current = w), x && w) {
      if (Y.current)
        return Y.current(x, w, U);
      U();
    }
  }, [x, w, U, Y, N]);
  const A = b.useMemo(() => ({
    reference: k,
    floating: D,
    setReference: M,
    setFloating: y
  }), [M, y]), C = b.useMemo(() => ({
    reference: x,
    floating: w
  }), [x, w]), O = b.useMemo(() => {
    const L = {
      position: n,
      left: 0,
      top: 0
    };
    if (!C.floating)
      return L;
    const j = bm(C.floating, c.x), B = bm(C.floating, c.y);
    return a ? {
      ...L,
      transform: "translate(" + j + "px, " + B + "px)",
      ...U_(C.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: j,
      top: B
    };
  }, [n, a, C.floating, c.x, c.y]);
  return b.useMemo(() => ({
    ...c,
    update: U,
    refs: A,
    elements: C,
    floatingStyles: O
  }), [c, U, A, C, O]);
}
const lS = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: r,
        padding: s
      } = typeof e == "function" ? e(n) : e;
      return r && t(r) ? r.current != null ? Mm({
        element: r.current,
        padding: s
      }).fn(n) : {} : r ? Mm({
        element: r,
        padding: s
      }).fn(n) : {};
    }
  };
}, Jc = (e, t) => ({
  ...QL(e),
  options: [e, t]
}), G_ = (e, t) => ({
  ...eS(e),
  options: [e, t]
}), uS = (e, t) => ({
  ...oS(e),
  options: [e, t]
}), J_ = (e, t) => ({
  ...tS(e),
  options: [e, t]
}), q_ = (e, t) => ({
  ...nS(e),
  options: [e, t]
}), cS = (e, t) => ({
  ...rS(e),
  options: [e, t]
}), dS = (e, t) => ({
  ...lS(e),
  options: [e, t]
}), X_ = {
  ...b
}, fS = X_.useInsertionEffect, mS = fS || ((e) => e());
function Z_(e) {
  const t = b.useRef(() => {
    if (process.env.NODE_ENV !== "production")
      throw new Error("Cannot call an event handler while rendering.");
  });
  return mS(() => {
    t.current = e;
  }), b.useCallback(function() {
    for (var n = arguments.length, r = new Array(n), s = 0; s < n; s++)
      r[s] = arguments[s];
    return t.current == null ? void 0 : t.current(...r);
  }, []);
}
var ku = typeof document != "undefined" ? Ma : ue;
let xm = !1, pS = 0;
const wm = () => (
  // Ensure the id is unique with multiple independent versions of Floating UI
  // on <React 18
  "floating-ui-" + Math.random().toString(36).slice(2, 6) + pS++
);
function hS() {
  const [e, t] = b.useState(() => xm ? wm() : void 0);
  return ku(() => {
    e == null && t(wm());
  }, []), b.useEffect(() => {
    xm = !0;
  }, []), e;
}
const _S = X_.useId, vS = _S || hS;
let Ar;
process.env.NODE_ENV !== "production" && (Ar = /* @__PURE__ */ new Set());
function gS() {
  for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  const s = "Floating UI: " + n.join(" ");
  if (!((e = Ar) != null && e.has(s))) {
    var i;
    (i = Ar) == null || i.add(s), console.warn(s);
  }
}
function yS() {
  for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  const s = "Floating UI: " + n.join(" ");
  if (!((e = Ar) != null && e.has(s))) {
    var i;
    (i = Ar) == null || i.add(s), console.error(s);
  }
}
function MS() {
  const e = /* @__PURE__ */ new Map();
  return {
    emit(t, n) {
      var r;
      (r = e.get(t)) == null || r.forEach((s) => s(n));
    },
    on(t, n) {
      e.set(t, [...e.get(t) || [], n]);
    },
    off(t, n) {
      var r;
      e.set(t, ((r = e.get(t)) == null ? void 0 : r.filter((s) => s !== n)) || []);
    }
  };
}
const bS = /* @__PURE__ */ b.createContext(null), xS = /* @__PURE__ */ b.createContext(null), wS = () => {
  var e;
  return ((e = b.useContext(bS)) == null ? void 0 : e.id) || null;
}, YS = () => b.useContext(xS), LS = "data-floating-ui-focusable";
function SS(e) {
  const {
    open: t = !1,
    onOpenChange: n,
    elements: r
  } = e, s = vS(), i = b.useRef({}), [o] = b.useState(() => MS()), a = wS() != null;
  if (process.env.NODE_ENV !== "production") {
    const m = r.reference;
    m && !Fe(m) && yS("Cannot pass a virtual element to the `elements.reference` option,", "as it must be a real DOM element. Use `refs.setPositionReference()`", "instead.");
  }
  const [l, u] = b.useState(r.reference), c = Z_((m, p, h) => {
    i.current.openEvent = m ? p : void 0, o.emit("openchange", {
      open: m,
      event: p,
      reason: h,
      nested: a
    }), n == null || n(m, p, h);
  }), d = b.useMemo(() => ({
    setPositionReference: u
  }), []), f = b.useMemo(() => ({
    reference: l || r.reference || null,
    floating: r.floating || null,
    domReference: r.reference
  }), [l, r.reference, r.floating]);
  return b.useMemo(() => ({
    dataRef: i,
    open: t,
    onOpenChange: c,
    elements: f,
    events: o,
    floatingId: s,
    refs: d
  }), [t, c, f, o, s, d]);
}
function kS(e) {
  e === void 0 && (e = {});
  const {
    nodeId: t
  } = e, n = SS({
    ...e,
    elements: {
      reference: null,
      floating: null,
      ...e.elements
    }
  }), r = e.rootContext || n, s = r.elements, [i, o] = b.useState(null), [a, l] = b.useState(null), c = (s == null ? void 0 : s.domReference) || i, d = b.useRef(null), f = YS();
  ku(() => {
    c && (d.current = c);
  }, [c]);
  const m = K_({
    ...e,
    elements: {
      ...s,
      ...a && {
        reference: a
      }
    }
  }), p = b.useCallback((y) => {
    const x = Fe(y) ? {
      getBoundingClientRect: () => y.getBoundingClientRect(),
      contextElement: y
    } : y;
    l(x), m.refs.setReference(x);
  }, [m.refs]), h = b.useCallback((y) => {
    (Fe(y) || y === null) && (d.current = y, o(y)), (Fe(m.refs.reference.current) || m.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    y !== null && !Fe(y)) && m.refs.setReference(y);
  }, [m.refs]), _ = b.useMemo(() => ({
    ...m.refs,
    setReference: h,
    setPositionReference: p,
    domReference: d
  }), [m.refs, h, p]), v = b.useMemo(() => ({
    ...m.elements,
    domReference: c
  }), [m.elements, c]), M = b.useMemo(() => ({
    ...m,
    ...r,
    refs: _,
    elements: v,
    nodeId: t
  }), [m, _, v, t, r]);
  return ku(() => {
    r.dataRef.current.floatingContext = M;
    const y = f == null ? void 0 : f.nodesRef.current.find((x) => x.id === t);
    y && (y.context = M);
  }), b.useMemo(() => ({
    ...m,
    context: M,
    refs: _,
    elements: v
  }), [m, _, v, M]);
}
const Ym = "active", Lm = "selected";
function Dl(e, t, n) {
  const r = /* @__PURE__ */ new Map(), s = n === "item";
  let i = e;
  if (s && e) {
    const {
      [Ym]: o,
      [Lm]: a,
      ...l
    } = e;
    i = l;
  }
  return {
    ...n === "floating" && {
      tabIndex: -1,
      [LS]: ""
    },
    ...i,
    ...t.map((o) => {
      const a = o ? o[n] : null;
      return typeof a == "function" ? e ? a(e) : null : a;
    }).concat(e).reduce((o, a) => (a && Object.entries(a).forEach((l) => {
      let [u, c] = l;
      if (!(s && [Ym, Lm].includes(u)))
        if (u.indexOf("on") === 0) {
          if (r.has(u) || r.set(u, []), typeof c == "function") {
            var d;
            (d = r.get(u)) == null || d.push(c), o[u] = function() {
              for (var f, m = arguments.length, p = new Array(m), h = 0; h < m; h++)
                p[h] = arguments[h];
              return (f = r.get(u)) == null ? void 0 : f.map((_) => _(...p)).find((_) => _ !== void 0);
            };
          }
        } else
          o[u] = c;
    }), o), {})
  };
}
function DS(e) {
  e === void 0 && (e = []);
  const t = e.map((a) => a == null ? void 0 : a.reference), n = e.map((a) => a == null ? void 0 : a.floating), r = e.map((a) => a == null ? void 0 : a.item), s = b.useCallback(
    (a) => Dl(a, e, "reference"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), i = b.useCallback(
    (a) => Dl(a, e, "floating"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    n
  ), o = b.useCallback(
    (a) => Dl(a, e, "item"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    r
  );
  return b.useMemo(() => ({
    getReferenceProps: s,
    getFloatingProps: i,
    getItemProps: o
  }), [s, i, o]);
}
function Sm(e, t) {
  return {
    ...e,
    rects: {
      ...e.rects,
      floating: {
        ...e.rects.floating,
        height: t
      }
    }
  };
}
const TS = (e) => ({
  name: "inner",
  options: e,
  async fn(t) {
    const {
      listRef: n,
      overflowRef: r,
      onFallbackChange: s,
      offset: i = 0,
      index: o = 0,
      minItemsVisible: a = 4,
      referenceOverflowThreshold: l = 0,
      scrollRef: u,
      ...c
    } = Lt(e, t), {
      rects: d,
      elements: {
        floating: f
      }
    } = t, m = n.current[o], p = (u == null ? void 0 : u.current) || f, h = f.clientTop || p.clientTop, _ = f.clientTop !== 0, v = p.clientTop !== 0, M = f === p;
    if (process.env.NODE_ENV !== "production" && (t.placement.startsWith("bottom") || gS('`placement` side must be "bottom" when using the `inner`', "middleware.")), !m)
      return {};
    const y = {
      ...t,
      ...await Jc(-m.offsetTop - f.clientTop - d.reference.height / 2 - m.offsetHeight / 2 - i).fn(t)
    }, x = await Sl(Sm(y, p.scrollHeight + h + f.clientTop), c), w = await Sl(y, {
      ...c,
      elementContext: "reference"
    }), k = Re(0, x.top), D = y.y + k, Y = (p.scrollHeight > p.clientHeight ? ($) => $ : Pr)(Re(0, p.scrollHeight + (_ && M || v ? h * 2 : 0) - k - Re(0, x.bottom)));
    if (p.style.maxHeight = Y + "px", p.scrollTop = k, s) {
      const $ = p.offsetHeight < m.offsetHeight * Rt(a, n.current.length) - 1 || w.top >= -l || w.bottom >= -l;
      xr.flushSync(() => s($));
    }
    return r && (r.current = await Sl(Sm({
      ...y,
      y: D
    }, p.offsetHeight + h + f.clientTop), c)), {
      y: D
    };
  }
});
function ES(e, t) {
  const {
    open: n,
    elements: r
  } = e, {
    enabled: s = !0,
    overflowRef: i,
    scrollRef: o,
    onChange: a
  } = t, l = Z_(a), u = b.useRef(!1), c = b.useRef(null), d = b.useRef(null);
  b.useEffect(() => {
    if (!s) return;
    function m(h) {
      if (h.ctrlKey || !p || i.current == null)
        return;
      const _ = h.deltaY, v = i.current.top >= -0.5, M = i.current.bottom >= -0.5, y = p.scrollHeight - p.clientHeight, x = _ < 0 ? -1 : 1, w = _ < 0 ? "max" : "min";
      p.scrollHeight <= p.clientHeight || (!v && _ > 0 || !M && _ < 0 ? (h.preventDefault(), xr.flushSync(() => {
        l((k) => k + Math[w](_, y * x));
      })) : /firefox/i.test(_L()) && (p.scrollTop += _));
    }
    const p = (o == null ? void 0 : o.current) || r.floating;
    if (n && p)
      return p.addEventListener("wheel", m), requestAnimationFrame(() => {
        c.current = p.scrollTop, i.current != null && (d.current = {
          ...i.current
        });
      }), () => {
        c.current = null, d.current = null, p.removeEventListener("wheel", m);
      };
  }, [s, n, r.floating, i, o, l]);
  const f = b.useMemo(() => ({
    onKeyDown() {
      u.current = !0;
    },
    onWheel() {
      u.current = !1;
    },
    onPointerMove() {
      u.current = !1;
    },
    onScroll() {
      const m = (o == null ? void 0 : o.current) || r.floating;
      if (!(!i.current || !m || !u.current)) {
        if (c.current !== null) {
          const p = m.scrollTop - c.current;
          (i.current.bottom < -0.5 && p < -1 || i.current.top < -0.5 && p > 1) && xr.flushSync(() => l((h) => h + p));
        }
        requestAnimationFrame(() => {
          c.current = m.scrollTop;
        });
      }
    }
  }), [r.floating, l, i, o]);
  return b.useMemo(() => s ? {
    floating: f
  } : {}, [s, f]);
}
let tr = ge({ styles: void 0, setReference: () => {
}, setFloating: () => {
}, getReferenceProps: () => ({}), getFloatingProps: () => ({}), slot: {} });
tr.displayName = "FloatingContext";
let qc = ge(null);
qc.displayName = "PlacementContext";
function Q_(e) {
  return pe(() => e ? typeof e == "string" ? { to: e } : e : null, [e]);
}
function ev() {
  return re(tr).setReference;
}
function jS() {
  return re(tr).getReferenceProps;
}
function tv() {
  let { getFloatingProps: e, slot: t } = re(tr);
  return X((...n) => Object.assign({}, e(...n), { "data-anchor": t.anchor }), [e, t]);
}
function nv(e = null) {
  e === !1 && (e = null), typeof e == "string" && (e = { to: e });
  let t = re(qc), n = pe(() => e, [JSON.stringify(e, (s, i) => {
    var o;
    return (o = i == null ? void 0 : i.outerHTML) != null ? o : i;
  })]);
  Me(() => {
    t == null || t(n != null ? n : null);
  }, [t, n]);
  let r = re(tr);
  return pe(() => [r.setFloating, e ? r.styles : {}], [r.setFloating, e, r.styles]);
}
let km = 4;
function rv({ children: e, enabled: t = !0 }) {
  let [n, r] = oe(null), [s, i] = oe(0), o = q(null), [a, l] = oe(null);
  PS(a);
  let u = t && n !== null && a !== null, { to: c = "bottom", gap: d = 0, offset: f = 0, padding: m = 0, inner: p } = AS(n, a), [h, _ = "center"] = c.split(" ");
  Me(() => {
    u && i(0);
  }, [u]);
  let { refs: v, floatingStyles: M, context: y } = kS({ open: u, placement: h === "selection" ? _ === "center" ? "bottom" : `bottom-${_}` : _ === "center" ? `${h}` : `${h}-${_}`, strategy: "absolute", transform: !1, middleware: [Jc({ mainAxis: h === "selection" ? 0 : d, crossAxis: f }), G_({ padding: m }), h !== "selection" && J_({ padding: m }), h === "selection" && p ? TS({ ...p, padding: m, overflowRef: o, offset: s, minItemsVisible: km, referenceOverflowThreshold: m, onFallbackChange($) {
    var I, U;
    if (!$) return;
    let H = y.elements.floating;
    if (!H) return;
    let A = parseFloat(getComputedStyle(H).scrollPaddingBottom) || 0, C = Math.min(km, H.childElementCount), O = 0, L = 0;
    for (let j of (U = (I = y.elements.floating) == null ? void 0 : I.childNodes) != null ? U : []) if (Ge(j)) {
      let B = j.offsetTop, E = B + j.clientHeight + A, R = H.scrollTop, z = R + H.clientHeight;
      if (B >= R && E <= z) C--;
      else {
        L = Math.max(0, Math.min(E, z) - Math.max(B, R)), O = j.clientHeight;
        break;
      }
    }
    C >= 1 && i((j) => {
      let B = O * C - L + A;
      return j >= B ? j : B;
    });
  } }) : null, q_({ padding: m, apply({ availableWidth: $, availableHeight: I, elements: U }) {
    Object.assign(U.floating.style, { overflow: "auto", maxWidth: `${$}px`, maxHeight: `min(var(--anchor-max-height, 100vh), ${I}px)` });
  } })].filter(Boolean), whileElementsMounted: W_ }), [x = h, w = _] = y.placement.split("-");
  h === "selection" && (x = "selection");
  let k = pe(() => ({ anchor: [x, w].filter(Boolean).join(" ") }), [x, w]), D = ES(y, { overflowRef: o, onChange: i }), { getReferenceProps: S, getFloatingProps: N } = DS([D]), Y = Z(($) => {
    l($), v.setFloating($);
  });
  return b.createElement(qc.Provider, { value: r }, b.createElement(tr.Provider, { value: { setFloating: Y, setReference: v.setReference, styles: M, getReferenceProps: S, getFloatingProps: N, slot: k } }, e));
}
function PS(e) {
  Me(() => {
    if (!e) return;
    let t = new MutationObserver(() => {
      let n = window.getComputedStyle(e).maxHeight, r = parseFloat(n);
      if (isNaN(r)) return;
      let s = parseInt(n);
      isNaN(s) || r !== s && (e.style.maxHeight = `${Math.ceil(r)}px`);
    });
    return t.observe(e, { attributes: !0, attributeFilter: ["style"] }), () => {
      t.disconnect();
    };
  }, [e]);
}
function AS(e, t) {
  var n, r, s;
  let i = Tl((n = e == null ? void 0 : e.gap) != null ? n : "var(--anchor-gap, 0)", t), o = Tl((r = e == null ? void 0 : e.offset) != null ? r : "var(--anchor-offset, 0)", t), a = Tl((s = e == null ? void 0 : e.padding) != null ? s : "var(--anchor-padding, 0)", t);
  return { ...e, gap: i, offset: o, padding: a };
}
function Tl(e, t, n = void 0) {
  let r = kt(), s = Z((l, u) => {
    if (l == null) return [n, null];
    if (typeof l == "number") return [l, null];
    if (typeof l == "string") {
      if (!u) return [n, null];
      let c = Dm(l, u);
      return [c, (d) => {
        let f = ov(l);
        {
          let m = f.map((p) => window.getComputedStyle(u).getPropertyValue(p));
          r.requestAnimationFrame(function p() {
            r.nextFrame(p);
            let h = !1;
            for (let [v, M] of f.entries()) {
              let y = window.getComputedStyle(u).getPropertyValue(M);
              if (m[v] !== y) {
                m[v] = y, h = !0;
                break;
              }
            }
            if (!h) return;
            let _ = Dm(l, u);
            c !== _ && (d(_), c = _);
          });
        }
        return r.dispose;
      }];
    }
    return [n, null];
  }), i = pe(() => s(e, t)[0], [e, t]), [o = i, a] = oe();
  return Me(() => {
    let [l, u] = s(e, t);
    if (a(l), !!u) return u(a);
  }, [e, t]), o;
}
function ov(e) {
  let t = /var\((.*)\)/.exec(e);
  if (t) {
    let n = t[1].indexOf(",");
    if (n === -1) return [t[1]];
    let r = t[1].slice(0, n).trim(), s = t[1].slice(n + 1).trim();
    return s ? [r, ...ov(s)] : [r];
  }
  return [];
}
function Dm(e, t) {
  let n = document.createElement("div");
  t.appendChild(n), n.style.setProperty("margin-top", "0px", "important"), n.style.setProperty("margin-top", e, "important");
  let r = parseFloat(window.getComputedStyle(n).marginTop) || 0;
  return t.removeChild(n), r;
}
function CS({ children: e, freeze: t }, n) {
  let r = Vo(t, e);
  return ba(r) ? dp(r, { ref: n }) : T.createElement(T.Fragment, null, r);
}
const $S = T.forwardRef(CS);
function Vo(e, t) {
  let [n, r] = oe(t);
  return !e && n !== t && r(t), e ? n : t;
}
let Ia = ge(null);
Ia.displayName = "OpenClosedContext";
var De = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(De || {});
function bn() {
  return re(Ia);
}
function Fa({ value: e, children: t }) {
  return T.createElement(Ia.Provider, { value: e }, t);
}
function sv({ children: e }) {
  return T.createElement(Ia.Provider, { value: null }, e);
}
function HS(e) {
  function t() {
    document.readyState !== "loading" && (e(), document.removeEventListener("DOMContentLoaded", t));
  }
  typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("DOMContentLoaded", t), t());
}
let _t = [];
HS(() => {
  function e(t) {
    if (!ft(t.target) || t.target === document.body || _t[0] === t.target) return;
    let n = t.target;
    n = n.closest(Ro), _t.unshift(n != null ? n : t.target), _t = _t.filter((r) => r != null && r.isConnected), _t.splice(10);
  }
  window.addEventListener("click", e, { capture: !0 }), window.addEventListener("mousedown", e, { capture: !0 }), window.addEventListener("focus", e, { capture: !0 }), document.body.addEventListener("click", e, { capture: !0 }), document.body.addEventListener("mousedown", e, { capture: !0 }), document.body.addEventListener("focus", e, { capture: !0 });
});
function OS(e) {
  throw new Error("Unexpected object: " + e);
}
var me = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(me || {});
function $n(e, t) {
  let n = t.resolveItems();
  if (n.length <= 0) return null;
  let r = t.resolveActiveIndex(), s = r != null ? r : -1;
  switch (e.focus) {
    case 0: {
      for (let i = 0; i < n.length; ++i) if (!t.resolveDisabled(n[i], i, n)) return i;
      return r;
    }
    case 1: {
      s === -1 && (s = n.length);
      for (let i = s - 1; i >= 0; --i) if (!t.resolveDisabled(n[i], i, n)) return i;
      return r;
    }
    case 2: {
      for (let i = s + 1; i < n.length; ++i) if (!t.resolveDisabled(n[i], i, n)) return i;
      return r;
    }
    case 3: {
      for (let i = n.length - 1; i >= 0; --i) if (!t.resolveDisabled(n[i], i, n)) return i;
      return r;
    }
    case 4: {
      for (let i = 0; i < n.length; ++i) if (t.resolveId(n[i], i, n) === e.id) return i;
      return r;
    }
    case 5:
      return null;
    default:
      OS(e);
  }
}
function Va(e) {
  let t = Z(e), n = q(!1);
  ue(() => (n.current = !1, () => {
    n.current = !0, Da(() => {
      n.current && t();
    });
  }), [t]);
}
let iv = ge(!1);
function RS() {
  return re(iv);
}
function Tm(e) {
  return T.createElement(iv.Provider, { value: e.force }, e.children);
}
function NS(e) {
  let t = RS(), n = re(lv), [r, s] = oe(() => {
    var i;
    if (!t && n !== null) return (i = n.current) != null ? i : null;
    if (Mt.isServer) return null;
    let o = e == null ? void 0 : e.getElementById("headlessui-portal-root");
    if (o) return o;
    if (e === null) return null;
    let a = e.createElement("div");
    return a.setAttribute("id", "headlessui-portal-root"), e.body.appendChild(a);
  });
  return ue(() => {
    r !== null && (e != null && e.body.contains(r) || e == null || e.body.appendChild(r));
  }, [r, e]), ue(() => {
    t || n !== null && s(n.current);
  }, [n, s, t]), r;
}
let av = Ae, IS = be(function(e, t) {
  let { ownerDocument: n = null, ...r } = e, s = q(null), i = Le(h_((f) => {
    s.current = f;
  }), t), o = yn(s.current), a = n != null ? n : o, l = NS(a), u = re(Du), c = kt(), d = xe();
  return Va(() => {
    var f;
    l && l.childNodes.length <= 0 && ((f = l.parentElement) == null || f.removeChild(l));
  }), l ? Fu(T.createElement("div", { "data-headlessui-portal": "", ref: (f) => {
    c.dispose(), u && f && c.add(u.register(f));
  } }, d({ ourProps: { ref: i }, theirProps: r, slot: {}, defaultTag: av, name: "Portal" })), l) : null;
});
function FS(e, t) {
  let n = Le(t), { enabled: r = !0, ownerDocument: s, ...i } = e, o = xe();
  return r ? T.createElement(IS, { ...i, ownerDocument: s, ref: n }) : o({ ourProps: { ref: n }, theirProps: i, slot: {}, defaultTag: av, name: "Portal" });
}
let VS = Ae, lv = ge(null);
function zS(e, t) {
  let { target: n, ...r } = e, s = { ref: Le(t) }, i = xe();
  return T.createElement(lv.Provider, { value: n }, i({ ourProps: s, theirProps: r, defaultTag: VS, name: "Popover.Group" }));
}
let Du = ge(null);
function BS() {
  let e = re(Du), t = q([]), n = Z((i) => (t.current.push(i), e && e.register(i), () => r(i))), r = Z((i) => {
    let o = t.current.indexOf(i);
    o !== -1 && t.current.splice(o, 1), e && e.unregister(i);
  }), s = pe(() => ({ register: n, unregister: r, portals: t }), [n, r, t]);
  return [t, pe(() => function({ children: i }) {
    return T.createElement(Du.Provider, { value: s }, i);
  }, [s])];
}
let WS = be(FS), uv = be(zS), za = Object.assign(WS, { Group: uv });
const Pt = { Idle: { kind: "Idle" }, Tracked: (e) => ({ kind: "Tracked", position: e }), Moved: { kind: "Moved" } };
function Xc(e) {
  let t = e.getBoundingClientRect();
  return `${t.x},${t.y}`;
}
function cv(e, t, n) {
  let r = qe();
  if (t.kind === "Tracked") {
    let s = function() {
      i !== Xc(e) && (r.dispose(), n());
    }, { position: i } = t, o = new ResizeObserver(s);
    o.observe(e), r.add(() => o.disconnect()), r.addEventListener(window, "scroll", s, { passive: !0 }), r.addEventListener(window, "resize", s);
  }
  return () => r.dispose();
}
var US = Object.defineProperty, KS = (e, t, n) => t in e ? US(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Em = (e, t, n) => (KS(e, typeof t != "symbol" ? t + "" : t, n), n), _e = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(_e || {}), Ze = ((e) => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))(Ze || {}), xt = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Focus = 1] = "Focus", e[e.Other = 2] = "Other", e))(xt || {}), dv = ((e) => (e[e.OpenCombobox = 0] = "OpenCombobox", e[e.CloseCombobox = 1] = "CloseCombobox", e[e.GoToOption = 2] = "GoToOption", e[e.SetTyping = 3] = "SetTyping", e[e.RegisterOption = 4] = "RegisterOption", e[e.UnregisterOption = 5] = "UnregisterOption", e[e.DefaultToFirstOption = 6] = "DefaultToFirstOption", e[e.SetActivationTrigger = 7] = "SetActivationTrigger", e[e.UpdateVirtualConfiguration = 8] = "UpdateVirtualConfiguration", e[e.SetInputElement = 9] = "SetInputElement", e[e.SetButtonElement = 10] = "SetButtonElement", e[e.SetOptionsElement = 11] = "SetOptionsElement", e[e.MarkInputAsMoved = 12] = "MarkInputAsMoved", e))(dv || {});
function El(e, t = (n) => n) {
  let n = e.activeOptionIndex !== null ? e.options[e.activeOptionIndex] : null, r = t(e.options.slice()), s = r.length > 0 && r[0].dataRef.current.order !== null ? r.sort((o, a) => o.dataRef.current.order - a.dataRef.current.order) : Nc(r, (o) => o.dataRef.current.domRef.current), i = n ? s.indexOf(n) : null;
  return i === -1 && (i = null), { options: s, activeOptionIndex: i };
}
let GS = { 1(e) {
  var t;
  if ((t = e.dataRef.current) != null && t.disabled || e.comboboxState === 1) return e;
  let n = e.inputElement ? Pt.Tracked(Xc(e.inputElement)) : e.inputPositionState;
  return { ...e, activeOptionIndex: null, comboboxState: 1, isTyping: !1, activationTrigger: 2, inputPositionState: n, __demoMode: !1 };
}, 0(e) {
  var t, n;
  if ((t = e.dataRef.current) != null && t.disabled || e.comboboxState === 0) return e;
  if ((n = e.dataRef.current) != null && n.value) {
    let r = e.dataRef.current.calculateIndex(e.dataRef.current.value);
    if (r !== -1) return { ...e, activeOptionIndex: r, comboboxState: 0, __demoMode: !1, inputPositionState: Pt.Idle };
  }
  return { ...e, comboboxState: 0, inputPositionState: Pt.Idle, __demoMode: !1 };
}, 3(e, t) {
  return e.isTyping === t.isTyping ? e : { ...e, isTyping: t.isTyping };
}, 2(e, t) {
  var n, r, s, i;
  if ((n = e.dataRef.current) != null && n.disabled || e.optionsElement && !((r = e.dataRef.current) != null && r.optionsPropsRef.current.static) && e.comboboxState === 1) return e;
  if (e.virtual) {
    let { options: u, disabled: c } = e.virtual, d = t.focus === me.Specific ? t.idx : $n(t, { resolveItems: () => u, resolveActiveIndex: () => {
      var m, p;
      return (p = (m = e.activeOptionIndex) != null ? m : u.findIndex((h) => !c(h))) != null ? p : null;
    }, resolveDisabled: c, resolveId() {
      throw new Error("Function not implemented.");
    } }), f = (s = t.trigger) != null ? s : 2;
    return e.activeOptionIndex === d && e.activationTrigger === f ? e : { ...e, activeOptionIndex: d, activationTrigger: f, isTyping: !1, __demoMode: !1 };
  }
  let o = El(e);
  if (o.activeOptionIndex === null) {
    let u = o.options.findIndex((c) => !c.dataRef.current.disabled);
    u !== -1 && (o.activeOptionIndex = u);
  }
  let a = t.focus === me.Specific ? t.idx : $n(t, { resolveItems: () => o.options, resolveActiveIndex: () => o.activeOptionIndex, resolveId: (u) => u.id, resolveDisabled: (u) => u.dataRef.current.disabled }), l = (i = t.trigger) != null ? i : 2;
  return e.activeOptionIndex === a && e.activationTrigger === l ? e : { ...e, ...o, isTyping: !1, activeOptionIndex: a, activationTrigger: l, __demoMode: !1 };
}, 4: (e, t) => {
  var n, r, s, i;
  if ((n = e.dataRef.current) != null && n.virtual) return { ...e, options: [...e.options, t.payload] };
  let o = t.payload, a = El(e, (u) => (u.push(o), u));
  e.activeOptionIndex === null && (s = (r = e.dataRef.current).isSelected) != null && s.call(r, t.payload.dataRef.current.value) && (a.activeOptionIndex = a.options.indexOf(o));
  let l = { ...e, ...a, activationTrigger: 2 };
  return (i = e.dataRef.current) != null && i.__demoMode && e.dataRef.current.value === void 0 && (l.activeOptionIndex = 0), l;
}, 5: (e, t) => {
  var n;
  if ((n = e.dataRef.current) != null && n.virtual) return { ...e, options: e.options.filter((s) => s.id !== t.id) };
  let r = El(e, (s) => {
    let i = s.findIndex((o) => o.id === t.id);
    return i !== -1 && s.splice(i, 1), s;
  });
  return { ...e, ...r, activationTrigger: 2 };
}, 6: (e, t) => e.defaultToFirstOption === t.value ? e : { ...e, defaultToFirstOption: t.value }, 7: (e, t) => e.activationTrigger === t.trigger ? e : { ...e, activationTrigger: t.trigger }, 8: (e, t) => {
  var n, r;
  if (e.virtual === null) return { ...e, virtual: { options: t.options, disabled: (n = t.disabled) != null ? n : () => !1 } };
  if (e.virtual.options === t.options && e.virtual.disabled === t.disabled) return e;
  let s = e.activeOptionIndex;
  if (e.activeOptionIndex !== null) {
    let i = t.options.indexOf(e.virtual.options[e.activeOptionIndex]);
    i !== -1 ? s = i : s = null;
  }
  return { ...e, activeOptionIndex: s, virtual: { options: t.options, disabled: (r = t.disabled) != null ? r : () => !1 } };
}, 9: (e, t) => e.inputElement === t.element ? e : { ...e, inputElement: t.element }, 10: (e, t) => e.buttonElement === t.element ? e : { ...e, buttonElement: t.element }, 11: (e, t) => e.optionsElement === t.element ? e : { ...e, optionsElement: t.element }, 12(e) {
  return e.inputPositionState.kind !== "Tracked" ? e : { ...e, inputPositionState: Pt.Moved };
} }, JS = class fv extends Cc {
  constructor(t) {
    super(t), Em(this, "actions", { onChange: (n) => {
      let { onChange: r, compare: s, mode: i, value: o } = this.state.dataRef.current;
      return Ye(i, { 0: () => r == null ? void 0 : r(n), 1: () => {
        let a = o.slice(), l = a.findIndex((u) => s(u, n));
        return l === -1 ? a.push(n) : a.splice(l, 1), r == null ? void 0 : r(a);
      } });
    }, registerOption: (n, r) => (this.send({ type: 4, payload: { id: n, dataRef: r } }), () => {
      this.state.activeOptionIndex === this.state.dataRef.current.calculateIndex(r.current.value) && this.send({ type: 6, value: !0 }), this.send({ type: 5, id: n });
    }), goToOption: (n, r) => (this.send({ type: 6, value: !1 }), this.send({ type: 2, ...n, trigger: r })), setIsTyping: (n) => {
      this.send({ type: 3, isTyping: n });
    }, closeCombobox: () => {
      var n, r;
      this.send({ type: 1 }), this.send({ type: 6, value: !1 }), (r = (n = this.state.dataRef.current).onClose) == null || r.call(n);
    }, openCombobox: () => {
      this.send({ type: 0 }), this.send({ type: 6, value: !0 });
    }, setActivationTrigger: (n) => {
      this.send({ type: 7, trigger: n });
    }, selectActiveOption: () => {
      let n = this.selectors.activeOptionIndex(this.state);
      if (n !== null) {
        if (this.actions.setIsTyping(!1), this.state.virtual) this.actions.onChange(this.state.virtual.options[n]);
        else {
          let { dataRef: r } = this.state.options[n];
          this.actions.onChange(r.current.value);
        }
        this.actions.goToOption({ focus: me.Specific, idx: n });
      }
    }, setInputElement: (n) => {
      this.send({ type: 9, element: n });
    }, setButtonElement: (n) => {
      this.send({ type: 10, element: n });
    }, setOptionsElement: (n) => {
      this.send({ type: 11, element: n });
    } }), Em(this, "selectors", { activeDescendantId: (n) => {
      var r, s;
      let i = this.selectors.activeOptionIndex(n);
      if (i !== null) return n.virtual ? (s = n.options.find((o) => !o.dataRef.current.disabled && n.dataRef.current.compare(o.dataRef.current.value, n.virtual.options[i]))) == null ? void 0 : s.id : (r = n.options[i]) == null ? void 0 : r.id;
    }, activeOptionIndex: (n) => {
      if (n.defaultToFirstOption && n.activeOptionIndex === null && (n.virtual ? n.virtual.options.length > 0 : n.options.length > 0)) {
        if (n.virtual) {
          let { options: s, disabled: i } = n.virtual, o = s.findIndex((a) => {
            var l;
            return !((l = i == null ? void 0 : i(a)) != null && l);
          });
          if (o !== -1) return o;
        }
        let r = n.options.findIndex((s) => !s.dataRef.current.disabled);
        if (r !== -1) return r;
      }
      return n.activeOptionIndex;
    }, activeOption: (n) => {
      var r, s;
      let i = this.selectors.activeOptionIndex(n);
      return i === null ? null : n.virtual ? n.virtual.options[i != null ? i : 0] : (s = (r = n.options[i]) == null ? void 0 : r.dataRef.current.value) != null ? s : null;
    }, isActive: (n, r, s) => {
      var i;
      let o = this.selectors.activeOptionIndex(n);
      return o === null ? !1 : n.virtual ? o === n.dataRef.current.calculateIndex(r) : ((i = n.options[o]) == null ? void 0 : i.id) === s;
    }, shouldScrollIntoView: (n, r, s) => !(n.virtual || n.__demoMode || n.comboboxState !== 0 || n.activationTrigger === 0 || !this.selectors.isActive(n, r, s)), didInputMove(n) {
      return n.inputPositionState.kind === "Moved";
    } });
    {
      let n = this.state.id, r = Zn.get(null);
      this.disposables.add(r.on($c.Push, (s) => {
        !r.selectors.isTop(s, n) && this.state.comboboxState === 0 && this.actions.closeCombobox();
      })), this.on(0, () => r.actions.push(n)), this.on(1, () => r.actions.pop(n));
    }
    this.disposables.group((n) => {
      this.on(1, (r) => {
        r.inputElement && (n.dispose(), n.add(cv(r.inputElement, r.inputPositionState, () => {
          this.send({ type: 12 });
        })));
      });
    });
  }
  static new({ id: t, virtual: n = null, __demoMode: r = !1 }) {
    var s;
    return new fv({ id: t, dataRef: { current: {} }, comboboxState: r ? 0 : 1, isTyping: !1, options: [], virtual: n ? { options: n.options, disabled: (s = n.disabled) != null ? s : () => !1 } : null, activeOptionIndex: null, activationTrigger: 2, inputElement: null, buttonElement: null, optionsElement: null, __demoMode: r, inputPositionState: Pt.Idle });
  }
  reduce(t, n) {
    return Ye(n.type, GS, t, n);
  }
};
const mv = ge(null);
function qr(e) {
  let t = re(mv);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, pv), n;
  }
  return t;
}
function pv({ id: e, virtual: t = null, __demoMode: n = !1 }) {
  let r = pe(() => JS.new({ id: e, virtual: t, __demoMode: n }), []);
  return Va(() => r.dispose()), r;
}
let Cr = ge(null);
Cr.displayName = "ComboboxDataContext";
function nr(e) {
  let t = re(Cr);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, nr), n;
  }
  return t;
}
let hv = ge(null);
function qS(e) {
  let t = qr("VirtualProvider"), n = nr("VirtualProvider"), { options: r } = n.virtual, s = ye(t, (m) => m.optionsElement), [i, o] = pe(() => {
    let m = s;
    if (!m) return [0, 0];
    let p = window.getComputedStyle(m);
    return [parseFloat(p.paddingBlockStart || p.paddingTop), parseFloat(p.paddingBlockEnd || p.paddingBottom)];
  }, [s]), a = LY({ enabled: r.length !== 0, scrollPaddingStart: i, scrollPaddingEnd: o, count: r.length, estimateSize() {
    return 40;
  }, getScrollElement() {
    return t.state.optionsElement;
  }, overscan: 12 }), [l, u] = oe(0);
  Me(() => {
    u((m) => m + 1);
  }, [r]);
  let c = a.getVirtualItems(), d = ye(t, (m) => m.activationTrigger === xt.Pointer), f = ye(t, t.selectors.activeOptionIndex);
  return c.length === 0 ? null : T.createElement(hv.Provider, { value: a }, T.createElement("div", { style: { position: "relative", width: "100%", height: `${a.getTotalSize()}px` }, ref: (m) => {
    m && (d || f !== null && r.length > f && a.scrollToIndex(f));
  } }, c.map((m) => {
    var p;
    return T.createElement(Ae, { key: m.key }, T.cloneElement((p = e.children) == null ? void 0 : p.call(e, { ...e.slot, option: r[m.index] }), { key: `${l}-${m.key}`, "data-index": m.index, "aria-setsize": r.length, "aria-posinset": m.index + 1, style: { position: "absolute", top: 0, left: 0, transform: `translateY(${m.start}px)`, overflowAnchor: "none" } }));
  })));
}
let XS = Ae;
function ZS(e, t) {
  let n = je(), r = Kr(), { value: s, defaultValue: i, onChange: o, form: a, name: l, by: u, invalid: c = !1, disabled: d = r || !1, onClose: f, __demoMode: m = !1, multiple: p = !1, immediate: h = !1, virtual: _ = null, nullable: v, ...M } = e, y = Dc(i), [x = p ? [] : void 0, w] = kc(s, o, y), k = pv({ id: n, virtual: _, __demoMode: m }), D = q({ static: !1, hold: !1 }), S = x_(u), N = Z((Q) => _ ? u === null ? _.options.indexOf(Q) : _.options.findIndex((se) => S(se, Q)) : k.state.options.findIndex((se) => S(se.dataRef.current.value, Q))), Y = X((Q) => Ye(U.mode, { [Ze.Multi]: () => x.some((se) => S(se, Q)), [Ze.Single]: () => S(x, Q) }), [x]), $ = ye(k, (Q) => Q.virtual), I = Z(() => f == null ? void 0 : f()), U = pe(() => ({ __demoMode: m, immediate: h, optionsPropsRef: D, value: x, defaultValue: y, disabled: d, invalid: c, mode: p ? Ze.Multi : Ze.Single, virtual: _ ? $ : null, onChange: w, isSelected: Y, calculateIndex: N, compare: S, onClose: I }), [m, h, D, x, y, d, c, p, _, $, w, Y, N, S, I]);
  Me(() => {
    var Q;
    _ && k.send({ type: dv.UpdateVirtualConfiguration, options: _.options, disabled: (Q = _.disabled) != null ? Q : null });
  }, [_, _ == null ? void 0 : _.options, _ == null ? void 0 : _.disabled]), Me(() => {
    k.state.dataRef.current = U;
  }, [U]);
  let [H, A, C, O] = ye(k, (Q) => [Q.comboboxState, Q.buttonElement, Q.inputElement, Q.optionsElement]), L = Zn.get(null), j = ye(L, X((Q) => L.selectors.isTop(Q, n), [L, n]));
  Ic(j, [A, C, O], () => k.actions.closeCombobox());
  let B = ye(k, k.selectors.activeOptionIndex), E = ye(k, k.selectors.activeOption), R = Ee({ open: H === _e.Open, disabled: d, invalid: c, activeIndex: B, activeOption: E, value: x }), [z, K] = jc(), ne = t === null ? {} : { ref: t }, G = X(() => {
    if (y !== void 0) return w == null ? void 0 : w(y);
  }, [w, y]), W = xe();
  return T.createElement(K, { value: z, props: { htmlFor: C == null ? void 0 : C.id }, slot: { open: H === _e.Open, disabled: d } }, T.createElement(rv, null, T.createElement(Cr.Provider, { value: U }, T.createElement(mv.Provider, { value: k }, T.createElement(Fa, { value: Ye(H, { [_e.Open]: De.Open, [_e.Closed]: De.Closed }) }, l != null && T.createElement(Tc, { disabled: d, data: x != null ? { [l]: x } : {}, form: a, onReset: G }), W({ ourProps: ne, theirProps: M, slot: R, defaultTag: XS, name: "Combobox" }))))));
}
let QS = "input";
function ek(e, t) {
  var n, r;
  let s = qr("Combobox.Input"), i = nr("Combobox.Input"), o = je(), a = Ea(), { id: l = a || `headlessui-combobox-input-${o}`, onChange: u, displayValue: c, disabled: d = i.disabled || !1, autoFocus: f = !1, type: m = "text", ...p } = e, h = q(null), _ = Le(h, t, ev(), s.actions.setInputElement), [v, M] = ye(s, (R) => [R.comboboxState, R.isTyping]), y = kt(), x = Z(() => {
    s.actions.onChange(null), s.state.optionsElement && (s.state.optionsElement.scrollTop = 0), s.actions.goToOption({ focus: me.Nothing });
  }), w = pe(() => {
    var R;
    return typeof c == "function" && i.value !== void 0 ? (R = c(i.value)) != null ? R : "" : typeof i.value == "string" ? i.value : "";
  }, [i.value, c]);
  Er(([R, z], [K, ne]) => {
    if (s.state.isTyping) return;
    let G = h.current;
    G && ((ne === _e.Open && z === _e.Closed || R !== K) && (G.value = R), requestAnimationFrame(() => {
      if (s.state.isTyping || !G || ka(G)) return;
      let { selectionStart: W, selectionEnd: Q } = G;
      Math.abs((Q != null ? Q : 0) - (W != null ? W : 0)) === 0 && W === 0 && G.setSelectionRange(G.value.length, G.value.length);
    }));
  }, [w, v, M]), Er(([R], [z]) => {
    if (R === _e.Open && z === _e.Closed) {
      if (s.state.isTyping) return;
      let K = h.current;
      if (!K) return;
      let ne = K.value, { selectionStart: G, selectionEnd: W, selectionDirection: Q } = K;
      K.value = "", K.value = ne, Q !== null ? K.setSelectionRange(G, W, Q) : K.setSelectionRange(G, W);
    }
  }, [v]);
  let k = q(!1), D = Z(() => {
    k.current = !0;
  }), S = Z(() => {
    y.nextFrame(() => {
      k.current = !1;
    });
  }), N = Z((R) => {
    switch (s.actions.setIsTyping(!0), R.key) {
      case de.Enter:
        if (s.state.comboboxState !== _e.Open || k.current) return;
        if (R.preventDefault(), R.stopPropagation(), s.selectors.activeOptionIndex(s.state) === null) {
          s.actions.closeCombobox();
          return;
        }
        s.actions.selectActiveOption(), i.mode === Ze.Single && s.actions.closeCombobox();
        break;
      case de.ArrowDown:
        return R.preventDefault(), R.stopPropagation(), Ye(s.state.comboboxState, { [_e.Open]: () => s.actions.goToOption({ focus: me.Next }), [_e.Closed]: () => s.actions.openCombobox() });
      case de.ArrowUp:
        return R.preventDefault(), R.stopPropagation(), Ye(s.state.comboboxState, { [_e.Open]: () => s.actions.goToOption({ focus: me.Previous }), [_e.Closed]: () => {
          dt(() => s.actions.openCombobox()), i.value || s.actions.goToOption({ focus: me.Last });
        } });
      case de.Home:
        if (s.state.comboboxState === _e.Closed || R.shiftKey) break;
        return R.preventDefault(), R.stopPropagation(), s.actions.goToOption({ focus: me.First });
      case de.PageUp:
        return R.preventDefault(), R.stopPropagation(), s.actions.goToOption({ focus: me.First });
      case de.End:
        if (s.state.comboboxState === _e.Closed || R.shiftKey) break;
        return R.preventDefault(), R.stopPropagation(), s.actions.goToOption({ focus: me.Last });
      case de.PageDown:
        return R.preventDefault(), R.stopPropagation(), s.actions.goToOption({ focus: me.Last });
      case de.Escape:
        return s.state.comboboxState !== _e.Open ? void 0 : (R.preventDefault(), s.state.optionsElement && !i.optionsPropsRef.current.static && R.stopPropagation(), i.mode === Ze.Single && i.value === null && x(), s.actions.closeCombobox());
      case de.Tab:
        if (s.actions.setIsTyping(!1), s.state.comboboxState !== _e.Open) return;
        i.mode === Ze.Single && s.state.activationTrigger !== xt.Focus && s.actions.selectActiveOption(), s.actions.closeCombobox();
        break;
    }
  }), Y = Z((R) => {
    u == null || u(R), i.mode === Ze.Single && R.target.value === "" && x(), s.actions.openCombobox();
  }), $ = Z((R) => {
    var z, K, ne;
    let G = (z = R.relatedTarget) != null ? z : _t.find((W) => W !== R.currentTarget);
    if (!((K = s.state.optionsElement) != null && K.contains(G)) && !((ne = s.state.buttonElement) != null && ne.contains(G)) && s.state.comboboxState === _e.Open) return R.preventDefault(), i.mode === Ze.Single && i.value === null && x(), s.actions.closeCombobox();
  }), I = Z((R) => {
    var z, K, ne;
    let G = (z = R.relatedTarget) != null ? z : _t.find((W) => W !== R.currentTarget);
    (K = s.state.buttonElement) != null && K.contains(G) || (ne = s.state.optionsElement) != null && ne.contains(G) || i.disabled || i.immediate && s.state.comboboxState !== _e.Open && y.microTask(() => {
      dt(() => s.actions.openCombobox()), s.actions.setActivationTrigger(xt.Focus);
    });
  }), U = Xn(), H = Ec(), { isFocused: A, focusProps: C } = Ur({ autoFocus: f }), { isHovered: O, hoverProps: L } = Wr({ isDisabled: d }), j = ye(s, (R) => R.optionsElement), B = Ee({ open: v === _e.Open, disabled: d, invalid: i.invalid, hover: O, focus: A, autofocus: f }), E = Zt({ ref: _, id: l, role: "combobox", type: m, "aria-controls": j == null ? void 0 : j.id, "aria-expanded": v === _e.Open, "aria-activedescendant": ye(s, s.selectors.activeDescendantId), "aria-labelledby": U, "aria-describedby": H, "aria-autocomplete": "list", defaultValue: (r = (n = e.defaultValue) != null ? n : i.defaultValue !== void 0 ? c == null ? void 0 : c(i.defaultValue) : null) != null ? r : i.defaultValue, disabled: d || void 0, autoFocus: f, onCompositionStart: D, onCompositionEnd: S, onKeyDown: N, onChange: Y, onFocus: I, onBlur: $ }, C, L);
  return xe()({ ourProps: E, theirProps: p, slot: B, defaultTag: QS, name: "Combobox.Input" });
}
let tk = "button";
function nk(e, t) {
  let n = qr("Combobox.Button"), r = nr("Combobox.Button"), [s, i] = oe(null), o = Le(t, i, n.actions.setButtonElement), a = je(), { id: l = `headlessui-combobox-button-${a}`, disabled: u = r.disabled || !1, autoFocus: c = !1, ...d } = e, [f, m, p] = ye(n, (I) => [I.comboboxState, I.inputElement, I.optionsElement]), h = A_(m), _ = f === _e.Open;
  P_(_, { trigger: s, action: X((I) => {
    if (s != null && s.contains(I.target) || m != null && m.contains(I.target)) return Et.Ignore;
    let U = I.target.closest('[role="option"]:not([data-disabled])');
    return Ge(U) ? Et.Select(U) : p != null && p.contains(I.target) ? Et.Ignore : Et.Close;
  }, [s, m, p]), close: n.actions.closeCombobox, select: n.actions.selectActiveOption });
  let v = Z((I) => {
    switch (I.key) {
      case de.Space:
      case de.Enter:
        I.preventDefault(), I.stopPropagation(), n.state.comboboxState === _e.Closed && dt(() => n.actions.openCombobox()), h();
        return;
      case de.ArrowDown:
        I.preventDefault(), I.stopPropagation(), n.state.comboboxState === _e.Closed && (dt(() => n.actions.openCombobox()), n.state.dataRef.current.value || n.actions.goToOption({ focus: me.First })), h();
        return;
      case de.ArrowUp:
        I.preventDefault(), I.stopPropagation(), n.state.comboboxState === _e.Closed && (dt(() => n.actions.openCombobox()), n.state.dataRef.current.value || n.actions.goToOption({ focus: me.Last })), h();
        return;
      case de.Escape:
        if (n.state.comboboxState !== _e.Open) return;
        I.preventDefault(), n.state.optionsElement && !r.optionsPropsRef.current.static && I.stopPropagation(), dt(() => n.actions.closeCombobox()), h();
        return;
      default:
        return;
    }
  }), M = w_(() => {
    n.state.comboboxState === _e.Open ? n.actions.closeCombobox() : n.actions.openCombobox(), h();
  }), y = Xn([l]), { isFocusVisible: x, focusProps: w } = Ur({ autoFocus: c }), { isHovered: k, hoverProps: D } = Wr({ isDisabled: u }), { pressed: S, pressProps: N } = Ta({ disabled: u }), Y = Ee({ open: f === _e.Open, active: S || f === _e.Open, disabled: u, invalid: r.invalid, value: r.value, hover: k, focus: x }), $ = Zt({ ref: o, id: l, type: Aa(e, s), tabIndex: -1, "aria-haspopup": "listbox", "aria-controls": p == null ? void 0 : p.id, "aria-expanded": f === _e.Open, "aria-labelledby": y, disabled: u || void 0, autoFocus: c, onKeyDown: v }, M, w, D, N);
  return xe()({ ourProps: $, theirProps: d, slot: Y, defaultTag: tk, name: "Combobox.Button" });
}
let rk = "div", ok = wt.RenderStrategy | wt.Static;
function sk(e, t) {
  var n, r, s;
  let i = je(), { id: o = `headlessui-combobox-options-${i}`, hold: a = !1, anchor: l, portal: u = !1, modal: c = !0, transition: d = !1, ...f } = e, m = qr("Combobox.Options"), p = nr("Combobox.Options"), h = Q_(l);
  h && (u = !0);
  let [_, v] = nv(h), [M, y] = oe(null), x = tv(), w = Le(t, h ? _ : null, m.actions.setOptionsElement, y), [k, D, S, N, Y] = ye(m, (le) => [le.comboboxState, le.inputElement, le.buttonElement, le.optionsElement, le.activationTrigger]), $ = yn(D || S), I = yn(N), U = bn(), [H, A] = $a(d, M, U !== null ? (U & De.Open) === De.Open : k === _e.Open);
  Oc(H, D, m.actions.closeCombobox);
  let C = p.__demoMode ? !1 : c && k === _e.Open;
  Vc(C, I);
  let O = p.__demoMode ? !1 : c && k === _e.Open;
  Hc(O, { allowed: X(() => [D, S, N], [D, S, N]) });
  let L = ye(m, m.selectors.didInputMove) ? !1 : H;
  Me(() => {
    var le;
    p.optionsPropsRef.current.static = (le = e.static) != null ? le : !1;
  }, [p.optionsPropsRef, e.static]), Me(() => {
    p.optionsPropsRef.current.hold = a;
  }, [p.optionsPropsRef, a]), iL(k === _e.Open, { container: N, accept(le) {
    return le.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : le.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(le) {
    le.setAttribute("role", "none");
  } });
  let j = Xn([S == null ? void 0 : S.id]), B = Ee({ open: k === _e.Open, option: void 0 }), E = Z(() => {
    m.actions.setActivationTrigger(xt.Pointer);
  }), R = Z((le) => {
    le.preventDefault(), m.actions.setActivationTrigger(xt.Pointer);
  }), z = Zt(h ? x() : {}, { "aria-labelledby": j, role: "listbox", "aria-multiselectable": p.mode === Ze.Multi ? !0 : void 0, id: o, ref: w, style: { ...f.style, ...v, "--input-width": yu(H, D, !0).width, "--button-width": yu(H, S, !0).width }, onWheel: Y === xt.Pointer ? void 0 : E, onMouseDown: R, ...Ca(A) }), K = H && k === _e.Closed && !e.static, ne = Vo(K, (n = p.virtual) == null ? void 0 : n.options), G = Vo(K, p.value), W = X((le) => p.compare(G, le), [p.compare, G]), Q = pe(() => {
    if (!p.virtual) return p;
    if (ne === void 0) throw new Error("Missing `options` in virtual mode");
    return ne !== p.virtual.options ? { ...p, virtual: { ...p.virtual, options: ne } } : p;
  }, [p, ne, (r = p.virtual) == null ? void 0 : r.options]);
  p.virtual && Object.assign(f, { children: T.createElement(Cr.Provider, { value: Q }, T.createElement(qS, { slot: B }, f.children)) });
  let se = xe(), he = pe(() => p.mode === Ze.Multi ? p : { ...p, isSelected: W }, [p, W]);
  return T.createElement(za, { enabled: u ? e.static || H : !1, ownerDocument: $ }, T.createElement(Cr.Provider, { value: he }, se({ ourProps: z, theirProps: { ...f, children: T.createElement($S, { freeze: K }, typeof f.children == "function" ? (s = f.children) == null ? void 0 : s.call(f, B) : f.children) }, slot: B, defaultTag: rk, features: ok, visible: L, name: "Combobox.Options" })));
}
let ik = "div";
function ak(e, t) {
  var n, r, s;
  let i = nr("Combobox.Option"), o = qr("Combobox.Option"), a = je(), { id: l = `headlessui-combobox-option-${a}`, value: u, disabled: c = (s = (r = (n = i.virtual) == null ? void 0 : n.disabled) == null ? void 0 : r.call(n, u)) != null ? s : !1, order: d = null, ...f } = e, [m] = ye(o, (A) => [A.inputElement]), p = A_(m), h = ye(o, X((A) => o.selectors.isActive(A, u, l), [u, l])), _ = i.isSelected(u), v = q(null), M = Ft({ disabled: c, value: u, domRef: v, order: d }), y = re(hv), x = Le(t, v, y ? y.measureElement : null), w = Z(() => {
    o.actions.setIsTyping(!1), o.actions.onChange(u);
  });
  Me(() => o.actions.registerOption(l, M), [M, l]);
  let k = ye(o, X((A) => o.selectors.shouldScrollIntoView(A, u, l), [u, l]));
  Me(() => {
    if (k) return qe().requestAnimationFrame(() => {
      var A, C;
      (C = (A = v.current) == null ? void 0 : A.scrollIntoView) == null || C.call(A, { block: "nearest" });
    });
  }, [k, v]);
  let D = Z((A) => {
    A.preventDefault(), A.button === Ac.Left && (c || (w(), wu() || requestAnimationFrame(() => p()), i.mode === Ze.Single && o.actions.closeCombobox()));
  }), S = Z(() => {
    if (c) return o.actions.goToOption({ focus: me.Nothing });
    let A = i.calculateIndex(u);
    o.actions.goToOption({ focus: me.Specific, idx: A });
  }), N = C_(), Y = Z((A) => N.update(A)), $ = Z((A) => {
    if (!N.wasMoved(A) || c || h && o.state.activationTrigger === xt.Pointer) return;
    let C = i.calculateIndex(u);
    o.actions.goToOption({ focus: me.Specific, idx: C }, xt.Pointer);
  }), I = Z((A) => {
    N.wasMoved(A) && (c || h && (i.optionsPropsRef.current.hold || o.state.activationTrigger === xt.Pointer && o.actions.goToOption({ focus: me.Nothing })));
  }), U = Ee({ active: h, focus: h, selected: _, disabled: c }), H = { id: l, ref: x, role: "option", tabIndex: c === !0 ? void 0 : -1, "aria-disabled": c === !0 ? !0 : void 0, "aria-selected": _, disabled: void 0, onMouseDown: D, onFocus: S, onPointerEnter: Y, onMouseEnter: Y, onPointerMove: $, onMouseMove: $, onPointerLeave: I, onMouseLeave: I };
  return xe()({ ourProps: H, theirProps: f, slot: U, defaultTag: ik, name: "Combobox.Option" });
}
let lk = be(ZS), Tu = be(nk), uk = be(ek), ck = Pc, _v = be(sk), vv = be(ak), jm = Object.assign(lk, { Input: uk, Button: Tu, Label: ck, Options: _v, Option: vv });
function dk(e, t = typeof document != "undefined" ? document.defaultView : null, n) {
  let r = Gr(e, "escape");
  Fc(t, "keydown", (s) => {
    r && (s.defaultPrevented || s.key === de.Escape && n(s));
  });
}
function fk() {
  var e;
  let [t] = oe(() => typeof window != "undefined" && typeof window.matchMedia == "function" ? window.matchMedia("(pointer: coarse)") : null), [n, r] = oe((e = t == null ? void 0 : t.matches) != null ? e : !1);
  return Me(() => {
    if (!t) return;
    function s(i) {
      r(i.matches);
    }
    return t.addEventListener("change", s), () => t.removeEventListener("change", s);
  }, [t]), n;
}
function mk({ defaultContainers: e = [], portals: t, mainTreeNode: n } = {}) {
  let r = Z(() => {
    var s, i;
    let o = rn(n), a = [];
    for (let l of e) l !== null && (At(l) ? a.push(l) : "current" in l && At(l.current) && a.push(l.current));
    if (t != null && t.current) for (let l of t.current) a.push(l);
    for (let l of (s = o == null ? void 0 : o.querySelectorAll("html > *, body > *")) != null ? s : []) l !== document.body && l !== document.head && At(l) && l.id !== "headlessui-portal-root" && (n && (l.contains(n) || l.contains((i = n == null ? void 0 : n.getRootNode()) == null ? void 0 : i.host)) || a.some((u) => l.contains(u)) || a.push(l));
    return a;
  });
  return { resolveContainers: r, contains: Z((s) => r().some((i) => i.contains(s))) };
}
let gv = ge(null);
function Pm({ children: e, node: t }) {
  let [n, r] = oe(null), s = yv(t != null ? t : n);
  return T.createElement(gv.Provider, { value: s }, e, s === null && T.createElement(Tr, { features: Bn.Hidden, ref: (i) => {
    var o, a;
    if (i) {
      for (let l of (a = (o = rn(i)) == null ? void 0 : o.querySelectorAll("html > *, body > *")) != null ? a : []) if (l !== document.body && l !== document.head && At(l) && l != null && l.contains(i)) {
        r(l);
        break;
      }
    }
  } }));
}
function yv(e = null) {
  var t;
  return (t = re(gv)) != null ? t : e;
}
function pk() {
  let e = typeof document == "undefined";
  return "useSyncExternalStore" in b ? ((t) => t.useSyncExternalStore)(b)(() => () => {
  }, () => !1, () => !e) : !1;
}
function Ba() {
  let e = pk(), [t, n] = b.useState(Mt.isHandoffComplete);
  return t && Mt.isHandoffComplete === !1 && n(!1), b.useEffect(() => {
    t !== !0 && n(!0);
  }, [t]), b.useEffect(() => Mt.handoff(), []), e ? !1 : t;
}
function Zc() {
  let e = q(!1);
  return Me(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}
var mr = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(mr || {});
function hk() {
  let e = q(0);
  return j_(!0, "keydown", (t) => {
    t.key === "Tab" && (e.current = t.shiftKey ? 1 : 0);
  }, !0), e;
}
function Mv(e) {
  if (!e) return /* @__PURE__ */ new Set();
  if (typeof e == "function") return new Set(e());
  let t = /* @__PURE__ */ new Set();
  for (let n of e.current) At(n.current) && t.add(n.current);
  return t;
}
let _k = "div";
var un = ((e) => (e[e.None = 0] = "None", e[e.InitialFocus = 1] = "InitialFocus", e[e.TabLock = 2] = "TabLock", e[e.FocusLock = 4] = "FocusLock", e[e.RestoreFocus = 8] = "RestoreFocus", e[e.AutoFocus = 16] = "AutoFocus", e))(un || {});
function vk(e, t) {
  let n = q(null), r = Le(n, t), { initialFocus: s, initialFocusFallback: i, containers: o, features: a = 15, ...l } = e;
  Ba() || (a = 0);
  let u = yn(n.current);
  bk(a, { ownerDocument: u });
  let c = xk(a, { ownerDocument: u, container: n, initialFocus: s, initialFocusFallback: i });
  wk(a, { ownerDocument: u, container: n, containers: o, previousActiveElement: c });
  let d = hk(), f = Z((M) => {
    if (!Ge(n.current)) return;
    let y = n.current;
    ((x) => x())(() => {
      Ye(d.current, { [mr.Forwards]: () => {
        Rn(y, ct.First, { skipElements: [M.relatedTarget, i] });
      }, [mr.Backwards]: () => {
        Rn(y, ct.Last, { skipElements: [M.relatedTarget, i] });
      } });
    });
  }), m = Gr(!!(a & 2), "focus-trap#tab-lock"), p = kt(), h = q(!1), _ = { ref: r, onKeyDown(M) {
    M.key == "Tab" && (h.current = !0, p.requestAnimationFrame(() => {
      h.current = !1;
    }));
  }, onBlur(M) {
    if (!(a & 4)) return;
    let y = Mv(o);
    Ge(n.current) && y.add(n.current);
    let x = M.relatedTarget;
    ft(x) && x.dataset.headlessuiFocusGuard !== "true" && (bv(y, x) || (h.current ? Rn(n.current, Ye(d.current, { [mr.Forwards]: () => ct.Next, [mr.Backwards]: () => ct.Previous }) | ct.WrapAround, { relativeTo: M.target }) : ft(M.target) && Ct(M.target)));
  } }, v = xe();
  return T.createElement(T.Fragment, null, m && T.createElement(Tr, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: f, features: Bn.Focusable }), v({ ourProps: _, theirProps: l, defaultTag: _k, name: "FocusTrap" }), m && T.createElement(Tr, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: f, features: Bn.Focusable }));
}
let gk = be(vk), yk = Object.assign(gk, { features: un });
function Mk(e = !0) {
  let t = q(_t.slice());
  return Er(([n], [r]) => {
    r === !0 && n === !1 && Da(() => {
      t.current.splice(0);
    }), r === !1 && n === !0 && (t.current = _t.slice());
  }, [e, _t, t]), Z(() => {
    var n;
    return (n = t.current.find((r) => r != null && r.isConnected)) != null ? n : null;
  });
}
function bk(e, { ownerDocument: t }) {
  let n = !!(e & 8), r = Mk(n);
  Er(() => {
    n || ka(t == null ? void 0 : t.body) && Ct(r());
  }, [n]), Va(() => {
    n && Ct(r());
  });
}
function xk(e, { ownerDocument: t, container: n, initialFocus: r, initialFocusFallback: s }) {
  let i = q(null), o = Gr(!!(e & 1), "focus-trap#initial-focus"), a = Zc();
  return Er(() => {
    if (e === 0) return;
    if (!o) {
      s != null && s.current && Ct(s.current);
      return;
    }
    let l = n.current;
    l && Da(() => {
      if (!a.current) return;
      let u = t == null ? void 0 : t.activeElement;
      if (r != null && r.current) {
        if ((r == null ? void 0 : r.current) === u) {
          i.current = u;
          return;
        }
      } else if (l.contains(u)) {
        i.current = u;
        return;
      }
      if (r != null && r.current) Ct(r.current);
      else {
        if (e & 16) {
          if (Rn(l, ct.First | ct.AutoFocus) !== xu.Error) return;
        } else if (Rn(l, ct.First) !== xu.Error) return;
        if (s != null && s.current && (Ct(s.current), (t == null ? void 0 : t.activeElement) === s.current)) return;
        console.warn("There are no focusable elements inside the <FocusTrap />");
      }
      i.current = t == null ? void 0 : t.activeElement;
    });
  }, [s, o, e]), i;
}
function wk(e, { ownerDocument: t, container: n, containers: r, previousActiveElement: s }) {
  let i = Zc(), o = !!(e & 4);
  Fc(t == null ? void 0 : t.defaultView, "focus", (a) => {
    if (!o || !i.current) return;
    let l = Mv(r);
    Ge(n.current) && l.add(n.current);
    let u = s.current;
    if (!u) return;
    let c = a.target;
    Ge(c) ? bv(l, c) ? (s.current = c, Ct(c)) : (a.preventDefault(), a.stopPropagation(), Ct(u)) : Ct(s.current);
  }, !0);
}
function bv(e, t) {
  for (let n of e) if (n.contains(t)) return !0;
  return !1;
}
function xv(e) {
  var t;
  return !!(e.enter || e.enterFrom || e.enterTo || e.leave || e.leaveFrom || e.leaveTo) || !On((t = e.as) != null ? t : Yv) || T.Children.count(e.children) === 1;
}
let Wa = ge(null);
Wa.displayName = "TransitionContext";
var Yk = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(Yk || {});
function Lk() {
  let e = re(Wa);
  if (e === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e;
}
function Sk() {
  let e = re(Ua);
  if (e === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e;
}
let Ua = ge(null);
Ua.displayName = "NestingContext";
function Ka(e) {
  return "children" in e ? Ka(e.children) : e.current.filter(({ el: t }) => t.current !== null).filter(({ state: t }) => t === "visible").length > 0;
}
function wv(e, t) {
  let n = Ft(e), r = q([]), s = Zc(), i = kt(), o = Z((m, p = Gt.Hidden) => {
    let h = r.current.findIndex(({ el: _ }) => _ === m);
    h !== -1 && (Ye(p, { [Gt.Unmount]() {
      r.current.splice(h, 1);
    }, [Gt.Hidden]() {
      r.current[h].state = "hidden";
    } }), i.microTask(() => {
      var _;
      !Ka(r) && s.current && ((_ = n.current) == null || _.call(n));
    }));
  }), a = Z((m) => {
    let p = r.current.find(({ el: h }) => h === m);
    return p ? p.state !== "visible" && (p.state = "visible") : r.current.push({ el: m, state: "visible" }), () => o(m, Gt.Unmount);
  }), l = q([]), u = q(Promise.resolve()), c = q({ enter: [], leave: [] }), d = Z((m, p, h) => {
    l.current.splice(0), t && (t.chains.current[p] = t.chains.current[p].filter(([_]) => _ !== m)), t == null || t.chains.current[p].push([m, new Promise((_) => {
      l.current.push(_);
    })]), t == null || t.chains.current[p].push([m, new Promise((_) => {
      Promise.all(c.current[p].map(([v, M]) => M)).then(() => _());
    })]), p === "enter" ? u.current = u.current.then(() => t == null ? void 0 : t.wait.current).then(() => h(p)) : h(p);
  }), f = Z((m, p, h) => {
    Promise.all(c.current[p].splice(0).map(([_, v]) => v)).then(() => {
      var _;
      (_ = l.current.shift()) == null || _();
    }).then(() => h(p));
  });
  return pe(() => ({ children: r, register: a, unregister: o, onStart: d, onStop: f, wait: u, chains: c }), [a, o, r, d, f, c, u]);
}
let Yv = Ae, Lv = wt.RenderStrategy;
function kk(e, t) {
  var n, r;
  let { transition: s = !0, beforeEnter: i, afterEnter: o, beforeLeave: a, afterLeave: l, enter: u, enterFrom: c, enterTo: d, entered: f, leave: m, leaveFrom: p, leaveTo: h, ..._ } = e, [v, M] = oe(null), y = q(null), x = xv(e), w = Le(...x ? [y, t, M] : t === null ? [] : [t]), k = (n = _.unmount) == null || n ? Gt.Unmount : Gt.Hidden, { show: D, appear: S, initial: N } = Lk(), [Y, $] = oe(D ? "visible" : "hidden"), I = Sk(), { register: U, unregister: H } = I;
  Me(() => U(y), [U, y]), Me(() => {
    if (k === Gt.Hidden && y.current) {
      if (D && Y !== "visible") {
        $("visible");
        return;
      }
      return Ye(Y, { hidden: () => H(y), visible: () => U(y) });
    }
  }, [Y, y, U, H, D, k]);
  let A = Ba();
  Me(() => {
    if (x && A && Y === "visible" && y.current === null) throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [y, Y, A, x]);
  let C = N && !S, O = S && D && N, L = q(!1), j = wv(() => {
    L.current || ($("hidden"), H(y));
  }, I), B = Z((W) => {
    L.current = !0;
    let Q = W ? "enter" : "leave";
    j.onStart(y, Q, (se) => {
      se === "enter" ? i == null || i() : se === "leave" && (a == null || a());
    });
  }), E = Z((W) => {
    let Q = W ? "enter" : "leave";
    L.current = !1, j.onStop(y, Q, (se) => {
      se === "enter" ? o == null || o() : se === "leave" && (l == null || l());
    }), Q === "leave" && !Ka(j) && ($("hidden"), H(y));
  });
  ue(() => {
    x && s || (B(D), E(D));
  }, [D, x, s]);
  let R = !(!s || !x || !A || C), [, z] = $a(R, v, D, { start: B, end: E }), K = Kt({ ref: w, className: ((r = vu(_.className, O && u, O && c, z.enter && u, z.enter && z.closed && c, z.enter && !z.closed && d, z.leave && m, z.leave && !z.closed && p, z.leave && z.closed && h, !z.transition && D && f)) == null ? void 0 : r.trim()) || void 0, ...Ca(z) }), ne = 0;
  Y === "visible" && (ne |= De.Open), Y === "hidden" && (ne |= De.Closed), D && Y === "hidden" && (ne |= De.Opening), !D && Y === "visible" && (ne |= De.Closing);
  let G = xe();
  return T.createElement(Ua.Provider, { value: j }, T.createElement(Fa, { value: ne }, G({ ourProps: K, theirProps: _, defaultTag: Yv, features: Lv, visible: Y === "visible", name: "Transition.Child" })));
}
function Dk(e, t) {
  let { show: n, appear: r = !1, unmount: s = !0, ...i } = e, o = q(null), a = xv(e), l = Le(...a ? [o, t] : t === null ? [] : [t]);
  Ba();
  let u = bn();
  if (n === void 0 && u !== null && (n = (u & De.Open) === De.Open), n === void 0) throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [c, d] = oe(n ? "visible" : "hidden"), f = wv(() => {
    n || d("hidden");
  }), [m, p] = oe(!0), h = q([n]);
  Me(() => {
    m !== !1 && h.current[h.current.length - 1] !== n && (h.current.push(n), p(!1));
  }, [h, n]);
  let _ = pe(() => ({ show: n, appear: r, initial: m }), [n, r, m]);
  Me(() => {
    n ? d("visible") : !Ka(f) && o.current !== null && d("hidden");
  }, [n, f]);
  let v = { unmount: s }, M = Z(() => {
    var w;
    m && p(!1), (w = e.beforeEnter) == null || w.call(e);
  }), y = Z(() => {
    var w;
    m && p(!1), (w = e.beforeLeave) == null || w.call(e);
  }), x = xe();
  return T.createElement(Ua.Provider, { value: f }, T.createElement(Wa.Provider, { value: _ }, x({ ourProps: { ...v, as: Ae, children: T.createElement(Sv, { ref: l, ...v, ...i, beforeEnter: M, beforeLeave: y }) }, theirProps: {}, defaultTag: Ae, features: Lv, visible: c === "visible", name: "Transition" })));
}
function Tk(e, t) {
  let n = re(Wa) !== null, r = bn() !== null;
  return T.createElement(T.Fragment, null, !n && r ? T.createElement(Eu, { ref: t, ...e }) : T.createElement(Sv, { ref: t, ...e }));
}
let Eu = be(Dk), Sv = be(kk), $r = be(Tk), Ga = Object.assign(Eu, { Child: $r, Root: Eu });
var Ek = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Ek || {}), jk = ((e) => (e[e.SetTitleId = 0] = "SetTitleId", e))(jk || {});
let Pk = { 0(e, t) {
  return e.titleId === t.id ? e : { ...e, titleId: t.id };
} }, Qc = ge(null);
Qc.displayName = "DialogContext";
function Ja(e) {
  let t = re(Qc);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, Ja), n;
  }
  return t;
}
function Ak(e, t) {
  return Ye(t.type, Pk, e, t);
}
let Am = be(function(e, t) {
  let n = je(), { id: r = `headlessui-dialog-${n}`, open: s, onClose: i, initialFocus: o, role: a = "dialog", autoFocus: l = !0, __demoMode: u = !1, unmount: c = !1, ...d } = e, f = q(!1);
  a = function() {
    return a === "dialog" || a === "alertdialog" ? a : (f.current || (f.current = !0, console.warn(`Invalid role [${a}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog");
  }();
  let m = bn();
  s === void 0 && m !== null && (s = (m & De.Open) === De.Open);
  let p = q(null), h = Le(p, t), _ = yn(p.current), v = s ? 0 : 1, [M, y] = fp(Ak, { titleId: null, descriptionId: null, panelRef: by() }), x = Z(() => i(!1)), w = Z((z) => y({ type: 0, id: z })), k = Ba() ? v === 0 : !1, [D, S] = BS(), N = { get current() {
    var z;
    return (z = M.panelRef.current) != null ? z : p.current;
  } }, Y = yv(), { resolveContainers: $ } = mk({ mainTreeNode: Y, portals: D, defaultContainers: [N] }), I = m !== null ? (m & De.Closing) === De.Closing : !1;
  Hc(u || I ? !1 : k, { allowed: Z(() => {
    var z, K;
    return [(K = (z = p.current) == null ? void 0 : z.closest("[data-headlessui-portal]")) != null ? K : null];
  }), disallowed: Z(() => {
    var z;
    return [(z = Y == null ? void 0 : Y.closest("body > *:not(#headlessui-portal-root)")) != null ? z : null];
  }) });
  let U = Zn.get(null);
  Me(() => {
    if (k) return U.actions.push(r), () => U.actions.pop(r);
  }, [U, r, k]);
  let H = ye(U, X((z) => U.selectors.isTop(z, r), [U, r]));
  Ic(H, $, (z) => {
    z.preventDefault(), x();
  }), dk(H, _ == null ? void 0 : _.defaultView, (z) => {
    z.preventDefault(), z.stopPropagation(), document.activeElement && "blur" in document.activeElement && typeof document.activeElement.blur == "function" && document.activeElement.blur(), x();
  }), Vc(u || I ? !1 : k, _, $), Oc(k, p, x);
  let [A, C] = v_(), O = pe(() => [{ dialogState: v, close: x, setTitleId: w, unmount: c }, M], [v, x, w, c, M]), L = Ee({ open: v === 0 }), j = { ref: h, id: r, role: a, tabIndex: -1, "aria-modal": u ? void 0 : v === 0 ? !0 : void 0, "aria-labelledby": M.titleId, "aria-describedby": A, unmount: c }, B = !fk(), E = un.None;
  k && !u && (E |= un.RestoreFocus, E |= un.TabLock, l && (E |= un.AutoFocus), B && (E |= un.InitialFocus));
  let R = xe();
  return T.createElement(sv, null, T.createElement(Tm, { force: !0 }, T.createElement(za, null, T.createElement(Qc.Provider, { value: O }, T.createElement(uv, { target: p }, T.createElement(Tm, { force: !1 }, T.createElement(C, { slot: L }, T.createElement(S, null, T.createElement(yk, { initialFocus: o, initialFocusFallback: p, containers: $, features: E }, T.createElement(M_, { value: x }, R({ ourProps: j, theirProps: d, slot: L, defaultTag: Ck, features: $k, visible: v === 0, name: "Dialog" })))))))))));
}), Ck = "div", $k = wt.RenderStrategy | wt.Static;
function Hk(e, t) {
  let { transition: n = !1, open: r, ...s } = e, i = bn(), o = e.hasOwnProperty("open") || i !== null, a = e.hasOwnProperty("onClose");
  if (!o && !a) throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
  if (!o) throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
  if (!a) throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
  if (!i && typeof e.open != "boolean") throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${e.open}`);
  if (typeof e.onClose != "function") throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${e.onClose}`);
  return (r !== void 0 || n) && !s.static ? T.createElement(Pm, null, T.createElement(Ga, { show: r, transition: n, unmount: s.unmount }, T.createElement(Am, { ref: t, ...s }))) : T.createElement(Pm, null, T.createElement(Am, { ref: t, open: r, ...s }));
}
let Ok = "div";
function Rk(e, t) {
  let n = je(), { id: r = `headlessui-dialog-panel-${n}`, transition: s = !1, ...i } = e, [{ dialogState: o, unmount: a }, l] = Ja("Dialog.Panel"), u = Le(t, l.panelRef), c = Ee({ open: o === 0 }), d = Z((_) => {
    _.stopPropagation();
  }), f = { ref: u, id: r, onClick: d }, m = s ? $r : Ae, p = s ? { unmount: a } : {}, h = xe();
  return T.createElement(m, { ...p }, h({ ourProps: f, theirProps: i, slot: c, defaultTag: Ok, name: "Dialog.Panel" }));
}
let Nk = "div";
function Ik(e, t) {
  let { transition: n = !1, ...r } = e, [{ dialogState: s, unmount: i }] = Ja("Dialog.Backdrop"), o = Ee({ open: s === 0 }), a = { ref: t, "aria-hidden": !0 }, l = n ? $r : Ae, u = n ? { unmount: i } : {}, c = xe();
  return T.createElement(l, { ...u }, c({ ourProps: a, theirProps: r, slot: o, defaultTag: Nk, name: "Dialog.Backdrop" }));
}
let Fk = "h2";
function Vk(e, t) {
  let n = je(), { id: r = `headlessui-dialog-title-${n}`, ...s } = e, [{ dialogState: i, setTitleId: o }] = Ja("Dialog.Title"), a = Le(t);
  ue(() => (o(r), () => o(null)), [r, o]);
  let l = Ee({ open: i === 0 }), u = { ref: a, id: r };
  return xe()({ ourProps: u, theirProps: s, slot: l, defaultTag: Fk, name: "Dialog.Title" });
}
let zk = be(Hk), kv = be(Rk);
be(Ik);
let Bk = be(Vk), Wk = Object.assign(zk, { Panel: kv, Title: Bk, Description: g_ });
var Cm;
let Uk = (Cm = T.startTransition) != null ? Cm : function(e) {
  e();
};
var Kk = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Kk || {}), Gk = ((e) => (e[e.ToggleDisclosure = 0] = "ToggleDisclosure", e[e.CloseDisclosure = 1] = "CloseDisclosure", e[e.SetButtonId = 2] = "SetButtonId", e[e.SetPanelId = 3] = "SetPanelId", e[e.SetButtonElement = 4] = "SetButtonElement", e[e.SetPanelElement = 5] = "SetPanelElement", e))(Gk || {});
let Jk = { 0: (e) => ({ ...e, disclosureState: Ye(e.disclosureState, { 0: 1, 1: 0 }) }), 1: (e) => e.disclosureState === 1 ? e : { ...e, disclosureState: 1 }, 2(e, t) {
  return e.buttonId === t.buttonId ? e : { ...e, buttonId: t.buttonId };
}, 3(e, t) {
  return e.panelId === t.panelId ? e : { ...e, panelId: t.panelId };
}, 4(e, t) {
  return e.buttonElement === t.element ? e : { ...e, buttonElement: t.element };
}, 5(e, t) {
  return e.panelElement === t.element ? e : { ...e, panelElement: t.element };
} }, ed = ge(null);
ed.displayName = "DisclosureContext";
function td(e) {
  let t = re(ed);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, td), n;
  }
  return t;
}
let nd = ge(null);
nd.displayName = "DisclosureAPIContext";
function Dv(e) {
  let t = re(nd);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, Dv), n;
  }
  return t;
}
let rd = ge(null);
rd.displayName = "DisclosurePanelContext";
function qk() {
  return re(rd);
}
function Xk(e, t) {
  return Ye(t.type, Jk, e, t);
}
let Zk = Ae;
function Qk(e, t) {
  let { defaultOpen: n = !1, ...r } = e, s = q(null), i = Le(t, h_((h) => {
    s.current = h;
  }, e.as === void 0 || On(e.as))), o = fp(Xk, { disclosureState: n ? 0 : 1, buttonElement: null, panelElement: null, buttonId: null, panelId: null }), [{ disclosureState: a, buttonId: l }, u] = o, c = Z((h) => {
    u({ type: 1 });
    let _ = rn(s.current);
    if (!_ || !l) return;
    let v = h ? ft(h) ? h : "current" in h && ft(h.current) ? h.current : _.getElementById(l) : _.getElementById(l);
    v == null || v.focus();
  }), d = pe(() => ({ close: c }), [c]), f = Ee({ open: a === 0, close: c }), m = { ref: i }, p = xe();
  return T.createElement(ed.Provider, { value: o }, T.createElement(nd.Provider, { value: d }, T.createElement(M_, { value: c }, T.createElement(Fa, { value: Ye(a, { 0: De.Open, 1: De.Closed }) }, p({ ourProps: m, theirProps: r, slot: f, defaultTag: Zk, name: "Disclosure" })))));
}
let e1 = "button";
function t1(e, t) {
  let n = je(), { id: r = `headlessui-disclosure-button-${n}`, disabled: s = !1, autoFocus: i = !1, ...o } = e, [a, l] = td("Disclosure.Button"), u = qk(), c = u === null ? !1 : u === a.panelId, d = q(null), f = Le(d, t, Z((N) => {
    if (!c) return l({ type: 4, element: N });
  }));
  ue(() => {
    if (!c) return l({ type: 2, buttonId: r }), () => {
      l({ type: 2, buttonId: null });
    };
  }, [r, l, c]);
  let m = Z((N) => {
    var Y;
    if (c) {
      if (a.disclosureState === 1) return;
      switch (N.key) {
        case de.Space:
        case de.Enter:
          N.preventDefault(), N.stopPropagation(), l({ type: 0 }), (Y = a.buttonElement) == null || Y.focus();
          break;
      }
    } else switch (N.key) {
      case de.Space:
      case de.Enter:
        N.preventDefault(), N.stopPropagation(), l({ type: 0 });
        break;
    }
  }), p = Z((N) => {
    switch (N.key) {
      case de.Space:
        N.preventDefault();
        break;
    }
  }), h = Z((N) => {
    var Y;
    Oo(N.currentTarget) || s || (c ? (l({ type: 0 }), (Y = a.buttonElement) == null || Y.focus()) : l({ type: 0 }));
  }), { isFocusVisible: _, focusProps: v } = Ur({ autoFocus: i }), { isHovered: M, hoverProps: y } = Wr({ isDisabled: s }), { pressed: x, pressProps: w } = Ta({ disabled: s }), k = Ee({ open: a.disclosureState === 0, hover: M, active: x, disabled: s, focus: _, autofocus: i }), D = Aa(e, a.buttonElement), S = Zt(c ? { ref: f, type: D, disabled: s || void 0, autoFocus: i, onKeyDown: m, onClick: h } : { ref: f, id: r, type: D, "aria-expanded": a.disclosureState === 0, "aria-controls": a.panelElement ? a.panelId : void 0, disabled: s || void 0, autoFocus: i, onKeyDown: m, onKeyUp: p, onClick: h }, v, y, w);
  return xe()({ ourProps: S, theirProps: o, slot: k, defaultTag: e1, name: "Disclosure.Button" });
}
let n1 = "div", r1 = wt.RenderStrategy | wt.Static;
function o1(e, t) {
  let n = je(), { id: r = `headlessui-disclosure-panel-${n}`, transition: s = !1, ...i } = e, [o, a] = td("Disclosure.Panel"), { close: l } = Dv("Disclosure.Panel"), [u, c] = oe(null), d = Le(t, Z((M) => {
    Uk(() => a({ type: 5, element: M }));
  }), c);
  ue(() => (a({ type: 3, panelId: r }), () => {
    a({ type: 3, panelId: null });
  }), [r, a]);
  let f = bn(), [m, p] = $a(s, u, f !== null ? (f & De.Open) === De.Open : o.disclosureState === 0), h = Ee({ open: o.disclosureState === 0, close: l }), _ = { ref: d, id: r, ...Ca(p) }, v = xe();
  return T.createElement(sv, null, T.createElement(rd.Provider, { value: o.panelId }, v({ ourProps: _, theirProps: i, slot: h, defaultTag: n1, features: r1, visible: m, name: "Disclosure.Panel" })));
}
let s1 = be(Qk), Tv = be(t1), Ev = be(o1), i1 = Object.assign(s1, { Button: Tv, Panel: Ev }), $m = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function Hm(e) {
  var t, n;
  let r = (t = e.innerText) != null ? t : "", s = e.cloneNode(!0);
  if (!Ge(s)) return r;
  let i = !1;
  for (let a of s.querySelectorAll('[hidden],[aria-hidden],[role="img"]')) a.remove(), i = !0;
  let o = i ? (n = s.innerText) != null ? n : "" : r;
  return $m.test(o) && (o = o.replace($m, "")), o;
}
function a1(e) {
  let t = e.getAttribute("aria-label");
  if (typeof t == "string") return t.trim();
  let n = e.getAttribute("aria-labelledby");
  if (n) {
    let r = n.split(" ").map((s) => {
      let i = document.getElementById(s);
      if (i) {
        let o = i.getAttribute("aria-label");
        return typeof o == "string" ? o.trim() : Hm(i).trim();
      }
      return null;
    }).filter(Boolean);
    if (r.length > 0) return r.join(", ");
  }
  return Hm(e).trim();
}
function l1(e) {
  let t = q(""), n = q("");
  return Z(() => {
    let r = e.current;
    if (!r) return "";
    let s = r.innerText;
    if (t.current === s) return n.current;
    let i = a1(r).trim().toLowerCase();
    return t.current = s, n.current = i, i;
  });
}
var u1 = Object.defineProperty, c1 = (e, t, n) => t in e ? u1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Om = (e, t, n) => (c1(e, typeof t != "symbol" ? t + "" : t, n), n), Ne = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Ne || {}), Jt = ((e) => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))(Jt || {}), Lo = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(Lo || {}), jv = ((e) => (e[e.OpenListbox = 0] = "OpenListbox", e[e.CloseListbox = 1] = "CloseListbox", e[e.GoToOption = 2] = "GoToOption", e[e.Search = 3] = "Search", e[e.ClearSearch = 4] = "ClearSearch", e[e.SelectOption = 5] = "SelectOption", e[e.RegisterOptions = 6] = "RegisterOptions", e[e.UnregisterOptions = 7] = "UnregisterOptions", e[e.SetButtonElement = 8] = "SetButtonElement", e[e.SetOptionsElement = 9] = "SetOptionsElement", e[e.SortOptions = 10] = "SortOptions", e[e.MarkButtonAsMoved = 11] = "MarkButtonAsMoved", e))(jv || {});
function Rm(e, t = (n) => n) {
  let n = e.activeOptionIndex !== null ? e.options[e.activeOptionIndex] : null, r = Nc(t(e.options.slice()), (i) => i.dataRef.current.domRef.current), s = n ? r.indexOf(n) : null;
  return s === -1 && (s = null), { options: r, activeOptionIndex: s };
}
let d1 = { 1(e) {
  if (e.dataRef.current.disabled || e.listboxState === 1) return e;
  let t = e.buttonElement ? Pt.Tracked(Xc(e.buttonElement)) : e.buttonPositionState;
  return { ...e, activeOptionIndex: null, pendingFocus: { focus: me.Nothing }, listboxState: 1, __demoMode: !1, buttonPositionState: t };
}, 0(e, t) {
  if (e.dataRef.current.disabled || e.listboxState === 0) return e;
  let n = e.activeOptionIndex, { isSelected: r } = e.dataRef.current, s = e.options.findIndex((i) => r(i.dataRef.current.value));
  return s !== -1 && (n = s), { ...e, frozenValue: !1, pendingFocus: t.focus, listboxState: 0, activeOptionIndex: n, __demoMode: !1, buttonPositionState: Pt.Idle };
}, 2(e, t) {
  var n, r, s, i, o;
  if (e.dataRef.current.disabled || e.listboxState === 1) return e;
  let a = { ...e, searchQuery: "", activationTrigger: (n = t.trigger) != null ? n : 1, __demoMode: !1 };
  if (t.focus === me.Nothing) return { ...a, activeOptionIndex: null };
  if (t.focus === me.Specific) return { ...a, activeOptionIndex: e.options.findIndex((c) => c.id === t.id) };
  if (t.focus === me.Previous) {
    let c = e.activeOptionIndex;
    if (c !== null) {
      let d = e.options[c].dataRef.current.domRef, f = $n(t, { resolveItems: () => e.options, resolveActiveIndex: () => e.activeOptionIndex, resolveId: (m) => m.id, resolveDisabled: (m) => m.dataRef.current.disabled });
      if (f !== null) {
        let m = e.options[f].dataRef.current.domRef;
        if (((r = d.current) == null ? void 0 : r.previousElementSibling) === m.current || ((s = m.current) == null ? void 0 : s.previousElementSibling) === null) return { ...a, activeOptionIndex: f };
      }
    }
  } else if (t.focus === me.Next) {
    let c = e.activeOptionIndex;
    if (c !== null) {
      let d = e.options[c].dataRef.current.domRef, f = $n(t, { resolveItems: () => e.options, resolveActiveIndex: () => e.activeOptionIndex, resolveId: (m) => m.id, resolveDisabled: (m) => m.dataRef.current.disabled });
      if (f !== null) {
        let m = e.options[f].dataRef.current.domRef;
        if (((i = d.current) == null ? void 0 : i.nextElementSibling) === m.current || ((o = m.current) == null ? void 0 : o.nextElementSibling) === null) return { ...a, activeOptionIndex: f };
      }
    }
  }
  let l = Rm(e), u = $n(t, { resolveItems: () => l.options, resolveActiveIndex: () => l.activeOptionIndex, resolveId: (c) => c.id, resolveDisabled: (c) => c.dataRef.current.disabled });
  return { ...a, ...l, activeOptionIndex: u };
}, 3: (e, t) => {
  if (e.dataRef.current.disabled || e.listboxState === 1) return e;
  let n = e.searchQuery !== "" ? 0 : 1, r = e.searchQuery + t.value.toLowerCase(), s = (e.activeOptionIndex !== null ? e.options.slice(e.activeOptionIndex + n).concat(e.options.slice(0, e.activeOptionIndex + n)) : e.options).find((o) => {
    var a;
    return !o.dataRef.current.disabled && ((a = o.dataRef.current.textValue) == null ? void 0 : a.startsWith(r));
  }), i = s ? e.options.indexOf(s) : -1;
  return i === -1 || i === e.activeOptionIndex ? { ...e, searchQuery: r } : { ...e, searchQuery: r, activeOptionIndex: i, activationTrigger: 1 };
}, 4(e) {
  return e.dataRef.current.disabled || e.listboxState === 1 || e.searchQuery === "" ? e : { ...e, searchQuery: "" };
}, 5(e) {
  return e.dataRef.current.mode === 0 ? { ...e, frozenValue: !0 } : { ...e };
}, 6: (e, t) => {
  let n = e.options.concat(t.options), r = e.activeOptionIndex;
  if (e.pendingFocus.focus !== me.Nothing && (r = $n(e.pendingFocus, { resolveItems: () => n, resolveActiveIndex: () => e.activeOptionIndex, resolveId: (s) => s.id, resolveDisabled: (s) => s.dataRef.current.disabled })), e.activeOptionIndex === null) {
    let { isSelected: s } = e.dataRef.current;
    if (s) {
      let i = n.findIndex((o) => s == null ? void 0 : s(o.dataRef.current.value));
      i !== -1 && (r = i);
    }
  }
  return { ...e, options: n, activeOptionIndex: r, pendingFocus: { focus: me.Nothing }, pendingShouldSort: !0 };
}, 7: (e, t) => {
  let n = e.options, r = [], s = new Set(t.options);
  for (let [i, o] of n.entries()) if (s.has(o.id) && (r.push(i), s.delete(o.id), s.size === 0)) break;
  if (r.length > 0) {
    n = n.slice();
    for (let i of r.reverse()) n.splice(i, 1);
  }
  return { ...e, options: n, activationTrigger: 1 };
}, 8: (e, t) => e.buttonElement === t.element ? e : { ...e, buttonElement: t.element }, 9: (e, t) => e.optionsElement === t.element ? e : { ...e, optionsElement: t.element }, 10: (e) => e.pendingShouldSort ? { ...e, ...Rm(e), pendingShouldSort: !1 } : e, 11(e) {
  return e.buttonPositionState.kind !== "Tracked" ? e : { ...e, buttonPositionState: Pt.Moved };
} };
class od extends Cc {
  constructor(t) {
    super(t), Om(this, "actions", { onChange: (n) => {
      let { onChange: r, compare: s, mode: i, value: o } = this.state.dataRef.current;
      return Ye(i, { 0: () => r == null ? void 0 : r(n), 1: () => {
        let a = o.slice(), l = a.findIndex((u) => s(u, n));
        return l === -1 ? a.push(n) : a.splice(l, 1), r == null ? void 0 : r(a);
      } });
    }, registerOption: xl(() => {
      let n = [], r = /* @__PURE__ */ new Set();
      return [(s, i) => {
        r.has(i) || (r.add(i), n.push({ id: s, dataRef: i }));
      }, () => (r.clear(), this.send({ type: 6, options: n.splice(0) }))];
    }), unregisterOption: xl(() => {
      let n = [];
      return [(r) => n.push(r), () => {
        this.send({ type: 7, options: n.splice(0) });
      }];
    }), goToOption: xl(() => {
      let n = null;
      return [(r, s) => {
        n = { type: 2, ...r, trigger: s };
      }, () => n && this.send(n)];
    }), closeListbox: () => {
      this.send({ type: 1 });
    }, openListbox: (n) => {
      this.send({ type: 0, focus: n });
    }, selectActiveOption: () => {
      var n;
      if (this.state.activeOptionIndex !== null) {
        let { dataRef: r } = this.state.options[this.state.activeOptionIndex];
        this.actions.selectOption(r.current.value);
      } else this.state.dataRef.current.mode === 0 && (this.actions.closeListbox(), (n = this.state.buttonElement) == null || n.focus({ preventScroll: !0 }));
    }, selectOption: (n) => {
      this.send({ type: 5, value: n });
    }, search: (n) => {
      this.send({ type: 3, value: n });
    }, clearSearch: () => {
      this.send({ type: 4 });
    }, setButtonElement: (n) => {
      this.send({ type: 8, element: n });
    }, setOptionsElement: (n) => {
      this.send({ type: 9, element: n });
    } }), Om(this, "selectors", { activeDescendantId(n) {
      var r;
      let s = n.activeOptionIndex, i = n.options;
      return s === null || (r = i[s]) == null ? void 0 : r.id;
    }, isActive(n, r) {
      var s;
      let i = n.activeOptionIndex, o = n.options;
      return i !== null ? ((s = o[i]) == null ? void 0 : s.id) === r : !1;
    }, hasFrozenValue(n) {
      return n.frozenValue;
    }, shouldScrollIntoView(n, r) {
      return n.__demoMode || n.listboxState !== 0 || n.activationTrigger === 0 ? !1 : this.isActive(n, r);
    }, didButtonMove(n) {
      return n.buttonPositionState.kind === "Moved";
    } }), this.on(6, () => {
      requestAnimationFrame(() => {
        this.send({ type: 10 });
      });
    });
    {
      let n = this.state.id, r = Zn.get(null);
      this.disposables.add(r.on($c.Push, (s) => {
        !r.selectors.isTop(s, n) && this.state.listboxState === 0 && this.actions.closeListbox();
      })), this.on(0, () => r.actions.push(n)), this.on(1, () => r.actions.pop(n));
    }
    this.disposables.group((n) => {
      this.on(1, (r) => {
        r.buttonElement && (n.dispose(), n.add(cv(r.buttonElement, r.buttonPositionState, () => {
          this.send({ type: 11 });
        })));
      });
    }), this.on(5, (n, r) => {
      var s;
      this.actions.onChange(r.value), this.state.dataRef.current.mode === 0 && (this.actions.closeListbox(), (s = this.state.buttonElement) == null || s.focus({ preventScroll: !0 }));
    });
  }
  static new({ id: t, __demoMode: n = !1 }) {
    return new od({ id: t, dataRef: { current: {} }, listboxState: n ? 0 : 1, options: [], searchQuery: "", activeOptionIndex: null, activationTrigger: 1, buttonElement: null, optionsElement: null, pendingShouldSort: !1, pendingFocus: { focus: me.Nothing }, frozenValue: !1, __demoMode: n, buttonPositionState: Pt.Idle });
  }
  reduce(t, n) {
    return Ye(n.type, d1, t, n);
  }
}
const Pv = ge(null);
function sd(e) {
  let t = re(Pv);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, Av), n;
  }
  return t;
}
function Av({ id: e, __demoMode: t = !1 }) {
  let n = pe(() => od.new({ id: e, __demoMode: t }), []);
  return Va(() => n.dispose()), n;
}
let qa = ge(null);
qa.displayName = "ListboxDataContext";
function Xr(e) {
  let t = re(qa);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, Xr), n;
  }
  return t;
}
let f1 = Ae;
function m1(e, t) {
  let n = je(), r = Kr(), { value: s, defaultValue: i, form: o, name: a, onChange: l, by: u, invalid: c = !1, disabled: d = r || !1, horizontal: f = !1, multiple: m = !1, __demoMode: p = !1, ...h } = e;
  const _ = f ? "horizontal" : "vertical";
  let v = Le(t), M = Dc(i), [y = m ? [] : void 0, x] = kc(s, l, M), w = Av({ id: n, __demoMode: p }), k = q({ static: !1, hold: !1 }), D = q(/* @__PURE__ */ new Map()), S = x_(u), N = X((R) => Ye(Y.mode, { [Jt.Multi]: () => y.some((z) => S(z, R)), [Jt.Single]: () => S(y, R) }), [y]), Y = Ee({ value: y, disabled: d, invalid: c, mode: m ? Jt.Multi : Jt.Single, orientation: _, onChange: x, compare: S, isSelected: N, optionsPropsRef: k, listRef: D });
  Me(() => {
    w.state.dataRef.current = Y;
  }, [Y]);
  let $ = ye(w, (R) => R.listboxState), I = Zn.get(null), U = ye(I, X((R) => I.selectors.isTop(R, n), [I, n])), [H, A] = ye(w, (R) => [R.buttonElement, R.optionsElement]);
  Ic(U, [H, A], (R, z) => {
    w.send({ type: jv.CloseListbox }), T_(z, Rc.Loose) || (R.preventDefault(), H == null || H.focus());
  });
  let C = Ee({ open: $ === Ne.Open, disabled: d, invalid: c, value: y }), [O, L] = jc({ inherit: !0 }), j = { ref: v }, B = X(() => {
    if (M !== void 0) return x == null ? void 0 : x(M);
  }, [x, M]), E = xe();
  return T.createElement(L, { value: O, props: { htmlFor: H == null ? void 0 : H.id }, slot: { open: $ === Ne.Open, disabled: d } }, T.createElement(rv, null, T.createElement(Pv.Provider, { value: w }, T.createElement(qa.Provider, { value: Y }, T.createElement(Fa, { value: Ye($, { [Ne.Open]: De.Open, [Ne.Closed]: De.Closed }) }, a != null && y != null && T.createElement(Tc, { disabled: d, data: { [a]: y }, form: o, onReset: B }), E({ ourProps: j, theirProps: h, slot: C, defaultTag: f1, name: "Listbox" }))))));
}
let p1 = "button";
function h1(e, t) {
  let n = je(), r = Ea(), s = Xr("Listbox.Button"), i = sd("Listbox.Button"), { id: o = r || `headlessui-listbox-button-${n}`, disabled: a = s.disabled || !1, autoFocus: l = !1, ...u } = e, c = Le(t, ev(), i.actions.setButtonElement), d = jS(), [f, m, p] = ye(i, (A) => [A.listboxState, A.buttonElement, A.optionsElement]), h = f === Ne.Open;
  P_(h, { trigger: m, action: X((A) => {
    if (m != null && m.contains(A.target)) return Et.Ignore;
    let C = A.target.closest('[role="option"]:not([data-disabled])');
    return Ge(C) ? Et.Select(C) : p != null && p.contains(A.target) ? Et.Ignore : Et.Close;
  }, [m, p]), close: i.actions.closeListbox, select: i.actions.selectActiveOption });
  let _ = Z((A) => {
    switch (A.key) {
      case de.Enter:
        d_(A.currentTarget);
        break;
      case de.Space:
      case de.ArrowDown:
        A.preventDefault(), i.actions.openListbox({ focus: s.value ? me.Nothing : me.First });
        break;
      case de.ArrowUp:
        A.preventDefault(), i.actions.openListbox({ focus: s.value ? me.Nothing : me.Last });
        break;
    }
  }), v = Z((A) => {
    switch (A.key) {
      case de.Space:
        A.preventDefault();
        break;
    }
  }), M = w_((A) => {
    var C;
    i.state.listboxState === Ne.Open ? (dt(() => i.actions.closeListbox()), (C = i.state.buttonElement) == null || C.focus({ preventScroll: !0 })) : (A.preventDefault(), i.actions.openListbox({ focus: me.Nothing }));
  }), y = Z((A) => A.preventDefault()), x = Xn([o]), w = Ec(), { isFocusVisible: k, focusProps: D } = Ur({ autoFocus: l }), { isHovered: S, hoverProps: N } = Wr({ isDisabled: a }), { pressed: Y, pressProps: $ } = Ta({ disabled: a }), I = Ee({ open: f === Ne.Open, active: Y || f === Ne.Open, disabled: a, invalid: s.invalid, value: s.value, hover: S, focus: k, autofocus: l }), U = ye(i, (A) => A.listboxState === Ne.Open), H = Zt(d(), { ref: c, id: o, type: Aa(e, m), "aria-haspopup": "listbox", "aria-controls": p == null ? void 0 : p.id, "aria-expanded": U, "aria-labelledby": x, "aria-describedby": w, disabled: a || void 0, autoFocus: l, onKeyDown: _, onKeyUp: v, onKeyPress: y }, M, D, N, $);
  return xe()({ ourProps: H, theirProps: u, slot: I, defaultTag: p1, name: "Listbox.Button" });
}
let Cv = ge(!1), _1 = "div", v1 = wt.RenderStrategy | wt.Static;
function g1(e, t) {
  let n = je(), { id: r = `headlessui-listbox-options-${n}`, anchor: s, portal: i = !1, modal: o = !0, transition: a = !1, ...l } = e, u = Q_(s), [c, d] = oe(null);
  u && (i = !0);
  let f = Xr("Listbox.Options"), m = sd("Listbox.Options"), [p, h, _, v] = ye(m, (G) => [G.listboxState, G.buttonElement, G.optionsElement, G.__demoMode]), M = yn(h), y = yn(_), x = bn(), [w, k] = $a(a, c, x !== null ? (x & De.Open) === De.Open : p === Ne.Open);
  Oc(w, h, m.actions.closeListbox);
  let D = v ? !1 : o && p === Ne.Open;
  Vc(D, y);
  let S = v ? !1 : o && p === Ne.Open;
  Hc(S, { allowed: X(() => [h, _], [h, _]) });
  let N = ye(m, m.selectors.didButtonMove) ? !1 : w, Y = ye(m, m.selectors.hasFrozenValue) && !e.static, $ = Vo(Y, f.value), I = X((G) => f.compare($, G), [f.compare, $]), U = ye(m, (G) => {
    var W;
    if (u == null || !((W = u == null ? void 0 : u.to) != null && W.includes("selection"))) return null;
    let Q = G.options.findIndex((se) => I(se.dataRef.current.value));
    return Q === -1 && (Q = 0), Q;
  }), H = (() => {
    if (u == null) return;
    if (U === null) return { ...u, inner: void 0 };
    let G = Array.from(f.listRef.current.values());
    return { ...u, inner: { listRef: { current: G }, index: U } };
  })(), [A, C] = nv(H), O = tv(), L = Le(t, u ? A : null, m.actions.setOptionsElement, d), j = kt();
  ue(() => {
    let G = _;
    G && p === Ne.Open && (ka(G) || G == null || G.focus({ preventScroll: !0 }));
  }, [p, _]);
  let B = Z((G) => {
    var W;
    switch (j.dispose(), G.key) {
      case de.Space:
        if (m.state.searchQuery !== "") return G.preventDefault(), G.stopPropagation(), m.actions.search(G.key);
      case de.Enter:
        G.preventDefault(), G.stopPropagation(), m.actions.selectActiveOption();
        break;
      case Ye(f.orientation, { vertical: de.ArrowDown, horizontal: de.ArrowRight }):
        return G.preventDefault(), G.stopPropagation(), m.actions.goToOption({ focus: me.Next });
      case Ye(f.orientation, { vertical: de.ArrowUp, horizontal: de.ArrowLeft }):
        return G.preventDefault(), G.stopPropagation(), m.actions.goToOption({ focus: me.Previous });
      case de.Home:
      case de.PageUp:
        return G.preventDefault(), G.stopPropagation(), m.actions.goToOption({ focus: me.First });
      case de.End:
      case de.PageDown:
        return G.preventDefault(), G.stopPropagation(), m.actions.goToOption({ focus: me.Last });
      case de.Escape:
        G.preventDefault(), G.stopPropagation(), dt(() => m.actions.closeListbox()), (W = m.state.buttonElement) == null || W.focus({ preventScroll: !0 });
        return;
      case de.Tab:
        G.preventDefault(), G.stopPropagation(), dt(() => m.actions.closeListbox()), BY(m.state.buttonElement, G.shiftKey ? ct.Previous : ct.Next);
        break;
      default:
        G.key.length === 1 && (m.actions.search(G.key), j.setTimeout(() => m.actions.clearSearch(), 350));
        break;
    }
  }), E = ye(m, (G) => {
    var W;
    return (W = G.buttonElement) == null ? void 0 : W.id;
  }), R = Ee({ open: p === Ne.Open }), z = Zt(u ? O() : {}, { id: r, ref: L, "aria-activedescendant": ye(m, m.selectors.activeDescendantId), "aria-multiselectable": f.mode === Jt.Multi ? !0 : void 0, "aria-labelledby": E, "aria-orientation": f.orientation, onKeyDown: B, role: "listbox", tabIndex: p === Ne.Open ? 0 : void 0, style: { ...l.style, ...C, "--button-width": yu(w, h, !0).width }, ...Ca(k) }), K = xe(), ne = pe(() => f.mode === Jt.Multi ? f : { ...f, isSelected: I }, [f, I]);
  return T.createElement(za, { enabled: i ? e.static || w : !1, ownerDocument: M }, T.createElement(qa.Provider, { value: ne }, K({ ourProps: z, theirProps: l, slot: R, defaultTag: _1, features: v1, visible: N, name: "Listbox.Options" })));
}
let y1 = "div";
function M1(e, t) {
  let n = je(), { id: r = `headlessui-listbox-option-${n}`, disabled: s = !1, value: i, ...o } = e, a = re(Cv) === !0, l = Xr("Listbox.Option"), u = sd("Listbox.Option"), c = ye(u, (Y) => u.selectors.isActive(Y, r)), d = l.isSelected(i), f = q(null), m = l1(f), p = Ft({ disabled: s, value: i, domRef: f, get textValue() {
    return m();
  } }), h = Le(t, f, (Y) => {
    Y ? l.listRef.current.set(r, Y) : l.listRef.current.delete(r);
  }), _ = ye(u, (Y) => u.selectors.shouldScrollIntoView(Y, r));
  Me(() => {
    if (_) return qe().requestAnimationFrame(() => {
      var Y, $;
      ($ = (Y = f.current) == null ? void 0 : Y.scrollIntoView) == null || $.call(Y, { block: "nearest" });
    });
  }, [_, f]), Me(() => {
    if (!a) return u.actions.registerOption(r, p), () => u.actions.unregisterOption(r);
  }, [p, r, a]);
  let v = Z((Y) => {
    if (s) return Y.preventDefault();
    u.actions.selectOption(i);
  }), M = Z(() => {
    if (s) return u.actions.goToOption({ focus: me.Nothing });
    u.actions.goToOption({ focus: me.Specific, id: r });
  }), y = C_(), x = Z((Y) => y.update(Y)), w = Z((Y) => {
    y.wasMoved(Y) && (s || c && u.state.activationTrigger === Lo.Pointer || u.actions.goToOption({ focus: me.Specific, id: r }, Lo.Pointer));
  }), k = Z((Y) => {
    y.wasMoved(Y) && (s || c && u.state.activationTrigger === Lo.Pointer && u.actions.goToOption({ focus: me.Nothing }));
  }), D = Ee({ active: c, focus: c, selected: d, disabled: s, selectedOption: d && a }), S = a ? {} : { id: r, ref: h, role: "option", tabIndex: s === !0 ? void 0 : -1, "aria-disabled": s === !0 ? !0 : void 0, "aria-selected": d, disabled: void 0, onClick: v, onFocus: M, onPointerEnter: x, onMouseEnter: x, onPointerMove: w, onMouseMove: w, onPointerLeave: k, onMouseLeave: k }, N = xe();
  return !d && a ? null : N({ ourProps: S, theirProps: o, slot: D, defaultTag: y1, name: "Listbox.Option" });
}
let b1 = Ae;
function x1(e, t) {
  let { options: n, placeholder: r, ...s } = e, i = { ref: Le(t) }, o = Xr("ListboxSelectedOption"), a = Ee({}), l = o.value === void 0 || o.value === null || o.mode === Jt.Multi && Array.isArray(o.value) && o.value.length === 0, u = xe();
  return T.createElement(Cv.Provider, { value: !0 }, u({ ourProps: i, theirProps: { ...s, children: T.createElement(T.Fragment, null, r && l ? r : n) }, slot: a, defaultTag: b1, name: "ListboxSelectedOption" }));
}
let w1 = be(m1), $v = be(h1), Y1 = Pc, Hv = be(g1), Ov = be(M1), L1 = be(x1), S1 = Object.assign(w1, { Button: $v, Label: Y1, Options: Hv, Option: Ov, SelectedOption: L1 }), id = ge(null);
id.displayName = "GroupContext";
let k1 = Ae;
function D1(e) {
  var t;
  let [n, r] = oe(null), [s, i] = jc(), [o, a] = v_(), l = pe(() => ({ switch: n, setSwitch: r }), [n, r]), u = {}, c = e, d = xe();
  return T.createElement(a, { name: "Switch.Description", value: o }, T.createElement(i, { name: "Switch.Label", value: s, props: { htmlFor: (t = l.switch) == null ? void 0 : t.id, onClick(f) {
    n && (gu(f.currentTarget) && f.preventDefault(), n.click(), n.focus({ preventScroll: !0 }));
  } } }, T.createElement(id.Provider, { value: l }, d({ ourProps: u, theirProps: c, slot: {}, defaultTag: k1, name: "Switch.Group" }))));
}
let T1 = "button";
function E1(e, t) {
  var n;
  let r = je(), s = Ea(), i = Kr(), { id: o = s || `headlessui-switch-${r}`, disabled: a = i || !1, checked: l, defaultChecked: u, onChange: c, name: d, value: f, form: m, autoFocus: p = !1, ...h } = e, _ = re(id), [v, M] = oe(null), y = q(null), x = Le(y, t, _ === null ? null : _.setSwitch, M), w = Dc(u), [k, D] = kc(l, c, w != null ? w : !1), S = kt(), [N, Y] = oe(!1), $ = Z(() => {
    Y(!0), D == null || D(!k), S.nextFrame(() => {
      Y(!1);
    });
  }), I = Z((W) => {
    if (Oo(W.currentTarget)) return W.preventDefault();
    W.preventDefault(), $();
  }), U = Z((W) => {
    W.key === de.Space ? (W.preventDefault(), $()) : W.key === de.Enter && d_(W.currentTarget);
  }), H = Z((W) => W.preventDefault()), A = Xn(), C = Ec(), { isFocusVisible: O, focusProps: L } = Ur({ autoFocus: p }), { isHovered: j, hoverProps: B } = Wr({ isDisabled: a }), { pressed: E, pressProps: R } = Ta({ disabled: a }), z = Ee({ checked: k, disabled: a, hover: j, focus: O, active: E, autofocus: p, changing: N }), K = Zt({ id: o, ref: x, role: "switch", type: Aa(e, v), tabIndex: e.tabIndex === -1 ? 0 : (n = e.tabIndex) != null ? n : 0, "aria-checked": k, "aria-labelledby": A, "aria-describedby": C, disabled: a || void 0, autoFocus: p, onClick: I, onKeyUp: U, onKeyPress: H }, L, B, R), ne = X(() => {
    if (w !== void 0) return D == null ? void 0 : D(w);
  }, [D, w]), G = xe();
  return T.createElement(T.Fragment, null, d != null && T.createElement(Tc, { disabled: a, data: { [d]: f || "on" }, overrides: { type: "checkbox", checked: k }, form: m, onReset: ne }), G({ ourProps: K, theirProps: h, slot: z, defaultTag: T1, name: "Switch" }));
}
let j1 = be(E1), P1 = D1, A1 = Pc, C1 = g_, $1 = Object.assign(j1, { Group: P1, Label: A1, Description: C1 });
function Nm(e, t) {
  let n;
  return (...r) => {
    window.clearTimeout(n), n = window.setTimeout(() => e(...r), t);
  };
}
function H1({ debounce: e, scroll: t, polyfill: n, offsetSize: r } = { debounce: 0, scroll: !1, offsetSize: !1 }) {
  const s = n || (typeof window == "undefined" ? class {
  } : window.ResizeObserver);
  if (!s) throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");
  const [i, o] = oe({ left: 0, top: 0, width: 0, height: 0, bottom: 0, right: 0, x: 0, y: 0 }), a = q({ element: null, scrollContainers: null, resizeObserver: null, lastBounds: i, orientationHandler: null }), l = e ? typeof e == "number" ? e : e.scroll : null, u = e ? typeof e == "number" ? e : e.resize : null, c = q(!1);
  ue(() => (c.current = !0, () => void (c.current = !1)));
  const [d, f, m] = pe(() => {
    const v = () => {
      if (!a.current.element) return;
      const { left: M, top: y, width: x, height: w, bottom: k, right: D, x: S, y: N } = a.current.element.getBoundingClientRect(), Y = { left: M, top: y, width: x, height: w, bottom: k, right: D, x: S, y: N };
      a.current.element instanceof HTMLElement && r && (Y.height = a.current.element.offsetHeight, Y.width = a.current.element.offsetWidth), Object.freeze(Y), c.current && !I1(a.current.lastBounds, Y) && o(a.current.lastBounds = Y);
    };
    return [v, u ? Nm(v, u) : v, l ? Nm(v, l) : v];
  }, [o, r, l, u]);
  function p() {
    a.current.scrollContainers && (a.current.scrollContainers.forEach((v) => v.removeEventListener("scroll", m, !0)), a.current.scrollContainers = null), a.current.resizeObserver && (a.current.resizeObserver.disconnect(), a.current.resizeObserver = null), a.current.orientationHandler && ("orientation" in screen && "removeEventListener" in screen.orientation ? screen.orientation.removeEventListener("change", a.current.orientationHandler) : "onorientationchange" in window && window.removeEventListener("orientationchange", a.current.orientationHandler));
  }
  function h() {
    a.current.element && (a.current.resizeObserver = new s(m), a.current.resizeObserver.observe(a.current.element), t && a.current.scrollContainers && a.current.scrollContainers.forEach((v) => v.addEventListener("scroll", m, { capture: !0, passive: !0 })), a.current.orientationHandler = () => {
      m();
    }, "orientation" in screen && "addEventListener" in screen.orientation ? screen.orientation.addEventListener("change", a.current.orientationHandler) : "onorientationchange" in window && window.addEventListener("orientationchange", a.current.orientationHandler));
  }
  const _ = (v) => {
    !v || v === a.current.element || (p(), a.current.element = v, a.current.scrollContainers = Rv(v), h());
  };
  return R1(m, !!t), O1(f), ue(() => {
    p(), h();
  }, [t, m, f]), ue(() => p, []), [_, i, d];
}
function O1(e) {
  ue(() => {
    const t = e;
    return window.addEventListener("resize", t), () => void window.removeEventListener("resize", t);
  }, [e]);
}
function R1(e, t) {
  ue(() => {
    if (t) {
      const n = e;
      return window.addEventListener("scroll", n, { capture: !0, passive: !0 }), () => void window.removeEventListener("scroll", n, !0);
    }
  }, [e, t]);
}
function Rv(e) {
  const t = [];
  if (!e || e === document.body) return t;
  const { overflow: n, overflowX: r, overflowY: s } = window.getComputedStyle(e);
  return [n, r, s].some((i) => i === "auto" || i === "scroll") && t.push(e), [...t, ...Rv(e.parentElement)];
}
const N1 = ["x", "y", "top", "bottom", "left", "right", "width", "height"], I1 = (e, t) => N1.every((n) => e[n] === t[n]);
function F1({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ b.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ b.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ b.createElement("path", {
    fillRule: "evenodd",
    d: "M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z",
    clipRule: "evenodd"
  }));
}
const V1 = /* @__PURE__ */ b.forwardRef(F1);
function z1({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ b.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ b.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ b.createElement("path", {
    fillRule: "evenodd",
    d: "M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z",
    clipRule: "evenodd"
  }));
}
const zo = /* @__PURE__ */ b.forwardRef(z1);
function B1({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ b.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ b.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ b.createElement("path", {
    fillRule: "evenodd",
    d: "M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z",
    clipRule: "evenodd"
  }));
}
const _n = /* @__PURE__ */ b.forwardRef(B1);
function W1({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ b.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ b.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ b.createElement("path", {
    fillRule: "evenodd",
    d: "M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z",
    clipRule: "evenodd"
  }));
}
const U1 = /* @__PURE__ */ b.forwardRef(W1);
function K1({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ b.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ b.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ b.createElement("path", {
    fillRule: "evenodd",
    d: "M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z",
    clipRule: "evenodd"
  }));
}
const G1 = /* @__PURE__ */ b.forwardRef(K1);
function J1({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ b.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ b.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ b.createElement("path", {
    fillRule: "evenodd",
    d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
    clipRule: "evenodd"
  }));
}
const q1 = /* @__PURE__ */ b.forwardRef(J1);
function X1({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ b.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ b.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ b.createElement("path", {
    fillRule: "evenodd",
    d: "M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z",
    clipRule: "evenodd"
  }));
}
const Bo = /* @__PURE__ */ b.forwardRef(X1), YN = ({
  className: e = "",
  buttonClassName: t = "",
  hiddenIcon: n = !1,
  isOpened: r = !1,
  children: s,
  rowContent: i
}) => {
  const [o, { height: a }] = H1();
  return /* @__PURE__ */ g.jsx("div", { className: e, children: /* @__PURE__ */ g.jsx(i1, { defaultOpen: r, children: ({ open: l }) => /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
    /* @__PURE__ */ g.jsxs(
      Tv,
      {
        className: J(
          "flex w-full justify-start items-center gap-[22px] bg-light-4 border-t-[1px] border-light-3-tint px-[14px] py-[12px] text-left text-[14px] text-dark hover:bg-light-3-tint focus:outline-none transition-colors",
          t
        ),
        children: [
          /* @__PURE__ */ g.jsx(
            _n,
            {
              className: J(
                "h-[28px] w-[28px] transition-all duration-200",
                l && "rotate-180 transform",
                n && "hidden"
              )
            }
          ),
          i
        ]
      }
    ),
    /* @__PURE__ */ g.jsx(
      Ga,
      {
        leave: "transition-all duration-300 ease-out overflow-hidden",
        leaveFrom: `h-[${a}px] opacity-100`,
        leaveTo: "h-0 opacity-0",
        children: /* @__PURE__ */ g.jsx(
          zn.div,
          {
            ref: o,
            className: "overflow-hidden",
            initial: { opacity: 0, height: 0 },
            animate: { opacity: 1, height: "auto" },
            children: /* @__PURE__ */ g.jsx(Ev, { children: s })
          }
        )
      }
    )
  ] }) }, r.toString()) });
};
var pr = /* @__PURE__ */ ((e) => (e[e.ExtraSmall = 0] = "ExtraSmall", e[e.Small = 1] = "Small", e[e.Medium = 2] = "Medium", e[e.Large = 3] = "Large", e[e.Pagination = 4] = "Pagination", e))(pr || {});
const Z1 = () => /* @__PURE__ */ g.jsx("svg", { width: "9", height: "5", viewBox: "0 0 9 5", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ g.jsx("path", { d: "M4.13013 4.37044L0 0H8.26025L4.13013 4.37044Z", fill: "currentColor" }) }), Q1 = () => /* @__PURE__ */ g.jsxs("svg", { width: "10", height: "10", viewBox: "0 0 10 10", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ g.jsx(
    "path",
    {
      d: "M9 9L5 5L9 1",
      stroke: "currentColor",
      "stroke-width": "1.5",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }
  ),
  /* @__PURE__ */ g.jsx(
    "line",
    {
      x1: "1.25",
      y1: "9.25",
      x2: "1.25",
      y2: "0.75",
      stroke: "currentColor",
      "stroke-width": "1.5",
      "stroke-linecap": "round"
    }
  )
] }), eD = (e) => {
  switch (e) {
    case 0:
      return /* @__PURE__ */ g.jsx(Z1, {});
    case 1:
      return /* @__PURE__ */ g.jsx(_n, { className: J("transition h-4 w-4"), "aria-hidden": "true" });
    case 2:
      return /* @__PURE__ */ g.jsx(_n, { className: J("transition h-6 w-6"), "aria-hidden": "true" });
    case 4:
      return /* @__PURE__ */ g.jsx(Q1, {});
    case 3:
      return /* @__PURE__ */ g.jsx(V1, { className: J("transition h-4 w-4"), "aria-hidden": "true" });
    default:
      return /* @__PURE__ */ g.jsx(_n, { className: J("transition h-4 w-4"), "aria-hidden": "true" });
  }
}, fo = ({
  className: e = "",
  withBackground: t = !1,
  onClick: n,
  disabled: r = !1,
  arrowType: s = 0
  /* ExtraSmall */
}) => /* @__PURE__ */ g.jsx(
  "button",
  {
    className: J(
      "transition-all h-[24px] w-[24px] hover:bg-light-4-tint flex items-center justify-center rounded-full",
      s === 3 && "h-[40px] w-[40px]",
      t && "bg-light-4-tint hover:!bg-light-3-tint",
      r && "bg-transparent hover:!bg-transparent opacity-30",
      e
    ),
    disabled: r,
    onClick: n,
    children: /* @__PURE__ */ g.jsx("span", { className: "flex items-center text-dark", children: eD(s) })
  }
), ad = ({ className: e, innerClassName: t }) => /* @__PURE__ */ g.jsx("div", { className: e, children: /* @__PURE__ */ g.jsx("div", { className: J("spinner", t) }) }), LN = ({
  className: e,
  selectedOption: t,
  labelClassName: n,
  options: r,
  error: s,
  errorMsg: i,
  onChange: o,
  onSelect: a,
  label: l,
  placeholder: u,
  required: c,
  disabled: d,
  multiple: f = !1,
  onLoadMore: m,
  hasMore: p = !1,
  isLoadingMore: h = !1,
  noResultsLabel: _ = "No results found"
}) => {
  const v = q(null), M = q(null), y = q(null), x = q(null), [w, k] = oe(""), D = q(!1), [S, N] = oe(!1);
  return ue(() => {
    const Y = () => {
      if (!x.current)
        return !1;
      const U = x.current.querySelector(
        '[class*="overflow-auto"]'
      );
      if (U)
        return M.current = U, N(!0), !0;
      if (y.current) {
        let H = y.current.parentElement, A = 0;
        for (; H && A < 10; ) {
          const C = getComputedStyle(H), O = H.classList.contains("overflow-auto"), L = C.overflow === "auto" || C.overflowY === "auto", j = H.scrollHeight > H.clientHeight && C.overflow !== "hidden";
          if (O || L || j)
            return M.current = H, N(!0), !0;
          H = H.parentElement, A++;
        }
      }
      return N(!1), !1;
    }, $ = [
      setTimeout(Y, 0),
      setTimeout(Y, 50),
      setTimeout(Y, 150),
      setTimeout(Y, 300)
    ], I = new MutationObserver(() => {
      Y();
    });
    return x.current && I.observe(x.current, {
      childList: !0,
      subtree: !0
    }), () => {
      $.forEach(clearTimeout), I.disconnect();
    };
  }, [r.length, w]), ue(() => {
    if (!(!M.current || !m || !p ? (D.current = !1, !1) : !0))
      return;
    const $ = M.current, I = () => {
      D.current || h || !p || !m || (D.current = !0, m(), setTimeout(() => {
        D.current = !1;
      }, 500));
    }, U = () => {
      const O = M.current;
      if (!O || D.current || h || !p) return;
      const { scrollTop: L, scrollHeight: j, clientHeight: B } = O;
      j - L - B < 100 && I();
    }, H = () => {
      const O = M.current;
      if (!O || D.current || h || !p)
        return;
      const { scrollHeight: L, clientHeight: j, scrollTop: B } = O, E = L - B - j;
      (L <= j + 10 || E < 100) && I();
    }, A = [
      setTimeout(H, 50),
      setTimeout(H, 150),
      setTimeout(H, 300),
      setTimeout(H, 500)
    ], C = setInterval(() => {
      const O = M.current;
      if (!O || !p || h || D.current)
        return;
      const { scrollTop: L, scrollHeight: j, clientHeight: B } = O;
      j - L - B < 100 && I();
    }, 150);
    if ($) {
      $.addEventListener("scroll", U, { passive: !0 });
      const O = new MutationObserver(() => {
        H();
      });
      return O.observe($, {
        childList: !0,
        subtree: !0
      }), () => {
        $.removeEventListener("scroll", U), O.disconnect(), A.forEach(clearTimeout), clearInterval(C), D.current = !1;
      };
    }
    return () => {
      A.forEach(clearTimeout), clearInterval(C), D.current = !1;
    };
  }, [m, p, h, r.length, S]), /* @__PURE__ */ g.jsxs("div", { ref: x, className: J("relative max-w-[572px]", e), children: [
    l && /* @__PURE__ */ g.jsxs(
      "label",
      {
        className: J("block mb-1.5 text-sm text-light-dark truncate", n),
        title: l,
        children: [
          l,
          c && /* @__PURE__ */ g.jsx("span", { className: "text-danger", children: " *" })
        ]
      }
    ),
    /* @__PURE__ */ g.jsx(
      jm,
      {
        value: t,
        disabled: d,
        onChange: (Y) => {
          f && Array.isArray(Y), a(Y);
        },
        multiple: f,
        children: /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
          /* @__PURE__ */ g.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ g.jsx(
              jm.Input,
              {
                className: J(
                  "relative w-full min-h-[40px] border border-light-3 cursor-pointer rounded-[3px] bg-white py-[7px] pl-[15px] pr-[25px] text-left transition-colors duration-100 !outline-offset-0 hover:bg-fo-accent-light hover:border-fo-accent hover:outline hover:!outline-[1px] hover:outline-fo-accent focus:outline-none focus:ring-0 focus:border-fo-accent focus:outline focus:!outline-[1px] focus:outline-fo-accent truncate",
                  (t == null ? void 0 : t.name) && "pr-[45px]",
                  s && "border-2 border-primary-shade py-[6px] px-[14px] hover:bg-fo-accent-light hover:border-fo-accent focus:border-fo-accent",
                  d && "!bg-transparent !border !border-light-3-tint !text-light-3 !py-[7px] !pl-[15px] !pr-[45px]"
                ),
                onChange: (Y) => {
                  o(Y.target.value), k(Y.target.value);
                },
                placeholder: u,
                displayValue: (Y) => Array.isArray(Y) ? null : (Y == null ? void 0 : Y.name) || "",
                onClick: () => {
                  var Y;
                  return (Y = v.current) == null ? void 0 : Y.click();
                }
              }
            ),
            /* @__PURE__ */ g.jsx(
              Tu,
              {
                className: J(
                  "absolute w-[20px] inset-y-0 flex justify-end items-center right-[10px]",
                  d && "cursor-not-allowed"
                ),
                ref: v,
                children: /* @__PURE__ */ g.jsx(
                  "svg",
                  {
                    width: "9",
                    height: "5",
                    viewBox: "0 0 9 5",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: /* @__PURE__ */ g.jsx("path", { d: "M4.13013 4.37044L0 0H8.26025L4.13013 4.37044Z", fill: "currentColor" })
                  }
                )
              }
            ),
            (t == null ? void 0 : t.name) && /* @__PURE__ */ g.jsx(
              Tu,
              {
                className: J(
                  "absolute inset-y-0 flex justify-end items-center right-[25px]",
                  d && "cursor-not-allowed"
                ),
                onClick: (Y) => {
                  Y.preventDefault(), a(null), o("");
                },
                children: /* @__PURE__ */ g.jsx(Bo, { className: "h-4 w-4 text-light-dark" })
              }
            )
          ] }),
          /* @__PURE__ */ g.jsx(_v, { className: "absolute z-10 mt-[1px] max-w-[572px] min-w-[259px] max-h-[220px] w-full overflow-auto rounded-b-[3px] bg-white py-2 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none", children: /* @__PURE__ */ g.jsx("div", { ref: y, children: r.length === 0 && w !== "" ? /* @__PURE__ */ g.jsx("div", { className: "relative cursor-default select-none py-2 px-4 text-light-dark", children: _ }) : /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
            r.map((Y) => /* @__PURE__ */ g.jsx(
              vv,
              {
                title: Y.name,
                value: Y,
                className: ({ focus: $ }) => `relative cursor-pointer select-none py-2 pl-[45px] pr-4 transition-colors duration-100 ${$ && "bg-fo-accent-tint"}`,
                children: ({ selected: $ }) => /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
                  /* @__PURE__ */ g.jsx("span", { className: "block truncate", children: Y.name }),
                  $ && /* @__PURE__ */ g.jsx("span", { className: "absolute inset-y-0 left-0 flex items-center pl-3 text-fo-accent", children: /* @__PURE__ */ g.jsx(zo, { className: "h-4 w-4", "aria-hidden": "true" }) })
                ] })
              },
              Y.value
            )),
            h && /* @__PURE__ */ g.jsx("div", { className: "px-[10px] py-2 flex justify-center items-center", children: /* @__PURE__ */ g.jsx(ad, { className: "w-5 h-5" }) })
          ] }) }) })
        ] })
      }
    ),
    s && /* @__PURE__ */ g.jsx("p", { className: "text-danger text-xs mt-2.5", children: i || `${l} is required` })
  ] });
}, tD = ({
  className: e = "",
  iconClassName: t = "",
  label: n,
  isPrimary: r = !1,
  isLoading: s,
  icon: i,
  onClick: o,
  isDisabled: a = !1,
  type: l,
  onMouseUp: u
}) => /* @__PURE__ */ g.jsxs(
  "button",
  {
    type: l,
    title: n,
    disabled: a || s,
    className: J(
      "relative group transition-all flex items-center justify-center border-[2px] border-light-3-tint bg-light-3-tint py-[8px] px-[16px] gap-[10px] text-[14px] rounded-[6px] font-semibold",
      !s && "hover:border-primary hover:bg-background",
      !a && r && `!bg-primary !border-primary text-background ${!s && "hover:!border-primary-shade hover:!bg-primary-shade"}`,
      a && "!border-light-3-tint !bg-light-3-tint !text-dark opacity-40 hover:!border-light-3-tint hover:!bg-light-3-tint cursor-not-allowed",
      s && "cursor-not-allowed",
      e
    ),
    onClick: o,
    onMouseUp: u,
    children: [
      i && /* @__PURE__ */ g.jsx(
        "span",
        {
          className: J(
            "flex items-center text-dark group-hover:text-primary",
            a && "group-hover:!text-dark",
            t
          ),
          children: i
        }
      ),
      n && /* @__PURE__ */ g.jsx("span", { className: J("truncate", s && "invisible"), children: n }),
      s && /* @__PURE__ */ g.jsx(
        ad,
        {
          className: "absolute scale-[0.4] -translate-y-[7px]",
          innerClassName: r ? "!text-background" : "!text-dark"
        }
      )
    ]
  }
), SN = ({
  children: e,
  onClick: t,
  onMouseEnter: n,
  title: r,
  className: s,
  cellClassName: i,
  noTruncate: o = !1
}) => /* @__PURE__ */ g.jsx(
  "div",
  {
    className: J(
      "flex items-center justify-between text-[14px] gap-[20px] px-[8px]",
      s
    ),
    onClick: t,
    onMouseEnter: n,
    children: /* @__PURE__ */ g.jsx(
      "div",
      {
        className: J("w-auto", i, !o && "truncate"),
        title: r != null ? r : typeof e == "string" || typeof e == "number" ? e == null ? void 0 : e.toString() : "",
        children: e || "-"
      }
    )
  }
), nD = Nr(
  ({
    checked: e = !1,
    onChange: t,
    disabled: n = !1,
    indeterminate: r = !1,
    className: s = "",
    label: i,
    id: o
  }, a) => {
    const l = (u) => {
      t && !n && t(u.target.checked);
    };
    return /* @__PURE__ */ g.jsxs(
      "label",
      {
        className: J(
          "inline-flex items-center gap-2 cursor-pointer",
          n && "opacity-50 cursor-not-allowed",
          s
        ),
        children: [
          /* @__PURE__ */ g.jsx(
            "input",
            {
              ref: a,
              id: o,
              type: "checkbox",
              checked: e,
              onChange: l,
              disabled: n,
              className: J(
                "w-[16px] h-[16px] cursor-pointer appearance-none border-2 rounded transition-all",
                "border-light-3 bg-white",
                "checked:bg-primary checked:border-primary hover:checked:bg-primary hover:checked:border-primary",
                'checked:bg-[url("data:image/svg+xml,%3csvg%20viewBox=%270%200%2016%2016%27%20fill=%27white%27%20xmlns=%27http://www.w3.org/2000/svg%27%3e%3cpath%20d=%27M12.207%204.793a1%201%200%20010%201.414l-5%205a1%201%200%2001-1.414%200l-2-2a1%201%200%20011.414-1.414L6.5%209.086l4.293-4.293a1%201%200%20011.414%200z%27/%3e%3c/svg%3e")]',
                "disabled:bg-light-3-tint disabled:border-light-3-tint disabled:cursor-not-allowed",
                "focus:outline-none",
                r && 'bg-[url("data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20fill=%27none%27%20viewBox=%270%200%2016%2016%27%3e%3cpath%20stroke=%27white%27%20stroke-linecap=%27round%27%20stroke-linejoin=%27round%27%20stroke-width=%272%27%20d=%27M4%208h8%27/%3e%3c/svg%3e")] !bg-primary !border-primary',
                n && "cursor-not-allowed"
              )
            }
          ),
          i && /* @__PURE__ */ g.jsx("span", { className: J("text-sm select-none", n && "cursor-not-allowed"), children: i })
        ]
      }
    );
  }
);
nD.displayName = "Checkbox";
const rD = ({
  className: e = "",
  enabled: t = !1,
  onChange: n,
  isDisabled: r = !1,
  label: s
}) => /* @__PURE__ */ g.jsxs(
  "div",
  {
    className: J(
      "flex items-center",
      e,
      r && "pointer-events-none !cursor-not-allowed"
    ),
    children: [
      /* @__PURE__ */ g.jsx(
        $1,
        {
          checked: t,
          onChange: n,
          disabled: r,
          className: J(
            "group relative bg-light-3-tint inline-flex h-[16px] w-[28px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out",
            "hover:bg-light-3",
            "focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75",
            t && "!bg-fo-accent hover:!bg-fo-accent",
            r && "opacity-50 hover:!bg-light-3-tint",
            t && r && "hover:!bg-fo-accent"
          ),
          children: /* @__PURE__ */ g.jsx(
            "span",
            {
              "aria-hidden": "true",
              className: J(
                "pointer-events-none translate-x-0 inline-block h-[12px] w-[12px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out",
                "group-hover:bg-fo-accent-light",
                t && "translate-x-3"
              )
            }
          )
        }
      ),
      /* @__PURE__ */ g.jsx(
        "label",
        {
          className: J(
            "ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer truncate",
            r && "!cursor-not-allowed"
          ),
          onClick: n,
          children: s
        }
      )
    ]
  }
), kN = ({
  enabled: e,
  onChange: t,
  label: n,
  disabled: r = !1
}) => /* @__PURE__ */ g.jsxs("div", { className: "flex items-center justify-start gap-[8px]", children: [
  /* @__PURE__ */ g.jsx(rD, { isDisabled: r, enabled: e, onChange: t }),
  /* @__PURE__ */ g.jsx("p", { className: J("text-[14px]", r && "opacity-30"), children: n })
] }), DN = ({
  className: e = "",
  onShowAllClick: t,
  onCloseClick: n,
  children: r,
  label: s,
  buttonLabel: i
}) => /* @__PURE__ */ g.jsxs(
  "div",
  {
    className: J(
      "z-10 fixed right-0 top-0 bg-white w-[286px] shadow-md cursor-pointer h-screen overflow-y-auto",
      e
    ),
    children: [
      /* @__PURE__ */ g.jsxs("div", { className: "flex items-center justify-between border-b border-light-3-tint px-[20px] py-[24px]", children: [
        /* @__PURE__ */ g.jsx("p", { className: "text-[20px] font-semibold truncate", children: s || "Columns" }),
        /* @__PURE__ */ g.jsx(
          "button",
          {
            onClick: n,
            className: "hover:bg-light-4-tint rounded-full p-[6px] text-dark transition-all duration-100 outline-0",
            children: /* @__PURE__ */ g.jsx(Bo, { className: "h-7 w-7", "aria-hidden": "true" })
          }
        )
      ] }),
      /* @__PURE__ */ g.jsxs("div", { className: " flex flex-col px-[20px] py-[18px] gap-[10px]", children: [
        r,
        /* @__PURE__ */ g.jsx(
          tD,
          {
            className: "mt-[35px] !bg-light-4-tint !border-light-4-tint hover:!bg-light-3-tint hover:!border-light-3-tint",
            label: i || "Show All",
            onClick: t
          }
        )
      ] })
    ]
  }
);
var Nv = { exports: {} };
(function(e, t) {
  (function(n, r) {
    e.exports = r();
  })(wy, function() {
    var n = 1e3, r = 6e4, s = 36e5, i = "millisecond", o = "second", a = "minute", l = "hour", u = "day", c = "week", d = "month", f = "quarter", m = "year", p = "date", h = "Invalid Date", _ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, v = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(H) {
      var A = ["th", "st", "nd", "rd"], C = H % 100;
      return "[" + H + (A[(C - 20) % 10] || A[C] || A[0]) + "]";
    } }, y = function(H, A, C) {
      var O = String(H);
      return !O || O.length >= A ? H : "" + Array(A + 1 - O.length).join(C) + H;
    }, x = { s: y, z: function(H) {
      var A = -H.utcOffset(), C = Math.abs(A), O = Math.floor(C / 60), L = C % 60;
      return (A <= 0 ? "+" : "-") + y(O, 2, "0") + ":" + y(L, 2, "0");
    }, m: function H(A, C) {
      if (A.date() < C.date()) return -H(C, A);
      var O = 12 * (C.year() - A.year()) + (C.month() - A.month()), L = A.clone().add(O, d), j = C - L < 0, B = A.clone().add(O + (j ? -1 : 1), d);
      return +(-(O + (C - L) / (j ? L - B : B - L)) || 0);
    }, a: function(H) {
      return H < 0 ? Math.ceil(H) || 0 : Math.floor(H);
    }, p: function(H) {
      return { M: d, y: m, w: c, d: u, D: p, h: l, m: a, s: o, ms: i, Q: f }[H] || String(H || "").toLowerCase().replace(/s$/, "");
    }, u: function(H) {
      return H === void 0;
    } }, w = "en", k = {};
    k[w] = M;
    var D = "$isDayjsObject", S = function(H) {
      return H instanceof I || !(!H || !H[D]);
    }, N = function H(A, C, O) {
      var L;
      if (!A) return w;
      if (typeof A == "string") {
        var j = A.toLowerCase();
        k[j] && (L = j), C && (k[j] = C, L = j);
        var B = A.split("-");
        if (!L && B.length > 1) return H(B[0]);
      } else {
        var E = A.name;
        k[E] = A, L = E;
      }
      return !O && L && (w = L), L || !O && w;
    }, Y = function(H, A) {
      if (S(H)) return H.clone();
      var C = typeof A == "object" ? A : {};
      return C.date = H, C.args = arguments, new I(C);
    }, $ = x;
    $.l = N, $.i = S, $.w = function(H, A) {
      return Y(H, { locale: A.$L, utc: A.$u, x: A.$x, $offset: A.$offset });
    };
    var I = function() {
      function H(C) {
        this.$L = N(C.locale, null, !0), this.parse(C), this.$x = this.$x || C.x || {}, this[D] = !0;
      }
      var A = H.prototype;
      return A.parse = function(C) {
        this.$d = function(O) {
          var L = O.date, j = O.utc;
          if (L === null) return /* @__PURE__ */ new Date(NaN);
          if ($.u(L)) return /* @__PURE__ */ new Date();
          if (L instanceof Date) return new Date(L);
          if (typeof L == "string" && !/Z$/i.test(L)) {
            var B = L.match(_);
            if (B) {
              var E = B[2] - 1 || 0, R = (B[7] || "0").substring(0, 3);
              return j ? new Date(Date.UTC(B[1], E, B[3] || 1, B[4] || 0, B[5] || 0, B[6] || 0, R)) : new Date(B[1], E, B[3] || 1, B[4] || 0, B[5] || 0, B[6] || 0, R);
            }
          }
          return new Date(L);
        }(C), this.init();
      }, A.init = function() {
        var C = this.$d;
        this.$y = C.getFullYear(), this.$M = C.getMonth(), this.$D = C.getDate(), this.$W = C.getDay(), this.$H = C.getHours(), this.$m = C.getMinutes(), this.$s = C.getSeconds(), this.$ms = C.getMilliseconds();
      }, A.$utils = function() {
        return $;
      }, A.isValid = function() {
        return this.$d.toString() !== h;
      }, A.isSame = function(C, O) {
        var L = Y(C);
        return this.startOf(O) <= L && L <= this.endOf(O);
      }, A.isAfter = function(C, O) {
        return Y(C) < this.startOf(O);
      }, A.isBefore = function(C, O) {
        return this.endOf(O) < Y(C);
      }, A.$g = function(C, O, L) {
        return $.u(C) ? this[O] : this.set(L, C);
      }, A.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, A.valueOf = function() {
        return this.$d.getTime();
      }, A.startOf = function(C, O) {
        var L = this, j = !!$.u(O) || O, B = $.p(C), E = function(se, he) {
          var le = $.w(L.$u ? Date.UTC(L.$y, he, se) : new Date(L.$y, he, se), L);
          return j ? le : le.endOf(u);
        }, R = function(se, he) {
          return $.w(L.toDate()[se].apply(L.toDate("s"), (j ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(he)), L);
        }, z = this.$W, K = this.$M, ne = this.$D, G = "set" + (this.$u ? "UTC" : "");
        switch (B) {
          case m:
            return j ? E(1, 0) : E(31, 11);
          case d:
            return j ? E(1, K) : E(0, K + 1);
          case c:
            var W = this.$locale().weekStart || 0, Q = (z < W ? z + 7 : z) - W;
            return E(j ? ne - Q : ne + (6 - Q), K);
          case u:
          case p:
            return R(G + "Hours", 0);
          case l:
            return R(G + "Minutes", 1);
          case a:
            return R(G + "Seconds", 2);
          case o:
            return R(G + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, A.endOf = function(C) {
        return this.startOf(C, !1);
      }, A.$set = function(C, O) {
        var L, j = $.p(C), B = "set" + (this.$u ? "UTC" : ""), E = (L = {}, L[u] = B + "Date", L[p] = B + "Date", L[d] = B + "Month", L[m] = B + "FullYear", L[l] = B + "Hours", L[a] = B + "Minutes", L[o] = B + "Seconds", L[i] = B + "Milliseconds", L)[j], R = j === u ? this.$D + (O - this.$W) : O;
        if (j === d || j === m) {
          var z = this.clone().set(p, 1);
          z.$d[E](R), z.init(), this.$d = z.set(p, Math.min(this.$D, z.daysInMonth())).$d;
        } else E && this.$d[E](R);
        return this.init(), this;
      }, A.set = function(C, O) {
        return this.clone().$set(C, O);
      }, A.get = function(C) {
        return this[$.p(C)]();
      }, A.add = function(C, O) {
        var L, j = this;
        C = Number(C);
        var B = $.p(O), E = function(K) {
          var ne = Y(j);
          return $.w(ne.date(ne.date() + Math.round(K * C)), j);
        };
        if (B === d) return this.set(d, this.$M + C);
        if (B === m) return this.set(m, this.$y + C);
        if (B === u) return E(1);
        if (B === c) return E(7);
        var R = (L = {}, L[a] = r, L[l] = s, L[o] = n, L)[B] || 1, z = this.$d.getTime() + C * R;
        return $.w(z, this);
      }, A.subtract = function(C, O) {
        return this.add(-1 * C, O);
      }, A.format = function(C) {
        var O = this, L = this.$locale();
        if (!this.isValid()) return L.invalidDate || h;
        var j = C || "YYYY-MM-DDTHH:mm:ssZ", B = $.z(this), E = this.$H, R = this.$m, z = this.$M, K = L.weekdays, ne = L.months, G = L.meridiem, W = function(he, le, Ce, Xe) {
          return he && (he[le] || he(O, j)) || Ce[le].slice(0, Xe);
        }, Q = function(he) {
          return $.s(E % 12 || 12, he, "0");
        }, se = G || function(he, le, Ce) {
          var Xe = he < 12 ? "AM" : "PM";
          return Ce ? Xe.toLowerCase() : Xe;
        };
        return j.replace(v, function(he, le) {
          return le || function(Ce) {
            switch (Ce) {
              case "YY":
                return String(O.$y).slice(-2);
              case "YYYY":
                return $.s(O.$y, 4, "0");
              case "M":
                return z + 1;
              case "MM":
                return $.s(z + 1, 2, "0");
              case "MMM":
                return W(L.monthsShort, z, ne, 3);
              case "MMMM":
                return W(ne, z);
              case "D":
                return O.$D;
              case "DD":
                return $.s(O.$D, 2, "0");
              case "d":
                return String(O.$W);
              case "dd":
                return W(L.weekdaysMin, O.$W, K, 2);
              case "ddd":
                return W(L.weekdaysShort, O.$W, K, 3);
              case "dddd":
                return K[O.$W];
              case "H":
                return String(E);
              case "HH":
                return $.s(E, 2, "0");
              case "h":
                return Q(1);
              case "hh":
                return Q(2);
              case "a":
                return se(E, R, !0);
              case "A":
                return se(E, R, !1);
              case "m":
                return String(R);
              case "mm":
                return $.s(R, 2, "0");
              case "s":
                return String(O.$s);
              case "ss":
                return $.s(O.$s, 2, "0");
              case "SSS":
                return $.s(O.$ms, 3, "0");
              case "Z":
                return B;
            }
            return null;
          }(he) || B.replace(":", "");
        });
      }, A.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, A.diff = function(C, O, L) {
        var j, B = this, E = $.p(O), R = Y(C), z = (R.utcOffset() - this.utcOffset()) * r, K = this - R, ne = function() {
          return $.m(B, R);
        };
        switch (E) {
          case m:
            j = ne() / 12;
            break;
          case d:
            j = ne();
            break;
          case f:
            j = ne() / 3;
            break;
          case c:
            j = (K - z) / 6048e5;
            break;
          case u:
            j = (K - z) / 864e5;
            break;
          case l:
            j = K / s;
            break;
          case a:
            j = K / r;
            break;
          case o:
            j = K / n;
            break;
          default:
            j = K;
        }
        return L ? j : $.a(j);
      }, A.daysInMonth = function() {
        return this.endOf(d).$D;
      }, A.$locale = function() {
        return k[this.$L];
      }, A.locale = function(C, O) {
        if (!C) return this.$L;
        var L = this.clone(), j = N(C, O, !0);
        return j && (L.$L = j), L;
      }, A.clone = function() {
        return $.w(this.$d, this);
      }, A.toDate = function() {
        return new Date(this.valueOf());
      }, A.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, A.toISOString = function() {
        return this.$d.toISOString();
      }, A.toString = function() {
        return this.$d.toUTCString();
      }, H;
    }(), U = I.prototype;
    return Y.prototype = U, [["$ms", i], ["$s", o], ["$m", a], ["$H", l], ["$W", u], ["$M", d], ["$y", m], ["$D", p]].forEach(function(H) {
      U[H[1]] = function(A) {
        return this.$g(A, H[0], H[1]);
      };
    }), Y.extend = function(H, A) {
      return H.$i || (H(A, I, Y), H.$i = !0), Y;
    }, Y.locale = N, Y.isDayjs = S, Y.unix = function(H) {
      return Y(1e3 * H);
    }, Y.en = k[w], Y.Ls = k, Y.p = {}, Y;
  });
})(Nv);
var oD = Nv.exports;
const P = /* @__PURE__ */ mp(oD);
function V(e, t) {
  return t.forEach(function(n) {
    n && typeof n != "string" && !Array.isArray(n) && Object.keys(n).forEach(function(r) {
      if (r !== "default" && !(r in e)) {
        var s = Object.getOwnPropertyDescriptor(n, r);
        Object.defineProperty(e, r, s.get ? s : {
          enumerable: !0,
          get: function() {
            return n[r];
          }
        });
      }
    });
  }), Object.freeze(e);
}
const ld = "en", ud = "YYYY-MM-DD", sD = "sun", iD = [0, 1, 2, 3, 4, 5, 6], aD = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], lD = 42, at = ge({
  input: void 0,
  accentColor: "",
  calendarContainer: null,
  arrowContainer: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  hideDatepicker: () => {
  },
  period: { start: null, end: null },
  // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
  changePeriod: (e) => {
  },
  dayHover: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
  changeDayHover: (e) => {
  },
  inputText: "",
  // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
  changeInputText: (e) => {
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
  updateFirstDate: (e) => {
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
  changeDatepickerValue: (e, t) => {
  },
  showFooter: !0,
  value: null,
  i18n: ld,
  disabled: !1,
  inputClassName: "",
  containerClassName: "",
  toggleClassName: "",
  readOnly: !1,
  displayFormat: ud,
  minDate: null,
  maxDate: null,
  disabledDates: null,
  inputId: void 0,
  inputName: void 0,
  startWeekOn: sD,
  toggleIcon: void 0,
  classNames: void 0,
  invalid: !1,
  emptyLabel: "",
  fillLabel: "",
  invalidColor: "",
  calendarColors: {
    disabled: "",
    text: "",
    hoverBgClass: "",
    activeText: "",
    background: "",
    border: "",
    otherMonth: ""
  }
});
function uD(...e) {
  return e.filter(Boolean).join(" ");
}
function Iv(e = 0, t = 0) {
  const n = [];
  for (let r = e; r <= t; r++)
    n.push(r);
  return n;
}
function cD(e, t = 3) {
  return e.slice(0, t);
}
function dD(e) {
  return `${e[0].toUpperCase()}${e.slice(1, e.length)}`;
}
function Be(e, t = ud) {
  return e.format(t);
}
function fD(e) {
  return {
    ddd: Be(P(e).startOf("month"), "ddd"),
    basic: Be(P(e).startOf("month")),
    object: P(e).startOf("month")
  };
}
function cd(e) {
  return isNaN(P(e).daysInMonth()) ? [] : [...Iv(1, P(e).daysInMonth())];
}
function jt(e) {
  return e.date(1).hour(0).minute(0).second(0).month(e.month() + 1);
}
function vn(e) {
  return e.date(1).hour(0).minute(0).second(0).month(e.month() - 1);
}
function mD(e = [], t = 0) {
  return e.slice(0, t);
}
function pD(e = [], t = 0) {
  const n = [];
  if (Array.isArray(e) && t > 0) {
    if (t >= e.length)
      return e;
    let r = e.length - 1;
    for (let s = 0; s < t; s++)
      n.push(e[r]), r--;
  }
  return n.reverse();
}
function hD(e, t) {
  let n = 0, r = 0;
  if (t)
    switch (t) {
      case "mon":
        r = 6;
        break;
      case "tue":
        r = 5;
        break;
      case "wed":
        r = 4;
        break;
      case "thu":
        r = 3;
        break;
      case "fri":
        r = 2;
        break;
      case "sat":
        r = 1;
        break;
      case "sun":
        r = 0;
        break;
    }
  return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].forEach((s, i) => {
    s.includes(e) && (n = (i + r) % 7);
  }), n;
}
function _D(e, t = 0) {
  return pD(cd(e), t);
}
function vD(e, t = 0) {
  return mD(cd(e), t);
}
function dd(e = ld) {
  switch (e) {
    case "af":
      Promise.resolve().then(function() {
        return RD;
      });
      break;
    case "am":
      Promise.resolve().then(function() {
        return FD;
      });
      break;
    case "ar-dz":
      Promise.resolve().then(function() {
        return BD;
      });
      break;
    case "ar-iq":
      Promise.resolve().then(function() {
        return KD;
      });
      break;
    case "ar-kw":
      Promise.resolve().then(function() {
        return qD;
      });
      break;
    case "ar-ly":
      Promise.resolve().then(function() {
        return QD;
      });
      break;
    case "ar-ma":
      Promise.resolve().then(function() {
        return nT;
      });
      break;
    case "ar-sa":
      Promise.resolve().then(function() {
        return sT;
      });
      break;
    case "ar-tn":
      Promise.resolve().then(function() {
        return lT;
      });
      break;
    case "ar":
      Promise.resolve().then(function() {
        return dT;
      });
      break;
    case "az":
      Promise.resolve().then(function() {
        return pT;
      });
      break;
    case "bg":
      Promise.resolve().then(function() {
        return vT;
      });
      break;
    case "bi":
      Promise.resolve().then(function() {
        return MT;
      });
      break;
    case "bm":
      Promise.resolve().then(function() {
        return wT;
      });
      break;
    case "bn-bd":
      Promise.resolve().then(function() {
        return ST;
      });
      break;
    case "bn":
      Promise.resolve().then(function() {
        return TT;
      });
      break;
    case "bo":
      Promise.resolve().then(function() {
        return PT;
      });
      break;
    case "br":
      Promise.resolve().then(function() {
        return $T;
      });
      break;
    case "ca":
      Promise.resolve().then(function() {
        return RT;
      });
      break;
    case "cs":
      Promise.resolve().then(function() {
        return FT;
      });
      break;
    case "cv":
      Promise.resolve().then(function() {
        return BT;
      });
      break;
    case "cy":
      Promise.resolve().then(function() {
        return KT;
      });
      break;
    case "da":
      Promise.resolve().then(function() {
        return qT;
      });
      break;
    case "de-at":
      Promise.resolve().then(function() {
        return QT;
      });
      break;
    case "de-ch":
      Promise.resolve().then(function() {
        return nE;
      });
      break;
    case "de":
      Promise.resolve().then(function() {
        return sE;
      });
      break;
    case "dv":
      Promise.resolve().then(function() {
        return lE;
      });
      break;
    case "el":
      Promise.resolve().then(function() {
        return dE;
      });
      break;
    case "en-au":
      Promise.resolve().then(function() {
        return pE;
      });
      break;
    case "en-gb":
      Promise.resolve().then(function() {
        return vE;
      });
      break;
    case "en-ie":
      Promise.resolve().then(function() {
        return ME;
      });
      break;
    case "en-il":
      Promise.resolve().then(function() {
        return wE;
      });
      break;
    case "en-in":
      Promise.resolve().then(function() {
        return SE;
      });
      break;
    case "en-nz":
      Promise.resolve().then(function() {
        return TE;
      });
      break;
    case "en-sg":
      Promise.resolve().then(function() {
        return PE;
      });
      break;
    case "en-tt":
      Promise.resolve().then(function() {
        return $E;
      });
      break;
    case "en":
      Promise.resolve().then(function() {
        return Im;
      });
      break;
    case "eo":
      Promise.resolve().then(function() {
        return IE;
      });
      break;
    case "es-do":
      Promise.resolve().then(function() {
        return zE;
      });
      break;
    case "es-mx":
      Promise.resolve().then(function() {
        return UE;
      });
      break;
    case "es-pr":
      Promise.resolve().then(function() {
        return JE;
      });
      break;
    case "es-us":
      Promise.resolve().then(function() {
        return ZE;
      });
      break;
    case "es":
      Promise.resolve().then(function() {
        return tj;
      });
      break;
    case "et":
      Promise.resolve().then(function() {
        return oj;
      });
      break;
    case "eu":
      Promise.resolve().then(function() {
        return aj;
      });
      break;
    case "fa":
      Promise.resolve().then(function() {
        return cj;
      });
      break;
    case "fi":
      Promise.resolve().then(function() {
        return mj;
      });
      break;
    case "fo":
      Promise.resolve().then(function() {
        return _j;
      });
      break;
    case "fr-ch":
      Promise.resolve().then(function() {
        return yj;
      });
      break;
    case "fr":
      Promise.resolve().then(function() {
        return xj;
      });
      break;
    case "fy":
      Promise.resolve().then(function() {
        return Lj;
      });
      break;
    case "ga":
      Promise.resolve().then(function() {
        return Dj;
      });
      break;
    case "gd":
      Promise.resolve().then(function() {
        return jj;
      });
      break;
    case "gl":
      Promise.resolve().then(function() {
        return Cj;
      });
      break;
    case "gom-latn":
      Promise.resolve().then(function() {
        return Oj;
      });
      break;
    case "gu":
      Promise.resolve().then(function() {
        return Ij;
      });
      break;
    case "he":
      Promise.resolve().then(function() {
        return zj;
      });
      break;
    case "hi":
      Promise.resolve().then(function() {
        return Uj;
      });
      break;
    case "hr":
      Promise.resolve().then(function() {
        return Jj;
      });
      break;
    case "ht":
      Promise.resolve().then(function() {
        return Zj;
      });
      break;
    case "hu":
      Promise.resolve().then(function() {
        return tP;
      });
      break;
    case "hy-am":
      Promise.resolve().then(function() {
        return oP;
      });
      break;
    case "id":
      Promise.resolve().then(function() {
        return aP;
      });
      break;
    case "is":
      Promise.resolve().then(function() {
        return cP;
      });
      break;
    case "it-ch":
      Promise.resolve().then(function() {
        return mP;
      });
      break;
    case "it":
      Promise.resolve().then(function() {
        return _P;
      });
      break;
    case "ja":
      Promise.resolve().then(function() {
        return yP;
      });
      break;
    case "jv":
      Promise.resolve().then(function() {
        return xP;
      });
      break;
    case "ka":
      Promise.resolve().then(function() {
        return LP;
      });
      break;
    case "kk":
      Promise.resolve().then(function() {
        return DP;
      });
      break;
    case "ko":
      Promise.resolve().then(function() {
        return jP;
      });
      break;
    case "ku":
      Promise.resolve().then(function() {
        return CP;
      });
      break;
    case "ky":
      Promise.resolve().then(function() {
        return OP;
      });
      break;
    case "lb":
      Promise.resolve().then(function() {
        return IP;
      });
      break;
    case "lo":
      Promise.resolve().then(function() {
        return zP;
      });
      break;
    case "lt":
      Promise.resolve().then(function() {
        return UP;
      });
      break;
    case "lv":
      Promise.resolve().then(function() {
        return JP;
      });
      break;
    case "me":
      Promise.resolve().then(function() {
        return ZP;
      });
      break;
    case "mi":
      Promise.resolve().then(function() {
        return tA;
      });
      break;
    case "mk":
      Promise.resolve().then(function() {
        return oA;
      });
      break;
    case "ml":
      Promise.resolve().then(function() {
        return aA;
      });
      break;
    case "mn":
      Promise.resolve().then(function() {
        return cA;
      });
      break;
    case "ms-my":
      Promise.resolve().then(function() {
        return mA;
      });
      break;
    case "ms":
      Promise.resolve().then(function() {
        return _A;
      });
      break;
    case "mt":
      Promise.resolve().then(function() {
        return yA;
      });
      break;
    case "my":
      Promise.resolve().then(function() {
        return xA;
      });
      break;
    case "nb":
      Promise.resolve().then(function() {
        return LA;
      });
      break;
    case "ne":
      Promise.resolve().then(function() {
        return DA;
      });
      break;
    case "nl-be":
      Promise.resolve().then(function() {
        return jA;
      });
      break;
    case "nl":
      Promise.resolve().then(function() {
        return CA;
      });
      break;
    case "nn":
      Promise.resolve().then(function() {
        return OA;
      });
      break;
    case "oc-lnc":
      Promise.resolve().then(function() {
        return IA;
      });
      break;
    case "pa-in":
      Promise.resolve().then(function() {
        return zA;
      });
      break;
    case "pl":
      Promise.resolve().then(function() {
        return UA;
      });
      break;
    case "pt-br":
      Promise.resolve().then(function() {
        return JA;
      });
      break;
    case "pt":
      Promise.resolve().then(function() {
        return ZA;
      });
      break;
    case "rn":
      Promise.resolve().then(function() {
        return tC;
      });
      break;
    case "ro":
      Promise.resolve().then(function() {
        return oC;
      });
      break;
    case "ru":
      Promise.resolve().then(function() {
        return aC;
      });
      break;
    case "rw":
      Promise.resolve().then(function() {
        return cC;
      });
      break;
    case "sd":
      Promise.resolve().then(function() {
        return mC;
      });
      break;
    case "se":
      Promise.resolve().then(function() {
        return _C;
      });
      break;
    case "si":
      Promise.resolve().then(function() {
        return yC;
      });
      break;
    case "sk":
      Promise.resolve().then(function() {
        return xC;
      });
      break;
    case "sl":
      Promise.resolve().then(function() {
        return LC;
      });
      break;
    case "sq":
      Promise.resolve().then(function() {
        return DC;
      });
      break;
    case "sr":
      Promise.resolve().then(function() {
        return jC;
      });
      break;
    case "sr-cyrl":
      Promise.resolve().then(function() {
        return CC;
      });
      break;
    case "ss":
      Promise.resolve().then(function() {
        return OC;
      });
      break;
    case "sv-fi":
      Promise.resolve().then(function() {
        return IC;
      });
      break;
    case "sv":
      Promise.resolve().then(function() {
        return zC;
      });
      break;
    case "sw":
      Promise.resolve().then(function() {
        return UC;
      });
      break;
    case "ta":
      Promise.resolve().then(function() {
        return JC;
      });
      break;
    case "te":
      Promise.resolve().then(function() {
        return ZC;
      });
      break;
    case "tg":
      Promise.resolve().then(function() {
        return t$;
      });
      break;
    case "th":
      Promise.resolve().then(function() {
        return o$;
      });
      break;
    case "tk":
      Promise.resolve().then(function() {
        return a$;
      });
      break;
    case "tl-ph":
      Promise.resolve().then(function() {
        return c$;
      });
      break;
    case "tlh":
      Promise.resolve().then(function() {
        return m$;
      });
      break;
    case "tr":
      Promise.resolve().then(function() {
        return _$;
      });
      break;
    case "tzl":
      Promise.resolve().then(function() {
        return y$;
      });
      break;
    case "tzm-latn":
      Promise.resolve().then(function() {
        return x$;
      });
      break;
    case "tzm":
      Promise.resolve().then(function() {
        return L$;
      });
      break;
    case "ug-cn":
      Promise.resolve().then(function() {
        return D$;
      });
      break;
    case "uk":
      Promise.resolve().then(function() {
        return j$;
      });
      break;
    case "ur":
      Promise.resolve().then(function() {
        return C$;
      });
      break;
    case "uz-latn":
      Promise.resolve().then(function() {
        return O$;
      });
      break;
    case "uz":
      Promise.resolve().then(function() {
        return I$;
      });
      break;
    case "vi":
      Promise.resolve().then(function() {
        return z$;
      });
      break;
    case "x-pseudo":
      Promise.resolve().then(function() {
        return U$;
      });
      break;
    case "yo":
      Promise.resolve().then(function() {
        return J$;
      });
      break;
    case "zh-cn":
      Promise.resolve().then(function() {
        return Z$;
      });
      break;
    case "zh-hk":
      Promise.resolve().then(function() {
        return tH;
      });
      break;
    case "zh-tw":
      Promise.resolve().then(function() {
        return oH;
      });
      break;
    case "zh":
      Promise.resolve().then(function() {
        return aH;
      });
      break;
    default:
      Promise.resolve().then(function() {
        return Im;
      });
      break;
  }
}
const gD = ({ className: e = "w-6 h-6" }) => {
  const { calendarColors: t } = re(at);
  return T.createElement(
    "svg",
    { className: e, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor" },
    T.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M15.75 19.5L8.25 12l7.5-7.5", style: { color: t == null ? void 0 : t.text } })
  );
}, yD = ({ className: e = "w-6 h-6" }) => {
  const { calendarColors: t } = re(at);
  return T.createElement(
    "svg",
    { className: e, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", transform: "rotate(90)" },
    T.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M15.75 19.5L8.25 12l7.5-7.5", style: { color: t == null ? void 0 : t.text } })
  );
}, MD = ({ className: e = "w-6 h-6" }) => {
  const { calendarColors: t } = re(at);
  return T.createElement(
    "svg",
    { className: e, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", transform: "rotate(270)" },
    T.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M15.75 19.5L8.25 12l7.5-7.5", style: { color: t == null ? void 0 : t.text } })
  );
}, bD = ({ className: e = "w-6 h-6" }) => {
  const { calendarColors: t } = re(at);
  return T.createElement(
    "svg",
    { className: e, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor" },
    T.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M8.25 4.5l7.5 7.5-7.5 7.5", style: { color: t == null ? void 0 : t.text } })
  );
};
T.forwardRef((e, t) => T.createElement("div", { ref: t, className: "absolute z-20 h-4 w-4 rotate-45 mt-0.5 ml-[1.2rem] border-l border-t border-gray-300 bg-white dark:bg-slate-800 dark:border-slate-600" }));
const xD = ({ children: e, onClick: t, roundedFull: n = !1, selected: r = !1 }) => {
  const { accentColor: s, calendarColors: i } = re(at), o = X(() => `${n ? "rounded-full p-[0.45rem] focus:ring-0" : "w-full text-[14px] tracking-wide select-none px-3 rounded-md focus:ring-1"}, ${i == null ? void 0 : i.hoverBgClass}`, [i == null ? void 0 : i.hoverBgClass, n]), a = {
    color: i == null ? void 0 : i.activeText,
    backgroundColor: s
  }, l = {
    color: i == null ? void 0 : i.text
  };
  return T.createElement("button", { type: "button", className: o(), onClick: t, style: r ? a : l }, e);
};
var F = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {};
function wD(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ju = {}, YD = {
  get exports() {
    return ju;
  },
  set exports(e) {
    ju = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r();
  })(F, function() {
    return function(n, r, s) {
      r.prototype.isBetween = function(i, o, a, l) {
        var u = s(i), c = s(o), d = (l = l || "()")[0] === "(", f = l[1] === ")";
        return (d ? this.isAfter(u, a) : !this.isBefore(u, a)) && (f ? this.isBefore(c, a) : !this.isAfter(c, a)) || (d ? this.isBefore(u, a) : !this.isAfter(u, a)) && (f ? this.isAfter(c, a) : !this.isBefore(c, a));
      };
    };
  });
})(YD);
var LD = ju;
P.extend(LD);
const SD = ({ calendarData: e, onClickPreviousDays: t, onClickDay: n, onClickNextDays: r }) => {
  const { period: s, minDate: i, maxDate: o, disabledDates: a, accentColor: l, calendarColors: u } = re(at), c = X((v) => {
    const M = `${e.date.year()}-${e.date.month() + 1}-${v}`;
    return {
      active: P(M).isSame(s.start) || P(M).isSame(s.end),
      className: "text-white font-medium rounded-[6px]"
    };
  }, [e.date, s.end, s.start]), d = X(() => u == null ? void 0 : u.hoverBgClass, [u == null ? void 0 : u.hoverBgClass]), f = X((v, M) => {
    if (!i)
      return !1;
    const x = {
      previous: vn(e.date),
      current: e.date,
      next: jt(e.date)
    }[M], w = `${x.year()}-${x.month() + 1}-${v >= 10 ? v : "0" + v}`;
    return P(w).isSame(P(i)) ? !1 : P(w).isBefore(P(i));
  }, [e.date, i]), m = X((v, M) => {
    if (!o)
      return !1;
    const x = {
      previous: vn(e.date),
      current: e.date,
      next: jt(e.date)
    }[M], w = `${x.year()}-${x.month() + 1}-${v >= 10 ? v : "0" + v}`;
    return P(w).isSame(o) ? !1 : P(w).isAfter(P(o));
  }, [e.date, o]), p = X((v, M) => {
    if (f(v, M) || m(v, M))
      return !0;
    const x = {
      previous: vn(e.date),
      current: e.date,
      next: jt(e.date)
    }[M], w = `${x.year()}-${x.month() + 1}-${v >= 10 ? v : "0" + v}`;
    if (!a || Array.isArray(a) && !a.length)
      return !1;
    let k = 0;
    return a == null || a.forEach((D) => {
      P(w).isAfter(D.startDate) && P(w).isBefore(D.endDate) && k++, (P(w).isSame(D.startDate) || P(w).isSame(D.endDate)) && k++;
    }), k > 0;
  }, [e.date, f, m, a]), h = X((v) => uD("flex items-center justify-center w-[40px] h-[40px] lg:w-[40px] lg:h-[40px] rounded-[6px]", c(v).active ? c(v).className : d()), [c, d]), _ = X((v, M) => {
    const y = {
      color: u == null ? void 0 : u.activeText,
      backgroundColor: l
    }, x = {
      color: l
    }, w = `${e.date.year()}-${e.date.month() + 1}-${v >= 10 ? v : "0" + v}`;
    return c(v).active ? y : Be(P()) === Be(P(w)) ? x : p(v, M) ? {
      color: u == null ? void 0 : u.disabled
    } : { color: u == null ? void 0 : u.text };
  }, [
    u == null ? void 0 : u.activeText,
    u == null ? void 0 : u.disabled,
    u == null ? void 0 : u.text,
    l,
    e.date,
    c,
    p
  ]);
  return T.createElement(
    "div",
    { className: "grid grid-cols-7 gap-y-0.5 my-1" },
    e.days.previous.map((v, M) => T.createElement("button", { type: "button", key: M, disabled: p(v, "previous"), className: `flex items-center justify-center text-[14px] select-none w-[40px] h-[40px] lg:w-[40px] lg:h-[40px] rounded-[6px] ${u == null ? void 0 : u.hoverBgClass}`, onClick: () => t(v), style: {
      color: p(v, "previous") ? u == null ? void 0 : u.disabled : u == null ? void 0 : u.otherMonth,
      opacity: p(M, "next") ? 0.5 : 1
    } }, v)),
    e.days.current.map((v, M) => T.createElement("button", { type: "button", key: M, disabled: p(v, "current"), className: `text-[14px] select-none ${h(v)}`, onClick: () => {
      n(v);
    }, style: _(v, "current") }, v)),
    e.days.next.map((v, M) => T.createElement("button", { type: "button", key: M, disabled: p(M, "next"), className: `flex items-center text-[14px] justify-center w-[40px] h-[40px] lg:w-[40px] lg:h-[40px] select-none rounded-[6px] ${u == null ? void 0 : u.hoverBgClass}`, onClick: () => {
      r(v);
    }, style: {
      color: p(M, "next") ? u == null ? void 0 : u.disabled : u == null ? void 0 : u.otherMonth,
      opacity: p(M, "next") ? 0.5 : 1
    } }, v))
  );
};
var Pu = {}, kD = {
  get exports() {
    return Pu;
  },
  set exports(e) {
    Pu = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r();
  })(F, function() {
    var n = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, r = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, s = /\d\d/, i = /\d\d?/, o = /\d*[^-_:/,()\s\d]+/, a = {}, l = function(h) {
      return (h = +h) + (h > 68 ? 1900 : 2e3);
    }, u = function(h) {
      return function(_) {
        this[h] = +_;
      };
    }, c = [/[+-]\d\d:?(\d\d)?|Z/, function(h) {
      (this.zone || (this.zone = {})).offset = function(_) {
        if (!_ || _ === "Z") return 0;
        var v = _.match(/([+-]|\d\d)/g), M = 60 * v[1] + (+v[2] || 0);
        return M === 0 ? 0 : v[0] === "+" ? -M : M;
      }(h);
    }], d = function(h) {
      var _ = a[h];
      return _ && (_.indexOf ? _ : _.s.concat(_.f));
    }, f = function(h, _) {
      var v, M = a.meridiem;
      if (M) {
        for (var y = 1; y <= 24; y += 1) if (h.indexOf(M(y, 0, _)) > -1) {
          v = y > 12;
          break;
        }
      } else v = h === (_ ? "pm" : "PM");
      return v;
    }, m = { A: [o, function(h) {
      this.afternoon = f(h, !1);
    }], a: [o, function(h) {
      this.afternoon = f(h, !0);
    }], S: [/\d/, function(h) {
      this.milliseconds = 100 * +h;
    }], SS: [s, function(h) {
      this.milliseconds = 10 * +h;
    }], SSS: [/\d{3}/, function(h) {
      this.milliseconds = +h;
    }], s: [i, u("seconds")], ss: [i, u("seconds")], m: [i, u("minutes")], mm: [i, u("minutes")], H: [i, u("hours")], h: [i, u("hours")], HH: [i, u("hours")], hh: [i, u("hours")], D: [i, u("day")], DD: [s, u("day")], Do: [o, function(h) {
      var _ = a.ordinal, v = h.match(/\d+/);
      if (this.day = v[0], _) for (var M = 1; M <= 31; M += 1) _(M).replace(/\[|\]/g, "") === h && (this.day = M);
    }], M: [i, u("month")], MM: [s, u("month")], MMM: [o, function(h) {
      var _ = d("months"), v = (d("monthsShort") || _.map(function(M) {
        return M.slice(0, 3);
      })).indexOf(h) + 1;
      if (v < 1) throw new Error();
      this.month = v % 12 || v;
    }], MMMM: [o, function(h) {
      var _ = d("months").indexOf(h) + 1;
      if (_ < 1) throw new Error();
      this.month = _ % 12 || _;
    }], Y: [/[+-]?\d+/, u("year")], YY: [s, function(h) {
      this.year = l(h);
    }], YYYY: [/\d{4}/, u("year")], Z: c, ZZ: c };
    function p(h) {
      var _, v;
      _ = h, v = a && a.formats;
      for (var M = (h = _.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(N, Y, $) {
        var I = $ && $.toUpperCase();
        return Y || v[$] || n[$] || v[I].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(U, H, A) {
          return H || A.slice(1);
        });
      })).match(r), y = M.length, x = 0; x < y; x += 1) {
        var w = M[x], k = m[w], D = k && k[0], S = k && k[1];
        M[x] = S ? { regex: D, parser: S } : w.replace(/^\[|\]$/g, "");
      }
      return function(N) {
        for (var Y = {}, $ = 0, I = 0; $ < y; $ += 1) {
          var U = M[$];
          if (typeof U == "string") I += U.length;
          else {
            var H = U.regex, A = U.parser, C = N.slice(I), O = H.exec(C)[0];
            A.call(Y, O), N = N.replace(O, "");
          }
        }
        return function(L) {
          var j = L.afternoon;
          if (j !== void 0) {
            var B = L.hours;
            j ? B < 12 && (L.hours += 12) : B === 12 && (L.hours = 0), delete L.afternoon;
          }
        }(Y), Y;
      };
    }
    return function(h, _, v) {
      v.p.customParseFormat = !0, h && h.parseTwoDigitYear && (l = h.parseTwoDigitYear);
      var M = _.prototype, y = M.parse;
      M.parse = function(x) {
        var w = x.date, k = x.utc, D = x.args;
        this.$u = k;
        var S = D[1];
        if (typeof S == "string") {
          var N = D[2] === !0, Y = D[3] === !0, $ = N || Y, I = D[2];
          Y && (I = D[2]), a = this.$locale(), !N && I && (a = v.Ls[I]), this.$d = function(C, O, L) {
            try {
              if (["x", "X"].indexOf(O) > -1) return new Date((O === "X" ? 1e3 : 1) * C);
              var j = p(O)(C), B = j.year, E = j.month, R = j.day, z = j.hours, K = j.minutes, ne = j.seconds, G = j.milliseconds, W = j.zone, Q = /* @__PURE__ */ new Date(), se = R || (B || E ? 1 : Q.getDate()), he = B || Q.getFullYear(), le = 0;
              B && !E || (le = E > 0 ? E - 1 : Q.getMonth());
              var Ce = z || 0, Xe = K || 0, Vt = ne || 0, lt = G || 0;
              return W ? new Date(Date.UTC(he, le, se, Ce, Xe, Vt, lt + 60 * W.offset * 1e3)) : L ? new Date(Date.UTC(he, le, se, Ce, Xe, Vt, lt)) : new Date(he, le, se, Ce, Xe, Vt, lt);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(w, S, k), this.init(), I && I !== !0 && (this.$L = this.locale(I).$L), $ && w != this.format(S) && (this.$d = /* @__PURE__ */ new Date("")), a = {};
        } else if (S instanceof Array) for (var U = S.length, H = 1; H <= U; H += 1) {
          D[1] = S[H - 1];
          var A = v.apply(this, D);
          if (A.isValid()) {
            this.$d = A.$d, this.$L = A.$L, this.init();
            break;
          }
          H === U && (this.$d = /* @__PURE__ */ new Date(""));
        }
        else y.call(this, x);
      };
    };
  });
})(kD);
var DD = Pu;
const TD = ({ clickMonth: e }) => {
  const { i18n: t, inputText: n } = re(at);
  return dd(t), P.extend(DD), T.createElement("div", { className: "w-full grid grid-cols-4 text-black min-h-[180px] gap-[10px]" }, aD.map((r) => T.createElement(
    xD,
    { key: r, padding: "py-3", onClick: () => {
      e(r);
    }, selected: n ? r - 1 === P(n, "DD.MM.YYYY").month() : r - 1 === P().month() },
    T.createElement(T.Fragment, null, P(`2022-${r}-01`).locale(t).format("MMM"))
  )));
}, ED = () => {
  const { i18n: e, startWeekOn: t, calendarColors: n } = re(at);
  dd(e);
  const r = pe(() => {
    if (t)
      switch (t) {
        case "mon":
          return 1;
        case "tue":
          return 2;
        case "wed":
          return 3;
        case "thu":
          return 4;
        case "fri":
          return 5;
        case "sat":
          return 6;
        case "sun":
          return 0;
        default:
          return 0;
      }
    return 0;
  }, [t]);
  return T.createElement("div", { className: "grid grid-cols-7 py-2 mt-2 uppercase" }, iD.map((s) => T.createElement("div", { key: s, className: "tracking-wide font-[600] select-none text-[12px] text-center", style: { color: n == null ? void 0 : n.text } }, dD(cD(P(`2022-11-${6 + (s + r)}`).locale(e).format("ddd"))))));
}, jD = ({ selectedYear: e, startYear: t, clickYear: n }) => {
  const { accentColor: r, calendarColors: s } = re(at), i = {
    color: r
  }, o = {
    color: s == null ? void 0 : s.text
  };
  return T.createElement("div", { className: "w-full flex flex-row" }, Iv(t, t + 3).map((a, l) => T.createElement(
    "div",
    { key: l, onClick: () => {
      n(a);
    }, className: `cursor-pointer text-[14px] select-none text-[#707070] p-2 font-[600] rounded-[6px] ${s == null ? void 0 : s.hoverBgClass}`, style: a === e ? i : o },
    T.createElement(T.Fragment, null, a)
  )));
}, PD = ({ date: e, onClickPrevious: t, onClickNext: n, changeMonth: r, changeYear: s }) => {
  const { period: i, changePeriod: o, changeDayHover: a, changeDatepickerValue: l, hideDatepicker: u, asSingle: c, i18n: d, startWeekOn: f, input: m, calendarColors: p } = re(at);
  dd(d);
  const [h, _] = oe(!1), [v, M] = oe(e.year()), [y, x] = oe(e.year() - 3), w = X(() => _D(vn(e), hD(fD(e).ddd, f)), [e, f]), k = X(() => cd(Be(e)), [e]), D = X(() => vD(vn(e), lD - (w().length + k().length)), [k, e, w]), S = X((C) => {
    setTimeout(() => {
      r(C), _(!h);
    }, 250);
  }, [r, h]), N = X((C) => {
    s(C);
  }, [s]), Y = X((C) => {
    x(C + 1);
  }, []), $ = X((C) => {
    x(C - 1);
  }, []), I = X((C, O = e.month() + 1, L = e.year()) => {
    const j = `${L}-${O}-${C}`;
    let B, E = null;
    function R(z, K) {
      const ne = m == null ? void 0 : m.current;
      l({
        startDate: P(z).format("YYYY-MM-DD"),
        endDate: P(K).format("YYYY-MM-DD")
      }, ne), u();
    }
    if (i.start && i.end && (a && a(null), o({
      start: null,
      end: null
    })), !i.start && !i.end || i.start && i.end)
      !i.start && !i.end && a(j), B = j, c && (E = j, R(j, j));
    else if (i.start && !i.end) {
      const z = P(j).isSame(P(i.start)) || P(j).isAfter(P(i.start));
      B = z ? i.start : j, E = z ? j : i.start;
    } else {
      const z = P(j).isSame(P(i.end)) || P(j).isBefore(P(i.end));
      B = z ? j : i.start, E = z ? i.end : j;
    }
    E && B || o({
      start: B,
      end: E
    });
  }, [
    c,
    l,
    a,
    o,
    e,
    u,
    i.end,
    i.start,
    m
  ]), U = X((C) => {
    const O = vn(e);
    I(C, O.month() + 1, O.year()), t();
  }, [I, e, t]), H = X((C) => {
    const O = jt(e);
    I(C, O.month() + 1, O.year()), n();
  }, [I, e, n]);
  ue(() => {
    M(e.year());
  }, [e]);
  const A = pe(() => ({
    date: e,
    days: {
      previous: w(),
      current: k(),
      next: D()
    }
  }), [k, e, D, w]);
  return T.createElement(
    "div",
    { className: "w-full md:w-[297px] md:min-w-[297px]" },
    T.createElement(
      "div",
      { className: "flex items-center space-x-1.5 border-b px-2 py-1.5", style: { borderColor: p == null ? void 0 : p.border } },
      T.createElement(
        "div",
        { className: "flex flex-1 items-center justify-center" },
        T.createElement("div", { className: "w-full flex justify-center text-[20px] leading-[25px] select-none py-[5px] font-[600]", style: { color: p == null ? void 0 : p.text } }, A.date.locale(d).format("MMMM"))
      ),
      T.createElement(
        "div",
        { className: "absolute right-[20px] top-[29px]" },
        T.createElement("div", { onClick: () => {
          _(!h);
        }, className: "cursor-pointer" }, h ? T.createElement(yD, { className: "h-5 w-5" }) : T.createElement(MD, { className: "h-5 w-5" }))
      )
    ),
    h ? T.createElement(
      "div",
      { className: "px-0.5 sm:px-2 min-h-[303px] flex items-center" },
      T.createElement(TD, { clickMonth: S })
    ) : T.createElement("div", { className: "px-0.5 sm:px-2 min-h-[295px]" }, !h && T.createElement(
      T.Fragment,
      null,
      T.createElement(ED, null),
      T.createElement(SD, { calendarData: A, onClickPreviousDays: U, onClickDay: I, onClickNextDays: H })
    )),
    T.createElement(
      "div",
      { className: "flex items-center border-t px-2 py-1.5", style: { borderColor: p == null ? void 0 : p.border } },
      T.createElement(
        "div",
        { className: "flex flex-1 items-center justify-center" },
        T.createElement(
          "div",
          { className: "w-full flex justify-between leading-[25px] py-[10px]" },
          T.createElement(
            "div",
            { onClick: () => {
              $(y);
            }, className: "cursor-pointer" },
            T.createElement(gD, { className: "h-5 w-5 ml-[10px]" })
          ),
          T.createElement(
            "div",
            { onClick: () => {
              Y(y);
            }, className: "cursor-pointer" },
            T.createElement(bD, { className: "h-5 w-5 mr-[10px]" })
          )
        ),
        T.createElement(
          "div",
          { className: "absolute" },
          T.createElement(jD, { selectedYear: v, startYear: y, clickYear: N })
        )
      )
    )
  );
}, AD = (e) => {
  const { calendarContainer: t, arrowContainer: n, inputText: r, disabled: s, inputClassName: i, readOnly: o, inputId: a, inputName: l, classNames: u, invalid: c, emptyLabel: d, fillLabel: f, invalidColor: m, changeInputText: p } = re(at), h = q(null), _ = q(null), [v, M] = oe();
  ue(() => {
    h && e.setContextRef && typeof e.setContextRef == "function" && e.setContextRef(h);
  }, [e, h]);
  const y = X(() => {
    const Y = h.current;
    return Y && typeof u != "undefined" && typeof u.input == "function" ? u == null ? void 0 : u.input(Y) : `relative p-[10px] pl-[40px] w-full h-[40px] rounded-[3px] tracking-wide font-light text-sm placeholder-gray-400  border-[#C4C4C4] bg-white focus:border-fo-accent focus:ring-0  hover:bg-[#FFFFFF] hover:disabled:border-[#C4C4C4] hover:disabled:border-[#DDDDDD] disabled:border-[#C4C4C4] disabled:cursor-not-allowed disabled:bg-[#FFFFFF] active:ring-0 active:border-[#0493F2] active:border-2 ${typeof i == "string" ? i.replace("border-color", "border") : ""}`;
  }, [u, i]), x = X(() => {
    const Y = h.current;
    return Y && typeof u != "undefined" && typeof u.input == "function" ? u == null ? void 0 : u.input(Y) : `relative p-[10px] pl-[40px] w-full h-[40px] rounded-[3px] tracking-wide font-light text-sm placeholder-gray-400 bg-white focus:border-fo-accent focus:ring-0  hover:bg-[#FFFFFF] hover:disabled:border-[#C4C4C4] hover:disabled:border-[#DDDDDD] disabled:border-[#C4C4C4] disabled:cursor-not-allowed disabled:bg-[#FFFFFF] active:ring-0 active:border-[#0493F2] active:border-2 ${typeof i == "string" ? i.replace("hover-border", "border") : ""}`;
  }, [u, i]), w = X(() => {
    const Y = /text-(\[[^[\]]+\]|[\w-]+)/g;
    return i && (typeof i == "string" ? i : "").match(Y), "bg-red-500";
  }, [i]), k = X(() => {
    const Y = /icon-fill-(\[[^[\]]+\]|[\w-]+)/g, I = i ? (typeof i == "string" ? i : "").match(Y) : "";
    return I ? I.join(" ").replace("icon-", "") : "";
  }, [i]), D = X(() => {
    const Y = /icon-hover-fill-(\[[^[\]]+\]|[\w-]+)/g, I = i ? (typeof i == "string" ? i : "").match(Y) : "";
    return I ? I.join(" ").replace("icon-hover-", "") : "";
  }, [i]), S = X(() => {
    const Y = /hidden/g, I = i ? (typeof i == "string" ? i : "").match(Y) : "";
    return `absolute p-0 m-0 top-[10px] left-[17px] cursor-pointer  ${I ? I.join(" ") : ""}`;
  }, [i]);
  ue(() => {
    const Y = t == null ? void 0 : t.current;
    h.current;
    const $ = _.current;
    function I() {
      Y && Y.classList.contains("hidden") && (Y.classList.remove("hidden"), Y.classList.add("block"), window.innerWidth > 767 && window.screen.height - 100 < Y.getBoundingClientRect().bottom && (Y.classList.add("bottom-full"), Y.classList.add("mb-2.5"), Y.classList.remove("mt-2.5")), setTimeout(() => {
        Y.classList.remove("translate-y-4"), Y.classList.remove("opacity-0"), Y.classList.add("translate-y-0"), Y.classList.add("opacity-1");
      }, 1));
    }
    return Y && $ && !s && $.addEventListener("click", I), () => {
      $ && !s && $.removeEventListener("click", I);
    };
  }, [t, n]), ue(() => {
    const Y = _.current, $ = () => {
      M(!0);
    };
    return Y && Y.addEventListener("mouseover", $), () => {
      Y && Y.removeEventListener("mouseover", $);
    };
  }, []), ue(() => {
    const Y = _.current, $ = () => {
      M(!1);
    };
    return Y && Y.addEventListener("mouseout", $), () => {
      Y && Y.removeEventListener("mouseout", $);
    };
  }, []);
  const N = X(() => {
    const Y = t == null ? void 0 : t.current;
    Y && Y.classList.contains("hidden") && (Y.classList.remove("hidden"), Y.classList.add("block"), window.innerWidth > 767 && window.screen.height - 100 < Y.getBoundingClientRect().bottom && (Y.classList.add("bottom-full"), Y.classList.add("mb-2.5"), Y.classList.remove("mt-2.5")), setTimeout(() => {
      Y.classList.remove("translate-y-4"), Y.classList.remove("opacity-0"), Y.classList.add("translate-y-0"), Y.classList.add("opacity-1");
    }, 1));
  }, [t]);
  return T.createElement(
    "div",
    { className: "relative" },
    T.createElement("input", { ref: h, type: "text", placeholder: "DD.MM.YYYY", maxLength: 10, className: v ? x() : y(), disabled: s, readOnly: o, value: r, id: a, name: l, autoComplete: "off", role: "presentation", onChange: (Y) => {
      p(Y.target.value);
    }, style: c ? {
      borderColor: m
    } : { lineHeight: "20px" } }),
    T.createElement("div", { ref: _, onClick: () => {
      s || N();
    }, className: S() }, s ? T.createElement(
      "svg",
      { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
      T.createElement(
        "g",
        { clipPath: "url(#clip0_739_2102)" },
        T.createElement("path", { d: "M16.6667 2.50004H15.8334V0.833374H14.1667V2.50004H5.83342V0.833374H4.16675V2.50004H3.33341C2.41675 2.50004 1.66675 3.25004 1.66675 4.16671V17.5C1.66675 18.4167 2.41675 19.1667 3.33341 19.1667H16.6667C17.5834 19.1667 18.3334 18.4167 18.3334 17.5V4.16671C18.3334 3.25004 17.5834 2.50004 16.6667 2.50004ZM16.6667 17.5H3.33341V6.66671H16.6667V17.5Z", fill: "#C4C4C4" })
      ),
      T.createElement(
        "defs",
        null,
        T.createElement(
          "clipPath",
          { id: "clip0_739_2102" },
          T.createElement("rect", { width: "20", height: "20", fill: "white" })
        )
      )
    ) : T.createElement(
      "svg",
      { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
      T.createElement(
        "g",
        { clipPath: "url(#clip0_739_2084)" },
        T.createElement("path", { className: v ? D() : k(), d: "M16.6667 2.50004H15.8334V0.833374H14.1667V2.50004H5.83342V0.833374H4.16675V2.50004H3.33341C2.41675 2.50004 1.66675 3.25004 1.66675 4.16671V17.5C1.66675 18.4167 2.41675 19.1667 3.33341 19.1667H16.6667C17.5834 19.1667 18.3334 18.4167 18.3334 17.5V4.16671C18.3334 3.25004 17.5834 2.50004 16.6667 2.50004ZM16.6667 17.5H3.33341V6.66671H16.6667V17.5Z" })
      ),
      T.createElement(
        "defs",
        null,
        T.createElement(
          "clipPath",
          { id: "clip0_739_2084" },
          T.createElement("rect", { width: "20", height: "20", fill: "white" })
        )
      )
    )),
    d && r === "" && T.createElement("span", { className: `absolute text-[12px] left-[44px] top-[11px] ${s ? "" : w()}` }, d),
    T.createElement(
      "div",
      { className: `absolute flex flex-col top-0 text-[12px] left-[44px] ${s ? "" : w()}` },
      f && T.createElement(
        T.Fragment,
        null,
        T.createElement("span", { className: "absolute top-[2px] leading-[15px]" }, f)
      )
    )
  );
};
function CD(e, t) {
  ue(() => {
    const n = (r) => {
      !e.current || e.current.contains(r.target) || t(r);
    };
    return document.addEventListener("mousedown", n), document.addEventListener("touchstart", n), () => {
      document.removeEventListener("mousedown", n), document.removeEventListener("touchstart", n);
    };
  }, [e, t]);
}
const $D = ({ accentColor: e = "", invalidColor: t = "", value: n = null, onChange: r, showFooter: s = !0, configs: i = null, asSingle: o = !0, placeholder: a = null, separator: l = "~", startFrom: u = null, i18n: c = ld, disabled: d = !1, inputClassName: f = null, containerClassName: m = null, toggleClassName: p = null, toggleIcon: h = void 0, displayFormat: _ = ud, readOnly: v = !0, minDate: M = null, maxDate: y = null, disabledDates: x = null, inputId: w, inputName: k, startWeekOn: D = "mon", classNames: S = void 0, label: N = "Period", emptyLabel: Y = "", fillLabel: $ = "", invalid: I = !1, invalidText: U = "", calendarColors: H = {
  disabled: "#ddd",
  activeText: "#fff",
  text: "#1d1d1d",
  hoverBgClass: "hover:bg-[#f6f6f6]",
  background: "#fff",
  border: "#e8e8e8",
  otherMonth: "#707070"
} }) => {
  const A = q(null), C = q(null), O = q(null), [L, j] = oe(P()), [B, E] = oe(jt(L)), [R, z] = oe({
    start: null,
    end: null
  }), [K, ne] = oe(null), [G, W] = oe(""), [Q, se] = oe(T.createRef());
  CD(A, () => {
    A.current && he();
  });
  const he = X(() => {
    const ce = C.current;
    ce && ce.classList.contains("block") && (ce.classList.remove("block"), ce.classList.remove("translate-y-0"), ce.classList.remove("opacity-1"), ce.classList.add("translate-y-4"), ce.classList.add("opacity-0"), setTimeout(() => {
      ce.classList.remove("bottom-full"), ce.classList.add("hidden"), ce.classList.add("mb-2.5"), ce.classList.add("mt-2.5");
    }, 300));
  }, []), le = X((ce) => {
    const ie = P(Be(ce)), ze = P(Be(B));
    (ie.isSame(ze) || ie.isAfter(ze)) && E(jt(ce)), j(ce);
  }, [B]), Ce = X(() => {
    j(vn(L));
  }, [L]), Xe = X(() => {
    le(jt(L));
  }, [L, le]), Vt = X((ce) => {
    le(P(`${L.year()}-${ce < 10 ? "0" : ""}${ce}-01`));
  }, [L, le]), lt = X((ce) => {
    le(P(`${ce}-${L.month() + 1}-01`));
  }, [L, le]);
  ue(() => {
    const ce = A.current, ie = C.current, ze = O.current;
    if (ce && ie && ze) {
      const He = ce.getBoundingClientRect(), Sd = window.innerWidth / 2;
      (He.right - He.x) / 2 + He.x > Sd && (ze.classList.add("right-0"), ze.classList.add("mr-3.5"), ie.classList.add("right-0"));
    }
  }, []), ue(() => {
    if (n && n.startDate && n.endDate) {
      const ce = P(n.startDate), ie = P(n.endDate);
      ce.isValid() && ie.isValid() && (ce.isSame(ie) || ce.isBefore(ie)) && (z({
        start: Be(ce),
        end: Be(ie)
      }), W(`${Be(ce, _)}${o ? "" : ` ${l} ${Be(ie, _)}`}`));
    }
    n && n.startDate === null && n.endDate === null && (z({
      start: null,
      end: null
    }), W(""));
  }, [o, n, _, l]), ue(() => {
    u && P(u).isValid() && ((n == null ? void 0 : n.startDate) != null ? (j(P(n.startDate)), E(jt(P(n.startDate)))) : (j(P(u)), E(jt(P(u)))));
  }, [u, n]);
  const sr = X((ce) => {
    const ie = ce.split(".").join("");
    if (ie.length === 8) {
      parseInt(ie.substr(0, 2)) === 29 && parseInt(ie.substr(4, 4)) % 4 !== 0 ? W(`28.${ie.substr(2, 2)}.${ie.substr(4, ie.length)}`) : W(`${ie.substr(0, 2)}.${ie.substr(2, 2)}.${ie.substr(4, ie.length)}`);
      const ze = /* @__PURE__ */ new Date(`${ie.substr(4, 4)}/${ie.substr(2, 2)}/${ie.substr(0, 2)}`), He = P(ze);
      He.isValid() ? (z({
        start: Be(He),
        end: Be(He)
      }), r({
        startDate: Be(He),
        endDate: Be(He)
      }), j(He)) : r({
        startDate: null,
        endDate: null
      });
    } else if (ie.length === 5) {
      const ze = ie.substr(2, 2);
      parseInt(ze) > 12 ? W(`${ie.substr(0, 2)}.0${ie.substr(3, 1)}.${ie.substr(4, 1)}`) : parseInt(ie.substr(0, 2)) > 29 && parseInt(ie.substr(2, 2)) === 2 ? W(`29.${ie.substr(2, 2)}.${ie.substr(4, 1)}`) : parseInt(ie.substr(0, 2)) === 31 && [4, 6, 9, 11].includes(parseInt(ie.substr(2, 2))) ? W(`30.${ie.substr(2, 2)}.${ie.substr(4, 1)}`) : W(`${ie.substr(0, 2)}.${ie.substr(2, 2)}.${ie.substr(4, 1)}`);
    } else if (ie.length === 3) {
      const ze = ie.substr(0, 1), He = ie.substr(0, 2);
      if (parseInt(ze) > 3)
        return W(`0${ie.substr(1, 1)}.${ie.substr(2, 1)}`);
      parseInt(He) > 31 ? W(`30.${ie.substr(2, 1)}`) : W(`${ie.substr(0, 2)}.${ie.substr(2, 1)}`);
    } else
      W(`${ce}`);
  }, []), tl = pe(() => ({
    asSingle: o,
    accentColor: e,
    configs: i,
    calendarContainer: C,
    arrowContainer: O,
    hideDatepicker: he,
    period: R,
    changePeriod: (ce) => z(ce),
    dayHover: K,
    changeDayHover: (ce) => ne(ce),
    inputText: G,
    changeInputText: (ce) => sr(ce),
    updateFirstDate: (ce) => le(ce),
    changeDatepickerValue: r,
    showFooter: s,
    placeholder: a,
    separator: l,
    i18n: c,
    value: n,
    disabled: d,
    inputClassName: f,
    containerClassName: m,
    toggleClassName: p,
    toggleIcon: h,
    readOnly: v,
    displayFormat: _,
    minDate: M,
    maxDate: y,
    disabledDates: x,
    inputId: w,
    inputName: k,
    startWeekOn: D,
    classNames: S,
    onChange: r,
    input: Q,
    emptyLabel: Y,
    fillLabel: $,
    invalid: I,
    invalidText: U,
    invalidColor: t,
    calendarColors: H
  }), [
    o,
    e,
    i,
    he,
    R,
    K,
    G,
    r,
    s,
    a,
    l,
    c,
    n,
    d,
    f,
    m,
    p,
    h,
    v,
    _,
    le,
    M,
    y,
    x,
    w,
    k,
    D,
    S,
    Q,
    Y,
    $,
    I,
    U,
    t,
    H
  ]);
  return T.createElement(
    at.Provider,
    { value: tl },
    T.createElement(
      "div",
      { className: `relative w-full text-gray-700 ${m}`, ref: A },
      T.createElement("p", { className: `text-[14px] leading-[18px] select-none mb-[8px] text-${d ? "[#C4C4C4]" : "[#707070]"}` }, N),
      T.createElement(AD, { setContextRef: se }),
      I && T.createElement("p", { className: "text-[12px] mt-[8px]", style: { color: t } }, U || "Please specify the details!"),
      T.createElement(
        "div",
        { className: "transition-all ease-out duration-300 absolute z-10 mt-[1px] text-sm lg:text-xs 2xl:text-sm translate-y-4 opacity-0 hidden", ref: C },
        T.createElement(
          "div",
          { className: "mt-2.5 shadow-sm border py-0.5 rounded-[12px]", style: {
            background: H == null ? void 0 : H.background,
            borderColor: H == null ? void 0 : H.border
          } },
          T.createElement(
            "div",
            { className: "flex flex-col lg:flex-row" },
            T.createElement(
              "div",
              { className: "flex items-stretch flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-1.5" },
              T.createElement(PD, { date: L, onClickPrevious: Ce, onClickNext: Xe, changeMonth: Vt, changeYear: lt })
            )
          )
        )
      )
    )
  );
};
var Wo = {}, HD = {
  get exports() {
    return Wo;
  },
  set exports(e) {
    Wo = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "af", weekdays: "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"), months: "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"), weekStart: 1, weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"), monthsShort: "Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"), weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, relativeTime: { future: "oor %s", past: "%s gelede", s: "'n paar sekondes", m: "'n minuut", mm: "%d minute", h: "'n uur", hh: "%d ure", d: "'n dag", dd: "%d dae", M: "'n maand", MM: "%d maande", y: "'n jaar", yy: "%d jaar" } };
    return s.default.locale(i, null, !0), i;
  });
})(HD);
var OD = Wo, RD = /* @__PURE__ */ V({
  __proto__: null,
  default: OD
}, [Wo]), Uo = {}, ND = {
  get exports() {
    return Uo;
  },
  set exports(e) {
    Uo = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "am", weekdays: "እሑድ_ሰኞ_ማክሰኞ_ረቡዕ_ሐሙስ_አርብ_ቅዳሜ".split("_"), weekdaysShort: "እሑድ_ሰኞ_ማክሰ_ረቡዕ_ሐሙስ_አርብ_ቅዳሜ".split("_"), weekdaysMin: "እሑ_ሰኞ_ማክ_ረቡ_ሐሙ_አር_ቅዳ".split("_"), months: "ጃንዋሪ_ፌብሯሪ_ማርች_ኤፕሪል_ሜይ_ጁን_ጁላይ_ኦገስት_ሴፕቴምበር_ኦክቶበር_ኖቬምበር_ዲሴምበር".split("_"), monthsShort: "ጃንዋ_ፌብሯ_ማርች_ኤፕሪ_ሜይ_ጁን_ጁላይ_ኦገስ_ሴፕቴ_ኦክቶ_ኖቬም_ዲሴም".split("_"), weekStart: 1, yearStart: 4, relativeTime: { future: "በ%s", past: "%s በፊት", s: "ጥቂት ሰከንዶች", m: "አንድ ደቂቃ", mm: "%d ደቂቃዎች", h: "አንድ ሰዓት", hh: "%d ሰዓታት", d: "አንድ ቀን", dd: "%d ቀናት", M: "አንድ ወር", MM: "%d ወራት", y: "አንድ ዓመት", yy: "%d ዓመታት" }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "MMMM D ፣ YYYY", LLL: "MMMM D ፣ YYYY HH:mm", LLLL: "dddd ፣ MMMM D ፣ YYYY HH:mm" }, ordinal: function(o) {
      return o + "ኛ";
    } };
    return s.default.locale(i, null, !0), i;
  });
})(ND);
var ID = Uo, FD = /* @__PURE__ */ V({
  __proto__: null,
  default: ID
}, [Uo]), Ko = {}, VD = {
  get exports() {
    return Ko;
  },
  set exports(e) {
    Ko = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "ar-dz", weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), weekdaysShort: "احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"), monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), weekdaysMin: "أح_إث_ثلا_أر_خم_جم_سب".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, meridiem: function(o) {
      return o > 12 ? "م" : "ص";
    }, relativeTime: { future: "في %s", past: "منذ %s", s: "ثوان", m: "دقيقة", mm: "%d دقائق", h: "ساعة", hh: "%d ساعات", d: "يوم", dd: "%d أيام", M: "شهر", MM: "%d أشهر", y: "سنة", yy: "%d سنوات" } };
    return s.default.locale(i, null, !0), i;
  });
})(VD);
var zD = Ko, BD = /* @__PURE__ */ V({
  __proto__: null,
  default: zD
}, [Ko]), Go = {}, WD = {
  get exports() {
    return Go;
  },
  set exports(e) {
    Go = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "ar-iq", weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), months: "كانون الثاني_شباط_آذار_نيسان_أيار_حزيران_تموز_آب_أيلول_تشرين الأول_ تشرين الثاني_كانون الأول".split("_"), weekStart: 1, weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"), monthsShort: "كانون الثاني_شباط_آذار_نيسان_أيار_حزيران_تموز_آب_أيلول_تشرين الأول_ تشرين الثاني_كانون الأول".split("_"), weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, meridiem: function(o) {
      return o > 12 ? "م" : "ص";
    }, relativeTime: { future: "في %s", past: "منذ %s", s: "ثوان", m: "دقيقة", mm: "%d دقائق", h: "ساعة", hh: "%d ساعات", d: "يوم", dd: "%d أيام", M: "شهر", MM: "%d أشهر", y: "سنة", yy: "%d سنوات" } };
    return s.default.locale(i, null, !0), i;
  });
})(WD);
var UD = Go, KD = /* @__PURE__ */ V({
  __proto__: null,
  default: UD
}, [Go]), Jo = {}, GD = {
  get exports() {
    return Jo;
  },
  set exports(e) {
    Jo = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "ar-kw", weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"), weekdaysShort: "احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"), monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"), weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, meridiem: function(o) {
      return o > 12 ? "م" : "ص";
    }, relativeTime: { future: "في %s", past: "منذ %s", s: "ثوان", m: "دقيقة", mm: "%d دقائق", h: "ساعة", hh: "%d ساعات", d: "يوم", dd: "%d أيام", M: "شهر", MM: "%d أشهر", y: "سنة", yy: "%d سنوات" } };
    return s.default.locale(i, null, !0), i;
  });
})(GD);
var JD = Jo, qD = /* @__PURE__ */ V({
  __proto__: null,
  default: JD
}, [Jo]), qo = {}, XD = {
  get exports() {
    return qo;
  },
  set exports(e) {
    qo = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "ar-ly", weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), months: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), weekStart: 6, weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"), monthsShort: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"), ordinal: function(o) {
      return o;
    }, meridiem: function(o) {
      return o > 12 ? "م" : "ص";
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "D/‏M/‏YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" } };
    return s.default.locale(i, null, !0), i;
  });
})(XD);
var ZD = qo, QD = /* @__PURE__ */ V({
  __proto__: null,
  default: ZD
}, [qo]), Xo = {}, eT = {
  get exports() {
    return Xo;
  },
  set exports(e) {
    Xo = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "ar-ma", weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"), weekStart: 6, weekdaysShort: "احد_إثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"), monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"), weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, meridiem: function(o) {
      return o > 12 ? "م" : "ص";
    }, relativeTime: { future: "في %s", past: "منذ %s", s: "ثوان", m: "دقيقة", mm: "%d دقائق", h: "ساعة", hh: "%d ساعات", d: "يوم", dd: "%d أيام", M: "شهر", MM: "%d أشهر", y: "سنة", yy: "%d سنوات" } };
    return s.default.locale(i, null, !0), i;
  });
})(eT);
var tT = Xo, nT = /* @__PURE__ */ V({
  __proto__: null,
  default: tT
}, [Xo]), Zo = {}, rT = {
  get exports() {
    return Zo;
  },
  set exports(e) {
    Zo = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "ar-sa", weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), months: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"), monthsShort: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, meridiem: function(o) {
      return o > 12 ? "م" : "ص";
    }, relativeTime: { future: "في %s", past: "منذ %s", s: "ثوان", m: "دقيقة", mm: "%d دقائق", h: "ساعة", hh: "%d ساعات", d: "يوم", dd: "%d أيام", M: "شهر", MM: "%d أشهر", y: "سنة", yy: "%d سنوات" } };
    return s.default.locale(i, null, !0), i;
  });
})(rT);
var oT = Zo, sT = /* @__PURE__ */ V({
  __proto__: null,
  default: oT
}, [Zo]), Qo = {}, iT = {
  get exports() {
    return Qo;
  },
  set exports(e) {
    Qo = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "ar-tn", weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), weekStart: 1, weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"), monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, meridiem: function(o) {
      return o > 12 ? "م" : "ص";
    }, relativeTime: { future: "في %s", past: "منذ %s", s: "ثوان", m: "دقيقة", mm: "%d دقائق", h: "ساعة", hh: "%d ساعات", d: "يوم", dd: "%d أيام", M: "شهر", MM: "%d أشهر", y: "سنة", yy: "%d سنوات" } };
    return s.default.locale(i, null, !0), i;
  });
})(iT);
var aT = Qo, lT = /* @__PURE__ */ V({
  __proto__: null,
  default: aT
}, [Qo]), es = {}, uT = {
  get exports() {
    return es;
  },
  set exports(e) {
    es = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(u) {
      return u && typeof u == "object" && "default" in u ? u : { default: u };
    }
    var s = r(n), i = "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), o = { 1: "١", 2: "٢", 3: "٣", 4: "٤", 5: "٥", 6: "٦", 7: "٧", 8: "٨", 9: "٩", 0: "٠" }, a = { "١": "1", "٢": "2", "٣": "3", "٤": "4", "٥": "5", "٦": "6", "٧": "7", "٨": "8", "٩": "9", "٠": "0" }, l = { name: "ar", weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"), weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"), months: i, monthsShort: i, weekStart: 6, relativeTime: { future: "بعد %s", past: "منذ %s", s: "ثانية واحدة", m: "دقيقة واحدة", mm: "%d دقائق", h: "ساعة واحدة", hh: "%d ساعات", d: "يوم واحد", dd: "%d أيام", M: "شهر واحد", MM: "%d أشهر", y: "عام واحد", yy: "%d أعوام" }, preparse: function(u) {
      return u.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function(c) {
        return a[c];
      }).replace(/،/g, ",");
    }, postformat: function(u) {
      return u.replace(/\d/g, function(c) {
        return o[c];
      }).replace(/,/g, "،");
    }, ordinal: function(u) {
      return u;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "D/‏M/‏YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" } };
    return s.default.locale(l, null, !0), l;
  });
})(uT);
var cT = es, dT = /* @__PURE__ */ V({
  __proto__: null,
  default: cT
}, [es]), ts = {}, fT = {
  get exports() {
    return ts;
  },
  set exports(e) {
    ts = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "az", weekdays: "Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"), weekdaysShort: "Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"), weekdaysMin: "Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"), months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"), monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"), weekStart: 1, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY г.", LLL: "D MMMM YYYY г., H:mm", LLLL: "dddd, D MMMM YYYY г., H:mm" }, relativeTime: { future: "%s sonra", past: "%s əvvəl", s: "bir neçə saniyə", m: "bir dəqiqə", mm: "%d dəqiqə", h: "bir saat", hh: "%d saat", d: "bir gün", dd: "%d gün", M: "bir ay", MM: "%d ay", y: "bir il", yy: "%d il" }, ordinal: function(o) {
      return o;
    } };
    return s.default.locale(i, null, !0), i;
  });
})(fT);
var mT = ts, pT = /* @__PURE__ */ V({
  __proto__: null,
  default: mT
}, [ts]), ns = {}, hT = {
  get exports() {
    return ns;
  },
  set exports(e) {
    ns = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "bg", weekdays: "неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"), weekdaysShort: "нед_пон_вто_сря_чет_пет_съб".split("_"), weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"), months: "януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"), monthsShort: "янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"), weekStart: 1, ordinal: function(o) {
      var a = o % 100;
      if (a > 10 && a < 20) return o + "-ти";
      var l = o % 10;
      return l === 1 ? o + "-ви" : l === 2 ? o + "-ри" : l === 7 || l === 8 ? o + "-ми" : o + "-ти";
    }, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "D.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY H:mm", LLLL: "dddd, D MMMM YYYY H:mm" }, relativeTime: { future: "след %s", past: "преди %s", s: "няколко секунди", m: "минута", mm: "%d минути", h: "час", hh: "%d часа", d: "ден", dd: "%d дена", M: "месец", MM: "%d месеца", y: "година", yy: "%d години" } };
    return s.default.locale(i, null, !0), i;
  });
})(hT);
var _T = ns, vT = /* @__PURE__ */ V({
  __proto__: null,
  default: _T
}, [ns]), rs = {}, gT = {
  get exports() {
    return rs;
  },
  set exports(e) {
    rs = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "bi", weekdays: "Sande_Mande_Tusde_Wenesde_Tosde_Fraede_Sarade".split("_"), months: "Januari_Februari_Maj_Eprel_Mei_Jun_Julae_Okis_Septemba_Oktoba_Novemba_Disemba".split("_"), weekStart: 1, weekdaysShort: "San_Man_Tus_Wen_Tos_Frae_Sar".split("_"), monthsShort: "Jan_Feb_Maj_Epr_Mai_Jun_Jul_Oki_Sep_Okt_Nov_Dis".split("_"), weekdaysMin: "San_Ma_Tu_We_To_Fr_Sar".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, relativeTime: { future: "lo %s", past: "%s bifo", s: "sam seken", m: "wan minit", mm: "%d minit", h: "wan haoa", hh: "%d haoa", d: "wan dei", dd: "%d dei", M: "wan manis", MM: "%d manis", y: "wan yia", yy: "%d yia" } };
    return s.default.locale(i, null, !0), i;
  });
})(gT);
var yT = rs, MT = /* @__PURE__ */ V({
  __proto__: null,
  default: yT
}, [rs]), os = {}, bT = {
  get exports() {
    return os;
  },
  set exports(e) {
    os = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "bm", weekdays: "Kari_Ntɛnɛn_Tarata_Araba_Alamisa_Juma_Sibiri".split("_"), months: "Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_Mɛkalo_Zuwɛnkalo_Zuluyekalo_Utikalo_Sɛtanburukalo_ɔkutɔburukalo_Nowanburukalo_Desanburukalo".split("_"), weekStart: 1, weekdaysShort: "Kar_Ntɛ_Tar_Ara_Ala_Jum_Sib".split("_"), monthsShort: "Zan_Few_Mar_Awi_Mɛ_Zuw_Zul_Uti_Sɛt_ɔku_Now_Des".split("_"), weekdaysMin: "Ka_Nt_Ta_Ar_Al_Ju_Si".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "MMMM [tile] D [san] YYYY", LLL: "MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm", LLLL: "dddd MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm" }, relativeTime: { future: "%s kɔnɔ", past: "a bɛ %s bɔ", s: "sanga dama dama", m: "miniti kelen", mm: "miniti %d", h: "lɛrɛ kelen", hh: "lɛrɛ %d", d: "tile kelen", dd: "tile %d", M: "kalo kelen", MM: "kalo %d", y: "san kelen", yy: "san %d" } };
    return s.default.locale(i, null, !0), i;
  });
})(bT);
var xT = os, wT = /* @__PURE__ */ V({
  __proto__: null,
  default: xT
}, [os]), ss = {}, YT = {
  get exports() {
    return ss;
  },
  set exports(e) {
    ss = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(l) {
      return l && typeof l == "object" && "default" in l ? l : { default: l };
    }
    var s = r(n), i = { 1: "১", 2: "২", 3: "৩", 4: "৪", 5: "৫", 6: "৬", 7: "৭", 8: "৮", 9: "৯", 0: "০" }, o = { "১": "1", "২": "2", "৩": "3", "৪": "4", "৫": "5", "৬": "6", "৭": "7", "৮": "8", "৯": "9", "০": "0" }, a = { name: "bn-bd", weekdays: "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split("_"), months: "জানুয়ারি_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"), weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"), monthsShort: "জানু_ফেব্রু_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্ট_অক্টো_নভে_ডিসে".split("_"), weekdaysMin: "রবি_সোম_মঙ্গ_বুধ_বৃহঃ_শুক্র_শনি".split("_"), weekStart: 0, preparse: function(l) {
      return l.replace(/[১২৩৪৫৬৭৮৯০]/g, function(u) {
        return o[u];
      });
    }, postformat: function(l) {
      return l.replace(/\d/g, function(u) {
        return i[u];
      });
    }, ordinal: function(l) {
      var u = ["ই", "লা", "রা", "ঠা", "শে"], c = l % 100;
      return "[" + l + (u[(c - 20) % 10] || u[c] || u[0]) + "]";
    }, formats: { LT: "A h:mm সময়", LTS: "A h:mm:ss সময়", L: "DD/MM/YYYY খ্রিস্টাব্দ", LL: "D MMMM YYYY খ্রিস্টাব্দ", LLL: "D MMMM YYYY খ্রিস্টাব্দ, A h:mm সময়", LLLL: "dddd, D MMMM YYYY খ্রিস্টাব্দ, A h:mm সময়" }, meridiem: function(l) {
      return l < 4 ? "রাত" : l < 6 ? "ভোর" : l < 12 ? "সকাল" : l < 15 ? "দুপুর" : l < 18 ? "বিকাল" : l < 20 ? "সন্ধ্যা" : "রাত";
    }, relativeTime: { future: "%s পরে", past: "%s আগে", s: "কয়েক সেকেন্ড", m: "এক মিনিট", mm: "%d মিনিট", h: "এক ঘন্টা", hh: "%d ঘন্টা", d: "এক দিন", dd: "%d দিন", M: "এক মাস", MM: "%d মাস", y: "এক বছর", yy: "%d বছর" } };
    return s.default.locale(a, null, !0), a;
  });
})(YT);
var LT = ss, ST = /* @__PURE__ */ V({
  __proto__: null,
  default: LT
}, [ss]), is = {}, kT = {
  get exports() {
    return is;
  },
  set exports(e) {
    is = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(l) {
      return l && typeof l == "object" && "default" in l ? l : { default: l };
    }
    var s = r(n), i = { 1: "১", 2: "২", 3: "৩", 4: "৪", 5: "৫", 6: "৬", 7: "৭", 8: "৮", 9: "৯", 0: "০" }, o = { "১": "1", "২": "2", "৩": "3", "৪": "4", "৫": "5", "৬": "6", "৭": "7", "৮": "8", "৯": "9", "০": "0" }, a = { name: "bn", weekdays: "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split("_"), months: "জানুয়ারি_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"), weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"), monthsShort: "জানু_ফেব্রু_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্ট_অক্টো_নভে_ডিসে".split("_"), weekdaysMin: "রবি_সোম_মঙ্গ_বুধ_বৃহঃ_শুক্র_শনি".split("_"), preparse: function(l) {
      return l.replace(/[১২৩৪৫৬৭৮৯০]/g, function(u) {
        return o[u];
      });
    }, postformat: function(l) {
      return l.replace(/\d/g, function(u) {
        return i[u];
      });
    }, ordinal: function(l) {
      return l;
    }, formats: { LT: "A h:mm সময়", LTS: "A h:mm:ss সময়", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm সময়", LLLL: "dddd, D MMMM YYYY, A h:mm সময়" }, relativeTime: { future: "%s পরে", past: "%s আগে", s: "কয়েক সেকেন্ড", m: "এক মিনিট", mm: "%d মিনিট", h: "এক ঘন্টা", hh: "%d ঘন্টা", d: "এক দিন", dd: "%d দিন", M: "এক মাস", MM: "%d মাস", y: "এক বছর", yy: "%d বছর" } };
    return s.default.locale(a, null, !0), a;
  });
})(kT);
var DT = is, TT = /* @__PURE__ */ V({
  __proto__: null,
  default: DT
}, [is]), as = {}, ET = {
  get exports() {
    return as;
  },
  set exports(e) {
    as = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "bo", weekdays: "གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split("_"), weekdaysShort: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"), weekdaysMin: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"), months: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"), monthsShort: "ཟླ་དང་པོ_ཟླ་གཉིས་པ_ཟླ་གསུམ་པ_ཟླ་བཞི་པ_ཟླ་ལྔ་པ_ཟླ་དྲུག་པ_ཟླ་བདུན་པ_ཟླ་བརྒྱད་པ_ཟླ་དགུ་པ_ཟླ་བཅུ་པ_ཟླ་བཅུ་གཅིག་པ_ཟླ་བཅུ་གཉིས་པ".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "A h:mm", LTS: "A h:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm", LLLL: "dddd, D MMMM YYYY, A h:mm" }, relativeTime: { future: "%s ལ་", past: "%s སྔོན་ལ་", s: "ཏོག་ཙམ་", m: "སྐར་མ་གཅིག་", mm: "སྐར་མ་ %d", h: "ཆུ་ཚོད་གཅིག་", hh: "ཆུ་ཚོད་ %d", d: "ཉིན་གཅིག་", dd: "ཉིན་ %d", M: "ཟླ་བ་གཅིག་", MM: "ཟླ་བ་ %d", y: "ལོ་གཅིག་", yy: "ལོ་ %d" } };
    return s.default.locale(i, null, !0), i;
  });
})(ET);
var jT = as, PT = /* @__PURE__ */ V({
  __proto__: null,
  default: jT
}, [as]), ls = {}, AT = {
  get exports() {
    return ls;
  },
  set exports(e) {
    ls = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(l) {
      return l && typeof l == "object" && "default" in l ? l : { default: l };
    }
    var s = r(n);
    function i(l) {
      return l > 9 ? i(l % 10) : l;
    }
    function o(l, u, c) {
      return l + " " + function(d, f) {
        return f === 2 ? function(m) {
          return { m: "v", b: "v", d: "z" }[m.charAt(0)] + m.substring(1);
        }(d) : d;
      }({ mm: "munutenn", MM: "miz", dd: "devezh" }[c], l);
    }
    var a = { name: "br", weekdays: "Sul_Lun_Meurzh_Mercʼher_Yaou_Gwener_Sadorn".split("_"), months: "Genver_Cʼhwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"), weekStart: 1, weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"), monthsShort: "Gen_Cʼhwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"), weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"), ordinal: function(l) {
      return l;
    }, formats: { LT: "h[e]mm A", LTS: "h[e]mm:ss A", L: "DD/MM/YYYY", LL: "D [a viz] MMMM YYYY", LLL: "D [a viz] MMMM YYYY h[e]mm A", LLLL: "dddd, D [a viz] MMMM YYYY h[e]mm A" }, relativeTime: { future: "a-benn %s", past: "%s ʼzo", s: "un nebeud segondennoù", m: "ur vunutenn", mm: o, h: "un eur", hh: "%d eur", d: "un devezh", dd: o, M: "ur miz", MM: o, y: "ur bloaz", yy: function(l) {
      switch (i(l)) {
        case 1:
        case 3:
        case 4:
        case 5:
        case 9:
          return l + " bloaz";
        default:
          return l + " vloaz";
      }
    } }, meridiem: function(l) {
      return l < 12 ? "a.m." : "g.m.";
    } };
    return s.default.locale(a, null, !0), a;
  });
})(AT);
var CT = ls, $T = /* @__PURE__ */ V({
  __proto__: null,
  default: CT
}, [ls]), us = {}, HT = {
  get exports() {
    return us;
  },
  set exports(e) {
    us = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "ca", weekdays: "Diumenge_Dilluns_Dimarts_Dimecres_Dijous_Divendres_Dissabte".split("_"), weekdaysShort: "Dg._Dl._Dt._Dc._Dj._Dv._Ds.".split("_"), weekdaysMin: "Dg_Dl_Dt_Dc_Dj_Dv_Ds".split("_"), months: "Gener_Febrer_Març_Abril_Maig_Juny_Juliol_Agost_Setembre_Octubre_Novembre_Desembre".split("_"), monthsShort: "Gen._Febr._Març_Abr._Maig_Juny_Jul._Ag._Set._Oct._Nov._Des.".split("_"), weekStart: 1, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM [de] YYYY", LLL: "D MMMM [de] YYYY [a les] H:mm", LLLL: "dddd D MMMM [de] YYYY [a les] H:mm", ll: "D MMM YYYY", lll: "D MMM YYYY, H:mm", llll: "ddd D MMM YYYY, H:mm" }, relativeTime: { future: "d'aquí %s", past: "fa %s", s: "uns segons", m: "un minut", mm: "%d minuts", h: "una hora", hh: "%d hores", d: "un dia", dd: "%d dies", M: "un mes", MM: "%d mesos", y: "un any", yy: "%d anys" }, ordinal: function(o) {
      return "" + o + (o === 1 || o === 3 ? "r" : o === 2 ? "n" : o === 4 ? "t" : "è");
    } };
    return s.default.locale(i, null, !0), i;
  });
})(HT);
var OT = us, RT = /* @__PURE__ */ V({
  __proto__: null,
  default: OT
}, [us]), cs = {}, NT = {
  get exports() {
    return cs;
  },
  set exports(e) {
    cs = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(l) {
      return l && typeof l == "object" && "default" in l ? l : { default: l };
    }
    var s = r(n);
    function i(l) {
      return l > 1 && l < 5 && ~~(l / 10) != 1;
    }
    function o(l, u, c, d) {
      var f = l + " ";
      switch (c) {
        case "s":
          return u || d ? "pár sekund" : "pár sekundami";
        case "m":
          return u ? "minuta" : d ? "minutu" : "minutou";
        case "mm":
          return u || d ? f + (i(l) ? "minuty" : "minut") : f + "minutami";
        case "h":
          return u ? "hodina" : d ? "hodinu" : "hodinou";
        case "hh":
          return u || d ? f + (i(l) ? "hodiny" : "hodin") : f + "hodinami";
        case "d":
          return u || d ? "den" : "dnem";
        case "dd":
          return u || d ? f + (i(l) ? "dny" : "dní") : f + "dny";
        case "M":
          return u || d ? "měsíc" : "měsícem";
        case "MM":
          return u || d ? f + (i(l) ? "měsíce" : "měsíců") : f + "měsíci";
        case "y":
          return u || d ? "rok" : "rokem";
        case "yy":
          return u || d ? f + (i(l) ? "roky" : "let") : f + "lety";
      }
    }
    var a = { name: "cs", weekdays: "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"), weekdaysShort: "ne_po_út_st_čt_pá_so".split("_"), weekdaysMin: "ne_po_út_st_čt_pá_so".split("_"), months: "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"), monthsShort: "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_"), weekStart: 1, yearStart: 4, ordinal: function(l) {
      return l + ".";
    }, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd D. MMMM YYYY H:mm", l: "D. M. YYYY" }, relativeTime: { future: "za %s", past: "před %s", s: o, m: o, mm: o, h: o, hh: o, d: o, dd: o, M: o, MM: o, y: o, yy: o } };
    return s.default.locale(a, null, !0), a;
  });
})(NT);
var IT = cs, FT = /* @__PURE__ */ V({
  __proto__: null,
  default: IT
}, [cs]), ds = {}, VT = {
  get exports() {
    return ds;
  },
  set exports(e) {
    ds = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "cv", weekdays: "вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун".split("_"), months: "кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав".split("_"), weekStart: 1, weekdaysShort: "выр_тун_ытл_юн_кӗҫ_эрн_шӑм".split("_"), monthsShort: "кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш".split("_"), weekdaysMin: "вр_тн_ыт_юн_кҫ_эр_шм".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD-MM-YYYY", LL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]", LLL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm", LLLL: "dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm" } };
    return s.default.locale(i, null, !0), i;
  });
})(VT);
var zT = ds, BT = /* @__PURE__ */ V({
  __proto__: null,
  default: zT
}, [ds]), fs = {}, WT = {
  get exports() {
    return fs;
  },
  set exports(e) {
    fs = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "cy", weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"), months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"), weekStart: 1, weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"), monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"), weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, relativeTime: { future: "mewn %s", past: "%s yn ôl", s: "ychydig eiliadau", m: "munud", mm: "%d munud", h: "awr", hh: "%d awr", d: "diwrnod", dd: "%d diwrnod", M: "mis", MM: "%d mis", y: "blwyddyn", yy: "%d flynedd" } };
    return s.default.locale(i, null, !0), i;
  });
})(WT);
var UT = fs, KT = /* @__PURE__ */ V({
  __proto__: null,
  default: UT
}, [fs]), ms = {}, GT = {
  get exports() {
    return ms;
  },
  set exports(e) {
    ms = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "da", weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"), weekdaysShort: "søn._man._tirs._ons._tors._fre._lør.".split("_"), weekdaysMin: "sø._ma._ti._on._to._fr._lø.".split("_"), months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"), monthsShort: "jan._feb._mar._apr._maj_juni_juli_aug._sept._okt._nov._dec.".split("_"), weekStart: 1, ordinal: function(o) {
      return o + ".";
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd [d.] D. MMMM YYYY [kl.] HH:mm" }, relativeTime: { future: "om %s", past: "%s siden", s: "få sekunder", m: "et minut", mm: "%d minutter", h: "en time", hh: "%d timer", d: "en dag", dd: "%d dage", M: "en måned", MM: "%d måneder", y: "et år", yy: "%d år" } };
    return s.default.locale(i, null, !0), i;
  });
})(GT);
var JT = ms, qT = /* @__PURE__ */ V({
  __proto__: null,
  default: JT
}, [ms]), ps = {}, XT = {
  get exports() {
    return ps;
  },
  set exports(e) {
    ps = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(l) {
      return l && typeof l == "object" && "default" in l ? l : { default: l };
    }
    var s = r(n), i = { s: "ein paar Sekunden", m: ["eine Minute", "einer Minute"], mm: "%d Minuten", h: ["eine Stunde", "einer Stunde"], hh: "%d Stunden", d: ["ein Tag", "einem Tag"], dd: ["%d Tage", "%d Tagen"], M: ["ein Monat", "einem Monat"], MM: ["%d Monate", "%d Monaten"], y: ["ein Jahr", "einem Jahr"], yy: ["%d Jahre", "%d Jahren"] };
    function o(l, u, c) {
      var d = i[c];
      return Array.isArray(d) && (d = d[u ? 0 : 1]), d.replace("%d", l);
    }
    var a = { name: "de-at", weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"), weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"), weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), months: "Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jän._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"), ordinal: function(l) {
      return l + ".";
    }, weekStart: 1, formats: { LTS: "HH:mm:ss", LT: "HH:mm", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd, D. MMMM YYYY HH:mm" }, relativeTime: { future: "in %s", past: "vor %s", s: o, m: o, mm: o, h: o, hh: o, d: o, dd: o, M: o, MM: o, y: o, yy: o } };
    return s.default.locale(a, null, !0), a;
  });
})(XT);
var ZT = ps, QT = /* @__PURE__ */ V({
  __proto__: null,
  default: ZT
}, [ps]), hs = {}, eE = {
  get exports() {
    return hs;
  },
  set exports(e) {
    hs = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(l) {
      return l && typeof l == "object" && "default" in l ? l : { default: l };
    }
    var s = r(n), i = { s: "ein paar Sekunden", m: ["eine Minute", "einer Minute"], mm: "%d Minuten", h: ["eine Stunde", "einer Stunde"], hh: "%d Stunden", d: ["ein Tag", "einem Tag"], dd: ["%d Tage", "%d Tagen"], M: ["ein Monat", "einem Monat"], MM: ["%d Monate", "%d Monaten"], y: ["ein Jahr", "einem Jahr"], yy: ["%d Jahre", "%d Jahren"] };
    function o(l, u, c) {
      var d = i[c];
      return Array.isArray(d) && (d = d[u ? 0 : 1]), d.replace("%d", l);
    }
    var a = { name: "de-ch", weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"), weekdaysShort: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"), ordinal: function(l) {
      return l + ".";
    }, weekStart: 1, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd, D. MMMM YYYY HH:mm" }, relativeTime: { future: "in %s", past: "vor %s", s: o, m: o, mm: o, h: o, hh: o, d: o, dd: o, M: o, MM: o, y: o, yy: o } };
    return s.default.locale(a, null, !0), a;
  });
})(eE);
var tE = hs, nE = /* @__PURE__ */ V({
  __proto__: null,
  default: tE
}, [hs]), _s = {}, rE = {
  get exports() {
    return _s;
  },
  set exports(e) {
    _s = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(l) {
      return l && typeof l == "object" && "default" in l ? l : { default: l };
    }
    var s = r(n), i = { s: "ein paar Sekunden", m: ["eine Minute", "einer Minute"], mm: "%d Minuten", h: ["eine Stunde", "einer Stunde"], hh: "%d Stunden", d: ["ein Tag", "einem Tag"], dd: ["%d Tage", "%d Tagen"], M: ["ein Monat", "einem Monat"], MM: ["%d Monate", "%d Monaten"], y: ["ein Jahr", "einem Jahr"], yy: ["%d Jahre", "%d Jahren"] };
    function o(l, u, c) {
      var d = i[c];
      return Array.isArray(d) && (d = d[u ? 0 : 1]), d.replace("%d", l);
    }
    var a = { name: "de", weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"), weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"), weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.".split("_"), ordinal: function(l) {
      return l + ".";
    }, weekStart: 1, yearStart: 4, formats: { LTS: "HH:mm:ss", LT: "HH:mm", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd, D. MMMM YYYY HH:mm" }, relativeTime: { future: "in %s", past: "vor %s", s: o, m: o, mm: o, h: o, hh: o, d: o, dd: o, M: o, MM: o, y: o, yy: o } };
    return s.default.locale(a, null, !0), a;
  });
})(rE);
var oE = _s, sE = /* @__PURE__ */ V({
  __proto__: null,
  default: oE
}, [_s]), vs = {}, iE = {
  get exports() {
    return vs;
  },
  set exports(e) {
    vs = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "dv", weekdays: "އާދިއްތަ_ހޯމަ_އަންގާރަ_ބުދަ_ބުރާސްފަތި_ހުކުރު_ހޮނިހިރު".split("_"), months: "ޖެނުއަރީ_ފެބްރުއަރީ_މާރިޗު_އޭޕްރީލު_މޭ_ޖޫން_ޖުލައި_އޯގަސްޓު_ސެޕްޓެމްބަރު_އޮކްޓޯބަރު_ނޮވެމްބަރު_ޑިސެމްބަރު".split("_"), weekStart: 7, weekdaysShort: "އާދިއްތަ_ހޯމަ_އަންގާރަ_ބުދަ_ބުރާސްފަތި_ހުކުރު_ހޮނިހިރު".split("_"), monthsShort: "ޖެނުއަރީ_ފެބްރުއަރީ_މާރިޗު_އޭޕްރީލު_މޭ_ޖޫން_ޖުލައި_އޯގަސްޓު_ސެޕްޓެމްބަރު_އޮކްޓޯބަރު_ނޮވެމްބަރު_ޑިސެމްބަރު".split("_"), weekdaysMin: "އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "D/M/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, relativeTime: { future: "ތެރޭގައި %s", past: "ކުރިން %s", s: "ސިކުންތުކޮޅެއް", m: "މިނިޓެއް", mm: "މިނިޓު %d", h: "ގަޑިއިރެއް", hh: "ގަޑިއިރު %d", d: "ދުވަހެއް", dd: "ދުވަސް %d", M: "މަހެއް", MM: "މަސް %d", y: "އަހަރެއް", yy: "އަހަރު %d" } };
    return s.default.locale(i, null, !0), i;
  });
})(iE);
var aE = vs, lE = /* @__PURE__ */ V({
  __proto__: null,
  default: aE
}, [vs]), gs = {}, uE = {
  get exports() {
    return gs;
  },
  set exports(e) {
    gs = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "el", weekdays: "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"), weekdaysShort: "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"), weekdaysMin: "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"), months: "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"), monthsShort: "Ιαν_Φεβ_Μαρ_Απρ_Μαι_Ιουν_Ιουλ_Αυγ_Σεπτ_Οκτ_Νοε_Δεκ".split("_"), ordinal: function(o) {
      return o;
    }, weekStart: 1, relativeTime: { future: "σε %s", past: "πριν %s", s: "μερικά δευτερόλεπτα", m: "ένα λεπτό", mm: "%d λεπτά", h: "μία ώρα", hh: "%d ώρες", d: "μία μέρα", dd: "%d μέρες", M: "ένα μήνα", MM: "%d μήνες", y: "ένα χρόνο", yy: "%d χρόνια" }, formats: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" } };
    return s.default.locale(i, null, !0), i;
  });
})(uE);
var cE = gs, dE = /* @__PURE__ */ V({
  __proto__: null,
  default: cE
}, [gs]), ys = {}, fE = {
  get exports() {
    return ys;
  },
  set exports(e) {
    ys = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "en-au", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), weekStart: 1, weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" } };
    return s.default.locale(i, null, !0), i;
  });
})(fE);
var mE = ys, pE = /* @__PURE__ */ V({
  __proto__: null,
  default: mE
}, [ys]), Ms = {}, hE = {
  get exports() {
    return Ms;
  },
  set exports(e) {
    Ms = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "en-gb", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekStart: 1, yearStart: 4, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, ordinal: function(o) {
      var a = ["th", "st", "nd", "rd"], l = o % 100;
      return "[" + o + (a[(l - 20) % 10] || a[l] || a[0]) + "]";
    } };
    return s.default.locale(i, null, !0), i;
  });
})(hE);
var _E = Ms, vE = /* @__PURE__ */ V({
  __proto__: null,
  default: _E
}, [Ms]), bs = {}, gE = {
  get exports() {
    return bs;
  },
  set exports(e) {
    bs = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "en-ie", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), weekStart: 1, weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" } };
    return s.default.locale(i, null, !0), i;
  });
})(gE);
var yE = bs, ME = /* @__PURE__ */ V({
  __proto__: null,
  default: yE
}, [bs]), xs = {}, bE = {
  get exports() {
    return xs;
  },
  set exports(e) {
    xs = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "en-il", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" } };
    return s.default.locale(i, null, !0), i;
  });
})(bE);
var xE = xs, wE = /* @__PURE__ */ V({
  __proto__: null,
  default: xE
}, [xs]), ws = {}, YE = {
  get exports() {
    return ws;
  },
  set exports(e) {
    ws = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "en-in", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekStart: 1, yearStart: 4, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, ordinal: function(o) {
      var a = ["th", "st", "nd", "rd"], l = o % 100;
      return "[" + o + (a[(l - 20) % 10] || a[l] || a[0]) + "]";
    } };
    return s.default.locale(i, null, !0), i;
  });
})(YE);
var LE = ws, SE = /* @__PURE__ */ V({
  __proto__: null,
  default: LE
}, [ws]), Ys = {}, kE = {
  get exports() {
    return Ys;
  },
  set exports(e) {
    Ys = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "en-nz", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), weekStart: 1, weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), ordinal: function(o) {
      var a = ["th", "st", "nd", "rd"], l = o % 100;
      return "[" + o + (a[(l - 20) % 10] || a[l] || a[0]) + "]";
    }, formats: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" } };
    return s.default.locale(i, null, !0), i;
  });
})(kE);
var DE = Ys, TE = /* @__PURE__ */ V({
  __proto__: null,
  default: DE
}, [Ys]), Ls = {}, EE = {
  get exports() {
    return Ls;
  },
  set exports(e) {
    Ls = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "en-sg", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), weekStart: 1, weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" } };
    return s.default.locale(i, null, !0), i;
  });
})(EE);
var jE = Ls, PE = /* @__PURE__ */ V({
  __proto__: null,
  default: jE
}, [Ls]), Ss = {}, AE = {
  get exports() {
    return Ss;
  },
  set exports(e) {
    Ss = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "en-tt", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekStart: 1, yearStart: 4, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, ordinal: function(o) {
      var a = ["th", "st", "nd", "rd"], l = o % 100;
      return "[" + o + (a[(l - 20) % 10] || a[l] || a[0]) + "]";
    } };
    return s.default.locale(i, null, !0), i;
  });
})(AE);
var CE = Ss, $E = /* @__PURE__ */ V({
  __proto__: null,
  default: CE
}, [Ss]), ks = {}, HE = {
  get exports() {
    return ks;
  },
  set exports(e) {
    ks = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r();
  })(F, function() {
    return { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(n) {
      var r = ["th", "st", "nd", "rd"], s = n % 100;
      return "[" + n + (r[(s - 20) % 10] || r[s] || r[0]) + "]";
    } };
  });
})(HE);
var OE = ks, Im = /* @__PURE__ */ V({
  __proto__: null,
  default: OE
}, [ks]), Ds = {}, RE = {
  get exports() {
    return Ds;
  },
  set exports(e) {
    Ds = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "eo", weekdays: "dimanĉo_lundo_mardo_merkredo_ĵaŭdo_vendredo_sabato".split("_"), months: "januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"), weekStart: 1, weekdaysShort: "dim_lun_mard_merk_ĵaŭ_ven_sab".split("_"), monthsShort: "jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec".split("_"), weekdaysMin: "di_lu_ma_me_ĵa_ve_sa".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "D[-a de] MMMM, YYYY", LLL: "D[-a de] MMMM, YYYY HH:mm", LLLL: "dddd, [la] D[-a de] MMMM, YYYY HH:mm" }, relativeTime: { future: "post %s", past: "antaŭ %s", s: "sekundoj", m: "minuto", mm: "%d minutoj", h: "horo", hh: "%d horoj", d: "tago", dd: "%d tagoj", M: "monato", MM: "%d monatoj", y: "jaro", yy: "%d jaroj" } };
    return s.default.locale(i, null, !0), i;
  });
})(RE);
var NE = Ds, IE = /* @__PURE__ */ V({
  __proto__: null,
  default: NE
}, [Ds]), Ts = {}, FE = {
  get exports() {
    return Ts;
  },
  set exports(e) {
    Ts = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "es-do", weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"), weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"), weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"), months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), monthsShort: "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"), weekStart: 1, relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un día", dd: "%d días", M: "un mes", MM: "%d meses", y: "un año", yy: "%d años" }, ordinal: function(o) {
      return o + "º";
    }, formats: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY h:mm A", LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A" } };
    return s.default.locale(i, null, !0), i;
  });
})(FE);
var VE = Ts, zE = /* @__PURE__ */ V({
  __proto__: null,
  default: VE
}, [Ts]), Es = {}, BE = {
  get exports() {
    return Es;
  },
  set exports(e) {
    Es = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "es-mx", weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"), weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"), weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"), months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), monthsShort: "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"), relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un día", dd: "%d días", M: "un mes", MM: "%d meses", y: "un año", yy: "%d años" }, ordinal: function(o) {
      return o + "º";
    }, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY H:mm", LLLL: "dddd, D [de] MMMM [de] YYYY H:mm" } };
    return s.default.locale(i, null, !0), i;
  });
})(BE);
var WE = Es, UE = /* @__PURE__ */ V({
  __proto__: null,
  default: WE
}, [Es]), js = {}, KE = {
  get exports() {
    return js;
  },
  set exports(e) {
    js = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "es-pr", monthsShort: "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"), weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"), weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"), weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"), months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), weekStart: 1, formats: { LT: "h:mm A", LTS: "h:mm:ss A", L: "MM/DD/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY h:mm A", LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A" }, relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un día", dd: "%d días", M: "un mes", MM: "%d meses", y: "un año", yy: "%d años" }, ordinal: function(o) {
      return o + "º";
    } };
    return s.default.locale(i, null, !0), i;
  });
})(KE);
var GE = js, JE = /* @__PURE__ */ V({
  __proto__: null,
  default: GE
}, [js]), Ps = {}, qE = {
  get exports() {
    return Ps;
  },
  set exports(e) {
    Ps = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "es-us", weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"), weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"), weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"), months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), monthsShort: "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"), relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un día", dd: "%d días", M: "un mes", MM: "%d meses", y: "un año", yy: "%d años" }, ordinal: function(o) {
      return o + "º";
    }, formats: { LT: "h:mm A", LTS: "h:mm:ss A", L: "MM/DD/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY h:mm A", LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A" } };
    return s.default.locale(i, null, !0), i;
  });
})(qE);
var XE = Ps, ZE = /* @__PURE__ */ V({
  __proto__: null,
  default: XE
}, [Ps]), As = {}, QE = {
  get exports() {
    return As;
  },
  set exports(e) {
    As = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "es", monthsShort: "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"), weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"), weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"), weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"), months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), weekStart: 1, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY H:mm", LLLL: "dddd, D [de] MMMM [de] YYYY H:mm" }, relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un día", dd: "%d días", M: "un mes", MM: "%d meses", y: "un año", yy: "%d años" }, ordinal: function(o) {
      return o + "º";
    } };
    return s.default.locale(i, null, !0), i;
  });
})(QE);
var ej = As, tj = /* @__PURE__ */ V({
  __proto__: null,
  default: ej
}, [As]), Cs = {}, nj = {
  get exports() {
    return Cs;
  },
  set exports(e) {
    Cs = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(a) {
      return a && typeof a == "object" && "default" in a ? a : { default: a };
    }
    var s = r(n);
    function i(a, l, u, c) {
      var d = { s: ["mõne sekundi", "mõni sekund", "paar sekundit"], m: ["ühe minuti", "üks minut"], mm: ["%d minuti", "%d minutit"], h: ["ühe tunni", "tund aega", "üks tund"], hh: ["%d tunni", "%d tundi"], d: ["ühe päeva", "üks päev"], M: ["kuu aja", "kuu aega", "üks kuu"], MM: ["%d kuu", "%d kuud"], y: ["ühe aasta", "aasta", "üks aasta"], yy: ["%d aasta", "%d aastat"] };
      return l ? (d[u][2] ? d[u][2] : d[u][1]).replace("%d", a) : (c ? d[u][0] : d[u][1]).replace("%d", a);
    }
    var o = { name: "et", weekdays: "pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"), weekdaysShort: "P_E_T_K_N_R_L".split("_"), weekdaysMin: "P_E_T_K_N_R_L".split("_"), months: "jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"), monthsShort: "jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"), ordinal: function(a) {
      return a + ".";
    }, weekStart: 1, relativeTime: { future: "%s pärast", past: "%s tagasi", s: i, m: i, mm: i, h: i, hh: i, d: i, dd: "%d päeva", M: i, MM: i, y: i, yy: i }, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" } };
    return s.default.locale(o, null, !0), o;
  });
})(nj);
var rj = Cs, oj = /* @__PURE__ */ V({
  __proto__: null,
  default: rj
}, [Cs]), $s = {}, sj = {
  get exports() {
    return $s;
  },
  set exports(e) {
    $s = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "eu", weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"), months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"), weekStart: 1, weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"), monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"), weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY[ko] MMMM[ren] D[a]", LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm", LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm", l: "YYYY-M-D", ll: "YYYY[ko] MMM D[a]", lll: "YYYY[ko] MMM D[a] HH:mm", llll: "ddd, YYYY[ko] MMM D[a] HH:mm" }, relativeTime: { future: "%s barru", past: "duela %s", s: "segundo batzuk", m: "minutu bat", mm: "%d minutu", h: "ordu bat", hh: "%d ordu", d: "egun bat", dd: "%d egun", M: "hilabete bat", MM: "%d hilabete", y: "urte bat", yy: "%d urte" } };
    return s.default.locale(i, null, !0), i;
  });
})(sj);
var ij = $s, aj = /* @__PURE__ */ V({
  __proto__: null,
  default: ij
}, [$s]), Hs = {}, lj = {
  get exports() {
    return Hs;
  },
  set exports(e) {
    Hs = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "fa", weekdays: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"), weekdaysShort: "یک‌_دو_سه‌_چه_پن_جم_شن".split("_"), weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_"), weekStart: 6, months: "فروردین_اردیبهشت_خرداد_تیر_مرداد_شهریور_مهر_آبان_آذر_دی_بهمن_اسفند".split("_"), monthsShort: "فرو_ارد_خرد_تیر_مرد_شهر_مهر_آبا_آذر_دی_بهم_اسف".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, relativeTime: { future: "در %s", past: "%s قبل", s: "چند ثانیه", m: "یک دقیقه", mm: "%d دقیقه", h: "یک ساعت", hh: "%d ساعت", d: "یک روز", dd: "%d روز", M: "یک ماه", MM: "%d ماه", y: "یک سال", yy: "%d سال" } };
    return s.default.locale(i, null, !0), i;
  });
})(lj);
var uj = Hs, cj = /* @__PURE__ */ V({
  __proto__: null,
  default: uj
}, [Hs]), Os = {}, dj = {
  get exports() {
    return Os;
  },
  set exports(e) {
    Os = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(a) {
      return a && typeof a == "object" && "default" in a ? a : { default: a };
    }
    var s = r(n);
    function i(a, l, u, c) {
      var d = { s: "muutama sekunti", m: "minuutti", mm: "%d minuuttia", h: "tunti", hh: "%d tuntia", d: "päivä", dd: "%d päivää", M: "kuukausi", MM: "%d kuukautta", y: "vuosi", yy: "%d vuotta", numbers: "nolla_yksi_kaksi_kolme_neljä_viisi_kuusi_seitsemän_kahdeksan_yhdeksän".split("_") }, f = { s: "muutaman sekunnin", m: "minuutin", mm: "%d minuutin", h: "tunnin", hh: "%d tunnin", d: "päivän", dd: "%d päivän", M: "kuukauden", MM: "%d kuukauden", y: "vuoden", yy: "%d vuoden", numbers: "nollan_yhden_kahden_kolmen_neljän_viiden_kuuden_seitsemän_kahdeksan_yhdeksän".split("_") }, m = c && !l ? f : d, p = m[u];
      return a < 10 ? p.replace("%d", m.numbers[a]) : p.replace("%d", a);
    }
    var o = { name: "fi", weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"), weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"), weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"), months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"), monthsShort: "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"), ordinal: function(a) {
      return a + ".";
    }, weekStart: 1, yearStart: 4, relativeTime: { future: "%s päästä", past: "%s sitten", s: i, m: i, mm: i, h: i, hh: i, d: i, dd: i, M: i, MM: i, y: i, yy: i }, formats: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD.MM.YYYY", LL: "D. MMMM[ta] YYYY", LLL: "D. MMMM[ta] YYYY, [klo] HH.mm", LLLL: "dddd, D. MMMM[ta] YYYY, [klo] HH.mm", l: "D.M.YYYY", ll: "D. MMM YYYY", lll: "D. MMM YYYY, [klo] HH.mm", llll: "ddd, D. MMM YYYY, [klo] HH.mm" } };
    return s.default.locale(o, null, !0), o;
  });
})(dj);
var fj = Os, mj = /* @__PURE__ */ V({
  __proto__: null,
  default: fj
}, [Os]), Rs = {}, pj = {
  get exports() {
    return Rs;
  },
  set exports(e) {
    Rs = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "fo", weekdays: "sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split("_"), months: "januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split("_"), weekStart: 1, weekdaysShort: "sun_mán_týs_mik_hós_frí_ley".split("_"), monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"), weekdaysMin: "su_má_tý_mi_hó_fr_le".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D. MMMM, YYYY HH:mm" }, relativeTime: { future: "um %s", past: "%s síðani", s: "fá sekund", m: "ein minuttur", mm: "%d minuttir", h: "ein tími", hh: "%d tímar", d: "ein dagur", dd: "%d dagar", M: "ein mánaður", MM: "%d mánaðir", y: "eitt ár", yy: "%d ár" } };
    return s.default.locale(i, null, !0), i;
  });
})(pj);
var hj = Rs, _j = /* @__PURE__ */ V({
  __proto__: null,
  default: hj
}, [Rs]), Ns = {}, vj = {
  get exports() {
    return Ns;
  },
  set exports(e) {
    Ns = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "fr-ch", weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"), months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"), weekStart: 1, weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"), monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"), weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, relativeTime: { future: "dans %s", past: "il y a %s", s: "quelques secondes", m: "une minute", mm: "%d minutes", h: "une heure", hh: "%d heures", d: "un jour", dd: "%d jours", M: "un mois", MM: "%d mois", y: "un an", yy: "%d ans" } };
    return s.default.locale(i, null, !0), i;
  });
})(vj);
var gj = Ns, yj = /* @__PURE__ */ V({
  __proto__: null,
  default: gj
}, [Ns]), Is = {}, Mj = {
  get exports() {
    return Is;
  },
  set exports(e) {
    Is = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "fr", weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"), weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"), weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"), months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"), monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"), weekStart: 1, yearStart: 4, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, relativeTime: { future: "dans %s", past: "il y a %s", s: "quelques secondes", m: "une minute", mm: "%d minutes", h: "une heure", hh: "%d heures", d: "un jour", dd: "%d jours", M: "un mois", MM: "%d mois", y: "un an", yy: "%d ans" }, ordinal: function(o) {
      return "" + o + (o === 1 ? "er" : "");
    } };
    return s.default.locale(i, null, !0), i;
  });
})(Mj);
var bj = Is, xj = /* @__PURE__ */ V({
  __proto__: null,
  default: bj
}, [Is]), Fs = {}, wj = {
  get exports() {
    return Fs;
  },
  set exports(e) {
    Fs = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "fy", weekdays: "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"), months: "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"), monthsShort: "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_"), weekStart: 1, weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"), weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD-MM-YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, relativeTime: { future: "oer %s", past: "%s lyn", s: "in pear sekonden", m: "ien minút", mm: "%d minuten", h: "ien oere", hh: "%d oeren", d: "ien dei", dd: "%d dagen", M: "ien moanne", MM: "%d moannen", y: "ien jier", yy: "%d jierren" } };
    return s.default.locale(i, null, !0), i;
  });
})(wj);
var Yj = Fs, Lj = /* @__PURE__ */ V({
  __proto__: null,
  default: Yj
}, [Fs]), Vs = {}, Sj = {
  get exports() {
    return Vs;
  },
  set exports(e) {
    Vs = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "ga", weekdays: "Dé Domhnaigh_Dé Luain_Dé Máirt_Dé Céadaoin_Déardaoin_Dé hAoine_Dé Satharn".split("_"), months: "Eanáir_Feabhra_Márta_Aibreán_Bealtaine_Méitheamh_Iúil_Lúnasa_Meán Fómhair_Deaireadh Fómhair_Samhain_Nollaig".split("_"), weekStart: 1, weekdaysShort: "Dom_Lua_Mái_Céa_Déa_hAo_Sat".split("_"), monthsShort: "Eaná_Feab_Márt_Aibr_Beal_Méit_Iúil_Lúna_Meán_Deai_Samh_Noll".split("_"), weekdaysMin: "Do_Lu_Má_Ce_Dé_hA_Sa".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, relativeTime: { future: "i %s", past: "%s ó shin", s: "cúpla soicind", m: "nóiméad", mm: "%d nóiméad", h: "uair an chloig", hh: "%d uair an chloig", d: "lá", dd: "%d lá", M: "mí", MM: "%d mí", y: "bliain", yy: "%d bliain" } };
    return s.default.locale(i, null, !0), i;
  });
})(Sj);
var kj = Vs, Dj = /* @__PURE__ */ V({
  __proto__: null,
  default: kj
}, [Vs]), zs = {}, Tj = {
  get exports() {
    return zs;
  },
  set exports(e) {
    zs = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "gd", weekdays: "Didòmhnaich_Diluain_Dimàirt_Diciadain_Diardaoin_Dihaoine_Disathairne".split("_"), months: "Am Faoilleach_An Gearran_Am Màrt_An Giblean_An Cèitean_An t-Ògmhios_An t-Iuchar_An Lùnastal_An t-Sultain_An Dàmhair_An t-Samhain_An Dùbhlachd".split("_"), weekStart: 1, weekdaysShort: "Did_Dil_Dim_Dic_Dia_Dih_Dis".split("_"), monthsShort: "Faoi_Gear_Màrt_Gibl_Cèit_Ògmh_Iuch_Lùn_Sult_Dàmh_Samh_Dùbh".split("_"), weekdaysMin: "Dò_Lu_Mà_Ci_Ar_Ha_Sa".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, relativeTime: { future: "ann an %s", past: "bho chionn %s", s: "beagan diogan", m: "mionaid", mm: "%d mionaidean", h: "uair", hh: "%d uairean", d: "latha", dd: "%d latha", M: "mìos", MM: "%d mìosan", y: "bliadhna", yy: "%d bliadhna" } };
    return s.default.locale(i, null, !0), i;
  });
})(Tj);
var Ej = zs, jj = /* @__PURE__ */ V({
  __proto__: null,
  default: Ej
}, [zs]), Bs = {}, Pj = {
  get exports() {
    return Bs;
  },
  set exports(e) {
    Bs = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "gl", weekdays: "domingo_luns_martes_mércores_xoves_venres_sábado".split("_"), months: "xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro".split("_"), weekStart: 1, weekdaysShort: "dom._lun._mar._mér._xov._ven._sáb.".split("_"), monthsShort: "xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.".split("_"), weekdaysMin: "do_lu_ma_mé_xo_ve_sá".split("_"), ordinal: function(o) {
      return o + "º";
    }, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY H:mm", LLLL: "dddd, D [de] MMMM [de] YYYY H:mm" }, relativeTime: { future: "en %s", past: "fai %s", s: "uns segundos", m: "un minuto", mm: "%d minutos", h: "unha hora", hh: "%d horas", d: "un día", dd: "%d días", M: "un mes", MM: "%d meses", y: "un ano", yy: "%d anos" } };
    return s.default.locale(i, null, !0), i;
  });
})(Pj);
var Aj = Bs, Cj = /* @__PURE__ */ V({
  __proto__: null,
  default: Aj
}, [Bs]), Ws = {}, $j = {
  get exports() {
    return Ws;
  },
  set exports(e) {
    Ws = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "gom-latn", weekdays: "Aitar_Somar_Mongllar_Budvar_Brestar_Sukrar_Son'var".split("_"), months: "Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr".split("_"), weekStart: 1, weekdaysShort: "Ait._Som._Mon._Bud._Bre._Suk._Son.".split("_"), monthsShort: "Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.".split("_"), weekdaysMin: "Ai_Sm_Mo_Bu_Br_Su_Sn".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "A h:mm [vazta]", LTS: "A h:mm:ss [vazta]", L: "DD-MM-YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY A h:mm [vazta]", LLLL: "dddd, MMMM[achea] Do, YYYY, A h:mm [vazta]", llll: "ddd, D MMM YYYY, A h:mm [vazta]" } };
    return s.default.locale(i, null, !0), i;
  });
})($j);
var Hj = Ws, Oj = /* @__PURE__ */ V({
  __proto__: null,
  default: Hj
}, [Ws]), Us = {}, Rj = {
  get exports() {
    return Us;
  },
  set exports(e) {
    Us = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "gu", weekdays: "રવિવાર_સોમવાર_મંગળવાર_બુધ્વાર_ગુરુવાર_શુક્રવાર_શનિવાર".split("_"), months: "જાન્યુઆરી_ફેબ્રુઆરી_માર્ચ_એપ્રિલ_મે_જૂન_જુલાઈ_ઑગસ્ટ_સપ્ટેમ્બર_ઑક્ટ્બર_નવેમ્બર_ડિસેમ્બર".split("_"), weekdaysShort: "રવિ_સોમ_મંગળ_બુધ્_ગુરુ_શુક્ર_શનિ".split("_"), monthsShort: "જાન્યુ._ફેબ્રુ._માર્ચ_એપ્રિ._મે_જૂન_જુલા._ઑગ._સપ્ટે._ઑક્ટ્._નવે._ડિસે.".split("_"), weekdaysMin: "ર_સો_મં_બુ_ગુ_શુ_શ".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "A h:mm વાગ્યે", LTS: "A h:mm:ss વાગ્યે", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm વાગ્યે", LLLL: "dddd, D MMMM YYYY, A h:mm વાગ્યે" }, relativeTime: { future: "%s મા", past: "%s પેહલા", s: "અમુક પળો", m: "એક મિનિટ", mm: "%d મિનિટ", h: "એક કલાક", hh: "%d કલાક", d: "એક દિવસ", dd: "%d દિવસ", M: "એક મહિનો", MM: "%d મહિનો", y: "એક વર્ષ", yy: "%d વર્ષ" } };
    return s.default.locale(i, null, !0), i;
  });
})(Rj);
var Nj = Us, Ij = /* @__PURE__ */ V({
  __proto__: null,
  default: Nj
}, [Us]), Ks = {}, Fj = {
  get exports() {
    return Ks;
  },
  set exports(e) {
    Ks = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(l) {
      return l && typeof l == "object" && "default" in l ? l : { default: l };
    }
    var s = r(n), i = { s: "מספר שניות", ss: "%d שניות", m: "דקה", mm: "%d דקות", h: "שעה", hh: "%d שעות", hh2: "שעתיים", d: "יום", dd: "%d ימים", dd2: "יומיים", M: "חודש", MM: "%d חודשים", MM2: "חודשיים", y: "שנה", yy: "%d שנים", yy2: "שנתיים" };
    function o(l, u, c) {
      return (i[c + (l === 2 ? "2" : "")] || i[c]).replace("%d", l);
    }
    var a = { name: "he", weekdays: "ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"), weekdaysShort: "א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"), weekdaysMin: "א׳_ב׳_ג׳_ד׳_ה׳_ו_ש׳".split("_"), months: "ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"), monthsShort: "ינו_פבר_מרץ_אפר_מאי_יונ_יול_אוג_ספט_אוק_נוב_דצמ".split("_"), relativeTime: { future: "בעוד %s", past: "לפני %s", s: o, m: o, mm: o, h: o, hh: o, d: o, dd: o, M: o, MM: o, y: o, yy: o }, ordinal: function(l) {
      return l;
    }, format: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D [ב]MMMM YYYY", LLL: "D [ב]MMMM YYYY HH:mm", LLLL: "dddd, D [ב]MMMM YYYY HH:mm", l: "D/M/YYYY", ll: "D MMM YYYY", lll: "D MMM YYYY HH:mm", llll: "ddd, D MMM YYYY HH:mm" }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D [ב]MMMM YYYY", LLL: "D [ב]MMMM YYYY HH:mm", LLLL: "dddd, D [ב]MMMM YYYY HH:mm", l: "D/M/YYYY", ll: "D MMM YYYY", lll: "D MMM YYYY HH:mm", llll: "ddd, D MMM YYYY HH:mm" } };
    return s.default.locale(a, null, !0), a;
  });
})(Fj);
var Vj = Ks, zj = /* @__PURE__ */ V({
  __proto__: null,
  default: Vj
}, [Ks]), Gs = {}, Bj = {
  get exports() {
    return Gs;
  },
  set exports(e) {
    Gs = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "hi", weekdays: "रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"), months: "जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"), weekdaysShort: "रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"), monthsShort: "जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"), weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "A h:mm बजे", LTS: "A h:mm:ss बजे", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm बजे", LLLL: "dddd, D MMMM YYYY, A h:mm बजे" }, relativeTime: { future: "%s में", past: "%s पहले", s: "कुछ ही क्षण", m: "एक मिनट", mm: "%d मिनट", h: "एक घंटा", hh: "%d घंटे", d: "एक दिन", dd: "%d दिन", M: "एक महीने", MM: "%d महीने", y: "एक वर्ष", yy: "%d वर्ष" } };
    return s.default.locale(i, null, !0), i;
  });
})(Bj);
var Wj = Gs, Uj = /* @__PURE__ */ V({
  __proto__: null,
  default: Wj
}, [Gs]), Js = {}, Kj = {
  get exports() {
    return Js;
  },
  set exports(e) {
    Js = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(c) {
      return c && typeof c == "object" && "default" in c ? c : { default: c };
    }
    var s = r(n), i = "siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"), o = "siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_"), a = /D[oD]?(\[[^[\]]*\]|\s)+MMMM?/, l = function(c, d) {
      return a.test(d) ? i[c.month()] : o[c.month()];
    };
    l.s = o, l.f = i;
    var u = { name: "hr", weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"), weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"), weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"), months: l, monthsShort: "sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"), weekStart: 1, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" }, relativeTime: { future: "za %s", past: "prije %s", s: "sekunda", m: "minuta", mm: "%d minuta", h: "sat", hh: "%d sati", d: "dan", dd: "%d dana", M: "mjesec", MM: "%d mjeseci", y: "godina", yy: "%d godine" }, ordinal: function(c) {
      return c + ".";
    } };
    return s.default.locale(u, null, !0), u;
  });
})(Kj);
var Gj = Js, Jj = /* @__PURE__ */ V({
  __proto__: null,
  default: Gj
}, [Js]), qs = {}, qj = {
  get exports() {
    return qs;
  },
  set exports(e) {
    qs = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "ht", weekdays: "dimanch_lendi_madi_mèkredi_jedi_vandredi_samdi".split("_"), months: "janvye_fevriye_mas_avril_me_jen_jiyè_out_septanm_oktòb_novanm_desanm".split("_"), weekdaysShort: "dim._len._mad._mèk._jed._van._sam.".split("_"), monthsShort: "jan._fev._mas_avr._me_jen_jiyè._out_sept._okt._nov._des.".split("_"), weekdaysMin: "di_le_ma_mè_je_va_sa".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, relativeTime: { future: "nan %s", past: "sa gen %s", s: "kèk segond", m: "yon minit", mm: "%d minit", h: "inèdtan", hh: "%d zè", d: "yon jou", dd: "%d jou", M: "yon mwa", MM: "%d mwa", y: "yon ane", yy: "%d ane" } };
    return s.default.locale(i, null, !0), i;
  });
})(qj);
var Xj = qs, Zj = /* @__PURE__ */ V({
  __proto__: null,
  default: Xj
}, [qs]), Xs = {}, Qj = {
  get exports() {
    return Xs;
  },
  set exports(e) {
    Xs = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "hu", weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"), weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"), weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"), months: "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"), monthsShort: "jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"), ordinal: function(o) {
      return o + ".";
    }, weekStart: 1, relativeTime: { future: "%s múlva", past: "%s", s: function(o, a, l, u) {
      return "néhány másodperc" + (u || a ? "" : "e");
    }, m: function(o, a, l, u) {
      return "egy perc" + (u || a ? "" : "e");
    }, mm: function(o, a, l, u) {
      return o + " perc" + (u || a ? "" : "e");
    }, h: function(o, a, l, u) {
      return "egy " + (u || a ? "óra" : "órája");
    }, hh: function(o, a, l, u) {
      return o + " " + (u || a ? "óra" : "órája");
    }, d: function(o, a, l, u) {
      return "egy " + (u || a ? "nap" : "napja");
    }, dd: function(o, a, l, u) {
      return o + " " + (u || a ? "nap" : "napja");
    }, M: function(o, a, l, u) {
      return "egy " + (u || a ? "hónap" : "hónapja");
    }, MM: function(o, a, l, u) {
      return o + " " + (u || a ? "hónap" : "hónapja");
    }, y: function(o, a, l, u) {
      return "egy " + (u || a ? "év" : "éve");
    }, yy: function(o, a, l, u) {
      return o + " " + (u || a ? "év" : "éve");
    } }, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "YYYY.MM.DD.", LL: "YYYY. MMMM D.", LLL: "YYYY. MMMM D. H:mm", LLLL: "YYYY. MMMM D., dddd H:mm" } };
    return s.default.locale(i, null, !0), i;
  });
})(Qj);
var eP = Xs, tP = /* @__PURE__ */ V({
  __proto__: null,
  default: eP
}, [Xs]), Zs = {}, nP = {
  get exports() {
    return Zs;
  },
  set exports(e) {
    Zs = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "hy-am", weekdays: "կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split("_"), months: "հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split("_"), weekStart: 1, weekdaysShort: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"), monthsShort: "հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_"), weekdaysMin: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY թ.", LLL: "D MMMM YYYY թ., HH:mm", LLLL: "dddd, D MMMM YYYY թ., HH:mm" }, relativeTime: { future: "%s հետո", past: "%s առաջ", s: "մի քանի վայրկյան", m: "րոպե", mm: "%d րոպե", h: "ժամ", hh: "%d ժամ", d: "օր", dd: "%d օր", M: "ամիս", MM: "%d ամիս", y: "տարի", yy: "%d տարի" } };
    return s.default.locale(i, null, !0), i;
  });
})(nP);
var rP = Zs, oP = /* @__PURE__ */ V({
  __proto__: null,
  default: rP
}, [Zs]), Qs = {}, sP = {
  get exports() {
    return Qs;
  },
  set exports(e) {
    Qs = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "id", weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"), months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"), weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"), monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des".split("_"), weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"), weekStart: 1, formats: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [pukul] HH.mm", LLLL: "dddd, D MMMM YYYY [pukul] HH.mm" }, relativeTime: { future: "dalam %s", past: "%s yang lalu", s: "beberapa detik", m: "semenit", mm: "%d menit", h: "sejam", hh: "%d jam", d: "sehari", dd: "%d hari", M: "sebulan", MM: "%d bulan", y: "setahun", yy: "%d tahun" }, ordinal: function(o) {
      return o + ".";
    } };
    return s.default.locale(i, null, !0), i;
  });
})(sP);
var iP = Qs, aP = /* @__PURE__ */ V({
  __proto__: null,
  default: iP
}, [Qs]), ei = {}, lP = {
  get exports() {
    return ei;
  },
  set exports(e) {
    ei = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(l) {
      return l && typeof l == "object" && "default" in l ? l : { default: l };
    }
    var s = r(n), i = { s: ["nokkrar sekúndur", "nokkrar sekúndur", "nokkrum sekúndum"], m: ["mínúta", "mínútu", "mínútu"], mm: ["mínútur", "mínútur", "mínútum"], h: ["klukkustund", "klukkustund", "klukkustund"], hh: ["klukkustundir", "klukkustundir", "klukkustundum"], d: ["dagur", "dag", "degi"], dd: ["dagar", "daga", "dögum"], M: ["mánuður", "mánuð", "mánuði"], MM: ["mánuðir", "mánuði", "mánuðum"], y: ["ár", "ár", "ári"], yy: ["ár", "ár", "árum"] };
    function o(l, u, c, d) {
      var f = function(m, p, h, _) {
        var v = _ ? 0 : h ? 1 : 2, M = m.length === 2 && p % 10 == 1 ? m[0] : m, y = i[M][v];
        return m.length === 1 ? y : "%d " + y;
      }(c, l, d, u);
      return f.replace("%d", l);
    }
    var a = { name: "is", weekdays: "sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"), months: "janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"), weekStart: 1, weekdaysShort: "sun_mán_þri_mið_fim_fös_lau".split("_"), monthsShort: "jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"), weekdaysMin: "Su_Má_Þr_Mi_Fi_Fö_La".split("_"), ordinal: function(l) {
      return l;
    }, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY [kl.] H:mm", LLLL: "dddd, D. MMMM YYYY [kl.] H:mm" }, relativeTime: { future: "eftir %s", past: "fyrir %s síðan", s: o, m: o, mm: o, h: o, hh: o, d: o, dd: o, M: o, MM: o, y: o, yy: o } };
    return s.default.locale(a, null, !0), a;
  });
})(lP);
var uP = ei, cP = /* @__PURE__ */ V({
  __proto__: null,
  default: uP
}, [ei]), ti = {}, dP = {
  get exports() {
    return ti;
  },
  set exports(e) {
    ti = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "it-ch", weekdays: "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"), months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"), weekStart: 1, weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"), monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"), weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, relativeTime: { future: "tra %s", past: "%s fa", s: "alcuni secondi", m: "un minuto", mm: "%d minuti", h: "un'ora", hh: "%d ore", d: "un giorno", dd: "%d giorni", M: "un mese", MM: "%d mesi", y: "un anno", yy: "%d anni" } };
    return s.default.locale(i, null, !0), i;
  });
})(dP);
var fP = ti, mP = /* @__PURE__ */ V({
  __proto__: null,
  default: fP
}, [ti]), ni = {}, pP = {
  get exports() {
    return ni;
  },
  set exports(e) {
    ni = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "it", weekdays: "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"), weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"), weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"), months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"), weekStart: 1, monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"), formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, relativeTime: { future: "tra %s", past: "%s fa", s: "qualche secondo", m: "un minuto", mm: "%d minuti", h: "un' ora", hh: "%d ore", d: "un giorno", dd: "%d giorni", M: "un mese", MM: "%d mesi", y: "un anno", yy: "%d anni" }, ordinal: function(o) {
      return o + "º";
    } };
    return s.default.locale(i, null, !0), i;
  });
})(pP);
var hP = ni, _P = /* @__PURE__ */ V({
  __proto__: null,
  default: hP
}, [ni]), ri = {}, vP = {
  get exports() {
    return ri;
  },
  set exports(e) {
    ri = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "ja", weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"), weekdaysShort: "日_月_火_水_木_金_土".split("_"), weekdaysMin: "日_月_火_水_木_金_土".split("_"), months: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"), monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"), ordinal: function(o) {
      return o + "日";
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY/MM/DD", LL: "YYYY年M月D日", LLL: "YYYY年M月D日 HH:mm", LLLL: "YYYY年M月D日 dddd HH:mm", l: "YYYY/MM/DD", ll: "YYYY年M月D日", lll: "YYYY年M月D日 HH:mm", llll: "YYYY年M月D日(ddd) HH:mm" }, meridiem: function(o) {
      return o < 12 ? "午前" : "午後";
    }, relativeTime: { future: "%s後", past: "%s前", s: "数秒", m: "1分", mm: "%d分", h: "1時間", hh: "%d時間", d: "1日", dd: "%d日", M: "1ヶ月", MM: "%dヶ月", y: "1年", yy: "%d年" } };
    return s.default.locale(i, null, !0), i;
  });
})(vP);
var gP = ri, yP = /* @__PURE__ */ V({
  __proto__: null,
  default: gP
}, [ri]), oi = {}, MP = {
  get exports() {
    return oi;
  },
  set exports(e) {
    oi = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "jv", weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"), months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"), weekStart: 1, weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"), monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"), weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [pukul] HH.mm", LLLL: "dddd, D MMMM YYYY [pukul] HH.mm" }, relativeTime: { future: "wonten ing %s", past: "%s ingkang kepengker", s: "sawetawis detik", m: "setunggal menit", mm: "%d menit", h: "setunggal jam", hh: "%d jam", d: "sedinten", dd: "%d dinten", M: "sewulan", MM: "%d wulan", y: "setaun", yy: "%d taun" } };
    return s.default.locale(i, null, !0), i;
  });
})(MP);
var bP = oi, xP = /* @__PURE__ */ V({
  __proto__: null,
  default: bP
}, [oi]), si = {}, wP = {
  get exports() {
    return si;
  },
  set exports(e) {
    si = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "ka", weekdays: "კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"), weekdaysShort: "კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"), weekdaysMin: "კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"), months: "იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"), monthsShort: "იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"), weekStart: 1, formats: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, relativeTime: { future: "%s შემდეგ", past: "%s წინ", s: "წამი", m: "წუთი", mm: "%d წუთი", h: "საათი", hh: "%d საათის", d: "დღეს", dd: "%d დღის განმავლობაში", M: "თვის", MM: "%d თვის", y: "წელი", yy: "%d წლის" }, ordinal: function(o) {
      return o;
    } };
    return s.default.locale(i, null, !0), i;
  });
})(wP);
var YP = si, LP = /* @__PURE__ */ V({
  __proto__: null,
  default: YP
}, [si]), ii = {}, SP = {
  get exports() {
    return ii;
  },
  set exports(e) {
    ii = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "kk", weekdays: "жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі".split("_"), weekdaysShort: "жек_дүй_сей_сәр_бей_жұм_сен".split("_"), weekdaysMin: "жк_дй_сй_ср_бй_жм_сн".split("_"), months: "қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан".split("_"), monthsShort: "қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел".split("_"), weekStart: 1, relativeTime: { future: "%s ішінде", past: "%s бұрын", s: "бірнеше секунд", m: "бір минут", mm: "%d минут", h: "бір сағат", hh: "%d сағат", d: "бір күн", dd: "%d күн", M: "бір ай", MM: "%d ай", y: "бір жыл", yy: "%d жыл" }, ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" } };
    return s.default.locale(i, null, !0), i;
  });
})(SP);
var kP = ii, DP = /* @__PURE__ */ V({
  __proto__: null,
  default: kP
}, [ii]), ai = {}, TP = {
  get exports() {
    return ai;
  },
  set exports(e) {
    ai = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "ko", weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"), weekdaysShort: "일_월_화_수_목_금_토".split("_"), weekdaysMin: "일_월_화_수_목_금_토".split("_"), months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"), monthsShort: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "A h:mm", LTS: "A h:mm:ss", L: "YYYY.MM.DD.", LL: "YYYY년 MMMM D일", LLL: "YYYY년 MMMM D일 A h:mm", LLLL: "YYYY년 MMMM D일 dddd A h:mm", l: "YYYY.MM.DD.", ll: "YYYY년 MMMM D일", lll: "YYYY년 MMMM D일 A h:mm", llll: "YYYY년 MMMM D일 dddd A h:mm" }, meridiem: function(o) {
      return o < 12 ? "오전" : "오후";
    }, relativeTime: { future: "%s 후", past: "%s 전", s: "몇 초", m: "1분", mm: "%d분", h: "한 시간", hh: "%d시간", d: "하루", dd: "%d일", M: "한 달", MM: "%d달", y: "일 년", yy: "%d년" } };
    return s.default.locale(i, null, !0), i;
  });
})(TP);
var EP = ai, jP = /* @__PURE__ */ V({
  __proto__: null,
  default: EP
}, [ai]), fd = {}, PP = {};
(function(e, t) {
  (function(n, r) {
    r(t, P);
  })(F, function(n, r) {
    function s(c) {
      return c && typeof c == "object" && "default" in c ? c : { default: c };
    }
    var i = s(r), o = { 1: "١", 2: "٢", 3: "٣", 4: "٤", 5: "٥", 6: "٦", 7: "٧", 8: "٨", 9: "٩", 0: "٠" }, a = { "١": "1", "٢": "2", "٣": "3", "٤": "4", "٥": "5", "٦": "6", "٧": "7", "٨": "8", "٩": "9", "٠": "0" }, l = ["کانوونی دووەم", "شوبات", "ئادار", "نیسان", "ئایار", "حوزەیران", "تەممووز", "ئاب", "ئەیلوول", "تشرینی یەکەم", "تشرینی دووەم", "کانوونی یەکەم"], u = { name: "ku", months: l, monthsShort: l, weekdays: "یەکشەممە_دووشەممە_سێشەممە_چوارشەممە_پێنجشەممە_هەینی_شەممە".split("_"), weekdaysShort: "یەکشەم_دووشەم_سێشەم_چوارشەم_پێنجشەم_هەینی_شەممە".split("_"), weekStart: 6, weekdaysMin: "ی_د_س_چ_پ_هـ_ش".split("_"), preparse: function(c) {
      return c.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function(d) {
        return a[d];
      }).replace(/،/g, ",");
    }, postformat: function(c) {
      return c.replace(/\d/g, function(d) {
        return o[d];
      }).replace(/,/g, "،");
    }, ordinal: function(c) {
      return c;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, meridiem: function(c) {
      return c < 12 ? "پ.ن" : "د.ن";
    }, relativeTime: { future: "لە %s", past: "لەمەوپێش %s", s: "چەند چرکەیەک", m: "یەک خولەک", mm: "%d خولەک", h: "یەک کاتژمێر", hh: "%d کاتژمێر", d: "یەک ڕۆژ", dd: "%d ڕۆژ", M: "یەک مانگ", MM: "%d مانگ", y: "یەک ساڵ", yy: "%d ساڵ" } };
    i.default.locale(u, null, !0), n.default = u, n.englishToArabicNumbersMap = o, Object.defineProperty(n, "__esModule", { value: !0 });
  });
})(PP, fd);
var AP = /* @__PURE__ */ wD(fd), CP = /* @__PURE__ */ V({
  __proto__: null,
  default: AP
}, [fd]), li = {}, $P = {
  get exports() {
    return li;
  },
  set exports(e) {
    li = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "ky", weekdays: "Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби".split("_"), months: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"), weekStart: 1, weekdaysShort: "Жек_Дүй_Шей_Шар_Бей_Жум_Ише".split("_"), monthsShort: "янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"), weekdaysMin: "Жк_Дй_Шй_Шр_Бй_Жм_Иш".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, relativeTime: { future: "%s ичинде", past: "%s мурун", s: "бирнече секунд", m: "бир мүнөт", mm: "%d мүнөт", h: "бир саат", hh: "%d саат", d: "бир күн", dd: "%d күн", M: "бир ай", MM: "%d ай", y: "бир жыл", yy: "%d жыл" } };
    return s.default.locale(i, null, !0), i;
  });
})($P);
var HP = li, OP = /* @__PURE__ */ V({
  __proto__: null,
  default: HP
}, [li]), ui = {}, RP = {
  get exports() {
    return ui;
  },
  set exports(e) {
    ui = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "lb", weekdays: "Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"), months: "Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), weekStart: 1, weekdaysShort: "So._Mé._Dë._Më._Do._Fr._Sa.".split("_"), monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"), weekdaysMin: "So_Mé_Dë_Më_Do_Fr_Sa".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "H:mm [Auer]", LTS: "H:mm:ss [Auer]", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm [Auer]", LLLL: "dddd, D. MMMM YYYY H:mm [Auer]" } };
    return s.default.locale(i, null, !0), i;
  });
})(RP);
var NP = ui, IP = /* @__PURE__ */ V({
  __proto__: null,
  default: NP
}, [ui]), ci = {}, FP = {
  get exports() {
    return ci;
  },
  set exports(e) {
    ci = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "lo", weekdays: "ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"), months: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"), weekdaysShort: "ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"), monthsShort: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"), weekdaysMin: "ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "ວັນdddd D MMMM YYYY HH:mm" }, relativeTime: { future: "ອີກ %s", past: "%sຜ່ານມາ", s: "ບໍ່ເທົ່າໃດວິນາທີ", m: "1 ນາທີ", mm: "%d ນາທີ", h: "1 ຊົ່ວໂມງ", hh: "%d ຊົ່ວໂມງ", d: "1 ມື້", dd: "%d ມື້", M: "1 ເດືອນ", MM: "%d ເດືອນ", y: "1 ປີ", yy: "%d ປີ" } };
    return s.default.locale(i, null, !0), i;
  });
})(FP);
var VP = ci, zP = /* @__PURE__ */ V({
  __proto__: null,
  default: VP
}, [ci]), di = {}, BP = {
  get exports() {
    return di;
  },
  set exports(e) {
    di = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(c) {
      return c && typeof c == "object" && "default" in c ? c : { default: c };
    }
    var s = r(n), i = "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"), o = "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"), a = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/, l = function(c, d) {
      return a.test(d) ? i[c.month()] : o[c.month()];
    };
    l.s = o, l.f = i;
    var u = { name: "lt", weekdays: "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"), weekdaysShort: "sek_pir_ant_tre_ket_pen_šeš".split("_"), weekdaysMin: "s_p_a_t_k_pn_š".split("_"), months: l, monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"), ordinal: function(c) {
      return c + ".";
    }, weekStart: 1, relativeTime: { future: "už %s", past: "prieš %s", s: "kelias sekundes", m: "minutę", mm: "%d minutes", h: "valandą", hh: "%d valandas", d: "dieną", dd: "%d dienas", M: "mėnesį", MM: "%d mėnesius", y: "metus", yy: "%d metus" }, format: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY [m.] MMMM D [d.]", LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]", LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]", l: "YYYY-MM-DD", ll: "YYYY [m.] MMMM D [d.]", lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]", llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]" }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY [m.] MMMM D [d.]", LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]", LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]", l: "YYYY-MM-DD", ll: "YYYY [m.] MMMM D [d.]", lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]", llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]" } };
    return s.default.locale(u, null, !0), u;
  });
})(BP);
var WP = di, UP = /* @__PURE__ */ V({
  __proto__: null,
  default: WP
}, [di]), fi = {}, KP = {
  get exports() {
    return fi;
  },
  set exports(e) {
    fi = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "lv", weekdays: "svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"), months: "janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"), weekStart: 1, weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"), monthsShort: "jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"), weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY.", LL: "YYYY. [gada] D. MMMM", LLL: "YYYY. [gada] D. MMMM, HH:mm", LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm" }, relativeTime: { future: "pēc %s", past: "pirms %s", s: "dažām sekundēm", m: "minūtes", mm: "%d minūtēm", h: "stundas", hh: "%d stundām", d: "dienas", dd: "%d dienām", M: "mēneša", MM: "%d mēnešiem", y: "gada", yy: "%d gadiem" } };
    return s.default.locale(i, null, !0), i;
  });
})(KP);
var GP = fi, JP = /* @__PURE__ */ V({
  __proto__: null,
  default: GP
}, [fi]), mi = {}, qP = {
  get exports() {
    return mi;
  },
  set exports(e) {
    mi = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "me", weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"), months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"), weekStart: 1, weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"), monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"), weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" } };
    return s.default.locale(i, null, !0), i;
  });
})(qP);
var XP = mi, ZP = /* @__PURE__ */ V({
  __proto__: null,
  default: XP
}, [mi]), pi = {}, QP = {
  get exports() {
    return pi;
  },
  set exports(e) {
    pi = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "mi", weekdays: "Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei".split("_"), months: "Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea".split("_"), weekStart: 1, weekdaysShort: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"), monthsShort: "Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split("_"), weekdaysMin: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [i] HH:mm", LLLL: "dddd, D MMMM YYYY [i] HH:mm" }, relativeTime: { future: "i roto i %s", past: "%s i mua", s: "te hēkona ruarua", m: "he meneti", mm: "%d meneti", h: "te haora", hh: "%d haora", d: "he ra", dd: "%d ra", M: "he marama", MM: "%d marama", y: "he tau", yy: "%d tau" } };
    return s.default.locale(i, null, !0), i;
  });
})(QP);
var eA = pi, tA = /* @__PURE__ */ V({
  __proto__: null,
  default: eA
}, [pi]), hi = {}, nA = {
  get exports() {
    return hi;
  },
  set exports(e) {
    hi = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "mk", weekdays: "недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"), months: "јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"), weekStart: 1, weekdaysShort: "нед_пон_вто_сре_чет_пет_саб".split("_"), monthsShort: "јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"), weekdaysMin: "нe_пo_вт_ср_че_пе_сa".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "D.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY H:mm", LLLL: "dddd, D MMMM YYYY H:mm" }, relativeTime: { future: "после %s", past: "пред %s", s: "неколку секунди", m: "минута", mm: "%d минути", h: "час", hh: "%d часа", d: "ден", dd: "%d дена", M: "месец", MM: "%d месеци", y: "година", yy: "%d години" } };
    return s.default.locale(i, null, !0), i;
  });
})(nA);
var rA = hi, oA = /* @__PURE__ */ V({
  __proto__: null,
  default: rA
}, [hi]), _i = {}, sA = {
  get exports() {
    return _i;
  },
  set exports(e) {
    _i = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "ml", weekdays: "ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split("_"), months: "ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split("_"), weekdaysShort: "ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"), monthsShort: "ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split("_"), weekdaysMin: "ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "A h:mm -നു", LTS: "A h:mm:ss -നു", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm -നു", LLLL: "dddd, D MMMM YYYY, A h:mm -നു" }, relativeTime: { future: "%s കഴിഞ്ഞ്", past: "%s മുൻപ്", s: "അൽപ നിമിഷങ്ങൾ", m: "ഒരു മിനിറ്റ്", mm: "%d മിനിറ്റ്", h: "ഒരു മണിക്കൂർ", hh: "%d മണിക്കൂർ", d: "ഒരു ദിവസം", dd: "%d ദിവസം", M: "ഒരു മാസം", MM: "%d മാസം", y: "ഒരു വർഷം", yy: "%d വർഷം" } };
    return s.default.locale(i, null, !0), i;
  });
})(sA);
var iA = _i, aA = /* @__PURE__ */ V({
  __proto__: null,
  default: iA
}, [_i]), vi = {}, lA = {
  get exports() {
    return vi;
  },
  set exports(e) {
    vi = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "mn", weekdays: "Ням_Даваа_Мягмар_Лхагва_Пүрэв_Баасан_Бямба".split("_"), months: "Нэгдүгээр сар_Хоёрдугаар сар_Гуравдугаар сар_Дөрөвдүгээр сар_Тавдугаар сар_Зургадугаар сар_Долдугаар сар_Наймдугаар сар_Есдүгээр сар_Аравдугаар сар_Арван нэгдүгээр сар_Арван хоёрдугаар сар".split("_"), weekdaysShort: "Ням_Дав_Мяг_Лха_Пүр_Баа_Бям".split("_"), monthsShort: "1 сар_2 сар_3 сар_4 сар_5 сар_6 сар_7 сар_8 сар_9 сар_10 сар_11 сар_12 сар".split("_"), weekdaysMin: "Ня_Да_Мя_Лх_Пү_Ба_Бя".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY оны MMMMын D", LLL: "YYYY оны MMMMын D HH:mm", LLLL: "dddd, YYYY оны MMMMын D HH:mm" }, relativeTime: { future: "%s", past: "%s", s: "саяхан", m: "м", mm: "%dм", h: "1ц", hh: "%dц", d: "1ө", dd: "%dө", M: "1с", MM: "%dс", y: "1ж", yy: "%dж" } };
    return s.default.locale(i, null, !0), i;
  });
})(lA);
var uA = vi, cA = /* @__PURE__ */ V({
  __proto__: null,
  default: uA
}, [vi]), gi = {}, dA = {
  get exports() {
    return gi;
  },
  set exports(e) {
    gi = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "ms-my", weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"), months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"), weekStart: 1, weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"), monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"), weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [pukul] HH.mm", LLLL: "dddd, D MMMM YYYY [pukul] HH.mm" }, relativeTime: { future: "dalam %s", past: "%s yang lepas", s: "beberapa saat", m: "seminit", mm: "%d minit", h: "sejam", hh: "%d jam", d: "sehari", dd: "%d hari", M: "sebulan", MM: "%d bulan", y: "setahun", yy: "%d tahun" } };
    return s.default.locale(i, null, !0), i;
  });
})(dA);
var fA = gi, mA = /* @__PURE__ */ V({
  __proto__: null,
  default: fA
}, [gi]), yi = {}, pA = {
  get exports() {
    return yi;
  },
  set exports(e) {
    yi = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "ms", weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"), weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"), weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"), months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"), monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"), weekStart: 1, formats: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH.mm", LLLL: "dddd, D MMMM YYYY HH.mm" }, relativeTime: { future: "dalam %s", past: "%s yang lepas", s: "beberapa saat", m: "seminit", mm: "%d minit", h: "sejam", hh: "%d jam", d: "sehari", dd: "%d hari", M: "sebulan", MM: "%d bulan", y: "setahun", yy: "%d tahun" }, ordinal: function(o) {
      return o + ".";
    } };
    return s.default.locale(i, null, !0), i;
  });
})(pA);
var hA = yi, _A = /* @__PURE__ */ V({
  __proto__: null,
  default: hA
}, [yi]), Mi = {}, vA = {
  get exports() {
    return Mi;
  },
  set exports(e) {
    Mi = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "mt", weekdays: "Il-Ħadd_It-Tnejn_It-Tlieta_L-Erbgħa_Il-Ħamis_Il-Ġimgħa_Is-Sibt".split("_"), months: "Jannar_Frar_Marzu_April_Mejju_Ġunju_Lulju_Awwissu_Settembru_Ottubru_Novembru_Diċembru".split("_"), weekStart: 1, weekdaysShort: "Ħad_Tne_Tli_Erb_Ħam_Ġim_Sib".split("_"), monthsShort: "Jan_Fra_Mar_Apr_Mej_Ġun_Lul_Aww_Set_Ott_Nov_Diċ".split("_"), weekdaysMin: "Ħa_Tn_Tl_Er_Ħa_Ġi_Si".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, relativeTime: { future: "f’ %s", past: "%s ilu", s: "ftit sekondi", m: "minuta", mm: "%d minuti", h: "siegħa", hh: "%d siegħat", d: "ġurnata", dd: "%d ġranet", M: "xahar", MM: "%d xhur", y: "sena", yy: "%d sni" } };
    return s.default.locale(i, null, !0), i;
  });
})(vA);
var gA = Mi, yA = /* @__PURE__ */ V({
  __proto__: null,
  default: gA
}, [Mi]), bi = {}, MA = {
  get exports() {
    return bi;
  },
  set exports(e) {
    bi = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "my", weekdays: "တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split("_"), months: "ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split("_"), weekStart: 1, weekdaysShort: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"), monthsShort: "ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split("_"), weekdaysMin: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, relativeTime: { future: "လာမည့် %s မှာ", past: "လွန်ခဲ့သော %s က", s: "စက္ကန်.အနည်းငယ်", m: "တစ်မိနစ်", mm: "%d မိနစ်", h: "တစ်နာရီ", hh: "%d နာရီ", d: "တစ်ရက်", dd: "%d ရက်", M: "တစ်လ", MM: "%d လ", y: "တစ်နှစ်", yy: "%d နှစ်" } };
    return s.default.locale(i, null, !0), i;
  });
})(MA);
var bA = bi, xA = /* @__PURE__ */ V({
  __proto__: null,
  default: bA
}, [bi]), xi = {}, wA = {
  get exports() {
    return xi;
  },
  set exports(e) {
    xi = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "nb", weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"), weekdaysShort: "sø._ma._ti._on._to._fr._lø.".split("_"), weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"), months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"), monthsShort: "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"), ordinal: function(o) {
      return o + ".";
    }, weekStart: 1, yearStart: 4, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY [kl.] HH:mm", LLLL: "dddd D. MMMM YYYY [kl.] HH:mm" }, relativeTime: { future: "om %s", past: "%s siden", s: "noen sekunder", m: "ett minutt", mm: "%d minutter", h: "en time", hh: "%d timer", d: "en dag", dd: "%d dager", M: "en måned", MM: "%d måneder", y: "ett år", yy: "%d år" } };
    return s.default.locale(i, null, !0), i;
  });
})(wA);
var YA = xi, LA = /* @__PURE__ */ V({
  __proto__: null,
  default: YA
}, [xi]), wi = {}, SA = {
  get exports() {
    return wi;
  },
  set exports(e) {
    wi = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "ne", weekdays: "आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split("_"), weekdaysShort: "आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"), weekdaysMin: "आ._सो._मं._बु._बि._शु._श.".split("_"), months: "जनवरी_फेब्रुवरी_मार्च_अप्रिल_मे_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split("_"), monthsShort: "जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split("_"), relativeTime: { future: "%s पछि", past: "%s अघि", s: "सेकेन्ड", m: "एक मिनेट", mm: "%d मिनेट", h: "घन्टा", hh: "%d घन्टा", d: "एक दिन", dd: "%d दिन", M: "एक महिना", MM: "%d महिना", y: "एक वर्ष", yy: "%d वर्ष" }, ordinal: function(o) {
      return ("" + o).replace(/\d/g, function(a) {
        return "०१२३४५६७८९"[a];
      });
    }, formats: { LT: "Aको h:mm बजे", LTS: "Aको h:mm:ss बजे", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, Aको h:mm बजे", LLLL: "dddd, D MMMM YYYY, Aको h:mm बजे" } };
    return s.default.locale(i, null, !0), i;
  });
})(SA);
var kA = wi, DA = /* @__PURE__ */ V({
  __proto__: null,
  default: kA
}, [wi]), Yi = {}, TA = {
  get exports() {
    return Yi;
  },
  set exports(e) {
    Yi = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "nl-be", weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"), months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"), monthsShort: "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"), weekStart: 1, weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"), weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, relativeTime: { future: "over %s", past: "%s geleden", s: "een paar seconden", m: "één minuut", mm: "%d minuten", h: "één uur", hh: "%d uur", d: "één dag", dd: "%d dagen", M: "één maand", MM: "%d maanden", y: "één jaar", yy: "%d jaar" } };
    return s.default.locale(i, null, !0), i;
  });
})(TA);
var EA = Yi, jA = /* @__PURE__ */ V({
  __proto__: null,
  default: EA
}, [Yi]), Li = {}, PA = {
  get exports() {
    return Li;
  },
  set exports(e) {
    Li = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "nl", weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"), weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"), weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"), months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"), monthsShort: "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"), ordinal: function(o) {
      return "[" + o + (o === 1 || o === 8 || o >= 20 ? "ste" : "de") + "]";
    }, weekStart: 1, yearStart: 4, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD-MM-YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, relativeTime: { future: "over %s", past: "%s geleden", s: "een paar seconden", m: "een minuut", mm: "%d minuten", h: "een uur", hh: "%d uur", d: "een dag", dd: "%d dagen", M: "een maand", MM: "%d maanden", y: "een jaar", yy: "%d jaar" } };
    return s.default.locale(i, null, !0), i;
  });
})(PA);
var AA = Li, CA = /* @__PURE__ */ V({
  __proto__: null,
  default: AA
}, [Li]), Si = {}, $A = {
  get exports() {
    return Si;
  },
  set exports(e) {
    Si = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "nn", weekdays: "sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"), weekdaysShort: "sun_mån_tys_ons_tor_fre_lau".split("_"), weekdaysMin: "su_må_ty_on_to_fr_la".split("_"), months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"), monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"), ordinal: function(o) {
      return o + ".";
    }, weekStart: 1, relativeTime: { future: "om %s", past: "for %s sidan", s: "nokre sekund", m: "eitt minutt", mm: "%d minutt", h: "ein time", hh: "%d timar", d: "ein dag", dd: "%d dagar", M: "ein månad", MM: "%d månadar", y: "eitt år", yy: "%d år" }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY [kl.] H:mm", LLLL: "dddd D. MMMM YYYY [kl.] HH:mm" } };
    return s.default.locale(i, null, !0), i;
  });
})($A);
var HA = Si, OA = /* @__PURE__ */ V({
  __proto__: null,
  default: HA
}, [Si]), ki = {}, RA = {
  get exports() {
    return ki;
  },
  set exports(e) {
    ki = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "oc-lnc", weekdays: "dimenge_diluns_dimars_dimècres_dijòus_divendres_dissabte".split("_"), weekdaysShort: "Dg_Dl_Dm_Dc_Dj_Dv_Ds".split("_"), weekdaysMin: "dg_dl_dm_dc_dj_dv_ds".split("_"), months: "genièr_febrièr_març_abrial_mai_junh_julhet_agost_setembre_octòbre_novembre_decembre".split("_"), monthsShort: "gen_feb_març_abr_mai_junh_julh_ago_set_oct_nov_dec".split("_"), weekStart: 1, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM [de] YYYY", LLL: "D MMMM [de] YYYY [a] H:mm", LLLL: "dddd D MMMM [de] YYYY [a] H:mm" }, relativeTime: { future: "d'aquí %s", past: "fa %s", s: "unas segondas", m: "una minuta", mm: "%d minutas", h: "una ora", hh: "%d oras", d: "un jorn", dd: "%d jorns", M: "un mes", MM: "%d meses", y: "un an", yy: "%d ans" }, ordinal: function(o) {
      return o + "º";
    } };
    return s.default.locale(i, null, !0), i;
  });
})(RA);
var NA = ki, IA = /* @__PURE__ */ V({
  __proto__: null,
  default: NA
}, [ki]), Di = {}, FA = {
  get exports() {
    return Di;
  },
  set exports(e) {
    Di = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "pa-in", weekdays: "ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ".split("_"), months: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"), weekdaysShort: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"), monthsShort: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"), weekdaysMin: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "A h:mm ਵਜੇ", LTS: "A h:mm:ss ਵਜੇ", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm ਵਜੇ", LLLL: "dddd, D MMMM YYYY, A h:mm ਵਜੇ" }, relativeTime: { future: "%s ਵਿੱਚ", past: "%s ਪਿਛਲੇ", s: "ਕੁਝ ਸਕਿੰਟ", m: "ਇਕ ਮਿੰਟ", mm: "%d ਮਿੰਟ", h: "ਇੱਕ ਘੰਟਾ", hh: "%d ਘੰਟੇ", d: "ਇੱਕ ਦਿਨ", dd: "%d ਦਿਨ", M: "ਇੱਕ ਮਹੀਨਾ", MM: "%d ਮਹੀਨੇ", y: "ਇੱਕ ਸਾਲ", yy: "%d ਸਾਲ" } };
    return s.default.locale(i, null, !0), i;
  });
})(FA);
var VA = Di, zA = /* @__PURE__ */ V({
  __proto__: null,
  default: VA
}, [Di]), Ti = {}, BA = {
  get exports() {
    return Ti;
  },
  set exports(e) {
    Ti = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(f) {
      return f && typeof f == "object" && "default" in f ? f : { default: f };
    }
    var s = r(n);
    function i(f) {
      return f % 10 < 5 && f % 10 > 1 && ~~(f / 10) % 10 != 1;
    }
    function o(f, m, p) {
      var h = f + " ";
      switch (p) {
        case "m":
          return m ? "minuta" : "minutę";
        case "mm":
          return h + (i(f) ? "minuty" : "minut");
        case "h":
          return m ? "godzina" : "godzinę";
        case "hh":
          return h + (i(f) ? "godziny" : "godzin");
        case "MM":
          return h + (i(f) ? "miesiące" : "miesięcy");
        case "yy":
          return h + (i(f) ? "lata" : "lat");
      }
    }
    var a = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"), l = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"), u = /D MMMM/, c = function(f, m) {
      return u.test(m) ? a[f.month()] : l[f.month()];
    };
    c.s = l, c.f = a;
    var d = { name: "pl", weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"), weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"), weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"), months: c, monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"), ordinal: function(f) {
      return f + ".";
    }, weekStart: 1, yearStart: 4, relativeTime: { future: "za %s", past: "%s temu", s: "kilka sekund", m: o, mm: o, h: o, hh: o, d: "1 dzień", dd: "%d dni", M: "miesiąc", MM: o, y: "rok", yy: o }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" } };
    return s.default.locale(d, null, !0), d;
  });
})(BA);
var WA = Ti, UA = /* @__PURE__ */ V({
  __proto__: null,
  default: WA
}, [Ti]), Ei = {}, KA = {
  get exports() {
    return Ei;
  },
  set exports(e) {
    Ei = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "pt-br", weekdays: "domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split("_"), weekdaysShort: "dom_seg_ter_qua_qui_sex_sáb".split("_"), weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"), months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"), monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"), ordinal: function(o) {
      return o + "º";
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY [às] HH:mm", LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm" }, relativeTime: { future: "em %s", past: "há %s", s: "poucos segundos", m: "um minuto", mm: "%d minutos", h: "uma hora", hh: "%d horas", d: "um dia", dd: "%d dias", M: "um mês", MM: "%d meses", y: "um ano", yy: "%d anos" } };
    return s.default.locale(i, null, !0), i;
  });
})(KA);
var GA = Ei, JA = /* @__PURE__ */ V({
  __proto__: null,
  default: GA
}, [Ei]), ji = {}, qA = {
  get exports() {
    return ji;
  },
  set exports(e) {
    ji = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "pt", weekdays: "domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split("_"), weekdaysShort: "dom_seg_ter_qua_qui_sex_sab".split("_"), weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sa".split("_"), months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"), monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"), ordinal: function(o) {
      return o + "º";
    }, weekStart: 1, yearStart: 4, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY [às] HH:mm", LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm" }, relativeTime: { future: "em %s", past: "há %s", s: "alguns segundos", m: "um minuto", mm: "%d minutos", h: "uma hora", hh: "%d horas", d: "um dia", dd: "%d dias", M: "um mês", MM: "%d meses", y: "um ano", yy: "%d anos" } };
    return s.default.locale(i, null, !0), i;
  });
})(qA);
var XA = ji, ZA = /* @__PURE__ */ V({
  __proto__: null,
  default: XA
}, [ji]), Pi = {}, QA = {
  get exports() {
    return Pi;
  },
  set exports(e) {
    Pi = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "rn", weekdays: "Ku wa Mungu_Ku wa Mbere_Ku wa Kabiri_Ku wa Gatatu_Ku wa Kane_Ku wa Gatanu_Ku wa Gatandatu".split("_"), weekdaysShort: "Kngu_Kmbr_Kbri_Ktat_Kkan_Ktan_Kdat".split("_"), weekdaysMin: "K7_K1_K2_K3_K4_K5_K6".split("_"), months: "Nzero_Ruhuhuma_Ntwarante_Ndamukiza_Rusama_Ruhenshi_Mukakaro_Myandagaro_Nyakanga_Gitugutu_Munyonyo_Kigarama".split("_"), monthsShort: "Nzer_Ruhuh_Ntwar_Ndam_Rus_Ruhen_Muk_Myand_Nyak_Git_Muny_Kig".split("_"), weekStart: 1, ordinal: function(o) {
      return o;
    }, relativeTime: { future: "mu %s", past: "%s", s: "amasegonda", m: "Umunota", mm: "%d iminota", h: "isaha", hh: "%d amasaha", d: "Umunsi", dd: "%d iminsi", M: "ukwezi", MM: "%d amezi", y: "umwaka", yy: "%d imyaka" }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" } };
    return s.default.locale(i, null, !0), i;
  });
})(QA);
var eC = Pi, tC = /* @__PURE__ */ V({
  __proto__: null,
  default: eC
}, [Pi]), Ai = {}, nC = {
  get exports() {
    return Ai;
  },
  set exports(e) {
    Ai = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "ro", weekdays: "Duminică_Luni_Marți_Miercuri_Joi_Vineri_Sâmbătă".split("_"), weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"), weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"), months: "Ianuarie_Februarie_Martie_Aprilie_Mai_Iunie_Iulie_August_Septembrie_Octombrie_Noiembrie_Decembrie".split("_"), monthsShort: "Ian._Febr._Mart._Apr._Mai_Iun._Iul._Aug._Sept._Oct._Nov._Dec.".split("_"), weekStart: 1, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY H:mm", LLLL: "dddd, D MMMM YYYY H:mm" }, relativeTime: { future: "peste %s", past: "acum %s", s: "câteva secunde", m: "un minut", mm: "%d minute", h: "o oră", hh: "%d ore", d: "o zi", dd: "%d zile", M: "o lună", MM: "%d luni", y: "un an", yy: "%d ani" }, ordinal: function(o) {
      return o;
    } };
    return s.default.locale(i, null, !0), i;
  });
})(nC);
var rC = Ai, oC = /* @__PURE__ */ V({
  __proto__: null,
  default: rC
}, [Ai]), Ci = {}, sC = {
  get exports() {
    return Ci;
  },
  set exports(e) {
    Ci = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(p) {
      return p && typeof p == "object" && "default" in p ? p : { default: p };
    }
    var s = r(n), i = "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"), o = "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"), a = "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"), l = "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_"), u = /D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;
    function c(p, h, _) {
      var v, M;
      return _ === "m" ? h ? "минута" : "минуту" : p + " " + (v = +p, M = { mm: h ? "минута_минуты_минут" : "минуту_минуты_минут", hh: "час_часа_часов", dd: "день_дня_дней", MM: "месяц_месяца_месяцев", yy: "год_года_лет" }[_].split("_"), v % 10 == 1 && v % 100 != 11 ? M[0] : v % 10 >= 2 && v % 10 <= 4 && (v % 100 < 10 || v % 100 >= 20) ? M[1] : M[2]);
    }
    var d = function(p, h) {
      return u.test(h) ? i[p.month()] : o[p.month()];
    };
    d.s = o, d.f = i;
    var f = function(p, h) {
      return u.test(h) ? a[p.month()] : l[p.month()];
    };
    f.s = l, f.f = a;
    var m = { name: "ru", weekdays: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"), weekdaysShort: "вск_пнд_втр_срд_чтв_птн_сбт".split("_"), weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"), months: d, monthsShort: f, weekStart: 1, yearStart: 4, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY г.", LLL: "D MMMM YYYY г., H:mm", LLLL: "dddd, D MMMM YYYY г., H:mm" }, relativeTime: { future: "через %s", past: "%s назад", s: "несколько секунд", m: c, mm: c, h: "час", hh: c, d: "день", dd: c, M: "месяц", MM: c, y: "год", yy: c }, ordinal: function(p) {
      return p;
    }, meridiem: function(p) {
      return p < 4 ? "ночи" : p < 12 ? "утра" : p < 17 ? "дня" : "вечера";
    } };
    return s.default.locale(m, null, !0), m;
  });
})(sC);
var iC = Ci, aC = /* @__PURE__ */ V({
  __proto__: null,
  default: iC
}, [Ci]), $i = {}, lC = {
  get exports() {
    return $i;
  },
  set exports(e) {
    $i = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "rw", weekdays: "Ku Cyumweru_Kuwa Mbere_Kuwa Kabiri_Kuwa Gatatu_Kuwa Kane_Kuwa Gatanu_Kuwa Gatandatu".split("_"), months: "Mutarama_Gashyantare_Werurwe_Mata_Gicurasi_Kamena_Nyakanga_Kanama_Nzeri_Ukwakira_Ugushyingo_Ukuboza".split("_"), relativeTime: { future: "mu %s", past: "%s", s: "amasegonda", m: "Umunota", mm: "%d iminota", h: "isaha", hh: "%d amasaha", d: "Umunsi", dd: "%d iminsi", M: "ukwezi", MM: "%d amezi", y: "umwaka", yy: "%d imyaka" }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, ordinal: function(o) {
      return o;
    } };
    return s.default.locale(i, null, !0), i;
  });
})(lC);
var uC = $i, cC = /* @__PURE__ */ V({
  __proto__: null,
  default: uC
}, [$i]), Hi = {}, dC = {
  get exports() {
    return Hi;
  },
  set exports(e) {
    Hi = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "sd", weekdays: "آچر_سومر_اڱارو_اربع_خميس_جمع_ڇنڇر".split("_"), months: "جنوري_فيبروري_مارچ_اپريل_مئي_جون_جولاءِ_آگسٽ_سيپٽمبر_آڪٽوبر_نومبر_ڊسمبر".split("_"), weekStart: 1, weekdaysShort: "آچر_سومر_اڱارو_اربع_خميس_جمع_ڇنڇر".split("_"), monthsShort: "جنوري_فيبروري_مارچ_اپريل_مئي_جون_جولاءِ_آگسٽ_سيپٽمبر_آڪٽوبر_نومبر_ڊسمبر".split("_"), weekdaysMin: "آچر_سومر_اڱارو_اربع_خميس_جمع_ڇنڇر".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd، D MMMM YYYY HH:mm" }, relativeTime: { future: "%s پوء", past: "%s اڳ", s: "چند سيڪنڊ", m: "هڪ منٽ", mm: "%d منٽ", h: "هڪ ڪلاڪ", hh: "%d ڪلاڪ", d: "هڪ ڏينهن", dd: "%d ڏينهن", M: "هڪ مهينو", MM: "%d مهينا", y: "هڪ سال", yy: "%d سال" } };
    return s.default.locale(i, null, !0), i;
  });
})(dC);
var fC = Hi, mC = /* @__PURE__ */ V({
  __proto__: null,
  default: fC
}, [Hi]), Oi = {}, pC = {
  get exports() {
    return Oi;
  },
  set exports(e) {
    Oi = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "se", weekdays: "sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat".split("_"), months: "ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu".split("_"), weekStart: 1, weekdaysShort: "sotn_vuos_maŋ_gask_duor_bear_láv".split("_"), monthsShort: "ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov".split("_"), weekdaysMin: "s_v_m_g_d_b_L".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "MMMM D. [b.] YYYY", LLL: "MMMM D. [b.] YYYY [ti.] HH:mm", LLLL: "dddd, MMMM D. [b.] YYYY [ti.] HH:mm" }, relativeTime: { future: "%s geažes", past: "maŋit %s", s: "moadde sekunddat", m: "okta minuhta", mm: "%d minuhtat", h: "okta diimmu", hh: "%d diimmut", d: "okta beaivi", dd: "%d beaivvit", M: "okta mánnu", MM: "%d mánut", y: "okta jahki", yy: "%d jagit" } };
    return s.default.locale(i, null, !0), i;
  });
})(pC);
var hC = Oi, _C = /* @__PURE__ */ V({
  __proto__: null,
  default: hC
}, [Oi]), Ri = {}, vC = {
  get exports() {
    return Ri;
  },
  set exports(e) {
    Ri = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "si", weekdays: "ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා".split("_"), months: "දුරුතු_නවම්_මැදින්_බක්_වෙසක්_පොසොන්_ඇසළ_නිකිණි_බිනර_වප්_ඉල්_උඳුවප්".split("_"), weekdaysShort: "ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන".split("_"), monthsShort: "දුරු_නව_මැදි_බක්_වෙස_පොසො_ඇස_නිකි_බින_වප්_ඉල්_උඳු".split("_"), weekdaysMin: "ඉ_ස_අ_බ_බ්‍ර_සි_සෙ".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "a h:mm", LTS: "a h:mm:ss", L: "YYYY/MM/DD", LL: "YYYY MMMM D", LLL: "YYYY MMMM D, a h:mm", LLLL: "YYYY MMMM D [වැනි] dddd, a h:mm:ss" }, relativeTime: { future: "%sකින්", past: "%sකට පෙර", s: "තත්පර කිහිපය", m: "විනාඩිය", mm: "විනාඩි %d", h: "පැය", hh: "පැය %d", d: "දිනය", dd: "දින %d", M: "මාසය", MM: "මාස %d", y: "වසර", yy: "වසර %d" } };
    return s.default.locale(i, null, !0), i;
  });
})(vC);
var gC = Ri, yC = /* @__PURE__ */ V({
  __proto__: null,
  default: gC
}, [Ri]), Ni = {}, MC = {
  get exports() {
    return Ni;
  },
  set exports(e) {
    Ni = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(l) {
      return l && typeof l == "object" && "default" in l ? l : { default: l };
    }
    var s = r(n);
    function i(l) {
      return l > 1 && l < 5 && ~~(l / 10) != 1;
    }
    function o(l, u, c, d) {
      var f = l + " ";
      switch (c) {
        case "s":
          return u || d ? "pár sekúnd" : "pár sekundami";
        case "m":
          return u ? "minúta" : d ? "minútu" : "minútou";
        case "mm":
          return u || d ? f + (i(l) ? "minúty" : "minút") : f + "minútami";
        case "h":
          return u ? "hodina" : d ? "hodinu" : "hodinou";
        case "hh":
          return u || d ? f + (i(l) ? "hodiny" : "hodín") : f + "hodinami";
        case "d":
          return u || d ? "deň" : "dňom";
        case "dd":
          return u || d ? f + (i(l) ? "dni" : "dní") : f + "dňami";
        case "M":
          return u || d ? "mesiac" : "mesiacom";
        case "MM":
          return u || d ? f + (i(l) ? "mesiace" : "mesiacov") : f + "mesiacmi";
        case "y":
          return u || d ? "rok" : "rokom";
        case "yy":
          return u || d ? f + (i(l) ? "roky" : "rokov") : f + "rokmi";
      }
    }
    var a = { name: "sk", weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"), weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"), weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"), months: "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"), monthsShort: "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_"), weekStart: 1, yearStart: 4, ordinal: function(l) {
      return l + ".";
    }, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd D. MMMM YYYY H:mm", l: "D. M. YYYY" }, relativeTime: { future: "za %s", past: "pred %s", s: o, m: o, mm: o, h: o, hh: o, d: o, dd: o, M: o, MM: o, y: o, yy: o } };
    return s.default.locale(a, null, !0), a;
  });
})(MC);
var bC = Ni, xC = /* @__PURE__ */ V({
  __proto__: null,
  default: bC
}, [Ni]), Ii = {}, wC = {
  get exports() {
    return Ii;
  },
  set exports(e) {
    Ii = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "sl", weekdays: "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"), months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"), weekStart: 1, weekdaysShort: "ned._pon._tor._sre._čet._pet._sob.".split("_"), monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"), weekdaysMin: "ne_po_to_sr_če_pe_so".split("_"), ordinal: function(o) {
      return o + ".";
    }, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" }, relativeTime: { future: "čez %s", past: "pred %s", s: "nekaj sekund", m: "minuta", mm: "%d minut", h: "ura", hh: "%d ur", d: "dan", dd: "%d dni", M: "mesec", MM: "%d mesecev", y: "leto", yy: "%d let" } };
    return s.default.locale(i, null, !0), i;
  });
})(wC);
var YC = Ii, LC = /* @__PURE__ */ V({
  __proto__: null,
  default: YC
}, [Ii]), Fi = {}, SC = {
  get exports() {
    return Fi;
  },
  set exports(e) {
    Fi = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "sq", weekdays: "E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split("_"), months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"), weekStart: 1, weekdaysShort: "Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"), monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"), weekdaysMin: "D_H_Ma_Më_E_P_Sh".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, relativeTime: { future: "në %s", past: "%s më parë", s: "disa sekonda", m: "një minutë", mm: "%d minuta", h: "një orë", hh: "%d orë", d: "një ditë", dd: "%d ditë", M: "një muaj", MM: "%d muaj", y: "një vit", yy: "%d vite" } };
    return s.default.locale(i, null, !0), i;
  });
})(SC);
var kC = Fi, DC = /* @__PURE__ */ V({
  __proto__: null,
  default: kC
}, [Fi]), Vi = {}, TC = {
  get exports() {
    return Vi;
  },
  set exports(e) {
    Vi = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(a) {
      return a && typeof a == "object" && "default" in a ? a : { default: a };
    }
    var s = r(n), i = { words: { m: ["jedan minut", "jednog minuta"], mm: ["%d minut", "%d minuta", "%d minuta"], h: ["jedan sat", "jednog sata"], hh: ["%d sat", "%d sata", "%d sati"], d: ["jedan dan", "jednog dana"], dd: ["%d dan", "%d dana", "%d dana"], M: ["jedan mesec", "jednog meseca"], MM: ["%d mesec", "%d meseca", "%d meseci"], y: ["jednu godinu", "jedne godine"], yy: ["%d godinu", "%d godine", "%d godina"] }, correctGrammarCase: function(a, l) {
      return a % 10 >= 1 && a % 10 <= 4 && (a % 100 < 10 || a % 100 >= 20) ? a % 10 == 1 ? l[0] : l[1] : l[2];
    }, relativeTimeFormatter: function(a, l, u, c) {
      var d = i.words[u];
      if (u.length === 1) return u === "y" && l ? "jedna godina" : c || l ? d[0] : d[1];
      var f = i.correctGrammarCase(a, d);
      return u === "yy" && l && f === "%d godinu" ? a + " godina" : f.replace("%d", a);
    } }, o = { name: "sr", weekdays: "Nedelja_Ponedeljak_Utorak_Sreda_Četvrtak_Petak_Subota".split("_"), weekdaysShort: "Ned._Pon._Uto._Sre._Čet._Pet._Sub.".split("_"), weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"), months: "Januar_Februar_Mart_April_Maj_Jun_Jul_Avgust_Septembar_Oktobar_Novembar_Decembar".split("_"), monthsShort: "Jan._Feb._Mar._Apr._Maj_Jun_Jul_Avg._Sep._Okt._Nov._Dec.".split("_"), weekStart: 1, relativeTime: { future: "za %s", past: "pre %s", s: "nekoliko sekundi", m: i.relativeTimeFormatter, mm: i.relativeTimeFormatter, h: i.relativeTimeFormatter, hh: i.relativeTimeFormatter, d: i.relativeTimeFormatter, dd: i.relativeTimeFormatter, M: i.relativeTimeFormatter, MM: i.relativeTimeFormatter, y: i.relativeTimeFormatter, yy: i.relativeTimeFormatter }, ordinal: function(a) {
      return a + ".";
    }, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "D. M. YYYY.", LL: "D. MMMM YYYY.", LLL: "D. MMMM YYYY. H:mm", LLLL: "dddd, D. MMMM YYYY. H:mm" } };
    return s.default.locale(o, null, !0), o;
  });
})(TC);
var EC = Vi, jC = /* @__PURE__ */ V({
  __proto__: null,
  default: EC
}, [Vi]), zi = {}, PC = {
  get exports() {
    return zi;
  },
  set exports(e) {
    zi = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(a) {
      return a && typeof a == "object" && "default" in a ? a : { default: a };
    }
    var s = r(n), i = { words: { m: ["један минут", "једног минута"], mm: ["%d минут", "%d минута", "%d минута"], h: ["један сат", "једног сата"], hh: ["%d сат", "%d сата", "%d сати"], d: ["један дан", "једног дана"], dd: ["%d дан", "%d дана", "%d дана"], M: ["један месец", "једног месеца"], MM: ["%d месец", "%d месеца", "%d месеци"], y: ["једну годину", "једне године"], yy: ["%d годину", "%d године", "%d година"] }, correctGrammarCase: function(a, l) {
      return a % 10 >= 1 && a % 10 <= 4 && (a % 100 < 10 || a % 100 >= 20) ? a % 10 == 1 ? l[0] : l[1] : l[2];
    }, relativeTimeFormatter: function(a, l, u, c) {
      var d = i.words[u];
      if (u.length === 1) return u === "y" && l ? "једна година" : c || l ? d[0] : d[1];
      var f = i.correctGrammarCase(a, d);
      return u === "yy" && l && f === "%d годину" ? a + " година" : f.replace("%d", a);
    } }, o = { name: "sr-cyrl", weekdays: "Недеља_Понедељак_Уторак_Среда_Четвртак_Петак_Субота".split("_"), weekdaysShort: "Нед._Пон._Уто._Сре._Чет._Пет._Суб.".split("_"), weekdaysMin: "не_по_ут_ср_че_пе_су".split("_"), months: "Јануар_Фебруар_Март_Април_Мај_Јун_Јул_Август_Септембар_Октобар_Новембар_Децембар".split("_"), monthsShort: "Јан._Феб._Мар._Апр._Мај_Јун_Јул_Авг._Сеп._Окт._Нов._Дец.".split("_"), weekStart: 1, relativeTime: { future: "за %s", past: "пре %s", s: "неколико секунди", m: i.relativeTimeFormatter, mm: i.relativeTimeFormatter, h: i.relativeTimeFormatter, hh: i.relativeTimeFormatter, d: i.relativeTimeFormatter, dd: i.relativeTimeFormatter, M: i.relativeTimeFormatter, MM: i.relativeTimeFormatter, y: i.relativeTimeFormatter, yy: i.relativeTimeFormatter }, ordinal: function(a) {
      return a + ".";
    }, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "D. M. YYYY.", LL: "D. MMMM YYYY.", LLL: "D. MMMM YYYY. H:mm", LLLL: "dddd, D. MMMM YYYY. H:mm" } };
    return s.default.locale(o, null, !0), o;
  });
})(PC);
var AC = zi, CC = /* @__PURE__ */ V({
  __proto__: null,
  default: AC
}, [zi]), Bi = {}, $C = {
  get exports() {
    return Bi;
  },
  set exports(e) {
    Bi = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "ss", weekdays: "Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"), months: "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"), weekStart: 1, weekdaysShort: "Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"), monthsShort: "Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"), weekdaysMin: "Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, relativeTime: { future: "nga %s", past: "wenteka nga %s", s: "emizuzwana lomcane", m: "umzuzu", mm: "%d emizuzu", h: "lihora", hh: "%d emahora", d: "lilanga", dd: "%d emalanga", M: "inyanga", MM: "%d tinyanga", y: "umnyaka", yy: "%d iminyaka" } };
    return s.default.locale(i, null, !0), i;
  });
})($C);
var HC = Bi, OC = /* @__PURE__ */ V({
  __proto__: null,
  default: HC
}, [Bi]), Wi = {}, RC = {
  get exports() {
    return Wi;
  },
  set exports(e) {
    Wi = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "sv-fi", weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"), weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"), weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"), months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"), monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"), weekStart: 1, yearStart: 4, ordinal: function(o) {
      var a = o % 10;
      return "[" + o + (a === 1 || a === 2 ? "a" : "e") + "]";
    }, formats: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY, [kl.] HH.mm", LLLL: "dddd, D. MMMM YYYY, [kl.] HH.mm", l: "D.M.YYYY", ll: "D. MMM YYYY", lll: "D. MMM YYYY, [kl.] HH.mm", llll: "ddd, D. MMM YYYY, [kl.] HH.mm" }, relativeTime: { future: "om %s", past: "för %s sedan", s: "några sekunder", m: "en minut", mm: "%d minuter", h: "en timme", hh: "%d timmar", d: "en dag", dd: "%d dagar", M: "en månad", MM: "%d månader", y: "ett år", yy: "%d år" } };
    return s.default.locale(i, null, !0), i;
  });
})(RC);
var NC = Wi, IC = /* @__PURE__ */ V({
  __proto__: null,
  default: NC
}, [Wi]), Ui = {}, FC = {
  get exports() {
    return Ui;
  },
  set exports(e) {
    Ui = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "sv", weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"), weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"), weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"), months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"), monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"), weekStart: 1, yearStart: 4, ordinal: function(o) {
      var a = o % 10;
      return "[" + o + (a === 1 || a === 2 ? "a" : "e") + "]";
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [kl.] HH:mm", LLLL: "dddd D MMMM YYYY [kl.] HH:mm", lll: "D MMM YYYY HH:mm", llll: "ddd D MMM YYYY HH:mm" }, relativeTime: { future: "om %s", past: "för %s sedan", s: "några sekunder", m: "en minut", mm: "%d minuter", h: "en timme", hh: "%d timmar", d: "en dag", dd: "%d dagar", M: "en månad", MM: "%d månader", y: "ett år", yy: "%d år" } };
    return s.default.locale(i, null, !0), i;
  });
})(FC);
var VC = Ui, zC = /* @__PURE__ */ V({
  __proto__: null,
  default: VC
}, [Ui]), Ki = {}, BC = {
  get exports() {
    return Ki;
  },
  set exports(e) {
    Ki = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "sw", weekdays: "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"), weekdaysShort: "Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"), weekdaysMin: "J2_J3_J4_J5_Al_Ij_J1".split("_"), months: "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"), monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"), weekStart: 1, ordinal: function(o) {
      return o;
    }, relativeTime: { future: "%s baadaye", past: "tokea %s", s: "hivi punde", m: "dakika moja", mm: "dakika %d", h: "saa limoja", hh: "masaa %d", d: "siku moja", dd: "masiku %d", M: "mwezi mmoja", MM: "miezi %d", y: "mwaka mmoja", yy: "miaka %d" }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" } };
    return s.default.locale(i, null, !0), i;
  });
})(BC);
var WC = Ki, UC = /* @__PURE__ */ V({
  __proto__: null,
  default: WC
}, [Ki]), Gi = {}, KC = {
  get exports() {
    return Gi;
  },
  set exports(e) {
    Gi = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "ta", weekdays: "ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"), months: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"), weekdaysShort: "ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"), monthsShort: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"), weekdaysMin: "ஞா_தி_செ_பு_வி_வெ_ச".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, HH:mm", LLLL: "dddd, D MMMM YYYY, HH:mm" }, relativeTime: { future: "%s இல்", past: "%s முன்", s: "ஒரு சில விநாடிகள்", m: "ஒரு நிமிடம்", mm: "%d நிமிடங்கள்", h: "ஒரு மணி நேரம்", hh: "%d மணி நேரம்", d: "ஒரு நாள்", dd: "%d நாட்கள்", M: "ஒரு மாதம்", MM: "%d மாதங்கள்", y: "ஒரு வருடம்", yy: "%d ஆண்டுகள்" } };
    return s.default.locale(i, null, !0), i;
  });
})(KC);
var GC = Gi, JC = /* @__PURE__ */ V({
  __proto__: null,
  default: GC
}, [Gi]), Ji = {}, qC = {
  get exports() {
    return Ji;
  },
  set exports(e) {
    Ji = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "te", weekdays: "ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం".split("_"), months: "జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జులై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్".split("_"), weekdaysShort: "ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని".split("_"), monthsShort: "జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జులై_ఆగ._సెప్._అక్టో._నవ._డిసె.".split("_"), weekdaysMin: "ఆ_సో_మం_బు_గు_శు_శ".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "A h:mm", LTS: "A h:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm", LLLL: "dddd, D MMMM YYYY, A h:mm" }, relativeTime: { future: "%s లో", past: "%s క్రితం", s: "కొన్ని క్షణాలు", m: "ఒక నిమిషం", mm: "%d నిమిషాలు", h: "ఒక గంట", hh: "%d గంటలు", d: "ఒక రోజు", dd: "%d రోజులు", M: "ఒక నెల", MM: "%d నెలలు", y: "ఒక సంవత్సరం", yy: "%d సంవత్సరాలు" } };
    return s.default.locale(i, null, !0), i;
  });
})(qC);
var XC = Ji, ZC = /* @__PURE__ */ V({
  __proto__: null,
  default: XC
}, [Ji]), qi = {}, QC = {
  get exports() {
    return qi;
  },
  set exports(e) {
    qi = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "tg", weekdays: "якшанбе_душанбе_сешанбе_чоршанбе_панҷшанбе_ҷумъа_шанбе".split("_"), months: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"), weekStart: 1, weekdaysShort: "яшб_дшб_сшб_чшб_пшб_ҷум_шнб".split("_"), monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"), weekdaysMin: "яш_дш_сш_чш_пш_ҷм_шб".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, relativeTime: { future: "баъди %s", past: "%s пеш", s: "якчанд сония", m: "як дақиқа", mm: "%d дақиқа", h: "як соат", hh: "%d соат", d: "як рӯз", dd: "%d рӯз", M: "як моҳ", MM: "%d моҳ", y: "як сол", yy: "%d сол" } };
    return s.default.locale(i, null, !0), i;
  });
})(QC);
var e$ = qi, t$ = /* @__PURE__ */ V({
  __proto__: null,
  default: e$
}, [qi]), Xi = {}, n$ = {
  get exports() {
    return Xi;
  },
  set exports(e) {
    Xi = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "th", weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"), weekdaysShort: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"), weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"), months: "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"), monthsShort: "ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split("_"), formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY เวลา H:mm", LLLL: "วันddddที่ D MMMM YYYY เวลา H:mm" }, relativeTime: { future: "อีก %s", past: "%sที่แล้ว", s: "ไม่กี่วินาที", m: "1 นาที", mm: "%d นาที", h: "1 ชั่วโมง", hh: "%d ชั่วโมง", d: "1 วัน", dd: "%d วัน", M: "1 เดือน", MM: "%d เดือน", y: "1 ปี", yy: "%d ปี" }, ordinal: function(o) {
      return o + ".";
    } };
    return s.default.locale(i, null, !0), i;
  });
})(n$);
var r$ = Xi, o$ = /* @__PURE__ */ V({
  __proto__: null,
  default: r$
}, [Xi]), Zi = {}, s$ = {
  get exports() {
    return Zi;
  },
  set exports(e) {
    Zi = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "tk", weekdays: "Ýekşenbe_Duşenbe_Sişenbe_Çarşenbe_Penşenbe_Anna_Şenbe".split("_"), weekdaysShort: "Ýek_Duş_Siş_Çar_Pen_Ann_Şen".split("_"), weekdaysMin: "Ýk_Dş_Sş_Çr_Pn_An_Şn".split("_"), months: "Ýanwar_Fewral_Mart_Aprel_Maý_Iýun_Iýul_Awgust_Sentýabr_Oktýabr_Noýabr_Dekabr".split("_"), monthsShort: "Ýan_Few_Mar_Apr_Maý_Iýn_Iýl_Awg_Sen_Okt_Noý_Dek".split("_"), weekStart: 1, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, relativeTime: { future: "%s soň", past: "%s öň", s: "birnäçe sekunt", m: "bir minut", mm: "%d minut", h: "bir sagat", hh: "%d sagat", d: "bir gün", dd: "%d gün", M: "bir aý", MM: "%d aý", y: "bir ýyl", yy: "%d ýyl" }, ordinal: function(o) {
      return o + ".";
    } };
    return s.default.locale(i, null, !0), i;
  });
})(s$);
var i$ = Zi, a$ = /* @__PURE__ */ V({
  __proto__: null,
  default: i$
}, [Zi]), Qi = {}, l$ = {
  get exports() {
    return Qi;
  },
  set exports(e) {
    Qi = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "tl-ph", weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"), months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"), weekStart: 1, weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"), monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"), weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "MM/D/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY HH:mm", LLLL: "dddd, MMMM DD, YYYY HH:mm" }, relativeTime: { future: "sa loob ng %s", past: "%s ang nakalipas", s: "ilang segundo", m: "isang minuto", mm: "%d minuto", h: "isang oras", hh: "%d oras", d: "isang araw", dd: "%d araw", M: "isang buwan", MM: "%d buwan", y: "isang taon", yy: "%d taon" } };
    return s.default.locale(i, null, !0), i;
  });
})(l$);
var u$ = Qi, c$ = /* @__PURE__ */ V({
  __proto__: null,
  default: u$
}, [Qi]), ea = {}, d$ = {
  get exports() {
    return ea;
  },
  set exports(e) {
    ea = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "tlh", weekdays: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"), months: "tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’".split("_"), weekStart: 1, weekdaysShort: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"), monthsShort: "jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’".split("_"), weekdaysMin: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" } };
    return s.default.locale(i, null, !0), i;
  });
})(d$);
var f$ = ea, m$ = /* @__PURE__ */ V({
  __proto__: null,
  default: f$
}, [ea]), ta = {}, p$ = {
  get exports() {
    return ta;
  },
  set exports(e) {
    ta = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "tr", weekdays: "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"), weekdaysShort: "Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"), weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"), months: "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"), monthsShort: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"), weekStart: 1, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, relativeTime: { future: "%s sonra", past: "%s önce", s: "birkaç saniye", m: "bir dakika", mm: "%d dakika", h: "bir saat", hh: "%d saat", d: "bir gün", dd: "%d gün", M: "bir ay", MM: "%d ay", y: "bir yıl", yy: "%d yıl" }, ordinal: function(o) {
      return o + ".";
    } };
    return s.default.locale(i, null, !0), i;
  });
})(p$);
var h$ = ta, _$ = /* @__PURE__ */ V({
  __proto__: null,
  default: h$
}, [ta]), na = {}, v$ = {
  get exports() {
    return na;
  },
  set exports(e) {
    na = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "tzl", weekdays: "Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi".split("_"), months: "Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar".split("_"), weekStart: 1, weekdaysShort: "Súl_Lún_Mai_Már_Xhú_Vié_Sát".split("_"), monthsShort: "Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec".split("_"), weekdaysMin: "Sú_Lú_Ma_Má_Xh_Vi_Sá".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD.MM.YYYY", LL: "D. MMMM [dallas] YYYY", LLL: "D. MMMM [dallas] YYYY HH.mm", LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm" } };
    return s.default.locale(i, null, !0), i;
  });
})(v$);
var g$ = na, y$ = /* @__PURE__ */ V({
  __proto__: null,
  default: g$
}, [na]), ra = {}, M$ = {
  get exports() {
    return ra;
  },
  set exports(e) {
    ra = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "tzm-latn", weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"), months: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"), weekStart: 6, weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"), monthsShort: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"), weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, relativeTime: { future: "dadkh s yan %s", past: "yan %s", s: "imik", m: "minuḍ", mm: "%d minuḍ", h: "saɛa", hh: "%d tassaɛin", d: "ass", dd: "%d ossan", M: "ayowr", MM: "%d iyyirn", y: "asgas", yy: "%d isgasn" } };
    return s.default.locale(i, null, !0), i;
  });
})(M$);
var b$ = ra, x$ = /* @__PURE__ */ V({
  __proto__: null,
  default: b$
}, [ra]), oa = {}, w$ = {
  get exports() {
    return oa;
  },
  set exports(e) {
    oa = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "tzm", weekdays: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"), months: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"), weekStart: 6, weekdaysShort: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"), monthsShort: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"), weekdaysMin: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, relativeTime: { future: "ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s", past: "ⵢⴰⵏ %s", s: "ⵉⵎⵉⴽ", m: "ⵎⵉⵏⵓⴺ", mm: "%d ⵎⵉⵏⵓⴺ", h: "ⵙⴰⵄⴰ", hh: "%d ⵜⴰⵙⵙⴰⵄⵉⵏ", d: "ⴰⵙⵙ", dd: "%d oⵙⵙⴰⵏ", M: "ⴰⵢoⵓⵔ", MM: "%d ⵉⵢⵢⵉⵔⵏ", y: "ⴰⵙⴳⴰⵙ", yy: "%d ⵉⵙⴳⴰⵙⵏ" } };
    return s.default.locale(i, null, !0), i;
  });
})(w$);
var Y$ = oa, L$ = /* @__PURE__ */ V({
  __proto__: null,
  default: Y$
}, [oa]), sa = {}, S$ = {
  get exports() {
    return sa;
  },
  set exports(e) {
    sa = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "ug-cn", weekdays: "يەكشەنبە_دۈشەنبە_سەيشەنبە_چارشەنبە_پەيشەنبە_جۈمە_شەنبە".split("_"), months: "يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split("_"), weekStart: 1, weekdaysShort: "يە_دۈ_سە_چا_پە_جۈ_شە".split("_"), monthsShort: "يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split("_"), weekdaysMin: "يە_دۈ_سە_چا_پە_جۈ_شە".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY-يىلىM-ئاينىڭD-كۈنى", LLL: "YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm", LLLL: "dddd، YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm" }, relativeTime: { future: "%s كېيىن", past: "%s بۇرۇن", s: "نەچچە سېكونت", m: "بىر مىنۇت", mm: "%d مىنۇت", h: "بىر سائەت", hh: "%d سائەت", d: "بىر كۈن", dd: "%d كۈن", M: "بىر ئاي", MM: "%d ئاي", y: "بىر يىل", yy: "%d يىل" } };
    return s.default.locale(i, null, !0), i;
  });
})(S$);
var k$ = sa, D$ = /* @__PURE__ */ V({
  __proto__: null,
  default: k$
}, [sa]), ia = {}, T$ = {
  get exports() {
    return ia;
  },
  set exports(e) {
    ia = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(d) {
      return d && typeof d == "object" && "default" in d ? d : { default: d };
    }
    var s = r(n), i = "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"), o = "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_"), a = /D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;
    function l(d, f, m) {
      var p, h;
      return m === "m" ? f ? "хвилина" : "хвилину" : m === "h" ? f ? "година" : "годину" : d + " " + (p = +d, h = { ss: f ? "секунда_секунди_секунд" : "секунду_секунди_секунд", mm: f ? "хвилина_хвилини_хвилин" : "хвилину_хвилини_хвилин", hh: f ? "година_години_годин" : "годину_години_годин", dd: "день_дні_днів", MM: "місяць_місяці_місяців", yy: "рік_роки_років" }[m].split("_"), p % 10 == 1 && p % 100 != 11 ? h[0] : p % 10 >= 2 && p % 10 <= 4 && (p % 100 < 10 || p % 100 >= 20) ? h[1] : h[2]);
    }
    var u = function(d, f) {
      return a.test(f) ? i[d.month()] : o[d.month()];
    };
    u.s = o, u.f = i;
    var c = { name: "uk", weekdays: "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"), weekdaysShort: "ндл_пнд_втр_срд_чтв_птн_сбт".split("_"), weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"), months: u, monthsShort: "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"), weekStart: 1, relativeTime: { future: "за %s", past: "%s тому", s: "декілька секунд", m: l, mm: l, h: l, hh: l, d: "день", dd: l, M: "місяць", MM: l, y: "рік", yy: l }, ordinal: function(d) {
      return d;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY р.", LLL: "D MMMM YYYY р., HH:mm", LLLL: "dddd, D MMMM YYYY р., HH:mm" } };
    return s.default.locale(c, null, !0), c;
  });
})(T$);
var E$ = ia, j$ = /* @__PURE__ */ V({
  __proto__: null,
  default: E$
}, [ia]), aa = {}, P$ = {
  get exports() {
    return aa;
  },
  set exports(e) {
    aa = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "ur", weekdays: "اتوار_پیر_منگل_بدھ_جمعرات_جمعہ_ہفتہ".split("_"), months: "جنوری_فروری_مارچ_اپریل_مئی_جون_جولائی_اگست_ستمبر_اکتوبر_نومبر_دسمبر".split("_"), weekStart: 1, weekdaysShort: "اتوار_پیر_منگل_بدھ_جمعرات_جمعہ_ہفتہ".split("_"), monthsShort: "جنوری_فروری_مارچ_اپریل_مئی_جون_جولائی_اگست_ستمبر_اکتوبر_نومبر_دسمبر".split("_"), weekdaysMin: "اتوار_پیر_منگل_بدھ_جمعرات_جمعہ_ہفتہ".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd، D MMMM YYYY HH:mm" }, relativeTime: { future: "%s بعد", past: "%s قبل", s: "چند سیکنڈ", m: "ایک منٹ", mm: "%d منٹ", h: "ایک گھنٹہ", hh: "%d گھنٹے", d: "ایک دن", dd: "%d دن", M: "ایک ماہ", MM: "%d ماہ", y: "ایک سال", yy: "%d سال" } };
    return s.default.locale(i, null, !0), i;
  });
})(P$);
var A$ = aa, C$ = /* @__PURE__ */ V({
  __proto__: null,
  default: A$
}, [aa]), la = {}, $$ = {
  get exports() {
    return la;
  },
  set exports(e) {
    la = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "uz-latn", weekdays: "Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba".split("_"), months: "Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr".split("_"), weekStart: 1, weekdaysShort: "Yak_Dush_Sesh_Chor_Pay_Jum_Shan".split("_"), monthsShort: "Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek".split("_"), weekdaysMin: "Ya_Du_Se_Cho_Pa_Ju_Sha".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "D MMMM YYYY, dddd HH:mm" }, relativeTime: { future: "Yaqin %s ichida", past: "Bir necha %s oldin", s: "soniya", m: "bir daqiqa", mm: "%d daqiqa", h: "bir soat", hh: "%d soat", d: "bir kun", dd: "%d kun", M: "bir oy", MM: "%d oy", y: "bir yil", yy: "%d yil" } };
    return s.default.locale(i, null, !0), i;
  });
})($$);
var H$ = la, O$ = /* @__PURE__ */ V({
  __proto__: null,
  default: H$
}, [la]), ua = {}, R$ = {
  get exports() {
    return ua;
  },
  set exports(e) {
    ua = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "uz", weekdays: "Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"), months: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"), weekStart: 1, weekdaysShort: "Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"), monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"), weekdaysMin: "Як_Ду_Се_Чо_Па_Жу_Ша".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "D MMMM YYYY, dddd HH:mm" }, relativeTime: { future: "Якин %s ичида", past: "Бир неча %s олдин", s: "фурсат", m: "бир дакика", mm: "%d дакика", h: "бир соат", hh: "%d соат", d: "бир кун", dd: "%d кун", M: "бир ой", MM: "%d ой", y: "бир йил", yy: "%d йил" } };
    return s.default.locale(i, null, !0), i;
  });
})(R$);
var N$ = ua, I$ = /* @__PURE__ */ V({
  __proto__: null,
  default: N$
}, [ua]), ca = {}, F$ = {
  get exports() {
    return ca;
  },
  set exports(e) {
    ca = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "vi", weekdays: "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"), months: "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"), weekStart: 1, weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"), monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"), weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM [năm] YYYY", LLL: "D MMMM [năm] YYYY HH:mm", LLLL: "dddd, D MMMM [năm] YYYY HH:mm", l: "DD/M/YYYY", ll: "D MMM YYYY", lll: "D MMM YYYY HH:mm", llll: "ddd, D MMM YYYY HH:mm" }, relativeTime: { future: "%s tới", past: "%s trước", s: "vài giây", m: "một phút", mm: "%d phút", h: "một giờ", hh: "%d giờ", d: "một ngày", dd: "%d ngày", M: "một tháng", MM: "%d tháng", y: "một năm", yy: "%d năm" } };
    return s.default.locale(i, null, !0), i;
  });
})(F$);
var V$ = ca, z$ = /* @__PURE__ */ V({
  __proto__: null,
  default: V$
}, [ca]), da = {}, B$ = {
  get exports() {
    return da;
  },
  set exports(e) {
    da = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "x-pseudo", weekdays: "S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý".split("_"), months: "J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér".split("_"), weekStart: 1, weekdaysShort: "S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát".split("_"), monthsShort: "J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc".split("_"), weekdaysMin: "S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, relativeTime: { future: "í~ñ %s", past: "%s á~gó", s: "á ~féw ~sécó~ñds", m: "á ~míñ~úté", mm: "%d m~íñú~tés", h: "á~ñ hó~úr", hh: "%d h~óúrs", d: "á ~dáý", dd: "%d d~áýs", M: "á ~móñ~th", MM: "%d m~óñt~hs", y: "á ~ýéár", yy: "%d ý~éárs" } };
    return s.default.locale(i, null, !0), i;
  });
})(B$);
var W$ = da, U$ = /* @__PURE__ */ V({
  __proto__: null,
  default: W$
}, [da]), fa = {}, K$ = {
  get exports() {
    return fa;
  },
  set exports(e) {
    fa = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "yo", weekdays: "Àìkú_Ajé_Ìsẹ́gun_Ọjọ́rú_Ọjọ́bọ_Ẹtì_Àbámẹ́ta".split("_"), months: "Sẹ́rẹ́_Èrèlè_Ẹrẹ̀nà_Ìgbé_Èbibi_Òkùdu_Agẹmo_Ògún_Owewe_Ọ̀wàrà_Bélú_Ọ̀pẹ̀̀".split("_"), weekStart: 1, weekdaysShort: "Àìk_Ajé_Ìsẹ́_Ọjr_Ọjb_Ẹtì_Àbá".split("_"), monthsShort: "Sẹ́r_Èrl_Ẹrn_Ìgb_Èbi_Òkù_Agẹ_Ògú_Owe_Ọ̀wà_Bél_Ọ̀pẹ̀̀".split("_"), weekdaysMin: "Àì_Aj_Ìs_Ọr_Ọb_Ẹt_Àb".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, relativeTime: { future: "ní %s", past: "%s kọjá", s: "ìsẹjú aayá die", m: "ìsẹjú kan", mm: "ìsẹjú %d", h: "wákati kan", hh: "wákati %d", d: "ọjọ́ kan", dd: "ọjọ́ %d", M: "osù kan", MM: "osù %d", y: "ọdún kan", yy: "ọdún %d" } };
    return s.default.locale(i, null, !0), i;
  });
})(K$);
var G$ = fa, J$ = /* @__PURE__ */ V({
  __proto__: null,
  default: G$
}, [fa]), ma = {}, q$ = {
  get exports() {
    return ma;
  },
  set exports(e) {
    ma = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "zh-cn", weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"), weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"), weekdaysMin: "日_一_二_三_四_五_六".split("_"), months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"), monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"), ordinal: function(o, a) {
      return a === "W" ? o + "周" : o + "日";
    }, weekStart: 1, yearStart: 4, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY/MM/DD", LL: "YYYY年M月D日", LLL: "YYYY年M月D日Ah点mm分", LLLL: "YYYY年M月D日ddddAh点mm分", l: "YYYY/M/D", ll: "YYYY年M月D日", lll: "YYYY年M月D日 HH:mm", llll: "YYYY年M月D日dddd HH:mm" }, relativeTime: { future: "%s内", past: "%s前", s: "几秒", m: "1 分钟", mm: "%d 分钟", h: "1 小时", hh: "%d 小时", d: "1 天", dd: "%d 天", M: "1 个月", MM: "%d 个月", y: "1 年", yy: "%d 年" }, meridiem: function(o, a) {
      var l = 100 * o + a;
      return l < 600 ? "凌晨" : l < 900 ? "早上" : l < 1100 ? "上午" : l < 1300 ? "中午" : l < 1800 ? "下午" : "晚上";
    } };
    return s.default.locale(i, null, !0), i;
  });
})(q$);
var X$ = ma, Z$ = /* @__PURE__ */ V({
  __proto__: null,
  default: X$
}, [ma]), pa = {}, Q$ = {
  get exports() {
    return pa;
  },
  set exports(e) {
    pa = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "zh-hk", months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"), monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"), weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"), weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"), weekdaysMin: "日_一_二_三_四_五_六".split("_"), ordinal: function(o, a) {
      return a === "W" ? o + "週" : o + "日";
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY/MM/DD", LL: "YYYY年M月D日", LLL: "YYYY年M月D日 HH:mm", LLLL: "YYYY年M月D日dddd HH:mm" }, relativeTime: { future: "%s內", past: "%s前", s: "幾秒", m: "一分鐘", mm: "%d 分鐘", h: "一小時", hh: "%d 小時", d: "一天", dd: "%d 天", M: "一個月", MM: "%d 個月", y: "一年", yy: "%d 年" } };
    return s.default.locale(i, null, !0), i;
  });
})(Q$);
var eH = pa, tH = /* @__PURE__ */ V({
  __proto__: null,
  default: eH
}, [pa]), ha = {}, nH = {
  get exports() {
    return ha;
  },
  set exports(e) {
    ha = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "zh-tw", weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"), weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"), weekdaysMin: "日_一_二_三_四_五_六".split("_"), months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"), monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"), ordinal: function(o, a) {
      return a === "W" ? o + "週" : o + "日";
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY/MM/DD", LL: "YYYY年M月D日", LLL: "YYYY年M月D日 HH:mm", LLLL: "YYYY年M月D日dddd HH:mm", l: "YYYY/M/D", ll: "YYYY年M月D日", lll: "YYYY年M月D日 HH:mm", llll: "YYYY年M月D日dddd HH:mm" }, relativeTime: { future: "%s內", past: "%s前", s: "幾秒", m: "1 分鐘", mm: "%d 分鐘", h: "1 小時", hh: "%d 小時", d: "1 天", dd: "%d 天", M: "1 個月", MM: "%d 個月", y: "1 年", yy: "%d 年" }, meridiem: function(o, a) {
      var l = 100 * o + a;
      return l < 600 ? "凌晨" : l < 900 ? "早上" : l < 1100 ? "上午" : l < 1300 ? "中午" : l < 1800 ? "下午" : "晚上";
    } };
    return s.default.locale(i, null, !0), i;
  });
})(nH);
var rH = ha, oH = /* @__PURE__ */ V({
  __proto__: null,
  default: rH
}, [ha]), _a = {}, sH = {
  get exports() {
    return _a;
  },
  set exports(e) {
    _a = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(P);
  })(F, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "zh", weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"), weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"), weekdaysMin: "日_一_二_三_四_五_六".split("_"), months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"), monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"), ordinal: function(o, a) {
      return a === "W" ? o + "周" : o + "日";
    }, weekStart: 1, yearStart: 4, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY/MM/DD", LL: "YYYY年M月D日", LLL: "YYYY年M月D日Ah点mm分", LLLL: "YYYY年M月D日ddddAh点mm分", l: "YYYY/M/D", ll: "YYYY年M月D日", lll: "YYYY年M月D日 HH:mm", llll: "YYYY年M月D日dddd HH:mm" }, relativeTime: { future: "%s后", past: "%s前", s: "几秒", m: "1 分钟", mm: "%d 分钟", h: "1 小时", hh: "%d 小时", d: "1 天", dd: "%d 天", M: "1 个月", MM: "%d 个月", y: "1 年", yy: "%d 年" }, meridiem: function(o, a) {
      var l = 100 * o + a;
      return l < 600 ? "凌晨" : l < 900 ? "早上" : l < 1100 ? "上午" : l < 1300 ? "中午" : l < 1800 ? "下午" : "晚上";
    } };
    return s.default.locale(i, null, !0), i;
  });
})(sH);
var iH = _a, aH = /* @__PURE__ */ V({
  __proto__: null,
  default: iH
}, [_a]);
const zt = (e) => typeof window == "undefined" ? "" : getComputedStyle(document.body).getPropertyValue(e), lH = "_DatePickerContainer_wbtum_1", uH = "_directionLeft_wbtum_10", cH = "_directionRight_wbtum_15", jl = {
  DatePickerContainer: lH,
  directionLeft: uH,
  directionRight: cH
}, TN = ({
  onChange: e,
  onErase: t,
  disabled: n = !1,
  invalid: r = !1,
  startWeekOn: s = "mon",
  label: i = "",
  emptyLabel: o = "",
  fillLabel: a = "",
  invalidText: l = "",
  displayFormat: u = "DD.MM.YYYY",
  i18n: c,
  accentColor: d = zt("--color-primary"),
  invalidColor: f = zt("--color-danger"),
  maxDate: m = "",
  minDate: p = "",
  className: h,
  inputClass: _,
  calendarColors: v = {
    disabled: zt("--color-light-3-tint"),
    activeText: zt("--color-background"),
    text: zt("--color-dark"),
    hoverBgClass: "hover:bg-light-4-tint",
    background: zt("--color-background"),
    border: zt("--color-light-4"),
    otherMonth: zt("--color-light-dark")
  },
  initialValue: M,
  containerClass: y,
  error: x,
  direction: w = "left"
}) => {
  const [k, D] = oe({
    startDate: null,
    endDate: null
  }), S = "en";
  ue(() => {
    D({
      startDate: M || null,
      endDate: M || null
    });
  }, [M]);
  const N = (I) => {
    D(I), e(I.startDate);
  }, Y = () => {
    D({
      startDate: null,
      endDate: null
    }), t == null || t();
  }, $ = (I) => {
    (I.key === "Backspace" || I.key === "Delete") && t && I.target.value === "" && (D({
      startDate: null,
      endDate: null
    }), t());
  };
  return /* @__PURE__ */ g.jsxs("div", { className: J("max-w-[174px] relative", h), children: [
    i && /* @__PURE__ */ g.jsx("p", { className: "text-sm text-light-dark mb-1", children: i }),
    /* @__PURE__ */ g.jsx("div", { onKeyUp: $, children: /* @__PURE__ */ g.jsx(
      $D,
      {
        readOnly: !1,
        value: k,
        onChange: N,
        disabled: n,
        displayFormat: u,
        startWeekOn: s,
        invalid: r,
        invalidColor: f,
        invalidText: l,
        emptyLabel: o,
        fillLabel: a,
        i18n: c || S,
        accentColor: d,
        inputClassName: J(
          "fill-medium icon-fill-medium icon-hover-fill-fo-accent hover-border-fo-accent transition-colors duration-100 border-2 !outline-offset-0 active:outline active:!outline-[1px] active:outline-fo-accent focus:outline focus:!outline-[1px] focus:outline-fo-accent border-color-light-3 text-medium disabled:border-light-3 hover:disabled:border-light-3 disabled:bg-4-tint hover:border-2 hover:disabled:bg-4-tint",
          (r || x) && "outline !outline-[1px] outline-danger",
          _
        ),
        minDate: p,
        maxDate: m,
        calendarColors: {
          ...v,
          hoverBgClass: J(
            v.hoverBgClass,
            "hover:disabled:bg-background disabled:cursor-not-allowed"
          )
        },
        containerClassName: J(
          jl.DatePickerContainer,
          w === "left" ? jl.directionLeft : jl.directionRight,
          y
        )
      }
    ) }),
    t && k.startDate && k.startDate !== "" && /* @__PURE__ */ g.jsx(
      Uh,
      {
        className: "cursor-pointer absolute right-3 top-3",
        height: 16,
        onClick: Y
      }
    ),
    x && /* @__PURE__ */ g.jsx("p", { className: J("text-danger text-xs mt-1 truncate"), children: x })
  ] });
};
function ve(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(s) {
    if (e == null || e(s), n === !1 || !s.defaultPrevented)
      return t == null ? void 0 : t(s);
  };
}
function Fm(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function Xa(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((s) => {
      const i = Fm(s, t);
      return !n && typeof i == "function" && (n = !0), i;
    });
    if (n)
      return () => {
        for (let s = 0; s < r.length; s++) {
          const i = r[s];
          typeof i == "function" ? i() : Fm(e[s], null);
        }
      };
  };
}
function Je(...e) {
  return b.useCallback(Xa(...e), e);
}
function Zr(e, t = []) {
  let n = [];
  function r(i, o) {
    const a = b.createContext(o), l = n.length;
    n = [...n, o];
    const u = (d) => {
      var v;
      const { scope: f, children: m, ...p } = d, h = ((v = f == null ? void 0 : f[e]) == null ? void 0 : v[l]) || a, _ = b.useMemo(() => p, Object.values(p));
      return /* @__PURE__ */ g.jsx(h.Provider, { value: _, children: m });
    };
    u.displayName = i + "Provider";
    function c(d, f) {
      var h;
      const m = ((h = f == null ? void 0 : f[e]) == null ? void 0 : h[l]) || a, p = b.useContext(m);
      if (p) return p;
      if (o !== void 0) return o;
      throw new Error(`\`${d}\` must be used within \`${i}\``);
    }
    return [u, c];
  }
  const s = () => {
    const i = n.map((o) => b.createContext(o));
    return function(a) {
      const l = (a == null ? void 0 : a[e]) || i;
      return b.useMemo(
        () => ({ [`__scope${e}`]: { ...a, [e]: l } }),
        [a, l]
      );
    };
  };
  return s.scopeName = e, [r, dH(s, ...t)];
}
function dH(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((s) => ({
      useScope: s(),
      scopeName: s.scopeName
    }));
    return function(i) {
      const o = r.reduce((a, { useScope: l, scopeName: u }) => {
        const d = l(i)[`__scope${u}`];
        return { ...a, ...d };
      }, {});
      return b.useMemo(() => ({ [`__scope${t.scopeName}`]: o }), [o]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
var en = globalThis != null && globalThis.document ? b.useLayoutEffect : () => {
}, fH = b[" useInsertionEffect ".trim().toString()] || en;
function md({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [s, i, o] = mH({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, l = a ? e : s;
  {
    const c = b.useRef(e !== void 0);
    b.useEffect(() => {
      const d = c.current;
      d !== a && console.warn(
        `${r} is changing from ${d ? "controlled" : "uncontrolled"} to ${a ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), c.current = a;
    }, [a, r]);
  }
  const u = b.useCallback(
    (c) => {
      var d;
      if (a) {
        const f = pH(c) ? c(e) : c;
        f !== e && ((d = o.current) == null || d.call(o, f));
      } else
        i(c);
    },
    [a, e, i, o]
  );
  return [l, u];
}
function mH({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = b.useState(e), s = b.useRef(n), i = b.useRef(t);
  return fH(() => {
    i.current = t;
  }, [t]), b.useEffect(() => {
    var o;
    s.current !== n && ((o = i.current) == null || o.call(i, n), s.current = n);
  }, [n, s]), [n, r, i];
}
function pH(e) {
  return typeof e == "function";
}
// @__NO_SIDE_EFFECTS__
function va(e) {
  const t = /* @__PURE__ */ hH(e), n = b.forwardRef((r, s) => {
    const { children: i, ...o } = r, a = b.Children.toArray(i), l = a.find(vH);
    if (l) {
      const u = l.props.children, c = a.map((d) => d === l ? b.Children.count(u) > 1 ? b.Children.only(null) : b.isValidElement(u) ? u.props.children : null : d);
      return /* @__PURE__ */ g.jsx(t, { ...o, ref: s, children: b.isValidElement(u) ? b.cloneElement(u, void 0, c) : null });
    }
    return /* @__PURE__ */ g.jsx(t, { ...o, ref: s, children: i });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function hH(e) {
  const t = b.forwardRef((n, r) => {
    const { children: s, ...i } = n;
    if (b.isValidElement(s)) {
      const o = yH(s), a = gH(i, s.props);
      return s.type !== b.Fragment && (a.ref = r ? Xa(r, o) : o), b.cloneElement(s, a);
    }
    return b.Children.count(s) > 1 ? b.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var _H = Symbol("radix.slottable");
function vH(e) {
  return b.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === _H;
}
function gH(e, t) {
  const n = { ...t };
  for (const r in t) {
    const s = e[r], i = t[r];
    /^on[A-Z]/.test(r) ? s && i ? n[r] = (...a) => {
      const l = i(...a);
      return s(...a), l;
    } : s && (n[r] = s) : r === "style" ? n[r] = { ...s, ...i } : r === "className" && (n[r] = [s, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function yH(e) {
  var r, s;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (s = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : s.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var MH = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], Ue = MH.reduce((e, t) => {
  const n = /* @__PURE__ */ va(`Primitive.${t}`), r = b.forwardRef((s, i) => {
    const { asChild: o, ...a } = s, l = o ? n : t;
    return typeof window != "undefined" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ g.jsx(l, { ...a, ref: i });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function Fv(e, t) {
  e && xr.flushSync(() => e.dispatchEvent(t));
}
function Vv(e) {
  const t = e + "CollectionProvider", [n, r] = Zr(t), [s, i] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), o = (h) => {
    const { scope: _, children: v } = h, M = T.useRef(null), y = T.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ g.jsx(s, { scope: _, itemMap: y, collectionRef: M, children: v });
  };
  o.displayName = t;
  const a = e + "CollectionSlot", l = /* @__PURE__ */ va(a), u = T.forwardRef(
    (h, _) => {
      const { scope: v, children: M } = h, y = i(a, v), x = Je(_, y.collectionRef);
      return /* @__PURE__ */ g.jsx(l, { ref: x, children: M });
    }
  );
  u.displayName = a;
  const c = e + "CollectionItemSlot", d = "data-radix-collection-item", f = /* @__PURE__ */ va(c), m = T.forwardRef(
    (h, _) => {
      const { scope: v, children: M, ...y } = h, x = T.useRef(null), w = Je(_, x), k = i(c, v);
      return T.useEffect(() => (k.itemMap.set(x, { ref: x, ...y }), () => void k.itemMap.delete(x))), /* @__PURE__ */ g.jsx(f, { [d]: "", ref: w, children: M });
    }
  );
  m.displayName = c;
  function p(h) {
    const _ = i(e + "CollectionConsumer", h);
    return T.useCallback(() => {
      const M = _.collectionRef.current;
      if (!M) return [];
      const y = Array.from(M.querySelectorAll(`[${d}]`));
      return Array.from(_.itemMap.values()).sort(
        (k, D) => y.indexOf(k.ref.current) - y.indexOf(D.ref.current)
      );
    }, [_.collectionRef, _.itemMap]);
  }
  return [
    { Provider: o, Slot: u, ItemSlot: m },
    p,
    r
  ];
}
var bH = b.createContext(void 0);
function zv(e) {
  const t = b.useContext(bH);
  return e || t || "ltr";
}
function St(e) {
  const t = b.useRef(e);
  return b.useEffect(() => {
    t.current = e;
  }), b.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function xH(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = St(e);
  b.useEffect(() => {
    const r = (s) => {
      s.key === "Escape" && n(s);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var wH = "DismissableLayer", Au = "dismissableLayer.update", YH = "dismissableLayer.pointerDownOutside", LH = "dismissableLayer.focusOutside", Vm, Bv = b.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Wv = b.forwardRef(
  (e, t) => {
    var D;
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: s,
      onFocusOutside: i,
      onInteractOutside: o,
      onDismiss: a,
      ...l
    } = e, u = b.useContext(Bv), [c, d] = b.useState(null), f = (D = c == null ? void 0 : c.ownerDocument) != null ? D : globalThis == null ? void 0 : globalThis.document, [, m] = b.useState({}), p = Je(t, (S) => d(S)), h = Array.from(u.layers), [_] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), v = h.indexOf(_), M = c ? h.indexOf(c) : -1, y = u.layersWithOutsidePointerEventsDisabled.size > 0, x = M >= v, w = DH((S) => {
      const N = S.target, Y = [...u.branches].some(($) => $.contains(N));
      !x || Y || (s == null || s(S), o == null || o(S), S.defaultPrevented || a == null || a());
    }, f), k = TH((S) => {
      const N = S.target;
      [...u.branches].some(($) => $.contains(N)) || (i == null || i(S), o == null || o(S), S.defaultPrevented || a == null || a());
    }, f);
    return xH((S) => {
      M === u.layers.size - 1 && (r == null || r(S), !S.defaultPrevented && a && (S.preventDefault(), a()));
    }, f), b.useEffect(() => {
      if (c)
        return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Vm = f.body.style.pointerEvents, f.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(c)), u.layers.add(c), zm(), () => {
          n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (f.body.style.pointerEvents = Vm);
        };
    }, [c, f, n, u]), b.useEffect(() => () => {
      c && (u.layers.delete(c), u.layersWithOutsidePointerEventsDisabled.delete(c), zm());
    }, [c, u]), b.useEffect(() => {
      const S = () => m({});
      return document.addEventListener(Au, S), () => document.removeEventListener(Au, S);
    }, []), /* @__PURE__ */ g.jsx(
      Ue.div,
      {
        ...l,
        ref: p,
        style: {
          pointerEvents: y ? x ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: ve(e.onFocusCapture, k.onFocusCapture),
        onBlurCapture: ve(e.onBlurCapture, k.onBlurCapture),
        onPointerDownCapture: ve(
          e.onPointerDownCapture,
          w.onPointerDownCapture
        )
      }
    );
  }
);
Wv.displayName = wH;
var SH = "DismissableLayerBranch", kH = b.forwardRef((e, t) => {
  const n = b.useContext(Bv), r = b.useRef(null), s = Je(t, r);
  return b.useEffect(() => {
    const i = r.current;
    if (i)
      return n.branches.add(i), () => {
        n.branches.delete(i);
      };
  }, [n.branches]), /* @__PURE__ */ g.jsx(Ue.div, { ...e, ref: s });
});
kH.displayName = SH;
function DH(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = St(e), r = b.useRef(!1), s = b.useRef(() => {
  });
  return b.useEffect(() => {
    const i = (a) => {
      if (a.target && !r.current) {
        let l = function() {
          Uv(
            YH,
            n,
            u,
            { discrete: !0 }
          );
        };
        const u = { originalEvent: a };
        a.pointerType === "touch" ? (t.removeEventListener("click", s.current), s.current = l, t.addEventListener("click", s.current, { once: !0 })) : l();
      } else
        t.removeEventListener("click", s.current);
      r.current = !1;
    }, o = window.setTimeout(() => {
      t.addEventListener("pointerdown", i);
    }, 0);
    return () => {
      window.clearTimeout(o), t.removeEventListener("pointerdown", i), t.removeEventListener("click", s.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function TH(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = St(e), r = b.useRef(!1);
  return b.useEffect(() => {
    const s = (i) => {
      i.target && !r.current && Uv(LH, n, { originalEvent: i }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", s), () => t.removeEventListener("focusin", s);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function zm() {
  const e = new CustomEvent(Au);
  document.dispatchEvent(e);
}
function Uv(e, t, n, { discrete: r }) {
  const s = n.originalEvent.target, i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && s.addEventListener(e, t, { once: !0 }), r ? Fv(s, i) : s.dispatchEvent(i);
}
var Pl = 0;
function EH() {
  b.useEffect(() => {
    var t, n;
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (t = e[0]) != null ? t : Bm()), document.body.insertAdjacentElement("beforeend", (n = e[1]) != null ? n : Bm()), Pl++, () => {
      Pl === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((r) => r.remove()), Pl--;
    };
  }, []);
}
function Bm() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var Al = "focusScope.autoFocusOnMount", Cl = "focusScope.autoFocusOnUnmount", Wm = { bubbles: !1, cancelable: !0 }, jH = "FocusScope", Kv = b.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: s,
    onUnmountAutoFocus: i,
    ...o
  } = e, [a, l] = b.useState(null), u = St(s), c = St(i), d = b.useRef(null), f = Je(t, (h) => l(h)), m = b.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  b.useEffect(() => {
    if (r) {
      let h = function(y) {
        if (m.paused || !a) return;
        const x = y.target;
        a.contains(x) ? d.current = x : Ut(d.current, { select: !0 });
      }, _ = function(y) {
        if (m.paused || !a) return;
        const x = y.relatedTarget;
        x !== null && (a.contains(x) || Ut(d.current, { select: !0 }));
      }, v = function(y) {
        if (document.activeElement === document.body)
          for (const w of y)
            w.removedNodes.length > 0 && Ut(a);
      };
      document.addEventListener("focusin", h), document.addEventListener("focusout", _);
      const M = new MutationObserver(v);
      return a && M.observe(a, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", h), document.removeEventListener("focusout", _), M.disconnect();
      };
    }
  }, [r, a, m.paused]), b.useEffect(() => {
    if (a) {
      Km.add(m);
      const h = document.activeElement;
      if (!a.contains(h)) {
        const v = new CustomEvent(Al, Wm);
        a.addEventListener(Al, u), a.dispatchEvent(v), v.defaultPrevented || (PH(OH(Gv(a)), { select: !0 }), document.activeElement === h && Ut(a));
      }
      return () => {
        a.removeEventListener(Al, u), setTimeout(() => {
          const v = new CustomEvent(Cl, Wm);
          a.addEventListener(Cl, c), a.dispatchEvent(v), v.defaultPrevented || Ut(h != null ? h : document.body, { select: !0 }), a.removeEventListener(Cl, c), Km.remove(m);
        }, 0);
      };
    }
  }, [a, u, c, m]);
  const p = b.useCallback(
    (h) => {
      if (!n && !r || m.paused) return;
      const _ = h.key === "Tab" && !h.altKey && !h.ctrlKey && !h.metaKey, v = document.activeElement;
      if (_ && v) {
        const M = h.currentTarget, [y, x] = AH(M);
        y && x ? !h.shiftKey && v === x ? (h.preventDefault(), n && Ut(y, { select: !0 })) : h.shiftKey && v === y && (h.preventDefault(), n && Ut(x, { select: !0 })) : v === M && h.preventDefault();
      }
    },
    [n, r, m.paused]
  );
  return /* @__PURE__ */ g.jsx(Ue.div, { tabIndex: -1, ...o, ref: f, onKeyDown: p });
});
Kv.displayName = jH;
function PH(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Ut(r, { select: t }), document.activeElement !== n) return;
}
function AH(e) {
  const t = Gv(e), n = Um(t, e), r = Um(t.reverse(), e);
  return [n, r];
}
function Gv(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const s = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || s ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Um(e, t) {
  for (const n of e)
    if (!CH(n, { upTo: t })) return n;
}
function CH(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function $H(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Ut(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && $H(e) && t && e.select();
  }
}
var Km = HH();
function HH() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Gm(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Gm(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function Gm(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function OH(e) {
  return e.filter((t) => t.tagName !== "A");
}
var RH = b[" useId ".trim().toString()] || (() => {
}), NH = 0;
function Hr(e) {
  const [t, n] = b.useState(RH());
  return en(() => {
    n((r) => r != null ? r : String(NH++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
var IH = "Arrow", Jv = b.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: s = 5, ...i } = e;
  return /* @__PURE__ */ g.jsx(
    Ue.svg,
    {
      ...i,
      ref: t,
      width: r,
      height: s,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ g.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
Jv.displayName = IH;
var FH = Jv;
function VH(e) {
  const [t, n] = b.useState(void 0);
  return en(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const r = new ResizeObserver((s) => {
        if (!Array.isArray(s) || !s.length)
          return;
        const i = s[0];
        let o, a;
        if ("borderBoxSize" in i) {
          const l = i.borderBoxSize, u = Array.isArray(l) ? l[0] : l;
          o = u.inlineSize, a = u.blockSize;
        } else
          o = e.offsetWidth, a = e.offsetHeight;
        n({ width: o, height: a });
      });
      return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
var pd = "Popper", [qv, Xv] = Zr(pd), [zH, Zv] = qv(pd), Qv = (e) => {
  const { __scopePopper: t, children: n } = e, [r, s] = b.useState(null);
  return /* @__PURE__ */ g.jsx(zH, { scope: t, anchor: r, onAnchorChange: s, children: n });
};
Qv.displayName = pd;
var eg = "PopperAnchor", tg = b.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...s } = e, i = Zv(eg, n), o = b.useRef(null), a = Je(t, o), l = b.useRef(null);
    return b.useEffect(() => {
      const u = l.current;
      l.current = (r == null ? void 0 : r.current) || o.current, u !== l.current && i.onAnchorChange(l.current);
    }), r ? null : /* @__PURE__ */ g.jsx(Ue.div, { ...s, ref: a });
  }
);
tg.displayName = eg;
var hd = "PopperContent", [BH, WH] = qv(hd), ng = b.forwardRef(
  (e, t) => {
    var W, Q, se, he, le, Ce, Xe, Vt;
    const {
      __scopePopper: n,
      side: r = "bottom",
      sideOffset: s = 0,
      align: i = "center",
      alignOffset: o = 0,
      arrowPadding: a = 0,
      avoidCollisions: l = !0,
      collisionBoundary: u = [],
      collisionPadding: c = 0,
      sticky: d = "partial",
      hideWhenDetached: f = !1,
      updatePositionStrategy: m = "optimized",
      onPlaced: p,
      ...h
    } = e, _ = Zv(hd, n), [v, M] = b.useState(null), y = Je(t, (lt) => M(lt)), [x, w] = b.useState(null), k = VH(x), D = (W = k == null ? void 0 : k.width) != null ? W : 0, S = (Q = k == null ? void 0 : k.height) != null ? Q : 0, N = r + (i !== "center" ? "-" + i : ""), Y = typeof c == "number" ? c : { top: 0, right: 0, bottom: 0, left: 0, ...c }, $ = Array.isArray(u) ? u : [u], I = $.length > 0, U = {
      padding: Y,
      boundary: $.filter(KH),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: I
    }, { refs: H, floatingStyles: A, placement: C, isPositioned: O, middlewareData: L } = K_({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: N,
      whileElementsMounted: (...lt) => W_(...lt, {
        animationFrame: m === "always"
      }),
      elements: {
        reference: _.anchor
      },
      middleware: [
        Jc({ mainAxis: s + S, alignmentAxis: o }),
        l && G_({
          mainAxis: !0,
          crossAxis: !1,
          limiter: d === "partial" ? uS() : void 0,
          ...U
        }),
        l && J_({ ...U }),
        q_({
          ...U,
          apply: ({ elements: lt, rects: sr, availableWidth: tl, availableHeight: ce }) => {
            const { width: ie, height: ze } = sr.reference, He = lt.floating.style;
            He.setProperty("--radix-popper-available-width", `${tl}px`), He.setProperty("--radix-popper-available-height", `${ce}px`), He.setProperty("--radix-popper-anchor-width", `${ie}px`), He.setProperty("--radix-popper-anchor-height", `${ze}px`);
          }
        }),
        x && dS({ element: x, padding: a }),
        GH({ arrowWidth: D, arrowHeight: S }),
        f && cS({ strategy: "referenceHidden", ...U })
      ]
    }), [j, B] = sg(C), E = St(p);
    en(() => {
      O && (E == null || E());
    }, [O, E]);
    const R = (se = L.arrow) == null ? void 0 : se.x, z = (he = L.arrow) == null ? void 0 : he.y, K = ((le = L.arrow) == null ? void 0 : le.centerOffset) !== 0, [ne, G] = b.useState();
    return en(() => {
      v && G(window.getComputedStyle(v).zIndex);
    }, [v]), /* @__PURE__ */ g.jsx(
      "div",
      {
        ref: H.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...A,
          transform: O ? A.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: ne,
          "--radix-popper-transform-origin": [
            (Ce = L.transformOrigin) == null ? void 0 : Ce.x,
            (Xe = L.transformOrigin) == null ? void 0 : Xe.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((Vt = L.hide) == null ? void 0 : Vt.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ g.jsx(
          BH,
          {
            scope: n,
            placedSide: j,
            onArrowChange: w,
            arrowX: R,
            arrowY: z,
            shouldHideArrow: K,
            children: /* @__PURE__ */ g.jsx(
              Ue.div,
              {
                "data-side": j,
                "data-align": B,
                ...h,
                ref: y,
                style: {
                  ...h.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: O ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
ng.displayName = hd;
var rg = "PopperArrow", UH = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, og = b.forwardRef(function(t, n) {
  const { __scopePopper: r, ...s } = t, i = WH(rg, r), o = UH[i.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ g.jsx(
      "span",
      {
        ref: i.onArrowChange,
        style: {
          position: "absolute",
          left: i.arrowX,
          top: i.arrowY,
          [o]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[i.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[i.placedSide],
          visibility: i.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ g.jsx(
          FH,
          {
            ...s,
            ref: n,
            style: {
              ...s.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
og.displayName = rg;
function KH(e) {
  return e !== null;
}
var GH = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var _, v, M, y, x;
    const { placement: n, rects: r, middlewareData: s } = t, o = ((_ = s.arrow) == null ? void 0 : _.centerOffset) !== 0, a = o ? 0 : e.arrowWidth, l = o ? 0 : e.arrowHeight, [u, c] = sg(n), d = { start: "0%", center: "50%", end: "100%" }[c], f = ((M = (v = s.arrow) == null ? void 0 : v.x) != null ? M : 0) + a / 2, m = ((x = (y = s.arrow) == null ? void 0 : y.y) != null ? x : 0) + l / 2;
    let p = "", h = "";
    return u === "bottom" ? (p = o ? d : `${f}px`, h = `${-l}px`) : u === "top" ? (p = o ? d : `${f}px`, h = `${r.floating.height + l}px`) : u === "right" ? (p = `${-l}px`, h = o ? d : `${m}px`) : u === "left" && (p = `${r.floating.width + l}px`, h = o ? d : `${m}px`), { data: { x: p, y: h } };
  }
});
function sg(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var ig = Qv, JH = tg, qH = ng, XH = og, ZH = "Portal", ag = b.forwardRef((e, t) => {
  var a;
  const { container: n, ...r } = e, [s, i] = b.useState(!1);
  en(() => i(!0), []);
  const o = n || s && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body);
  return o ? xy.createPortal(/* @__PURE__ */ g.jsx(Ue.div, { ...r, ref: t }), o) : null;
});
ag.displayName = ZH;
function QH(e, t) {
  return b.useReducer((n, r) => {
    const s = t[n][r];
    return s != null ? s : n;
  }, e);
}
var Qr = (e) => {
  const { present: t, children: n } = e, r = eO(t), s = typeof n == "function" ? n({ present: r.isPresent }) : b.Children.only(n), i = Je(r.ref, tO(s));
  return typeof n == "function" || r.isPresent ? b.cloneElement(s, { ref: i }) : null;
};
Qr.displayName = "Presence";
function eO(e) {
  const [t, n] = b.useState(), r = b.useRef(null), s = b.useRef(e), i = b.useRef("none"), o = e ? "mounted" : "unmounted", [a, l] = QH(o, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return b.useEffect(() => {
    const u = mo(r.current);
    i.current = a === "mounted" ? u : "none";
  }, [a]), en(() => {
    const u = r.current, c = s.current;
    if (c !== e) {
      const f = i.current, m = mo(u);
      e ? l("MOUNT") : m === "none" || (u == null ? void 0 : u.display) === "none" ? l("UNMOUNT") : l(c && f !== m ? "ANIMATION_OUT" : "UNMOUNT"), s.current = e;
    }
  }, [e, l]), en(() => {
    var u;
    if (t) {
      let c;
      const d = (u = t.ownerDocument.defaultView) != null ? u : window, f = (p) => {
        const _ = mo(r.current).includes(CSS.escape(p.animationName));
        if (p.target === t && _ && (l("ANIMATION_END"), !s.current)) {
          const v = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", c = d.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = v);
          });
        }
      }, m = (p) => {
        p.target === t && (i.current = mo(r.current));
      };
      return t.addEventListener("animationstart", m), t.addEventListener("animationcancel", f), t.addEventListener("animationend", f), () => {
        d.clearTimeout(c), t.removeEventListener("animationstart", m), t.removeEventListener("animationcancel", f), t.removeEventListener("animationend", f);
      };
    } else
      l("ANIMATION_END");
  }, [t, l]), {
    isPresent: ["mounted", "unmountSuspended"].includes(a),
    ref: b.useCallback((u) => {
      r.current = u ? getComputedStyle(u) : null, n(u);
    }, [])
  };
}
function mo(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function tO(e) {
  var r, s;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (s = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : s.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var $l = "rovingFocusGroup.onEntryFocus", nO = { bubbles: !1, cancelable: !0 }, eo = "RovingFocusGroup", [Cu, lg, rO] = Vv(eo), [oO, ug] = Zr(
  eo,
  [rO]
), [sO, iO] = oO(eo), cg = b.forwardRef(
  (e, t) => /* @__PURE__ */ g.jsx(Cu.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ g.jsx(Cu.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ g.jsx(aO, { ...e, ref: t }) }) })
);
cg.displayName = eo;
var aO = b.forwardRef((e, t) => {
  const {
    __scopeRovingFocusGroup: n,
    orientation: r,
    loop: s = !1,
    dir: i,
    currentTabStopId: o,
    defaultCurrentTabStopId: a,
    onCurrentTabStopIdChange: l,
    onEntryFocus: u,
    preventScrollOnEntryFocus: c = !1,
    ...d
  } = e, f = b.useRef(null), m = Je(t, f), p = zv(i), [h, _] = md({
    prop: o,
    defaultProp: a != null ? a : null,
    onChange: l,
    caller: eo
  }), [v, M] = b.useState(!1), y = St(u), x = lg(n), w = b.useRef(!1), [k, D] = b.useState(0);
  return b.useEffect(() => {
    const S = f.current;
    if (S)
      return S.addEventListener($l, y), () => S.removeEventListener($l, y);
  }, [y]), /* @__PURE__ */ g.jsx(
    sO,
    {
      scope: n,
      orientation: r,
      dir: p,
      loop: s,
      currentTabStopId: h,
      onItemFocus: b.useCallback(
        (S) => _(S),
        [_]
      ),
      onItemShiftTab: b.useCallback(() => M(!0), []),
      onFocusableItemAdd: b.useCallback(
        () => D((S) => S + 1),
        []
      ),
      onFocusableItemRemove: b.useCallback(
        () => D((S) => S - 1),
        []
      ),
      children: /* @__PURE__ */ g.jsx(
        Ue.div,
        {
          tabIndex: v || k === 0 ? -1 : 0,
          "data-orientation": r,
          ...d,
          ref: m,
          style: { outline: "none", ...e.style },
          onMouseDown: ve(e.onMouseDown, () => {
            w.current = !0;
          }),
          onFocus: ve(e.onFocus, (S) => {
            const N = !w.current;
            if (S.target === S.currentTarget && N && !v) {
              const Y = new CustomEvent($l, nO);
              if (S.currentTarget.dispatchEvent(Y), !Y.defaultPrevented) {
                const $ = x().filter((C) => C.focusable), I = $.find((C) => C.active), U = $.find((C) => C.id === h), A = [I, U, ...$].filter(
                  Boolean
                ).map((C) => C.ref.current);
                mg(A, c);
              }
            }
            w.current = !1;
          }),
          onBlur: ve(e.onBlur, () => M(!1))
        }
      )
    }
  );
}), dg = "RovingFocusGroupItem", fg = b.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: r = !0,
      active: s = !1,
      tabStopId: i,
      children: o,
      ...a
    } = e, l = Hr(), u = i || l, c = iO(dg, n), d = c.currentTabStopId === u, f = lg(n), { onFocusableItemAdd: m, onFocusableItemRemove: p, currentTabStopId: h } = c;
    return b.useEffect(() => {
      if (r)
        return m(), () => p();
    }, [r, m, p]), /* @__PURE__ */ g.jsx(
      Cu.ItemSlot,
      {
        scope: n,
        id: u,
        focusable: r,
        active: s,
        children: /* @__PURE__ */ g.jsx(
          Ue.span,
          {
            tabIndex: d ? 0 : -1,
            "data-orientation": c.orientation,
            ...a,
            ref: t,
            onMouseDown: ve(e.onMouseDown, (_) => {
              r ? c.onItemFocus(u) : _.preventDefault();
            }),
            onFocus: ve(e.onFocus, () => c.onItemFocus(u)),
            onKeyDown: ve(e.onKeyDown, (_) => {
              if (_.key === "Tab" && _.shiftKey) {
                c.onItemShiftTab();
                return;
              }
              if (_.target !== _.currentTarget) return;
              const v = cO(_, c.orientation, c.dir);
              if (v !== void 0) {
                if (_.metaKey || _.ctrlKey || _.altKey || _.shiftKey) return;
                _.preventDefault();
                let y = f().filter((x) => x.focusable).map((x) => x.ref.current);
                if (v === "last") y.reverse();
                else if (v === "prev" || v === "next") {
                  v === "prev" && y.reverse();
                  const x = y.indexOf(_.currentTarget);
                  y = c.loop ? dO(y, x + 1) : y.slice(x + 1);
                }
                setTimeout(() => mg(y));
              }
            }),
            children: typeof o == "function" ? o({ isCurrentTabStop: d, hasTabStop: h != null }) : o
          }
        )
      }
    );
  }
);
fg.displayName = dg;
var lO = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function uO(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function cO(e, t, n) {
  const r = uO(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return lO[r];
}
function mg(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function dO(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var fO = cg, mO = fg, pO = function(e) {
  if (typeof document == "undefined")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Yn = /* @__PURE__ */ new WeakMap(), po = /* @__PURE__ */ new WeakMap(), ho = {}, Hl = 0, pg = function(e) {
  return e && (e.host || pg(e.parentNode));
}, hO = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = pg(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, _O = function(e, t, n, r) {
  var s = hO(t, Array.isArray(e) ? e : [e]);
  ho[n] || (ho[n] = /* @__PURE__ */ new WeakMap());
  var i = ho[n], o = [], a = /* @__PURE__ */ new Set(), l = new Set(s), u = function(d) {
    !d || a.has(d) || (a.add(d), u(d.parentNode));
  };
  s.forEach(u);
  var c = function(d) {
    !d || l.has(d) || Array.prototype.forEach.call(d.children, function(f) {
      if (a.has(f))
        c(f);
      else
        try {
          var m = f.getAttribute(r), p = m !== null && m !== "false", h = (Yn.get(f) || 0) + 1, _ = (i.get(f) || 0) + 1;
          Yn.set(f, h), i.set(f, _), o.push(f), h === 1 && p && po.set(f, !0), _ === 1 && f.setAttribute(n, "true"), p || f.setAttribute(r, "true");
        } catch (v) {
          console.error("aria-hidden: cannot operate on ", f, v);
        }
    });
  };
  return c(t), a.clear(), Hl++, function() {
    o.forEach(function(d) {
      var f = Yn.get(d) - 1, m = i.get(d) - 1;
      Yn.set(d, f), i.set(d, m), f || (po.has(d) || d.removeAttribute(r), po.delete(d)), m || d.removeAttribute(n);
    }), Hl--, Hl || (Yn = /* @__PURE__ */ new WeakMap(), Yn = /* @__PURE__ */ new WeakMap(), po = /* @__PURE__ */ new WeakMap(), ho = {});
  };
}, vO = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), s = pO(e);
  return s ? (r.push.apply(r, Array.from(s.querySelectorAll("[aria-live], script"))), _O(r, s, n, "aria-hidden")) : function() {
    return null;
  };
}, vt = function() {
  return vt = Object.assign || function(t) {
    for (var n, r = 1, s = arguments.length; r < s; r++) {
      n = arguments[r];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, vt.apply(this, arguments);
};
function hg(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, r = Object.getOwnPropertySymbols(e); s < r.length; s++)
      t.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[s]) && (n[r[s]] = e[r[s]]);
  return n;
}
function gO(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, s = t.length, i; r < s; r++)
    (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var So = "right-scroll-bar-position", ko = "width-before-scroll-bar", yO = "with-scroll-bars-hidden", MO = "--removed-body-scroll-bar-size";
function Ol(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function bO(e, t) {
  var n = oe(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var s = n.value;
          s !== r && (n.value = r, n.callback(r, s));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var xO = typeof window != "undefined" ? b.useLayoutEffect : b.useEffect, Jm = /* @__PURE__ */ new WeakMap();
function wO(e, t) {
  var n = bO(null, function(r) {
    return e.forEach(function(s) {
      return Ol(s, r);
    });
  });
  return xO(function() {
    var r = Jm.get(n);
    if (r) {
      var s = new Set(r), i = new Set(e), o = n.current;
      s.forEach(function(a) {
        i.has(a) || Ol(a, null);
      }), i.forEach(function(a) {
        s.has(a) || Ol(a, o);
      });
    }
    Jm.set(n, e);
  }, [e]), n;
}
function YO(e) {
  return e;
}
function LO(e, t) {
  t === void 0 && (t = YO);
  var n = [], r = !1, s = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(i) {
      var o = t(i, r);
      return n.push(o), function() {
        n = n.filter(function(a) {
          return a !== o;
        });
      };
    },
    assignSyncMedium: function(i) {
      for (r = !0; n.length; ) {
        var o = n;
        n = [], o.forEach(i);
      }
      n = {
        push: function(a) {
          return i(a);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(i) {
      r = !0;
      var o = [];
      if (n.length) {
        var a = n;
        n = [], a.forEach(i), o = n;
      }
      var l = function() {
        var c = o;
        o = [], c.forEach(i);
      }, u = function() {
        return Promise.resolve().then(l);
      };
      u(), n = {
        push: function(c) {
          o.push(c), u();
        },
        filter: function(c) {
          return o = o.filter(c), n;
        }
      };
    }
  };
  return s;
}
function SO(e) {
  e === void 0 && (e = {});
  var t = LO(null);
  return t.options = vt({ async: !0, ssr: !1 }, e), t;
}
var _g = function(e) {
  var t = e.sideCar, n = hg(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return b.createElement(r, vt({}, n));
};
_g.isSideCarExport = !0;
function kO(e, t) {
  return e.useMedium(t), _g;
}
var vg = SO(), Rl = function() {
}, Za = b.forwardRef(function(e, t) {
  var n = b.useRef(null), r = b.useState({
    onScrollCapture: Rl,
    onWheelCapture: Rl,
    onTouchMoveCapture: Rl
  }), s = r[0], i = r[1], o = e.forwardProps, a = e.children, l = e.className, u = e.removeScrollBar, c = e.enabled, d = e.shards, f = e.sideCar, m = e.noRelative, p = e.noIsolation, h = e.inert, _ = e.allowPinchZoom, v = e.as, M = v === void 0 ? "div" : v, y = e.gapMode, x = hg(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), w = f, k = wO([n, t]), D = vt(vt({}, x), s);
  return b.createElement(
    b.Fragment,
    null,
    c && b.createElement(w, { sideCar: vg, removeScrollBar: u, shards: d, noRelative: m, noIsolation: p, inert: h, setCallbacks: i, allowPinchZoom: !!_, lockRef: n, gapMode: y }),
    o ? b.cloneElement(b.Children.only(a), vt(vt({}, D), { ref: k })) : b.createElement(M, vt({}, D, { className: l, ref: k }), a)
  );
});
Za.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Za.classNames = {
  fullWidth: ko,
  zeroRight: So
};
var DO = function() {
  if (typeof __webpack_nonce__ != "undefined")
    return __webpack_nonce__;
};
function TO() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = DO();
  return t && e.setAttribute("nonce", t), e;
}
function EO(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function jO(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var PO = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = TO()) && (EO(t, n), jO(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, AO = function() {
  var e = PO();
  return function(t, n) {
    b.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, gg = function() {
  var e = AO(), t = function(n) {
    var r = n.styles, s = n.dynamic;
    return e(r, s), null;
  };
  return t;
}, CO = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Nl = function(e) {
  return parseInt(e || "", 10) || 0;
}, $O = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], s = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Nl(n), Nl(r), Nl(s)];
}, HO = function(e) {
  if (e === void 0 && (e = "margin"), typeof window == "undefined")
    return CO;
  var t = $O(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, OO = gg(), In = "data-scroll-locked", RO = function(e, t, n, r) {
  var s = e.left, i = e.top, o = e.right, a = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(yO, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(a, "px ").concat(r, `;
  }
  body[`).concat(In, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(s, `px;
    padding-top: `).concat(i, `px;
    padding-right: `).concat(o, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(a, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(a, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(So, ` {
    right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(ko, ` {
    margin-right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(So, " .").concat(So, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(ko, " .").concat(ko, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(In, `] {
    `).concat(MO, ": ").concat(a, `px;
  }
`);
}, qm = function() {
  var e = parseInt(document.body.getAttribute(In) || "0", 10);
  return isFinite(e) ? e : 0;
}, NO = function() {
  b.useEffect(function() {
    return document.body.setAttribute(In, (qm() + 1).toString()), function() {
      var e = qm() - 1;
      e <= 0 ? document.body.removeAttribute(In) : document.body.setAttribute(In, e.toString());
    };
  }, []);
}, IO = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, s = r === void 0 ? "margin" : r;
  NO();
  var i = b.useMemo(function() {
    return HO(s);
  }, [s]);
  return b.createElement(OO, { styles: RO(i, !t, s, n ? "" : "!important") });
}, $u = !1;
if (typeof window != "undefined")
  try {
    var _o = Object.defineProperty({}, "passive", {
      get: function() {
        return $u = !0, !0;
      }
    });
    window.addEventListener("test", _o, _o), window.removeEventListener("test", _o, _o);
  } catch {
    $u = !1;
  }
var Ln = $u ? { passive: !1 } : !1, FO = function(e) {
  return e.tagName === "TEXTAREA";
}, yg = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !FO(e) && n[t] === "visible")
  );
}, VO = function(e) {
  return yg(e, "overflowY");
}, zO = function(e) {
  return yg(e, "overflowX");
}, Xm = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot != "undefined" && r instanceof ShadowRoot && (r = r.host);
    var s = Mg(e, r);
    if (s) {
      var i = bg(e, r), o = i[1], a = i[2];
      if (o > a)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, BO = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, WO = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Mg = function(e, t) {
  return e === "v" ? VO(t) : zO(t);
}, bg = function(e, t) {
  return e === "v" ? BO(t) : WO(t);
}, UO = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, KO = function(e, t, n, r, s) {
  var i = UO(e, window.getComputedStyle(t).direction), o = i * r, a = n.target, l = t.contains(a), u = !1, c = o > 0, d = 0, f = 0;
  do {
    if (!a)
      break;
    var m = bg(e, a), p = m[0], h = m[1], _ = m[2], v = h - _ - i * p;
    (p || v) && Mg(e, a) && (d += v, f += p);
    var M = a.parentNode;
    a = M && M.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? M.host : M;
  } while (
    // portaled content
    !l && a !== document.body || // self content
    l && (t.contains(a) || t === a)
  );
  return (c && Math.abs(d) < 1 || !c && Math.abs(f) < 1) && (u = !0), u;
}, vo = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Zm = function(e) {
  return [e.deltaX, e.deltaY];
}, Qm = function(e) {
  return e && "current" in e ? e.current : e;
}, GO = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, JO = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, qO = 0, Sn = [];
function XO(e) {
  var t = b.useRef([]), n = b.useRef([0, 0]), r = b.useRef(), s = b.useState(qO++)[0], i = b.useState(gg)[0], o = b.useRef(e);
  b.useEffect(function() {
    o.current = e;
  }, [e]), b.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(s));
      var h = gO([e.lockRef.current], (e.shards || []).map(Qm), !0).filter(Boolean);
      return h.forEach(function(_) {
        return _.classList.add("allow-interactivity-".concat(s));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(s)), h.forEach(function(_) {
          return _.classList.remove("allow-interactivity-".concat(s));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var a = b.useCallback(function(h, _) {
    if ("touches" in h && h.touches.length === 2 || h.type === "wheel" && h.ctrlKey)
      return !o.current.allowPinchZoom;
    var v = vo(h), M = n.current, y = "deltaX" in h ? h.deltaX : M[0] - v[0], x = "deltaY" in h ? h.deltaY : M[1] - v[1], w, k = h.target, D = Math.abs(y) > Math.abs(x) ? "h" : "v";
    if ("touches" in h && D === "h" && k.type === "range")
      return !1;
    var S = Xm(D, k);
    if (!S)
      return !0;
    if (S ? w = D : (w = D === "v" ? "h" : "v", S = Xm(D, k)), !S)
      return !1;
    if (!r.current && "changedTouches" in h && (y || x) && (r.current = w), !w)
      return !0;
    var N = r.current || w;
    return KO(N, _, h, N === "h" ? y : x);
  }, []), l = b.useCallback(function(h) {
    var _ = h;
    if (!(!Sn.length || Sn[Sn.length - 1] !== i)) {
      var v = "deltaY" in _ ? Zm(_) : vo(_), M = t.current.filter(function(w) {
        return w.name === _.type && (w.target === _.target || _.target === w.shadowParent) && GO(w.delta, v);
      })[0];
      if (M && M.should) {
        _.cancelable && _.preventDefault();
        return;
      }
      if (!M) {
        var y = (o.current.shards || []).map(Qm).filter(Boolean).filter(function(w) {
          return w.contains(_.target);
        }), x = y.length > 0 ? a(_, y[0]) : !o.current.noIsolation;
        x && _.cancelable && _.preventDefault();
      }
    }
  }, []), u = b.useCallback(function(h, _, v, M) {
    var y = { name: h, delta: _, target: v, should: M, shadowParent: ZO(v) };
    t.current.push(y), setTimeout(function() {
      t.current = t.current.filter(function(x) {
        return x !== y;
      });
    }, 1);
  }, []), c = b.useCallback(function(h) {
    n.current = vo(h), r.current = void 0;
  }, []), d = b.useCallback(function(h) {
    u(h.type, Zm(h), h.target, a(h, e.lockRef.current));
  }, []), f = b.useCallback(function(h) {
    u(h.type, vo(h), h.target, a(h, e.lockRef.current));
  }, []);
  b.useEffect(function() {
    return Sn.push(i), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: f
    }), document.addEventListener("wheel", l, Ln), document.addEventListener("touchmove", l, Ln), document.addEventListener("touchstart", c, Ln), function() {
      Sn = Sn.filter(function(h) {
        return h !== i;
      }), document.removeEventListener("wheel", l, Ln), document.removeEventListener("touchmove", l, Ln), document.removeEventListener("touchstart", c, Ln);
    };
  }, []);
  var m = e.removeScrollBar, p = e.inert;
  return b.createElement(
    b.Fragment,
    null,
    p ? b.createElement(i, { styles: JO(s) }) : null,
    m ? b.createElement(IO, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function ZO(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const QO = kO(vg, XO);
var xg = b.forwardRef(function(e, t) {
  return b.createElement(Za, vt({}, e, { ref: t, sideCar: QO }));
});
xg.classNames = Za.classNames;
var Hu = ["Enter", " "], eR = ["ArrowDown", "PageUp", "Home"], wg = ["ArrowUp", "PageDown", "End"], tR = [...eR, ...wg], nR = {
  ltr: [...Hu, "ArrowRight"],
  rtl: [...Hu, "ArrowLeft"]
}, rR = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, to = "Menu", [Or, oR, sR] = Vv(to), [xn, Yg] = Zr(to, [
  sR,
  Xv,
  ug
]), no = Xv(), Lg = ug(), [Sg, on] = xn(to), [iR, ro] = xn(to), kg = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: s, onOpenChange: i, modal: o = !0 } = e, a = no(t), [l, u] = b.useState(null), c = b.useRef(!1), d = St(i), f = zv(s);
  return b.useEffect(() => {
    const m = () => {
      c.current = !0, document.addEventListener("pointerdown", p, { capture: !0, once: !0 }), document.addEventListener("pointermove", p, { capture: !0, once: !0 });
    }, p = () => c.current = !1;
    return document.addEventListener("keydown", m, { capture: !0 }), () => {
      document.removeEventListener("keydown", m, { capture: !0 }), document.removeEventListener("pointerdown", p, { capture: !0 }), document.removeEventListener("pointermove", p, { capture: !0 });
    };
  }, []), /* @__PURE__ */ g.jsx(ig, { ...a, children: /* @__PURE__ */ g.jsx(
    Sg,
    {
      scope: t,
      open: n,
      onOpenChange: d,
      content: l,
      onContentChange: u,
      children: /* @__PURE__ */ g.jsx(
        iR,
        {
          scope: t,
          onClose: b.useCallback(() => d(!1), [d]),
          isUsingKeyboardRef: c,
          dir: f,
          modal: o,
          children: r
        }
      )
    }
  ) });
};
kg.displayName = to;
var aR = "MenuAnchor", _d = b.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, s = no(n);
    return /* @__PURE__ */ g.jsx(JH, { ...s, ...r, ref: t });
  }
);
_d.displayName = aR;
var vd = "MenuPortal", [lR, Dg] = xn(vd, {
  forceMount: void 0
}), Tg = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: s } = e, i = on(vd, t);
  return /* @__PURE__ */ g.jsx(lR, { scope: t, forceMount: n, children: /* @__PURE__ */ g.jsx(Qr, { present: n || i.open, children: /* @__PURE__ */ g.jsx(ag, { asChild: !0, container: s, children: r }) }) });
};
Tg.displayName = vd;
var it = "MenuContent", [uR, gd] = xn(it), Eg = b.forwardRef(
  (e, t) => {
    const n = Dg(it, e.__scopeMenu), { forceMount: r = n.forceMount, ...s } = e, i = on(it, e.__scopeMenu), o = ro(it, e.__scopeMenu);
    return /* @__PURE__ */ g.jsx(Or.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ g.jsx(Qr, { present: r || i.open, children: /* @__PURE__ */ g.jsx(Or.Slot, { scope: e.__scopeMenu, children: o.modal ? /* @__PURE__ */ g.jsx(cR, { ...s, ref: t }) : /* @__PURE__ */ g.jsx(dR, { ...s, ref: t }) }) }) });
  }
), cR = b.forwardRef(
  (e, t) => {
    const n = on(it, e.__scopeMenu), r = b.useRef(null), s = Je(t, r);
    return b.useEffect(() => {
      const i = r.current;
      if (i) return vO(i);
    }, []), /* @__PURE__ */ g.jsx(
      yd,
      {
        ...e,
        ref: s,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        disableOutsideScroll: !0,
        onFocusOutside: ve(
          e.onFocusOutside,
          (i) => i.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => n.onOpenChange(!1)
      }
    );
  }
), dR = b.forwardRef((e, t) => {
  const n = on(it, e.__scopeMenu);
  return /* @__PURE__ */ g.jsx(
    yd,
    {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1)
    }
  );
}), fR = /* @__PURE__ */ va("MenuContent.ScrollLock"), yd = b.forwardRef(
  (e, t) => {
    const {
      __scopeMenu: n,
      loop: r = !1,
      trapFocus: s,
      onOpenAutoFocus: i,
      onCloseAutoFocus: o,
      disableOutsidePointerEvents: a,
      onEntryFocus: l,
      onEscapeKeyDown: u,
      onPointerDownOutside: c,
      onFocusOutside: d,
      onInteractOutside: f,
      onDismiss: m,
      disableOutsideScroll: p,
      ...h
    } = e, _ = on(it, n), v = ro(it, n), M = no(n), y = Lg(n), x = oR(n), [w, k] = b.useState(null), D = b.useRef(null), S = Je(t, D, _.onContentChange), N = b.useRef(0), Y = b.useRef(""), $ = b.useRef(0), I = b.useRef(null), U = b.useRef("right"), H = b.useRef(0), A = p ? xg : b.Fragment, C = p ? { as: fR, allowPinchZoom: !0 } : void 0, O = (j) => {
      var W, Q;
      const B = Y.current + j, E = x().filter((se) => !se.disabled), R = document.activeElement, z = (W = E.find((se) => se.ref.current === R)) == null ? void 0 : W.textValue, K = E.map((se) => se.textValue), ne = YR(K, B, z), G = (Q = E.find((se) => se.textValue === ne)) == null ? void 0 : Q.ref.current;
      (function se(he) {
        Y.current = he, window.clearTimeout(N.current), he !== "" && (N.current = window.setTimeout(() => se(""), 1e3));
      })(B), G && setTimeout(() => G.focus());
    };
    b.useEffect(() => () => window.clearTimeout(N.current), []), EH();
    const L = b.useCallback((j) => {
      var E, R;
      return U.current === ((E = I.current) == null ? void 0 : E.side) && SR(j, (R = I.current) == null ? void 0 : R.area);
    }, []);
    return /* @__PURE__ */ g.jsx(
      uR,
      {
        scope: n,
        searchRef: Y,
        onItemEnter: b.useCallback(
          (j) => {
            L(j) && j.preventDefault();
          },
          [L]
        ),
        onItemLeave: b.useCallback(
          (j) => {
            var B;
            L(j) || ((B = D.current) == null || B.focus(), k(null));
          },
          [L]
        ),
        onTriggerLeave: b.useCallback(
          (j) => {
            L(j) && j.preventDefault();
          },
          [L]
        ),
        pointerGraceTimerRef: $,
        onPointerGraceIntentChange: b.useCallback((j) => {
          I.current = j;
        }, []),
        children: /* @__PURE__ */ g.jsx(A, { ...C, children: /* @__PURE__ */ g.jsx(
          Kv,
          {
            asChild: !0,
            trapped: s,
            onMountAutoFocus: ve(i, (j) => {
              var B;
              j.preventDefault(), (B = D.current) == null || B.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: o,
            children: /* @__PURE__ */ g.jsx(
              Wv,
              {
                asChild: !0,
                disableOutsidePointerEvents: a,
                onEscapeKeyDown: u,
                onPointerDownOutside: c,
                onFocusOutside: d,
                onInteractOutside: f,
                onDismiss: m,
                children: /* @__PURE__ */ g.jsx(
                  fO,
                  {
                    asChild: !0,
                    ...y,
                    dir: v.dir,
                    orientation: "vertical",
                    loop: r,
                    currentTabStopId: w,
                    onCurrentTabStopIdChange: k,
                    onEntryFocus: ve(l, (j) => {
                      v.isUsingKeyboardRef.current || j.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ g.jsx(
                      qH,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": Kg(_.open),
                        "data-radix-menu-content": "",
                        dir: v.dir,
                        ...M,
                        ...h,
                        ref: S,
                        style: { outline: "none", ...h.style },
                        onKeyDown: ve(h.onKeyDown, (j) => {
                          const E = j.target.closest("[data-radix-menu-content]") === j.currentTarget, R = j.ctrlKey || j.altKey || j.metaKey, z = j.key.length === 1;
                          E && (j.key === "Tab" && j.preventDefault(), !R && z && O(j.key));
                          const K = D.current;
                          if (j.target !== K || !tR.includes(j.key)) return;
                          j.preventDefault();
                          const G = x().filter((W) => !W.disabled).map((W) => W.ref.current);
                          wg.includes(j.key) && G.reverse(), xR(G);
                        }),
                        onBlur: ve(e.onBlur, (j) => {
                          j.currentTarget.contains(j.target) || (window.clearTimeout(N.current), Y.current = "");
                        }),
                        onPointerMove: ve(
                          e.onPointerMove,
                          Rr((j) => {
                            const B = j.target, E = H.current !== j.clientX;
                            if (j.currentTarget.contains(B) && E) {
                              const R = j.clientX > H.current ? "right" : "left";
                              U.current = R, H.current = j.clientX;
                            }
                          })
                        )
                      }
                    )
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
Eg.displayName = it;
var mR = "MenuGroup", Md = b.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ g.jsx(Ue.div, { role: "group", ...r, ref: t });
  }
);
Md.displayName = mR;
var pR = "MenuLabel", jg = b.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ g.jsx(Ue.div, { ...r, ref: t });
  }
);
jg.displayName = pR;
var ga = "MenuItem", ep = "menu.itemSelect", Qa = b.forwardRef(
  (e, t) => {
    const { disabled: n = !1, onSelect: r, ...s } = e, i = b.useRef(null), o = ro(ga, e.__scopeMenu), a = gd(ga, e.__scopeMenu), l = Je(t, i), u = b.useRef(!1), c = () => {
      const d = i.current;
      if (!n && d) {
        const f = new CustomEvent(ep, { bubbles: !0, cancelable: !0 });
        d.addEventListener(ep, (m) => r == null ? void 0 : r(m), { once: !0 }), Fv(d, f), f.defaultPrevented ? u.current = !1 : o.onClose();
      }
    };
    return /* @__PURE__ */ g.jsx(
      Pg,
      {
        ...s,
        ref: l,
        disabled: n,
        onClick: ve(e.onClick, c),
        onPointerDown: (d) => {
          var f;
          (f = e.onPointerDown) == null || f.call(e, d), u.current = !0;
        },
        onPointerUp: ve(e.onPointerUp, (d) => {
          var f;
          u.current || (f = d.currentTarget) == null || f.click();
        }),
        onKeyDown: ve(e.onKeyDown, (d) => {
          const f = a.searchRef.current !== "";
          n || f && d.key === " " || Hu.includes(d.key) && (d.currentTarget.click(), d.preventDefault());
        })
      }
    );
  }
);
Qa.displayName = ga;
var Pg = b.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, disabled: r = !1, textValue: s, ...i } = e, o = gd(ga, n), a = Lg(n), l = b.useRef(null), u = Je(t, l), [c, d] = b.useState(!1), [f, m] = b.useState("");
    return b.useEffect(() => {
      var h;
      const p = l.current;
      p && m(((h = p.textContent) != null ? h : "").trim());
    }, [i.children]), /* @__PURE__ */ g.jsx(
      Or.ItemSlot,
      {
        scope: n,
        disabled: r,
        textValue: s != null ? s : f,
        children: /* @__PURE__ */ g.jsx(mO, { asChild: !0, ...a, focusable: !r, children: /* @__PURE__ */ g.jsx(
          Ue.div,
          {
            role: "menuitem",
            "data-highlighted": c ? "" : void 0,
            "aria-disabled": r || void 0,
            "data-disabled": r ? "" : void 0,
            ...i,
            ref: u,
            onPointerMove: ve(
              e.onPointerMove,
              Rr((p) => {
                r ? o.onItemLeave(p) : (o.onItemEnter(p), p.defaultPrevented || p.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: ve(
              e.onPointerLeave,
              Rr((p) => o.onItemLeave(p))
            ),
            onFocus: ve(e.onFocus, () => d(!0)),
            onBlur: ve(e.onBlur, () => d(!1))
          }
        ) })
      }
    );
  }
), hR = "MenuCheckboxItem", Ag = b.forwardRef(
  (e, t) => {
    const { checked: n = !1, onCheckedChange: r, ...s } = e;
    return /* @__PURE__ */ g.jsx(Rg, { scope: e.__scopeMenu, checked: n, children: /* @__PURE__ */ g.jsx(
      Qa,
      {
        role: "menuitemcheckbox",
        "aria-checked": ya(n) ? "mixed" : n,
        ...s,
        ref: t,
        "data-state": wd(n),
        onSelect: ve(
          s.onSelect,
          () => r == null ? void 0 : r(ya(n) ? !0 : !n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Ag.displayName = hR;
var Cg = "MenuRadioGroup", [_R, vR] = xn(
  Cg,
  { value: void 0, onValueChange: () => {
  } }
), $g = b.forwardRef(
  (e, t) => {
    const { value: n, onValueChange: r, ...s } = e, i = St(r);
    return /* @__PURE__ */ g.jsx(_R, { scope: e.__scopeMenu, value: n, onValueChange: i, children: /* @__PURE__ */ g.jsx(Md, { ...s, ref: t }) });
  }
);
$g.displayName = Cg;
var Hg = "MenuRadioItem", Og = b.forwardRef(
  (e, t) => {
    const { value: n, ...r } = e, s = vR(Hg, e.__scopeMenu), i = n === s.value;
    return /* @__PURE__ */ g.jsx(Rg, { scope: e.__scopeMenu, checked: i, children: /* @__PURE__ */ g.jsx(
      Qa,
      {
        role: "menuitemradio",
        "aria-checked": i,
        ...r,
        ref: t,
        "data-state": wd(i),
        onSelect: ve(
          r.onSelect,
          () => {
            var o;
            return (o = s.onValueChange) == null ? void 0 : o.call(s, n);
          },
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Og.displayName = Hg;
var bd = "MenuItemIndicator", [Rg, gR] = xn(
  bd,
  { checked: !1 }
), Ng = b.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, forceMount: r, ...s } = e, i = gR(bd, n);
    return /* @__PURE__ */ g.jsx(
      Qr,
      {
        present: r || ya(i.checked) || i.checked === !0,
        children: /* @__PURE__ */ g.jsx(
          Ue.span,
          {
            ...s,
            ref: t,
            "data-state": wd(i.checked)
          }
        )
      }
    );
  }
);
Ng.displayName = bd;
var yR = "MenuSeparator", Ig = b.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ g.jsx(
      Ue.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...r,
        ref: t
      }
    );
  }
);
Ig.displayName = yR;
var MR = "MenuArrow", Fg = b.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, s = no(n);
    return /* @__PURE__ */ g.jsx(XH, { ...s, ...r, ref: t });
  }
);
Fg.displayName = MR;
var xd = "MenuSub", [bR, Vg] = xn(xd), zg = (e) => {
  const { __scopeMenu: t, children: n, open: r = !1, onOpenChange: s } = e, i = on(xd, t), o = no(t), [a, l] = b.useState(null), [u, c] = b.useState(null), d = St(s);
  return b.useEffect(() => (i.open === !1 && d(!1), () => d(!1)), [i.open, d]), /* @__PURE__ */ g.jsx(ig, { ...o, children: /* @__PURE__ */ g.jsx(
    Sg,
    {
      scope: t,
      open: r,
      onOpenChange: d,
      content: u,
      onContentChange: c,
      children: /* @__PURE__ */ g.jsx(
        bR,
        {
          scope: t,
          contentId: Hr(),
          triggerId: Hr(),
          trigger: a,
          onTriggerChange: l,
          children: n
        }
      )
    }
  ) });
};
zg.displayName = xd;
var hr = "MenuSubTrigger", Bg = b.forwardRef(
  (e, t) => {
    const n = on(hr, e.__scopeMenu), r = ro(hr, e.__scopeMenu), s = Vg(hr, e.__scopeMenu), i = gd(hr, e.__scopeMenu), o = b.useRef(null), { pointerGraceTimerRef: a, onPointerGraceIntentChange: l } = i, u = { __scopeMenu: e.__scopeMenu }, c = b.useCallback(() => {
      o.current && window.clearTimeout(o.current), o.current = null;
    }, []);
    return b.useEffect(() => c, [c]), b.useEffect(() => {
      const d = a.current;
      return () => {
        window.clearTimeout(d), l(null);
      };
    }, [a, l]), /* @__PURE__ */ g.jsx(_d, { asChild: !0, ...u, children: /* @__PURE__ */ g.jsx(
      Pg,
      {
        id: s.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": n.open,
        "aria-controls": s.contentId,
        "data-state": Kg(n.open),
        ...e,
        ref: Xa(t, s.onTriggerChange),
        onClick: (d) => {
          var f;
          (f = e.onClick) == null || f.call(e, d), !(e.disabled || d.defaultPrevented) && (d.currentTarget.focus(), n.open || n.onOpenChange(!0));
        },
        onPointerMove: ve(
          e.onPointerMove,
          Rr((d) => {
            i.onItemEnter(d), !d.defaultPrevented && !e.disabled && !n.open && !o.current && (i.onPointerGraceIntentChange(null), o.current = window.setTimeout(() => {
              n.onOpenChange(!0), c();
            }, 100));
          })
        ),
        onPointerLeave: ve(
          e.onPointerLeave,
          Rr((d) => {
            var m, p;
            c();
            const f = (m = n.content) == null ? void 0 : m.getBoundingClientRect();
            if (f) {
              const h = (p = n.content) == null ? void 0 : p.dataset.side, _ = h === "right", v = _ ? -5 : 5, M = f[_ ? "left" : "right"], y = f[_ ? "right" : "left"];
              i.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: d.clientX + v, y: d.clientY },
                  { x: M, y: f.top },
                  { x: y, y: f.top },
                  { x: y, y: f.bottom },
                  { x: M, y: f.bottom }
                ],
                side: h
              }), window.clearTimeout(a.current), a.current = window.setTimeout(
                () => i.onPointerGraceIntentChange(null),
                300
              );
            } else {
              if (i.onTriggerLeave(d), d.defaultPrevented) return;
              i.onPointerGraceIntentChange(null);
            }
          })
        ),
        onKeyDown: ve(e.onKeyDown, (d) => {
          var m;
          const f = i.searchRef.current !== "";
          e.disabled || f && d.key === " " || nR[r.dir].includes(d.key) && (n.onOpenChange(!0), (m = n.content) == null || m.focus(), d.preventDefault());
        })
      }
    ) });
  }
);
Bg.displayName = hr;
var Wg = "MenuSubContent", Ug = b.forwardRef(
  (e, t) => {
    const n = Dg(it, e.__scopeMenu), { forceMount: r = n.forceMount, ...s } = e, i = on(it, e.__scopeMenu), o = ro(it, e.__scopeMenu), a = Vg(Wg, e.__scopeMenu), l = b.useRef(null), u = Je(t, l);
    return /* @__PURE__ */ g.jsx(Or.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ g.jsx(Qr, { present: r || i.open, children: /* @__PURE__ */ g.jsx(Or.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ g.jsx(
      yd,
      {
        id: a.contentId,
        "aria-labelledby": a.triggerId,
        ...s,
        ref: u,
        align: "start",
        side: o.dir === "rtl" ? "left" : "right",
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        trapFocus: !1,
        onOpenAutoFocus: (c) => {
          var d;
          o.isUsingKeyboardRef.current && ((d = l.current) == null || d.focus()), c.preventDefault();
        },
        onCloseAutoFocus: (c) => c.preventDefault(),
        onFocusOutside: ve(e.onFocusOutside, (c) => {
          c.target !== a.trigger && i.onOpenChange(!1);
        }),
        onEscapeKeyDown: ve(e.onEscapeKeyDown, (c) => {
          o.onClose(), c.preventDefault();
        }),
        onKeyDown: ve(e.onKeyDown, (c) => {
          var m;
          const d = c.currentTarget.contains(c.target), f = rR[o.dir].includes(c.key);
          d && f && (i.onOpenChange(!1), (m = a.trigger) == null || m.focus(), c.preventDefault());
        })
      }
    ) }) }) });
  }
);
Ug.displayName = Wg;
function Kg(e) {
  return e ? "open" : "closed";
}
function ya(e) {
  return e === "indeterminate";
}
function wd(e) {
  return ya(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function xR(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function wR(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function YR(e, t, n) {
  const s = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1;
  let o = wR(e, Math.max(i, 0));
  s.length === 1 && (o = o.filter((u) => u !== n));
  const l = o.find(
    (u) => u.toLowerCase().startsWith(s.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function LR(e, t) {
  const { x: n, y: r } = e;
  let s = !1;
  for (let i = 0, o = t.length - 1; i < t.length; o = i++) {
    const a = t[i], l = t[o], u = a.x, c = a.y, d = l.x, f = l.y;
    c > r != f > r && n < (d - u) * (r - c) / (f - c) + u && (s = !s);
  }
  return s;
}
function SR(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return LR(n, t);
}
function Rr(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var kR = kg, DR = _d, TR = Tg, ER = Eg, jR = Md, PR = jg, AR = Qa, CR = Ag, $R = $g, HR = Og, OR = Ng, RR = Ig, NR = Fg, IR = zg, FR = Bg, VR = Ug, el = "DropdownMenu", [zR] = Zr(
  el,
  [Yg]
), Ve = Yg(), [BR, Gg] = zR(el), Jg = (e) => {
  const {
    __scopeDropdownMenu: t,
    children: n,
    dir: r,
    open: s,
    defaultOpen: i,
    onOpenChange: o,
    modal: a = !0
  } = e, l = Ve(t), u = b.useRef(null), [c, d] = md({
    prop: s,
    defaultProp: i != null ? i : !1,
    onChange: o,
    caller: el
  });
  return /* @__PURE__ */ g.jsx(
    BR,
    {
      scope: t,
      triggerId: Hr(),
      triggerRef: u,
      contentId: Hr(),
      open: c,
      onOpenChange: d,
      onOpenToggle: b.useCallback(() => d((f) => !f), [d]),
      modal: a,
      children: /* @__PURE__ */ g.jsx(kR, { ...l, open: c, onOpenChange: d, dir: r, modal: a, children: n })
    }
  );
};
Jg.displayName = el;
var qg = "DropdownMenuTrigger", Xg = b.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, disabled: r = !1, ...s } = e, i = Gg(qg, n), o = Ve(n);
    return /* @__PURE__ */ g.jsx(DR, { asChild: !0, ...o, children: /* @__PURE__ */ g.jsx(
      Ue.button,
      {
        type: "button",
        id: i.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": i.open,
        "aria-controls": i.open ? i.contentId : void 0,
        "data-state": i.open ? "open" : "closed",
        "data-disabled": r ? "" : void 0,
        disabled: r,
        ...s,
        ref: Xa(t, i.triggerRef),
        onPointerDown: ve(e.onPointerDown, (a) => {
          !r && a.button === 0 && a.ctrlKey === !1 && (i.onOpenToggle(), i.open || a.preventDefault());
        }),
        onKeyDown: ve(e.onKeyDown, (a) => {
          r || (["Enter", " "].includes(a.key) && i.onOpenToggle(), a.key === "ArrowDown" && i.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(a.key) && a.preventDefault());
        })
      }
    ) });
  }
);
Xg.displayName = qg;
var WR = "DropdownMenuPortal", Zg = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = Ve(t);
  return /* @__PURE__ */ g.jsx(TR, { ...r, ...n });
};
Zg.displayName = WR;
var Qg = "DropdownMenuContent", ey = b.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, s = Gg(Qg, n), i = Ve(n), o = b.useRef(!1);
    return /* @__PURE__ */ g.jsx(
      ER,
      {
        id: s.contentId,
        "aria-labelledby": s.triggerId,
        ...i,
        ...r,
        ref: t,
        onCloseAutoFocus: ve(e.onCloseAutoFocus, (a) => {
          var l;
          o.current || (l = s.triggerRef.current) == null || l.focus(), o.current = !1, a.preventDefault();
        }),
        onInteractOutside: ve(e.onInteractOutside, (a) => {
          const l = a.detail.originalEvent, u = l.button === 0 && l.ctrlKey === !0, c = l.button === 2 || u;
          (!s.modal || c) && (o.current = !0);
        }),
        style: {
          ...e.style,
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    );
  }
);
ey.displayName = Qg;
var UR = "DropdownMenuGroup", KR = b.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, s = Ve(n);
    return /* @__PURE__ */ g.jsx(jR, { ...s, ...r, ref: t });
  }
);
KR.displayName = UR;
var GR = "DropdownMenuLabel", JR = b.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, s = Ve(n);
    return /* @__PURE__ */ g.jsx(PR, { ...s, ...r, ref: t });
  }
);
JR.displayName = GR;
var qR = "DropdownMenuItem", ty = b.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, s = Ve(n);
    return /* @__PURE__ */ g.jsx(AR, { ...s, ...r, ref: t });
  }
);
ty.displayName = qR;
var XR = "DropdownMenuCheckboxItem", ZR = b.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, s = Ve(n);
  return /* @__PURE__ */ g.jsx(CR, { ...s, ...r, ref: t });
});
ZR.displayName = XR;
var QR = "DropdownMenuRadioGroup", e2 = b.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, s = Ve(n);
  return /* @__PURE__ */ g.jsx($R, { ...s, ...r, ref: t });
});
e2.displayName = QR;
var t2 = "DropdownMenuRadioItem", n2 = b.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, s = Ve(n);
  return /* @__PURE__ */ g.jsx(HR, { ...s, ...r, ref: t });
});
n2.displayName = t2;
var r2 = "DropdownMenuItemIndicator", o2 = b.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, s = Ve(n);
  return /* @__PURE__ */ g.jsx(OR, { ...s, ...r, ref: t });
});
o2.displayName = r2;
var s2 = "DropdownMenuSeparator", i2 = b.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, s = Ve(n);
  return /* @__PURE__ */ g.jsx(RR, { ...s, ...r, ref: t });
});
i2.displayName = s2;
var a2 = "DropdownMenuArrow", l2 = b.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, s = Ve(n);
    return /* @__PURE__ */ g.jsx(NR, { ...s, ...r, ref: t });
  }
);
l2.displayName = a2;
var u2 = (e) => {
  const { __scopeDropdownMenu: t, children: n, open: r, onOpenChange: s, defaultOpen: i } = e, o = Ve(t), [a, l] = md({
    prop: r,
    defaultProp: i != null ? i : !1,
    onChange: s,
    caller: "DropdownMenuSub"
  });
  return /* @__PURE__ */ g.jsx(IR, { ...o, open: a, onOpenChange: l, children: n });
}, c2 = "DropdownMenuSubTrigger", ny = b.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, s = Ve(n);
  return /* @__PURE__ */ g.jsx(FR, { ...s, ...r, ref: t });
});
ny.displayName = c2;
var d2 = "DropdownMenuSubContent", ry = b.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, s = Ve(n);
  return /* @__PURE__ */ g.jsx(
    VR,
    {
      ...s,
      ...r,
      ref: t,
      style: {
        ...e.style,
        "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
ry.displayName = d2;
var f2 = Jg, m2 = Xg, tp = Zg, p2 = ey, h2 = ty, _2 = u2, v2 = ny, g2 = ry;
const np = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 }
}, EN = ({
  className: e = "",
  dropdownClassName: t = "",
  buttonClassName: n = "",
  label: r = "Back",
  items: s,
  isDisabled: i = !1,
  isLoading: o = !1,
  noArrow: a = !1,
  align: l = "start"
}) => {
  const [u, c] = oe(!1), d = (f) => f.map(
    (m, p) => m.items ? /* @__PURE__ */ g.jsxs(_2, { children: [
      /* @__PURE__ */ g.jsxs(v2, { className: "py-[10px] px-[16px] hover:bg-light-4-tint w-full text-left truncate flex flex-row items-center justify-between cursor-pointer focus:outline-none data-[state=open]:bg-light-4-tint", children: [
        /* @__PURE__ */ g.jsx("span", { className: "block w-full truncate", title: m.name, children: m.name }),
        /* @__PURE__ */ g.jsx(
          U1,
          {
            className: "h-5 w-5 text-dark group-hover:text-primary",
            "aria-hidden": "true"
          }
        )
      ] }),
      /* @__PURE__ */ g.jsx(tp, { children: /* @__PURE__ */ g.jsx(
        g2,
        {
          alignOffset: -10,
          sideOffset: -8,
          className: J(
            "z-10 overflow-auto max-h-[290px] rounded-md shadow-lg border-[1px] border-light-2",
            t
          ),
          children: /* @__PURE__ */ g.jsx(
            zn.div,
            {
              className: "w-full bg-white rounded-md shadow-lg focus:outline-none",
              variants: np,
              initial: "hidden",
              animate: "visible",
              children: d(m.items)
            }
          )
        }
      ) })
    ] }, p) : /* @__PURE__ */ g.jsx(
      h2,
      {
        className: "py-[10px] px-[16px] hover:bg-light-4-tint w-full text-left flex flex-row items-center justify-between cursor-pointer focus:outline-none",
        title: m.name,
        onClick: m.onClick,
        children: /* @__PURE__ */ g.jsxs("span", { className: "block w-full truncate", children: [
          " ",
          m.name
        ] })
      },
      p
    )
  );
  return /* @__PURE__ */ g.jsx("div", { className: J("relative text-left w-min", e), children: /* @__PURE__ */ g.jsxs(f2, { open: u, onOpenChange: c, children: [
    /* @__PURE__ */ g.jsx(m2, { asChild: !0, disabled: i || o, children: /* @__PURE__ */ g.jsx("div", { children: /* @__PURE__ */ g.jsxs(
      "button",
      {
        className: J(
          "group flex w-full whitespace-nowrap justify-center items-center gap-[5px] bg-light-3-tint border-[2px] border-light-3-tint text-[14px] rounded-[6px] font-semibold py-[8px] pl-[16px] pr-[8px] text-dark focus:outline-none transition-all",
          "hover:bg-white hover:border-primary",
          u && "!bg-white !border-primary",
          i && "!bg-light-3-tint !border-light-3-tint opacity-40",
          n
        ),
        disabled: i || o,
        children: [
          /* @__PURE__ */ g.jsx("span", { className: J(o && "invisible"), children: r }),
          !a && /* @__PURE__ */ g.jsx(
            _n,
            {
              className: J(
                "h-5 w-5 text-dark group-hover:text-primary transition-all",
                u && "text-primary",
                i && "!text-dark"
              ),
              "aria-hidden": "true"
            }
          ),
          o && /* @__PURE__ */ g.jsx(
            ad,
            {
              className: "absolute scale-[0.4] -translate-y-[7px]",
              innerClassName: "!text-dark"
            }
          )
        ]
      }
    ) }) }),
    /* @__PURE__ */ g.jsx(mc, { children: u && /* @__PURE__ */ g.jsx(tp, { children: /* @__PURE__ */ g.jsx(
      p2,
      {
        className: J(
          "z-10 overflow-auto rounded-md",
          t
        ),
        sideOffset: 8,
        style: {
          minWidth: "var(--radix-dropdown-menu-trigger-width)"
        },
        align: l,
        children: /* @__PURE__ */ g.jsx(
          zn.div,
          {
            className: "w-full bg-white rounded-md shadow-lg border-[1px] border-light-2 focus:outline-none",
            variants: np,
            initial: "hidden",
            animate: "visible",
            children: d(s)
          }
        )
      }
    ) }) })
  ] }) });
}, y2 = T.createContext({}), oy = !0;
function M2({ baseColor: e, highlightColor: t, width: n, height: r, borderRadius: s, circle: i, direction: o, duration: a, enableAnimation: l = oy, customHighlightBackground: u }) {
  const c = {};
  return o === "rtl" && (c["--animation-direction"] = "reverse"), typeof a == "number" && (c["--animation-duration"] = `${a}s`), l || (c["--pseudo-element-display"] = "none"), (typeof n == "string" || typeof n == "number") && (c.width = n), (typeof r == "string" || typeof r == "number") && (c.height = r), (typeof s == "string" || typeof s == "number") && (c.borderRadius = s), i && (c.borderRadius = "50%"), typeof e != "undefined" && (c["--base-color"] = e), typeof t != "undefined" && (c["--highlight-color"] = t), typeof u == "string" && (c["--custom-highlight-background"] = u), c;
}
function Il({ count: e = 1, wrapper: t, className: n, containerClassName: r, containerTestId: s, circle: i = !1, style: o, ...a }) {
  var l, u, c;
  const d = T.useContext(y2), f = { ...a };
  for (const [y, x] of Object.entries(a))
    typeof x == "undefined" && delete f[y];
  const m = {
    ...d,
    ...f,
    circle: i
  }, p = {
    ...o,
    ...M2(m)
  };
  let h = "react-loading-skeleton";
  n && (h += ` ${n}`);
  const _ = (l = m.inline) !== null && l !== void 0 ? l : !1, v = [], M = Math.ceil(e);
  for (let y = 0; y < M; y++) {
    let x = p;
    if (M > e && y === M - 1) {
      const k = (u = x.width) !== null && u !== void 0 ? u : "100%", D = e % 1, S = typeof k == "number" ? k * D : `calc(${k} * ${D})`;
      x = { ...x, width: S };
    }
    const w = T.createElement("span", { className: h, style: x, key: y }, "‌");
    _ ? v.push(w) : v.push(T.createElement(
      T.Fragment,
      { key: y },
      w,
      T.createElement("br", null)
    ));
  }
  return T.createElement("span", { className: r, "data-testid": s, "aria-live": "polite", "aria-busy": (c = m.enableAnimation) !== null && c !== void 0 ? c : oy }, t ? v.map((y, x) => T.createElement(t, { key: x }, y)) : v);
}
const Yd = "-", b2 = (e) => {
  const t = w2(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (o) => {
      const a = o.split(Yd);
      return a[0] === "" && a.length !== 1 && a.shift(), sy(a, t) || x2(o);
    },
    getConflictingClassGroupIds: (o, a) => {
      const l = n[o] || [];
      return a && r[o] ? [...l, ...r[o]] : l;
    }
  };
}, sy = (e, t) => {
  var o;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), s = r ? sy(e.slice(1), r) : void 0;
  if (s)
    return s;
  if (t.validators.length === 0)
    return;
  const i = e.join(Yd);
  return (o = t.validators.find(({
    validator: a
  }) => a(i))) == null ? void 0 : o.classGroupId;
}, rp = /^\[(.+)\]$/, x2 = (e) => {
  if (rp.test(e)) {
    const t = rp.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, w2 = (e) => {
  const {
    theme: t,
    classGroups: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const s in n)
    Ou(n[s], r, s, t);
  return r;
}, Ou = (e, t, n, r) => {
  e.forEach((s) => {
    if (typeof s == "string") {
      const i = s === "" ? t : op(t, s);
      i.classGroupId = n;
      return;
    }
    if (typeof s == "function") {
      if (Y2(s)) {
        Ou(s(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: s,
        classGroupId: n
      });
      return;
    }
    Object.entries(s).forEach(([i, o]) => {
      Ou(o, op(t, i), n, r);
    });
  });
}, op = (e, t) => {
  let n = e;
  return t.split(Yd).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}, Y2 = (e) => e.isThemeGetter, L2 = (e) => {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  const s = (i, o) => {
    n.set(i, o), t++, t > e && (t = 0, r = n, n = /* @__PURE__ */ new Map());
  };
  return {
    get(i) {
      let o = n.get(i);
      if (o !== void 0)
        return o;
      if ((o = r.get(i)) !== void 0)
        return s(i, o), o;
    },
    set(i, o) {
      n.has(i) ? n.set(i, o) : s(i, o);
    }
  };
}, Ru = "!", Nu = ":", S2 = Nu.length, k2 = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: n
  } = e;
  let r = (s) => {
    const i = [];
    let o = 0, a = 0, l = 0, u;
    for (let p = 0; p < s.length; p++) {
      let h = s[p];
      if (o === 0 && a === 0) {
        if (h === Nu) {
          i.push(s.slice(l, p)), l = p + S2;
          continue;
        }
        if (h === "/") {
          u = p;
          continue;
        }
      }
      h === "[" ? o++ : h === "]" ? o-- : h === "(" ? a++ : h === ")" && a--;
    }
    const c = i.length === 0 ? s : s.substring(l), d = D2(c), f = d !== c, m = u && u > l ? u - l : void 0;
    return {
      modifiers: i,
      hasImportantModifier: f,
      baseClassName: d,
      maybePostfixModifierPosition: m
    };
  };
  if (t) {
    const s = t + Nu, i = r;
    r = (o) => o.startsWith(s) ? i(o.substring(s.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: o,
      maybePostfixModifierPosition: void 0
    };
  }
  if (n) {
    const s = r;
    r = (i) => n({
      className: i,
      parseClassName: s
    });
  }
  return r;
}, D2 = (e) => e.endsWith(Ru) ? e.substring(0, e.length - 1) : e.startsWith(Ru) ? e.substring(1) : e, T2 = (e) => {
  const t = Object.fromEntries(e.orderSensitiveModifiers.map((r) => [r, !0]));
  return (r) => {
    if (r.length <= 1)
      return r;
    const s = [];
    let i = [];
    return r.forEach((o) => {
      o[0] === "[" || t[o] ? (s.push(...i.sort(), o), i = []) : i.push(o);
    }), s.push(...i.sort()), s;
  };
}, E2 = (e) => ({
  cache: L2(e.cacheSize),
  parseClassName: k2(e),
  sortModifiers: T2(e),
  ...b2(e)
}), j2 = /\s+/, P2 = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: s,
    sortModifiers: i
  } = t, o = [], a = e.trim().split(j2);
  let l = "";
  for (let u = a.length - 1; u >= 0; u -= 1) {
    const c = a[u], {
      isExternal: d,
      modifiers: f,
      hasImportantModifier: m,
      baseClassName: p,
      maybePostfixModifierPosition: h
    } = n(c);
    if (d) {
      l = c + (l.length > 0 ? " " + l : l);
      continue;
    }
    let _ = !!h, v = r(_ ? p.substring(0, h) : p);
    if (!v) {
      if (!_) {
        l = c + (l.length > 0 ? " " + l : l);
        continue;
      }
      if (v = r(p), !v) {
        l = c + (l.length > 0 ? " " + l : l);
        continue;
      }
      _ = !1;
    }
    const M = i(f).join(":"), y = m ? M + Ru : M, x = y + v;
    if (o.includes(x))
      continue;
    o.push(x);
    const w = s(v, _);
    for (let k = 0; k < w.length; ++k) {
      const D = w[k];
      o.push(y + D);
    }
    l = c + (l.length > 0 ? " " + l : l);
  }
  return l;
};
function A2() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = iy(t)) && (r && (r += " "), r += n);
  return r;
}
const iy = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = iy(e[r])) && (n && (n += " "), n += t);
  return n;
};
function C2(e, ...t) {
  let n, r, s, i = o;
  function o(l) {
    const u = t.reduce((c, d) => d(c), e());
    return n = E2(u), r = n.cache.get, s = n.cache.set, i = a, a(l);
  }
  function a(l) {
    const u = r(l);
    if (u)
      return u;
    const c = P2(l, n);
    return s(l, c), c;
  }
  return function() {
    return i(A2.apply(null, arguments));
  };
}
const $e = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, ay = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, ly = /^\((?:(\w[\w-]*):)?(.+)\)$/i, $2 = /^\d+\/\d+$/, H2 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, O2 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, R2 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, N2 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, I2 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, kn = (e) => $2.test(e), fe = (e) => !!e && !Number.isNaN(Number(e)), Bt = (e) => !!e && Number.isInteger(Number(e)), Fl = (e) => e.endsWith("%") && fe(e.slice(0, -1)), Tt = (e) => H2.test(e), F2 = () => !0, V2 = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  O2.test(e) && !R2.test(e)
), uy = () => !1, z2 = (e) => N2.test(e), B2 = (e) => I2.test(e), W2 = (e) => !ee(e) && !te(e), U2 = (e) => rr(e, fy, uy), ee = (e) => ay.test(e), an = (e) => rr(e, my, V2), Vl = (e) => rr(e, X2, fe), sp = (e) => rr(e, cy, uy), K2 = (e) => rr(e, dy, B2), go = (e) => rr(e, py, z2), te = (e) => ly.test(e), ur = (e) => or(e, my), G2 = (e) => or(e, Z2), ip = (e) => or(e, cy), J2 = (e) => or(e, fy), q2 = (e) => or(e, dy), yo = (e) => or(e, py, !0), rr = (e, t, n) => {
  const r = ay.exec(e);
  return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, or = (e, t, n = !1) => {
  const r = ly.exec(e);
  return r ? r[1] ? t(r[1]) : n : !1;
}, cy = (e) => e === "position" || e === "percentage", dy = (e) => e === "image" || e === "url", fy = (e) => e === "length" || e === "size" || e === "bg-size", my = (e) => e === "length", X2 = (e) => e === "number", Z2 = (e) => e === "family-name", py = (e) => e === "shadow", Q2 = () => {
  const e = $e("color"), t = $e("font"), n = $e("text"), r = $e("font-weight"), s = $e("tracking"), i = $e("leading"), o = $e("breakpoint"), a = $e("container"), l = $e("spacing"), u = $e("radius"), c = $e("shadow"), d = $e("inset-shadow"), f = $e("text-shadow"), m = $e("drop-shadow"), p = $e("blur"), h = $e("perspective"), _ = $e("aspect"), v = $e("ease"), M = $e("animate"), y = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], x = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ], w = () => [...x(), te, ee], k = () => ["auto", "hidden", "clip", "visible", "scroll"], D = () => ["auto", "contain", "none"], S = () => [te, ee, l], N = () => [kn, "full", "auto", ...S()], Y = () => [Bt, "none", "subgrid", te, ee], $ = () => ["auto", {
    span: ["full", Bt, te, ee]
  }, Bt, te, ee], I = () => [Bt, "auto", te, ee], U = () => ["auto", "min", "max", "fr", te, ee], H = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], A = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], C = () => ["auto", ...S()], O = () => [kn, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...S()], L = () => [e, te, ee], j = () => [...x(), ip, sp, {
    position: [te, ee]
  }], B = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], E = () => ["auto", "cover", "contain", J2, U2, {
    size: [te, ee]
  }], R = () => [Fl, ur, an], z = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    u,
    te,
    ee
  ], K = () => ["", fe, ur, an], ne = () => ["solid", "dashed", "dotted", "double"], G = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], W = () => [fe, Fl, ip, sp], Q = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    p,
    te,
    ee
  ], se = () => ["none", fe, te, ee], he = () => ["none", fe, te, ee], le = () => [fe, te, ee], Ce = () => [kn, "full", ...S()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Tt],
      breakpoint: [Tt],
      color: [F2],
      container: [Tt],
      "drop-shadow": [Tt],
      ease: ["in", "out", "in-out"],
      font: [W2],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [Tt],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [Tt],
      shadow: [Tt],
      spacing: ["px", fe],
      text: [Tt],
      "text-shadow": [Tt],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", kn, ee, te, _]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [fe, ee, te, a]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": y()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": y()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: w()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: k()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": k()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": k()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: D()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": D()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": D()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: N()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": N()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": N()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: N()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: N()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: N()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: N()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: N()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: N()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [Bt, "auto", te, ee]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [kn, "full", "auto", a, ...S()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [fe, kn, "auto", "initial", "none", ee]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", fe, te, ee]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", fe, te, ee]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Bt, "first", "last", "none", te, ee]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": Y()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: $()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": I()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": I()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": Y()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: $()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": I()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": I()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": U()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": U()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: S()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": S()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": S()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...H(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...A(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...A()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...H()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...A(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...A(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": H()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...A(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...A()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: S()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: S()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: S()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: S()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: S()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: S()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: S()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: S()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: S()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: C()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: C()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: C()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: C()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: C()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: C()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: C()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: C()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: C()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": S()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": S()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: O()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [a, "screen", ...O()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          a,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...O()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          a,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [o]
          },
          ...O()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...O()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...O()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...O()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", n, ur, an]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [r, te, Vl]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Fl, ee]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [G2, ee, t]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [s, te, ee]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [fe, "none", te, Vl]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          i,
          ...S()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", te, ee]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", te, ee]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: L()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: L()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...ne(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [fe, "from-font", "auto", te, an]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: L()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [fe, "auto", te, ee]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: S()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", te, ee]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", te, ee]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: j()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: B()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: E()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, Bt, te, ee],
          radial: ["", te, ee],
          conic: [Bt, te, ee]
        }, q2, K2]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: L()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: R()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: R()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: R()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: L()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: L()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: L()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: z()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": z()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": z()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": z()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": z()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": z()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": z()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": z()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": z()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": z()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": z()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": z()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": z()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": z()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": z()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: K()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": K()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": K()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": K()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": K()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": K()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": K()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": K()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": K()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": K()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": K()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...ne(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...ne(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: L()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": L()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": L()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": L()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": L()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": L()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": L()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": L()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": L()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: L()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...ne(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [fe, te, ee]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", fe, ur, an]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: L()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          c,
          yo,
          go
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: L()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", d, yo, go]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": L()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: K()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: L()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [fe, an]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": L()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": K()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": L()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", f, yo, go]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": L()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [fe, te, ee]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...G(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": G()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [fe]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": W()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": W()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": L()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": L()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": W()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": W()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": L()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": L()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": W()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": W()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": L()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": L()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": W()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": W()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": L()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": L()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": W()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": W()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": L()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": L()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": W()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": W()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": L()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": L()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": W()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": W()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": L()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": L()
      }],
      "mask-image-radial": [{
        "mask-radial": [te, ee]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": W()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": W()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": L()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": L()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": x()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [fe]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": W()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": W()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": L()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": L()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: j()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: B()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: E()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", te, ee]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          te,
          ee
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: Q()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [fe, te, ee]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [fe, te, ee]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          m,
          yo,
          go
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": L()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", fe, te, ee]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [fe, te, ee]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", fe, te, ee]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [fe, te, ee]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", fe, te, ee]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          te,
          ee
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": Q()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [fe, te, ee]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [fe, te, ee]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", fe, te, ee]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [fe, te, ee]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", fe, te, ee]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [fe, te, ee]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [fe, te, ee]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", fe, te, ee]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": S()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": S()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": S()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", te, ee]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [fe, "initial", te, ee]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", v, te, ee]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [fe, te, ee]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", M, te, ee]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [h, te, ee]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": w()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: se()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": se()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": se()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": se()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: he()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": he()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": he()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": he()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: le()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": le()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": le()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [te, ee, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: w()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: Ce()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": Ce()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": Ce()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": Ce()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: L()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: L()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", te, ee]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": S()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": S()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": S()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": S()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": S()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": S()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": S()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": S()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": S()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": S()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": S()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": S()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": S()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": S()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": S()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": S()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": S()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": S()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", te, ee]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...L()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [fe, ur, an, Vl]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...L()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
}, Ld = /* @__PURE__ */ C2(Q2), jN = ({ className: e }) => /* @__PURE__ */ g.jsxs("div", { className: Ld("w-[218px]", e), children: [
  /* @__PURE__ */ g.jsx(Il, { height: 22, borderRadius: 30 }),
  /* @__PURE__ */ g.jsx(Il, { className: "mt-4", width: "60%", height: 14, borderRadius: 30 }),
  /* @__PURE__ */ g.jsx(Il, { className: "mt-2.5", width: "72%", height: 14, borderRadius: 30 })
] }), eN = () => /* @__PURE__ */ g.jsx("svg", { className: "absolute top-[18px] left-6 w-6 text-success", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ g.jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z", clipRule: "evenodd" }) }), tN = () => /* @__PURE__ */ g.jsx("svg", { className: "absolute top-[18px] left-6 w-6 text-danger", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ g.jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z", clipRule: "evenodd" }) }), nN = () => /* @__PURE__ */ g.jsx("svg", { className: "absolute top-[18px] left-6 w-6 text-warning", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ g.jsx("path", { fillRule: "evenodd", d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z", clipRule: "evenodd" }) }), PN = ({
  type: e,
  title: t,
  content: n,
  onClose: r,
  className: s
}) => {
  const i = () => {
    switch (e) {
      case "success":
        return /* @__PURE__ */ g.jsx(eN, {});
      case "warning":
        return /* @__PURE__ */ g.jsx(nN, {});
      case "error":
      default:
        return /* @__PURE__ */ g.jsx(tN, {});
    }
  };
  return /* @__PURE__ */ g.jsxs(
    "div",
    {
      className: J(
        "relative pl-[60px] pr-[90px] py-[22px] w-full bg-background rounded-xl border border-light-4 shadow-[0_8px_16px_rgba(0,0,0,0.08)]",
        n ? "sm:w-[600px]" : "sm:w-[434px]",
        s
      ),
      children: [
        i(),
        /* @__PURE__ */ g.jsxs("div", { children: [
          /* @__PURE__ */ g.jsx("h4", { className: "font-semibold leading-[100%]", children: t }),
          n && /* @__PURE__ */ g.jsx("div", { className: "mt-3 text-light-dark text-sm leading-[150%]", children: n })
        ] }),
        r && /* @__PURE__ */ g.jsx(
          "div",
          {
            className: "absolute top-2.5 right-6 flex items-center justify-center w-10 h-10 bg-transparent rounded-full cursor-pointer transition-colors hover:bg-light-4-tint",
            onClick: r,
            children: /* @__PURE__ */ g.jsx(Uh, { className: "w-8 stroke-1" })
          }
        )
      ]
    }
  );
}, ap = 38, AN = Nr(
  ({
    title: e,
    onClose: t,
    isOpen: n,
    afterLeave: r,
    innerClassName: s,
    overlayClassName: i,
    wrapperClassName: o,
    children: a,
    headless: l = !1
  }, u) => {
    const c = q({ area: null, nearEdge: !1 }), d = q(!1), f = q(null);
    ue(() => {
      if (!n) return;
      const _ = (v) => {
        v.key === "Escape" && (d.current = !0);
      };
      return window.addEventListener("keydown", _, { capture: !0 }), () => window.removeEventListener("keydown", _, { capture: !0 });
    }, [n]);
    const m = X((_) => {
      const v = window.innerWidth - _.clientX <= ap;
      c.current = { area: "backdrop", nearEdge: v };
    }, []), p = X(() => {
      if (!t) return;
      if (d.current) {
        d.current = !1, t();
        return;
      }
      const { area: _, nearEdge: v } = c.current;
      if (_ === "backdrop" && !v) {
        t();
        return;
      }
      if (_ === "overlay" && !v) {
        t();
        return;
      }
    }, [t]), h = X((_) => {
      const v = _.currentTarget, M = v.getBoundingClientRect(), y = v.offsetWidth - v.clientWidth, w = M.right - _.clientX <= Math.max(y, 8) || window.innerWidth - _.clientX <= ap, k = f.current ? f.current.contains(_.target) : !1;
      c.current = { area: k ? "panel" : "overlay", nearEdge: w };
    }, []);
    return /* @__PURE__ */ g.jsx(Ga, { appear: !0, show: n, as: Ae, children: /* @__PURE__ */ g.jsx(za, { children: /* @__PURE__ */ g.jsxs(
      Wk,
      {
        as: "div",
        className: "relative z-[99999]",
        onClose: p,
        children: [
          /* @__PURE__ */ g.jsx(
            $r,
            {
              as: Ae,
              enter: "ease-out duration-300",
              enterFrom: "opacity-0",
              enterTo: "opacity-100",
              leave: "ease-in duration-200",
              leaveFrom: "opacity-100",
              leaveTo: "opacity-0",
              afterLeave: r,
              children: /* @__PURE__ */ g.jsx("div", { className: "fixed inset-0 bg-black bg-opacity-40", onMouseDownCapture: m })
            }
          ),
          /* @__PURE__ */ g.jsx(
            "div",
            {
              ref: u,
              className: "fixed inset-0 overflow-y-auto z-[99999]",
              onMouseDownCapture: h,
              children: /* @__PURE__ */ g.jsx(
                "div",
                {
                  className: J(
                    "flex min-h-full items-center justify-center p-4 text-center",
                    i
                  ),
                  children: /* @__PURE__ */ g.jsx(
                    $r,
                    {
                      as: Ae,
                      enter: "ease-out duration-300",
                      enterFrom: "opacity-0 scale-95",
                      enterTo: "opacity-100 scale-100",
                      leave: "ease-in duration-200",
                      leaveFrom: "opacity-100 scale-100",
                      leaveTo: "opacity-0 scale-95",
                      children: /* @__PURE__ */ g.jsxs(
                        kv,
                        {
                          ref: f,
                          className: Ld(
                            "w-full max-w-[600px] transform rounded-[20px] bg-white text-left align-middle shadow-xl transition-all min-h-[100px]",
                            s
                          ),
                          children: [
                            l ? /* @__PURE__ */ g.jsx(
                              "button",
                              {
                                className: "hover:bg-light-3-tint rounded-full p-[7px] text-dark transition-all duration-100 outline-0 absolute right-[20px] top-[22px] z-50",
                                hidden: !t,
                                onClick: t,
                                children: /* @__PURE__ */ g.jsx(Bo, { className: "h-7 w-7", "aria-hidden": "true" })
                              }
                            ) : /* @__PURE__ */ g.jsxs("div", { className: "min-h-[62px] bg-light-4-tint py-[10px] px-[20px] rounded-t-[20px] flex items-center justify-between", children: [
                              /* @__PURE__ */ g.jsx("div", { className: "font-bold text-lg md:text-xl text-dark truncate", children: e }),
                              /* @__PURE__ */ g.jsx(
                                "button",
                                {
                                  className: "hover:bg-light-3-tint rounded-full p-[7px] text-dark transition-all duration-100 outline-0",
                                  hidden: !t,
                                  onClick: t,
                                  children: /* @__PURE__ */ g.jsx(Bo, { className: "h-7 w-7", "aria-hidden": "true" })
                                }
                              )
                            ] }),
                            /* @__PURE__ */ g.jsx("div", { className: J("p-6", o), children: a })
                          ]
                        }
                      )
                    }
                  )
                }
              )
            }
          )
        ]
      }
    ) }) });
  }
), hy = Nr(
  ({
    className: e,
    inputClassName: t,
    iconClassName: n,
    label: r,
    subLabel: s,
    id: i,
    name: o,
    type: a = "text",
    placeholder: l,
    isRequired: u = !1,
    value: c,
    onChange: d,
    onInput: f,
    onFocus: m,
    onBlur: p,
    onBeforeInput: h,
    supportingText: _,
    supportingTextWidth: v = 38,
    onKeyDown: M,
    onKeyUp: y,
    error: x,
    actionLabel: w,
    actionPosition: k,
    onActionClick: D,
    disabled: S = !1,
    withoutErrorMessage: N = !1,
    icon: Y,
    onIconClick: $,
    readOnly: I,
    warning: U
  }, H) => /* @__PURE__ */ g.jsxs("div", { className: Ld("transition-all max-w-[257px] w-full", e), children: [
    r && /* @__PURE__ */ g.jsxs("div", { className: "flex items-center justify-between gap-2 mb-1.5", children: [
      /* @__PURE__ */ g.jsxs(
        "label",
        {
          htmlFor: i,
          className: J("block text-light-dark text-sm", S && "!text-light-3"),
          children: [
            r,
            u && /* @__PURE__ */ g.jsx("span", { className: "text-danger", children: " *" })
          ]
        }
      ),
      s && /* @__PURE__ */ g.jsx(
        "span",
        {
          className: J("block text-light text-sm truncate", S && "!text-light-3"),
          children: s
        }
      )
    ] }),
    /* @__PURE__ */ g.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ g.jsx(
        "input",
        {
          ref: H,
          className: J(
            "peer h-[40px] bg-white border text-[16px] border-light-3 rounded py-[7px] px-[15px] text-dark w-full transition-colors duration-100 !outline-0 !outline-offset-0",
            x && "border-danger outline !outline-[1px] outline-danger",
            "hover:bg-fo-accent-tint hover:border-fo-accent hover:outline hover:!outline-[1px] hover:outline-fo-accent",
            "focus:border-fo-accent focus:outline focus:!outline-[1px] focus:outline-fo-accent",
            S && "!bg-transparent !border !border-light-3-tint !text-light-3 !py-[7px] !px-[15px] cursor-not-allowed !outline-none",
            t
          ),
          id: i,
          type: a,
          name: o,
          placeholder: l,
          onKeyDown: M,
          onKeyUp: y,
          onInput: f,
          value: c,
          onChange: d,
          onFocus: m,
          onBlur: p,
          onBeforeInput: h,
          disabled: S,
          readOnly: I,
          style: _ ? { paddingLeft: v + 7 } : {}
        }
      ),
      _ && /* @__PURE__ */ g.jsx(
        "div",
        {
          className: J(
            `flex items-center justify-center text-light-dark text-sm absolute top-px left-px h-[38px] bg-light-4-tint rounded-l pointer-events-none transition-all duration-100 overflow-hidden peer-hover:bg-fo-accent-light peer-hover:w-[${v - 2}px] peer-focus:w-[${v - 2}px]`,
            x && `w-[${v - 2}px]`,
            S && "!bg-transparent opacity-60"
          ),
          style: { width: v },
          children: _
        }
      ),
      Y && /* @__PURE__ */ g.jsx(
        "div",
        {
          className: J("absolute z-10 top-2 right-4 cursor-pointer", n),
          onClick: $,
          children: Y
        }
      )
    ] }),
    (!N && x || w) && /* @__PURE__ */ g.jsxs("div", { className: "flex items-start justify-between mt-1", children: [
      !N && x && /* @__PURE__ */ g.jsx(
        "div",
        {
          className: J(
            w ? "max-w-[70%]" : "max-w-full",
            k === "left" && "order-last"
          ),
          children: /* @__PURE__ */ g.jsx("p", { className: "text-danger text-xs mt-1 break-all", children: x })
        }
      ),
      w && /* @__PURE__ */ g.jsx(
        "div",
        {
          className: J(
            "flex w-full",
            k === "right" ? "justify-end" : "justify-start"
          ),
          children: /* @__PURE__ */ g.jsx(
            "button",
            {
              onClick: D,
              className: J("text-medium text-sm underline", S && "!text-light-3"),
              disabled: S,
              children: w
            }
          )
        }
      )
    ] }),
    U && /* @__PURE__ */ g.jsx("p", { className: "text-warning text-xs mt-1 break-all", children: U })
  ] })
), rN = ({
  pagesAmount: e = 1,
  currentPage: t,
  onPageChange: n
}) => {
  const [r, s] = oe(t);
  return ue(() => {
    s(t);
  }, [t]), /* @__PURE__ */ g.jsxs("div", { className: "flex items-center justify-center gap-[20px]", children: [
    /* @__PURE__ */ g.jsx(
      fo,
      {
        onClick: () => n(1),
        arrowType: pr.Pagination,
        disabled: t <= 1
      }
    ),
    /* @__PURE__ */ g.jsx(
      fo,
      {
        className: "rotate-90",
        onClick: () => t === 1 ? null : n(t - 1),
        arrowType: pr.Small,
        disabled: t <= 1
      }
    ),
    /* @__PURE__ */ g.jsxs("div", { className: "flex items-center justify-center gap-[10px]", children: [
      /* @__PURE__ */ g.jsx(
        hy,
        {
          className: `${e > 1e3 ? "w-[62px]" : "w-[48px]"} h-[37px]`,
          inputClassName: "text-[14px] !px-[0px] text-center",
          name: "currentPage",
          value: r.toString(),
          disabled: e <= 1,
          onChange: (i) => s(+i.target.value),
          onKeyDown: (i) => i.key === "Enter" && n(r)
        }
      ),
      /* @__PURE__ */ g.jsxs("p", { className: "text-[14px]", children: [
        "of ",
        e || 0
      ] })
    ] }),
    /* @__PURE__ */ g.jsx(
      fo,
      {
        className: "-rotate-90",
        onClick: () => t === e ? null : n(t + 1),
        arrowType: pr.Small,
        disabled: t >= e
      }
    ),
    /* @__PURE__ */ g.jsx(
      fo,
      {
        className: "rotate-180",
        onClick: () => e && n(e),
        arrowType: pr.Pagination,
        disabled: t >= e
      }
    )
  ] });
}, oN = ({
  preventScrolling: e = !1,
  children: t
}) => {
  const [n, r] = b.useState(!1);
  return b.useEffect(() => (r(!0), e && (document.body.style.overflow = "hidden"), () => {
    document.body.style.overflow = "inherit";
  }), []), n ? Fu(t, document.body) : null;
}, sN = ({ children: e, label: t, className: n, style: r }) => {
  const [s, i] = oe(!1), [o, a] = oe(null);
  return /* @__PURE__ */ g.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ g.jsx(oN, { children: /* @__PURE__ */ g.jsx(mc, { children: s && /* @__PURE__ */ g.jsxs(
      zn.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: {
          duration: 0.25,
          delay: 0.5
        },
        className: J(
          "absolute p-2 text-white text-xs rounded-md -translate-x-1/2 whitespace-pre-line pointer-events-none z-20",
          n
        ),
        style: {
          top: o ? window.scrollY + o.bottom + 8 : 0,
          left: o ? window.scrollX + o.left + o.width / 2 : 0,
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          ...r || {}
        },
        children: [
          t,
          /* @__PURE__ */ g.jsx(
            "span",
            {
              className: "absolute -top-[10px] left-1/2 -translate-x-1/2 border-[5px]",
              style: {
                borderColor: "transparent transparent rgba(0, 0, 0, 0.7) transparent"
              }
            }
          )
        ]
      }
    ) }) }),
    /* @__PURE__ */ g.jsx(
      "div",
      {
        onMouseEnter: (l) => {
          s || (i(!0), a(l.currentTarget.getBoundingClientRect()));
        },
        onMouseLeave: () => i(!1),
        children: e
      }
    )
  ] });
}, _y = ({
  className: e = "",
  inputClassName: t = "",
  optionClassName: n = "",
  dropdownClassName: r = "",
  tickClassName: s = "",
  selectedOption: i,
  beforeOptionName: o,
  options: a,
  onChange: l,
  error: u,
  label: c,
  name: d,
  placeholder: f,
  noOptionsLabel: m,
  required: p,
  isDisabled: h = !1,
  multiple: _ = !1,
  clearable: v = !1
}) => {
  const M = Array.isArray(i) ? i : i ? [i] : [];
  return /* @__PURE__ */ g.jsxs("div", { className: J("relative", e), children: [
    c && /* @__PURE__ */ g.jsxs(
      "label",
      {
        className: J(
          "block mb-1.5 text-sm text-light-dark truncate",
          h && "!text-light-3"
        ),
        title: c,
        children: [
          c,
          p && /* @__PURE__ */ g.jsx("span", { className: "text-danger", children: " *" })
        ]
      }
    ),
    /* @__PURE__ */ g.jsxs(
      S1,
      {
        as: "div",
        name: d,
        disabled: h,
        value: i,
        onChange: l,
        multiple: _,
        children: [
          /* @__PURE__ */ g.jsxs(
            $v,
            {
              className: ({ open: y }) => `relative w-full max-w-[572px] min-h-[40px] border border-light-3 cursor-pointer rounded-[3px] bg-white py-[7px] pl-[15px] text-left transition-colors duration-100 !outline-offset-0 truncate min-w-0
          hover:bg-fo-accent-light hover:border-fo-accent hover:outline hover:!outline-[1px] hover:outline-fo-accent
          focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-warning focus:outline focus:!outline-[1px] focus:outline-fo-accent
          ${u && "border-danger hover:bg-fo-accent-light hover:border-fo-accent focus:border-fo-accent outline !outline-[1px] outline-danger"}
          ${y && "!border-fo-accent outline !outline-[1px] outline-fo-accent"}
          ${h && "!bg-transparent !border !border-light-3-tint !text-light-3 !py-[7px] !px-[15px] hover:!outline-0 !cursor-not-allowed"}
          ${v && M.length > 0 ? "pr-[46px]" : "pr-[30px]"}
          ${t}`,
              title: M.map((y) => y.name).join(", ") || f,
              onKeyDown: (y) => {
                if (!i) {
                  const x = a.find((w) => w.name[0].toLowerCase() === y.key.toLowerCase());
                  x && l(x);
                }
              },
              children: [
                M.length > 0 ? /* @__PURE__ */ g.jsxs(
                  "span",
                  {
                    className: J(
                      "text-dark truncate flex items-center flex-nowrap gap-[6px] min-w-0",
                      h && "text-light-3"
                    ),
                    title: M.map((y) => y.name).join(", ") || f,
                    children: [
                      o,
                      /* @__PURE__ */ g.jsx("span", { className: "truncate min-w-0", children: M.map((y) => y.name).join(", ") })
                    ]
                  }
                ) : /* @__PURE__ */ g.jsx("span", { className: J("text-light-dark", h && "text-light-3"), children: f }),
                /* @__PURE__ */ g.jsx("span", { className: "absolute inset-y-0 right-0 flex items-center pr-[10px] z-0 pointer-events-none", children: /* @__PURE__ */ g.jsx("span", { children: /* @__PURE__ */ g.jsx(_n, { className: "h-4 w-4" }) }) })
              ]
            }
          ),
          v && M.length > 0 && /* @__PURE__ */ g.jsx(
            "button",
            {
              type: "button",
              className: "absolute cursor-pointer bottom-[4px] -translate-y-1/2 right-[38px] text-light-dark hover:text-medium z-20",
              tabIndex: -1,
              onMouseDown: (y) => {
                y.preventDefault(), y.stopPropagation(), l(null);
              },
              onClick: (y) => {
                y.preventDefault(), y.stopPropagation();
              },
              "aria-label": "Clear selection",
              children: /* @__PURE__ */ g.jsxs(
                "svg",
                {
                  width: "16",
                  height: "16",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: [
                    /* @__PURE__ */ g.jsx("path", { d: "M18 6L6 18", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }),
                    /* @__PURE__ */ g.jsx("path", { d: "M6 6L18 18", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" })
                  ]
                }
              )
            }
          ),
          /* @__PURE__ */ g.jsx(
            Ga,
            {
              as: Ae,
              leave: "transition ease-in duration-100",
              leaveFrom: "opacity-100",
              leaveTo: "opacity-0",
              children: /* @__PURE__ */ g.jsx(
                Hv,
                {
                  className: J(
                    "absolute mt-[1px] z-10 max-w-[572px] max-h-[200px] w-full overflow-auto rounded-b-[3px] bg-white py-2 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
                    r
                  ),
                  children: a.length > 0 ? /* @__PURE__ */ g.jsx(g.Fragment, { children: a.map((y, x) => /* @__PURE__ */ g.jsx(
                    Ov,
                    {
                      value: y,
                      title: y.name,
                      disabled: y.unavailable,
                      className: ({ focus: w }) => `relative cursor-pointer select-none py-2 pl-[35px] pr-4 transition-colors duration-100 ${w && "bg-fo-accent-tint"}
                  ${n}`,
                      children: ({ selected: w }) => /* @__PURE__ */ g.jsxs("div", { className: "flex flex-row gap-[10px] items-center", children: [
                        y.image && /* @__PURE__ */ g.jsx(
                          "img",
                          {
                            className: "w-[40px] h-[40px] object-contain",
                            src: y.image,
                            alt: "Promotion logo"
                          }
                        ),
                        y.other ? /* @__PURE__ */ g.jsxs("div", { className: "flex flex-col mb-[4px]", children: [
                          /* @__PURE__ */ g.jsxs("span", { className: "block truncate", children: [
                            o,
                            y.name
                          ] }),
                          /* @__PURE__ */ g.jsx("span", { className: "text-sm", children: y.other })
                        ] }) : /* @__PURE__ */ g.jsxs("span", { className: "block truncate", children: [
                          o,
                          y.name
                        ] }),
                        w && /* @__PURE__ */ g.jsx(
                          "span",
                          {
                            className: J(
                              "absolute inset-y-0 left-0 flex items-center pl-3 text-fo-accent",
                              s
                            ),
                            children: /* @__PURE__ */ g.jsx(zo, { className: "h-4 w-4", "aria-hidden": "true" })
                          }
                        )
                      ] })
                    },
                    x
                  )) }) : /* @__PURE__ */ g.jsx(
                    "p",
                    {
                      title: m,
                      className: "px-[10px] text-[14px] w-full truncate text-light-dark",
                      children: m
                    }
                  )
                }
              )
            }
          )
        ]
      }
    ),
    u && /* @__PURE__ */ g.jsx("p", { className: "text-danger text-xs mt-2.5", children: u })
  ] });
}, lp = [
  { name: "25", value: 25 },
  { name: "50", value: 50 },
  { name: "75", value: 75 }
], CN = ({
  className: e = "",
  pagesAmount: t,
  currentPage: n,
  onPageChange: r,
  onDocumentClick: s,
  onListClick: i,
  onSaveClick: o,
  onSizeChange: a,
  currentSize: l,
  dropdownClassName: u,
  sizeOptions: c
}) => /* @__PURE__ */ g.jsxs(
  "div",
  {
    className: J(
      "bg-white flex items-center justify-between px-[14px] py-[12px]",
      e
    ),
    children: [
      /* @__PURE__ */ g.jsxs("div", { className: "flex items-center gap-[40px]", children: [
        /* @__PURE__ */ g.jsx(
          rN,
          {
            pagesAmount: t,
            currentPage: n,
            onPageChange: r
          }
        ),
        /* @__PURE__ */ g.jsx(
          _y,
          {
            className: "w-[80px] shrink-0",
            inputClassName: "text-[14px]",
            optionClassName: "text-[14px]",
            dropdownClassName: u,
            selectedOption: c ? c.find((d) => d.value === l) || null : lp.find((d) => d.value === l) || null,
            options: c || lp,
            onChange: (d) => {
              var f;
              return a(parseInt(((f = d == null ? void 0 : d.name) != null ? f : l).toString()));
            }
          }
        )
      ] }),
      /* @__PURE__ */ g.jsxs("div", { className: "flex items-center justify-center gap-[20px] mr-[30px]", children: [
        i && /* @__PURE__ */ g.jsx(
          "span",
          {
            className: "flex items-center text-dark cursor-pointer",
            onClick: i,
            children: /* @__PURE__ */ g.jsx(m0, { className: "w-[16px] h-[16px]" })
          }
        ),
        s && /* @__PURE__ */ g.jsx(
          "span",
          {
            className: "flex items-center text-dark cursor-pointer",
            onClick: s,
            children: /* @__PURE__ */ g.jsx(d0, { className: "w-4 h-4" })
          }
        ),
        o && /* @__PURE__ */ g.jsx(
          sN,
          {
            label: "Save current preferences",
            style: { wordBreak: "break-word" },
            children: /* @__PURE__ */ g.jsx(
              a0,
              {
                className: "p-1.5 transition-colors duration-100 w-9 h-9 cursor-pointer",
                onClick: o
              }
            )
          }
        )
      ] })
    ]
  }
), $N = ({
  className: e = "",
  onClick: t,
  tableGrid: n,
  isSelected: r = !1,
  children: s
}) => /* @__PURE__ */ g.jsx(
  "div",
  {
    style: n,
    onClick: t,
    className: J(
      "bg-light-2-tint grid items-stretch min-h-[61px] w-full px-[14px] py-2 border-t-[1px] border-light-3-tint hover:!bg-fo-accent-light",
      r && "!bg-fo-accent-tint",
      t && "cursor-pointer",
      e
    ),
    children: s
  }
);
var iN = /* @__PURE__ */ ((e) => (e.None = "none", e.Asc = "asc", e.Desc = "desc", e.Empty = "empty", e))(iN || {}), Iu = /* @__PURE__ */ ((e) => (e.TextInput = "TextInput", e.Select = "Select", e))(Iu || {});
const HN = ({
  item: e,
  onClick: t,
  withSeparator: n = !1,
  className: r
}) => /* @__PURE__ */ g.jsxs(
  "div",
  {
    className: J(
      "flex items-center justify-between gap-2 pl-2 pr-1",
      r
    ),
    children: [
      /* @__PURE__ */ g.jsxs(
        "div",
        {
          className: J(
            "flex items-center justify-start gap-[7px] truncate min-w-0",
            t && "cursor-pointer"
          ),
          onClick: t,
          title: e.name,
          children: [
            /* @__PURE__ */ g.jsx("p", { className: "text-[14px] font-semibold truncate min-w-0", children: e.name }),
            e.state && e.state !== "empty" && /* @__PURE__ */ g.jsxs("div", { className: "flex flex-col", children: [
              /* @__PURE__ */ g.jsx(
                G1,
                {
                  className: J(
                    "h-3 w-3 text-light-3",
                    e.state === "asc" && "!text-dark"
                  )
                }
              ),
              /* @__PURE__ */ g.jsx(
                _n,
                {
                  className: J(
                    "h-3 w-3 text-light-3 -mt-1",
                    e.state === "desc" && "!text-dark"
                  )
                }
              )
            ] })
          ]
        }
      ),
      n && /* @__PURE__ */ g.jsx("div", { className: "w-[1px] h-full bg-light-3" })
    ]
  }
), ON = ({
  item: e,
  onChange: t,
  withSeparator: n = !1,
  className: r = "",
  wrapperClassName: s = ""
}) => {
  var o;
  if (e.value === void 0) return /* @__PURE__ */ g.jsx("div", {});
  const i = /* @__PURE__ */ g.jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ g.jsx("path", { d: "M18 6L6 18", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" }),
    /* @__PURE__ */ g.jsx("path", { d: "M6 6L18 18", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" })
  ] });
  return /* @__PURE__ */ g.jsxs("div", { className: J("flex items-center justify-between gap-[20px] px-[8px]", s), children: [
    e.filterType === Iu.TextInput && /* @__PURE__ */ g.jsx(
      hy,
      {
        name: e.name,
        value: e.value,
        onChange: (a) => t(a.target.value),
        className: `max-w-none ${r}`,
        inputClassName: e.value ? "pr-[25px]" : "",
        icon: e.value ? i : void 0,
        iconClassName: "top-3 right-[7px] text-light-dark hover:text-medium",
        onIconClick: () => t("")
      }
    ),
    e.filterType === Iu.Select && e.options && /* @__PURE__ */ g.jsx(
      _y,
      {
        className: `w-[100%] ${r}`,
        selectedOption: ((o = e.options) == null ? void 0 : o.find((a) => a.value === e.value)) || null,
        options: e.options,
        placeholder: "Select an option",
        onChange: (a) => t(a.value)
      }
    ),
    n && /* @__PURE__ */ g.jsx("div", { className: "w-[1px] h-full bg-light-3" })
  ] });
}, RN = ({ className: e = "", tableGrid: t, children: n }) => /* @__PURE__ */ g.jsx(
  "div",
  {
    style: t,
    className: J(
      "bg-white grid items-stretch grid-cols-[repeat(auto-fit,_minmax(100px,_1fr))] w-full px-[14px] py-[12px]",
      e
    ),
    children: n
  }
), NN = ({ className: e = "", tableGrid: t, children: n }) => /* @__PURE__ */ g.jsx(
  "div",
  {
    style: t,
    className: J(
      "bg-white grid items-stretch grid-cols-[repeat(auto-fit,_minmax(100px,_1fr))] w-full px-[14px] py-[12px]",
      e
    ),
    children: n
  }
);
var aN = /* @__PURE__ */ ((e) => (e.success = "success", e.warning = "warning", e))(aN || {});
const lN = (e) => {
  switch (e) {
    case "success":
      return /* @__PURE__ */ g.jsx("span", { className: "text-success", children: /* @__PURE__ */ g.jsx(zo, { className: J("transition h-4 w-4"), "aria-hidden": "true" }) });
    case "warning":
      return /* @__PURE__ */ g.jsx("span", { className: "text-warning", children: /* @__PURE__ */ g.jsx(
        q1,
        {
          className: J("transition h-5 w-5"),
          "aria-hidden": "true"
        }
      ) });
    default:
      return /* @__PURE__ */ g.jsx("span", { className: "text-success", children: /* @__PURE__ */ g.jsx(zo, { className: J("transition h-4 w-4"), "aria-hidden": "true" }) });
  }
}, uN = ({
  id: e,
  name: t,
  layoutId: n,
  isActive: r = !1,
  status: s,
  multistep: i,
  counter: o,
  onClick: a,
  isSmall: l = !1
}) => {
  const u = "en";
  return /* @__PURE__ */ g.jsxs(
    "div",
    {
      className: J(
        "relative group transition-all flex items-center justify-center gap-[4px] text-base text-light-dark px-[15px] py-[12px] border-transparent outline-none cursor-pointer",
        l && "!p-2"
      ),
      onClick: () => a(e),
      children: [
        s && /* @__PURE__ */ g.jsx("span", { className: "flex items-center text-dark", children: lN(s) }),
        /* @__PURE__ */ g.jsx(
          "span",
          {
            className: J(
              "font-semibold group-hover:text-primary whitespace-nowrap",
              l && "text-sm",
              r === e && "text-primary"
            ),
            children: t
          }
        ),
        !!o && /* @__PURE__ */ g.jsxs("span", { children: [
          "(",
          o,
          ")"
        ] }),
        i && /* @__PURE__ */ g.jsxs("span", { children: [
          "(",
          i.currentStep,
          " of ",
          i.stepsAmount,
          ")"
        ] }),
        r === e && /* @__PURE__ */ g.jsx(
          zn.span,
          {
            layoutId: `${n}_${u}`,
            className: "absolute -bottom-0 left-0 w-full h-[3px] z-[5] bg-primary",
            transition: {
              type: "spring",
              bounce: 0.2,
              duration: 0.6
            }
          },
          u
        )
      ]
    }
  );
}, IN = ({
  className: e = "",
  layoutId: t,
  items: n,
  isActive: r,
  onClick: s,
  isSmall: i
}) => /* @__PURE__ */ g.jsx(
  "div",
  {
    className: J(
      "transition-all flex items-end gap-[7px] border-b border-b-light-3-tint px-[26px] w-full overflow-x-auto",
      i && "!px-4",
      e
    ),
    children: n.filter((o) => !o.hidden && o.id).map((o, a) => /* @__PURE__ */ g.jsx(
      uN,
      {
        id: o.id,
        layoutId: t,
        name: o.name,
        isSmall: i,
        onClick: s,
        isActive: r,
        multistep: o.multistep,
        counter: o.counter,
        status: o.status
      },
      a
    ))
  }
), FN = ({
  className: e = "",
  inputClassName: t = "",
  id: n,
  name: r,
  placeholder: s,
  value: i,
  label: o,
  isRequired: a,
  onChange: l,
  register: u,
  error: c,
  disabled: d = !1,
  actionLabel: f,
  actionPosition: m,
  onActionClick: p
}) => /* @__PURE__ */ g.jsxs(
  "div",
  {
    className: J(
      "transition-all",
      e,
      d && "pointer-events-none"
    ),
    children: [
      o && /* @__PURE__ */ g.jsxs(
        "label",
        {
          htmlFor: n,
          className: J(
            "block text-light-dark text-sm pb-2",
            d && "!text-light-3"
          ),
          children: [
            o,
            " ",
            a && /* @__PURE__ */ g.jsx("span", { className: "text-danger", children: "*" })
          ]
        }
      ),
      /* @__PURE__ */ g.jsx(
        "textarea",
        {
          className: J(
            "min-h-[148px] bg-white border border-light-3 rounded py-[7px] px-[15px] text-base text-dark w-full transition-colors duration-100 !outline-offset-0",
            c && "!border-danger outline !outline-[0.5px] !outline-danger",
            "hover:bg-fo-accent-light hover:border-fo-accent hover:outline hover:!outline-[1px] hover:outline-fo-accent",
            "focus:border-fo-accent focus:outline focus:!outline-[1px] focus:outline-fo-accent",
            d && "!bg-transparent !border !border-light-3-tint !text-light-3 cursor-not-allowed",
            t
          ),
          id: n,
          name: r,
          placeholder: s,
          value: i,
          onChange: (h) => l == null ? void 0 : l(h.target.value),
          disabled: d,
          ...u && u(r, {
            required: {
              value: a,
              message: `${o} is required`
            }
          })
        }
      ),
      (c || f) && /* @__PURE__ */ g.jsxs("div", { className: "flex items-start justify-between mt-1", children: [
        c && /* @__PURE__ */ g.jsx(
          "p",
          {
            className: J(
              "text-danger text-xs mt-1 w-full truncate",
              f ? "max-w-[70%]" : "max-w-full",
              m === "left" && "order-last"
            ),
            children: c
          }
        ),
        /* @__PURE__ */ g.jsx(
          "div",
          {
            className: J(
              "flex w-full",
              m === "right" ? "justify-end" : "justify-start"
            ),
            children: f && /* @__PURE__ */ g.jsx(
              "button",
              {
                onClick: p,
                className: J(
                  "text-medium text-sm underline",
                  d && "opacity-60 !text-grey-300 cursor-not-allowed"
                ),
                disabled: d,
                children: f
              }
            )
          }
        )
      ] })
    ]
  }
), cN = "@carauktion/component-library", dN = "0.2.0", vy = {
  name: cN,
  version: dN
}, fN = () => vy.version, mN = () => vy.name, VN = ({ showPackageName: e = !1, className: t = "" }) => /* @__PURE__ */ g.jsxs("div", { className: `text-sm text-gray-600 ${t}`, children: [
  e && /* @__PURE__ */ g.jsx("div", { className: "font-medium text-gray-800", children: mN() }),
  /* @__PURE__ */ g.jsxs("div", { children: [
    "Version: ",
    /* @__PURE__ */ g.jsx("span", { className: "font-mono font-semibold", children: fN() })
  ] })
] });
var pN = /* @__PURE__ */ ((e) => (e.DE = "DE", e.FR = "FR", e.IT = "IT", e.EN = "EN", e))(pN || {});
export {
  yN as Accordion,
  MN as AccordionGroup,
  YN as AccordionRow,
  fo as Arrow,
  pr as ArrowType,
  LN as Autocomplete,
  tD as Button,
  SN as Cell,
  nD as Checkbox,
  kN as ColumnSwitcher,
  DN as ColumnsView,
  TN as DatePicker,
  EN as Dropdown,
  Iu as FilterType,
  pN as LANGUAGES,
  jN as Loading,
  PN as Message,
  AN as Modal,
  rN as Pagination,
  CN as PaginationBar,
  oN as Portal,
  $N as Row,
  ON as Search,
  RN as SearchBar,
  _y as Select,
  HN as Sort,
  NN as SortBar,
  iN as SortState,
  ad as Spinner,
  rD as Switcher,
  uN as Tab,
  aN as TabStatus,
  IN as Tabs,
  hy as TextInput,
  FN as Textarea,
  sN as Tooltip,
  VN as VersionInfo,
  zt as getCSSVariable,
  mN as getPackageName,
  fN as getVersion
};
//# sourceMappingURL=index.js.map
