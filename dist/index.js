import * as M from "react";
import E, { createContext as pe, useRef as X, useLayoutEffect as na, useEffect as se, useId as Ne, useContext as ee, useInsertionEffect as Lm, useMemo as me, useCallback as q, Children as $g, isValidElement as ra, useState as ne, Fragment as je, createElement as Sm, forwardRef as oa, Component as Hg, cloneElement as km, useSyncExternalStore as Rg, useReducer as Dm, createRef as Og } from "react";
import * as ur from "react-dom";
import Ng, { flushSync as mo, createPortal as pu } from "react-dom";
var Fg = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {};
function Tm(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var vl = { exports: {} }, Kn = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jc;
function Ig() {
  if (Jc) return Kn;
  Jc = 1;
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
  return Kn.Fragment = t, Kn.jsx = n, Kn.jsxs = n, Kn;
}
var Gn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xc;
function Vg() {
  return Xc || (Xc = 1, process.env.NODE_ENV !== "production" && function() {
    function e(T) {
      if (T == null) return null;
      if (typeof T == "function")
        return T.$$typeof === $ ? null : T.displayName || T.name || null;
      if (typeof T == "string") return T;
      switch (T) {
        case v:
          return "Fragment";
        case y:
          return "Profiler";
        case h:
          return "StrictMode";
        case k:
          return "Suspense";
        case j:
          return "SuspenseList";
        case S:
          return "Activity";
      }
      if (typeof T == "object")
        switch (typeof T.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), T.$$typeof) {
          case p:
            return "Portal";
          case x:
            return T.displayName || "Context";
          case b:
            return (T._context.displayName || "Context") + ".Consumer";
          case w:
            var B = T.render;
            return T = T.displayName, T || (T = B.displayName || B.name || "", T = T !== "" ? "ForwardRef(" + T + ")" : "ForwardRef"), T;
          case L:
            return B = T.displayName || null, B !== null ? B : e(T.type) || "Memo";
          case F:
            B = T._payload, T = T._init;
            try {
              return e(T(B));
            } catch {
            }
        }
      return null;
    }
    function t(T) {
      return "" + T;
    }
    function n(T) {
      try {
        t(T);
        var B = !1;
      } catch {
        B = !0;
      }
      if (B) {
        B = console;
        var I = B.error, G = typeof Symbol == "function" && Symbol.toStringTag && T[Symbol.toStringTag] || T.constructor.name || "Object";
        return I.call(
          B,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          G
        ), t(T);
      }
    }
    function r(T) {
      if (T === v) return "<>";
      if (typeof T == "object" && T !== null && T.$$typeof === F)
        return "<...>";
      try {
        var B = e(T);
        return B ? "<" + B + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var T = z.A;
      return T === null ? null : T.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function o(T) {
      if (U.call(T, "key")) {
        var B = Object.getOwnPropertyDescriptor(T, "key").get;
        if (B && B.isReactWarning) return !1;
      }
      return T.key !== void 0;
    }
    function a(T, B) {
      function I() {
        P || (P = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          B
        ));
      }
      I.isReactWarning = !0, Object.defineProperty(T, "key", {
        get: I,
        configurable: !0
      });
    }
    function l() {
      var T = e(this.type);
      return R[T] || (R[T] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), T = this.props.ref, T !== void 0 ? T : null;
    }
    function u(T, B, I, G, ie, J) {
      var W = I.ref;
      return T = {
        $$typeof: _,
        type: T,
        key: B,
        props: I,
        _owner: G
      }, (W !== void 0 ? W : null) !== null ? Object.defineProperty(T, "ref", {
        enumerable: !1,
        get: l
      }) : Object.defineProperty(T, "ref", { enumerable: !1, value: null }), T._store = {}, Object.defineProperty(T._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(T, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(T, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ie
      }), Object.defineProperty(T, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: J
      }), Object.freeze && (Object.freeze(T.props), Object.freeze(T)), T;
    }
    function c(T, B, I, G, ie, J) {
      var W = B.children;
      if (W !== void 0)
        if (G)
          if (N(W)) {
            for (G = 0; G < W.length; G++)
              d(W[G]);
            Object.freeze && Object.freeze(W);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else d(W);
      if (U.call(B, "key")) {
        W = e(T);
        var ce = Object.keys(B).filter(function(de) {
          return de !== "key";
        });
        G = 0 < ce.length ? "{key: someKey, " + ce.join(": ..., ") + ": ...}" : "{key: someKey}", V[W + G] || (ce = 0 < ce.length ? "{" + ce.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          G,
          W,
          ce,
          W
        ), V[W + G] = !0);
      }
      if (W = null, I !== void 0 && (n(I), W = "" + I), o(B) && (n(B.key), W = "" + B.key), "key" in B) {
        I = {};
        for (var ae in B)
          ae !== "key" && (I[ae] = B[ae]);
      } else I = B;
      return W && a(
        I,
        typeof T == "function" ? T.displayName || T.name || "Unknown" : T
      ), u(
        T,
        W,
        I,
        s(),
        ie,
        J
      );
    }
    function d(T) {
      f(T) ? T._store && (T._store.validated = 1) : typeof T == "object" && T !== null && T.$$typeof === F && (T._payload.status === "fulfilled" ? f(T._payload.value) && T._payload.value._store && (T._payload.value._store.validated = 1) : T._store && (T._store.validated = 1));
    }
    function f(T) {
      return typeof T == "object" && T !== null && T.$$typeof === _;
    }
    var m = E, _ = Symbol.for("react.transitional.element"), p = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), h = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), b = Symbol.for("react.consumer"), x = Symbol.for("react.context"), w = Symbol.for("react.forward_ref"), k = Symbol.for("react.suspense"), j = Symbol.for("react.suspense_list"), L = Symbol.for("react.memo"), F = Symbol.for("react.lazy"), S = Symbol.for("react.activity"), $ = Symbol.for("react.client.reference"), z = m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, U = Object.prototype.hasOwnProperty, N = Array.isArray, C = console.createTask ? console.createTask : function() {
      return null;
    };
    m = {
      react_stack_bottom_frame: function(T) {
        return T();
      }
    };
    var P, R = {}, Y = m.react_stack_bottom_frame.bind(
      m,
      i
    )(), A = C(r(i)), V = {};
    Gn.Fragment = v, Gn.jsx = function(T, B, I) {
      var G = 1e4 > z.recentlyCreatedOwnerStacks++;
      return c(
        T,
        B,
        I,
        !1,
        G ? Error("react-stack-top-frame") : Y,
        G ? C(r(T)) : A
      );
    }, Gn.jsxs = function(T, B, I) {
      var G = 1e4 > z.recentlyCreatedOwnerStacks++;
      return c(
        T,
        B,
        I,
        !0,
        G ? Error("react-stack-top-frame") : Y,
        G ? C(r(T)) : A
      );
    };
  }()), Gn;
}
process.env.NODE_ENV === "production" ? vl.exports = Ig() : vl.exports = Vg();
var g = vl.exports;
const _u = pe({});
function hu(e) {
  const t = X(null);
  return t.current === null && (t.current = e()), t.current;
}
const vu = typeof window != "undefined", Em = vu ? na : se, sa = /* @__PURE__ */ pe(null);
function gu(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function yu(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
const St = (e, t, n) => n > t ? t : n < e ? e : n;
function gl(e, t) {
  return t ? `${e}. For more information and steps for solving, visit https://motion.dev/troubleshooting/${t}` : e;
}
let Hn = () => {
}, kt = () => {
};
process.env.NODE_ENV !== "production" && (Hn = (e, t, n) => {
  !e && typeof console != "undefined" && console.warn(gl(t, n));
}, kt = (e, t, n) => {
  if (!e)
    throw new Error(gl(t, n));
});
const Dt = {}, jm = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
function Am(e) {
  return typeof e == "object" && e !== null;
}
const Pm = (e) => /^0[^.\s]+$/u.test(e);
// @__NO_SIDE_EFFECTS__
function Mu(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const rt = /* @__NO_SIDE_EFFECTS__ */ (e) => e, Bg = (e, t) => (n) => t(e(n)), Sr = (...e) => e.reduce(Bg), cr = /* @__NO_SIDE_EFFECTS__ */ (e, t, n) => {
  const r = t - e;
  return r === 0 ? 1 : (n - e) / r;
};
class bu {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return gu(this.subscriptions, t), () => yu(this.subscriptions, t);
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
const ct = /* @__NO_SIDE_EFFECTS__ */ (e) => e * 1e3, nt = /* @__NO_SIDE_EFFECTS__ */ (e) => e / 1e3;
function Cm(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const qc = /* @__PURE__ */ new Set();
function xu(e, t, n) {
  e || qc.has(t) || (console.warn(gl(t, n)), qc.add(t));
}
const $m = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, zg = 1e-7, Wg = 12;
function Ug(e, t, n, r, s) {
  let i, o, a = 0;
  do
    o = t + (n - t) / 2, i = $m(o, r, s) - e, i > 0 ? n = o : t = o;
  while (Math.abs(i) > zg && ++a < Wg);
  return o;
}
function kr(e, t, n, r) {
  if (e === t && n === r)
    return rt;
  const s = (i) => Ug(i, 0, 1, e, n);
  return (i) => i === 0 || i === 1 ? i : $m(s(i), t, r);
}
const Hm = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, Rm = (e) => (t) => 1 - e(1 - t), Om = /* @__PURE__ */ kr(0.33, 1.53, 0.69, 0.99), wu = /* @__PURE__ */ Rm(Om), Nm = /* @__PURE__ */ Hm(wu), Fm = (e) => (e *= 2) < 1 ? 0.5 * wu(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), Yu = (e) => 1 - Math.sin(Math.acos(e)), Im = Rm(Yu), Vm = Hm(Yu), Kg = /* @__PURE__ */ kr(0.42, 0, 1, 1), Gg = /* @__PURE__ */ kr(0, 0, 0.58, 1), Bm = /* @__PURE__ */ kr(0.42, 0, 0.58, 1), Jg = (e) => Array.isArray(e) && typeof e[0] != "number", zm = (e) => Array.isArray(e) && typeof e[0] == "number", Zc = {
  linear: rt,
  easeIn: Kg,
  easeInOut: Bm,
  easeOut: Gg,
  circIn: Yu,
  circInOut: Vm,
  circOut: Im,
  backIn: wu,
  backInOut: Nm,
  backOut: Om,
  anticipate: Fm
}, Xg = (e) => typeof e == "string", Qc = (e) => {
  if (zm(e)) {
    kt(e.length === 4, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length");
    const [t, n, r, s] = e;
    return kr(t, n, r, s);
  } else if (Xg(e))
    return kt(Zc[e] !== void 0, `Invalid easing type '${e}'`, "invalid-easing-type"), Zc[e];
  return e;
}, Fr = [
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
function qg(e, t) {
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
      const _ = f && s ? n : r;
      return d && o.add(c), _.has(c) || _.add(c), c;
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
const Zg = 40;
function Wm(e, t) {
  let n = !1, r = !0;
  const s = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, i = () => n = !0, o = Fr.reduce((b, x) => (b[x] = qg(i), b), {}), { setup: a, read: l, resolveKeyframes: u, preUpdate: c, update: d, preRender: f, render: m, postRender: _ } = o, p = () => {
    const b = Dt.useManualTiming ? s.timestamp : performance.now();
    n = !1, Dt.useManualTiming || (s.delta = r ? 1e3 / 60 : Math.max(Math.min(b - s.timestamp, Zg), 1)), s.timestamp = b, s.isProcessing = !0, a.process(s), l.process(s), u.process(s), c.process(s), d.process(s), f.process(s), m.process(s), _.process(s), s.isProcessing = !1, n && t && (r = !1, e(p));
  }, v = () => {
    n = !0, r = !0, s.isProcessing || e(p);
  };
  return { schedule: Fr.reduce((b, x) => {
    const w = o[x];
    return b[x] = (k, j = !1, L = !1) => (n || v(), w.schedule(k, j, L)), b;
  }, {}), cancel: (b) => {
    for (let x = 0; x < Fr.length; x++)
      o[Fr[x]].cancel(b);
  }, state: s, steps: o };
}
const { schedule: ve, cancel: Vt, state: Pe, steps: Aa } = /* @__PURE__ */ Wm(typeof requestAnimationFrame != "undefined" ? requestAnimationFrame : rt, !0);
let ro;
function Qg() {
  ro = void 0;
}
const Ue = {
  now: () => (ro === void 0 && Ue.set(Pe.isProcessing || Dt.useManualTiming ? Pe.timestamp : performance.now()), ro),
  set: (e) => {
    ro = e, queueMicrotask(Qg);
  }
}, Um = (e) => (t) => typeof t == "string" && t.startsWith(e), Lu = /* @__PURE__ */ Um("--"), ey = /* @__PURE__ */ Um("var(--"), Su = (e) => ey(e) ? ty.test(e.split("/*")[0].trim()) : !1, ty = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, Rn = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, dr = {
  ...Rn,
  transform: (e) => St(0, 1, e)
}, Ir = {
  ...Rn,
  default: 1
}, rr = (e) => Math.round(e * 1e5) / 1e5, ku = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function ny(e) {
  return e == null;
}
const ry = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, Du = (e, t) => (n) => !!(typeof n == "string" && ry.test(n) && n.startsWith(e) || t && !ny(n) && Object.prototype.hasOwnProperty.call(n, t)), Km = (e, t, n) => (r) => {
  if (typeof r != "string")
    return r;
  const [s, i, o, a] = r.match(ku);
  return {
    [e]: parseFloat(s),
    [t]: parseFloat(i),
    [n]: parseFloat(o),
    alpha: a !== void 0 ? parseFloat(a) : 1
  };
}, oy = (e) => St(0, 255, e), Pa = {
  ...Rn,
  transform: (e) => Math.round(oy(e))
}, tn = {
  test: /* @__PURE__ */ Du("rgb", "red"),
  parse: /* @__PURE__ */ Km("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + Pa.transform(e) + ", " + Pa.transform(t) + ", " + Pa.transform(n) + ", " + rr(dr.transform(r)) + ")"
};
function sy(e) {
  let t = "", n = "", r = "", s = "";
  return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), s = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), s = e.substring(4, 5), t += t, n += n, r += r, s += s), {
    red: parseInt(t, 16),
    green: parseInt(n, 16),
    blue: parseInt(r, 16),
    alpha: s ? parseInt(s, 16) / 255 : 1
  };
}
const yl = {
  test: /* @__PURE__ */ Du("#"),
  parse: sy,
  transform: tn.transform
}, Dr = /* @__NO_SIDE_EFFECTS__ */ (e) => ({
  test: (t) => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), Ht = /* @__PURE__ */ Dr("deg"), _t = /* @__PURE__ */ Dr("%"), oe = /* @__PURE__ */ Dr("px"), iy = /* @__PURE__ */ Dr("vh"), ay = /* @__PURE__ */ Dr("vw"), ed = {
  ..._t,
  parse: (e) => _t.parse(e) / 100,
  transform: (e) => _t.transform(e * 100)
}, gn = {
  test: /* @__PURE__ */ Du("hsl", "hue"),
  parse: /* @__PURE__ */ Km("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + _t.transform(rr(t)) + ", " + _t.transform(rr(n)) + ", " + rr(dr.transform(r)) + ")"
}, Le = {
  test: (e) => tn.test(e) || yl.test(e) || gn.test(e),
  parse: (e) => tn.test(e) ? tn.parse(e) : gn.test(e) ? gn.parse(e) : yl.parse(e),
  transform: (e) => typeof e == "string" ? e : e.hasOwnProperty("red") ? tn.transform(e) : gn.transform(e),
  getAnimatableNone: (e) => {
    const t = Le.parse(e);
    return t.alpha = 0, Le.transform(t);
  }
}, ly = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function uy(e) {
  var t, n;
  return isNaN(e) && typeof e == "string" && (((t = e.match(ku)) == null ? void 0 : t.length) || 0) + (((n = e.match(ly)) == null ? void 0 : n.length) || 0) > 0;
}
const Gm = "number", Jm = "color", cy = "var", dy = "var(", td = "${}", fy = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function fr(e) {
  const t = e.toString(), n = [], r = {
    color: [],
    number: [],
    var: []
  }, s = [];
  let i = 0;
  const a = t.replace(fy, (l) => (Le.test(l) ? (r.color.push(i), s.push(Jm), n.push(Le.parse(l))) : l.startsWith(dy) ? (r.var.push(i), s.push(cy), n.push(l)) : (r.number.push(i), s.push(Gm), n.push(parseFloat(l))), ++i, td)).split(td);
  return { values: n, split: a, indexes: r, types: s };
}
function Xm(e) {
  return fr(e).values;
}
function qm(e) {
  const { split: t, types: n } = fr(e), r = t.length;
  return (s) => {
    let i = "";
    for (let o = 0; o < r; o++)
      if (i += t[o], s[o] !== void 0) {
        const a = n[o];
        a === Gm ? i += rr(s[o]) : a === Jm ? i += Le.transform(s[o]) : i += s[o];
      }
    return i;
  };
}
const my = (e) => typeof e == "number" ? 0 : Le.test(e) ? Le.getAnimatableNone(e) : e;
function py(e) {
  const t = Xm(e);
  return qm(e)(t.map(my));
}
const Bt = {
  test: uy,
  parse: Xm,
  createTransformer: qm,
  getAnimatableNone: py
};
function Ca(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function _y({ hue: e, saturation: t, lightness: n, alpha: r }) {
  e /= 360, t /= 100, n /= 100;
  let s = 0, i = 0, o = 0;
  if (!t)
    s = i = o = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t, l = 2 * n - a;
    s = Ca(l, a, e + 1 / 3), i = Ca(l, a, e), o = Ca(l, a, e - 1 / 3);
  }
  return {
    red: Math.round(s * 255),
    green: Math.round(i * 255),
    blue: Math.round(o * 255),
    alpha: r
  };
}
function po(e, t) {
  return (n) => n > 0 ? t : e;
}
const Me = (e, t, n) => e + (t - e) * n, $a = (e, t, n) => {
  const r = e * e, s = n * (t * t - r) + r;
  return s < 0 ? 0 : Math.sqrt(s);
}, hy = [yl, tn, gn], vy = (e) => hy.find((t) => t.test(e));
function nd(e) {
  const t = vy(e);
  if (Hn(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"), !t)
    return !1;
  let n = t.parse(e);
  return t === gn && (n = _y(n)), n;
}
const rd = (e, t) => {
  const n = nd(e), r = nd(t);
  if (!n || !r)
    return po(e, t);
  const s = { ...n };
  return (i) => (s.red = $a(n.red, r.red, i), s.green = $a(n.green, r.green, i), s.blue = $a(n.blue, r.blue, i), s.alpha = Me(n.alpha, r.alpha, i), tn.transform(s));
}, Ml = /* @__PURE__ */ new Set(["none", "hidden"]);
function gy(e, t) {
  return Ml.has(e) ? (n) => n <= 0 ? e : t : (n) => n >= 1 ? t : e;
}
function yy(e, t) {
  return (n) => Me(e, t, n);
}
function Tu(e) {
  return typeof e == "number" ? yy : typeof e == "string" ? Su(e) ? po : Le.test(e) ? rd : xy : Array.isArray(e) ? Zm : typeof e == "object" ? Le.test(e) ? rd : My : po;
}
function Zm(e, t) {
  const n = [...e], r = n.length, s = e.map((i, o) => Tu(i)(i, t[o]));
  return (i) => {
    for (let o = 0; o < r; o++)
      n[o] = s[o](i);
    return n;
  };
}
function My(e, t) {
  const n = { ...e, ...t }, r = {};
  for (const s in n)
    e[s] !== void 0 && t[s] !== void 0 && (r[s] = Tu(e[s])(e[s], t[s]));
  return (s) => {
    for (const i in r)
      n[i] = r[i](s);
    return n;
  };
}
function by(e, t) {
  var s;
  const n = [], r = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < t.values.length; i++) {
    const o = t.types[i], a = e.indexes[o][r[o]], l = (s = e.values[a]) != null ? s : 0;
    n[i] = l, r[o]++;
  }
  return n;
}
const xy = (e, t) => {
  const n = Bt.createTransformer(t), r = fr(e), s = fr(t);
  return r.indexes.var.length === s.indexes.var.length && r.indexes.color.length === s.indexes.color.length && r.indexes.number.length >= s.indexes.number.length ? Ml.has(e) && !s.values.length || Ml.has(t) && !r.values.length ? gy(e, t) : Sr(Zm(by(r, s), s.values), n) : (Hn(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different"), po(e, t));
};
function Qm(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number" ? Me(e, t, n) : Tu(e)(e, t);
}
const wy = (e) => {
  const t = ({ timestamp: n }) => e(n);
  return {
    start: (n = !0) => ve.update(t, n),
    stop: () => Vt(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => Pe.isProcessing ? Pe.timestamp : Ue.now()
  };
}, ep = (e, t, n = 10) => {
  let r = "";
  const s = Math.max(Math.round(t / n), 2);
  for (let i = 0; i < s; i++)
    r += Math.round(e(i / (s - 1)) * 1e4) / 1e4 + ", ";
  return `linear(${r.substring(0, r.length - 2)})`;
}, _o = 2e4;
function Eu(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < _o; )
    t += n, r = e.next(t);
  return t >= _o ? 1 / 0 : t;
}
function Yy(e, t = 100, n) {
  const r = n({ ...e, keyframes: [0, t] }), s = Math.min(Eu(r), _o);
  return {
    type: "keyframes",
    ease: (i) => r.next(s * i).value / t,
    duration: /* @__PURE__ */ nt(s)
  };
}
const Ly = 5;
function tp(e, t, n) {
  const r = Math.max(t - Ly, 0);
  return Cm(n - e(r), t - r);
}
const ye = {
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
}, Ha = 1e-3;
function Sy({ duration: e = ye.duration, bounce: t = ye.bounce, velocity: n = ye.velocity, mass: r = ye.mass }) {
  let s, i;
  Hn(e <= /* @__PURE__ */ ct(ye.maxDuration), "Spring duration must be 10 seconds or less", "spring-duration-limit");
  let o = 1 - t;
  o = St(ye.minDamping, ye.maxDamping, o), e = St(ye.minDuration, ye.maxDuration, /* @__PURE__ */ nt(e)), o < 1 ? (s = (u) => {
    const c = u * o, d = c * e, f = c - n, m = bl(u, o), _ = Math.exp(-d);
    return Ha - f / m * _;
  }, i = (u) => {
    const d = u * o * e, f = d * n + n, m = Math.pow(o, 2) * Math.pow(u, 2) * e, _ = Math.exp(-d), p = bl(Math.pow(u, 2), o);
    return (-s(u) + Ha > 0 ? -1 : 1) * ((f - m) * _) / p;
  }) : (s = (u) => {
    const c = Math.exp(-u * e), d = (u - n) * e + 1;
    return -Ha + c * d;
  }, i = (u) => {
    const c = Math.exp(-u * e), d = (n - u) * (e * e);
    return c * d;
  });
  const a = 5 / e, l = Dy(s, i, a);
  if (e = /* @__PURE__ */ ct(e), isNaN(l))
    return {
      stiffness: ye.stiffness,
      damping: ye.damping,
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
const ky = 12;
function Dy(e, t, n) {
  let r = n;
  for (let s = 1; s < ky; s++)
    r = r - e(r) / t(r);
  return r;
}
function bl(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const Ty = ["duration", "bounce"], Ey = ["stiffness", "damping", "mass"];
function od(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function jy(e) {
  let t = {
    velocity: ye.velocity,
    stiffness: ye.stiffness,
    damping: ye.damping,
    mass: ye.mass,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!od(e, Ey) && od(e, Ty))
    if (e.visualDuration) {
      const n = e.visualDuration, r = 2 * Math.PI / (n * 1.2), s = r * r, i = 2 * St(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(s);
      t = {
        ...t,
        mass: ye.mass,
        stiffness: s,
        damping: i
      };
    } else {
      const n = Sy(e);
      t = {
        ...t,
        ...n,
        mass: ye.mass
      }, t.isResolvedFromDuration = !0;
    }
  return t;
}
function ho(e = ye.visualDuration, t = ye.bounce) {
  const n = typeof e != "object" ? {
    visualDuration: e,
    keyframes: [0, 1],
    bounce: t
  } : e;
  let { restSpeed: r, restDelta: s } = n;
  const i = n.keyframes[0], o = n.keyframes[n.keyframes.length - 1], a = { done: !1, value: i }, { stiffness: l, damping: u, mass: c, duration: d, velocity: f, isResolvedFromDuration: m } = jy({
    ...n,
    velocity: -/* @__PURE__ */ nt(n.velocity || 0)
  }), _ = f || 0, p = u / (2 * Math.sqrt(l * c)), v = o - i, h = /* @__PURE__ */ nt(Math.sqrt(l / c)), y = Math.abs(v) < 5;
  r || (r = y ? ye.restSpeed.granular : ye.restSpeed.default), s || (s = y ? ye.restDelta.granular : ye.restDelta.default);
  let b;
  if (p < 1) {
    const w = bl(h, p);
    b = (k) => {
      const j = Math.exp(-p * h * k);
      return o - j * ((_ + p * h * v) / w * Math.sin(w * k) + v * Math.cos(w * k));
    };
  } else if (p === 1)
    b = (w) => o - Math.exp(-h * w) * (v + (_ + h * v) * w);
  else {
    const w = h * Math.sqrt(p * p - 1);
    b = (k) => {
      const j = Math.exp(-p * h * k), L = Math.min(w * k, 300);
      return o - j * ((_ + p * h * v) * Math.sinh(L) + w * v * Math.cosh(L)) / w;
    };
  }
  const x = {
    calculatedDuration: m && d || null,
    next: (w) => {
      const k = b(w);
      if (m)
        a.done = w >= d;
      else {
        let j = w === 0 ? _ : 0;
        p < 1 && (j = w === 0 ? /* @__PURE__ */ ct(_) : tp(b, w, k));
        const L = Math.abs(j) <= r, F = Math.abs(o - k) <= s;
        a.done = L && F;
      }
      return a.value = a.done ? o : k, a;
    },
    toString: () => {
      const w = Math.min(Eu(x), _o), k = ep((j) => x.next(w * j).value, w, 30);
      return w + "ms " + k;
    },
    toTransition: () => {
    }
  };
  return x;
}
ho.applyToOptions = (e) => {
  const t = Yy(e, 100, ho);
  return e.ease = t.ease, e.duration = /* @__PURE__ */ ct(t.duration), e.type = "keyframes", e;
};
function xl({ keyframes: e, velocity: t = 0, power: n = 0.8, timeConstant: r = 325, bounceDamping: s = 10, bounceStiffness: i = 500, modifyTarget: o, min: a, max: l, restDelta: u = 0.5, restSpeed: c }) {
  const d = e[0], f = {
    done: !1,
    value: d
  }, m = (L) => a !== void 0 && L < a || l !== void 0 && L > l, _ = (L) => a === void 0 ? l : l === void 0 || Math.abs(a - L) < Math.abs(l - L) ? a : l;
  let p = n * t;
  const v = d + p, h = o === void 0 ? v : o(v);
  h !== v && (p = h - d);
  const y = (L) => -p * Math.exp(-L / r), b = (L) => h + y(L), x = (L) => {
    const F = y(L), S = b(L);
    f.done = Math.abs(F) <= u, f.value = f.done ? h : S;
  };
  let w, k;
  const j = (L) => {
    m(f.value) && (w = L, k = ho({
      keyframes: [f.value, _(f.value)],
      velocity: tp(b, L, f.value),
      // TODO: This should be passing * 1000
      damping: s,
      stiffness: i,
      restDelta: u,
      restSpeed: c
    }));
  };
  return j(0), {
    calculatedDuration: null,
    next: (L) => {
      let F = !1;
      return !k && w === void 0 && (F = !0, x(L), j(L)), w !== void 0 && L >= w ? k.next(L - w) : (!F && x(L), f);
    }
  };
}
function Ay(e, t, n) {
  const r = [], s = n || Dt.mix || Qm, i = e.length - 1;
  for (let o = 0; o < i; o++) {
    let a = s(e[o], e[o + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[o] || rt : t;
      a = Sr(l, a);
    }
    r.push(a);
  }
  return r;
}
function Py(e, t, { clamp: n = !0, ease: r, mixer: s } = {}) {
  const i = e.length;
  if (kt(i === t.length, "Both input and output ranges must be the same length", "range-length"), i === 1)
    return () => t[0];
  if (i === 2 && t[0] === t[1])
    return () => t[1];
  const o = e[0] === e[1];
  e[0] > e[i - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const a = Ay(t, r, s), l = a.length, u = (c) => {
    if (o && c < e[0])
      return t[0];
    let d = 0;
    if (l > 1)
      for (; d < e.length - 2 && !(c < e[d + 1]); d++)
        ;
    const f = /* @__PURE__ */ cr(e[d], e[d + 1], c);
    return a[d](f);
  };
  return n ? (c) => u(St(e[0], e[i - 1], c)) : u;
}
function Cy(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const s = /* @__PURE__ */ cr(0, t, r);
    e.push(Me(n, 1, s));
  }
}
function $y(e) {
  const t = [0];
  return Cy(t, e.length - 1), t;
}
function Hy(e, t) {
  return e.map((n) => n * t);
}
function Ry(e, t) {
  return e.map(() => t || Bm).splice(0, e.length - 1);
}
function yn({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
  const s = Jg(r) ? r.map(Qc) : Qc(r), i = {
    done: !1,
    value: t[0]
  }, o = Hy(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === t.length ? n : $y(t),
    e
  ), a = Py(o, t, {
    ease: Array.isArray(s) ? s : Ry(t, s)
  });
  return {
    calculatedDuration: e,
    next: (l) => (i.value = a(l), i.done = l >= e, i)
  };
}
const Oy = (e) => e !== null;
function ju(e, { repeat: t, repeatType: n = "loop" }, r, s = 1) {
  const i = e.filter(Oy), a = s < 0 || t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
  return !a || r === void 0 ? i[a] : r;
}
const Ny = {
  decay: xl,
  inertia: xl,
  tween: yn,
  keyframes: yn,
  spring: ho
};
function np(e) {
  typeof e.type == "string" && (e.type = Ny[e.type]);
}
class Au {
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
const Fy = (e) => e / 100;
class Pu extends Au {
  constructor(t) {
    super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.stop = () => {
      var r, s;
      const { motionValue: n } = this.options;
      n && n.updatedAt !== Ue.now() && this.tick(Ue.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), (s = (r = this.options).onStop) == null || s.call(r));
    }, this.options = t, this.initAnimation(), this.play(), t.autoplay === !1 && this.pause();
  }
  initAnimation() {
    const { options: t } = this;
    np(t);
    const { type: n = yn, repeat: r = 0, repeatDelay: s = 0, repeatType: i, velocity: o = 0 } = t;
    let { keyframes: a } = t;
    const l = n || yn;
    process.env.NODE_ENV !== "production" && l !== yn && kt(a.length <= 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${a}`, "spring-two-frames"), l !== yn && typeof a[0] != "number" && (this.mixKeyframes = Sr(Fy, Qm(a[0], a[1])), a = [0, 100]);
    const u = l({ ...t, keyframes: a });
    i === "mirror" && (this.mirroredGenerator = l({
      ...t,
      keyframes: [...a].reverse(),
      velocity: -o
    })), u.calculatedDuration === null && (u.calculatedDuration = Eu(u));
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
    const { delay: u = 0, keyframes: c, repeat: d, repeatType: f, repeatDelay: m, type: _, onUpdate: p, finalKeyframe: v } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - s / this.speed, this.startTime)), n ? this.currentTime = t : this.updateTime(t);
    const h = this.currentTime - u * (this.playbackSpeed >= 0 ? 1 : -1), y = this.playbackSpeed >= 0 ? h < 0 : h > s;
    this.currentTime = Math.max(h, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = s);
    let b = this.currentTime, x = r;
    if (d) {
      const L = Math.min(this.currentTime, s) / a;
      let F = Math.floor(L), S = L % 1;
      !S && L >= 1 && (S = 1), S === 1 && F--, F = Math.min(F, d + 1), !!(F % 2) && (f === "reverse" ? (S = 1 - S, m && (S -= m / a)) : f === "mirror" && (x = o)), b = St(0, 1, S) * a;
    }
    const w = y ? { done: !1, value: c[0] } : x.next(b);
    i && (w.value = i(w.value));
    let { done: k } = w;
    !y && l !== null && (k = this.playbackSpeed >= 0 ? this.currentTime >= s : this.currentTime <= 0);
    const j = this.holdTime === null && (this.state === "finished" || this.state === "running" && k);
    return j && _ !== xl && (w.value = ju(c, this.options, v, this.speed)), p && p(w.value), j && this.finish(), w;
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
    return /* @__PURE__ */ nt(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: t = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ nt(t);
  }
  get time() {
    return /* @__PURE__ */ nt(this.currentTime);
  }
  set time(t) {
    var n;
    t = /* @__PURE__ */ ct(t), this.currentTime = t, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.playbackSpeed), (n = this.driver) == null || n.start(!1);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    this.updateTime(Ue.now());
    const n = this.playbackSpeed !== t;
    this.playbackSpeed = t, n && (this.time = /* @__PURE__ */ nt(this.currentTime));
  }
  play() {
    var s, i;
    if (this.isStopped)
      return;
    const { driver: t = wy, startTime: n } = this.options;
    this.driver || (this.driver = t((o) => this.tick(o))), (i = (s = this.options).onPlay) == null || i.call(s);
    const r = this.driver.now();
    this.state === "finished" ? (this.updateFinished(), this.startTime = r) : this.holdTime !== null ? this.startTime = r - this.holdTime : this.startTime || (this.startTime = n != null ? n : r), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    this.state = "paused", this.updateTime(Ue.now()), this.holdTime = this.currentTime;
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
function Iy(e) {
  var t;
  for (let n = 1; n < e.length; n++)
    (t = e[n]) != null || (e[n] = e[n - 1]);
}
const nn = (e) => e * 180 / Math.PI, wl = (e) => {
  const t = nn(Math.atan2(e[1], e[0]));
  return Yl(t);
}, Vy = {
  x: 4,
  y: 5,
  translateX: 4,
  translateY: 5,
  scaleX: 0,
  scaleY: 3,
  scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
  rotate: wl,
  rotateZ: wl,
  skewX: (e) => nn(Math.atan(e[1])),
  skewY: (e) => nn(Math.atan(e[2])),
  skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2
}, Yl = (e) => (e = e % 360, e < 0 && (e += 360), e), sd = wl, id = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]), ad = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]), By = {
  x: 12,
  y: 13,
  z: 14,
  translateX: 12,
  translateY: 13,
  translateZ: 14,
  scaleX: id,
  scaleY: ad,
  scale: (e) => (id(e) + ad(e)) / 2,
  rotateX: (e) => Yl(nn(Math.atan2(e[6], e[5]))),
  rotateY: (e) => Yl(nn(Math.atan2(-e[2], e[0]))),
  rotateZ: sd,
  rotate: sd,
  skewX: (e) => nn(Math.atan(e[4])),
  skewY: (e) => nn(Math.atan(e[1])),
  skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2
};
function Ll(e) {
  return e.includes("scale") ? 1 : 0;
}
function Sl(e, t) {
  if (!e || e === "none")
    return Ll(t);
  const n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let r, s;
  if (n)
    r = By, s = n;
  else {
    const a = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    r = Vy, s = a;
  }
  if (!s)
    return Ll(t);
  const i = r[t], o = s[1].split(",").map(Wy);
  return typeof i == "function" ? i(o) : o[i];
}
const zy = (e, t) => {
  const { transform: n = "none" } = getComputedStyle(e);
  return Sl(n, t);
};
function Wy(e) {
  return parseFloat(e.trim());
}
const On = [
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
], Nn = new Set(On), ld = (e) => e === Rn || e === oe, Uy = /* @__PURE__ */ new Set(["x", "y", "z"]), Ky = On.filter((e) => !Uy.has(e));
function Gy(e) {
  const t = [];
  return Ky.forEach((n) => {
    const r = e.getValue(n);
    r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
  }), t;
}
const sn = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  // Transform
  x: (e, { transform: t }) => Sl(t, "x"),
  y: (e, { transform: t }) => Sl(t, "y")
};
sn.translateX = sn.x;
sn.translateY = sn.y;
const an = /* @__PURE__ */ new Set();
let kl = !1, Dl = !1, Tl = !1;
function rp() {
  if (Dl) {
    const e = Array.from(an).filter((r) => r.needsMeasurement), t = new Set(e.map((r) => r.element)), n = /* @__PURE__ */ new Map();
    t.forEach((r) => {
      const s = Gy(r);
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
  Dl = !1, kl = !1, an.forEach((e) => e.complete(Tl)), an.clear();
}
function op() {
  an.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (Dl = !0);
  });
}
function Jy() {
  Tl = !0, op(), rp(), Tl = !1;
}
class Cu {
  constructor(t, n, r, s, i, o = !1) {
    this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...t], this.onComplete = n, this.name = r, this.motionValue = s, this.element = i, this.isAsync = o;
  }
  scheduleResolve() {
    this.state = "scheduled", this.isAsync ? (an.add(this), kl || (kl = !0, ve.read(op), ve.resolveKeyframes(rp))) : (this.readKeyframes(), this.complete());
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
    Iy(t);
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
    this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t), an.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (an.delete(this), this.state = "pending");
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const Xy = (e) => e.startsWith("--");
function qy(e, t, n) {
  Xy(t) ? e.style.setProperty(t, n) : e.style[t] = n;
}
const Zy = /* @__PURE__ */ Mu(() => window.ScrollTimeline !== void 0), Qy = {};
function eM(e, t) {
  const n = /* @__PURE__ */ Mu(e);
  return () => {
    var r;
    return (r = Qy[t]) != null ? r : n();
  };
}
const sp = /* @__PURE__ */ eM(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), qn = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, ud = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ qn([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ qn([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ qn([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ qn([0.33, 1.53, 0.69, 0.99])
};
function ip(e, t) {
  if (e)
    return typeof e == "function" ? sp() ? ep(e, t) : "ease-out" : zm(e) ? qn(e) : Array.isArray(e) ? e.map((n) => ip(n, t) || ud.easeOut) : ud[e];
}
function tM(e, t, n, { delay: r = 0, duration: s = 300, repeat: i = 0, repeatType: o = "loop", ease: a = "easeOut", times: l } = {}, u = void 0) {
  const c = {
    [t]: n
  };
  l && (c.offset = l);
  const d = ip(a, s);
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
function ap(e) {
  return typeof e == "function" && "applyToOptions" in e;
}
function nM({ type: e, ...t }) {
  var n, r;
  return ap(e) && sp() ? e.applyToOptions(t) : ((n = t.duration) != null || (t.duration = 300), (r = t.ease) != null || (t.ease = "easeOut"), t);
}
class rM extends Au {
  constructor(t) {
    if (super(), this.finishedTime = null, this.isStopped = !1, !t)
      return;
    const { element: n, name: r, keyframes: s, pseudoElement: i, allowFlatten: o = !1, finalKeyframe: a, onComplete: l } = t;
    this.isPseudoElement = !!i, this.allowFlatten = o, this.options = t, kt(typeof t.type != "string", `Mini animate() doesn't support "type" as a string.`, "mini-spring");
    const u = nM(t);
    this.animation = tM(n, r, s, u, i), u.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
      if (this.finishedTime = this.time, !i) {
        const c = ju(s, this.options, a, this.speed);
        this.updateMotionValue ? this.updateMotionValue(c) : qy(n, r, c), this.animation.cancel();
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
    return /* @__PURE__ */ nt(Number(t));
  }
  get iterationDuration() {
    const { delay: t = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ nt(t);
  }
  get time() {
    return /* @__PURE__ */ nt(Number(this.animation.currentTime) || 0);
  }
  set time(t) {
    this.finishedTime = null, this.animation.currentTime = /* @__PURE__ */ ct(t);
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
    return this.allowFlatten && ((r = this.animation.effect) == null || r.updateTiming({ easing: "linear" })), this.animation.onfinish = null, t && Zy() ? (this.animation.timeline = t, rt) : n(this);
  }
}
const lp = {
  anticipate: Fm,
  backInOut: Nm,
  circInOut: Vm
};
function oM(e) {
  return e in lp;
}
function sM(e) {
  typeof e.ease == "string" && oM(e.ease) && (e.ease = lp[e.ease]);
}
const cd = 10;
class iM extends rM {
  constructor(t) {
    sM(t), np(t), super(t), t.startTime && (this.startTime = t.startTime), this.options = t;
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
    const a = new Pu({
      ...o,
      autoplay: !1
    }), l = /* @__PURE__ */ ct((u = this.finishedTime) != null ? u : this.time);
    n.setWithVelocity(a.sample(l - cd).value, a.sample(l).value, cd), a.stop();
  }
}
const dd = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && // It's animatable if we have a string
(Bt.test(e) || e === "0") && // And it contains numbers and/or colors
!e.startsWith("url("));
function aM(e) {
  const t = e[0];
  if (e.length === 1)
    return !0;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t)
      return !0;
}
function lM(e, t, n, r) {
  const s = e[0];
  if (s === null)
    return !1;
  if (t === "display" || t === "visibility")
    return !0;
  const i = e[e.length - 1], o = dd(s, t), a = dd(i, t);
  return Hn(o === a, `You are trying to animate ${t} from "${s}" to "${i}". "${o ? i : s}" is not an animatable value.`, "value-not-animatable"), !o || !a ? !1 : aM(e) || (n === "spring" || ap(n)) && r;
}
function El(e) {
  e.duration = 0, e.type = "keyframes";
}
const uM = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Could be re-enabled now we have support for linear() easing
  // "background-color"
]), cM = /* @__PURE__ */ Mu(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function dM(e) {
  var c;
  const { motionValue: t, name: n, repeatDelay: r, repeatType: s, damping: i, type: o } = e;
  if (!(((c = t == null ? void 0 : t.owner) == null ? void 0 : c.current) instanceof HTMLElement))
    return !1;
  const { onUpdate: l, transformTemplate: u } = t.owner.getProps();
  return cM() && n && uM.has(n) && (n !== "transform" || !u) && /**
   * If we're outputting values to onUpdate then we can't use WAAPI as there's
   * no way to read the value from WAAPI every frame.
   */
  !l && !r && s !== "mirror" && i !== 0 && o !== "inertia";
}
const fM = 40;
class mM extends Au {
  constructor({ autoplay: t = !0, delay: n = 0, type: r = "keyframes", repeat: s = 0, repeatDelay: i = 0, repeatType: o = "loop", keyframes: a, name: l, motionValue: u, element: c, ...d }) {
    var _;
    super(), this.stop = () => {
      var p, v;
      this._animation && (this._animation.stop(), (p = this.stopTimeline) == null || p.call(this)), (v = this.keyframeResolver) == null || v.cancel();
    }, this.createdAt = Ue.now();
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
    }, m = (c == null ? void 0 : c.KeyframeResolver) || Cu;
    this.keyframeResolver = new m(a, (p, v, h) => this.onKeyframesResolved(p, v, f, !h), l, u, c), (_ = this.keyframeResolver) == null || _.scheduleResolve();
  }
  onKeyframesResolved(t, n, r, s) {
    this.keyframeResolver = void 0;
    const { name: i, type: o, velocity: a, delay: l, isHandoff: u, onUpdate: c } = r;
    this.resolvedAt = Ue.now(), lM(t, i, o, a) || ((Dt.instantAnimations || !l) && (c == null || c(ju(t, r, n))), t[0] = t[t.length - 1], El(r), r.repeat = 0);
    const f = {
      startTime: s ? this.resolvedAt ? this.resolvedAt - this.createdAt > fM ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
      finalKeyframe: n,
      ...r,
      keyframes: t
    }, m = !u && dM(f) ? new iM({
      ...f,
      element: f.motionValue.owner.current
    }) : new Pu(f);
    m.finished.then(() => this.notifyFinished()).catch(rt), this.pendingTimeline && (this.stopTimeline = m.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = m;
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
    return this._animation || ((t = this.keyframeResolver) == null || t.resume(), Jy()), this._animation;
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
const pM = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function _M(e) {
  const t = pM.exec(e);
  if (!t)
    return [,];
  const [, n, r, s] = t;
  return [`--${n != null ? n : r}`, s];
}
const hM = 4;
function up(e, t, n = 1) {
  kt(n <= hM, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
  const [r, s] = _M(e);
  if (!r)
    return;
  const i = window.getComputedStyle(t).getPropertyValue(r);
  if (i) {
    const o = i.trim();
    return jm(o) ? parseFloat(o) : o;
  }
  return Su(s) ? up(s, t, n + 1) : s;
}
function $u(e, t) {
  var n, r;
  return (r = (n = e == null ? void 0 : e[t]) != null ? n : e == null ? void 0 : e.default) != null ? r : e;
}
const cp = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...On
]), vM = {
  test: (e) => e === "auto",
  parse: (e) => e
}, dp = (e) => (t) => t.test(e), fp = [Rn, oe, _t, Ht, ay, iy, vM], fd = (e) => fp.find(dp(e));
function gM(e) {
  return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || Pm(e) : !0;
}
const yM = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function MM(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [r] = n.match(ku) || [];
  if (!r)
    return e;
  const s = n.replace(r, "");
  let i = yM.has(t) ? 1 : 0;
  return r !== n && (i *= 100), t + "(" + i + s + ")";
}
const bM = /\b([a-z-]*)\(.*?\)/gu, jl = {
  ...Bt,
  getAnimatableNone: (e) => {
    const t = e.match(bM);
    return t ? t.map(MM).join(" ") : e;
  }
}, md = {
  ...Rn,
  transform: Math.round
}, xM = {
  rotate: Ht,
  rotateX: Ht,
  rotateY: Ht,
  rotateZ: Ht,
  scale: Ir,
  scaleX: Ir,
  scaleY: Ir,
  scaleZ: Ir,
  skew: Ht,
  skewX: Ht,
  skewY: Ht,
  distance: oe,
  translateX: oe,
  translateY: oe,
  translateZ: oe,
  x: oe,
  y: oe,
  z: oe,
  perspective: oe,
  transformPerspective: oe,
  opacity: dr,
  originX: ed,
  originY: ed,
  originZ: oe
}, Hu = {
  // Border props
  borderWidth: oe,
  borderTopWidth: oe,
  borderRightWidth: oe,
  borderBottomWidth: oe,
  borderLeftWidth: oe,
  borderRadius: oe,
  radius: oe,
  borderTopLeftRadius: oe,
  borderTopRightRadius: oe,
  borderBottomRightRadius: oe,
  borderBottomLeftRadius: oe,
  // Positioning props
  width: oe,
  maxWidth: oe,
  height: oe,
  maxHeight: oe,
  top: oe,
  right: oe,
  bottom: oe,
  left: oe,
  // Spacing props
  padding: oe,
  paddingTop: oe,
  paddingRight: oe,
  paddingBottom: oe,
  paddingLeft: oe,
  margin: oe,
  marginTop: oe,
  marginRight: oe,
  marginBottom: oe,
  marginLeft: oe,
  // Misc
  backgroundPositionX: oe,
  backgroundPositionY: oe,
  ...xM,
  zIndex: md,
  // SVG
  fillOpacity: dr,
  strokeOpacity: dr,
  numOctaves: md
}, wM = {
  ...Hu,
  // Color props
  color: Le,
  backgroundColor: Le,
  outlineColor: Le,
  fill: Le,
  stroke: Le,
  // Border props
  borderColor: Le,
  borderTopColor: Le,
  borderRightColor: Le,
  borderBottomColor: Le,
  borderLeftColor: Le,
  filter: jl,
  WebkitFilter: jl
}, mp = (e) => wM[e];
function pp(e, t) {
  let n = mp(e);
  return n !== jl && (n = Bt), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
const YM = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function LM(e, t, n) {
  let r = 0, s;
  for (; r < e.length && !s; ) {
    const i = e[r];
    typeof i == "string" && !YM.has(i) && fr(i).values.length && (s = e[r]), r++;
  }
  if (s && n)
    for (const i of t)
      e[i] = pp(n, s);
}
class SM extends Cu {
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
      if (typeof u == "string" && (u = u.trim(), Su(u))) {
        const c = up(u, n.current);
        c !== void 0 && (t[l] = c), l === t.length - 1 && (this.finalKeyframe = u);
      }
    }
    if (this.resolveNoneKeyframes(), !cp.has(r) || t.length !== 2)
      return;
    const [s, i] = t, o = fd(s), a = fd(i);
    if (o !== a)
      if (ld(o) && ld(a))
        for (let l = 0; l < t.length; l++) {
          const u = t[l];
          typeof u == "string" && (t[l] = parseFloat(u));
        }
      else sn[r] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this, r = [];
    for (let s = 0; s < t.length; s++)
      (t[s] === null || gM(t[s])) && r.push(s);
    r.length && LM(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current)
      return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = sn[r](t.measureViewportBox(), window.getComputedStyle(t.current)), n[0] = this.measuredOrigin;
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
    r[i] = sn[n](t.measureViewportBox(), window.getComputedStyle(t.current)), o !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = o), (a = this.removedTransforms) != null && a.length && this.removedTransforms.forEach(([l, u]) => {
      t.getValue(l).set(u);
    }), this.resolveNoneKeyframes();
  }
}
function kM(e, t, n) {
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
const _p = (e, t) => t && typeof e == "number" ? t.transform(e) : e;
function hp(e) {
  return Am(e) && "offsetHeight" in e;
}
const pd = 30, DM = (e) => !isNaN(parseFloat(e));
class TM {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   */
  constructor(t, n = {}) {
    this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (r) => {
      var i;
      const s = Ue.now();
      if (this.updatedAt !== s && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(r), this.current !== this.prev && ((i = this.events.change) == null || i.notify(this.current), this.dependents))
        for (const o of this.dependents)
          o.dirty();
    }, this.hasAnimated = !1, this.setCurrent(t), this.owner = n.owner;
  }
  setCurrent(t) {
    this.current = t, this.updatedAt = Ue.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = DM(this.current));
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
    return process.env.NODE_ENV !== "production" && xu(!1, 'value.onChange(callback) is deprecated. Switch to value.on("change", callback).'), this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new bu());
    const r = this.events[t].add(n);
    return t === "change" ? () => {
      r(), ve.read(() => {
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
    const t = Ue.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > pd)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, pd);
    return Cm(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
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
function En(e, t) {
  return new TM(e, t);
}
const { schedule: Ru } = /* @__PURE__ */ Wm(queueMicrotask, !1), at = {
  x: !1,
  y: !1
};
function vp() {
  return at.x || at.y;
}
function EM(e) {
  return e === "x" || e === "y" ? at[e] ? null : (at[e] = !0, () => {
    at[e] = !1;
  }) : at.x || at.y ? null : (at.x = at.y = !0, () => {
    at.x = at.y = !1;
  });
}
function gp(e, t) {
  const n = kM(e), r = new AbortController(), s = {
    passive: !0,
    ...t,
    signal: r.signal
  };
  return [n, s, () => r.abort()];
}
function _d(e) {
  return !(e.pointerType === "touch" || vp());
}
function jM(e, t, n = {}) {
  const [r, s, i] = gp(e, n), o = (a) => {
    if (!_d(a))
      return;
    const { target: l } = a, u = t(l, a);
    if (typeof u != "function" || !l)
      return;
    const c = (d) => {
      _d(d) && (u(d), l.removeEventListener("pointerleave", c));
    };
    l.addEventListener("pointerleave", c, s);
  };
  return r.forEach((a) => {
    a.addEventListener("pointerenter", o, s);
  }), i;
}
const yp = (e, t) => t ? e === t ? !0 : yp(e, t.parentElement) : !1, Ou = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1, AM = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function PM(e) {
  return AM.has(e.tagName) || e.tabIndex !== -1;
}
const oo = /* @__PURE__ */ new WeakSet();
function hd(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function Ra(e, t) {
  e.dispatchEvent(new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 }));
}
const CM = (e, t) => {
  const n = e.currentTarget;
  if (!n)
    return;
  const r = hd(() => {
    if (oo.has(n))
      return;
    Ra(n, "down");
    const s = hd(() => {
      Ra(n, "up");
    }), i = () => Ra(n, "cancel");
    n.addEventListener("keyup", s, t), n.addEventListener("blur", i, t);
  });
  n.addEventListener("keydown", r, t), n.addEventListener("blur", () => n.removeEventListener("keydown", r), t);
};
function vd(e) {
  return Ou(e) && !vp();
}
function $M(e, t, n = {}) {
  const [r, s, i] = gp(e, n), o = (a) => {
    const l = a.currentTarget;
    if (!vd(a))
      return;
    oo.add(l);
    const u = t(l, a), c = (m, _) => {
      window.removeEventListener("pointerup", d), window.removeEventListener("pointercancel", f), oo.has(l) && oo.delete(l), vd(m) && typeof u == "function" && u(m, { success: _ });
    }, d = (m) => {
      c(m, l === window || l === document || n.useGlobalTarget || yp(l, m.target));
    }, f = (m) => {
      c(m, !1);
    };
    window.addEventListener("pointerup", d, s), window.addEventListener("pointercancel", f, s);
  };
  return r.forEach((a) => {
    (n.useGlobalTarget ? window : a).addEventListener("pointerdown", o, s), hp(a) && (a.addEventListener("focus", (u) => CM(u, s)), !PM(a) && !a.hasAttribute("tabindex") && (a.tabIndex = 0));
  }), i;
}
function Mp(e) {
  return Am(e) && "ownerSVGElement" in e;
}
function HM(e) {
  return Mp(e) && e.tagName === "svg";
}
const He = (e) => !!(e && e.getVelocity), RM = [...fp, Le, Bt], OM = (e) => RM.find(dp(e)), Nu = pe({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
});
function gd(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function NM(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((s) => {
      const i = gd(s, t);
      return !n && typeof i == "function" && (n = !0), i;
    });
    if (n)
      return () => {
        for (let s = 0; s < r.length; s++) {
          const i = r[s];
          typeof i == "function" ? i() : gd(e[s], null);
        }
      };
  };
}
function FM(...e) {
  return M.useCallback(NM(...e), e);
}
class IM extends M.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const r = n.offsetParent, s = hp(r) && r.offsetWidth || 0, i = this.props.sizeRef.current;
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
function VM({ children: e, isPresent: t, anchorX: n, root: r }) {
  const s = Ne(), i = X(null), o = X({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    right: 0
  }), { nonce: a } = ee(Nu), l = FM(i, e == null ? void 0 : e.ref);
  return Lm(() => {
    const { width: u, height: c, top: d, left: f, right: m } = o.current;
    if (t || !i.current || !u || !c)
      return;
    const _ = n === "left" ? `left: ${f}` : `right: ${m}`;
    i.current.dataset.motionPopId = s;
    const p = document.createElement("style");
    a && (p.nonce = a);
    const v = r != null ? r : document.head;
    return v.appendChild(p), p.sheet && p.sheet.insertRule(`
          [data-motion-pop-id="${s}"] {
            position: absolute !important;
            width: ${u}px !important;
            height: ${c}px !important;
            ${_}px !important;
            top: ${d}px !important;
          }
        `), () => {
      v.contains(p) && v.removeChild(p);
    };
  }, [t]), g.jsx(IM, { isPresent: t, childRef: i, sizeRef: o, children: M.cloneElement(e, { ref: l }) });
}
const BM = ({ children: e, initial: t, isPresent: n, onExitComplete: r, custom: s, presenceAffectsLayout: i, mode: o, anchorX: a, root: l }) => {
  const u = hu(zM), c = Ne();
  let d = !0, f = me(() => (d = !1, {
    id: c,
    initial: t,
    isPresent: n,
    custom: s,
    onExitComplete: (m) => {
      u.set(m, !0);
      for (const _ of u.values())
        if (!_)
          return;
      r && r();
    },
    register: (m) => (u.set(m, !1), () => u.delete(m))
  }), [n, u, r]);
  return i && d && (f = { ...f }), me(() => {
    u.forEach((m, _) => u.set(_, !1));
  }, [n]), M.useEffect(() => {
    !n && !u.size && r && r();
  }, [n]), o === "popLayout" && (e = g.jsx(VM, { isPresent: n, anchorX: a, root: l, children: e })), g.jsx(sa.Provider, { value: f, children: e });
};
function zM() {
  return /* @__PURE__ */ new Map();
}
function bp(e = !0) {
  const t = ee(sa);
  if (t === null)
    return [!0, null];
  const { isPresent: n, onExitComplete: r, register: s } = t, i = Ne();
  se(() => {
    if (e)
      return s(i);
  }, [e]);
  const o = q(() => e && r && r(i), [i, r, e]);
  return !n && r ? [!1, o] : [!0];
}
const Vr = (e) => e.key || "";
function yd(e) {
  const t = [];
  return $g.forEach(e, (n) => {
    ra(n) && t.push(n);
  }), t;
}
const Fu = ({ children: e, custom: t, initial: n = !0, onExitComplete: r, presenceAffectsLayout: s = !0, mode: i = "sync", propagate: o = !1, anchorX: a = "left", root: l }) => {
  const [u, c] = bp(o), d = me(() => yd(e), [e]), f = o && !u ? [] : d.map(Vr), m = X(!0), _ = X(d), p = hu(() => /* @__PURE__ */ new Map()), [v, h] = ne(d), [y, b] = ne(d);
  Em(() => {
    m.current = !1, _.current = d;
    for (let k = 0; k < y.length; k++) {
      const j = Vr(y[k]);
      f.includes(j) ? p.delete(j) : p.get(j) !== !0 && p.set(j, !1);
    }
  }, [y, f.length, f.join("-")]);
  const x = [];
  if (d !== v) {
    let k = [...d];
    for (let j = 0; j < y.length; j++) {
      const L = y[j], F = Vr(L);
      f.includes(F) || (k.splice(j, 0, L), x.push(L));
    }
    return i === "wait" && x.length && (k = x), b(yd(k)), h(d), null;
  }
  process.env.NODE_ENV !== "production" && i === "wait" && y.length > 1 && console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`);
  const { forceRender: w } = ee(_u);
  return g.jsx(g.Fragment, { children: y.map((k) => {
    const j = Vr(k), L = o && !u ? !1 : d === y || f.includes(j), F = () => {
      if (p.has(j))
        p.set(j, !0);
      else
        return;
      let S = !0;
      p.forEach(($) => {
        $ || (S = !1);
      }), S && (w == null || w(), b(_.current), o && (c == null || c()), r && r());
    };
    return g.jsx(BM, { isPresent: L, initial: !m.current || n ? void 0 : !1, custom: t, presenceAffectsLayout: s, mode: i, root: l, onExitComplete: L ? void 0 : F, anchorX: a, children: k }, j);
  }) });
}, xp = pe({ strict: !1 }), Md = {
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
}, jn = {};
for (const e in Md)
  jn[e] = {
    isEnabled: (t) => Md[e].some((n) => !!t[n])
  };
function WM(e) {
  for (const t in e)
    jn[t] = {
      ...jn[t],
      ...e[t]
    };
}
const UM = /* @__PURE__ */ new Set([
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
function vo(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || UM.has(e);
}
let wp = (e) => !vo(e);
function KM(e) {
  typeof e == "function" && (wp = (t) => t.startsWith("on") ? !vo(t) : e(t));
}
try {
  KM(require("@emotion/is-prop-valid").default);
} catch {
}
function GM(e, t, n) {
  const r = {};
  for (const s in e)
    s === "values" && typeof e.values == "object" || (wp(s) || n === !0 && vo(s) || !t && !vo(s) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && s.startsWith("onDrag")) && (r[s] = e[s]);
  return r;
}
const ia = /* @__PURE__ */ pe({});
function aa(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
function mr(e) {
  return typeof e == "string" || Array.isArray(e);
}
const Iu = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], Vu = ["initial", ...Iu];
function la(e) {
  return aa(e.animate) || Vu.some((t) => mr(e[t]));
}
function Yp(e) {
  return !!(la(e) || e.variants);
}
function JM(e, t) {
  if (la(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || mr(n) ? n : void 0,
      animate: mr(r) ? r : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function XM(e) {
  const { initial: t, animate: n } = JM(e, ee(ia));
  return me(() => ({ initial: t, animate: n }), [bd(t), bd(n)]);
}
function bd(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const pr = {};
function qM(e) {
  for (const t in e)
    pr[t] = e[t], Lu(t) && (pr[t].isCSSVariable = !0);
}
function Lp(e, { layout: t, layoutId: n }) {
  return Nn.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!pr[e] || e === "opacity");
}
const ZM = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, QM = On.length;
function eb(e, t, n) {
  let r = "", s = !0;
  for (let i = 0; i < QM; i++) {
    const o = On[i], a = e[o];
    if (a === void 0)
      continue;
    let l = !0;
    if (typeof a == "number" ? l = a === (o.startsWith("scale") ? 1 : 0) : l = parseFloat(a) === 0, !l || n) {
      const u = _p(a, Hu[o]);
      if (!l) {
        s = !1;
        const c = ZM[o] || o;
        r += `${c}(${u}) `;
      }
      n && (t[o] = u);
    }
  }
  return r = r.trim(), n ? r = n(t, s ? "" : r) : s && (r = "none"), r;
}
function Bu(e, t, n) {
  const { style: r, vars: s, transformOrigin: i } = e;
  let o = !1, a = !1;
  for (const l in t) {
    const u = t[l];
    if (Nn.has(l)) {
      o = !0;
      continue;
    } else if (Lu(l)) {
      s[l] = u;
      continue;
    } else {
      const c = _p(u, Hu[l]);
      l.startsWith("origin") ? (a = !0, i[l] = c) : r[l] = c;
    }
  }
  if (t.transform || (o || n ? r.transform = eb(t, e.transform, n) : r.transform && (r.transform = "none")), a) {
    const { originX: l = "50%", originY: u = "50%", originZ: c = 0 } = i;
    r.transformOrigin = `${l} ${u} ${c}`;
  }
}
const zu = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function Sp(e, t, n) {
  for (const r in t)
    !He(t[r]) && !Lp(r, n) && (e[r] = t[r]);
}
function tb({ transformTemplate: e }, t) {
  return me(() => {
    const n = zu();
    return Bu(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function nb(e, t) {
  const n = e.style || {}, r = {};
  return Sp(r, n, e), Object.assign(r, tb(e, t)), r;
}
function rb(e, t) {
  const n = {}, r = nb(e, t);
  return e.drag && e.dragListener !== !1 && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = r, n;
}
const ob = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, sb = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function ib(e, t, n = 1, r = 0, s = !0) {
  e.pathLength = 1;
  const i = s ? ob : sb;
  e[i.offset] = oe.transform(-r);
  const o = oe.transform(t), a = oe.transform(n);
  e[i.array] = `${o} ${a}`;
}
function kp(e, {
  attrX: t,
  attrY: n,
  attrScale: r,
  pathLength: s,
  pathSpacing: i = 1,
  pathOffset: o = 0,
  // This is object creation, which we try to avoid per-frame.
  ...a
}, l, u, c) {
  var m, _;
  if (Bu(e, a, u), l) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: d, style: f } = e;
  d.transform && (f.transform = d.transform, delete d.transform), (f.transform || d.transformOrigin) && (f.transformOrigin = (m = d.transformOrigin) != null ? m : "50% 50%", delete d.transformOrigin), f.transform && (f.transformBox = (_ = c == null ? void 0 : c.transformBox) != null ? _ : "fill-box", delete d.transformBox), t !== void 0 && (d.x = t), n !== void 0 && (d.y = n), r !== void 0 && (d.scale = r), s !== void 0 && ib(d, s, i, o, !1);
}
const Dp = () => ({
  ...zu(),
  attrs: {}
}), Tp = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function ab(e, t, n, r) {
  const s = me(() => {
    const i = Dp();
    return kp(i, t, Tp(r), e.transformTemplate, e.style), {
      ...i.attrs,
      style: { ...i.style }
    };
  }, [t]);
  if (e.style) {
    const i = {};
    Sp(i, e.style, e), s.style = { ...i, ...s.style };
  }
  return s;
}
const lb = [
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
function Wu(e) {
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
      !!(lb.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(e))
    )
  );
}
function ub(e, t, n, { latestValues: r }, s, i = !1) {
  const a = (Wu(e) ? ab : rb)(t, r, s, e), l = GM(t, typeof e == "string", i), u = e !== je ? { ...l, ...a, ref: n } : {}, { children: c } = t, d = me(() => He(c) ? c.get() : c, [c]);
  return Sm(e, {
    ...u,
    children: d
  });
}
function xd(e) {
  const t = [{}, {}];
  return e == null || e.values.forEach((n, r) => {
    t[0][r] = n.get(), t[1][r] = n.getVelocity();
  }), t;
}
function Uu(e, t, n, r) {
  if (typeof t == "function") {
    const [s, i] = xd(r);
    t = t(n !== void 0 ? n : e.custom, s, i);
  }
  if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
    const [s, i] = xd(r);
    t = t(n !== void 0 ? n : e.custom, s, i);
  }
  return t;
}
function so(e) {
  return He(e) ? e.get() : e;
}
function cb({ scrapeMotionValuesFromProps: e, createRenderState: t }, n, r, s) {
  return {
    latestValues: db(n, r, s, e),
    renderState: t()
  };
}
function db(e, t, n, r) {
  const s = {}, i = r(e, {});
  for (const f in i)
    s[f] = so(i[f]);
  let { initial: o, animate: a } = e;
  const l = la(e), u = Yp(e);
  t && u && !l && e.inherit !== !1 && (o === void 0 && (o = t.initial), a === void 0 && (a = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || o === !1;
  const d = c ? a : o;
  if (d && typeof d != "boolean" && !aa(d)) {
    const f = Array.isArray(d) ? d : [d];
    for (let m = 0; m < f.length; m++) {
      const _ = Uu(e, f[m]);
      if (_) {
        const { transitionEnd: p, transition: v, ...h } = _;
        for (const y in h) {
          let b = h[y];
          if (Array.isArray(b)) {
            const x = c ? b.length - 1 : 0;
            b = b[x];
          }
          b !== null && (s[y] = b);
        }
        for (const y in p)
          s[y] = p[y];
      }
    }
  }
  return s;
}
const Ep = (e) => (t, n) => {
  const r = ee(ia), s = ee(sa), i = () => cb(e, t, r, s);
  return n ? i() : hu(i);
};
function Ku(e, t, n) {
  var i;
  const { style: r } = e, s = {};
  for (const o in r)
    (He(r[o]) || t.style && He(t.style[o]) || Lp(o, e) || ((i = n == null ? void 0 : n.getValue(o)) == null ? void 0 : i.liveStyle) !== void 0) && (s[o] = r[o]);
  return s;
}
const fb = /* @__PURE__ */ Ep({
  scrapeMotionValuesFromProps: Ku,
  createRenderState: zu
});
function jp(e, t, n) {
  const r = Ku(e, t, n);
  for (const s in e)
    if (He(e[s]) || He(t[s])) {
      const i = On.indexOf(s) !== -1 ? "attr" + s.charAt(0).toUpperCase() + s.substring(1) : s;
      r[i] = e[s];
    }
  return r;
}
const mb = /* @__PURE__ */ Ep({
  scrapeMotionValuesFromProps: jp,
  createRenderState: Dp
}), pb = Symbol.for("motionComponentSymbol");
function Mn(e) {
  return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function _b(e, t, n) {
  return q(
    (r) => {
      r && e.onMount && e.onMount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : Mn(n) && (n.current = r));
    },
    /**
     * Include externalRef in dependencies to ensure the callback updates
     * when the ref changes, allowing proper ref forwarding.
     */
    [t]
  );
}
const Gu = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), hb = "framerAppearId", Ap = "data-" + Gu(hb), Pp = pe({});
function vb(e, t, n, r, s) {
  var p, v;
  const { visualElement: i } = ee(ia), o = ee(xp), a = ee(sa), l = ee(Nu).reducedMotion, u = X(null);
  r = r || o.renderer, !u.current && r && (u.current = r(e, {
    visualState: t,
    parent: i,
    props: n,
    presenceContext: a,
    blockInitialAnimation: a ? a.initial === !1 : !1,
    reducedMotionConfig: l
  }));
  const c = u.current, d = ee(Pp);
  c && !c.projection && s && (c.type === "html" || c.type === "svg") && gb(u.current, n, s, d);
  const f = X(!1);
  Lm(() => {
    c && f.current && c.update(n, a);
  });
  const m = n[Ap], _ = X(!!m && !((p = window.MotionHandoffIsComplete) != null && p.call(window, m)) && ((v = window.MotionHasOptimisedAnimation) == null ? void 0 : v.call(window, m)));
  return Em(() => {
    c && (f.current = !0, window.MotionIsMounted = !0, c.updateFeatures(), c.scheduleRenderMicrotask(), _.current && c.animationState && c.animationState.animateChanges());
  }), se(() => {
    c && (!_.current && c.animationState && c.animationState.animateChanges(), _.current && (queueMicrotask(() => {
      var h;
      (h = window.MotionHandoffMarkAsComplete) == null || h.call(window, m);
    }), _.current = !1), c.enteringChildren = void 0);
  }), c;
}
function gb(e, t, n, r) {
  const { layoutId: s, layout: i, drag: o, dragConstraints: a, layoutScroll: l, layoutRoot: u, layoutCrossfade: c } = t;
  e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : Cp(e.parent)), e.projection.setOptions({
    layoutId: s,
    layout: i,
    alwaysMeasureLayout: !!o || a && Mn(a),
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
function Cp(e) {
  if (e)
    return e.options.allowProjection !== !1 ? e.projection : Cp(e.parent);
}
function Oa(e, { forwardMotionProps: t = !1 } = {}, n, r) {
  var a, l;
  n && WM(n);
  const s = Wu(e) ? mb : fb;
  function i(u, c) {
    let d;
    const f = {
      ...ee(Nu),
      ...u,
      layoutId: yb(u)
    }, { isStatic: m } = f, _ = XM(u), p = s(u, m);
    if (!m && vu) {
      Mb(f, n);
      const v = bb(f);
      d = v.MeasureLayout, _.visualElement = vb(e, p, f, r, v.ProjectionNode);
    }
    return g.jsxs(ia.Provider, { value: _, children: [d && _.visualElement ? g.jsx(d, { visualElement: _.visualElement, ...f }) : null, ub(e, u, _b(p, _.visualElement, c), p, m, t)] });
  }
  i.displayName = `motion.${typeof e == "string" ? e : `create(${(l = (a = e.displayName) != null ? a : e.name) != null ? l : ""})`}`;
  const o = oa(i);
  return o[pb] = e, o;
}
function yb({ layoutId: e }) {
  const t = ee(_u).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function Mb(e, t) {
  const n = ee(xp).strict;
  if (process.env.NODE_ENV !== "production" && t && n) {
    const r = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
    e.ignoreStrict ? Hn(!1, r, "lazy-strict-mode") : kt(!1, r, "lazy-strict-mode");
  }
}
function bb(e) {
  const { drag: t, layout: n } = jn;
  if (!t && !n)
    return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout: t != null && t.isEnabled(e) || n != null && n.isEnabled(e) ? r.MeasureLayout : void 0,
    ProjectionNode: r.ProjectionNode
  };
}
function xb(e, t) {
  if (typeof Proxy == "undefined")
    return Oa;
  const n = /* @__PURE__ */ new Map(), r = (i, o) => Oa(i, o, e, t), s = (i, o) => (process.env.NODE_ENV !== "production" && xu(!1, "motion() is deprecated. Use motion.create() instead."), r(i, o));
  return new Proxy(s, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (i, o) => o === "create" ? r : (n.has(o) || n.set(o, Oa(o, void 0, e, t)), n.get(o))
  });
}
function $p({ top: e, left: t, right: n, bottom: r }) {
  return {
    x: { min: t, max: n },
    y: { min: e, max: r }
  };
}
function wb({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function Yb(e, t) {
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
function Na(e) {
  return e === void 0 || e === 1;
}
function Al({ scale: e, scaleX: t, scaleY: n }) {
  return !Na(e) || !Na(t) || !Na(n);
}
function Qt(e) {
  return Al(e) || Hp(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function Hp(e) {
  return wd(e.x) || wd(e.y);
}
function wd(e) {
  return e && e !== "0%";
}
function go(e, t, n) {
  const r = e - n, s = t * r;
  return n + s;
}
function Yd(e, t, n, r, s) {
  return s !== void 0 && (e = go(e, s, r)), go(e, n, r) + t;
}
function Pl(e, t = 0, n = 1, r, s) {
  e.min = Yd(e.min, t, n, r, s), e.max = Yd(e.max, t, n, r, s);
}
function Rp(e, { x: t, y: n }) {
  Pl(e.x, t.translate, t.scale, t.originPoint), Pl(e.y, n.translate, n.scale, n.originPoint);
}
const Ld = 0.999999999999, Sd = 1.0000000000001;
function Lb(e, t, n, r = !1) {
  const s = n.length;
  if (!s)
    return;
  t.x = t.y = 1;
  let i, o;
  for (let a = 0; a < s; a++) {
    i = n[a], o = i.projectionDelta;
    const { visualElement: l } = i.options;
    l && l.props.style && l.props.style.display === "contents" || (r && i.options.layoutScroll && i.scroll && i !== i.root && xn(e, {
      x: -i.scroll.offset.x,
      y: -i.scroll.offset.y
    }), o && (t.x *= o.x.scale, t.y *= o.y.scale, Rp(e, o)), r && Qt(i.latestValues) && xn(e, i.latestValues));
  }
  t.x < Sd && t.x > Ld && (t.x = 1), t.y < Sd && t.y > Ld && (t.y = 1);
}
function bn(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function kd(e, t, n, r, s = 0.5) {
  const i = Me(e.min, e.max, s);
  Pl(e, t, n, i, r);
}
function xn(e, t) {
  kd(e.x, t.x, t.scaleX, t.scale, t.originX), kd(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function Op(e, t) {
  return $p(Yb(e.getBoundingClientRect(), t));
}
function Sb(e, t, n) {
  const r = Op(e, n), { scroll: s } = t;
  return s && (bn(r.x, s.offset.x), bn(r.y, s.offset.y)), r;
}
const Dd = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), wn = () => ({
  x: Dd(),
  y: Dd()
}), Td = () => ({ min: 0, max: 0 }), Ye = () => ({
  x: Td(),
  y: Td()
}), Cl = { current: null }, Np = { current: !1 };
function kb() {
  if (Np.current = !0, !!vu)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => Cl.current = e.matches;
      e.addEventListener("change", t), t();
    } else
      Cl.current = !1;
}
const Db = /* @__PURE__ */ new WeakMap();
function Tb(e, t, n) {
  for (const r in t) {
    const s = t[r], i = n[r];
    if (He(s))
      e.addValue(r, s);
    else if (He(i))
      e.addValue(r, En(s, { owner: e }));
    else if (i !== s)
      if (e.hasValue(r)) {
        const o = e.getValue(r);
        o.liveStyle === !0 ? o.jump(s) : o.hasAnimated || o.set(s);
      } else {
        const o = e.getStaticValue(r);
        e.addValue(r, En(o !== void 0 ? o : s, { owner: e }));
      }
  }
  for (const r in n)
    t[r] === void 0 && e.removeValue(r);
  return t;
}
const Ed = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
class Eb {
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
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = Cu, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const f = Ue.now();
      this.renderScheduledAt < f && (this.renderScheduledAt = f, ve.render(this.render, !1, !0));
    };
    const { latestValues: l, renderState: u } = o;
    this.latestValues = l, this.baseTarget = { ...l }, this.initialValues = n.initial ? { ...l } : {}, this.renderState = u, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = s, this.options = a, this.blockInitialAnimation = !!i, this.isControllingVariants = la(n), this.isVariantNode = Yp(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: c, ...d } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const f in d) {
      const m = d[f];
      l[f] !== void 0 && He(m) && m.set(l[f]);
    }
  }
  mount(t) {
    var n;
    this.current = t, Db.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((r, s) => this.bindToMotionValue(s, r)), Np.current || kb(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Cl.current, process.env.NODE_ENV !== "production" && xu(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected.", "reduced-motion-disabled"), (n = this.parent) == null || n.addChild(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    var t;
    this.projection && this.projection.unmount(), Vt(this.notifyUpdate), Vt(this.render), this.valueSubscriptions.forEach((n) => n()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), (t = this.parent) == null || t.removeChild(this);
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
    const r = Nn.has(t);
    r && this.onBindTransform && this.onBindTransform();
    const s = n.on("change", (o) => {
      this.latestValues[t] = o, this.props.onUpdate && ve.preRender(this.notifyUpdate), r && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender();
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
    for (t in jn) {
      const n = jn[t];
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
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Ye();
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
    for (let r = 0; r < Ed.length; r++) {
      const s = Ed[r];
      this.propEventSubscriptions[s] && (this.propEventSubscriptions[s](), delete this.propEventSubscriptions[s]);
      const i = "on" + s, o = t[i];
      o && (this.propEventSubscriptions[s] = this.on(s, o));
    }
    this.prevMotionValues = Tb(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
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
    return r === void 0 && n !== void 0 && (r = En(n === null ? void 0 : n, { owner: this }), this.addValue(t, r)), r;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(t, n) {
    var s;
    let r = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (s = this.getBaseTargetFromProps(this.props, t)) != null ? s : this.readValueFromInstance(this.current, t, this.options);
    return r != null && (typeof r == "string" && (jm(r) || Pm(r)) ? r = parseFloat(r) : !OM(r) && Bt.test(n) && (r = pp(t, n)), this.setBaseTarget(t, He(r) ? r.get() : r)), He(r) ? r.get() : r;
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
      const o = Uu(this.props, n, (i = this.presenceContext) == null ? void 0 : i.custom);
      o && (r = o[t]);
    }
    if (n && r !== void 0)
      return r;
    const s = this.getBaseTargetFromProps(this.props, t);
    return s !== void 0 && !He(s) ? s : this.initialValues[t] !== void 0 && r === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new bu()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
  scheduleRenderMicrotask() {
    Ru.render(this.render);
  }
}
class Fp extends Eb {
  constructor() {
    super(...arguments), this.KeyframeResolver = SM;
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
    He(t) && (this.childSubscription = t.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
}
function Ip(e, { style: t, vars: n }, r, s) {
  const i = e.style;
  let o;
  for (o in t)
    i[o] = t[o];
  s == null || s.applyProjectionStyles(i, r);
  for (o in n)
    i.setProperty(o, n[o]);
}
function jb(e) {
  return window.getComputedStyle(e);
}
class Ab extends Fp {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = Ip;
  }
  readValueFromInstance(t, n) {
    var r;
    if (Nn.has(n))
      return (r = this.projection) != null && r.isProjecting ? Ll(n) : zy(t, n);
    {
      const s = jb(t), i = (Lu(n) ? s.getPropertyValue(n) : s[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return Op(t, n);
  }
  build(t, n, r) {
    Bu(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Ku(t, n, r);
  }
}
const Vp = /* @__PURE__ */ new Set([
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
function Pb(e, t, n, r) {
  Ip(e, t, void 0, r);
  for (const s in t.attrs)
    e.setAttribute(Vp.has(s) ? s : Gu(s), t.attrs[s]);
}
class Cb extends Fp {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = Ye;
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (Nn.has(n)) {
      const r = mp(n);
      return r && r.default || 0;
    }
    return n = Vp.has(n) ? n : Gu(n), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return jp(t, n, r);
  }
  build(t, n, r) {
    kp(t, n, this.isSVGTag, r.transformTemplate, r.style);
  }
  renderInstance(t, n, r, s) {
    Pb(t, n, r, s);
  }
  mount(t) {
    this.isSVGTag = Tp(t.tagName), super.mount(t);
  }
}
const $b = (e, t) => Wu(e) ? new Cb(t) : new Ab(t, {
  allowProjection: e !== je
});
function Ln(e, t, n) {
  const r = e.getProps();
  return Uu(r, t, n !== void 0 ? n : r.custom, e);
}
const $l = (e) => Array.isArray(e);
function Hb(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, En(n));
}
function Rb(e) {
  return $l(e) ? e[e.length - 1] || 0 : e;
}
function Ob(e, t) {
  const n = Ln(e, t);
  let { transitionEnd: r = {}, transition: s = {}, ...i } = n || {};
  i = { ...i, ...r };
  for (const o in i) {
    const a = Rb(i[o]);
    Hb(e, o, a);
  }
}
function Nb(e) {
  return !!(He(e) && e.add);
}
function Hl(e, t) {
  const n = e.getValue("willChange");
  if (Nb(n))
    return n.add(t);
  if (!n && Dt.WillChange) {
    const r = new Dt.WillChange("auto");
    e.addValue("willChange", r), r.add(t);
  }
}
function Bp(e) {
  return e.props[Ap];
}
const Fb = (e) => e !== null;
function Ib(e, { repeat: t, repeatType: n = "loop" }, r) {
  const s = e.filter(Fb), i = t && n !== "loop" && t % 2 === 1 ? 0 : s.length - 1;
  return s[i];
}
const Vb = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, Bb = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), zb = {
  type: "keyframes",
  duration: 0.8
}, Wb = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, Ub = (e, { keyframes: t }) => t.length > 2 ? zb : Nn.has(e) ? e.startsWith("scale") ? Bb(t[1]) : Vb : Wb;
function Kb({ when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: s, repeat: i, repeatType: o, repeatDelay: a, from: l, elapsed: u, ...c }) {
  return !!Object.keys(c).length;
}
const Ju = (e, t, n, r = {}, s, i) => (o) => {
  const a = $u(r, e) || {}, l = a.delay || r.delay || 0;
  let { elapsed: u = 0 } = r;
  u = u - /* @__PURE__ */ ct(l);
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
  Kb(a) || Object.assign(c, Ub(e, c)), c.duration && (c.duration = /* @__PURE__ */ ct(c.duration)), c.repeatDelay && (c.repeatDelay = /* @__PURE__ */ ct(c.repeatDelay)), c.from !== void 0 && (c.keyframes[0] = c.from);
  let d = !1;
  if ((c.type === !1 || c.duration === 0 && !c.repeatDelay) && (El(c), c.delay === 0 && (d = !0)), (Dt.instantAnimations || Dt.skipAnimations) && (d = !0, El(c), c.delay = 0), c.allowFlatten = !a.type && !a.ease, d && !i && t.get() !== void 0) {
    const f = Ib(c.keyframes, a);
    if (f !== void 0) {
      ve.update(() => {
        c.onUpdate(f), c.onComplete();
      });
      return;
    }
  }
  return a.isSync ? new Pu(c) : new mM(c);
};
function Gb({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return t[n] = !1, r;
}
function zp(e, t, { delay: n = 0, transitionOverride: r, type: s } = {}) {
  var c;
  let { transition: i = e.getDefaultTransition(), transitionEnd: o, ...a } = t;
  r && (i = r);
  const l = [], u = s && e.animationState && e.animationState.getState()[s];
  for (const d in a) {
    const f = e.getValue(d, (c = e.latestValues[d]) != null ? c : null), m = a[d];
    if (m === void 0 || u && Gb(u, d))
      continue;
    const _ = {
      delay: n,
      ...$u(i || {}, d)
    }, p = f.get();
    if (p !== void 0 && !f.isAnimating && !Array.isArray(m) && m === p && !_.velocity)
      continue;
    let v = !1;
    if (window.MotionHandoffAnimation) {
      const y = Bp(e);
      if (y) {
        const b = window.MotionHandoffAnimation(y, d, ve);
        b !== null && (_.startTime = b, v = !0);
      }
    }
    Hl(e, d), f.start(Ju(d, f, m, e.shouldReduceMotion && cp.has(d) ? { type: !1 } : _, e, v));
    const h = f.animation;
    h && l.push(h);
  }
  return o && Promise.all(l).then(() => {
    ve.update(() => {
      o && Ob(e, o);
    });
  }), l;
}
function Wp(e, t, n, r = 0, s = 1) {
  const i = Array.from(e).sort((u, c) => u.sortNodePosition(c)).indexOf(t), o = e.size, a = (o - 1) * r;
  return typeof n == "function" ? n(i, o) : s === 1 ? i * r : a - i * r;
}
function Rl(e, t, n = {}) {
  var l;
  const r = Ln(e, t, n.type === "exit" ? (l = e.presenceContext) == null ? void 0 : l.custom : void 0);
  let { transition: s = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (s = n.transitionOverride);
  const i = r ? () => Promise.all(zp(e, r, n)) : () => Promise.resolve(), o = e.variantChildren && e.variantChildren.size ? (u = 0) => {
    const { delayChildren: c = 0, staggerChildren: d, staggerDirection: f } = s;
    return Jb(e, t, u, c, d, f, n);
  } : () => Promise.resolve(), { when: a } = s;
  if (a) {
    const [u, c] = a === "beforeChildren" ? [i, o] : [o, i];
    return u().then(() => c());
  } else
    return Promise.all([i(), o(n.delay)]);
}
function Jb(e, t, n = 0, r = 0, s = 0, i = 1, o) {
  const a = [];
  for (const l of e.variantChildren)
    l.notify("AnimationStart", t), a.push(Rl(l, t, {
      ...o,
      delay: n + (typeof r == "function" ? 0 : r) + Wp(e.variantChildren, l, r, s, i)
    }).then(() => l.notify("AnimationComplete", t)));
  return Promise.all(a);
}
function Xb(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const s = t.map((i) => Rl(e, i, n));
    r = Promise.all(s);
  } else if (typeof t == "string")
    r = Rl(e, t, n);
  else {
    const s = typeof t == "function" ? Ln(e, t, n.custom) : t;
    r = Promise.all(zp(e, s, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
function Up(e, t) {
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
const qb = Vu.length;
function Kp(e) {
  if (!e)
    return;
  if (!e.isControllingVariants) {
    const n = e.parent ? Kp(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < qb; n++) {
    const r = Vu[n], s = e.props[r];
    (mr(s) || s === !1) && (t[r] = s);
  }
  return t;
}
const Zb = [...Iu].reverse(), Qb = Iu.length;
function ex(e) {
  return (t) => Promise.all(t.map(({ animation: n, options: r }) => Xb(e, n, r)));
}
function tx(e) {
  let t = ex(e), n = jd(), r = !0;
  const s = (l) => (u, c) => {
    var f;
    const d = Ln(e, c, l === "exit" ? (f = e.presenceContext) == null ? void 0 : f.custom : void 0);
    if (d) {
      const { transition: m, transitionEnd: _, ...p } = d;
      u = { ...u, ...p, ..._ };
    }
    return u;
  };
  function i(l) {
    t = l(e);
  }
  function o(l) {
    const { props: u } = e, c = Kp(e.parent) || {}, d = [], f = /* @__PURE__ */ new Set();
    let m = {}, _ = 1 / 0;
    for (let v = 0; v < Qb; v++) {
      const h = Zb[v], y = n[h], b = u[h] !== void 0 ? u[h] : c[h], x = mr(b), w = h === l ? y.isActive : null;
      w === !1 && (_ = v);
      let k = b === c[h] && b !== u[h] && x;
      if (k && r && e.manuallyAnimateOnMount && (k = !1), y.protectedKeys = { ...m }, // If it isn't active and hasn't *just* been set as inactive
      !y.isActive && w === null || // If we didn't and don't have any defined prop for this animation type
      !b && !y.prevProp || // Or if the prop doesn't define an animation
      aa(b) || typeof b == "boolean")
        continue;
      const j = nx(y.prevProp, b);
      let L = j || // If we're making this variant active, we want to always make it active
      h === l && y.isActive && !k && x || // If we removed a higher-priority variant (i is in reverse order)
      v > _ && x, F = !1;
      const S = Array.isArray(b) ? b : [b];
      let $ = S.reduce(s(h), {});
      w === !1 && ($ = {});
      const { prevResolvedValues: z = {} } = y, U = {
        ...z,
        ...$
      }, N = (R) => {
        L = !0, f.has(R) && (F = !0, f.delete(R)), y.needsAnimating[R] = !0;
        const Y = e.getValue(R);
        Y && (Y.liveStyle = !1);
      };
      for (const R in U) {
        const Y = $[R], A = z[R];
        if (m.hasOwnProperty(R))
          continue;
        let V = !1;
        $l(Y) && $l(A) ? V = !Up(Y, A) : V = Y !== A, V ? Y != null ? N(R) : f.add(R) : Y !== void 0 && f.has(R) ? N(R) : y.protectedKeys[R] = !0;
      }
      y.prevProp = b, y.prevResolvedValues = $, y.isActive && (m = { ...m, ...$ }), r && e.blockInitialAnimation && (L = !1);
      const C = k && j;
      L && (!C || F) && d.push(...S.map((R) => {
        const Y = { type: h };
        if (typeof R == "string" && r && !C && e.manuallyAnimateOnMount && e.parent) {
          const { parent: A } = e, V = Ln(A, R);
          if (A.enteringChildren && V) {
            const { delayChildren: T } = V.transition || {};
            Y.delay = Wp(A.enteringChildren, e, T);
          }
        }
        return {
          animation: R,
          options: Y
        };
      }));
    }
    if (f.size) {
      const v = {};
      if (typeof u.initial != "boolean") {
        const h = Ln(e, Array.isArray(u.initial) ? u.initial[0] : u.initial);
        h && h.transition && (v.transition = h.transition);
      }
      f.forEach((h) => {
        const y = e.getBaseTarget(h), b = e.getValue(h);
        b && (b.liveStyle = !0), v[h] = y != null ? y : null;
      }), d.push({ animation: v });
    }
    let p = !!d.length;
    return r && (u.initial === !1 || u.initial === u.animate) && !e.manuallyAnimateOnMount && (p = !1), r = !1, p ? t(d) : Promise.resolve();
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
      n = jd(), r = !0;
    }
  };
}
function nx(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Up(t, e) : !1;
}
function qt(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function jd() {
  return {
    animate: qt(!0),
    whileInView: qt(),
    whileHover: qt(),
    whileTap: qt(),
    whileDrag: qt(),
    whileFocus: qt(),
    exit: qt()
  };
}
class Kt {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
class rx extends Kt {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = tx(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    aa(t) && (this.unmountControls = t.subscribe(this.node));
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
let ox = 0;
class sx extends Kt {
  constructor() {
    super(...arguments), this.id = ox++;
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
const ix = {
  animation: {
    Feature: rx
  },
  exit: {
    Feature: sx
  }
};
function _r(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function Tr(e) {
  return {
    point: {
      x: e.pageX,
      y: e.pageY
    }
  };
}
const ax = (e) => (t) => Ou(t) && e(t, Tr(t));
function or(e, t, n, r) {
  return _r(e, t, ax(n), r);
}
const Gp = 1e-4, lx = 1 - Gp, ux = 1 + Gp, Jp = 0.01, cx = 0 - Jp, dx = 0 + Jp;
function ze(e) {
  return e.max - e.min;
}
function fx(e, t, n) {
  return Math.abs(e - t) <= n;
}
function Ad(e, t, n, r = 0.5) {
  e.origin = r, e.originPoint = Me(t.min, t.max, e.origin), e.scale = ze(n) / ze(t), e.translate = Me(n.min, n.max, e.origin) - e.originPoint, (e.scale >= lx && e.scale <= ux || isNaN(e.scale)) && (e.scale = 1), (e.translate >= cx && e.translate <= dx || isNaN(e.translate)) && (e.translate = 0);
}
function sr(e, t, n, r) {
  Ad(e.x, t.x, n.x, r ? r.originX : void 0), Ad(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Pd(e, t, n) {
  e.min = n.min + t.min, e.max = e.min + ze(t);
}
function mx(e, t, n) {
  Pd(e.x, t.x, n.x), Pd(e.y, t.y, n.y);
}
function Cd(e, t, n) {
  e.min = t.min - n.min, e.max = e.min + ze(t);
}
function ir(e, t, n) {
  Cd(e.x, t.x, n.x), Cd(e.y, t.y, n.y);
}
function et(e) {
  return [e("x"), e("y")];
}
const Xp = ({ current: e }) => e ? e.ownerDocument.defaultView : null, $d = (e, t) => Math.abs(e - t);
function px(e, t) {
  const n = $d(e.x, t.x), r = $d(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class qp {
  constructor(t, n, { transformPagePoint: r, contextWindow: s = window, dragSnapToOrigin: i = !1, distanceThreshold: o = 3 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const f = Ia(this.lastMoveEventInfo, this.history), m = this.startEvent !== null, _ = px(f.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
      if (!m && !_)
        return;
      const { point: p } = f, { timestamp: v } = Pe;
      this.history.push({ ...p, timestamp: v });
      const { onStart: h, onMove: y } = this.handlers;
      m || (h && h(this.lastMoveEvent, f), this.startEvent = this.lastMoveEvent), y && y(this.lastMoveEvent, f);
    }, this.handlePointerMove = (f, m) => {
      this.lastMoveEvent = f, this.lastMoveEventInfo = Fa(m, this.transformPagePoint), ve.update(this.updatePoint, !0);
    }, this.handlePointerUp = (f, m) => {
      this.end();
      const { onEnd: _, onSessionEnd: p, resumeAnimation: v } = this.handlers;
      if (this.dragSnapToOrigin && v && v(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const h = Ia(f.type === "pointercancel" ? this.lastMoveEventInfo : Fa(m, this.transformPagePoint), this.history);
      this.startEvent && _ && _(f, h), p && p(f, h);
    }, !Ou(t))
      return;
    this.dragSnapToOrigin = i, this.handlers = n, this.transformPagePoint = r, this.distanceThreshold = o, this.contextWindow = s || window;
    const a = Tr(t), l = Fa(a, this.transformPagePoint), { point: u } = l, { timestamp: c } = Pe;
    this.history = [{ ...u, timestamp: c }];
    const { onSessionStart: d } = n;
    d && d(t, Ia(l, this.history)), this.removeListeners = Sr(or(this.contextWindow, "pointermove", this.handlePointerMove), or(this.contextWindow, "pointerup", this.handlePointerUp), or(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), Vt(this.updatePoint);
  }
}
function Fa(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Hd(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Ia({ point: e }, t) {
  return {
    point: e,
    delta: Hd(e, Zp(t)),
    offset: Hd(e, _x(t)),
    velocity: hx(t, 0.1)
  };
}
function _x(e) {
  return e[0];
}
function Zp(e) {
  return e[e.length - 1];
}
function hx(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let n = e.length - 1, r = null;
  const s = Zp(e);
  for (; n >= 0 && (r = e[n], !(s.timestamp - r.timestamp > /* @__PURE__ */ ct(t))); )
    n--;
  if (!r)
    return { x: 0, y: 0 };
  const i = /* @__PURE__ */ nt(s.timestamp - r.timestamp);
  if (i === 0)
    return { x: 0, y: 0 };
  const o = {
    x: (s.x - r.x) / i,
    y: (s.y - r.y) / i
  };
  return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
}
function vx(e, { min: t, max: n }, r) {
  return t !== void 0 && e < t ? e = r ? Me(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? Me(n, e, r.max) : Math.min(e, n)), e;
}
function Rd(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
  };
}
function gx(e, { top: t, left: n, bottom: r, right: s }) {
  return {
    x: Rd(e.x, n, s),
    y: Rd(e.y, t, r)
  };
}
function Od(e, t) {
  let n = t.min - e.min, r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function yx(e, t) {
  return {
    x: Od(e.x, t.x),
    y: Od(e.y, t.y)
  };
}
function Mx(e, t) {
  let n = 0.5;
  const r = ze(e), s = ze(t);
  return s > r ? n = /* @__PURE__ */ cr(t.min, t.max - r, e.min) : r > s && (n = /* @__PURE__ */ cr(e.min, e.max - s, t.min)), St(0, 1, n);
}
function bx(e, t) {
  const n = {};
  return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
const Ol = 0.35;
function xx(e = Ol) {
  return e === !1 ? e = 0 : e === !0 && (e = Ol), {
    x: Nd(e, "left", "right"),
    y: Nd(e, "top", "bottom")
  };
}
function Nd(e, t, n) {
  return {
    min: Fd(e, t),
    max: Fd(e, n)
  };
}
function Fd(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const wx = /* @__PURE__ */ new WeakMap();
class Yx {
  constructor(t) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Ye(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = t;
  }
  start(t, { snapToCursor: n = !1, distanceThreshold: r } = {}) {
    const { presenceContext: s } = this.visualElement;
    if (s && s.isPresent === !1)
      return;
    const i = (d) => {
      const { dragSnapToOrigin: f } = this.getProps();
      f ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(Tr(d).point);
    }, o = (d, f) => {
      const { drag: m, dragPropagation: _, onDragStart: p } = this.getProps();
      if (m && !_ && (this.openDragLock && this.openDragLock(), this.openDragLock = EM(m), !this.openDragLock))
        return;
      this.latestPointerEvent = d, this.latestPanInfo = f, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), et((h) => {
        let y = this.getAxisMotionValue(h).get() || 0;
        if (_t.test(y)) {
          const { projection: b } = this.visualElement;
          if (b && b.layout) {
            const x = b.layout.layoutBox[h];
            x && (y = ze(x) * (parseFloat(y) / 100));
          }
        }
        this.originPoint[h] = y;
      }), p && ve.postRender(() => p(d, f)), Hl(this.visualElement, "transform");
      const { animationState: v } = this.visualElement;
      v && v.setActive("whileDrag", !0);
    }, a = (d, f) => {
      this.latestPointerEvent = d, this.latestPanInfo = f;
      const { dragPropagation: m, dragDirectionLock: _, onDirectionLock: p, onDrag: v } = this.getProps();
      if (!m && !this.openDragLock)
        return;
      const { offset: h } = f;
      if (_ && this.currentDirection === null) {
        this.currentDirection = Lx(h), this.currentDirection !== null && p && p(this.currentDirection);
        return;
      }
      this.updateAxis("x", f.point, h), this.updateAxis("y", f.point, h), this.visualElement.render(), v && v(d, f);
    }, l = (d, f) => {
      this.latestPointerEvent = d, this.latestPanInfo = f, this.stop(d, f), this.latestPointerEvent = null, this.latestPanInfo = null;
    }, u = () => et((d) => {
      var f;
      return this.getAnimationState(d) === "paused" && ((f = this.getAxisMotionValue(d).animation) == null ? void 0 : f.play());
    }), { dragSnapToOrigin: c } = this.getProps();
    this.panSession = new qp(t, {
      onSessionStart: i,
      onStart: o,
      onMove: a,
      onSessionEnd: l,
      resumeAnimation: u
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: c,
      distanceThreshold: r,
      contextWindow: Xp(this.visualElement)
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
    a && ve.postRender(() => a(r, s));
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
    if (!r || !Br(t, s, this.currentDirection))
      return;
    const i = this.getAxisMotionValue(t);
    let o = this.originPoint[t] + r[t];
    this.constraints && this.constraints[t] && (o = vx(o, this.constraints[t], this.elastic[t])), i.set(o);
  }
  resolveConstraints() {
    var i;
    const { dragConstraints: t, dragElastic: n } = this.getProps(), r = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (i = this.visualElement.projection) == null ? void 0 : i.layout, s = this.constraints;
    t && Mn(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && r ? this.constraints = gx(r.layoutBox, t) : this.constraints = !1, this.elastic = xx(n), s !== this.constraints && r && this.constraints && !this.hasMutatedConstraints && et((o) => {
      this.constraints !== !1 && this.getAxisMotionValue(o) && (this.constraints[o] = bx(r.layoutBox[o], this.constraints[o]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Mn(t))
      return !1;
    const r = t.current;
    kt(r !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.", "drag-constraints-ref");
    const { projection: s } = this.visualElement;
    if (!s || !s.layout)
      return !1;
    const i = Sb(r, s.root, this.visualElement.getTransformPagePoint());
    let o = yx(s.layout.layoutBox, i);
    if (n) {
      const a = n(wb(o));
      this.hasMutatedConstraints = !!a, a && (o = $p(a));
    }
    return o;
  }
  startAnimation(t) {
    const { drag: n, dragMomentum: r, dragElastic: s, dragTransition: i, dragSnapToOrigin: o, onDragTransitionEnd: a } = this.getProps(), l = this.constraints || {}, u = et((c) => {
      if (!Br(c, n, this.currentDirection))
        return;
      let d = l && l[c] || {};
      o && (d = { min: 0, max: 0 });
      const f = s ? 200 : 1e6, m = s ? 40 : 1e7, _ = {
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
      return this.startAxisValueAnimation(c, _);
    });
    return Promise.all(u).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return Hl(this.visualElement, t), r.start(Ju(t, r, 0, n, this.visualElement, !1));
  }
  stopAnimation() {
    et((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    et((t) => {
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
    et((n) => {
      const { drag: r } = this.getProps();
      if (!Br(n, r, this.currentDirection))
        return;
      const { projection: s } = this.visualElement, i = this.getAxisMotionValue(n);
      if (s && s.layout) {
        const { min: o, max: a } = s.layout.layoutBox[n];
        i.set(t[n] - Me(o, a, 0.5));
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
    if (!Mn(n) || !r || !this.constraints)
      return;
    this.stopAnimation();
    const s = { x: 0, y: 0 };
    et((o) => {
      const a = this.getAxisMotionValue(o);
      if (a && this.constraints !== !1) {
        const l = a.get();
        s[o] = Mx({ min: l, max: l }, this.constraints[o]);
      }
    });
    const { transformTemplate: i } = this.visualElement.getProps();
    this.visualElement.current.style.transform = i ? i({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), et((o) => {
      if (!Br(o, t, null))
        return;
      const a = this.getAxisMotionValue(o), { min: l, max: u } = this.constraints[o];
      a.set(Me(l, u, s[o]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    wx.set(this.visualElement, this);
    const t = this.visualElement.current, n = or(t, "pointerdown", (l) => {
      const { drag: u, dragListener: c = !0 } = this.getProps();
      u && c && this.start(l);
    }), r = () => {
      const { dragConstraints: l } = this.getProps();
      Mn(l) && l.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: s } = this.visualElement, i = s.addEventListener("measure", r);
    s && !s.layout && (s.root && s.root.updateScroll(), s.updateLayout()), ve.read(r);
    const o = _r(window, "resize", () => this.scalePositionWithinConstraints()), a = s.addEventListener("didUpdate", ({ delta: l, hasLayoutChanged: u }) => {
      this.isDragging && u && (et((c) => {
        const d = this.getAxisMotionValue(c);
        d && (this.originPoint[c] += l[c].translate, d.set(d.get() + l[c].translate));
      }), this.visualElement.render());
    });
    return () => {
      o(), n(), i(), a && a();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: r = !1, dragPropagation: s = !1, dragConstraints: i = !1, dragElastic: o = Ol, dragMomentum: a = !0 } = t;
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
function Br(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function Lx(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
class Sx extends Kt {
  constructor(t) {
    super(t), this.removeGroupControls = rt, this.removeListeners = rt, this.controls = new Yx(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || rt;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Id = (e) => (t, n) => {
  e && ve.postRender(() => e(t, n));
};
class kx extends Kt {
  constructor() {
    super(...arguments), this.removePointerDownListener = rt;
  }
  onPointerDown(t) {
    this.session = new qp(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Xp(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: s } = this.node.getProps();
    return {
      onSessionStart: Id(t),
      onStart: Id(n),
      onMove: r,
      onEnd: (i, o) => {
        delete this.session, s && ve.postRender(() => s(i, o));
      }
    };
  }
  mount() {
    this.removePointerDownListener = or(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const io = {
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
function Vd(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const Jn = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (oe.test(e))
        e = parseFloat(e);
      else
        return e;
    const n = Vd(e, t.target.x), r = Vd(e, t.target.y);
    return `${n}% ${r}%`;
  }
}, Dx = {
  correct: (e, { treeScale: t, projectionDelta: n }) => {
    const r = e, s = Bt.parse(e);
    if (s.length > 5)
      return r;
    const i = Bt.createTransformer(e), o = typeof s[0] != "number" ? 1 : 0, a = n.x.scale * t.x, l = n.y.scale * t.y;
    s[0 + o] /= a, s[1 + o] /= l;
    const u = Me(a, l, 0.5);
    return typeof s[2 + o] == "number" && (s[2 + o] /= u), typeof s[3 + o] == "number" && (s[3 + o] /= u), i(s);
  }
};
let Va = !1;
class Tx extends Hg {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: s } = this.props, { projection: i } = t;
    qM(Ex), i && (n.group && n.group.add(i), r && r.register && s && r.register(i), Va && i.root.didUpdate(), i.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), i.setOptions({
      ...i.options,
      onExitComplete: () => this.safeToRemove()
    })), io.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: n, visualElement: r, drag: s, isPresent: i } = this.props, { projection: o } = r;
    return o && (o.isPresent = i, Va = !0, s || t.layoutDependency !== n || n === void 0 || t.isPresent !== i ? o.willUpdate() : this.safeToRemove(), t.isPresent !== i && (i ? o.promote() : o.relegate() || ve.postRender(() => {
      const a = o.getStack();
      (!a || !a.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t && (t.root.didUpdate(), Ru.postRender(() => {
      !t.currentAnimation && t.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r } = this.props, { projection: s } = t;
    Va = !0, s && (s.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(s), r && r.deregister && r.deregister(s));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function Qp(e) {
  const [t, n] = bp(), r = ee(_u);
  return g.jsx(Tx, { ...e, layoutGroup: r, switchLayoutGroup: ee(Pp), isPresent: t, safeToRemove: n });
}
const Ex = {
  borderRadius: {
    ...Jn,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: Jn,
  borderTopRightRadius: Jn,
  borderBottomLeftRadius: Jn,
  borderBottomRightRadius: Jn,
  boxShadow: Dx
};
function jx(e, t, n) {
  const r = He(e) ? e : En(e);
  return r.start(Ju("", r, t, n)), r.animation;
}
const Ax = (e, t) => e.depth - t.depth;
class Px {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    gu(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    yu(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(Ax), this.isDirty = !1, this.children.forEach(t);
  }
}
function Cx(e, t) {
  const n = Ue.now(), r = ({ timestamp: s }) => {
    const i = s - n;
    i >= t && (Vt(r), e(i - t));
  };
  return ve.setup(r, !0), () => Vt(r);
}
const e_ = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], $x = e_.length, Bd = (e) => typeof e == "string" ? parseFloat(e) : e, zd = (e) => typeof e == "number" || oe.test(e);
function Hx(e, t, n, r, s, i) {
  var o, a, l, u;
  s ? (e.opacity = Me(0, (o = n.opacity) != null ? o : 1, Rx(r)), e.opacityExit = Me((a = t.opacity) != null ? a : 1, 0, Ox(r))) : i && (e.opacity = Me((l = t.opacity) != null ? l : 1, (u = n.opacity) != null ? u : 1, r));
  for (let c = 0; c < $x; c++) {
    const d = `border${e_[c]}Radius`;
    let f = Wd(t, d), m = Wd(n, d);
    if (f === void 0 && m === void 0)
      continue;
    f || (f = 0), m || (m = 0), f === 0 || m === 0 || zd(f) === zd(m) ? (e[d] = Math.max(Me(Bd(f), Bd(m), r), 0), (_t.test(m) || _t.test(f)) && (e[d] += "%")) : e[d] = m;
  }
  (t.rotate || n.rotate) && (e.rotate = Me(t.rotate || 0, n.rotate || 0, r));
}
function Wd(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const Rx = /* @__PURE__ */ t_(0, 0.5, Im), Ox = /* @__PURE__ */ t_(0.5, 0.95, rt);
function t_(e, t, n) {
  return (r) => r < e ? 0 : r > t ? 1 : n(/* @__PURE__ */ cr(e, t, r));
}
function Ud(e, t) {
  e.min = t.min, e.max = t.max;
}
function Ze(e, t) {
  Ud(e.x, t.x), Ud(e.y, t.y);
}
function Kd(e, t) {
  e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin;
}
function Gd(e, t, n, r, s) {
  return e -= t, e = go(e, 1 / n, r), s !== void 0 && (e = go(e, 1 / s, r)), e;
}
function Nx(e, t = 0, n = 1, r = 0.5, s, i = e, o = e) {
  if (_t.test(t) && (t = parseFloat(t), t = Me(o.min, o.max, t / 100) - o.min), typeof t != "number")
    return;
  let a = Me(i.min, i.max, r);
  e === i && (a -= t), e.min = Gd(e.min, t, n, a, s), e.max = Gd(e.max, t, n, a, s);
}
function Jd(e, t, [n, r, s], i, o) {
  Nx(e, t[n], t[r], t[s], t.scale, i, o);
}
const Fx = ["x", "scaleX", "originX"], Ix = ["y", "scaleY", "originY"];
function Xd(e, t, n, r) {
  Jd(e.x, t, Fx, n ? n.x : void 0, r ? r.x : void 0), Jd(e.y, t, Ix, n ? n.y : void 0, r ? r.y : void 0);
}
function qd(e) {
  return e.translate === 0 && e.scale === 1;
}
function n_(e) {
  return qd(e.x) && qd(e.y);
}
function Zd(e, t) {
  return e.min === t.min && e.max === t.max;
}
function Vx(e, t) {
  return Zd(e.x, t.x) && Zd(e.y, t.y);
}
function Qd(e, t) {
  return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function r_(e, t) {
  return Qd(e.x, t.x) && Qd(e.y, t.y);
}
function ef(e) {
  return ze(e.x) / ze(e.y);
}
function tf(e, t) {
  return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
class Bx {
  constructor() {
    this.members = [];
  }
  add(t) {
    gu(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (yu(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
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
function zx(e, t, n) {
  let r = "";
  const s = e.x.translate / t.x, i = e.y.translate / t.y, o = (n == null ? void 0 : n.z) || 0;
  if ((s || i || o) && (r = `translate3d(${s}px, ${i}px, ${o}px) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
    const { transformPerspective: u, rotate: c, rotateX: d, rotateY: f, skewX: m, skewY: _ } = n;
    u && (r = `perspective(${u}px) ${r}`), c && (r += `rotate(${c}deg) `), d && (r += `rotateX(${d}deg) `), f && (r += `rotateY(${f}deg) `), m && (r += `skewX(${m}deg) `), _ && (r += `skewY(${_}deg) `);
  }
  const a = e.x.scale * t.x, l = e.y.scale * t.y;
  return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none";
}
const Ba = ["", "X", "Y", "Z"], Wx = 1e3;
let Ux = 0;
function za(e, t, n, r) {
  const { latestValues: s } = t;
  s[e] && (n[e] = s[e], t.setStaticValue(e, 0), r && (r[e] = 0));
}
function o_(e) {
  if (e.hasCheckedOptimisedAppear = !0, e.root === e)
    return;
  const { visualElement: t } = e.options;
  if (!t)
    return;
  const n = Bp(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: s, layoutId: i } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", ve, !(s || i));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && o_(r);
}
function s_({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: s }) {
  return class {
    constructor(o = {}, a = t == null ? void 0 : t()) {
      this.id = Ux++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, this.nodes.forEach(Jx), this.nodes.forEach(Qx), this.nodes.forEach(ew), this.nodes.forEach(Xx);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = o, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new Px());
    }
    addEventListener(o, a) {
      return this.eventHandlers.has(o) || this.eventHandlers.set(o, new bu()), this.eventHandlers.get(o).add(a);
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
      this.isSVG = Mp(o) && !HM(o), this.instance = o;
      const { layoutId: a, layout: l, visualElement: u } = this.options;
      if (u && !u.current && u.mount(o), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (l || a) && (this.isLayoutDirty = !0), e) {
        let c, d = 0;
        const f = () => this.root.updateBlockedByResize = !1;
        ve.read(() => {
          d = window.innerWidth;
        }), e(o, () => {
          const m = window.innerWidth;
          m !== d && (d = m, this.root.updateBlockedByResize = !0, c && c(), c = Cx(f, 250), io.hasAnimatedSinceResize && (io.hasAnimatedSinceResize = !1, this.nodes.forEach(of)));
        });
      }
      a && this.root.registerSharedNode(a, this), this.options.animate !== !1 && u && (a || l) && this.addEventListener("didUpdate", ({ delta: c, hasLayoutChanged: d, hasRelativeLayoutChanged: f, layout: m }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const _ = this.options.transition || u.getDefaultTransition() || sw, { onLayoutAnimationStart: p, onLayoutAnimationComplete: v } = u.getProps(), h = !this.targetLayout || !r_(this.targetLayout, m), y = !d && f;
        if (this.options.layoutRoot || this.resumeFrom || y || d && (h || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
          const b = {
            ...$u(_, "layout"),
            onPlay: p,
            onComplete: v
          };
          (u.shouldReduceMotion || this.options.layoutRoot) && (b.delay = 0, b.type = !1), this.startAnimation(b), this.setAnimationOrigin(c, y);
        } else
          d || of(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = m;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const o = this.getStack();
      o && o.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), Vt(this.updateProjection);
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(tw), this.animationId++);
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
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && o_(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
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
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(nf);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(rf);
        return;
      }
      this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(Zx), this.nodes.forEach(Kx), this.nodes.forEach(Gx)) : this.nodes.forEach(rf), this.clearAllSnapshots();
      const a = Ue.now();
      Pe.delta = St(0, 1e3 / 60, a - Pe.timestamp), Pe.timestamp = a, Pe.isProcessing = !0, Aa.update.process(Pe), Aa.preRender.process(Pe), Aa.render.process(Pe), Pe.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, Ru.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(qx), this.sharedNodes.forEach(nw);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, ve.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      ve.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !ze(this.snapshot.measuredBox.x) && !ze(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++)
          this.path[l].updateScroll();
      const o = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = Ye(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
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
      const o = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, a = this.projectionDelta && !n_(this.projectionDelta), l = this.getTransformTemplate(), u = l ? l(this.latestValues, "") : void 0, c = u !== this.prevTransformTemplateValue;
      o && this.instance && (a || Qt(this.latestValues) || c) && (s(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(o = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return o && (l = this.removeTransform(l)), iw(l), {
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
        return Ye();
      const a = o.measureViewportBox();
      if (!(((u = this.scroll) == null ? void 0 : u.wasRoot) || this.path.some(aw))) {
        const { scroll: c } = this.root;
        c && (bn(a.x, c.offset.x), bn(a.y, c.offset.y));
      }
      return a;
    }
    removeElementScroll(o) {
      var l;
      const a = Ye();
      if (Ze(a, o), (l = this.scroll) != null && l.wasRoot)
        return a;
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u], { scroll: d, options: f } = c;
        c !== this.root && d && f.layoutScroll && (d.wasRoot && Ze(a, o), bn(a.x, d.offset.x), bn(a.y, d.offset.y));
      }
      return a;
    }
    applyTransform(o, a = !1) {
      const l = Ye();
      Ze(l, o);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !a && c.options.layoutScroll && c.scroll && c !== c.root && xn(l, {
          x: -c.scroll.offset.x,
          y: -c.scroll.offset.y
        }), Qt(c.latestValues) && xn(l, c.latestValues);
      }
      return Qt(this.latestValues) && xn(l, this.latestValues), l;
    }
    removeTransform(o) {
      const a = Ye();
      Ze(a, o);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !Qt(u.latestValues))
          continue;
        Al(u.latestValues) && u.updateSnapshot();
        const c = Ye(), d = u.measurePageBox();
        Ze(c, d), Xd(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return Qt(this.latestValues) && Xd(a, this.latestValues), a;
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
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== Pe.timestamp && this.relativeParent.resolveTargetDelta(!0);
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
        if (this.resolvedRelativeTargetAt = Pe.timestamp, !this.targetDelta && !this.relativeTarget) {
          const m = this.getClosestProjectingParent();
          m && m.layout && this.animationProgress !== 1 ? (this.relativeParent = m, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Ye(), this.relativeTargetOrigin = Ye(), ir(this.relativeTargetOrigin, this.layout.layoutBox, m.layout.layoutBox), Ze(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = Ye(), this.targetWithTransforms = Ye()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), mx(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Ze(this.target, this.layout.layoutBox), Rp(this.target, this.targetDelta)) : Ze(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
          this.attemptToResolveRelativeTarget = !1;
          const m = this.getClosestProjectingParent();
          m && !!m.resumingFrom == !!this.resumingFrom && !m.options.layoutScroll && m.target && this.animationProgress !== 1 ? (this.relativeParent = m, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Ye(), this.relativeTargetOrigin = Ye(), ir(this.relativeTargetOrigin, this.target, m.target), Ze(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Al(this.parent.latestValues) || Hp(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var _;
      const o = this.getLead(), a = !!this.resumingFrom || this !== o;
      let l = !0;
      if ((this.isProjectionDirty || (_ = this.parent) != null && _.isProjectionDirty) && (l = !1), a && (this.isSharedProjectionDirty || this.isTransformDirty) && (l = !1), this.resolvedRelativeTargetAt === Pe.timestamp && (l = !1), l)
        return;
      const { layout: u, layoutId: c } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(u || c))
        return;
      Ze(this.layoutCorrected, this.layout.layoutBox);
      const d = this.treeScale.x, f = this.treeScale.y;
      Lb(this.layoutCorrected, this.treeScale, this.path, a), o.layout && !o.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (o.target = o.layout.layoutBox, o.targetWithTransforms = Ye());
      const { target: m } = o;
      if (!m) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Kd(this.prevProjectionDelta.x, this.projectionDelta.x), Kd(this.prevProjectionDelta.y, this.projectionDelta.y)), sr(this.projectionDelta, this.layoutCorrected, m, this.latestValues), (this.treeScale.x !== d || this.treeScale.y !== f || !tf(this.projectionDelta.x, this.prevProjectionDelta.x) || !tf(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", m));
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
      this.prevProjectionDelta = wn(), this.projectionDelta = wn(), this.projectionDeltaWithTransform = wn();
    }
    setAnimationOrigin(o, a = !1) {
      const l = this.snapshot, u = l ? l.latestValues : {}, c = { ...this.latestValues }, d = wn();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
      const f = Ye(), m = l ? l.source : void 0, _ = this.layout ? this.layout.source : void 0, p = m !== _, v = this.getStack(), h = !v || v.members.length <= 1, y = !!(p && !h && this.options.crossfade === !0 && !this.path.some(ow));
      this.animationProgress = 0;
      let b;
      this.mixTargetDelta = (x) => {
        const w = x / 1e3;
        sf(d.x, o.x, w), sf(d.y, o.y, w), this.setTargetDelta(d), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (ir(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox), rw(this.relativeTarget, this.relativeTargetOrigin, f, w), b && Vx(this.relativeTarget, b) && (this.isProjectionDirty = !1), b || (b = Ye()), Ze(b, this.relativeTarget)), p && (this.animationValues = c, Hx(c, u, this.latestValues, w, y, h)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = w;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(o) {
      var a, l, u;
      this.notifyListeners("animationStart"), (a = this.currentAnimation) == null || a.stop(), (u = (l = this.resumingFrom) == null ? void 0 : l.currentAnimation) == null || u.stop(), this.pendingAnimation && (Vt(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = ve.update(() => {
        io.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = En(0)), this.currentAnimation = jx(this.motionValue, [0, 1e3], {
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
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Wx), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const o = this.getLead();
      let { targetWithTransforms: a, target: l, layout: u, latestValues: c } = o;
      if (!(!a || !l || !u)) {
        if (this !== o && this.layout && u && i_(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
          l = this.target || Ye();
          const d = ze(this.layout.layoutBox.x);
          l.x.min = o.target.x.min, l.x.max = l.x.min + d;
          const f = ze(this.layout.layoutBox.y);
          l.y.min = o.target.y.min, l.y.max = l.y.min + f;
        }
        Ze(a, l), xn(a, c), sr(this.projectionDeltaWithTransform, this.layoutCorrected, a, c);
      }
    }
    registerSharedNode(o, a) {
      this.sharedNodes.has(o) || this.sharedNodes.set(o, new Bx()), this.sharedNodes.get(o).add(a);
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
      l.z && za("z", o, u, this.animationValues);
      for (let c = 0; c < Ba.length; c++)
        za(`rotate${Ba[c]}`, o, u, this.animationValues), za(`skew${Ba[c]}`, o, u, this.animationValues);
      o.render();
      for (const c in u)
        o.setStaticValue(c, u[c]), this.animationValues && (this.animationValues[c] = u[c]);
      o.scheduleRender();
    }
    applyProjectionStyles(o, a) {
      var _, p;
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible) {
        o.visibility = "hidden";
        return;
      }
      const l = this.getTransformTemplate();
      if (this.needsReset) {
        this.needsReset = !1, o.visibility = "", o.opacity = "", o.pointerEvents = so(a == null ? void 0 : a.pointerEvents) || "", o.transform = l ? l(this.latestValues, "") : "none";
        return;
      }
      const u = this.getLead();
      if (!this.projectionDelta || !this.layout || !u.target) {
        this.options.layoutId && (o.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, o.pointerEvents = so(a == null ? void 0 : a.pointerEvents) || ""), this.hasProjected && !Qt(this.latestValues) && (o.transform = l ? l({}, "") : "none", this.hasProjected = !1);
        return;
      }
      o.visibility = "";
      const c = u.animationValues || u.latestValues;
      this.applyTransformsToTarget();
      let d = zx(this.projectionDeltaWithTransform, this.treeScale, c);
      l && (d = l(c, d)), o.transform = d;
      const { x: f, y: m } = this.projectionDelta;
      o.transformOrigin = `${f.origin * 100}% ${m.origin * 100}% 0`, u.animationValues ? o.opacity = u === this ? (p = (_ = c.opacity) != null ? _ : this.latestValues.opacity) != null ? p : 1 : this.preserveOpacity ? this.latestValues.opacity : c.opacityExit : o.opacity = u === this ? c.opacity !== void 0 ? c.opacity : "" : c.opacityExit !== void 0 ? c.opacityExit : 0;
      for (const v in pr) {
        if (c[v] === void 0)
          continue;
        const { correct: h, applyTo: y, isCSSVariable: b } = pr[v], x = d === "none" ? c[v] : h(c[v], u);
        if (y) {
          const w = y.length;
          for (let k = 0; k < w; k++)
            o[y[k]] = x;
        } else
          b ? this.options.visualElement.renderState.vars[v] = x : o[v] = x;
      }
      this.options.layoutId && (o.pointerEvents = u === this ? so(a == null ? void 0 : a.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((o) => {
        var a;
        return (a = o.currentAnimation) == null ? void 0 : a.stop();
      }), this.root.nodes.forEach(nf), this.root.sharedNodes.clear();
    }
  };
}
function Kx(e) {
  e.updateLayout();
}
function Gx(e) {
  var n;
  const t = ((n = e.resumeFrom) == null ? void 0 : n.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: s } = e.layout, { animationType: i } = e.options, o = t.source !== e.layout.source;
    i === "size" ? et((d) => {
      const f = o ? t.measuredBox[d] : t.layoutBox[d], m = ze(f);
      f.min = r[d].min, f.max = f.min + m;
    }) : i_(i, t.layoutBox, r) && et((d) => {
      const f = o ? t.measuredBox[d] : t.layoutBox[d], m = ze(r[d]);
      f.max = f.min + m, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[d].max = e.relativeTarget[d].min + m);
    });
    const a = wn();
    sr(a, r, t.layoutBox);
    const l = wn();
    o ? sr(l, e.applyTransform(s, !0), t.measuredBox) : sr(l, r, t.layoutBox);
    const u = !n_(a);
    let c = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: m } = d;
        if (f && m) {
          const _ = Ye();
          ir(_, t.layoutBox, f.layoutBox);
          const p = Ye();
          ir(p, r, m.layoutBox), r_(_, p) || (c = !0), d.options.layoutRoot && (e.relativeTarget = p, e.relativeTargetOrigin = _, e.relativeParent = d);
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
function Jx(e) {
  e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function Xx(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function qx(e) {
  e.clearSnapshot();
}
function nf(e) {
  e.clearMeasurements();
}
function rf(e) {
  e.isLayoutDirty = !1;
}
function Zx(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function of(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function Qx(e) {
  e.resolveTargetDelta();
}
function ew(e) {
  e.calcProjection();
}
function tw(e) {
  e.resetSkewAndRotation();
}
function nw(e) {
  e.removeLeadSnapshot();
}
function sf(e, t, n) {
  e.translate = Me(t.translate, 0, n), e.scale = Me(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function af(e, t, n, r) {
  e.min = Me(t.min, n.min, r), e.max = Me(t.max, n.max, r);
}
function rw(e, t, n, r) {
  af(e.x, t.x, n.x, r), af(e.y, t.y, n.y, r);
}
function ow(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const sw = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, lf = (e) => typeof navigator != "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), uf = lf("applewebkit/") && !lf("chrome/") ? Math.round : rt;
function cf(e) {
  e.min = uf(e.min), e.max = uf(e.max);
}
function iw(e) {
  cf(e.x), cf(e.y);
}
function i_(e, t, n) {
  return e === "position" || e === "preserve-aspect" && !fx(ef(t), ef(n), 0.2);
}
function aw(e) {
  var t;
  return e !== e.root && ((t = e.scroll) == null ? void 0 : t.wasRoot);
}
const lw = s_({
  attachResizeListener: (e, t) => _r(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), Wa = {
  current: void 0
}, a_ = s_({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!Wa.current) {
      const e = new lw({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), Wa.current = e;
    }
    return Wa.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), uw = {
  pan: {
    Feature: kx
  },
  drag: {
    Feature: Sx,
    ProjectionNode: a_,
    MeasureLayout: Qp
  }
};
function df(e, t, n) {
  const { props: r } = e;
  e.animationState && r.whileHover && e.animationState.setActive("whileHover", n === "Start");
  const s = "onHover" + n, i = r[s];
  i && ve.postRender(() => i(t, Tr(t)));
}
class cw extends Kt {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = jM(t, (n, r) => (df(this.node, r, "Start"), (s) => df(this.node, s, "End"))));
  }
  unmount() {
  }
}
class dw extends Kt {
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
    this.unmount = Sr(_r(this.node.current, "focus", () => this.onFocus()), _r(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function ff(e, t, n) {
  const { props: r } = e;
  if (e.current instanceof HTMLButtonElement && e.current.disabled)
    return;
  e.animationState && r.whileTap && e.animationState.setActive("whileTap", n === "Start");
  const s = "onTap" + (n === "End" ? "" : n), i = r[s];
  i && ve.postRender(() => i(t, Tr(t)));
}
class fw extends Kt {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = $M(t, (n, r) => (ff(this.node, r, "Start"), (s, { success: i }) => ff(this.node, s, i ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
  }
  unmount() {
  }
}
const Nl = /* @__PURE__ */ new WeakMap(), Ua = /* @__PURE__ */ new WeakMap(), mw = (e) => {
  const t = Nl.get(e.target);
  t && t(e);
}, pw = (e) => {
  e.forEach(mw);
};
function _w({ root: e, ...t }) {
  const n = e || document;
  Ua.has(n) || Ua.set(n, {});
  const r = Ua.get(n), s = JSON.stringify(t);
  return r[s] || (r[s] = new IntersectionObserver(pw, { root: e, ...t })), r[s];
}
function hw(e, t, n) {
  const r = _w(t);
  return Nl.set(e, n), r.observe(e), () => {
    Nl.delete(e), r.unobserve(e);
  };
}
const vw = {
  some: 0,
  all: 1
};
class gw extends Kt {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: n, margin: r, amount: s = "some", once: i } = t, o = {
      root: n ? n.current : void 0,
      rootMargin: r,
      threshold: typeof s == "number" ? s : vw[s]
    }, a = (l) => {
      const { isIntersecting: u } = l;
      if (this.isInView === u || (this.isInView = u, i && !u && this.hasEnteredView))
        return;
      u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
      const { onViewportEnter: c, onViewportLeave: d } = this.node.getProps(), f = u ? c : d;
      f && f(l);
    };
    return hw(this.node.current, o, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver == "undefined")
      return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(yw(t, n)) && this.startObserver();
  }
  unmount() {
  }
}
function yw({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const Mw = {
  inView: {
    Feature: gw
  },
  tap: {
    Feature: fw
  },
  focus: {
    Feature: dw
  },
  hover: {
    Feature: cw
  }
}, bw = {
  layout: {
    ProjectionNode: a_,
    MeasureLayout: Qp
  }
}, xw = {
  ...ix,
  ...Mw,
  ...uw,
  ...bw
}, An = /* @__PURE__ */ xb(xw, $b);
function ww({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ M.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ M.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ M.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
  }));
}
const Yw = /* @__PURE__ */ M.forwardRef(ww);
function Lw({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ M.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ M.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ M.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m19.5 8.25-7.5 7.5-7.5-7.5"
  }));
}
const Sw = /* @__PURE__ */ M.forwardRef(Lw);
function kw({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ M.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ M.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ M.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
  }));
}
const Dw = /* @__PURE__ */ M.forwardRef(kw);
function Tw({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ M.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ M.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ M.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
  }));
}
const Ew = /* @__PURE__ */ M.forwardRef(Tw);
function jw({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ M.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ M.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ M.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M6 18 18 6M6 6l12 12"
  }));
}
const l_ = /* @__PURE__ */ M.forwardRef(jw);
var u_ = { exports: {} };
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
})(u_);
var Aw = u_.exports;
const K = /* @__PURE__ */ Tm(Aw), c_ = pe({
  activeAccordion: "",
  setActiveAccordion: null
}), f2 = ({
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
  const { activeAccordion: m, setActiveAccordion: _ } = ee(
    c_
  ), [p, v] = ne(
    m ? m === a : l
  );
  se(() => {
    m && v(m === a);
  }, [m]);
  const h = () => {
    d || (_ && _(p ? "" : a), v(!p));
  };
  return /* @__PURE__ */ g.jsxs("div", { className: e, children: [
    /* @__PURE__ */ g.jsxs(
      "div",
      {
        className: K(
          "flex w-full justify-between items-center gap-[30px] rounded-[11px] bg-light-4-tint font-semibold border border-light-3-tint px-[20px] py-[12px] text-left text-[18px] text-dark focus:outline-none transition-all duration-[180ms] cursor-pointer",
          p && "rounded-b-none",
          !d && "hover:bg-light-3-tint",
          t
        ),
        onClick: h,
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
            Sw,
            {
              className: K(
                "h-6 w-6 transition-all duration-[280ms]",
                p && "rotate-180 transform"
              )
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ g.jsx(Fu, { initial: !1, children: p && /* @__PURE__ */ g.jsx(
      An.div,
      {
        initial: { height: 0, opacity: 0 },
        animate: {
          height: "auto",
          opacity: 1
        },
        exit: { height: 0, translateY: -16, opacity: 0 },
        transition: { duration: 0.28, type: "tween" },
        className: K(!u && "overflow-hidden"),
        children: /* @__PURE__ */ g.jsx(
          "div",
          {
            className: K(
              "p-[20px] border border-light-3-tint border-t-0 rounded-b-[11px]",
              n
            ),
            children: c
          }
        )
      }
    ) })
  ] });
}, m2 = ({ className: e, initialValue: t = "", children: n }) => {
  const [r, s] = ne(t);
  return /* @__PURE__ */ g.jsx("div", { className: e, children: /* @__PURE__ */ g.jsx(
    c_.Provider,
    {
      value: { activeAccordion: r, setActiveAccordion: s },
      children: n
    }
  ) });
}, d_ = typeof document != "undefined" ? E.useLayoutEffect : () => {
};
var Ka;
const Pw = (Ka = E.useInsertionEffect) !== null && Ka !== void 0 ? Ka : d_;
function Cw(e) {
  const t = X(null);
  return Pw(() => {
    t.current = e;
  }, [
    e
  ]), q((...n) => {
    const r = t.current;
    return r == null ? void 0 : r(...n);
  }, []);
}
const Gt = (e) => {
  var t;
  return (t = e == null ? void 0 : e.ownerDocument) !== null && t !== void 0 ? t : document;
}, rn = (e) => e && "window" in e && e.window === e ? e : Gt(e).defaultView || window;
function $w(e) {
  return e !== null && typeof e == "object" && "nodeType" in e && typeof e.nodeType == "number";
}
function Hw(e) {
  return $w(e) && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && "host" in e;
}
let Rw = !1;
function Xu() {
  return Rw;
}
function f_(e, t) {
  if (!Xu()) return t && e ? e.contains(t) : !1;
  if (!e || !t) return !1;
  let n = t;
  for (; n !== null; ) {
    if (n === e) return !0;
    n.tagName === "SLOT" && n.assignedSlot ? n = n.assignedSlot.parentNode : Hw(n) ? n = n.host : n = n.parentNode;
  }
  return !1;
}
const Fl = (e = document) => {
  var t;
  if (!Xu()) return e.activeElement;
  let n = e.activeElement;
  for (; n && "shadowRoot" in n && (!((t = n.shadowRoot) === null || t === void 0) && t.activeElement); ) n = n.shadowRoot.activeElement;
  return n;
};
function m_(e) {
  return Xu() && e.target.shadowRoot && e.composedPath ? e.composedPath()[0] : e.target;
}
function ua(e) {
  var t;
  if (typeof window == "undefined" || window.navigator == null) return !1;
  let n = (t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.brands;
  return Array.isArray(n) && n.some((r) => e.test(r.brand)) || e.test(window.navigator.userAgent);
}
function qu(e) {
  var t;
  return typeof window != "undefined" && window.navigator != null ? e.test(((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.platform) || window.navigator.platform) : !1;
}
function jt(e) {
  if (process.env.NODE_ENV === "test") return e;
  let t = null;
  return () => (t == null && (t = e()), t);
}
const Zu = jt(function() {
  return qu(/^Mac/i);
}), Ow = jt(function() {
  return qu(/^iPhone/i);
}), Nw = jt(function() {
  return qu(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  Zu() && navigator.maxTouchPoints > 1;
}), Fw = jt(function() {
  return Ow() || Nw();
});
jt(function() {
  return Zu() || Fw();
});
jt(function() {
  return ua(/AppleWebKit/i) && !Iw();
});
const Iw = jt(function() {
  return ua(/Chrome/i);
}), Vw = jt(function() {
  return ua(/Android/i);
});
jt(function() {
  return ua(/Firefox/i);
});
function p_() {
  let e = X(/* @__PURE__ */ new Map()), t = q((s, i, o, a) => {
    let l = a != null && a.once ? (...u) => {
      e.current.delete(o), o(...u);
    } : o;
    e.current.set(o, {
      type: i,
      eventTarget: s,
      fn: l,
      options: a
    }), s.addEventListener(i, l, a);
  }, []), n = q((s, i, o, a) => {
    var l;
    let u = ((l = e.current.get(o)) === null || l === void 0 ? void 0 : l.fn) || o;
    s.removeEventListener(i, u, a), e.current.delete(o);
  }, []), r = q(() => {
    e.current.forEach((s, i) => {
      n(s.eventTarget, s.type, i, s.options);
    });
  }, [
    n
  ]);
  return se(() => r, [
    r
  ]), {
    addGlobalListener: t,
    removeGlobalListener: n,
    removeAllGlobalListeners: r
  };
}
function Bw(e) {
  return e.pointerType === "" && e.isTrusted ? !0 : Vw() && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType;
}
function __(e) {
  let t = e;
  return t.nativeEvent = e, t.isDefaultPrevented = () => t.defaultPrevented, t.isPropagationStopped = () => t.cancelBubble, t.persist = () => {
  }, t;
}
function zw(e, t) {
  Object.defineProperty(e, "target", {
    value: t
  }), Object.defineProperty(e, "currentTarget", {
    value: t
  });
}
function h_(e) {
  let t = X({
    isFocused: !1,
    observer: null
  });
  d_(() => {
    const r = t.current;
    return () => {
      r.observer && (r.observer.disconnect(), r.observer = null);
    };
  }, []);
  let n = Cw((r) => {
    e == null || e(r);
  });
  return q((r) => {
    if (r.target instanceof HTMLButtonElement || r.target instanceof HTMLInputElement || r.target instanceof HTMLTextAreaElement || r.target instanceof HTMLSelectElement) {
      t.current.isFocused = !0;
      let s = r.target, i = (o) => {
        if (t.current.isFocused = !1, s.disabled) {
          let a = __(o);
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
let Ww = !1, Er = null, Il = /* @__PURE__ */ new Set(), ar = /* @__PURE__ */ new Map(), cn = !1, Vl = !1;
const Uw = {
  Tab: !0,
  Escape: !0
};
function Qu(e, t) {
  for (let n of Il) n(e, t);
}
function Kw(e) {
  return !(e.metaKey || !Zu() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function yo(e) {
  cn = !0, Kw(e) && (Er = "keyboard", Qu("keyboard", e));
}
function tt(e) {
  Er = "pointer", (e.type === "mousedown" || e.type === "pointerdown") && (cn = !0, Qu("pointer", e));
}
function v_(e) {
  Bw(e) && (cn = !0, Er = "virtual");
}
function g_(e) {
  e.target === window || e.target === document || Ww || !e.isTrusted || (!cn && !Vl && (Er = "virtual", Qu("virtual", e)), cn = !1, Vl = !1);
}
function y_() {
  cn = !1, Vl = !0;
}
function Bl(e) {
  if (typeof window == "undefined" || typeof document == "undefined" || ar.get(rn(e))) return;
  const t = rn(e), n = Gt(e);
  let r = t.HTMLElement.prototype.focus;
  t.HTMLElement.prototype.focus = function() {
    cn = !0, r.apply(this, arguments);
  }, n.addEventListener("keydown", yo, !0), n.addEventListener("keyup", yo, !0), n.addEventListener("click", v_, !0), t.addEventListener("focus", g_, !0), t.addEventListener("blur", y_, !1), typeof PointerEvent != "undefined" ? (n.addEventListener("pointerdown", tt, !0), n.addEventListener("pointermove", tt, !0), n.addEventListener("pointerup", tt, !0)) : process.env.NODE_ENV === "test" && (n.addEventListener("mousedown", tt, !0), n.addEventListener("mousemove", tt, !0), n.addEventListener("mouseup", tt, !0)), t.addEventListener("beforeunload", () => {
    M_(e);
  }, {
    once: !0
  }), ar.set(t, {
    focus: r
  });
}
const M_ = (e, t) => {
  const n = rn(e), r = Gt(e);
  t && r.removeEventListener("DOMContentLoaded", t), ar.has(n) && (n.HTMLElement.prototype.focus = ar.get(n).focus, r.removeEventListener("keydown", yo, !0), r.removeEventListener("keyup", yo, !0), r.removeEventListener("click", v_, !0), n.removeEventListener("focus", g_, !0), n.removeEventListener("blur", y_, !1), typeof PointerEvent != "undefined" ? (r.removeEventListener("pointerdown", tt, !0), r.removeEventListener("pointermove", tt, !0), r.removeEventListener("pointerup", tt, !0)) : process.env.NODE_ENV === "test" && (r.removeEventListener("mousedown", tt, !0), r.removeEventListener("mousemove", tt, !0), r.removeEventListener("mouseup", tt, !0)), ar.delete(n));
};
function Gw(e) {
  const t = Gt(e);
  let n;
  return t.readyState !== "loading" ? Bl(e) : (n = () => {
    Bl(e);
  }, t.addEventListener("DOMContentLoaded", n)), () => M_(e, n);
}
typeof document != "undefined" && Gw();
function b_() {
  return Er !== "pointer";
}
const Jw = /* @__PURE__ */ new Set([
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
function Xw(e, t, n) {
  let r = Gt(n == null ? void 0 : n.target);
  const s = typeof window != "undefined" ? rn(n == null ? void 0 : n.target).HTMLInputElement : HTMLInputElement, i = typeof window != "undefined" ? rn(n == null ? void 0 : n.target).HTMLTextAreaElement : HTMLTextAreaElement, o = typeof window != "undefined" ? rn(n == null ? void 0 : n.target).HTMLElement : HTMLElement, a = typeof window != "undefined" ? rn(n == null ? void 0 : n.target).KeyboardEvent : KeyboardEvent;
  return e = e || r.activeElement instanceof s && !Jw.has(r.activeElement.type) || r.activeElement instanceof i || r.activeElement instanceof o && r.activeElement.isContentEditable, !(e && t === "keyboard" && n instanceof a && !Uw[n.key]);
}
function qw(e, t, n) {
  Bl(), se(() => {
    let r = (s, i) => {
      Xw(!!(n != null && n.isTextInput), s, i) && e(b_());
    };
    return Il.add(r), () => {
      Il.delete(r);
    };
  }, t);
}
function Zw(e) {
  let { isDisabled: t, onFocus: n, onBlur: r, onFocusChange: s } = e;
  const i = q((l) => {
    if (l.target === l.currentTarget)
      return r && r(l), s && s(!1), !0;
  }, [
    r,
    s
  ]), o = h_(i), a = q((l) => {
    const u = Gt(l.target), c = u ? Fl(u) : Fl();
    l.target === l.currentTarget && c === m_(l.nativeEvent) && (n && n(l), s && s(!0), o(l));
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
function Qw(e) {
  let { isDisabled: t, onBlurWithin: n, onFocusWithin: r, onFocusWithinChange: s } = e, i = X({
    isFocusWithin: !1
  }), { addGlobalListener: o, removeAllGlobalListeners: a } = p_(), l = q((d) => {
    d.currentTarget.contains(d.target) && i.current.isFocusWithin && !d.currentTarget.contains(d.relatedTarget) && (i.current.isFocusWithin = !1, a(), n && n(d), s && s(!1));
  }, [
    n,
    s,
    i,
    a
  ]), u = h_(l), c = q((d) => {
    if (!d.currentTarget.contains(d.target)) return;
    const f = Gt(d.target), m = Fl(f);
    if (!i.current.isFocusWithin && m === m_(d.nativeEvent)) {
      r && r(d), s && s(!0), i.current.isFocusWithin = !0, u(d);
      let _ = d.currentTarget;
      o(f, "focus", (p) => {
        if (i.current.isFocusWithin && !f_(_, p.target)) {
          let v = new f.defaultView.FocusEvent("blur", {
            relatedTarget: p.target
          });
          zw(v, _);
          let h = __(v);
          l(h);
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
let Mo = !1, zr = 0;
function zl() {
  Mo = !0, setTimeout(() => {
    Mo = !1;
  }, 50);
}
function mf(e) {
  e.pointerType === "touch" && zl();
}
function eY() {
  if (typeof document != "undefined")
    return zr === 0 && (typeof PointerEvent != "undefined" ? document.addEventListener("pointerup", mf) : process.env.NODE_ENV === "test" && document.addEventListener("touchend", zl)), zr++, () => {
      zr--, !(zr > 0) && (typeof PointerEvent != "undefined" ? document.removeEventListener("pointerup", mf) : process.env.NODE_ENV === "test" && document.removeEventListener("touchend", zl));
    };
}
function ec(e) {
  let { onHoverStart: t, onHoverChange: n, onHoverEnd: r, isDisabled: s } = e, [i, o] = ne(!1), a = X({
    isHovered: !1,
    ignoreEmulatedMouseEvents: !1,
    pointerType: "",
    target: null
  }).current;
  se(eY, []);
  let { addGlobalListener: l, removeAllGlobalListeners: u } = p_(), { hoverProps: c, triggerHoverEnd: d } = me(() => {
    let f = (p, v) => {
      if (a.pointerType = v, s || v === "touch" || a.isHovered || !p.currentTarget.contains(p.target)) return;
      a.isHovered = !0;
      let h = p.currentTarget;
      a.target = h, l(Gt(p.target), "pointerover", (y) => {
        a.isHovered && a.target && !f_(a.target, y.target) && m(y, y.pointerType);
      }, {
        capture: !0
      }), t && t({
        type: "hoverstart",
        target: h,
        pointerType: v
      }), n && n(!0), o(!0);
    }, m = (p, v) => {
      let h = a.target;
      a.pointerType = "", a.target = null, !(v === "touch" || !a.isHovered || !h) && (a.isHovered = !1, u(), r && r({
        type: "hoverend",
        target: h,
        pointerType: v
      }), n && n(!1), o(!1));
    }, _ = {};
    return typeof PointerEvent != "undefined" ? (_.onPointerEnter = (p) => {
      Mo && p.pointerType === "mouse" || f(p, p.pointerType);
    }, _.onPointerLeave = (p) => {
      !s && p.currentTarget.contains(p.target) && m(p, p.pointerType);
    }) : process.env.NODE_ENV === "test" && (_.onTouchStart = () => {
      a.ignoreEmulatedMouseEvents = !0;
    }, _.onMouseEnter = (p) => {
      !a.ignoreEmulatedMouseEvents && !Mo && f(p, "mouse"), a.ignoreEmulatedMouseEvents = !1;
    }, _.onMouseLeave = (p) => {
      !s && p.currentTarget.contains(p.target) && m(p, "mouse");
    }), {
      hoverProps: _,
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
  return se(() => {
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
function tc(e = {}) {
  let { autoFocus: t = !1, isTextInput: n, within: r } = e, s = X({
    isFocused: !1,
    isFocusVisible: t || b_()
  }), [i, o] = ne(!1), [a, l] = ne(() => s.current.isFocused && s.current.isFocusVisible), u = q(() => l(s.current.isFocused && s.current.isFocusVisible), []), c = q((m) => {
    s.current.isFocused = m, o(m), u();
  }, [
    u
  ]);
  qw((m) => {
    s.current.isFocusVisible = m, u();
  }, [], {
    isTextInput: n
  });
  let { focusProps: d } = Zw({
    isDisabled: r,
    onFocusChange: c
  }), { focusWithinProps: f } = Qw({
    isDisabled: !r,
    onFocusWithinChange: c
  });
  return {
    isFocused: i,
    isFocusVisible: a,
    focusProps: r ? f : d
  };
}
var tY = Object.defineProperty, nY = (e, t, n) => t in e ? tY(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Ga = (e, t, n) => (nY(e, typeof t != "symbol" ? t + "" : t, n), n);
let rY = class {
  constructor() {
    Ga(this, "current", this.detect()), Ga(this, "handoffState", "pending"), Ga(this, "currentId", 0);
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
}, ht = new rY();
function fn(e) {
  var t;
  return ht.isServer ? null : e == null ? document : (t = e == null ? void 0 : e.ownerDocument) != null ? t : document;
}
function bo(e) {
  var t, n;
  return ht.isServer ? null : e == null ? document : (n = (t = e == null ? void 0 : e.getRootNode) == null ? void 0 : t.call(e)) != null ? n : document;
}
function x_(e) {
  var t, n;
  return (n = (t = bo(e)) == null ? void 0 : t.activeElement) != null ? n : null;
}
function w_(e) {
  return x_(e) === e;
}
function ca(e) {
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
    return ca(() => {
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
function At() {
  let [e] = ne(qe);
  return se(() => () => e.dispose(), [e]), e;
}
let be = (e, t) => {
  ht.isServer ? se(e, t) : na(e, t);
};
function Jt(e) {
  let t = X(e);
  return be(() => {
    t.current = e;
  }, [e]), t;
}
let te = function(e) {
  let t = Jt(e);
  return E.useCallback((...n) => t.current(...n), [t]);
};
function oY(e) {
  let t = e.width / 2, n = e.height / 2;
  return { top: e.clientY - n, right: e.clientX + t, bottom: e.clientY + n, left: e.clientX - t };
}
function sY(e, t) {
  return !(!e || !t || e.right < t.left || e.left > t.right || e.bottom < t.top || e.top > t.bottom);
}
function nc({ disabled: e = !1 } = {}) {
  let t = X(null), [n, r] = ne(!1), s = At(), i = te(() => {
    t.current = null, r(!1), s.dispose();
  }), o = te((a) => {
    if (s.dispose(), t.current === null) {
      t.current = a.currentTarget, r(!0);
      {
        let l = fn(a.currentTarget);
        s.addEventListener(l, "pointerup", i, !1), s.addEventListener(l, "pointermove", (u) => {
          if (t.current) {
            let c = oY(u);
            r(sY(c, t.current.getBoundingClientRect()));
          }
        }, !1), s.addEventListener(l, "pointercancel", i, !1);
      }
    }
  });
  return { pressed: n, pressProps: e ? {} : { onPointerDown: o, onPointerUp: i, onClick: i } };
}
function Oe(e) {
  return me(() => e, Object.values(e));
}
let iY = pe(void 0);
function da() {
  return ee(iY);
}
function Wl(...e) {
  return Array.from(new Set(e.flatMap((t) => typeof t == "string" ? t.split(" ") : []))).filter(Boolean).join(" ");
}
function Ae(e, t, ...n) {
  if (e in t) {
    let s = t[e];
    return typeof s == "function" ? s(...n) : s;
  }
  let r = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((s) => `"${s}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(r, Ae), r;
}
var zt = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(zt || {}), Ft = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(Ft || {});
function xe() {
  let e = lY();
  return q((t) => aY({ mergeRefs: e, ...t }), [e]);
}
function aY({ ourProps: e, theirProps: t, slot: n, defaultTag: r, features: s, visible: i = !0, name: o, mergeRefs: a }) {
  a = a != null ? a : uY;
  let l = Y_(t, e);
  if (i) return Wr(l, n, r, o, a);
  let u = s != null ? s : 0;
  if (u & 2) {
    let { static: c = !1, ...d } = l;
    if (c) return Wr(d, n, r, o, a);
  }
  if (u & 1) {
    let { unmount: c = !0, ...d } = l;
    return Ae(c ? 0 : 1, { 0() {
      return null;
    }, 1() {
      return Wr({ ...d, hidden: !0, style: { display: "none" } }, n, r, o, a);
    } });
  }
  return Wr(l, n, r, o, a);
}
function Wr(e, t = {}, n, r, s) {
  let { as: i = n, children: o, refName: a = "ref", ...l } = Ja(e, ["unmount", "static"]), u = e.ref !== void 0 ? { [a]: e.ref } : {}, c = typeof o == "function" ? o(t) : o;
  "className" in l && l.className && typeof l.className == "function" && (l.className = l.className(t)), l["aria-labelledby"] && l["aria-labelledby"] === l.id && (l["aria-labelledby"] = void 0);
  let d = {};
  if (t) {
    let f = !1, m = [];
    for (let [_, p] of Object.entries(t)) typeof p == "boolean" && (f = !0), p === !0 && m.push(_.replace(/([A-Z])/g, (v) => `-${v.toLowerCase()}`));
    if (f) {
      d["data-headlessui-state"] = m.join(" ");
      for (let _ of m) d[`data-${_}`] = "";
    }
  }
  if (Sn(i) && (Object.keys(Ot(l)).length > 0 || Object.keys(Ot(d)).length > 0)) if (!ra(c) || Array.isArray(c) && c.length > 1 || dY(c)) {
    if (Object.keys(Ot(l)).length > 0) throw new Error(['Passing props on "Fragment"!', "", `The current component <${r} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(Ot(l)).concat(Object.keys(Ot(d))).map((f) => `  - ${f}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((f) => `  - ${f}`).join(`
`)].join(`
`));
  } else {
    let f = c.props, m = f == null ? void 0 : f.className, _ = typeof m == "function" ? (...h) => Wl(m(...h), l.className) : Wl(m, l.className), p = _ ? { className: _ } : {}, v = Y_(c.props, Ot(Ja(l, ["ref"])));
    for (let h in d) h in v && delete d[h];
    return km(c, Object.assign({}, v, d, u, { ref: s(cY(c), u.ref) }, p));
  }
  return Sm(i, Object.assign({}, Ja(l, ["ref"]), !Sn(i) && u, !Sn(i) && d), c);
}
function lY() {
  let e = X([]), t = q((n) => {
    for (let r of e.current) r != null && (typeof r == "function" ? r(n) : r.current = n);
  }, []);
  return (...n) => {
    if (!n.every((r) => r == null)) return e.current = n, t;
  };
}
function uY(...e) {
  return e.every((t) => t == null) ? void 0 : (t) => {
    for (let n of e) n != null && (typeof n == "function" ? n(t) : n.current = t);
  };
}
function Y_(...e) {
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
function hr(...e) {
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
function ge(e) {
  var t;
  return Object.assign(oa(e), { displayName: (t = e.displayName) != null ? t : e.name });
}
function Ot(e) {
  let t = Object.assign({}, e);
  for (let n in t) t[n] === void 0 && delete t[n];
  return t;
}
function Ja(e, t = []) {
  let n = Object.assign({}, e);
  for (let r of t) r in n && delete n[r];
  return n;
}
function cY(e) {
  return E.version.split(".")[0] >= "19" ? e.props.ref : e.ref;
}
function Sn(e) {
  return e === je || e === Symbol.for("react.fragment");
}
function dY(e) {
  return Sn(e.type);
}
function L_(e, t, n) {
  let [r, s] = ne(n), i = e !== void 0, o = X(i), a = X(!1), l = X(!1);
  return i && !o.current && !a.current ? (a.current = !0, o.current = i, console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")) : !i && o.current && !l.current && (l.current = !0, o.current = i, console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")), [i ? e : r, te((u) => (i || mo(() => s(u)), t == null ? void 0 : t(u)))];
}
function S_(e) {
  let [t] = ne(e);
  return t;
}
function k_(e = {}, t = null, n = []) {
  for (let [r, s] of Object.entries(e)) T_(n, D_(t, r), s);
  return n;
}
function D_(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function T_(e, t, n) {
  if (Array.isArray(n)) for (let [r, s] of n.entries()) T_(e, D_(t, r.toString()), s);
  else n instanceof Date ? e.push([t, n.toISOString()]) : typeof n == "boolean" ? e.push([t, n ? "1" : "0"]) : typeof n == "string" ? e.push([t, n]) : typeof n == "number" ? e.push([t, `${n}`]) : n == null ? e.push([t, ""]) : fY(n) && !ra(n) && k_(n, t, e);
}
function E_(e) {
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
function fY(e) {
  if (Object.prototype.toString.call(e) !== "[object Object]") return !1;
  let t = Object.getPrototypeOf(e);
  return t === null || Object.getPrototypeOf(t) === null;
}
let mY = "span";
var Pn = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Pn || {});
function pY(e, t) {
  var n;
  let { features: r = 1, ...s } = e, i = { ref: t, "aria-hidden": (r & 2) === 2 ? !0 : (n = s["aria-hidden"]) != null ? n : void 0, hidden: (r & 4) === 4 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(r & 4) === 4 && (r & 2) !== 2 && { display: "none" } } };
  return xe()({ ourProps: i, theirProps: s, slot: {}, defaultTag: mY, name: "Hidden" });
}
let vr = ge(pY), _Y = pe(null);
function hY({ children: e }) {
  let t = ee(_Y);
  if (!t) return E.createElement(E.Fragment, null, e);
  let { target: n } = t;
  return n ? pu(E.createElement(E.Fragment, null, e), n) : null;
}
function j_({ data: e, form: t, disabled: n, onReset: r, overrides: s }) {
  let [i, o] = ne(null), a = At();
  return se(() => {
    if (r && i) return a.addEventListener(i, "reset", r);
  }, [i, t, r]), E.createElement(hY, null, E.createElement(vY, { setForm: o, formId: t }), k_(e).map(([l, u]) => E.createElement(vr, { features: Pn.Hidden, ...Ot({ key: l, as: "input", type: "hidden", hidden: !0, readOnly: !0, form: t, disabled: n, name: l, value: u, ...s }) })));
}
function vY({ setForm: e, formId: t }) {
  return se(() => {
    if (t) {
      let n = document.getElementById(t);
      n && e(n);
    }
  }, [e, t]), t ? null : E.createElement(vr, { features: Pn.Hidden, as: "input", type: "hidden", hidden: !0, readOnly: !0, ref: (n) => {
    if (!n) return;
    let r = n.closest("form");
    r && e(r);
  } });
}
let gY = pe(void 0);
function rc() {
  return ee(gY);
}
function A_(e) {
  return typeof e != "object" || e === null ? !1 : "nodeType" in e;
}
function Yt(e) {
  return A_(e) && "tagName" in e;
}
function Xe(e) {
  return Yt(e) && "accessKey" in e;
}
function ut(e) {
  return Yt(e) && "tabIndex" in e;
}
function yY(e) {
  return Yt(e) && "style" in e;
}
function MY(e) {
  return Xe(e) && e.nodeName === "IFRAME";
}
function P_(e) {
  return Xe(e) && e.nodeName === "INPUT";
}
function Ul(e) {
  return Xe(e) && e.nodeName === "LABEL";
}
function bY(e) {
  return Xe(e) && e.nodeName === "FIELDSET";
}
function C_(e) {
  return Xe(e) && e.nodeName === "LEGEND";
}
function xY(e) {
  return Yt(e) ? e.matches('a[href],audio[controls],button,details,embed,iframe,img[usemap],input:not([type="hidden"]),label,select,textarea,video[controls]') : !1;
}
function xo(e) {
  let t = e.parentElement, n = null;
  for (; t && !bY(t); ) C_(t) && (n = t), t = t.parentElement;
  let r = (t == null ? void 0 : t.getAttribute("disabled")) === "";
  return r && wY(n) ? !1 : r;
}
function wY(e) {
  if (!e) return !1;
  let t = e.previousElementSibling;
  for (; t !== null; ) {
    if (C_(t)) return !1;
    t = t.previousElementSibling;
  }
  return !0;
}
let $_ = Symbol();
function H_(e, t = !0) {
  return Object.assign(e, { [$_]: t });
}
function Se(...e) {
  let t = X(e);
  se(() => {
    t.current = e;
  }, [e]);
  let n = te((r) => {
    for (let s of t.current) s != null && (typeof s == "function" ? s(r) : s.current = r);
  });
  return e.every((r) => r == null || (r == null ? void 0 : r[$_])) ? void 0 : n;
}
let fa = pe(null);
fa.displayName = "DescriptionContext";
function R_() {
  let e = ee(fa);
  if (e === null) {
    let t = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, R_), t;
  }
  return e;
}
function O_() {
  var e, t;
  return (t = (e = ee(fa)) == null ? void 0 : e.value) != null ? t : void 0;
}
function N_() {
  let [e, t] = ne([]);
  return [e.length > 0 ? e.join(" ") : void 0, me(() => function(n) {
    let r = te((i) => (t((o) => [...o, i]), () => t((o) => {
      let a = o.slice(), l = a.indexOf(i);
      return l !== -1 && a.splice(l, 1), a;
    }))), s = me(() => ({ register: r, slot: n.slot, name: n.name, props: n.props, value: n.value }), [r, n.slot, n.name, n.props, n.value]);
    return E.createElement(fa.Provider, { value: s }, n.children);
  }, [t])];
}
let YY = "p";
function LY(e, t) {
  let n = Ne(), r = da(), { id: s = `headlessui-description-${n}`, ...i } = e, o = R_(), a = Se(t);
  be(() => o.register(s), [s, o.register]);
  let l = Oe({ ...o.slot, disabled: r || !1 }), u = { ref: a, ...o.props, id: s };
  return xe()({ ourProps: u, theirProps: i, slot: l, defaultTag: YY, name: o.name || "Description" });
}
let SY = ge(LY), F_ = Object.assign(SY, {});
var he = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(he || {});
let ma = pe(null);
ma.displayName = "LabelContext";
function I_() {
  let e = ee(ma);
  if (e === null) {
    let t = new Error("You used a <Label /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, I_), t;
  }
  return e;
}
function oc(e) {
  var t, n, r;
  let s = (n = (t = ee(ma)) == null ? void 0 : t.value) != null ? n : void 0;
  return ((r = e == null ? void 0 : e.length) != null ? r : 0) > 0 ? [s, ...e].filter(Boolean).join(" ") : s;
}
function V_({ inherit: e = !1 } = {}) {
  let t = oc(), [n, r] = ne([]), s = e ? [t, ...n].filter(Boolean) : n;
  return [s.length > 0 ? s.join(" ") : void 0, me(() => function(i) {
    let o = te((l) => (r((u) => [...u, l]), () => r((u) => {
      let c = u.slice(), d = c.indexOf(l);
      return d !== -1 && c.splice(d, 1), c;
    }))), a = me(() => ({ register: o, slot: i.slot, name: i.name, props: i.props, value: i.value }), [o, i.slot, i.name, i.props, i.value]);
    return E.createElement(ma.Provider, { value: a }, i.children);
  }, [r])];
}
let kY = "label";
function DY(e, t) {
  var n;
  let r = Ne(), s = I_(), i = rc(), o = da(), { id: a = `headlessui-label-${r}`, htmlFor: l = i != null ? i : (n = s.props) == null ? void 0 : n.htmlFor, passive: u = !1, ...c } = e, d = Se(t);
  be(() => s.register(a), [a, s.register]);
  let f = te((p) => {
    let v = p.currentTarget;
    if (!(p.target !== p.currentTarget && xY(p.target)) && (Ul(v) && p.preventDefault(), s.props && "onClick" in s.props && typeof s.props.onClick == "function" && s.props.onClick(p), Ul(v))) {
      let h = document.getElementById(v.htmlFor);
      if (h) {
        let y = h.getAttribute("disabled");
        if (y === "true" || y === "") return;
        let b = h.getAttribute("aria-disabled");
        if (b === "true" || b === "") return;
        (P_(h) && (h.type === "file" || h.type === "radio" || h.type === "checkbox") || h.role === "radio" || h.role === "checkbox" || h.role === "switch") && h.click(), h.focus({ preventScroll: !0 });
      }
    }
  }), m = Oe({ ...s.slot, disabled: o || !1 }), _ = { ref: d, ...s.props, id: a, htmlFor: l, onClick: f };
  return u && ("onClick" in _ && (delete _.htmlFor, delete _.onClick), "onClick" in c && delete c.onClick), xe()({ ourProps: _, theirProps: c, slot: m, defaultTag: l ? kY : "div", name: s.name || "Label" });
}
let TY = ge(DY), B_ = Object.assign(TY, {}), EY = pe(() => {
});
function z_({ value: e, children: t }) {
  return E.createElement(EY.Provider, { value: e }, t);
}
function jY(e, t) {
  return e !== null && t !== null && typeof e == "object" && typeof t == "object" && "id" in e && "id" in t ? e.id === t.id : e === t;
}
function AY(e = jY) {
  return q((t, n) => {
    if (typeof e == "string") {
      let r = e;
      return (t == null ? void 0 : t[r]) === (n == null ? void 0 : n[r]);
    }
    return e(t, n);
  }, [e]);
}
function pf(e) {
  if (e === null) return { width: 0, height: 0 };
  let { width: t, height: n } = e.getBoundingClientRect();
  return { width: t, height: n };
}
function PY(e, t, n = !1) {
  let [r, s] = ne(() => pf(t));
  return be(() => {
    if (!t || !e) return;
    let i = qe();
    return i.requestAnimationFrame(function o() {
      i.requestAnimationFrame(o), s((a) => {
        let l = pf(t);
        return l.width === a.width && l.height === a.height ? a : l;
      });
    }), () => {
      i.dispose();
    };
  }, [t, e]), n ? { width: `${r.width}px`, height: `${r.height}px` } : r;
}
var W_ = ((e) => (e[e.Left = 0] = "Left", e[e.Right = 2] = "Right", e))(W_ || {});
function CY(e) {
  let t = X(null), n = te((s) => {
    t.current = s.pointerType, !xo(s.currentTarget) && s.pointerType === "mouse" && s.button === W_.Left && (s.preventDefault(), e(s));
  }), r = te((s) => {
    t.current !== "mouse" && (xo(s.currentTarget) || e(s));
  });
  return { onPointerDown: n, onClick: r };
}
let U_ = class extends Map {
  constructor(t) {
    super(), this.factory = t;
  }
  get(t) {
    let n = super.get(t);
    return n === void 0 && (n = this.factory(t), this.set(t, n)), n;
  }
};
var $Y = Object.defineProperty, HY = (e, t, n) => t in e ? $Y(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, RY = (e, t, n) => (HY(e, t + "", n), n), K_ = (e, t, n) => {
  if (!t.has(e)) throw TypeError("Cannot " + n);
}, Qe = (e, t, n) => (K_(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Xa = (e, t, n) => {
  if (t.has(e)) throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, _f = (e, t, n, r) => (K_(e, t, "write to private field"), t.set(e, n), n), ft, Zn, Qn;
let G_ = class {
  constructor(t) {
    Xa(this, ft, {}), Xa(this, Zn, new U_(() => /* @__PURE__ */ new Set())), Xa(this, Qn, /* @__PURE__ */ new Set()), RY(this, "disposables", qe()), _f(this, ft, t), ht.isServer && this.disposables.microTask(() => {
      this.dispose();
    });
  }
  dispose() {
    this.disposables.dispose();
  }
  get state() {
    return Qe(this, ft);
  }
  subscribe(t, n) {
    if (ht.isServer) return () => {
    };
    let r = { selector: t, callback: n, current: t(Qe(this, ft)) };
    return Qe(this, Qn).add(r), this.disposables.add(() => {
      Qe(this, Qn).delete(r);
    });
  }
  on(t, n) {
    return ht.isServer ? () => {
    } : (Qe(this, Zn).get(t).add(n), this.disposables.add(() => {
      Qe(this, Zn).get(t).delete(n);
    }));
  }
  send(t) {
    let n = this.reduce(Qe(this, ft), t);
    if (n !== Qe(this, ft)) {
      _f(this, ft, n);
      for (let r of Qe(this, Qn)) {
        let s = r.selector(Qe(this, ft));
        J_(r.current, s) || (r.current = s, r.callback(s));
      }
      for (let r of Qe(this, Zn).get(t.type)) r(Qe(this, ft), t);
    }
  }
};
ft = /* @__PURE__ */ new WeakMap(), Zn = /* @__PURE__ */ new WeakMap(), Qn = /* @__PURE__ */ new WeakMap();
function J_(e, t) {
  return Object.is(e, t) ? !0 : typeof e != "object" || e === null || typeof t != "object" || t === null ? !1 : Array.isArray(e) && Array.isArray(t) ? e.length !== t.length ? !1 : qa(e[Symbol.iterator](), t[Symbol.iterator]()) : e instanceof Map && t instanceof Map || e instanceof Set && t instanceof Set ? e.size !== t.size ? !1 : qa(e.entries(), t.entries()) : hf(e) && hf(t) ? qa(Object.entries(e)[Symbol.iterator](), Object.entries(t)[Symbol.iterator]()) : !1;
}
function qa(e, t) {
  do {
    let n = e.next(), r = t.next();
    if (n.done && r.done) return !0;
    if (n.done || r.done || !Object.is(n.value, r.value)) return !1;
  } while (!0);
}
function hf(e) {
  if (Object.prototype.toString.call(e) !== "[object Object]") return !1;
  let t = Object.getPrototypeOf(e);
  return t === null || Object.getPrototypeOf(t) === null;
}
function Za(e) {
  let [t, n] = e(), r = qe();
  return (...s) => {
    t(...s), r.dispose(), r.microTask(n);
  };
}
var OY = Object.defineProperty, NY = (e, t, n) => t in e ? OY(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, vf = (e, t, n) => (NY(e, typeof t != "symbol" ? t + "" : t, n), n), X_ = ((e) => (e[e.Push = 0] = "Push", e[e.Pop = 1] = "Pop", e))(X_ || {});
let FY = { 0(e, t) {
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
} }, IY = class q_ extends G_ {
  constructor() {
    super(...arguments), vf(this, "actions", { push: (t) => this.send({ type: 0, id: t }), pop: (t) => this.send({ type: 1, id: t }) }), vf(this, "selectors", { isTop: (t, n) => t.stack[t.stack.length - 1] === n, inStack: (t, n) => t.stack.includes(n) });
  }
  static new() {
    return new q_({ stack: [] });
  }
  reduce(t, n) {
    return Ae(n.type, FY, t, n);
  }
};
const pa = new U_(() => IY.new());
var Kl = { exports: {} }, Qa = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gf;
function VY() {
  if (gf) return Qa;
  gf = 1;
  var e = E;
  function t(l, u) {
    return l === u && (l !== 0 || 1 / l === 1 / u) || l !== l && u !== u;
  }
  var n = typeof Object.is == "function" ? Object.is : t, r = e.useSyncExternalStore, s = e.useRef, i = e.useEffect, o = e.useMemo, a = e.useDebugValue;
  return Qa.useSyncExternalStoreWithSelector = function(l, u, c, d, f) {
    var m = s(null);
    if (m.current === null) {
      var _ = { hasValue: !1, value: null };
      m.current = _;
    } else _ = m.current;
    m = o(
      function() {
        function v(w) {
          if (!h) {
            if (h = !0, y = w, w = d(w), f !== void 0 && _.hasValue) {
              var k = _.value;
              if (f(k, w))
                return b = k;
            }
            return b = w;
          }
          if (k = b, n(y, w)) return k;
          var j = d(w);
          return f !== void 0 && f(k, j) ? (y = w, k) : (y = w, b = j);
        }
        var h = !1, y, b, x = c === void 0 ? null : c;
        return [
          function() {
            return v(u());
          },
          x === null ? void 0 : function() {
            return v(x());
          }
        ];
      },
      [u, c, d, f]
    );
    var p = r(l, m[0], m[1]);
    return i(
      function() {
        _.hasValue = !0, _.value = p;
      },
      [p]
    ), a(p), p;
  }, Qa;
}
var el = {};
/**
 * @license React
 * use-sync-external-store-with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yf;
function BY() {
  return yf || (yf = 1, process.env.NODE_ENV !== "production" && function() {
    function e(l, u) {
      return l === u && (l !== 0 || 1 / l === 1 / u) || l !== l && u !== u;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = E, n = typeof Object.is == "function" ? Object.is : e, r = t.useSyncExternalStore, s = t.useRef, i = t.useEffect, o = t.useMemo, a = t.useDebugValue;
    el.useSyncExternalStoreWithSelector = function(l, u, c, d, f) {
      var m = s(null);
      if (m.current === null) {
        var _ = { hasValue: !1, value: null };
        m.current = _;
      } else _ = m.current;
      m = o(
        function() {
          function v(w) {
            if (!h) {
              if (h = !0, y = w, w = d(w), f !== void 0 && _.hasValue) {
                var k = _.value;
                if (f(k, w))
                  return b = k;
              }
              return b = w;
            }
            if (k = b, n(y, w))
              return k;
            var j = d(w);
            return f !== void 0 && f(k, j) ? (y = w, k) : (y = w, b = j);
          }
          var h = !1, y, b, x = c === void 0 ? null : c;
          return [
            function() {
              return v(u());
            },
            x === null ? void 0 : function() {
              return v(x());
            }
          ];
        },
        [u, c, d, f]
      );
      var p = r(l, m[0], m[1]);
      return i(
        function() {
          _.hasValue = !0, _.value = p;
        },
        [p]
      ), a(p), p;
    }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), el;
}
process.env.NODE_ENV === "production" ? Kl.exports = VY() : Kl.exports = BY();
var zY = Kl.exports;
function Be(e, t, n = J_) {
  return zY.useSyncExternalStoreWithSelector(te((r) => e.subscribe(WY, r)), te(() => e.state), te(() => e.state), te(t), n);
}
function WY(e) {
  return e;
}
function jr(e, t) {
  let n = Ne(), r = pa.get(t), [s, i] = Be(r, q((o) => [r.selectors.isTop(o, n), r.selectors.inStack(o, n)], [r, n]));
  return be(() => {
    if (e) return r.actions.push(n), () => r.actions.pop(n);
  }, [r, e, n]), e ? i ? s : !0 : !1;
}
let Gl = /* @__PURE__ */ new Map(), lr = /* @__PURE__ */ new Map();
function Mf(e) {
  var t;
  let n = (t = lr.get(e)) != null ? t : 0;
  return lr.set(e, n + 1), n !== 0 ? () => bf(e) : (Gl.set(e, { "aria-hidden": e.getAttribute("aria-hidden"), inert: e.inert }), e.setAttribute("aria-hidden", "true"), e.inert = !0, () => bf(e));
}
function bf(e) {
  var t;
  let n = (t = lr.get(e)) != null ? t : 1;
  if (n === 1 ? lr.delete(e) : lr.set(e, n - 1), n !== 1) return;
  let r = Gl.get(e);
  r && (r["aria-hidden"] === null ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", r["aria-hidden"]), e.inert = r.inert, Gl.delete(e));
}
function Z_(e, { allowed: t, disallowed: n } = {}) {
  let r = jr(e, "inert-others");
  be(() => {
    var s, i;
    if (!r) return;
    let o = qe();
    for (let l of (s = n == null ? void 0 : n()) != null ? s : []) l && o.add(Mf(l));
    let a = (i = t == null ? void 0 : t()) != null ? i : [];
    for (let l of a) {
      if (!l) continue;
      let u = fn(l);
      if (!u) continue;
      let c = l.parentElement;
      for (; c && c !== u.body; ) {
        for (let d of c.children) a.some((f) => d.contains(f)) || o.add(Mf(d));
        c = c.parentElement;
      }
    }
    return o.dispose;
  }, [r, t, n]);
}
function Q_(e, t, n) {
  let r = Jt((s) => {
    let i = s.getBoundingClientRect();
    i.x === 0 && i.y === 0 && i.width === 0 && i.height === 0 && n();
  });
  se(() => {
    if (!e) return;
    let s = t === null ? null : Xe(t) ? t : t.current;
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
let wo = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "details>summary", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(","), UY = ["[data-autofocus]"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var lt = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e[e.AutoFocus = 64] = "AutoFocus", e))(lt || {}), Jl = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Jl || {}), KY = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(KY || {});
function eh(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(wo)).sort((t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)));
}
function GY(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(UY)).sort((t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var sc = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(sc || {});
function th(e, t = 0) {
  var n;
  return e === ((n = fn(e)) == null ? void 0 : n.body) ? !1 : Ae(t, { 0() {
    return e.matches(wo);
  }, 1() {
    let r = e;
    for (; r !== null; ) {
      if (r.matches(wo)) return !0;
      r = r.parentElement;
    }
    return !1;
  } });
}
var JY = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(JY || {});
typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function Lt(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let XY = ["textarea", "input"].join(",");
function qY(e) {
  var t, n;
  return (n = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, XY)) != null ? n : !1;
}
function nh(e, t = (n) => n) {
  return e.slice().sort((n, r) => {
    let s = t(n), i = t(r);
    if (s === null || i === null) return 0;
    let o = s.compareDocumentPosition(i);
    return o & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : o & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function ZY(e, t, n = e === null ? document.body : bo(e)) {
  return kn(eh(n), t, { relativeTo: e });
}
function kn(e, t, { sorted: n = !0, relativeTo: r = null, skipElements: s = [] } = {}) {
  let i = Array.isArray(e) ? e.length > 0 ? bo(e[0]) : document : bo(e), o = Array.isArray(e) ? n ? nh(e) : e : t & 64 ? GY(e) : eh(e);
  s.length > 0 && o.length > 1 && (o = o.filter((m) => !s.some((_) => _ != null && "current" in _ ? (_ == null ? void 0 : _.current) === m : _ === m))), r = r != null ? r : i == null ? void 0 : i.activeElement;
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
  } while (f !== x_(f));
  return t & 6 && qY(f) && f.select(), 2;
}
function rh() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function QY() {
  return /Android/gi.test(window.navigator.userAgent);
}
function xf() {
  return rh() || QY();
}
function Yn(e, t, n, r) {
  let s = Jt(n);
  se(() => {
    if (!e) return;
    function i(o) {
      s.current(o);
    }
    return document.addEventListener(t, i, r), () => document.removeEventListener(t, i, r);
  }, [e, t, r]);
}
function oh(e, t, n, r) {
  let s = Jt(n);
  se(() => {
    if (!e) return;
    function i(o) {
      s.current(o);
    }
    return window.addEventListener(t, i, r), () => window.removeEventListener(t, i, r);
  }, [e, t, r]);
}
const wf = 30;
function sh(e, t, n) {
  let r = Jt(n), s = q(function(a, l) {
    if (a.defaultPrevented) return;
    let u = l(a);
    if (u === null || !u.getRootNode().contains(u) || !u.isConnected) return;
    let c = function d(f) {
      return typeof f == "function" ? d(f()) : Array.isArray(f) || f instanceof Set ? f : [f];
    }(t);
    for (let d of c) if (d !== null && (d.contains(u) || a.composed && a.composedPath().includes(d))) return;
    return !th(u, sc.Loose) && u.tabIndex !== -1 && a.preventDefault(), r.current(a, u);
  }, [r, t]), i = X(null);
  Yn(e, "pointerdown", (a) => {
    var l, u;
    xf() || (i.current = ((u = (l = a.composedPath) == null ? void 0 : l.call(a)) == null ? void 0 : u[0]) || a.target);
  }, !0), Yn(e, "pointerup", (a) => {
    if (xf() || !i.current) return;
    let l = i.current;
    return i.current = null, s(a, () => l);
  }, !0);
  let o = X({ x: 0, y: 0 });
  Yn(e, "touchstart", (a) => {
    o.current.x = a.touches[0].clientX, o.current.y = a.touches[0].clientY;
  }, !0), Yn(e, "touchend", (a) => {
    let l = { x: a.changedTouches[0].clientX, y: a.changedTouches[0].clientY };
    if (!(Math.abs(l.x - o.current.x) >= wf || Math.abs(l.y - o.current.y) >= wf)) return s(a, () => ut(a.target) ? a.target : null);
  }, !0), oh(e, "blur", (a) => s(a, () => MY(window.document.activeElement) ? window.document.activeElement : null), !0);
}
function gr(...e) {
  return me(() => fn(...e), [...e]);
}
var eL = ((e) => (e[e.Ignore = 0] = "Ignore", e[e.Select = 1] = "Select", e[e.Close = 2] = "Close", e))(eL || {});
const Ur = { Ignore: { kind: 0 }, Select: (e) => ({ kind: 1, target: e }), Close: { kind: 2 } }, tL = 200, Yf = 5;
function nL(e, { trigger: t, action: n, close: r, select: s }) {
  let i = X(null), o = X(null), a = X(null);
  Yn(e && t !== null, "pointerdown", (l) => {
    A_(l == null ? void 0 : l.target) && t != null && t.contains(l.target) && (o.current = l.x, a.current = l.y, i.current = l.timeStamp);
  }), Yn(e && t !== null, "pointerup", (l) => {
    var u, c;
    let d = i.current;
    if (d === null || (i.current = null, !ut(l.target)) || Math.abs(l.x - ((u = o.current) != null ? u : l.x)) < Yf && Math.abs(l.y - ((c = a.current) != null ? c : l.y)) < Yf) return;
    let f = n(l);
    switch (f.kind) {
      case 0:
        return;
      case 1: {
        l.timeStamp - d > tL && (s(f.target), r());
        break;
      }
      case 2: {
        r();
        break;
      }
    }
  }, { capture: !0 });
}
function ih(e, t, n, r) {
  let s = Jt(n);
  se(() => {
    e = e != null ? e : window;
    function i(o) {
      s.current(o);
    }
    return e.addEventListener(t, i, r), () => e.removeEventListener(t, i, r);
  }, [e, t, r]);
}
function ic(e, t) {
  return me(() => {
    var n;
    if (e.type) return e.type;
    let r = (n = e.as) != null ? n : "button";
    if (typeof r == "string" && r.toLowerCase() === "button" || (t == null ? void 0 : t.tagName) === "BUTTON" && !t.hasAttribute("type")) return "button";
  }, [e.type, e.as, t]);
}
function rL(e) {
  return Rg(e.subscribe, e.getSnapshot, e.getSnapshot);
}
function oL(e, t) {
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
function sL() {
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
function iL() {
  return rh() ? { before({ doc: e, d: t, meta: n }) {
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
        if (ut(a.target)) try {
          let l = a.target.closest("a");
          if (!l) return;
          let { hash: u } = new URL(l.href), c = e.querySelector(u);
          ut(c) && !r(c) && (o = c);
        } catch {
        }
      }, !0), t.group((a) => {
        t.addEventListener(e, "touchstart", (l) => {
          if (a.dispose(), ut(l.target) && yY(l.target)) if (r(l.target)) {
            let u = l.target;
            for (; u.parentElement && r(u.parentElement); ) u = u.parentElement;
            a.style(u, "overscrollBehavior", "contain");
          } else a.style(l.target, "touchAction", "none");
        });
      }), t.addEventListener(e, "touchmove", (a) => {
        if (ut(a.target)) {
          if (P_(a.target)) return;
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
function aL() {
  return { before({ doc: e, d: t }) {
    t.style(e.documentElement, "overflow", "hidden");
  } };
}
function Lf(e) {
  let t = {};
  for (let n of e) Object.assign(t, n(t));
  return t;
}
let on = oL(() => /* @__PURE__ */ new Map(), { PUSH(e, t) {
  var n;
  let r = (n = this.get(e)) != null ? n : { doc: e, count: 0, d: qe(), meta: /* @__PURE__ */ new Set(), computedMeta: {} };
  return r.count++, r.meta.add(t), r.computedMeta = Lf(r.meta), this.set(e, r), this;
}, POP(e, t) {
  let n = this.get(e);
  return n && (n.count--, n.meta.delete(t), n.computedMeta = Lf(n.meta)), this;
}, SCROLL_PREVENT(e) {
  let t = { doc: e.doc, d: e.d, meta() {
    return e.computedMeta;
  } }, n = [iL(), sL(), aL()];
  n.forEach(({ before: r }) => r == null ? void 0 : r(t)), n.forEach(({ after: r }) => r == null ? void 0 : r(t));
}, SCROLL_ALLOW({ d: e }) {
  e.dispose();
}, TEARDOWN({ doc: e }) {
  this.delete(e);
} });
on.subscribe(() => {
  let e = on.getSnapshot(), t = /* @__PURE__ */ new Map();
  for (let [n] of e) t.set(n, n.documentElement.style.overflow);
  for (let n of e.values()) {
    let r = t.get(n.doc) === "hidden", s = n.count !== 0;
    (s && !r || !s && r) && on.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n), n.count === 0 && on.dispatch("TEARDOWN", n);
  }
});
function lL(e, t, n = () => ({ containers: [] })) {
  let r = rL(on), s = t ? r.get(t) : void 0, i = s ? s.count > 0 : !1;
  return be(() => {
    if (!(!t || !e)) return on.dispatch("PUSH", t, n), () => on.dispatch("POP", t, n);
  }, [e, t]), i;
}
function ah(e, t, n = () => [document.body]) {
  let r = jr(e, "scroll-lock");
  lL(r, t, (s) => {
    var i;
    return { containers: [...(i = s.containers) != null ? i : [], n] };
  });
}
function Sf(e) {
  return [e.screenX, e.screenY];
}
function uL() {
  let e = X([-1, -1]);
  return { wasMoved(t) {
    let n = Sf(t);
    return e.current[0] === n[0] && e.current[1] === n[1] ? !1 : (e.current = n, !0);
  }, update(t) {
    e.current = Sf(t);
  } };
}
function cL(e = 0) {
  let [t, n] = ne(e), r = q((l) => n(l), []), s = q((l) => n((u) => u | l), []), i = q((l) => (t & l) === l, [t]), o = q((l) => n((u) => u & ~l), []), a = q((l) => n((u) => u ^ l), []);
  return { flags: t, setFlag: r, addFlag: s, hasFlag: i, removeFlag: o, toggleFlag: a };
}
var kf, Df;
typeof process != "undefined" && typeof globalThis != "undefined" && typeof Element != "undefined" && ((kf = process == null ? void 0 : process.env) == null ? void 0 : kf.NODE_ENV) === "test" && typeof ((Df = Element == null ? void 0 : Element.prototype) == null ? void 0 : Df.getAnimations) == "undefined" && (Element.prototype.getAnimations = function() {
  return console.warn(["Headless UI has polyfilled `Element.prototype.getAnimations` for your tests.", "Please install a proper polyfill e.g. `jsdom-testing-mocks`, to silence these warnings.", "", "Example usage:", "```js", "import { mockAnimationsApi } from 'jsdom-testing-mocks'", "mockAnimationsApi()", "```"].join(`
`)), [];
});
var dL = ((e) => (e[e.None = 0] = "None", e[e.Closed = 1] = "Closed", e[e.Enter = 2] = "Enter", e[e.Leave = 4] = "Leave", e))(dL || {});
function ac(e) {
  let t = {};
  for (let n in e) e[n] === !0 && (t[`data-${n}`] = "");
  return t;
}
function lc(e, t, n, r) {
  let [s, i] = ne(n), { hasFlag: o, addFlag: a, removeFlag: l } = cL(e && s ? 3 : 0), u = X(!1), c = X(!1), d = At();
  return be(() => {
    var f;
    if (e) {
      if (n && i(!0), !t) {
        n && a(3);
        return;
      }
      return (f = r == null ? void 0 : r.start) == null || f.call(r, n), fL(t, { inFlight: u, prepare() {
        c.current ? c.current = !1 : c.current = u.current, u.current = !0, !c.current && (n ? (a(3), l(4)) : (a(4), l(2)));
      }, run() {
        c.current ? n ? (l(3), a(4)) : (l(4), a(3)) : n ? l(1) : a(1);
      }, done() {
        var m;
        c.current && _L(t) || (u.current = !1, l(7), n || i(!1), (m = r == null ? void 0 : r.end) == null || m.call(r, n));
      } });
    }
  }, [e, n, t, d]), e ? [s, { closed: o(1), enter: o(2), leave: o(4), transition: o(2) || o(4) }] : [n, { closed: void 0, enter: void 0, leave: void 0, transition: void 0 }];
}
function fL(e, { prepare: t, run: n, done: r, inFlight: s }) {
  let i = qe();
  return pL(e, { prepare: t, inFlight: s }), i.nextFrame(() => {
    n(), i.requestAnimationFrame(() => {
      i.add(mL(e, r));
    });
  }), i.dispose;
}
function mL(e, t) {
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
function pL(e, { inFlight: t, prepare: n }) {
  if (t != null && t.current) {
    n();
    return;
  }
  let r = e.style.transition;
  e.style.transition = "none", n(), e.offsetHeight, e.style.transition = r;
}
function _L(e) {
  var t, n;
  return ((n = (t = e.getAnimations) == null ? void 0 : t.call(e)) != null ? n : []).some((r) => r instanceof CSSTransition && r.playState !== "finished");
}
function uc(e, t) {
  let n = X([]), r = te(e);
  se(() => {
    let s = [...n.current];
    for (let [i, o] of t.entries()) if (n.current[i] !== o) {
      let a = r(t, s);
      return n.current = t, a;
    }
  }, [r, ...t]);
}
function _a() {
  return typeof window != "undefined";
}
function Fn(e) {
  return lh(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Je(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function bt(e) {
  var t;
  return (t = (lh(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function lh(e) {
  return _a() ? e instanceof Node || e instanceof Je(e).Node : !1;
}
function Re(e) {
  return _a() ? e instanceof Element || e instanceof Je(e).Element : !1;
}
function gt(e) {
  return _a() ? e instanceof HTMLElement || e instanceof Je(e).HTMLElement : !1;
}
function Tf(e) {
  return !_a() || typeof ShadowRoot == "undefined" ? !1 : e instanceof ShadowRoot || e instanceof Je(e).ShadowRoot;
}
const hL = /* @__PURE__ */ new Set(["inline", "contents"]);
function Ar(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: s
  } = dt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !hL.has(s);
}
const vL = /* @__PURE__ */ new Set(["table", "td", "th"]);
function gL(e) {
  return vL.has(Fn(e));
}
const yL = [":popover-open", ":modal"];
function ha(e) {
  return yL.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const ML = ["transform", "translate", "scale", "rotate", "perspective"], bL = ["transform", "translate", "scale", "rotate", "perspective", "filter"], xL = ["paint", "layout", "strict", "content"];
function cc(e) {
  const t = dc(), n = Re(e) ? dt(e) : e;
  return ML.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || bL.some((r) => (n.willChange || "").includes(r)) || xL.some((r) => (n.contain || "").includes(r));
}
function wL(e) {
  let t = Wt(e);
  for (; gt(t) && !Cn(t); ) {
    if (cc(t))
      return t;
    if (ha(t))
      return null;
    t = Wt(t);
  }
  return null;
}
function dc() {
  return typeof CSS == "undefined" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const YL = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Cn(e) {
  return YL.has(Fn(e));
}
function dt(e) {
  return Je(e).getComputedStyle(e);
}
function va(e) {
  return Re(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Wt(e) {
  if (Fn(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Tf(e) && e.host || // Fallback.
    bt(e)
  );
  return Tf(t) ? t.host : t;
}
function uh(e) {
  const t = Wt(e);
  return Cn(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : gt(t) && Ar(t) ? t : uh(t);
}
function yr(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const s = uh(e), i = s === ((r = e.ownerDocument) == null ? void 0 : r.body), o = Je(s);
  if (i) {
    const a = Xl(o);
    return t.concat(o, o.visualViewport || [], Ar(s) ? s : [], a && n ? yr(a) : []);
  }
  return t.concat(s, yr(s, [], n));
}
function Xl(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function LL() {
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? e.brands.map((t) => {
    let {
      brand: n,
      version: r
    } = t;
    return n + "/" + r;
  }).join(" ") : navigator.userAgent;
}
const SL = ["top", "right", "bottom", "left"], Tt = Math.min, Ce = Math.max, Mr = Math.round, Kr = Math.floor, vt = (e) => ({
  x: e,
  y: e
}), kL = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, DL = {
  start: "end",
  end: "start"
};
function ql(e, t, n) {
  return Ce(e, Tt(t, n));
}
function yt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Et(e) {
  return e.split("-")[0];
}
function In(e) {
  return e.split("-")[1];
}
function fc(e) {
  return e === "x" ? "y" : "x";
}
function mc(e) {
  return e === "y" ? "height" : "width";
}
const TL = /* @__PURE__ */ new Set(["top", "bottom"]);
function pt(e) {
  return TL.has(Et(e)) ? "y" : "x";
}
function pc(e) {
  return fc(pt(e));
}
function EL(e, t, n) {
  n === void 0 && (n = !1);
  const r = In(e), s = pc(e), i = mc(s);
  let o = s === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (o = Yo(o)), [o, Yo(o)];
}
function jL(e) {
  const t = Yo(e);
  return [Zl(e), t, Zl(t)];
}
function Zl(e) {
  return e.replace(/start|end/g, (t) => DL[t]);
}
const Ef = ["left", "right"], jf = ["right", "left"], AL = ["top", "bottom"], PL = ["bottom", "top"];
function CL(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? jf : Ef : t ? Ef : jf;
    case "left":
    case "right":
      return t ? AL : PL;
    default:
      return [];
  }
}
function $L(e, t, n, r) {
  const s = In(e);
  let i = CL(Et(e), n === "start", r);
  return s && (i = i.map((o) => o + "-" + s), t && (i = i.concat(i.map(Zl)))), i;
}
function Yo(e) {
  return e.replace(/left|right|bottom|top/g, (t) => kL[t]);
}
function HL(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function ch(e) {
  return typeof e != "number" ? HL(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Lo(e) {
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
function Af(e, t, n) {
  let {
    reference: r,
    floating: s
  } = e;
  const i = pt(t), o = pc(t), a = mc(o), l = Et(t), u = i === "y", c = r.x + r.width / 2 - s.width / 2, d = r.y + r.height / 2 - s.height / 2, f = r[a] / 2 - s[a] / 2;
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
  switch (In(t)) {
    case "start":
      m[o] -= f * (n && u ? -1 : 1);
      break;
    case "end":
      m[o] += f * (n && u ? -1 : 1);
      break;
  }
  return m;
}
const RL = async (e, t, n) => {
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
  } = Af(u, r, l), f = r, m = {}, _ = 0;
  for (let p = 0; p < a.length; p++) {
    const {
      name: v,
      fn: h
    } = a[p], {
      x: y,
      y: b,
      data: x,
      reset: w
    } = await h({
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
    c = y != null ? y : c, d = b != null ? b : d, m = {
      ...m,
      [v]: {
        ...m[v],
        ...x
      }
    }, w && _ <= 50 && (_++, typeof w == "object" && (w.placement && (f = w.placement), w.rects && (u = w.rects === !0 ? await o.getElementRects({
      reference: e,
      floating: t,
      strategy: s
    }) : w.rects), {
      x: c,
      y: d
    } = Af(u, f, l)), p = -1);
  }
  return {
    x: c,
    y: d,
    placement: f,
    strategy: s,
    middlewareData: m
  };
};
async function $n(e, t) {
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
  } = yt(t, e), _ = ch(m), v = a[f ? d === "floating" ? "reference" : "floating" : d], h = Lo(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(v))) == null || n ? v : v.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(a.floating)),
    boundary: u,
    rootBoundary: c,
    strategy: l
  })), y = d === "floating" ? {
    x: r,
    y: s,
    width: o.floating.width,
    height: o.floating.height
  } : o.reference, b = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(a.floating)), x = await (i.isElement == null ? void 0 : i.isElement(b)) ? await (i.getScale == null ? void 0 : i.getScale(b)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, w = Lo(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: y,
    offsetParent: b,
    strategy: l
  }) : y);
  return {
    top: (h.top - w.top + _.top) / x.y,
    bottom: (w.bottom - h.bottom + _.bottom) / x.y,
    left: (h.left - w.left + _.left) / x.x,
    right: (w.right - h.right + _.right) / x.x
  };
}
const OL = (e) => ({
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
    } = yt(e, t) || {};
    if (u == null)
      return {};
    const d = ch(c), f = {
      x: n,
      y: r
    }, m = pc(s), _ = mc(m), p = await o.getDimensions(u), v = m === "y", h = v ? "top" : "left", y = v ? "bottom" : "right", b = v ? "clientHeight" : "clientWidth", x = i.reference[_] + i.reference[m] - f[m] - i.floating[_], w = f[m] - i.reference[m], k = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(u));
    let j = k ? k[b] : 0;
    (!j || !await (o.isElement == null ? void 0 : o.isElement(k))) && (j = a.floating[b] || i.floating[_]);
    const L = x / 2 - w / 2, F = j / 2 - p[_] / 2 - 1, S = Tt(d[h], F), $ = Tt(d[y], F), z = S, U = j - p[_] - $, N = j / 2 - p[_] / 2 + L, C = ql(z, N, U), P = !l.arrow && In(s) != null && N !== C && i.reference[_] / 2 - (N < z ? S : $) - p[_] / 2 < 0, R = P ? N < z ? N - z : N - U : 0;
    return {
      [m]: f[m] + R,
      data: {
        [m]: C,
        centerOffset: N - C - R,
        ...P && {
          alignmentOffset: R
        }
      },
      reset: P
    };
  }
}), NL = function(e) {
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
        fallbackAxisSideDirection: _ = "none",
        flipAlignment: p = !0,
        ...v
      } = yt(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const h = Et(s), y = pt(a), b = Et(a) === a, x = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), w = f || (b || !p ? [Yo(a)] : jL(a)), k = _ !== "none";
      !f && k && w.push(...$L(a, p, _, x));
      const j = [a, ...w], L = await $n(t, v), F = [];
      let S = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (c && F.push(L[h]), d) {
        const N = EL(s, o, x);
        F.push(L[N[0]], L[N[1]]);
      }
      if (S = [...S, {
        placement: s,
        overflows: F
      }], !F.every((N) => N <= 0)) {
        var $, z;
        const N = ((($ = i.flip) == null ? void 0 : $.index) || 0) + 1, C = j[N];
        if (C && (!(d === "alignment" ? y !== pt(C) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        S.every((Y) => pt(Y.placement) === y ? Y.overflows[0] > 0 : !0)))
          return {
            data: {
              index: N,
              overflows: S
            },
            reset: {
              placement: C
            }
          };
        let P = (z = S.filter((R) => R.overflows[0] <= 0).sort((R, Y) => R.overflows[1] - Y.overflows[1])[0]) == null ? void 0 : z.placement;
        if (!P)
          switch (m) {
            case "bestFit": {
              var U;
              const R = (U = S.filter((Y) => {
                if (k) {
                  const A = pt(Y.placement);
                  return A === y || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  A === "y";
                }
                return !0;
              }).map((Y) => [Y.placement, Y.overflows.filter((A) => A > 0).reduce((A, V) => A + V, 0)]).sort((Y, A) => Y[1] - A[1])[0]) == null ? void 0 : U[0];
              R && (P = R);
              break;
            }
            case "initialPlacement":
              P = a;
              break;
          }
        if (s !== P)
          return {
            reset: {
              placement: P
            }
          };
      }
      return {};
    }
  };
};
function Pf(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Cf(e) {
  return SL.some((t) => e[t] >= 0);
}
const FL = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...s
      } = yt(e, t);
      switch (r) {
        case "referenceHidden": {
          const i = await $n(t, {
            ...s,
            elementContext: "reference"
          }), o = Pf(i, n.reference);
          return {
            data: {
              referenceHiddenOffsets: o,
              referenceHidden: Cf(o)
            }
          };
        }
        case "escaped": {
          const i = await $n(t, {
            ...s,
            altBoundary: !0
          }), o = Pf(i, n.floating);
          return {
            data: {
              escapedOffsets: o,
              escaped: Cf(o)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, dh = /* @__PURE__ */ new Set(["left", "top"]);
async function IL(e, t) {
  const {
    placement: n,
    platform: r,
    elements: s
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(s.floating)), o = Et(n), a = In(n), l = pt(n) === "y", u = dh.has(o) ? -1 : 1, c = i && l ? -1 : 1, d = yt(t, e);
  let {
    mainAxis: f,
    crossAxis: m,
    alignmentAxis: _
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: d.mainAxis || 0,
    crossAxis: d.crossAxis || 0,
    alignmentAxis: d.alignmentAxis
  };
  return a && typeof _ == "number" && (m = a === "end" ? _ * -1 : _), l ? {
    x: m * c,
    y: f * u
  } : {
    x: f * u,
    y: m * c
  };
}
const VL = function(e) {
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
      } = t, l = await IL(t, e);
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
}, BL = function(e) {
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
          fn: (v) => {
            let {
              x: h,
              y
            } = v;
            return {
              x: h,
              y
            };
          }
        },
        ...l
      } = yt(e, t), u = {
        x: n,
        y: r
      }, c = await $n(t, l), d = pt(Et(s)), f = fc(d);
      let m = u[f], _ = u[d];
      if (i) {
        const v = f === "y" ? "top" : "left", h = f === "y" ? "bottom" : "right", y = m + c[v], b = m - c[h];
        m = ql(y, m, b);
      }
      if (o) {
        const v = d === "y" ? "top" : "left", h = d === "y" ? "bottom" : "right", y = _ + c[v], b = _ - c[h];
        _ = ql(y, _, b);
      }
      const p = a.fn({
        ...t,
        [f]: m,
        [d]: _
      });
      return {
        ...p,
        data: {
          x: p.x - n,
          y: p.y - r,
          enabled: {
            [f]: i,
            [d]: o
          }
        }
      };
    }
  };
}, zL = function(e) {
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
      } = yt(e, t), c = {
        x: n,
        y: r
      }, d = pt(s), f = fc(d);
      let m = c[f], _ = c[d];
      const p = yt(a, t), v = typeof p == "number" ? {
        mainAxis: p,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...p
      };
      if (l) {
        const b = f === "y" ? "height" : "width", x = i.reference[f] - i.floating[b] + v.mainAxis, w = i.reference[f] + i.reference[b] - v.mainAxis;
        m < x ? m = x : m > w && (m = w);
      }
      if (u) {
        var h, y;
        const b = f === "y" ? "width" : "height", x = dh.has(Et(s)), w = i.reference[d] - i.floating[b] + (x && ((h = o.offset) == null ? void 0 : h[d]) || 0) + (x ? 0 : v.crossAxis), k = i.reference[d] + i.reference[b] + (x ? 0 : ((y = o.offset) == null ? void 0 : y[d]) || 0) - (x ? v.crossAxis : 0);
        _ < w ? _ = w : _ > k && (_ = k);
      }
      return {
        [f]: m,
        [d]: _
      };
    }
  };
}, WL = function(e) {
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
      } = yt(e, t), c = await $n(t, u), d = Et(s), f = In(s), m = pt(s) === "y", {
        width: _,
        height: p
      } = i.floating;
      let v, h;
      d === "top" || d === "bottom" ? (v = d, h = f === (await (o.isRTL == null ? void 0 : o.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (h = d, v = f === "end" ? "top" : "bottom");
      const y = p - c.top - c.bottom, b = _ - c.left - c.right, x = Tt(p - c[v], y), w = Tt(_ - c[h], b), k = !t.middlewareData.shift;
      let j = x, L = w;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (L = b), (r = t.middlewareData.shift) != null && r.enabled.y && (j = y), k && !f) {
        const S = Ce(c.left, 0), $ = Ce(c.right, 0), z = Ce(c.top, 0), U = Ce(c.bottom, 0);
        m ? L = _ - 2 * (S !== 0 || $ !== 0 ? S + $ : Ce(c.left, c.right)) : j = p - 2 * (z !== 0 || U !== 0 ? z + U : Ce(c.top, c.bottom));
      }
      await l({
        ...t,
        availableWidth: L,
        availableHeight: j
      });
      const F = await o.getDimensions(a.floating);
      return _ !== F.width || p !== F.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function fh(e) {
  const t = dt(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const s = gt(e), i = s ? e.offsetWidth : n, o = s ? e.offsetHeight : r, a = Mr(n) !== i || Mr(r) !== o;
  return a && (n = i, r = o), {
    width: n,
    height: r,
    $: a
  };
}
function _c(e) {
  return Re(e) ? e : e.contextElement;
}
function Dn(e) {
  const t = _c(e);
  if (!gt(t))
    return vt(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: s,
    $: i
  } = fh(t);
  let o = (i ? Mr(n.width) : n.width) / r, a = (i ? Mr(n.height) : n.height) / s;
  return (!o || !Number.isFinite(o)) && (o = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: o,
    y: a
  };
}
const UL = /* @__PURE__ */ vt(0);
function mh(e) {
  const t = Je(e);
  return !dc() || !t.visualViewport ? UL : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function KL(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Je(e) ? !1 : t;
}
function dn(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const s = e.getBoundingClientRect(), i = _c(e);
  let o = vt(1);
  t && (r ? Re(r) && (o = Dn(r)) : o = Dn(e));
  const a = KL(i, n, r) ? mh(i) : vt(0);
  let l = (s.left + a.x) / o.x, u = (s.top + a.y) / o.y, c = s.width / o.x, d = s.height / o.y;
  if (i) {
    const f = Je(i), m = r && Re(r) ? Je(r) : r;
    let _ = f, p = Xl(_);
    for (; p && r && m !== _; ) {
      const v = Dn(p), h = p.getBoundingClientRect(), y = dt(p), b = h.left + (p.clientLeft + parseFloat(y.paddingLeft)) * v.x, x = h.top + (p.clientTop + parseFloat(y.paddingTop)) * v.y;
      l *= v.x, u *= v.y, c *= v.x, d *= v.y, l += b, u += x, _ = Je(p), p = Xl(_);
    }
  }
  return Lo({
    width: c,
    height: d,
    x: l,
    y: u
  });
}
function ga(e, t) {
  const n = va(e).scrollLeft;
  return t ? t.left + n : dn(bt(e)).left + n;
}
function ph(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - ga(e, n), s = n.top + t.scrollTop;
  return {
    x: r,
    y: s
  };
}
function GL(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: s
  } = e;
  const i = s === "fixed", o = bt(r), a = t ? ha(t.floating) : !1;
  if (r === o || a && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = vt(1);
  const c = vt(0), d = gt(r);
  if ((d || !d && !i) && ((Fn(r) !== "body" || Ar(o)) && (l = va(r)), gt(r))) {
    const m = dn(r);
    u = Dn(r), c.x = m.x + r.clientLeft, c.y = m.y + r.clientTop;
  }
  const f = o && !d && !i ? ph(o, l) : vt(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + c.x + f.x,
    y: n.y * u.y - l.scrollTop * u.y + c.y + f.y
  };
}
function JL(e) {
  return Array.from(e.getClientRects());
}
function XL(e) {
  const t = bt(e), n = va(e), r = e.ownerDocument.body, s = Ce(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = Ce(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let o = -n.scrollLeft + ga(e);
  const a = -n.scrollTop;
  return dt(r).direction === "rtl" && (o += Ce(t.clientWidth, r.clientWidth) - s), {
    width: s,
    height: i,
    x: o,
    y: a
  };
}
const $f = 25;
function qL(e, t) {
  const n = Je(e), r = bt(e), s = n.visualViewport;
  let i = r.clientWidth, o = r.clientHeight, a = 0, l = 0;
  if (s) {
    i = s.width, o = s.height;
    const c = dc();
    (!c || c && t === "fixed") && (a = s.offsetLeft, l = s.offsetTop);
  }
  const u = ga(r);
  if (u <= 0) {
    const c = r.ownerDocument, d = c.body, f = getComputedStyle(d), m = c.compatMode === "CSS1Compat" && parseFloat(f.marginLeft) + parseFloat(f.marginRight) || 0, _ = Math.abs(r.clientWidth - d.clientWidth - m);
    _ <= $f && (i -= _);
  } else u <= $f && (i += u);
  return {
    width: i,
    height: o,
    x: a,
    y: l
  };
}
const ZL = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function QL(e, t) {
  const n = dn(e, !0, t === "fixed"), r = n.top + e.clientTop, s = n.left + e.clientLeft, i = gt(e) ? Dn(e) : vt(1), o = e.clientWidth * i.x, a = e.clientHeight * i.y, l = s * i.x, u = r * i.y;
  return {
    width: o,
    height: a,
    x: l,
    y: u
  };
}
function Hf(e, t, n) {
  let r;
  if (t === "viewport")
    r = qL(e, n);
  else if (t === "document")
    r = XL(bt(e));
  else if (Re(t))
    r = QL(t, n);
  else {
    const s = mh(e);
    r = {
      x: t.x - s.x,
      y: t.y - s.y,
      width: t.width,
      height: t.height
    };
  }
  return Lo(r);
}
function _h(e, t) {
  const n = Wt(e);
  return n === t || !Re(n) || Cn(n) ? !1 : dt(n).position === "fixed" || _h(n, t);
}
function e0(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = yr(e, [], !1).filter((a) => Re(a) && Fn(a) !== "body"), s = null;
  const i = dt(e).position === "fixed";
  let o = i ? Wt(e) : e;
  for (; Re(o) && !Cn(o); ) {
    const a = dt(o), l = cc(o);
    !l && a.position === "fixed" && (s = null), (i ? !l && !s : !l && a.position === "static" && !!s && ZL.has(s.position) || Ar(o) && !l && _h(e, o)) ? r = r.filter((c) => c !== o) : s = a, o = Wt(o);
  }
  return t.set(e, r), r;
}
function t0(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: s
  } = e;
  const o = [...n === "clippingAncestors" ? ha(t) ? [] : e0(t, this._c) : [].concat(n), r], a = o[0], l = o.reduce((u, c) => {
    const d = Hf(t, c, s);
    return u.top = Ce(d.top, u.top), u.right = Tt(d.right, u.right), u.bottom = Tt(d.bottom, u.bottom), u.left = Ce(d.left, u.left), u;
  }, Hf(t, a, s));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function n0(e) {
  const {
    width: t,
    height: n
  } = fh(e);
  return {
    width: t,
    height: n
  };
}
function r0(e, t, n) {
  const r = gt(t), s = bt(t), i = n === "fixed", o = dn(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = vt(0);
  function u() {
    l.x = ga(s);
  }
  if (r || !r && !i)
    if ((Fn(t) !== "body" || Ar(s)) && (a = va(t)), r) {
      const m = dn(t, !0, i, t);
      l.x = m.x + t.clientLeft, l.y = m.y + t.clientTop;
    } else s && u();
  i && !r && s && u();
  const c = s && !r && !i ? ph(s, a) : vt(0), d = o.left + a.scrollLeft - l.x - c.x, f = o.top + a.scrollTop - l.y - c.y;
  return {
    x: d,
    y: f,
    width: o.width,
    height: o.height
  };
}
function tl(e) {
  return dt(e).position === "static";
}
function Rf(e, t) {
  if (!gt(e) || dt(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return bt(e) === n && (n = n.ownerDocument.body), n;
}
function hh(e, t) {
  const n = Je(e);
  if (ha(e))
    return n;
  if (!gt(e)) {
    let s = Wt(e);
    for (; s && !Cn(s); ) {
      if (Re(s) && !tl(s))
        return s;
      s = Wt(s);
    }
    return n;
  }
  let r = Rf(e, t);
  for (; r && gL(r) && tl(r); )
    r = Rf(r, t);
  return r && Cn(r) && tl(r) && !cc(r) ? n : r || wL(e) || n;
}
const o0 = async function(e) {
  const t = this.getOffsetParent || hh, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: r0(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function s0(e) {
  return dt(e).direction === "rtl";
}
const i0 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: GL,
  getDocumentElement: bt,
  getClippingRect: t0,
  getOffsetParent: hh,
  getElementRects: o0,
  getClientRects: JL,
  getDimensions: n0,
  getScale: Dn,
  isElement: Re,
  isRTL: s0
};
function vh(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function a0(e, t) {
  let n = null, r;
  const s = bt(e);
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
    const _ = Kr(d), p = Kr(s.clientWidth - (c + f)), v = Kr(s.clientHeight - (d + m)), h = Kr(c), b = {
      rootMargin: -_ + "px " + -p + "px " + -v + "px " + -h + "px",
      threshold: Ce(0, Tt(1, l)) || 1
    };
    let x = !0;
    function w(k) {
      const j = k[0].intersectionRatio;
      if (j !== l) {
        if (!x)
          return o();
        j ? o(!1, j) : r = setTimeout(() => {
          o(!1, 1e-7);
        }, 1e3);
      }
      j === 1 && !vh(u, e.getBoundingClientRect()) && o(), x = !1;
    }
    try {
      n = new IntersectionObserver(w, {
        ...b,
        // Handle <iframe>s
        root: s.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(w, b);
    }
    n.observe(e);
  }
  return o(!0), i;
}
function gh(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: s = !0,
    ancestorResize: i = !0,
    elementResize: o = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, u = _c(e), c = s || i ? [...u ? yr(u) : [], ...yr(t)] : [];
  c.forEach((h) => {
    s && h.addEventListener("scroll", n, {
      passive: !0
    }), i && h.addEventListener("resize", n);
  });
  const d = u && a ? a0(u, n) : null;
  let f = -1, m = null;
  o && (m = new ResizeObserver((h) => {
    let [y] = h;
    y && y.target === u && m && (m.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      var b;
      (b = m) == null || b.observe(t);
    })), n();
  }), u && !l && m.observe(u), m.observe(t));
  let _, p = l ? dn(e) : null;
  l && v();
  function v() {
    const h = dn(e);
    p && !vh(p, h) && n(), p = h, _ = requestAnimationFrame(v);
  }
  return n(), () => {
    var h;
    c.forEach((y) => {
      s && y.removeEventListener("scroll", n), i && y.removeEventListener("resize", n);
    }), d == null || d(), (h = m) == null || h.disconnect(), m = null, l && cancelAnimationFrame(_);
  };
}
const nl = $n, l0 = VL, u0 = BL, c0 = NL, d0 = WL, f0 = FL, Of = OL, m0 = zL, p0 = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), s = {
    platform: i0,
    ...n
  }, i = {
    ...s.platform,
    _c: r
  };
  return RL(e, t, {
    ...s,
    platform: i
  });
};
var _0 = typeof document != "undefined", h0 = function() {
}, ao = _0 ? na : h0;
function So(e, t) {
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
        if (!So(e[r], t[r]))
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
      if (!(i === "_owner" && e.$$typeof) && !So(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function yh(e) {
  return typeof window == "undefined" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Nf(e, t) {
  const n = yh(e);
  return Math.round(t * n) / n;
}
function rl(e) {
  const t = M.useRef(e);
  return ao(() => {
    t.current = e;
  }), t;
}
function Mh(e) {
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
  } = e, [c, d] = M.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [f, m] = M.useState(r);
  So(f, r) || m(r);
  const [_, p] = M.useState(null), [v, h] = M.useState(null), y = M.useCallback((Y) => {
    Y !== k.current && (k.current = Y, p(Y));
  }, []), b = M.useCallback((Y) => {
    Y !== j.current && (j.current = Y, h(Y));
  }, []), x = i || _, w = o || v, k = M.useRef(null), j = M.useRef(null), L = M.useRef(c), F = l != null, S = rl(l), $ = rl(s), z = rl(u), U = M.useCallback(() => {
    if (!k.current || !j.current)
      return;
    const Y = {
      placement: t,
      strategy: n,
      middleware: f
    };
    $.current && (Y.platform = $.current), p0(k.current, j.current, Y).then((A) => {
      const V = {
        ...A,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: z.current !== !1
      };
      N.current && !So(L.current, V) && (L.current = V, ur.flushSync(() => {
        d(V);
      }));
    });
  }, [f, t, n, $, z]);
  ao(() => {
    u === !1 && L.current.isPositioned && (L.current.isPositioned = !1, d((Y) => ({
      ...Y,
      isPositioned: !1
    })));
  }, [u]);
  const N = M.useRef(!1);
  ao(() => (N.current = !0, () => {
    N.current = !1;
  }), []), ao(() => {
    if (x && (k.current = x), w && (j.current = w), x && w) {
      if (S.current)
        return S.current(x, w, U);
      U();
    }
  }, [x, w, U, S, F]);
  const C = M.useMemo(() => ({
    reference: k,
    floating: j,
    setReference: y,
    setFloating: b
  }), [y, b]), P = M.useMemo(() => ({
    reference: x,
    floating: w
  }), [x, w]), R = M.useMemo(() => {
    const Y = {
      position: n,
      left: 0,
      top: 0
    };
    if (!P.floating)
      return Y;
    const A = Nf(P.floating, c.x), V = Nf(P.floating, c.y);
    return a ? {
      ...Y,
      transform: "translate(" + A + "px, " + V + "px)",
      ...yh(P.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: A,
      top: V
    };
  }, [n, a, P.floating, c.x, c.y]);
  return M.useMemo(() => ({
    ...c,
    update: U,
    refs: C,
    elements: P,
    floatingStyles: R
  }), [c, U, C, P, R]);
}
const v0 = (e) => {
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
      return r && t(r) ? r.current != null ? Of({
        element: r.current,
        padding: s
      }).fn(n) : {} : r ? Of({
        element: r,
        padding: s
      }).fn(n) : {};
    }
  };
}, hc = (e, t) => ({
  ...l0(e),
  options: [e, t]
}), bh = (e, t) => ({
  ...u0(e),
  options: [e, t]
}), g0 = (e, t) => ({
  ...m0(e),
  options: [e, t]
}), xh = (e, t) => ({
  ...c0(e),
  options: [e, t]
}), wh = (e, t) => ({
  ...d0(e),
  options: [e, t]
}), y0 = (e, t) => ({
  ...f0(e),
  options: [e, t]
}), M0 = (e, t) => ({
  ...v0(e),
  options: [e, t]
}), Yh = {
  ...M
}, b0 = Yh.useInsertionEffect, x0 = b0 || ((e) => e());
function Lh(e) {
  const t = M.useRef(() => {
    if (process.env.NODE_ENV !== "production")
      throw new Error("Cannot call an event handler while rendering.");
  });
  return x0(() => {
    t.current = e;
  }), M.useCallback(function() {
    for (var n = arguments.length, r = new Array(n), s = 0; s < n; s++)
      r[s] = arguments[s];
    return t.current == null ? void 0 : t.current(...r);
  }, []);
}
var Ql = typeof document != "undefined" ? na : se;
let Ff = !1, w0 = 0;
const If = () => (
  // Ensure the id is unique with multiple independent versions of Floating UI
  // on <React 18
  "floating-ui-" + Math.random().toString(36).slice(2, 6) + w0++
);
function Y0() {
  const [e, t] = M.useState(() => Ff ? If() : void 0);
  return Ql(() => {
    e == null && t(If());
  }, []), M.useEffect(() => {
    Ff = !0;
  }, []), e;
}
const L0 = Yh.useId, S0 = L0 || Y0;
let br;
process.env.NODE_ENV !== "production" && (br = /* @__PURE__ */ new Set());
function k0() {
  for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  const s = "Floating UI: " + n.join(" ");
  if (!((e = br) != null && e.has(s))) {
    var i;
    (i = br) == null || i.add(s), console.warn(s);
  }
}
function D0() {
  for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  const s = "Floating UI: " + n.join(" ");
  if (!((e = br) != null && e.has(s))) {
    var i;
    (i = br) == null || i.add(s), console.error(s);
  }
}
function T0() {
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
const E0 = /* @__PURE__ */ M.createContext(null), j0 = /* @__PURE__ */ M.createContext(null), A0 = () => {
  var e;
  return ((e = M.useContext(E0)) == null ? void 0 : e.id) || null;
}, P0 = () => M.useContext(j0), C0 = "data-floating-ui-focusable";
function $0(e) {
  const {
    open: t = !1,
    onOpenChange: n,
    elements: r
  } = e, s = S0(), i = M.useRef({}), [o] = M.useState(() => T0()), a = A0() != null;
  if (process.env.NODE_ENV !== "production") {
    const m = r.reference;
    m && !Re(m) && D0("Cannot pass a virtual element to the `elements.reference` option,", "as it must be a real DOM element. Use `refs.setPositionReference()`", "instead.");
  }
  const [l, u] = M.useState(r.reference), c = Lh((m, _, p) => {
    i.current.openEvent = m ? _ : void 0, o.emit("openchange", {
      open: m,
      event: _,
      reason: p,
      nested: a
    }), n == null || n(m, _, p);
  }), d = M.useMemo(() => ({
    setPositionReference: u
  }), []), f = M.useMemo(() => ({
    reference: l || r.reference || null,
    floating: r.floating || null,
    domReference: r.reference
  }), [l, r.reference, r.floating]);
  return M.useMemo(() => ({
    dataRef: i,
    open: t,
    onOpenChange: c,
    elements: f,
    events: o,
    floatingId: s,
    refs: d
  }), [t, c, f, o, s, d]);
}
function H0(e) {
  e === void 0 && (e = {});
  const {
    nodeId: t
  } = e, n = $0({
    ...e,
    elements: {
      reference: null,
      floating: null,
      ...e.elements
    }
  }), r = e.rootContext || n, s = r.elements, [i, o] = M.useState(null), [a, l] = M.useState(null), c = (s == null ? void 0 : s.domReference) || i, d = M.useRef(null), f = P0();
  Ql(() => {
    c && (d.current = c);
  }, [c]);
  const m = Mh({
    ...e,
    elements: {
      ...s,
      ...a && {
        reference: a
      }
    }
  }), _ = M.useCallback((b) => {
    const x = Re(b) ? {
      getBoundingClientRect: () => b.getBoundingClientRect(),
      contextElement: b
    } : b;
    l(x), m.refs.setReference(x);
  }, [m.refs]), p = M.useCallback((b) => {
    (Re(b) || b === null) && (d.current = b, o(b)), (Re(m.refs.reference.current) || m.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    b !== null && !Re(b)) && m.refs.setReference(b);
  }, [m.refs]), v = M.useMemo(() => ({
    ...m.refs,
    setReference: p,
    setPositionReference: _,
    domReference: d
  }), [m.refs, p, _]), h = M.useMemo(() => ({
    ...m.elements,
    domReference: c
  }), [m.elements, c]), y = M.useMemo(() => ({
    ...m,
    ...r,
    refs: v,
    elements: h,
    nodeId: t
  }), [m, v, h, t, r]);
  return Ql(() => {
    r.dataRef.current.floatingContext = y;
    const b = f == null ? void 0 : f.nodesRef.current.find((x) => x.id === t);
    b && (b.context = y);
  }), M.useMemo(() => ({
    ...m,
    context: y,
    refs: v,
    elements: h
  }), [m, v, h, y]);
}
const Vf = "active", Bf = "selected";
function ol(e, t, n) {
  const r = /* @__PURE__ */ new Map(), s = n === "item";
  let i = e;
  if (s && e) {
    const {
      [Vf]: o,
      [Bf]: a,
      ...l
    } = e;
    i = l;
  }
  return {
    ...n === "floating" && {
      tabIndex: -1,
      [C0]: ""
    },
    ...i,
    ...t.map((o) => {
      const a = o ? o[n] : null;
      return typeof a == "function" ? e ? a(e) : null : a;
    }).concat(e).reduce((o, a) => (a && Object.entries(a).forEach((l) => {
      let [u, c] = l;
      if (!(s && [Vf, Bf].includes(u)))
        if (u.indexOf("on") === 0) {
          if (r.has(u) || r.set(u, []), typeof c == "function") {
            var d;
            (d = r.get(u)) == null || d.push(c), o[u] = function() {
              for (var f, m = arguments.length, _ = new Array(m), p = 0; p < m; p++)
                _[p] = arguments[p];
              return (f = r.get(u)) == null ? void 0 : f.map((v) => v(..._)).find((v) => v !== void 0);
            };
          }
        } else
          o[u] = c;
    }), o), {})
  };
}
function R0(e) {
  e === void 0 && (e = []);
  const t = e.map((a) => a == null ? void 0 : a.reference), n = e.map((a) => a == null ? void 0 : a.floating), r = e.map((a) => a == null ? void 0 : a.item), s = M.useCallback(
    (a) => ol(a, e, "reference"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), i = M.useCallback(
    (a) => ol(a, e, "floating"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    n
  ), o = M.useCallback(
    (a) => ol(a, e, "item"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    r
  );
  return M.useMemo(() => ({
    getReferenceProps: s,
    getFloatingProps: i,
    getItemProps: o
  }), [s, i, o]);
}
function zf(e, t) {
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
const O0 = (e) => ({
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
    } = yt(e, t), {
      rects: d,
      elements: {
        floating: f
      }
    } = t, m = n.current[o], _ = (u == null ? void 0 : u.current) || f, p = f.clientTop || _.clientTop, v = f.clientTop !== 0, h = _.clientTop !== 0, y = f === _;
    if (process.env.NODE_ENV !== "production" && (t.placement.startsWith("bottom") || k0('`placement` side must be "bottom" when using the `inner`', "middleware.")), !m)
      return {};
    const b = {
      ...t,
      ...await hc(-m.offsetTop - f.clientTop - d.reference.height / 2 - m.offsetHeight / 2 - i).fn(t)
    }, x = await nl(zf(b, _.scrollHeight + p + f.clientTop), c), w = await nl(b, {
      ...c,
      elementContext: "reference"
    }), k = Ce(0, x.top), j = b.y + k, S = (_.scrollHeight > _.clientHeight ? ($) => $ : Mr)(Ce(0, _.scrollHeight + (v && y || h ? p * 2 : 0) - k - Ce(0, x.bottom)));
    if (_.style.maxHeight = S + "px", _.scrollTop = k, s) {
      const $ = _.offsetHeight < m.offsetHeight * Tt(a, n.current.length) - 1 || w.top >= -l || w.bottom >= -l;
      ur.flushSync(() => s($));
    }
    return r && (r.current = await nl(zf({
      ...b,
      y: j
    }, _.offsetHeight + p + f.clientTop), c)), {
      y: j
    };
  }
});
function N0(e, t) {
  const {
    open: n,
    elements: r
  } = e, {
    enabled: s = !0,
    overflowRef: i,
    scrollRef: o,
    onChange: a
  } = t, l = Lh(a), u = M.useRef(!1), c = M.useRef(null), d = M.useRef(null);
  M.useEffect(() => {
    if (!s) return;
    function m(p) {
      if (p.ctrlKey || !_ || i.current == null)
        return;
      const v = p.deltaY, h = i.current.top >= -0.5, y = i.current.bottom >= -0.5, b = _.scrollHeight - _.clientHeight, x = v < 0 ? -1 : 1, w = v < 0 ? "max" : "min";
      _.scrollHeight <= _.clientHeight || (!h && v > 0 || !y && v < 0 ? (p.preventDefault(), ur.flushSync(() => {
        l((k) => k + Math[w](v, b * x));
      })) : /firefox/i.test(LL()) && (_.scrollTop += v));
    }
    const _ = (o == null ? void 0 : o.current) || r.floating;
    if (n && _)
      return _.addEventListener("wheel", m), requestAnimationFrame(() => {
        c.current = _.scrollTop, i.current != null && (d.current = {
          ...i.current
        });
      }), () => {
        c.current = null, d.current = null, _.removeEventListener("wheel", m);
      };
  }, [s, n, r.floating, i, o, l]);
  const f = M.useMemo(() => ({
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
          const _ = m.scrollTop - c.current;
          (i.current.bottom < -0.5 && _ < -1 || i.current.top < -0.5 && _ > 1) && ur.flushSync(() => l((p) => p + _));
        }
        requestAnimationFrame(() => {
          c.current = m.scrollTop;
        });
      }
    }
  }), [r.floating, l, i, o]);
  return M.useMemo(() => s ? {
    floating: f
  } : {}, [s, f]);
}
let Vn = pe({ styles: void 0, setReference: () => {
}, setFloating: () => {
}, getReferenceProps: () => ({}), getFloatingProps: () => ({}), slot: {} });
Vn.displayName = "FloatingContext";
let vc = pe(null);
vc.displayName = "PlacementContext";
function F0(e) {
  return me(() => e ? typeof e == "string" ? { to: e } : e : null, [e]);
}
function I0() {
  return ee(Vn).setReference;
}
function V0() {
  return ee(Vn).getReferenceProps;
}
function B0() {
  let { getFloatingProps: e, slot: t } = ee(Vn);
  return q((...n) => Object.assign({}, e(...n), { "data-anchor": t.anchor }), [e, t]);
}
function z0(e = null) {
  e === !1 && (e = null), typeof e == "string" && (e = { to: e });
  let t = ee(vc), n = me(() => e, [JSON.stringify(e, (s, i) => {
    var o;
    return (o = i == null ? void 0 : i.outerHTML) != null ? o : i;
  })]);
  be(() => {
    t == null || t(n != null ? n : null);
  }, [t, n]);
  let r = ee(Vn);
  return me(() => [r.setFloating, e ? r.styles : {}], [r.setFloating, e, r.styles]);
}
let Wf = 4;
function W0({ children: e, enabled: t = !0 }) {
  let [n, r] = ne(null), [s, i] = ne(0), o = X(null), [a, l] = ne(null);
  U0(a);
  let u = t && n !== null && a !== null, { to: c = "bottom", gap: d = 0, offset: f = 0, padding: m = 0, inner: _ } = K0(n, a), [p, v = "center"] = c.split(" ");
  be(() => {
    u && i(0);
  }, [u]);
  let { refs: h, floatingStyles: y, context: b } = H0({ open: u, placement: p === "selection" ? v === "center" ? "bottom" : `bottom-${v}` : v === "center" ? `${p}` : `${p}-${v}`, strategy: "absolute", transform: !1, middleware: [hc({ mainAxis: p === "selection" ? 0 : d, crossAxis: f }), bh({ padding: m }), p !== "selection" && xh({ padding: m }), p === "selection" && _ ? O0({ ..._, padding: m, overflowRef: o, offset: s, minItemsVisible: Wf, referenceOverflowThreshold: m, onFallbackChange($) {
    var z, U;
    if (!$) return;
    let N = b.elements.floating;
    if (!N) return;
    let C = parseFloat(getComputedStyle(N).scrollPaddingBottom) || 0, P = Math.min(Wf, N.childElementCount), R = 0, Y = 0;
    for (let A of (U = (z = b.elements.floating) == null ? void 0 : z.childNodes) != null ? U : []) if (Xe(A)) {
      let V = A.offsetTop, T = V + A.clientHeight + C, B = N.scrollTop, I = B + N.clientHeight;
      if (V >= B && T <= I) P--;
      else {
        Y = Math.max(0, Math.min(T, I) - Math.max(V, B)), R = A.clientHeight;
        break;
      }
    }
    P >= 1 && i((A) => {
      let V = R * P - Y + C;
      return A >= V ? A : V;
    });
  } }) : null, wh({ padding: m, apply({ availableWidth: $, availableHeight: z, elements: U }) {
    Object.assign(U.floating.style, { overflow: "auto", maxWidth: `${$}px`, maxHeight: `min(var(--anchor-max-height, 100vh), ${z}px)` });
  } })].filter(Boolean), whileElementsMounted: gh }), [x = p, w = v] = b.placement.split("-");
  p === "selection" && (x = "selection");
  let k = me(() => ({ anchor: [x, w].filter(Boolean).join(" ") }), [x, w]), j = N0(b, { overflowRef: o, onChange: i }), { getReferenceProps: L, getFloatingProps: F } = R0([j]), S = te(($) => {
    l($), h.setFloating($);
  });
  return M.createElement(vc.Provider, { value: r }, M.createElement(Vn.Provider, { value: { setFloating: S, setReference: h.setReference, styles: y, getReferenceProps: L, getFloatingProps: F, slot: k } }, e));
}
function U0(e) {
  be(() => {
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
function K0(e, t) {
  var n, r, s;
  let i = sl((n = e == null ? void 0 : e.gap) != null ? n : "var(--anchor-gap, 0)", t), o = sl((r = e == null ? void 0 : e.offset) != null ? r : "var(--anchor-offset, 0)", t), a = sl((s = e == null ? void 0 : e.padding) != null ? s : "var(--anchor-padding, 0)", t);
  return { ...e, gap: i, offset: o, padding: a };
}
function sl(e, t, n = void 0) {
  let r = At(), s = te((l, u) => {
    if (l == null) return [n, null];
    if (typeof l == "number") return [l, null];
    if (typeof l == "string") {
      if (!u) return [n, null];
      let c = Uf(l, u);
      return [c, (d) => {
        let f = Sh(l);
        {
          let m = f.map((_) => window.getComputedStyle(u).getPropertyValue(_));
          r.requestAnimationFrame(function _() {
            r.nextFrame(_);
            let p = !1;
            for (let [h, y] of f.entries()) {
              let b = window.getComputedStyle(u).getPropertyValue(y);
              if (m[h] !== b) {
                m[h] = b, p = !0;
                break;
              }
            }
            if (!p) return;
            let v = Uf(l, u);
            c !== v && (d(v), c = v);
          });
        }
        return r.dispose;
      }];
    }
    return [n, null];
  }), i = me(() => s(e, t)[0], [e, t]), [o = i, a] = ne();
  return be(() => {
    let [l, u] = s(e, t);
    if (a(l), !!u) return u(a);
  }, [e, t]), o;
}
function Sh(e) {
  let t = /var\((.*)\)/.exec(e);
  if (t) {
    let n = t[1].indexOf(",");
    if (n === -1) return [t[1]];
    let r = t[1].slice(0, n).trim(), s = t[1].slice(n + 1).trim();
    return s ? [r, ...Sh(s)] : [r];
  }
  return [];
}
function Uf(e, t) {
  let n = document.createElement("div");
  t.appendChild(n), n.style.setProperty("margin-top", "0px", "important"), n.style.setProperty("margin-top", e, "important");
  let r = parseFloat(window.getComputedStyle(n).marginTop) || 0;
  return t.removeChild(n), r;
}
function G0({ children: e, freeze: t }, n) {
  let r = kh(t, e);
  return ra(r) ? km(r, { ref: n }) : E.createElement(E.Fragment, null, r);
}
E.forwardRef(G0);
function kh(e, t) {
  let [n, r] = ne(t);
  return !e && n !== t && r(t), e ? n : t;
}
let ya = pe(null);
ya.displayName = "OpenClosedContext";
var Te = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(Te || {});
function Bn() {
  return ee(ya);
}
function gc({ value: e, children: t }) {
  return E.createElement(ya.Provider, { value: e }, t);
}
function Dh({ children: e }) {
  return E.createElement(ya.Provider, { value: null }, e);
}
function J0(e) {
  function t() {
    document.readyState !== "loading" && (e(), document.removeEventListener("DOMContentLoaded", t));
  }
  typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("DOMContentLoaded", t), t());
}
let Nt = [];
J0(() => {
  function e(t) {
    if (!ut(t.target) || t.target === document.body || Nt[0] === t.target) return;
    let n = t.target;
    n = n.closest(wo), Nt.unshift(n != null ? n : t.target), Nt = Nt.filter((r) => r != null && r.isConnected), Nt.splice(10);
  }
  window.addEventListener("click", e, { capture: !0 }), window.addEventListener("mousedown", e, { capture: !0 }), window.addEventListener("focus", e, { capture: !0 }), document.body.addEventListener("click", e, { capture: !0 }), document.body.addEventListener("mousedown", e, { capture: !0 }), document.body.addEventListener("focus", e, { capture: !0 });
});
function X0(e) {
  throw new Error("Unexpected object: " + e);
}
var we = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(we || {});
function Gr(e, t) {
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
      X0(e);
  }
}
function yc(e) {
  let t = te(e), n = X(!1);
  se(() => (n.current = !1, () => {
    n.current = !0, ca(() => {
      n.current && t();
    });
  }), [t]);
}
let Th = pe(!1);
function q0() {
  return ee(Th);
}
function Kf(e) {
  return E.createElement(Th.Provider, { value: e.force }, e.children);
}
function Z0(e) {
  let t = q0(), n = ee(jh), [r, s] = ne(() => {
    var i;
    if (!t && n !== null) return (i = n.current) != null ? i : null;
    if (ht.isServer) return null;
    let o = e == null ? void 0 : e.getElementById("headlessui-portal-root");
    if (o) return o;
    if (e === null) return null;
    let a = e.createElement("div");
    return a.setAttribute("id", "headlessui-portal-root"), e.body.appendChild(a);
  });
  return se(() => {
    r !== null && (e != null && e.body.contains(r) || e == null || e.body.appendChild(r));
  }, [r, e]), se(() => {
    t || n !== null && s(n.current);
  }, [n, s, t]), r;
}
let Eh = je, Q0 = ge(function(e, t) {
  let { ownerDocument: n = null, ...r } = e, s = X(null), i = Se(H_((f) => {
    s.current = f;
  }), t), o = gr(s.current), a = n != null ? n : o, l = Z0(a), u = ee(eu), c = At(), d = xe();
  return yc(() => {
    var f;
    l && l.childNodes.length <= 0 && ((f = l.parentElement) == null || f.removeChild(l));
  }), l ? pu(E.createElement("div", { "data-headlessui-portal": "", ref: (f) => {
    c.dispose(), u && f && c.add(u.register(f));
  } }, d({ ourProps: { ref: i }, theirProps: r, slot: {}, defaultTag: Eh, name: "Portal" })), l) : null;
});
function eS(e, t) {
  let n = Se(t), { enabled: r = !0, ownerDocument: s, ...i } = e, o = xe();
  return r ? E.createElement(Q0, { ...i, ownerDocument: s, ref: n }) : o({ ourProps: { ref: n }, theirProps: i, slot: {}, defaultTag: Eh, name: "Portal" });
}
let tS = je, jh = pe(null);
function nS(e, t) {
  let { target: n, ...r } = e, s = { ref: Se(t) }, i = xe();
  return E.createElement(jh.Provider, { value: n }, i({ ourProps: s, theirProps: r, defaultTag: tS, name: "Popover.Group" }));
}
let eu = pe(null);
function rS() {
  let e = ee(eu), t = X([]), n = te((i) => (t.current.push(i), e && e.register(i), () => r(i))), r = te((i) => {
    let o = t.current.indexOf(i);
    o !== -1 && t.current.splice(o, 1), e && e.unregister(i);
  }), s = me(() => ({ register: n, unregister: r, portals: t }), [n, r, t]);
  return [t, me(() => function({ children: i }) {
    return E.createElement(eu.Provider, { value: s }, i);
  }, [s])];
}
let oS = ge(eS), Ah = ge(nS), Mc = Object.assign(oS, { Group: Ah });
const lo = { Idle: { kind: "Idle" }, Tracked: (e) => ({ kind: "Tracked", position: e }), Moved: { kind: "Moved" } };
function Ph(e) {
  let t = e.getBoundingClientRect();
  return `${t.x},${t.y}`;
}
function sS(e, t, n) {
  let r = qe();
  if (t.kind === "Tracked") {
    let s = function() {
      i !== Ph(e) && (r.dispose(), n());
    }, { position: i } = t, o = new ResizeObserver(s);
    o.observe(e), r.add(() => o.disconnect()), r.addEventListener(window, "scroll", s, { passive: !0 }), r.addEventListener(window, "resize", s);
  }
  return () => r.dispose();
}
function iS(e, t = typeof document != "undefined" ? document.defaultView : null, n) {
  let r = jr(e, "escape");
  ih(t, "keydown", (s) => {
    r && (s.defaultPrevented || s.key === he.Escape && n(s));
  });
}
function aS() {
  var e;
  let [t] = ne(() => typeof window != "undefined" && typeof window.matchMedia == "function" ? window.matchMedia("(pointer: coarse)") : null), [n, r] = ne((e = t == null ? void 0 : t.matches) != null ? e : !1);
  return be(() => {
    if (!t) return;
    function s(i) {
      r(i.matches);
    }
    return t.addEventListener("change", s), () => t.removeEventListener("change", s);
  }, [t]), n;
}
function lS({ defaultContainers: e = [], portals: t, mainTreeNode: n } = {}) {
  let r = te(() => {
    var s, i;
    let o = fn(n), a = [];
    for (let l of e) l !== null && (Yt(l) ? a.push(l) : "current" in l && Yt(l.current) && a.push(l.current));
    if (t != null && t.current) for (let l of t.current) a.push(l);
    for (let l of (s = o == null ? void 0 : o.querySelectorAll("html > *, body > *")) != null ? s : []) l !== document.body && l !== document.head && Yt(l) && l.id !== "headlessui-portal-root" && (n && (l.contains(n) || l.contains((i = n == null ? void 0 : n.getRootNode()) == null ? void 0 : i.host)) || a.some((u) => l.contains(u)) || a.push(l));
    return a;
  });
  return { resolveContainers: r, contains: te((s) => r().some((i) => i.contains(s))) };
}
let Ch = pe(null);
function Gf({ children: e, node: t }) {
  let [n, r] = ne(null), s = $h(t != null ? t : n);
  return E.createElement(Ch.Provider, { value: s }, e, s === null && E.createElement(vr, { features: Pn.Hidden, ref: (i) => {
    var o, a;
    if (i) {
      for (let l of (a = (o = fn(i)) == null ? void 0 : o.querySelectorAll("html > *, body > *")) != null ? a : []) if (l !== document.body && l !== document.head && Yt(l) && l != null && l.contains(i)) {
        r(l);
        break;
      }
    }
  } }));
}
function $h(e = null) {
  var t;
  return (t = ee(Ch)) != null ? t : e;
}
function uS() {
  let e = typeof document == "undefined";
  return "useSyncExternalStore" in M ? ((t) => t.useSyncExternalStore)(M)(() => () => {
  }, () => !1, () => !e) : !1;
}
function Ma() {
  let e = uS(), [t, n] = M.useState(ht.isHandoffComplete);
  return t && ht.isHandoffComplete === !1 && n(!1), M.useEffect(() => {
    t !== !0 && n(!0);
  }, [t]), M.useEffect(() => ht.handoff(), []), e ? !1 : t;
}
function bc() {
  let e = X(!1);
  return be(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}
var er = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(er || {});
function cS() {
  let e = X(0);
  return oh(!0, "keydown", (t) => {
    t.key === "Tab" && (e.current = t.shiftKey ? 1 : 0);
  }, !0), e;
}
function Hh(e) {
  if (!e) return /* @__PURE__ */ new Set();
  if (typeof e == "function") return new Set(e());
  let t = /* @__PURE__ */ new Set();
  for (let n of e.current) Yt(n.current) && t.add(n.current);
  return t;
}
let dS = "div";
var en = ((e) => (e[e.None = 0] = "None", e[e.InitialFocus = 1] = "InitialFocus", e[e.TabLock = 2] = "TabLock", e[e.FocusLock = 4] = "FocusLock", e[e.RestoreFocus = 8] = "RestoreFocus", e[e.AutoFocus = 16] = "AutoFocus", e))(en || {});
function fS(e, t) {
  let n = X(null), r = Se(n, t), { initialFocus: s, initialFocusFallback: i, containers: o, features: a = 15, ...l } = e;
  Ma() || (a = 0);
  let u = gr(n.current);
  hS(a, { ownerDocument: u });
  let c = vS(a, { ownerDocument: u, container: n, initialFocus: s, initialFocusFallback: i });
  gS(a, { ownerDocument: u, container: n, containers: o, previousActiveElement: c });
  let d = cS(), f = te((y) => {
    if (!Xe(n.current)) return;
    let b = n.current;
    ((x) => x())(() => {
      Ae(d.current, { [er.Forwards]: () => {
        kn(b, lt.First, { skipElements: [y.relatedTarget, i] });
      }, [er.Backwards]: () => {
        kn(b, lt.Last, { skipElements: [y.relatedTarget, i] });
      } });
    });
  }), m = jr(!!(a & 2), "focus-trap#tab-lock"), _ = At(), p = X(!1), v = { ref: r, onKeyDown(y) {
    y.key == "Tab" && (p.current = !0, _.requestAnimationFrame(() => {
      p.current = !1;
    }));
  }, onBlur(y) {
    if (!(a & 4)) return;
    let b = Hh(o);
    Xe(n.current) && b.add(n.current);
    let x = y.relatedTarget;
    ut(x) && x.dataset.headlessuiFocusGuard !== "true" && (Rh(b, x) || (p.current ? kn(n.current, Ae(d.current, { [er.Forwards]: () => lt.Next, [er.Backwards]: () => lt.Previous }) | lt.WrapAround, { relativeTo: y.target }) : ut(y.target) && Lt(y.target)));
  } }, h = xe();
  return E.createElement(E.Fragment, null, m && E.createElement(vr, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: f, features: Pn.Focusable }), h({ ourProps: v, theirProps: l, defaultTag: dS, name: "FocusTrap" }), m && E.createElement(vr, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: f, features: Pn.Focusable }));
}
let mS = ge(fS), pS = Object.assign(mS, { features: en });
function _S(e = !0) {
  let t = X(Nt.slice());
  return uc(([n], [r]) => {
    r === !0 && n === !1 && ca(() => {
      t.current.splice(0);
    }), r === !1 && n === !0 && (t.current = Nt.slice());
  }, [e, Nt, t]), te(() => {
    var n;
    return (n = t.current.find((r) => r != null && r.isConnected)) != null ? n : null;
  });
}
function hS(e, { ownerDocument: t }) {
  let n = !!(e & 8), r = _S(n);
  uc(() => {
    n || w_(t == null ? void 0 : t.body) && Lt(r());
  }, [n]), yc(() => {
    n && Lt(r());
  });
}
function vS(e, { ownerDocument: t, container: n, initialFocus: r, initialFocusFallback: s }) {
  let i = X(null), o = jr(!!(e & 1), "focus-trap#initial-focus"), a = bc();
  return uc(() => {
    if (e === 0) return;
    if (!o) {
      s != null && s.current && Lt(s.current);
      return;
    }
    let l = n.current;
    l && ca(() => {
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
      if (r != null && r.current) Lt(r.current);
      else {
        if (e & 16) {
          if (kn(l, lt.First | lt.AutoFocus) !== Jl.Error) return;
        } else if (kn(l, lt.First) !== Jl.Error) return;
        if (s != null && s.current && (Lt(s.current), (t == null ? void 0 : t.activeElement) === s.current)) return;
        console.warn("There are no focusable elements inside the <FocusTrap />");
      }
      i.current = t == null ? void 0 : t.activeElement;
    });
  }, [s, o, e]), i;
}
function gS(e, { ownerDocument: t, container: n, containers: r, previousActiveElement: s }) {
  let i = bc(), o = !!(e & 4);
  ih(t == null ? void 0 : t.defaultView, "focus", (a) => {
    if (!o || !i.current) return;
    let l = Hh(r);
    Xe(n.current) && l.add(n.current);
    let u = s.current;
    if (!u) return;
    let c = a.target;
    Xe(c) ? Rh(l, c) ? (s.current = c, Lt(c)) : (a.preventDefault(), a.stopPropagation(), Lt(u)) : Lt(s.current);
  }, !0);
}
function Rh(e, t) {
  for (let n of e) if (n.contains(t)) return !0;
  return !1;
}
function Oh(e) {
  var t;
  return !!(e.enter || e.enterFrom || e.enterTo || e.leave || e.leaveFrom || e.leaveTo) || !Sn((t = e.as) != null ? t : Fh) || E.Children.count(e.children) === 1;
}
let ba = pe(null);
ba.displayName = "TransitionContext";
var yS = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(yS || {});
function MS() {
  let e = ee(ba);
  if (e === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e;
}
function bS() {
  let e = ee(xa);
  if (e === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e;
}
let xa = pe(null);
xa.displayName = "NestingContext";
function wa(e) {
  return "children" in e ? wa(e.children) : e.current.filter(({ el: t }) => t.current !== null).filter(({ state: t }) => t === "visible").length > 0;
}
function Nh(e, t) {
  let n = Jt(e), r = X([]), s = bc(), i = At(), o = te((m, _ = Ft.Hidden) => {
    let p = r.current.findIndex(({ el: v }) => v === m);
    p !== -1 && (Ae(_, { [Ft.Unmount]() {
      r.current.splice(p, 1);
    }, [Ft.Hidden]() {
      r.current[p].state = "hidden";
    } }), i.microTask(() => {
      var v;
      !wa(r) && s.current && ((v = n.current) == null || v.call(n));
    }));
  }), a = te((m) => {
    let _ = r.current.find(({ el: p }) => p === m);
    return _ ? _.state !== "visible" && (_.state = "visible") : r.current.push({ el: m, state: "visible" }), () => o(m, Ft.Unmount);
  }), l = X([]), u = X(Promise.resolve()), c = X({ enter: [], leave: [] }), d = te((m, _, p) => {
    l.current.splice(0), t && (t.chains.current[_] = t.chains.current[_].filter(([v]) => v !== m)), t == null || t.chains.current[_].push([m, new Promise((v) => {
      l.current.push(v);
    })]), t == null || t.chains.current[_].push([m, new Promise((v) => {
      Promise.all(c.current[_].map(([h, y]) => y)).then(() => v());
    })]), _ === "enter" ? u.current = u.current.then(() => t == null ? void 0 : t.wait.current).then(() => p(_)) : p(_);
  }), f = te((m, _, p) => {
    Promise.all(c.current[_].splice(0).map(([v, h]) => h)).then(() => {
      var v;
      (v = l.current.shift()) == null || v();
    }).then(() => p(_));
  });
  return me(() => ({ children: r, register: a, unregister: o, onStart: d, onStop: f, wait: u, chains: c }), [a, o, r, d, f, c, u]);
}
let Fh = je, Ih = zt.RenderStrategy;
function xS(e, t) {
  var n, r;
  let { transition: s = !0, beforeEnter: i, afterEnter: o, beforeLeave: a, afterLeave: l, enter: u, enterFrom: c, enterTo: d, entered: f, leave: m, leaveFrom: _, leaveTo: p, ...v } = e, [h, y] = ne(null), b = X(null), x = Oh(e), w = Se(...x ? [b, t, y] : t === null ? [] : [t]), k = (n = v.unmount) == null || n ? Ft.Unmount : Ft.Hidden, { show: j, appear: L, initial: F } = MS(), [S, $] = ne(j ? "visible" : "hidden"), z = bS(), { register: U, unregister: N } = z;
  be(() => U(b), [U, b]), be(() => {
    if (k === Ft.Hidden && b.current) {
      if (j && S !== "visible") {
        $("visible");
        return;
      }
      return Ae(S, { hidden: () => N(b), visible: () => U(b) });
    }
  }, [S, b, U, N, j, k]);
  let C = Ma();
  be(() => {
    if (x && C && S === "visible" && b.current === null) throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [b, S, C, x]);
  let P = F && !L, R = L && j && F, Y = X(!1), A = Nh(() => {
    Y.current || ($("hidden"), N(b));
  }, z), V = te((W) => {
    Y.current = !0;
    let ce = W ? "enter" : "leave";
    A.onStart(b, ce, (ae) => {
      ae === "enter" ? i == null || i() : ae === "leave" && (a == null || a());
    });
  }), T = te((W) => {
    let ce = W ? "enter" : "leave";
    Y.current = !1, A.onStop(b, ce, (ae) => {
      ae === "enter" ? o == null || o() : ae === "leave" && (l == null || l());
    }), ce === "leave" && !wa(A) && ($("hidden"), N(b));
  });
  se(() => {
    x && s || (V(j), T(j));
  }, [j, x, s]);
  let B = !(!s || !x || !C || P), [, I] = lc(B, h, j, { start: V, end: T }), G = Ot({ ref: w, className: ((r = Wl(v.className, R && u, R && c, I.enter && u, I.enter && I.closed && c, I.enter && !I.closed && d, I.leave && m, I.leave && !I.closed && _, I.leave && I.closed && p, !I.transition && j && f)) == null ? void 0 : r.trim()) || void 0, ...ac(I) }), ie = 0;
  S === "visible" && (ie |= Te.Open), S === "hidden" && (ie |= Te.Closed), j && S === "hidden" && (ie |= Te.Opening), !j && S === "visible" && (ie |= Te.Closing);
  let J = xe();
  return E.createElement(xa.Provider, { value: A }, E.createElement(gc, { value: ie }, J({ ourProps: G, theirProps: v, defaultTag: Fh, features: Ih, visible: S === "visible", name: "Transition.Child" })));
}
function wS(e, t) {
  let { show: n, appear: r = !1, unmount: s = !0, ...i } = e, o = X(null), a = Oh(e), l = Se(...a ? [o, t] : t === null ? [] : [t]);
  Ma();
  let u = Bn();
  if (n === void 0 && u !== null && (n = (u & Te.Open) === Te.Open), n === void 0) throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [c, d] = ne(n ? "visible" : "hidden"), f = Nh(() => {
    n || d("hidden");
  }), [m, _] = ne(!0), p = X([n]);
  be(() => {
    m !== !1 && p.current[p.current.length - 1] !== n && (p.current.push(n), _(!1));
  }, [p, n]);
  let v = me(() => ({ show: n, appear: r, initial: m }), [n, r, m]);
  be(() => {
    n ? d("visible") : !wa(f) && o.current !== null && d("hidden");
  }, [n, f]);
  let h = { unmount: s }, y = te(() => {
    var w;
    m && _(!1), (w = e.beforeEnter) == null || w.call(e);
  }), b = te(() => {
    var w;
    m && _(!1), (w = e.beforeLeave) == null || w.call(e);
  }), x = xe();
  return E.createElement(xa.Provider, { value: f }, E.createElement(ba.Provider, { value: v }, x({ ourProps: { ...h, as: je, children: E.createElement(Vh, { ref: l, ...h, ...i, beforeEnter: y, beforeLeave: b }) }, theirProps: {}, defaultTag: je, features: Ih, visible: c === "visible", name: "Transition" })));
}
function YS(e, t) {
  let n = ee(ba) !== null, r = Bn() !== null;
  return E.createElement(E.Fragment, null, !n && r ? E.createElement(tu, { ref: t, ...e }) : E.createElement(Vh, { ref: t, ...e }));
}
let tu = ge(wS), Vh = ge(xS), xr = ge(YS), Ya = Object.assign(tu, { Child: xr, Root: tu });
var LS = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(LS || {}), SS = ((e) => (e[e.SetTitleId = 0] = "SetTitleId", e))(SS || {});
let kS = { 0(e, t) {
  return e.titleId === t.id ? e : { ...e, titleId: t.id };
} }, xc = pe(null);
xc.displayName = "DialogContext";
function La(e) {
  let t = ee(xc);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, La), n;
  }
  return t;
}
function DS(e, t) {
  return Ae(t.type, kS, e, t);
}
let Jf = ge(function(e, t) {
  let n = Ne(), { id: r = `headlessui-dialog-${n}`, open: s, onClose: i, initialFocus: o, role: a = "dialog", autoFocus: l = !0, __demoMode: u = !1, unmount: c = !1, ...d } = e, f = X(!1);
  a = function() {
    return a === "dialog" || a === "alertdialog" ? a : (f.current || (f.current = !0, console.warn(`Invalid role [${a}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog");
  }();
  let m = Bn();
  s === void 0 && m !== null && (s = (m & Te.Open) === Te.Open);
  let _ = X(null), p = Se(_, t), v = gr(_.current), h = s ? 0 : 1, [y, b] = Dm(DS, { titleId: null, descriptionId: null, panelRef: Og() }), x = te(() => i(!1)), w = te((I) => b({ type: 0, id: I })), k = Ma() ? h === 0 : !1, [j, L] = rS(), F = { get current() {
    var I;
    return (I = y.panelRef.current) != null ? I : _.current;
  } }, S = $h(), { resolveContainers: $ } = lS({ mainTreeNode: S, portals: j, defaultContainers: [F] }), z = m !== null ? (m & Te.Closing) === Te.Closing : !1;
  Z_(u || z ? !1 : k, { allowed: te(() => {
    var I, G;
    return [(G = (I = _.current) == null ? void 0 : I.closest("[data-headlessui-portal]")) != null ? G : null];
  }), disallowed: te(() => {
    var I;
    return [(I = S == null ? void 0 : S.closest("body > *:not(#headlessui-portal-root)")) != null ? I : null];
  }) });
  let U = pa.get(null);
  be(() => {
    if (k) return U.actions.push(r), () => U.actions.pop(r);
  }, [U, r, k]);
  let N = Be(U, q((I) => U.selectors.isTop(I, r), [U, r]));
  sh(N, $, (I) => {
    I.preventDefault(), x();
  }), iS(N, v == null ? void 0 : v.defaultView, (I) => {
    I.preventDefault(), I.stopPropagation(), document.activeElement && "blur" in document.activeElement && typeof document.activeElement.blur == "function" && document.activeElement.blur(), x();
  }), ah(u || z ? !1 : k, v, $), Q_(k, _, x);
  let [C, P] = N_(), R = me(() => [{ dialogState: h, close: x, setTitleId: w, unmount: c }, y], [h, x, w, c, y]), Y = Oe({ open: h === 0 }), A = { ref: p, id: r, role: a, tabIndex: -1, "aria-modal": u ? void 0 : h === 0 ? !0 : void 0, "aria-labelledby": y.titleId, "aria-describedby": C, unmount: c }, V = !aS(), T = en.None;
  k && !u && (T |= en.RestoreFocus, T |= en.TabLock, l && (T |= en.AutoFocus), V && (T |= en.InitialFocus));
  let B = xe();
  return E.createElement(Dh, null, E.createElement(Kf, { force: !0 }, E.createElement(Mc, null, E.createElement(xc.Provider, { value: R }, E.createElement(Ah, { target: _ }, E.createElement(Kf, { force: !1 }, E.createElement(P, { slot: Y }, E.createElement(L, null, E.createElement(pS, { initialFocus: o, initialFocusFallback: _, containers: $, features: T }, E.createElement(z_, { value: x }, B({ ourProps: A, theirProps: d, slot: Y, defaultTag: TS, features: ES, visible: h === 0, name: "Dialog" })))))))))));
}), TS = "div", ES = zt.RenderStrategy | zt.Static;
function jS(e, t) {
  let { transition: n = !1, open: r, ...s } = e, i = Bn(), o = e.hasOwnProperty("open") || i !== null, a = e.hasOwnProperty("onClose");
  if (!o && !a) throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
  if (!o) throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
  if (!a) throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
  if (!i && typeof e.open != "boolean") throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${e.open}`);
  if (typeof e.onClose != "function") throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${e.onClose}`);
  return (r !== void 0 || n) && !s.static ? E.createElement(Gf, null, E.createElement(Ya, { show: r, transition: n, unmount: s.unmount }, E.createElement(Jf, { ref: t, ...s }))) : E.createElement(Gf, null, E.createElement(Jf, { ref: t, open: r, ...s }));
}
let AS = "div";
function PS(e, t) {
  let n = Ne(), { id: r = `headlessui-dialog-panel-${n}`, transition: s = !1, ...i } = e, [{ dialogState: o, unmount: a }, l] = La("Dialog.Panel"), u = Se(t, l.panelRef), c = Oe({ open: o === 0 }), d = te((v) => {
    v.stopPropagation();
  }), f = { ref: u, id: r, onClick: d }, m = s ? xr : je, _ = s ? { unmount: a } : {}, p = xe();
  return E.createElement(m, { ..._ }, p({ ourProps: f, theirProps: i, slot: c, defaultTag: AS, name: "Dialog.Panel" }));
}
let CS = "div";
function $S(e, t) {
  let { transition: n = !1, ...r } = e, [{ dialogState: s, unmount: i }] = La("Dialog.Backdrop"), o = Oe({ open: s === 0 }), a = { ref: t, "aria-hidden": !0 }, l = n ? xr : je, u = n ? { unmount: i } : {}, c = xe();
  return E.createElement(l, { ...u }, c({ ourProps: a, theirProps: r, slot: o, defaultTag: CS, name: "Dialog.Backdrop" }));
}
let HS = "h2";
function RS(e, t) {
  let n = Ne(), { id: r = `headlessui-dialog-title-${n}`, ...s } = e, [{ dialogState: i, setTitleId: o }] = La("Dialog.Title"), a = Se(t);
  se(() => (o(r), () => o(null)), [r, o]);
  let l = Oe({ open: i === 0 }), u = { ref: a, id: r };
  return xe()({ ourProps: u, theirProps: s, slot: l, defaultTag: HS, name: "Dialog.Title" });
}
let OS = ge(jS), Bh = ge(PS);
ge($S);
let NS = ge(RS), FS = Object.assign(OS, { Panel: Bh, Title: NS, Description: F_ });
var Xf;
let IS = (Xf = E.startTransition) != null ? Xf : function(e) {
  e();
};
var VS = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(VS || {}), BS = ((e) => (e[e.ToggleDisclosure = 0] = "ToggleDisclosure", e[e.CloseDisclosure = 1] = "CloseDisclosure", e[e.SetButtonId = 2] = "SetButtonId", e[e.SetPanelId = 3] = "SetPanelId", e[e.SetButtonElement = 4] = "SetButtonElement", e[e.SetPanelElement = 5] = "SetPanelElement", e))(BS || {});
let zS = { 0: (e) => ({ ...e, disclosureState: Ae(e.disclosureState, { 0: 1, 1: 0 }) }), 1: (e) => e.disclosureState === 1 ? e : { ...e, disclosureState: 1 }, 2(e, t) {
  return e.buttonId === t.buttonId ? e : { ...e, buttonId: t.buttonId };
}, 3(e, t) {
  return e.panelId === t.panelId ? e : { ...e, panelId: t.panelId };
}, 4(e, t) {
  return e.buttonElement === t.element ? e : { ...e, buttonElement: t.element };
}, 5(e, t) {
  return e.panelElement === t.element ? e : { ...e, panelElement: t.element };
} }, wc = pe(null);
wc.displayName = "DisclosureContext";
function Yc(e) {
  let t = ee(wc);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, Yc), n;
  }
  return t;
}
let Lc = pe(null);
Lc.displayName = "DisclosureAPIContext";
function zh(e) {
  let t = ee(Lc);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, zh), n;
  }
  return t;
}
let Sc = pe(null);
Sc.displayName = "DisclosurePanelContext";
function WS() {
  return ee(Sc);
}
function US(e, t) {
  return Ae(t.type, zS, e, t);
}
let KS = je;
function GS(e, t) {
  let { defaultOpen: n = !1, ...r } = e, s = X(null), i = Se(t, H_((p) => {
    s.current = p;
  }, e.as === void 0 || Sn(e.as))), o = Dm(US, { disclosureState: n ? 0 : 1, buttonElement: null, panelElement: null, buttonId: null, panelId: null }), [{ disclosureState: a, buttonId: l }, u] = o, c = te((p) => {
    u({ type: 1 });
    let v = fn(s.current);
    if (!v || !l) return;
    let h = p ? ut(p) ? p : "current" in p && ut(p.current) ? p.current : v.getElementById(l) : v.getElementById(l);
    h == null || h.focus();
  }), d = me(() => ({ close: c }), [c]), f = Oe({ open: a === 0, close: c }), m = { ref: i }, _ = xe();
  return E.createElement(wc.Provider, { value: o }, E.createElement(Lc.Provider, { value: d }, E.createElement(z_, { value: c }, E.createElement(gc, { value: Ae(a, { 0: Te.Open, 1: Te.Closed }) }, _({ ourProps: m, theirProps: r, slot: f, defaultTag: KS, name: "Disclosure" })))));
}
let JS = "button";
function XS(e, t) {
  let n = Ne(), { id: r = `headlessui-disclosure-button-${n}`, disabled: s = !1, autoFocus: i = !1, ...o } = e, [a, l] = Yc("Disclosure.Button"), u = WS(), c = u === null ? !1 : u === a.panelId, d = X(null), f = Se(d, t, te((F) => {
    if (!c) return l({ type: 4, element: F });
  }));
  se(() => {
    if (!c) return l({ type: 2, buttonId: r }), () => {
      l({ type: 2, buttonId: null });
    };
  }, [r, l, c]);
  let m = te((F) => {
    var S;
    if (c) {
      if (a.disclosureState === 1) return;
      switch (F.key) {
        case he.Space:
        case he.Enter:
          F.preventDefault(), F.stopPropagation(), l({ type: 0 }), (S = a.buttonElement) == null || S.focus();
          break;
      }
    } else switch (F.key) {
      case he.Space:
      case he.Enter:
        F.preventDefault(), F.stopPropagation(), l({ type: 0 });
        break;
    }
  }), _ = te((F) => {
    switch (F.key) {
      case he.Space:
        F.preventDefault();
        break;
    }
  }), p = te((F) => {
    var S;
    xo(F.currentTarget) || s || (c ? (l({ type: 0 }), (S = a.buttonElement) == null || S.focus()) : l({ type: 0 }));
  }), { isFocusVisible: v, focusProps: h } = tc({ autoFocus: i }), { isHovered: y, hoverProps: b } = ec({ isDisabled: s }), { pressed: x, pressProps: w } = nc({ disabled: s }), k = Oe({ open: a.disclosureState === 0, hover: y, active: x, disabled: s, focus: v, autofocus: i }), j = ic(e, a.buttonElement), L = hr(c ? { ref: f, type: j, disabled: s || void 0, autoFocus: i, onKeyDown: m, onClick: p } : { ref: f, id: r, type: j, "aria-expanded": a.disclosureState === 0, "aria-controls": a.panelElement ? a.panelId : void 0, disabled: s || void 0, autoFocus: i, onKeyDown: m, onKeyUp: _, onClick: p }, h, b, w);
  return xe()({ ourProps: L, theirProps: o, slot: k, defaultTag: JS, name: "Disclosure.Button" });
}
let qS = "div", ZS = zt.RenderStrategy | zt.Static;
function QS(e, t) {
  let n = Ne(), { id: r = `headlessui-disclosure-panel-${n}`, transition: s = !1, ...i } = e, [o, a] = Yc("Disclosure.Panel"), { close: l } = zh("Disclosure.Panel"), [u, c] = ne(null), d = Se(t, te((y) => {
    IS(() => a({ type: 5, element: y }));
  }), c);
  se(() => (a({ type: 3, panelId: r }), () => {
    a({ type: 3, panelId: null });
  }), [r, a]);
  let f = Bn(), [m, _] = lc(s, u, f !== null ? (f & Te.Open) === Te.Open : o.disclosureState === 0), p = Oe({ open: o.disclosureState === 0, close: l }), v = { ref: d, id: r, ...ac(_) }, h = xe();
  return E.createElement(Dh, null, E.createElement(Sc.Provider, { value: o.panelId }, h({ ourProps: v, theirProps: i, slot: p, defaultTag: qS, features: ZS, visible: m, name: "Disclosure.Panel" })));
}
let ek = ge(GS), Wh = ge(XS), Uh = ge(QS), tk = Object.assign(ek, { Button: Wh, Panel: Uh }), qf = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function Zf(e) {
  var t, n;
  let r = (t = e.innerText) != null ? t : "", s = e.cloneNode(!0);
  if (!Xe(s)) return r;
  let i = !1;
  for (let a of s.querySelectorAll('[hidden],[aria-hidden],[role="img"]')) a.remove(), i = !0;
  let o = i ? (n = s.innerText) != null ? n : "" : r;
  return qf.test(o) && (o = o.replace(qf, "")), o;
}
function nk(e) {
  let t = e.getAttribute("aria-label");
  if (typeof t == "string") return t.trim();
  let n = e.getAttribute("aria-labelledby");
  if (n) {
    let r = n.split(" ").map((s) => {
      let i = document.getElementById(s);
      if (i) {
        let o = i.getAttribute("aria-label");
        return typeof o == "string" ? o.trim() : Zf(i).trim();
      }
      return null;
    }).filter(Boolean);
    if (r.length > 0) return r.join(", ");
  }
  return Zf(e).trim();
}
function rk(e) {
  let t = X(""), n = X("");
  return te(() => {
    let r = e.current;
    if (!r) return "";
    let s = r.innerText;
    if (t.current === s) return n.current;
    let i = nk(r).trim().toLowerCase();
    return t.current = s, n.current = i, i;
  });
}
var ok = Object.defineProperty, sk = (e, t, n) => t in e ? ok(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Qf = (e, t, n) => (sk(e, typeof t != "symbol" ? t + "" : t, n), n), $e = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))($e || {}), It = ((e) => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))(It || {}), uo = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(uo || {}), Kh = ((e) => (e[e.OpenListbox = 0] = "OpenListbox", e[e.CloseListbox = 1] = "CloseListbox", e[e.GoToOption = 2] = "GoToOption", e[e.Search = 3] = "Search", e[e.ClearSearch = 4] = "ClearSearch", e[e.SelectOption = 5] = "SelectOption", e[e.RegisterOptions = 6] = "RegisterOptions", e[e.UnregisterOptions = 7] = "UnregisterOptions", e[e.SetButtonElement = 8] = "SetButtonElement", e[e.SetOptionsElement = 9] = "SetOptionsElement", e[e.SortOptions = 10] = "SortOptions", e[e.MarkButtonAsMoved = 11] = "MarkButtonAsMoved", e))(Kh || {});
function em(e, t = (n) => n) {
  let n = e.activeOptionIndex !== null ? e.options[e.activeOptionIndex] : null, r = nh(t(e.options.slice()), (i) => i.dataRef.current.domRef.current), s = n ? r.indexOf(n) : null;
  return s === -1 && (s = null), { options: r, activeOptionIndex: s };
}
let ik = { 1(e) {
  if (e.dataRef.current.disabled || e.listboxState === 1) return e;
  let t = e.buttonElement ? lo.Tracked(Ph(e.buttonElement)) : e.buttonPositionState;
  return { ...e, activeOptionIndex: null, pendingFocus: { focus: we.Nothing }, listboxState: 1, __demoMode: !1, buttonPositionState: t };
}, 0(e, t) {
  if (e.dataRef.current.disabled || e.listboxState === 0) return e;
  let n = e.activeOptionIndex, { isSelected: r } = e.dataRef.current, s = e.options.findIndex((i) => r(i.dataRef.current.value));
  return s !== -1 && (n = s), { ...e, frozenValue: !1, pendingFocus: t.focus, listboxState: 0, activeOptionIndex: n, __demoMode: !1, buttonPositionState: lo.Idle };
}, 2(e, t) {
  var n, r, s, i, o;
  if (e.dataRef.current.disabled || e.listboxState === 1) return e;
  let a = { ...e, searchQuery: "", activationTrigger: (n = t.trigger) != null ? n : 1, __demoMode: !1 };
  if (t.focus === we.Nothing) return { ...a, activeOptionIndex: null };
  if (t.focus === we.Specific) return { ...a, activeOptionIndex: e.options.findIndex((c) => c.id === t.id) };
  if (t.focus === we.Previous) {
    let c = e.activeOptionIndex;
    if (c !== null) {
      let d = e.options[c].dataRef.current.domRef, f = Gr(t, { resolveItems: () => e.options, resolveActiveIndex: () => e.activeOptionIndex, resolveId: (m) => m.id, resolveDisabled: (m) => m.dataRef.current.disabled });
      if (f !== null) {
        let m = e.options[f].dataRef.current.domRef;
        if (((r = d.current) == null ? void 0 : r.previousElementSibling) === m.current || ((s = m.current) == null ? void 0 : s.previousElementSibling) === null) return { ...a, activeOptionIndex: f };
      }
    }
  } else if (t.focus === we.Next) {
    let c = e.activeOptionIndex;
    if (c !== null) {
      let d = e.options[c].dataRef.current.domRef, f = Gr(t, { resolveItems: () => e.options, resolveActiveIndex: () => e.activeOptionIndex, resolveId: (m) => m.id, resolveDisabled: (m) => m.dataRef.current.disabled });
      if (f !== null) {
        let m = e.options[f].dataRef.current.domRef;
        if (((i = d.current) == null ? void 0 : i.nextElementSibling) === m.current || ((o = m.current) == null ? void 0 : o.nextElementSibling) === null) return { ...a, activeOptionIndex: f };
      }
    }
  }
  let l = em(e), u = Gr(t, { resolveItems: () => l.options, resolveActiveIndex: () => l.activeOptionIndex, resolveId: (c) => c.id, resolveDisabled: (c) => c.dataRef.current.disabled });
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
  if (e.pendingFocus.focus !== we.Nothing && (r = Gr(e.pendingFocus, { resolveItems: () => n, resolveActiveIndex: () => e.activeOptionIndex, resolveId: (s) => s.id, resolveDisabled: (s) => s.dataRef.current.disabled })), e.activeOptionIndex === null) {
    let { isSelected: s } = e.dataRef.current;
    if (s) {
      let i = n.findIndex((o) => s == null ? void 0 : s(o.dataRef.current.value));
      i !== -1 && (r = i);
    }
  }
  return { ...e, options: n, activeOptionIndex: r, pendingFocus: { focus: we.Nothing }, pendingShouldSort: !0 };
}, 7: (e, t) => {
  let n = e.options, r = [], s = new Set(t.options);
  for (let [i, o] of n.entries()) if (s.has(o.id) && (r.push(i), s.delete(o.id), s.size === 0)) break;
  if (r.length > 0) {
    n = n.slice();
    for (let i of r.reverse()) n.splice(i, 1);
  }
  return { ...e, options: n, activationTrigger: 1 };
}, 8: (e, t) => e.buttonElement === t.element ? e : { ...e, buttonElement: t.element }, 9: (e, t) => e.optionsElement === t.element ? e : { ...e, optionsElement: t.element }, 10: (e) => e.pendingShouldSort ? { ...e, ...em(e), pendingShouldSort: !1 } : e, 11(e) {
  return e.buttonPositionState.kind !== "Tracked" ? e : { ...e, buttonPositionState: lo.Moved };
} };
class kc extends G_ {
  constructor(t) {
    super(t), Qf(this, "actions", { onChange: (n) => {
      let { onChange: r, compare: s, mode: i, value: o } = this.state.dataRef.current;
      return Ae(i, { 0: () => r == null ? void 0 : r(n), 1: () => {
        let a = o.slice(), l = a.findIndex((u) => s(u, n));
        return l === -1 ? a.push(n) : a.splice(l, 1), r == null ? void 0 : r(a);
      } });
    }, registerOption: Za(() => {
      let n = [], r = /* @__PURE__ */ new Set();
      return [(s, i) => {
        r.has(i) || (r.add(i), n.push({ id: s, dataRef: i }));
      }, () => (r.clear(), this.send({ type: 6, options: n.splice(0) }))];
    }), unregisterOption: Za(() => {
      let n = [];
      return [(r) => n.push(r), () => {
        this.send({ type: 7, options: n.splice(0) });
      }];
    }), goToOption: Za(() => {
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
    } }), Qf(this, "selectors", { activeDescendantId(n) {
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
      let n = this.state.id, r = pa.get(null);
      this.disposables.add(r.on(X_.Push, (s) => {
        !r.selectors.isTop(s, n) && this.state.listboxState === 0 && this.actions.closeListbox();
      })), this.on(0, () => r.actions.push(n)), this.on(1, () => r.actions.pop(n));
    }
    this.disposables.group((n) => {
      this.on(1, (r) => {
        r.buttonElement && (n.dispose(), n.add(sS(r.buttonElement, r.buttonPositionState, () => {
          this.send({ type: 11 });
        })));
      });
    }), this.on(5, (n, r) => {
      var s;
      this.actions.onChange(r.value), this.state.dataRef.current.mode === 0 && (this.actions.closeListbox(), (s = this.state.buttonElement) == null || s.focus({ preventScroll: !0 }));
    });
  }
  static new({ id: t, __demoMode: n = !1 }) {
    return new kc({ id: t, dataRef: { current: {} }, listboxState: n ? 0 : 1, options: [], searchQuery: "", activeOptionIndex: null, activationTrigger: 1, buttonElement: null, optionsElement: null, pendingShouldSort: !1, pendingFocus: { focus: we.Nothing }, frozenValue: !1, __demoMode: n, buttonPositionState: lo.Idle });
  }
  reduce(t, n) {
    return Ae(n.type, ik, t, n);
  }
}
const Gh = pe(null);
function Dc(e) {
  let t = ee(Gh);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, Jh), n;
  }
  return t;
}
function Jh({ id: e, __demoMode: t = !1 }) {
  let n = me(() => kc.new({ id: e, __demoMode: t }), []);
  return yc(() => n.dispose()), n;
}
let Sa = pe(null);
Sa.displayName = "ListboxDataContext";
function Pr(e) {
  let t = ee(Sa);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, Pr), n;
  }
  return t;
}
let ak = je;
function lk(e, t) {
  let n = Ne(), r = da(), { value: s, defaultValue: i, form: o, name: a, onChange: l, by: u, invalid: c = !1, disabled: d = r || !1, horizontal: f = !1, multiple: m = !1, __demoMode: _ = !1, ...p } = e;
  const v = f ? "horizontal" : "vertical";
  let h = Se(t), y = S_(i), [b = m ? [] : void 0, x] = L_(s, l, y), w = Jh({ id: n, __demoMode: _ }), k = X({ static: !1, hold: !1 }), j = X(/* @__PURE__ */ new Map()), L = AY(u), F = q((B) => Ae(S.mode, { [It.Multi]: () => b.some((I) => L(I, B)), [It.Single]: () => L(b, B) }), [b]), S = Oe({ value: b, disabled: d, invalid: c, mode: m ? It.Multi : It.Single, orientation: v, onChange: x, compare: L, isSelected: F, optionsPropsRef: k, listRef: j });
  be(() => {
    w.state.dataRef.current = S;
  }, [S]);
  let $ = Be(w, (B) => B.listboxState), z = pa.get(null), U = Be(z, q((B) => z.selectors.isTop(B, n), [z, n])), [N, C] = Be(w, (B) => [B.buttonElement, B.optionsElement]);
  sh(U, [N, C], (B, I) => {
    w.send({ type: Kh.CloseListbox }), th(I, sc.Loose) || (B.preventDefault(), N == null || N.focus());
  });
  let P = Oe({ open: $ === $e.Open, disabled: d, invalid: c, value: b }), [R, Y] = V_({ inherit: !0 }), A = { ref: h }, V = q(() => {
    if (y !== void 0) return x == null ? void 0 : x(y);
  }, [x, y]), T = xe();
  return E.createElement(Y, { value: R, props: { htmlFor: N == null ? void 0 : N.id }, slot: { open: $ === $e.Open, disabled: d } }, E.createElement(W0, null, E.createElement(Gh.Provider, { value: w }, E.createElement(Sa.Provider, { value: S }, E.createElement(gc, { value: Ae($, { [$e.Open]: Te.Open, [$e.Closed]: Te.Closed }) }, a != null && b != null && E.createElement(j_, { disabled: d, data: { [a]: b }, form: o, onReset: V }), T({ ourProps: A, theirProps: p, slot: P, defaultTag: ak, name: "Listbox" }))))));
}
let uk = "button";
function ck(e, t) {
  let n = Ne(), r = rc(), s = Pr("Listbox.Button"), i = Dc("Listbox.Button"), { id: o = r || `headlessui-listbox-button-${n}`, disabled: a = s.disabled || !1, autoFocus: l = !1, ...u } = e, c = Se(t, I0(), i.actions.setButtonElement), d = V0(), [f, m, _] = Be(i, (C) => [C.listboxState, C.buttonElement, C.optionsElement]), p = f === $e.Open;
  nL(p, { trigger: m, action: q((C) => {
    if (m != null && m.contains(C.target)) return Ur.Ignore;
    let P = C.target.closest('[role="option"]:not([data-disabled])');
    return Xe(P) ? Ur.Select(P) : _ != null && _.contains(C.target) ? Ur.Ignore : Ur.Close;
  }, [m, _]), close: i.actions.closeListbox, select: i.actions.selectActiveOption });
  let v = te((C) => {
    switch (C.key) {
      case he.Enter:
        E_(C.currentTarget);
        break;
      case he.Space:
      case he.ArrowDown:
        C.preventDefault(), i.actions.openListbox({ focus: s.value ? we.Nothing : we.First });
        break;
      case he.ArrowUp:
        C.preventDefault(), i.actions.openListbox({ focus: s.value ? we.Nothing : we.Last });
        break;
    }
  }), h = te((C) => {
    switch (C.key) {
      case he.Space:
        C.preventDefault();
        break;
    }
  }), y = CY((C) => {
    var P;
    i.state.listboxState === $e.Open ? (mo(() => i.actions.closeListbox()), (P = i.state.buttonElement) == null || P.focus({ preventScroll: !0 })) : (C.preventDefault(), i.actions.openListbox({ focus: we.Nothing }));
  }), b = te((C) => C.preventDefault()), x = oc([o]), w = O_(), { isFocusVisible: k, focusProps: j } = tc({ autoFocus: l }), { isHovered: L, hoverProps: F } = ec({ isDisabled: a }), { pressed: S, pressProps: $ } = nc({ disabled: a }), z = Oe({ open: f === $e.Open, active: S || f === $e.Open, disabled: a, invalid: s.invalid, value: s.value, hover: L, focus: k, autofocus: l }), U = Be(i, (C) => C.listboxState === $e.Open), N = hr(d(), { ref: c, id: o, type: ic(e, m), "aria-haspopup": "listbox", "aria-controls": _ == null ? void 0 : _.id, "aria-expanded": U, "aria-labelledby": x, "aria-describedby": w, disabled: a || void 0, autoFocus: l, onKeyDown: v, onKeyUp: h, onKeyPress: b }, y, j, F, $);
  return xe()({ ourProps: N, theirProps: u, slot: z, defaultTag: uk, name: "Listbox.Button" });
}
let Xh = pe(!1), dk = "div", fk = zt.RenderStrategy | zt.Static;
function mk(e, t) {
  let n = Ne(), { id: r = `headlessui-listbox-options-${n}`, anchor: s, portal: i = !1, modal: o = !0, transition: a = !1, ...l } = e, u = F0(s), [c, d] = ne(null);
  u && (i = !0);
  let f = Pr("Listbox.Options"), m = Dc("Listbox.Options"), [_, p, v, h] = Be(m, (J) => [J.listboxState, J.buttonElement, J.optionsElement, J.__demoMode]), y = gr(p), b = gr(v), x = Bn(), [w, k] = lc(a, c, x !== null ? (x & Te.Open) === Te.Open : _ === $e.Open);
  Q_(w, p, m.actions.closeListbox);
  let j = h ? !1 : o && _ === $e.Open;
  ah(j, b);
  let L = h ? !1 : o && _ === $e.Open;
  Z_(L, { allowed: q(() => [p, v], [p, v]) });
  let F = Be(m, m.selectors.didButtonMove) ? !1 : w, S = Be(m, m.selectors.hasFrozenValue) && !e.static, $ = kh(S, f.value), z = q((J) => f.compare($, J), [f.compare, $]), U = Be(m, (J) => {
    var W;
    if (u == null || !((W = u == null ? void 0 : u.to) != null && W.includes("selection"))) return null;
    let ce = J.options.findIndex((ae) => z(ae.dataRef.current.value));
    return ce === -1 && (ce = 0), ce;
  }), N = (() => {
    if (u == null) return;
    if (U === null) return { ...u, inner: void 0 };
    let J = Array.from(f.listRef.current.values());
    return { ...u, inner: { listRef: { current: J }, index: U } };
  })(), [C, P] = z0(N), R = B0(), Y = Se(t, u ? C : null, m.actions.setOptionsElement, d), A = At();
  se(() => {
    let J = v;
    J && _ === $e.Open && (w_(J) || J == null || J.focus({ preventScroll: !0 }));
  }, [_, v]);
  let V = te((J) => {
    var W;
    switch (A.dispose(), J.key) {
      case he.Space:
        if (m.state.searchQuery !== "") return J.preventDefault(), J.stopPropagation(), m.actions.search(J.key);
      case he.Enter:
        J.preventDefault(), J.stopPropagation(), m.actions.selectActiveOption();
        break;
      case Ae(f.orientation, { vertical: he.ArrowDown, horizontal: he.ArrowRight }):
        return J.preventDefault(), J.stopPropagation(), m.actions.goToOption({ focus: we.Next });
      case Ae(f.orientation, { vertical: he.ArrowUp, horizontal: he.ArrowLeft }):
        return J.preventDefault(), J.stopPropagation(), m.actions.goToOption({ focus: we.Previous });
      case he.Home:
      case he.PageUp:
        return J.preventDefault(), J.stopPropagation(), m.actions.goToOption({ focus: we.First });
      case he.End:
      case he.PageDown:
        return J.preventDefault(), J.stopPropagation(), m.actions.goToOption({ focus: we.Last });
      case he.Escape:
        J.preventDefault(), J.stopPropagation(), mo(() => m.actions.closeListbox()), (W = m.state.buttonElement) == null || W.focus({ preventScroll: !0 });
        return;
      case he.Tab:
        J.preventDefault(), J.stopPropagation(), mo(() => m.actions.closeListbox()), ZY(m.state.buttonElement, J.shiftKey ? lt.Previous : lt.Next);
        break;
      default:
        J.key.length === 1 && (m.actions.search(J.key), A.setTimeout(() => m.actions.clearSearch(), 350));
        break;
    }
  }), T = Be(m, (J) => {
    var W;
    return (W = J.buttonElement) == null ? void 0 : W.id;
  }), B = Oe({ open: _ === $e.Open }), I = hr(u ? R() : {}, { id: r, ref: Y, "aria-activedescendant": Be(m, m.selectors.activeDescendantId), "aria-multiselectable": f.mode === It.Multi ? !0 : void 0, "aria-labelledby": T, "aria-orientation": f.orientation, onKeyDown: V, role: "listbox", tabIndex: _ === $e.Open ? 0 : void 0, style: { ...l.style, ...P, "--button-width": PY(w, p, !0).width }, ...ac(k) }), G = xe(), ie = me(() => f.mode === It.Multi ? f : { ...f, isSelected: z }, [f, z]);
  return E.createElement(Mc, { enabled: i ? e.static || w : !1, ownerDocument: y }, E.createElement(Sa.Provider, { value: ie }, G({ ourProps: I, theirProps: l, slot: B, defaultTag: dk, features: fk, visible: F, name: "Listbox.Options" })));
}
let pk = "div";
function _k(e, t) {
  let n = Ne(), { id: r = `headlessui-listbox-option-${n}`, disabled: s = !1, value: i, ...o } = e, a = ee(Xh) === !0, l = Pr("Listbox.Option"), u = Dc("Listbox.Option"), c = Be(u, (S) => u.selectors.isActive(S, r)), d = l.isSelected(i), f = X(null), m = rk(f), _ = Jt({ disabled: s, value: i, domRef: f, get textValue() {
    return m();
  } }), p = Se(t, f, (S) => {
    S ? l.listRef.current.set(r, S) : l.listRef.current.delete(r);
  }), v = Be(u, (S) => u.selectors.shouldScrollIntoView(S, r));
  be(() => {
    if (v) return qe().requestAnimationFrame(() => {
      var S, $;
      ($ = (S = f.current) == null ? void 0 : S.scrollIntoView) == null || $.call(S, { block: "nearest" });
    });
  }, [v, f]), be(() => {
    if (!a) return u.actions.registerOption(r, _), () => u.actions.unregisterOption(r);
  }, [_, r, a]);
  let h = te((S) => {
    if (s) return S.preventDefault();
    u.actions.selectOption(i);
  }), y = te(() => {
    if (s) return u.actions.goToOption({ focus: we.Nothing });
    u.actions.goToOption({ focus: we.Specific, id: r });
  }), b = uL(), x = te((S) => b.update(S)), w = te((S) => {
    b.wasMoved(S) && (s || c && u.state.activationTrigger === uo.Pointer || u.actions.goToOption({ focus: we.Specific, id: r }, uo.Pointer));
  }), k = te((S) => {
    b.wasMoved(S) && (s || c && u.state.activationTrigger === uo.Pointer && u.actions.goToOption({ focus: we.Nothing }));
  }), j = Oe({ active: c, focus: c, selected: d, disabled: s, selectedOption: d && a }), L = a ? {} : { id: r, ref: p, role: "option", tabIndex: s === !0 ? void 0 : -1, "aria-disabled": s === !0 ? !0 : void 0, "aria-selected": d, disabled: void 0, onClick: h, onFocus: y, onPointerEnter: x, onMouseEnter: x, onPointerMove: w, onMouseMove: w, onPointerLeave: k, onMouseLeave: k }, F = xe();
  return !d && a ? null : F({ ourProps: L, theirProps: o, slot: j, defaultTag: pk, name: "Listbox.Option" });
}
let hk = je;
function vk(e, t) {
  let { options: n, placeholder: r, ...s } = e, i = { ref: Se(t) }, o = Pr("ListboxSelectedOption"), a = Oe({}), l = o.value === void 0 || o.value === null || o.mode === It.Multi && Array.isArray(o.value) && o.value.length === 0, u = xe();
  return E.createElement(Xh.Provider, { value: !0 }, u({ ourProps: i, theirProps: { ...s, children: E.createElement(E.Fragment, null, r && l ? r : n) }, slot: a, defaultTag: hk, name: "ListboxSelectedOption" }));
}
let gk = ge(lk), qh = ge(ck), yk = B_, Zh = ge(mk), Qh = ge(_k), Mk = ge(vk), bk = Object.assign(gk, { Button: qh, Label: yk, Options: Zh, Option: Qh, SelectedOption: Mk }), Tc = pe(null);
Tc.displayName = "GroupContext";
let xk = je;
function wk(e) {
  var t;
  let [n, r] = ne(null), [s, i] = V_(), [o, a] = N_(), l = me(() => ({ switch: n, setSwitch: r }), [n, r]), u = {}, c = e, d = xe();
  return E.createElement(a, { name: "Switch.Description", value: o }, E.createElement(i, { name: "Switch.Label", value: s, props: { htmlFor: (t = l.switch) == null ? void 0 : t.id, onClick(f) {
    n && (Ul(f.currentTarget) && f.preventDefault(), n.click(), n.focus({ preventScroll: !0 }));
  } } }, E.createElement(Tc.Provider, { value: l }, d({ ourProps: u, theirProps: c, slot: {}, defaultTag: xk, name: "Switch.Group" }))));
}
let Yk = "button";
function Lk(e, t) {
  var n;
  let r = Ne(), s = rc(), i = da(), { id: o = s || `headlessui-switch-${r}`, disabled: a = i || !1, checked: l, defaultChecked: u, onChange: c, name: d, value: f, form: m, autoFocus: _ = !1, ...p } = e, v = ee(Tc), [h, y] = ne(null), b = X(null), x = Se(b, t, v === null ? null : v.setSwitch, y), w = S_(u), [k, j] = L_(l, c, w != null ? w : !1), L = At(), [F, S] = ne(!1), $ = te(() => {
    S(!0), j == null || j(!k), L.nextFrame(() => {
      S(!1);
    });
  }), z = te((W) => {
    if (xo(W.currentTarget)) return W.preventDefault();
    W.preventDefault(), $();
  }), U = te((W) => {
    W.key === he.Space ? (W.preventDefault(), $()) : W.key === he.Enter && E_(W.currentTarget);
  }), N = te((W) => W.preventDefault()), C = oc(), P = O_(), { isFocusVisible: R, focusProps: Y } = tc({ autoFocus: _ }), { isHovered: A, hoverProps: V } = ec({ isDisabled: a }), { pressed: T, pressProps: B } = nc({ disabled: a }), I = Oe({ checked: k, disabled: a, hover: A, focus: R, active: T, autofocus: _, changing: F }), G = hr({ id: o, ref: x, role: "switch", type: ic(e, h), tabIndex: e.tabIndex === -1 ? 0 : (n = e.tabIndex) != null ? n : 0, "aria-checked": k, "aria-labelledby": C, "aria-describedby": P, disabled: a || void 0, autoFocus: _, onClick: z, onKeyUp: U, onKeyPress: N }, Y, V, B), ie = q(() => {
    if (w !== void 0) return j == null ? void 0 : j(w);
  }, [j, w]), J = xe();
  return E.createElement(E.Fragment, null, d != null && E.createElement(j_, { disabled: a, data: { [d]: f || "on" }, overrides: { type: "checkbox", checked: k }, form: m, onReset: ie }), J({ ourProps: G, theirProps: p, slot: I, defaultTag: Yk, name: "Switch" }));
}
let Sk = ge(Lk), kk = wk, Dk = B_, Tk = F_, Ek = Object.assign(Sk, { Group: kk, Label: Dk, Description: Tk });
function tm(e, t) {
  let n;
  return (...r) => {
    window.clearTimeout(n), n = window.setTimeout(() => e(...r), t);
  };
}
function jk({ debounce: e, scroll: t, polyfill: n, offsetSize: r } = { debounce: 0, scroll: !1, offsetSize: !1 }) {
  const s = n || (typeof window == "undefined" ? class {
  } : window.ResizeObserver);
  if (!s) throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");
  const [i, o] = ne({ left: 0, top: 0, width: 0, height: 0, bottom: 0, right: 0, x: 0, y: 0 }), a = X({ element: null, scrollContainers: null, resizeObserver: null, lastBounds: i, orientationHandler: null }), l = e ? typeof e == "number" ? e : e.scroll : null, u = e ? typeof e == "number" ? e : e.resize : null, c = X(!1);
  se(() => (c.current = !0, () => void (c.current = !1)));
  const [d, f, m] = me(() => {
    const h = () => {
      if (!a.current.element) return;
      const { left: y, top: b, width: x, height: w, bottom: k, right: j, x: L, y: F } = a.current.element.getBoundingClientRect(), S = { left: y, top: b, width: x, height: w, bottom: k, right: j, x: L, y: F };
      a.current.element instanceof HTMLElement && r && (S.height = a.current.element.offsetHeight, S.width = a.current.element.offsetWidth), Object.freeze(S), c.current && !$k(a.current.lastBounds, S) && o(a.current.lastBounds = S);
    };
    return [h, u ? tm(h, u) : h, l ? tm(h, l) : h];
  }, [o, r, l, u]);
  function _() {
    a.current.scrollContainers && (a.current.scrollContainers.forEach((h) => h.removeEventListener("scroll", m, !0)), a.current.scrollContainers = null), a.current.resizeObserver && (a.current.resizeObserver.disconnect(), a.current.resizeObserver = null), a.current.orientationHandler && ("orientation" in screen && "removeEventListener" in screen.orientation ? screen.orientation.removeEventListener("change", a.current.orientationHandler) : "onorientationchange" in window && window.removeEventListener("orientationchange", a.current.orientationHandler));
  }
  function p() {
    a.current.element && (a.current.resizeObserver = new s(m), a.current.resizeObserver.observe(a.current.element), t && a.current.scrollContainers && a.current.scrollContainers.forEach((h) => h.addEventListener("scroll", m, { capture: !0, passive: !0 })), a.current.orientationHandler = () => {
      m();
    }, "orientation" in screen && "addEventListener" in screen.orientation ? screen.orientation.addEventListener("change", a.current.orientationHandler) : "onorientationchange" in window && window.addEventListener("orientationchange", a.current.orientationHandler));
  }
  const v = (h) => {
    !h || h === a.current.element || (_(), a.current.element = h, a.current.scrollContainers = ev(h), p());
  };
  return Pk(m, !!t), Ak(f), se(() => {
    _(), p();
  }, [t, m, f]), se(() => _, []), [v, i, d];
}
function Ak(e) {
  se(() => {
    const t = e;
    return window.addEventListener("resize", t), () => void window.removeEventListener("resize", t);
  }, [e]);
}
function Pk(e, t) {
  se(() => {
    if (t) {
      const n = e;
      return window.addEventListener("scroll", n, { capture: !0, passive: !0 }), () => void window.removeEventListener("scroll", n, !0);
    }
  }, [e, t]);
}
function ev(e) {
  const t = [];
  if (!e || e === document.body) return t;
  const { overflow: n, overflowX: r, overflowY: s } = window.getComputedStyle(e);
  return [n, r, s].some((i) => i === "auto" || i === "scroll") && t.push(e), [...t, ...ev(e.parentElement)];
}
const Ck = ["x", "y", "top", "bottom", "left", "right", "width", "height"], $k = (e, t) => Ck.every((n) => e[n] === t[n]);
function Hk({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ M.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ M.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ M.createElement("path", {
    fillRule: "evenodd",
    d: "M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z",
    clipRule: "evenodd"
  }));
}
const Rk = /* @__PURE__ */ M.forwardRef(Hk);
function Ok({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ M.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ M.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ M.createElement("path", {
    fillRule: "evenodd",
    d: "M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z",
    clipRule: "evenodd"
  }));
}
const nu = /* @__PURE__ */ M.forwardRef(Ok);
function Nk({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ M.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ M.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ M.createElement("path", {
    fillRule: "evenodd",
    d: "M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z",
    clipRule: "evenodd"
  }));
}
const ln = /* @__PURE__ */ M.forwardRef(Nk);
function Fk({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ M.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ M.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ M.createElement("path", {
    fillRule: "evenodd",
    d: "M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z",
    clipRule: "evenodd"
  }));
}
const Ik = /* @__PURE__ */ M.forwardRef(Fk);
function Vk({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ M.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ M.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ M.createElement("path", {
    fillRule: "evenodd",
    d: "M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z",
    clipRule: "evenodd"
  }));
}
const Bk = /* @__PURE__ */ M.forwardRef(Vk);
function zk({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ M.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ M.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ M.createElement("path", {
    fillRule: "evenodd",
    d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
    clipRule: "evenodd"
  }));
}
const Wk = /* @__PURE__ */ M.forwardRef(zk);
function Uk({
  title: e,
  titleId: t,
  ...n
}, r) {
  return /* @__PURE__ */ M.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: r,
    "aria-labelledby": t
  }, n), e ? /* @__PURE__ */ M.createElement("title", {
    id: t
  }, e) : null, /* @__PURE__ */ M.createElement("path", {
    fillRule: "evenodd",
    d: "M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z",
    clipRule: "evenodd"
  }));
}
const ru = /* @__PURE__ */ M.forwardRef(Uk), v2 = ({
  className: e = "",
  buttonClassName: t = "",
  hiddenIcon: n = !1,
  isOpened: r = !1,
  children: s,
  rowContent: i
}) => {
  const [o, { height: a }] = jk();
  return /* @__PURE__ */ g.jsx("div", { className: e, children: /* @__PURE__ */ g.jsx(tk, { defaultOpen: r, children: ({ open: l }) => /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
    /* @__PURE__ */ g.jsxs(
      Wh,
      {
        className: K(
          "flex w-full justify-start items-center gap-[22px] bg-light-4 border-t-[1px] border-light-3-tint px-[14px] py-[12px] text-left text-[14px] text-dark hover:bg-light-3-tint focus:outline-none transition-colors",
          t
        ),
        children: [
          /* @__PURE__ */ g.jsx(
            ln,
            {
              className: K(
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
      Ya,
      {
        leave: "transition-all duration-300 ease-out overflow-hidden",
        leaveFrom: `h-[${a}px] opacity-100`,
        leaveTo: "h-0 opacity-0",
        children: /* @__PURE__ */ g.jsx(
          An.div,
          {
            ref: o,
            className: "overflow-hidden",
            initial: { opacity: 0, height: 0 },
            animate: { opacity: 1, height: "auto" },
            children: /* @__PURE__ */ g.jsx(Uh, { children: s })
          }
        )
      }
    )
  ] }) }, r.toString()) });
};
var tr = /* @__PURE__ */ ((e) => (e[e.ExtraSmall = 0] = "ExtraSmall", e[e.Small = 1] = "Small", e[e.Medium = 2] = "Medium", e[e.Large = 3] = "Large", e[e.Pagination = 4] = "Pagination", e))(tr || {});
const Kk = () => /* @__PURE__ */ g.jsx("svg", { width: "9", height: "5", viewBox: "0 0 9 5", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ g.jsx("path", { d: "M4.13013 4.37044L0 0H8.26025L4.13013 4.37044Z", fill: "currentColor" }) }), Gk = () => /* @__PURE__ */ g.jsxs("svg", { width: "10", height: "10", viewBox: "0 0 10 10", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
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
] }), Jk = (e) => {
  switch (e) {
    case 0:
      return /* @__PURE__ */ g.jsx(Kk, {});
    case 1:
      return /* @__PURE__ */ g.jsx(ln, { className: K("transition h-4 w-4"), "aria-hidden": "true" });
    case 2:
      return /* @__PURE__ */ g.jsx(ln, { className: K("transition h-6 w-6"), "aria-hidden": "true" });
    case 4:
      return /* @__PURE__ */ g.jsx(Gk, {});
    case 3:
      return /* @__PURE__ */ g.jsx(Rk, { className: K("transition h-4 w-4"), "aria-hidden": "true" });
    default:
      return /* @__PURE__ */ g.jsx(ln, { className: K("transition h-4 w-4"), "aria-hidden": "true" });
  }
}, Jr = ({
  className: e = "",
  withBackground: t = !1,
  onClick: n,
  disabled: r = !1,
  arrowType: s = 0
  /* ExtraSmall */
}) => /* @__PURE__ */ g.jsx(
  "button",
  {
    className: K(
      "transition-all h-[24px] w-[24px] hover:bg-light-4-tint flex items-center justify-center rounded-full",
      s === 3 && "h-[40px] w-[40px]",
      t && "bg-light-4-tint hover:!bg-light-3-tint",
      r && "bg-transparent hover:!bg-transparent opacity-30",
      e
    ),
    disabled: r,
    onClick: n,
    children: /* @__PURE__ */ g.jsx("span", { className: "flex items-center text-dark", children: Jk(s) })
  }
), tv = ({ className: e, innerClassName: t }) => /* @__PURE__ */ g.jsx("div", { className: e, children: /* @__PURE__ */ g.jsx("div", { className: K("spinner", t) }) }), Xk = ({
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
    className: K(
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
          className: K(
            "flex items-center text-dark group-hover:text-primary",
            a && "group-hover:!text-dark",
            t
          ),
          children: i
        }
      ),
      n && /* @__PURE__ */ g.jsx("span", { className: K("truncate", s && "invisible"), children: n }),
      s && /* @__PURE__ */ g.jsx(
        tv,
        {
          className: "absolute scale-[0.4] -translate-y-[7px]",
          innerClassName: r ? "!text-background" : "!text-dark"
        }
      )
    ]
  }
), g2 = ({
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
    className: K(
      "flex items-center justify-between text-[14px] gap-[20px] px-[8px]",
      s
    ),
    onClick: t,
    onMouseEnter: n,
    children: /* @__PURE__ */ g.jsx(
      "div",
      {
        className: K("w-auto", i, !o && "truncate"),
        title: r != null ? r : typeof e == "string" || typeof e == "number" ? e == null ? void 0 : e.toString() : "",
        children: e || "-"
      }
    )
  }
), qk = ({
  className: e = "",
  enabled: t = !1,
  onChange: n,
  isDisabled: r = !1,
  label: s
}) => /* @__PURE__ */ g.jsxs(
  "div",
  {
    className: K(
      "flex items-center",
      e,
      r && "pointer-events-none !cursor-not-allowed"
    ),
    children: [
      /* @__PURE__ */ g.jsx(
        Ek,
        {
          checked: t,
          onChange: n,
          disabled: r,
          className: K(
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
              className: K(
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
          className: K(
            "ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer truncate",
            r && "!cursor-not-allowed"
          ),
          onClick: n,
          children: s
        }
      )
    ]
  }
), y2 = ({
  enabled: e,
  onChange: t,
  label: n,
  disabled: r = !1
}) => /* @__PURE__ */ g.jsxs("div", { className: "flex items-center justify-start gap-[8px]", children: [
  /* @__PURE__ */ g.jsx(qk, { isDisabled: r, enabled: e, onChange: t }),
  /* @__PURE__ */ g.jsx("p", { className: K("text-[14px]", r && "opacity-30"), children: n })
] }), M2 = ({
  className: e = "",
  onShowAllClick: t,
  onCloseClick: n,
  children: r,
  label: s,
  buttonLabel: i
}) => /* @__PURE__ */ g.jsxs(
  "div",
  {
    className: K(
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
            children: /* @__PURE__ */ g.jsx(ru, { className: "h-7 w-7", "aria-hidden": "true" })
          }
        )
      ] }),
      /* @__PURE__ */ g.jsxs("div", { className: " flex flex-col px-[20px] py-[18px] gap-[10px]", children: [
        r,
        /* @__PURE__ */ g.jsx(
          Xk,
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
var nv = { exports: {} };
(function(e, t) {
  (function(n, r) {
    e.exports = r();
  })(Fg, function() {
    var n = 1e3, r = 6e4, s = 36e5, i = "millisecond", o = "second", a = "minute", l = "hour", u = "day", c = "week", d = "month", f = "quarter", m = "year", _ = "date", p = "Invalid Date", v = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, h = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, y = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(N) {
      var C = ["th", "st", "nd", "rd"], P = N % 100;
      return "[" + N + (C[(P - 20) % 10] || C[P] || C[0]) + "]";
    } }, b = function(N, C, P) {
      var R = String(N);
      return !R || R.length >= C ? N : "" + Array(C + 1 - R.length).join(P) + N;
    }, x = { s: b, z: function(N) {
      var C = -N.utcOffset(), P = Math.abs(C), R = Math.floor(P / 60), Y = P % 60;
      return (C <= 0 ? "+" : "-") + b(R, 2, "0") + ":" + b(Y, 2, "0");
    }, m: function N(C, P) {
      if (C.date() < P.date()) return -N(P, C);
      var R = 12 * (P.year() - C.year()) + (P.month() - C.month()), Y = C.clone().add(R, d), A = P - Y < 0, V = C.clone().add(R + (A ? -1 : 1), d);
      return +(-(R + (P - Y) / (A ? Y - V : V - Y)) || 0);
    }, a: function(N) {
      return N < 0 ? Math.ceil(N) || 0 : Math.floor(N);
    }, p: function(N) {
      return { M: d, y: m, w: c, d: u, D: _, h: l, m: a, s: o, ms: i, Q: f }[N] || String(N || "").toLowerCase().replace(/s$/, "");
    }, u: function(N) {
      return N === void 0;
    } }, w = "en", k = {};
    k[w] = y;
    var j = "$isDayjsObject", L = function(N) {
      return N instanceof z || !(!N || !N[j]);
    }, F = function N(C, P, R) {
      var Y;
      if (!C) return w;
      if (typeof C == "string") {
        var A = C.toLowerCase();
        k[A] && (Y = A), P && (k[A] = P, Y = A);
        var V = C.split("-");
        if (!Y && V.length > 1) return N(V[0]);
      } else {
        var T = C.name;
        k[T] = C, Y = T;
      }
      return !R && Y && (w = Y), Y || !R && w;
    }, S = function(N, C) {
      if (L(N)) return N.clone();
      var P = typeof C == "object" ? C : {};
      return P.date = N, P.args = arguments, new z(P);
    }, $ = x;
    $.l = F, $.i = L, $.w = function(N, C) {
      return S(N, { locale: C.$L, utc: C.$u, x: C.$x, $offset: C.$offset });
    };
    var z = function() {
      function N(P) {
        this.$L = F(P.locale, null, !0), this.parse(P), this.$x = this.$x || P.x || {}, this[j] = !0;
      }
      var C = N.prototype;
      return C.parse = function(P) {
        this.$d = function(R) {
          var Y = R.date, A = R.utc;
          if (Y === null) return /* @__PURE__ */ new Date(NaN);
          if ($.u(Y)) return /* @__PURE__ */ new Date();
          if (Y instanceof Date) return new Date(Y);
          if (typeof Y == "string" && !/Z$/i.test(Y)) {
            var V = Y.match(v);
            if (V) {
              var T = V[2] - 1 || 0, B = (V[7] || "0").substring(0, 3);
              return A ? new Date(Date.UTC(V[1], T, V[3] || 1, V[4] || 0, V[5] || 0, V[6] || 0, B)) : new Date(V[1], T, V[3] || 1, V[4] || 0, V[5] || 0, V[6] || 0, B);
            }
          }
          return new Date(Y);
        }(P), this.init();
      }, C.init = function() {
        var P = this.$d;
        this.$y = P.getFullYear(), this.$M = P.getMonth(), this.$D = P.getDate(), this.$W = P.getDay(), this.$H = P.getHours(), this.$m = P.getMinutes(), this.$s = P.getSeconds(), this.$ms = P.getMilliseconds();
      }, C.$utils = function() {
        return $;
      }, C.isValid = function() {
        return this.$d.toString() !== p;
      }, C.isSame = function(P, R) {
        var Y = S(P);
        return this.startOf(R) <= Y && Y <= this.endOf(R);
      }, C.isAfter = function(P, R) {
        return S(P) < this.startOf(R);
      }, C.isBefore = function(P, R) {
        return this.endOf(R) < S(P);
      }, C.$g = function(P, R, Y) {
        return $.u(P) ? this[R] : this.set(Y, P);
      }, C.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, C.valueOf = function() {
        return this.$d.getTime();
      }, C.startOf = function(P, R) {
        var Y = this, A = !!$.u(R) || R, V = $.p(P), T = function(ae, de) {
          var _e = $.w(Y.$u ? Date.UTC(Y.$y, de, ae) : new Date(Y.$y, de, ae), Y);
          return A ? _e : _e.endOf(u);
        }, B = function(ae, de) {
          return $.w(Y.toDate()[ae].apply(Y.toDate("s"), (A ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(de)), Y);
        }, I = this.$W, G = this.$M, ie = this.$D, J = "set" + (this.$u ? "UTC" : "");
        switch (V) {
          case m:
            return A ? T(1, 0) : T(31, 11);
          case d:
            return A ? T(1, G) : T(0, G + 1);
          case c:
            var W = this.$locale().weekStart || 0, ce = (I < W ? I + 7 : I) - W;
            return T(A ? ie - ce : ie + (6 - ce), G);
          case u:
          case _:
            return B(J + "Hours", 0);
          case l:
            return B(J + "Minutes", 1);
          case a:
            return B(J + "Seconds", 2);
          case o:
            return B(J + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, C.endOf = function(P) {
        return this.startOf(P, !1);
      }, C.$set = function(P, R) {
        var Y, A = $.p(P), V = "set" + (this.$u ? "UTC" : ""), T = (Y = {}, Y[u] = V + "Date", Y[_] = V + "Date", Y[d] = V + "Month", Y[m] = V + "FullYear", Y[l] = V + "Hours", Y[a] = V + "Minutes", Y[o] = V + "Seconds", Y[i] = V + "Milliseconds", Y)[A], B = A === u ? this.$D + (R - this.$W) : R;
        if (A === d || A === m) {
          var I = this.clone().set(_, 1);
          I.$d[T](B), I.init(), this.$d = I.set(_, Math.min(this.$D, I.daysInMonth())).$d;
        } else T && this.$d[T](B);
        return this.init(), this;
      }, C.set = function(P, R) {
        return this.clone().$set(P, R);
      }, C.get = function(P) {
        return this[$.p(P)]();
      }, C.add = function(P, R) {
        var Y, A = this;
        P = Number(P);
        var V = $.p(R), T = function(G) {
          var ie = S(A);
          return $.w(ie.date(ie.date() + Math.round(G * P)), A);
        };
        if (V === d) return this.set(d, this.$M + P);
        if (V === m) return this.set(m, this.$y + P);
        if (V === u) return T(1);
        if (V === c) return T(7);
        var B = (Y = {}, Y[a] = r, Y[l] = s, Y[o] = n, Y)[V] || 1, I = this.$d.getTime() + P * B;
        return $.w(I, this);
      }, C.subtract = function(P, R) {
        return this.add(-1 * P, R);
      }, C.format = function(P) {
        var R = this, Y = this.$locale();
        if (!this.isValid()) return Y.invalidDate || p;
        var A = P || "YYYY-MM-DDTHH:mm:ssZ", V = $.z(this), T = this.$H, B = this.$m, I = this.$M, G = Y.weekdays, ie = Y.months, J = Y.meridiem, W = function(de, _e, ke, Ge) {
          return de && (de[_e] || de(R, A)) || ke[_e].slice(0, Ge);
        }, ce = function(de) {
          return $.s(T % 12 || 12, de, "0");
        }, ae = J || function(de, _e, ke) {
          var Ge = de < 12 ? "AM" : "PM";
          return ke ? Ge.toLowerCase() : Ge;
        };
        return A.replace(h, function(de, _e) {
          return _e || function(ke) {
            switch (ke) {
              case "YY":
                return String(R.$y).slice(-2);
              case "YYYY":
                return $.s(R.$y, 4, "0");
              case "M":
                return I + 1;
              case "MM":
                return $.s(I + 1, 2, "0");
              case "MMM":
                return W(Y.monthsShort, I, ie, 3);
              case "MMMM":
                return W(ie, I);
              case "D":
                return R.$D;
              case "DD":
                return $.s(R.$D, 2, "0");
              case "d":
                return String(R.$W);
              case "dd":
                return W(Y.weekdaysMin, R.$W, G, 2);
              case "ddd":
                return W(Y.weekdaysShort, R.$W, G, 3);
              case "dddd":
                return G[R.$W];
              case "H":
                return String(T);
              case "HH":
                return $.s(T, 2, "0");
              case "h":
                return ce(1);
              case "hh":
                return ce(2);
              case "a":
                return ae(T, B, !0);
              case "A":
                return ae(T, B, !1);
              case "m":
                return String(B);
              case "mm":
                return $.s(B, 2, "0");
              case "s":
                return String(R.$s);
              case "ss":
                return $.s(R.$s, 2, "0");
              case "SSS":
                return $.s(R.$ms, 3, "0");
              case "Z":
                return V;
            }
            return null;
          }(de) || V.replace(":", "");
        });
      }, C.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, C.diff = function(P, R, Y) {
        var A, V = this, T = $.p(R), B = S(P), I = (B.utcOffset() - this.utcOffset()) * r, G = this - B, ie = function() {
          return $.m(V, B);
        };
        switch (T) {
          case m:
            A = ie() / 12;
            break;
          case d:
            A = ie();
            break;
          case f:
            A = ie() / 3;
            break;
          case c:
            A = (G - I) / 6048e5;
            break;
          case u:
            A = (G - I) / 864e5;
            break;
          case l:
            A = G / s;
            break;
          case a:
            A = G / r;
            break;
          case o:
            A = G / n;
            break;
          default:
            A = G;
        }
        return Y ? A : $.a(A);
      }, C.daysInMonth = function() {
        return this.endOf(d).$D;
      }, C.$locale = function() {
        return k[this.$L];
      }, C.locale = function(P, R) {
        if (!P) return this.$L;
        var Y = this.clone(), A = F(P, R, !0);
        return A && (Y.$L = A), Y;
      }, C.clone = function() {
        return $.w(this.$d, this);
      }, C.toDate = function() {
        return new Date(this.valueOf());
      }, C.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, C.toISOString = function() {
        return this.$d.toISOString();
      }, C.toString = function() {
        return this.$d.toUTCString();
      }, N;
    }(), U = z.prototype;
    return S.prototype = U, [["$ms", i], ["$s", o], ["$m", a], ["$H", l], ["$W", u], ["$M", d], ["$y", m], ["$D", _]].forEach(function(N) {
      U[N[1]] = function(C) {
        return this.$g(C, N[0], N[1]);
      };
    }), S.extend = function(N, C) {
      return N.$i || (N(C, z, S), N.$i = !0), S;
    }, S.locale = F, S.isDayjs = L, S.unix = function(N) {
      return S(1e3 * N);
    }, S.en = k[w], S.Ls = k, S.p = {}, S;
  });
})(nv);
var Zk = nv.exports;
const D = /* @__PURE__ */ Tm(Zk);
function O(e, t) {
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
const Ec = "en", jc = "YYYY-MM-DD", Qk = "sun", e1 = [0, 1, 2, 3, 4, 5, 6], t1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], n1 = 42, st = pe({
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
  i18n: Ec,
  disabled: !1,
  inputClassName: "",
  containerClassName: "",
  toggleClassName: "",
  readOnly: !1,
  displayFormat: jc,
  minDate: null,
  maxDate: null,
  disabledDates: null,
  inputId: void 0,
  inputName: void 0,
  startWeekOn: Qk,
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
function r1(...e) {
  return e.filter(Boolean).join(" ");
}
function rv(e = 0, t = 0) {
  const n = [];
  for (let r = e; r <= t; r++)
    n.push(r);
  return n;
}
function o1(e, t = 3) {
  return e.slice(0, t);
}
function s1(e) {
  return `${e[0].toUpperCase()}${e.slice(1, e.length)}`;
}
function Ve(e, t = jc) {
  return e.format(t);
}
function i1(e) {
  return {
    ddd: Ve(D(e).startOf("month"), "ddd"),
    basic: Ve(D(e).startOf("month")),
    object: D(e).startOf("month")
  };
}
function Ac(e) {
  return isNaN(D(e).daysInMonth()) ? [] : [...rv(1, D(e).daysInMonth())];
}
function wt(e) {
  return e.date(1).hour(0).minute(0).second(0).month(e.month() + 1);
}
function un(e) {
  return e.date(1).hour(0).minute(0).second(0).month(e.month() - 1);
}
function a1(e = [], t = 0) {
  return e.slice(0, t);
}
function l1(e = [], t = 0) {
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
function u1(e, t) {
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
function c1(e, t = 0) {
  return l1(Ac(e), t);
}
function d1(e, t = 0) {
  return a1(Ac(e), t);
}
function Pc(e = Ec) {
  switch (e) {
    case "af":
      Promise.resolve().then(function() {
        return A1;
      });
      break;
    case "am":
      Promise.resolve().then(function() {
        return $1;
      });
      break;
    case "ar-dz":
      Promise.resolve().then(function() {
        return O1;
      });
      break;
    case "ar-iq":
      Promise.resolve().then(function() {
        return I1;
      });
      break;
    case "ar-kw":
      Promise.resolve().then(function() {
        return z1;
      });
      break;
    case "ar-ly":
      Promise.resolve().then(function() {
        return K1;
      });
      break;
    case "ar-ma":
      Promise.resolve().then(function() {
        return X1;
      });
      break;
    case "ar-sa":
      Promise.resolve().then(function() {
        return Q1;
      });
      break;
    case "ar-tn":
      Promise.resolve().then(function() {
        return nD;
      });
      break;
    case "ar":
      Promise.resolve().then(function() {
        return sD;
      });
      break;
    case "az":
      Promise.resolve().then(function() {
        return lD;
      });
      break;
    case "bg":
      Promise.resolve().then(function() {
        return dD;
      });
      break;
    case "bi":
      Promise.resolve().then(function() {
        return pD;
      });
      break;
    case "bm":
      Promise.resolve().then(function() {
        return vD;
      });
      break;
    case "bn-bd":
      Promise.resolve().then(function() {
        return MD;
      });
      break;
    case "bn":
      Promise.resolve().then(function() {
        return wD;
      });
      break;
    case "bo":
      Promise.resolve().then(function() {
        return SD;
      });
      break;
    case "br":
      Promise.resolve().then(function() {
        return TD;
      });
      break;
    case "ca":
      Promise.resolve().then(function() {
        return AD;
      });
      break;
    case "cs":
      Promise.resolve().then(function() {
        return $D;
      });
      break;
    case "cv":
      Promise.resolve().then(function() {
        return OD;
      });
      break;
    case "cy":
      Promise.resolve().then(function() {
        return ID;
      });
      break;
    case "da":
      Promise.resolve().then(function() {
        return zD;
      });
      break;
    case "de-at":
      Promise.resolve().then(function() {
        return KD;
      });
      break;
    case "de-ch":
      Promise.resolve().then(function() {
        return XD;
      });
      break;
    case "de":
      Promise.resolve().then(function() {
        return QD;
      });
      break;
    case "dv":
      Promise.resolve().then(function() {
        return nT;
      });
      break;
    case "el":
      Promise.resolve().then(function() {
        return sT;
      });
      break;
    case "en-au":
      Promise.resolve().then(function() {
        return lT;
      });
      break;
    case "en-gb":
      Promise.resolve().then(function() {
        return dT;
      });
      break;
    case "en-ie":
      Promise.resolve().then(function() {
        return pT;
      });
      break;
    case "en-il":
      Promise.resolve().then(function() {
        return vT;
      });
      break;
    case "en-in":
      Promise.resolve().then(function() {
        return MT;
      });
      break;
    case "en-nz":
      Promise.resolve().then(function() {
        return wT;
      });
      break;
    case "en-sg":
      Promise.resolve().then(function() {
        return ST;
      });
      break;
    case "en-tt":
      Promise.resolve().then(function() {
        return TT;
      });
      break;
    case "en":
      Promise.resolve().then(function() {
        return nm;
      });
      break;
    case "eo":
      Promise.resolve().then(function() {
        return CT;
      });
      break;
    case "es-do":
      Promise.resolve().then(function() {
        return RT;
      });
      break;
    case "es-mx":
      Promise.resolve().then(function() {
        return FT;
      });
      break;
    case "es-pr":
      Promise.resolve().then(function() {
        return BT;
      });
      break;
    case "es-us":
      Promise.resolve().then(function() {
        return UT;
      });
      break;
    case "es":
      Promise.resolve().then(function() {
        return JT;
      });
      break;
    case "et":
      Promise.resolve().then(function() {
        return ZT;
      });
      break;
    case "eu":
      Promise.resolve().then(function() {
        return tE;
      });
      break;
    case "fa":
      Promise.resolve().then(function() {
        return oE;
      });
      break;
    case "fi":
      Promise.resolve().then(function() {
        return aE;
      });
      break;
    case "fo":
      Promise.resolve().then(function() {
        return cE;
      });
      break;
    case "fr-ch":
      Promise.resolve().then(function() {
        return mE;
      });
      break;
    case "fr":
      Promise.resolve().then(function() {
        return hE;
      });
      break;
    case "fy":
      Promise.resolve().then(function() {
        return yE;
      });
      break;
    case "ga":
      Promise.resolve().then(function() {
        return xE;
      });
      break;
    case "gd":
      Promise.resolve().then(function() {
        return LE;
      });
      break;
    case "gl":
      Promise.resolve().then(function() {
        return DE;
      });
      break;
    case "gom-latn":
      Promise.resolve().then(function() {
        return jE;
      });
      break;
    case "gu":
      Promise.resolve().then(function() {
        return CE;
      });
      break;
    case "he":
      Promise.resolve().then(function() {
        return RE;
      });
      break;
    case "hi":
      Promise.resolve().then(function() {
        return FE;
      });
      break;
    case "hr":
      Promise.resolve().then(function() {
        return BE;
      });
      break;
    case "ht":
      Promise.resolve().then(function() {
        return UE;
      });
      break;
    case "hu":
      Promise.resolve().then(function() {
        return JE;
      });
      break;
    case "hy-am":
      Promise.resolve().then(function() {
        return ZE;
      });
      break;
    case "id":
      Promise.resolve().then(function() {
        return tj;
      });
      break;
    case "is":
      Promise.resolve().then(function() {
        return oj;
      });
      break;
    case "it-ch":
      Promise.resolve().then(function() {
        return aj;
      });
      break;
    case "it":
      Promise.resolve().then(function() {
        return cj;
      });
      break;
    case "ja":
      Promise.resolve().then(function() {
        return mj;
      });
      break;
    case "jv":
      Promise.resolve().then(function() {
        return hj;
      });
      break;
    case "ka":
      Promise.resolve().then(function() {
        return yj;
      });
      break;
    case "kk":
      Promise.resolve().then(function() {
        return xj;
      });
      break;
    case "ko":
      Promise.resolve().then(function() {
        return Lj;
      });
      break;
    case "ku":
      Promise.resolve().then(function() {
        return Dj;
      });
      break;
    case "ky":
      Promise.resolve().then(function() {
        return jj;
      });
      break;
    case "lb":
      Promise.resolve().then(function() {
        return Cj;
      });
      break;
    case "lo":
      Promise.resolve().then(function() {
        return Rj;
      });
      break;
    case "lt":
      Promise.resolve().then(function() {
        return Fj;
      });
      break;
    case "lv":
      Promise.resolve().then(function() {
        return Bj;
      });
      break;
    case "me":
      Promise.resolve().then(function() {
        return Uj;
      });
      break;
    case "mi":
      Promise.resolve().then(function() {
        return Jj;
      });
      break;
    case "mk":
      Promise.resolve().then(function() {
        return Zj;
      });
      break;
    case "ml":
      Promise.resolve().then(function() {
        return tA;
      });
      break;
    case "mn":
      Promise.resolve().then(function() {
        return oA;
      });
      break;
    case "ms-my":
      Promise.resolve().then(function() {
        return aA;
      });
      break;
    case "ms":
      Promise.resolve().then(function() {
        return cA;
      });
      break;
    case "mt":
      Promise.resolve().then(function() {
        return mA;
      });
      break;
    case "my":
      Promise.resolve().then(function() {
        return hA;
      });
      break;
    case "nb":
      Promise.resolve().then(function() {
        return yA;
      });
      break;
    case "ne":
      Promise.resolve().then(function() {
        return xA;
      });
      break;
    case "nl-be":
      Promise.resolve().then(function() {
        return LA;
      });
      break;
    case "nl":
      Promise.resolve().then(function() {
        return DA;
      });
      break;
    case "nn":
      Promise.resolve().then(function() {
        return jA;
      });
      break;
    case "oc-lnc":
      Promise.resolve().then(function() {
        return CA;
      });
      break;
    case "pa-in":
      Promise.resolve().then(function() {
        return RA;
      });
      break;
    case "pl":
      Promise.resolve().then(function() {
        return FA;
      });
      break;
    case "pt-br":
      Promise.resolve().then(function() {
        return BA;
      });
      break;
    case "pt":
      Promise.resolve().then(function() {
        return UA;
      });
      break;
    case "rn":
      Promise.resolve().then(function() {
        return JA;
      });
      break;
    case "ro":
      Promise.resolve().then(function() {
        return ZA;
      });
      break;
    case "ru":
      Promise.resolve().then(function() {
        return tP;
      });
      break;
    case "rw":
      Promise.resolve().then(function() {
        return oP;
      });
      break;
    case "sd":
      Promise.resolve().then(function() {
        return aP;
      });
      break;
    case "se":
      Promise.resolve().then(function() {
        return cP;
      });
      break;
    case "si":
      Promise.resolve().then(function() {
        return mP;
      });
      break;
    case "sk":
      Promise.resolve().then(function() {
        return hP;
      });
      break;
    case "sl":
      Promise.resolve().then(function() {
        return yP;
      });
      break;
    case "sq":
      Promise.resolve().then(function() {
        return xP;
      });
      break;
    case "sr":
      Promise.resolve().then(function() {
        return LP;
      });
      break;
    case "sr-cyrl":
      Promise.resolve().then(function() {
        return DP;
      });
      break;
    case "ss":
      Promise.resolve().then(function() {
        return jP;
      });
      break;
    case "sv-fi":
      Promise.resolve().then(function() {
        return CP;
      });
      break;
    case "sv":
      Promise.resolve().then(function() {
        return RP;
      });
      break;
    case "sw":
      Promise.resolve().then(function() {
        return FP;
      });
      break;
    case "ta":
      Promise.resolve().then(function() {
        return BP;
      });
      break;
    case "te":
      Promise.resolve().then(function() {
        return UP;
      });
      break;
    case "tg":
      Promise.resolve().then(function() {
        return JP;
      });
      break;
    case "th":
      Promise.resolve().then(function() {
        return ZP;
      });
      break;
    case "tk":
      Promise.resolve().then(function() {
        return tC;
      });
      break;
    case "tl-ph":
      Promise.resolve().then(function() {
        return oC;
      });
      break;
    case "tlh":
      Promise.resolve().then(function() {
        return aC;
      });
      break;
    case "tr":
      Promise.resolve().then(function() {
        return cC;
      });
      break;
    case "tzl":
      Promise.resolve().then(function() {
        return mC;
      });
      break;
    case "tzm-latn":
      Promise.resolve().then(function() {
        return hC;
      });
      break;
    case "tzm":
      Promise.resolve().then(function() {
        return yC;
      });
      break;
    case "ug-cn":
      Promise.resolve().then(function() {
        return xC;
      });
      break;
    case "uk":
      Promise.resolve().then(function() {
        return LC;
      });
      break;
    case "ur":
      Promise.resolve().then(function() {
        return DC;
      });
      break;
    case "uz-latn":
      Promise.resolve().then(function() {
        return jC;
      });
      break;
    case "uz":
      Promise.resolve().then(function() {
        return CC;
      });
      break;
    case "vi":
      Promise.resolve().then(function() {
        return RC;
      });
      break;
    case "x-pseudo":
      Promise.resolve().then(function() {
        return FC;
      });
      break;
    case "yo":
      Promise.resolve().then(function() {
        return BC;
      });
      break;
    case "zh-cn":
      Promise.resolve().then(function() {
        return UC;
      });
      break;
    case "zh-hk":
      Promise.resolve().then(function() {
        return JC;
      });
      break;
    case "zh-tw":
      Promise.resolve().then(function() {
        return ZC;
      });
      break;
    case "zh":
      Promise.resolve().then(function() {
        return t$;
      });
      break;
    default:
      Promise.resolve().then(function() {
        return nm;
      });
      break;
  }
}
const f1 = ({ className: e = "w-6 h-6" }) => {
  const { calendarColors: t } = ee(st);
  return E.createElement(
    "svg",
    { className: e, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor" },
    E.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M15.75 19.5L8.25 12l7.5-7.5", style: { color: t == null ? void 0 : t.text } })
  );
}, m1 = ({ className: e = "w-6 h-6" }) => {
  const { calendarColors: t } = ee(st);
  return E.createElement(
    "svg",
    { className: e, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", transform: "rotate(90)" },
    E.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M15.75 19.5L8.25 12l7.5-7.5", style: { color: t == null ? void 0 : t.text } })
  );
}, p1 = ({ className: e = "w-6 h-6" }) => {
  const { calendarColors: t } = ee(st);
  return E.createElement(
    "svg",
    { className: e, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", transform: "rotate(270)" },
    E.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M15.75 19.5L8.25 12l7.5-7.5", style: { color: t == null ? void 0 : t.text } })
  );
}, _1 = ({ className: e = "w-6 h-6" }) => {
  const { calendarColors: t } = ee(st);
  return E.createElement(
    "svg",
    { className: e, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor" },
    E.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M8.25 4.5l7.5 7.5-7.5 7.5", style: { color: t == null ? void 0 : t.text } })
  );
};
E.forwardRef((e, t) => E.createElement("div", { ref: t, className: "absolute z-20 h-4 w-4 rotate-45 mt-0.5 ml-[1.2rem] border-l border-t border-gray-300 bg-white dark:bg-slate-800 dark:border-slate-600" }));
const h1 = ({ children: e, onClick: t, roundedFull: n = !1, selected: r = !1 }) => {
  const { accentColor: s, calendarColors: i } = ee(st), o = q(() => `${n ? "rounded-full p-[0.45rem] focus:ring-0" : "w-full text-[14px] tracking-wide select-none px-3 rounded-md focus:ring-1"}, ${i == null ? void 0 : i.hoverBgClass}`, [i == null ? void 0 : i.hoverBgClass, n]), a = {
    color: i == null ? void 0 : i.activeText,
    backgroundColor: s
  }, l = {
    color: i == null ? void 0 : i.text
  };
  return E.createElement("button", { type: "button", className: o(), onClick: t, style: r ? a : l }, e);
};
var H = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {};
function v1(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ou = {}, g1 = {
  get exports() {
    return ou;
  },
  set exports(e) {
    ou = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r();
  })(H, function() {
    return function(n, r, s) {
      r.prototype.isBetween = function(i, o, a, l) {
        var u = s(i), c = s(o), d = (l = l || "()")[0] === "(", f = l[1] === ")";
        return (d ? this.isAfter(u, a) : !this.isBefore(u, a)) && (f ? this.isBefore(c, a) : !this.isAfter(c, a)) || (d ? this.isBefore(u, a) : !this.isAfter(u, a)) && (f ? this.isAfter(c, a) : !this.isBefore(c, a));
      };
    };
  });
})(g1);
var y1 = ou;
D.extend(y1);
const M1 = ({ calendarData: e, onClickPreviousDays: t, onClickDay: n, onClickNextDays: r }) => {
  const { period: s, minDate: i, maxDate: o, disabledDates: a, accentColor: l, calendarColors: u } = ee(st), c = q((h) => {
    const y = `${e.date.year()}-${e.date.month() + 1}-${h}`;
    return {
      active: D(y).isSame(s.start) || D(y).isSame(s.end),
      className: "text-white font-medium rounded-[6px]"
    };
  }, [e.date, s.end, s.start]), d = q(() => u == null ? void 0 : u.hoverBgClass, [u == null ? void 0 : u.hoverBgClass]), f = q((h, y) => {
    if (!i)
      return !1;
    const x = {
      previous: un(e.date),
      current: e.date,
      next: wt(e.date)
    }[y], w = `${x.year()}-${x.month() + 1}-${h >= 10 ? h : "0" + h}`;
    return D(w).isSame(D(i)) ? !1 : D(w).isBefore(D(i));
  }, [e.date, i]), m = q((h, y) => {
    if (!o)
      return !1;
    const x = {
      previous: un(e.date),
      current: e.date,
      next: wt(e.date)
    }[y], w = `${x.year()}-${x.month() + 1}-${h >= 10 ? h : "0" + h}`;
    return D(w).isSame(o) ? !1 : D(w).isAfter(D(o));
  }, [e.date, o]), _ = q((h, y) => {
    if (f(h, y) || m(h, y))
      return !0;
    const x = {
      previous: un(e.date),
      current: e.date,
      next: wt(e.date)
    }[y], w = `${x.year()}-${x.month() + 1}-${h >= 10 ? h : "0" + h}`;
    if (!a || Array.isArray(a) && !a.length)
      return !1;
    let k = 0;
    return a == null || a.forEach((j) => {
      D(w).isAfter(j.startDate) && D(w).isBefore(j.endDate) && k++, (D(w).isSame(j.startDate) || D(w).isSame(j.endDate)) && k++;
    }), k > 0;
  }, [e.date, f, m, a]), p = q((h) => r1("flex items-center justify-center w-[40px] h-[40px] lg:w-[40px] lg:h-[40px] rounded-[6px]", c(h).active ? c(h).className : d()), [c, d]), v = q((h, y) => {
    const b = {
      color: u == null ? void 0 : u.activeText,
      backgroundColor: l
    }, x = {
      color: l
    }, w = `${e.date.year()}-${e.date.month() + 1}-${h >= 10 ? h : "0" + h}`;
    return c(h).active ? b : Ve(D()) === Ve(D(w)) ? x : _(h, y) ? {
      color: u == null ? void 0 : u.disabled
    } : { color: u == null ? void 0 : u.text };
  }, [
    u == null ? void 0 : u.activeText,
    u == null ? void 0 : u.disabled,
    u == null ? void 0 : u.text,
    l,
    e.date,
    c,
    _
  ]);
  return E.createElement(
    "div",
    { className: "grid grid-cols-7 gap-y-0.5 my-1" },
    e.days.previous.map((h, y) => E.createElement("button", { type: "button", key: y, disabled: _(h, "previous"), className: `flex items-center justify-center text-[14px] select-none w-[40px] h-[40px] lg:w-[40px] lg:h-[40px] rounded-[6px] ${u == null ? void 0 : u.hoverBgClass}`, onClick: () => t(h), style: {
      color: _(h, "previous") ? u == null ? void 0 : u.disabled : u == null ? void 0 : u.otherMonth,
      opacity: _(y, "next") ? 0.5 : 1
    } }, h)),
    e.days.current.map((h, y) => E.createElement("button", { type: "button", key: y, disabled: _(h, "current"), className: `text-[14px] select-none ${p(h)}`, onClick: () => {
      n(h);
    }, style: v(h, "current") }, h)),
    e.days.next.map((h, y) => E.createElement("button", { type: "button", key: y, disabled: _(y, "next"), className: `flex items-center text-[14px] justify-center w-[40px] h-[40px] lg:w-[40px] lg:h-[40px] select-none rounded-[6px] ${u == null ? void 0 : u.hoverBgClass}`, onClick: () => {
      r(h);
    }, style: {
      color: _(y, "next") ? u == null ? void 0 : u.disabled : u == null ? void 0 : u.otherMonth,
      opacity: _(y, "next") ? 0.5 : 1
    } }, h))
  );
};
var su = {}, b1 = {
  get exports() {
    return su;
  },
  set exports(e) {
    su = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r();
  })(H, function() {
    var n = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, r = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, s = /\d\d/, i = /\d\d?/, o = /\d*[^-_:/,()\s\d]+/, a = {}, l = function(p) {
      return (p = +p) + (p > 68 ? 1900 : 2e3);
    }, u = function(p) {
      return function(v) {
        this[p] = +v;
      };
    }, c = [/[+-]\d\d:?(\d\d)?|Z/, function(p) {
      (this.zone || (this.zone = {})).offset = function(v) {
        if (!v || v === "Z") return 0;
        var h = v.match(/([+-]|\d\d)/g), y = 60 * h[1] + (+h[2] || 0);
        return y === 0 ? 0 : h[0] === "+" ? -y : y;
      }(p);
    }], d = function(p) {
      var v = a[p];
      return v && (v.indexOf ? v : v.s.concat(v.f));
    }, f = function(p, v) {
      var h, y = a.meridiem;
      if (y) {
        for (var b = 1; b <= 24; b += 1) if (p.indexOf(y(b, 0, v)) > -1) {
          h = b > 12;
          break;
        }
      } else h = p === (v ? "pm" : "PM");
      return h;
    }, m = { A: [o, function(p) {
      this.afternoon = f(p, !1);
    }], a: [o, function(p) {
      this.afternoon = f(p, !0);
    }], S: [/\d/, function(p) {
      this.milliseconds = 100 * +p;
    }], SS: [s, function(p) {
      this.milliseconds = 10 * +p;
    }], SSS: [/\d{3}/, function(p) {
      this.milliseconds = +p;
    }], s: [i, u("seconds")], ss: [i, u("seconds")], m: [i, u("minutes")], mm: [i, u("minutes")], H: [i, u("hours")], h: [i, u("hours")], HH: [i, u("hours")], hh: [i, u("hours")], D: [i, u("day")], DD: [s, u("day")], Do: [o, function(p) {
      var v = a.ordinal, h = p.match(/\d+/);
      if (this.day = h[0], v) for (var y = 1; y <= 31; y += 1) v(y).replace(/\[|\]/g, "") === p && (this.day = y);
    }], M: [i, u("month")], MM: [s, u("month")], MMM: [o, function(p) {
      var v = d("months"), h = (d("monthsShort") || v.map(function(y) {
        return y.slice(0, 3);
      })).indexOf(p) + 1;
      if (h < 1) throw new Error();
      this.month = h % 12 || h;
    }], MMMM: [o, function(p) {
      var v = d("months").indexOf(p) + 1;
      if (v < 1) throw new Error();
      this.month = v % 12 || v;
    }], Y: [/[+-]?\d+/, u("year")], YY: [s, function(p) {
      this.year = l(p);
    }], YYYY: [/\d{4}/, u("year")], Z: c, ZZ: c };
    function _(p) {
      var v, h;
      v = p, h = a && a.formats;
      for (var y = (p = v.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(F, S, $) {
        var z = $ && $.toUpperCase();
        return S || h[$] || n[$] || h[z].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(U, N, C) {
          return N || C.slice(1);
        });
      })).match(r), b = y.length, x = 0; x < b; x += 1) {
        var w = y[x], k = m[w], j = k && k[0], L = k && k[1];
        y[x] = L ? { regex: j, parser: L } : w.replace(/^\[|\]$/g, "");
      }
      return function(F) {
        for (var S = {}, $ = 0, z = 0; $ < b; $ += 1) {
          var U = y[$];
          if (typeof U == "string") z += U.length;
          else {
            var N = U.regex, C = U.parser, P = F.slice(z), R = N.exec(P)[0];
            C.call(S, R), F = F.replace(R, "");
          }
        }
        return function(Y) {
          var A = Y.afternoon;
          if (A !== void 0) {
            var V = Y.hours;
            A ? V < 12 && (Y.hours += 12) : V === 12 && (Y.hours = 0), delete Y.afternoon;
          }
        }(S), S;
      };
    }
    return function(p, v, h) {
      h.p.customParseFormat = !0, p && p.parseTwoDigitYear && (l = p.parseTwoDigitYear);
      var y = v.prototype, b = y.parse;
      y.parse = function(x) {
        var w = x.date, k = x.utc, j = x.args;
        this.$u = k;
        var L = j[1];
        if (typeof L == "string") {
          var F = j[2] === !0, S = j[3] === !0, $ = F || S, z = j[2];
          S && (z = j[2]), a = this.$locale(), !F && z && (a = h.Ls[z]), this.$d = function(P, R, Y) {
            try {
              if (["x", "X"].indexOf(R) > -1) return new Date((R === "X" ? 1e3 : 1) * P);
              var A = _(R)(P), V = A.year, T = A.month, B = A.day, I = A.hours, G = A.minutes, ie = A.seconds, J = A.milliseconds, W = A.zone, ce = /* @__PURE__ */ new Date(), ae = B || (V || T ? 1 : ce.getDate()), de = V || ce.getFullYear(), _e = 0;
              V && !T || (_e = T > 0 ? T - 1 : ce.getMonth());
              var ke = I || 0, Ge = G || 0, Pt = ie || 0, it = J || 0;
              return W ? new Date(Date.UTC(de, _e, ae, ke, Ge, Pt, it + 60 * W.offset * 1e3)) : Y ? new Date(Date.UTC(de, _e, ae, ke, Ge, Pt, it)) : new Date(de, _e, ae, ke, Ge, Pt, it);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(w, L, k), this.init(), z && z !== !0 && (this.$L = this.locale(z).$L), $ && w != this.format(L) && (this.$d = /* @__PURE__ */ new Date("")), a = {};
        } else if (L instanceof Array) for (var U = L.length, N = 1; N <= U; N += 1) {
          j[1] = L[N - 1];
          var C = h.apply(this, j);
          if (C.isValid()) {
            this.$d = C.$d, this.$L = C.$L, this.init();
            break;
          }
          N === U && (this.$d = /* @__PURE__ */ new Date(""));
        }
        else b.call(this, x);
      };
    };
  });
})(b1);
var x1 = su;
const w1 = ({ clickMonth: e }) => {
  const { i18n: t, inputText: n } = ee(st);
  return Pc(t), D.extend(x1), E.createElement("div", { className: "w-full grid grid-cols-4 text-black min-h-[180px] gap-[10px]" }, t1.map((r) => E.createElement(
    h1,
    { key: r, padding: "py-3", onClick: () => {
      e(r);
    }, selected: n ? r - 1 === D(n, "DD.MM.YYYY").month() : r - 1 === D().month() },
    E.createElement(E.Fragment, null, D(`2022-${r}-01`).locale(t).format("MMM"))
  )));
}, Y1 = () => {
  const { i18n: e, startWeekOn: t, calendarColors: n } = ee(st);
  Pc(e);
  const r = me(() => {
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
  return E.createElement("div", { className: "grid grid-cols-7 py-2 mt-2 uppercase" }, e1.map((s) => E.createElement("div", { key: s, className: "tracking-wide font-[600] select-none text-[12px] text-center", style: { color: n == null ? void 0 : n.text } }, s1(o1(D(`2022-11-${6 + (s + r)}`).locale(e).format("ddd"))))));
}, L1 = ({ selectedYear: e, startYear: t, clickYear: n }) => {
  const { accentColor: r, calendarColors: s } = ee(st), i = {
    color: r
  }, o = {
    color: s == null ? void 0 : s.text
  };
  return E.createElement("div", { className: "w-full flex flex-row" }, rv(t, t + 3).map((a, l) => E.createElement(
    "div",
    { key: l, onClick: () => {
      n(a);
    }, className: `cursor-pointer text-[14px] select-none text-[#707070] p-2 font-[600] rounded-[6px] ${s == null ? void 0 : s.hoverBgClass}`, style: a === e ? i : o },
    E.createElement(E.Fragment, null, a)
  )));
}, S1 = ({ date: e, onClickPrevious: t, onClickNext: n, changeMonth: r, changeYear: s }) => {
  const { period: i, changePeriod: o, changeDayHover: a, changeDatepickerValue: l, hideDatepicker: u, asSingle: c, i18n: d, startWeekOn: f, input: m, calendarColors: _ } = ee(st);
  Pc(d);
  const [p, v] = ne(!1), [h, y] = ne(e.year()), [b, x] = ne(e.year() - 3), w = q(() => c1(un(e), u1(i1(e).ddd, f)), [e, f]), k = q(() => Ac(Ve(e)), [e]), j = q(() => d1(un(e), n1 - (w().length + k().length)), [k, e, w]), L = q((P) => {
    setTimeout(() => {
      r(P), v(!p);
    }, 250);
  }, [r, p]), F = q((P) => {
    s(P);
  }, [s]), S = q((P) => {
    x(P + 1);
  }, []), $ = q((P) => {
    x(P - 1);
  }, []), z = q((P, R = e.month() + 1, Y = e.year()) => {
    const A = `${Y}-${R}-${P}`;
    let V, T = null;
    function B(I, G) {
      const ie = m == null ? void 0 : m.current;
      l({
        startDate: D(I).format("YYYY-MM-DD"),
        endDate: D(G).format("YYYY-MM-DD")
      }, ie), u();
    }
    if (i.start && i.end && (a && a(null), o({
      start: null,
      end: null
    })), !i.start && !i.end || i.start && i.end)
      !i.start && !i.end && a(A), V = A, c && (T = A, B(A, A));
    else if (i.start && !i.end) {
      const I = D(A).isSame(D(i.start)) || D(A).isAfter(D(i.start));
      V = I ? i.start : A, T = I ? A : i.start;
    } else {
      const I = D(A).isSame(D(i.end)) || D(A).isBefore(D(i.end));
      V = I ? A : i.start, T = I ? i.end : A;
    }
    T && V || o({
      start: V,
      end: T
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
  ]), U = q((P) => {
    const R = un(e);
    z(P, R.month() + 1, R.year()), t();
  }, [z, e, t]), N = q((P) => {
    const R = wt(e);
    z(P, R.month() + 1, R.year()), n();
  }, [z, e, n]);
  se(() => {
    y(e.year());
  }, [e]);
  const C = me(() => ({
    date: e,
    days: {
      previous: w(),
      current: k(),
      next: j()
    }
  }), [k, e, j, w]);
  return E.createElement(
    "div",
    { className: "w-full md:w-[297px] md:min-w-[297px]" },
    E.createElement(
      "div",
      { className: "flex items-center space-x-1.5 border-b px-2 py-1.5", style: { borderColor: _ == null ? void 0 : _.border } },
      E.createElement(
        "div",
        { className: "flex flex-1 items-center justify-center" },
        E.createElement("div", { className: "w-full flex justify-center text-[20px] leading-[25px] select-none py-[5px] font-[600]", style: { color: _ == null ? void 0 : _.text } }, C.date.locale(d).format("MMMM"))
      ),
      E.createElement(
        "div",
        { className: "absolute right-[20px] top-[29px]" },
        E.createElement("div", { onClick: () => {
          v(!p);
        }, className: "cursor-pointer" }, p ? E.createElement(m1, { className: "h-5 w-5" }) : E.createElement(p1, { className: "h-5 w-5" }))
      )
    ),
    p ? E.createElement(
      "div",
      { className: "px-0.5 sm:px-2 min-h-[303px] flex items-center" },
      E.createElement(w1, { clickMonth: L })
    ) : E.createElement("div", { className: "px-0.5 sm:px-2 min-h-[295px]" }, !p && E.createElement(
      E.Fragment,
      null,
      E.createElement(Y1, null),
      E.createElement(M1, { calendarData: C, onClickPreviousDays: U, onClickDay: z, onClickNextDays: N })
    )),
    E.createElement(
      "div",
      { className: "flex items-center border-t px-2 py-1.5", style: { borderColor: _ == null ? void 0 : _.border } },
      E.createElement(
        "div",
        { className: "flex flex-1 items-center justify-center" },
        E.createElement(
          "div",
          { className: "w-full flex justify-between leading-[25px] py-[10px]" },
          E.createElement(
            "div",
            { onClick: () => {
              $(b);
            }, className: "cursor-pointer" },
            E.createElement(f1, { className: "h-5 w-5 ml-[10px]" })
          ),
          E.createElement(
            "div",
            { onClick: () => {
              S(b);
            }, className: "cursor-pointer" },
            E.createElement(_1, { className: "h-5 w-5 mr-[10px]" })
          )
        ),
        E.createElement(
          "div",
          { className: "absolute" },
          E.createElement(L1, { selectedYear: h, startYear: b, clickYear: F })
        )
      )
    )
  );
}, k1 = (e) => {
  const { calendarContainer: t, arrowContainer: n, inputText: r, disabled: s, inputClassName: i, readOnly: o, inputId: a, inputName: l, classNames: u, invalid: c, emptyLabel: d, fillLabel: f, invalidColor: m, changeInputText: _ } = ee(st), p = X(null), v = X(null), [h, y] = ne();
  se(() => {
    p && e.setContextRef && typeof e.setContextRef == "function" && e.setContextRef(p);
  }, [e, p]);
  const b = q(() => {
    const S = p.current;
    return S && typeof u != "undefined" && typeof u.input == "function" ? u == null ? void 0 : u.input(S) : `relative p-[10px] pl-[40px] w-full h-[40px] rounded-[3px] tracking-wide font-light text-sm placeholder-gray-400  border-[#C4C4C4] bg-white focus:border-fo-accent focus:ring-0  hover:bg-[#FFFFFF] hover:disabled:border-[#C4C4C4] hover:disabled:border-[#DDDDDD] disabled:border-[#C4C4C4] disabled:cursor-not-allowed disabled:bg-[#FFFFFF] active:ring-0 active:border-[#0493F2] active:border-2 ${typeof i == "string" ? i.replace("border-color", "border") : ""}`;
  }, [u, i]), x = q(() => {
    const S = p.current;
    return S && typeof u != "undefined" && typeof u.input == "function" ? u == null ? void 0 : u.input(S) : `relative p-[10px] pl-[40px] w-full h-[40px] rounded-[3px] tracking-wide font-light text-sm placeholder-gray-400 bg-white focus:border-fo-accent focus:ring-0  hover:bg-[#FFFFFF] hover:disabled:border-[#C4C4C4] hover:disabled:border-[#DDDDDD] disabled:border-[#C4C4C4] disabled:cursor-not-allowed disabled:bg-[#FFFFFF] active:ring-0 active:border-[#0493F2] active:border-2 ${typeof i == "string" ? i.replace("hover-border", "border") : ""}`;
  }, [u, i]), w = q(() => {
    const S = /text-(\[[^[\]]+\]|[\w-]+)/g;
    return i && (typeof i == "string" ? i : "").match(S), "bg-red-500";
  }, [i]), k = q(() => {
    const S = /icon-fill-(\[[^[\]]+\]|[\w-]+)/g, z = i ? (typeof i == "string" ? i : "").match(S) : "";
    return z ? z.join(" ").replace("icon-", "") : "";
  }, [i]), j = q(() => {
    const S = /icon-hover-fill-(\[[^[\]]+\]|[\w-]+)/g, z = i ? (typeof i == "string" ? i : "").match(S) : "";
    return z ? z.join(" ").replace("icon-hover-", "") : "";
  }, [i]), L = q(() => {
    const S = /hidden/g, z = i ? (typeof i == "string" ? i : "").match(S) : "";
    return `absolute p-0 m-0 top-[10px] left-[17px] cursor-pointer  ${z ? z.join(" ") : ""}`;
  }, [i]);
  se(() => {
    const S = t == null ? void 0 : t.current;
    p.current;
    const $ = v.current;
    function z() {
      S && S.classList.contains("hidden") && (S.classList.remove("hidden"), S.classList.add("block"), window.innerWidth > 767 && window.screen.height - 100 < S.getBoundingClientRect().bottom && (S.classList.add("bottom-full"), S.classList.add("mb-2.5"), S.classList.remove("mt-2.5")), setTimeout(() => {
        S.classList.remove("translate-y-4"), S.classList.remove("opacity-0"), S.classList.add("translate-y-0"), S.classList.add("opacity-1");
      }, 1));
    }
    return S && $ && !s && $.addEventListener("click", z), () => {
      $ && !s && $.removeEventListener("click", z);
    };
  }, [t, n]), se(() => {
    const S = v.current, $ = () => {
      y(!0);
    };
    return S && S.addEventListener("mouseover", $), () => {
      S && S.removeEventListener("mouseover", $);
    };
  }, []), se(() => {
    const S = v.current, $ = () => {
      y(!1);
    };
    return S && S.addEventListener("mouseout", $), () => {
      S && S.removeEventListener("mouseout", $);
    };
  }, []);
  const F = q(() => {
    const S = t == null ? void 0 : t.current;
    S && S.classList.contains("hidden") && (S.classList.remove("hidden"), S.classList.add("block"), window.innerWidth > 767 && window.screen.height - 100 < S.getBoundingClientRect().bottom && (S.classList.add("bottom-full"), S.classList.add("mb-2.5"), S.classList.remove("mt-2.5")), setTimeout(() => {
      S.classList.remove("translate-y-4"), S.classList.remove("opacity-0"), S.classList.add("translate-y-0"), S.classList.add("opacity-1");
    }, 1));
  }, [t]);
  return E.createElement(
    "div",
    { className: "relative" },
    E.createElement("input", { ref: p, type: "text", placeholder: "DD.MM.YYYY", maxLength: 10, className: h ? x() : b(), disabled: s, readOnly: o, value: r, id: a, name: l, autoComplete: "off", role: "presentation", onChange: (S) => {
      _(S.target.value);
    }, style: c ? {
      borderColor: m
    } : { lineHeight: "20px" } }),
    E.createElement("div", { ref: v, onClick: () => {
      s || F();
    }, className: L() }, s ? E.createElement(
      "svg",
      { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
      E.createElement(
        "g",
        { clipPath: "url(#clip0_739_2102)" },
        E.createElement("path", { d: "M16.6667 2.50004H15.8334V0.833374H14.1667V2.50004H5.83342V0.833374H4.16675V2.50004H3.33341C2.41675 2.50004 1.66675 3.25004 1.66675 4.16671V17.5C1.66675 18.4167 2.41675 19.1667 3.33341 19.1667H16.6667C17.5834 19.1667 18.3334 18.4167 18.3334 17.5V4.16671C18.3334 3.25004 17.5834 2.50004 16.6667 2.50004ZM16.6667 17.5H3.33341V6.66671H16.6667V17.5Z", fill: "#C4C4C4" })
      ),
      E.createElement(
        "defs",
        null,
        E.createElement(
          "clipPath",
          { id: "clip0_739_2102" },
          E.createElement("rect", { width: "20", height: "20", fill: "white" })
        )
      )
    ) : E.createElement(
      "svg",
      { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
      E.createElement(
        "g",
        { clipPath: "url(#clip0_739_2084)" },
        E.createElement("path", { className: h ? j() : k(), d: "M16.6667 2.50004H15.8334V0.833374H14.1667V2.50004H5.83342V0.833374H4.16675V2.50004H3.33341C2.41675 2.50004 1.66675 3.25004 1.66675 4.16671V17.5C1.66675 18.4167 2.41675 19.1667 3.33341 19.1667H16.6667C17.5834 19.1667 18.3334 18.4167 18.3334 17.5V4.16671C18.3334 3.25004 17.5834 2.50004 16.6667 2.50004ZM16.6667 17.5H3.33341V6.66671H16.6667V17.5Z" })
      ),
      E.createElement(
        "defs",
        null,
        E.createElement(
          "clipPath",
          { id: "clip0_739_2084" },
          E.createElement("rect", { width: "20", height: "20", fill: "white" })
        )
      )
    )),
    d && r === "" && E.createElement("span", { className: `absolute text-[12px] left-[44px] top-[11px] ${s ? "" : w()}` }, d),
    E.createElement(
      "div",
      { className: `absolute flex flex-col top-0 text-[12px] left-[44px] ${s ? "" : w()}` },
      f && E.createElement(
        E.Fragment,
        null,
        E.createElement("span", { className: "absolute top-[2px] leading-[15px]" }, f)
      )
    )
  );
};
function D1(e, t) {
  se(() => {
    const n = (r) => {
      !e.current || e.current.contains(r.target) || t(r);
    };
    return document.addEventListener("mousedown", n), document.addEventListener("touchstart", n), () => {
      document.removeEventListener("mousedown", n), document.removeEventListener("touchstart", n);
    };
  }, [e, t]);
}
const T1 = ({ accentColor: e = "", invalidColor: t = "", value: n = null, onChange: r, showFooter: s = !0, configs: i = null, asSingle: o = !0, placeholder: a = null, separator: l = "~", startFrom: u = null, i18n: c = Ec, disabled: d = !1, inputClassName: f = null, containerClassName: m = null, toggleClassName: _ = null, toggleIcon: p = void 0, displayFormat: v = jc, readOnly: h = !0, minDate: y = null, maxDate: b = null, disabledDates: x = null, inputId: w, inputName: k, startWeekOn: j = "mon", classNames: L = void 0, label: F = "Period", emptyLabel: S = "", fillLabel: $ = "", invalid: z = !1, invalidText: U = "", calendarColors: N = {
  disabled: "#ddd",
  activeText: "#fff",
  text: "#1d1d1d",
  hoverBgClass: "hover:bg-[#f6f6f6]",
  background: "#fff",
  border: "#e8e8e8",
  otherMonth: "#707070"
} }) => {
  const C = X(null), P = X(null), R = X(null), [Y, A] = ne(D()), [V, T] = ne(wt(Y)), [B, I] = ne({
    start: null,
    end: null
  }), [G, ie] = ne(null), [J, W] = ne(""), [ce, ae] = ne(E.createRef());
  D1(C, () => {
    C.current && de();
  });
  const de = q(() => {
    const le = P.current;
    le && le.classList.contains("block") && (le.classList.remove("block"), le.classList.remove("translate-y-0"), le.classList.remove("opacity-1"), le.classList.add("translate-y-4"), le.classList.add("opacity-0"), setTimeout(() => {
      le.classList.remove("bottom-full"), le.classList.add("hidden"), le.classList.add("mb-2.5"), le.classList.add("mt-2.5");
    }, 300));
  }, []), _e = q((le) => {
    const re = D(Ve(le)), Ie = D(Ve(V));
    (re.isSame(Ie) || re.isAfter(Ie)) && T(wt(le)), A(le);
  }, [V]), ke = q(() => {
    A(un(Y));
  }, [Y]), Ge = q(() => {
    _e(wt(Y));
  }, [Y, _e]), Pt = q((le) => {
    _e(D(`${Y.year()}-${le < 10 ? "0" : ""}${le}-01`));
  }, [Y, _e]), it = q((le) => {
    _e(D(`${le}-${Y.month() + 1}-01`));
  }, [Y, _e]);
  se(() => {
    const le = C.current, re = P.current, Ie = R.current;
    if (le && re && Ie) {
      const Ee = le.getBoundingClientRect(), Gc = window.innerWidth / 2;
      (Ee.right - Ee.x) / 2 + Ee.x > Gc && (Ie.classList.add("right-0"), Ie.classList.add("mr-3.5"), re.classList.add("right-0"));
    }
  }, []), se(() => {
    if (n && n.startDate && n.endDate) {
      const le = D(n.startDate), re = D(n.endDate);
      le.isValid() && re.isValid() && (le.isSame(re) || le.isBefore(re)) && (I({
        start: Ve(le),
        end: Ve(re)
      }), W(`${Ve(le, v)}${o ? "" : ` ${l} ${Ve(re, v)}`}`));
    }
    n && n.startDate === null && n.endDate === null && (I({
      start: null,
      end: null
    }), W(""));
  }, [o, n, v, l]), se(() => {
    u && D(u).isValid() && ((n == null ? void 0 : n.startDate) != null ? (A(D(n.startDate)), T(wt(D(n.startDate)))) : (A(D(u)), T(wt(D(u)))));
  }, [u, n]);
  const Un = q((le) => {
    const re = le.split(".").join("");
    if (re.length === 8) {
      parseInt(re.substr(0, 2)) === 29 && parseInt(re.substr(4, 4)) % 4 !== 0 ? W(`28.${re.substr(2, 2)}.${re.substr(4, re.length)}`) : W(`${re.substr(0, 2)}.${re.substr(2, 2)}.${re.substr(4, re.length)}`);
      const Ie = /* @__PURE__ */ new Date(`${re.substr(4, 4)}/${re.substr(2, 2)}/${re.substr(0, 2)}`), Ee = D(Ie);
      Ee.isValid() ? (I({
        start: Ve(Ee),
        end: Ve(Ee)
      }), r({
        startDate: Ve(Ee),
        endDate: Ve(Ee)
      }), A(Ee)) : r({
        startDate: null,
        endDate: null
      });
    } else if (re.length === 5) {
      const Ie = re.substr(2, 2);
      parseInt(Ie) > 12 ? W(`${re.substr(0, 2)}.0${re.substr(3, 1)}.${re.substr(4, 1)}`) : parseInt(re.substr(0, 2)) > 29 && parseInt(re.substr(2, 2)) === 2 ? W(`29.${re.substr(2, 2)}.${re.substr(4, 1)}`) : parseInt(re.substr(0, 2)) === 31 && [4, 6, 9, 11].includes(parseInt(re.substr(2, 2))) ? W(`30.${re.substr(2, 2)}.${re.substr(4, 1)}`) : W(`${re.substr(0, 2)}.${re.substr(2, 2)}.${re.substr(4, 1)}`);
    } else if (re.length === 3) {
      const Ie = re.substr(0, 1), Ee = re.substr(0, 2);
      if (parseInt(Ie) > 3)
        return W(`0${re.substr(1, 1)}.${re.substr(2, 1)}`);
      parseInt(Ee) > 31 ? W(`30.${re.substr(2, 1)}`) : W(`${re.substr(0, 2)}.${re.substr(2, 1)}`);
    } else
      W(`${le}`);
  }, []), ja = me(() => ({
    asSingle: o,
    accentColor: e,
    configs: i,
    calendarContainer: P,
    arrowContainer: R,
    hideDatepicker: de,
    period: B,
    changePeriod: (le) => I(le),
    dayHover: G,
    changeDayHover: (le) => ie(le),
    inputText: J,
    changeInputText: (le) => Un(le),
    updateFirstDate: (le) => _e(le),
    changeDatepickerValue: r,
    showFooter: s,
    placeholder: a,
    separator: l,
    i18n: c,
    value: n,
    disabled: d,
    inputClassName: f,
    containerClassName: m,
    toggleClassName: _,
    toggleIcon: p,
    readOnly: h,
    displayFormat: v,
    minDate: y,
    maxDate: b,
    disabledDates: x,
    inputId: w,
    inputName: k,
    startWeekOn: j,
    classNames: L,
    onChange: r,
    input: ce,
    emptyLabel: S,
    fillLabel: $,
    invalid: z,
    invalidText: U,
    invalidColor: t,
    calendarColors: N
  }), [
    o,
    e,
    i,
    de,
    B,
    G,
    J,
    r,
    s,
    a,
    l,
    c,
    n,
    d,
    f,
    m,
    _,
    p,
    h,
    v,
    _e,
    y,
    b,
    x,
    w,
    k,
    j,
    L,
    ce,
    S,
    $,
    z,
    U,
    t,
    N
  ]);
  return E.createElement(
    st.Provider,
    { value: ja },
    E.createElement(
      "div",
      { className: `relative w-full text-gray-700 ${m}`, ref: C },
      E.createElement("p", { className: `text-[14px] leading-[18px] select-none mb-[8px] text-${d ? "[#C4C4C4]" : "[#707070]"}` }, F),
      E.createElement(k1, { setContextRef: ae }),
      z && E.createElement("p", { className: "text-[12px] mt-[8px]", style: { color: t } }, U || "Please specify the details!"),
      E.createElement(
        "div",
        { className: "transition-all ease-out duration-300 absolute z-10 mt-[1px] text-sm lg:text-xs 2xl:text-sm translate-y-4 opacity-0 hidden", ref: P },
        E.createElement(
          "div",
          { className: "mt-2.5 shadow-sm border py-0.5 rounded-[12px]", style: {
            background: N == null ? void 0 : N.background,
            borderColor: N == null ? void 0 : N.border
          } },
          E.createElement(
            "div",
            { className: "flex flex-col lg:flex-row" },
            E.createElement(
              "div",
              { className: "flex items-stretch flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-1.5" },
              E.createElement(S1, { date: Y, onClickPrevious: ke, onClickNext: Ge, changeMonth: Pt, changeYear: it })
            )
          )
        )
      )
    )
  );
};
var ko = {}, E1 = {
  get exports() {
    return ko;
  },
  set exports(e) {
    ko = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "af", weekdays: "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"), months: "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"), weekStart: 1, weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"), monthsShort: "Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"), weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, relativeTime: { future: "oor %s", past: "%s gelede", s: "'n paar sekondes", m: "'n minuut", mm: "%d minute", h: "'n uur", hh: "%d ure", d: "'n dag", dd: "%d dae", M: "'n maand", MM: "%d maande", y: "'n jaar", yy: "%d jaar" } };
    return s.default.locale(i, null, !0), i;
  });
})(E1);
var j1 = ko, A1 = /* @__PURE__ */ O({
  __proto__: null,
  default: j1
}, [ko]), Do = {}, P1 = {
  get exports() {
    return Do;
  },
  set exports(e) {
    Do = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "am", weekdays: "እሑድ_ሰኞ_ማክሰኞ_ረቡዕ_ሐሙስ_አርብ_ቅዳሜ".split("_"), weekdaysShort: "እሑድ_ሰኞ_ማክሰ_ረቡዕ_ሐሙስ_አርብ_ቅዳሜ".split("_"), weekdaysMin: "እሑ_ሰኞ_ማክ_ረቡ_ሐሙ_አር_ቅዳ".split("_"), months: "ጃንዋሪ_ፌብሯሪ_ማርች_ኤፕሪል_ሜይ_ጁን_ጁላይ_ኦገስት_ሴፕቴምበር_ኦክቶበር_ኖቬምበር_ዲሴምበር".split("_"), monthsShort: "ጃንዋ_ፌብሯ_ማርች_ኤፕሪ_ሜይ_ጁን_ጁላይ_ኦገስ_ሴፕቴ_ኦክቶ_ኖቬም_ዲሴም".split("_"), weekStart: 1, yearStart: 4, relativeTime: { future: "በ%s", past: "%s በፊት", s: "ጥቂት ሰከንዶች", m: "አንድ ደቂቃ", mm: "%d ደቂቃዎች", h: "አንድ ሰዓት", hh: "%d ሰዓታት", d: "አንድ ቀን", dd: "%d ቀናት", M: "አንድ ወር", MM: "%d ወራት", y: "አንድ ዓመት", yy: "%d ዓመታት" }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "MMMM D ፣ YYYY", LLL: "MMMM D ፣ YYYY HH:mm", LLLL: "dddd ፣ MMMM D ፣ YYYY HH:mm" }, ordinal: function(o) {
      return o + "ኛ";
    } };
    return s.default.locale(i, null, !0), i;
  });
})(P1);
var C1 = Do, $1 = /* @__PURE__ */ O({
  __proto__: null,
  default: C1
}, [Do]), To = {}, H1 = {
  get exports() {
    return To;
  },
  set exports(e) {
    To = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
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
})(H1);
var R1 = To, O1 = /* @__PURE__ */ O({
  __proto__: null,
  default: R1
}, [To]), Eo = {}, N1 = {
  get exports() {
    return Eo;
  },
  set exports(e) {
    Eo = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
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
})(N1);
var F1 = Eo, I1 = /* @__PURE__ */ O({
  __proto__: null,
  default: F1
}, [Eo]), jo = {}, V1 = {
  get exports() {
    return jo;
  },
  set exports(e) {
    jo = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
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
})(V1);
var B1 = jo, z1 = /* @__PURE__ */ O({
  __proto__: null,
  default: B1
}, [jo]), Ao = {}, W1 = {
  get exports() {
    return Ao;
  },
  set exports(e) {
    Ao = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
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
})(W1);
var U1 = Ao, K1 = /* @__PURE__ */ O({
  __proto__: null,
  default: U1
}, [Ao]), Po = {}, G1 = {
  get exports() {
    return Po;
  },
  set exports(e) {
    Po = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
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
})(G1);
var J1 = Po, X1 = /* @__PURE__ */ O({
  __proto__: null,
  default: J1
}, [Po]), Co = {}, q1 = {
  get exports() {
    return Co;
  },
  set exports(e) {
    Co = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
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
})(q1);
var Z1 = Co, Q1 = /* @__PURE__ */ O({
  __proto__: null,
  default: Z1
}, [Co]), $o = {}, eD = {
  get exports() {
    return $o;
  },
  set exports(e) {
    $o = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
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
})(eD);
var tD = $o, nD = /* @__PURE__ */ O({
  __proto__: null,
  default: tD
}, [$o]), Ho = {}, rD = {
  get exports() {
    return Ho;
  },
  set exports(e) {
    Ho = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
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
})(rD);
var oD = Ho, sD = /* @__PURE__ */ O({
  __proto__: null,
  default: oD
}, [Ho]), Ro = {}, iD = {
  get exports() {
    return Ro;
  },
  set exports(e) {
    Ro = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "az", weekdays: "Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"), weekdaysShort: "Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"), weekdaysMin: "Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"), months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"), monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"), weekStart: 1, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY г.", LLL: "D MMMM YYYY г., H:mm", LLLL: "dddd, D MMMM YYYY г., H:mm" }, relativeTime: { future: "%s sonra", past: "%s əvvəl", s: "bir neçə saniyə", m: "bir dəqiqə", mm: "%d dəqiqə", h: "bir saat", hh: "%d saat", d: "bir gün", dd: "%d gün", M: "bir ay", MM: "%d ay", y: "bir il", yy: "%d il" }, ordinal: function(o) {
      return o;
    } };
    return s.default.locale(i, null, !0), i;
  });
})(iD);
var aD = Ro, lD = /* @__PURE__ */ O({
  __proto__: null,
  default: aD
}, [Ro]), Oo = {}, uD = {
  get exports() {
    return Oo;
  },
  set exports(e) {
    Oo = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
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
})(uD);
var cD = Oo, dD = /* @__PURE__ */ O({
  __proto__: null,
  default: cD
}, [Oo]), No = {}, fD = {
  get exports() {
    return No;
  },
  set exports(e) {
    No = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "bi", weekdays: "Sande_Mande_Tusde_Wenesde_Tosde_Fraede_Sarade".split("_"), months: "Januari_Februari_Maj_Eprel_Mei_Jun_Julae_Okis_Septemba_Oktoba_Novemba_Disemba".split("_"), weekStart: 1, weekdaysShort: "San_Man_Tus_Wen_Tos_Frae_Sar".split("_"), monthsShort: "Jan_Feb_Maj_Epr_Mai_Jun_Jul_Oki_Sep_Okt_Nov_Dis".split("_"), weekdaysMin: "San_Ma_Tu_We_To_Fr_Sar".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, relativeTime: { future: "lo %s", past: "%s bifo", s: "sam seken", m: "wan minit", mm: "%d minit", h: "wan haoa", hh: "%d haoa", d: "wan dei", dd: "%d dei", M: "wan manis", MM: "%d manis", y: "wan yia", yy: "%d yia" } };
    return s.default.locale(i, null, !0), i;
  });
})(fD);
var mD = No, pD = /* @__PURE__ */ O({
  __proto__: null,
  default: mD
}, [No]), Fo = {}, _D = {
  get exports() {
    return Fo;
  },
  set exports(e) {
    Fo = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "bm", weekdays: "Kari_Ntɛnɛn_Tarata_Araba_Alamisa_Juma_Sibiri".split("_"), months: "Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_Mɛkalo_Zuwɛnkalo_Zuluyekalo_Utikalo_Sɛtanburukalo_ɔkutɔburukalo_Nowanburukalo_Desanburukalo".split("_"), weekStart: 1, weekdaysShort: "Kar_Ntɛ_Tar_Ara_Ala_Jum_Sib".split("_"), monthsShort: "Zan_Few_Mar_Awi_Mɛ_Zuw_Zul_Uti_Sɛt_ɔku_Now_Des".split("_"), weekdaysMin: "Ka_Nt_Ta_Ar_Al_Ju_Si".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "MMMM [tile] D [san] YYYY", LLL: "MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm", LLLL: "dddd MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm" }, relativeTime: { future: "%s kɔnɔ", past: "a bɛ %s bɔ", s: "sanga dama dama", m: "miniti kelen", mm: "miniti %d", h: "lɛrɛ kelen", hh: "lɛrɛ %d", d: "tile kelen", dd: "tile %d", M: "kalo kelen", MM: "kalo %d", y: "san kelen", yy: "san %d" } };
    return s.default.locale(i, null, !0), i;
  });
})(_D);
var hD = Fo, vD = /* @__PURE__ */ O({
  __proto__: null,
  default: hD
}, [Fo]), Io = {}, gD = {
  get exports() {
    return Io;
  },
  set exports(e) {
    Io = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
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
})(gD);
var yD = Io, MD = /* @__PURE__ */ O({
  __proto__: null,
  default: yD
}, [Io]), Vo = {}, bD = {
  get exports() {
    return Vo;
  },
  set exports(e) {
    Vo = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
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
})(bD);
var xD = Vo, wD = /* @__PURE__ */ O({
  __proto__: null,
  default: xD
}, [Vo]), Bo = {}, YD = {
  get exports() {
    return Bo;
  },
  set exports(e) {
    Bo = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "bo", weekdays: "གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split("_"), weekdaysShort: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"), weekdaysMin: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"), months: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"), monthsShort: "ཟླ་དང་པོ_ཟླ་གཉིས་པ_ཟླ་གསུམ་པ_ཟླ་བཞི་པ_ཟླ་ལྔ་པ_ཟླ་དྲུག་པ_ཟླ་བདུན་པ_ཟླ་བརྒྱད་པ_ཟླ་དགུ་པ_ཟླ་བཅུ་པ_ཟླ་བཅུ་གཅིག་པ_ཟླ་བཅུ་གཉིས་པ".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "A h:mm", LTS: "A h:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm", LLLL: "dddd, D MMMM YYYY, A h:mm" }, relativeTime: { future: "%s ལ་", past: "%s སྔོན་ལ་", s: "ཏོག་ཙམ་", m: "སྐར་མ་གཅིག་", mm: "སྐར་མ་ %d", h: "ཆུ་ཚོད་གཅིག་", hh: "ཆུ་ཚོད་ %d", d: "ཉིན་གཅིག་", dd: "ཉིན་ %d", M: "ཟླ་བ་གཅིག་", MM: "ཟླ་བ་ %d", y: "ལོ་གཅིག་", yy: "ལོ་ %d" } };
    return s.default.locale(i, null, !0), i;
  });
})(YD);
var LD = Bo, SD = /* @__PURE__ */ O({
  __proto__: null,
  default: LD
}, [Bo]), zo = {}, kD = {
  get exports() {
    return zo;
  },
  set exports(e) {
    zo = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
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
})(kD);
var DD = zo, TD = /* @__PURE__ */ O({
  __proto__: null,
  default: DD
}, [zo]), Wo = {}, ED = {
  get exports() {
    return Wo;
  },
  set exports(e) {
    Wo = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "ca", weekdays: "Diumenge_Dilluns_Dimarts_Dimecres_Dijous_Divendres_Dissabte".split("_"), weekdaysShort: "Dg._Dl._Dt._Dc._Dj._Dv._Ds.".split("_"), weekdaysMin: "Dg_Dl_Dt_Dc_Dj_Dv_Ds".split("_"), months: "Gener_Febrer_Març_Abril_Maig_Juny_Juliol_Agost_Setembre_Octubre_Novembre_Desembre".split("_"), monthsShort: "Gen._Febr._Març_Abr._Maig_Juny_Jul._Ag._Set._Oct._Nov._Des.".split("_"), weekStart: 1, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM [de] YYYY", LLL: "D MMMM [de] YYYY [a les] H:mm", LLLL: "dddd D MMMM [de] YYYY [a les] H:mm", ll: "D MMM YYYY", lll: "D MMM YYYY, H:mm", llll: "ddd D MMM YYYY, H:mm" }, relativeTime: { future: "d'aquí %s", past: "fa %s", s: "uns segons", m: "un minut", mm: "%d minuts", h: "una hora", hh: "%d hores", d: "un dia", dd: "%d dies", M: "un mes", MM: "%d mesos", y: "un any", yy: "%d anys" }, ordinal: function(o) {
      return "" + o + (o === 1 || o === 3 ? "r" : o === 2 ? "n" : o === 4 ? "t" : "è");
    } };
    return s.default.locale(i, null, !0), i;
  });
})(ED);
var jD = Wo, AD = /* @__PURE__ */ O({
  __proto__: null,
  default: jD
}, [Wo]), Uo = {}, PD = {
  get exports() {
    return Uo;
  },
  set exports(e) {
    Uo = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
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
})(PD);
var CD = Uo, $D = /* @__PURE__ */ O({
  __proto__: null,
  default: CD
}, [Uo]), Ko = {}, HD = {
  get exports() {
    return Ko;
  },
  set exports(e) {
    Ko = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "cv", weekdays: "вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун".split("_"), months: "кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав".split("_"), weekStart: 1, weekdaysShort: "выр_тун_ытл_юн_кӗҫ_эрн_шӑм".split("_"), monthsShort: "кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш".split("_"), weekdaysMin: "вр_тн_ыт_юн_кҫ_эр_шм".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD-MM-YYYY", LL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]", LLL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm", LLLL: "dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm" } };
    return s.default.locale(i, null, !0), i;
  });
})(HD);
var RD = Ko, OD = /* @__PURE__ */ O({
  __proto__: null,
  default: RD
}, [Ko]), Go = {}, ND = {
  get exports() {
    return Go;
  },
  set exports(e) {
    Go = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "cy", weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"), months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"), weekStart: 1, weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"), monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"), weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, relativeTime: { future: "mewn %s", past: "%s yn ôl", s: "ychydig eiliadau", m: "munud", mm: "%d munud", h: "awr", hh: "%d awr", d: "diwrnod", dd: "%d diwrnod", M: "mis", MM: "%d mis", y: "blwyddyn", yy: "%d flynedd" } };
    return s.default.locale(i, null, !0), i;
  });
})(ND);
var FD = Go, ID = /* @__PURE__ */ O({
  __proto__: null,
  default: FD
}, [Go]), Jo = {}, VD = {
  get exports() {
    return Jo;
  },
  set exports(e) {
    Jo = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "da", weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"), weekdaysShort: "søn._man._tirs._ons._tors._fre._lør.".split("_"), weekdaysMin: "sø._ma._ti._on._to._fr._lø.".split("_"), months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"), monthsShort: "jan._feb._mar._apr._maj_juni_juli_aug._sept._okt._nov._dec.".split("_"), weekStart: 1, ordinal: function(o) {
      return o + ".";
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd [d.] D. MMMM YYYY [kl.] HH:mm" }, relativeTime: { future: "om %s", past: "%s siden", s: "få sekunder", m: "et minut", mm: "%d minutter", h: "en time", hh: "%d timer", d: "en dag", dd: "%d dage", M: "en måned", MM: "%d måneder", y: "et år", yy: "%d år" } };
    return s.default.locale(i, null, !0), i;
  });
})(VD);
var BD = Jo, zD = /* @__PURE__ */ O({
  __proto__: null,
  default: BD
}, [Jo]), Xo = {}, WD = {
  get exports() {
    return Xo;
  },
  set exports(e) {
    Xo = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
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
})(WD);
var UD = Xo, KD = /* @__PURE__ */ O({
  __proto__: null,
  default: UD
}, [Xo]), qo = {}, GD = {
  get exports() {
    return qo;
  },
  set exports(e) {
    qo = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
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
})(GD);
var JD = qo, XD = /* @__PURE__ */ O({
  __proto__: null,
  default: JD
}, [qo]), Zo = {}, qD = {
  get exports() {
    return Zo;
  },
  set exports(e) {
    Zo = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
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
})(qD);
var ZD = Zo, QD = /* @__PURE__ */ O({
  __proto__: null,
  default: ZD
}, [Zo]), Qo = {}, eT = {
  get exports() {
    return Qo;
  },
  set exports(e) {
    Qo = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "dv", weekdays: "އާދިއްތަ_ހޯމަ_އަންގާރަ_ބުދަ_ބުރާސްފަތި_ހުކުރު_ހޮނިހިރު".split("_"), months: "ޖެނުއަރީ_ފެބްރުއަރީ_މާރިޗު_އޭޕްރީލު_މޭ_ޖޫން_ޖުލައި_އޯގަސްޓު_ސެޕްޓެމްބަރު_އޮކްޓޯބަރު_ނޮވެމްބަރު_ޑިސެމްބަރު".split("_"), weekStart: 7, weekdaysShort: "އާދިއްތަ_ހޯމަ_އަންގާރަ_ބުދަ_ބުރާސްފަތި_ހުކުރު_ހޮނިހިރު".split("_"), monthsShort: "ޖެނުއަރީ_ފެބްރުއަރީ_މާރިޗު_އޭޕްރީލު_މޭ_ޖޫން_ޖުލައި_އޯގަސްޓު_ސެޕްޓެމްބަރު_އޮކްޓޯބަރު_ނޮވެމްބަރު_ޑިސެމްބަރު".split("_"), weekdaysMin: "އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "D/M/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, relativeTime: { future: "ތެރޭގައި %s", past: "ކުރިން %s", s: "ސިކުންތުކޮޅެއް", m: "މިނިޓެއް", mm: "މިނިޓު %d", h: "ގަޑިއިރެއް", hh: "ގަޑިއިރު %d", d: "ދުވަހެއް", dd: "ދުވަސް %d", M: "މަހެއް", MM: "މަސް %d", y: "އަހަރެއް", yy: "އަހަރު %d" } };
    return s.default.locale(i, null, !0), i;
  });
})(eT);
var tT = Qo, nT = /* @__PURE__ */ O({
  __proto__: null,
  default: tT
}, [Qo]), es = {}, rT = {
  get exports() {
    return es;
  },
  set exports(e) {
    es = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "el", weekdays: "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"), weekdaysShort: "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"), weekdaysMin: "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"), months: "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"), monthsShort: "Ιαν_Φεβ_Μαρ_Απρ_Μαι_Ιουν_Ιουλ_Αυγ_Σεπτ_Οκτ_Νοε_Δεκ".split("_"), ordinal: function(o) {
      return o;
    }, weekStart: 1, relativeTime: { future: "σε %s", past: "πριν %s", s: "μερικά δευτερόλεπτα", m: "ένα λεπτό", mm: "%d λεπτά", h: "μία ώρα", hh: "%d ώρες", d: "μία μέρα", dd: "%d μέρες", M: "ένα μήνα", MM: "%d μήνες", y: "ένα χρόνο", yy: "%d χρόνια" }, formats: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" } };
    return s.default.locale(i, null, !0), i;
  });
})(rT);
var oT = es, sT = /* @__PURE__ */ O({
  __proto__: null,
  default: oT
}, [es]), ts = {}, iT = {
  get exports() {
    return ts;
  },
  set exports(e) {
    ts = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "en-au", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), weekStart: 1, weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" } };
    return s.default.locale(i, null, !0), i;
  });
})(iT);
var aT = ts, lT = /* @__PURE__ */ O({
  __proto__: null,
  default: aT
}, [ts]), ns = {}, uT = {
  get exports() {
    return ns;
  },
  set exports(e) {
    ns = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "en-gb", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekStart: 1, yearStart: 4, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, ordinal: function(o) {
      var a = ["th", "st", "nd", "rd"], l = o % 100;
      return "[" + o + (a[(l - 20) % 10] || a[l] || a[0]) + "]";
    } };
    return s.default.locale(i, null, !0), i;
  });
})(uT);
var cT = ns, dT = /* @__PURE__ */ O({
  __proto__: null,
  default: cT
}, [ns]), rs = {}, fT = {
  get exports() {
    return rs;
  },
  set exports(e) {
    rs = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "en-ie", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), weekStart: 1, weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" } };
    return s.default.locale(i, null, !0), i;
  });
})(fT);
var mT = rs, pT = /* @__PURE__ */ O({
  __proto__: null,
  default: mT
}, [rs]), os = {}, _T = {
  get exports() {
    return os;
  },
  set exports(e) {
    os = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "en-il", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" } };
    return s.default.locale(i, null, !0), i;
  });
})(_T);
var hT = os, vT = /* @__PURE__ */ O({
  __proto__: null,
  default: hT
}, [os]), ss = {}, gT = {
  get exports() {
    return ss;
  },
  set exports(e) {
    ss = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "en-in", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekStart: 1, yearStart: 4, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, ordinal: function(o) {
      var a = ["th", "st", "nd", "rd"], l = o % 100;
      return "[" + o + (a[(l - 20) % 10] || a[l] || a[0]) + "]";
    } };
    return s.default.locale(i, null, !0), i;
  });
})(gT);
var yT = ss, MT = /* @__PURE__ */ O({
  __proto__: null,
  default: yT
}, [ss]), is = {}, bT = {
  get exports() {
    return is;
  },
  set exports(e) {
    is = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "en-nz", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), weekStart: 1, weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), ordinal: function(o) {
      var a = ["th", "st", "nd", "rd"], l = o % 100;
      return "[" + o + (a[(l - 20) % 10] || a[l] || a[0]) + "]";
    }, formats: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" } };
    return s.default.locale(i, null, !0), i;
  });
})(bT);
var xT = is, wT = /* @__PURE__ */ O({
  __proto__: null,
  default: xT
}, [is]), as = {}, YT = {
  get exports() {
    return as;
  },
  set exports(e) {
    as = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "en-sg", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), weekStart: 1, weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" } };
    return s.default.locale(i, null, !0), i;
  });
})(YT);
var LT = as, ST = /* @__PURE__ */ O({
  __proto__: null,
  default: LT
}, [as]), ls = {}, kT = {
  get exports() {
    return ls;
  },
  set exports(e) {
    ls = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "en-tt", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekStart: 1, yearStart: 4, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, ordinal: function(o) {
      var a = ["th", "st", "nd", "rd"], l = o % 100;
      return "[" + o + (a[(l - 20) % 10] || a[l] || a[0]) + "]";
    } };
    return s.default.locale(i, null, !0), i;
  });
})(kT);
var DT = ls, TT = /* @__PURE__ */ O({
  __proto__: null,
  default: DT
}, [ls]), us = {}, ET = {
  get exports() {
    return us;
  },
  set exports(e) {
    us = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r();
  })(H, function() {
    return { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(n) {
      var r = ["th", "st", "nd", "rd"], s = n % 100;
      return "[" + n + (r[(s - 20) % 10] || r[s] || r[0]) + "]";
    } };
  });
})(ET);
var jT = us, nm = /* @__PURE__ */ O({
  __proto__: null,
  default: jT
}, [us]), cs = {}, AT = {
  get exports() {
    return cs;
  },
  set exports(e) {
    cs = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "eo", weekdays: "dimanĉo_lundo_mardo_merkredo_ĵaŭdo_vendredo_sabato".split("_"), months: "januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"), weekStart: 1, weekdaysShort: "dim_lun_mard_merk_ĵaŭ_ven_sab".split("_"), monthsShort: "jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec".split("_"), weekdaysMin: "di_lu_ma_me_ĵa_ve_sa".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "D[-a de] MMMM, YYYY", LLL: "D[-a de] MMMM, YYYY HH:mm", LLLL: "dddd, [la] D[-a de] MMMM, YYYY HH:mm" }, relativeTime: { future: "post %s", past: "antaŭ %s", s: "sekundoj", m: "minuto", mm: "%d minutoj", h: "horo", hh: "%d horoj", d: "tago", dd: "%d tagoj", M: "monato", MM: "%d monatoj", y: "jaro", yy: "%d jaroj" } };
    return s.default.locale(i, null, !0), i;
  });
})(AT);
var PT = cs, CT = /* @__PURE__ */ O({
  __proto__: null,
  default: PT
}, [cs]), ds = {}, $T = {
  get exports() {
    return ds;
  },
  set exports(e) {
    ds = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "es-do", weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"), weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"), weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"), months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), monthsShort: "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"), weekStart: 1, relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un día", dd: "%d días", M: "un mes", MM: "%d meses", y: "un año", yy: "%d años" }, ordinal: function(o) {
      return o + "º";
    }, formats: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY h:mm A", LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A" } };
    return s.default.locale(i, null, !0), i;
  });
})($T);
var HT = ds, RT = /* @__PURE__ */ O({
  __proto__: null,
  default: HT
}, [ds]), fs = {}, OT = {
  get exports() {
    return fs;
  },
  set exports(e) {
    fs = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "es-mx", weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"), weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"), weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"), months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), monthsShort: "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"), relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un día", dd: "%d días", M: "un mes", MM: "%d meses", y: "un año", yy: "%d años" }, ordinal: function(o) {
      return o + "º";
    }, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY H:mm", LLLL: "dddd, D [de] MMMM [de] YYYY H:mm" } };
    return s.default.locale(i, null, !0), i;
  });
})(OT);
var NT = fs, FT = /* @__PURE__ */ O({
  __proto__: null,
  default: NT
}, [fs]), ms = {}, IT = {
  get exports() {
    return ms;
  },
  set exports(e) {
    ms = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "es-pr", monthsShort: "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"), weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"), weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"), weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"), months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), weekStart: 1, formats: { LT: "h:mm A", LTS: "h:mm:ss A", L: "MM/DD/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY h:mm A", LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A" }, relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un día", dd: "%d días", M: "un mes", MM: "%d meses", y: "un año", yy: "%d años" }, ordinal: function(o) {
      return o + "º";
    } };
    return s.default.locale(i, null, !0), i;
  });
})(IT);
var VT = ms, BT = /* @__PURE__ */ O({
  __proto__: null,
  default: VT
}, [ms]), ps = {}, zT = {
  get exports() {
    return ps;
  },
  set exports(e) {
    ps = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "es-us", weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"), weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"), weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"), months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), monthsShort: "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"), relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un día", dd: "%d días", M: "un mes", MM: "%d meses", y: "un año", yy: "%d años" }, ordinal: function(o) {
      return o + "º";
    }, formats: { LT: "h:mm A", LTS: "h:mm:ss A", L: "MM/DD/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY h:mm A", LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A" } };
    return s.default.locale(i, null, !0), i;
  });
})(zT);
var WT = ps, UT = /* @__PURE__ */ O({
  __proto__: null,
  default: WT
}, [ps]), _s = {}, KT = {
  get exports() {
    return _s;
  },
  set exports(e) {
    _s = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "es", monthsShort: "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"), weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"), weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"), weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"), months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), weekStart: 1, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY H:mm", LLLL: "dddd, D [de] MMMM [de] YYYY H:mm" }, relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un día", dd: "%d días", M: "un mes", MM: "%d meses", y: "un año", yy: "%d años" }, ordinal: function(o) {
      return o + "º";
    } };
    return s.default.locale(i, null, !0), i;
  });
})(KT);
var GT = _s, JT = /* @__PURE__ */ O({
  __proto__: null,
  default: GT
}, [_s]), hs = {}, XT = {
  get exports() {
    return hs;
  },
  set exports(e) {
    hs = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
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
})(XT);
var qT = hs, ZT = /* @__PURE__ */ O({
  __proto__: null,
  default: qT
}, [hs]), vs = {}, QT = {
  get exports() {
    return vs;
  },
  set exports(e) {
    vs = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "eu", weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"), months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"), weekStart: 1, weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"), monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"), weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY[ko] MMMM[ren] D[a]", LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm", LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm", l: "YYYY-M-D", ll: "YYYY[ko] MMM D[a]", lll: "YYYY[ko] MMM D[a] HH:mm", llll: "ddd, YYYY[ko] MMM D[a] HH:mm" }, relativeTime: { future: "%s barru", past: "duela %s", s: "segundo batzuk", m: "minutu bat", mm: "%d minutu", h: "ordu bat", hh: "%d ordu", d: "egun bat", dd: "%d egun", M: "hilabete bat", MM: "%d hilabete", y: "urte bat", yy: "%d urte" } };
    return s.default.locale(i, null, !0), i;
  });
})(QT);
var eE = vs, tE = /* @__PURE__ */ O({
  __proto__: null,
  default: eE
}, [vs]), gs = {}, nE = {
  get exports() {
    return gs;
  },
  set exports(e) {
    gs = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "fa", weekdays: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"), weekdaysShort: "یک‌_دو_سه‌_چه_پن_جم_شن".split("_"), weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_"), weekStart: 6, months: "فروردین_اردیبهشت_خرداد_تیر_مرداد_شهریور_مهر_آبان_آذر_دی_بهمن_اسفند".split("_"), monthsShort: "فرو_ارد_خرد_تیر_مرد_شهر_مهر_آبا_آذر_دی_بهم_اسف".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, relativeTime: { future: "در %s", past: "%s قبل", s: "چند ثانیه", m: "یک دقیقه", mm: "%d دقیقه", h: "یک ساعت", hh: "%d ساعت", d: "یک روز", dd: "%d روز", M: "یک ماه", MM: "%d ماه", y: "یک سال", yy: "%d سال" } };
    return s.default.locale(i, null, !0), i;
  });
})(nE);
var rE = gs, oE = /* @__PURE__ */ O({
  __proto__: null,
  default: rE
}, [gs]), ys = {}, sE = {
  get exports() {
    return ys;
  },
  set exports(e) {
    ys = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(a) {
      return a && typeof a == "object" && "default" in a ? a : { default: a };
    }
    var s = r(n);
    function i(a, l, u, c) {
      var d = { s: "muutama sekunti", m: "minuutti", mm: "%d minuuttia", h: "tunti", hh: "%d tuntia", d: "päivä", dd: "%d päivää", M: "kuukausi", MM: "%d kuukautta", y: "vuosi", yy: "%d vuotta", numbers: "nolla_yksi_kaksi_kolme_neljä_viisi_kuusi_seitsemän_kahdeksan_yhdeksän".split("_") }, f = { s: "muutaman sekunnin", m: "minuutin", mm: "%d minuutin", h: "tunnin", hh: "%d tunnin", d: "päivän", dd: "%d päivän", M: "kuukauden", MM: "%d kuukauden", y: "vuoden", yy: "%d vuoden", numbers: "nollan_yhden_kahden_kolmen_neljän_viiden_kuuden_seitsemän_kahdeksan_yhdeksän".split("_") }, m = c && !l ? f : d, _ = m[u];
      return a < 10 ? _.replace("%d", m.numbers[a]) : _.replace("%d", a);
    }
    var o = { name: "fi", weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"), weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"), weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"), months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"), monthsShort: "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"), ordinal: function(a) {
      return a + ".";
    }, weekStart: 1, yearStart: 4, relativeTime: { future: "%s päästä", past: "%s sitten", s: i, m: i, mm: i, h: i, hh: i, d: i, dd: i, M: i, MM: i, y: i, yy: i }, formats: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD.MM.YYYY", LL: "D. MMMM[ta] YYYY", LLL: "D. MMMM[ta] YYYY, [klo] HH.mm", LLLL: "dddd, D. MMMM[ta] YYYY, [klo] HH.mm", l: "D.M.YYYY", ll: "D. MMM YYYY", lll: "D. MMM YYYY, [klo] HH.mm", llll: "ddd, D. MMM YYYY, [klo] HH.mm" } };
    return s.default.locale(o, null, !0), o;
  });
})(sE);
var iE = ys, aE = /* @__PURE__ */ O({
  __proto__: null,
  default: iE
}, [ys]), Ms = {}, lE = {
  get exports() {
    return Ms;
  },
  set exports(e) {
    Ms = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "fo", weekdays: "sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split("_"), months: "januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split("_"), weekStart: 1, weekdaysShort: "sun_mán_týs_mik_hós_frí_ley".split("_"), monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"), weekdaysMin: "su_má_tý_mi_hó_fr_le".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D. MMMM, YYYY HH:mm" }, relativeTime: { future: "um %s", past: "%s síðani", s: "fá sekund", m: "ein minuttur", mm: "%d minuttir", h: "ein tími", hh: "%d tímar", d: "ein dagur", dd: "%d dagar", M: "ein mánaður", MM: "%d mánaðir", y: "eitt ár", yy: "%d ár" } };
    return s.default.locale(i, null, !0), i;
  });
})(lE);
var uE = Ms, cE = /* @__PURE__ */ O({
  __proto__: null,
  default: uE
}, [Ms]), bs = {}, dE = {
  get exports() {
    return bs;
  },
  set exports(e) {
    bs = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "fr-ch", weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"), months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"), weekStart: 1, weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"), monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"), weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, relativeTime: { future: "dans %s", past: "il y a %s", s: "quelques secondes", m: "une minute", mm: "%d minutes", h: "une heure", hh: "%d heures", d: "un jour", dd: "%d jours", M: "un mois", MM: "%d mois", y: "un an", yy: "%d ans" } };
    return s.default.locale(i, null, !0), i;
  });
})(dE);
var fE = bs, mE = /* @__PURE__ */ O({
  __proto__: null,
  default: fE
}, [bs]), xs = {}, pE = {
  get exports() {
    return xs;
  },
  set exports(e) {
    xs = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "fr", weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"), weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"), weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"), months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"), monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"), weekStart: 1, yearStart: 4, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, relativeTime: { future: "dans %s", past: "il y a %s", s: "quelques secondes", m: "une minute", mm: "%d minutes", h: "une heure", hh: "%d heures", d: "un jour", dd: "%d jours", M: "un mois", MM: "%d mois", y: "un an", yy: "%d ans" }, ordinal: function(o) {
      return "" + o + (o === 1 ? "er" : "");
    } };
    return s.default.locale(i, null, !0), i;
  });
})(pE);
var _E = xs, hE = /* @__PURE__ */ O({
  __proto__: null,
  default: _E
}, [xs]), ws = {}, vE = {
  get exports() {
    return ws;
  },
  set exports(e) {
    ws = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "fy", weekdays: "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"), months: "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"), monthsShort: "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_"), weekStart: 1, weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"), weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD-MM-YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, relativeTime: { future: "oer %s", past: "%s lyn", s: "in pear sekonden", m: "ien minút", mm: "%d minuten", h: "ien oere", hh: "%d oeren", d: "ien dei", dd: "%d dagen", M: "ien moanne", MM: "%d moannen", y: "ien jier", yy: "%d jierren" } };
    return s.default.locale(i, null, !0), i;
  });
})(vE);
var gE = ws, yE = /* @__PURE__ */ O({
  __proto__: null,
  default: gE
}, [ws]), Ys = {}, ME = {
  get exports() {
    return Ys;
  },
  set exports(e) {
    Ys = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "ga", weekdays: "Dé Domhnaigh_Dé Luain_Dé Máirt_Dé Céadaoin_Déardaoin_Dé hAoine_Dé Satharn".split("_"), months: "Eanáir_Feabhra_Márta_Aibreán_Bealtaine_Méitheamh_Iúil_Lúnasa_Meán Fómhair_Deaireadh Fómhair_Samhain_Nollaig".split("_"), weekStart: 1, weekdaysShort: "Dom_Lua_Mái_Céa_Déa_hAo_Sat".split("_"), monthsShort: "Eaná_Feab_Márt_Aibr_Beal_Méit_Iúil_Lúna_Meán_Deai_Samh_Noll".split("_"), weekdaysMin: "Do_Lu_Má_Ce_Dé_hA_Sa".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, relativeTime: { future: "i %s", past: "%s ó shin", s: "cúpla soicind", m: "nóiméad", mm: "%d nóiméad", h: "uair an chloig", hh: "%d uair an chloig", d: "lá", dd: "%d lá", M: "mí", MM: "%d mí", y: "bliain", yy: "%d bliain" } };
    return s.default.locale(i, null, !0), i;
  });
})(ME);
var bE = Ys, xE = /* @__PURE__ */ O({
  __proto__: null,
  default: bE
}, [Ys]), Ls = {}, wE = {
  get exports() {
    return Ls;
  },
  set exports(e) {
    Ls = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "gd", weekdays: "Didòmhnaich_Diluain_Dimàirt_Diciadain_Diardaoin_Dihaoine_Disathairne".split("_"), months: "Am Faoilleach_An Gearran_Am Màrt_An Giblean_An Cèitean_An t-Ògmhios_An t-Iuchar_An Lùnastal_An t-Sultain_An Dàmhair_An t-Samhain_An Dùbhlachd".split("_"), weekStart: 1, weekdaysShort: "Did_Dil_Dim_Dic_Dia_Dih_Dis".split("_"), monthsShort: "Faoi_Gear_Màrt_Gibl_Cèit_Ògmh_Iuch_Lùn_Sult_Dàmh_Samh_Dùbh".split("_"), weekdaysMin: "Dò_Lu_Mà_Ci_Ar_Ha_Sa".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, relativeTime: { future: "ann an %s", past: "bho chionn %s", s: "beagan diogan", m: "mionaid", mm: "%d mionaidean", h: "uair", hh: "%d uairean", d: "latha", dd: "%d latha", M: "mìos", MM: "%d mìosan", y: "bliadhna", yy: "%d bliadhna" } };
    return s.default.locale(i, null, !0), i;
  });
})(wE);
var YE = Ls, LE = /* @__PURE__ */ O({
  __proto__: null,
  default: YE
}, [Ls]), Ss = {}, SE = {
  get exports() {
    return Ss;
  },
  set exports(e) {
    Ss = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "gl", weekdays: "domingo_luns_martes_mércores_xoves_venres_sábado".split("_"), months: "xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro".split("_"), weekStart: 1, weekdaysShort: "dom._lun._mar._mér._xov._ven._sáb.".split("_"), monthsShort: "xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.".split("_"), weekdaysMin: "do_lu_ma_mé_xo_ve_sá".split("_"), ordinal: function(o) {
      return o + "º";
    }, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY H:mm", LLLL: "dddd, D [de] MMMM [de] YYYY H:mm" }, relativeTime: { future: "en %s", past: "fai %s", s: "uns segundos", m: "un minuto", mm: "%d minutos", h: "unha hora", hh: "%d horas", d: "un día", dd: "%d días", M: "un mes", MM: "%d meses", y: "un ano", yy: "%d anos" } };
    return s.default.locale(i, null, !0), i;
  });
})(SE);
var kE = Ss, DE = /* @__PURE__ */ O({
  __proto__: null,
  default: kE
}, [Ss]), ks = {}, TE = {
  get exports() {
    return ks;
  },
  set exports(e) {
    ks = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "gom-latn", weekdays: "Aitar_Somar_Mongllar_Budvar_Brestar_Sukrar_Son'var".split("_"), months: "Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr".split("_"), weekStart: 1, weekdaysShort: "Ait._Som._Mon._Bud._Bre._Suk._Son.".split("_"), monthsShort: "Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.".split("_"), weekdaysMin: "Ai_Sm_Mo_Bu_Br_Su_Sn".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "A h:mm [vazta]", LTS: "A h:mm:ss [vazta]", L: "DD-MM-YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY A h:mm [vazta]", LLLL: "dddd, MMMM[achea] Do, YYYY, A h:mm [vazta]", llll: "ddd, D MMM YYYY, A h:mm [vazta]" } };
    return s.default.locale(i, null, !0), i;
  });
})(TE);
var EE = ks, jE = /* @__PURE__ */ O({
  __proto__: null,
  default: EE
}, [ks]), Ds = {}, AE = {
  get exports() {
    return Ds;
  },
  set exports(e) {
    Ds = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "gu", weekdays: "રવિવાર_સોમવાર_મંગળવાર_બુધ્વાર_ગુરુવાર_શુક્રવાર_શનિવાર".split("_"), months: "જાન્યુઆરી_ફેબ્રુઆરી_માર્ચ_એપ્રિલ_મે_જૂન_જુલાઈ_ઑગસ્ટ_સપ્ટેમ્બર_ઑક્ટ્બર_નવેમ્બર_ડિસેમ્બર".split("_"), weekdaysShort: "રવિ_સોમ_મંગળ_બુધ્_ગુરુ_શુક્ર_શનિ".split("_"), monthsShort: "જાન્યુ._ફેબ્રુ._માર્ચ_એપ્રિ._મે_જૂન_જુલા._ઑગ._સપ્ટે._ઑક્ટ્._નવે._ડિસે.".split("_"), weekdaysMin: "ર_સો_મં_બુ_ગુ_શુ_શ".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "A h:mm વાગ્યે", LTS: "A h:mm:ss વાગ્યે", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm વાગ્યે", LLLL: "dddd, D MMMM YYYY, A h:mm વાગ્યે" }, relativeTime: { future: "%s મા", past: "%s પેહલા", s: "અમુક પળો", m: "એક મિનિટ", mm: "%d મિનિટ", h: "એક કલાક", hh: "%d કલાક", d: "એક દિવસ", dd: "%d દિવસ", M: "એક મહિનો", MM: "%d મહિનો", y: "એક વર્ષ", yy: "%d વર્ષ" } };
    return s.default.locale(i, null, !0), i;
  });
})(AE);
var PE = Ds, CE = /* @__PURE__ */ O({
  __proto__: null,
  default: PE
}, [Ds]), Ts = {}, $E = {
  get exports() {
    return Ts;
  },
  set exports(e) {
    Ts = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
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
})($E);
var HE = Ts, RE = /* @__PURE__ */ O({
  __proto__: null,
  default: HE
}, [Ts]), Es = {}, OE = {
  get exports() {
    return Es;
  },
  set exports(e) {
    Es = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "hi", weekdays: "रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"), months: "जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"), weekdaysShort: "रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"), monthsShort: "जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"), weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "A h:mm बजे", LTS: "A h:mm:ss बजे", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm बजे", LLLL: "dddd, D MMMM YYYY, A h:mm बजे" }, relativeTime: { future: "%s में", past: "%s पहले", s: "कुछ ही क्षण", m: "एक मिनट", mm: "%d मिनट", h: "एक घंटा", hh: "%d घंटे", d: "एक दिन", dd: "%d दिन", M: "एक महीने", MM: "%d महीने", y: "एक वर्ष", yy: "%d वर्ष" } };
    return s.default.locale(i, null, !0), i;
  });
})(OE);
var NE = Es, FE = /* @__PURE__ */ O({
  __proto__: null,
  default: NE
}, [Es]), js = {}, IE = {
  get exports() {
    return js;
  },
  set exports(e) {
    js = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
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
})(IE);
var VE = js, BE = /* @__PURE__ */ O({
  __proto__: null,
  default: VE
}, [js]), As = {}, zE = {
  get exports() {
    return As;
  },
  set exports(e) {
    As = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "ht", weekdays: "dimanch_lendi_madi_mèkredi_jedi_vandredi_samdi".split("_"), months: "janvye_fevriye_mas_avril_me_jen_jiyè_out_septanm_oktòb_novanm_desanm".split("_"), weekdaysShort: "dim._len._mad._mèk._jed._van._sam.".split("_"), monthsShort: "jan._fev._mas_avr._me_jen_jiyè._out_sept._okt._nov._des.".split("_"), weekdaysMin: "di_le_ma_mè_je_va_sa".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, relativeTime: { future: "nan %s", past: "sa gen %s", s: "kèk segond", m: "yon minit", mm: "%d minit", h: "inèdtan", hh: "%d zè", d: "yon jou", dd: "%d jou", M: "yon mwa", MM: "%d mwa", y: "yon ane", yy: "%d ane" } };
    return s.default.locale(i, null, !0), i;
  });
})(zE);
var WE = As, UE = /* @__PURE__ */ O({
  __proto__: null,
  default: WE
}, [As]), Ps = {}, KE = {
  get exports() {
    return Ps;
  },
  set exports(e) {
    Ps = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
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
})(KE);
var GE = Ps, JE = /* @__PURE__ */ O({
  __proto__: null,
  default: GE
}, [Ps]), Cs = {}, XE = {
  get exports() {
    return Cs;
  },
  set exports(e) {
    Cs = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "hy-am", weekdays: "կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split("_"), months: "հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split("_"), weekStart: 1, weekdaysShort: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"), monthsShort: "հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_"), weekdaysMin: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY թ.", LLL: "D MMMM YYYY թ., HH:mm", LLLL: "dddd, D MMMM YYYY թ., HH:mm" }, relativeTime: { future: "%s հետո", past: "%s առաջ", s: "մի քանի վայրկյան", m: "րոպե", mm: "%d րոպե", h: "ժամ", hh: "%d ժամ", d: "օր", dd: "%d օր", M: "ամիս", MM: "%d ամիս", y: "տարի", yy: "%d տարի" } };
    return s.default.locale(i, null, !0), i;
  });
})(XE);
var qE = Cs, ZE = /* @__PURE__ */ O({
  __proto__: null,
  default: qE
}, [Cs]), $s = {}, QE = {
  get exports() {
    return $s;
  },
  set exports(e) {
    $s = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "id", weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"), months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"), weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"), monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des".split("_"), weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"), weekStart: 1, formats: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [pukul] HH.mm", LLLL: "dddd, D MMMM YYYY [pukul] HH.mm" }, relativeTime: { future: "dalam %s", past: "%s yang lalu", s: "beberapa detik", m: "semenit", mm: "%d menit", h: "sejam", hh: "%d jam", d: "sehari", dd: "%d hari", M: "sebulan", MM: "%d bulan", y: "setahun", yy: "%d tahun" }, ordinal: function(o) {
      return o + ".";
    } };
    return s.default.locale(i, null, !0), i;
  });
})(QE);
var ej = $s, tj = /* @__PURE__ */ O({
  __proto__: null,
  default: ej
}, [$s]), Hs = {}, nj = {
  get exports() {
    return Hs;
  },
  set exports(e) {
    Hs = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(l) {
      return l && typeof l == "object" && "default" in l ? l : { default: l };
    }
    var s = r(n), i = { s: ["nokkrar sekúndur", "nokkrar sekúndur", "nokkrum sekúndum"], m: ["mínúta", "mínútu", "mínútu"], mm: ["mínútur", "mínútur", "mínútum"], h: ["klukkustund", "klukkustund", "klukkustund"], hh: ["klukkustundir", "klukkustundir", "klukkustundum"], d: ["dagur", "dag", "degi"], dd: ["dagar", "daga", "dögum"], M: ["mánuður", "mánuð", "mánuði"], MM: ["mánuðir", "mánuði", "mánuðum"], y: ["ár", "ár", "ári"], yy: ["ár", "ár", "árum"] };
    function o(l, u, c, d) {
      var f = function(m, _, p, v) {
        var h = v ? 0 : p ? 1 : 2, y = m.length === 2 && _ % 10 == 1 ? m[0] : m, b = i[y][h];
        return m.length === 1 ? b : "%d " + b;
      }(c, l, d, u);
      return f.replace("%d", l);
    }
    var a = { name: "is", weekdays: "sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"), months: "janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"), weekStart: 1, weekdaysShort: "sun_mán_þri_mið_fim_fös_lau".split("_"), monthsShort: "jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"), weekdaysMin: "Su_Má_Þr_Mi_Fi_Fö_La".split("_"), ordinal: function(l) {
      return l;
    }, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY [kl.] H:mm", LLLL: "dddd, D. MMMM YYYY [kl.] H:mm" }, relativeTime: { future: "eftir %s", past: "fyrir %s síðan", s: o, m: o, mm: o, h: o, hh: o, d: o, dd: o, M: o, MM: o, y: o, yy: o } };
    return s.default.locale(a, null, !0), a;
  });
})(nj);
var rj = Hs, oj = /* @__PURE__ */ O({
  __proto__: null,
  default: rj
}, [Hs]), Rs = {}, sj = {
  get exports() {
    return Rs;
  },
  set exports(e) {
    Rs = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "it-ch", weekdays: "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"), months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"), weekStart: 1, weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"), monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"), weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, relativeTime: { future: "tra %s", past: "%s fa", s: "alcuni secondi", m: "un minuto", mm: "%d minuti", h: "un'ora", hh: "%d ore", d: "un giorno", dd: "%d giorni", M: "un mese", MM: "%d mesi", y: "un anno", yy: "%d anni" } };
    return s.default.locale(i, null, !0), i;
  });
})(sj);
var ij = Rs, aj = /* @__PURE__ */ O({
  __proto__: null,
  default: ij
}, [Rs]), Os = {}, lj = {
  get exports() {
    return Os;
  },
  set exports(e) {
    Os = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "it", weekdays: "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"), weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"), weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"), months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"), weekStart: 1, monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"), formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, relativeTime: { future: "tra %s", past: "%s fa", s: "qualche secondo", m: "un minuto", mm: "%d minuti", h: "un' ora", hh: "%d ore", d: "un giorno", dd: "%d giorni", M: "un mese", MM: "%d mesi", y: "un anno", yy: "%d anni" }, ordinal: function(o) {
      return o + "º";
    } };
    return s.default.locale(i, null, !0), i;
  });
})(lj);
var uj = Os, cj = /* @__PURE__ */ O({
  __proto__: null,
  default: uj
}, [Os]), Ns = {}, dj = {
  get exports() {
    return Ns;
  },
  set exports(e) {
    Ns = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
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
})(dj);
var fj = Ns, mj = /* @__PURE__ */ O({
  __proto__: null,
  default: fj
}, [Ns]), Fs = {}, pj = {
  get exports() {
    return Fs;
  },
  set exports(e) {
    Fs = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "jv", weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"), months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"), weekStart: 1, weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"), monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"), weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [pukul] HH.mm", LLLL: "dddd, D MMMM YYYY [pukul] HH.mm" }, relativeTime: { future: "wonten ing %s", past: "%s ingkang kepengker", s: "sawetawis detik", m: "setunggal menit", mm: "%d menit", h: "setunggal jam", hh: "%d jam", d: "sedinten", dd: "%d dinten", M: "sewulan", MM: "%d wulan", y: "setaun", yy: "%d taun" } };
    return s.default.locale(i, null, !0), i;
  });
})(pj);
var _j = Fs, hj = /* @__PURE__ */ O({
  __proto__: null,
  default: _j
}, [Fs]), Is = {}, vj = {
  get exports() {
    return Is;
  },
  set exports(e) {
    Is = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "ka", weekdays: "კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"), weekdaysShort: "კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"), weekdaysMin: "კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"), months: "იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"), monthsShort: "იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"), weekStart: 1, formats: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, relativeTime: { future: "%s შემდეგ", past: "%s წინ", s: "წამი", m: "წუთი", mm: "%d წუთი", h: "საათი", hh: "%d საათის", d: "დღეს", dd: "%d დღის განმავლობაში", M: "თვის", MM: "%d თვის", y: "წელი", yy: "%d წლის" }, ordinal: function(o) {
      return o;
    } };
    return s.default.locale(i, null, !0), i;
  });
})(vj);
var gj = Is, yj = /* @__PURE__ */ O({
  __proto__: null,
  default: gj
}, [Is]), Vs = {}, Mj = {
  get exports() {
    return Vs;
  },
  set exports(e) {
    Vs = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "kk", weekdays: "жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі".split("_"), weekdaysShort: "жек_дүй_сей_сәр_бей_жұм_сен".split("_"), weekdaysMin: "жк_дй_сй_ср_бй_жм_сн".split("_"), months: "қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан".split("_"), monthsShort: "қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел".split("_"), weekStart: 1, relativeTime: { future: "%s ішінде", past: "%s бұрын", s: "бірнеше секунд", m: "бір минут", mm: "%d минут", h: "бір сағат", hh: "%d сағат", d: "бір күн", dd: "%d күн", M: "бір ай", MM: "%d ай", y: "бір жыл", yy: "%d жыл" }, ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" } };
    return s.default.locale(i, null, !0), i;
  });
})(Mj);
var bj = Vs, xj = /* @__PURE__ */ O({
  __proto__: null,
  default: bj
}, [Vs]), Bs = {}, wj = {
  get exports() {
    return Bs;
  },
  set exports(e) {
    Bs = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
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
})(wj);
var Yj = Bs, Lj = /* @__PURE__ */ O({
  __proto__: null,
  default: Yj
}, [Bs]), Cc = {}, Sj = {};
(function(e, t) {
  (function(n, r) {
    r(t, D);
  })(H, function(n, r) {
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
})(Sj, Cc);
var kj = /* @__PURE__ */ v1(Cc), Dj = /* @__PURE__ */ O({
  __proto__: null,
  default: kj
}, [Cc]), zs = {}, Tj = {
  get exports() {
    return zs;
  },
  set exports(e) {
    zs = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "ky", weekdays: "Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби".split("_"), months: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"), weekStart: 1, weekdaysShort: "Жек_Дүй_Шей_Шар_Бей_Жум_Ише".split("_"), monthsShort: "янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"), weekdaysMin: "Жк_Дй_Шй_Шр_Бй_Жм_Иш".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, relativeTime: { future: "%s ичинде", past: "%s мурун", s: "бирнече секунд", m: "бир мүнөт", mm: "%d мүнөт", h: "бир саат", hh: "%d саат", d: "бир күн", dd: "%d күн", M: "бир ай", MM: "%d ай", y: "бир жыл", yy: "%d жыл" } };
    return s.default.locale(i, null, !0), i;
  });
})(Tj);
var Ej = zs, jj = /* @__PURE__ */ O({
  __proto__: null,
  default: Ej
}, [zs]), Ws = {}, Aj = {
  get exports() {
    return Ws;
  },
  set exports(e) {
    Ws = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "lb", weekdays: "Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"), months: "Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), weekStart: 1, weekdaysShort: "So._Mé._Dë._Më._Do._Fr._Sa.".split("_"), monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"), weekdaysMin: "So_Mé_Dë_Më_Do_Fr_Sa".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "H:mm [Auer]", LTS: "H:mm:ss [Auer]", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm [Auer]", LLLL: "dddd, D. MMMM YYYY H:mm [Auer]" } };
    return s.default.locale(i, null, !0), i;
  });
})(Aj);
var Pj = Ws, Cj = /* @__PURE__ */ O({
  __proto__: null,
  default: Pj
}, [Ws]), Us = {}, $j = {
  get exports() {
    return Us;
  },
  set exports(e) {
    Us = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "lo", weekdays: "ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"), months: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"), weekdaysShort: "ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"), monthsShort: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"), weekdaysMin: "ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "ວັນdddd D MMMM YYYY HH:mm" }, relativeTime: { future: "ອີກ %s", past: "%sຜ່ານມາ", s: "ບໍ່ເທົ່າໃດວິນາທີ", m: "1 ນາທີ", mm: "%d ນາທີ", h: "1 ຊົ່ວໂມງ", hh: "%d ຊົ່ວໂມງ", d: "1 ມື້", dd: "%d ມື້", M: "1 ເດືອນ", MM: "%d ເດືອນ", y: "1 ປີ", yy: "%d ປີ" } };
    return s.default.locale(i, null, !0), i;
  });
})($j);
var Hj = Us, Rj = /* @__PURE__ */ O({
  __proto__: null,
  default: Hj
}, [Us]), Ks = {}, Oj = {
  get exports() {
    return Ks;
  },
  set exports(e) {
    Ks = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
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
})(Oj);
var Nj = Ks, Fj = /* @__PURE__ */ O({
  __proto__: null,
  default: Nj
}, [Ks]), Gs = {}, Ij = {
  get exports() {
    return Gs;
  },
  set exports(e) {
    Gs = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "lv", weekdays: "svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"), months: "janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"), weekStart: 1, weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"), monthsShort: "jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"), weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY.", LL: "YYYY. [gada] D. MMMM", LLL: "YYYY. [gada] D. MMMM, HH:mm", LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm" }, relativeTime: { future: "pēc %s", past: "pirms %s", s: "dažām sekundēm", m: "minūtes", mm: "%d minūtēm", h: "stundas", hh: "%d stundām", d: "dienas", dd: "%d dienām", M: "mēneša", MM: "%d mēnešiem", y: "gada", yy: "%d gadiem" } };
    return s.default.locale(i, null, !0), i;
  });
})(Ij);
var Vj = Gs, Bj = /* @__PURE__ */ O({
  __proto__: null,
  default: Vj
}, [Gs]), Js = {}, zj = {
  get exports() {
    return Js;
  },
  set exports(e) {
    Js = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "me", weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"), months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"), weekStart: 1, weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"), monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"), weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" } };
    return s.default.locale(i, null, !0), i;
  });
})(zj);
var Wj = Js, Uj = /* @__PURE__ */ O({
  __proto__: null,
  default: Wj
}, [Js]), Xs = {}, Kj = {
  get exports() {
    return Xs;
  },
  set exports(e) {
    Xs = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "mi", weekdays: "Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei".split("_"), months: "Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea".split("_"), weekStart: 1, weekdaysShort: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"), monthsShort: "Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split("_"), weekdaysMin: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [i] HH:mm", LLLL: "dddd, D MMMM YYYY [i] HH:mm" }, relativeTime: { future: "i roto i %s", past: "%s i mua", s: "te hēkona ruarua", m: "he meneti", mm: "%d meneti", h: "te haora", hh: "%d haora", d: "he ra", dd: "%d ra", M: "he marama", MM: "%d marama", y: "he tau", yy: "%d tau" } };
    return s.default.locale(i, null, !0), i;
  });
})(Kj);
var Gj = Xs, Jj = /* @__PURE__ */ O({
  __proto__: null,
  default: Gj
}, [Xs]), qs = {}, Xj = {
  get exports() {
    return qs;
  },
  set exports(e) {
    qs = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "mk", weekdays: "недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"), months: "јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"), weekStart: 1, weekdaysShort: "нед_пон_вто_сре_чет_пет_саб".split("_"), monthsShort: "јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"), weekdaysMin: "нe_пo_вт_ср_че_пе_сa".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "D.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY H:mm", LLLL: "dddd, D MMMM YYYY H:mm" }, relativeTime: { future: "после %s", past: "пред %s", s: "неколку секунди", m: "минута", mm: "%d минути", h: "час", hh: "%d часа", d: "ден", dd: "%d дена", M: "месец", MM: "%d месеци", y: "година", yy: "%d години" } };
    return s.default.locale(i, null, !0), i;
  });
})(Xj);
var qj = qs, Zj = /* @__PURE__ */ O({
  __proto__: null,
  default: qj
}, [qs]), Zs = {}, Qj = {
  get exports() {
    return Zs;
  },
  set exports(e) {
    Zs = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "ml", weekdays: "ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split("_"), months: "ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split("_"), weekdaysShort: "ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"), monthsShort: "ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split("_"), weekdaysMin: "ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "A h:mm -നു", LTS: "A h:mm:ss -നു", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm -നു", LLLL: "dddd, D MMMM YYYY, A h:mm -നു" }, relativeTime: { future: "%s കഴിഞ്ഞ്", past: "%s മുൻപ്", s: "അൽപ നിമിഷങ്ങൾ", m: "ഒരു മിനിറ്റ്", mm: "%d മിനിറ്റ്", h: "ഒരു മണിക്കൂർ", hh: "%d മണിക്കൂർ", d: "ഒരു ദിവസം", dd: "%d ദിവസം", M: "ഒരു മാസം", MM: "%d മാസം", y: "ഒരു വർഷം", yy: "%d വർഷം" } };
    return s.default.locale(i, null, !0), i;
  });
})(Qj);
var eA = Zs, tA = /* @__PURE__ */ O({
  __proto__: null,
  default: eA
}, [Zs]), Qs = {}, nA = {
  get exports() {
    return Qs;
  },
  set exports(e) {
    Qs = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "mn", weekdays: "Ням_Даваа_Мягмар_Лхагва_Пүрэв_Баасан_Бямба".split("_"), months: "Нэгдүгээр сар_Хоёрдугаар сар_Гуравдугаар сар_Дөрөвдүгээр сар_Тавдугаар сар_Зургадугаар сар_Долдугаар сар_Наймдугаар сар_Есдүгээр сар_Аравдугаар сар_Арван нэгдүгээр сар_Арван хоёрдугаар сар".split("_"), weekdaysShort: "Ням_Дав_Мяг_Лха_Пүр_Баа_Бям".split("_"), monthsShort: "1 сар_2 сар_3 сар_4 сар_5 сар_6 сар_7 сар_8 сар_9 сар_10 сар_11 сар_12 сар".split("_"), weekdaysMin: "Ня_Да_Мя_Лх_Пү_Ба_Бя".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY оны MMMMын D", LLL: "YYYY оны MMMMын D HH:mm", LLLL: "dddd, YYYY оны MMMMын D HH:mm" }, relativeTime: { future: "%s", past: "%s", s: "саяхан", m: "м", mm: "%dм", h: "1ц", hh: "%dц", d: "1ө", dd: "%dө", M: "1с", MM: "%dс", y: "1ж", yy: "%dж" } };
    return s.default.locale(i, null, !0), i;
  });
})(nA);
var rA = Qs, oA = /* @__PURE__ */ O({
  __proto__: null,
  default: rA
}, [Qs]), ei = {}, sA = {
  get exports() {
    return ei;
  },
  set exports(e) {
    ei = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "ms-my", weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"), months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"), weekStart: 1, weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"), monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"), weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [pukul] HH.mm", LLLL: "dddd, D MMMM YYYY [pukul] HH.mm" }, relativeTime: { future: "dalam %s", past: "%s yang lepas", s: "beberapa saat", m: "seminit", mm: "%d minit", h: "sejam", hh: "%d jam", d: "sehari", dd: "%d hari", M: "sebulan", MM: "%d bulan", y: "setahun", yy: "%d tahun" } };
    return s.default.locale(i, null, !0), i;
  });
})(sA);
var iA = ei, aA = /* @__PURE__ */ O({
  __proto__: null,
  default: iA
}, [ei]), ti = {}, lA = {
  get exports() {
    return ti;
  },
  set exports(e) {
    ti = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "ms", weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"), weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"), weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"), months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"), monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"), weekStart: 1, formats: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH.mm", LLLL: "dddd, D MMMM YYYY HH.mm" }, relativeTime: { future: "dalam %s", past: "%s yang lepas", s: "beberapa saat", m: "seminit", mm: "%d minit", h: "sejam", hh: "%d jam", d: "sehari", dd: "%d hari", M: "sebulan", MM: "%d bulan", y: "setahun", yy: "%d tahun" }, ordinal: function(o) {
      return o + ".";
    } };
    return s.default.locale(i, null, !0), i;
  });
})(lA);
var uA = ti, cA = /* @__PURE__ */ O({
  __proto__: null,
  default: uA
}, [ti]), ni = {}, dA = {
  get exports() {
    return ni;
  },
  set exports(e) {
    ni = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "mt", weekdays: "Il-Ħadd_It-Tnejn_It-Tlieta_L-Erbgħa_Il-Ħamis_Il-Ġimgħa_Is-Sibt".split("_"), months: "Jannar_Frar_Marzu_April_Mejju_Ġunju_Lulju_Awwissu_Settembru_Ottubru_Novembru_Diċembru".split("_"), weekStart: 1, weekdaysShort: "Ħad_Tne_Tli_Erb_Ħam_Ġim_Sib".split("_"), monthsShort: "Jan_Fra_Mar_Apr_Mej_Ġun_Lul_Aww_Set_Ott_Nov_Diċ".split("_"), weekdaysMin: "Ħa_Tn_Tl_Er_Ħa_Ġi_Si".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, relativeTime: { future: "f’ %s", past: "%s ilu", s: "ftit sekondi", m: "minuta", mm: "%d minuti", h: "siegħa", hh: "%d siegħat", d: "ġurnata", dd: "%d ġranet", M: "xahar", MM: "%d xhur", y: "sena", yy: "%d sni" } };
    return s.default.locale(i, null, !0), i;
  });
})(dA);
var fA = ni, mA = /* @__PURE__ */ O({
  __proto__: null,
  default: fA
}, [ni]), ri = {}, pA = {
  get exports() {
    return ri;
  },
  set exports(e) {
    ri = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "my", weekdays: "တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split("_"), months: "ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split("_"), weekStart: 1, weekdaysShort: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"), monthsShort: "ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split("_"), weekdaysMin: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, relativeTime: { future: "လာမည့် %s မှာ", past: "လွန်ခဲ့သော %s က", s: "စက္ကန်.အနည်းငယ်", m: "တစ်မိနစ်", mm: "%d မိနစ်", h: "တစ်နာရီ", hh: "%d နာရီ", d: "တစ်ရက်", dd: "%d ရက်", M: "တစ်လ", MM: "%d လ", y: "တစ်နှစ်", yy: "%d နှစ်" } };
    return s.default.locale(i, null, !0), i;
  });
})(pA);
var _A = ri, hA = /* @__PURE__ */ O({
  __proto__: null,
  default: _A
}, [ri]), oi = {}, vA = {
  get exports() {
    return oi;
  },
  set exports(e) {
    oi = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "nb", weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"), weekdaysShort: "sø._ma._ti._on._to._fr._lø.".split("_"), weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"), months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"), monthsShort: "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"), ordinal: function(o) {
      return o + ".";
    }, weekStart: 1, yearStart: 4, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY [kl.] HH:mm", LLLL: "dddd D. MMMM YYYY [kl.] HH:mm" }, relativeTime: { future: "om %s", past: "%s siden", s: "noen sekunder", m: "ett minutt", mm: "%d minutter", h: "en time", hh: "%d timer", d: "en dag", dd: "%d dager", M: "en måned", MM: "%d måneder", y: "ett år", yy: "%d år" } };
    return s.default.locale(i, null, !0), i;
  });
})(vA);
var gA = oi, yA = /* @__PURE__ */ O({
  __proto__: null,
  default: gA
}, [oi]), si = {}, MA = {
  get exports() {
    return si;
  },
  set exports(e) {
    si = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
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
})(MA);
var bA = si, xA = /* @__PURE__ */ O({
  __proto__: null,
  default: bA
}, [si]), ii = {}, wA = {
  get exports() {
    return ii;
  },
  set exports(e) {
    ii = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "nl-be", weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"), months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"), monthsShort: "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"), weekStart: 1, weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"), weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, relativeTime: { future: "over %s", past: "%s geleden", s: "een paar seconden", m: "één minuut", mm: "%d minuten", h: "één uur", hh: "%d uur", d: "één dag", dd: "%d dagen", M: "één maand", MM: "%d maanden", y: "één jaar", yy: "%d jaar" } };
    return s.default.locale(i, null, !0), i;
  });
})(wA);
var YA = ii, LA = /* @__PURE__ */ O({
  __proto__: null,
  default: YA
}, [ii]), ai = {}, SA = {
  get exports() {
    return ai;
  },
  set exports(e) {
    ai = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "nl", weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"), weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"), weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"), months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"), monthsShort: "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"), ordinal: function(o) {
      return "[" + o + (o === 1 || o === 8 || o >= 20 ? "ste" : "de") + "]";
    }, weekStart: 1, yearStart: 4, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD-MM-YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, relativeTime: { future: "over %s", past: "%s geleden", s: "een paar seconden", m: "een minuut", mm: "%d minuten", h: "een uur", hh: "%d uur", d: "een dag", dd: "%d dagen", M: "een maand", MM: "%d maanden", y: "een jaar", yy: "%d jaar" } };
    return s.default.locale(i, null, !0), i;
  });
})(SA);
var kA = ai, DA = /* @__PURE__ */ O({
  __proto__: null,
  default: kA
}, [ai]), li = {}, TA = {
  get exports() {
    return li;
  },
  set exports(e) {
    li = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "nn", weekdays: "sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"), weekdaysShort: "sun_mån_tys_ons_tor_fre_lau".split("_"), weekdaysMin: "su_må_ty_on_to_fr_la".split("_"), months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"), monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"), ordinal: function(o) {
      return o + ".";
    }, weekStart: 1, relativeTime: { future: "om %s", past: "for %s sidan", s: "nokre sekund", m: "eitt minutt", mm: "%d minutt", h: "ein time", hh: "%d timar", d: "ein dag", dd: "%d dagar", M: "ein månad", MM: "%d månadar", y: "eitt år", yy: "%d år" }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY [kl.] H:mm", LLLL: "dddd D. MMMM YYYY [kl.] HH:mm" } };
    return s.default.locale(i, null, !0), i;
  });
})(TA);
var EA = li, jA = /* @__PURE__ */ O({
  __proto__: null,
  default: EA
}, [li]), ui = {}, AA = {
  get exports() {
    return ui;
  },
  set exports(e) {
    ui = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "oc-lnc", weekdays: "dimenge_diluns_dimars_dimècres_dijòus_divendres_dissabte".split("_"), weekdaysShort: "Dg_Dl_Dm_Dc_Dj_Dv_Ds".split("_"), weekdaysMin: "dg_dl_dm_dc_dj_dv_ds".split("_"), months: "genièr_febrièr_març_abrial_mai_junh_julhet_agost_setembre_octòbre_novembre_decembre".split("_"), monthsShort: "gen_feb_març_abr_mai_junh_julh_ago_set_oct_nov_dec".split("_"), weekStart: 1, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM [de] YYYY", LLL: "D MMMM [de] YYYY [a] H:mm", LLLL: "dddd D MMMM [de] YYYY [a] H:mm" }, relativeTime: { future: "d'aquí %s", past: "fa %s", s: "unas segondas", m: "una minuta", mm: "%d minutas", h: "una ora", hh: "%d oras", d: "un jorn", dd: "%d jorns", M: "un mes", MM: "%d meses", y: "un an", yy: "%d ans" }, ordinal: function(o) {
      return o + "º";
    } };
    return s.default.locale(i, null, !0), i;
  });
})(AA);
var PA = ui, CA = /* @__PURE__ */ O({
  __proto__: null,
  default: PA
}, [ui]), ci = {}, $A = {
  get exports() {
    return ci;
  },
  set exports(e) {
    ci = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "pa-in", weekdays: "ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ".split("_"), months: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"), weekdaysShort: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"), monthsShort: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"), weekdaysMin: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "A h:mm ਵਜੇ", LTS: "A h:mm:ss ਵਜੇ", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm ਵਜੇ", LLLL: "dddd, D MMMM YYYY, A h:mm ਵਜੇ" }, relativeTime: { future: "%s ਵਿੱਚ", past: "%s ਪਿਛਲੇ", s: "ਕੁਝ ਸਕਿੰਟ", m: "ਇਕ ਮਿੰਟ", mm: "%d ਮਿੰਟ", h: "ਇੱਕ ਘੰਟਾ", hh: "%d ਘੰਟੇ", d: "ਇੱਕ ਦਿਨ", dd: "%d ਦਿਨ", M: "ਇੱਕ ਮਹੀਨਾ", MM: "%d ਮਹੀਨੇ", y: "ਇੱਕ ਸਾਲ", yy: "%d ਸਾਲ" } };
    return s.default.locale(i, null, !0), i;
  });
})($A);
var HA = ci, RA = /* @__PURE__ */ O({
  __proto__: null,
  default: HA
}, [ci]), di = {}, OA = {
  get exports() {
    return di;
  },
  set exports(e) {
    di = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(f) {
      return f && typeof f == "object" && "default" in f ? f : { default: f };
    }
    var s = r(n);
    function i(f) {
      return f % 10 < 5 && f % 10 > 1 && ~~(f / 10) % 10 != 1;
    }
    function o(f, m, _) {
      var p = f + " ";
      switch (_) {
        case "m":
          return m ? "minuta" : "minutę";
        case "mm":
          return p + (i(f) ? "minuty" : "minut");
        case "h":
          return m ? "godzina" : "godzinę";
        case "hh":
          return p + (i(f) ? "godziny" : "godzin");
        case "MM":
          return p + (i(f) ? "miesiące" : "miesięcy");
        case "yy":
          return p + (i(f) ? "lata" : "lat");
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
})(OA);
var NA = di, FA = /* @__PURE__ */ O({
  __proto__: null,
  default: NA
}, [di]), fi = {}, IA = {
  get exports() {
    return fi;
  },
  set exports(e) {
    fi = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "pt-br", weekdays: "domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split("_"), weekdaysShort: "dom_seg_ter_qua_qui_sex_sáb".split("_"), weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"), months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"), monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"), ordinal: function(o) {
      return o + "º";
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY [às] HH:mm", LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm" }, relativeTime: { future: "em %s", past: "há %s", s: "poucos segundos", m: "um minuto", mm: "%d minutos", h: "uma hora", hh: "%d horas", d: "um dia", dd: "%d dias", M: "um mês", MM: "%d meses", y: "um ano", yy: "%d anos" } };
    return s.default.locale(i, null, !0), i;
  });
})(IA);
var VA = fi, BA = /* @__PURE__ */ O({
  __proto__: null,
  default: VA
}, [fi]), mi = {}, zA = {
  get exports() {
    return mi;
  },
  set exports(e) {
    mi = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "pt", weekdays: "domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split("_"), weekdaysShort: "dom_seg_ter_qua_qui_sex_sab".split("_"), weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sa".split("_"), months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"), monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"), ordinal: function(o) {
      return o + "º";
    }, weekStart: 1, yearStart: 4, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY [às] HH:mm", LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm" }, relativeTime: { future: "em %s", past: "há %s", s: "alguns segundos", m: "um minuto", mm: "%d minutos", h: "uma hora", hh: "%d horas", d: "um dia", dd: "%d dias", M: "um mês", MM: "%d meses", y: "um ano", yy: "%d anos" } };
    return s.default.locale(i, null, !0), i;
  });
})(zA);
var WA = mi, UA = /* @__PURE__ */ O({
  __proto__: null,
  default: WA
}, [mi]), pi = {}, KA = {
  get exports() {
    return pi;
  },
  set exports(e) {
    pi = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "rn", weekdays: "Ku wa Mungu_Ku wa Mbere_Ku wa Kabiri_Ku wa Gatatu_Ku wa Kane_Ku wa Gatanu_Ku wa Gatandatu".split("_"), weekdaysShort: "Kngu_Kmbr_Kbri_Ktat_Kkan_Ktan_Kdat".split("_"), weekdaysMin: "K7_K1_K2_K3_K4_K5_K6".split("_"), months: "Nzero_Ruhuhuma_Ntwarante_Ndamukiza_Rusama_Ruhenshi_Mukakaro_Myandagaro_Nyakanga_Gitugutu_Munyonyo_Kigarama".split("_"), monthsShort: "Nzer_Ruhuh_Ntwar_Ndam_Rus_Ruhen_Muk_Myand_Nyak_Git_Muny_Kig".split("_"), weekStart: 1, ordinal: function(o) {
      return o;
    }, relativeTime: { future: "mu %s", past: "%s", s: "amasegonda", m: "Umunota", mm: "%d iminota", h: "isaha", hh: "%d amasaha", d: "Umunsi", dd: "%d iminsi", M: "ukwezi", MM: "%d amezi", y: "umwaka", yy: "%d imyaka" }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" } };
    return s.default.locale(i, null, !0), i;
  });
})(KA);
var GA = pi, JA = /* @__PURE__ */ O({
  __proto__: null,
  default: GA
}, [pi]), _i = {}, XA = {
  get exports() {
    return _i;
  },
  set exports(e) {
    _i = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "ro", weekdays: "Duminică_Luni_Marți_Miercuri_Joi_Vineri_Sâmbătă".split("_"), weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"), weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"), months: "Ianuarie_Februarie_Martie_Aprilie_Mai_Iunie_Iulie_August_Septembrie_Octombrie_Noiembrie_Decembrie".split("_"), monthsShort: "Ian._Febr._Mart._Apr._Mai_Iun._Iul._Aug._Sept._Oct._Nov._Dec.".split("_"), weekStart: 1, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY H:mm", LLLL: "dddd, D MMMM YYYY H:mm" }, relativeTime: { future: "peste %s", past: "acum %s", s: "câteva secunde", m: "un minut", mm: "%d minute", h: "o oră", hh: "%d ore", d: "o zi", dd: "%d zile", M: "o lună", MM: "%d luni", y: "un an", yy: "%d ani" }, ordinal: function(o) {
      return o;
    } };
    return s.default.locale(i, null, !0), i;
  });
})(XA);
var qA = _i, ZA = /* @__PURE__ */ O({
  __proto__: null,
  default: qA
}, [_i]), hi = {}, QA = {
  get exports() {
    return hi;
  },
  set exports(e) {
    hi = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(_) {
      return _ && typeof _ == "object" && "default" in _ ? _ : { default: _ };
    }
    var s = r(n), i = "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"), o = "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"), a = "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"), l = "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_"), u = /D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;
    function c(_, p, v) {
      var h, y;
      return v === "m" ? p ? "минута" : "минуту" : _ + " " + (h = +_, y = { mm: p ? "минута_минуты_минут" : "минуту_минуты_минут", hh: "час_часа_часов", dd: "день_дня_дней", MM: "месяц_месяца_месяцев", yy: "год_года_лет" }[v].split("_"), h % 10 == 1 && h % 100 != 11 ? y[0] : h % 10 >= 2 && h % 10 <= 4 && (h % 100 < 10 || h % 100 >= 20) ? y[1] : y[2]);
    }
    var d = function(_, p) {
      return u.test(p) ? i[_.month()] : o[_.month()];
    };
    d.s = o, d.f = i;
    var f = function(_, p) {
      return u.test(p) ? a[_.month()] : l[_.month()];
    };
    f.s = l, f.f = a;
    var m = { name: "ru", weekdays: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"), weekdaysShort: "вск_пнд_втр_срд_чтв_птн_сбт".split("_"), weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"), months: d, monthsShort: f, weekStart: 1, yearStart: 4, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY г.", LLL: "D MMMM YYYY г., H:mm", LLLL: "dddd, D MMMM YYYY г., H:mm" }, relativeTime: { future: "через %s", past: "%s назад", s: "несколько секунд", m: c, mm: c, h: "час", hh: c, d: "день", dd: c, M: "месяц", MM: c, y: "год", yy: c }, ordinal: function(_) {
      return _;
    }, meridiem: function(_) {
      return _ < 4 ? "ночи" : _ < 12 ? "утра" : _ < 17 ? "дня" : "вечера";
    } };
    return s.default.locale(m, null, !0), m;
  });
})(QA);
var eP = hi, tP = /* @__PURE__ */ O({
  __proto__: null,
  default: eP
}, [hi]), vi = {}, nP = {
  get exports() {
    return vi;
  },
  set exports(e) {
    vi = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "rw", weekdays: "Ku Cyumweru_Kuwa Mbere_Kuwa Kabiri_Kuwa Gatatu_Kuwa Kane_Kuwa Gatanu_Kuwa Gatandatu".split("_"), months: "Mutarama_Gashyantare_Werurwe_Mata_Gicurasi_Kamena_Nyakanga_Kanama_Nzeri_Ukwakira_Ugushyingo_Ukuboza".split("_"), relativeTime: { future: "mu %s", past: "%s", s: "amasegonda", m: "Umunota", mm: "%d iminota", h: "isaha", hh: "%d amasaha", d: "Umunsi", dd: "%d iminsi", M: "ukwezi", MM: "%d amezi", y: "umwaka", yy: "%d imyaka" }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, ordinal: function(o) {
      return o;
    } };
    return s.default.locale(i, null, !0), i;
  });
})(nP);
var rP = vi, oP = /* @__PURE__ */ O({
  __proto__: null,
  default: rP
}, [vi]), gi = {}, sP = {
  get exports() {
    return gi;
  },
  set exports(e) {
    gi = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "sd", weekdays: "آچر_سومر_اڱارو_اربع_خميس_جمع_ڇنڇر".split("_"), months: "جنوري_فيبروري_مارچ_اپريل_مئي_جون_جولاءِ_آگسٽ_سيپٽمبر_آڪٽوبر_نومبر_ڊسمبر".split("_"), weekStart: 1, weekdaysShort: "آچر_سومر_اڱارو_اربع_خميس_جمع_ڇنڇر".split("_"), monthsShort: "جنوري_فيبروري_مارچ_اپريل_مئي_جون_جولاءِ_آگسٽ_سيپٽمبر_آڪٽوبر_نومبر_ڊسمبر".split("_"), weekdaysMin: "آچر_سومر_اڱارو_اربع_خميس_جمع_ڇنڇر".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd، D MMMM YYYY HH:mm" }, relativeTime: { future: "%s پوء", past: "%s اڳ", s: "چند سيڪنڊ", m: "هڪ منٽ", mm: "%d منٽ", h: "هڪ ڪلاڪ", hh: "%d ڪلاڪ", d: "هڪ ڏينهن", dd: "%d ڏينهن", M: "هڪ مهينو", MM: "%d مهينا", y: "هڪ سال", yy: "%d سال" } };
    return s.default.locale(i, null, !0), i;
  });
})(sP);
var iP = gi, aP = /* @__PURE__ */ O({
  __proto__: null,
  default: iP
}, [gi]), yi = {}, lP = {
  get exports() {
    return yi;
  },
  set exports(e) {
    yi = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "se", weekdays: "sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat".split("_"), months: "ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu".split("_"), weekStart: 1, weekdaysShort: "sotn_vuos_maŋ_gask_duor_bear_láv".split("_"), monthsShort: "ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov".split("_"), weekdaysMin: "s_v_m_g_d_b_L".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "MMMM D. [b.] YYYY", LLL: "MMMM D. [b.] YYYY [ti.] HH:mm", LLLL: "dddd, MMMM D. [b.] YYYY [ti.] HH:mm" }, relativeTime: { future: "%s geažes", past: "maŋit %s", s: "moadde sekunddat", m: "okta minuhta", mm: "%d minuhtat", h: "okta diimmu", hh: "%d diimmut", d: "okta beaivi", dd: "%d beaivvit", M: "okta mánnu", MM: "%d mánut", y: "okta jahki", yy: "%d jagit" } };
    return s.default.locale(i, null, !0), i;
  });
})(lP);
var uP = yi, cP = /* @__PURE__ */ O({
  __proto__: null,
  default: uP
}, [yi]), Mi = {}, dP = {
  get exports() {
    return Mi;
  },
  set exports(e) {
    Mi = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "si", weekdays: "ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා".split("_"), months: "දුරුතු_නවම්_මැදින්_බක්_වෙසක්_පොසොන්_ඇසළ_නිකිණි_බිනර_වප්_ඉල්_උඳුවප්".split("_"), weekdaysShort: "ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන".split("_"), monthsShort: "දුරු_නව_මැදි_බක්_වෙස_පොසො_ඇස_නිකි_බින_වප්_ඉල්_උඳු".split("_"), weekdaysMin: "ඉ_ස_අ_බ_බ්‍ර_සි_සෙ".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "a h:mm", LTS: "a h:mm:ss", L: "YYYY/MM/DD", LL: "YYYY MMMM D", LLL: "YYYY MMMM D, a h:mm", LLLL: "YYYY MMMM D [වැනි] dddd, a h:mm:ss" }, relativeTime: { future: "%sකින්", past: "%sකට පෙර", s: "තත්පර කිහිපය", m: "විනාඩිය", mm: "විනාඩි %d", h: "පැය", hh: "පැය %d", d: "දිනය", dd: "දින %d", M: "මාසය", MM: "මාස %d", y: "වසර", yy: "වසර %d" } };
    return s.default.locale(i, null, !0), i;
  });
})(dP);
var fP = Mi, mP = /* @__PURE__ */ O({
  __proto__: null,
  default: fP
}, [Mi]), bi = {}, pP = {
  get exports() {
    return bi;
  },
  set exports(e) {
    bi = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
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
})(pP);
var _P = bi, hP = /* @__PURE__ */ O({
  __proto__: null,
  default: _P
}, [bi]), xi = {}, vP = {
  get exports() {
    return xi;
  },
  set exports(e) {
    xi = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "sl", weekdays: "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"), months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"), weekStart: 1, weekdaysShort: "ned._pon._tor._sre._čet._pet._sob.".split("_"), monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"), weekdaysMin: "ne_po_to_sr_če_pe_so".split("_"), ordinal: function(o) {
      return o + ".";
    }, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" }, relativeTime: { future: "čez %s", past: "pred %s", s: "nekaj sekund", m: "minuta", mm: "%d minut", h: "ura", hh: "%d ur", d: "dan", dd: "%d dni", M: "mesec", MM: "%d mesecev", y: "leto", yy: "%d let" } };
    return s.default.locale(i, null, !0), i;
  });
})(vP);
var gP = xi, yP = /* @__PURE__ */ O({
  __proto__: null,
  default: gP
}, [xi]), wi = {}, MP = {
  get exports() {
    return wi;
  },
  set exports(e) {
    wi = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "sq", weekdays: "E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split("_"), months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"), weekStart: 1, weekdaysShort: "Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"), monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"), weekdaysMin: "D_H_Ma_Më_E_P_Sh".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, relativeTime: { future: "në %s", past: "%s më parë", s: "disa sekonda", m: "një minutë", mm: "%d minuta", h: "një orë", hh: "%d orë", d: "një ditë", dd: "%d ditë", M: "një muaj", MM: "%d muaj", y: "një vit", yy: "%d vite" } };
    return s.default.locale(i, null, !0), i;
  });
})(MP);
var bP = wi, xP = /* @__PURE__ */ O({
  __proto__: null,
  default: bP
}, [wi]), Yi = {}, wP = {
  get exports() {
    return Yi;
  },
  set exports(e) {
    Yi = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
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
})(wP);
var YP = Yi, LP = /* @__PURE__ */ O({
  __proto__: null,
  default: YP
}, [Yi]), Li = {}, SP = {
  get exports() {
    return Li;
  },
  set exports(e) {
    Li = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
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
})(SP);
var kP = Li, DP = /* @__PURE__ */ O({
  __proto__: null,
  default: kP
}, [Li]), Si = {}, TP = {
  get exports() {
    return Si;
  },
  set exports(e) {
    Si = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "ss", weekdays: "Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"), months: "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"), weekStart: 1, weekdaysShort: "Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"), monthsShort: "Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"), weekdaysMin: "Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, relativeTime: { future: "nga %s", past: "wenteka nga %s", s: "emizuzwana lomcane", m: "umzuzu", mm: "%d emizuzu", h: "lihora", hh: "%d emahora", d: "lilanga", dd: "%d emalanga", M: "inyanga", MM: "%d tinyanga", y: "umnyaka", yy: "%d iminyaka" } };
    return s.default.locale(i, null, !0), i;
  });
})(TP);
var EP = Si, jP = /* @__PURE__ */ O({
  __proto__: null,
  default: EP
}, [Si]), ki = {}, AP = {
  get exports() {
    return ki;
  },
  set exports(e) {
    ki = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "sv-fi", weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"), weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"), weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"), months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"), monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"), weekStart: 1, yearStart: 4, ordinal: function(o) {
      var a = o % 10;
      return "[" + o + (a === 1 || a === 2 ? "a" : "e") + "]";
    }, formats: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY, [kl.] HH.mm", LLLL: "dddd, D. MMMM YYYY, [kl.] HH.mm", l: "D.M.YYYY", ll: "D. MMM YYYY", lll: "D. MMM YYYY, [kl.] HH.mm", llll: "ddd, D. MMM YYYY, [kl.] HH.mm" }, relativeTime: { future: "om %s", past: "för %s sedan", s: "några sekunder", m: "en minut", mm: "%d minuter", h: "en timme", hh: "%d timmar", d: "en dag", dd: "%d dagar", M: "en månad", MM: "%d månader", y: "ett år", yy: "%d år" } };
    return s.default.locale(i, null, !0), i;
  });
})(AP);
var PP = ki, CP = /* @__PURE__ */ O({
  __proto__: null,
  default: PP
}, [ki]), Di = {}, $P = {
  get exports() {
    return Di;
  },
  set exports(e) {
    Di = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "sv", weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"), weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"), weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"), months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"), monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"), weekStart: 1, yearStart: 4, ordinal: function(o) {
      var a = o % 10;
      return "[" + o + (a === 1 || a === 2 ? "a" : "e") + "]";
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [kl.] HH:mm", LLLL: "dddd D MMMM YYYY [kl.] HH:mm", lll: "D MMM YYYY HH:mm", llll: "ddd D MMM YYYY HH:mm" }, relativeTime: { future: "om %s", past: "för %s sedan", s: "några sekunder", m: "en minut", mm: "%d minuter", h: "en timme", hh: "%d timmar", d: "en dag", dd: "%d dagar", M: "en månad", MM: "%d månader", y: "ett år", yy: "%d år" } };
    return s.default.locale(i, null, !0), i;
  });
})($P);
var HP = Di, RP = /* @__PURE__ */ O({
  __proto__: null,
  default: HP
}, [Di]), Ti = {}, OP = {
  get exports() {
    return Ti;
  },
  set exports(e) {
    Ti = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "sw", weekdays: "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"), weekdaysShort: "Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"), weekdaysMin: "J2_J3_J4_J5_Al_Ij_J1".split("_"), months: "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"), monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"), weekStart: 1, ordinal: function(o) {
      return o;
    }, relativeTime: { future: "%s baadaye", past: "tokea %s", s: "hivi punde", m: "dakika moja", mm: "dakika %d", h: "saa limoja", hh: "masaa %d", d: "siku moja", dd: "masiku %d", M: "mwezi mmoja", MM: "miezi %d", y: "mwaka mmoja", yy: "miaka %d" }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" } };
    return s.default.locale(i, null, !0), i;
  });
})(OP);
var NP = Ti, FP = /* @__PURE__ */ O({
  __proto__: null,
  default: NP
}, [Ti]), Ei = {}, IP = {
  get exports() {
    return Ei;
  },
  set exports(e) {
    Ei = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "ta", weekdays: "ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"), months: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"), weekdaysShort: "ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"), monthsShort: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"), weekdaysMin: "ஞா_தி_செ_பு_வி_வெ_ச".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, HH:mm", LLLL: "dddd, D MMMM YYYY, HH:mm" }, relativeTime: { future: "%s இல்", past: "%s முன்", s: "ஒரு சில விநாடிகள்", m: "ஒரு நிமிடம்", mm: "%d நிமிடங்கள்", h: "ஒரு மணி நேரம்", hh: "%d மணி நேரம்", d: "ஒரு நாள்", dd: "%d நாட்கள்", M: "ஒரு மாதம்", MM: "%d மாதங்கள்", y: "ஒரு வருடம்", yy: "%d ஆண்டுகள்" } };
    return s.default.locale(i, null, !0), i;
  });
})(IP);
var VP = Ei, BP = /* @__PURE__ */ O({
  __proto__: null,
  default: VP
}, [Ei]), ji = {}, zP = {
  get exports() {
    return ji;
  },
  set exports(e) {
    ji = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "te", weekdays: "ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం".split("_"), months: "జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జులై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్".split("_"), weekdaysShort: "ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని".split("_"), monthsShort: "జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జులై_ఆగ._సెప్._అక్టో._నవ._డిసె.".split("_"), weekdaysMin: "ఆ_సో_మం_బు_గు_శు_శ".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "A h:mm", LTS: "A h:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm", LLLL: "dddd, D MMMM YYYY, A h:mm" }, relativeTime: { future: "%s లో", past: "%s క్రితం", s: "కొన్ని క్షణాలు", m: "ఒక నిమిషం", mm: "%d నిమిషాలు", h: "ఒక గంట", hh: "%d గంటలు", d: "ఒక రోజు", dd: "%d రోజులు", M: "ఒక నెల", MM: "%d నెలలు", y: "ఒక సంవత్సరం", yy: "%d సంవత్సరాలు" } };
    return s.default.locale(i, null, !0), i;
  });
})(zP);
var WP = ji, UP = /* @__PURE__ */ O({
  __proto__: null,
  default: WP
}, [ji]), Ai = {}, KP = {
  get exports() {
    return Ai;
  },
  set exports(e) {
    Ai = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "tg", weekdays: "якшанбе_душанбе_сешанбе_чоршанбе_панҷшанбе_ҷумъа_шанбе".split("_"), months: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"), weekStart: 1, weekdaysShort: "яшб_дшб_сшб_чшб_пшб_ҷум_шнб".split("_"), monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"), weekdaysMin: "яш_дш_сш_чш_пш_ҷм_шб".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, relativeTime: { future: "баъди %s", past: "%s пеш", s: "якчанд сония", m: "як дақиқа", mm: "%d дақиқа", h: "як соат", hh: "%d соат", d: "як рӯз", dd: "%d рӯз", M: "як моҳ", MM: "%d моҳ", y: "як сол", yy: "%d сол" } };
    return s.default.locale(i, null, !0), i;
  });
})(KP);
var GP = Ai, JP = /* @__PURE__ */ O({
  __proto__: null,
  default: GP
}, [Ai]), Pi = {}, XP = {
  get exports() {
    return Pi;
  },
  set exports(e) {
    Pi = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "th", weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"), weekdaysShort: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"), weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"), months: "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"), monthsShort: "ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split("_"), formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY เวลา H:mm", LLLL: "วันddddที่ D MMMM YYYY เวลา H:mm" }, relativeTime: { future: "อีก %s", past: "%sที่แล้ว", s: "ไม่กี่วินาที", m: "1 นาที", mm: "%d นาที", h: "1 ชั่วโมง", hh: "%d ชั่วโมง", d: "1 วัน", dd: "%d วัน", M: "1 เดือน", MM: "%d เดือน", y: "1 ปี", yy: "%d ปี" }, ordinal: function(o) {
      return o + ".";
    } };
    return s.default.locale(i, null, !0), i;
  });
})(XP);
var qP = Pi, ZP = /* @__PURE__ */ O({
  __proto__: null,
  default: qP
}, [Pi]), Ci = {}, QP = {
  get exports() {
    return Ci;
  },
  set exports(e) {
    Ci = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "tk", weekdays: "Ýekşenbe_Duşenbe_Sişenbe_Çarşenbe_Penşenbe_Anna_Şenbe".split("_"), weekdaysShort: "Ýek_Duş_Siş_Çar_Pen_Ann_Şen".split("_"), weekdaysMin: "Ýk_Dş_Sş_Çr_Pn_An_Şn".split("_"), months: "Ýanwar_Fewral_Mart_Aprel_Maý_Iýun_Iýul_Awgust_Sentýabr_Oktýabr_Noýabr_Dekabr".split("_"), monthsShort: "Ýan_Few_Mar_Apr_Maý_Iýn_Iýl_Awg_Sen_Okt_Noý_Dek".split("_"), weekStart: 1, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, relativeTime: { future: "%s soň", past: "%s öň", s: "birnäçe sekunt", m: "bir minut", mm: "%d minut", h: "bir sagat", hh: "%d sagat", d: "bir gün", dd: "%d gün", M: "bir aý", MM: "%d aý", y: "bir ýyl", yy: "%d ýyl" }, ordinal: function(o) {
      return o + ".";
    } };
    return s.default.locale(i, null, !0), i;
  });
})(QP);
var eC = Ci, tC = /* @__PURE__ */ O({
  __proto__: null,
  default: eC
}, [Ci]), $i = {}, nC = {
  get exports() {
    return $i;
  },
  set exports(e) {
    $i = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "tl-ph", weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"), months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"), weekStart: 1, weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"), monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"), weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "MM/D/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY HH:mm", LLLL: "dddd, MMMM DD, YYYY HH:mm" }, relativeTime: { future: "sa loob ng %s", past: "%s ang nakalipas", s: "ilang segundo", m: "isang minuto", mm: "%d minuto", h: "isang oras", hh: "%d oras", d: "isang araw", dd: "%d araw", M: "isang buwan", MM: "%d buwan", y: "isang taon", yy: "%d taon" } };
    return s.default.locale(i, null, !0), i;
  });
})(nC);
var rC = $i, oC = /* @__PURE__ */ O({
  __proto__: null,
  default: rC
}, [$i]), Hi = {}, sC = {
  get exports() {
    return Hi;
  },
  set exports(e) {
    Hi = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "tlh", weekdays: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"), months: "tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’".split("_"), weekStart: 1, weekdaysShort: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"), monthsShort: "jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’".split("_"), weekdaysMin: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" } };
    return s.default.locale(i, null, !0), i;
  });
})(sC);
var iC = Hi, aC = /* @__PURE__ */ O({
  __proto__: null,
  default: iC
}, [Hi]), Ri = {}, lC = {
  get exports() {
    return Ri;
  },
  set exports(e) {
    Ri = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "tr", weekdays: "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"), weekdaysShort: "Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"), weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"), months: "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"), monthsShort: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"), weekStart: 1, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, relativeTime: { future: "%s sonra", past: "%s önce", s: "birkaç saniye", m: "bir dakika", mm: "%d dakika", h: "bir saat", hh: "%d saat", d: "bir gün", dd: "%d gün", M: "bir ay", MM: "%d ay", y: "bir yıl", yy: "%d yıl" }, ordinal: function(o) {
      return o + ".";
    } };
    return s.default.locale(i, null, !0), i;
  });
})(lC);
var uC = Ri, cC = /* @__PURE__ */ O({
  __proto__: null,
  default: uC
}, [Ri]), Oi = {}, dC = {
  get exports() {
    return Oi;
  },
  set exports(e) {
    Oi = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "tzl", weekdays: "Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi".split("_"), months: "Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar".split("_"), weekStart: 1, weekdaysShort: "Súl_Lún_Mai_Már_Xhú_Vié_Sát".split("_"), monthsShort: "Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec".split("_"), weekdaysMin: "Sú_Lú_Ma_Má_Xh_Vi_Sá".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD.MM.YYYY", LL: "D. MMMM [dallas] YYYY", LLL: "D. MMMM [dallas] YYYY HH.mm", LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm" } };
    return s.default.locale(i, null, !0), i;
  });
})(dC);
var fC = Oi, mC = /* @__PURE__ */ O({
  __proto__: null,
  default: fC
}, [Oi]), Ni = {}, pC = {
  get exports() {
    return Ni;
  },
  set exports(e) {
    Ni = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "tzm-latn", weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"), months: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"), weekStart: 6, weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"), monthsShort: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"), weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, relativeTime: { future: "dadkh s yan %s", past: "yan %s", s: "imik", m: "minuḍ", mm: "%d minuḍ", h: "saɛa", hh: "%d tassaɛin", d: "ass", dd: "%d ossan", M: "ayowr", MM: "%d iyyirn", y: "asgas", yy: "%d isgasn" } };
    return s.default.locale(i, null, !0), i;
  });
})(pC);
var _C = Ni, hC = /* @__PURE__ */ O({
  __proto__: null,
  default: _C
}, [Ni]), Fi = {}, vC = {
  get exports() {
    return Fi;
  },
  set exports(e) {
    Fi = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "tzm", weekdays: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"), months: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"), weekStart: 6, weekdaysShort: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"), monthsShort: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"), weekdaysMin: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, relativeTime: { future: "ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s", past: "ⵢⴰⵏ %s", s: "ⵉⵎⵉⴽ", m: "ⵎⵉⵏⵓⴺ", mm: "%d ⵎⵉⵏⵓⴺ", h: "ⵙⴰⵄⴰ", hh: "%d ⵜⴰⵙⵙⴰⵄⵉⵏ", d: "ⴰⵙⵙ", dd: "%d oⵙⵙⴰⵏ", M: "ⴰⵢoⵓⵔ", MM: "%d ⵉⵢⵢⵉⵔⵏ", y: "ⴰⵙⴳⴰⵙ", yy: "%d ⵉⵙⴳⴰⵙⵏ" } };
    return s.default.locale(i, null, !0), i;
  });
})(vC);
var gC = Fi, yC = /* @__PURE__ */ O({
  __proto__: null,
  default: gC
}, [Fi]), Ii = {}, MC = {
  get exports() {
    return Ii;
  },
  set exports(e) {
    Ii = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "ug-cn", weekdays: "يەكشەنبە_دۈشەنبە_سەيشەنبە_چارشەنبە_پەيشەنبە_جۈمە_شەنبە".split("_"), months: "يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split("_"), weekStart: 1, weekdaysShort: "يە_دۈ_سە_چا_پە_جۈ_شە".split("_"), monthsShort: "يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split("_"), weekdaysMin: "يە_دۈ_سە_چا_پە_جۈ_شە".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY-يىلىM-ئاينىڭD-كۈنى", LLL: "YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm", LLLL: "dddd، YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm" }, relativeTime: { future: "%s كېيىن", past: "%s بۇرۇن", s: "نەچچە سېكونت", m: "بىر مىنۇت", mm: "%d مىنۇت", h: "بىر سائەت", hh: "%d سائەت", d: "بىر كۈن", dd: "%d كۈن", M: "بىر ئاي", MM: "%d ئاي", y: "بىر يىل", yy: "%d يىل" } };
    return s.default.locale(i, null, !0), i;
  });
})(MC);
var bC = Ii, xC = /* @__PURE__ */ O({
  __proto__: null,
  default: bC
}, [Ii]), Vi = {}, wC = {
  get exports() {
    return Vi;
  },
  set exports(e) {
    Vi = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(d) {
      return d && typeof d == "object" && "default" in d ? d : { default: d };
    }
    var s = r(n), i = "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"), o = "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_"), a = /D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;
    function l(d, f, m) {
      var _, p;
      return m === "m" ? f ? "хвилина" : "хвилину" : m === "h" ? f ? "година" : "годину" : d + " " + (_ = +d, p = { ss: f ? "секунда_секунди_секунд" : "секунду_секунди_секунд", mm: f ? "хвилина_хвилини_хвилин" : "хвилину_хвилини_хвилин", hh: f ? "година_години_годин" : "годину_години_годин", dd: "день_дні_днів", MM: "місяць_місяці_місяців", yy: "рік_роки_років" }[m].split("_"), _ % 10 == 1 && _ % 100 != 11 ? p[0] : _ % 10 >= 2 && _ % 10 <= 4 && (_ % 100 < 10 || _ % 100 >= 20) ? p[1] : p[2]);
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
})(wC);
var YC = Vi, LC = /* @__PURE__ */ O({
  __proto__: null,
  default: YC
}, [Vi]), Bi = {}, SC = {
  get exports() {
    return Bi;
  },
  set exports(e) {
    Bi = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "ur", weekdays: "اتوار_پیر_منگل_بدھ_جمعرات_جمعہ_ہفتہ".split("_"), months: "جنوری_فروری_مارچ_اپریل_مئی_جون_جولائی_اگست_ستمبر_اکتوبر_نومبر_دسمبر".split("_"), weekStart: 1, weekdaysShort: "اتوار_پیر_منگل_بدھ_جمعرات_جمعہ_ہفتہ".split("_"), monthsShort: "جنوری_فروری_مارچ_اپریل_مئی_جون_جولائی_اگست_ستمبر_اکتوبر_نومبر_دسمبر".split("_"), weekdaysMin: "اتوار_پیر_منگل_بدھ_جمعرات_جمعہ_ہفتہ".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd، D MMMM YYYY HH:mm" }, relativeTime: { future: "%s بعد", past: "%s قبل", s: "چند سیکنڈ", m: "ایک منٹ", mm: "%d منٹ", h: "ایک گھنٹہ", hh: "%d گھنٹے", d: "ایک دن", dd: "%d دن", M: "ایک ماہ", MM: "%d ماہ", y: "ایک سال", yy: "%d سال" } };
    return s.default.locale(i, null, !0), i;
  });
})(SC);
var kC = Bi, DC = /* @__PURE__ */ O({
  __proto__: null,
  default: kC
}, [Bi]), zi = {}, TC = {
  get exports() {
    return zi;
  },
  set exports(e) {
    zi = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "uz-latn", weekdays: "Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba".split("_"), months: "Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr".split("_"), weekStart: 1, weekdaysShort: "Yak_Dush_Sesh_Chor_Pay_Jum_Shan".split("_"), monthsShort: "Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek".split("_"), weekdaysMin: "Ya_Du_Se_Cho_Pa_Ju_Sha".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "D MMMM YYYY, dddd HH:mm" }, relativeTime: { future: "Yaqin %s ichida", past: "Bir necha %s oldin", s: "soniya", m: "bir daqiqa", mm: "%d daqiqa", h: "bir soat", hh: "%d soat", d: "bir kun", dd: "%d kun", M: "bir oy", MM: "%d oy", y: "bir yil", yy: "%d yil" } };
    return s.default.locale(i, null, !0), i;
  });
})(TC);
var EC = zi, jC = /* @__PURE__ */ O({
  __proto__: null,
  default: EC
}, [zi]), Wi = {}, AC = {
  get exports() {
    return Wi;
  },
  set exports(e) {
    Wi = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "uz", weekdays: "Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"), months: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"), weekStart: 1, weekdaysShort: "Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"), monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"), weekdaysMin: "Як_Ду_Се_Чо_Па_Жу_Ша".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "D MMMM YYYY, dddd HH:mm" }, relativeTime: { future: "Якин %s ичида", past: "Бир неча %s олдин", s: "фурсат", m: "бир дакика", mm: "%d дакика", h: "бир соат", hh: "%d соат", d: "бир кун", dd: "%d кун", M: "бир ой", MM: "%d ой", y: "бир йил", yy: "%d йил" } };
    return s.default.locale(i, null, !0), i;
  });
})(AC);
var PC = Wi, CC = /* @__PURE__ */ O({
  __proto__: null,
  default: PC
}, [Wi]), Ui = {}, $C = {
  get exports() {
    return Ui;
  },
  set exports(e) {
    Ui = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "vi", weekdays: "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"), months: "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"), weekStart: 1, weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"), monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"), weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM [năm] YYYY", LLL: "D MMMM [năm] YYYY HH:mm", LLLL: "dddd, D MMMM [năm] YYYY HH:mm", l: "DD/M/YYYY", ll: "D MMM YYYY", lll: "D MMM YYYY HH:mm", llll: "ddd, D MMM YYYY HH:mm" }, relativeTime: { future: "%s tới", past: "%s trước", s: "vài giây", m: "một phút", mm: "%d phút", h: "một giờ", hh: "%d giờ", d: "một ngày", dd: "%d ngày", M: "một tháng", MM: "%d tháng", y: "một năm", yy: "%d năm" } };
    return s.default.locale(i, null, !0), i;
  });
})($C);
var HC = Ui, RC = /* @__PURE__ */ O({
  __proto__: null,
  default: HC
}, [Ui]), Ki = {}, OC = {
  get exports() {
    return Ki;
  },
  set exports(e) {
    Ki = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "x-pseudo", weekdays: "S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý".split("_"), months: "J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér".split("_"), weekStart: 1, weekdaysShort: "S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát".split("_"), monthsShort: "J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc".split("_"), weekdaysMin: "S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, relativeTime: { future: "í~ñ %s", past: "%s á~gó", s: "á ~féw ~sécó~ñds", m: "á ~míñ~úté", mm: "%d m~íñú~tés", h: "á~ñ hó~úr", hh: "%d h~óúrs", d: "á ~dáý", dd: "%d d~áýs", M: "á ~móñ~th", MM: "%d m~óñt~hs", y: "á ~ýéár", yy: "%d ý~éárs" } };
    return s.default.locale(i, null, !0), i;
  });
})(OC);
var NC = Ki, FC = /* @__PURE__ */ O({
  __proto__: null,
  default: NC
}, [Ki]), Gi = {}, IC = {
  get exports() {
    return Gi;
  },
  set exports(e) {
    Gi = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "yo", weekdays: "Àìkú_Ajé_Ìsẹ́gun_Ọjọ́rú_Ọjọ́bọ_Ẹtì_Àbámẹ́ta".split("_"), months: "Sẹ́rẹ́_Èrèlè_Ẹrẹ̀nà_Ìgbé_Èbibi_Òkùdu_Agẹmo_Ògún_Owewe_Ọ̀wàrà_Bélú_Ọ̀pẹ̀̀".split("_"), weekStart: 1, weekdaysShort: "Àìk_Ajé_Ìsẹ́_Ọjr_Ọjb_Ẹtì_Àbá".split("_"), monthsShort: "Sẹ́r_Èrl_Ẹrn_Ìgb_Èbi_Òkù_Agẹ_Ògú_Owe_Ọ̀wà_Bél_Ọ̀pẹ̀̀".split("_"), weekdaysMin: "Àì_Aj_Ìs_Ọr_Ọb_Ẹt_Àb".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, relativeTime: { future: "ní %s", past: "%s kọjá", s: "ìsẹjú aayá die", m: "ìsẹjú kan", mm: "ìsẹjú %d", h: "wákati kan", hh: "wákati %d", d: "ọjọ́ kan", dd: "ọjọ́ %d", M: "osù kan", MM: "osù %d", y: "ọdún kan", yy: "ọdún %d" } };
    return s.default.locale(i, null, !0), i;
  });
})(IC);
var VC = Gi, BC = /* @__PURE__ */ O({
  __proto__: null,
  default: VC
}, [Gi]), Ji = {}, zC = {
  get exports() {
    return Ji;
  },
  set exports(e) {
    Ji = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
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
})(zC);
var WC = Ji, UC = /* @__PURE__ */ O({
  __proto__: null,
  default: WC
}, [Ji]), Xi = {}, KC = {
  get exports() {
    return Xi;
  },
  set exports(e) {
    Xi = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "zh-hk", months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"), monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"), weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"), weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"), weekdaysMin: "日_一_二_三_四_五_六".split("_"), ordinal: function(o, a) {
      return a === "W" ? o + "週" : o + "日";
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY/MM/DD", LL: "YYYY年M月D日", LLL: "YYYY年M月D日 HH:mm", LLLL: "YYYY年M月D日dddd HH:mm" }, relativeTime: { future: "%s內", past: "%s前", s: "幾秒", m: "一分鐘", mm: "%d 分鐘", h: "一小時", hh: "%d 小時", d: "一天", dd: "%d 天", M: "一個月", MM: "%d 個月", y: "一年", yy: "%d 年" } };
    return s.default.locale(i, null, !0), i;
  });
})(KC);
var GC = Xi, JC = /* @__PURE__ */ O({
  __proto__: null,
  default: GC
}, [Xi]), qi = {}, XC = {
  get exports() {
    return qi;
  },
  set exports(e) {
    qi = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
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
})(XC);
var qC = qi, ZC = /* @__PURE__ */ O({
  __proto__: null,
  default: qC
}, [qi]), Zi = {}, QC = {
  get exports() {
    return Zi;
  },
  set exports(e) {
    Zi = e;
  }
};
(function(e, t) {
  (function(n, r) {
    e.exports = r(D);
  })(H, function(n) {
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
})(QC);
var e$ = Zi, t$ = /* @__PURE__ */ O({
  __proto__: null,
  default: e$
}, [Zi]);
const Ct = (e) => typeof window == "undefined" ? "" : getComputedStyle(document.body).getPropertyValue(e), n$ = "_DatePickerContainer_1cjeb_1", r$ = {
  DatePickerContainer: n$
}, b2 = ({
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
  accentColor: d = Ct("--color-primary"),
  invalidColor: f = Ct("--color-danger"),
  maxDate: m = "",
  minDate: _ = "",
  className: p,
  inputClass: v,
  calendarColors: h = {
    disabled: Ct("--color-light-3-tint"),
    activeText: Ct("--color-background"),
    text: Ct("--color-dark"),
    hoverBgClass: "hover:bg-light-4-tint",
    background: Ct("--color-background"),
    border: Ct("--color-light-4"),
    otherMonth: Ct("--color-light-dark")
  },
  initialValue: y,
  containerClass: b,
  error: x
}) => {
  const [w, k] = ne({
    startDate: null,
    endDate: null
  }), j = "en";
  se(() => {
    k({
      startDate: y || null,
      endDate: y || null
    });
  }, [y]);
  const L = ($) => {
    k($), e($.startDate);
  }, F = () => {
    k({
      startDate: null,
      endDate: null
    }), t == null || t();
  }, S = ($) => {
    $.key === "Enter" && t && $.target.value === "" && t();
  };
  return /* @__PURE__ */ g.jsxs("div", { className: K("max-w-[174px] relative", p), children: [
    i && /* @__PURE__ */ g.jsx("p", { className: "text-sm text-light-dark mb-1", children: i }),
    /* @__PURE__ */ g.jsx("div", { onKeyDown: S, children: /* @__PURE__ */ g.jsx(
      T1,
      {
        readOnly: !1,
        value: w,
        onChange: L,
        disabled: n,
        displayFormat: u,
        startWeekOn: s,
        invalid: r,
        invalidColor: f,
        invalidText: l,
        emptyLabel: o,
        fillLabel: a,
        i18n: c || j,
        accentColor: d,
        inputClassName: K(
          "fill-medium icon-fill-medium icon-hover-fill-fo-accent hover-border-fo-accent transition-colors duration-100 border-2 !outline-offset-0 active:outline active:!outline-[1px] active:outline-fo-accent focus:outline focus:!outline-[1px] focus:outline-fo-accent border-color-light-3 text-medium disabled:border-light-3 hover:disabled:border-light-3 disabled:bg-4-tint hover:border-2 hover:disabled:bg-4-tint",
          (r || x) && "outline !outline-[1px] outline-danger",
          v
        ),
        minDate: _,
        maxDate: m,
        calendarColors: {
          ...h,
          hoverBgClass: K(
            h.hoverBgClass,
            "hover:disabled:bg-background disabled:cursor-not-allowed"
          )
        },
        containerClassName: K(r$.DatePickerContainer, b)
      }
    ) }),
    t && w.startDate && w.startDate !== "" && /* @__PURE__ */ g.jsx(
      l_,
      {
        className: "cursor-pointer absolute right-3 top-3",
        height: 16,
        onClick: F
      }
    ),
    x && /* @__PURE__ */ g.jsx("p", { className: K("text-danger text-xs mt-1 truncate"), children: x })
  ] });
};
function fe(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(s) {
    if (e == null || e(s), n === !1 || !s.defaultPrevented)
      return t == null ? void 0 : t(s);
  };
}
function rm(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function ka(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((s) => {
      const i = rm(s, t);
      return !n && typeof i == "function" && (n = !0), i;
    });
    if (n)
      return () => {
        for (let s = 0; s < r.length; s++) {
          const i = r[s];
          typeof i == "function" ? i() : rm(e[s], null);
        }
      };
  };
}
function Ke(...e) {
  return M.useCallback(ka(...e), e);
}
function Cr(e, t = []) {
  let n = [];
  function r(i, o) {
    const a = M.createContext(o), l = n.length;
    n = [...n, o];
    const u = (d) => {
      var h;
      const { scope: f, children: m, ..._ } = d, p = ((h = f == null ? void 0 : f[e]) == null ? void 0 : h[l]) || a, v = M.useMemo(() => _, Object.values(_));
      return /* @__PURE__ */ g.jsx(p.Provider, { value: v, children: m });
    };
    u.displayName = i + "Provider";
    function c(d, f) {
      var p;
      const m = ((p = f == null ? void 0 : f[e]) == null ? void 0 : p[l]) || a, _ = M.useContext(m);
      if (_) return _;
      if (o !== void 0) return o;
      throw new Error(`\`${d}\` must be used within \`${i}\``);
    }
    return [u, c];
  }
  const s = () => {
    const i = n.map((o) => M.createContext(o));
    return function(a) {
      const l = (a == null ? void 0 : a[e]) || i;
      return M.useMemo(
        () => ({ [`__scope${e}`]: { ...a, [e]: l } }),
        [a, l]
      );
    };
  };
  return s.scopeName = e, [r, o$(s, ...t)];
}
function o$(...e) {
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
      return M.useMemo(() => ({ [`__scope${t.scopeName}`]: o }), [o]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
var Ut = globalThis != null && globalThis.document ? M.useLayoutEffect : () => {
}, s$ = M[" useInsertionEffect ".trim().toString()] || Ut;
function $c({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  },
  caller: r
}) {
  const [s, i, o] = i$({
    defaultProp: t,
    onChange: n
  }), a = e !== void 0, l = a ? e : s;
  {
    const c = M.useRef(e !== void 0);
    M.useEffect(() => {
      const d = c.current;
      d !== a && console.warn(
        `${r} is changing from ${d ? "controlled" : "uncontrolled"} to ${a ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
      ), c.current = a;
    }, [a, r]);
  }
  const u = M.useCallback(
    (c) => {
      var d;
      if (a) {
        const f = a$(c) ? c(e) : c;
        f !== e && ((d = o.current) == null || d.call(o, f));
      } else
        i(c);
    },
    [a, e, i, o]
  );
  return [l, u];
}
function i$({
  defaultProp: e,
  onChange: t
}) {
  const [n, r] = M.useState(e), s = M.useRef(n), i = M.useRef(t);
  return s$(() => {
    i.current = t;
  }, [t]), M.useEffect(() => {
    var o;
    s.current !== n && ((o = i.current) == null || o.call(i, n), s.current = n);
  }, [n, s]), [n, r, i];
}
function a$(e) {
  return typeof e == "function";
}
// @__NO_SIDE_EFFECTS__
function Qi(e) {
  const t = /* @__PURE__ */ l$(e), n = M.forwardRef((r, s) => {
    const { children: i, ...o } = r, a = M.Children.toArray(i), l = a.find(c$);
    if (l) {
      const u = l.props.children, c = a.map((d) => d === l ? M.Children.count(u) > 1 ? M.Children.only(null) : M.isValidElement(u) ? u.props.children : null : d);
      return /* @__PURE__ */ g.jsx(t, { ...o, ref: s, children: M.isValidElement(u) ? M.cloneElement(u, void 0, c) : null });
    }
    return /* @__PURE__ */ g.jsx(t, { ...o, ref: s, children: i });
  });
  return n.displayName = `${e}.Slot`, n;
}
// @__NO_SIDE_EFFECTS__
function l$(e) {
  const t = M.forwardRef((n, r) => {
    const { children: s, ...i } = n;
    if (M.isValidElement(s)) {
      const o = f$(s), a = d$(i, s.props);
      return s.type !== M.Fragment && (a.ref = r ? ka(r, o) : o), M.cloneElement(s, a);
    }
    return M.Children.count(s) > 1 ? M.Children.only(null) : null;
  });
  return t.displayName = `${e}.SlotClone`, t;
}
var u$ = Symbol("radix.slottable");
function c$(e) {
  return M.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === u$;
}
function d$(e, t) {
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
function f$(e) {
  var r, s;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (s = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : s.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var m$ = [
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
], We = m$.reduce((e, t) => {
  const n = /* @__PURE__ */ Qi(`Primitive.${t}`), r = M.forwardRef((s, i) => {
    const { asChild: o, ...a } = s, l = o ? n : t;
    return typeof window != "undefined" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ g.jsx(l, { ...a, ref: i });
  });
  return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
}, {});
function ov(e, t) {
  e && ur.flushSync(() => e.dispatchEvent(t));
}
function sv(e) {
  const t = e + "CollectionProvider", [n, r] = Cr(t), [s, i] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), o = (p) => {
    const { scope: v, children: h } = p, y = E.useRef(null), b = E.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ g.jsx(s, { scope: v, itemMap: b, collectionRef: y, children: h });
  };
  o.displayName = t;
  const a = e + "CollectionSlot", l = /* @__PURE__ */ Qi(a), u = E.forwardRef(
    (p, v) => {
      const { scope: h, children: y } = p, b = i(a, h), x = Ke(v, b.collectionRef);
      return /* @__PURE__ */ g.jsx(l, { ref: x, children: y });
    }
  );
  u.displayName = a;
  const c = e + "CollectionItemSlot", d = "data-radix-collection-item", f = /* @__PURE__ */ Qi(c), m = E.forwardRef(
    (p, v) => {
      const { scope: h, children: y, ...b } = p, x = E.useRef(null), w = Ke(v, x), k = i(c, h);
      return E.useEffect(() => (k.itemMap.set(x, { ref: x, ...b }), () => void k.itemMap.delete(x))), /* @__PURE__ */ g.jsx(f, { [d]: "", ref: w, children: y });
    }
  );
  m.displayName = c;
  function _(p) {
    const v = i(e + "CollectionConsumer", p);
    return E.useCallback(() => {
      const y = v.collectionRef.current;
      if (!y) return [];
      const b = Array.from(y.querySelectorAll(`[${d}]`));
      return Array.from(v.itemMap.values()).sort(
        (k, j) => b.indexOf(k.ref.current) - b.indexOf(j.ref.current)
      );
    }, [v.collectionRef, v.itemMap]);
  }
  return [
    { Provider: o, Slot: u, ItemSlot: m },
    _,
    r
  ];
}
var p$ = M.createContext(void 0);
function iv(e) {
  const t = M.useContext(p$);
  return e || t || "ltr";
}
function Mt(e) {
  const t = M.useRef(e);
  return M.useEffect(() => {
    t.current = e;
  }), M.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function _$(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Mt(e);
  M.useEffect(() => {
    const r = (s) => {
      s.key === "Escape" && n(s);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var h$ = "DismissableLayer", iu = "dismissableLayer.update", v$ = "dismissableLayer.pointerDownOutside", g$ = "dismissableLayer.focusOutside", om, av = M.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), lv = M.forwardRef(
  (e, t) => {
    var j;
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: s,
      onFocusOutside: i,
      onInteractOutside: o,
      onDismiss: a,
      ...l
    } = e, u = M.useContext(av), [c, d] = M.useState(null), f = (j = c == null ? void 0 : c.ownerDocument) != null ? j : globalThis == null ? void 0 : globalThis.document, [, m] = M.useState({}), _ = Ke(t, (L) => d(L)), p = Array.from(u.layers), [v] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), h = p.indexOf(v), y = c ? p.indexOf(c) : -1, b = u.layersWithOutsidePointerEventsDisabled.size > 0, x = y >= h, w = b$((L) => {
      const F = L.target, S = [...u.branches].some(($) => $.contains(F));
      !x || S || (s == null || s(L), o == null || o(L), L.defaultPrevented || a == null || a());
    }, f), k = x$((L) => {
      const F = L.target;
      [...u.branches].some(($) => $.contains(F)) || (i == null || i(L), o == null || o(L), L.defaultPrevented || a == null || a());
    }, f);
    return _$((L) => {
      y === u.layers.size - 1 && (r == null || r(L), !L.defaultPrevented && a && (L.preventDefault(), a()));
    }, f), M.useEffect(() => {
      if (c)
        return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (om = f.body.style.pointerEvents, f.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(c)), u.layers.add(c), sm(), () => {
          n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (f.body.style.pointerEvents = om);
        };
    }, [c, f, n, u]), M.useEffect(() => () => {
      c && (u.layers.delete(c), u.layersWithOutsidePointerEventsDisabled.delete(c), sm());
    }, [c, u]), M.useEffect(() => {
      const L = () => m({});
      return document.addEventListener(iu, L), () => document.removeEventListener(iu, L);
    }, []), /* @__PURE__ */ g.jsx(
      We.div,
      {
        ...l,
        ref: _,
        style: {
          pointerEvents: b ? x ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: fe(e.onFocusCapture, k.onFocusCapture),
        onBlurCapture: fe(e.onBlurCapture, k.onBlurCapture),
        onPointerDownCapture: fe(
          e.onPointerDownCapture,
          w.onPointerDownCapture
        )
      }
    );
  }
);
lv.displayName = h$;
var y$ = "DismissableLayerBranch", M$ = M.forwardRef((e, t) => {
  const n = M.useContext(av), r = M.useRef(null), s = Ke(t, r);
  return M.useEffect(() => {
    const i = r.current;
    if (i)
      return n.branches.add(i), () => {
        n.branches.delete(i);
      };
  }, [n.branches]), /* @__PURE__ */ g.jsx(We.div, { ...e, ref: s });
});
M$.displayName = y$;
function b$(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Mt(e), r = M.useRef(!1), s = M.useRef(() => {
  });
  return M.useEffect(() => {
    const i = (a) => {
      if (a.target && !r.current) {
        let l = function() {
          uv(
            v$,
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
function x$(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Mt(e), r = M.useRef(!1);
  return M.useEffect(() => {
    const s = (i) => {
      i.target && !r.current && uv(g$, n, { originalEvent: i }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", s), () => t.removeEventListener("focusin", s);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function sm() {
  const e = new CustomEvent(iu);
  document.dispatchEvent(e);
}
function uv(e, t, n, { discrete: r }) {
  const s = n.originalEvent.target, i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && s.addEventListener(e, t, { once: !0 }), r ? ov(s, i) : s.dispatchEvent(i);
}
var il = 0;
function w$() {
  M.useEffect(() => {
    var t, n;
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (t = e[0]) != null ? t : im()), document.body.insertAdjacentElement("beforeend", (n = e[1]) != null ? n : im()), il++, () => {
      il === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((r) => r.remove()), il--;
    };
  }, []);
}
function im() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
var al = "focusScope.autoFocusOnMount", ll = "focusScope.autoFocusOnUnmount", am = { bubbles: !1, cancelable: !0 }, Y$ = "FocusScope", cv = M.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: s,
    onUnmountAutoFocus: i,
    ...o
  } = e, [a, l] = M.useState(null), u = Mt(s), c = Mt(i), d = M.useRef(null), f = Ke(t, (p) => l(p)), m = M.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  M.useEffect(() => {
    if (r) {
      let p = function(b) {
        if (m.paused || !a) return;
        const x = b.target;
        a.contains(x) ? d.current = x : Rt(d.current, { select: !0 });
      }, v = function(b) {
        if (m.paused || !a) return;
        const x = b.relatedTarget;
        x !== null && (a.contains(x) || Rt(d.current, { select: !0 }));
      }, h = function(b) {
        if (document.activeElement === document.body)
          for (const w of b)
            w.removedNodes.length > 0 && Rt(a);
      };
      document.addEventListener("focusin", p), document.addEventListener("focusout", v);
      const y = new MutationObserver(h);
      return a && y.observe(a, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", p), document.removeEventListener("focusout", v), y.disconnect();
      };
    }
  }, [r, a, m.paused]), M.useEffect(() => {
    if (a) {
      um.add(m);
      const p = document.activeElement;
      if (!a.contains(p)) {
        const h = new CustomEvent(al, am);
        a.addEventListener(al, u), a.dispatchEvent(h), h.defaultPrevented || (L$(E$(dv(a)), { select: !0 }), document.activeElement === p && Rt(a));
      }
      return () => {
        a.removeEventListener(al, u), setTimeout(() => {
          const h = new CustomEvent(ll, am);
          a.addEventListener(ll, c), a.dispatchEvent(h), h.defaultPrevented || Rt(p != null ? p : document.body, { select: !0 }), a.removeEventListener(ll, c), um.remove(m);
        }, 0);
      };
    }
  }, [a, u, c, m]);
  const _ = M.useCallback(
    (p) => {
      if (!n && !r || m.paused) return;
      const v = p.key === "Tab" && !p.altKey && !p.ctrlKey && !p.metaKey, h = document.activeElement;
      if (v && h) {
        const y = p.currentTarget, [b, x] = S$(y);
        b && x ? !p.shiftKey && h === x ? (p.preventDefault(), n && Rt(b, { select: !0 })) : p.shiftKey && h === b && (p.preventDefault(), n && Rt(x, { select: !0 })) : h === y && p.preventDefault();
      }
    },
    [n, r, m.paused]
  );
  return /* @__PURE__ */ g.jsx(We.div, { tabIndex: -1, ...o, ref: f, onKeyDown: _ });
});
cv.displayName = Y$;
function L$(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Rt(r, { select: t }), document.activeElement !== n) return;
}
function S$(e) {
  const t = dv(e), n = lm(t, e), r = lm(t.reverse(), e);
  return [n, r];
}
function dv(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const s = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || s ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function lm(e, t) {
  for (const n of e)
    if (!k$(n, { upTo: t })) return n;
}
function k$(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function D$(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Rt(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && D$(e) && t && e.select();
  }
}
var um = T$();
function T$() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = cm(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = cm(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function cm(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function E$(e) {
  return e.filter((t) => t.tagName !== "A");
}
var j$ = M[" useId ".trim().toString()] || (() => {
}), A$ = 0;
function wr(e) {
  const [t, n] = M.useState(j$());
  return Ut(() => {
    n((r) => r != null ? r : String(A$++));
  }, [e]), e || (t ? `radix-${t}` : "");
}
var P$ = "Arrow", fv = M.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: s = 5, ...i } = e;
  return /* @__PURE__ */ g.jsx(
    We.svg,
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
fv.displayName = P$;
var C$ = fv;
function $$(e) {
  const [t, n] = M.useState(void 0);
  return Ut(() => {
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
var Hc = "Popper", [mv, pv] = Cr(Hc), [H$, _v] = mv(Hc), hv = (e) => {
  const { __scopePopper: t, children: n } = e, [r, s] = M.useState(null);
  return /* @__PURE__ */ g.jsx(H$, { scope: t, anchor: r, onAnchorChange: s, children: n });
};
hv.displayName = Hc;
var vv = "PopperAnchor", gv = M.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...s } = e, i = _v(vv, n), o = M.useRef(null), a = Ke(t, o), l = M.useRef(null);
    return M.useEffect(() => {
      const u = l.current;
      l.current = (r == null ? void 0 : r.current) || o.current, u !== l.current && i.onAnchorChange(l.current);
    }), r ? null : /* @__PURE__ */ g.jsx(We.div, { ...s, ref: a });
  }
);
gv.displayName = vv;
var Rc = "PopperContent", [R$, O$] = mv(Rc), yv = M.forwardRef(
  (e, t) => {
    var W, ce, ae, de, _e, ke, Ge, Pt;
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
      onPlaced: _,
      ...p
    } = e, v = _v(Rc, n), [h, y] = M.useState(null), b = Ke(t, (it) => y(it)), [x, w] = M.useState(null), k = $$(x), j = (W = k == null ? void 0 : k.width) != null ? W : 0, L = (ce = k == null ? void 0 : k.height) != null ? ce : 0, F = r + (i !== "center" ? "-" + i : ""), S = typeof c == "number" ? c : { top: 0, right: 0, bottom: 0, left: 0, ...c }, $ = Array.isArray(u) ? u : [u], z = $.length > 0, U = {
      padding: S,
      boundary: $.filter(F$),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: z
    }, { refs: N, floatingStyles: C, placement: P, isPositioned: R, middlewareData: Y } = Mh({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: F,
      whileElementsMounted: (...it) => gh(...it, {
        animationFrame: m === "always"
      }),
      elements: {
        reference: v.anchor
      },
      middleware: [
        hc({ mainAxis: s + L, alignmentAxis: o }),
        l && bh({
          mainAxis: !0,
          crossAxis: !1,
          limiter: d === "partial" ? g0() : void 0,
          ...U
        }),
        l && xh({ ...U }),
        wh({
          ...U,
          apply: ({ elements: it, rects: Un, availableWidth: ja, availableHeight: le }) => {
            const { width: re, height: Ie } = Un.reference, Ee = it.floating.style;
            Ee.setProperty("--radix-popper-available-width", `${ja}px`), Ee.setProperty("--radix-popper-available-height", `${le}px`), Ee.setProperty("--radix-popper-anchor-width", `${re}px`), Ee.setProperty("--radix-popper-anchor-height", `${Ie}px`);
          }
        }),
        x && M0({ element: x, padding: a }),
        I$({ arrowWidth: j, arrowHeight: L }),
        f && y0({ strategy: "referenceHidden", ...U })
      ]
    }), [A, V] = xv(P), T = Mt(_);
    Ut(() => {
      R && (T == null || T());
    }, [R, T]);
    const B = (ae = Y.arrow) == null ? void 0 : ae.x, I = (de = Y.arrow) == null ? void 0 : de.y, G = ((_e = Y.arrow) == null ? void 0 : _e.centerOffset) !== 0, [ie, J] = M.useState();
    return Ut(() => {
      h && J(window.getComputedStyle(h).zIndex);
    }, [h]), /* @__PURE__ */ g.jsx(
      "div",
      {
        ref: N.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...C,
          transform: R ? C.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: ie,
          "--radix-popper-transform-origin": [
            (ke = Y.transformOrigin) == null ? void 0 : ke.x,
            (Ge = Y.transformOrigin) == null ? void 0 : Ge.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((Pt = Y.hide) == null ? void 0 : Pt.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ g.jsx(
          R$,
          {
            scope: n,
            placedSide: A,
            onArrowChange: w,
            arrowX: B,
            arrowY: I,
            shouldHideArrow: G,
            children: /* @__PURE__ */ g.jsx(
              We.div,
              {
                "data-side": A,
                "data-align": V,
                ...p,
                ref: b,
                style: {
                  ...p.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: R ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
yv.displayName = Rc;
var Mv = "PopperArrow", N$ = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, bv = M.forwardRef(function(t, n) {
  const { __scopePopper: r, ...s } = t, i = O$(Mv, r), o = N$[i.placedSide];
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
          C$,
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
bv.displayName = Mv;
function F$(e) {
  return e !== null;
}
var I$ = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var v, h, y, b, x;
    const { placement: n, rects: r, middlewareData: s } = t, o = ((v = s.arrow) == null ? void 0 : v.centerOffset) !== 0, a = o ? 0 : e.arrowWidth, l = o ? 0 : e.arrowHeight, [u, c] = xv(n), d = { start: "0%", center: "50%", end: "100%" }[c], f = ((y = (h = s.arrow) == null ? void 0 : h.x) != null ? y : 0) + a / 2, m = ((x = (b = s.arrow) == null ? void 0 : b.y) != null ? x : 0) + l / 2;
    let _ = "", p = "";
    return u === "bottom" ? (_ = o ? d : `${f}px`, p = `${-l}px`) : u === "top" ? (_ = o ? d : `${f}px`, p = `${r.floating.height + l}px`) : u === "right" ? (_ = `${-l}px`, p = o ? d : `${m}px`) : u === "left" && (_ = `${r.floating.width + l}px`, p = o ? d : `${m}px`), { data: { x: _, y: p } };
  }
});
function xv(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var wv = hv, V$ = gv, B$ = yv, z$ = bv, W$ = "Portal", Yv = M.forwardRef((e, t) => {
  var a;
  const { container: n, ...r } = e, [s, i] = M.useState(!1);
  Ut(() => i(!0), []);
  const o = n || s && ((a = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : a.body);
  return o ? Ng.createPortal(/* @__PURE__ */ g.jsx(We.div, { ...r, ref: t }), o) : null;
});
Yv.displayName = W$;
function U$(e, t) {
  return M.useReducer((n, r) => {
    const s = t[n][r];
    return s != null ? s : n;
  }, e);
}
var $r = (e) => {
  const { present: t, children: n } = e, r = K$(t), s = typeof n == "function" ? n({ present: r.isPresent }) : M.Children.only(n), i = Ke(r.ref, G$(s));
  return typeof n == "function" || r.isPresent ? M.cloneElement(s, { ref: i }) : null;
};
$r.displayName = "Presence";
function K$(e) {
  const [t, n] = M.useState(), r = M.useRef(null), s = M.useRef(e), i = M.useRef("none"), o = e ? "mounted" : "unmounted", [a, l] = U$(o, {
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
  return M.useEffect(() => {
    const u = Xr(r.current);
    i.current = a === "mounted" ? u : "none";
  }, [a]), Ut(() => {
    const u = r.current, c = s.current;
    if (c !== e) {
      const f = i.current, m = Xr(u);
      e ? l("MOUNT") : m === "none" || (u == null ? void 0 : u.display) === "none" ? l("UNMOUNT") : l(c && f !== m ? "ANIMATION_OUT" : "UNMOUNT"), s.current = e;
    }
  }, [e, l]), Ut(() => {
    var u;
    if (t) {
      let c;
      const d = (u = t.ownerDocument.defaultView) != null ? u : window, f = (_) => {
        const v = Xr(r.current).includes(CSS.escape(_.animationName));
        if (_.target === t && v && (l("ANIMATION_END"), !s.current)) {
          const h = t.style.animationFillMode;
          t.style.animationFillMode = "forwards", c = d.setTimeout(() => {
            t.style.animationFillMode === "forwards" && (t.style.animationFillMode = h);
          });
        }
      }, m = (_) => {
        _.target === t && (i.current = Xr(r.current));
      };
      return t.addEventListener("animationstart", m), t.addEventListener("animationcancel", f), t.addEventListener("animationend", f), () => {
        d.clearTimeout(c), t.removeEventListener("animationstart", m), t.removeEventListener("animationcancel", f), t.removeEventListener("animationend", f);
      };
    } else
      l("ANIMATION_END");
  }, [t, l]), {
    isPresent: ["mounted", "unmountSuspended"].includes(a),
    ref: M.useCallback((u) => {
      r.current = u ? getComputedStyle(u) : null, n(u);
    }, [])
  };
}
function Xr(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function G$(e) {
  var r, s;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (s = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : s.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var ul = "rovingFocusGroup.onEntryFocus", J$ = { bubbles: !1, cancelable: !0 }, Hr = "RovingFocusGroup", [au, Lv, X$] = sv(Hr), [q$, Sv] = Cr(
  Hr,
  [X$]
), [Z$, Q$] = q$(Hr), kv = M.forwardRef(
  (e, t) => /* @__PURE__ */ g.jsx(au.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ g.jsx(au.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ g.jsx(eH, { ...e, ref: t }) }) })
);
kv.displayName = Hr;
var eH = M.forwardRef((e, t) => {
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
  } = e, f = M.useRef(null), m = Ke(t, f), _ = iv(i), [p, v] = $c({
    prop: o,
    defaultProp: a != null ? a : null,
    onChange: l,
    caller: Hr
  }), [h, y] = M.useState(!1), b = Mt(u), x = Lv(n), w = M.useRef(!1), [k, j] = M.useState(0);
  return M.useEffect(() => {
    const L = f.current;
    if (L)
      return L.addEventListener(ul, b), () => L.removeEventListener(ul, b);
  }, [b]), /* @__PURE__ */ g.jsx(
    Z$,
    {
      scope: n,
      orientation: r,
      dir: _,
      loop: s,
      currentTabStopId: p,
      onItemFocus: M.useCallback(
        (L) => v(L),
        [v]
      ),
      onItemShiftTab: M.useCallback(() => y(!0), []),
      onFocusableItemAdd: M.useCallback(
        () => j((L) => L + 1),
        []
      ),
      onFocusableItemRemove: M.useCallback(
        () => j((L) => L - 1),
        []
      ),
      children: /* @__PURE__ */ g.jsx(
        We.div,
        {
          tabIndex: h || k === 0 ? -1 : 0,
          "data-orientation": r,
          ...d,
          ref: m,
          style: { outline: "none", ...e.style },
          onMouseDown: fe(e.onMouseDown, () => {
            w.current = !0;
          }),
          onFocus: fe(e.onFocus, (L) => {
            const F = !w.current;
            if (L.target === L.currentTarget && F && !h) {
              const S = new CustomEvent(ul, J$);
              if (L.currentTarget.dispatchEvent(S), !S.defaultPrevented) {
                const $ = x().filter((P) => P.focusable), z = $.find((P) => P.active), U = $.find((P) => P.id === p), C = [z, U, ...$].filter(
                  Boolean
                ).map((P) => P.ref.current);
                Ev(C, c);
              }
            }
            w.current = !1;
          }),
          onBlur: fe(e.onBlur, () => y(!1))
        }
      )
    }
  );
}), Dv = "RovingFocusGroupItem", Tv = M.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: r = !0,
      active: s = !1,
      tabStopId: i,
      children: o,
      ...a
    } = e, l = wr(), u = i || l, c = Q$(Dv, n), d = c.currentTabStopId === u, f = Lv(n), { onFocusableItemAdd: m, onFocusableItemRemove: _, currentTabStopId: p } = c;
    return M.useEffect(() => {
      if (r)
        return m(), () => _();
    }, [r, m, _]), /* @__PURE__ */ g.jsx(
      au.ItemSlot,
      {
        scope: n,
        id: u,
        focusable: r,
        active: s,
        children: /* @__PURE__ */ g.jsx(
          We.span,
          {
            tabIndex: d ? 0 : -1,
            "data-orientation": c.orientation,
            ...a,
            ref: t,
            onMouseDown: fe(e.onMouseDown, (v) => {
              r ? c.onItemFocus(u) : v.preventDefault();
            }),
            onFocus: fe(e.onFocus, () => c.onItemFocus(u)),
            onKeyDown: fe(e.onKeyDown, (v) => {
              if (v.key === "Tab" && v.shiftKey) {
                c.onItemShiftTab();
                return;
              }
              if (v.target !== v.currentTarget) return;
              const h = rH(v, c.orientation, c.dir);
              if (h !== void 0) {
                if (v.metaKey || v.ctrlKey || v.altKey || v.shiftKey) return;
                v.preventDefault();
                let b = f().filter((x) => x.focusable).map((x) => x.ref.current);
                if (h === "last") b.reverse();
                else if (h === "prev" || h === "next") {
                  h === "prev" && b.reverse();
                  const x = b.indexOf(v.currentTarget);
                  b = c.loop ? oH(b, x + 1) : b.slice(x + 1);
                }
                setTimeout(() => Ev(b));
              }
            }),
            children: typeof o == "function" ? o({ isCurrentTabStop: d, hasTabStop: p != null }) : o
          }
        )
      }
    );
  }
);
Tv.displayName = Dv;
var tH = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function nH(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function rH(e, t, n) {
  const r = nH(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return tH[r];
}
function Ev(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function oH(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var sH = kv, iH = Tv, aH = function(e) {
  if (typeof document == "undefined")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, pn = /* @__PURE__ */ new WeakMap(), qr = /* @__PURE__ */ new WeakMap(), Zr = {}, cl = 0, jv = function(e) {
  return e && (e.host || jv(e.parentNode));
}, lH = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = jv(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, uH = function(e, t, n, r) {
  var s = lH(t, Array.isArray(e) ? e : [e]);
  Zr[n] || (Zr[n] = /* @__PURE__ */ new WeakMap());
  var i = Zr[n], o = [], a = /* @__PURE__ */ new Set(), l = new Set(s), u = function(d) {
    !d || a.has(d) || (a.add(d), u(d.parentNode));
  };
  s.forEach(u);
  var c = function(d) {
    !d || l.has(d) || Array.prototype.forEach.call(d.children, function(f) {
      if (a.has(f))
        c(f);
      else
        try {
          var m = f.getAttribute(r), _ = m !== null && m !== "false", p = (pn.get(f) || 0) + 1, v = (i.get(f) || 0) + 1;
          pn.set(f, p), i.set(f, v), o.push(f), p === 1 && _ && qr.set(f, !0), v === 1 && f.setAttribute(n, "true"), _ || f.setAttribute(r, "true");
        } catch (h) {
          console.error("aria-hidden: cannot operate on ", f, h);
        }
    });
  };
  return c(t), a.clear(), cl++, function() {
    o.forEach(function(d) {
      var f = pn.get(d) - 1, m = i.get(d) - 1;
      pn.set(d, f), i.set(d, m), f || (qr.has(d) || d.removeAttribute(r), qr.delete(d)), m || d.removeAttribute(n);
    }), cl--, cl || (pn = /* @__PURE__ */ new WeakMap(), pn = /* @__PURE__ */ new WeakMap(), qr = /* @__PURE__ */ new WeakMap(), Zr = {});
  };
}, cH = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), s = aH(e);
  return s ? (r.push.apply(r, Array.from(s.querySelectorAll("[aria-live], script"))), uH(r, s, n, "aria-hidden")) : function() {
    return null;
  };
}, mt = function() {
  return mt = Object.assign || function(t) {
    for (var n, r = 1, s = arguments.length; r < s; r++) {
      n = arguments[r];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, mt.apply(this, arguments);
};
function Av(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, r = Object.getOwnPropertySymbols(e); s < r.length; s++)
      t.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[s]) && (n[r[s]] = e[r[s]]);
  return n;
}
function dH(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, s = t.length, i; r < s; r++)
    (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var co = "right-scroll-bar-position", fo = "width-before-scroll-bar", fH = "with-scroll-bars-hidden", mH = "--removed-body-scroll-bar-size";
function dl(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function pH(e, t) {
  var n = ne(function() {
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
var _H = typeof window != "undefined" ? M.useLayoutEffect : M.useEffect, dm = /* @__PURE__ */ new WeakMap();
function hH(e, t) {
  var n = pH(null, function(r) {
    return e.forEach(function(s) {
      return dl(s, r);
    });
  });
  return _H(function() {
    var r = dm.get(n);
    if (r) {
      var s = new Set(r), i = new Set(e), o = n.current;
      s.forEach(function(a) {
        i.has(a) || dl(a, null);
      }), i.forEach(function(a) {
        s.has(a) || dl(a, o);
      });
    }
    dm.set(n, e);
  }, [e]), n;
}
function vH(e) {
  return e;
}
function gH(e, t) {
  t === void 0 && (t = vH);
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
function yH(e) {
  e === void 0 && (e = {});
  var t = gH(null);
  return t.options = mt({ async: !0, ssr: !1 }, e), t;
}
var Pv = function(e) {
  var t = e.sideCar, n = Av(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return M.createElement(r, mt({}, n));
};
Pv.isSideCarExport = !0;
function MH(e, t) {
  return e.useMedium(t), Pv;
}
var Cv = yH(), fl = function() {
}, Da = M.forwardRef(function(e, t) {
  var n = M.useRef(null), r = M.useState({
    onScrollCapture: fl,
    onWheelCapture: fl,
    onTouchMoveCapture: fl
  }), s = r[0], i = r[1], o = e.forwardProps, a = e.children, l = e.className, u = e.removeScrollBar, c = e.enabled, d = e.shards, f = e.sideCar, m = e.noRelative, _ = e.noIsolation, p = e.inert, v = e.allowPinchZoom, h = e.as, y = h === void 0 ? "div" : h, b = e.gapMode, x = Av(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), w = f, k = hH([n, t]), j = mt(mt({}, x), s);
  return M.createElement(
    M.Fragment,
    null,
    c && M.createElement(w, { sideCar: Cv, removeScrollBar: u, shards: d, noRelative: m, noIsolation: _, inert: p, setCallbacks: i, allowPinchZoom: !!v, lockRef: n, gapMode: b }),
    o ? M.cloneElement(M.Children.only(a), mt(mt({}, j), { ref: k })) : M.createElement(y, mt({}, j, { className: l, ref: k }), a)
  );
});
Da.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Da.classNames = {
  fullWidth: fo,
  zeroRight: co
};
var bH = function() {
  if (typeof __webpack_nonce__ != "undefined")
    return __webpack_nonce__;
};
function xH() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = bH();
  return t && e.setAttribute("nonce", t), e;
}
function wH(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function YH(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var LH = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = xH()) && (wH(t, n), YH(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, SH = function() {
  var e = LH();
  return function(t, n) {
    M.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, $v = function() {
  var e = SH(), t = function(n) {
    var r = n.styles, s = n.dynamic;
    return e(r, s), null;
  };
  return t;
}, kH = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, ml = function(e) {
  return parseInt(e || "", 10) || 0;
}, DH = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], s = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [ml(n), ml(r), ml(s)];
}, TH = function(e) {
  if (e === void 0 && (e = "margin"), typeof window == "undefined")
    return kH;
  var t = DH(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, EH = $v(), Tn = "data-scroll-locked", jH = function(e, t, n, r) {
  var s = e.left, i = e.top, o = e.right, a = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(fH, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(a, "px ").concat(r, `;
  }
  body[`).concat(Tn, `] {
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
  
  .`).concat(co, ` {
    right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(fo, ` {
    margin-right: `).concat(a, "px ").concat(r, `;
  }
  
  .`).concat(co, " .").concat(co, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(fo, " .").concat(fo, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(Tn, `] {
    `).concat(mH, ": ").concat(a, `px;
  }
`);
}, fm = function() {
  var e = parseInt(document.body.getAttribute(Tn) || "0", 10);
  return isFinite(e) ? e : 0;
}, AH = function() {
  M.useEffect(function() {
    return document.body.setAttribute(Tn, (fm() + 1).toString()), function() {
      var e = fm() - 1;
      e <= 0 ? document.body.removeAttribute(Tn) : document.body.setAttribute(Tn, e.toString());
    };
  }, []);
}, PH = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, s = r === void 0 ? "margin" : r;
  AH();
  var i = M.useMemo(function() {
    return TH(s);
  }, [s]);
  return M.createElement(EH, { styles: jH(i, !t, s, n ? "" : "!important") });
}, lu = !1;
if (typeof window != "undefined")
  try {
    var Qr = Object.defineProperty({}, "passive", {
      get: function() {
        return lu = !0, !0;
      }
    });
    window.addEventListener("test", Qr, Qr), window.removeEventListener("test", Qr, Qr);
  } catch {
    lu = !1;
  }
var _n = lu ? { passive: !1 } : !1, CH = function(e) {
  return e.tagName === "TEXTAREA";
}, Hv = function(e, t) {
  if (!(e instanceof Element))
    return !1;
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !CH(e) && n[t] === "visible")
  );
}, $H = function(e) {
  return Hv(e, "overflowY");
}, HH = function(e) {
  return Hv(e, "overflowX");
}, mm = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot != "undefined" && r instanceof ShadowRoot && (r = r.host);
    var s = Rv(e, r);
    if (s) {
      var i = Ov(e, r), o = i[1], a = i[2];
      if (o > a)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, RH = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, OH = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Rv = function(e, t) {
  return e === "v" ? $H(t) : HH(t);
}, Ov = function(e, t) {
  return e === "v" ? RH(t) : OH(t);
}, NH = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, FH = function(e, t, n, r, s) {
  var i = NH(e, window.getComputedStyle(t).direction), o = i * r, a = n.target, l = t.contains(a), u = !1, c = o > 0, d = 0, f = 0;
  do {
    if (!a)
      break;
    var m = Ov(e, a), _ = m[0], p = m[1], v = m[2], h = p - v - i * _;
    (_ || h) && Rv(e, a) && (d += h, f += _);
    var y = a.parentNode;
    a = y && y.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? y.host : y;
  } while (
    // portaled content
    !l && a !== document.body || // self content
    l && (t.contains(a) || t === a)
  );
  return (c && Math.abs(d) < 1 || !c && Math.abs(f) < 1) && (u = !0), u;
}, eo = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, pm = function(e) {
  return [e.deltaX, e.deltaY];
}, _m = function(e) {
  return e && "current" in e ? e.current : e;
}, IH = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, VH = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, BH = 0, hn = [];
function zH(e) {
  var t = M.useRef([]), n = M.useRef([0, 0]), r = M.useRef(), s = M.useState(BH++)[0], i = M.useState($v)[0], o = M.useRef(e);
  M.useEffect(function() {
    o.current = e;
  }, [e]), M.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(s));
      var p = dH([e.lockRef.current], (e.shards || []).map(_m), !0).filter(Boolean);
      return p.forEach(function(v) {
        return v.classList.add("allow-interactivity-".concat(s));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(s)), p.forEach(function(v) {
          return v.classList.remove("allow-interactivity-".concat(s));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var a = M.useCallback(function(p, v) {
    if ("touches" in p && p.touches.length === 2 || p.type === "wheel" && p.ctrlKey)
      return !o.current.allowPinchZoom;
    var h = eo(p), y = n.current, b = "deltaX" in p ? p.deltaX : y[0] - h[0], x = "deltaY" in p ? p.deltaY : y[1] - h[1], w, k = p.target, j = Math.abs(b) > Math.abs(x) ? "h" : "v";
    if ("touches" in p && j === "h" && k.type === "range")
      return !1;
    var L = mm(j, k);
    if (!L)
      return !0;
    if (L ? w = j : (w = j === "v" ? "h" : "v", L = mm(j, k)), !L)
      return !1;
    if (!r.current && "changedTouches" in p && (b || x) && (r.current = w), !w)
      return !0;
    var F = r.current || w;
    return FH(F, v, p, F === "h" ? b : x);
  }, []), l = M.useCallback(function(p) {
    var v = p;
    if (!(!hn.length || hn[hn.length - 1] !== i)) {
      var h = "deltaY" in v ? pm(v) : eo(v), y = t.current.filter(function(w) {
        return w.name === v.type && (w.target === v.target || v.target === w.shadowParent) && IH(w.delta, h);
      })[0];
      if (y && y.should) {
        v.cancelable && v.preventDefault();
        return;
      }
      if (!y) {
        var b = (o.current.shards || []).map(_m).filter(Boolean).filter(function(w) {
          return w.contains(v.target);
        }), x = b.length > 0 ? a(v, b[0]) : !o.current.noIsolation;
        x && v.cancelable && v.preventDefault();
      }
    }
  }, []), u = M.useCallback(function(p, v, h, y) {
    var b = { name: p, delta: v, target: h, should: y, shadowParent: WH(h) };
    t.current.push(b), setTimeout(function() {
      t.current = t.current.filter(function(x) {
        return x !== b;
      });
    }, 1);
  }, []), c = M.useCallback(function(p) {
    n.current = eo(p), r.current = void 0;
  }, []), d = M.useCallback(function(p) {
    u(p.type, pm(p), p.target, a(p, e.lockRef.current));
  }, []), f = M.useCallback(function(p) {
    u(p.type, eo(p), p.target, a(p, e.lockRef.current));
  }, []);
  M.useEffect(function() {
    return hn.push(i), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: f
    }), document.addEventListener("wheel", l, _n), document.addEventListener("touchmove", l, _n), document.addEventListener("touchstart", c, _n), function() {
      hn = hn.filter(function(p) {
        return p !== i;
      }), document.removeEventListener("wheel", l, _n), document.removeEventListener("touchmove", l, _n), document.removeEventListener("touchstart", c, _n);
    };
  }, []);
  var m = e.removeScrollBar, _ = e.inert;
  return M.createElement(
    M.Fragment,
    null,
    _ ? M.createElement(i, { styles: VH(s) }) : null,
    m ? M.createElement(PH, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
  );
}
function WH(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const UH = MH(Cv, zH);
var Nv = M.forwardRef(function(e, t) {
  return M.createElement(Da, mt({}, e, { ref: t, sideCar: UH }));
});
Nv.classNames = Da.classNames;
var uu = ["Enter", " "], KH = ["ArrowDown", "PageUp", "Home"], Fv = ["ArrowUp", "PageDown", "End"], GH = [...KH, ...Fv], JH = {
  ltr: [...uu, "ArrowRight"],
  rtl: [...uu, "ArrowLeft"]
}, XH = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, Rr = "Menu", [Yr, qH, ZH] = sv(Rr), [mn, Iv] = Cr(Rr, [
  ZH,
  pv,
  Sv
]), Or = pv(), Vv = Sv(), [Bv, Xt] = mn(Rr), [QH, Nr] = mn(Rr), zv = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: s, onOpenChange: i, modal: o = !0 } = e, a = Or(t), [l, u] = M.useState(null), c = M.useRef(!1), d = Mt(i), f = iv(s);
  return M.useEffect(() => {
    const m = () => {
      c.current = !0, document.addEventListener("pointerdown", _, { capture: !0, once: !0 }), document.addEventListener("pointermove", _, { capture: !0, once: !0 });
    }, _ = () => c.current = !1;
    return document.addEventListener("keydown", m, { capture: !0 }), () => {
      document.removeEventListener("keydown", m, { capture: !0 }), document.removeEventListener("pointerdown", _, { capture: !0 }), document.removeEventListener("pointermove", _, { capture: !0 });
    };
  }, []), /* @__PURE__ */ g.jsx(wv, { ...a, children: /* @__PURE__ */ g.jsx(
    Bv,
    {
      scope: t,
      open: n,
      onOpenChange: d,
      content: l,
      onContentChange: u,
      children: /* @__PURE__ */ g.jsx(
        QH,
        {
          scope: t,
          onClose: M.useCallback(() => d(!1), [d]),
          isUsingKeyboardRef: c,
          dir: f,
          modal: o,
          children: r
        }
      )
    }
  ) });
};
zv.displayName = Rr;
var eR = "MenuAnchor", Oc = M.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, s = Or(n);
    return /* @__PURE__ */ g.jsx(V$, { ...s, ...r, ref: t });
  }
);
Oc.displayName = eR;
var Nc = "MenuPortal", [tR, Wv] = mn(Nc, {
  forceMount: void 0
}), Uv = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: s } = e, i = Xt(Nc, t);
  return /* @__PURE__ */ g.jsx(tR, { scope: t, forceMount: n, children: /* @__PURE__ */ g.jsx($r, { present: n || i.open, children: /* @__PURE__ */ g.jsx(Yv, { asChild: !0, container: s, children: r }) }) });
};
Uv.displayName = Nc;
var ot = "MenuContent", [nR, Fc] = mn(ot), Kv = M.forwardRef(
  (e, t) => {
    const n = Wv(ot, e.__scopeMenu), { forceMount: r = n.forceMount, ...s } = e, i = Xt(ot, e.__scopeMenu), o = Nr(ot, e.__scopeMenu);
    return /* @__PURE__ */ g.jsx(Yr.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ g.jsx($r, { present: r || i.open, children: /* @__PURE__ */ g.jsx(Yr.Slot, { scope: e.__scopeMenu, children: o.modal ? /* @__PURE__ */ g.jsx(rR, { ...s, ref: t }) : /* @__PURE__ */ g.jsx(oR, { ...s, ref: t }) }) }) });
  }
), rR = M.forwardRef(
  (e, t) => {
    const n = Xt(ot, e.__scopeMenu), r = M.useRef(null), s = Ke(t, r);
    return M.useEffect(() => {
      const i = r.current;
      if (i) return cH(i);
    }, []), /* @__PURE__ */ g.jsx(
      Ic,
      {
        ...e,
        ref: s,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        disableOutsideScroll: !0,
        onFocusOutside: fe(
          e.onFocusOutside,
          (i) => i.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => n.onOpenChange(!1)
      }
    );
  }
), oR = M.forwardRef((e, t) => {
  const n = Xt(ot, e.__scopeMenu);
  return /* @__PURE__ */ g.jsx(
    Ic,
    {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1)
    }
  );
}), sR = /* @__PURE__ */ Qi("MenuContent.ScrollLock"), Ic = M.forwardRef(
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
      disableOutsideScroll: _,
      ...p
    } = e, v = Xt(ot, n), h = Nr(ot, n), y = Or(n), b = Vv(n), x = qH(n), [w, k] = M.useState(null), j = M.useRef(null), L = Ke(t, j, v.onContentChange), F = M.useRef(0), S = M.useRef(""), $ = M.useRef(0), z = M.useRef(null), U = M.useRef("right"), N = M.useRef(0), C = _ ? Nv : M.Fragment, P = _ ? { as: sR, allowPinchZoom: !0 } : void 0, R = (A) => {
      var W, ce;
      const V = S.current + A, T = x().filter((ae) => !ae.disabled), B = document.activeElement, I = (W = T.find((ae) => ae.ref.current === B)) == null ? void 0 : W.textValue, G = T.map((ae) => ae.textValue), ie = vR(G, V, I), J = (ce = T.find((ae) => ae.textValue === ie)) == null ? void 0 : ce.ref.current;
      (function ae(de) {
        S.current = de, window.clearTimeout(F.current), de !== "" && (F.current = window.setTimeout(() => ae(""), 1e3));
      })(V), J && setTimeout(() => J.focus());
    };
    M.useEffect(() => () => window.clearTimeout(F.current), []), w$();
    const Y = M.useCallback((A) => {
      var T, B;
      return U.current === ((T = z.current) == null ? void 0 : T.side) && yR(A, (B = z.current) == null ? void 0 : B.area);
    }, []);
    return /* @__PURE__ */ g.jsx(
      nR,
      {
        scope: n,
        searchRef: S,
        onItemEnter: M.useCallback(
          (A) => {
            Y(A) && A.preventDefault();
          },
          [Y]
        ),
        onItemLeave: M.useCallback(
          (A) => {
            var V;
            Y(A) || ((V = j.current) == null || V.focus(), k(null));
          },
          [Y]
        ),
        onTriggerLeave: M.useCallback(
          (A) => {
            Y(A) && A.preventDefault();
          },
          [Y]
        ),
        pointerGraceTimerRef: $,
        onPointerGraceIntentChange: M.useCallback((A) => {
          z.current = A;
        }, []),
        children: /* @__PURE__ */ g.jsx(C, { ...P, children: /* @__PURE__ */ g.jsx(
          cv,
          {
            asChild: !0,
            trapped: s,
            onMountAutoFocus: fe(i, (A) => {
              var V;
              A.preventDefault(), (V = j.current) == null || V.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: o,
            children: /* @__PURE__ */ g.jsx(
              lv,
              {
                asChild: !0,
                disableOutsidePointerEvents: a,
                onEscapeKeyDown: u,
                onPointerDownOutside: c,
                onFocusOutside: d,
                onInteractOutside: f,
                onDismiss: m,
                children: /* @__PURE__ */ g.jsx(
                  sH,
                  {
                    asChild: !0,
                    ...b,
                    dir: h.dir,
                    orientation: "vertical",
                    loop: r,
                    currentTabStopId: w,
                    onCurrentTabStopIdChange: k,
                    onEntryFocus: fe(l, (A) => {
                      h.isUsingKeyboardRef.current || A.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ g.jsx(
                      B$,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": cg(v.open),
                        "data-radix-menu-content": "",
                        dir: h.dir,
                        ...y,
                        ...p,
                        ref: L,
                        style: { outline: "none", ...p.style },
                        onKeyDown: fe(p.onKeyDown, (A) => {
                          const T = A.target.closest("[data-radix-menu-content]") === A.currentTarget, B = A.ctrlKey || A.altKey || A.metaKey, I = A.key.length === 1;
                          T && (A.key === "Tab" && A.preventDefault(), !B && I && R(A.key));
                          const G = j.current;
                          if (A.target !== G || !GH.includes(A.key)) return;
                          A.preventDefault();
                          const J = x().filter((W) => !W.disabled).map((W) => W.ref.current);
                          Fv.includes(A.key) && J.reverse(), _R(J);
                        }),
                        onBlur: fe(e.onBlur, (A) => {
                          A.currentTarget.contains(A.target) || (window.clearTimeout(F.current), S.current = "");
                        }),
                        onPointerMove: fe(
                          e.onPointerMove,
                          Lr((A) => {
                            const V = A.target, T = N.current !== A.clientX;
                            if (A.currentTarget.contains(V) && T) {
                              const B = A.clientX > N.current ? "right" : "left";
                              U.current = B, N.current = A.clientX;
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
Kv.displayName = ot;
var iR = "MenuGroup", Vc = M.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ g.jsx(We.div, { role: "group", ...r, ref: t });
  }
);
Vc.displayName = iR;
var aR = "MenuLabel", Gv = M.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ g.jsx(We.div, { ...r, ref: t });
  }
);
Gv.displayName = aR;
var ea = "MenuItem", hm = "menu.itemSelect", Ta = M.forwardRef(
  (e, t) => {
    const { disabled: n = !1, onSelect: r, ...s } = e, i = M.useRef(null), o = Nr(ea, e.__scopeMenu), a = Fc(ea, e.__scopeMenu), l = Ke(t, i), u = M.useRef(!1), c = () => {
      const d = i.current;
      if (!n && d) {
        const f = new CustomEvent(hm, { bubbles: !0, cancelable: !0 });
        d.addEventListener(hm, (m) => r == null ? void 0 : r(m), { once: !0 }), ov(d, f), f.defaultPrevented ? u.current = !1 : o.onClose();
      }
    };
    return /* @__PURE__ */ g.jsx(
      Jv,
      {
        ...s,
        ref: l,
        disabled: n,
        onClick: fe(e.onClick, c),
        onPointerDown: (d) => {
          var f;
          (f = e.onPointerDown) == null || f.call(e, d), u.current = !0;
        },
        onPointerUp: fe(e.onPointerUp, (d) => {
          var f;
          u.current || (f = d.currentTarget) == null || f.click();
        }),
        onKeyDown: fe(e.onKeyDown, (d) => {
          const f = a.searchRef.current !== "";
          n || f && d.key === " " || uu.includes(d.key) && (d.currentTarget.click(), d.preventDefault());
        })
      }
    );
  }
);
Ta.displayName = ea;
var Jv = M.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, disabled: r = !1, textValue: s, ...i } = e, o = Fc(ea, n), a = Vv(n), l = M.useRef(null), u = Ke(t, l), [c, d] = M.useState(!1), [f, m] = M.useState("");
    return M.useEffect(() => {
      var p;
      const _ = l.current;
      _ && m(((p = _.textContent) != null ? p : "").trim());
    }, [i.children]), /* @__PURE__ */ g.jsx(
      Yr.ItemSlot,
      {
        scope: n,
        disabled: r,
        textValue: s != null ? s : f,
        children: /* @__PURE__ */ g.jsx(iH, { asChild: !0, ...a, focusable: !r, children: /* @__PURE__ */ g.jsx(
          We.div,
          {
            role: "menuitem",
            "data-highlighted": c ? "" : void 0,
            "aria-disabled": r || void 0,
            "data-disabled": r ? "" : void 0,
            ...i,
            ref: u,
            onPointerMove: fe(
              e.onPointerMove,
              Lr((_) => {
                r ? o.onItemLeave(_) : (o.onItemEnter(_), _.defaultPrevented || _.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: fe(
              e.onPointerLeave,
              Lr((_) => o.onItemLeave(_))
            ),
            onFocus: fe(e.onFocus, () => d(!0)),
            onBlur: fe(e.onBlur, () => d(!1))
          }
        ) })
      }
    );
  }
), lR = "MenuCheckboxItem", Xv = M.forwardRef(
  (e, t) => {
    const { checked: n = !1, onCheckedChange: r, ...s } = e;
    return /* @__PURE__ */ g.jsx(tg, { scope: e.__scopeMenu, checked: n, children: /* @__PURE__ */ g.jsx(
      Ta,
      {
        role: "menuitemcheckbox",
        "aria-checked": ta(n) ? "mixed" : n,
        ...s,
        ref: t,
        "data-state": Wc(n),
        onSelect: fe(
          s.onSelect,
          () => r == null ? void 0 : r(ta(n) ? !0 : !n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Xv.displayName = lR;
var qv = "MenuRadioGroup", [uR, cR] = mn(
  qv,
  { value: void 0, onValueChange: () => {
  } }
), Zv = M.forwardRef(
  (e, t) => {
    const { value: n, onValueChange: r, ...s } = e, i = Mt(r);
    return /* @__PURE__ */ g.jsx(uR, { scope: e.__scopeMenu, value: n, onValueChange: i, children: /* @__PURE__ */ g.jsx(Vc, { ...s, ref: t }) });
  }
);
Zv.displayName = qv;
var Qv = "MenuRadioItem", eg = M.forwardRef(
  (e, t) => {
    const { value: n, ...r } = e, s = cR(Qv, e.__scopeMenu), i = n === s.value;
    return /* @__PURE__ */ g.jsx(tg, { scope: e.__scopeMenu, checked: i, children: /* @__PURE__ */ g.jsx(
      Ta,
      {
        role: "menuitemradio",
        "aria-checked": i,
        ...r,
        ref: t,
        "data-state": Wc(i),
        onSelect: fe(
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
eg.displayName = Qv;
var Bc = "MenuItemIndicator", [tg, dR] = mn(
  Bc,
  { checked: !1 }
), ng = M.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, forceMount: r, ...s } = e, i = dR(Bc, n);
    return /* @__PURE__ */ g.jsx(
      $r,
      {
        present: r || ta(i.checked) || i.checked === !0,
        children: /* @__PURE__ */ g.jsx(
          We.span,
          {
            ...s,
            ref: t,
            "data-state": Wc(i.checked)
          }
        )
      }
    );
  }
);
ng.displayName = Bc;
var fR = "MenuSeparator", rg = M.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ g.jsx(
      We.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...r,
        ref: t
      }
    );
  }
);
rg.displayName = fR;
var mR = "MenuArrow", og = M.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, s = Or(n);
    return /* @__PURE__ */ g.jsx(z$, { ...s, ...r, ref: t });
  }
);
og.displayName = mR;
var zc = "MenuSub", [pR, sg] = mn(zc), ig = (e) => {
  const { __scopeMenu: t, children: n, open: r = !1, onOpenChange: s } = e, i = Xt(zc, t), o = Or(t), [a, l] = M.useState(null), [u, c] = M.useState(null), d = Mt(s);
  return M.useEffect(() => (i.open === !1 && d(!1), () => d(!1)), [i.open, d]), /* @__PURE__ */ g.jsx(wv, { ...o, children: /* @__PURE__ */ g.jsx(
    Bv,
    {
      scope: t,
      open: r,
      onOpenChange: d,
      content: u,
      onContentChange: c,
      children: /* @__PURE__ */ g.jsx(
        pR,
        {
          scope: t,
          contentId: wr(),
          triggerId: wr(),
          trigger: a,
          onTriggerChange: l,
          children: n
        }
      )
    }
  ) });
};
ig.displayName = zc;
var nr = "MenuSubTrigger", ag = M.forwardRef(
  (e, t) => {
    const n = Xt(nr, e.__scopeMenu), r = Nr(nr, e.__scopeMenu), s = sg(nr, e.__scopeMenu), i = Fc(nr, e.__scopeMenu), o = M.useRef(null), { pointerGraceTimerRef: a, onPointerGraceIntentChange: l } = i, u = { __scopeMenu: e.__scopeMenu }, c = M.useCallback(() => {
      o.current && window.clearTimeout(o.current), o.current = null;
    }, []);
    return M.useEffect(() => c, [c]), M.useEffect(() => {
      const d = a.current;
      return () => {
        window.clearTimeout(d), l(null);
      };
    }, [a, l]), /* @__PURE__ */ g.jsx(Oc, { asChild: !0, ...u, children: /* @__PURE__ */ g.jsx(
      Jv,
      {
        id: s.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": n.open,
        "aria-controls": s.contentId,
        "data-state": cg(n.open),
        ...e,
        ref: ka(t, s.onTriggerChange),
        onClick: (d) => {
          var f;
          (f = e.onClick) == null || f.call(e, d), !(e.disabled || d.defaultPrevented) && (d.currentTarget.focus(), n.open || n.onOpenChange(!0));
        },
        onPointerMove: fe(
          e.onPointerMove,
          Lr((d) => {
            i.onItemEnter(d), !d.defaultPrevented && !e.disabled && !n.open && !o.current && (i.onPointerGraceIntentChange(null), o.current = window.setTimeout(() => {
              n.onOpenChange(!0), c();
            }, 100));
          })
        ),
        onPointerLeave: fe(
          e.onPointerLeave,
          Lr((d) => {
            var m, _;
            c();
            const f = (m = n.content) == null ? void 0 : m.getBoundingClientRect();
            if (f) {
              const p = (_ = n.content) == null ? void 0 : _.dataset.side, v = p === "right", h = v ? -5 : 5, y = f[v ? "left" : "right"], b = f[v ? "right" : "left"];
              i.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: d.clientX + h, y: d.clientY },
                  { x: y, y: f.top },
                  { x: b, y: f.top },
                  { x: b, y: f.bottom },
                  { x: y, y: f.bottom }
                ],
                side: p
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
        onKeyDown: fe(e.onKeyDown, (d) => {
          var m;
          const f = i.searchRef.current !== "";
          e.disabled || f && d.key === " " || JH[r.dir].includes(d.key) && (n.onOpenChange(!0), (m = n.content) == null || m.focus(), d.preventDefault());
        })
      }
    ) });
  }
);
ag.displayName = nr;
var lg = "MenuSubContent", ug = M.forwardRef(
  (e, t) => {
    const n = Wv(ot, e.__scopeMenu), { forceMount: r = n.forceMount, ...s } = e, i = Xt(ot, e.__scopeMenu), o = Nr(ot, e.__scopeMenu), a = sg(lg, e.__scopeMenu), l = M.useRef(null), u = Ke(t, l);
    return /* @__PURE__ */ g.jsx(Yr.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ g.jsx($r, { present: r || i.open, children: /* @__PURE__ */ g.jsx(Yr.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ g.jsx(
      Ic,
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
        onFocusOutside: fe(e.onFocusOutside, (c) => {
          c.target !== a.trigger && i.onOpenChange(!1);
        }),
        onEscapeKeyDown: fe(e.onEscapeKeyDown, (c) => {
          o.onClose(), c.preventDefault();
        }),
        onKeyDown: fe(e.onKeyDown, (c) => {
          var m;
          const d = c.currentTarget.contains(c.target), f = XH[o.dir].includes(c.key);
          d && f && (i.onOpenChange(!1), (m = a.trigger) == null || m.focus(), c.preventDefault());
        })
      }
    ) }) }) });
  }
);
ug.displayName = lg;
function cg(e) {
  return e ? "open" : "closed";
}
function ta(e) {
  return e === "indeterminate";
}
function Wc(e) {
  return ta(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function _R(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function hR(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function vR(e, t, n) {
  const s = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1;
  let o = hR(e, Math.max(i, 0));
  s.length === 1 && (o = o.filter((u) => u !== n));
  const l = o.find(
    (u) => u.toLowerCase().startsWith(s.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function gR(e, t) {
  const { x: n, y: r } = e;
  let s = !1;
  for (let i = 0, o = t.length - 1; i < t.length; o = i++) {
    const a = t[i], l = t[o], u = a.x, c = a.y, d = l.x, f = l.y;
    c > r != f > r && n < (d - u) * (r - c) / (f - c) + u && (s = !s);
  }
  return s;
}
function yR(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return gR(n, t);
}
function Lr(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var MR = zv, bR = Oc, xR = Uv, wR = Kv, YR = Vc, LR = Gv, SR = Ta, kR = Xv, DR = Zv, TR = eg, ER = ng, jR = rg, AR = og, PR = ig, CR = ag, $R = ug, Ea = "DropdownMenu", [HR] = Cr(
  Ea,
  [Iv]
), Fe = Iv(), [RR, dg] = HR(Ea), fg = (e) => {
  const {
    __scopeDropdownMenu: t,
    children: n,
    dir: r,
    open: s,
    defaultOpen: i,
    onOpenChange: o,
    modal: a = !0
  } = e, l = Fe(t), u = M.useRef(null), [c, d] = $c({
    prop: s,
    defaultProp: i != null ? i : !1,
    onChange: o,
    caller: Ea
  });
  return /* @__PURE__ */ g.jsx(
    RR,
    {
      scope: t,
      triggerId: wr(),
      triggerRef: u,
      contentId: wr(),
      open: c,
      onOpenChange: d,
      onOpenToggle: M.useCallback(() => d((f) => !f), [d]),
      modal: a,
      children: /* @__PURE__ */ g.jsx(MR, { ...l, open: c, onOpenChange: d, dir: r, modal: a, children: n })
    }
  );
};
fg.displayName = Ea;
var mg = "DropdownMenuTrigger", pg = M.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, disabled: r = !1, ...s } = e, i = dg(mg, n), o = Fe(n);
    return /* @__PURE__ */ g.jsx(bR, { asChild: !0, ...o, children: /* @__PURE__ */ g.jsx(
      We.button,
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
        ref: ka(t, i.triggerRef),
        onPointerDown: fe(e.onPointerDown, (a) => {
          !r && a.button === 0 && a.ctrlKey === !1 && (i.onOpenToggle(), i.open || a.preventDefault());
        }),
        onKeyDown: fe(e.onKeyDown, (a) => {
          r || (["Enter", " "].includes(a.key) && i.onOpenToggle(), a.key === "ArrowDown" && i.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(a.key) && a.preventDefault());
        })
      }
    ) });
  }
);
pg.displayName = mg;
var OR = "DropdownMenuPortal", _g = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = Fe(t);
  return /* @__PURE__ */ g.jsx(xR, { ...r, ...n });
};
_g.displayName = OR;
var hg = "DropdownMenuContent", vg = M.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, s = dg(hg, n), i = Fe(n), o = M.useRef(!1);
    return /* @__PURE__ */ g.jsx(
      wR,
      {
        id: s.contentId,
        "aria-labelledby": s.triggerId,
        ...i,
        ...r,
        ref: t,
        onCloseAutoFocus: fe(e.onCloseAutoFocus, (a) => {
          var l;
          o.current || (l = s.triggerRef.current) == null || l.focus(), o.current = !1, a.preventDefault();
        }),
        onInteractOutside: fe(e.onInteractOutside, (a) => {
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
vg.displayName = hg;
var NR = "DropdownMenuGroup", FR = M.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, s = Fe(n);
    return /* @__PURE__ */ g.jsx(YR, { ...s, ...r, ref: t });
  }
);
FR.displayName = NR;
var IR = "DropdownMenuLabel", VR = M.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, s = Fe(n);
    return /* @__PURE__ */ g.jsx(LR, { ...s, ...r, ref: t });
  }
);
VR.displayName = IR;
var BR = "DropdownMenuItem", gg = M.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, s = Fe(n);
    return /* @__PURE__ */ g.jsx(SR, { ...s, ...r, ref: t });
  }
);
gg.displayName = BR;
var zR = "DropdownMenuCheckboxItem", WR = M.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, s = Fe(n);
  return /* @__PURE__ */ g.jsx(kR, { ...s, ...r, ref: t });
});
WR.displayName = zR;
var UR = "DropdownMenuRadioGroup", KR = M.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, s = Fe(n);
  return /* @__PURE__ */ g.jsx(DR, { ...s, ...r, ref: t });
});
KR.displayName = UR;
var GR = "DropdownMenuRadioItem", JR = M.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, s = Fe(n);
  return /* @__PURE__ */ g.jsx(TR, { ...s, ...r, ref: t });
});
JR.displayName = GR;
var XR = "DropdownMenuItemIndicator", qR = M.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, s = Fe(n);
  return /* @__PURE__ */ g.jsx(ER, { ...s, ...r, ref: t });
});
qR.displayName = XR;
var ZR = "DropdownMenuSeparator", QR = M.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, s = Fe(n);
  return /* @__PURE__ */ g.jsx(jR, { ...s, ...r, ref: t });
});
QR.displayName = ZR;
var eO = "DropdownMenuArrow", tO = M.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, s = Fe(n);
    return /* @__PURE__ */ g.jsx(AR, { ...s, ...r, ref: t });
  }
);
tO.displayName = eO;
var nO = (e) => {
  const { __scopeDropdownMenu: t, children: n, open: r, onOpenChange: s, defaultOpen: i } = e, o = Fe(t), [a, l] = $c({
    prop: r,
    defaultProp: i != null ? i : !1,
    onChange: s,
    caller: "DropdownMenuSub"
  });
  return /* @__PURE__ */ g.jsx(PR, { ...o, open: a, onOpenChange: l, children: n });
}, rO = "DropdownMenuSubTrigger", yg = M.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, s = Fe(n);
  return /* @__PURE__ */ g.jsx(CR, { ...s, ...r, ref: t });
});
yg.displayName = rO;
var oO = "DropdownMenuSubContent", Mg = M.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, s = Fe(n);
  return /* @__PURE__ */ g.jsx(
    $R,
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
Mg.displayName = oO;
var sO = fg, iO = pg, vm = _g, aO = vg, lO = gg, uO = nO, cO = yg, dO = Mg;
const gm = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 }
}, x2 = ({
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
  const [u, c] = ne(!1), d = (f) => f.map(
    (m, _) => m.items ? /* @__PURE__ */ g.jsxs(uO, { children: [
      /* @__PURE__ */ g.jsxs(cO, { className: "py-[10px] px-[16px] hover:bg-light-4-tint w-full text-left truncate flex flex-row items-center justify-between cursor-pointer focus:outline-none data-[state=open]:bg-light-4-tint", children: [
        /* @__PURE__ */ g.jsx("span", { className: "block w-full truncate", title: m.name, children: m.name }),
        /* @__PURE__ */ g.jsx(
          Ik,
          {
            className: "h-5 w-5 text-dark group-hover:text-primary",
            "aria-hidden": "true"
          }
        )
      ] }),
      /* @__PURE__ */ g.jsx(vm, { children: /* @__PURE__ */ g.jsx(
        dO,
        {
          alignOffset: -10,
          sideOffset: -8,
          className: K(
            "z-10 overflow-auto max-h-[290px] rounded-md shadow-lg border-[1px] border-light-2",
            t
          ),
          children: /* @__PURE__ */ g.jsx(
            An.div,
            {
              className: "w-full bg-white rounded-md shadow-lg focus:outline-none",
              variants: gm,
              initial: "hidden",
              animate: "visible",
              children: d(m.items)
            }
          )
        }
      ) })
    ] }, _) : /* @__PURE__ */ g.jsx(
      lO,
      {
        className: "py-[10px] px-[16px] hover:bg-light-4-tint w-full text-left flex flex-row items-center justify-between cursor-pointer focus:outline-none",
        title: m.name,
        onClick: m.onClick,
        children: /* @__PURE__ */ g.jsxs("span", { className: "block w-full truncate", children: [
          " ",
          m.name
        ] })
      },
      _
    )
  );
  return /* @__PURE__ */ g.jsx("div", { className: K("relative text-left w-min", e), children: /* @__PURE__ */ g.jsxs(sO, { open: u, onOpenChange: c, children: [
    /* @__PURE__ */ g.jsx(iO, { asChild: !0, disabled: i || o, children: /* @__PURE__ */ g.jsx("div", { children: /* @__PURE__ */ g.jsxs(
      "button",
      {
        className: K(
          "group flex w-full whitespace-nowrap justify-center items-center gap-[5px] bg-light-3-tint border-[2px] border-light-3-tint text-[14px] rounded-[6px] font-semibold py-[8px] pl-[16px] pr-[8px] text-dark focus:outline-none transition-all",
          "hover:bg-white hover:border-primary",
          u && "!bg-white !border-primary",
          i && "!bg-light-3-tint !border-light-3-tint opacity-40",
          n
        ),
        disabled: i || o,
        children: [
          /* @__PURE__ */ g.jsx("span", { className: K(o && "invisible"), children: r }),
          !a && /* @__PURE__ */ g.jsx(
            ln,
            {
              className: K(
                "h-5 w-5 text-dark group-hover:text-primary transition-all",
                u && "text-primary",
                i && "!text-dark"
              ),
              "aria-hidden": "true"
            }
          ),
          o && /* @__PURE__ */ g.jsx(
            tv,
            {
              className: "absolute scale-[0.4] -translate-y-[7px]",
              innerClassName: "!text-dark"
            }
          )
        ]
      }
    ) }) }),
    /* @__PURE__ */ g.jsx(Fu, { children: u && /* @__PURE__ */ g.jsx(vm, { children: /* @__PURE__ */ g.jsx(
      aO,
      {
        className: K(
          "z-10 overflow-auto rounded-md",
          t
        ),
        sideOffset: 8,
        style: {
          minWidth: "var(--radix-dropdown-menu-trigger-width)"
        },
        align: l,
        children: /* @__PURE__ */ g.jsx(
          An.div,
          {
            className: "w-full bg-white rounded-md shadow-lg border-[1px] border-light-2 focus:outline-none",
            variants: gm,
            initial: "hidden",
            animate: "visible",
            children: d(s)
          }
        )
      }
    ) }) })
  ] }) });
}, fO = E.createContext({}), bg = !0;
function mO({ baseColor: e, highlightColor: t, width: n, height: r, borderRadius: s, circle: i, direction: o, duration: a, enableAnimation: l = bg, customHighlightBackground: u }) {
  const c = {};
  return o === "rtl" && (c["--animation-direction"] = "reverse"), typeof a == "number" && (c["--animation-duration"] = `${a}s`), l || (c["--pseudo-element-display"] = "none"), (typeof n == "string" || typeof n == "number") && (c.width = n), (typeof r == "string" || typeof r == "number") && (c.height = r), (typeof s == "string" || typeof s == "number") && (c.borderRadius = s), i && (c.borderRadius = "50%"), typeof e != "undefined" && (c["--base-color"] = e), typeof t != "undefined" && (c["--highlight-color"] = t), typeof u == "string" && (c["--custom-highlight-background"] = u), c;
}
function pl({ count: e = 1, wrapper: t, className: n, containerClassName: r, containerTestId: s, circle: i = !1, style: o, ...a }) {
  var l, u, c;
  const d = E.useContext(fO), f = { ...a };
  for (const [b, x] of Object.entries(a))
    typeof x == "undefined" && delete f[b];
  const m = {
    ...d,
    ...f,
    circle: i
  }, _ = {
    ...o,
    ...mO(m)
  };
  let p = "react-loading-skeleton";
  n && (p += ` ${n}`);
  const v = (l = m.inline) !== null && l !== void 0 ? l : !1, h = [], y = Math.ceil(e);
  for (let b = 0; b < y; b++) {
    let x = _;
    if (y > e && b === y - 1) {
      const k = (u = x.width) !== null && u !== void 0 ? u : "100%", j = e % 1, L = typeof k == "number" ? k * j : `calc(${k} * ${j})`;
      x = { ...x, width: L };
    }
    const w = E.createElement("span", { className: p, style: x, key: b }, "‌");
    v ? h.push(w) : h.push(E.createElement(
      E.Fragment,
      { key: b },
      w,
      E.createElement("br", null)
    ));
  }
  return E.createElement("span", { className: r, "data-testid": s, "aria-live": "polite", "aria-busy": (c = m.enableAnimation) !== null && c !== void 0 ? c : bg }, t ? h.map((b, x) => E.createElement(t, { key: x }, b)) : h);
}
const Uc = "-", pO = (e) => {
  const t = hO(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  return {
    getClassGroupId: (o) => {
      const a = o.split(Uc);
      return a[0] === "" && a.length !== 1 && a.shift(), xg(a, t) || _O(o);
    },
    getConflictingClassGroupIds: (o, a) => {
      const l = n[o] || [];
      return a && r[o] ? [...l, ...r[o]] : l;
    }
  };
}, xg = (e, t) => {
  var o;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), s = r ? xg(e.slice(1), r) : void 0;
  if (s)
    return s;
  if (t.validators.length === 0)
    return;
  const i = e.join(Uc);
  return (o = t.validators.find(({
    validator: a
  }) => a(i))) == null ? void 0 : o.classGroupId;
}, ym = /^\[(.+)\]$/, _O = (e) => {
  if (ym.test(e)) {
    const t = ym.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, hO = (e) => {
  const {
    theme: t,
    classGroups: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const s in n)
    cu(n[s], r, s, t);
  return r;
}, cu = (e, t, n, r) => {
  e.forEach((s) => {
    if (typeof s == "string") {
      const i = s === "" ? t : Mm(t, s);
      i.classGroupId = n;
      return;
    }
    if (typeof s == "function") {
      if (vO(s)) {
        cu(s(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: s,
        classGroupId: n
      });
      return;
    }
    Object.entries(s).forEach(([i, o]) => {
      cu(o, Mm(t, i), n, r);
    });
  });
}, Mm = (e, t) => {
  let n = e;
  return t.split(Uc).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}, vO = (e) => e.isThemeGetter, gO = (e) => {
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
}, du = "!", fu = ":", yO = fu.length, MO = (e) => {
  const {
    prefix: t,
    experimentalParseClassName: n
  } = e;
  let r = (s) => {
    const i = [];
    let o = 0, a = 0, l = 0, u;
    for (let _ = 0; _ < s.length; _++) {
      let p = s[_];
      if (o === 0 && a === 0) {
        if (p === fu) {
          i.push(s.slice(l, _)), l = _ + yO;
          continue;
        }
        if (p === "/") {
          u = _;
          continue;
        }
      }
      p === "[" ? o++ : p === "]" ? o-- : p === "(" ? a++ : p === ")" && a--;
    }
    const c = i.length === 0 ? s : s.substring(l), d = bO(c), f = d !== c, m = u && u > l ? u - l : void 0;
    return {
      modifiers: i,
      hasImportantModifier: f,
      baseClassName: d,
      maybePostfixModifierPosition: m
    };
  };
  if (t) {
    const s = t + fu, i = r;
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
}, bO = (e) => e.endsWith(du) ? e.substring(0, e.length - 1) : e.startsWith(du) ? e.substring(1) : e, xO = (e) => {
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
}, wO = (e) => ({
  cache: gO(e.cacheSize),
  parseClassName: MO(e),
  sortModifiers: xO(e),
  ...pO(e)
}), YO = /\s+/, LO = (e, t) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: s,
    sortModifiers: i
  } = t, o = [], a = e.trim().split(YO);
  let l = "";
  for (let u = a.length - 1; u >= 0; u -= 1) {
    const c = a[u], {
      isExternal: d,
      modifiers: f,
      hasImportantModifier: m,
      baseClassName: _,
      maybePostfixModifierPosition: p
    } = n(c);
    if (d) {
      l = c + (l.length > 0 ? " " + l : l);
      continue;
    }
    let v = !!p, h = r(v ? _.substring(0, p) : _);
    if (!h) {
      if (!v) {
        l = c + (l.length > 0 ? " " + l : l);
        continue;
      }
      if (h = r(_), !h) {
        l = c + (l.length > 0 ? " " + l : l);
        continue;
      }
      v = !1;
    }
    const y = i(f).join(":"), b = m ? y + du : y, x = b + h;
    if (o.includes(x))
      continue;
    o.push(x);
    const w = s(h, v);
    for (let k = 0; k < w.length; ++k) {
      const j = w[k];
      o.push(b + j);
    }
    l = c + (l.length > 0 ? " " + l : l);
  }
  return l;
};
function SO() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = wg(t)) && (r && (r += " "), r += n);
  return r;
}
const wg = (e) => {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = wg(e[r])) && (n && (n += " "), n += t);
  return n;
};
function kO(e, ...t) {
  let n, r, s, i = o;
  function o(l) {
    const u = t.reduce((c, d) => d(c), e());
    return n = wO(u), r = n.cache.get, s = n.cache.set, i = a, a(l);
  }
  function a(l) {
    const u = r(l);
    if (u)
      return u;
    const c = LO(l, n);
    return s(l, c), c;
  }
  return function() {
    return i(SO.apply(null, arguments));
  };
}
const De = (e) => {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}, Yg = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Lg = /^\((?:(\w[\w-]*):)?(.+)\)$/i, DO = /^\d+\/\d+$/, TO = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, EO = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, jO = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, AO = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, PO = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, vn = (e) => DO.test(e), ue = (e) => !!e && !Number.isNaN(Number(e)), $t = (e) => !!e && Number.isInteger(Number(e)), _l = (e) => e.endsWith("%") && ue(e.slice(0, -1)), xt = (e) => TO.test(e), CO = () => !0, $O = (e) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  EO.test(e) && !jO.test(e)
), Sg = () => !1, HO = (e) => AO.test(e), RO = (e) => PO.test(e), OO = (e) => !Z(e) && !Q(e), NO = (e) => zn(e, Tg, Sg), Z = (e) => Yg.test(e), Zt = (e) => zn(e, Eg, $O), hl = (e) => zn(e, zO, ue), bm = (e) => zn(e, kg, Sg), FO = (e) => zn(e, Dg, RO), to = (e) => zn(e, jg, HO), Q = (e) => Lg.test(e), Xn = (e) => Wn(e, Eg), IO = (e) => Wn(e, WO), xm = (e) => Wn(e, kg), VO = (e) => Wn(e, Tg), BO = (e) => Wn(e, Dg), no = (e) => Wn(e, jg, !0), zn = (e, t, n) => {
  const r = Yg.exec(e);
  return r ? r[1] ? t(r[1]) : n(r[2]) : !1;
}, Wn = (e, t, n = !1) => {
  const r = Lg.exec(e);
  return r ? r[1] ? t(r[1]) : n : !1;
}, kg = (e) => e === "position" || e === "percentage", Dg = (e) => e === "image" || e === "url", Tg = (e) => e === "length" || e === "size" || e === "bg-size", Eg = (e) => e === "length", zO = (e) => e === "number", WO = (e) => e === "family-name", jg = (e) => e === "shadow", UO = () => {
  const e = De("color"), t = De("font"), n = De("text"), r = De("font-weight"), s = De("tracking"), i = De("leading"), o = De("breakpoint"), a = De("container"), l = De("spacing"), u = De("radius"), c = De("shadow"), d = De("inset-shadow"), f = De("text-shadow"), m = De("drop-shadow"), _ = De("blur"), p = De("perspective"), v = De("aspect"), h = De("ease"), y = De("animate"), b = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], x = () => [
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
  ], w = () => [...x(), Q, Z], k = () => ["auto", "hidden", "clip", "visible", "scroll"], j = () => ["auto", "contain", "none"], L = () => [Q, Z, l], F = () => [vn, "full", "auto", ...L()], S = () => [$t, "none", "subgrid", Q, Z], $ = () => ["auto", {
    span: ["full", $t, Q, Z]
  }, $t, Q, Z], z = () => [$t, "auto", Q, Z], U = () => ["auto", "min", "max", "fr", Q, Z], N = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], C = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], P = () => ["auto", ...L()], R = () => [vn, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...L()], Y = () => [e, Q, Z], A = () => [...x(), xm, bm, {
    position: [Q, Z]
  }], V = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], T = () => ["auto", "cover", "contain", VO, NO, {
    size: [Q, Z]
  }], B = () => [_l, Xn, Zt], I = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    u,
    Q,
    Z
  ], G = () => ["", ue, Xn, Zt], ie = () => ["solid", "dashed", "dotted", "double"], J = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], W = () => [ue, _l, xm, bm], ce = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    _,
    Q,
    Z
  ], ae = () => ["none", ue, Q, Z], de = () => ["none", ue, Q, Z], _e = () => [ue, Q, Z], ke = () => [vn, "full", ...L()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [xt],
      breakpoint: [xt],
      color: [CO],
      container: [xt],
      "drop-shadow": [xt],
      ease: ["in", "out", "in-out"],
      font: [OO],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [xt],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [xt],
      shadow: [xt],
      spacing: ["px", ue],
      text: [xt],
      "text-shadow": [xt],
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
        aspect: ["auto", "square", vn, Z, Q, v]
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
        columns: [ue, Z, Q, a]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": b()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": b()
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
        overscroll: j()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": j()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": j()
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
        inset: F()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": F()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": F()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: F()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: F()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: F()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: F()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: F()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: F()
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
        z: [$t, "auto", Q, Z]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [vn, "full", "auto", a, ...L()]
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
        flex: [ue, vn, "auto", "initial", "none", Z]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", ue, Q, Z]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", ue, Q, Z]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [$t, "first", "last", "none", Q, Z]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": S()
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
        "col-start": z()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": z()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": S()
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
        "row-start": z()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": z()
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
        gap: L()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": L()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": L()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...N(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...C(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...C()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...N()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...C(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...C(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": N()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...C(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...C()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: L()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: L()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: L()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: L()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: L()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: L()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: L()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: L()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: L()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: P()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: P()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: P()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: P()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: P()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: P()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: P()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: P()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: P()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": L()
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
        "space-y": L()
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
        size: R()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [a, "screen", ...R()]
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
          ...R()
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
          ...R()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...R()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...R()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...R()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", n, Xn, Zt]
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
        font: [r, Q, hl]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", _l, Z]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [IO, Z, t]
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
        tracking: [s, Q, Z]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [ue, "none", Q, hl]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          i,
          ...L()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", Q, Z]
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
        list: ["disc", "decimal", "none", Q, Z]
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
        placeholder: Y()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: Y()
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
        decoration: [...ie(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [ue, "from-font", "auto", Q, Zt]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: Y()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [ue, "auto", Q, Z]
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
        indent: L()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", Q, Z]
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
        content: ["none", Q, Z]
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
        bg: A()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: V()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: T()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, $t, Q, Z],
          radial: ["", Q, Z],
          conic: [$t, Q, Z]
        }, BO, FO]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: Y()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: B()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: B()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: B()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: Y()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: Y()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: Y()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: I()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": I()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": I()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": I()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": I()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": I()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": I()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": I()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": I()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": I()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": I()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": I()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": I()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": I()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": I()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: G()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": G()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": G()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": G()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": G()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": G()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": G()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": G()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": G()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": G()
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
        "divide-y": G()
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
        border: [...ie(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...ie(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: Y()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": Y()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": Y()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": Y()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": Y()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": Y()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": Y()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": Y()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": Y()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: Y()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...ie(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [ue, Q, Z]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", ue, Xn, Zt]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: Y()
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
          no,
          to
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: Y()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", d, no, to]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": Y()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: G()
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
        ring: Y()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [ue, Zt]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": Y()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": G()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": Y()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", f, no, to]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": Y()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [ue, Q, Z]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...J(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": J()
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
        "mask-linear": [ue]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": W()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": W()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": Y()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": Y()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": W()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": W()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": Y()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": Y()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": W()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": W()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": Y()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": Y()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": W()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": W()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": Y()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": Y()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": W()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": W()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": Y()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": Y()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": W()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": W()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": Y()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": Y()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": W()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": W()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": Y()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": Y()
      }],
      "mask-image-radial": [{
        "mask-radial": [Q, Z]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": W()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": W()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": Y()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": Y()
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
        "mask-conic": [ue]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": W()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": W()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": Y()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": Y()
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
        mask: A()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: V()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: T()
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
        mask: ["none", Q, Z]
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
          Q,
          Z
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: ce()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [ue, Q, Z]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [ue, Q, Z]
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
          no,
          to
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": Y()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", ue, Q, Z]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [ue, Q, Z]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", ue, Q, Z]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [ue, Q, Z]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", ue, Q, Z]
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
          Q,
          Z
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": ce()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [ue, Q, Z]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [ue, Q, Z]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", ue, Q, Z]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [ue, Q, Z]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", ue, Q, Z]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [ue, Q, Z]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [ue, Q, Z]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", ue, Q, Z]
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
        "border-spacing": L()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": L()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": L()
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", Q, Z]
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
        duration: [ue, "initial", Q, Z]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", h, Q, Z]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [ue, Q, Z]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", y, Q, Z]
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
        perspective: [p, Q, Z]
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
        rotate: ae()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": ae()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": ae()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": ae()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: de()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": de()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": de()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": de()
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
        skew: _e()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": _e()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": _e()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [Q, Z, "", "none", "gpu", "cpu"]
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
        translate: ke()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": ke()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": ke()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": ke()
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
        accent: Y()
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
        caret: Y()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", Q, Z]
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
        "scroll-m": L()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": L()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": L()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": L()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": L()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": L()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": L()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": L()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": L()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": L()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": L()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": L()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": L()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": L()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": L()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": L()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": L()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": L()
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
        "will-change": ["auto", "scroll", "contents", "transform", Q, Z]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...Y()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [ue, Xn, Zt, hl]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...Y()]
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
}, Kc = /* @__PURE__ */ kO(UO), w2 = ({ className: e }) => /* @__PURE__ */ g.jsxs("div", { className: Kc("w-[218px]", e), children: [
  /* @__PURE__ */ g.jsx(pl, { height: 22, borderRadius: 30 }),
  /* @__PURE__ */ g.jsx(pl, { className: "mt-4", width: "60%", height: 14, borderRadius: 30 }),
  /* @__PURE__ */ g.jsx(pl, { className: "mt-2.5", width: "72%", height: 14, borderRadius: 30 })
] }), KO = () => /* @__PURE__ */ g.jsx("svg", { className: "absolute top-[18px] left-6 w-6 text-success", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ g.jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z", clipRule: "evenodd" }) }), GO = () => /* @__PURE__ */ g.jsx("svg", { className: "absolute top-[18px] left-6 w-6 text-danger", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ g.jsx("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z", clipRule: "evenodd" }) }), JO = () => /* @__PURE__ */ g.jsx("svg", { className: "absolute top-[18px] left-6 w-6 text-warning", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ g.jsx("path", { fillRule: "evenodd", d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z", clipRule: "evenodd" }) }), Y2 = ({
  type: e,
  title: t,
  content: n,
  onClose: r,
  className: s
}) => {
  const i = () => {
    switch (e) {
      case "success":
        return /* @__PURE__ */ g.jsx(KO, {});
      case "warning":
        return /* @__PURE__ */ g.jsx(JO, {});
      case "error":
      default:
        return /* @__PURE__ */ g.jsx(GO, {});
    }
  };
  return /* @__PURE__ */ g.jsxs(
    "div",
    {
      className: K(
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
            children: /* @__PURE__ */ g.jsx(l_, { className: "w-8 stroke-1" })
          }
        )
      ]
    }
  );
}, wm = 38, L2 = oa(
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
    const c = X({ area: null, nearEdge: !1 }), d = X(!1), f = X(null);
    se(() => {
      if (!n) return;
      const v = (h) => {
        h.key === "Escape" && (d.current = !0);
      };
      return window.addEventListener("keydown", v, { capture: !0 }), () => window.removeEventListener("keydown", v, { capture: !0 });
    }, [n]);
    const m = q((v) => {
      const h = window.innerWidth - v.clientX <= wm;
      c.current = { area: "backdrop", nearEdge: h };
    }, []), _ = q(() => {
      if (!t) return;
      if (d.current) {
        d.current = !1, t();
        return;
      }
      const { area: v, nearEdge: h } = c.current;
      if (v === "backdrop" && !h) {
        t();
        return;
      }
      if (v === "overlay" && !h) {
        t();
        return;
      }
    }, [t]), p = q((v) => {
      const h = v.currentTarget, y = h.getBoundingClientRect(), b = h.offsetWidth - h.clientWidth, w = y.right - v.clientX <= Math.max(b, 8) || window.innerWidth - v.clientX <= wm, k = f.current ? f.current.contains(v.target) : !1;
      c.current = { area: k ? "panel" : "overlay", nearEdge: w };
    }, []);
    return /* @__PURE__ */ g.jsx(Ya, { appear: !0, show: n, as: je, children: /* @__PURE__ */ g.jsx(Mc, { children: /* @__PURE__ */ g.jsxs(
      FS,
      {
        as: "div",
        className: "relative z-[99999]",
        onClose: _,
        children: [
          /* @__PURE__ */ g.jsx(
            xr,
            {
              as: je,
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
              onMouseDownCapture: p,
              children: /* @__PURE__ */ g.jsx(
                "div",
                {
                  className: K(
                    "flex min-h-full items-center justify-center p-4 text-center",
                    i
                  ),
                  children: /* @__PURE__ */ g.jsx(
                    xr,
                    {
                      as: je,
                      enter: "ease-out duration-300",
                      enterFrom: "opacity-0 scale-95",
                      enterTo: "opacity-100 scale-100",
                      leave: "ease-in duration-200",
                      leaveFrom: "opacity-100 scale-100",
                      leaveTo: "opacity-0 scale-95",
                      children: /* @__PURE__ */ g.jsxs(
                        Bh,
                        {
                          ref: f,
                          className: Kc(
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
                                children: /* @__PURE__ */ g.jsx(ru, { className: "h-7 w-7", "aria-hidden": "true" })
                              }
                            ) : /* @__PURE__ */ g.jsxs("div", { className: "min-h-[62px] bg-light-4-tint py-[10px] px-[20px] rounded-t-[20px] flex items-center justify-between", children: [
                              /* @__PURE__ */ g.jsx("div", { className: "font-bold text-lg md:text-xl text-dark truncate", children: e }),
                              /* @__PURE__ */ g.jsx(
                                "button",
                                {
                                  className: "hover:bg-light-3-tint rounded-full p-[7px] text-dark transition-all duration-100 outline-0",
                                  hidden: !t,
                                  onClick: t,
                                  children: /* @__PURE__ */ g.jsx(ru, { className: "h-7 w-7", "aria-hidden": "true" })
                                }
                              )
                            ] }),
                            /* @__PURE__ */ g.jsx("div", { className: K("p-6", o), children: a })
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
), Ag = oa(
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
    onBlur: _,
    onBeforeInput: p,
    supportingText: v,
    supportingTextWidth: h = 38,
    onKeyDown: y,
    onKeyUp: b,
    error: x,
    actionLabel: w,
    actionPosition: k,
    onActionClick: j,
    disabled: L = !1,
    withoutErrorMessage: F = !1,
    icon: S,
    onIconClick: $,
    readOnly: z,
    warning: U
  }, N) => /* @__PURE__ */ g.jsxs(
    "div",
    {
      className: Kc("transition-all max-w-[257px] w-full", e),
      children: [
        r && /* @__PURE__ */ g.jsxs("div", { className: "flex items-center justify-between gap-2 mb-1.5", children: [
          /* @__PURE__ */ g.jsxs(
            "label",
            {
              htmlFor: i,
              className: K(
                "block text-light-dark text-sm",
                L && "!text-light-3"
              ),
              children: [
                r,
                u && /* @__PURE__ */ g.jsx("span", { className: "text-danger", children: " *" })
              ]
            }
          ),
          s && /* @__PURE__ */ g.jsx(
            "span",
            {
              className: K(
                "block text-light text-sm truncate",
                L && "!text-light-3"
              ),
              children: s
            }
          )
        ] }),
        /* @__PURE__ */ g.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ g.jsx(
            "input",
            {
              ref: N,
              className: K(
                "peer h-[40px] bg-white border border-light-3 rounded py-[7px] px-[15px] text-dark w-full transition-colors duration-100 !outline-0 !outline-offset-0",
                x && "border-danger outline !outline-[1px] outline-danger",
                "hover:bg-fo-accent-tint hover:border-fo-accent hover:outline hover:!outline-[1px] hover:outline-fo-accent",
                "focus:border-fo-accent focus:outline focus:!outline-[1px] focus:outline-fo-accent",
                L && "!bg-transparent !border !border-light-3-tint !text-light-3 !py-[7px] !px-[15px] cursor-not-allowed !outline-none",
                t
              ),
              id: i,
              type: a,
              name: o,
              placeholder: l,
              onKeyDown: y,
              onKeyUp: b,
              onInput: f,
              value: c,
              onChange: d,
              onFocus: m,
              onBlur: _,
              onBeforeInput: p,
              disabled: L,
              readOnly: z,
              style: v ? { paddingLeft: h + 7 } : {}
            }
          ),
          v && /* @__PURE__ */ g.jsx(
            "div",
            {
              className: K(
                `flex items-center justify-center text-light-dark text-sm absolute top-px left-px h-[38px] bg-light-4-tint rounded-l pointer-events-none transition-all duration-100 overflow-hidden peer-hover:bg-fo-accent-light peer-hover:w-[${h - 2}px] peer-focus:w-[${h - 2}px]`,
                x && `w-[${h - 2}px]`,
                L && "!bg-transparent opacity-60"
              ),
              style: { width: h },
              children: v
            }
          ),
          S && /* @__PURE__ */ g.jsx(
            "div",
            {
              className: K(
                "absolute z-10 top-2 right-4 cursor-pointer",
                n
              ),
              onClick: $,
              children: S
            }
          )
        ] }),
        (!F && x || w) && /* @__PURE__ */ g.jsxs("div", { className: "flex items-start justify-between mt-1", children: [
          !F && x && /* @__PURE__ */ g.jsx(
            "div",
            {
              className: K(
                w ? "max-w-[70%]" : "max-w-full",
                k === "left" && "order-last"
              ),
              children: /* @__PURE__ */ g.jsx("p", { className: "text-danger text-xs mt-1 break-all", children: x })
            }
          ),
          w && /* @__PURE__ */ g.jsx(
            "div",
            {
              className: K(
                "flex w-full",
                k === "right" ? "justify-end" : "justify-start"
              ),
              children: /* @__PURE__ */ g.jsx(
                "button",
                {
                  onClick: j,
                  className: K(
                    "text-medium text-sm underline",
                    L && "!text-light-3"
                  ),
                  disabled: L,
                  children: w
                }
              )
            }
          )
        ] }),
        U && /* @__PURE__ */ g.jsx("p", { className: "text-warning text-xs mt-1 break-all", children: U })
      ]
    }
  )
), XO = ({
  pagesAmount: e = 1,
  currentPage: t,
  onPageChange: n
}) => {
  const [r, s] = ne(t);
  return se(() => {
    s(t);
  }, [t]), /* @__PURE__ */ g.jsxs("div", { className: "flex items-center justify-center gap-[20px]", children: [
    /* @__PURE__ */ g.jsx(
      Jr,
      {
        onClick: () => n(1),
        arrowType: tr.Pagination,
        disabled: t <= 1
      }
    ),
    /* @__PURE__ */ g.jsx(
      Jr,
      {
        className: "rotate-90",
        onClick: () => t === 1 ? null : n(t - 1),
        arrowType: tr.Small,
        disabled: t <= 1
      }
    ),
    /* @__PURE__ */ g.jsxs("div", { className: "flex items-center justify-center gap-[10px]", children: [
      /* @__PURE__ */ g.jsx(
        Ag,
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
      Jr,
      {
        className: "-rotate-90",
        onClick: () => t === e ? null : n(t + 1),
        arrowType: tr.Small,
        disabled: t >= e
      }
    ),
    /* @__PURE__ */ g.jsx(
      Jr,
      {
        className: "rotate-180",
        onClick: () => e && n(e),
        arrowType: tr.Pagination,
        disabled: t >= e
      }
    )
  ] });
}, qO = ({
  preventScrolling: e = !1,
  children: t
}) => {
  const [n, r] = M.useState(!1);
  return M.useEffect(() => (r(!0), e && (document.body.style.overflow = "hidden"), () => {
    document.body.style.overflow = "inherit";
  }), []), n ? pu(t, document.body) : null;
}, ZO = ({ children: e, label: t, className: n, style: r }) => {
  const [s, i] = ne(!1), [o, a] = ne(null);
  return /* @__PURE__ */ g.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ g.jsx(qO, { children: /* @__PURE__ */ g.jsx(Fu, { children: s && /* @__PURE__ */ g.jsxs(
      An.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: {
          duration: 0.25,
          delay: 0.5
        },
        className: K(
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
}, Pg = ({
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
  required: _,
  isDisabled: p = !1,
  multiple: v = !1
}) => {
  const h = Array.isArray(i) ? i : i ? [i] : [];
  return /* @__PURE__ */ g.jsxs("div", { className: K("relative", e), children: [
    c && /* @__PURE__ */ g.jsxs(
      "label",
      {
        className: K(
          "block mb-1.5 text-sm text-light-dark truncate",
          p && "!text-light-3"
        ),
        title: c,
        children: [
          c,
          _ && /* @__PURE__ */ g.jsx("span", { className: "text-danger", children: " *" })
        ]
      }
    ),
    /* @__PURE__ */ g.jsxs(
      bk,
      {
        as: "div",
        name: d,
        disabled: p,
        value: i,
        onChange: l,
        multiple: v,
        children: [
          /* @__PURE__ */ g.jsxs(
            qh,
            {
              className: ({ open: y }) => `relative w-full max-w-[572px] min-h-[40px] border border-light-3 cursor-pointer rounded-[3px] bg-white py-[7px] pl-[15px] pr-[30px] text-left transition-colors duration-100 !outline-offset-0 truncate
          hover:bg-fo-accent-light hover:border-fo-accent hover:outline hover:!outline-[1px] hover:outline-fo-accent
          focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-warning focus:outline focus:!outline-[1px] focus:outline-fo-accent
          ${u && "border-danger hover:bg-fo-accent-light hover:border-fo-accent focus:border-fo-accent outline !outline-[1px] outline-danger"}
          ${y && "!border-fo-accent outline !outline-[1px] outline-fo-accent"}
          ${p && "!bg-transparent !border !border-light-3-tint !text-light-3 !py-[7px] !px-[15px] hover:!outline-0 !cursor-not-allowed"}
          ${t}`,
              title: h.map((y) => y.name).join(", ") || f,
              onKeyDown: (y) => {
                if (!i) {
                  const b = a.find(
                    (x) => x.name[0].toLowerCase() === y.key.toLowerCase()
                  );
                  b && l(b);
                }
              },
              children: [
                h.length > 0 ? /* @__PURE__ */ g.jsxs(
                  "span",
                  {
                    className: K(
                      "text-dark truncate flex items-center flex-wrap gap-[6px]",
                      p && "text-light-3"
                    ),
                    title: h.map((y) => y.name).join(", ") || f,
                    children: [
                      o,
                      h.map((y, b) => /* @__PURE__ */ g.jsxs(
                        "div",
                        {
                          className: "flex flex-row gap-[10px] items-center",
                          children: [
                            y.image && /* @__PURE__ */ g.jsx(
                              "img",
                              {
                                className: "w-[20px] h-[20px] object-contain",
                                src: y.image,
                                alt: y.name
                              }
                            ),
                            /* @__PURE__ */ g.jsxs("span", { className: "truncate", children: [
                              y.name,
                              b < h.length - 1 && ","
                            ] })
                          ]
                        },
                        y.value
                      ))
                    ]
                  }
                ) : /* @__PURE__ */ g.jsx(
                  "span",
                  {
                    className: K("text-light-dark", p && "text-light-3"),
                    children: f
                  }
                ),
                /* @__PURE__ */ g.jsx("span", { className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-[10px]", children: /* @__PURE__ */ g.jsx(ln, { className: "h-4 w-4" }) })
              ]
            }
          ),
          /* @__PURE__ */ g.jsx(
            Ya,
            {
              as: je,
              leave: "transition ease-in duration-100",
              leaveFrom: "opacity-100",
              leaveTo: "opacity-0",
              children: /* @__PURE__ */ g.jsx(
                Zh,
                {
                  className: K(
                    "absolute mt-[1px] z-10 max-w-[572px] max-h-[200px] w-full overflow-auto rounded-b-[3px] bg-white py-2 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
                    r
                  ),
                  children: a.length > 0 ? /* @__PURE__ */ g.jsx(g.Fragment, { children: a.map((y, b) => /* @__PURE__ */ g.jsx(
                    Qh,
                    {
                      value: y,
                      title: y.name,
                      disabled: y.unavailable,
                      className: ({ focus: x }) => `relative cursor-pointer select-none py-2 pl-[35px] pr-4 transition-colors duration-100 ${x && "bg-fo-accent-tint"}
                  ${n}`,
                      children: ({ selected: x }) => /* @__PURE__ */ g.jsxs("div", { className: "flex flex-row gap-[10px] items-center", children: [
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
                        x && /* @__PURE__ */ g.jsx(
                          "span",
                          {
                            className: K(
                              "absolute inset-y-0 left-0 flex items-center pl-3 text-fo-accent",
                              s
                            ),
                            children: /* @__PURE__ */ g.jsx(nu, { className: "h-4 w-4", "aria-hidden": "true" })
                          }
                        )
                      ] })
                    },
                    b
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
}, Ym = [
  { name: "25", value: 25 },
  { name: "50", value: 50 },
  { name: "75", value: 75 }
], S2 = ({
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
    className: K(
      "bg-white flex items-center justify-between px-[14px] py-[12px]",
      e
    ),
    children: [
      /* @__PURE__ */ g.jsxs("div", { className: "flex items-center gap-[40px]", children: [
        /* @__PURE__ */ g.jsx(
          XO,
          {
            pagesAmount: t,
            currentPage: n,
            onPageChange: r
          }
        ),
        /* @__PURE__ */ g.jsx(
          Pg,
          {
            className: "w-[80px] shrink-0",
            inputClassName: "text-[14px]",
            optionClassName: "text-[14px]",
            dropdownClassName: u,
            selectedOption: c ? c.find((d) => d.value === l) || null : Ym.find((d) => d.value === l) || null,
            options: c || Ym,
            onChange: (d) => a(parseInt(d.name))
          }
        )
      ] }),
      /* @__PURE__ */ g.jsxs("div", { className: "flex items-center justify-center gap-[20px] mr-[30px]", children: [
        i && /* @__PURE__ */ g.jsx(
          "span",
          {
            className: "flex items-center text-dark cursor-pointer",
            onClick: i,
            children: /* @__PURE__ */ g.jsx(Ew, { className: "w-4 h-4" })
          }
        ),
        s && /* @__PURE__ */ g.jsx(
          "span",
          {
            className: "flex items-center text-dark cursor-pointer",
            onClick: s,
            children: /* @__PURE__ */ g.jsx(Dw, { className: "w-4 h-4" })
          }
        ),
        o && /* @__PURE__ */ g.jsx(
          ZO,
          {
            label: "Save current preferences",
            style: { wordBreak: "break-word" },
            children: /* @__PURE__ */ g.jsx(
              Yw,
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
), k2 = ({
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
    className: K(
      "bg-light-2-tint grid items-stretch min-h-[61px] w-full px-[14px] py-2 border-t-[1px] border-light-3-tint hover:!bg-fo-accent-light",
      r && "!bg-fo-accent-tint",
      t && "cursor-pointer",
      e
    ),
    children: s
  }
);
var QO = /* @__PURE__ */ ((e) => (e.None = "none", e.Asc = "asc", e.Desc = "desc", e.Empty = "empty", e))(QO || {}), mu = /* @__PURE__ */ ((e) => (e.TextInput = "TextInput", e.Select = "Select", e))(mu || {});
const D2 = ({
  item: e,
  onClick: t,
  withSeparator: n = !1,
  className: r
}) => /* @__PURE__ */ g.jsxs(
  "div",
  {
    className: K(
      "flex items-center justify-between gap-2 pl-2 pr-1",
      r
    ),
    children: [
      /* @__PURE__ */ g.jsxs(
        "div",
        {
          className: K(
            "flex items-center justify-start gap-[7px] truncate min-w-0",
            t && "cursor-pointer"
          ),
          onClick: t,
          title: e.name,
          children: [
            /* @__PURE__ */ g.jsx("p", { className: "text-[14px] font-semibold truncate min-w-0", children: e.name }),
            e.state && e.state !== "empty" && /* @__PURE__ */ g.jsxs("div", { className: "flex flex-col", children: [
              /* @__PURE__ */ g.jsx(
                Bk,
                {
                  className: K(
                    "h-3 w-3 text-light-3",
                    e.state === "asc" && "!text-dark"
                  )
                }
              ),
              /* @__PURE__ */ g.jsx(
                ln,
                {
                  className: K(
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
), T2 = ({
  item: e,
  onChange: t,
  withSeparator: n = !1,
  className: r = "",
  wrapperClassName: s = ""
}) => {
  var i;
  return e.value === void 0 ? /* @__PURE__ */ g.jsx("div", {}) : /* @__PURE__ */ g.jsxs(
    "div",
    {
      className: K(
        "flex items-center justify-between gap-[20px] px-[8px]",
        s
      ),
      children: [
        e.filterType === mu.TextInput && /* @__PURE__ */ g.jsx(
          Ag,
          {
            name: e.name,
            value: e.value,
            onChange: (o) => t(o.target.value),
            className: `max-w-none ${r}`
          }
        ),
        e.filterType === mu.Select && e.options && /* @__PURE__ */ g.jsx(
          Pg,
          {
            className: `w-[100%] ${r}`,
            selectedOption: ((i = e.options) == null ? void 0 : i.find((o) => o.value === e.value)) || null,
            options: e.options,
            placeholder: "Select an option",
            onChange: (o) => t(o.value)
          }
        ),
        n && /* @__PURE__ */ g.jsx("div", { className: "w-[1px] h-full bg-light-3" })
      ]
    }
  );
}, E2 = ({ className: e = "", tableGrid: t, children: n }) => /* @__PURE__ */ g.jsx(
  "div",
  {
    style: t,
    className: K(
      "bg-white grid items-stretch grid-cols-[repeat(auto-fit,_minmax(100px,_1fr))] w-full px-[14px] py-[12px]",
      e
    ),
    children: n
  }
), j2 = ({ className: e = "", tableGrid: t, children: n }) => /* @__PURE__ */ g.jsx(
  "div",
  {
    style: t,
    className: K(
      "bg-white grid items-stretch grid-cols-[repeat(auto-fit,_minmax(100px,_1fr))] w-full px-[14px] py-[12px]",
      e
    ),
    children: n
  }
);
var e2 = /* @__PURE__ */ ((e) => (e.success = "success", e.warning = "warning", e))(e2 || {});
const t2 = (e) => {
  switch (e) {
    case "success":
      return /* @__PURE__ */ g.jsx("span", { className: "text-success", children: /* @__PURE__ */ g.jsx(nu, { className: K("transition h-4 w-4"), "aria-hidden": "true" }) });
    case "warning":
      return /* @__PURE__ */ g.jsx("span", { className: "text-warning", children: /* @__PURE__ */ g.jsx(
        Wk,
        {
          className: K("transition h-5 w-5"),
          "aria-hidden": "true"
        }
      ) });
    default:
      return /* @__PURE__ */ g.jsx("span", { className: "text-success", children: /* @__PURE__ */ g.jsx(nu, { className: K("transition h-4 w-4"), "aria-hidden": "true" }) });
  }
}, n2 = ({
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
      className: K(
        "relative group transition-all flex items-center justify-center gap-[4px] text-base text-light-dark px-[15px] py-[12px] border-transparent outline-none cursor-pointer",
        l && "!p-2"
      ),
      onClick: () => a(e),
      children: [
        s && /* @__PURE__ */ g.jsx("span", { className: "flex items-center text-dark", children: t2(s) }),
        /* @__PURE__ */ g.jsx(
          "span",
          {
            className: K(
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
          An.span,
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
}, A2 = ({
  className: e = "",
  layoutId: t,
  items: n,
  isActive: r,
  onClick: s,
  isSmall: i
}) => /* @__PURE__ */ g.jsx(
  "div",
  {
    className: K(
      "transition-all flex items-end gap-[7px] border-b border-b-light-3-tint px-[26px] w-full overflow-x-auto",
      i && "!px-4",
      e
    ),
    children: n.filter((o) => !o.hidden && o.id).map((o, a) => /* @__PURE__ */ g.jsx(
      n2,
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
), P2 = ({
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
  onActionClick: _
}) => /* @__PURE__ */ g.jsxs(
  "div",
  {
    className: K(
      "transition-all",
      e,
      d && "pointer-events-none"
    ),
    children: [
      o && /* @__PURE__ */ g.jsxs(
        "label",
        {
          htmlFor: n,
          className: K(
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
          className: K(
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
          onChange: (p) => l == null ? void 0 : l(p.target.value),
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
            className: K(
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
            className: K(
              "flex w-full",
              m === "right" ? "justify-end" : "justify-start"
            ),
            children: f && /* @__PURE__ */ g.jsx(
              "button",
              {
                onClick: _,
                className: K(
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
), r2 = "@carauktion/component-library", o2 = "0.2.0", Cg = {
  name: r2,
  version: o2
}, s2 = () => Cg.version, i2 = () => Cg.name, C2 = ({ showPackageName: e = !1, className: t = "" }) => /* @__PURE__ */ g.jsxs("div", { className: `text-sm text-gray-600 ${t}`, children: [
  e && /* @__PURE__ */ g.jsx("div", { className: "font-medium text-gray-800", children: i2() }),
  /* @__PURE__ */ g.jsxs("div", { children: [
    "Version: ",
    /* @__PURE__ */ g.jsx("span", { className: "font-mono font-semibold", children: s2() })
  ] })
] });
var a2 = /* @__PURE__ */ ((e) => (e.DE = "DE", e.FR = "FR", e.IT = "IT", e.EN = "EN", e))(a2 || {});
export {
  f2 as Accordion,
  m2 as AccordionGroup,
  v2 as AccordionRow,
  Jr as Arrow,
  tr as ArrowType,
  Xk as Button,
  g2 as Cell,
  y2 as ColumnSwitcher,
  M2 as ColumnsView,
  b2 as DatePicker,
  x2 as Dropdown,
  mu as FilterType,
  a2 as LANGUAGES,
  w2 as Loading,
  Y2 as Message,
  L2 as Modal,
  XO as Pagination,
  S2 as PaginationBar,
  qO as Portal,
  k2 as Row,
  T2 as Search,
  E2 as SearchBar,
  Pg as Select,
  D2 as Sort,
  j2 as SortBar,
  QO as SortState,
  tv as Spinner,
  qk as Switcher,
  n2 as Tab,
  e2 as TabStatus,
  A2 as Tabs,
  Ag as TextInput,
  P2 as Textarea,
  ZO as Tooltip,
  C2 as VersionInfo,
  Ct as getCSSVariable,
  i2 as getPackageName,
  s2 as getVersion
};
//# sourceMappingURL=index.js.map
