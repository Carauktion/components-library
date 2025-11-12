import * as b from "react";
import D, { useRef as q, useCallback as X, useEffect as ue, useState as oe, useMemo as pe, useLayoutEffect as Ma, useContext as re, createContext as ge, forwardRef as Nr, Fragment as Ae, isValidElement as ba, cloneElement as up, createElement as cp, useId as je, useSyncExternalStore as gy, useReducer as dp, createRef as yy, useInsertionEffect as fp, Children as My, Component as by } from "react";
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
    function e(T) {
      if (T == null) return null;
      if (typeof T == "function")
        return T.$$typeof === C ? null : T.displayName || T.name || null;
      if (typeof T == "string") return T;
      switch (T) {
        case _:
          return "Fragment";
        case M:
          return "Profiler";
        case v:
          return "StrictMode";
        case S:
          return "Suspense";
        case j:
          return "SuspenseList";
        case k:
          return "Activity";
      }
      if (typeof T == "object")
        switch (typeof T.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), T.$$typeof) {
          case h:
            return "Portal";
          case x:
            return T.displayName || "Context";
          case y:
            return (T._context.displayName || "Context") + ".Consumer";
          case w:
            var H = T.render;
            return T = T.displayName, T || (T = H.displayName || H.name || "", T = T !== "" ? "ForwardRef(" + T + ")" : "ForwardRef"), T;
          case Y:
            return H = T.displayName || null, H !== null ? H : e(T.type) || "Memo";
          case I:
            H = T._payload, T = T._init;
            try {
              return e(T(H));
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
        var H = !1;
      } catch {
        H = !0;
      }
      if (H) {
        H = console;
        var F = H.error, K = typeof Symbol == "function" && Symbol.toStringTag && T[Symbol.toStringTag] || T.constructor.name || "Object";
        return F.call(
          H,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          K
        ), t(T);
      }
    }
    function r(T) {
      if (T === _) return "<>";
      if (typeof T == "object" && T !== null && T.$$typeof === I)
        return "<...>";
      try {
        var H = e(T);
        return H ? "<" + H + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var T = N.A;
      return T === null ? null : T.getOwner();
    }
    function i() {
      return Error("react-stack-top-frame");
    }
    function o(T) {
      if (U.call(T, "key")) {
        var H = Object.getOwnPropertyDescriptor(T, "key").get;
        if (H && H.isReactWarning) return !1;
      }
      return T.key !== void 0;
    }
    function a(T, H) {
      function F() {
        $ || ($ = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          H
        ));
      }
      F.isReactWarning = !0, Object.defineProperty(T, "key", {
        get: F,
        configurable: !0
      });
    }
    function l() {
      var T = e(this.type);
      return R[T] || (R[T] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), T = this.props.ref, T !== void 0 ? T : null;
    }
    function u(T, H, F, K, ne, G) {
      var W = F.ref;
      return T = {
        $$typeof: p,
        type: T,
        key: H,
        props: F,
        _owner: K
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
        value: ne
      }), Object.defineProperty(T, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: G
      }), Object.freeze && (Object.freeze(T.props), Object.freeze(T)), T;
    }
    function c(T, H, F, K, ne, G) {
      var W = H.children;
      if (W !== void 0)
        if (K)
          if (O(W)) {
            for (K = 0; K < W.length; K++)
              d(W[K]);
            Object.freeze && Object.freeze(W);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else d(W);
      if (U.call(H, "key")) {
        W = e(T);
        var Q = Object.keys(H).filter(function(he) {
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
      if (W = null, F !== void 0 && (n(F), W = "" + F), o(H) && (n(H.key), W = "" + H.key), "key" in H) {
        F = {};
        for (var se in H)
          se !== "key" && (F[se] = H[se]);
      } else F = H;
      return W && a(
        F,
        typeof T == "function" ? T.displayName || T.name || "Unknown" : T
      ), u(
        T,
        W,
        F,
        s(),
        ne,
        G
      );
    }
    function d(T) {
      f(T) ? T._store && (T._store.validated = 1) : typeof T == "object" && T !== null && T.$$typeof === I && (T._payload.status === "fulfilled" ? f(T._payload.value) && T._payload.value._store && (T._payload.value._store.validated = 1) : T._store && (T._store.validated = 1));
    }
    function f(T) {
      return typeof T == "object" && T !== null && T.$$typeof === p;
    }
    var m = D, p = Symbol.for("react.transitional.element"), h = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), M = Symbol.for("react.profiler"), y = Symbol.for("react.consumer"), x = Symbol.for("react.context"), w = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), j = Symbol.for("react.suspense_list"), Y = Symbol.for("react.memo"), I = Symbol.for("react.lazy"), k = Symbol.for("react.activity"), C = Symbol.for("react.client.reference"), N = m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, U = Object.prototype.hasOwnProperty, O = Array.isArray, E = console.createTask ? console.createTask : function() {
      return null;
    };
    m = {
      react_stack_bottom_frame: function(T) {
        return T();
      }
    };
    var $, R = {}, L = m.react_stack_bottom_frame.bind(
      m,
      i
    )(), P = E(r(i)), B = {};
    ar.Fragment = _, ar.jsx = function(T, H, F) {
      var K = 1e4 > N.recentlyCreatedOwnerStacks++;
      return c(
        T,
        H,
        F,
        !1,
        K ? Error("react-stack-top-frame") : L,
        K ? E(r(T)) : P
      );
    }, ar.jsxs = function(T, H, F) {
      var K = 1e4 > N.recentlyCreatedOwnerStacks++;
      return c(
        T,
        H,
        F,
        !0,
        K ? Error("react-stack-top-frame") : L,
        K ? E(r(T)) : P
      );
    };
  }()), ar;
}
process.env.NODE_ENV === "production" ? zl.exports = Yy() : zl.exports = Ly();
var g = zl.exports;
const pp = typeof document != "undefined" ? D.useLayoutEffect : () => {
};
var nl;
const Sy = (nl = D.useInsertionEffect) !== null && nl !== void 0 ? nl : pp;
function ky(e) {
  const t = q(null);
  return Sy(() => {
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
}, dn = (e) => e && "window" in e && e.window === e ? e : nn(e).defaultView || window;
function Dy(e) {
  return e !== null && typeof e == "object" && "nodeType" in e && typeof e.nodeType == "number";
}
function Ty(e) {
  return Dy(e) && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && "host" in e;
}
let Ey = !1;
function Vu() {
  return Ey;
}
function hp(e, t) {
  if (!Vu()) return t && e ? e.contains(t) : !1;
  if (!e || !t) return !1;
  let n = t;
  for (; n !== null; ) {
    if (n === e) return !0;
    n.tagName === "SLOT" && n.assignedSlot ? n = n.assignedSlot.parentNode : Ty(n) ? n = n.host : n = n.parentNode;
  }
  return !1;
}
const Bl = (e = document) => {
  var t;
  if (!Vu()) return e.activeElement;
  let n = e.activeElement;
  for (; n && "shadowRoot" in n && (!((t = n.shadowRoot) === null || t === void 0) && t.activeElement); ) n = n.shadowRoot.activeElement;
  return n;
};
function _p(e) {
  return Vu() && e.target.shadowRoot && e.composedPath ? e.composedPath()[0] : e.target;
}
function xa(e) {
  var t;
  if (typeof window == "undefined" || window.navigator == null) return !1;
  let n = (t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.brands;
  return Array.isArray(n) && n.some((r) => e.test(r.brand)) || e.test(window.navigator.userAgent);
}
function zu(e) {
  var t;
  return typeof window != "undefined" && window.navigator != null ? e.test(((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.platform) || window.navigator.platform) : !1;
}
function It(e) {
  if (process.env.NODE_ENV === "test") return e;
  let t = null;
  return () => (t == null && (t = e()), t);
}
const Bu = It(function() {
  return zu(/^Mac/i);
}), jy = It(function() {
  return zu(/^iPhone/i);
}), Py = It(function() {
  return zu(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  Bu() && navigator.maxTouchPoints > 1;
}), Ay = It(function() {
  return jy() || Py();
});
It(function() {
  return Bu() || Ay();
});
It(function() {
  return xa(/AppleWebKit/i) && !Cy();
});
const Cy = It(function() {
  return xa(/Chrome/i);
}), $y = It(function() {
  return xa(/Android/i);
});
It(function() {
  return xa(/Firefox/i);
});
function vp() {
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
function Hy(e) {
  return e.pointerType === "" && e.isTrusted ? !0 : $y() && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType;
}
function gp(e) {
  let t = e;
  return t.nativeEvent = e, t.isDefaultPrevented = () => t.defaultPrevented, t.isPropagationStopped = () => t.cancelBubble, t.persist = () => {
  }, t;
}
function Oy(e, t) {
  Object.defineProperty(e, "target", {
    value: t
  }), Object.defineProperty(e, "currentTarget", {
    value: t
  });
}
function yp(e) {
  let t = q({
    isFocused: !1,
    observer: null
  });
  pp(() => {
    const r = t.current;
    return () => {
      r.observer && (r.observer.disconnect(), r.observer = null);
    };
  }, []);
  let n = ky((r) => {
    e == null || e(r);
  });
  return X((r) => {
    if (r.target instanceof HTMLButtonElement || r.target instanceof HTMLInputElement || r.target instanceof HTMLTextAreaElement || r.target instanceof HTMLSelectElement) {
      t.current.isFocused = !0;
      let s = r.target, i = (o) => {
        if (t.current.isFocused = !1, s.disabled) {
          let a = gp(o);
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
let Ry = !1, Ir = null, Wl = /* @__PURE__ */ new Set(), _r = /* @__PURE__ */ new Map(), gn = !1, Ul = !1;
const Ny = {
  Tab: !0,
  Escape: !0
};
function Wu(e, t) {
  for (let n of Wl) n(e, t);
}
function Iy(e) {
  return !(e.metaKey || !Bu() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function Do(e) {
  gn = !0, Iy(e) && (Ir = "keyboard", Wu("keyboard", e));
}
function rt(e) {
  Ir = "pointer", (e.type === "mousedown" || e.type === "pointerdown") && (gn = !0, Wu("pointer", e));
}
function Mp(e) {
  Hy(e) && (gn = !0, Ir = "virtual");
}
function bp(e) {
  e.target === window || e.target === document || Ry || !e.isTrusted || (!gn && !Ul && (Ir = "virtual", Wu("virtual", e)), gn = !1, Ul = !1);
}
function xp() {
  gn = !1, Ul = !0;
}
function Kl(e) {
  if (typeof window == "undefined" || typeof document == "undefined" || _r.get(dn(e))) return;
  const t = dn(e), n = nn(e);
  let r = t.HTMLElement.prototype.focus;
  t.HTMLElement.prototype.focus = function() {
    gn = !0, r.apply(this, arguments);
  }, n.addEventListener("keydown", Do, !0), n.addEventListener("keyup", Do, !0), n.addEventListener("click", Mp, !0), t.addEventListener("focus", bp, !0), t.addEventListener("blur", xp, !1), typeof PointerEvent != "undefined" ? (n.addEventListener("pointerdown", rt, !0), n.addEventListener("pointermove", rt, !0), n.addEventListener("pointerup", rt, !0)) : process.env.NODE_ENV === "test" && (n.addEventListener("mousedown", rt, !0), n.addEventListener("mousemove", rt, !0), n.addEventListener("mouseup", rt, !0)), t.addEventListener("beforeunload", () => {
    wp(e);
  }, {
    once: !0
  }), _r.set(t, {
    focus: r
  });
}
const wp = (e, t) => {
  const n = dn(e), r = nn(e);
  t && r.removeEventListener("DOMContentLoaded", t), _r.has(n) && (n.HTMLElement.prototype.focus = _r.get(n).focus, r.removeEventListener("keydown", Do, !0), r.removeEventListener("keyup", Do, !0), r.removeEventListener("click", Mp, !0), n.removeEventListener("focus", bp, !0), n.removeEventListener("blur", xp, !1), typeof PointerEvent != "undefined" ? (r.removeEventListener("pointerdown", rt, !0), r.removeEventListener("pointermove", rt, !0), r.removeEventListener("pointerup", rt, !0)) : process.env.NODE_ENV === "test" && (r.removeEventListener("mousedown", rt, !0), r.removeEventListener("mousemove", rt, !0), r.removeEventListener("mouseup", rt, !0)), _r.delete(n));
};
function Fy(e) {
  const t = nn(e);
  let n;
  return t.readyState !== "loading" ? Kl(e) : (n = () => {
    Kl(e);
  }, t.addEventListener("DOMContentLoaded", n)), () => wp(e, n);
}
typeof document != "undefined" && Fy();
function Yp() {
  return Ir !== "pointer";
}
const Vy = /* @__PURE__ */ new Set([
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
function zy(e, t, n) {
  let r = nn(n == null ? void 0 : n.target);
  const s = typeof window != "undefined" ? dn(n == null ? void 0 : n.target).HTMLInputElement : HTMLInputElement, i = typeof window != "undefined" ? dn(n == null ? void 0 : n.target).HTMLTextAreaElement : HTMLTextAreaElement, o = typeof window != "undefined" ? dn(n == null ? void 0 : n.target).HTMLElement : HTMLElement, a = typeof window != "undefined" ? dn(n == null ? void 0 : n.target).KeyboardEvent : KeyboardEvent;
  return e = e || r.activeElement instanceof s && !Vy.has(r.activeElement.type) || r.activeElement instanceof i || r.activeElement instanceof o && r.activeElement.isContentEditable, !(e && t === "keyboard" && n instanceof a && !Ny[n.key]);
}
function By(e, t, n) {
  Kl(), ue(() => {
    let r = (s, i) => {
      zy(!!(n != null && n.isTextInput), s, i) && e(Yp());
    };
    return Wl.add(r), () => {
      Wl.delete(r);
    };
  }, t);
}
function Wy(e) {
  let { isDisabled: t, onFocus: n, onBlur: r, onFocusChange: s } = e;
  const i = X((l) => {
    if (l.target === l.currentTarget)
      return r && r(l), s && s(!1), !0;
  }, [
    r,
    s
  ]), o = yp(i), a = X((l) => {
    const u = nn(l.target), c = u ? Bl(u) : Bl();
    l.target === l.currentTarget && c === _p(l.nativeEvent) && (n && n(l), s && s(!0), o(l));
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
function Uy(e) {
  let { isDisabled: t, onBlurWithin: n, onFocusWithin: r, onFocusWithinChange: s } = e, i = q({
    isFocusWithin: !1
  }), { addGlobalListener: o, removeAllGlobalListeners: a } = vp(), l = X((d) => {
    d.currentTarget.contains(d.target) && i.current.isFocusWithin && !d.currentTarget.contains(d.relatedTarget) && (i.current.isFocusWithin = !1, a(), n && n(d), s && s(!1));
  }, [
    n,
    s,
    i,
    a
  ]), u = yp(l), c = X((d) => {
    if (!d.currentTarget.contains(d.target)) return;
    const f = nn(d.target), m = Bl(f);
    if (!i.current.isFocusWithin && m === _p(d.nativeEvent)) {
      r && r(d), s && s(!0), i.current.isFocusWithin = !0, u(d);
      let p = d.currentTarget;
      o(f, "focus", (h) => {
        if (i.current.isFocusWithin && !hp(p, h.target)) {
          let _ = new f.defaultView.FocusEvent("blur", {
            relatedTarget: h.target
          });
          Oy(_, p);
          let v = gp(_);
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
let To = !1, oo = 0;
function Gl() {
  To = !0, setTimeout(() => {
    To = !1;
  }, 50);
}
function Td(e) {
  e.pointerType === "touch" && Gl();
}
function Ky() {
  if (typeof document != "undefined")
    return oo === 0 && (typeof PointerEvent != "undefined" ? document.addEventListener("pointerup", Td) : process.env.NODE_ENV === "test" && document.addEventListener("touchend", Gl)), oo++, () => {
      oo--, !(oo > 0) && (typeof PointerEvent != "undefined" ? document.removeEventListener("pointerup", Td) : process.env.NODE_ENV === "test" && document.removeEventListener("touchend", Gl));
    };
}
function Fr(e) {
  let { onHoverStart: t, onHoverChange: n, onHoverEnd: r, isDisabled: s } = e, [i, o] = oe(!1), a = q({
    isHovered: !1,
    ignoreEmulatedMouseEvents: !1,
    pointerType: "",
    target: null
  }).current;
  ue(Ky, []);
  let { addGlobalListener: l, removeAllGlobalListeners: u } = vp(), { hoverProps: c, triggerHoverEnd: d } = pe(() => {
    let f = (h, _) => {
      if (a.pointerType = _, s || _ === "touch" || a.isHovered || !h.currentTarget.contains(h.target)) return;
      a.isHovered = !0;
      let v = h.currentTarget;
      a.target = v, l(nn(h.target), "pointerover", (M) => {
        a.isHovered && a.target && !hp(a.target, M.target) && m(M, M.pointerType);
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
      To && h.pointerType === "mouse" || f(h, h.pointerType);
    }, p.onPointerLeave = (h) => {
      !s && h.currentTarget.contains(h.target) && m(h, h.pointerType);
    }) : process.env.NODE_ENV === "test" && (p.onTouchStart = () => {
      a.ignoreEmulatedMouseEvents = !0;
    }, p.onMouseEnter = (h) => {
      !a.ignoreEmulatedMouseEvents && !To && f(h, "mouse"), a.ignoreEmulatedMouseEvents = !1;
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
function Vr(e = {}) {
  let { autoFocus: t = !1, isTextInput: n, within: r } = e, s = q({
    isFocused: !1,
    isFocusVisible: t || Yp()
  }), [i, o] = oe(!1), [a, l] = oe(() => s.current.isFocused && s.current.isFocusVisible), u = X(() => l(s.current.isFocused && s.current.isFocusVisible), []), c = X((m) => {
    s.current.isFocused = m, o(m), u();
  }, [
    u
  ]);
  By((m) => {
    s.current.isFocusVisible = m, u();
  }, [], {
    isTextInput: n
  });
  let { focusProps: d } = Wy({
    isDisabled: r,
    onFocusChange: c
  }), { focusWithinProps: f } = Uy({
    isDisabled: !r,
    onFocusWithinChange: c
  });
  return {
    isFocused: i,
    isFocusVisible: a,
    focusProps: r ? f : d
  };
}
var Gy = Object.defineProperty, Jy = (e, t, n) => t in e ? Gy(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, rl = (e, t, n) => (Jy(e, typeof t != "symbol" ? t + "" : t, n), n);
let qy = class {
  constructor() {
    rl(this, "current", this.detect()), rl(this, "handoffState", "pending"), rl(this, "currentId", 0);
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
}, yt = new qy();
function rn(e) {
  var t;
  return yt.isServer ? null : e == null ? document : (t = e == null ? void 0 : e.ownerDocument) != null ? t : document;
}
function Eo(e) {
  var t, n;
  return yt.isServer ? null : e == null ? document : (n = (t = e == null ? void 0 : e.getRootNode) == null ? void 0 : t.call(e)) != null ? n : document;
}
function Lp(e) {
  var t, n;
  return (n = (t = Eo(e)) == null ? void 0 : t.activeElement) != null ? n : null;
}
function wa(e) {
  return Lp(e) === e;
}
function Ya(e) {
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
    return Ya(() => {
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
  yt.isServer ? ue(e, t) : Ma(e, t);
};
function Ft(e) {
  let t = q(e);
  return Me(() => {
    t.current = e;
  }, [e]), t;
}
let Z = function(e) {
  let t = Ft(e);
  return D.useCallback((...n) => t.current(...n), [t]);
};
function Xy(e) {
  let t = e.width / 2, n = e.height / 2;
  return { top: e.clientY - n, right: e.clientX + t, bottom: e.clientY + n, left: e.clientX - t };
}
function Zy(e, t) {
  return !(!e || !t || e.right < t.left || e.left > t.right || e.bottom < t.top || e.top > t.bottom);
}
function La({ disabled: e = !1 } = {}) {
  let t = q(null), [n, r] = oe(!1), s = kt(), i = Z(() => {
    t.current = null, r(!1), s.dispose();
  }), o = Z((a) => {
    if (s.dispose(), t.current === null) {
      t.current = a.currentTarget, r(!0);
      {
        let l = rn(a.currentTarget);
        s.addEventListener(l, "pointerup", i, !1), s.addEventListener(l, "pointermove", (u) => {
          if (t.current) {
            let c = Xy(u);
            r(Zy(c, t.current.getBoundingClientRect()));
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
let Qy = ge(void 0);
function zr() {
  return re(Qy);
}
function Jl(...e) {
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
  let e = tM();
  return X((t) => eM({ mergeRefs: e, ...t }), [e]);
}
function eM({ ourProps: e, theirProps: t, slot: n, defaultTag: r, features: s, visible: i = !0, name: o, mergeRefs: a }) {
  a = a != null ? a : nM;
  let l = Sp(t, e);
  if (i) return so(l, n, r, o, a);
  let u = s != null ? s : 0;
  if (u & 2) {
    let { static: c = !1, ...d } = l;
    if (c) return so(d, n, r, o, a);
  }
  if (u & 1) {
    let { unmount: c = !0, ...d } = l;
    return Ye(c ? 0 : 1, { 0() {
      return null;
    }, 1() {
      return so({ ...d, hidden: !0, style: { display: "none" } }, n, r, o, a);
    } });
  }
  return so(l, n, r, o, a);
}
function so(e, t = {}, n, r, s) {
  let { as: i = n, children: o, refName: a = "ref", ...l } = ol(e, ["unmount", "static"]), u = e.ref !== void 0 ? { [a]: e.ref } : {}, c = typeof o == "function" ? o(t) : o;
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
  if (Hn(i) && (Object.keys(Kt(l)).length > 0 || Object.keys(Kt(d)).length > 0)) if (!ba(c) || Array.isArray(c) && c.length > 1 || oM(c)) {
    if (Object.keys(Kt(l)).length > 0) throw new Error(['Passing props on "Fragment"!', "", `The current component <${r} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(Kt(l)).concat(Object.keys(Kt(d))).map((f) => `  - ${f}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((f) => `  - ${f}`).join(`
`)].join(`
`));
  } else {
    let f = c.props, m = f == null ? void 0 : f.className, p = typeof m == "function" ? (...v) => Jl(m(...v), l.className) : Jl(m, l.className), h = p ? { className: p } : {}, _ = Sp(c.props, Kt(ol(l, ["ref"])));
    for (let v in d) v in _ && delete d[v];
    return up(c, Object.assign({}, _, d, u, { ref: s(rM(c), u.ref) }, h));
  }
  return cp(i, Object.assign({}, ol(l, ["ref"]), !Hn(i) && u, !Hn(i) && d), c);
}
function tM() {
  let e = q([]), t = X((n) => {
    for (let r of e.current) r != null && (typeof r == "function" ? r(n) : r.current = n);
  }, []);
  return (...n) => {
    if (!n.every((r) => r == null)) return e.current = n, t;
  };
}
function nM(...e) {
  return e.every((t) => t == null) ? void 0 : (t) => {
    for (let n of e) n != null && (typeof n == "function" ? n(t) : n.current = t);
  };
}
function Sp(...e) {
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
function Xt(...e) {
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
function ol(e, t = []) {
  let n = Object.assign({}, e);
  for (let r of t) r in n && delete n[r];
  return n;
}
function rM(e) {
  return D.version.split(".")[0] >= "19" ? e.props.ref : e.ref;
}
function Hn(e) {
  return e === Ae || e === Symbol.for("react.fragment");
}
function oM(e) {
  return Hn(e.type);
}
function Uu(e, t, n) {
  let [r, s] = oe(n), i = e !== void 0, o = q(i), a = q(!1), l = q(!1);
  return i && !o.current && !a.current ? (a.current = !0, o.current = i, console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")) : !i && o.current && !l.current && (l.current = !0, o.current = i, console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")), [i ? e : r, Z((u) => (i || dt(() => s(u)), t == null ? void 0 : t(u)))];
}
function Ku(e) {
  let [t] = oe(e);
  return t;
}
function kp(e = {}, t = null, n = []) {
  for (let [r, s] of Object.entries(e)) Tp(n, Dp(t, r), s);
  return n;
}
function Dp(e, t) {
  return e ? e + "[" + t + "]" : t;
}
function Tp(e, t, n) {
  if (Array.isArray(n)) for (let [r, s] of n.entries()) Tp(e, Dp(t, r.toString()), s);
  else n instanceof Date ? e.push([t, n.toISOString()]) : typeof n == "boolean" ? e.push([t, n ? "1" : "0"]) : typeof n == "string" ? e.push([t, n]) : typeof n == "number" ? e.push([t, `${n}`]) : n == null ? e.push([t, ""]) : sM(n) && !ba(n) && kp(n, t, e);
}
function Ep(e) {
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
function sM(e) {
  if (Object.prototype.toString.call(e) !== "[object Object]") return !1;
  let t = Object.getPrototypeOf(e);
  return t === null || Object.getPrototypeOf(t) === null;
}
let iM = "span";
var Fn = ((e) => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Fn || {});
function aM(e, t) {
  var n;
  let { features: r = 1, ...s } = e, i = { ref: t, "aria-hidden": (r & 2) === 2 ? !0 : (n = s["aria-hidden"]) != null ? n : void 0, hidden: (r & 4) === 4 ? !0 : void 0, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(r & 4) === 4 && (r & 2) !== 2 && { display: "none" } } };
  return xe()({ ourProps: i, theirProps: s, slot: {}, defaultTag: iM, name: "Hidden" });
}
let wr = be(aM), lM = ge(null);
function uM({ children: e }) {
  let t = re(lM);
  if (!t) return D.createElement(D.Fragment, null, e);
  let { target: n } = t;
  return n ? Fu(D.createElement(D.Fragment, null, e), n) : null;
}
function Gu({ data: e, form: t, disabled: n, onReset: r, overrides: s }) {
  let [i, o] = oe(null), a = kt();
  return ue(() => {
    if (r && i) return a.addEventListener(i, "reset", r);
  }, [i, t, r]), D.createElement(uM, null, D.createElement(cM, { setForm: o, formId: t }), kp(e).map(([l, u]) => D.createElement(wr, { features: Fn.Hidden, ...Kt({ key: l, as: "input", type: "hidden", hidden: !0, readOnly: !0, form: t, disabled: n, name: l, value: u, ...s }) })));
}
function cM({ setForm: e, formId: t }) {
  return ue(() => {
    if (t) {
      let n = document.getElementById(t);
      n && e(n);
    }
  }, [e, t]), t ? null : D.createElement(wr, { features: Fn.Hidden, as: "input", type: "hidden", hidden: !0, readOnly: !0, ref: (n) => {
    if (!n) return;
    let r = n.closest("form");
    r && e(r);
  } });
}
let dM = ge(void 0);
function Sa() {
  return re(dM);
}
function jp(e) {
  return typeof e != "object" || e === null ? !1 : "nodeType" in e;
}
function At(e) {
  return jp(e) && "tagName" in e;
}
function Ge(e) {
  return At(e) && "accessKey" in e;
}
function ft(e) {
  return At(e) && "tabIndex" in e;
}
function fM(e) {
  return At(e) && "style" in e;
}
function mM(e) {
  return Ge(e) && e.nodeName === "IFRAME";
}
function jo(e) {
  return Ge(e) && e.nodeName === "INPUT";
}
function ql(e) {
  return Ge(e) && e.nodeName === "LABEL";
}
function pM(e) {
  return Ge(e) && e.nodeName === "FIELDSET";
}
function Pp(e) {
  return Ge(e) && e.nodeName === "LEGEND";
}
function hM(e) {
  return At(e) ? e.matches('a[href],audio[controls],button,details,embed,iframe,img[usemap],input:not([type="hidden"]),label,select,textarea,video[controls]') : !1;
}
function Po(e) {
  let t = e.parentElement, n = null;
  for (; t && !pM(t); ) Pp(t) && (n = t), t = t.parentElement;
  let r = (t == null ? void 0 : t.getAttribute("disabled")) === "";
  return r && _M(n) ? !1 : r;
}
function _M(e) {
  if (!e) return !1;
  let t = e.previousElementSibling;
  for (; t !== null; ) {
    if (Pp(t)) return !1;
    t = t.previousElementSibling;
  }
  return !0;
}
let Ap = Symbol();
function Cp(e, t = !0) {
  return Object.assign(e, { [Ap]: t });
}
function Le(...e) {
  let t = q(e);
  ue(() => {
    t.current = e;
  }, [e]);
  let n = Z((r) => {
    for (let s of t.current) s != null && (typeof s == "function" ? s(r) : s.current = r);
  });
  return e.every((r) => r == null || (r == null ? void 0 : r[Ap])) ? void 0 : n;
}
let ka = ge(null);
ka.displayName = "DescriptionContext";
function $p() {
  let e = re(ka);
  if (e === null) {
    let t = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, $p), t;
  }
  return e;
}
function Ju() {
  var e, t;
  return (t = (e = re(ka)) == null ? void 0 : e.value) != null ? t : void 0;
}
function Hp() {
  let [e, t] = oe([]);
  return [e.length > 0 ? e.join(" ") : void 0, pe(() => function(n) {
    let r = Z((i) => (t((o) => [...o, i]), () => t((o) => {
      let a = o.slice(), l = a.indexOf(i);
      return l !== -1 && a.splice(l, 1), a;
    }))), s = pe(() => ({ register: r, slot: n.slot, name: n.name, props: n.props, value: n.value }), [r, n.slot, n.name, n.props, n.value]);
    return D.createElement(ka.Provider, { value: s }, n.children);
  }, [t])];
}
let vM = "p";
function gM(e, t) {
  let n = je(), r = zr(), { id: s = `headlessui-description-${n}`, ...i } = e, o = $p(), a = Le(t);
  Me(() => o.register(s), [s, o.register]);
  let l = Ee({ ...o.slot, disabled: r || !1 }), u = { ref: a, ...o.props, id: s };
  return xe()({ ourProps: u, theirProps: i, slot: l, defaultTag: vM, name: o.name || "Description" });
}
let yM = be(gM), Op = Object.assign(yM, {});
var de = ((e) => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(de || {});
let Da = ge(null);
Da.displayName = "LabelContext";
function Rp() {
  let e = re(Da);
  if (e === null) {
    let t = new Error("You used a <Label /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, Rp), t;
  }
  return e;
}
function Kn(e) {
  var t, n, r;
  let s = (n = (t = re(Da)) == null ? void 0 : t.value) != null ? n : void 0;
  return ((r = e == null ? void 0 : e.length) != null ? r : 0) > 0 ? [s, ...e].filter(Boolean).join(" ") : s;
}
function qu({ inherit: e = !1 } = {}) {
  let t = Kn(), [n, r] = oe([]), s = e ? [t, ...n].filter(Boolean) : n;
  return [s.length > 0 ? s.join(" ") : void 0, pe(() => function(i) {
    let o = Z((l) => (r((u) => [...u, l]), () => r((u) => {
      let c = u.slice(), d = c.indexOf(l);
      return d !== -1 && c.splice(d, 1), c;
    }))), a = pe(() => ({ register: o, slot: i.slot, name: i.name, props: i.props, value: i.value }), [o, i.slot, i.name, i.props, i.value]);
    return D.createElement(Da.Provider, { value: a }, i.children);
  }, [r])];
}
let MM = "label";
function bM(e, t) {
  var n;
  let r = je(), s = Rp(), i = Sa(), o = zr(), { id: a = `headlessui-label-${r}`, htmlFor: l = i != null ? i : (n = s.props) == null ? void 0 : n.htmlFor, passive: u = !1, ...c } = e, d = Le(t);
  Me(() => s.register(a), [a, s.register]);
  let f = Z((h) => {
    let _ = h.currentTarget;
    if (!(h.target !== h.currentTarget && hM(h.target)) && (ql(_) && h.preventDefault(), s.props && "onClick" in s.props && typeof s.props.onClick == "function" && s.props.onClick(h), ql(_))) {
      let v = document.getElementById(_.htmlFor);
      if (v) {
        let M = v.getAttribute("disabled");
        if (M === "true" || M === "") return;
        let y = v.getAttribute("aria-disabled");
        if (y === "true" || y === "") return;
        (jo(v) && (v.type === "file" || v.type === "radio" || v.type === "checkbox") || v.role === "radio" || v.role === "checkbox" || v.role === "switch") && v.click(), v.focus({ preventScroll: !0 });
      }
    }
  }), m = Ee({ ...s.slot, disabled: o || !1 }), p = { ref: d, ...s.props, id: a, htmlFor: l, onClick: f };
  return u && ("onClick" in p && (delete p.htmlFor, delete p.onClick), "onClick" in c && delete c.onClick), xe()({ ourProps: p, theirProps: c, slot: m, defaultTag: l ? MM : "div", name: s.name || "Label" });
}
let xM = be(bM), Xu = Object.assign(xM, {}), wM = ge(() => {
});
function Np({ value: e, children: t }) {
  return D.createElement(wM.Provider, { value: e }, t);
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
function Ed(e, t) {
  if (e === void 0)
    throw new Error("Unexpected undefined");
  return e;
}
const YM = (e, t) => Math.abs(e - t) < 1.01, LM = (e, t, n) => {
  let r;
  return function(...s) {
    e.clearTimeout(r), r = e.setTimeout(() => t.apply(this, s), n);
  };
}, jd = (e) => {
  const { offsetWidth: t, offsetHeight: n } = e;
  return { width: t, height: n };
}, SM = (e) => e, kM = (e) => {
  const t = Math.max(e.startIndex - e.overscan, 0), n = Math.min(e.endIndex + e.overscan, e.count - 1), r = [];
  for (let s = t; s <= n; s++)
    r.push(s);
  return r;
}, DM = (e, t) => {
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
  if (s(jd(n)), !r.ResizeObserver)
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
      s(jd(n));
    };
    e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(a) : a();
  });
  return i.observe(n, { box: "border-box" }), () => {
    i.unobserve(n);
  };
}, Pd = {
  passive: !0
}, Ad = typeof window == "undefined" ? !0 : "onscrollend" in window, TM = (e, t) => {
  const n = e.scrollElement;
  if (!n)
    return;
  const r = e.targetWindow;
  if (!r)
    return;
  let s = 0;
  const i = e.options.useScrollendEvent && Ad ? () => {
  } : LM(
    r,
    () => {
      t(s, !1);
    },
    e.options.isScrollingResetDelay
  ), o = (c) => () => {
    const { horizontal: d, isRtl: f } = e.options;
    s = d ? n.scrollLeft * (f && -1 || 1) : n.scrollTop, i(), t(s, c);
  }, a = o(!0), l = o(!1);
  l(), n.addEventListener("scroll", a, Pd);
  const u = e.options.useScrollendEvent && Ad;
  return u && n.addEventListener("scrollend", l, Pd), () => {
    n.removeEventListener("scroll", a), u && n.removeEventListener("scrollend", l);
  };
}, EM = (e, t, n) => {
  if (t != null && t.borderBoxSize) {
    const r = t.borderBoxSize[0];
    if (r)
      return Math.round(
        r[n.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  return e[n.options.horizontal ? "offsetWidth" : "offsetHeight"];
}, jM = (e, {
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
class PM {
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
        getItemKey: SM,
        rangeExtractor: kM,
        onChange: () => {
        },
        measureElement: EM,
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
      (n, r, s, i) => this.range = n.length > 0 && r > 0 ? AM({
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
        return Ed(
          r[Ip(
            0,
            r.length - 1,
            (s) => Ed(r[s]).start,
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
          YM(p[0], m) || l(f);
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
const Ip = (e, t, n, r) => {
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
function AM({
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
  let o = Ip(
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
const Cd = typeof document != "undefined" ? b.useLayoutEffect : b.useEffect;
function CM(e) {
  const t = b.useReducer(() => ({}), {})[1], n = {
    ...e,
    onChange: (s, i) => {
      var o;
      i ? dt(t) : t(), (o = e.onChange) == null || o.call(e, s, i);
    }
  }, [r] = b.useState(
    () => new PM(n)
  );
  return r.setOptions(n), Cd(() => r._didMount(), []), Cd(() => r._willUpdate()), r;
}
function $M(e) {
  return CM({
    observeElementRect: DM,
    observeElementOffset: TM,
    scrollToFn: jM,
    ...e
  });
}
function HM(e, t) {
  return e !== null && t !== null && typeof e == "object" && typeof t == "object" && "id" in e && "id" in t ? e.id === t.id : e === t;
}
function Fp(e = HM) {
  return X((t, n) => {
    if (typeof e == "string") {
      let r = e;
      return (t == null ? void 0 : t[r]) === (n == null ? void 0 : n[r]);
    }
    return e(t, n);
  }, [e]);
}
function $d(e) {
  if (e === null) return { width: 0, height: 0 };
  let { width: t, height: n } = e.getBoundingClientRect();
  return { width: t, height: n };
}
function Xl(e, t, n = !1) {
  let [r, s] = oe(() => $d(t));
  return Me(() => {
    if (!t || !e) return;
    let i = qe();
    return i.requestAnimationFrame(function o() {
      i.requestAnimationFrame(o), s((a) => {
        let l = $d(t);
        return l.width === a.width && l.height === a.height ? a : l;
      });
    }), () => {
      i.dispose();
    };
  }, [t, e]), n ? { width: `${r.width}px`, height: `${r.height}px` } : r;
}
var Zu = ((e) => (e[e.Left = 0] = "Left", e[e.Right = 2] = "Right", e))(Zu || {});
function Vp(e) {
  let t = q(null), n = Z((s) => {
    t.current = s.pointerType, !Po(s.currentTarget) && s.pointerType === "mouse" && s.button === Zu.Left && (s.preventDefault(), e(s));
  }), r = Z((s) => {
    t.current !== "mouse" && (Po(s.currentTarget) || e(s));
  });
  return { onPointerDown: n, onClick: r };
}
let zp = class extends Map {
  constructor(t) {
    super(), this.factory = t;
  }
  get(t) {
    let n = super.get(t);
    return n === void 0 && (n = this.factory(t), this.set(t, n)), n;
  }
};
var OM = Object.defineProperty, RM = (e, t, n) => t in e ? OM(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, NM = (e, t, n) => (RM(e, t + "", n), n), Bp = (e, t, n) => {
  if (!t.has(e)) throw TypeError("Cannot " + n);
}, et = (e, t, n) => (Bp(e, t, "read from private field"), n ? n.call(e) : t.get(e)), sl = (e, t, n) => {
  if (t.has(e)) throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Hd = (e, t, n, r) => (Bp(e, t, "write to private field"), t.set(e, n), n), ht, cr, dr;
let Qu = class {
  constructor(t) {
    sl(this, ht, {}), sl(this, cr, new zp(() => /* @__PURE__ */ new Set())), sl(this, dr, /* @__PURE__ */ new Set()), NM(this, "disposables", qe()), Hd(this, ht, t), yt.isServer && this.disposables.microTask(() => {
      this.dispose();
    });
  }
  dispose() {
    this.disposables.dispose();
  }
  get state() {
    return et(this, ht);
  }
  subscribe(t, n) {
    if (yt.isServer) return () => {
    };
    let r = { selector: t, callback: n, current: t(et(this, ht)) };
    return et(this, dr).add(r), this.disposables.add(() => {
      et(this, dr).delete(r);
    });
  }
  on(t, n) {
    return yt.isServer ? () => {
    } : (et(this, cr).get(t).add(n), this.disposables.add(() => {
      et(this, cr).get(t).delete(n);
    }));
  }
  send(t) {
    let n = this.reduce(et(this, ht), t);
    if (n !== et(this, ht)) {
      Hd(this, ht, n);
      for (let r of et(this, dr)) {
        let s = r.selector(et(this, ht));
        Wp(r.current, s) || (r.current = s, r.callback(s));
      }
      for (let r of et(this, cr).get(t.type)) r(et(this, ht), t);
    }
  }
};
ht = /* @__PURE__ */ new WeakMap(), cr = /* @__PURE__ */ new WeakMap(), dr = /* @__PURE__ */ new WeakMap();
function Wp(e, t) {
  return Object.is(e, t) ? !0 : typeof e != "object" || e === null || typeof t != "object" || t === null ? !1 : Array.isArray(e) && Array.isArray(t) ? e.length !== t.length ? !1 : il(e[Symbol.iterator](), t[Symbol.iterator]()) : e instanceof Map && t instanceof Map || e instanceof Set && t instanceof Set ? e.size !== t.size ? !1 : il(e.entries(), t.entries()) : Od(e) && Od(t) ? il(Object.entries(e)[Symbol.iterator](), Object.entries(t)[Symbol.iterator]()) : !1;
}
function il(e, t) {
  do {
    let n = e.next(), r = t.next();
    if (n.done && r.done) return !0;
    if (n.done || r.done || !Object.is(n.value, r.value)) return !1;
  } while (!0);
}
function Od(e) {
  if (Object.prototype.toString.call(e) !== "[object Object]") return !1;
  let t = Object.getPrototypeOf(e);
  return t === null || Object.getPrototypeOf(t) === null;
}
function al(e) {
  let [t, n] = e(), r = qe();
  return (...s) => {
    t(...s), r.dispose(), r.microTask(n);
  };
}
var IM = Object.defineProperty, FM = (e, t, n) => t in e ? IM(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Rd = (e, t, n) => (FM(e, typeof t != "symbol" ? t + "" : t, n), n), ec = ((e) => (e[e.Push = 0] = "Push", e[e.Pop = 1] = "Pop", e))(ec || {});
let VM = { 0(e, t) {
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
} }, zM = class Up extends Qu {
  constructor() {
    super(...arguments), Rd(this, "actions", { push: (t) => this.send({ type: 0, id: t }), pop: (t) => this.send({ type: 1, id: t }) }), Rd(this, "selectors", { isTop: (t, n) => t.stack[t.stack.length - 1] === n, inStack: (t, n) => t.stack.includes(n) });
  }
  static new() {
    return new Up({ stack: [] });
  }
  reduce(t, n) {
    return Ye(n.type, VM, t, n);
  }
};
const Gn = new zp(() => zM.new());
var Zl = { exports: {} }, ll = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nd;
function BM() {
  if (Nd) return ll;
  Nd = 1;
  var e = D;
  function t(l, u) {
    return l === u && (l !== 0 || 1 / l === 1 / u) || l !== l && u !== u;
  }
  var n = typeof Object.is == "function" ? Object.is : t, r = e.useSyncExternalStore, s = e.useRef, i = e.useEffect, o = e.useMemo, a = e.useDebugValue;
  return ll.useSyncExternalStoreWithSelector = function(l, u, c, d, f) {
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
              var S = p.value;
              if (f(S, w))
                return y = S;
            }
            return y = w;
          }
          if (S = y, n(M, w)) return S;
          var j = d(w);
          return f !== void 0 && f(S, j) ? (M = w, S) : (M = w, y = j);
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
  }, ll;
}
var ul = {};
/**
 * @license React
 * use-sync-external-store-with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Id;
function WM() {
  return Id || (Id = 1, process.env.NODE_ENV !== "production" && function() {
    function e(l, u) {
      return l === u && (l !== 0 || 1 / l === 1 / u) || l !== l && u !== u;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var t = D, n = typeof Object.is == "function" ? Object.is : e, r = t.useSyncExternalStore, s = t.useRef, i = t.useEffect, o = t.useMemo, a = t.useDebugValue;
    ul.useSyncExternalStoreWithSelector = function(l, u, c, d, f) {
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
                var S = p.value;
                if (f(S, w))
                  return y = S;
              }
              return y = w;
            }
            if (S = y, n(M, w))
              return S;
            var j = d(w);
            return f !== void 0 && f(S, j) ? (M = w, S) : (M = w, y = j);
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
  }()), ul;
}
process.env.NODE_ENV === "production" ? Zl.exports = BM() : Zl.exports = WM();
var UM = Zl.exports;
function ye(e, t, n = Wp) {
  return UM.useSyncExternalStoreWithSelector(Z((r) => e.subscribe(KM, r)), Z(() => e.state), Z(() => e.state), Z(t), n);
}
function KM(e) {
  return e;
}
function Br(e, t) {
  let n = je(), r = Gn.get(t), [s, i] = ye(r, X((o) => [r.selectors.isTop(o, n), r.selectors.inStack(o, n)], [r, n]));
  return Me(() => {
    if (e) return r.actions.push(n), () => r.actions.pop(n);
  }, [r, e, n]), e ? i ? s : !0 : !1;
}
let Ql = /* @__PURE__ */ new Map(), vr = /* @__PURE__ */ new Map();
function Fd(e) {
  var t;
  let n = (t = vr.get(e)) != null ? t : 0;
  return vr.set(e, n + 1), n !== 0 ? () => Vd(e) : (Ql.set(e, { "aria-hidden": e.getAttribute("aria-hidden"), inert: e.inert }), e.setAttribute("aria-hidden", "true"), e.inert = !0, () => Vd(e));
}
function Vd(e) {
  var t;
  let n = (t = vr.get(e)) != null ? t : 1;
  if (n === 1 ? vr.delete(e) : vr.set(e, n - 1), n !== 1) return;
  let r = Ql.get(e);
  r && (r["aria-hidden"] === null ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", r["aria-hidden"]), e.inert = r.inert, Ql.delete(e));
}
function tc(e, { allowed: t, disallowed: n } = {}) {
  let r = Br(e, "inert-others");
  Me(() => {
    var s, i;
    if (!r) return;
    let o = qe();
    for (let l of (s = n == null ? void 0 : n()) != null ? s : []) l && o.add(Fd(l));
    let a = (i = t == null ? void 0 : t()) != null ? i : [];
    for (let l of a) {
      if (!l) continue;
      let u = rn(l);
      if (!u) continue;
      let c = l.parentElement;
      for (; c && c !== u.body; ) {
        for (let d of c.children) a.some((f) => d.contains(f)) || o.add(Fd(d));
        c = c.parentElement;
      }
    }
    return o.dispose;
  }, [r, t, n]);
}
function nc(e, t, n) {
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
let Ao = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "details>summary", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(","), GM = ["[data-autofocus]"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
var ct = ((e) => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e[e.AutoFocus = 64] = "AutoFocus", e))(ct || {}), eu = ((e) => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(eu || {}), JM = ((e) => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(JM || {});
function Kp(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(Ao)).sort((t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)));
}
function qM(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(GM)).sort((t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var rc = ((e) => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(rc || {});
function Gp(e, t = 0) {
  var n;
  return e === ((n = rn(e)) == null ? void 0 : n.body) ? !1 : Ye(t, { 0() {
    return e.matches(Ao);
  }, 1() {
    let r = e;
    for (; r !== null; ) {
      if (r.matches(Ao)) return !0;
      r = r.parentElement;
    }
    return !1;
  } });
}
var XM = ((e) => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(XM || {});
typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("keydown", (e) => {
  e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0), document.addEventListener("click", (e) => {
  e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, !0));
function Ct(e) {
  e == null || e.focus({ preventScroll: !0 });
}
let ZM = ["textarea", "input"].join(",");
function QM(e) {
  var t, n;
  return (n = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, ZM)) != null ? n : !1;
}
function oc(e, t = (n) => n) {
  return e.slice().sort((n, r) => {
    let s = t(n), i = t(r);
    if (s === null || i === null) return 0;
    let o = s.compareDocumentPosition(i);
    return o & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : o & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function eb(e, t, n = e === null ? document.body : Eo(e)) {
  return On(Kp(n), t, { relativeTo: e });
}
function On(e, t, { sorted: n = !0, relativeTo: r = null, skipElements: s = [] } = {}) {
  let i = Array.isArray(e) ? e.length > 0 ? Eo(e[0]) : document : Eo(e), o = Array.isArray(e) ? n ? oc(e) : e : t & 64 ? qM(e) : Kp(e);
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
  } while (f !== Lp(f));
  return t & 6 && QM(f) && f.select(), 2;
}
function Jp() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function tb() {
  return /Android/gi.test(window.navigator.userAgent);
}
function tu() {
  return Jp() || tb();
}
function Dn(e, t, n, r) {
  let s = Ft(n);
  ue(() => {
    if (!e) return;
    function i(o) {
      s.current(o);
    }
    return document.addEventListener(t, i, r), () => document.removeEventListener(t, i, r);
  }, [e, t, r]);
}
function qp(e, t, n, r) {
  let s = Ft(n);
  ue(() => {
    if (!e) return;
    function i(o) {
      s.current(o);
    }
    return window.addEventListener(t, i, r), () => window.removeEventListener(t, i, r);
  }, [e, t, r]);
}
const zd = 30;
function sc(e, t, n) {
  let r = Ft(n), s = X(function(a, l) {
    if (a.defaultPrevented) return;
    let u = l(a);
    if (u === null || !u.getRootNode().contains(u) || !u.isConnected) return;
    let c = function d(f) {
      return typeof f == "function" ? d(f()) : Array.isArray(f) || f instanceof Set ? f : [f];
    }(t);
    for (let d of c) if (d !== null && (d.contains(u) || a.composed && a.composedPath().includes(d))) return;
    return !Gp(u, rc.Loose) && u.tabIndex !== -1 && a.preventDefault(), r.current(a, u);
  }, [r, t]), i = q(null);
  Dn(e, "pointerdown", (a) => {
    var l, u;
    tu() || (i.current = ((u = (l = a.composedPath) == null ? void 0 : l.call(a)) == null ? void 0 : u[0]) || a.target);
  }, !0), Dn(e, "pointerup", (a) => {
    if (tu() || !i.current) return;
    let l = i.current;
    return i.current = null, s(a, () => l);
  }, !0);
  let o = q({ x: 0, y: 0 });
  Dn(e, "touchstart", (a) => {
    o.current.x = a.touches[0].clientX, o.current.y = a.touches[0].clientY;
  }, !0), Dn(e, "touchend", (a) => {
    let l = { x: a.changedTouches[0].clientX, y: a.changedTouches[0].clientY };
    if (!(Math.abs(l.x - o.current.x) >= zd || Math.abs(l.y - o.current.y) >= zd)) return s(a, () => ft(a.target) ? a.target : null);
  }, !0), qp(e, "blur", (a) => s(a, () => mM(window.document.activeElement) ? window.document.activeElement : null), !0);
}
function yn(...e) {
  return pe(() => rn(...e), [...e]);
}
var nb = ((e) => (e[e.Ignore = 0] = "Ignore", e[e.Select = 1] = "Select", e[e.Close = 2] = "Close", e))(nb || {});
const Et = { Ignore: { kind: 0 }, Select: (e) => ({ kind: 1, target: e }), Close: { kind: 2 } }, rb = 200, Bd = 5;
function Xp(e, { trigger: t, action: n, close: r, select: s }) {
  let i = q(null), o = q(null), a = q(null);
  Dn(e && t !== null, "pointerdown", (l) => {
    jp(l == null ? void 0 : l.target) && t != null && t.contains(l.target) && (o.current = l.x, a.current = l.y, i.current = l.timeStamp);
  }), Dn(e && t !== null, "pointerup", (l) => {
    var u, c;
    let d = i.current;
    if (d === null || (i.current = null, !ft(l.target)) || Math.abs(l.x - ((u = o.current) != null ? u : l.x)) < Bd && Math.abs(l.y - ((c = a.current) != null ? c : l.y)) < Bd) return;
    let f = n(l);
    switch (f.kind) {
      case 0:
        return;
      case 1: {
        l.timeStamp - d > rb && (s(f.target), r());
        break;
      }
      case 2: {
        r();
        break;
      }
    }
  }, { capture: !0 });
}
function ic(e, t, n, r) {
  let s = Ft(n);
  ue(() => {
    e = e != null ? e : window;
    function i(o) {
      s.current(o);
    }
    return e.addEventListener(t, i, r), () => e.removeEventListener(t, i, r);
  }, [e, t, r]);
}
function Zp(e) {
  let t = q({ value: "", selectionStart: null, selectionEnd: null });
  return ic(e, "blur", (n) => {
    let r = n.target;
    jo(r) && (t.current = { value: r.value, selectionStart: r.selectionStart, selectionEnd: r.selectionEnd });
  }), Z(() => {
    if (!wa(e) && jo(e) && e.isConnected) {
      if (e.focus({ preventScroll: !0 }), e.value !== t.current.value) e.setSelectionRange(e.value.length, e.value.length);
      else {
        let { selectionStart: n, selectionEnd: r } = t.current;
        n !== null && r !== null && e.setSelectionRange(n, r);
      }
      t.current = { value: "", selectionStart: null, selectionEnd: null };
    }
  });
}
function Ta(e, t) {
  return pe(() => {
    var n;
    if (e.type) return e.type;
    let r = (n = e.as) != null ? n : "button";
    if (typeof r == "string" && r.toLowerCase() === "button" || (t == null ? void 0 : t.tagName) === "BUTTON" && !t.hasAttribute("type")) return "button";
  }, [e.type, e.as, t]);
}
function ob(e) {
  return gy(e.subscribe, e.getSnapshot, e.getSnapshot);
}
function sb(e, t) {
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
function ib() {
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
function ab() {
  return Jp() ? { before({ doc: e, d: t, meta: n }) {
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
          if (a.dispose(), ft(l.target) && fM(l.target)) if (r(l.target)) {
            let u = l.target;
            for (; u.parentElement && r(u.parentElement); ) u = u.parentElement;
            a.style(u, "overscrollBehavior", "contain");
          } else a.style(l.target, "touchAction", "none");
        });
      }), t.addEventListener(e, "touchmove", (a) => {
        if (ft(a.target)) {
          if (jo(a.target)) return;
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
function lb() {
  return { before({ doc: e, d: t }) {
    t.style(e.documentElement, "overflow", "hidden");
  } };
}
function Wd(e) {
  let t = {};
  for (let n of e) Object.assign(t, n(t));
  return t;
}
let fn = sb(() => /* @__PURE__ */ new Map(), { PUSH(e, t) {
  var n;
  let r = (n = this.get(e)) != null ? n : { doc: e, count: 0, d: qe(), meta: /* @__PURE__ */ new Set(), computedMeta: {} };
  return r.count++, r.meta.add(t), r.computedMeta = Wd(r.meta), this.set(e, r), this;
}, POP(e, t) {
  let n = this.get(e);
  return n && (n.count--, n.meta.delete(t), n.computedMeta = Wd(n.meta)), this;
}, SCROLL_PREVENT(e) {
  let t = { doc: e.doc, d: e.d, meta() {
    return e.computedMeta;
  } }, n = [ab(), ib(), lb()];
  n.forEach(({ before: r }) => r == null ? void 0 : r(t)), n.forEach(({ after: r }) => r == null ? void 0 : r(t));
}, SCROLL_ALLOW({ d: e }) {
  e.dispose();
}, TEARDOWN({ doc: e }) {
  this.delete(e);
} });
fn.subscribe(() => {
  let e = fn.getSnapshot(), t = /* @__PURE__ */ new Map();
  for (let [n] of e) t.set(n, n.documentElement.style.overflow);
  for (let n of e.values()) {
    let r = t.get(n.doc) === "hidden", s = n.count !== 0;
    (s && !r || !s && r) && fn.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n), n.count === 0 && fn.dispatch("TEARDOWN", n);
  }
});
function ub(e, t, n = () => ({ containers: [] })) {
  let r = ob(fn), s = t ? r.get(t) : void 0, i = s ? s.count > 0 : !1;
  return Me(() => {
    if (!(!t || !e)) return fn.dispatch("PUSH", t, n), () => fn.dispatch("POP", t, n);
  }, [e, t]), i;
}
function ac(e, t, n = () => [document.body]) {
  let r = Br(e, "scroll-lock");
  ub(r, t, (s) => {
    var i;
    return { containers: [...(i = s.containers) != null ? i : [], n] };
  });
}
function Ud(e) {
  return [e.screenX, e.screenY];
}
function Qp() {
  let e = q([-1, -1]);
  return { wasMoved(t) {
    let n = Ud(t);
    return e.current[0] === n[0] && e.current[1] === n[1] ? !1 : (e.current = n, !0);
  }, update(t) {
    e.current = Ud(t);
  } };
}
function cb(e = 0) {
  let [t, n] = oe(e), r = X((l) => n(l), []), s = X((l) => n((u) => u | l), []), i = X((l) => (t & l) === l, [t]), o = X((l) => n((u) => u & ~l), []), a = X((l) => n((u) => u ^ l), []);
  return { flags: t, setFlag: r, addFlag: s, hasFlag: i, removeFlag: o, toggleFlag: a };
}
var Kd, Gd;
typeof process != "undefined" && typeof globalThis != "undefined" && typeof Element != "undefined" && ((Kd = process == null ? void 0 : process.env) == null ? void 0 : Kd.NODE_ENV) === "test" && typeof ((Gd = Element == null ? void 0 : Element.prototype) == null ? void 0 : Gd.getAnimations) == "undefined" && (Element.prototype.getAnimations = function() {
  return console.warn(["Headless UI has polyfilled `Element.prototype.getAnimations` for your tests.", "Please install a proper polyfill e.g. `jsdom-testing-mocks`, to silence these warnings.", "", "Example usage:", "```js", "import { mockAnimationsApi } from 'jsdom-testing-mocks'", "mockAnimationsApi()", "```"].join(`
`)), [];
});
var db = ((e) => (e[e.None = 0] = "None", e[e.Closed = 1] = "Closed", e[e.Enter = 2] = "Enter", e[e.Leave = 4] = "Leave", e))(db || {});
function Ea(e) {
  let t = {};
  for (let n in e) e[n] === !0 && (t[`data-${n}`] = "");
  return t;
}
function ja(e, t, n, r) {
  let [s, i] = oe(n), { hasFlag: o, addFlag: a, removeFlag: l } = cb(e && s ? 3 : 0), u = q(!1), c = q(!1), d = kt();
  return Me(() => {
    var f;
    if (e) {
      if (n && i(!0), !t) {
        n && a(3);
        return;
      }
      return (f = r == null ? void 0 : r.start) == null || f.call(r, n), fb(t, { inFlight: u, prepare() {
        c.current ? c.current = !1 : c.current = u.current, u.current = !0, !c.current && (n ? (a(3), l(4)) : (a(4), l(2)));
      }, run() {
        c.current ? n ? (l(3), a(4)) : (l(4), a(3)) : n ? l(1) : a(1);
      }, done() {
        var m;
        c.current && hb(t) || (u.current = !1, l(7), n || i(!1), (m = r == null ? void 0 : r.end) == null || m.call(r, n));
      } });
    }
  }, [e, n, t, d]), e ? [s, { closed: o(1), enter: o(2), leave: o(4), transition: o(2) || o(4) }] : [n, { closed: void 0, enter: void 0, leave: void 0, transition: void 0 }];
}
function fb(e, { prepare: t, run: n, done: r, inFlight: s }) {
  let i = qe();
  return pb(e, { prepare: t, inFlight: s }), i.nextFrame(() => {
    n(), i.requestAnimationFrame(() => {
      i.add(mb(e, r));
    });
  }), i.dispose;
}
function mb(e, t) {
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
function pb(e, { inFlight: t, prepare: n }) {
  if (t != null && t.current) {
    n();
    return;
  }
  let r = e.style.transition;
  e.style.transition = "none", n(), e.offsetHeight, e.style.transition = r;
}
function hb(e) {
  var t, n;
  return ((n = (t = e.getAnimations) == null ? void 0 : t.call(e)) != null ? n : []).some((r) => r instanceof CSSTransition && r.playState !== "finished");
}
function _b(e, { container: t, accept: n, walk: r }) {
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
function Yr(e, t) {
  let n = q([]), r = Z(e);
  ue(() => {
    let s = [...n.current];
    for (let [i, o] of t.entries()) if (n.current[i] !== o) {
      let a = r(t, s);
      return n.current = t, a;
    }
  }, [r, ...t]);
}
function Pa() {
  return typeof window != "undefined";
}
function Jn(e) {
  return eh(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Qe(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Dt(e) {
  var t;
  return (t = (eh(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function eh(e) {
  return Pa() ? e instanceof Node || e instanceof Qe(e).Node : !1;
}
function Ie(e) {
  return Pa() ? e instanceof Element || e instanceof Qe(e).Element : !1;
}
function Yt(e) {
  return Pa() ? e instanceof HTMLElement || e instanceof Qe(e).HTMLElement : !1;
}
function Jd(e) {
  return !Pa() || typeof ShadowRoot == "undefined" ? !1 : e instanceof ShadowRoot || e instanceof Qe(e).ShadowRoot;
}
const vb = /* @__PURE__ */ new Set(["inline", "contents"]);
function Wr(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: s
  } = pt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !vb.has(s);
}
const gb = /* @__PURE__ */ new Set(["table", "td", "th"]);
function yb(e) {
  return gb.has(Jn(e));
}
const Mb = [":popover-open", ":modal"];
function Aa(e) {
  return Mb.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const bb = ["transform", "translate", "scale", "rotate", "perspective"], xb = ["transform", "translate", "scale", "rotate", "perspective", "filter"], wb = ["paint", "layout", "strict", "content"];
function lc(e) {
  const t = uc(), n = Ie(e) ? pt(e) : e;
  return bb.some((r) => n[r] ? n[r] !== "none" : !1) || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || xb.some((r) => (n.willChange || "").includes(r)) || wb.some((r) => (n.contain || "").includes(r));
}
function Yb(e) {
  let t = Zt(e);
  for (; Yt(t) && !Vn(t); ) {
    if (lc(t))
      return t;
    if (Aa(t))
      return null;
    t = Zt(t);
  }
  return null;
}
function uc() {
  return typeof CSS == "undefined" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const Lb = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function Vn(e) {
  return Lb.has(Jn(e));
}
function pt(e) {
  return Qe(e).getComputedStyle(e);
}
function Ca(e) {
  return Ie(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function Zt(e) {
  if (Jn(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Jd(e) && e.host || // Fallback.
    Dt(e)
  );
  return Jd(t) ? t.host : t;
}
function th(e) {
  const t = Zt(e);
  return Vn(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Yt(t) && Wr(t) ? t : th(t);
}
function Lr(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const s = th(e), i = s === ((r = e.ownerDocument) == null ? void 0 : r.body), o = Qe(s);
  if (i) {
    const a = nu(o);
    return t.concat(o, o.visualViewport || [], Wr(s) ? s : [], a && n ? Lr(a) : []);
  }
  return t.concat(s, Lr(s, [], n));
}
function nu(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Sb() {
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? e.brands.map((t) => {
    let {
      brand: n,
      version: r
    } = t;
    return n + "/" + r;
  }).join(" ") : navigator.userAgent;
}
const kb = ["top", "right", "bottom", "left"], $t = Math.min, Re = Math.max, Sr = Math.round, io = Math.floor, Mt = (e) => ({
  x: e,
  y: e
}), Db = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Tb = {
  start: "end",
  end: "start"
};
function ru(e, t, n) {
  return Re(e, $t(t, n));
}
function Lt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ht(e) {
  return e.split("-")[0];
}
function qn(e) {
  return e.split("-")[1];
}
function cc(e) {
  return e === "x" ? "y" : "x";
}
function dc(e) {
  return e === "y" ? "height" : "width";
}
const Eb = /* @__PURE__ */ new Set(["top", "bottom"]);
function gt(e) {
  return Eb.has(Ht(e)) ? "y" : "x";
}
function fc(e) {
  return cc(gt(e));
}
function jb(e, t, n) {
  n === void 0 && (n = !1);
  const r = qn(e), s = fc(e), i = dc(s);
  let o = s === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (o = Co(o)), [o, Co(o)];
}
function Pb(e) {
  const t = Co(e);
  return [ou(e), t, ou(t)];
}
function ou(e) {
  return e.replace(/start|end/g, (t) => Tb[t]);
}
const qd = ["left", "right"], Xd = ["right", "left"], Ab = ["top", "bottom"], Cb = ["bottom", "top"];
function $b(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? Xd : qd : t ? qd : Xd;
    case "left":
    case "right":
      return t ? Ab : Cb;
    default:
      return [];
  }
}
function Hb(e, t, n, r) {
  const s = qn(e);
  let i = $b(Ht(e), n === "start", r);
  return s && (i = i.map((o) => o + "-" + s), t && (i = i.concat(i.map(ou)))), i;
}
function Co(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Db[t]);
}
function Ob(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function nh(e) {
  return typeof e != "number" ? Ob(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function $o(e) {
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
function Zd(e, t, n) {
  let {
    reference: r,
    floating: s
  } = e;
  const i = gt(t), o = fc(t), a = dc(o), l = Ht(t), u = i === "y", c = r.x + r.width / 2 - s.width / 2, d = r.y + r.height / 2 - s.height / 2, f = r[a] / 2 - s[a] / 2;
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
  switch (qn(t)) {
    case "start":
      m[o] -= f * (n && u ? -1 : 1);
      break;
    case "end":
      m[o] += f * (n && u ? -1 : 1);
      break;
  }
  return m;
}
const Rb = async (e, t, n) => {
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
  } = Zd(u, r, l), f = r, m = {}, p = 0;
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
    } = Zd(u, f, l)), h = -1);
  }
  return {
    x: c,
    y: d,
    placement: f,
    strategy: s,
    middlewareData: m
  };
};
async function zn(e, t) {
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
  } = Lt(t, e), p = nh(m), _ = a[f ? d === "floating" ? "reference" : "floating" : d], v = $o(await i.getClippingRect({
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
  }, w = $o(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
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
const Nb = (e) => ({
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
    const d = nh(c), f = {
      x: n,
      y: r
    }, m = fc(s), p = dc(m), h = await o.getDimensions(u), _ = m === "y", v = _ ? "top" : "left", M = _ ? "bottom" : "right", y = _ ? "clientHeight" : "clientWidth", x = i.reference[p] + i.reference[m] - f[m] - i.floating[p], w = f[m] - i.reference[m], S = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(u));
    let j = S ? S[y] : 0;
    (!j || !await (o.isElement == null ? void 0 : o.isElement(S))) && (j = a.floating[y] || i.floating[p]);
    const Y = x / 2 - w / 2, I = j / 2 - h[p] / 2 - 1, k = $t(d[v], I), C = $t(d[M], I), N = k, U = j - h[p] - C, O = j / 2 - h[p] / 2 + Y, E = ru(N, O, U), $ = !l.arrow && qn(s) != null && O !== E && i.reference[p] / 2 - (O < N ? k : C) - h[p] / 2 < 0, R = $ ? O < N ? O - N : O - U : 0;
    return {
      [m]: f[m] + R,
      data: {
        [m]: E,
        centerOffset: O - E - R,
        ...$ && {
          alignmentOffset: R
        }
      },
      reset: $
    };
  }
}), Ib = function(e) {
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
      const v = Ht(s), M = gt(a), y = Ht(a) === a, x = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), w = f || (y || !h ? [Co(a)] : Pb(a)), S = p !== "none";
      !f && S && w.push(...Hb(a, h, p, x));
      const j = [a, ...w], Y = await zn(t, _), I = [];
      let k = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (c && I.push(Y[v]), d) {
        const O = jb(s, o, x);
        I.push(Y[O[0]], Y[O[1]]);
      }
      if (k = [...k, {
        placement: s,
        overflows: I
      }], !I.every((O) => O <= 0)) {
        var C, N;
        const O = (((C = i.flip) == null ? void 0 : C.index) || 0) + 1, E = j[O];
        if (E && (!(d === "alignment" ? M !== gt(E) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        k.every((L) => gt(L.placement) === M ? L.overflows[0] > 0 : !0)))
          return {
            data: {
              index: O,
              overflows: k
            },
            reset: {
              placement: E
            }
          };
        let $ = (N = k.filter((R) => R.overflows[0] <= 0).sort((R, L) => R.overflows[1] - L.overflows[1])[0]) == null ? void 0 : N.placement;
        if (!$)
          switch (m) {
            case "bestFit": {
              var U;
              const R = (U = k.filter((L) => {
                if (S) {
                  const P = gt(L.placement);
                  return P === M || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  P === "y";
                }
                return !0;
              }).map((L) => [L.placement, L.overflows.filter((P) => P > 0).reduce((P, B) => P + B, 0)]).sort((L, P) => L[1] - P[1])[0]) == null ? void 0 : U[0];
              R && ($ = R);
              break;
            }
            case "initialPlacement":
              $ = a;
              break;
          }
        if (s !== $)
          return {
            reset: {
              placement: $
            }
          };
      }
      return {};
    }
  };
};
function Qd(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function ef(e) {
  return kb.some((t) => e[t] >= 0);
}
const Fb = function(e) {
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
          const i = await zn(t, {
            ...s,
            elementContext: "reference"
          }), o = Qd(i, n.reference);
          return {
            data: {
              referenceHiddenOffsets: o,
              referenceHidden: ef(o)
            }
          };
        }
        case "escaped": {
          const i = await zn(t, {
            ...s,
            altBoundary: !0
          }), o = Qd(i, n.floating);
          return {
            data: {
              escapedOffsets: o,
              escaped: ef(o)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, rh = /* @__PURE__ */ new Set(["left", "top"]);
async function Vb(e, t) {
  const {
    placement: n,
    platform: r,
    elements: s
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(s.floating)), o = Ht(n), a = qn(n), l = gt(n) === "y", u = rh.has(o) ? -1 : 1, c = i && l ? -1 : 1, d = Lt(t, e);
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
const zb = function(e) {
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
      } = t, l = await Vb(t, e);
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
}, Bb = function(e) {
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
      }, c = await zn(t, l), d = gt(Ht(s)), f = cc(d);
      let m = u[f], p = u[d];
      if (i) {
        const _ = f === "y" ? "top" : "left", v = f === "y" ? "bottom" : "right", M = m + c[_], y = m - c[v];
        m = ru(M, m, y);
      }
      if (o) {
        const _ = d === "y" ? "top" : "left", v = d === "y" ? "bottom" : "right", M = p + c[_], y = p - c[v];
        p = ru(M, p, y);
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
}, Wb = function(e) {
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
      }, d = gt(s), f = cc(d);
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
        const y = f === "y" ? "width" : "height", x = rh.has(Ht(s)), w = i.reference[d] - i.floating[y] + (x && ((v = o.offset) == null ? void 0 : v[d]) || 0) + (x ? 0 : _.crossAxis), S = i.reference[d] + i.reference[y] + (x ? 0 : ((M = o.offset) == null ? void 0 : M[d]) || 0) - (x ? _.crossAxis : 0);
        p < w ? p = w : p > S && (p = S);
      }
      return {
        [f]: m,
        [d]: p
      };
    }
  };
}, Ub = function(e) {
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
      } = Lt(e, t), c = await zn(t, u), d = Ht(s), f = qn(s), m = gt(s) === "y", {
        width: p,
        height: h
      } = i.floating;
      let _, v;
      d === "top" || d === "bottom" ? (_ = d, v = f === (await (o.isRTL == null ? void 0 : o.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (v = d, _ = f === "end" ? "top" : "bottom");
      const M = h - c.top - c.bottom, y = p - c.left - c.right, x = $t(h - c[_], M), w = $t(p - c[v], y), S = !t.middlewareData.shift;
      let j = x, Y = w;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (Y = y), (r = t.middlewareData.shift) != null && r.enabled.y && (j = M), S && !f) {
        const k = Re(c.left, 0), C = Re(c.right, 0), N = Re(c.top, 0), U = Re(c.bottom, 0);
        m ? Y = p - 2 * (k !== 0 || C !== 0 ? k + C : Re(c.left, c.right)) : j = h - 2 * (N !== 0 || U !== 0 ? N + U : Re(c.top, c.bottom));
      }
      await l({
        ...t,
        availableWidth: Y,
        availableHeight: j
      });
      const I = await o.getDimensions(a.floating);
      return p !== I.width || h !== I.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function oh(e) {
  const t = pt(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const s = Yt(e), i = s ? e.offsetWidth : n, o = s ? e.offsetHeight : r, a = Sr(n) !== i || Sr(r) !== o;
  return a && (n = i, r = o), {
    width: n,
    height: r,
    $: a
  };
}
function mc(e) {
  return Ie(e) ? e : e.contextElement;
}
function Rn(e) {
  const t = mc(e);
  if (!Yt(t))
    return Mt(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: s,
    $: i
  } = oh(t);
  let o = (i ? Sr(n.width) : n.width) / r, a = (i ? Sr(n.height) : n.height) / s;
  return (!o || !Number.isFinite(o)) && (o = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: o,
    y: a
  };
}
const Kb = /* @__PURE__ */ Mt(0);
function sh(e) {
  const t = Qe(e);
  return !uc() || !t.visualViewport ? Kb : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Gb(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Qe(e) ? !1 : t;
}
function Mn(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const s = e.getBoundingClientRect(), i = mc(e);
  let o = Mt(1);
  t && (r ? Ie(r) && (o = Rn(r)) : o = Rn(e));
  const a = Gb(i, n, r) ? sh(i) : Mt(0);
  let l = (s.left + a.x) / o.x, u = (s.top + a.y) / o.y, c = s.width / o.x, d = s.height / o.y;
  if (i) {
    const f = Qe(i), m = r && Ie(r) ? Qe(r) : r;
    let p = f, h = nu(p);
    for (; h && r && m !== p; ) {
      const _ = Rn(h), v = h.getBoundingClientRect(), M = pt(h), y = v.left + (h.clientLeft + parseFloat(M.paddingLeft)) * _.x, x = v.top + (h.clientTop + parseFloat(M.paddingTop)) * _.y;
      l *= _.x, u *= _.y, c *= _.x, d *= _.y, l += y, u += x, p = Qe(h), h = nu(p);
    }
  }
  return $o({
    width: c,
    height: d,
    x: l,
    y: u
  });
}
function $a(e, t) {
  const n = Ca(e).scrollLeft;
  return t ? t.left + n : Mn(Dt(e)).left + n;
}
function ih(e, t) {
  const n = e.getBoundingClientRect(), r = n.left + t.scrollLeft - $a(e, n), s = n.top + t.scrollTop;
  return {
    x: r,
    y: s
  };
}
function Jb(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: s
  } = e;
  const i = s === "fixed", o = Dt(r), a = t ? Aa(t.floating) : !1;
  if (r === o || a && i)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = Mt(1);
  const c = Mt(0), d = Yt(r);
  if ((d || !d && !i) && ((Jn(r) !== "body" || Wr(o)) && (l = Ca(r)), Yt(r))) {
    const m = Mn(r);
    u = Rn(r), c.x = m.x + r.clientLeft, c.y = m.y + r.clientTop;
  }
  const f = o && !d && !i ? ih(o, l) : Mt(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + c.x + f.x,
    y: n.y * u.y - l.scrollTop * u.y + c.y + f.y
  };
}
function qb(e) {
  return Array.from(e.getClientRects());
}
function Xb(e) {
  const t = Dt(e), n = Ca(e), r = e.ownerDocument.body, s = Re(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = Re(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let o = -n.scrollLeft + $a(e);
  const a = -n.scrollTop;
  return pt(r).direction === "rtl" && (o += Re(t.clientWidth, r.clientWidth) - s), {
    width: s,
    height: i,
    x: o,
    y: a
  };
}
const tf = 25;
function Zb(e, t) {
  const n = Qe(e), r = Dt(e), s = n.visualViewport;
  let i = r.clientWidth, o = r.clientHeight, a = 0, l = 0;
  if (s) {
    i = s.width, o = s.height;
    const c = uc();
    (!c || c && t === "fixed") && (a = s.offsetLeft, l = s.offsetTop);
  }
  const u = $a(r);
  if (u <= 0) {
    const c = r.ownerDocument, d = c.body, f = getComputedStyle(d), m = c.compatMode === "CSS1Compat" && parseFloat(f.marginLeft) + parseFloat(f.marginRight) || 0, p = Math.abs(r.clientWidth - d.clientWidth - m);
    p <= tf && (i -= p);
  } else u <= tf && (i += u);
  return {
    width: i,
    height: o,
    x: a,
    y: l
  };
}
const Qb = /* @__PURE__ */ new Set(["absolute", "fixed"]);
function ex(e, t) {
  const n = Mn(e, !0, t === "fixed"), r = n.top + e.clientTop, s = n.left + e.clientLeft, i = Yt(e) ? Rn(e) : Mt(1), o = e.clientWidth * i.x, a = e.clientHeight * i.y, l = s * i.x, u = r * i.y;
  return {
    width: o,
    height: a,
    x: l,
    y: u
  };
}
function nf(e, t, n) {
  let r;
  if (t === "viewport")
    r = Zb(e, n);
  else if (t === "document")
    r = Xb(Dt(e));
  else if (Ie(t))
    r = ex(t, n);
  else {
    const s = sh(e);
    r = {
      x: t.x - s.x,
      y: t.y - s.y,
      width: t.width,
      height: t.height
    };
  }
  return $o(r);
}
function ah(e, t) {
  const n = Zt(e);
  return n === t || !Ie(n) || Vn(n) ? !1 : pt(n).position === "fixed" || ah(n, t);
}
function tx(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Lr(e, [], !1).filter((a) => Ie(a) && Jn(a) !== "body"), s = null;
  const i = pt(e).position === "fixed";
  let o = i ? Zt(e) : e;
  for (; Ie(o) && !Vn(o); ) {
    const a = pt(o), l = lc(o);
    !l && a.position === "fixed" && (s = null), (i ? !l && !s : !l && a.position === "static" && !!s && Qb.has(s.position) || Wr(o) && !l && ah(e, o)) ? r = r.filter((c) => c !== o) : s = a, o = Zt(o);
  }
  return t.set(e, r), r;
}
function nx(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: s
  } = e;
  const o = [...n === "clippingAncestors" ? Aa(t) ? [] : tx(t, this._c) : [].concat(n), r], a = o[0], l = o.reduce((u, c) => {
    const d = nf(t, c, s);
    return u.top = Re(d.top, u.top), u.right = $t(d.right, u.right), u.bottom = $t(d.bottom, u.bottom), u.left = Re(d.left, u.left), u;
  }, nf(t, a, s));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function rx(e) {
  const {
    width: t,
    height: n
  } = oh(e);
  return {
    width: t,
    height: n
  };
}
function ox(e, t, n) {
  const r = Yt(t), s = Dt(t), i = n === "fixed", o = Mn(e, !0, i, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Mt(0);
  function u() {
    l.x = $a(s);
  }
  if (r || !r && !i)
    if ((Jn(t) !== "body" || Wr(s)) && (a = Ca(t)), r) {
      const m = Mn(t, !0, i, t);
      l.x = m.x + t.clientLeft, l.y = m.y + t.clientTop;
    } else s && u();
  i && !r && s && u();
  const c = s && !r && !i ? ih(s, a) : Mt(0), d = o.left + a.scrollLeft - l.x - c.x, f = o.top + a.scrollTop - l.y - c.y;
  return {
    x: d,
    y: f,
    width: o.width,
    height: o.height
  };
}
function cl(e) {
  return pt(e).position === "static";
}
function rf(e, t) {
  if (!Yt(e) || pt(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Dt(e) === n && (n = n.ownerDocument.body), n;
}
function lh(e, t) {
  const n = Qe(e);
  if (Aa(e))
    return n;
  if (!Yt(e)) {
    let s = Zt(e);
    for (; s && !Vn(s); ) {
      if (Ie(s) && !cl(s))
        return s;
      s = Zt(s);
    }
    return n;
  }
  let r = rf(e, t);
  for (; r && yb(r) && cl(r); )
    r = rf(r, t);
  return r && Vn(r) && cl(r) && !lc(r) ? n : r || Yb(e) || n;
}
const sx = async function(e) {
  const t = this.getOffsetParent || lh, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: ox(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function ix(e) {
  return pt(e).direction === "rtl";
}
const ax = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Jb,
  getDocumentElement: Dt,
  getClippingRect: nx,
  getOffsetParent: lh,
  getElementRects: sx,
  getClientRects: qb,
  getDimensions: rx,
  getScale: Rn,
  isElement: Ie,
  isRTL: ix
};
function uh(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function lx(e, t) {
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
    const p = io(d), h = io(s.clientWidth - (c + f)), _ = io(s.clientHeight - (d + m)), v = io(c), y = {
      rootMargin: -p + "px " + -h + "px " + -_ + "px " + -v + "px",
      threshold: Re(0, $t(1, l)) || 1
    };
    let x = !0;
    function w(S) {
      const j = S[0].intersectionRatio;
      if (j !== l) {
        if (!x)
          return o();
        j ? o(!1, j) : r = setTimeout(() => {
          o(!1, 1e-7);
        }, 1e3);
      }
      j === 1 && !uh(u, e.getBoundingClientRect()) && o(), x = !1;
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
function ch(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: s = !0,
    ancestorResize: i = !0,
    elementResize: o = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, u = mc(e), c = s || i ? [...u ? Lr(u) : [], ...Lr(t)] : [];
  c.forEach((v) => {
    s && v.addEventListener("scroll", n, {
      passive: !0
    }), i && v.addEventListener("resize", n);
  });
  const d = u && a ? lx(u, n) : null;
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
    h && !uh(h, v) && n(), h = v, p = requestAnimationFrame(_);
  }
  return n(), () => {
    var v;
    c.forEach((M) => {
      s && M.removeEventListener("scroll", n), i && M.removeEventListener("resize", n);
    }), d == null || d(), (v = m) == null || v.disconnect(), m = null, l && cancelAnimationFrame(p);
  };
}
const dl = zn, ux = zb, cx = Bb, dx = Ib, fx = Ub, mx = Fb, of = Nb, px = Wb, hx = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), s = {
    platform: ax,
    ...n
  }, i = {
    ...s.platform,
    _c: r
  };
  return Rb(e, t, {
    ...s,
    platform: i
  });
};
var _x = typeof document != "undefined", vx = function() {
}, Mo = _x ? Ma : vx;
function Ho(e, t) {
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
        if (!Ho(e[r], t[r]))
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
      if (!(i === "_owner" && e.$$typeof) && !Ho(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function dh(e) {
  return typeof window == "undefined" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function sf(e, t) {
  const n = dh(e);
  return Math.round(t * n) / n;
}
function fl(e) {
  const t = b.useRef(e);
  return Mo(() => {
    t.current = e;
  }), t;
}
function fh(e) {
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
  Ho(f, r) || m(r);
  const [p, h] = b.useState(null), [_, v] = b.useState(null), M = b.useCallback((L) => {
    L !== S.current && (S.current = L, h(L));
  }, []), y = b.useCallback((L) => {
    L !== j.current && (j.current = L, v(L));
  }, []), x = i || p, w = o || _, S = b.useRef(null), j = b.useRef(null), Y = b.useRef(c), I = l != null, k = fl(l), C = fl(s), N = fl(u), U = b.useCallback(() => {
    if (!S.current || !j.current)
      return;
    const L = {
      placement: t,
      strategy: n,
      middleware: f
    };
    C.current && (L.platform = C.current), hx(S.current, j.current, L).then((P) => {
      const B = {
        ...P,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: N.current !== !1
      };
      O.current && !Ho(Y.current, B) && (Y.current = B, xr.flushSync(() => {
        d(B);
      }));
    });
  }, [f, t, n, C, N]);
  Mo(() => {
    u === !1 && Y.current.isPositioned && (Y.current.isPositioned = !1, d((L) => ({
      ...L,
      isPositioned: !1
    })));
  }, [u]);
  const O = b.useRef(!1);
  Mo(() => (O.current = !0, () => {
    O.current = !1;
  }), []), Mo(() => {
    if (x && (S.current = x), w && (j.current = w), x && w) {
      if (k.current)
        return k.current(x, w, U);
      U();
    }
  }, [x, w, U, k, I]);
  const E = b.useMemo(() => ({
    reference: S,
    floating: j,
    setReference: M,
    setFloating: y
  }), [M, y]), $ = b.useMemo(() => ({
    reference: x,
    floating: w
  }), [x, w]), R = b.useMemo(() => {
    const L = {
      position: n,
      left: 0,
      top: 0
    };
    if (!$.floating)
      return L;
    const P = sf($.floating, c.x), B = sf($.floating, c.y);
    return a ? {
      ...L,
      transform: "translate(" + P + "px, " + B + "px)",
      ...dh($.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: P,
      top: B
    };
  }, [n, a, $.floating, c.x, c.y]);
  return b.useMemo(() => ({
    ...c,
    update: U,
    refs: E,
    elements: $,
    floatingStyles: R
  }), [c, U, E, $, R]);
}
const gx = (e) => {
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
      return r && t(r) ? r.current != null ? of({
        element: r.current,
        padding: s
      }).fn(n) : {} : r ? of({
        element: r,
        padding: s
      }).fn(n) : {};
    }
  };
}, pc = (e, t) => ({
  ...ux(e),
  options: [e, t]
}), mh = (e, t) => ({
  ...cx(e),
  options: [e, t]
}), yx = (e, t) => ({
  ...px(e),
  options: [e, t]
}), ph = (e, t) => ({
  ...dx(e),
  options: [e, t]
}), hh = (e, t) => ({
  ...fx(e),
  options: [e, t]
}), Mx = (e, t) => ({
  ...mx(e),
  options: [e, t]
}), bx = (e, t) => ({
  ...gx(e),
  options: [e, t]
}), _h = {
  ...b
}, xx = _h.useInsertionEffect, wx = xx || ((e) => e());
function vh(e) {
  const t = b.useRef(() => {
    if (process.env.NODE_ENV !== "production")
      throw new Error("Cannot call an event handler while rendering.");
  });
  return wx(() => {
    t.current = e;
  }), b.useCallback(function() {
    for (var n = arguments.length, r = new Array(n), s = 0; s < n; s++)
      r[s] = arguments[s];
    return t.current == null ? void 0 : t.current(...r);
  }, []);
}
var su = typeof document != "undefined" ? Ma : ue;
let af = !1, Yx = 0;
const lf = () => (
  // Ensure the id is unique with multiple independent versions of Floating UI
  // on <React 18
  "floating-ui-" + Math.random().toString(36).slice(2, 6) + Yx++
);
function Lx() {
  const [e, t] = b.useState(() => af ? lf() : void 0);
  return su(() => {
    e == null && t(lf());
  }, []), b.useEffect(() => {
    af = !0;
  }, []), e;
}
const Sx = _h.useId, kx = Sx || Lx;
let kr;
process.env.NODE_ENV !== "production" && (kr = /* @__PURE__ */ new Set());
function Dx() {
  for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  const s = "Floating UI: " + n.join(" ");
  if (!((e = kr) != null && e.has(s))) {
    var i;
    (i = kr) == null || i.add(s), console.warn(s);
  }
}
function Tx() {
  for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  const s = "Floating UI: " + n.join(" ");
  if (!((e = kr) != null && e.has(s))) {
    var i;
    (i = kr) == null || i.add(s), console.error(s);
  }
}
function Ex() {
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
const jx = /* @__PURE__ */ b.createContext(null), Px = /* @__PURE__ */ b.createContext(null), Ax = () => {
  var e;
  return ((e = b.useContext(jx)) == null ? void 0 : e.id) || null;
}, Cx = () => b.useContext(Px), $x = "data-floating-ui-focusable";
function Hx(e) {
  const {
    open: t = !1,
    onOpenChange: n,
    elements: r
  } = e, s = kx(), i = b.useRef({}), [o] = b.useState(() => Ex()), a = Ax() != null;
  if (process.env.NODE_ENV !== "production") {
    const m = r.reference;
    m && !Ie(m) && Tx("Cannot pass a virtual element to the `elements.reference` option,", "as it must be a real DOM element. Use `refs.setPositionReference()`", "instead.");
  }
  const [l, u] = b.useState(r.reference), c = vh((m, p, h) => {
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
function Ox(e) {
  e === void 0 && (e = {});
  const {
    nodeId: t
  } = e, n = Hx({
    ...e,
    elements: {
      reference: null,
      floating: null,
      ...e.elements
    }
  }), r = e.rootContext || n, s = r.elements, [i, o] = b.useState(null), [a, l] = b.useState(null), c = (s == null ? void 0 : s.domReference) || i, d = b.useRef(null), f = Cx();
  su(() => {
    c && (d.current = c);
  }, [c]);
  const m = fh({
    ...e,
    elements: {
      ...s,
      ...a && {
        reference: a
      }
    }
  }), p = b.useCallback((y) => {
    const x = Ie(y) ? {
      getBoundingClientRect: () => y.getBoundingClientRect(),
      contextElement: y
    } : y;
    l(x), m.refs.setReference(x);
  }, [m.refs]), h = b.useCallback((y) => {
    (Ie(y) || y === null) && (d.current = y, o(y)), (Ie(m.refs.reference.current) || m.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    y !== null && !Ie(y)) && m.refs.setReference(y);
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
  return su(() => {
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
const uf = "active", cf = "selected";
function ml(e, t, n) {
  const r = /* @__PURE__ */ new Map(), s = n === "item";
  let i = e;
  if (s && e) {
    const {
      [uf]: o,
      [cf]: a,
      ...l
    } = e;
    i = l;
  }
  return {
    ...n === "floating" && {
      tabIndex: -1,
      [$x]: ""
    },
    ...i,
    ...t.map((o) => {
      const a = o ? o[n] : null;
      return typeof a == "function" ? e ? a(e) : null : a;
    }).concat(e).reduce((o, a) => (a && Object.entries(a).forEach((l) => {
      let [u, c] = l;
      if (!(s && [uf, cf].includes(u)))
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
function Rx(e) {
  e === void 0 && (e = []);
  const t = e.map((a) => a == null ? void 0 : a.reference), n = e.map((a) => a == null ? void 0 : a.floating), r = e.map((a) => a == null ? void 0 : a.item), s = b.useCallback(
    (a) => ml(a, e, "reference"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    t
  ), i = b.useCallback(
    (a) => ml(a, e, "floating"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    n
  ), o = b.useCallback(
    (a) => ml(a, e, "item"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    r
  );
  return b.useMemo(() => ({
    getReferenceProps: s,
    getFloatingProps: i,
    getItemProps: o
  }), [s, i, o]);
}
function df(e, t) {
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
const Nx = (e) => ({
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
    if (process.env.NODE_ENV !== "production" && (t.placement.startsWith("bottom") || Dx('`placement` side must be "bottom" when using the `inner`', "middleware.")), !m)
      return {};
    const y = {
      ...t,
      ...await pc(-m.offsetTop - f.clientTop - d.reference.height / 2 - m.offsetHeight / 2 - i).fn(t)
    }, x = await dl(df(y, p.scrollHeight + h + f.clientTop), c), w = await dl(y, {
      ...c,
      elementContext: "reference"
    }), S = Re(0, x.top), j = y.y + S, k = (p.scrollHeight > p.clientHeight ? (C) => C : Sr)(Re(0, p.scrollHeight + (_ && M || v ? h * 2 : 0) - S - Re(0, x.bottom)));
    if (p.style.maxHeight = k + "px", p.scrollTop = S, s) {
      const C = p.offsetHeight < m.offsetHeight * $t(a, n.current.length) - 1 || w.top >= -l || w.bottom >= -l;
      xr.flushSync(() => s(C));
    }
    return r && (r.current = await dl(df({
      ...y,
      y: j
    }, p.offsetHeight + h + f.clientTop), c)), {
      y: j
    };
  }
});
function Ix(e, t) {
  const {
    open: n,
    elements: r
  } = e, {
    enabled: s = !0,
    overflowRef: i,
    scrollRef: o,
    onChange: a
  } = t, l = vh(a), u = b.useRef(!1), c = b.useRef(null), d = b.useRef(null);
  b.useEffect(() => {
    if (!s) return;
    function m(h) {
      if (h.ctrlKey || !p || i.current == null)
        return;
      const _ = h.deltaY, v = i.current.top >= -0.5, M = i.current.bottom >= -0.5, y = p.scrollHeight - p.clientHeight, x = _ < 0 ? -1 : 1, w = _ < 0 ? "max" : "min";
      p.scrollHeight <= p.clientHeight || (!v && _ > 0 || !M && _ < 0 ? (h.preventDefault(), xr.flushSync(() => {
        l((S) => S + Math[w](_, y * x));
      })) : /firefox/i.test(Sb()) && (p.scrollTop += _));
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
let Xn = ge({ styles: void 0, setReference: () => {
}, setFloating: () => {
}, getReferenceProps: () => ({}), getFloatingProps: () => ({}), slot: {} });
Xn.displayName = "FloatingContext";
let hc = ge(null);
hc.displayName = "PlacementContext";
function gh(e) {
  return pe(() => e ? typeof e == "string" ? { to: e } : e : null, [e]);
}
function yh() {
  return re(Xn).setReference;
}
function Fx() {
  return re(Xn).getReferenceProps;
}
function Mh() {
  let { getFloatingProps: e, slot: t } = re(Xn);
  return X((...n) => Object.assign({}, e(...n), { "data-anchor": t.anchor }), [e, t]);
}
function bh(e = null) {
  e === !1 && (e = null), typeof e == "string" && (e = { to: e });
  let t = re(hc), n = pe(() => e, [JSON.stringify(e, (s, i) => {
    var o;
    return (o = i == null ? void 0 : i.outerHTML) != null ? o : i;
  })]);
  Me(() => {
    t == null || t(n != null ? n : null);
  }, [t, n]);
  let r = re(Xn);
  return pe(() => [r.setFloating, e ? r.styles : {}], [r.setFloating, e, r.styles]);
}
let ff = 4;
function xh({ children: e, enabled: t = !0 }) {
  let [n, r] = oe(null), [s, i] = oe(0), o = q(null), [a, l] = oe(null);
  Vx(a);
  let u = t && n !== null && a !== null, { to: c = "bottom", gap: d = 0, offset: f = 0, padding: m = 0, inner: p } = zx(n, a), [h, _ = "center"] = c.split(" ");
  Me(() => {
    u && i(0);
  }, [u]);
  let { refs: v, floatingStyles: M, context: y } = Ox({ open: u, placement: h === "selection" ? _ === "center" ? "bottom" : `bottom-${_}` : _ === "center" ? `${h}` : `${h}-${_}`, strategy: "absolute", transform: !1, middleware: [pc({ mainAxis: h === "selection" ? 0 : d, crossAxis: f }), mh({ padding: m }), h !== "selection" && ph({ padding: m }), h === "selection" && p ? Nx({ ...p, padding: m, overflowRef: o, offset: s, minItemsVisible: ff, referenceOverflowThreshold: m, onFallbackChange(C) {
    var N, U;
    if (!C) return;
    let O = y.elements.floating;
    if (!O) return;
    let E = parseFloat(getComputedStyle(O).scrollPaddingBottom) || 0, $ = Math.min(ff, O.childElementCount), R = 0, L = 0;
    for (let P of (U = (N = y.elements.floating) == null ? void 0 : N.childNodes) != null ? U : []) if (Ge(P)) {
      let B = P.offsetTop, T = B + P.clientHeight + E, H = O.scrollTop, F = H + O.clientHeight;
      if (B >= H && T <= F) $--;
      else {
        L = Math.max(0, Math.min(T, F) - Math.max(B, H)), R = P.clientHeight;
        break;
      }
    }
    $ >= 1 && i((P) => {
      let B = R * $ - L + E;
      return P >= B ? P : B;
    });
  } }) : null, hh({ padding: m, apply({ availableWidth: C, availableHeight: N, elements: U }) {
    Object.assign(U.floating.style, { overflow: "auto", maxWidth: `${C}px`, maxHeight: `min(var(--anchor-max-height, 100vh), ${N}px)` });
  } })].filter(Boolean), whileElementsMounted: ch }), [x = h, w = _] = y.placement.split("-");
  h === "selection" && (x = "selection");
  let S = pe(() => ({ anchor: [x, w].filter(Boolean).join(" ") }), [x, w]), j = Ix(y, { overflowRef: o, onChange: i }), { getReferenceProps: Y, getFloatingProps: I } = Rx([j]), k = Z((C) => {
    l(C), v.setFloating(C);
  });
  return b.createElement(hc.Provider, { value: r }, b.createElement(Xn.Provider, { value: { setFloating: k, setReference: v.setReference, styles: M, getReferenceProps: Y, getFloatingProps: I, slot: S } }, e));
}
function Vx(e) {
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
function zx(e, t) {
  var n, r, s;
  let i = pl((n = e == null ? void 0 : e.gap) != null ? n : "var(--anchor-gap, 0)", t), o = pl((r = e == null ? void 0 : e.offset) != null ? r : "var(--anchor-offset, 0)", t), a = pl((s = e == null ? void 0 : e.padding) != null ? s : "var(--anchor-padding, 0)", t);
  return { ...e, gap: i, offset: o, padding: a };
}
function pl(e, t, n = void 0) {
  let r = kt(), s = Z((l, u) => {
    if (l == null) return [n, null];
    if (typeof l == "number") return [l, null];
    if (typeof l == "string") {
      if (!u) return [n, null];
      let c = mf(l, u);
      return [c, (d) => {
        let f = wh(l);
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
            let _ = mf(l, u);
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
function wh(e) {
  let t = /var\((.*)\)/.exec(e);
  if (t) {
    let n = t[1].indexOf(",");
    if (n === -1) return [t[1]];
    let r = t[1].slice(0, n).trim(), s = t[1].slice(n + 1).trim();
    return s ? [r, ...wh(s)] : [r];
  }
  return [];
}
function mf(e, t) {
  let n = document.createElement("div");
  t.appendChild(n), n.style.setProperty("margin-top", "0px", "important"), n.style.setProperty("margin-top", e, "important");
  let r = parseFloat(window.getComputedStyle(n).marginTop) || 0;
  return t.removeChild(n), r;
}
function Bx({ children: e, freeze: t }, n) {
  let r = Oo(t, e);
  return ba(r) ? up(r, { ref: n }) : D.createElement(D.Fragment, null, r);
}
const Wx = D.forwardRef(Bx);
function Oo(e, t) {
  let [n, r] = oe(t);
  return !e && n !== t && r(t), e ? n : t;
}
let Ha = ge(null);
Ha.displayName = "OpenClosedContext";
var De = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(De || {});
function bn() {
  return re(Ha);
}
function Oa({ value: e, children: t }) {
  return D.createElement(Ha.Provider, { value: e }, t);
}
function Yh({ children: e }) {
  return D.createElement(Ha.Provider, { value: null }, e);
}
function Ux(e) {
  function t() {
    document.readyState !== "loading" && (e(), document.removeEventListener("DOMContentLoaded", t));
  }
  typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("DOMContentLoaded", t), t());
}
let _t = [];
Ux(() => {
  function e(t) {
    if (!ft(t.target) || t.target === document.body || _t[0] === t.target) return;
    let n = t.target;
    n = n.closest(Ao), _t.unshift(n != null ? n : t.target), _t = _t.filter((r) => r != null && r.isConnected), _t.splice(10);
  }
  window.addEventListener("click", e, { capture: !0 }), window.addEventListener("mousedown", e, { capture: !0 }), window.addEventListener("focus", e, { capture: !0 }), document.body.addEventListener("click", e, { capture: !0 }), document.body.addEventListener("mousedown", e, { capture: !0 }), document.body.addEventListener("focus", e, { capture: !0 });
});
function Kx(e) {
  throw new Error("Unexpected object: " + e);
}
var me = ((e) => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(me || {});
function Tn(e, t) {
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
      Kx(e);
  }
}
function Ra(e) {
  let t = Z(e), n = q(!1);
  ue(() => (n.current = !1, () => {
    n.current = !0, Ya(() => {
      n.current && t();
    });
  }), [t]);
}
let Lh = ge(!1);
function Gx() {
  return re(Lh);
}
function pf(e) {
  return D.createElement(Lh.Provider, { value: e.force }, e.children);
}
function Jx(e) {
  let t = Gx(), n = re(kh), [r, s] = oe(() => {
    var i;
    if (!t && n !== null) return (i = n.current) != null ? i : null;
    if (yt.isServer) return null;
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
let Sh = Ae, qx = be(function(e, t) {
  let { ownerDocument: n = null, ...r } = e, s = q(null), i = Le(Cp((f) => {
    s.current = f;
  }), t), o = yn(s.current), a = n != null ? n : o, l = Jx(a), u = re(iu), c = kt(), d = xe();
  return Ra(() => {
    var f;
    l && l.childNodes.length <= 0 && ((f = l.parentElement) == null || f.removeChild(l));
  }), l ? Fu(D.createElement("div", { "data-headlessui-portal": "", ref: (f) => {
    c.dispose(), u && f && c.add(u.register(f));
  } }, d({ ourProps: { ref: i }, theirProps: r, slot: {}, defaultTag: Sh, name: "Portal" })), l) : null;
});
function Xx(e, t) {
  let n = Le(t), { enabled: r = !0, ownerDocument: s, ...i } = e, o = xe();
  return r ? D.createElement(qx, { ...i, ownerDocument: s, ref: n }) : o({ ourProps: { ref: n }, theirProps: i, slot: {}, defaultTag: Sh, name: "Portal" });
}
let Zx = Ae, kh = ge(null);
function Qx(e, t) {
  let { target: n, ...r } = e, s = { ref: Le(t) }, i = xe();
  return D.createElement(kh.Provider, { value: n }, i({ ourProps: s, theirProps: r, defaultTag: Zx, name: "Popover.Group" }));
}
let iu = ge(null);
function ew() {
  let e = re(iu), t = q([]), n = Z((i) => (t.current.push(i), e && e.register(i), () => r(i))), r = Z((i) => {
    let o = t.current.indexOf(i);
    o !== -1 && t.current.splice(o, 1), e && e.unregister(i);
  }), s = pe(() => ({ register: n, unregister: r, portals: t }), [n, r, t]);
  return [t, pe(() => function({ children: i }) {
    return D.createElement(iu.Provider, { value: s }, i);
  }, [s])];
}
let tw = be(Xx), Dh = be(Qx), Na = Object.assign(tw, { Group: Dh });
const Pt = { Idle: { kind: "Idle" }, Tracked: (e) => ({ kind: "Tracked", position: e }), Moved: { kind: "Moved" } };
function _c(e) {
  let t = e.getBoundingClientRect();
  return `${t.x},${t.y}`;
}
function Th(e, t, n) {
  let r = qe();
  if (t.kind === "Tracked") {
    let s = function() {
      i !== _c(e) && (r.dispose(), n());
    }, { position: i } = t, o = new ResizeObserver(s);
    o.observe(e), r.add(() => o.disconnect()), r.addEventListener(window, "scroll", s, { passive: !0 }), r.addEventListener(window, "resize", s);
  }
  return () => r.dispose();
}
var nw = Object.defineProperty, rw = (e, t, n) => t in e ? nw(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, hf = (e, t, n) => (rw(e, typeof t != "symbol" ? t + "" : t, n), n), _e = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(_e || {}), Ze = ((e) => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))(Ze || {}), bt = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Focus = 1] = "Focus", e[e.Other = 2] = "Other", e))(bt || {}), Eh = ((e) => (e[e.OpenCombobox = 0] = "OpenCombobox", e[e.CloseCombobox = 1] = "CloseCombobox", e[e.GoToOption = 2] = "GoToOption", e[e.SetTyping = 3] = "SetTyping", e[e.RegisterOption = 4] = "RegisterOption", e[e.UnregisterOption = 5] = "UnregisterOption", e[e.DefaultToFirstOption = 6] = "DefaultToFirstOption", e[e.SetActivationTrigger = 7] = "SetActivationTrigger", e[e.UpdateVirtualConfiguration = 8] = "UpdateVirtualConfiguration", e[e.SetInputElement = 9] = "SetInputElement", e[e.SetButtonElement = 10] = "SetButtonElement", e[e.SetOptionsElement = 11] = "SetOptionsElement", e[e.MarkInputAsMoved = 12] = "MarkInputAsMoved", e))(Eh || {});
function hl(e, t = (n) => n) {
  let n = e.activeOptionIndex !== null ? e.options[e.activeOptionIndex] : null, r = t(e.options.slice()), s = r.length > 0 && r[0].dataRef.current.order !== null ? r.sort((o, a) => o.dataRef.current.order - a.dataRef.current.order) : oc(r, (o) => o.dataRef.current.domRef.current), i = n ? s.indexOf(n) : null;
  return i === -1 && (i = null), { options: s, activeOptionIndex: i };
}
let ow = { 1(e) {
  var t;
  if ((t = e.dataRef.current) != null && t.disabled || e.comboboxState === 1) return e;
  let n = e.inputElement ? Pt.Tracked(_c(e.inputElement)) : e.inputPositionState;
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
    let { options: u, disabled: c } = e.virtual, d = t.focus === me.Specific ? t.idx : Tn(t, { resolveItems: () => u, resolveActiveIndex: () => {
      var m, p;
      return (p = (m = e.activeOptionIndex) != null ? m : u.findIndex((h) => !c(h))) != null ? p : null;
    }, resolveDisabled: c, resolveId() {
      throw new Error("Function not implemented.");
    } }), f = (s = t.trigger) != null ? s : 2;
    return e.activeOptionIndex === d && e.activationTrigger === f ? e : { ...e, activeOptionIndex: d, activationTrigger: f, isTyping: !1, __demoMode: !1 };
  }
  let o = hl(e);
  if (o.activeOptionIndex === null) {
    let u = o.options.findIndex((c) => !c.dataRef.current.disabled);
    u !== -1 && (o.activeOptionIndex = u);
  }
  let a = t.focus === me.Specific ? t.idx : Tn(t, { resolveItems: () => o.options, resolveActiveIndex: () => o.activeOptionIndex, resolveId: (u) => u.id, resolveDisabled: (u) => u.dataRef.current.disabled }), l = (i = t.trigger) != null ? i : 2;
  return e.activeOptionIndex === a && e.activationTrigger === l ? e : { ...e, ...o, isTyping: !1, activeOptionIndex: a, activationTrigger: l, __demoMode: !1 };
}, 4: (e, t) => {
  var n, r, s, i;
  if ((n = e.dataRef.current) != null && n.virtual) return { ...e, options: [...e.options, t.payload] };
  let o = t.payload, a = hl(e, (u) => (u.push(o), u));
  e.activeOptionIndex === null && (s = (r = e.dataRef.current).isSelected) != null && s.call(r, t.payload.dataRef.current.value) && (a.activeOptionIndex = a.options.indexOf(o));
  let l = { ...e, ...a, activationTrigger: 2 };
  return (i = e.dataRef.current) != null && i.__demoMode && e.dataRef.current.value === void 0 && (l.activeOptionIndex = 0), l;
}, 5: (e, t) => {
  var n;
  if ((n = e.dataRef.current) != null && n.virtual) return { ...e, options: e.options.filter((s) => s.id !== t.id) };
  let r = hl(e, (s) => {
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
} }, sw = class jh extends Qu {
  constructor(t) {
    super(t), hf(this, "actions", { onChange: (n) => {
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
    } }), hf(this, "selectors", { activeDescendantId: (n) => {
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
      let n = this.state.id, r = Gn.get(null);
      this.disposables.add(r.on(ec.Push, (s) => {
        !r.selectors.isTop(s, n) && this.state.comboboxState === 0 && this.actions.closeCombobox();
      })), this.on(0, () => r.actions.push(n)), this.on(1, () => r.actions.pop(n));
    }
    this.disposables.group((n) => {
      this.on(1, (r) => {
        r.inputElement && (n.dispose(), n.add(Th(r.inputElement, r.inputPositionState, () => {
          this.send({ type: 12 });
        })));
      });
    });
  }
  static new({ id: t, virtual: n = null, __demoMode: r = !1 }) {
    var s;
    return new jh({ id: t, dataRef: { current: {} }, comboboxState: r ? 0 : 1, isTyping: !1, options: [], virtual: n ? { options: n.options, disabled: (s = n.disabled) != null ? s : () => !1 } : null, activeOptionIndex: null, activationTrigger: 2, inputElement: null, buttonElement: null, optionsElement: null, __demoMode: r, inputPositionState: Pt.Idle });
  }
  reduce(t, n) {
    return Ye(n.type, ow, t, n);
  }
};
const Ph = ge(null);
function Ur(e) {
  let t = re(Ph);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, Ah), n;
  }
  return t;
}
function Ah({ id: e, virtual: t = null, __demoMode: n = !1 }) {
  let r = pe(() => sw.new({ id: e, virtual: t, __demoMode: n }), []);
  return Ra(() => r.dispose()), r;
}
let Dr = ge(null);
Dr.displayName = "ComboboxDataContext";
function Zn(e) {
  let t = re(Dr);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, Zn), n;
  }
  return t;
}
let Ch = ge(null);
function iw(e) {
  let t = Ur("VirtualProvider"), n = Zn("VirtualProvider"), { options: r } = n.virtual, s = ye(t, (m) => m.optionsElement), [i, o] = pe(() => {
    let m = s;
    if (!m) return [0, 0];
    let p = window.getComputedStyle(m);
    return [parseFloat(p.paddingBlockStart || p.paddingTop), parseFloat(p.paddingBlockEnd || p.paddingBottom)];
  }, [s]), a = $M({ enabled: r.length !== 0, scrollPaddingStart: i, scrollPaddingEnd: o, count: r.length, estimateSize() {
    return 40;
  }, getScrollElement() {
    return t.state.optionsElement;
  }, overscan: 12 }), [l, u] = oe(0);
  Me(() => {
    u((m) => m + 1);
  }, [r]);
  let c = a.getVirtualItems(), d = ye(t, (m) => m.activationTrigger === bt.Pointer), f = ye(t, t.selectors.activeOptionIndex);
  return c.length === 0 ? null : D.createElement(Ch.Provider, { value: a }, D.createElement("div", { style: { position: "relative", width: "100%", height: `${a.getTotalSize()}px` }, ref: (m) => {
    m && (d || f !== null && r.length > f && a.scrollToIndex(f));
  } }, c.map((m) => {
    var p;
    return D.createElement(Ae, { key: m.key }, D.cloneElement((p = e.children) == null ? void 0 : p.call(e, { ...e.slot, option: r[m.index] }), { key: `${l}-${m.key}`, "data-index": m.index, "aria-setsize": r.length, "aria-posinset": m.index + 1, style: { position: "absolute", top: 0, left: 0, transform: `translateY(${m.start}px)`, overflowAnchor: "none" } }));
  })));
}
let aw = Ae;
function lw(e, t) {
  let n = je(), r = zr(), { value: s, defaultValue: i, onChange: o, form: a, name: l, by: u, invalid: c = !1, disabled: d = r || !1, onClose: f, __demoMode: m = !1, multiple: p = !1, immediate: h = !1, virtual: _ = null, nullable: v, ...M } = e, y = Ku(i), [x = p ? [] : void 0, w] = Uu(s, o, y), S = Ah({ id: n, virtual: _, __demoMode: m }), j = q({ static: !1, hold: !1 }), Y = Fp(u), I = Z((Q) => _ ? u === null ? _.options.indexOf(Q) : _.options.findIndex((se) => Y(se, Q)) : S.state.options.findIndex((se) => Y(se.dataRef.current.value, Q))), k = X((Q) => Ye(U.mode, { [Ze.Multi]: () => x.some((se) => Y(se, Q)), [Ze.Single]: () => Y(x, Q) }), [x]), C = ye(S, (Q) => Q.virtual), N = Z(() => f == null ? void 0 : f()), U = pe(() => ({ __demoMode: m, immediate: h, optionsPropsRef: j, value: x, defaultValue: y, disabled: d, invalid: c, mode: p ? Ze.Multi : Ze.Single, virtual: _ ? C : null, onChange: w, isSelected: k, calculateIndex: I, compare: Y, onClose: N }), [m, h, j, x, y, d, c, p, _, C, w, k, I, Y, N]);
  Me(() => {
    var Q;
    _ && S.send({ type: Eh.UpdateVirtualConfiguration, options: _.options, disabled: (Q = _.disabled) != null ? Q : null });
  }, [_, _ == null ? void 0 : _.options, _ == null ? void 0 : _.disabled]), Me(() => {
    S.state.dataRef.current = U;
  }, [U]);
  let [O, E, $, R] = ye(S, (Q) => [Q.comboboxState, Q.buttonElement, Q.inputElement, Q.optionsElement]), L = Gn.get(null), P = ye(L, X((Q) => L.selectors.isTop(Q, n), [L, n]));
  sc(P, [E, $, R], () => S.actions.closeCombobox());
  let B = ye(S, S.selectors.activeOptionIndex), T = ye(S, S.selectors.activeOption), H = Ee({ open: O === _e.Open, disabled: d, invalid: c, activeIndex: B, activeOption: T, value: x }), [F, K] = qu(), ne = t === null ? {} : { ref: t }, G = X(() => {
    if (y !== void 0) return w == null ? void 0 : w(y);
  }, [w, y]), W = xe();
  return D.createElement(K, { value: F, props: { htmlFor: $ == null ? void 0 : $.id }, slot: { open: O === _e.Open, disabled: d } }, D.createElement(xh, null, D.createElement(Dr.Provider, { value: U }, D.createElement(Ph.Provider, { value: S }, D.createElement(Oa, { value: Ye(O, { [_e.Open]: De.Open, [_e.Closed]: De.Closed }) }, l != null && D.createElement(Gu, { disabled: d, data: x != null ? { [l]: x } : {}, form: a, onReset: G }), W({ ourProps: ne, theirProps: M, slot: H, defaultTag: aw, name: "Combobox" }))))));
}
let uw = "input";
function cw(e, t) {
  var n, r;
  let s = Ur("Combobox.Input"), i = Zn("Combobox.Input"), o = je(), a = Sa(), { id: l = a || `headlessui-combobox-input-${o}`, onChange: u, displayValue: c, disabled: d = i.disabled || !1, autoFocus: f = !1, type: m = "text", ...p } = e, h = q(null), _ = Le(h, t, yh(), s.actions.setInputElement), [v, M] = ye(s, (H) => [H.comboboxState, H.isTyping]), y = kt(), x = Z(() => {
    s.actions.onChange(null), s.state.optionsElement && (s.state.optionsElement.scrollTop = 0), s.actions.goToOption({ focus: me.Nothing });
  }), w = pe(() => {
    var H;
    return typeof c == "function" && i.value !== void 0 ? (H = c(i.value)) != null ? H : "" : typeof i.value == "string" ? i.value : "";
  }, [i.value, c]);
  Yr(([H, F], [K, ne]) => {
    if (s.state.isTyping) return;
    let G = h.current;
    G && ((ne === _e.Open && F === _e.Closed || H !== K) && (G.value = H), requestAnimationFrame(() => {
      if (s.state.isTyping || !G || wa(G)) return;
      let { selectionStart: W, selectionEnd: Q } = G;
      Math.abs((Q != null ? Q : 0) - (W != null ? W : 0)) === 0 && W === 0 && G.setSelectionRange(G.value.length, G.value.length);
    }));
  }, [w, v, M]), Yr(([H], [F]) => {
    if (H === _e.Open && F === _e.Closed) {
      if (s.state.isTyping) return;
      let K = h.current;
      if (!K) return;
      let ne = K.value, { selectionStart: G, selectionEnd: W, selectionDirection: Q } = K;
      K.value = "", K.value = ne, Q !== null ? K.setSelectionRange(G, W, Q) : K.setSelectionRange(G, W);
    }
  }, [v]);
  let S = q(!1), j = Z(() => {
    S.current = !0;
  }), Y = Z(() => {
    y.nextFrame(() => {
      S.current = !1;
    });
  }), I = Z((H) => {
    switch (s.actions.setIsTyping(!0), H.key) {
      case de.Enter:
        if (s.state.comboboxState !== _e.Open || S.current) return;
        if (H.preventDefault(), H.stopPropagation(), s.selectors.activeOptionIndex(s.state) === null) {
          s.actions.closeCombobox();
          return;
        }
        s.actions.selectActiveOption(), i.mode === Ze.Single && s.actions.closeCombobox();
        break;
      case de.ArrowDown:
        return H.preventDefault(), H.stopPropagation(), Ye(s.state.comboboxState, { [_e.Open]: () => s.actions.goToOption({ focus: me.Next }), [_e.Closed]: () => s.actions.openCombobox() });
      case de.ArrowUp:
        return H.preventDefault(), H.stopPropagation(), Ye(s.state.comboboxState, { [_e.Open]: () => s.actions.goToOption({ focus: me.Previous }), [_e.Closed]: () => {
          dt(() => s.actions.openCombobox()), i.value || s.actions.goToOption({ focus: me.Last });
        } });
      case de.Home:
        if (s.state.comboboxState === _e.Closed || H.shiftKey) break;
        return H.preventDefault(), H.stopPropagation(), s.actions.goToOption({ focus: me.First });
      case de.PageUp:
        return H.preventDefault(), H.stopPropagation(), s.actions.goToOption({ focus: me.First });
      case de.End:
        if (s.state.comboboxState === _e.Closed || H.shiftKey) break;
        return H.preventDefault(), H.stopPropagation(), s.actions.goToOption({ focus: me.Last });
      case de.PageDown:
        return H.preventDefault(), H.stopPropagation(), s.actions.goToOption({ focus: me.Last });
      case de.Escape:
        return s.state.comboboxState !== _e.Open ? void 0 : (H.preventDefault(), s.state.optionsElement && !i.optionsPropsRef.current.static && H.stopPropagation(), i.mode === Ze.Single && i.value === null && x(), s.actions.closeCombobox());
      case de.Tab:
        if (s.actions.setIsTyping(!1), s.state.comboboxState !== _e.Open) return;
        i.mode === Ze.Single && s.state.activationTrigger !== bt.Focus && s.actions.selectActiveOption(), s.actions.closeCombobox();
        break;
    }
  }), k = Z((H) => {
    u == null || u(H), i.mode === Ze.Single && H.target.value === "" && x(), s.actions.openCombobox();
  }), C = Z((H) => {
    var F, K, ne;
    let G = (F = H.relatedTarget) != null ? F : _t.find((W) => W !== H.currentTarget);
    if (!((K = s.state.optionsElement) != null && K.contains(G)) && !((ne = s.state.buttonElement) != null && ne.contains(G)) && s.state.comboboxState === _e.Open) return H.preventDefault(), i.mode === Ze.Single && i.value === null && x(), s.actions.closeCombobox();
  }), N = Z((H) => {
    var F, K, ne;
    let G = (F = H.relatedTarget) != null ? F : _t.find((W) => W !== H.currentTarget);
    (K = s.state.buttonElement) != null && K.contains(G) || (ne = s.state.optionsElement) != null && ne.contains(G) || i.disabled || i.immediate && s.state.comboboxState !== _e.Open && y.microTask(() => {
      dt(() => s.actions.openCombobox()), s.actions.setActivationTrigger(bt.Focus);
    });
  }), U = Kn(), O = Ju(), { isFocused: E, focusProps: $ } = Vr({ autoFocus: f }), { isHovered: R, hoverProps: L } = Fr({ isDisabled: d }), P = ye(s, (H) => H.optionsElement), B = Ee({ open: v === _e.Open, disabled: d, invalid: i.invalid, hover: R, focus: E, autofocus: f }), T = Xt({ ref: _, id: l, role: "combobox", type: m, "aria-controls": P == null ? void 0 : P.id, "aria-expanded": v === _e.Open, "aria-activedescendant": ye(s, s.selectors.activeDescendantId), "aria-labelledby": U, "aria-describedby": O, "aria-autocomplete": "list", defaultValue: (r = (n = e.defaultValue) != null ? n : i.defaultValue !== void 0 ? c == null ? void 0 : c(i.defaultValue) : null) != null ? r : i.defaultValue, disabled: d || void 0, autoFocus: f, onCompositionStart: j, onCompositionEnd: Y, onKeyDown: I, onChange: k, onFocus: N, onBlur: C }, $, L);
  return xe()({ ourProps: T, theirProps: p, slot: B, defaultTag: uw, name: "Combobox.Input" });
}
let dw = "button";
function fw(e, t) {
  let n = Ur("Combobox.Button"), r = Zn("Combobox.Button"), [s, i] = oe(null), o = Le(t, i, n.actions.setButtonElement), a = je(), { id: l = `headlessui-combobox-button-${a}`, disabled: u = r.disabled || !1, autoFocus: c = !1, ...d } = e, [f, m, p] = ye(n, (N) => [N.comboboxState, N.inputElement, N.optionsElement]), h = Zp(m), _ = f === _e.Open;
  Xp(_, { trigger: s, action: X((N) => {
    if (s != null && s.contains(N.target) || m != null && m.contains(N.target)) return Et.Ignore;
    let U = N.target.closest('[role="option"]:not([data-disabled])');
    return Ge(U) ? Et.Select(U) : p != null && p.contains(N.target) ? Et.Ignore : Et.Close;
  }, [s, m, p]), close: n.actions.closeCombobox, select: n.actions.selectActiveOption });
  let v = Z((N) => {
    switch (N.key) {
      case de.Space:
      case de.Enter:
        N.preventDefault(), N.stopPropagation(), n.state.comboboxState === _e.Closed && dt(() => n.actions.openCombobox()), h();
        return;
      case de.ArrowDown:
        N.preventDefault(), N.stopPropagation(), n.state.comboboxState === _e.Closed && (dt(() => n.actions.openCombobox()), n.state.dataRef.current.value || n.actions.goToOption({ focus: me.First })), h();
        return;
      case de.ArrowUp:
        N.preventDefault(), N.stopPropagation(), n.state.comboboxState === _e.Closed && (dt(() => n.actions.openCombobox()), n.state.dataRef.current.value || n.actions.goToOption({ focus: me.Last })), h();
        return;
      case de.Escape:
        if (n.state.comboboxState !== _e.Open) return;
        N.preventDefault(), n.state.optionsElement && !r.optionsPropsRef.current.static && N.stopPropagation(), dt(() => n.actions.closeCombobox()), h();
        return;
      default:
        return;
    }
  }), M = Vp(() => {
    n.state.comboboxState === _e.Open ? n.actions.closeCombobox() : n.actions.openCombobox(), h();
  }), y = Kn([l]), { isFocusVisible: x, focusProps: w } = Vr({ autoFocus: c }), { isHovered: S, hoverProps: j } = Fr({ isDisabled: u }), { pressed: Y, pressProps: I } = La({ disabled: u }), k = Ee({ open: f === _e.Open, active: Y || f === _e.Open, disabled: u, invalid: r.invalid, value: r.value, hover: S, focus: x }), C = Xt({ ref: o, id: l, type: Ta(e, s), tabIndex: -1, "aria-haspopup": "listbox", "aria-controls": p == null ? void 0 : p.id, "aria-expanded": f === _e.Open, "aria-labelledby": y, disabled: u || void 0, autoFocus: c, onKeyDown: v }, M, w, j, I);
  return xe()({ ourProps: C, theirProps: d, slot: k, defaultTag: dw, name: "Combobox.Button" });
}
let mw = "div", pw = wt.RenderStrategy | wt.Static;
function hw(e, t) {
  var n, r, s;
  let i = je(), { id: o = `headlessui-combobox-options-${i}`, hold: a = !1, anchor: l, portal: u = !1, modal: c = !0, transition: d = !1, ...f } = e, m = Ur("Combobox.Options"), p = Zn("Combobox.Options"), h = gh(l);
  h && (u = !0);
  let [_, v] = bh(h), [M, y] = oe(null), x = Mh(), w = Le(t, h ? _ : null, m.actions.setOptionsElement, y), [S, j, Y, I, k] = ye(m, (le) => [le.comboboxState, le.inputElement, le.buttonElement, le.optionsElement, le.activationTrigger]), C = yn(j || Y), N = yn(I), U = bn(), [O, E] = ja(d, M, U !== null ? (U & De.Open) === De.Open : S === _e.Open);
  nc(O, j, m.actions.closeCombobox);
  let $ = p.__demoMode ? !1 : c && S === _e.Open;
  ac($, N);
  let R = p.__demoMode ? !1 : c && S === _e.Open;
  tc(R, { allowed: X(() => [j, Y, I], [j, Y, I]) });
  let L = ye(m, m.selectors.didInputMove) ? !1 : O;
  Me(() => {
    var le;
    p.optionsPropsRef.current.static = (le = e.static) != null ? le : !1;
  }, [p.optionsPropsRef, e.static]), Me(() => {
    p.optionsPropsRef.current.hold = a;
  }, [p.optionsPropsRef, a]), _b(S === _e.Open, { container: I, accept(le) {
    return le.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : le.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(le) {
    le.setAttribute("role", "none");
  } });
  let P = Kn([Y == null ? void 0 : Y.id]), B = Ee({ open: S === _e.Open, option: void 0 }), T = Z(() => {
    m.actions.setActivationTrigger(bt.Pointer);
  }), H = Z((le) => {
    le.preventDefault(), m.actions.setActivationTrigger(bt.Pointer);
  }), F = Xt(h ? x() : {}, { "aria-labelledby": P, role: "listbox", "aria-multiselectable": p.mode === Ze.Multi ? !0 : void 0, id: o, ref: w, style: { ...f.style, ...v, "--input-width": Xl(O, j, !0).width, "--button-width": Xl(O, Y, !0).width }, onWheel: k === bt.Pointer ? void 0 : T, onMouseDown: H, ...Ea(E) }), K = O && S === _e.Closed && !e.static, ne = Oo(K, (n = p.virtual) == null ? void 0 : n.options), G = Oo(K, p.value), W = X((le) => p.compare(G, le), [p.compare, G]), Q = pe(() => {
    if (!p.virtual) return p;
    if (ne === void 0) throw new Error("Missing `options` in virtual mode");
    return ne !== p.virtual.options ? { ...p, virtual: { ...p.virtual, options: ne } } : p;
  }, [p, ne, (r = p.virtual) == null ? void 0 : r.options]);
  p.virtual && Object.assign(f, { children: D.createElement(Dr.Provider, { value: Q }, D.createElement(iw, { slot: B }, f.children)) });
  let se = xe(), he = pe(() => p.mode === Ze.Multi ? p : { ...p, isSelected: W }, [p, W]);
  return D.createElement(Na, { enabled: u ? e.static || O : !1, ownerDocument: C }, D.createElement(Dr.Provider, { value: he }, se({ ourProps: F, theirProps: { ...f, children: D.createElement(Wx, { freeze: K }, typeof f.children == "function" ? (s = f.children) == null ? void 0 : s.call(f, B) : f.children) }, slot: B, defaultTag: mw, features: pw, visible: L, name: "Combobox.Options" })));
}
let _w = "div";
function vw(e, t) {
  var n, r, s;
  let i = Zn("Combobox.Option"), o = Ur("Combobox.Option"), a = je(), { id: l = `headlessui-combobox-option-${a}`, value: u, disabled: c = (s = (r = (n = i.virtual) == null ? void 0 : n.disabled) == null ? void 0 : r.call(n, u)) != null ? s : !1, order: d = null, ...f } = e, [m] = ye(o, (E) => [E.inputElement]), p = Zp(m), h = ye(o, X((E) => o.selectors.isActive(E, u, l), [u, l])), _ = i.isSelected(u), v = q(null), M = Ft({ disabled: c, value: u, domRef: v, order: d }), y = re(Ch), x = Le(t, v, y ? y.measureElement : null), w = Z(() => {
    o.actions.setIsTyping(!1), o.actions.onChange(u);
  });
  Me(() => o.actions.registerOption(l, M), [M, l]);
  let S = ye(o, X((E) => o.selectors.shouldScrollIntoView(E, u, l), [u, l]));
  Me(() => {
    if (S) return qe().requestAnimationFrame(() => {
      var E, $;
      ($ = (E = v.current) == null ? void 0 : E.scrollIntoView) == null || $.call(E, { block: "nearest" });
    });
  }, [S, v]);
  let j = Z((E) => {
    E.preventDefault(), E.button === Zu.Left && (c || (w(), tu() || requestAnimationFrame(() => p()), i.mode === Ze.Single && o.actions.closeCombobox()));
  }), Y = Z(() => {
    if (c) return o.actions.goToOption({ focus: me.Nothing });
    let E = i.calculateIndex(u);
    o.actions.goToOption({ focus: me.Specific, idx: E });
  }), I = Qp(), k = Z((E) => I.update(E)), C = Z((E) => {
    if (!I.wasMoved(E) || c || h && o.state.activationTrigger === bt.Pointer) return;
    let $ = i.calculateIndex(u);
    o.actions.goToOption({ focus: me.Specific, idx: $ }, bt.Pointer);
  }), N = Z((E) => {
    I.wasMoved(E) && (c || h && (i.optionsPropsRef.current.hold || o.state.activationTrigger === bt.Pointer && o.actions.goToOption({ focus: me.Nothing })));
  }), U = Ee({ active: h, focus: h, selected: _, disabled: c }), O = { id: l, ref: x, role: "option", tabIndex: c === !0 ? void 0 : -1, "aria-disabled": c === !0 ? !0 : void 0, "aria-selected": _, disabled: void 0, onMouseDown: j, onFocus: Y, onPointerEnter: k, onMouseEnter: k, onPointerMove: C, onMouseMove: C, onPointerLeave: N, onMouseLeave: N };
  return xe()({ ourProps: O, theirProps: f, slot: U, defaultTag: _w, name: "Combobox.Option" });
}
let gw = be(lw), au = be(fw), yw = be(cw), Mw = Xu, $h = be(hw), Hh = be(vw), _f = Object.assign(gw, { Input: yw, Button: au, Label: Mw, Options: $h, Option: Hh });
function bw(e, t = typeof document != "undefined" ? document.defaultView : null, n) {
  let r = Br(e, "escape");
  ic(t, "keydown", (s) => {
    r && (s.defaultPrevented || s.key === de.Escape && n(s));
  });
}
function xw() {
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
function ww({ defaultContainers: e = [], portals: t, mainTreeNode: n } = {}) {
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
let Oh = ge(null);
function vf({ children: e, node: t }) {
  let [n, r] = oe(null), s = Rh(t != null ? t : n);
  return D.createElement(Oh.Provider, { value: s }, e, s === null && D.createElement(wr, { features: Fn.Hidden, ref: (i) => {
    var o, a;
    if (i) {
      for (let l of (a = (o = rn(i)) == null ? void 0 : o.querySelectorAll("html > *, body > *")) != null ? a : []) if (l !== document.body && l !== document.head && At(l) && l != null && l.contains(i)) {
        r(l);
        break;
      }
    }
  } }));
}
function Rh(e = null) {
  var t;
  return (t = re(Oh)) != null ? t : e;
}
function Yw() {
  let e = typeof document == "undefined";
  return "useSyncExternalStore" in b ? ((t) => t.useSyncExternalStore)(b)(() => () => {
  }, () => !1, () => !e) : !1;
}
function Ia() {
  let e = Yw(), [t, n] = b.useState(yt.isHandoffComplete);
  return t && yt.isHandoffComplete === !1 && n(!1), b.useEffect(() => {
    t !== !0 && n(!0);
  }, [t]), b.useEffect(() => yt.handoff(), []), e ? !1 : t;
}
function vc() {
  let e = q(!1);
  return Me(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}
var fr = ((e) => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(fr || {});
function Lw() {
  let e = q(0);
  return qp(!0, "keydown", (t) => {
    t.key === "Tab" && (e.current = t.shiftKey ? 1 : 0);
  }, !0), e;
}
function Nh(e) {
  if (!e) return /* @__PURE__ */ new Set();
  if (typeof e == "function") return new Set(e());
  let t = /* @__PURE__ */ new Set();
  for (let n of e.current) At(n.current) && t.add(n.current);
  return t;
}
let Sw = "div";
var cn = ((e) => (e[e.None = 0] = "None", e[e.InitialFocus = 1] = "InitialFocus", e[e.TabLock = 2] = "TabLock", e[e.FocusLock = 4] = "FocusLock", e[e.RestoreFocus = 8] = "RestoreFocus", e[e.AutoFocus = 16] = "AutoFocus", e))(cn || {});
function kw(e, t) {
  let n = q(null), r = Le(n, t), { initialFocus: s, initialFocusFallback: i, containers: o, features: a = 15, ...l } = e;
  Ia() || (a = 0);
  let u = yn(n.current);
  jw(a, { ownerDocument: u });
  let c = Pw(a, { ownerDocument: u, container: n, initialFocus: s, initialFocusFallback: i });
  Aw(a, { ownerDocument: u, container: n, containers: o, previousActiveElement: c });
  let d = Lw(), f = Z((M) => {
    if (!Ge(n.current)) return;
    let y = n.current;
    ((x) => x())(() => {
      Ye(d.current, { [fr.Forwards]: () => {
        On(y, ct.First, { skipElements: [M.relatedTarget, i] });
      }, [fr.Backwards]: () => {
        On(y, ct.Last, { skipElements: [M.relatedTarget, i] });
      } });
    });
  }), m = Br(!!(a & 2), "focus-trap#tab-lock"), p = kt(), h = q(!1), _ = { ref: r, onKeyDown(M) {
    M.key == "Tab" && (h.current = !0, p.requestAnimationFrame(() => {
      h.current = !1;
    }));
  }, onBlur(M) {
    if (!(a & 4)) return;
    let y = Nh(o);
    Ge(n.current) && y.add(n.current);
    let x = M.relatedTarget;
    ft(x) && x.dataset.headlessuiFocusGuard !== "true" && (Ih(y, x) || (h.current ? On(n.current, Ye(d.current, { [fr.Forwards]: () => ct.Next, [fr.Backwards]: () => ct.Previous }) | ct.WrapAround, { relativeTo: M.target }) : ft(M.target) && Ct(M.target)));
  } }, v = xe();
  return D.createElement(D.Fragment, null, m && D.createElement(wr, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: f, features: Fn.Focusable }), v({ ourProps: _, theirProps: l, defaultTag: Sw, name: "FocusTrap" }), m && D.createElement(wr, { as: "button", type: "button", "data-headlessui-focus-guard": !0, onFocus: f, features: Fn.Focusable }));
}
let Dw = be(kw), Tw = Object.assign(Dw, { features: cn });
function Ew(e = !0) {
  let t = q(_t.slice());
  return Yr(([n], [r]) => {
    r === !0 && n === !1 && Ya(() => {
      t.current.splice(0);
    }), r === !1 && n === !0 && (t.current = _t.slice());
  }, [e, _t, t]), Z(() => {
    var n;
    return (n = t.current.find((r) => r != null && r.isConnected)) != null ? n : null;
  });
}
function jw(e, { ownerDocument: t }) {
  let n = !!(e & 8), r = Ew(n);
  Yr(() => {
    n || wa(t == null ? void 0 : t.body) && Ct(r());
  }, [n]), Ra(() => {
    n && Ct(r());
  });
}
function Pw(e, { ownerDocument: t, container: n, initialFocus: r, initialFocusFallback: s }) {
  let i = q(null), o = Br(!!(e & 1), "focus-trap#initial-focus"), a = vc();
  return Yr(() => {
    if (e === 0) return;
    if (!o) {
      s != null && s.current && Ct(s.current);
      return;
    }
    let l = n.current;
    l && Ya(() => {
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
          if (On(l, ct.First | ct.AutoFocus) !== eu.Error) return;
        } else if (On(l, ct.First) !== eu.Error) return;
        if (s != null && s.current && (Ct(s.current), (t == null ? void 0 : t.activeElement) === s.current)) return;
        console.warn("There are no focusable elements inside the <FocusTrap />");
      }
      i.current = t == null ? void 0 : t.activeElement;
    });
  }, [s, o, e]), i;
}
function Aw(e, { ownerDocument: t, container: n, containers: r, previousActiveElement: s }) {
  let i = vc(), o = !!(e & 4);
  ic(t == null ? void 0 : t.defaultView, "focus", (a) => {
    if (!o || !i.current) return;
    let l = Nh(r);
    Ge(n.current) && l.add(n.current);
    let u = s.current;
    if (!u) return;
    let c = a.target;
    Ge(c) ? Ih(l, c) ? (s.current = c, Ct(c)) : (a.preventDefault(), a.stopPropagation(), Ct(u)) : Ct(s.current);
  }, !0);
}
function Ih(e, t) {
  for (let n of e) if (n.contains(t)) return !0;
  return !1;
}
function Fh(e) {
  var t;
  return !!(e.enter || e.enterFrom || e.enterTo || e.leave || e.leaveFrom || e.leaveTo) || !Hn((t = e.as) != null ? t : zh) || D.Children.count(e.children) === 1;
}
let Fa = ge(null);
Fa.displayName = "TransitionContext";
var Cw = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(Cw || {});
function $w() {
  let e = re(Fa);
  if (e === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e;
}
function Hw() {
  let e = re(Va);
  if (e === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e;
}
let Va = ge(null);
Va.displayName = "NestingContext";
function za(e) {
  return "children" in e ? za(e.children) : e.current.filter(({ el: t }) => t.current !== null).filter(({ state: t }) => t === "visible").length > 0;
}
function Vh(e, t) {
  let n = Ft(e), r = q([]), s = vc(), i = kt(), o = Z((m, p = Gt.Hidden) => {
    let h = r.current.findIndex(({ el: _ }) => _ === m);
    h !== -1 && (Ye(p, { [Gt.Unmount]() {
      r.current.splice(h, 1);
    }, [Gt.Hidden]() {
      r.current[h].state = "hidden";
    } }), i.microTask(() => {
      var _;
      !za(r) && s.current && ((_ = n.current) == null || _.call(n));
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
let zh = Ae, Bh = wt.RenderStrategy;
function Ow(e, t) {
  var n, r;
  let { transition: s = !0, beforeEnter: i, afterEnter: o, beforeLeave: a, afterLeave: l, enter: u, enterFrom: c, enterTo: d, entered: f, leave: m, leaveFrom: p, leaveTo: h, ..._ } = e, [v, M] = oe(null), y = q(null), x = Fh(e), w = Le(...x ? [y, t, M] : t === null ? [] : [t]), S = (n = _.unmount) == null || n ? Gt.Unmount : Gt.Hidden, { show: j, appear: Y, initial: I } = $w(), [k, C] = oe(j ? "visible" : "hidden"), N = Hw(), { register: U, unregister: O } = N;
  Me(() => U(y), [U, y]), Me(() => {
    if (S === Gt.Hidden && y.current) {
      if (j && k !== "visible") {
        C("visible");
        return;
      }
      return Ye(k, { hidden: () => O(y), visible: () => U(y) });
    }
  }, [k, y, U, O, j, S]);
  let E = Ia();
  Me(() => {
    if (x && E && k === "visible" && y.current === null) throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [y, k, E, x]);
  let $ = I && !Y, R = Y && j && I, L = q(!1), P = Vh(() => {
    L.current || (C("hidden"), O(y));
  }, N), B = Z((W) => {
    L.current = !0;
    let Q = W ? "enter" : "leave";
    P.onStart(y, Q, (se) => {
      se === "enter" ? i == null || i() : se === "leave" && (a == null || a());
    });
  }), T = Z((W) => {
    let Q = W ? "enter" : "leave";
    L.current = !1, P.onStop(y, Q, (se) => {
      se === "enter" ? o == null || o() : se === "leave" && (l == null || l());
    }), Q === "leave" && !za(P) && (C("hidden"), O(y));
  });
  ue(() => {
    x && s || (B(j), T(j));
  }, [j, x, s]);
  let H = !(!s || !x || !E || $), [, F] = ja(H, v, j, { start: B, end: T }), K = Kt({ ref: w, className: ((r = Jl(_.className, R && u, R && c, F.enter && u, F.enter && F.closed && c, F.enter && !F.closed && d, F.leave && m, F.leave && !F.closed && p, F.leave && F.closed && h, !F.transition && j && f)) == null ? void 0 : r.trim()) || void 0, ...Ea(F) }), ne = 0;
  k === "visible" && (ne |= De.Open), k === "hidden" && (ne |= De.Closed), j && k === "hidden" && (ne |= De.Opening), !j && k === "visible" && (ne |= De.Closing);
  let G = xe();
  return D.createElement(Va.Provider, { value: P }, D.createElement(Oa, { value: ne }, G({ ourProps: K, theirProps: _, defaultTag: zh, features: Bh, visible: k === "visible", name: "Transition.Child" })));
}
function Rw(e, t) {
  let { show: n, appear: r = !1, unmount: s = !0, ...i } = e, o = q(null), a = Fh(e), l = Le(...a ? [o, t] : t === null ? [] : [t]);
  Ia();
  let u = bn();
  if (n === void 0 && u !== null && (n = (u & De.Open) === De.Open), n === void 0) throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [c, d] = oe(n ? "visible" : "hidden"), f = Vh(() => {
    n || d("hidden");
  }), [m, p] = oe(!0), h = q([n]);
  Me(() => {
    m !== !1 && h.current[h.current.length - 1] !== n && (h.current.push(n), p(!1));
  }, [h, n]);
  let _ = pe(() => ({ show: n, appear: r, initial: m }), [n, r, m]);
  Me(() => {
    n ? d("visible") : !za(f) && o.current !== null && d("hidden");
  }, [n, f]);
  let v = { unmount: s }, M = Z(() => {
    var w;
    m && p(!1), (w = e.beforeEnter) == null || w.call(e);
  }), y = Z(() => {
    var w;
    m && p(!1), (w = e.beforeLeave) == null || w.call(e);
  }), x = xe();
  return D.createElement(Va.Provider, { value: f }, D.createElement(Fa.Provider, { value: _ }, x({ ourProps: { ...v, as: Ae, children: D.createElement(Wh, { ref: l, ...v, ...i, beforeEnter: M, beforeLeave: y }) }, theirProps: {}, defaultTag: Ae, features: Bh, visible: c === "visible", name: "Transition" })));
}
function Nw(e, t) {
  let n = re(Fa) !== null, r = bn() !== null;
  return D.createElement(D.Fragment, null, !n && r ? D.createElement(lu, { ref: t, ...e }) : D.createElement(Wh, { ref: t, ...e }));
}
let lu = be(Rw), Wh = be(Ow), Tr = be(Nw), Ba = Object.assign(lu, { Child: Tr, Root: lu });
var Iw = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Iw || {}), Fw = ((e) => (e[e.SetTitleId = 0] = "SetTitleId", e))(Fw || {});
let Vw = { 0(e, t) {
  return e.titleId === t.id ? e : { ...e, titleId: t.id };
} }, gc = ge(null);
gc.displayName = "DialogContext";
function Wa(e) {
  let t = re(gc);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, Wa), n;
  }
  return t;
}
function zw(e, t) {
  return Ye(t.type, Vw, e, t);
}
let gf = be(function(e, t) {
  let n = je(), { id: r = `headlessui-dialog-${n}`, open: s, onClose: i, initialFocus: o, role: a = "dialog", autoFocus: l = !0, __demoMode: u = !1, unmount: c = !1, ...d } = e, f = q(!1);
  a = function() {
    return a === "dialog" || a === "alertdialog" ? a : (f.current || (f.current = !0, console.warn(`Invalid role [${a}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog");
  }();
  let m = bn();
  s === void 0 && m !== null && (s = (m & De.Open) === De.Open);
  let p = q(null), h = Le(p, t), _ = yn(p.current), v = s ? 0 : 1, [M, y] = dp(zw, { titleId: null, descriptionId: null, panelRef: yy() }), x = Z(() => i(!1)), w = Z((F) => y({ type: 0, id: F })), S = Ia() ? v === 0 : !1, [j, Y] = ew(), I = { get current() {
    var F;
    return (F = M.panelRef.current) != null ? F : p.current;
  } }, k = Rh(), { resolveContainers: C } = ww({ mainTreeNode: k, portals: j, defaultContainers: [I] }), N = m !== null ? (m & De.Closing) === De.Closing : !1;
  tc(u || N ? !1 : S, { allowed: Z(() => {
    var F, K;
    return [(K = (F = p.current) == null ? void 0 : F.closest("[data-headlessui-portal]")) != null ? K : null];
  }), disallowed: Z(() => {
    var F;
    return [(F = k == null ? void 0 : k.closest("body > *:not(#headlessui-portal-root)")) != null ? F : null];
  }) });
  let U = Gn.get(null);
  Me(() => {
    if (S) return U.actions.push(r), () => U.actions.pop(r);
  }, [U, r, S]);
  let O = ye(U, X((F) => U.selectors.isTop(F, r), [U, r]));
  sc(O, C, (F) => {
    F.preventDefault(), x();
  }), bw(O, _ == null ? void 0 : _.defaultView, (F) => {
    F.preventDefault(), F.stopPropagation(), document.activeElement && "blur" in document.activeElement && typeof document.activeElement.blur == "function" && document.activeElement.blur(), x();
  }), ac(u || N ? !1 : S, _, C), nc(S, p, x);
  let [E, $] = Hp(), R = pe(() => [{ dialogState: v, close: x, setTitleId: w, unmount: c }, M], [v, x, w, c, M]), L = Ee({ open: v === 0 }), P = { ref: h, id: r, role: a, tabIndex: -1, "aria-modal": u ? void 0 : v === 0 ? !0 : void 0, "aria-labelledby": M.titleId, "aria-describedby": E, unmount: c }, B = !xw(), T = cn.None;
  S && !u && (T |= cn.RestoreFocus, T |= cn.TabLock, l && (T |= cn.AutoFocus), B && (T |= cn.InitialFocus));
  let H = xe();
  return D.createElement(Yh, null, D.createElement(pf, { force: !0 }, D.createElement(Na, null, D.createElement(gc.Provider, { value: R }, D.createElement(Dh, { target: p }, D.createElement(pf, { force: !1 }, D.createElement($, { slot: L }, D.createElement(Y, null, D.createElement(Tw, { initialFocus: o, initialFocusFallback: p, containers: C, features: T }, D.createElement(Np, { value: x }, H({ ourProps: P, theirProps: d, slot: L, defaultTag: Bw, features: Ww, visible: v === 0, name: "Dialog" })))))))))));
}), Bw = "div", Ww = wt.RenderStrategy | wt.Static;
function Uw(e, t) {
  let { transition: n = !1, open: r, ...s } = e, i = bn(), o = e.hasOwnProperty("open") || i !== null, a = e.hasOwnProperty("onClose");
  if (!o && !a) throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
  if (!o) throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
  if (!a) throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
  if (!i && typeof e.open != "boolean") throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${e.open}`);
  if (typeof e.onClose != "function") throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${e.onClose}`);
  return (r !== void 0 || n) && !s.static ? D.createElement(vf, null, D.createElement(Ba, { show: r, transition: n, unmount: s.unmount }, D.createElement(gf, { ref: t, ...s }))) : D.createElement(vf, null, D.createElement(gf, { ref: t, open: r, ...s }));
}
let Kw = "div";
function Gw(e, t) {
  let n = je(), { id: r = `headlessui-dialog-panel-${n}`, transition: s = !1, ...i } = e, [{ dialogState: o, unmount: a }, l] = Wa("Dialog.Panel"), u = Le(t, l.panelRef), c = Ee({ open: o === 0 }), d = Z((_) => {
    _.stopPropagation();
  }), f = { ref: u, id: r, onClick: d }, m = s ? Tr : Ae, p = s ? { unmount: a } : {}, h = xe();
  return D.createElement(m, { ...p }, h({ ourProps: f, theirProps: i, slot: c, defaultTag: Kw, name: "Dialog.Panel" }));
}
let Jw = "div";
function qw(e, t) {
  let { transition: n = !1, ...r } = e, [{ dialogState: s, unmount: i }] = Wa("Dialog.Backdrop"), o = Ee({ open: s === 0 }), a = { ref: t, "aria-hidden": !0 }, l = n ? Tr : Ae, u = n ? { unmount: i } : {}, c = xe();
  return D.createElement(l, { ...u }, c({ ourProps: a, theirProps: r, slot: o, defaultTag: Jw, name: "Dialog.Backdrop" }));
}
let Xw = "h2";
function Zw(e, t) {
  let n = je(), { id: r = `headlessui-dialog-title-${n}`, ...s } = e, [{ dialogState: i, setTitleId: o }] = Wa("Dialog.Title"), a = Le(t);
  ue(() => (o(r), () => o(null)), [r, o]);
  let l = Ee({ open: i === 0 }), u = { ref: a, id: r };
  return xe()({ ourProps: u, theirProps: s, slot: l, defaultTag: Xw, name: "Dialog.Title" });
}
let Qw = be(Uw), Uh = be(Gw);
be(qw);
let e0 = be(Zw), t0 = Object.assign(Qw, { Panel: Uh, Title: e0, Description: Op });
var yf;
let n0 = (yf = D.startTransition) != null ? yf : function(e) {
  e();
};
var r0 = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(r0 || {}), o0 = ((e) => (e[e.ToggleDisclosure = 0] = "ToggleDisclosure", e[e.CloseDisclosure = 1] = "CloseDisclosure", e[e.SetButtonId = 2] = "SetButtonId", e[e.SetPanelId = 3] = "SetPanelId", e[e.SetButtonElement = 4] = "SetButtonElement", e[e.SetPanelElement = 5] = "SetPanelElement", e))(o0 || {});
let s0 = { 0: (e) => ({ ...e, disclosureState: Ye(e.disclosureState, { 0: 1, 1: 0 }) }), 1: (e) => e.disclosureState === 1 ? e : { ...e, disclosureState: 1 }, 2(e, t) {
  return e.buttonId === t.buttonId ? e : { ...e, buttonId: t.buttonId };
}, 3(e, t) {
  return e.panelId === t.panelId ? e : { ...e, panelId: t.panelId };
}, 4(e, t) {
  return e.buttonElement === t.element ? e : { ...e, buttonElement: t.element };
}, 5(e, t) {
  return e.panelElement === t.element ? e : { ...e, panelElement: t.element };
} }, yc = ge(null);
yc.displayName = "DisclosureContext";
function Mc(e) {
  let t = re(yc);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, Mc), n;
  }
  return t;
}
let bc = ge(null);
bc.displayName = "DisclosureAPIContext";
function Kh(e) {
  let t = re(bc);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, Kh), n;
  }
  return t;
}
let xc = ge(null);
xc.displayName = "DisclosurePanelContext";
function i0() {
  return re(xc);
}
function a0(e, t) {
  return Ye(t.type, s0, e, t);
}
let l0 = Ae;
function u0(e, t) {
  let { defaultOpen: n = !1, ...r } = e, s = q(null), i = Le(t, Cp((h) => {
    s.current = h;
  }, e.as === void 0 || Hn(e.as))), o = dp(a0, { disclosureState: n ? 0 : 1, buttonElement: null, panelElement: null, buttonId: null, panelId: null }), [{ disclosureState: a, buttonId: l }, u] = o, c = Z((h) => {
    u({ type: 1 });
    let _ = rn(s.current);
    if (!_ || !l) return;
    let v = h ? ft(h) ? h : "current" in h && ft(h.current) ? h.current : _.getElementById(l) : _.getElementById(l);
    v == null || v.focus();
  }), d = pe(() => ({ close: c }), [c]), f = Ee({ open: a === 0, close: c }), m = { ref: i }, p = xe();
  return D.createElement(yc.Provider, { value: o }, D.createElement(bc.Provider, { value: d }, D.createElement(Np, { value: c }, D.createElement(Oa, { value: Ye(a, { 0: De.Open, 1: De.Closed }) }, p({ ourProps: m, theirProps: r, slot: f, defaultTag: l0, name: "Disclosure" })))));
}
let c0 = "button";
function d0(e, t) {
  let n = je(), { id: r = `headlessui-disclosure-button-${n}`, disabled: s = !1, autoFocus: i = !1, ...o } = e, [a, l] = Mc("Disclosure.Button"), u = i0(), c = u === null ? !1 : u === a.panelId, d = q(null), f = Le(d, t, Z((I) => {
    if (!c) return l({ type: 4, element: I });
  }));
  ue(() => {
    if (!c) return l({ type: 2, buttonId: r }), () => {
      l({ type: 2, buttonId: null });
    };
  }, [r, l, c]);
  let m = Z((I) => {
    var k;
    if (c) {
      if (a.disclosureState === 1) return;
      switch (I.key) {
        case de.Space:
        case de.Enter:
          I.preventDefault(), I.stopPropagation(), l({ type: 0 }), (k = a.buttonElement) == null || k.focus();
          break;
      }
    } else switch (I.key) {
      case de.Space:
      case de.Enter:
        I.preventDefault(), I.stopPropagation(), l({ type: 0 });
        break;
    }
  }), p = Z((I) => {
    switch (I.key) {
      case de.Space:
        I.preventDefault();
        break;
    }
  }), h = Z((I) => {
    var k;
    Po(I.currentTarget) || s || (c ? (l({ type: 0 }), (k = a.buttonElement) == null || k.focus()) : l({ type: 0 }));
  }), { isFocusVisible: _, focusProps: v } = Vr({ autoFocus: i }), { isHovered: M, hoverProps: y } = Fr({ isDisabled: s }), { pressed: x, pressProps: w } = La({ disabled: s }), S = Ee({ open: a.disclosureState === 0, hover: M, active: x, disabled: s, focus: _, autofocus: i }), j = Ta(e, a.buttonElement), Y = Xt(c ? { ref: f, type: j, disabled: s || void 0, autoFocus: i, onKeyDown: m, onClick: h } : { ref: f, id: r, type: j, "aria-expanded": a.disclosureState === 0, "aria-controls": a.panelElement ? a.panelId : void 0, disabled: s || void 0, autoFocus: i, onKeyDown: m, onKeyUp: p, onClick: h }, v, y, w);
  return xe()({ ourProps: Y, theirProps: o, slot: S, defaultTag: c0, name: "Disclosure.Button" });
}
let f0 = "div", m0 = wt.RenderStrategy | wt.Static;
function p0(e, t) {
  let n = je(), { id: r = `headlessui-disclosure-panel-${n}`, transition: s = !1, ...i } = e, [o, a] = Mc("Disclosure.Panel"), { close: l } = Kh("Disclosure.Panel"), [u, c] = oe(null), d = Le(t, Z((M) => {
    n0(() => a({ type: 5, element: M }));
  }), c);
  ue(() => (a({ type: 3, panelId: r }), () => {
    a({ type: 3, panelId: null });
  }), [r, a]);
  let f = bn(), [m, p] = ja(s, u, f !== null ? (f & De.Open) === De.Open : o.disclosureState === 0), h = Ee({ open: o.disclosureState === 0, close: l }), _ = { ref: d, id: r, ...Ea(p) }, v = xe();
  return D.createElement(Yh, null, D.createElement(xc.Provider, { value: o.panelId }, v({ ourProps: _, theirProps: i, slot: h, defaultTag: f0, features: m0, visible: m, name: "Disclosure.Panel" })));
}
let h0 = be(u0), Gh = be(d0), Jh = be(p0), _0 = Object.assign(h0, { Button: Gh, Panel: Jh }), Mf = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function bf(e) {
  var t, n;
  let r = (t = e.innerText) != null ? t : "", s = e.cloneNode(!0);
  if (!Ge(s)) return r;
  let i = !1;
  for (let a of s.querySelectorAll('[hidden],[aria-hidden],[role="img"]')) a.remove(), i = !0;
  let o = i ? (n = s.innerText) != null ? n : "" : r;
  return Mf.test(o) && (o = o.replace(Mf, "")), o;
}
function v0(e) {
  let t = e.getAttribute("aria-label");
  if (typeof t == "string") return t.trim();
  let n = e.getAttribute("aria-labelledby");
  if (n) {
    let r = n.split(" ").map((s) => {
      let i = document.getElementById(s);
      if (i) {
        let o = i.getAttribute("aria-label");
        return typeof o == "string" ? o.trim() : bf(i).trim();
      }
      return null;
    }).filter(Boolean);
    if (r.length > 0) return r.join(", ");
  }
  return bf(e).trim();
}
function g0(e) {
  let t = q(""), n = q("");
  return Z(() => {
    let r = e.current;
    if (!r) return "";
    let s = r.innerText;
    if (t.current === s) return n.current;
    let i = v0(r).trim().toLowerCase();
    return t.current = s, n.current = i, i;
  });
}
var y0 = Object.defineProperty, M0 = (e, t, n) => t in e ? y0(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, xf = (e, t, n) => (M0(e, typeof t != "symbol" ? t + "" : t, n), n), Ne = ((e) => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(Ne || {}), Jt = ((e) => (e[e.Single = 0] = "Single", e[e.Multi = 1] = "Multi", e))(Jt || {}), bo = ((e) => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(bo || {}), qh = ((e) => (e[e.OpenListbox = 0] = "OpenListbox", e[e.CloseListbox = 1] = "CloseListbox", e[e.GoToOption = 2] = "GoToOption", e[e.Search = 3] = "Search", e[e.ClearSearch = 4] = "ClearSearch", e[e.SelectOption = 5] = "SelectOption", e[e.RegisterOptions = 6] = "RegisterOptions", e[e.UnregisterOptions = 7] = "UnregisterOptions", e[e.SetButtonElement = 8] = "SetButtonElement", e[e.SetOptionsElement = 9] = "SetOptionsElement", e[e.SortOptions = 10] = "SortOptions", e[e.MarkButtonAsMoved = 11] = "MarkButtonAsMoved", e))(qh || {});
function wf(e, t = (n) => n) {
  let n = e.activeOptionIndex !== null ? e.options[e.activeOptionIndex] : null, r = oc(t(e.options.slice()), (i) => i.dataRef.current.domRef.current), s = n ? r.indexOf(n) : null;
  return s === -1 && (s = null), { options: r, activeOptionIndex: s };
}
let b0 = { 1(e) {
  if (e.dataRef.current.disabled || e.listboxState === 1) return e;
  let t = e.buttonElement ? Pt.Tracked(_c(e.buttonElement)) : e.buttonPositionState;
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
      let d = e.options[c].dataRef.current.domRef, f = Tn(t, { resolveItems: () => e.options, resolveActiveIndex: () => e.activeOptionIndex, resolveId: (m) => m.id, resolveDisabled: (m) => m.dataRef.current.disabled });
      if (f !== null) {
        let m = e.options[f].dataRef.current.domRef;
        if (((r = d.current) == null ? void 0 : r.previousElementSibling) === m.current || ((s = m.current) == null ? void 0 : s.previousElementSibling) === null) return { ...a, activeOptionIndex: f };
      }
    }
  } else if (t.focus === me.Next) {
    let c = e.activeOptionIndex;
    if (c !== null) {
      let d = e.options[c].dataRef.current.domRef, f = Tn(t, { resolveItems: () => e.options, resolveActiveIndex: () => e.activeOptionIndex, resolveId: (m) => m.id, resolveDisabled: (m) => m.dataRef.current.disabled });
      if (f !== null) {
        let m = e.options[f].dataRef.current.domRef;
        if (((i = d.current) == null ? void 0 : i.nextElementSibling) === m.current || ((o = m.current) == null ? void 0 : o.nextElementSibling) === null) return { ...a, activeOptionIndex: f };
      }
    }
  }
  let l = wf(e), u = Tn(t, { resolveItems: () => l.options, resolveActiveIndex: () => l.activeOptionIndex, resolveId: (c) => c.id, resolveDisabled: (c) => c.dataRef.current.disabled });
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
  if (e.pendingFocus.focus !== me.Nothing && (r = Tn(e.pendingFocus, { resolveItems: () => n, resolveActiveIndex: () => e.activeOptionIndex, resolveId: (s) => s.id, resolveDisabled: (s) => s.dataRef.current.disabled })), e.activeOptionIndex === null) {
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
}, 8: (e, t) => e.buttonElement === t.element ? e : { ...e, buttonElement: t.element }, 9: (e, t) => e.optionsElement === t.element ? e : { ...e, optionsElement: t.element }, 10: (e) => e.pendingShouldSort ? { ...e, ...wf(e), pendingShouldSort: !1 } : e, 11(e) {
  return e.buttonPositionState.kind !== "Tracked" ? e : { ...e, buttonPositionState: Pt.Moved };
} };
class wc extends Qu {
  constructor(t) {
    super(t), xf(this, "actions", { onChange: (n) => {
      let { onChange: r, compare: s, mode: i, value: o } = this.state.dataRef.current;
      return Ye(i, { 0: () => r == null ? void 0 : r(n), 1: () => {
        let a = o.slice(), l = a.findIndex((u) => s(u, n));
        return l === -1 ? a.push(n) : a.splice(l, 1), r == null ? void 0 : r(a);
      } });
    }, registerOption: al(() => {
      let n = [], r = /* @__PURE__ */ new Set();
      return [(s, i) => {
        r.has(i) || (r.add(i), n.push({ id: s, dataRef: i }));
      }, () => (r.clear(), this.send({ type: 6, options: n.splice(0) }))];
    }), unregisterOption: al(() => {
      let n = [];
      return [(r) => n.push(r), () => {
        this.send({ type: 7, options: n.splice(0) });
      }];
    }), goToOption: al(() => {
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
    } }), xf(this, "selectors", { activeDescendantId(n) {
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
      let n = this.state.id, r = Gn.get(null);
      this.disposables.add(r.on(ec.Push, (s) => {
        !r.selectors.isTop(s, n) && this.state.listboxState === 0 && this.actions.closeListbox();
      })), this.on(0, () => r.actions.push(n)), this.on(1, () => r.actions.pop(n));
    }
    this.disposables.group((n) => {
      this.on(1, (r) => {
        r.buttonElement && (n.dispose(), n.add(Th(r.buttonElement, r.buttonPositionState, () => {
          this.send({ type: 11 });
        })));
      });
    }), this.on(5, (n, r) => {
      var s;
      this.actions.onChange(r.value), this.state.dataRef.current.mode === 0 && (this.actions.closeListbox(), (s = this.state.buttonElement) == null || s.focus({ preventScroll: !0 }));
    });
  }
  static new({ id: t, __demoMode: n = !1 }) {
    return new wc({ id: t, dataRef: { current: {} }, listboxState: n ? 0 : 1, options: [], searchQuery: "", activeOptionIndex: null, activationTrigger: 1, buttonElement: null, optionsElement: null, pendingShouldSort: !1, pendingFocus: { focus: me.Nothing }, frozenValue: !1, __demoMode: n, buttonPositionState: Pt.Idle });
  }
  reduce(t, n) {
    return Ye(n.type, b0, t, n);
  }
}
const Xh = ge(null);
function Yc(e) {
  let t = re(Xh);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, Zh), n;
  }
  return t;
}
function Zh({ id: e, __demoMode: t = !1 }) {
  let n = pe(() => wc.new({ id: e, __demoMode: t }), []);
  return Ra(() => n.dispose()), n;
}
let Ua = ge(null);
Ua.displayName = "ListboxDataContext";
function Kr(e) {
  let t = re(Ua);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(n, Kr), n;
  }
  return t;
}
let x0 = Ae;
function w0(e, t) {
  let n = je(), r = zr(), { value: s, defaultValue: i, form: o, name: a, onChange: l, by: u, invalid: c = !1, disabled: d = r || !1, horizontal: f = !1, multiple: m = !1, __demoMode: p = !1, ...h } = e;
  const _ = f ? "horizontal" : "vertical";
  let v = Le(t), M = Ku(i), [y = m ? [] : void 0, x] = Uu(s, l, M), w = Zh({ id: n, __demoMode: p }), S = q({ static: !1, hold: !1 }), j = q(/* @__PURE__ */ new Map()), Y = Fp(u), I = X((H) => Ye(k.mode, { [Jt.Multi]: () => y.some((F) => Y(F, H)), [Jt.Single]: () => Y(y, H) }), [y]), k = Ee({ value: y, disabled: d, invalid: c, mode: m ? Jt.Multi : Jt.Single, orientation: _, onChange: x, compare: Y, isSelected: I, optionsPropsRef: S, listRef: j });
  Me(() => {
    w.state.dataRef.current = k;
  }, [k]);
  let C = ye(w, (H) => H.listboxState), N = Gn.get(null), U = ye(N, X((H) => N.selectors.isTop(H, n), [N, n])), [O, E] = ye(w, (H) => [H.buttonElement, H.optionsElement]);
  sc(U, [O, E], (H, F) => {
    w.send({ type: qh.CloseListbox }), Gp(F, rc.Loose) || (H.preventDefault(), O == null || O.focus());
  });
  let $ = Ee({ open: C === Ne.Open, disabled: d, invalid: c, value: y }), [R, L] = qu({ inherit: !0 }), P = { ref: v }, B = X(() => {
    if (M !== void 0) return x == null ? void 0 : x(M);
  }, [x, M]), T = xe();
  return D.createElement(L, { value: R, props: { htmlFor: O == null ? void 0 : O.id }, slot: { open: C === Ne.Open, disabled: d } }, D.createElement(xh, null, D.createElement(Xh.Provider, { value: w }, D.createElement(Ua.Provider, { value: k }, D.createElement(Oa, { value: Ye(C, { [Ne.Open]: De.Open, [Ne.Closed]: De.Closed }) }, a != null && y != null && D.createElement(Gu, { disabled: d, data: { [a]: y }, form: o, onReset: B }), T({ ourProps: P, theirProps: h, slot: $, defaultTag: x0, name: "Listbox" }))))));
}
let Y0 = "button";
function L0(e, t) {
  let n = je(), r = Sa(), s = Kr("Listbox.Button"), i = Yc("Listbox.Button"), { id: o = r || `headlessui-listbox-button-${n}`, disabled: a = s.disabled || !1, autoFocus: l = !1, ...u } = e, c = Le(t, yh(), i.actions.setButtonElement), d = Fx(), [f, m, p] = ye(i, (E) => [E.listboxState, E.buttonElement, E.optionsElement]), h = f === Ne.Open;
  Xp(h, { trigger: m, action: X((E) => {
    if (m != null && m.contains(E.target)) return Et.Ignore;
    let $ = E.target.closest('[role="option"]:not([data-disabled])');
    return Ge($) ? Et.Select($) : p != null && p.contains(E.target) ? Et.Ignore : Et.Close;
  }, [m, p]), close: i.actions.closeListbox, select: i.actions.selectActiveOption });
  let _ = Z((E) => {
    switch (E.key) {
      case de.Enter:
        Ep(E.currentTarget);
        break;
      case de.Space:
      case de.ArrowDown:
        E.preventDefault(), i.actions.openListbox({ focus: s.value ? me.Nothing : me.First });
        break;
      case de.ArrowUp:
        E.preventDefault(), i.actions.openListbox({ focus: s.value ? me.Nothing : me.Last });
        break;
    }
  }), v = Z((E) => {
    switch (E.key) {
      case de.Space:
        E.preventDefault();
        break;
    }
  }), M = Vp((E) => {
    var $;
    i.state.listboxState === Ne.Open ? (dt(() => i.actions.closeListbox()), ($ = i.state.buttonElement) == null || $.focus({ preventScroll: !0 })) : (E.preventDefault(), i.actions.openListbox({ focus: me.Nothing }));
  }), y = Z((E) => E.preventDefault()), x = Kn([o]), w = Ju(), { isFocusVisible: S, focusProps: j } = Vr({ autoFocus: l }), { isHovered: Y, hoverProps: I } = Fr({ isDisabled: a }), { pressed: k, pressProps: C } = La({ disabled: a }), N = Ee({ open: f === Ne.Open, active: k || f === Ne.Open, disabled: a, invalid: s.invalid, value: s.value, hover: Y, focus: S, autofocus: l }), U = ye(i, (E) => E.listboxState === Ne.Open), O = Xt(d(), { ref: c, id: o, type: Ta(e, m), "aria-haspopup": "listbox", "aria-controls": p == null ? void 0 : p.id, "aria-expanded": U, "aria-labelledby": x, "aria-describedby": w, disabled: a || void 0, autoFocus: l, onKeyDown: _, onKeyUp: v, onKeyPress: y }, M, j, I, C);
  return xe()({ ourProps: O, theirProps: u, slot: N, defaultTag: Y0, name: "Listbox.Button" });
}
let Qh = ge(!1), S0 = "div", k0 = wt.RenderStrategy | wt.Static;
function D0(e, t) {
  let n = je(), { id: r = `headlessui-listbox-options-${n}`, anchor: s, portal: i = !1, modal: o = !0, transition: a = !1, ...l } = e, u = gh(s), [c, d] = oe(null);
  u && (i = !0);
  let f = Kr("Listbox.Options"), m = Yc("Listbox.Options"), [p, h, _, v] = ye(m, (G) => [G.listboxState, G.buttonElement, G.optionsElement, G.__demoMode]), M = yn(h), y = yn(_), x = bn(), [w, S] = ja(a, c, x !== null ? (x & De.Open) === De.Open : p === Ne.Open);
  nc(w, h, m.actions.closeListbox);
  let j = v ? !1 : o && p === Ne.Open;
  ac(j, y);
  let Y = v ? !1 : o && p === Ne.Open;
  tc(Y, { allowed: X(() => [h, _], [h, _]) });
  let I = ye(m, m.selectors.didButtonMove) ? !1 : w, k = ye(m, m.selectors.hasFrozenValue) && !e.static, C = Oo(k, f.value), N = X((G) => f.compare(C, G), [f.compare, C]), U = ye(m, (G) => {
    var W;
    if (u == null || !((W = u == null ? void 0 : u.to) != null && W.includes("selection"))) return null;
    let Q = G.options.findIndex((se) => N(se.dataRef.current.value));
    return Q === -1 && (Q = 0), Q;
  }), O = (() => {
    if (u == null) return;
    if (U === null) return { ...u, inner: void 0 };
    let G = Array.from(f.listRef.current.values());
    return { ...u, inner: { listRef: { current: G }, index: U } };
  })(), [E, $] = bh(O), R = Mh(), L = Le(t, u ? E : null, m.actions.setOptionsElement, d), P = kt();
  ue(() => {
    let G = _;
    G && p === Ne.Open && (wa(G) || G == null || G.focus({ preventScroll: !0 }));
  }, [p, _]);
  let B = Z((G) => {
    var W;
    switch (P.dispose(), G.key) {
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
        G.preventDefault(), G.stopPropagation(), dt(() => m.actions.closeListbox()), eb(m.state.buttonElement, G.shiftKey ? ct.Previous : ct.Next);
        break;
      default:
        G.key.length === 1 && (m.actions.search(G.key), P.setTimeout(() => m.actions.clearSearch(), 350));
        break;
    }
  }), T = ye(m, (G) => {
    var W;
    return (W = G.buttonElement) == null ? void 0 : W.id;
  }), H = Ee({ open: p === Ne.Open }), F = Xt(u ? R() : {}, { id: r, ref: L, "aria-activedescendant": ye(m, m.selectors.activeDescendantId), "aria-multiselectable": f.mode === Jt.Multi ? !0 : void 0, "aria-labelledby": T, "aria-orientation": f.orientation, onKeyDown: B, role: "listbox", tabIndex: p === Ne.Open ? 0 : void 0, style: { ...l.style, ...$, "--button-width": Xl(w, h, !0).width }, ...Ea(S) }), K = xe(), ne = pe(() => f.mode === Jt.Multi ? f : { ...f, isSelected: N }, [f, N]);
  return D.createElement(Na, { enabled: i ? e.static || w : !1, ownerDocument: M }, D.createElement(Ua.Provider, { value: ne }, K({ ourProps: F, theirProps: l, slot: H, defaultTag: S0, features: k0, visible: I, name: "Listbox.Options" })));
}
let T0 = "div";
function E0(e, t) {
  let n = je(), { id: r = `headlessui-listbox-option-${n}`, disabled: s = !1, value: i, ...o } = e, a = re(Qh) === !0, l = Kr("Listbox.Option"), u = Yc("Listbox.Option"), c = ye(u, (k) => u.selectors.isActive(k, r)), d = l.isSelected(i), f = q(null), m = g0(f), p = Ft({ disabled: s, value: i, domRef: f, get textValue() {
    return m();
  } }), h = Le(t, f, (k) => {
    k ? l.listRef.current.set(r, k) : l.listRef.current.delete(r);
  }), _ = ye(u, (k) => u.selectors.shouldScrollIntoView(k, r));
  Me(() => {
    if (_) return qe().requestAnimationFrame(() => {
      var k, C;
      (C = (k = f.current) == null ? void 0 : k.scrollIntoView) == null || C.call(k, { block: "nearest" });
    });
  }, [_, f]), Me(() => {
    if (!a) return u.actions.registerOption(r, p), () => u.actions.unregisterOption(r);
  }, [p, r, a]);
  let v = Z((k) => {
    if (s) return k.preventDefault();
    u.actions.selectOption(i);
  }), M = Z(() => {
    if (s) return u.actions.goToOption({ focus: me.Nothing });
    u.actions.goToOption({ focus: me.Specific, id: r });
  }), y = Qp(), x = Z((k) => y.update(k)), w = Z((k) => {
    y.wasMoved(k) && (s || c && u.state.activationTrigger === bo.Pointer || u.actions.goToOption({ focus: me.Specific, id: r }, bo.Pointer));
  }), S = Z((k) => {
    y.wasMoved(k) && (s || c && u.state.activationTrigger === bo.Pointer && u.actions.goToOption({ focus: me.Nothing }));
  }), j = Ee({ active: c, focus: c, selected: d, disabled: s, selectedOption: d && a }), Y = a ? {} : { id: r, ref: h, role: "option", tabIndex: s === !0 ? void 0 : -1, "aria-disabled": s === !0 ? !0 : void 0, "aria-selected": d, disabled: void 0, onClick: v, onFocus: M, onPointerEnter: x, onMouseEnter: x, onPointerMove: w, onMouseMove: w, onPointerLeave: S, onMouseLeave: S }, I = xe();
  return !d && a ? null : I({ ourProps: Y, theirProps: o, slot: j, defaultTag: T0, name: "Listbox.Option" });
}
let j0 = Ae;
function P0(e, t) {
  let { options: n, placeholder: r, ...s } = e, i = { ref: Le(t) }, o = Kr("ListboxSelectedOption"), a = Ee({}), l = o.value === void 0 || o.value === null || o.mode === Jt.Multi && Array.isArray(o.value) && o.value.length === 0, u = xe();
  return D.createElement(Qh.Provider, { value: !0 }, u({ ourProps: i, theirProps: { ...s, children: D.createElement(D.Fragment, null, r && l ? r : n) }, slot: a, defaultTag: j0, name: "ListboxSelectedOption" }));
}
let A0 = be(w0), e_ = be(L0), C0 = Xu, t_ = be(D0), n_ = be(E0), $0 = be(P0), H0 = Object.assign(A0, { Button: e_, Label: C0, Options: t_, Option: n_, SelectedOption: $0 }), Lc = ge(null);
Lc.displayName = "GroupContext";
let O0 = Ae;
function R0(e) {
  var t;
  let [n, r] = oe(null), [s, i] = qu(), [o, a] = Hp(), l = pe(() => ({ switch: n, setSwitch: r }), [n, r]), u = {}, c = e, d = xe();
  return D.createElement(a, { name: "Switch.Description", value: o }, D.createElement(i, { name: "Switch.Label", value: s, props: { htmlFor: (t = l.switch) == null ? void 0 : t.id, onClick(f) {
    n && (ql(f.currentTarget) && f.preventDefault(), n.click(), n.focus({ preventScroll: !0 }));
  } } }, D.createElement(Lc.Provider, { value: l }, d({ ourProps: u, theirProps: c, slot: {}, defaultTag: O0, name: "Switch.Group" }))));
}
let N0 = "button";
function I0(e, t) {
  var n;
  let r = je(), s = Sa(), i = zr(), { id: o = s || `headlessui-switch-${r}`, disabled: a = i || !1, checked: l, defaultChecked: u, onChange: c, name: d, value: f, form: m, autoFocus: p = !1, ...h } = e, _ = re(Lc), [v, M] = oe(null), y = q(null), x = Le(y, t, _ === null ? null : _.setSwitch, M), w = Ku(u), [S, j] = Uu(l, c, w != null ? w : !1), Y = kt(), [I, k] = oe(!1), C = Z(() => {
    k(!0), j == null || j(!S), Y.nextFrame(() => {
      k(!1);
    });
  }), N = Z((W) => {
    if (Po(W.currentTarget)) return W.preventDefault();
    W.preventDefault(), C();
  }), U = Z((W) => {
    W.key === de.Space ? (W.preventDefault(), C()) : W.key === de.Enter && Ep(W.currentTarget);
  }), O = Z((W) => W.preventDefault()), E = Kn(), $ = Ju(), { isFocusVisible: R, focusProps: L } = Vr({ autoFocus: p }), { isHovered: P, hoverProps: B } = Fr({ isDisabled: a }), { pressed: T, pressProps: H } = La({ disabled: a }), F = Ee({ checked: S, disabled: a, hover: P, focus: R, active: T, autofocus: p, changing: I }), K = Xt({ id: o, ref: x, role: "switch", type: Ta(e, v), tabIndex: e.tabIndex === -1 ? 0 : (n = e.tabIndex) != null ? n : 0, "aria-checked": S, "aria-labelledby": E, "aria-describedby": $, disabled: a || void 0, autoFocus: p, onClick: N, onKeyUp: U, onKeyPress: O }, L, B, H), ne = X(() => {
    if (w !== void 0) return j == null ? void 0 : j(w);
  }, [j, w]), G = xe();
  return D.createElement(D.Fragment, null, d != null && D.createElement(Gu, { disabled: a, data: { [d]: f || "on" }, overrides: { type: "checkbox", checked: S }, form: m, onReset: ne }), G({ ourProps: K, theirProps: h, slot: F, defaultTag: N0, name: "Switch" }));
}
let F0 = be(I0), V0 = R0, z0 = Xu, B0 = Op, W0 = Object.assign(F0, { Group: V0, Label: z0, Description: B0 });
function U0({
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
const K0 = /* @__PURE__ */ b.forwardRef(U0);
function G0({
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
const Ro = /* @__PURE__ */ b.forwardRef(G0);
function J0({
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
const qt = /* @__PURE__ */ b.forwardRef(J0);
function q0({
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
const X0 = /* @__PURE__ */ b.forwardRef(q0);
function Z0({
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
const Q0 = /* @__PURE__ */ b.forwardRef(Z0);
function eY({
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
const tY = /* @__PURE__ */ b.forwardRef(eY);
function nY({
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
const No = /* @__PURE__ */ b.forwardRef(nY);
var r_ = { exports: {} };
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
})(r_);
var rY = r_.exports;
const J = /* @__PURE__ */ mp(rY), Sc = ({ className: e, innerClassName: t }) => /* @__PURE__ */ g.jsx("div", { className: e, children: /* @__PURE__ */ g.jsx("div", { className: J("spinner", t) }) }), bN = ({
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
  noResultsLabel: _ = "No results found",
  clearable: v = !0
}) => {
  const M = q(null), y = q(null), x = q(null), w = q(null), [S, j] = oe(""), Y = q(!1), [I, k] = oe(!1);
  return ue(() => {
    const C = () => {
      if (!w.current)
        return !1;
      const O = w.current.querySelector(
        '[class*="overflow-auto"]'
      );
      if (O)
        return y.current = O, k(!0), !0;
      if (x.current) {
        let E = x.current.parentElement, $ = 0;
        for (; E && $ < 10; ) {
          const R = getComputedStyle(E), L = E.classList.contains("overflow-auto"), P = R.overflow === "auto" || R.overflowY === "auto", B = E.scrollHeight > E.clientHeight && R.overflow !== "hidden";
          if (L || P || B)
            return y.current = E, k(!0), !0;
          E = E.parentElement, $++;
        }
      }
      return k(!1), !1;
    }, N = [
      setTimeout(C, 0),
      setTimeout(C, 50),
      setTimeout(C, 150),
      setTimeout(C, 300)
    ], U = new MutationObserver(() => {
      C();
    });
    return w.current && U.observe(w.current, {
      childList: !0,
      subtree: !0
    }), () => {
      N.forEach(clearTimeout), U.disconnect();
    };
  }, [r.length, S]), ue(() => {
    if (!(!y.current || !m || !p ? (Y.current = !1, !1) : !0))
      return;
    const N = y.current, U = () => {
      Y.current || h || !p || !m || (Y.current = !0, m(), setTimeout(() => {
        Y.current = !1;
      }, 500));
    }, O = () => {
      const L = y.current;
      if (!L || Y.current || h || !p) return;
      const { scrollTop: P, scrollHeight: B, clientHeight: T } = L;
      B - P - T < 100 && U();
    }, E = () => {
      const L = y.current;
      if (!L || Y.current || h || !p)
        return;
      const { scrollHeight: P, clientHeight: B, scrollTop: T } = L, H = P - T - B;
      (P <= B + 10 || H < 100) && U();
    }, $ = [
      setTimeout(E, 50),
      setTimeout(E, 150),
      setTimeout(E, 300),
      setTimeout(E, 500)
    ], R = setInterval(() => {
      const L = y.current;
      if (!L || !p || h || Y.current)
        return;
      const { scrollTop: P, scrollHeight: B, clientHeight: T } = L;
      B - P - T < 100 && U();
    }, 150);
    if (N) {
      N.addEventListener("scroll", O, { passive: !0 });
      const L = new MutationObserver(() => {
        E();
      });
      return L.observe(N, {
        childList: !0,
        subtree: !0
      }), () => {
        N.removeEventListener("scroll", O), L.disconnect(), $.forEach(clearTimeout), clearInterval(R), Y.current = !1;
      };
    }
    return () => {
      $.forEach(clearTimeout), clearInterval(R), Y.current = !1;
    };
  }, [m, p, h, r.length, I]), /* @__PURE__ */ g.jsxs("div", { ref: w, className: J("relative max-w-[572px]", e), children: [
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
      _f,
      {
        value: t,
        disabled: d,
        onChange: (C) => {
          f && Array.isArray(C), a(C);
        },
        multiple: f,
        children: /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
          /* @__PURE__ */ g.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ g.jsx(
              _f.Input,
              {
                className: J(
                  "relative w-full min-h-[40px] text-[14px] border border-light-3 cursor-pointer rounded-[3px] bg-white py-[7px] pl-[15px] pr-[25px] text-left transition-colors duration-100 !outline-offset-0 hover:bg-fo-accent-light hover:border-fo-accent hover:outline hover:!outline-[1px] hover:outline-fo-accent focus:outline-none focus:ring-0 focus:border-fo-accent focus:outline focus:!outline-[1px] focus:outline-fo-accent truncate",
                  (t == null ? void 0 : t.name) && v && "pr-[45px]",
                  s && "border-2 border-primary-shade py-[6px] px-[14px] hover:bg-fo-accent-light hover:border-fo-accent focus:border-fo-accent",
                  d && "!bg-transparent !border !border-light-3-tint !text-light-3 !py-[7px] !pl-[15px] !pr-[45px]"
                ),
                onChange: (C) => {
                  o(C.target.value), j(C.target.value);
                },
                placeholder: u,
                displayValue: (C) => Array.isArray(C) ? null : (C == null ? void 0 : C.name) || "",
                onClick: () => {
                  var C;
                  return (C = M.current) == null ? void 0 : C.click();
                }
              }
            ),
            /* @__PURE__ */ g.jsx(
              au,
              {
                className: J(
                  "absolute w-[20px] inset-y-0 flex justify-end items-center right-[10px]",
                  d && "cursor-not-allowed"
                ),
                ref: M,
                children: /* @__PURE__ */ g.jsx(qt, { className: "h-4 w-4" })
              }
            ),
            (t == null ? void 0 : t.name) && v && /* @__PURE__ */ g.jsx(
              au,
              {
                className: J(
                  "absolute inset-y-0 flex justify-end items-center right-[25px]",
                  d && "cursor-not-allowed"
                ),
                onClick: (C) => {
                  C.preventDefault(), a(null), o("");
                },
                children: /* @__PURE__ */ g.jsx(No, { className: "h-4 w-4 text-light-dark" })
              }
            )
          ] }),
          /* @__PURE__ */ g.jsx($h, { className: "absolute z-10 mt-[1px] max-w-[572px] min-w-[259px] max-h-[220px] w-full overflow-auto rounded-b-[3px] bg-white py-2 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none", children: /* @__PURE__ */ g.jsx("div", { ref: x, children: r.length === 0 && S !== "" ? /* @__PURE__ */ g.jsx("div", { className: "relative cursor-default select-none py-2 px-4 text-light-dark", children: _ }) : /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
            r.map((C) => /* @__PURE__ */ g.jsx(
              Hh,
              {
                title: C.name,
                value: C,
                className: ({ focus: N }) => `relative cursor-pointer select-none text-[14px] py-2 pl-[45px] pr-4 transition-colors duration-100 ${N && "bg-fo-accent-tint"}`,
                children: ({ selected: N }) => /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
                  /* @__PURE__ */ g.jsx("span", { className: "block truncate", children: C.name }),
                  N && /* @__PURE__ */ g.jsx("span", { className: "absolute inset-y-0 left-0 flex items-center pl-3 text-fo-accent", children: /* @__PURE__ */ g.jsx(Ro, { className: "h-4 w-4", "aria-hidden": "true" }) })
                ] })
              },
              C.value
            )),
            h && /* @__PURE__ */ g.jsx("div", { className: "px-[10px] py-2 flex justify-center items-center", children: /* @__PURE__ */ g.jsx(Sc, { className: "w-5 h-5" }) })
          ] }) }) })
        ] })
      }
    ),
    s && /* @__PURE__ */ g.jsx("p", { className: "text-danger text-xs mt-2.5", children: i || `${l} is required` })
  ] });
}, kc = ge({});
function Dc(e) {
  const t = q(null);
  return t.current === null && (t.current = e()), t.current;
}
const Tc = typeof window != "undefined", o_ = Tc ? Ma : ue, Ka = /* @__PURE__ */ ge(null);
function Ec(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function jc(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
const Ot = (e, t, n) => n > t ? t : n < e ? e : n;
function uu(e, t) {
  return t ? `${e}. For more information and steps for solving, visit https://motion.dev/troubleshooting/${t}` : e;
}
let Qn = () => {
}, Rt = () => {
};
process.env.NODE_ENV !== "production" && (Qn = (e, t, n) => {
  !e && typeof console != "undefined" && console.warn(uu(t, n));
}, Rt = (e, t, n) => {
  if (!e)
    throw new Error(uu(t, n));
});
const Nt = {}, s_ = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
function i_(e) {
  return typeof e == "object" && e !== null;
}
const a_ = (e) => /^0[^.\s]+$/u.test(e);
// @__NO_SIDE_EFFECTS__
function Pc(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const st = /* @__NO_SIDE_EFFECTS__ */ (e) => e, oY = (e, t) => (n) => t(e(n)), Gr = (...e) => e.reduce(oY), Er = /* @__NO_SIDE_EFFECTS__ */ (e, t, n) => {
  const r = t - e;
  return r === 0 ? 1 : (n - e) / r;
};
class Ac {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return Ec(this.subscriptions, t), () => jc(this.subscriptions, t);
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
function l_(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const Yf = /* @__PURE__ */ new Set();
function Cc(e, t, n) {
  e || Yf.has(t) || (console.warn(uu(t, n)), Yf.add(t));
}
const u_ = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, sY = 1e-7, iY = 12;
function aY(e, t, n, r, s) {
  let i, o, a = 0;
  do
    o = t + (n - t) / 2, i = u_(o, r, s) - e, i > 0 ? n = o : t = o;
  while (Math.abs(i) > sY && ++a < iY);
  return o;
}
function Jr(e, t, n, r) {
  if (e === t && n === r)
    return st;
  const s = (i) => aY(i, 0, 1, e, n);
  return (i) => i === 0 || i === 1 ? i : u_(s(i), t, r);
}
const c_ = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, d_ = (e) => (t) => 1 - e(1 - t), f_ = /* @__PURE__ */ Jr(0.33, 1.53, 0.69, 0.99), $c = /* @__PURE__ */ d_(f_), m_ = /* @__PURE__ */ c_($c), p_ = (e) => (e *= 2) < 1 ? 0.5 * $c(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), Hc = (e) => 1 - Math.sin(Math.acos(e)), h_ = d_(Hc), __ = c_(Hc), lY = /* @__PURE__ */ Jr(0.42, 0, 1, 1), uY = /* @__PURE__ */ Jr(0, 0, 0.58, 1), v_ = /* @__PURE__ */ Jr(0.42, 0, 0.58, 1), cY = (e) => Array.isArray(e) && typeof e[0] != "number", g_ = (e) => Array.isArray(e) && typeof e[0] == "number", Lf = {
  linear: st,
  easeIn: lY,
  easeInOut: v_,
  easeOut: uY,
  circIn: Hc,
  circInOut: __,
  circOut: h_,
  backIn: $c,
  backInOut: m_,
  backOut: f_,
  anticipate: p_
}, dY = (e) => typeof e == "string", Sf = (e) => {
  if (g_(e)) {
    Rt(e.length === 4, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length");
    const [t, n, r, s] = e;
    return Jr(t, n, r, s);
  } else if (dY(e))
    return Rt(Lf[e] !== void 0, `Invalid easing type '${e}'`, "invalid-easing-type"), Lf[e];
  return e;
}, ao = [
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
function fY(e, t) {
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
const mY = 40;
function y_(e, t) {
  let n = !1, r = !0;
  const s = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, i = () => n = !0, o = ao.reduce((y, x) => (y[x] = fY(i), y), {}), { setup: a, read: l, resolveKeyframes: u, preUpdate: c, update: d, preRender: f, render: m, postRender: p } = o, h = () => {
    const y = Nt.useManualTiming ? s.timestamp : performance.now();
    n = !1, Nt.useManualTiming || (s.delta = r ? 1e3 / 60 : Math.max(Math.min(y - s.timestamp, mY), 1)), s.timestamp = y, s.isProcessing = !0, a.process(s), l.process(s), u.process(s), c.process(s), d.process(s), f.process(s), m.process(s), p.process(s), s.isProcessing = !1, n && t && (r = !1, e(h));
  }, _ = () => {
    n = !0, r = !0, s.isProcessing || e(h);
  };
  return { schedule: ao.reduce((y, x) => {
    const w = o[x];
    return y[x] = (S, j = !1, Y = !1) => (n || _(), w.schedule(S, j, Y)), y;
  }, {}), cancel: (y) => {
    for (let x = 0; x < ao.length; x++)
      o[ao[x]].cancel(y);
  }, state: s, steps: o };
}
const { schedule: we, cancel: Qt, state: Oe, steps: _l } = /* @__PURE__ */ y_(typeof requestAnimationFrame != "undefined" ? requestAnimationFrame : st, !0);
let xo;
function pY() {
  xo = void 0;
}
const Ke = {
  now: () => (xo === void 0 && Ke.set(Oe.isProcessing || Nt.useManualTiming ? Oe.timestamp : performance.now()), xo),
  set: (e) => {
    xo = e, queueMicrotask(pY);
  }
}, M_ = (e) => (t) => typeof t == "string" && t.startsWith(e), Oc = /* @__PURE__ */ M_("--"), hY = /* @__PURE__ */ M_("var(--"), Rc = (e) => hY(e) ? _Y.test(e.split("/*")[0].trim()) : !1, _Y = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, er = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, jr = {
  ...er,
  transform: (e) => Ot(0, 1, e)
}, lo = {
  ...er,
  default: 1
}, gr = (e) => Math.round(e * 1e5) / 1e5, Nc = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function vY(e) {
  return e == null;
}
const gY = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, Ic = (e, t) => (n) => !!(typeof n == "string" && gY.test(n) && n.startsWith(e) || t && !vY(n) && Object.prototype.hasOwnProperty.call(n, t)), b_ = (e, t, n) => (r) => {
  if (typeof r != "string")
    return r;
  const [s, i, o, a] = r.match(Nc);
  return {
    [e]: parseFloat(s),
    [t]: parseFloat(i),
    [n]: parseFloat(o),
    alpha: a !== void 0 ? parseFloat(a) : 1
  };
}, yY = (e) => Ot(0, 255, e), vl = {
  ...er,
  transform: (e) => Math.round(yY(e))
}, mn = {
  test: /* @__PURE__ */ Ic("rgb", "red"),
  parse: /* @__PURE__ */ b_("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + vl.transform(e) + ", " + vl.transform(t) + ", " + vl.transform(n) + ", " + gr(jr.transform(r)) + ")"
};
function MY(e) {
  let t = "", n = "", r = "", s = "";
  return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), s = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), s = e.substring(4, 5), t += t, n += n, r += r, s += s), {
    red: parseInt(t, 16),
    green: parseInt(n, 16),
    blue: parseInt(r, 16),
    alpha: s ? parseInt(s, 16) / 255 : 1
  };
}
const cu = {
  test: /* @__PURE__ */ Ic("#"),
  parse: MY,
  transform: mn.transform
}, qr = /* @__NO_SIDE_EFFECTS__ */ (e) => ({
  test: (t) => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), Wt = /* @__PURE__ */ qr("deg"), xt = /* @__PURE__ */ qr("%"), ae = /* @__PURE__ */ qr("px"), bY = /* @__PURE__ */ qr("vh"), xY = /* @__PURE__ */ qr("vw"), kf = {
  ...xt,
  parse: (e) => xt.parse(e) / 100,
  transform: (e) => xt.transform(e * 100)
}, En = {
  test: /* @__PURE__ */ Ic("hsl", "hue"),
  parse: /* @__PURE__ */ b_("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + xt.transform(gr(t)) + ", " + xt.transform(gr(n)) + ", " + gr(jr.transform(r)) + ")"
}, Pe = {
  test: (e) => mn.test(e) || cu.test(e) || En.test(e),
  parse: (e) => mn.test(e) ? mn.parse(e) : En.test(e) ? En.parse(e) : cu.parse(e),
  transform: (e) => typeof e == "string" ? e : e.hasOwnProperty("red") ? mn.transform(e) : En.transform(e),
  getAnimatableNone: (e) => {
    const t = Pe.parse(e);
    return t.alpha = 0, Pe.transform(t);
  }
}, wY = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function YY(e) {
  var t, n;
  return isNaN(e) && typeof e == "string" && (((t = e.match(Nc)) == null ? void 0 : t.length) || 0) + (((n = e.match(wY)) == null ? void 0 : n.length) || 0) > 0;
}
const x_ = "number", w_ = "color", LY = "var", SY = "var(", Df = "${}", kY = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Pr(e) {
  const t = e.toString(), n = [], r = {
    color: [],
    number: [],
    var: []
  }, s = [];
  let i = 0;
  const a = t.replace(kY, (l) => (Pe.test(l) ? (r.color.push(i), s.push(w_), n.push(Pe.parse(l))) : l.startsWith(SY) ? (r.var.push(i), s.push(LY), n.push(l)) : (r.number.push(i), s.push(x_), n.push(parseFloat(l))), ++i, Df)).split(Df);
  return { values: n, split: a, indexes: r, types: s };
}
function Y_(e) {
  return Pr(e).values;
}
function L_(e) {
  const { split: t, types: n } = Pr(e), r = t.length;
  return (s) => {
    let i = "";
    for (let o = 0; o < r; o++)
      if (i += t[o], s[o] !== void 0) {
        const a = n[o];
        a === x_ ? i += gr(s[o]) : a === w_ ? i += Pe.transform(s[o]) : i += s[o];
      }
    return i;
  };
}
const DY = (e) => typeof e == "number" ? 0 : Pe.test(e) ? Pe.getAnimatableNone(e) : e;
function TY(e) {
  const t = Y_(e);
  return L_(e)(t.map(DY));
}
const en = {
  test: YY,
  parse: Y_,
  createTransformer: L_,
  getAnimatableNone: TY
};
function gl(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function EY({ hue: e, saturation: t, lightness: n, alpha: r }) {
  e /= 360, t /= 100, n /= 100;
  let s = 0, i = 0, o = 0;
  if (!t)
    s = i = o = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t, l = 2 * n - a;
    s = gl(l, a, e + 1 / 3), i = gl(l, a, e), o = gl(l, a, e - 1 / 3);
  }
  return {
    red: Math.round(s * 255),
    green: Math.round(i * 255),
    blue: Math.round(o * 255),
    alpha: r
  };
}
function Io(e, t) {
  return (n) => n > 0 ? t : e;
}
const ke = (e, t, n) => e + (t - e) * n, yl = (e, t, n) => {
  const r = e * e, s = n * (t * t - r) + r;
  return s < 0 ? 0 : Math.sqrt(s);
}, jY = [cu, mn, En], PY = (e) => jY.find((t) => t.test(e));
function Tf(e) {
  const t = PY(e);
  if (Qn(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"), !t)
    return !1;
  let n = t.parse(e);
  return t === En && (n = EY(n)), n;
}
const Ef = (e, t) => {
  const n = Tf(e), r = Tf(t);
  if (!n || !r)
    return Io(e, t);
  const s = { ...n };
  return (i) => (s.red = yl(n.red, r.red, i), s.green = yl(n.green, r.green, i), s.blue = yl(n.blue, r.blue, i), s.alpha = ke(n.alpha, r.alpha, i), mn.transform(s));
}, du = /* @__PURE__ */ new Set(["none", "hidden"]);
function AY(e, t) {
  return du.has(e) ? (n) => n <= 0 ? e : t : (n) => n >= 1 ? t : e;
}
function CY(e, t) {
  return (n) => ke(e, t, n);
}
function Fc(e) {
  return typeof e == "number" ? CY : typeof e == "string" ? Rc(e) ? Io : Pe.test(e) ? Ef : OY : Array.isArray(e) ? S_ : typeof e == "object" ? Pe.test(e) ? Ef : $Y : Io;
}
function S_(e, t) {
  const n = [...e], r = n.length, s = e.map((i, o) => Fc(i)(i, t[o]));
  return (i) => {
    for (let o = 0; o < r; o++)
      n[o] = s[o](i);
    return n;
  };
}
function $Y(e, t) {
  const n = { ...e, ...t }, r = {};
  for (const s in n)
    e[s] !== void 0 && t[s] !== void 0 && (r[s] = Fc(e[s])(e[s], t[s]));
  return (s) => {
    for (const i in r)
      n[i] = r[i](s);
    return n;
  };
}
function HY(e, t) {
  var s;
  const n = [], r = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < t.values.length; i++) {
    const o = t.types[i], a = e.indexes[o][r[o]], l = (s = e.values[a]) != null ? s : 0;
    n[i] = l, r[o]++;
  }
  return n;
}
const OY = (e, t) => {
  const n = en.createTransformer(t), r = Pr(e), s = Pr(t);
  return r.indexes.var.length === s.indexes.var.length && r.indexes.color.length === s.indexes.color.length && r.indexes.number.length >= s.indexes.number.length ? du.has(e) && !s.values.length || du.has(t) && !r.values.length ? AY(e, t) : Gr(S_(HY(r, s), s.values), n) : (Qn(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different"), Io(e, t));
};
function k_(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number" ? ke(e, t, n) : Fc(e)(e, t);
}
const RY = (e) => {
  const t = ({ timestamp: n }) => e(n);
  return {
    start: (n = !0) => we.update(t, n),
    stop: () => Qt(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => Oe.isProcessing ? Oe.timestamp : Ke.now()
  };
}, D_ = (e, t, n = 10) => {
  let r = "";
  const s = Math.max(Math.round(t / n), 2);
  for (let i = 0; i < s; i++)
    r += Math.round(e(i / (s - 1)) * 1e4) / 1e4 + ", ";
  return `linear(${r.substring(0, r.length - 2)})`;
}, Fo = 2e4;
function Vc(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < Fo; )
    t += n, r = e.next(t);
  return t >= Fo ? 1 / 0 : t;
}
function NY(e, t = 100, n) {
  const r = n({ ...e, keyframes: [0, t] }), s = Math.min(Vc(r), Fo);
  return {
    type: "keyframes",
    ease: (i) => r.next(s * i).value / t,
    duration: /* @__PURE__ */ ot(s)
  };
}
const IY = 5;
function T_(e, t, n) {
  const r = Math.max(t - IY, 0);
  return l_(n - e(r), t - r);
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
}, Ml = 1e-3;
function FY({ duration: e = Se.duration, bounce: t = Se.bounce, velocity: n = Se.velocity, mass: r = Se.mass }) {
  let s, i;
  Qn(e <= /* @__PURE__ */ mt(Se.maxDuration), "Spring duration must be 10 seconds or less", "spring-duration-limit");
  let o = 1 - t;
  o = Ot(Se.minDamping, Se.maxDamping, o), e = Ot(Se.minDuration, Se.maxDuration, /* @__PURE__ */ ot(e)), o < 1 ? (s = (u) => {
    const c = u * o, d = c * e, f = c - n, m = fu(u, o), p = Math.exp(-d);
    return Ml - f / m * p;
  }, i = (u) => {
    const d = u * o * e, f = d * n + n, m = Math.pow(o, 2) * Math.pow(u, 2) * e, p = Math.exp(-d), h = fu(Math.pow(u, 2), o);
    return (-s(u) + Ml > 0 ? -1 : 1) * ((f - m) * p) / h;
  }) : (s = (u) => {
    const c = Math.exp(-u * e), d = (u - n) * e + 1;
    return -Ml + c * d;
  }, i = (u) => {
    const c = Math.exp(-u * e), d = (n - u) * (e * e);
    return c * d;
  });
  const a = 5 / e, l = zY(s, i, a);
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
const VY = 12;
function zY(e, t, n) {
  let r = n;
  for (let s = 1; s < VY; s++)
    r = r - e(r) / t(r);
  return r;
}
function fu(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const BY = ["duration", "bounce"], WY = ["stiffness", "damping", "mass"];
function jf(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function UY(e) {
  let t = {
    velocity: Se.velocity,
    stiffness: Se.stiffness,
    damping: Se.damping,
    mass: Se.mass,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!jf(e, WY) && jf(e, BY))
    if (e.visualDuration) {
      const n = e.visualDuration, r = 2 * Math.PI / (n * 1.2), s = r * r, i = 2 * Ot(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(s);
      t = {
        ...t,
        mass: Se.mass,
        stiffness: s,
        damping: i
      };
    } else {
      const n = FY(e);
      t = {
        ...t,
        ...n,
        mass: Se.mass
      }, t.isResolvedFromDuration = !0;
    }
  return t;
}
function Vo(e = Se.visualDuration, t = Se.bounce) {
  const n = typeof e != "object" ? {
    visualDuration: e,
    keyframes: [0, 1],
    bounce: t
  } : e;
  let { restSpeed: r, restDelta: s } = n;
  const i = n.keyframes[0], o = n.keyframes[n.keyframes.length - 1], a = { done: !1, value: i }, { stiffness: l, damping: u, mass: c, duration: d, velocity: f, isResolvedFromDuration: m } = UY({
    ...n,
    velocity: -/* @__PURE__ */ ot(n.velocity || 0)
  }), p = f || 0, h = u / (2 * Math.sqrt(l * c)), _ = o - i, v = /* @__PURE__ */ ot(Math.sqrt(l / c)), M = Math.abs(_) < 5;
  r || (r = M ? Se.restSpeed.granular : Se.restSpeed.default), s || (s = M ? Se.restDelta.granular : Se.restDelta.default);
  let y;
  if (h < 1) {
    const w = fu(v, h);
    y = (S) => {
      const j = Math.exp(-h * v * S);
      return o - j * ((p + h * v * _) / w * Math.sin(w * S) + _ * Math.cos(w * S));
    };
  } else if (h === 1)
    y = (w) => o - Math.exp(-v * w) * (_ + (p + v * _) * w);
  else {
    const w = v * Math.sqrt(h * h - 1);
    y = (S) => {
      const j = Math.exp(-h * v * S), Y = Math.min(w * S, 300);
      return o - j * ((p + h * v * _) * Math.sinh(Y) + w * _ * Math.cosh(Y)) / w;
    };
  }
  const x = {
    calculatedDuration: m && d || null,
    next: (w) => {
      const S = y(w);
      if (m)
        a.done = w >= d;
      else {
        let j = w === 0 ? p : 0;
        h < 1 && (j = w === 0 ? /* @__PURE__ */ mt(p) : T_(y, w, S));
        const Y = Math.abs(j) <= r, I = Math.abs(o - S) <= s;
        a.done = Y && I;
      }
      return a.value = a.done ? o : S, a;
    },
    toString: () => {
      const w = Math.min(Vc(x), Fo), S = D_((j) => x.next(w * j).value, w, 30);
      return w + "ms " + S;
    },
    toTransition: () => {
    }
  };
  return x;
}
Vo.applyToOptions = (e) => {
  const t = NY(e, 100, Vo);
  return e.ease = t.ease, e.duration = /* @__PURE__ */ mt(t.duration), e.type = "keyframes", e;
};
function mu({ keyframes: e, velocity: t = 0, power: n = 0.8, timeConstant: r = 325, bounceDamping: s = 10, bounceStiffness: i = 500, modifyTarget: o, min: a, max: l, restDelta: u = 0.5, restSpeed: c }) {
  const d = e[0], f = {
    done: !1,
    value: d
  }, m = (Y) => a !== void 0 && Y < a || l !== void 0 && Y > l, p = (Y) => a === void 0 ? l : l === void 0 || Math.abs(a - Y) < Math.abs(l - Y) ? a : l;
  let h = n * t;
  const _ = d + h, v = o === void 0 ? _ : o(_);
  v !== _ && (h = v - d);
  const M = (Y) => -h * Math.exp(-Y / r), y = (Y) => v + M(Y), x = (Y) => {
    const I = M(Y), k = y(Y);
    f.done = Math.abs(I) <= u, f.value = f.done ? v : k;
  };
  let w, S;
  const j = (Y) => {
    m(f.value) && (w = Y, S = Vo({
      keyframes: [f.value, p(f.value)],
      velocity: T_(y, Y, f.value),
      // TODO: This should be passing * 1000
      damping: s,
      stiffness: i,
      restDelta: u,
      restSpeed: c
    }));
  };
  return j(0), {
    calculatedDuration: null,
    next: (Y) => {
      let I = !1;
      return !S && w === void 0 && (I = !0, x(Y), j(Y)), w !== void 0 && Y >= w ? S.next(Y - w) : (!I && x(Y), f);
    }
  };
}
function KY(e, t, n) {
  const r = [], s = n || Nt.mix || k_, i = e.length - 1;
  for (let o = 0; o < i; o++) {
    let a = s(e[o], e[o + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[o] || st : t;
      a = Gr(l, a);
    }
    r.push(a);
  }
  return r;
}
function GY(e, t, { clamp: n = !0, ease: r, mixer: s } = {}) {
  const i = e.length;
  if (Rt(i === t.length, "Both input and output ranges must be the same length", "range-length"), i === 1)
    return () => t[0];
  if (i === 2 && t[0] === t[1])
    return () => t[1];
  const o = e[0] === e[1];
  e[0] > e[i - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const a = KY(t, r, s), l = a.length, u = (c) => {
    if (o && c < e[0])
      return t[0];
    let d = 0;
    if (l > 1)
      for (; d < e.length - 2 && !(c < e[d + 1]); d++)
        ;
    const f = /* @__PURE__ */ Er(e[d], e[d + 1], c);
    return a[d](f);
  };
  return n ? (c) => u(Ot(e[0], e[i - 1], c)) : u;
}
function JY(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const s = /* @__PURE__ */ Er(0, t, r);
    e.push(ke(n, 1, s));
  }
}
function qY(e) {
  const t = [0];
  return JY(t, e.length - 1), t;
}
function XY(e, t) {
  return e.map((n) => n * t);
}
function ZY(e, t) {
  return e.map(() => t || v_).splice(0, e.length - 1);
}
function jn({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
  const s = cY(r) ? r.map(Sf) : Sf(r), i = {
    done: !1,
    value: t[0]
  }, o = XY(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === t.length ? n : qY(t),
    e
  ), a = GY(o, t, {
    ease: Array.isArray(s) ? s : ZY(t, s)
  });
  return {
    calculatedDuration: e,
    next: (l) => (i.value = a(l), i.done = l >= e, i)
  };
}
const QY = (e) => e !== null;
function zc(e, { repeat: t, repeatType: n = "loop" }, r, s = 1) {
  const i = e.filter(QY), a = s < 0 || t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
  return !a || r === void 0 ? i[a] : r;
}
const eL = {
  decay: mu,
  inertia: mu,
  tween: jn,
  keyframes: jn,
  spring: Vo
};
function E_(e) {
  typeof e.type == "string" && (e.type = eL[e.type]);
}
class Bc {
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
const tL = (e) => e / 100;
class Wc extends Bc {
  constructor(t) {
    super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.stop = () => {
      var r, s;
      const { motionValue: n } = this.options;
      n && n.updatedAt !== Ke.now() && this.tick(Ke.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), (s = (r = this.options).onStop) == null || s.call(r));
    }, this.options = t, this.initAnimation(), this.play(), t.autoplay === !1 && this.pause();
  }
  initAnimation() {
    const { options: t } = this;
    E_(t);
    const { type: n = jn, repeat: r = 0, repeatDelay: s = 0, repeatType: i, velocity: o = 0 } = t;
    let { keyframes: a } = t;
    const l = n || jn;
    process.env.NODE_ENV !== "production" && l !== jn && Rt(a.length <= 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${a}`, "spring-two-frames"), l !== jn && typeof a[0] != "number" && (this.mixKeyframes = Gr(tL, k_(a[0], a[1])), a = [0, 100]);
    const u = l({ ...t, keyframes: a });
    i === "mirror" && (this.mirroredGenerator = l({
      ...t,
      keyframes: [...a].reverse(),
      velocity: -o
    })), u.calculatedDuration === null && (u.calculatedDuration = Vc(u));
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
      const Y = Math.min(this.currentTime, s) / a;
      let I = Math.floor(Y), k = Y % 1;
      !k && Y >= 1 && (k = 1), k === 1 && I--, I = Math.min(I, d + 1), !!(I % 2) && (f === "reverse" ? (k = 1 - k, m && (k -= m / a)) : f === "mirror" && (x = o)), y = Ot(0, 1, k) * a;
    }
    const w = M ? { done: !1, value: c[0] } : x.next(y);
    i && (w.value = i(w.value));
    let { done: S } = w;
    !M && l !== null && (S = this.playbackSpeed >= 0 ? this.currentTime >= s : this.currentTime <= 0);
    const j = this.holdTime === null && (this.state === "finished" || this.state === "running" && S);
    return j && p !== mu && (w.value = zc(c, this.options, _, this.speed)), h && h(w.value), j && this.finish(), w;
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
    const { driver: t = RY, startTime: n } = this.options;
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
function nL(e) {
  var t;
  for (let n = 1; n < e.length; n++)
    (t = e[n]) != null || (e[n] = e[n - 1]);
}
const pn = (e) => e * 180 / Math.PI, pu = (e) => {
  const t = pn(Math.atan2(e[1], e[0]));
  return hu(t);
}, rL = {
  x: 4,
  y: 5,
  translateX: 4,
  translateY: 5,
  scaleX: 0,
  scaleY: 3,
  scale: (e) => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
  rotate: pu,
  rotateZ: pu,
  skewX: (e) => pn(Math.atan(e[1])),
  skewY: (e) => pn(Math.atan(e[2])),
  skew: (e) => (Math.abs(e[1]) + Math.abs(e[2])) / 2
}, hu = (e) => (e = e % 360, e < 0 && (e += 360), e), Pf = pu, Af = (e) => Math.sqrt(e[0] * e[0] + e[1] * e[1]), Cf = (e) => Math.sqrt(e[4] * e[4] + e[5] * e[5]), oL = {
  x: 12,
  y: 13,
  z: 14,
  translateX: 12,
  translateY: 13,
  translateZ: 14,
  scaleX: Af,
  scaleY: Cf,
  scale: (e) => (Af(e) + Cf(e)) / 2,
  rotateX: (e) => hu(pn(Math.atan2(e[6], e[5]))),
  rotateY: (e) => hu(pn(Math.atan2(-e[2], e[0]))),
  rotateZ: Pf,
  rotate: Pf,
  skewX: (e) => pn(Math.atan(e[4])),
  skewY: (e) => pn(Math.atan(e[1])),
  skew: (e) => (Math.abs(e[1]) + Math.abs(e[4])) / 2
};
function _u(e) {
  return e.includes("scale") ? 1 : 0;
}
function vu(e, t) {
  if (!e || e === "none")
    return _u(t);
  const n = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let r, s;
  if (n)
    r = oL, s = n;
  else {
    const a = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    r = rL, s = a;
  }
  if (!s)
    return _u(t);
  const i = r[t], o = s[1].split(",").map(iL);
  return typeof i == "function" ? i(o) : o[i];
}
const sL = (e, t) => {
  const { transform: n = "none" } = getComputedStyle(e);
  return vu(n, t);
};
function iL(e) {
  return parseFloat(e.trim());
}
const tr = [
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
], nr = new Set(tr), $f = (e) => e === er || e === ae, aL = /* @__PURE__ */ new Set(["x", "y", "z"]), lL = tr.filter((e) => !aL.has(e));
function uL(e) {
  const t = [];
  return lL.forEach((n) => {
    const r = e.getValue(n);
    r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
  }), t;
}
const hn = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  // Transform
  x: (e, { transform: t }) => vu(t, "x"),
  y: (e, { transform: t }) => vu(t, "y")
};
hn.translateX = hn.x;
hn.translateY = hn.y;
const _n = /* @__PURE__ */ new Set();
let gu = !1, yu = !1, Mu = !1;
function j_() {
  if (yu) {
    const e = Array.from(_n).filter((r) => r.needsMeasurement), t = new Set(e.map((r) => r.element)), n = /* @__PURE__ */ new Map();
    t.forEach((r) => {
      const s = uL(r);
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
  yu = !1, gu = !1, _n.forEach((e) => e.complete(Mu)), _n.clear();
}
function P_() {
  _n.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (yu = !0);
  });
}
function cL() {
  Mu = !0, P_(), j_(), Mu = !1;
}
class Uc {
  constructor(t, n, r, s, i, o = !1) {
    this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...t], this.onComplete = n, this.name = r, this.motionValue = s, this.element = i, this.isAsync = o;
  }
  scheduleResolve() {
    this.state = "scheduled", this.isAsync ? (_n.add(this), gu || (gu = !0, we.read(P_), we.resolveKeyframes(j_))) : (this.readKeyframes(), this.complete());
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
    nL(t);
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
    this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t), _n.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (_n.delete(this), this.state = "pending");
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const dL = (e) => e.startsWith("--");
function fL(e, t, n) {
  dL(t) ? e.style.setProperty(t, n) : e.style[t] = n;
}
const mL = /* @__PURE__ */ Pc(() => window.ScrollTimeline !== void 0), pL = {};
function hL(e, t) {
  const n = /* @__PURE__ */ Pc(e);
  return () => {
    var r;
    return (r = pL[t]) != null ? r : n();
  };
}
const A_ = /* @__PURE__ */ hL(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), mr = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, Hf = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ mr([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ mr([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ mr([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ mr([0.33, 1.53, 0.69, 0.99])
};
function C_(e, t) {
  if (e)
    return typeof e == "function" ? A_() ? D_(e, t) : "ease-out" : g_(e) ? mr(e) : Array.isArray(e) ? e.map((n) => C_(n, t) || Hf.easeOut) : Hf[e];
}
function _L(e, t, n, { delay: r = 0, duration: s = 300, repeat: i = 0, repeatType: o = "loop", ease: a = "easeOut", times: l } = {}, u = void 0) {
  const c = {
    [t]: n
  };
  l && (c.offset = l);
  const d = C_(a, s);
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
function $_(e) {
  return typeof e == "function" && "applyToOptions" in e;
}
function vL({ type: e, ...t }) {
  var n, r;
  return $_(e) && A_() ? e.applyToOptions(t) : ((n = t.duration) != null || (t.duration = 300), (r = t.ease) != null || (t.ease = "easeOut"), t);
}
class gL extends Bc {
  constructor(t) {
    if (super(), this.finishedTime = null, this.isStopped = !1, !t)
      return;
    const { element: n, name: r, keyframes: s, pseudoElement: i, allowFlatten: o = !1, finalKeyframe: a, onComplete: l } = t;
    this.isPseudoElement = !!i, this.allowFlatten = o, this.options = t, Rt(typeof t.type != "string", `Mini animate() doesn't support "type" as a string.`, "mini-spring");
    const u = vL(t);
    this.animation = _L(n, r, s, u, i), u.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
      if (this.finishedTime = this.time, !i) {
        const c = zc(s, this.options, a, this.speed);
        this.updateMotionValue ? this.updateMotionValue(c) : fL(n, r, c), this.animation.cancel();
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
    return this.allowFlatten && ((r = this.animation.effect) == null || r.updateTiming({ easing: "linear" })), this.animation.onfinish = null, t && mL() ? (this.animation.timeline = t, st) : n(this);
  }
}
const H_ = {
  anticipate: p_,
  backInOut: m_,
  circInOut: __
};
function yL(e) {
  return e in H_;
}
function ML(e) {
  typeof e.ease == "string" && yL(e.ease) && (e.ease = H_[e.ease]);
}
const Of = 10;
class bL extends gL {
  constructor(t) {
    ML(t), E_(t), super(t), t.startTime && (this.startTime = t.startTime), this.options = t;
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
    const a = new Wc({
      ...o,
      autoplay: !1
    }), l = /* @__PURE__ */ mt((u = this.finishedTime) != null ? u : this.time);
    n.setWithVelocity(a.sample(l - Of).value, a.sample(l).value, Of), a.stop();
  }
}
const Rf = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && // It's animatable if we have a string
(en.test(e) || e === "0") && // And it contains numbers and/or colors
!e.startsWith("url("));
function xL(e) {
  const t = e[0];
  if (e.length === 1)
    return !0;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t)
      return !0;
}
function wL(e, t, n, r) {
  const s = e[0];
  if (s === null)
    return !1;
  if (t === "display" || t === "visibility")
    return !0;
  const i = e[e.length - 1], o = Rf(s, t), a = Rf(i, t);
  return Qn(o === a, `You are trying to animate ${t} from "${s}" to "${i}". "${o ? i : s}" is not an animatable value.`, "value-not-animatable"), !o || !a ? !1 : xL(e) || (n === "spring" || $_(n)) && r;
}
function bu(e) {
  e.duration = 0, e.type = "keyframes";
}
const YL = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Could be re-enabled now we have support for linear() easing
  // "background-color"
]), LL = /* @__PURE__ */ Pc(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function SL(e) {
  var c;
  const { motionValue: t, name: n, repeatDelay: r, repeatType: s, damping: i, type: o } = e;
  if (!(((c = t == null ? void 0 : t.owner) == null ? void 0 : c.current) instanceof HTMLElement))
    return !1;
  const { onUpdate: l, transformTemplate: u } = t.owner.getProps();
  return LL() && n && YL.has(n) && (n !== "transform" || !u) && /**
   * If we're outputting values to onUpdate then we can't use WAAPI as there's
   * no way to read the value from WAAPI every frame.
   */
  !l && !r && s !== "mirror" && i !== 0 && o !== "inertia";
}
const kL = 40;
class DL extends Bc {
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
    }, m = (c == null ? void 0 : c.KeyframeResolver) || Uc;
    this.keyframeResolver = new m(a, (h, _, v) => this.onKeyframesResolved(h, _, f, !v), l, u, c), (p = this.keyframeResolver) == null || p.scheduleResolve();
  }
  onKeyframesResolved(t, n, r, s) {
    this.keyframeResolver = void 0;
    const { name: i, type: o, velocity: a, delay: l, isHandoff: u, onUpdate: c } = r;
    this.resolvedAt = Ke.now(), wL(t, i, o, a) || ((Nt.instantAnimations || !l) && (c == null || c(zc(t, r, n))), t[0] = t[t.length - 1], bu(r), r.repeat = 0);
    const f = {
      startTime: s ? this.resolvedAt ? this.resolvedAt - this.createdAt > kL ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
      finalKeyframe: n,
      ...r,
      keyframes: t
    }, m = !u && SL(f) ? new bL({
      ...f,
      element: f.motionValue.owner.current
    }) : new Wc(f);
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
    return this._animation || ((t = this.keyframeResolver) == null || t.resume(), cL()), this._animation;
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
const TL = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function EL(e) {
  const t = TL.exec(e);
  if (!t)
    return [,];
  const [, n, r, s] = t;
  return [`--${n != null ? n : r}`, s];
}
const jL = 4;
function O_(e, t, n = 1) {
  Rt(n <= jL, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
  const [r, s] = EL(e);
  if (!r)
    return;
  const i = window.getComputedStyle(t).getPropertyValue(r);
  if (i) {
    const o = i.trim();
    return s_(o) ? parseFloat(o) : o;
  }
  return Rc(s) ? O_(s, t, n + 1) : s;
}
function Kc(e, t) {
  var n, r;
  return (r = (n = e == null ? void 0 : e[t]) != null ? n : e == null ? void 0 : e.default) != null ? r : e;
}
const R_ = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...tr
]), PL = {
  test: (e) => e === "auto",
  parse: (e) => e
}, N_ = (e) => (t) => t.test(e), I_ = [er, ae, xt, Wt, xY, bY, PL], Nf = (e) => I_.find(N_(e));
function AL(e) {
  return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || a_(e) : !0;
}
const CL = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function $L(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [r] = n.match(Nc) || [];
  if (!r)
    return e;
  const s = n.replace(r, "");
  let i = CL.has(t) ? 1 : 0;
  return r !== n && (i *= 100), t + "(" + i + s + ")";
}
const HL = /\b([a-z-]*)\(.*?\)/gu, xu = {
  ...en,
  getAnimatableNone: (e) => {
    const t = e.match(HL);
    return t ? t.map($L).join(" ") : e;
  }
}, If = {
  ...er,
  transform: Math.round
}, OL = {
  rotate: Wt,
  rotateX: Wt,
  rotateY: Wt,
  rotateZ: Wt,
  scale: lo,
  scaleX: lo,
  scaleY: lo,
  scaleZ: lo,
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
  opacity: jr,
  originX: kf,
  originY: kf,
  originZ: ae
}, Gc = {
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
  ...OL,
  zIndex: If,
  // SVG
  fillOpacity: jr,
  strokeOpacity: jr,
  numOctaves: If
}, RL = {
  ...Gc,
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
  filter: xu,
  WebkitFilter: xu
}, F_ = (e) => RL[e];
function V_(e, t) {
  let n = F_(e);
  return n !== xu && (n = en), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
const NL = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function IL(e, t, n) {
  let r = 0, s;
  for (; r < e.length && !s; ) {
    const i = e[r];
    typeof i == "string" && !NL.has(i) && Pr(i).values.length && (s = e[r]), r++;
  }
  if (s && n)
    for (const i of t)
      e[i] = V_(n, s);
}
class FL extends Uc {
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
      if (typeof u == "string" && (u = u.trim(), Rc(u))) {
        const c = O_(u, n.current);
        c !== void 0 && (t[l] = c), l === t.length - 1 && (this.finalKeyframe = u);
      }
    }
    if (this.resolveNoneKeyframes(), !R_.has(r) || t.length !== 2)
      return;
    const [s, i] = t, o = Nf(s), a = Nf(i);
    if (o !== a)
      if ($f(o) && $f(a))
        for (let l = 0; l < t.length; l++) {
          const u = t[l];
          typeof u == "string" && (t[l] = parseFloat(u));
        }
      else hn[r] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this, r = [];
    for (let s = 0; s < t.length; s++)
      (t[s] === null || AL(t[s])) && r.push(s);
    r.length && IL(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current)
      return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = hn[r](t.measureViewportBox(), window.getComputedStyle(t.current)), n[0] = this.measuredOrigin;
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
    r[i] = hn[n](t.measureViewportBox(), window.getComputedStyle(t.current)), o !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = o), (a = this.removedTransforms) != null && a.length && this.removedTransforms.forEach(([l, u]) => {
      t.getValue(l).set(u);
    }), this.resolveNoneKeyframes();
  }
}
function VL(e, t, n) {
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
const z_ = (e, t) => t && typeof e == "number" ? t.transform(e) : e;
function B_(e) {
  return i_(e) && "offsetHeight" in e;
}
const Ff = 30, zL = (e) => !isNaN(parseFloat(e));
class BL {
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
    this.current = t, this.updatedAt = Ke.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = zL(this.current));
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
    return process.env.NODE_ENV !== "production" && Cc(!1, 'value.onChange(callback) is deprecated. Switch to value.on("change", callback).'), this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new Ac());
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
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > Ff)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, Ff);
    return l_(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
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
function Bn(e, t) {
  return new BL(e, t);
}
const { schedule: Jc } = /* @__PURE__ */ y_(queueMicrotask, !1), ut = {
  x: !1,
  y: !1
};
function W_() {
  return ut.x || ut.y;
}
function WL(e) {
  return e === "x" || e === "y" ? ut[e] ? null : (ut[e] = !0, () => {
    ut[e] = !1;
  }) : ut.x || ut.y ? null : (ut.x = ut.y = !0, () => {
    ut.x = ut.y = !1;
  });
}
function U_(e, t) {
  const n = VL(e), r = new AbortController(), s = {
    passive: !0,
    ...t,
    signal: r.signal
  };
  return [n, s, () => r.abort()];
}
function Vf(e) {
  return !(e.pointerType === "touch" || W_());
}
function UL(e, t, n = {}) {
  const [r, s, i] = U_(e, n), o = (a) => {
    if (!Vf(a))
      return;
    const { target: l } = a, u = t(l, a);
    if (typeof u != "function" || !l)
      return;
    const c = (d) => {
      Vf(d) && (u(d), l.removeEventListener("pointerleave", c));
    };
    l.addEventListener("pointerleave", c, s);
  };
  return r.forEach((a) => {
    a.addEventListener("pointerenter", o, s);
  }), i;
}
const K_ = (e, t) => t ? e === t ? !0 : K_(e, t.parentElement) : !1, qc = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1, KL = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function GL(e) {
  return KL.has(e.tagName) || e.tabIndex !== -1;
}
const wo = /* @__PURE__ */ new WeakSet();
function zf(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function bl(e, t) {
  e.dispatchEvent(new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 }));
}
const JL = (e, t) => {
  const n = e.currentTarget;
  if (!n)
    return;
  const r = zf(() => {
    if (wo.has(n))
      return;
    bl(n, "down");
    const s = zf(() => {
      bl(n, "up");
    }), i = () => bl(n, "cancel");
    n.addEventListener("keyup", s, t), n.addEventListener("blur", i, t);
  });
  n.addEventListener("keydown", r, t), n.addEventListener("blur", () => n.removeEventListener("keydown", r), t);
};
function Bf(e) {
  return qc(e) && !W_();
}
function qL(e, t, n = {}) {
  const [r, s, i] = U_(e, n), o = (a) => {
    const l = a.currentTarget;
    if (!Bf(a))
      return;
    wo.add(l);
    const u = t(l, a), c = (m, p) => {
      window.removeEventListener("pointerup", d), window.removeEventListener("pointercancel", f), wo.has(l) && wo.delete(l), Bf(m) && typeof u == "function" && u(m, { success: p });
    }, d = (m) => {
      c(m, l === window || l === document || n.useGlobalTarget || K_(l, m.target));
    }, f = (m) => {
      c(m, !1);
    };
    window.addEventListener("pointerup", d, s), window.addEventListener("pointercancel", f, s);
  };
  return r.forEach((a) => {
    (n.useGlobalTarget ? window : a).addEventListener("pointerdown", o, s), B_(a) && (a.addEventListener("focus", (u) => JL(u, s)), !GL(a) && !a.hasAttribute("tabindex") && (a.tabIndex = 0));
  }), i;
}
function G_(e) {
  return i_(e) && "ownerSVGElement" in e;
}
function XL(e) {
  return G_(e) && e.tagName === "svg";
}
const Fe = (e) => !!(e && e.getVelocity), ZL = [...I_, Pe, en], QL = (e) => ZL.find(N_(e)), Xc = ge({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
});
function Wf(e, t) {
  if (typeof e == "function")
    return e(t);
  e != null && (e.current = t);
}
function eS(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((s) => {
      const i = Wf(s, t);
      return !n && typeof i == "function" && (n = !0), i;
    });
    if (n)
      return () => {
        for (let s = 0; s < r.length; s++) {
          const i = r[s];
          typeof i == "function" ? i() : Wf(e[s], null);
        }
      };
  };
}
function tS(...e) {
  return b.useCallback(eS(...e), e);
}
class nS extends b.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const r = n.offsetParent, s = B_(r) && r.offsetWidth || 0, i = this.props.sizeRef.current;
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
function rS({ children: e, isPresent: t, anchorX: n, root: r }) {
  const s = je(), i = q(null), o = q({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    right: 0
  }), { nonce: a } = re(Xc), l = tS(i, e == null ? void 0 : e.ref);
  return fp(() => {
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
  }, [t]), g.jsx(nS, { isPresent: t, childRef: i, sizeRef: o, children: b.cloneElement(e, { ref: l }) });
}
const oS = ({ children: e, initial: t, isPresent: n, onExitComplete: r, custom: s, presenceAffectsLayout: i, mode: o, anchorX: a, root: l }) => {
  const u = Dc(sS), c = je();
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
  }, [n]), o === "popLayout" && (e = g.jsx(rS, { isPresent: n, anchorX: a, root: l, children: e })), g.jsx(Ka.Provider, { value: f, children: e });
};
function sS() {
  return /* @__PURE__ */ new Map();
}
function J_(e = !0) {
  const t = re(Ka);
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
const uo = (e) => e.key || "";
function Uf(e) {
  const t = [];
  return My.forEach(e, (n) => {
    ba(n) && t.push(n);
  }), t;
}
const Zc = ({ children: e, custom: t, initial: n = !0, onExitComplete: r, presenceAffectsLayout: s = !0, mode: i = "sync", propagate: o = !1, anchorX: a = "left", root: l }) => {
  const [u, c] = J_(o), d = pe(() => Uf(e), [e]), f = o && !u ? [] : d.map(uo), m = q(!0), p = q(d), h = Dc(() => /* @__PURE__ */ new Map()), [_, v] = oe(d), [M, y] = oe(d);
  o_(() => {
    m.current = !1, p.current = d;
    for (let S = 0; S < M.length; S++) {
      const j = uo(M[S]);
      f.includes(j) ? h.delete(j) : h.get(j) !== !0 && h.set(j, !1);
    }
  }, [M, f.length, f.join("-")]);
  const x = [];
  if (d !== _) {
    let S = [...d];
    for (let j = 0; j < M.length; j++) {
      const Y = M[j], I = uo(Y);
      f.includes(I) || (S.splice(j, 0, Y), x.push(Y));
    }
    return i === "wait" && x.length && (S = x), y(Uf(S)), v(d), null;
  }
  process.env.NODE_ENV !== "production" && i === "wait" && M.length > 1 && console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`);
  const { forceRender: w } = re(kc);
  return g.jsx(g.Fragment, { children: M.map((S) => {
    const j = uo(S), Y = o && !u ? !1 : d === M || f.includes(j), I = () => {
      if (h.has(j))
        h.set(j, !0);
      else
        return;
      let k = !0;
      h.forEach((C) => {
        C || (k = !1);
      }), k && (w == null || w(), y(p.current), o && (c == null || c()), r && r());
    };
    return g.jsx(oS, { isPresent: Y, initial: !m.current || n ? void 0 : !1, custom: t, presenceAffectsLayout: s, mode: i, root: l, onExitComplete: Y ? void 0 : I, anchorX: a, children: S }, j);
  }) });
}, q_ = ge({ strict: !1 }), Kf = {
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
}, Wn = {};
for (const e in Kf)
  Wn[e] = {
    isEnabled: (t) => Kf[e].some((n) => !!t[n])
  };
function iS(e) {
  for (const t in e)
    Wn[t] = {
      ...Wn[t],
      ...e[t]
    };
}
const aS = /* @__PURE__ */ new Set([
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
function zo(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || aS.has(e);
}
let X_ = (e) => !zo(e);
function lS(e) {
  typeof e == "function" && (X_ = (t) => t.startsWith("on") ? !zo(t) : e(t));
}
try {
  lS(require("@emotion/is-prop-valid").default);
} catch {
}
function uS(e, t, n) {
  const r = {};
  for (const s in e)
    s === "values" && typeof e.values == "object" || (X_(s) || n === !0 && zo(s) || !t && !zo(s) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && s.startsWith("onDrag")) && (r[s] = e[s]);
  return r;
}
const Ga = /* @__PURE__ */ ge({});
function Ja(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
function Ar(e) {
  return typeof e == "string" || Array.isArray(e);
}
const Qc = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], ed = ["initial", ...Qc];
function qa(e) {
  return Ja(e.animate) || ed.some((t) => Ar(e[t]));
}
function Z_(e) {
  return !!(qa(e) || e.variants);
}
function cS(e, t) {
  if (qa(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || Ar(n) ? n : void 0,
      animate: Ar(r) ? r : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function dS(e) {
  const { initial: t, animate: n } = cS(e, re(Ga));
  return pe(() => ({ initial: t, animate: n }), [Gf(t), Gf(n)]);
}
function Gf(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Cr = {};
function fS(e) {
  for (const t in e)
    Cr[t] = e[t], Oc(t) && (Cr[t].isCSSVariable = !0);
}
function Q_(e, { layout: t, layoutId: n }) {
  return nr.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!Cr[e] || e === "opacity");
}
const mS = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, pS = tr.length;
function hS(e, t, n) {
  let r = "", s = !0;
  for (let i = 0; i < pS; i++) {
    const o = tr[i], a = e[o];
    if (a === void 0)
      continue;
    let l = !0;
    if (typeof a == "number" ? l = a === (o.startsWith("scale") ? 1 : 0) : l = parseFloat(a) === 0, !l || n) {
      const u = z_(a, Gc[o]);
      if (!l) {
        s = !1;
        const c = mS[o] || o;
        r += `${c}(${u}) `;
      }
      n && (t[o] = u);
    }
  }
  return r = r.trim(), n ? r = n(t, s ? "" : r) : s && (r = "none"), r;
}
function td(e, t, n) {
  const { style: r, vars: s, transformOrigin: i } = e;
  let o = !1, a = !1;
  for (const l in t) {
    const u = t[l];
    if (nr.has(l)) {
      o = !0;
      continue;
    } else if (Oc(l)) {
      s[l] = u;
      continue;
    } else {
      const c = z_(u, Gc[l]);
      l.startsWith("origin") ? (a = !0, i[l] = c) : r[l] = c;
    }
  }
  if (t.transform || (o || n ? r.transform = hS(t, e.transform, n) : r.transform && (r.transform = "none")), a) {
    const { originX: l = "50%", originY: u = "50%", originZ: c = 0 } = i;
    r.transformOrigin = `${l} ${u} ${c}`;
  }
}
const nd = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function ev(e, t, n) {
  for (const r in t)
    !Fe(t[r]) && !Q_(r, n) && (e[r] = t[r]);
}
function _S({ transformTemplate: e }, t) {
  return pe(() => {
    const n = nd();
    return td(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function vS(e, t) {
  const n = e.style || {}, r = {};
  return ev(r, n, e), Object.assign(r, _S(e, t)), r;
}
function gS(e, t) {
  const n = {}, r = vS(e, t);
  return e.drag && e.dragListener !== !1 && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = r, n;
}
const yS = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, MS = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function bS(e, t, n = 1, r = 0, s = !0) {
  e.pathLength = 1;
  const i = s ? yS : MS;
  e[i.offset] = ae.transform(-r);
  const o = ae.transform(t), a = ae.transform(n);
  e[i.array] = `${o} ${a}`;
}
function tv(e, {
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
  if (td(e, a, u), l) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: d, style: f } = e;
  d.transform && (f.transform = d.transform, delete d.transform), (f.transform || d.transformOrigin) && (f.transformOrigin = (m = d.transformOrigin) != null ? m : "50% 50%", delete d.transformOrigin), f.transform && (f.transformBox = (p = c == null ? void 0 : c.transformBox) != null ? p : "fill-box", delete d.transformBox), t !== void 0 && (d.x = t), n !== void 0 && (d.y = n), r !== void 0 && (d.scale = r), s !== void 0 && bS(d, s, i, o, !1);
}
const nv = () => ({
  ...nd(),
  attrs: {}
}), rv = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function xS(e, t, n, r) {
  const s = pe(() => {
    const i = nv();
    return tv(i, t, rv(r), e.transformTemplate, e.style), {
      ...i.attrs,
      style: { ...i.style }
    };
  }, [t]);
  if (e.style) {
    const i = {};
    ev(i, e.style, e), s.style = { ...i, ...s.style };
  }
  return s;
}
const wS = [
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
function rd(e) {
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
      !!(wS.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(e))
    )
  );
}
function YS(e, t, n, { latestValues: r }, s, i = !1) {
  const a = (rd(e) ? xS : gS)(t, r, s, e), l = uS(t, typeof e == "string", i), u = e !== Ae ? { ...l, ...a, ref: n } : {}, { children: c } = t, d = pe(() => Fe(c) ? c.get() : c, [c]);
  return cp(e, {
    ...u,
    children: d
  });
}
function Jf(e) {
  const t = [{}, {}];
  return e == null || e.values.forEach((n, r) => {
    t[0][r] = n.get(), t[1][r] = n.getVelocity();
  }), t;
}
function od(e, t, n, r) {
  if (typeof t == "function") {
    const [s, i] = Jf(r);
    t = t(n !== void 0 ? n : e.custom, s, i);
  }
  if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
    const [s, i] = Jf(r);
    t = t(n !== void 0 ? n : e.custom, s, i);
  }
  return t;
}
function Yo(e) {
  return Fe(e) ? e.get() : e;
}
function LS({ scrapeMotionValuesFromProps: e, createRenderState: t }, n, r, s) {
  return {
    latestValues: SS(n, r, s, e),
    renderState: t()
  };
}
function SS(e, t, n, r) {
  const s = {}, i = r(e, {});
  for (const f in i)
    s[f] = Yo(i[f]);
  let { initial: o, animate: a } = e;
  const l = qa(e), u = Z_(e);
  t && u && !l && e.inherit !== !1 && (o === void 0 && (o = t.initial), a === void 0 && (a = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || o === !1;
  const d = c ? a : o;
  if (d && typeof d != "boolean" && !Ja(d)) {
    const f = Array.isArray(d) ? d : [d];
    for (let m = 0; m < f.length; m++) {
      const p = od(e, f[m]);
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
const ov = (e) => (t, n) => {
  const r = re(Ga), s = re(Ka), i = () => LS(e, t, r, s);
  return n ? i() : Dc(i);
};
function sd(e, t, n) {
  var i;
  const { style: r } = e, s = {};
  for (const o in r)
    (Fe(r[o]) || t.style && Fe(t.style[o]) || Q_(o, e) || ((i = n == null ? void 0 : n.getValue(o)) == null ? void 0 : i.liveStyle) !== void 0) && (s[o] = r[o]);
  return s;
}
const kS = /* @__PURE__ */ ov({
  scrapeMotionValuesFromProps: sd,
  createRenderState: nd
});
function sv(e, t, n) {
  const r = sd(e, t, n);
  for (const s in e)
    if (Fe(e[s]) || Fe(t[s])) {
      const i = tr.indexOf(s) !== -1 ? "attr" + s.charAt(0).toUpperCase() + s.substring(1) : s;
      r[i] = e[s];
    }
  return r;
}
const DS = /* @__PURE__ */ ov({
  scrapeMotionValuesFromProps: sv,
  createRenderState: nv
}), TS = Symbol.for("motionComponentSymbol");
function Pn(e) {
  return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function ES(e, t, n) {
  return X(
    (r) => {
      r && e.onMount && e.onMount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : Pn(n) && (n.current = r));
    },
    /**
     * Include externalRef in dependencies to ensure the callback updates
     * when the ref changes, allowing proper ref forwarding.
     */
    [t]
  );
}
const id = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), jS = "framerAppearId", iv = "data-" + id(jS), av = ge({});
function PS(e, t, n, r, s) {
  var h, _;
  const { visualElement: i } = re(Ga), o = re(q_), a = re(Ka), l = re(Xc).reducedMotion, u = q(null);
  r = r || o.renderer, !u.current && r && (u.current = r(e, {
    visualState: t,
    parent: i,
    props: n,
    presenceContext: a,
    blockInitialAnimation: a ? a.initial === !1 : !1,
    reducedMotionConfig: l
  }));
  const c = u.current, d = re(av);
  c && !c.projection && s && (c.type === "html" || c.type === "svg") && AS(u.current, n, s, d);
  const f = q(!1);
  fp(() => {
    c && f.current && c.update(n, a);
  });
  const m = n[iv], p = q(!!m && !((h = window.MotionHandoffIsComplete) != null && h.call(window, m)) && ((_ = window.MotionHasOptimisedAnimation) == null ? void 0 : _.call(window, m)));
  return o_(() => {
    c && (f.current = !0, window.MotionIsMounted = !0, c.updateFeatures(), c.scheduleRenderMicrotask(), p.current && c.animationState && c.animationState.animateChanges());
  }), ue(() => {
    c && (!p.current && c.animationState && c.animationState.animateChanges(), p.current && (queueMicrotask(() => {
      var v;
      (v = window.MotionHandoffMarkAsComplete) == null || v.call(window, m);
    }), p.current = !1), c.enteringChildren = void 0);
  }), c;
}
function AS(e, t, n, r) {
  const { layoutId: s, layout: i, drag: o, dragConstraints: a, layoutScroll: l, layoutRoot: u, layoutCrossfade: c } = t;
  e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : lv(e.parent)), e.projection.setOptions({
    layoutId: s,
    layout: i,
    alwaysMeasureLayout: !!o || a && Pn(a),
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
function lv(e) {
  if (e)
    return e.options.allowProjection !== !1 ? e.projection : lv(e.parent);
}
function xl(e, { forwardMotionProps: t = !1 } = {}, n, r) {
  var a, l;
  n && iS(n);
  const s = rd(e) ? DS : kS;
  function i(u, c) {
    let d;
    const f = {
      ...re(Xc),
      ...u,
      layoutId: CS(u)
    }, { isStatic: m } = f, p = dS(u), h = s(u, m);
    if (!m && Tc) {
      $S(f, n);
      const _ = HS(f);
      d = _.MeasureLayout, p.visualElement = PS(e, h, f, r, _.ProjectionNode);
    }
    return g.jsxs(Ga.Provider, { value: p, children: [d && p.visualElement ? g.jsx(d, { visualElement: p.visualElement, ...f }) : null, YS(e, u, ES(h, p.visualElement, c), h, m, t)] });
  }
  i.displayName = `motion.${typeof e == "string" ? e : `create(${(l = (a = e.displayName) != null ? a : e.name) != null ? l : ""})`}`;
  const o = Nr(i);
  return o[TS] = e, o;
}
function CS({ layoutId: e }) {
  const t = re(kc).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function $S(e, t) {
  const n = re(q_).strict;
  if (process.env.NODE_ENV !== "production" && t && n) {
    const r = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
    e.ignoreStrict ? Qn(!1, r, "lazy-strict-mode") : Rt(!1, r, "lazy-strict-mode");
  }
}
function HS(e) {
  const { drag: t, layout: n } = Wn;
  if (!t && !n)
    return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout: t != null && t.isEnabled(e) || n != null && n.isEnabled(e) ? r.MeasureLayout : void 0,
    ProjectionNode: r.ProjectionNode
  };
}
function OS(e, t) {
  if (typeof Proxy == "undefined")
    return xl;
  const n = /* @__PURE__ */ new Map(), r = (i, o) => xl(i, o, e, t), s = (i, o) => (process.env.NODE_ENV !== "production" && Cc(!1, "motion() is deprecated. Use motion.create() instead."), r(i, o));
  return new Proxy(s, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (i, o) => o === "create" ? r : (n.has(o) || n.set(o, xl(o, void 0, e, t)), n.get(o))
  });
}
function uv({ top: e, left: t, right: n, bottom: r }) {
  return {
    x: { min: t, max: n },
    y: { min: e, max: r }
  };
}
function RS({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function NS(e, t) {
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
function wl(e) {
  return e === void 0 || e === 1;
}
function wu({ scale: e, scaleX: t, scaleY: n }) {
  return !wl(e) || !wl(t) || !wl(n);
}
function un(e) {
  return wu(e) || cv(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function cv(e) {
  return qf(e.x) || qf(e.y);
}
function qf(e) {
  return e && e !== "0%";
}
function Bo(e, t, n) {
  const r = e - n, s = t * r;
  return n + s;
}
function Xf(e, t, n, r, s) {
  return s !== void 0 && (e = Bo(e, s, r)), Bo(e, n, r) + t;
}
function Yu(e, t = 0, n = 1, r, s) {
  e.min = Xf(e.min, t, n, r, s), e.max = Xf(e.max, t, n, r, s);
}
function dv(e, { x: t, y: n }) {
  Yu(e.x, t.translate, t.scale, t.originPoint), Yu(e.y, n.translate, n.scale, n.originPoint);
}
const Zf = 0.999999999999, Qf = 1.0000000000001;
function IS(e, t, n, r = !1) {
  const s = n.length;
  if (!s)
    return;
  t.x = t.y = 1;
  let i, o;
  for (let a = 0; a < s; a++) {
    i = n[a], o = i.projectionDelta;
    const { visualElement: l } = i.options;
    l && l.props.style && l.props.style.display === "contents" || (r && i.options.layoutScroll && i.scroll && i !== i.root && Cn(e, {
      x: -i.scroll.offset.x,
      y: -i.scroll.offset.y
    }), o && (t.x *= o.x.scale, t.y *= o.y.scale, dv(e, o)), r && un(i.latestValues) && Cn(e, i.latestValues));
  }
  t.x < Qf && t.x > Zf && (t.x = 1), t.y < Qf && t.y > Zf && (t.y = 1);
}
function An(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function em(e, t, n, r, s = 0.5) {
  const i = ke(e.min, e.max, s);
  Yu(e, t, n, i, r);
}
function Cn(e, t) {
  em(e.x, t.x, t.scaleX, t.scale, t.originX), em(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function fv(e, t) {
  return uv(NS(e.getBoundingClientRect(), t));
}
function FS(e, t, n) {
  const r = fv(e, n), { scroll: s } = t;
  return s && (An(r.x, s.offset.x), An(r.y, s.offset.y)), r;
}
const tm = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), $n = () => ({
  x: tm(),
  y: tm()
}), nm = () => ({ min: 0, max: 0 }), Te = () => ({
  x: nm(),
  y: nm()
}), Lu = { current: null }, mv = { current: !1 };
function VS() {
  if (mv.current = !0, !!Tc)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => Lu.current = e.matches;
      e.addEventListener("change", t), t();
    } else
      Lu.current = !1;
}
const zS = /* @__PURE__ */ new WeakMap();
function BS(e, t, n) {
  for (const r in t) {
    const s = t[r], i = n[r];
    if (Fe(s))
      e.addValue(r, s);
    else if (Fe(i))
      e.addValue(r, Bn(s, { owner: e }));
    else if (i !== s)
      if (e.hasValue(r)) {
        const o = e.getValue(r);
        o.liveStyle === !0 ? o.jump(s) : o.hasAnimated || o.set(s);
      } else {
        const o = e.getStaticValue(r);
        e.addValue(r, Bn(o !== void 0 ? o : s, { owner: e }));
      }
  }
  for (const r in n)
    t[r] === void 0 && e.removeValue(r);
  return t;
}
const rm = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
class WS {
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
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = Uc, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const f = Ke.now();
      this.renderScheduledAt < f && (this.renderScheduledAt = f, we.render(this.render, !1, !0));
    };
    const { latestValues: l, renderState: u } = o;
    this.latestValues = l, this.baseTarget = { ...l }, this.initialValues = n.initial ? { ...l } : {}, this.renderState = u, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = s, this.options = a, this.blockInitialAnimation = !!i, this.isControllingVariants = qa(n), this.isVariantNode = Z_(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: c, ...d } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const f in d) {
      const m = d[f];
      l[f] !== void 0 && Fe(m) && m.set(l[f]);
    }
  }
  mount(t) {
    var n;
    this.current = t, zS.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((r, s) => this.bindToMotionValue(s, r)), mv.current || VS(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Lu.current, process.env.NODE_ENV !== "production" && Cc(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected.", "reduced-motion-disabled"), (n = this.parent) == null || n.addChild(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    var t;
    this.projection && this.projection.unmount(), Qt(this.notifyUpdate), Qt(this.render), this.valueSubscriptions.forEach((n) => n()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), (t = this.parent) == null || t.removeChild(this);
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
    const r = nr.has(t);
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
    for (t in Wn) {
      const n = Wn[t];
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
    for (let r = 0; r < rm.length; r++) {
      const s = rm[r];
      this.propEventSubscriptions[s] && (this.propEventSubscriptions[s](), delete this.propEventSubscriptions[s]);
      const i = "on" + s, o = t[i];
      o && (this.propEventSubscriptions[s] = this.on(s, o));
    }
    this.prevMotionValues = BS(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
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
    return r === void 0 && n !== void 0 && (r = Bn(n === null ? void 0 : n, { owner: this }), this.addValue(t, r)), r;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(t, n) {
    var s;
    let r = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (s = this.getBaseTargetFromProps(this.props, t)) != null ? s : this.readValueFromInstance(this.current, t, this.options);
    return r != null && (typeof r == "string" && (s_(r) || a_(r)) ? r = parseFloat(r) : !QL(r) && en.test(n) && (r = V_(t, n)), this.setBaseTarget(t, Fe(r) ? r.get() : r)), Fe(r) ? r.get() : r;
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
      const o = od(this.props, n, (i = this.presenceContext) == null ? void 0 : i.custom);
      o && (r = o[t]);
    }
    if (n && r !== void 0)
      return r;
    const s = this.getBaseTargetFromProps(this.props, t);
    return s !== void 0 && !Fe(s) ? s : this.initialValues[t] !== void 0 && r === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new Ac()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
  scheduleRenderMicrotask() {
    Jc.render(this.render);
  }
}
class pv extends WS {
  constructor() {
    super(...arguments), this.KeyframeResolver = FL;
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
    Fe(t) && (this.childSubscription = t.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
}
function hv(e, { style: t, vars: n }, r, s) {
  const i = e.style;
  let o;
  for (o in t)
    i[o] = t[o];
  s == null || s.applyProjectionStyles(i, r);
  for (o in n)
    i.setProperty(o, n[o]);
}
function US(e) {
  return window.getComputedStyle(e);
}
class KS extends pv {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = hv;
  }
  readValueFromInstance(t, n) {
    var r;
    if (nr.has(n))
      return (r = this.projection) != null && r.isProjecting ? _u(n) : sL(t, n);
    {
      const s = US(t), i = (Oc(n) ? s.getPropertyValue(n) : s[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return fv(t, n);
  }
  build(t, n, r) {
    td(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return sd(t, n, r);
  }
}
const _v = /* @__PURE__ */ new Set([
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
function GS(e, t, n, r) {
  hv(e, t, void 0, r);
  for (const s in t.attrs)
    e.setAttribute(_v.has(s) ? s : id(s), t.attrs[s]);
}
class JS extends pv {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = Te;
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (nr.has(n)) {
      const r = F_(n);
      return r && r.default || 0;
    }
    return n = _v.has(n) ? n : id(n), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return sv(t, n, r);
  }
  build(t, n, r) {
    tv(t, n, this.isSVGTag, r.transformTemplate, r.style);
  }
  renderInstance(t, n, r, s) {
    GS(t, n, r, s);
  }
  mount(t) {
    this.isSVGTag = rv(t.tagName), super.mount(t);
  }
}
const qS = (e, t) => rd(e) ? new JS(t) : new KS(t, {
  allowProjection: e !== Ae
});
function Nn(e, t, n) {
  const r = e.getProps();
  return od(r, t, n !== void 0 ? n : r.custom, e);
}
const Su = (e) => Array.isArray(e);
function XS(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Bn(n));
}
function ZS(e) {
  return Su(e) ? e[e.length - 1] || 0 : e;
}
function QS(e, t) {
  const n = Nn(e, t);
  let { transitionEnd: r = {}, transition: s = {}, ...i } = n || {};
  i = { ...i, ...r };
  for (const o in i) {
    const a = ZS(i[o]);
    XS(e, o, a);
  }
}
function ek(e) {
  return !!(Fe(e) && e.add);
}
function ku(e, t) {
  const n = e.getValue("willChange");
  if (ek(n))
    return n.add(t);
  if (!n && Nt.WillChange) {
    const r = new Nt.WillChange("auto");
    e.addValue("willChange", r), r.add(t);
  }
}
function vv(e) {
  return e.props[iv];
}
const tk = (e) => e !== null;
function nk(e, { repeat: t, repeatType: n = "loop" }, r) {
  const s = e.filter(tk), i = t && n !== "loop" && t % 2 === 1 ? 0 : s.length - 1;
  return s[i];
}
const rk = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, ok = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), sk = {
  type: "keyframes",
  duration: 0.8
}, ik = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, ak = (e, { keyframes: t }) => t.length > 2 ? sk : nr.has(e) ? e.startsWith("scale") ? ok(t[1]) : rk : ik;
function lk({ when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: s, repeat: i, repeatType: o, repeatDelay: a, from: l, elapsed: u, ...c }) {
  return !!Object.keys(c).length;
}
const ad = (e, t, n, r = {}, s, i) => (o) => {
  const a = Kc(r, e) || {}, l = a.delay || r.delay || 0;
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
  lk(a) || Object.assign(c, ak(e, c)), c.duration && (c.duration = /* @__PURE__ */ mt(c.duration)), c.repeatDelay && (c.repeatDelay = /* @__PURE__ */ mt(c.repeatDelay)), c.from !== void 0 && (c.keyframes[0] = c.from);
  let d = !1;
  if ((c.type === !1 || c.duration === 0 && !c.repeatDelay) && (bu(c), c.delay === 0 && (d = !0)), (Nt.instantAnimations || Nt.skipAnimations) && (d = !0, bu(c), c.delay = 0), c.allowFlatten = !a.type && !a.ease, d && !i && t.get() !== void 0) {
    const f = nk(c.keyframes, a);
    if (f !== void 0) {
      we.update(() => {
        c.onUpdate(f), c.onComplete();
      });
      return;
    }
  }
  return a.isSync ? new Wc(c) : new DL(c);
};
function uk({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return t[n] = !1, r;
}
function gv(e, t, { delay: n = 0, transitionOverride: r, type: s } = {}) {
  var c;
  let { transition: i = e.getDefaultTransition(), transitionEnd: o, ...a } = t;
  r && (i = r);
  const l = [], u = s && e.animationState && e.animationState.getState()[s];
  for (const d in a) {
    const f = e.getValue(d, (c = e.latestValues[d]) != null ? c : null), m = a[d];
    if (m === void 0 || u && uk(u, d))
      continue;
    const p = {
      delay: n,
      ...Kc(i || {}, d)
    }, h = f.get();
    if (h !== void 0 && !f.isAnimating && !Array.isArray(m) && m === h && !p.velocity)
      continue;
    let _ = !1;
    if (window.MotionHandoffAnimation) {
      const M = vv(e);
      if (M) {
        const y = window.MotionHandoffAnimation(M, d, we);
        y !== null && (p.startTime = y, _ = !0);
      }
    }
    ku(e, d), f.start(ad(d, f, m, e.shouldReduceMotion && R_.has(d) ? { type: !1 } : p, e, _));
    const v = f.animation;
    v && l.push(v);
  }
  return o && Promise.all(l).then(() => {
    we.update(() => {
      o && QS(e, o);
    });
  }), l;
}
function yv(e, t, n, r = 0, s = 1) {
  const i = Array.from(e).sort((u, c) => u.sortNodePosition(c)).indexOf(t), o = e.size, a = (o - 1) * r;
  return typeof n == "function" ? n(i, o) : s === 1 ? i * r : a - i * r;
}
function Du(e, t, n = {}) {
  var l;
  const r = Nn(e, t, n.type === "exit" ? (l = e.presenceContext) == null ? void 0 : l.custom : void 0);
  let { transition: s = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (s = n.transitionOverride);
  const i = r ? () => Promise.all(gv(e, r, n)) : () => Promise.resolve(), o = e.variantChildren && e.variantChildren.size ? (u = 0) => {
    const { delayChildren: c = 0, staggerChildren: d, staggerDirection: f } = s;
    return ck(e, t, u, c, d, f, n);
  } : () => Promise.resolve(), { when: a } = s;
  if (a) {
    const [u, c] = a === "beforeChildren" ? [i, o] : [o, i];
    return u().then(() => c());
  } else
    return Promise.all([i(), o(n.delay)]);
}
function ck(e, t, n = 0, r = 0, s = 0, i = 1, o) {
  const a = [];
  for (const l of e.variantChildren)
    l.notify("AnimationStart", t), a.push(Du(l, t, {
      ...o,
      delay: n + (typeof r == "function" ? 0 : r) + yv(e.variantChildren, l, r, s, i)
    }).then(() => l.notify("AnimationComplete", t)));
  return Promise.all(a);
}
function dk(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const s = t.map((i) => Du(e, i, n));
    r = Promise.all(s);
  } else if (typeof t == "string")
    r = Du(e, t, n);
  else {
    const s = typeof t == "function" ? Nn(e, t, n.custom) : t;
    r = Promise.all(gv(e, s, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
function Mv(e, t) {
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
const fk = ed.length;
function bv(e) {
  if (!e)
    return;
  if (!e.isControllingVariants) {
    const n = e.parent ? bv(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < fk; n++) {
    const r = ed[n], s = e.props[r];
    (Ar(s) || s === !1) && (t[r] = s);
  }
  return t;
}
const mk = [...Qc].reverse(), pk = Qc.length;
function hk(e) {
  return (t) => Promise.all(t.map(({ animation: n, options: r }) => dk(e, n, r)));
}
function _k(e) {
  let t = hk(e), n = om(), r = !0;
  const s = (l) => (u, c) => {
    var f;
    const d = Nn(e, c, l === "exit" ? (f = e.presenceContext) == null ? void 0 : f.custom : void 0);
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
    const { props: u } = e, c = bv(e.parent) || {}, d = [], f = /* @__PURE__ */ new Set();
    let m = {}, p = 1 / 0;
    for (let _ = 0; _ < pk; _++) {
      const v = mk[_], M = n[v], y = u[v] !== void 0 ? u[v] : c[v], x = Ar(y), w = v === l ? M.isActive : null;
      w === !1 && (p = _);
      let S = y === c[v] && y !== u[v] && x;
      if (S && r && e.manuallyAnimateOnMount && (S = !1), M.protectedKeys = { ...m }, // If it isn't active and hasn't *just* been set as inactive
      !M.isActive && w === null || // If we didn't and don't have any defined prop for this animation type
      !y && !M.prevProp || // Or if the prop doesn't define an animation
      Ja(y) || typeof y == "boolean")
        continue;
      const j = vk(M.prevProp, y);
      let Y = j || // If we're making this variant active, we want to always make it active
      v === l && M.isActive && !S && x || // If we removed a higher-priority variant (i is in reverse order)
      _ > p && x, I = !1;
      const k = Array.isArray(y) ? y : [y];
      let C = k.reduce(s(v), {});
      w === !1 && (C = {});
      const { prevResolvedValues: N = {} } = M, U = {
        ...N,
        ...C
      }, O = (R) => {
        Y = !0, f.has(R) && (I = !0, f.delete(R)), M.needsAnimating[R] = !0;
        const L = e.getValue(R);
        L && (L.liveStyle = !1);
      };
      for (const R in U) {
        const L = C[R], P = N[R];
        if (m.hasOwnProperty(R))
          continue;
        let B = !1;
        Su(L) && Su(P) ? B = !Mv(L, P) : B = L !== P, B ? L != null ? O(R) : f.add(R) : L !== void 0 && f.has(R) ? O(R) : M.protectedKeys[R] = !0;
      }
      M.prevProp = y, M.prevResolvedValues = C, M.isActive && (m = { ...m, ...C }), r && e.blockInitialAnimation && (Y = !1);
      const E = S && j;
      Y && (!E || I) && d.push(...k.map((R) => {
        const L = { type: v };
        if (typeof R == "string" && r && !E && e.manuallyAnimateOnMount && e.parent) {
          const { parent: P } = e, B = Nn(P, R);
          if (P.enteringChildren && B) {
            const { delayChildren: T } = B.transition || {};
            L.delay = yv(P.enteringChildren, e, T);
          }
        }
        return {
          animation: R,
          options: L
        };
      }));
    }
    if (f.size) {
      const _ = {};
      if (typeof u.initial != "boolean") {
        const v = Nn(e, Array.isArray(u.initial) ? u.initial[0] : u.initial);
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
      n = om(), r = !0;
    }
  };
}
function vk(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Mv(t, e) : !1;
}
function an(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function om() {
  return {
    animate: an(!0),
    whileInView: an(),
    whileHover: an(),
    whileTap: an(),
    whileDrag: an(),
    whileFocus: an(),
    exit: an()
  };
}
class on {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
class gk extends on {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = _k(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    Ja(t) && (this.unmountControls = t.subscribe(this.node));
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
let yk = 0;
class Mk extends on {
  constructor() {
    super(...arguments), this.id = yk++;
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
const bk = {
  animation: {
    Feature: gk
  },
  exit: {
    Feature: Mk
  }
};
function $r(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function Xr(e) {
  return {
    point: {
      x: e.pageX,
      y: e.pageY
    }
  };
}
const xk = (e) => (t) => qc(t) && e(t, Xr(t));
function yr(e, t, n, r) {
  return $r(e, t, xk(n), r);
}
const xv = 1e-4, wk = 1 - xv, Yk = 1 + xv, wv = 0.01, Lk = 0 - wv, Sk = 0 + wv;
function We(e) {
  return e.max - e.min;
}
function kk(e, t, n) {
  return Math.abs(e - t) <= n;
}
function sm(e, t, n, r = 0.5) {
  e.origin = r, e.originPoint = ke(t.min, t.max, e.origin), e.scale = We(n) / We(t), e.translate = ke(n.min, n.max, e.origin) - e.originPoint, (e.scale >= wk && e.scale <= Yk || isNaN(e.scale)) && (e.scale = 1), (e.translate >= Lk && e.translate <= Sk || isNaN(e.translate)) && (e.translate = 0);
}
function Mr(e, t, n, r) {
  sm(e.x, t.x, n.x, r ? r.originX : void 0), sm(e.y, t.y, n.y, r ? r.originY : void 0);
}
function im(e, t, n) {
  e.min = n.min + t.min, e.max = e.min + We(t);
}
function Dk(e, t, n) {
  im(e.x, t.x, n.x), im(e.y, t.y, n.y);
}
function am(e, t, n) {
  e.min = t.min - n.min, e.max = e.min + We(t);
}
function br(e, t, n) {
  am(e.x, t.x, n.x), am(e.y, t.y, n.y);
}
function nt(e) {
  return [e("x"), e("y")];
}
const Yv = ({ current: e }) => e ? e.ownerDocument.defaultView : null, lm = (e, t) => Math.abs(e - t);
function Tk(e, t) {
  const n = lm(e.x, t.x), r = lm(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class Lv {
  constructor(t, n, { transformPagePoint: r, contextWindow: s = window, dragSnapToOrigin: i = !1, distanceThreshold: o = 3 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const f = Ll(this.lastMoveEventInfo, this.history), m = this.startEvent !== null, p = Tk(f.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
      if (!m && !p)
        return;
      const { point: h } = f, { timestamp: _ } = Oe;
      this.history.push({ ...h, timestamp: _ });
      const { onStart: v, onMove: M } = this.handlers;
      m || (v && v(this.lastMoveEvent, f), this.startEvent = this.lastMoveEvent), M && M(this.lastMoveEvent, f);
    }, this.handlePointerMove = (f, m) => {
      this.lastMoveEvent = f, this.lastMoveEventInfo = Yl(m, this.transformPagePoint), we.update(this.updatePoint, !0);
    }, this.handlePointerUp = (f, m) => {
      this.end();
      const { onEnd: p, onSessionEnd: h, resumeAnimation: _ } = this.handlers;
      if (this.dragSnapToOrigin && _ && _(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const v = Ll(f.type === "pointercancel" ? this.lastMoveEventInfo : Yl(m, this.transformPagePoint), this.history);
      this.startEvent && p && p(f, v), h && h(f, v);
    }, !qc(t))
      return;
    this.dragSnapToOrigin = i, this.handlers = n, this.transformPagePoint = r, this.distanceThreshold = o, this.contextWindow = s || window;
    const a = Xr(t), l = Yl(a, this.transformPagePoint), { point: u } = l, { timestamp: c } = Oe;
    this.history = [{ ...u, timestamp: c }];
    const { onSessionStart: d } = n;
    d && d(t, Ll(l, this.history)), this.removeListeners = Gr(yr(this.contextWindow, "pointermove", this.handlePointerMove), yr(this.contextWindow, "pointerup", this.handlePointerUp), yr(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), Qt(this.updatePoint);
  }
}
function Yl(e, t) {
  return t ? { point: t(e.point) } : e;
}
function um(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Ll({ point: e }, t) {
  return {
    point: e,
    delta: um(e, Sv(t)),
    offset: um(e, Ek(t)),
    velocity: jk(t, 0.1)
  };
}
function Ek(e) {
  return e[0];
}
function Sv(e) {
  return e[e.length - 1];
}
function jk(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let n = e.length - 1, r = null;
  const s = Sv(e);
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
function Pk(e, { min: t, max: n }, r) {
  return t !== void 0 && e < t ? e = r ? ke(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? ke(n, e, r.max) : Math.min(e, n)), e;
}
function cm(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
  };
}
function Ak(e, { top: t, left: n, bottom: r, right: s }) {
  return {
    x: cm(e.x, n, s),
    y: cm(e.y, t, r)
  };
}
function dm(e, t) {
  let n = t.min - e.min, r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function Ck(e, t) {
  return {
    x: dm(e.x, t.x),
    y: dm(e.y, t.y)
  };
}
function $k(e, t) {
  let n = 0.5;
  const r = We(e), s = We(t);
  return s > r ? n = /* @__PURE__ */ Er(t.min, t.max - r, e.min) : r > s && (n = /* @__PURE__ */ Er(e.min, e.max - s, t.min)), Ot(0, 1, n);
}
function Hk(e, t) {
  const n = {};
  return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
const Tu = 0.35;
function Ok(e = Tu) {
  return e === !1 ? e = 0 : e === !0 && (e = Tu), {
    x: fm(e, "left", "right"),
    y: fm(e, "top", "bottom")
  };
}
function fm(e, t, n) {
  return {
    min: mm(e, t),
    max: mm(e, n)
  };
}
function mm(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const Rk = /* @__PURE__ */ new WeakMap();
class Nk {
  constructor(t) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Te(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = t;
  }
  start(t, { snapToCursor: n = !1, distanceThreshold: r } = {}) {
    const { presenceContext: s } = this.visualElement;
    if (s && s.isPresent === !1)
      return;
    const i = (d) => {
      const { dragSnapToOrigin: f } = this.getProps();
      f ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(Xr(d).point);
    }, o = (d, f) => {
      const { drag: m, dragPropagation: p, onDragStart: h } = this.getProps();
      if (m && !p && (this.openDragLock && this.openDragLock(), this.openDragLock = WL(m), !this.openDragLock))
        return;
      this.latestPointerEvent = d, this.latestPanInfo = f, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), nt((v) => {
        let M = this.getAxisMotionValue(v).get() || 0;
        if (xt.test(M)) {
          const { projection: y } = this.visualElement;
          if (y && y.layout) {
            const x = y.layout.layoutBox[v];
            x && (M = We(x) * (parseFloat(M) / 100));
          }
        }
        this.originPoint[v] = M;
      }), h && we.postRender(() => h(d, f)), ku(this.visualElement, "transform");
      const { animationState: _ } = this.visualElement;
      _ && _.setActive("whileDrag", !0);
    }, a = (d, f) => {
      this.latestPointerEvent = d, this.latestPanInfo = f;
      const { dragPropagation: m, dragDirectionLock: p, onDirectionLock: h, onDrag: _ } = this.getProps();
      if (!m && !this.openDragLock)
        return;
      const { offset: v } = f;
      if (p && this.currentDirection === null) {
        this.currentDirection = Ik(v), this.currentDirection !== null && h && h(this.currentDirection);
        return;
      }
      this.updateAxis("x", f.point, v), this.updateAxis("y", f.point, v), this.visualElement.render(), _ && _(d, f);
    }, l = (d, f) => {
      this.latestPointerEvent = d, this.latestPanInfo = f, this.stop(d, f), this.latestPointerEvent = null, this.latestPanInfo = null;
    }, u = () => nt((d) => {
      var f;
      return this.getAnimationState(d) === "paused" && ((f = this.getAxisMotionValue(d).animation) == null ? void 0 : f.play());
    }), { dragSnapToOrigin: c } = this.getProps();
    this.panSession = new Lv(t, {
      onSessionStart: i,
      onStart: o,
      onMove: a,
      onSessionEnd: l,
      resumeAnimation: u
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: c,
      distanceThreshold: r,
      contextWindow: Yv(this.visualElement)
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
    if (!r || !co(t, s, this.currentDirection))
      return;
    const i = this.getAxisMotionValue(t);
    let o = this.originPoint[t] + r[t];
    this.constraints && this.constraints[t] && (o = Pk(o, this.constraints[t], this.elastic[t])), i.set(o);
  }
  resolveConstraints() {
    var i;
    const { dragConstraints: t, dragElastic: n } = this.getProps(), r = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (i = this.visualElement.projection) == null ? void 0 : i.layout, s = this.constraints;
    t && Pn(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && r ? this.constraints = Ak(r.layoutBox, t) : this.constraints = !1, this.elastic = Ok(n), s !== this.constraints && r && this.constraints && !this.hasMutatedConstraints && nt((o) => {
      this.constraints !== !1 && this.getAxisMotionValue(o) && (this.constraints[o] = Hk(r.layoutBox[o], this.constraints[o]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Pn(t))
      return !1;
    const r = t.current;
    Rt(r !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.", "drag-constraints-ref");
    const { projection: s } = this.visualElement;
    if (!s || !s.layout)
      return !1;
    const i = FS(r, s.root, this.visualElement.getTransformPagePoint());
    let o = Ck(s.layout.layoutBox, i);
    if (n) {
      const a = n(RS(o));
      this.hasMutatedConstraints = !!a, a && (o = uv(a));
    }
    return o;
  }
  startAnimation(t) {
    const { drag: n, dragMomentum: r, dragElastic: s, dragTransition: i, dragSnapToOrigin: o, onDragTransitionEnd: a } = this.getProps(), l = this.constraints || {}, u = nt((c) => {
      if (!co(c, n, this.currentDirection))
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
    return ku(this.visualElement, t), r.start(ad(t, r, 0, n, this.visualElement, !1));
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
      if (!co(n, r, this.currentDirection))
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
    if (!Pn(n) || !r || !this.constraints)
      return;
    this.stopAnimation();
    const s = { x: 0, y: 0 };
    nt((o) => {
      const a = this.getAxisMotionValue(o);
      if (a && this.constraints !== !1) {
        const l = a.get();
        s[o] = $k({ min: l, max: l }, this.constraints[o]);
      }
    });
    const { transformTemplate: i } = this.visualElement.getProps();
    this.visualElement.current.style.transform = i ? i({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), nt((o) => {
      if (!co(o, t, null))
        return;
      const a = this.getAxisMotionValue(o), { min: l, max: u } = this.constraints[o];
      a.set(ke(l, u, s[o]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    Rk.set(this.visualElement, this);
    const t = this.visualElement.current, n = yr(t, "pointerdown", (l) => {
      const { drag: u, dragListener: c = !0 } = this.getProps();
      u && c && this.start(l);
    }), r = () => {
      const { dragConstraints: l } = this.getProps();
      Pn(l) && l.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: s } = this.visualElement, i = s.addEventListener("measure", r);
    s && !s.layout && (s.root && s.root.updateScroll(), s.updateLayout()), we.read(r);
    const o = $r(window, "resize", () => this.scalePositionWithinConstraints()), a = s.addEventListener("didUpdate", ({ delta: l, hasLayoutChanged: u }) => {
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
    const t = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: r = !1, dragPropagation: s = !1, dragConstraints: i = !1, dragElastic: o = Tu, dragMomentum: a = !0 } = t;
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
function co(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function Ik(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
class Fk extends on {
  constructor(t) {
    super(t), this.removeGroupControls = st, this.removeListeners = st, this.controls = new Nk(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || st;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const pm = (e) => (t, n) => {
  e && we.postRender(() => e(t, n));
};
class Vk extends on {
  constructor() {
    super(...arguments), this.removePointerDownListener = st;
  }
  onPointerDown(t) {
    this.session = new Lv(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Yv(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: s } = this.node.getProps();
    return {
      onSessionStart: pm(t),
      onStart: pm(n),
      onMove: r,
      onEnd: (i, o) => {
        delete this.session, s && we.postRender(() => s(i, o));
      }
    };
  }
  mount() {
    this.removePointerDownListener = yr(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const Lo = {
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
function hm(e, t) {
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
    const n = hm(e, t.target.x), r = hm(e, t.target.y);
    return `${n}% ${r}%`;
  }
}, zk = {
  correct: (e, { treeScale: t, projectionDelta: n }) => {
    const r = e, s = en.parse(e);
    if (s.length > 5)
      return r;
    const i = en.createTransformer(e), o = typeof s[0] != "number" ? 1 : 0, a = n.x.scale * t.x, l = n.y.scale * t.y;
    s[0 + o] /= a, s[1 + o] /= l;
    const u = ke(a, l, 0.5);
    return typeof s[2 + o] == "number" && (s[2 + o] /= u), typeof s[3 + o] == "number" && (s[3 + o] /= u), i(s);
  }
};
let Sl = !1;
class Bk extends by {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: s } = this.props, { projection: i } = t;
    fS(Wk), i && (n.group && n.group.add(i), r && r.register && s && r.register(i), Sl && i.root.didUpdate(), i.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), i.setOptions({
      ...i.options,
      onExitComplete: () => this.safeToRemove()
    })), Lo.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: n, visualElement: r, drag: s, isPresent: i } = this.props, { projection: o } = r;
    return o && (o.isPresent = i, Sl = !0, s || t.layoutDependency !== n || n === void 0 || t.isPresent !== i ? o.willUpdate() : this.safeToRemove(), t.isPresent !== i && (i ? o.promote() : o.relegate() || we.postRender(() => {
      const a = o.getStack();
      (!a || !a.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t && (t.root.didUpdate(), Jc.postRender(() => {
      !t.currentAnimation && t.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r } = this.props, { projection: s } = t;
    Sl = !0, s && (s.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(s), r && r.deregister && r.deregister(s));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function kv(e) {
  const [t, n] = J_(), r = re(kc);
  return g.jsx(Bk, { ...e, layoutGroup: r, switchLayoutGroup: re(av), isPresent: t, safeToRemove: n });
}
const Wk = {
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
  boxShadow: zk
};
function Uk(e, t, n) {
  const r = Fe(e) ? e : Bn(e);
  return r.start(ad("", r, t, n)), r.animation;
}
const Kk = (e, t) => e.depth - t.depth;
class Gk {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    Ec(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    jc(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(Kk), this.isDirty = !1, this.children.forEach(t);
  }
}
function Jk(e, t) {
  const n = Ke.now(), r = ({ timestamp: s }) => {
    const i = s - n;
    i >= t && (Qt(r), e(i - t));
  };
  return we.setup(r, !0), () => Qt(r);
}
const Dv = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], qk = Dv.length, _m = (e) => typeof e == "string" ? parseFloat(e) : e, vm = (e) => typeof e == "number" || ae.test(e);
function Xk(e, t, n, r, s, i) {
  var o, a, l, u;
  s ? (e.opacity = ke(0, (o = n.opacity) != null ? o : 1, Zk(r)), e.opacityExit = ke((a = t.opacity) != null ? a : 1, 0, Qk(r))) : i && (e.opacity = ke((l = t.opacity) != null ? l : 1, (u = n.opacity) != null ? u : 1, r));
  for (let c = 0; c < qk; c++) {
    const d = `border${Dv[c]}Radius`;
    let f = gm(t, d), m = gm(n, d);
    if (f === void 0 && m === void 0)
      continue;
    f || (f = 0), m || (m = 0), f === 0 || m === 0 || vm(f) === vm(m) ? (e[d] = Math.max(ke(_m(f), _m(m), r), 0), (xt.test(m) || xt.test(f)) && (e[d] += "%")) : e[d] = m;
  }
  (t.rotate || n.rotate) && (e.rotate = ke(t.rotate || 0, n.rotate || 0, r));
}
function gm(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const Zk = /* @__PURE__ */ Tv(0, 0.5, h_), Qk = /* @__PURE__ */ Tv(0.5, 0.95, st);
function Tv(e, t, n) {
  return (r) => r < e ? 0 : r > t ? 1 : n(/* @__PURE__ */ Er(e, t, r));
}
function ym(e, t) {
  e.min = t.min, e.max = t.max;
}
function tt(e, t) {
  ym(e.x, t.x), ym(e.y, t.y);
}
function Mm(e, t) {
  e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin;
}
function bm(e, t, n, r, s) {
  return e -= t, e = Bo(e, 1 / n, r), s !== void 0 && (e = Bo(e, 1 / s, r)), e;
}
function e1(e, t = 0, n = 1, r = 0.5, s, i = e, o = e) {
  if (xt.test(t) && (t = parseFloat(t), t = ke(o.min, o.max, t / 100) - o.min), typeof t != "number")
    return;
  let a = ke(i.min, i.max, r);
  e === i && (a -= t), e.min = bm(e.min, t, n, a, s), e.max = bm(e.max, t, n, a, s);
}
function xm(e, t, [n, r, s], i, o) {
  e1(e, t[n], t[r], t[s], t.scale, i, o);
}
const t1 = ["x", "scaleX", "originX"], n1 = ["y", "scaleY", "originY"];
function wm(e, t, n, r) {
  xm(e.x, t, t1, n ? n.x : void 0, r ? r.x : void 0), xm(e.y, t, n1, n ? n.y : void 0, r ? r.y : void 0);
}
function Ym(e) {
  return e.translate === 0 && e.scale === 1;
}
function Ev(e) {
  return Ym(e.x) && Ym(e.y);
}
function Lm(e, t) {
  return e.min === t.min && e.max === t.max;
}
function r1(e, t) {
  return Lm(e.x, t.x) && Lm(e.y, t.y);
}
function Sm(e, t) {
  return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function jv(e, t) {
  return Sm(e.x, t.x) && Sm(e.y, t.y);
}
function km(e) {
  return We(e.x) / We(e.y);
}
function Dm(e, t) {
  return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
class o1 {
  constructor() {
    this.members = [];
  }
  add(t) {
    Ec(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (jc(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
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
function s1(e, t, n) {
  let r = "";
  const s = e.x.translate / t.x, i = e.y.translate / t.y, o = (n == null ? void 0 : n.z) || 0;
  if ((s || i || o) && (r = `translate3d(${s}px, ${i}px, ${o}px) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
    const { transformPerspective: u, rotate: c, rotateX: d, rotateY: f, skewX: m, skewY: p } = n;
    u && (r = `perspective(${u}px) ${r}`), c && (r += `rotate(${c}deg) `), d && (r += `rotateX(${d}deg) `), f && (r += `rotateY(${f}deg) `), m && (r += `skewX(${m}deg) `), p && (r += `skewY(${p}deg) `);
  }
  const a = e.x.scale * t.x, l = e.y.scale * t.y;
  return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none";
}
const kl = ["", "X", "Y", "Z"], i1 = 1e3;
let a1 = 0;
function Dl(e, t, n, r) {
  const { latestValues: s } = t;
  s[e] && (n[e] = s[e], t.setStaticValue(e, 0), r && (r[e] = 0));
}
function Pv(e) {
  if (e.hasCheckedOptimisedAppear = !0, e.root === e)
    return;
  const { visualElement: t } = e.options;
  if (!t)
    return;
  const n = vv(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: s, layoutId: i } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", we, !(s || i));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && Pv(r);
}
function Av({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: s }) {
  return class {
    constructor(o = {}, a = t == null ? void 0 : t()) {
      this.id = a1++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, this.nodes.forEach(c1), this.nodes.forEach(p1), this.nodes.forEach(h1), this.nodes.forEach(d1);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = o, this.root = a ? a.root || a : this, this.path = a ? [...a.path, a] : [], this.parent = a, this.depth = a ? a.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new Gk());
    }
    addEventListener(o, a) {
      return this.eventHandlers.has(o) || this.eventHandlers.set(o, new Ac()), this.eventHandlers.get(o).add(a);
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
      this.isSVG = G_(o) && !XL(o), this.instance = o;
      const { layoutId: a, layout: l, visualElement: u } = this.options;
      if (u && !u.current && u.mount(o), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (l || a) && (this.isLayoutDirty = !0), e) {
        let c, d = 0;
        const f = () => this.root.updateBlockedByResize = !1;
        we.read(() => {
          d = window.innerWidth;
        }), e(o, () => {
          const m = window.innerWidth;
          m !== d && (d = m, this.root.updateBlockedByResize = !0, c && c(), c = Jk(f, 250), Lo.hasAnimatedSinceResize && (Lo.hasAnimatedSinceResize = !1, this.nodes.forEach(jm)));
        });
      }
      a && this.root.registerSharedNode(a, this), this.options.animate !== !1 && u && (a || l) && this.addEventListener("didUpdate", ({ delta: c, hasLayoutChanged: d, hasRelativeLayoutChanged: f, layout: m }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const p = this.options.transition || u.getDefaultTransition() || M1, { onLayoutAnimationStart: h, onLayoutAnimationComplete: _ } = u.getProps(), v = !this.targetLayout || !jv(this.targetLayout, m), M = !d && f;
        if (this.options.layoutRoot || this.resumeFrom || M || d && (v || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
          const y = {
            ...Kc(p, "layout"),
            onPlay: h,
            onComplete: _
          };
          (u.shouldReduceMotion || this.options.layoutRoot) && (y.delay = 0, y.type = !1), this.startAnimation(y), this.setAnimationOrigin(c, M);
        } else
          d || jm(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = m;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const o = this.getStack();
      o && o.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), Qt(this.updateProjection);
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(_1), this.animationId++);
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
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && Pv(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
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
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Tm);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(Em);
        return;
      }
      this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(m1), this.nodes.forEach(l1), this.nodes.forEach(u1)) : this.nodes.forEach(Em), this.clearAllSnapshots();
      const a = Ke.now();
      Oe.delta = Ot(0, 1e3 / 60, a - Oe.timestamp), Oe.timestamp = a, Oe.isProcessing = !0, _l.update.process(Oe), _l.preRender.process(Oe), _l.render.process(Oe), Oe.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, Jc.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(f1), this.sharedNodes.forEach(v1);
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
      const o = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, a = this.projectionDelta && !Ev(this.projectionDelta), l = this.getTransformTemplate(), u = l ? l(this.latestValues, "") : void 0, c = u !== this.prevTransformTemplateValue;
      o && this.instance && (a || un(this.latestValues) || c) && (s(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(o = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return o && (l = this.removeTransform(l)), b1(l), {
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
      if (!(((u = this.scroll) == null ? void 0 : u.wasRoot) || this.path.some(x1))) {
        const { scroll: c } = this.root;
        c && (An(a.x, c.offset.x), An(a.y, c.offset.y));
      }
      return a;
    }
    removeElementScroll(o) {
      var l;
      const a = Te();
      if (tt(a, o), (l = this.scroll) != null && l.wasRoot)
        return a;
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u], { scroll: d, options: f } = c;
        c !== this.root && d && f.layoutScroll && (d.wasRoot && tt(a, o), An(a.x, d.offset.x), An(a.y, d.offset.y));
      }
      return a;
    }
    applyTransform(o, a = !1) {
      const l = Te();
      tt(l, o);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !a && c.options.layoutScroll && c.scroll && c !== c.root && Cn(l, {
          x: -c.scroll.offset.x,
          y: -c.scroll.offset.y
        }), un(c.latestValues) && Cn(l, c.latestValues);
      }
      return un(this.latestValues) && Cn(l, this.latestValues), l;
    }
    removeTransform(o) {
      const a = Te();
      tt(a, o);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !un(u.latestValues))
          continue;
        wu(u.latestValues) && u.updateSnapshot();
        const c = Te(), d = u.measurePageBox();
        tt(c, d), wm(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return un(this.latestValues) && wm(a, this.latestValues), a;
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
          m && m.layout && this.animationProgress !== 1 ? (this.relativeParent = m, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Te(), this.relativeTargetOrigin = Te(), br(this.relativeTargetOrigin, this.layout.layoutBox, m.layout.layoutBox), tt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = Te(), this.targetWithTransforms = Te()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), Dk(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : tt(this.target, this.layout.layoutBox), dv(this.target, this.targetDelta)) : tt(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
          this.attemptToResolveRelativeTarget = !1;
          const m = this.getClosestProjectingParent();
          m && !!m.resumingFrom == !!this.resumingFrom && !m.options.layoutScroll && m.target && this.animationProgress !== 1 ? (this.relativeParent = m, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Te(), this.relativeTargetOrigin = Te(), br(this.relativeTargetOrigin, this.target, m.target), tt(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || wu(this.parent.latestValues) || cv(this.parent.latestValues)))
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
      tt(this.layoutCorrected, this.layout.layoutBox);
      const d = this.treeScale.x, f = this.treeScale.y;
      IS(this.layoutCorrected, this.treeScale, this.path, a), o.layout && !o.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (o.target = o.layout.layoutBox, o.targetWithTransforms = Te());
      const { target: m } = o;
      if (!m) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Mm(this.prevProjectionDelta.x, this.projectionDelta.x), Mm(this.prevProjectionDelta.y, this.projectionDelta.y)), Mr(this.projectionDelta, this.layoutCorrected, m, this.latestValues), (this.treeScale.x !== d || this.treeScale.y !== f || !Dm(this.projectionDelta.x, this.prevProjectionDelta.x) || !Dm(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", m));
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
      this.prevProjectionDelta = $n(), this.projectionDelta = $n(), this.projectionDeltaWithTransform = $n();
    }
    setAnimationOrigin(o, a = !1) {
      const l = this.snapshot, u = l ? l.latestValues : {}, c = { ...this.latestValues }, d = $n();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !a;
      const f = Te(), m = l ? l.source : void 0, p = this.layout ? this.layout.source : void 0, h = m !== p, _ = this.getStack(), v = !_ || _.members.length <= 1, M = !!(h && !v && this.options.crossfade === !0 && !this.path.some(y1));
      this.animationProgress = 0;
      let y;
      this.mixTargetDelta = (x) => {
        const w = x / 1e3;
        Pm(d.x, o.x, w), Pm(d.y, o.y, w), this.setTargetDelta(d), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (br(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox), g1(this.relativeTarget, this.relativeTargetOrigin, f, w), y && r1(this.relativeTarget, y) && (this.isProjectionDirty = !1), y || (y = Te()), tt(y, this.relativeTarget)), h && (this.animationValues = c, Xk(c, u, this.latestValues, w, M, v)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = w;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(o) {
      var a, l, u;
      this.notifyListeners("animationStart"), (a = this.currentAnimation) == null || a.stop(), (u = (l = this.resumingFrom) == null ? void 0 : l.currentAnimation) == null || u.stop(), this.pendingAnimation && (Qt(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = we.update(() => {
        Lo.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = Bn(0)), this.currentAnimation = Uk(this.motionValue, [0, 1e3], {
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
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(i1), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const o = this.getLead();
      let { targetWithTransforms: a, target: l, layout: u, latestValues: c } = o;
      if (!(!a || !l || !u)) {
        if (this !== o && this.layout && u && Cv(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
          l = this.target || Te();
          const d = We(this.layout.layoutBox.x);
          l.x.min = o.target.x.min, l.x.max = l.x.min + d;
          const f = We(this.layout.layoutBox.y);
          l.y.min = o.target.y.min, l.y.max = l.y.min + f;
        }
        tt(a, l), Cn(a, c), Mr(this.projectionDeltaWithTransform, this.layoutCorrected, a, c);
      }
    }
    registerSharedNode(o, a) {
      this.sharedNodes.has(o) || this.sharedNodes.set(o, new o1()), this.sharedNodes.get(o).add(a);
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
      l.z && Dl("z", o, u, this.animationValues);
      for (let c = 0; c < kl.length; c++)
        Dl(`rotate${kl[c]}`, o, u, this.animationValues), Dl(`skew${kl[c]}`, o, u, this.animationValues);
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
        this.needsReset = !1, o.visibility = "", o.opacity = "", o.pointerEvents = Yo(a == null ? void 0 : a.pointerEvents) || "", o.transform = l ? l(this.latestValues, "") : "none";
        return;
      }
      const u = this.getLead();
      if (!this.projectionDelta || !this.layout || !u.target) {
        this.options.layoutId && (o.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, o.pointerEvents = Yo(a == null ? void 0 : a.pointerEvents) || ""), this.hasProjected && !un(this.latestValues) && (o.transform = l ? l({}, "") : "none", this.hasProjected = !1);
        return;
      }
      o.visibility = "";
      const c = u.animationValues || u.latestValues;
      this.applyTransformsToTarget();
      let d = s1(this.projectionDeltaWithTransform, this.treeScale, c);
      l && (d = l(c, d)), o.transform = d;
      const { x: f, y: m } = this.projectionDelta;
      o.transformOrigin = `${f.origin * 100}% ${m.origin * 100}% 0`, u.animationValues ? o.opacity = u === this ? (h = (p = c.opacity) != null ? p : this.latestValues.opacity) != null ? h : 1 : this.preserveOpacity ? this.latestValues.opacity : c.opacityExit : o.opacity = u === this ? c.opacity !== void 0 ? c.opacity : "" : c.opacityExit !== void 0 ? c.opacityExit : 0;
      for (const _ in Cr) {
        if (c[_] === void 0)
          continue;
        const { correct: v, applyTo: M, isCSSVariable: y } = Cr[_], x = d === "none" ? c[_] : v(c[_], u);
        if (M) {
          const w = M.length;
          for (let S = 0; S < w; S++)
            o[M[S]] = x;
        } else
          y ? this.options.visualElement.renderState.vars[_] = x : o[_] = x;
      }
      this.options.layoutId && (o.pointerEvents = u === this ? Yo(a == null ? void 0 : a.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((o) => {
        var a;
        return (a = o.currentAnimation) == null ? void 0 : a.stop();
      }), this.root.nodes.forEach(Tm), this.root.sharedNodes.clear();
    }
  };
}
function l1(e) {
  e.updateLayout();
}
function u1(e) {
  var n;
  const t = ((n = e.resumeFrom) == null ? void 0 : n.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && t && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: s } = e.layout, { animationType: i } = e.options, o = t.source !== e.layout.source;
    i === "size" ? nt((d) => {
      const f = o ? t.measuredBox[d] : t.layoutBox[d], m = We(f);
      f.min = r[d].min, f.max = f.min + m;
    }) : Cv(i, t.layoutBox, r) && nt((d) => {
      const f = o ? t.measuredBox[d] : t.layoutBox[d], m = We(r[d]);
      f.max = f.min + m, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[d].max = e.relativeTarget[d].min + m);
    });
    const a = $n();
    Mr(a, r, t.layoutBox);
    const l = $n();
    o ? Mr(l, e.applyTransform(s, !0), t.measuredBox) : Mr(l, r, t.layoutBox);
    const u = !Ev(a);
    let c = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: m } = d;
        if (f && m) {
          const p = Te();
          br(p, t.layoutBox, f.layoutBox);
          const h = Te();
          br(h, r, m.layoutBox), jv(p, h) || (c = !0), d.options.layoutRoot && (e.relativeTarget = h, e.relativeTargetOrigin = p, e.relativeParent = d);
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
function c1(e) {
  e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function d1(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function f1(e) {
  e.clearSnapshot();
}
function Tm(e) {
  e.clearMeasurements();
}
function Em(e) {
  e.isLayoutDirty = !1;
}
function m1(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function jm(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function p1(e) {
  e.resolveTargetDelta();
}
function h1(e) {
  e.calcProjection();
}
function _1(e) {
  e.resetSkewAndRotation();
}
function v1(e) {
  e.removeLeadSnapshot();
}
function Pm(e, t, n) {
  e.translate = ke(t.translate, 0, n), e.scale = ke(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function Am(e, t, n, r) {
  e.min = ke(t.min, n.min, r), e.max = ke(t.max, n.max, r);
}
function g1(e, t, n, r) {
  Am(e.x, t.x, n.x, r), Am(e.y, t.y, n.y, r);
}
function y1(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const M1 = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, Cm = (e) => typeof navigator != "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), $m = Cm("applewebkit/") && !Cm("chrome/") ? Math.round : st;
function Hm(e) {
  e.min = $m(e.min), e.max = $m(e.max);
}
function b1(e) {
  Hm(e.x), Hm(e.y);
}
function Cv(e, t, n) {
  return e === "position" || e === "preserve-aspect" && !kk(km(t), km(n), 0.2);
}
function x1(e) {
  var t;
  return e !== e.root && ((t = e.scroll) == null ? void 0 : t.wasRoot);
}
const w1 = Av({
  attachResizeListener: (e, t) => $r(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), Tl = {
  current: void 0
}, $v = Av({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!Tl.current) {
      const e = new w1({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), Tl.current = e;
    }
    return Tl.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), Y1 = {
  pan: {
    Feature: Vk
  },
  drag: {
    Feature: Fk,
    ProjectionNode: $v,
    MeasureLayout: kv
  }
};
function Om(e, t, n) {
  const { props: r } = e;
  e.animationState && r.whileHover && e.animationState.setActive("whileHover", n === "Start");
  const s = "onHover" + n, i = r[s];
  i && we.postRender(() => i(t, Xr(t)));
}
class L1 extends on {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = UL(t, (n, r) => (Om(this.node, r, "Start"), (s) => Om(this.node, s, "End"))));
  }
  unmount() {
  }
}
class S1 extends on {
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
    this.unmount = Gr($r(this.node.current, "focus", () => this.onFocus()), $r(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function Rm(e, t, n) {
  const { props: r } = e;
  if (e.current instanceof HTMLButtonElement && e.current.disabled)
    return;
  e.animationState && r.whileTap && e.animationState.setActive("whileTap", n === "Start");
  const s = "onTap" + (n === "End" ? "" : n), i = r[s];
  i && we.postRender(() => i(t, Xr(t)));
}
class k1 extends on {
  mount() {
    const { current: t } = this.node;
    t && (this.unmount = qL(t, (n, r) => (Rm(this.node, r, "Start"), (s, { success: i }) => Rm(this.node, s, i ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
  }
  unmount() {
  }
}
const Eu = /* @__PURE__ */ new WeakMap(), El = /* @__PURE__ */ new WeakMap(), D1 = (e) => {
  const t = Eu.get(e.target);
  t && t(e);
}, T1 = (e) => {
  e.forEach(D1);
};
function E1({ root: e, ...t }) {
  const n = e || document;
  El.has(n) || El.set(n, {});
  const r = El.get(n), s = JSON.stringify(t);
  return r[s] || (r[s] = new IntersectionObserver(T1, { root: e, ...t })), r[s];
}
function j1(e, t, n) {
  const r = E1(t);
  return Eu.set(e, n), r.observe(e), () => {
    Eu.delete(e), r.unobserve(e);
  };
}
const P1 = {
  some: 0,
  all: 1
};
class A1 extends on {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: n, margin: r, amount: s = "some", once: i } = t, o = {
      root: n ? n.current : void 0,
      rootMargin: r,
      threshold: typeof s == "number" ? s : P1[s]
    }, a = (l) => {
      const { isIntersecting: u } = l;
      if (this.isInView === u || (this.isInView = u, i && !u && this.hasEnteredView))
        return;
      u && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", u);
      const { onViewportEnter: c, onViewportLeave: d } = this.node.getProps(), f = u ? c : d;
      f && f(l);
    };
    return j1(this.node.current, o, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver == "undefined")
      return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(C1(t, n)) && this.startObserver();
  }
  unmount() {
  }
}
function C1({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const $1 = {
  inView: {
    Feature: A1
  },
  tap: {
    Feature: k1
  },
  focus: {
    Feature: S1
  },
  hover: {
    Feature: L1
  }
}, H1 = {
  layout: {
    ProjectionNode: $v,
    MeasureLayout: kv
  }
}, O1 = {
  ...bk,
  ...$1,
  ...Y1,
  ...H1
}, Un = /* @__PURE__ */ OS(O1, qS);
function R1({
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
const N1 = /* @__PURE__ */ b.forwardRef(R1);
function I1({
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
const F1 = /* @__PURE__ */ b.forwardRef(I1);
function V1({
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
const z1 = /* @__PURE__ */ b.forwardRef(V1);
function B1({
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
const W1 = /* @__PURE__ */ b.forwardRef(B1);
function U1({
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
const Hv = /* @__PURE__ */ b.forwardRef(U1), Ov = ge({
  activeAccordion: "",
  setActiveAccordion: null
}), wN = ({
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
    Ov
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
            F1,
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
    /* @__PURE__ */ g.jsx(Zc, { initial: !1, children: h && /* @__PURE__ */ g.jsx(
      Un.div,
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
}, YN = ({ className: e, initialValue: t = "", children: n }) => {
  const [r, s] = oe(t);
  return /* @__PURE__ */ g.jsx("div", { className: e, children: /* @__PURE__ */ g.jsx(
    Ov.Provider,
    {
      value: { activeAccordion: r, setActiveAccordion: s },
      children: n
    }
  ) });
};
function Nm(e, t) {
  let n;
  return (...r) => {
    window.clearTimeout(n), n = window.setTimeout(() => e(...r), t);
  };
}
function K1({ debounce: e, scroll: t, polyfill: n, offsetSize: r } = { debounce: 0, scroll: !1, offsetSize: !1 }) {
  const s = n || (typeof window == "undefined" ? class {
  } : window.ResizeObserver);
  if (!s) throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");
  const [i, o] = oe({ left: 0, top: 0, width: 0, height: 0, bottom: 0, right: 0, x: 0, y: 0 }), a = q({ element: null, scrollContainers: null, resizeObserver: null, lastBounds: i, orientationHandler: null }), l = e ? typeof e == "number" ? e : e.scroll : null, u = e ? typeof e == "number" ? e : e.resize : null, c = q(!1);
  ue(() => (c.current = !0, () => void (c.current = !1)));
  const [d, f, m] = pe(() => {
    const v = () => {
      if (!a.current.element) return;
      const { left: M, top: y, width: x, height: w, bottom: S, right: j, x: Y, y: I } = a.current.element.getBoundingClientRect(), k = { left: M, top: y, width: x, height: w, bottom: S, right: j, x: Y, y: I };
      a.current.element instanceof HTMLElement && r && (k.height = a.current.element.offsetHeight, k.width = a.current.element.offsetWidth), Object.freeze(k), c.current && !X1(a.current.lastBounds, k) && o(a.current.lastBounds = k);
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
  return J1(m, !!t), G1(f), ue(() => {
    p(), h();
  }, [t, m, f]), ue(() => p, []), [_, i, d];
}
function G1(e) {
  ue(() => {
    const t = e;
    return window.addEventListener("resize", t), () => void window.removeEventListener("resize", t);
  }, [e]);
}
function J1(e, t) {
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
const q1 = ["x", "y", "top", "bottom", "left", "right", "width", "height"], X1 = (e, t) => q1.every((n) => e[n] === t[n]), LN = ({
  className: e = "",
  buttonClassName: t = "",
  hiddenIcon: n = !1,
  isOpened: r = !1,
  children: s,
  rowContent: i
}) => {
  const [o, { height: a }] = K1();
  return /* @__PURE__ */ g.jsx("div", { className: e, children: /* @__PURE__ */ g.jsx(_0, { defaultOpen: r, children: ({ open: l }) => /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
    /* @__PURE__ */ g.jsxs(
      Gh,
      {
        className: J(
          "flex w-full justify-start items-center gap-[22px] bg-light-4 border-t-[1px] border-light-3-tint px-[14px] py-[12px] text-left text-[14px] text-dark hover:bg-light-3-tint focus:outline-none transition-colors",
          t
        ),
        children: [
          /* @__PURE__ */ g.jsx(
            qt,
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
      Ba,
      {
        leave: "transition-all duration-300 ease-out overflow-hidden",
        leaveFrom: `h-[${a}px] opacity-100`,
        leaveTo: "h-0 opacity-0",
        children: /* @__PURE__ */ g.jsx(
          Un.div,
          {
            ref: o,
            className: "overflow-hidden",
            initial: { opacity: 0, height: 0 },
            animate: { opacity: 1, height: "auto" },
            children: /* @__PURE__ */ g.jsx(Jh, { children: s })
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
      return /* @__PURE__ */ g.jsx(qt, { className: J("transition h-4 w-4"), "aria-hidden": "true" });
    case 2:
      return /* @__PURE__ */ g.jsx(qt, { className: J("transition h-6 w-6"), "aria-hidden": "true" });
    case 4:
      return /* @__PURE__ */ g.jsx(Q1, {});
    case 3:
      return /* @__PURE__ */ g.jsx(K0, { className: J("transition h-4 w-4"), "aria-hidden": "true" });
    default:
      return /* @__PURE__ */ g.jsx(qt, { className: J("transition h-4 w-4"), "aria-hidden": "true" });
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
), tD = ({
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
        Sc,
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
        W0,
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
            children: /* @__PURE__ */ g.jsx(No, { className: "h-7 w-7", "aria-hidden": "true" })
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
    var n = 1e3, r = 6e4, s = 36e5, i = "millisecond", o = "second", a = "minute", l = "hour", u = "day", c = "week", d = "month", f = "quarter", m = "year", p = "date", h = "Invalid Date", _ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, v = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(O) {
      var E = ["th", "st", "nd", "rd"], $ = O % 100;
      return "[" + O + (E[($ - 20) % 10] || E[$] || E[0]) + "]";
    } }, y = function(O, E, $) {
      var R = String(O);
      return !R || R.length >= E ? O : "" + Array(E + 1 - R.length).join($) + O;
    }, x = { s: y, z: function(O) {
      var E = -O.utcOffset(), $ = Math.abs(E), R = Math.floor($ / 60), L = $ % 60;
      return (E <= 0 ? "+" : "-") + y(R, 2, "0") + ":" + y(L, 2, "0");
    }, m: function O(E, $) {
      if (E.date() < $.date()) return -O($, E);
      var R = 12 * ($.year() - E.year()) + ($.month() - E.month()), L = E.clone().add(R, d), P = $ - L < 0, B = E.clone().add(R + (P ? -1 : 1), d);
      return +(-(R + ($ - L) / (P ? L - B : B - L)) || 0);
    }, a: function(O) {
      return O < 0 ? Math.ceil(O) || 0 : Math.floor(O);
    }, p: function(O) {
      return { M: d, y: m, w: c, d: u, D: p, h: l, m: a, s: o, ms: i, Q: f }[O] || String(O || "").toLowerCase().replace(/s$/, "");
    }, u: function(O) {
      return O === void 0;
    } }, w = "en", S = {};
    S[w] = M;
    var j = "$isDayjsObject", Y = function(O) {
      return O instanceof N || !(!O || !O[j]);
    }, I = function O(E, $, R) {
      var L;
      if (!E) return w;
      if (typeof E == "string") {
        var P = E.toLowerCase();
        S[P] && (L = P), $ && (S[P] = $, L = P);
        var B = E.split("-");
        if (!L && B.length > 1) return O(B[0]);
      } else {
        var T = E.name;
        S[T] = E, L = T;
      }
      return !R && L && (w = L), L || !R && w;
    }, k = function(O, E) {
      if (Y(O)) return O.clone();
      var $ = typeof E == "object" ? E : {};
      return $.date = O, $.args = arguments, new N($);
    }, C = x;
    C.l = I, C.i = Y, C.w = function(O, E) {
      return k(O, { locale: E.$L, utc: E.$u, x: E.$x, $offset: E.$offset });
    };
    var N = function() {
      function O($) {
        this.$L = I($.locale, null, !0), this.parse($), this.$x = this.$x || $.x || {}, this[j] = !0;
      }
      var E = O.prototype;
      return E.parse = function($) {
        this.$d = function(R) {
          var L = R.date, P = R.utc;
          if (L === null) return /* @__PURE__ */ new Date(NaN);
          if (C.u(L)) return /* @__PURE__ */ new Date();
          if (L instanceof Date) return new Date(L);
          if (typeof L == "string" && !/Z$/i.test(L)) {
            var B = L.match(_);
            if (B) {
              var T = B[2] - 1 || 0, H = (B[7] || "0").substring(0, 3);
              return P ? new Date(Date.UTC(B[1], T, B[3] || 1, B[4] || 0, B[5] || 0, B[6] || 0, H)) : new Date(B[1], T, B[3] || 1, B[4] || 0, B[5] || 0, B[6] || 0, H);
            }
          }
          return new Date(L);
        }($), this.init();
      }, E.init = function() {
        var $ = this.$d;
        this.$y = $.getFullYear(), this.$M = $.getMonth(), this.$D = $.getDate(), this.$W = $.getDay(), this.$H = $.getHours(), this.$m = $.getMinutes(), this.$s = $.getSeconds(), this.$ms = $.getMilliseconds();
      }, E.$utils = function() {
        return C;
      }, E.isValid = function() {
        return this.$d.toString() !== h;
      }, E.isSame = function($, R) {
        var L = k($);
        return this.startOf(R) <= L && L <= this.endOf(R);
      }, E.isAfter = function($, R) {
        return k($) < this.startOf(R);
      }, E.isBefore = function($, R) {
        return this.endOf(R) < k($);
      }, E.$g = function($, R, L) {
        return C.u($) ? this[R] : this.set(L, $);
      }, E.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, E.valueOf = function() {
        return this.$d.getTime();
      }, E.startOf = function($, R) {
        var L = this, P = !!C.u(R) || R, B = C.p($), T = function(se, he) {
          var le = C.w(L.$u ? Date.UTC(L.$y, he, se) : new Date(L.$y, he, se), L);
          return P ? le : le.endOf(u);
        }, H = function(se, he) {
          return C.w(L.toDate()[se].apply(L.toDate("s"), (P ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(he)), L);
        }, F = this.$W, K = this.$M, ne = this.$D, G = "set" + (this.$u ? "UTC" : "");
        switch (B) {
          case m:
            return P ? T(1, 0) : T(31, 11);
          case d:
            return P ? T(1, K) : T(0, K + 1);
          case c:
            var W = this.$locale().weekStart || 0, Q = (F < W ? F + 7 : F) - W;
            return T(P ? ne - Q : ne + (6 - Q), K);
          case u:
          case p:
            return H(G + "Hours", 0);
          case l:
            return H(G + "Minutes", 1);
          case a:
            return H(G + "Seconds", 2);
          case o:
            return H(G + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, E.endOf = function($) {
        return this.startOf($, !1);
      }, E.$set = function($, R) {
        var L, P = C.p($), B = "set" + (this.$u ? "UTC" : ""), T = (L = {}, L[u] = B + "Date", L[p] = B + "Date", L[d] = B + "Month", L[m] = B + "FullYear", L[l] = B + "Hours", L[a] = B + "Minutes", L[o] = B + "Seconds", L[i] = B + "Milliseconds", L)[P], H = P === u ? this.$D + (R - this.$W) : R;
        if (P === d || P === m) {
          var F = this.clone().set(p, 1);
          F.$d[T](H), F.init(), this.$d = F.set(p, Math.min(this.$D, F.daysInMonth())).$d;
        } else T && this.$d[T](H);
        return this.init(), this;
      }, E.set = function($, R) {
        return this.clone().$set($, R);
      }, E.get = function($) {
        return this[C.p($)]();
      }, E.add = function($, R) {
        var L, P = this;
        $ = Number($);
        var B = C.p(R), T = function(K) {
          var ne = k(P);
          return C.w(ne.date(ne.date() + Math.round(K * $)), P);
        };
        if (B === d) return this.set(d, this.$M + $);
        if (B === m) return this.set(m, this.$y + $);
        if (B === u) return T(1);
        if (B === c) return T(7);
        var H = (L = {}, L[a] = r, L[l] = s, L[o] = n, L)[B] || 1, F = this.$d.getTime() + $ * H;
        return C.w(F, this);
      }, E.subtract = function($, R) {
        return this.add(-1 * $, R);
      }, E.format = function($) {
        var R = this, L = this.$locale();
        if (!this.isValid()) return L.invalidDate || h;
        var P = $ || "YYYY-MM-DDTHH:mm:ssZ", B = C.z(this), T = this.$H, H = this.$m, F = this.$M, K = L.weekdays, ne = L.months, G = L.meridiem, W = function(he, le, Ce, Xe) {
          return he && (he[le] || he(R, P)) || Ce[le].slice(0, Xe);
        }, Q = function(he) {
          return C.s(T % 12 || 12, he, "0");
        }, se = G || function(he, le, Ce) {
          var Xe = he < 12 ? "AM" : "PM";
          return Ce ? Xe.toLowerCase() : Xe;
        };
        return P.replace(v, function(he, le) {
          return le || function(Ce) {
            switch (Ce) {
              case "YY":
                return String(R.$y).slice(-2);
              case "YYYY":
                return C.s(R.$y, 4, "0");
              case "M":
                return F + 1;
              case "MM":
                return C.s(F + 1, 2, "0");
              case "MMM":
                return W(L.monthsShort, F, ne, 3);
              case "MMMM":
                return W(ne, F);
              case "D":
                return R.$D;
              case "DD":
                return C.s(R.$D, 2, "0");
              case "d":
                return String(R.$W);
              case "dd":
                return W(L.weekdaysMin, R.$W, K, 2);
              case "ddd":
                return W(L.weekdaysShort, R.$W, K, 3);
              case "dddd":
                return K[R.$W];
              case "H":
                return String(T);
              case "HH":
                return C.s(T, 2, "0");
              case "h":
                return Q(1);
              case "hh":
                return Q(2);
              case "a":
                return se(T, H, !0);
              case "A":
                return se(T, H, !1);
              case "m":
                return String(H);
              case "mm":
                return C.s(H, 2, "0");
              case "s":
                return String(R.$s);
              case "ss":
                return C.s(R.$s, 2, "0");
              case "SSS":
                return C.s(R.$ms, 3, "0");
              case "Z":
                return B;
            }
            return null;
          }(he) || B.replace(":", "");
        });
      }, E.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, E.diff = function($, R, L) {
        var P, B = this, T = C.p(R), H = k($), F = (H.utcOffset() - this.utcOffset()) * r, K = this - H, ne = function() {
          return C.m(B, H);
        };
        switch (T) {
          case m:
            P = ne() / 12;
            break;
          case d:
            P = ne();
            break;
          case f:
            P = ne() / 3;
            break;
          case c:
            P = (K - F) / 6048e5;
            break;
          case u:
            P = (K - F) / 864e5;
            break;
          case l:
            P = K / s;
            break;
          case a:
            P = K / r;
            break;
          case o:
            P = K / n;
            break;
          default:
            P = K;
        }
        return L ? P : C.a(P);
      }, E.daysInMonth = function() {
        return this.endOf(d).$D;
      }, E.$locale = function() {
        return S[this.$L];
      }, E.locale = function($, R) {
        if (!$) return this.$L;
        var L = this.clone(), P = I($, R, !0);
        return P && (L.$L = P), L;
      }, E.clone = function() {
        return C.w(this.$d, this);
      }, E.toDate = function() {
        return new Date(this.valueOf());
      }, E.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, E.toISOString = function() {
        return this.$d.toISOString();
      }, E.toString = function() {
        return this.$d.toUTCString();
      }, O;
    }(), U = N.prototype;
    return k.prototype = U, [["$ms", i], ["$s", o], ["$m", a], ["$H", l], ["$W", u], ["$M", d], ["$y", m], ["$D", p]].forEach(function(O) {
      U[O[1]] = function(E) {
        return this.$g(E, O[0], O[1]);
      };
    }), k.extend = function(O, E) {
      return O.$i || (O(E, N, k), O.$i = !0), k;
    }, k.locale = I, k.isDayjs = Y, k.unix = function(O) {
      return k(1e3 * O);
    }, k.en = S[w], k.Ls = S, k.p = {}, k;
  });
})(Nv);
var oD = Nv.exports;
const A = /* @__PURE__ */ mp(oD);
function z(e, t) {
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
    ddd: Be(A(e).startOf("month"), "ddd"),
    basic: Be(A(e).startOf("month")),
    object: A(e).startOf("month")
  };
}
function cd(e) {
  return isNaN(A(e).daysInMonth()) ? [] : [...Iv(1, A(e).daysInMonth())];
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
  return D.createElement(
    "svg",
    { className: e, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor" },
    D.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M15.75 19.5L8.25 12l7.5-7.5", style: { color: t == null ? void 0 : t.text } })
  );
}, yD = ({ className: e = "w-6 h-6" }) => {
  const { calendarColors: t } = re(at);
  return D.createElement(
    "svg",
    { className: e, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", transform: "rotate(90)" },
    D.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M15.75 19.5L8.25 12l7.5-7.5", style: { color: t == null ? void 0 : t.text } })
  );
}, MD = ({ className: e = "w-6 h-6" }) => {
  const { calendarColors: t } = re(at);
  return D.createElement(
    "svg",
    { className: e, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", transform: "rotate(270)" },
    D.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M15.75 19.5L8.25 12l7.5-7.5", style: { color: t == null ? void 0 : t.text } })
  );
}, bD = ({ className: e = "w-6 h-6" }) => {
  const { calendarColors: t } = re(at);
  return D.createElement(
    "svg",
    { className: e, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor" },
    D.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M8.25 4.5l7.5 7.5-7.5 7.5", style: { color: t == null ? void 0 : t.text } })
  );
};
D.forwardRef((e, t) => D.createElement("div", { ref: t, className: "absolute z-20 h-4 w-4 rotate-45 mt-0.5 ml-[1.2rem] border-l border-t border-gray-300 bg-white dark:bg-slate-800 dark:border-slate-600" }));
const xD = ({ children: e, onClick: t, roundedFull: n = !1, selected: r = !1 }) => {
  const { accentColor: s, calendarColors: i } = re(at), o = X(() => `${n ? "rounded-full p-[0.45rem] focus:ring-0" : "w-full text-[14px] tracking-wide select-none px-3 rounded-md focus:ring-1"}, ${i == null ? void 0 : i.hoverBgClass}`, [i == null ? void 0 : i.hoverBgClass, n]), a = {
    color: i == null ? void 0 : i.activeText,
    backgroundColor: s
  }, l = {
    color: i == null ? void 0 : i.text
  };
  return D.createElement("button", { type: "button", className: o(), onClick: t, style: r ? a : l }, e);
};
var V = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {};
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
  })(V, function() {
    return function(n, r, s) {
      r.prototype.isBetween = function(i, o, a, l) {
        var u = s(i), c = s(o), d = (l = l || "()")[0] === "(", f = l[1] === ")";
        return (d ? this.isAfter(u, a) : !this.isBefore(u, a)) && (f ? this.isBefore(c, a) : !this.isAfter(c, a)) || (d ? this.isBefore(u, a) : !this.isAfter(u, a)) && (f ? this.isAfter(c, a) : !this.isBefore(c, a));
      };
    };
  });
})(YD);
var LD = ju;
A.extend(LD);
const SD = ({ calendarData: e, onClickPreviousDays: t, onClickDay: n, onClickNextDays: r }) => {
  const { period: s, minDate: i, maxDate: o, disabledDates: a, accentColor: l, calendarColors: u } = re(at), c = X((v) => {
    const M = `${e.date.year()}-${e.date.month() + 1}-${v}`;
    return {
      active: A(M).isSame(s.start) || A(M).isSame(s.end),
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
    return A(w).isSame(A(i)) ? !1 : A(w).isBefore(A(i));
  }, [e.date, i]), m = X((v, M) => {
    if (!o)
      return !1;
    const x = {
      previous: vn(e.date),
      current: e.date,
      next: jt(e.date)
    }[M], w = `${x.year()}-${x.month() + 1}-${v >= 10 ? v : "0" + v}`;
    return A(w).isSame(o) ? !1 : A(w).isAfter(A(o));
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
    let S = 0;
    return a == null || a.forEach((j) => {
      A(w).isAfter(j.startDate) && A(w).isBefore(j.endDate) && S++, (A(w).isSame(j.startDate) || A(w).isSame(j.endDate)) && S++;
    }), S > 0;
  }, [e.date, f, m, a]), h = X((v) => uD("flex items-center justify-center w-[40px] h-[40px] lg:w-[40px] lg:h-[40px] rounded-[6px]", c(v).active ? c(v).className : d()), [c, d]), _ = X((v, M) => {
    const y = {
      color: u == null ? void 0 : u.activeText,
      backgroundColor: l
    }, x = {
      color: l
    }, w = `${e.date.year()}-${e.date.month() + 1}-${v >= 10 ? v : "0" + v}`;
    return c(v).active ? y : Be(A()) === Be(A(w)) ? x : p(v, M) ? {
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
  return D.createElement(
    "div",
    { className: "grid grid-cols-7 gap-y-0.5 my-1" },
    e.days.previous.map((v, M) => D.createElement("button", { type: "button", key: M, disabled: p(v, "previous"), className: `flex items-center justify-center text-[14px] select-none w-[40px] h-[40px] lg:w-[40px] lg:h-[40px] rounded-[6px] ${u == null ? void 0 : u.hoverBgClass}`, onClick: () => t(v), style: {
      color: p(v, "previous") ? u == null ? void 0 : u.disabled : u == null ? void 0 : u.otherMonth,
      opacity: p(M, "next") ? 0.5 : 1
    } }, v)),
    e.days.current.map((v, M) => D.createElement("button", { type: "button", key: M, disabled: p(v, "current"), className: `text-[14px] select-none ${h(v)}`, onClick: () => {
      n(v);
    }, style: _(v, "current") }, v)),
    e.days.next.map((v, M) => D.createElement("button", { type: "button", key: M, disabled: p(M, "next"), className: `flex items-center text-[14px] justify-center w-[40px] h-[40px] lg:w-[40px] lg:h-[40px] select-none rounded-[6px] ${u == null ? void 0 : u.hoverBgClass}`, onClick: () => {
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
  })(V, function() {
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
      for (var M = (h = _.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(I, k, C) {
        var N = C && C.toUpperCase();
        return k || v[C] || n[C] || v[N].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(U, O, E) {
          return O || E.slice(1);
        });
      })).match(r), y = M.length, x = 0; x < y; x += 1) {
        var w = M[x], S = m[w], j = S && S[0], Y = S && S[1];
        M[x] = Y ? { regex: j, parser: Y } : w.replace(/^\[|\]$/g, "");
      }
      return function(I) {
        for (var k = {}, C = 0, N = 0; C < y; C += 1) {
          var U = M[C];
          if (typeof U == "string") N += U.length;
          else {
            var O = U.regex, E = U.parser, $ = I.slice(N), R = O.exec($)[0];
            E.call(k, R), I = I.replace(R, "");
          }
        }
        return function(L) {
          var P = L.afternoon;
          if (P !== void 0) {
            var B = L.hours;
            P ? B < 12 && (L.hours += 12) : B === 12 && (L.hours = 0), delete L.afternoon;
          }
        }(k), k;
      };
    }
    return function(h, _, v) {
      v.p.customParseFormat = !0, h && h.parseTwoDigitYear && (l = h.parseTwoDigitYear);
      var M = _.prototype, y = M.parse;
      M.parse = function(x) {
        var w = x.date, S = x.utc, j = x.args;
        this.$u = S;
        var Y = j[1];
        if (typeof Y == "string") {
          var I = j[2] === !0, k = j[3] === !0, C = I || k, N = j[2];
          k && (N = j[2]), a = this.$locale(), !I && N && (a = v.Ls[N]), this.$d = function($, R, L) {
            try {
              if (["x", "X"].indexOf(R) > -1) return new Date((R === "X" ? 1e3 : 1) * $);
              var P = p(R)($), B = P.year, T = P.month, H = P.day, F = P.hours, K = P.minutes, ne = P.seconds, G = P.milliseconds, W = P.zone, Q = /* @__PURE__ */ new Date(), se = H || (B || T ? 1 : Q.getDate()), he = B || Q.getFullYear(), le = 0;
              B && !T || (le = T > 0 ? T - 1 : Q.getMonth());
              var Ce = F || 0, Xe = K || 0, Vt = ne || 0, lt = G || 0;
              return W ? new Date(Date.UTC(he, le, se, Ce, Xe, Vt, lt + 60 * W.offset * 1e3)) : L ? new Date(Date.UTC(he, le, se, Ce, Xe, Vt, lt)) : new Date(he, le, se, Ce, Xe, Vt, lt);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(w, Y, S), this.init(), N && N !== !0 && (this.$L = this.locale(N).$L), C && w != this.format(Y) && (this.$d = /* @__PURE__ */ new Date("")), a = {};
        } else if (Y instanceof Array) for (var U = Y.length, O = 1; O <= U; O += 1) {
          j[1] = Y[O - 1];
          var E = v.apply(this, j);
          if (E.isValid()) {
            this.$d = E.$d, this.$L = E.$L, this.init();
            break;
          }
          O === U && (this.$d = /* @__PURE__ */ new Date(""));
        }
        else y.call(this, x);
      };
    };
  });
})(kD);
var DD = Pu;
const TD = ({ clickMonth: e }) => {
  const { i18n: t, inputText: n } = re(at);
  return dd(t), A.extend(DD), D.createElement("div", { className: "w-full grid grid-cols-4 text-black min-h-[180px] gap-[10px]" }, aD.map((r) => D.createElement(
    xD,
    { key: r, padding: "py-3", onClick: () => {
      e(r);
    }, selected: n ? r - 1 === A(n, "DD.MM.YYYY").month() : r - 1 === A().month() },
    D.createElement(D.Fragment, null, A(`2022-${r}-01`).locale(t).format("MMM"))
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
  return D.createElement("div", { className: "grid grid-cols-7 py-2 mt-2 uppercase" }, iD.map((s) => D.createElement("div", { key: s, className: "tracking-wide font-[600] select-none text-[12px] text-center", style: { color: n == null ? void 0 : n.text } }, dD(cD(A(`2022-11-${6 + (s + r)}`).locale(e).format("ddd"))))));
}, jD = ({ selectedYear: e, startYear: t, clickYear: n }) => {
  const { accentColor: r, calendarColors: s } = re(at), i = {
    color: r
  }, o = {
    color: s == null ? void 0 : s.text
  };
  return D.createElement("div", { className: "w-full flex flex-row" }, Iv(t, t + 3).map((a, l) => D.createElement(
    "div",
    { key: l, onClick: () => {
      n(a);
    }, className: `cursor-pointer text-[14px] select-none text-[#707070] p-2 font-[600] rounded-[6px] ${s == null ? void 0 : s.hoverBgClass}`, style: a === e ? i : o },
    D.createElement(D.Fragment, null, a)
  )));
}, PD = ({ date: e, onClickPrevious: t, onClickNext: n, changeMonth: r, changeYear: s }) => {
  const { period: i, changePeriod: o, changeDayHover: a, changeDatepickerValue: l, hideDatepicker: u, asSingle: c, i18n: d, startWeekOn: f, input: m, calendarColors: p } = re(at);
  dd(d);
  const [h, _] = oe(!1), [v, M] = oe(e.year()), [y, x] = oe(e.year() - 3), w = X(() => _D(vn(e), hD(fD(e).ddd, f)), [e, f]), S = X(() => cd(Be(e)), [e]), j = X(() => vD(vn(e), lD - (w().length + S().length)), [S, e, w]), Y = X(($) => {
    setTimeout(() => {
      r($), _(!h);
    }, 250);
  }, [r, h]), I = X(($) => {
    s($);
  }, [s]), k = X(($) => {
    x($ + 1);
  }, []), C = X(($) => {
    x($ - 1);
  }, []), N = X(($, R = e.month() + 1, L = e.year()) => {
    const P = `${L}-${R}-${$}`;
    let B, T = null;
    function H(F, K) {
      const ne = m == null ? void 0 : m.current;
      l({
        startDate: A(F).format("YYYY-MM-DD"),
        endDate: A(K).format("YYYY-MM-DD")
      }, ne), u();
    }
    if (i.start && i.end && (a && a(null), o({
      start: null,
      end: null
    })), !i.start && !i.end || i.start && i.end)
      !i.start && !i.end && a(P), B = P, c && (T = P, H(P, P));
    else if (i.start && !i.end) {
      const F = A(P).isSame(A(i.start)) || A(P).isAfter(A(i.start));
      B = F ? i.start : P, T = F ? P : i.start;
    } else {
      const F = A(P).isSame(A(i.end)) || A(P).isBefore(A(i.end));
      B = F ? P : i.start, T = F ? i.end : P;
    }
    T && B || o({
      start: B,
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
  ]), U = X(($) => {
    const R = vn(e);
    N($, R.month() + 1, R.year()), t();
  }, [N, e, t]), O = X(($) => {
    const R = jt(e);
    N($, R.month() + 1, R.year()), n();
  }, [N, e, n]);
  ue(() => {
    M(e.year());
  }, [e]);
  const E = pe(() => ({
    date: e,
    days: {
      previous: w(),
      current: S(),
      next: j()
    }
  }), [S, e, j, w]);
  return D.createElement(
    "div",
    { className: "w-full md:w-[297px] md:min-w-[297px]" },
    D.createElement(
      "div",
      { className: "flex items-center space-x-1.5 border-b px-2 py-1.5", style: { borderColor: p == null ? void 0 : p.border } },
      D.createElement(
        "div",
        { className: "flex flex-1 items-center justify-center" },
        D.createElement("div", { className: "w-full flex justify-center text-[20px] leading-[25px] select-none py-[5px] font-[600]", style: { color: p == null ? void 0 : p.text } }, E.date.locale(d).format("MMMM"))
      ),
      D.createElement(
        "div",
        { className: "absolute right-[20px] top-[29px]" },
        D.createElement("div", { onClick: () => {
          _(!h);
        }, className: "cursor-pointer" }, h ? D.createElement(yD, { className: "h-5 w-5" }) : D.createElement(MD, { className: "h-5 w-5" }))
      )
    ),
    h ? D.createElement(
      "div",
      { className: "px-0.5 sm:px-2 min-h-[303px] flex items-center" },
      D.createElement(TD, { clickMonth: Y })
    ) : D.createElement("div", { className: "px-0.5 sm:px-2 min-h-[295px]" }, !h && D.createElement(
      D.Fragment,
      null,
      D.createElement(ED, null),
      D.createElement(SD, { calendarData: E, onClickPreviousDays: U, onClickDay: N, onClickNextDays: O })
    )),
    D.createElement(
      "div",
      { className: "flex items-center border-t px-2 py-1.5", style: { borderColor: p == null ? void 0 : p.border } },
      D.createElement(
        "div",
        { className: "flex flex-1 items-center justify-center" },
        D.createElement(
          "div",
          { className: "w-full flex justify-between leading-[25px] py-[10px]" },
          D.createElement(
            "div",
            { onClick: () => {
              C(y);
            }, className: "cursor-pointer" },
            D.createElement(gD, { className: "h-5 w-5 ml-[10px]" })
          ),
          D.createElement(
            "div",
            { onClick: () => {
              k(y);
            }, className: "cursor-pointer" },
            D.createElement(bD, { className: "h-5 w-5 mr-[10px]" })
          )
        ),
        D.createElement(
          "div",
          { className: "absolute" },
          D.createElement(jD, { selectedYear: v, startYear: y, clickYear: I })
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
    const k = h.current;
    return k && typeof u != "undefined" && typeof u.input == "function" ? u == null ? void 0 : u.input(k) : `relative p-[10px] pl-[40px] w-full h-[40px] rounded-[3px] tracking-wide font-light text-sm placeholder-gray-400  border-[#C4C4C4] bg-white focus:border-fo-accent focus:ring-0  hover:bg-[#FFFFFF] hover:disabled:border-[#C4C4C4] hover:disabled:border-[#DDDDDD] disabled:border-[#C4C4C4] disabled:cursor-not-allowed disabled:bg-[#FFFFFF] active:ring-0 active:border-[#0493F2] active:border-2 ${typeof i == "string" ? i.replace("border-color", "border") : ""}`;
  }, [u, i]), x = X(() => {
    const k = h.current;
    return k && typeof u != "undefined" && typeof u.input == "function" ? u == null ? void 0 : u.input(k) : `relative p-[10px] pl-[40px] w-full h-[40px] rounded-[3px] tracking-wide font-light text-sm placeholder-gray-400 bg-white focus:border-fo-accent focus:ring-0  hover:bg-[#FFFFFF] hover:disabled:border-[#C4C4C4] hover:disabled:border-[#DDDDDD] disabled:border-[#C4C4C4] disabled:cursor-not-allowed disabled:bg-[#FFFFFF] active:ring-0 active:border-[#0493F2] active:border-2 ${typeof i == "string" ? i.replace("hover-border", "border") : ""}`;
  }, [u, i]), w = X(() => {
    const k = /text-(\[[^[\]]+\]|[\w-]+)/g;
    return i && (typeof i == "string" ? i : "").match(k), "bg-red-500";
  }, [i]), S = X(() => {
    const k = /icon-fill-(\[[^[\]]+\]|[\w-]+)/g, N = i ? (typeof i == "string" ? i : "").match(k) : "";
    return N ? N.join(" ").replace("icon-", "") : "";
  }, [i]), j = X(() => {
    const k = /icon-hover-fill-(\[[^[\]]+\]|[\w-]+)/g, N = i ? (typeof i == "string" ? i : "").match(k) : "";
    return N ? N.join(" ").replace("icon-hover-", "") : "";
  }, [i]), Y = X(() => {
    const k = /hidden/g, N = i ? (typeof i == "string" ? i : "").match(k) : "";
    return `absolute p-0 m-0 top-[10px] left-[17px] cursor-pointer  ${N ? N.join(" ") : ""}`;
  }, [i]);
  ue(() => {
    const k = t == null ? void 0 : t.current;
    h.current;
    const C = _.current;
    function N() {
      k && k.classList.contains("hidden") && (k.classList.remove("hidden"), k.classList.add("block"), window.innerWidth > 767 && window.screen.height - 100 < k.getBoundingClientRect().bottom && (k.classList.add("bottom-full"), k.classList.add("mb-2.5"), k.classList.remove("mt-2.5")), setTimeout(() => {
        k.classList.remove("translate-y-4"), k.classList.remove("opacity-0"), k.classList.add("translate-y-0"), k.classList.add("opacity-1");
      }, 1));
    }
    return k && C && !s && C.addEventListener("click", N), () => {
      C && !s && C.removeEventListener("click", N);
    };
  }, [t, n]), ue(() => {
    const k = _.current, C = () => {
      M(!0);
    };
    return k && k.addEventListener("mouseover", C), () => {
      k && k.removeEventListener("mouseover", C);
    };
  }, []), ue(() => {
    const k = _.current, C = () => {
      M(!1);
    };
    return k && k.addEventListener("mouseout", C), () => {
      k && k.removeEventListener("mouseout", C);
    };
  }, []);
  const I = X(() => {
    const k = t == null ? void 0 : t.current;
    k && k.classList.contains("hidden") && (k.classList.remove("hidden"), k.classList.add("block"), window.innerWidth > 767 && window.screen.height - 100 < k.getBoundingClientRect().bottom && (k.classList.add("bottom-full"), k.classList.add("mb-2.5"), k.classList.remove("mt-2.5")), setTimeout(() => {
      k.classList.remove("translate-y-4"), k.classList.remove("opacity-0"), k.classList.add("translate-y-0"), k.classList.add("opacity-1");
    }, 1));
  }, [t]);
  return D.createElement(
    "div",
    { className: "relative" },
    D.createElement("input", { ref: h, type: "text", placeholder: "DD.MM.YYYY", maxLength: 10, className: v ? x() : y(), disabled: s, readOnly: o, value: r, id: a, name: l, autoComplete: "off", role: "presentation", onChange: (k) => {
      p(k.target.value);
    }, style: c ? {
      borderColor: m
    } : { lineHeight: "20px" } }),
    D.createElement("div", { ref: _, onClick: () => {
      s || I();
    }, className: Y() }, s ? D.createElement(
      "svg",
      { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
      D.createElement(
        "g",
        { clipPath: "url(#clip0_739_2102)" },
        D.createElement("path", { d: "M16.6667 2.50004H15.8334V0.833374H14.1667V2.50004H5.83342V0.833374H4.16675V2.50004H3.33341C2.41675 2.50004 1.66675 3.25004 1.66675 4.16671V17.5C1.66675 18.4167 2.41675 19.1667 3.33341 19.1667H16.6667C17.5834 19.1667 18.3334 18.4167 18.3334 17.5V4.16671C18.3334 3.25004 17.5834 2.50004 16.6667 2.50004ZM16.6667 17.5H3.33341V6.66671H16.6667V17.5Z", fill: "#C4C4C4" })
      ),
      D.createElement(
        "defs",
        null,
        D.createElement(
          "clipPath",
          { id: "clip0_739_2102" },
          D.createElement("rect", { width: "20", height: "20", fill: "white" })
        )
      )
    ) : D.createElement(
      "svg",
      { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
      D.createElement(
        "g",
        { clipPath: "url(#clip0_739_2084)" },
        D.createElement("path", { className: v ? j() : S(), d: "M16.6667 2.50004H15.8334V0.833374H14.1667V2.50004H5.83342V0.833374H4.16675V2.50004H3.33341C2.41675 2.50004 1.66675 3.25004 1.66675 4.16671V17.5C1.66675 18.4167 2.41675 19.1667 3.33341 19.1667H16.6667C17.5834 19.1667 18.3334 18.4167 18.3334 17.5V4.16671C18.3334 3.25004 17.5834 2.50004 16.6667 2.50004ZM16.6667 17.5H3.33341V6.66671H16.6667V17.5Z" })
      ),
      D.createElement(
        "defs",
        null,
        D.createElement(
          "clipPath",
          { id: "clip0_739_2084" },
          D.createElement("rect", { width: "20", height: "20", fill: "white" })
        )
      )
    )),
    d && r === "" && D.createElement("span", { className: `absolute text-[12px] left-[44px] top-[11px] ${s ? "" : w()}` }, d),
    D.createElement(
      "div",
      { className: `absolute flex flex-col top-0 text-[12px] left-[44px] ${s ? "" : w()}` },
      f && D.createElement(
        D.Fragment,
        null,
        D.createElement("span", { className: "absolute top-[2px] leading-[15px]" }, f)
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
const $D = ({ accentColor: e = "", invalidColor: t = "", value: n = null, onChange: r, showFooter: s = !0, configs: i = null, asSingle: o = !0, placeholder: a = null, separator: l = "~", startFrom: u = null, i18n: c = ld, disabled: d = !1, inputClassName: f = null, containerClassName: m = null, toggleClassName: p = null, toggleIcon: h = void 0, displayFormat: _ = ud, readOnly: v = !0, minDate: M = null, maxDate: y = null, disabledDates: x = null, inputId: w, inputName: S, startWeekOn: j = "mon", classNames: Y = void 0, label: I = "Period", emptyLabel: k = "", fillLabel: C = "", invalid: N = !1, invalidText: U = "", calendarColors: O = {
  disabled: "#ddd",
  activeText: "#fff",
  text: "#1d1d1d",
  hoverBgClass: "hover:bg-[#f6f6f6]",
  background: "#fff",
  border: "#e8e8e8",
  otherMonth: "#707070"
} }) => {
  const E = q(null), $ = q(null), R = q(null), [L, P] = oe(A()), [B, T] = oe(jt(L)), [H, F] = oe({
    start: null,
    end: null
  }), [K, ne] = oe(null), [G, W] = oe(""), [Q, se] = oe(D.createRef());
  CD(E, () => {
    E.current && he();
  });
  const he = X(() => {
    const ce = $.current;
    ce && ce.classList.contains("block") && (ce.classList.remove("block"), ce.classList.remove("translate-y-0"), ce.classList.remove("opacity-1"), ce.classList.add("translate-y-4"), ce.classList.add("opacity-0"), setTimeout(() => {
      ce.classList.remove("bottom-full"), ce.classList.add("hidden"), ce.classList.add("mb-2.5"), ce.classList.add("mt-2.5");
    }, 300));
  }, []), le = X((ce) => {
    const ie = A(Be(ce)), ze = A(Be(B));
    (ie.isSame(ze) || ie.isAfter(ze)) && T(jt(ce)), P(ce);
  }, [B]), Ce = X(() => {
    P(vn(L));
  }, [L]), Xe = X(() => {
    le(jt(L));
  }, [L, le]), Vt = X((ce) => {
    le(A(`${L.year()}-${ce < 10 ? "0" : ""}${ce}-01`));
  }, [L, le]), lt = X((ce) => {
    le(A(`${ce}-${L.month() + 1}-01`));
  }, [L, le]);
  ue(() => {
    const ce = E.current, ie = $.current, ze = R.current;
    if (ce && ie && ze) {
      const He = ce.getBoundingClientRect(), Sd = window.innerWidth / 2;
      (He.right - He.x) / 2 + He.x > Sd && (ze.classList.add("right-0"), ze.classList.add("mr-3.5"), ie.classList.add("right-0"));
    }
  }, []), ue(() => {
    if (n && n.startDate && n.endDate) {
      const ce = A(n.startDate), ie = A(n.endDate);
      ce.isValid() && ie.isValid() && (ce.isSame(ie) || ce.isBefore(ie)) && (F({
        start: Be(ce),
        end: Be(ie)
      }), W(`${Be(ce, _)}${o ? "" : ` ${l} ${Be(ie, _)}`}`));
    }
    n && n.startDate === null && n.endDate === null && (F({
      start: null,
      end: null
    }), W(""));
  }, [o, n, _, l]), ue(() => {
    u && A(u).isValid() && ((n == null ? void 0 : n.startDate) != null ? (P(A(n.startDate)), T(jt(A(n.startDate)))) : (P(A(u)), T(jt(A(u)))));
  }, [u, n]);
  const sr = X((ce) => {
    const ie = ce.split(".").join("");
    if (ie.length === 8) {
      parseInt(ie.substr(0, 2)) === 29 && parseInt(ie.substr(4, 4)) % 4 !== 0 ? W(`28.${ie.substr(2, 2)}.${ie.substr(4, ie.length)}`) : W(`${ie.substr(0, 2)}.${ie.substr(2, 2)}.${ie.substr(4, ie.length)}`);
      const ze = /* @__PURE__ */ new Date(`${ie.substr(4, 4)}/${ie.substr(2, 2)}/${ie.substr(0, 2)}`), He = A(ze);
      He.isValid() ? (F({
        start: Be(He),
        end: Be(He)
      }), r({
        startDate: Be(He),
        endDate: Be(He)
      }), P(He)) : r({
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
    calendarContainer: $,
    arrowContainer: R,
    hideDatepicker: he,
    period: H,
    changePeriod: (ce) => F(ce),
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
    inputName: S,
    startWeekOn: j,
    classNames: Y,
    onChange: r,
    input: Q,
    emptyLabel: k,
    fillLabel: C,
    invalid: N,
    invalidText: U,
    invalidColor: t,
    calendarColors: O
  }), [
    o,
    e,
    i,
    he,
    H,
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
    S,
    j,
    Y,
    Q,
    k,
    C,
    N,
    U,
    t,
    O
  ]);
  return D.createElement(
    at.Provider,
    { value: tl },
    D.createElement(
      "div",
      { className: `relative w-full text-gray-700 ${m}`, ref: E },
      D.createElement("p", { className: `text-[14px] leading-[18px] select-none mb-[8px] text-${d ? "[#C4C4C4]" : "[#707070]"}` }, I),
      D.createElement(AD, { setContextRef: se }),
      N && D.createElement("p", { className: "text-[12px] mt-[8px]", style: { color: t } }, U || "Please specify the details!"),
      D.createElement(
        "div",
        { className: "transition-all ease-out duration-300 absolute z-10 mt-[1px] text-sm lg:text-xs 2xl:text-sm translate-y-4 opacity-0 hidden", ref: $ },
        D.createElement(
          "div",
          { className: "mt-2.5 shadow-sm border py-0.5 rounded-[12px]", style: {
            background: O == null ? void 0 : O.background,
            borderColor: O == null ? void 0 : O.border
          } },
          D.createElement(
            "div",
            { className: "flex flex-col lg:flex-row" },
            D.createElement(
              "div",
              { className: "flex items-stretch flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-1.5" },
              D.createElement(PD, { date: L, onClickPrevious: Ce, onClickNext: Xe, changeMonth: Vt, changeYear: lt })
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
    e.exports = r(A);
  })(V, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "af", weekdays: "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"), months: "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"), weekStart: 1, weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"), monthsShort: "Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"), weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, relativeTime: { future: "oor %s", past: "%s gelede", s: "'n paar sekondes", m: "'n minuut", mm: "%d minute", h: "'n uur", hh: "%d ure", d: "'n dag", dd: "%d dae", M: "'n maand", MM: "%d maande", y: "'n jaar", yy: "%d jaar" } };
    return s.default.locale(i, null, !0), i;
  });
})(HD);
var OD = Wo, RD = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "am", weekdays: "እሑድ_ሰኞ_ማክሰኞ_ረቡዕ_ሐሙስ_አርብ_ቅዳሜ".split("_"), weekdaysShort: "እሑድ_ሰኞ_ማክሰ_ረቡዕ_ሐሙስ_አርብ_ቅዳሜ".split("_"), weekdaysMin: "እሑ_ሰኞ_ማክ_ረቡ_ሐሙ_አር_ቅዳ".split("_"), months: "ጃንዋሪ_ፌብሯሪ_ማርች_ኤፕሪል_ሜይ_ጁን_ጁላይ_ኦገስት_ሴፕቴምበር_ኦክቶበር_ኖቬምበር_ዲሴምበር".split("_"), monthsShort: "ጃንዋ_ፌብሯ_ማርች_ኤፕሪ_ሜይ_ጁን_ጁላይ_ኦገስ_ሴፕቴ_ኦክቶ_ኖቬም_ዲሴም".split("_"), weekStart: 1, yearStart: 4, relativeTime: { future: "በ%s", past: "%s በፊት", s: "ጥቂት ሰከንዶች", m: "አንድ ደቂቃ", mm: "%d ደቂቃዎች", h: "አንድ ሰዓት", hh: "%d ሰዓታት", d: "አንድ ቀን", dd: "%d ቀናት", M: "አንድ ወር", MM: "%d ወራት", y: "አንድ ዓመት", yy: "%d ዓመታት" }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "MMMM D ፣ YYYY", LLL: "MMMM D ፣ YYYY HH:mm", LLLL: "dddd ፣ MMMM D ፣ YYYY HH:mm" }, ordinal: function(o) {
      return o + "ኛ";
    } };
    return s.default.locale(i, null, !0), i;
  });
})(ND);
var ID = Uo, FD = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
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
var zD = Ko, BD = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
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
var UD = Go, KD = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
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
var JD = Jo, qD = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
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
var ZD = qo, QD = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
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
var tT = Xo, nT = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
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
var oT = Zo, sT = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
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
var aT = Qo, lT = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
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
var cT = es, dT = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "az", weekdays: "Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"), weekdaysShort: "Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"), weekdaysMin: "Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"), months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"), monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"), weekStart: 1, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY г.", LLL: "D MMMM YYYY г., H:mm", LLLL: "dddd, D MMMM YYYY г., H:mm" }, relativeTime: { future: "%s sonra", past: "%s əvvəl", s: "bir neçə saniyə", m: "bir dəqiqə", mm: "%d dəqiqə", h: "bir saat", hh: "%d saat", d: "bir gün", dd: "%d gün", M: "bir ay", MM: "%d ay", y: "bir il", yy: "%d il" }, ordinal: function(o) {
      return o;
    } };
    return s.default.locale(i, null, !0), i;
  });
})(fT);
var mT = ts, pT = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
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
var _T = ns, vT = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "bi", weekdays: "Sande_Mande_Tusde_Wenesde_Tosde_Fraede_Sarade".split("_"), months: "Januari_Februari_Maj_Eprel_Mei_Jun_Julae_Okis_Septemba_Oktoba_Novemba_Disemba".split("_"), weekStart: 1, weekdaysShort: "San_Man_Tus_Wen_Tos_Frae_Sar".split("_"), monthsShort: "Jan_Feb_Maj_Epr_Mai_Jun_Jul_Oki_Sep_Okt_Nov_Dis".split("_"), weekdaysMin: "San_Ma_Tu_We_To_Fr_Sar".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, relativeTime: { future: "lo %s", past: "%s bifo", s: "sam seken", m: "wan minit", mm: "%d minit", h: "wan haoa", hh: "%d haoa", d: "wan dei", dd: "%d dei", M: "wan manis", MM: "%d manis", y: "wan yia", yy: "%d yia" } };
    return s.default.locale(i, null, !0), i;
  });
})(gT);
var yT = rs, MT = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "bm", weekdays: "Kari_Ntɛnɛn_Tarata_Araba_Alamisa_Juma_Sibiri".split("_"), months: "Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_Mɛkalo_Zuwɛnkalo_Zuluyekalo_Utikalo_Sɛtanburukalo_ɔkutɔburukalo_Nowanburukalo_Desanburukalo".split("_"), weekStart: 1, weekdaysShort: "Kar_Ntɛ_Tar_Ara_Ala_Jum_Sib".split("_"), monthsShort: "Zan_Few_Mar_Awi_Mɛ_Zuw_Zul_Uti_Sɛt_ɔku_Now_Des".split("_"), weekdaysMin: "Ka_Nt_Ta_Ar_Al_Ju_Si".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "MMMM [tile] D [san] YYYY", LLL: "MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm", LLLL: "dddd MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm" }, relativeTime: { future: "%s kɔnɔ", past: "a bɛ %s bɔ", s: "sanga dama dama", m: "miniti kelen", mm: "miniti %d", h: "lɛrɛ kelen", hh: "lɛrɛ %d", d: "tile kelen", dd: "tile %d", M: "kalo kelen", MM: "kalo %d", y: "san kelen", yy: "san %d" } };
    return s.default.locale(i, null, !0), i;
  });
})(bT);
var xT = os, wT = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
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
var LT = ss, ST = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
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
var DT = is, TT = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "bo", weekdays: "གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split("_"), weekdaysShort: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"), weekdaysMin: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"), months: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"), monthsShort: "ཟླ་དང་པོ_ཟླ་གཉིས་པ_ཟླ་གསུམ་པ_ཟླ་བཞི་པ_ཟླ་ལྔ་པ_ཟླ་དྲུག་པ_ཟླ་བདུན་པ_ཟླ་བརྒྱད་པ_ཟླ་དགུ་པ_ཟླ་བཅུ་པ_ཟླ་བཅུ་གཅིག་པ_ཟླ་བཅུ་གཉིས་པ".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "A h:mm", LTS: "A h:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm", LLLL: "dddd, D MMMM YYYY, A h:mm" }, relativeTime: { future: "%s ལ་", past: "%s སྔོན་ལ་", s: "ཏོག་ཙམ་", m: "སྐར་མ་གཅིག་", mm: "སྐར་མ་ %d", h: "ཆུ་ཚོད་གཅིག་", hh: "ཆུ་ཚོད་ %d", d: "ཉིན་གཅིག་", dd: "ཉིན་ %d", M: "ཟླ་བ་གཅིག་", MM: "ཟླ་བ་ %d", y: "ལོ་གཅིག་", yy: "ལོ་ %d" } };
    return s.default.locale(i, null, !0), i;
  });
})(ET);
var jT = as, PT = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
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
var CT = ls, $T = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "ca", weekdays: "Diumenge_Dilluns_Dimarts_Dimecres_Dijous_Divendres_Dissabte".split("_"), weekdaysShort: "Dg._Dl._Dt._Dc._Dj._Dv._Ds.".split("_"), weekdaysMin: "Dg_Dl_Dt_Dc_Dj_Dv_Ds".split("_"), months: "Gener_Febrer_Març_Abril_Maig_Juny_Juliol_Agost_Setembre_Octubre_Novembre_Desembre".split("_"), monthsShort: "Gen._Febr._Març_Abr._Maig_Juny_Jul._Ag._Set._Oct._Nov._Des.".split("_"), weekStart: 1, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM [de] YYYY", LLL: "D MMMM [de] YYYY [a les] H:mm", LLLL: "dddd D MMMM [de] YYYY [a les] H:mm", ll: "D MMM YYYY", lll: "D MMM YYYY, H:mm", llll: "ddd D MMM YYYY, H:mm" }, relativeTime: { future: "d'aquí %s", past: "fa %s", s: "uns segons", m: "un minut", mm: "%d minuts", h: "una hora", hh: "%d hores", d: "un dia", dd: "%d dies", M: "un mes", MM: "%d mesos", y: "un any", yy: "%d anys" }, ordinal: function(o) {
      return "" + o + (o === 1 || o === 3 ? "r" : o === 2 ? "n" : o === 4 ? "t" : "è");
    } };
    return s.default.locale(i, null, !0), i;
  });
})(HT);
var OT = us, RT = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
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
var IT = cs, FT = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "cv", weekdays: "вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун".split("_"), months: "кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав".split("_"), weekStart: 1, weekdaysShort: "выр_тун_ытл_юн_кӗҫ_эрн_шӑм".split("_"), monthsShort: "кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш".split("_"), weekdaysMin: "вр_тн_ыт_юн_кҫ_эр_шм".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD-MM-YYYY", LL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]", LLL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm", LLLL: "dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm" } };
    return s.default.locale(i, null, !0), i;
  });
})(VT);
var zT = ds, BT = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "cy", weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"), months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"), weekStart: 1, weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"), monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"), weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, relativeTime: { future: "mewn %s", past: "%s yn ôl", s: "ychydig eiliadau", m: "munud", mm: "%d munud", h: "awr", hh: "%d awr", d: "diwrnod", dd: "%d diwrnod", M: "mis", MM: "%d mis", y: "blwyddyn", yy: "%d flynedd" } };
    return s.default.locale(i, null, !0), i;
  });
})(WT);
var UT = fs, KT = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "da", weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"), weekdaysShort: "søn._man._tirs._ons._tors._fre._lør.".split("_"), weekdaysMin: "sø._ma._ti._on._to._fr._lø.".split("_"), months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"), monthsShort: "jan._feb._mar._apr._maj_juni_juli_aug._sept._okt._nov._dec.".split("_"), weekStart: 1, ordinal: function(o) {
      return o + ".";
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd [d.] D. MMMM YYYY [kl.] HH:mm" }, relativeTime: { future: "om %s", past: "%s siden", s: "få sekunder", m: "et minut", mm: "%d minutter", h: "en time", hh: "%d timer", d: "en dag", dd: "%d dage", M: "en måned", MM: "%d måneder", y: "et år", yy: "%d år" } };
    return s.default.locale(i, null, !0), i;
  });
})(GT);
var JT = ms, qT = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
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
var ZT = ps, QT = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
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
var tE = hs, nE = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
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
var oE = _s, sE = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "dv", weekdays: "އާދިއްތަ_ހޯމަ_އަންގާރަ_ބުދަ_ބުރާސްފަތި_ހުކުރު_ހޮނިހިރު".split("_"), months: "ޖެނުއަރީ_ފެބްރުއަރީ_މާރިޗު_އޭޕްރީލު_މޭ_ޖޫން_ޖުލައި_އޯގަސްޓު_ސެޕްޓެމްބަރު_އޮކްޓޯބަރު_ނޮވެމްބަރު_ޑިސެމްބަރު".split("_"), weekStart: 7, weekdaysShort: "އާދިއްތަ_ހޯމަ_އަންގާރަ_ބުދަ_ބުރާސްފަތި_ހުކުރު_ހޮނިހިރު".split("_"), monthsShort: "ޖެނުއަރީ_ފެބްރުއަރީ_މާރިޗު_އޭޕްރީލު_މޭ_ޖޫން_ޖުލައި_އޯގަސްޓު_ސެޕްޓެމްބަރު_އޮކްޓޯބަރު_ނޮވެމްބަރު_ޑިސެމްބަރު".split("_"), weekdaysMin: "އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "D/M/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, relativeTime: { future: "ތެރޭގައި %s", past: "ކުރިން %s", s: "ސިކުންތުކޮޅެއް", m: "މިނިޓެއް", mm: "މިނިޓު %d", h: "ގަޑިއިރެއް", hh: "ގަޑިއިރު %d", d: "ދުވަހެއް", dd: "ދުވަސް %d", M: "މަހެއް", MM: "މަސް %d", y: "އަހަރެއް", yy: "އަހަރު %d" } };
    return s.default.locale(i, null, !0), i;
  });
})(iE);
var aE = vs, lE = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "el", weekdays: "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"), weekdaysShort: "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"), weekdaysMin: "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"), months: "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"), monthsShort: "Ιαν_Φεβ_Μαρ_Απρ_Μαι_Ιουν_Ιουλ_Αυγ_Σεπτ_Οκτ_Νοε_Δεκ".split("_"), ordinal: function(o) {
      return o;
    }, weekStart: 1, relativeTime: { future: "σε %s", past: "πριν %s", s: "μερικά δευτερόλεπτα", m: "ένα λεπτό", mm: "%d λεπτά", h: "μία ώρα", hh: "%d ώρες", d: "μία μέρα", dd: "%d μέρες", M: "ένα μήνα", MM: "%d μήνες", y: "ένα χρόνο", yy: "%d χρόνια" }, formats: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" } };
    return s.default.locale(i, null, !0), i;
  });
})(uE);
var cE = gs, dE = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "en-au", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), weekStart: 1, weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" } };
    return s.default.locale(i, null, !0), i;
  });
})(fE);
var mE = ys, pE = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
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
var _E = Ms, vE = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "en-ie", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), weekStart: 1, weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" } };
    return s.default.locale(i, null, !0), i;
  });
})(gE);
var yE = bs, ME = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "en-il", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" } };
    return s.default.locale(i, null, !0), i;
  });
})(bE);
var xE = xs, wE = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
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
var LE = ws, SE = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
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
var DE = Ys, TE = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "en-sg", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), weekStart: 1, weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" } };
    return s.default.locale(i, null, !0), i;
  });
})(EE);
var jE = Ls, PE = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
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
var CE = Ss, $E = /* @__PURE__ */ z({
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
  })(V, function() {
    return { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(n) {
      var r = ["th", "st", "nd", "rd"], s = n % 100;
      return "[" + n + (r[(s - 20) % 10] || r[s] || r[0]) + "]";
    } };
  });
})(HE);
var OE = ks, Im = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "eo", weekdays: "dimanĉo_lundo_mardo_merkredo_ĵaŭdo_vendredo_sabato".split("_"), months: "januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"), weekStart: 1, weekdaysShort: "dim_lun_mard_merk_ĵaŭ_ven_sab".split("_"), monthsShort: "jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec".split("_"), weekdaysMin: "di_lu_ma_me_ĵa_ve_sa".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "D[-a de] MMMM, YYYY", LLL: "D[-a de] MMMM, YYYY HH:mm", LLLL: "dddd, [la] D[-a de] MMMM, YYYY HH:mm" }, relativeTime: { future: "post %s", past: "antaŭ %s", s: "sekundoj", m: "minuto", mm: "%d minutoj", h: "horo", hh: "%d horoj", d: "tago", dd: "%d tagoj", M: "monato", MM: "%d monatoj", y: "jaro", yy: "%d jaroj" } };
    return s.default.locale(i, null, !0), i;
  });
})(RE);
var NE = Ds, IE = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "es-do", weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"), weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"), weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"), months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), monthsShort: "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"), weekStart: 1, relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un día", dd: "%d días", M: "un mes", MM: "%d meses", y: "un año", yy: "%d años" }, ordinal: function(o) {
      return o + "º";
    }, formats: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY h:mm A", LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A" } };
    return s.default.locale(i, null, !0), i;
  });
})(FE);
var VE = Ts, zE = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "es-mx", weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"), weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"), weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"), months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), monthsShort: "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"), relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un día", dd: "%d días", M: "un mes", MM: "%d meses", y: "un año", yy: "%d años" }, ordinal: function(o) {
      return o + "º";
    }, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY H:mm", LLLL: "dddd, D [de] MMMM [de] YYYY H:mm" } };
    return s.default.locale(i, null, !0), i;
  });
})(BE);
var WE = Es, UE = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "es-pr", monthsShort: "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"), weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"), weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"), weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"), months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), weekStart: 1, formats: { LT: "h:mm A", LTS: "h:mm:ss A", L: "MM/DD/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY h:mm A", LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A" }, relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un día", dd: "%d días", M: "un mes", MM: "%d meses", y: "un año", yy: "%d años" }, ordinal: function(o) {
      return o + "º";
    } };
    return s.default.locale(i, null, !0), i;
  });
})(KE);
var GE = js, JE = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "es-us", weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"), weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"), weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"), months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), monthsShort: "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"), relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un día", dd: "%d días", M: "un mes", MM: "%d meses", y: "un año", yy: "%d años" }, ordinal: function(o) {
      return o + "º";
    }, formats: { LT: "h:mm A", LTS: "h:mm:ss A", L: "MM/DD/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY h:mm A", LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A" } };
    return s.default.locale(i, null, !0), i;
  });
})(qE);
var XE = Ps, ZE = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "es", monthsShort: "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"), weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"), weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"), weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"), months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), weekStart: 1, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY H:mm", LLLL: "dddd, D [de] MMMM [de] YYYY H:mm" }, relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un día", dd: "%d días", M: "un mes", MM: "%d meses", y: "un año", yy: "%d años" }, ordinal: function(o) {
      return o + "º";
    } };
    return s.default.locale(i, null, !0), i;
  });
})(QE);
var ej = As, tj = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
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
var rj = Cs, oj = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "eu", weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"), months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"), weekStart: 1, weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"), monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"), weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY[ko] MMMM[ren] D[a]", LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm", LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm", l: "YYYY-M-D", ll: "YYYY[ko] MMM D[a]", lll: "YYYY[ko] MMM D[a] HH:mm", llll: "ddd, YYYY[ko] MMM D[a] HH:mm" }, relativeTime: { future: "%s barru", past: "duela %s", s: "segundo batzuk", m: "minutu bat", mm: "%d minutu", h: "ordu bat", hh: "%d ordu", d: "egun bat", dd: "%d egun", M: "hilabete bat", MM: "%d hilabete", y: "urte bat", yy: "%d urte" } };
    return s.default.locale(i, null, !0), i;
  });
})(sj);
var ij = $s, aj = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "fa", weekdays: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"), weekdaysShort: "یک‌_دو_سه‌_چه_پن_جم_شن".split("_"), weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_"), weekStart: 6, months: "فروردین_اردیبهشت_خرداد_تیر_مرداد_شهریور_مهر_آبان_آذر_دی_بهمن_اسفند".split("_"), monthsShort: "فرو_ارد_خرد_تیر_مرد_شهر_مهر_آبا_آذر_دی_بهم_اسف".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, relativeTime: { future: "در %s", past: "%s قبل", s: "چند ثانیه", m: "یک دقیقه", mm: "%d دقیقه", h: "یک ساعت", hh: "%d ساعت", d: "یک روز", dd: "%d روز", M: "یک ماه", MM: "%d ماه", y: "یک سال", yy: "%d سال" } };
    return s.default.locale(i, null, !0), i;
  });
})(lj);
var uj = Hs, cj = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
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
var fj = Os, mj = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "fo", weekdays: "sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split("_"), months: "januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split("_"), weekStart: 1, weekdaysShort: "sun_mán_týs_mik_hós_frí_ley".split("_"), monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"), weekdaysMin: "su_má_tý_mi_hó_fr_le".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D. MMMM, YYYY HH:mm" }, relativeTime: { future: "um %s", past: "%s síðani", s: "fá sekund", m: "ein minuttur", mm: "%d minuttir", h: "ein tími", hh: "%d tímar", d: "ein dagur", dd: "%d dagar", M: "ein mánaður", MM: "%d mánaðir", y: "eitt ár", yy: "%d ár" } };
    return s.default.locale(i, null, !0), i;
  });
})(pj);
var hj = Rs, _j = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "fr-ch", weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"), months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"), weekStart: 1, weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"), monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"), weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, relativeTime: { future: "dans %s", past: "il y a %s", s: "quelques secondes", m: "une minute", mm: "%d minutes", h: "une heure", hh: "%d heures", d: "un jour", dd: "%d jours", M: "un mois", MM: "%d mois", y: "un an", yy: "%d ans" } };
    return s.default.locale(i, null, !0), i;
  });
})(vj);
var gj = Ns, yj = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "fr", weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"), weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"), weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"), months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"), monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"), weekStart: 1, yearStart: 4, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, relativeTime: { future: "dans %s", past: "il y a %s", s: "quelques secondes", m: "une minute", mm: "%d minutes", h: "une heure", hh: "%d heures", d: "un jour", dd: "%d jours", M: "un mois", MM: "%d mois", y: "un an", yy: "%d ans" }, ordinal: function(o) {
      return "" + o + (o === 1 ? "er" : "");
    } };
    return s.default.locale(i, null, !0), i;
  });
})(Mj);
var bj = Is, xj = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "fy", weekdays: "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"), months: "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"), monthsShort: "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_"), weekStart: 1, weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"), weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD-MM-YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, relativeTime: { future: "oer %s", past: "%s lyn", s: "in pear sekonden", m: "ien minút", mm: "%d minuten", h: "ien oere", hh: "%d oeren", d: "ien dei", dd: "%d dagen", M: "ien moanne", MM: "%d moannen", y: "ien jier", yy: "%d jierren" } };
    return s.default.locale(i, null, !0), i;
  });
})(wj);
var Yj = Fs, Lj = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "ga", weekdays: "Dé Domhnaigh_Dé Luain_Dé Máirt_Dé Céadaoin_Déardaoin_Dé hAoine_Dé Satharn".split("_"), months: "Eanáir_Feabhra_Márta_Aibreán_Bealtaine_Méitheamh_Iúil_Lúnasa_Meán Fómhair_Deaireadh Fómhair_Samhain_Nollaig".split("_"), weekStart: 1, weekdaysShort: "Dom_Lua_Mái_Céa_Déa_hAo_Sat".split("_"), monthsShort: "Eaná_Feab_Márt_Aibr_Beal_Méit_Iúil_Lúna_Meán_Deai_Samh_Noll".split("_"), weekdaysMin: "Do_Lu_Má_Ce_Dé_hA_Sa".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, relativeTime: { future: "i %s", past: "%s ó shin", s: "cúpla soicind", m: "nóiméad", mm: "%d nóiméad", h: "uair an chloig", hh: "%d uair an chloig", d: "lá", dd: "%d lá", M: "mí", MM: "%d mí", y: "bliain", yy: "%d bliain" } };
    return s.default.locale(i, null, !0), i;
  });
})(Sj);
var kj = Vs, Dj = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "gd", weekdays: "Didòmhnaich_Diluain_Dimàirt_Diciadain_Diardaoin_Dihaoine_Disathairne".split("_"), months: "Am Faoilleach_An Gearran_Am Màrt_An Giblean_An Cèitean_An t-Ògmhios_An t-Iuchar_An Lùnastal_An t-Sultain_An Dàmhair_An t-Samhain_An Dùbhlachd".split("_"), weekStart: 1, weekdaysShort: "Did_Dil_Dim_Dic_Dia_Dih_Dis".split("_"), monthsShort: "Faoi_Gear_Màrt_Gibl_Cèit_Ògmh_Iuch_Lùn_Sult_Dàmh_Samh_Dùbh".split("_"), weekdaysMin: "Dò_Lu_Mà_Ci_Ar_Ha_Sa".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, relativeTime: { future: "ann an %s", past: "bho chionn %s", s: "beagan diogan", m: "mionaid", mm: "%d mionaidean", h: "uair", hh: "%d uairean", d: "latha", dd: "%d latha", M: "mìos", MM: "%d mìosan", y: "bliadhna", yy: "%d bliadhna" } };
    return s.default.locale(i, null, !0), i;
  });
})(Tj);
var Ej = zs, jj = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "gl", weekdays: "domingo_luns_martes_mércores_xoves_venres_sábado".split("_"), months: "xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro".split("_"), weekStart: 1, weekdaysShort: "dom._lun._mar._mér._xov._ven._sáb.".split("_"), monthsShort: "xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.".split("_"), weekdaysMin: "do_lu_ma_mé_xo_ve_sá".split("_"), ordinal: function(o) {
      return o + "º";
    }, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY H:mm", LLLL: "dddd, D [de] MMMM [de] YYYY H:mm" }, relativeTime: { future: "en %s", past: "fai %s", s: "uns segundos", m: "un minuto", mm: "%d minutos", h: "unha hora", hh: "%d horas", d: "un día", dd: "%d días", M: "un mes", MM: "%d meses", y: "un ano", yy: "%d anos" } };
    return s.default.locale(i, null, !0), i;
  });
})(Pj);
var Aj = Bs, Cj = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "gom-latn", weekdays: "Aitar_Somar_Mongllar_Budvar_Brestar_Sukrar_Son'var".split("_"), months: "Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr".split("_"), weekStart: 1, weekdaysShort: "Ait._Som._Mon._Bud._Bre._Suk._Son.".split("_"), monthsShort: "Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.".split("_"), weekdaysMin: "Ai_Sm_Mo_Bu_Br_Su_Sn".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "A h:mm [vazta]", LTS: "A h:mm:ss [vazta]", L: "DD-MM-YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY A h:mm [vazta]", LLLL: "dddd, MMMM[achea] Do, YYYY, A h:mm [vazta]", llll: "ddd, D MMM YYYY, A h:mm [vazta]" } };
    return s.default.locale(i, null, !0), i;
  });
})($j);
var Hj = Ws, Oj = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "gu", weekdays: "રવિવાર_સોમવાર_મંગળવાર_બુધ્વાર_ગુરુવાર_શુક્રવાર_શનિવાર".split("_"), months: "જાન્યુઆરી_ફેબ્રુઆરી_માર્ચ_એપ્રિલ_મે_જૂન_જુલાઈ_ઑગસ્ટ_સપ્ટેમ્બર_ઑક્ટ્બર_નવેમ્બર_ડિસેમ્બર".split("_"), weekdaysShort: "રવિ_સોમ_મંગળ_બુધ્_ગુરુ_શુક્ર_શનિ".split("_"), monthsShort: "જાન્યુ._ફેબ્રુ._માર્ચ_એપ્રિ._મે_જૂન_જુલા._ઑગ._સપ્ટે._ઑક્ટ્._નવે._ડિસે.".split("_"), weekdaysMin: "ર_સો_મં_બુ_ગુ_શુ_શ".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "A h:mm વાગ્યે", LTS: "A h:mm:ss વાગ્યે", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm વાગ્યે", LLLL: "dddd, D MMMM YYYY, A h:mm વાગ્યે" }, relativeTime: { future: "%s મા", past: "%s પેહલા", s: "અમુક પળો", m: "એક મિનિટ", mm: "%d મિનિટ", h: "એક કલાક", hh: "%d કલાક", d: "એક દિવસ", dd: "%d દિવસ", M: "એક મહિનો", MM: "%d મહિનો", y: "એક વર્ષ", yy: "%d વર્ષ" } };
    return s.default.locale(i, null, !0), i;
  });
})(Rj);
var Nj = Us, Ij = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
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
var Vj = Ks, zj = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "hi", weekdays: "रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"), months: "जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"), weekdaysShort: "रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"), monthsShort: "जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"), weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "A h:mm बजे", LTS: "A h:mm:ss बजे", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm बजे", LLLL: "dddd, D MMMM YYYY, A h:mm बजे" }, relativeTime: { future: "%s में", past: "%s पहले", s: "कुछ ही क्षण", m: "एक मिनट", mm: "%d मिनट", h: "एक घंटा", hh: "%d घंटे", d: "एक दिन", dd: "%d दिन", M: "एक महीने", MM: "%d महीने", y: "एक वर्ष", yy: "%d वर्ष" } };
    return s.default.locale(i, null, !0), i;
  });
})(Bj);
var Wj = Gs, Uj = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
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
var Gj = Js, Jj = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "ht", weekdays: "dimanch_lendi_madi_mèkredi_jedi_vandredi_samdi".split("_"), months: "janvye_fevriye_mas_avril_me_jen_jiyè_out_septanm_oktòb_novanm_desanm".split("_"), weekdaysShort: "dim._len._mad._mèk._jed._van._sam.".split("_"), monthsShort: "jan._fev._mas_avr._me_jen_jiyè._out_sept._okt._nov._des.".split("_"), weekdaysMin: "di_le_ma_mè_je_va_sa".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, relativeTime: { future: "nan %s", past: "sa gen %s", s: "kèk segond", m: "yon minit", mm: "%d minit", h: "inèdtan", hh: "%d zè", d: "yon jou", dd: "%d jou", M: "yon mwa", MM: "%d mwa", y: "yon ane", yy: "%d ane" } };
    return s.default.locale(i, null, !0), i;
  });
})(qj);
var Xj = qs, Zj = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
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
var eP = Xs, tP = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "hy-am", weekdays: "կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split("_"), months: "հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split("_"), weekStart: 1, weekdaysShort: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"), monthsShort: "հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_"), weekdaysMin: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY թ.", LLL: "D MMMM YYYY թ., HH:mm", LLLL: "dddd, D MMMM YYYY թ., HH:mm" }, relativeTime: { future: "%s հետո", past: "%s առաջ", s: "մի քանի վայրկյան", m: "րոպե", mm: "%d րոպե", h: "ժամ", hh: "%d ժամ", d: "օր", dd: "%d օր", M: "ամիս", MM: "%d ամիս", y: "տարի", yy: "%d տարի" } };
    return s.default.locale(i, null, !0), i;
  });
})(nP);
var rP = Zs, oP = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "id", weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"), months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"), weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"), monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des".split("_"), weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"), weekStart: 1, formats: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [pukul] HH.mm", LLLL: "dddd, D MMMM YYYY [pukul] HH.mm" }, relativeTime: { future: "dalam %s", past: "%s yang lalu", s: "beberapa detik", m: "semenit", mm: "%d menit", h: "sejam", hh: "%d jam", d: "sehari", dd: "%d hari", M: "sebulan", MM: "%d bulan", y: "setahun", yy: "%d tahun" }, ordinal: function(o) {
      return o + ".";
    } };
    return s.default.locale(i, null, !0), i;
  });
})(sP);
var iP = Qs, aP = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
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
var uP = ei, cP = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "it-ch", weekdays: "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"), months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"), weekStart: 1, weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"), monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"), weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, relativeTime: { future: "tra %s", past: "%s fa", s: "alcuni secondi", m: "un minuto", mm: "%d minuti", h: "un'ora", hh: "%d ore", d: "un giorno", dd: "%d giorni", M: "un mese", MM: "%d mesi", y: "un anno", yy: "%d anni" } };
    return s.default.locale(i, null, !0), i;
  });
})(dP);
var fP = ti, mP = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "it", weekdays: "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"), weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"), weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"), months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"), weekStart: 1, monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"), formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, relativeTime: { future: "tra %s", past: "%s fa", s: "qualche secondo", m: "un minuto", mm: "%d minuti", h: "un' ora", hh: "%d ore", d: "un giorno", dd: "%d giorni", M: "un mese", MM: "%d mesi", y: "un anno", yy: "%d anni" }, ordinal: function(o) {
      return o + "º";
    } };
    return s.default.locale(i, null, !0), i;
  });
})(pP);
var hP = ni, _P = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
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
var gP = ri, yP = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "jv", weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"), months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"), weekStart: 1, weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"), monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"), weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [pukul] HH.mm", LLLL: "dddd, D MMMM YYYY [pukul] HH.mm" }, relativeTime: { future: "wonten ing %s", past: "%s ingkang kepengker", s: "sawetawis detik", m: "setunggal menit", mm: "%d menit", h: "setunggal jam", hh: "%d jam", d: "sedinten", dd: "%d dinten", M: "sewulan", MM: "%d wulan", y: "setaun", yy: "%d taun" } };
    return s.default.locale(i, null, !0), i;
  });
})(MP);
var bP = oi, xP = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "ka", weekdays: "კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"), weekdaysShort: "კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"), weekdaysMin: "კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"), months: "იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"), monthsShort: "იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"), weekStart: 1, formats: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, relativeTime: { future: "%s შემდეგ", past: "%s წინ", s: "წამი", m: "წუთი", mm: "%d წუთი", h: "საათი", hh: "%d საათის", d: "დღეს", dd: "%d დღის განმავლობაში", M: "თვის", MM: "%d თვის", y: "წელი", yy: "%d წლის" }, ordinal: function(o) {
      return o;
    } };
    return s.default.locale(i, null, !0), i;
  });
})(wP);
var YP = si, LP = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "kk", weekdays: "жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі".split("_"), weekdaysShort: "жек_дүй_сей_сәр_бей_жұм_сен".split("_"), weekdaysMin: "жк_дй_сй_ср_бй_жм_сн".split("_"), months: "қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан".split("_"), monthsShort: "қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел".split("_"), weekStart: 1, relativeTime: { future: "%s ішінде", past: "%s бұрын", s: "бірнеше секунд", m: "бір минут", mm: "%d минут", h: "бір сағат", hh: "%d сағат", d: "бір күн", dd: "%d күн", M: "бір ай", MM: "%d ай", y: "бір жыл", yy: "%d жыл" }, ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" } };
    return s.default.locale(i, null, !0), i;
  });
})(SP);
var kP = ii, DP = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
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
var EP = ai, jP = /* @__PURE__ */ z({
  __proto__: null,
  default: EP
}, [ai]), fd = {}, PP = {};
(function(e, t) {
  (function(n, r) {
    r(t, A);
  })(V, function(n, r) {
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
var AP = /* @__PURE__ */ wD(fd), CP = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "ky", weekdays: "Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби".split("_"), months: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"), weekStart: 1, weekdaysShort: "Жек_Дүй_Шей_Шар_Бей_Жум_Ише".split("_"), monthsShort: "янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"), weekdaysMin: "Жк_Дй_Шй_Шр_Бй_Жм_Иш".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, relativeTime: { future: "%s ичинде", past: "%s мурун", s: "бирнече секунд", m: "бир мүнөт", mm: "%d мүнөт", h: "бир саат", hh: "%d саат", d: "бир күн", dd: "%d күн", M: "бир ай", MM: "%d ай", y: "бир жыл", yy: "%d жыл" } };
    return s.default.locale(i, null, !0), i;
  });
})($P);
var HP = li, OP = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "lb", weekdays: "Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"), months: "Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), weekStart: 1, weekdaysShort: "So._Mé._Dë._Më._Do._Fr._Sa.".split("_"), monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"), weekdaysMin: "So_Mé_Dë_Më_Do_Fr_Sa".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "H:mm [Auer]", LTS: "H:mm:ss [Auer]", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm [Auer]", LLLL: "dddd, D. MMMM YYYY H:mm [Auer]" } };
    return s.default.locale(i, null, !0), i;
  });
})(RP);
var NP = ui, IP = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "lo", weekdays: "ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"), months: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"), weekdaysShort: "ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"), monthsShort: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"), weekdaysMin: "ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "ວັນdddd D MMMM YYYY HH:mm" }, relativeTime: { future: "ອີກ %s", past: "%sຜ່ານມາ", s: "ບໍ່ເທົ່າໃດວິນາທີ", m: "1 ນາທີ", mm: "%d ນາທີ", h: "1 ຊົ່ວໂມງ", hh: "%d ຊົ່ວໂມງ", d: "1 ມື້", dd: "%d ມື້", M: "1 ເດືອນ", MM: "%d ເດືອນ", y: "1 ປີ", yy: "%d ປີ" } };
    return s.default.locale(i, null, !0), i;
  });
})(FP);
var VP = ci, zP = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
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
var WP = di, UP = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "lv", weekdays: "svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"), months: "janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"), weekStart: 1, weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"), monthsShort: "jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"), weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY.", LL: "YYYY. [gada] D. MMMM", LLL: "YYYY. [gada] D. MMMM, HH:mm", LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm" }, relativeTime: { future: "pēc %s", past: "pirms %s", s: "dažām sekundēm", m: "minūtes", mm: "%d minūtēm", h: "stundas", hh: "%d stundām", d: "dienas", dd: "%d dienām", M: "mēneša", MM: "%d mēnešiem", y: "gada", yy: "%d gadiem" } };
    return s.default.locale(i, null, !0), i;
  });
})(KP);
var GP = fi, JP = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "me", weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"), months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"), weekStart: 1, weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"), monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"), weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" } };
    return s.default.locale(i, null, !0), i;
  });
})(qP);
var XP = mi, ZP = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "mi", weekdays: "Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei".split("_"), months: "Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea".split("_"), weekStart: 1, weekdaysShort: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"), monthsShort: "Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split("_"), weekdaysMin: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [i] HH:mm", LLLL: "dddd, D MMMM YYYY [i] HH:mm" }, relativeTime: { future: "i roto i %s", past: "%s i mua", s: "te hēkona ruarua", m: "he meneti", mm: "%d meneti", h: "te haora", hh: "%d haora", d: "he ra", dd: "%d ra", M: "he marama", MM: "%d marama", y: "he tau", yy: "%d tau" } };
    return s.default.locale(i, null, !0), i;
  });
})(QP);
var eA = pi, tA = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "mk", weekdays: "недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"), months: "јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"), weekStart: 1, weekdaysShort: "нед_пон_вто_сре_чет_пет_саб".split("_"), monthsShort: "јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"), weekdaysMin: "нe_пo_вт_ср_че_пе_сa".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "D.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY H:mm", LLLL: "dddd, D MMMM YYYY H:mm" }, relativeTime: { future: "после %s", past: "пред %s", s: "неколку секунди", m: "минута", mm: "%d минути", h: "час", hh: "%d часа", d: "ден", dd: "%d дена", M: "месец", MM: "%d месеци", y: "година", yy: "%d години" } };
    return s.default.locale(i, null, !0), i;
  });
})(nA);
var rA = hi, oA = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "ml", weekdays: "ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split("_"), months: "ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split("_"), weekdaysShort: "ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"), monthsShort: "ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split("_"), weekdaysMin: "ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "A h:mm -നു", LTS: "A h:mm:ss -നു", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm -നു", LLLL: "dddd, D MMMM YYYY, A h:mm -നു" }, relativeTime: { future: "%s കഴിഞ്ഞ്", past: "%s മുൻപ്", s: "അൽപ നിമിഷങ്ങൾ", m: "ഒരു മിനിറ്റ്", mm: "%d മിനിറ്റ്", h: "ഒരു മണിക്കൂർ", hh: "%d മണിക്കൂർ", d: "ഒരു ദിവസം", dd: "%d ദിവസം", M: "ഒരു മാസം", MM: "%d മാസം", y: "ഒരു വർഷം", yy: "%d വർഷം" } };
    return s.default.locale(i, null, !0), i;
  });
})(sA);
var iA = _i, aA = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "mn", weekdays: "Ням_Даваа_Мягмар_Лхагва_Пүрэв_Баасан_Бямба".split("_"), months: "Нэгдүгээр сар_Хоёрдугаар сар_Гуравдугаар сар_Дөрөвдүгээр сар_Тавдугаар сар_Зургадугаар сар_Долдугаар сар_Наймдугаар сар_Есдүгээр сар_Аравдугаар сар_Арван нэгдүгээр сар_Арван хоёрдугаар сар".split("_"), weekdaysShort: "Ням_Дав_Мяг_Лха_Пүр_Баа_Бям".split("_"), monthsShort: "1 сар_2 сар_3 сар_4 сар_5 сар_6 сар_7 сар_8 сар_9 сар_10 сар_11 сар_12 сар".split("_"), weekdaysMin: "Ня_Да_Мя_Лх_Пү_Ба_Бя".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY оны MMMMын D", LLL: "YYYY оны MMMMын D HH:mm", LLLL: "dddd, YYYY оны MMMMын D HH:mm" }, relativeTime: { future: "%s", past: "%s", s: "саяхан", m: "м", mm: "%dм", h: "1ц", hh: "%dц", d: "1ө", dd: "%dө", M: "1с", MM: "%dс", y: "1ж", yy: "%dж" } };
    return s.default.locale(i, null, !0), i;
  });
})(lA);
var uA = vi, cA = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "ms-my", weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"), months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"), weekStart: 1, weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"), monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"), weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [pukul] HH.mm", LLLL: "dddd, D MMMM YYYY [pukul] HH.mm" }, relativeTime: { future: "dalam %s", past: "%s yang lepas", s: "beberapa saat", m: "seminit", mm: "%d minit", h: "sejam", hh: "%d jam", d: "sehari", dd: "%d hari", M: "sebulan", MM: "%d bulan", y: "setahun", yy: "%d tahun" } };
    return s.default.locale(i, null, !0), i;
  });
})(dA);
var fA = gi, mA = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "ms", weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"), weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"), weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"), months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"), monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"), weekStart: 1, formats: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH.mm", LLLL: "dddd, D MMMM YYYY HH.mm" }, relativeTime: { future: "dalam %s", past: "%s yang lepas", s: "beberapa saat", m: "seminit", mm: "%d minit", h: "sejam", hh: "%d jam", d: "sehari", dd: "%d hari", M: "sebulan", MM: "%d bulan", y: "setahun", yy: "%d tahun" }, ordinal: function(o) {
      return o + ".";
    } };
    return s.default.locale(i, null, !0), i;
  });
})(pA);
var hA = yi, _A = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "mt", weekdays: "Il-Ħadd_It-Tnejn_It-Tlieta_L-Erbgħa_Il-Ħamis_Il-Ġimgħa_Is-Sibt".split("_"), months: "Jannar_Frar_Marzu_April_Mejju_Ġunju_Lulju_Awwissu_Settembru_Ottubru_Novembru_Diċembru".split("_"), weekStart: 1, weekdaysShort: "Ħad_Tne_Tli_Erb_Ħam_Ġim_Sib".split("_"), monthsShort: "Jan_Fra_Mar_Apr_Mej_Ġun_Lul_Aww_Set_Ott_Nov_Diċ".split("_"), weekdaysMin: "Ħa_Tn_Tl_Er_Ħa_Ġi_Si".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, relativeTime: { future: "f’ %s", past: "%s ilu", s: "ftit sekondi", m: "minuta", mm: "%d minuti", h: "siegħa", hh: "%d siegħat", d: "ġurnata", dd: "%d ġranet", M: "xahar", MM: "%d xhur", y: "sena", yy: "%d sni" } };
    return s.default.locale(i, null, !0), i;
  });
})(vA);
var gA = Mi, yA = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "my", weekdays: "တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split("_"), months: "ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split("_"), weekStart: 1, weekdaysShort: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"), monthsShort: "ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split("_"), weekdaysMin: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, relativeTime: { future: "လာမည့် %s မှာ", past: "လွန်ခဲ့သော %s က", s: "စက္ကန်.အနည်းငယ်", m: "တစ်မိနစ်", mm: "%d မိနစ်", h: "တစ်နာရီ", hh: "%d နာရီ", d: "တစ်ရက်", dd: "%d ရက်", M: "တစ်လ", MM: "%d လ", y: "တစ်နှစ်", yy: "%d နှစ်" } };
    return s.default.locale(i, null, !0), i;
  });
})(MA);
var bA = bi, xA = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "nb", weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"), weekdaysShort: "sø._ma._ti._on._to._fr._lø.".split("_"), weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"), months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"), monthsShort: "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"), ordinal: function(o) {
      return o + ".";
    }, weekStart: 1, yearStart: 4, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY [kl.] HH:mm", LLLL: "dddd D. MMMM YYYY [kl.] HH:mm" }, relativeTime: { future: "om %s", past: "%s siden", s: "noen sekunder", m: "ett minutt", mm: "%d minutter", h: "en time", hh: "%d timer", d: "en dag", dd: "%d dager", M: "en måned", MM: "%d måneder", y: "ett år", yy: "%d år" } };
    return s.default.locale(i, null, !0), i;
  });
})(wA);
var YA = xi, LA = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
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
var kA = wi, DA = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "nl-be", weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"), months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"), monthsShort: "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"), weekStart: 1, weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"), weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, relativeTime: { future: "over %s", past: "%s geleden", s: "een paar seconden", m: "één minuut", mm: "%d minuten", h: "één uur", hh: "%d uur", d: "één dag", dd: "%d dagen", M: "één maand", MM: "%d maanden", y: "één jaar", yy: "%d jaar" } };
    return s.default.locale(i, null, !0), i;
  });
})(TA);
var EA = Yi, jA = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "nl", weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"), weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"), weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"), months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"), monthsShort: "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"), ordinal: function(o) {
      return "[" + o + (o === 1 || o === 8 || o >= 20 ? "ste" : "de") + "]";
    }, weekStart: 1, yearStart: 4, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD-MM-YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, relativeTime: { future: "over %s", past: "%s geleden", s: "een paar seconden", m: "een minuut", mm: "%d minuten", h: "een uur", hh: "%d uur", d: "een dag", dd: "%d dagen", M: "een maand", MM: "%d maanden", y: "een jaar", yy: "%d jaar" } };
    return s.default.locale(i, null, !0), i;
  });
})(PA);
var AA = Li, CA = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "nn", weekdays: "sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"), weekdaysShort: "sun_mån_tys_ons_tor_fre_lau".split("_"), weekdaysMin: "su_må_ty_on_to_fr_la".split("_"), months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"), monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"), ordinal: function(o) {
      return o + ".";
    }, weekStart: 1, relativeTime: { future: "om %s", past: "for %s sidan", s: "nokre sekund", m: "eitt minutt", mm: "%d minutt", h: "ein time", hh: "%d timar", d: "ein dag", dd: "%d dagar", M: "ein månad", MM: "%d månadar", y: "eitt år", yy: "%d år" }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY [kl.] H:mm", LLLL: "dddd D. MMMM YYYY [kl.] HH:mm" } };
    return s.default.locale(i, null, !0), i;
  });
})($A);
var HA = Si, OA = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "oc-lnc", weekdays: "dimenge_diluns_dimars_dimècres_dijòus_divendres_dissabte".split("_"), weekdaysShort: "Dg_Dl_Dm_Dc_Dj_Dv_Ds".split("_"), weekdaysMin: "dg_dl_dm_dc_dj_dv_ds".split("_"), months: "genièr_febrièr_març_abrial_mai_junh_julhet_agost_setembre_octòbre_novembre_decembre".split("_"), monthsShort: "gen_feb_març_abr_mai_junh_julh_ago_set_oct_nov_dec".split("_"), weekStart: 1, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM [de] YYYY", LLL: "D MMMM [de] YYYY [a] H:mm", LLLL: "dddd D MMMM [de] YYYY [a] H:mm" }, relativeTime: { future: "d'aquí %s", past: "fa %s", s: "unas segondas", m: "una minuta", mm: "%d minutas", h: "una ora", hh: "%d oras", d: "un jorn", dd: "%d jorns", M: "un mes", MM: "%d meses", y: "un an", yy: "%d ans" }, ordinal: function(o) {
      return o + "º";
    } };
    return s.default.locale(i, null, !0), i;
  });
})(RA);
var NA = ki, IA = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "pa-in", weekdays: "ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ".split("_"), months: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"), weekdaysShort: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"), monthsShort: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"), weekdaysMin: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "A h:mm ਵਜੇ", LTS: "A h:mm:ss ਵਜੇ", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm ਵਜੇ", LLLL: "dddd, D MMMM YYYY, A h:mm ਵਜੇ" }, relativeTime: { future: "%s ਵਿੱਚ", past: "%s ਪਿਛਲੇ", s: "ਕੁਝ ਸਕਿੰਟ", m: "ਇਕ ਮਿੰਟ", mm: "%d ਮਿੰਟ", h: "ਇੱਕ ਘੰਟਾ", hh: "%d ਘੰਟੇ", d: "ਇੱਕ ਦਿਨ", dd: "%d ਦਿਨ", M: "ਇੱਕ ਮਹੀਨਾ", MM: "%d ਮਹੀਨੇ", y: "ਇੱਕ ਸਾਲ", yy: "%d ਸਾਲ" } };
    return s.default.locale(i, null, !0), i;
  });
})(FA);
var VA = Di, zA = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
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
var WA = Ti, UA = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "pt-br", weekdays: "domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split("_"), weekdaysShort: "dom_seg_ter_qua_qui_sex_sáb".split("_"), weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"), months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"), monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"), ordinal: function(o) {
      return o + "º";
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY [às] HH:mm", LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm" }, relativeTime: { future: "em %s", past: "há %s", s: "poucos segundos", m: "um minuto", mm: "%d minutos", h: "uma hora", hh: "%d horas", d: "um dia", dd: "%d dias", M: "um mês", MM: "%d meses", y: "um ano", yy: "%d anos" } };
    return s.default.locale(i, null, !0), i;
  });
})(KA);
var GA = Ei, JA = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "pt", weekdays: "domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split("_"), weekdaysShort: "dom_seg_ter_qua_qui_sex_sab".split("_"), weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sa".split("_"), months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"), monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"), ordinal: function(o) {
      return o + "º";
    }, weekStart: 1, yearStart: 4, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY [às] HH:mm", LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm" }, relativeTime: { future: "em %s", past: "há %s", s: "alguns segundos", m: "um minuto", mm: "%d minutos", h: "uma hora", hh: "%d horas", d: "um dia", dd: "%d dias", M: "um mês", MM: "%d meses", y: "um ano", yy: "%d anos" } };
    return s.default.locale(i, null, !0), i;
  });
})(qA);
var XA = ji, ZA = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "rn", weekdays: "Ku wa Mungu_Ku wa Mbere_Ku wa Kabiri_Ku wa Gatatu_Ku wa Kane_Ku wa Gatanu_Ku wa Gatandatu".split("_"), weekdaysShort: "Kngu_Kmbr_Kbri_Ktat_Kkan_Ktan_Kdat".split("_"), weekdaysMin: "K7_K1_K2_K3_K4_K5_K6".split("_"), months: "Nzero_Ruhuhuma_Ntwarante_Ndamukiza_Rusama_Ruhenshi_Mukakaro_Myandagaro_Nyakanga_Gitugutu_Munyonyo_Kigarama".split("_"), monthsShort: "Nzer_Ruhuh_Ntwar_Ndam_Rus_Ruhen_Muk_Myand_Nyak_Git_Muny_Kig".split("_"), weekStart: 1, ordinal: function(o) {
      return o;
    }, relativeTime: { future: "mu %s", past: "%s", s: "amasegonda", m: "Umunota", mm: "%d iminota", h: "isaha", hh: "%d amasaha", d: "Umunsi", dd: "%d iminsi", M: "ukwezi", MM: "%d amezi", y: "umwaka", yy: "%d imyaka" }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" } };
    return s.default.locale(i, null, !0), i;
  });
})(QA);
var eC = Pi, tC = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "ro", weekdays: "Duminică_Luni_Marți_Miercuri_Joi_Vineri_Sâmbătă".split("_"), weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"), weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"), months: "Ianuarie_Februarie_Martie_Aprilie_Mai_Iunie_Iulie_August_Septembrie_Octombrie_Noiembrie_Decembrie".split("_"), monthsShort: "Ian._Febr._Mart._Apr._Mai_Iun._Iul._Aug._Sept._Oct._Nov._Dec.".split("_"), weekStart: 1, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY H:mm", LLLL: "dddd, D MMMM YYYY H:mm" }, relativeTime: { future: "peste %s", past: "acum %s", s: "câteva secunde", m: "un minut", mm: "%d minute", h: "o oră", hh: "%d ore", d: "o zi", dd: "%d zile", M: "o lună", MM: "%d luni", y: "un an", yy: "%d ani" }, ordinal: function(o) {
      return o;
    } };
    return s.default.locale(i, null, !0), i;
  });
})(nC);
var rC = Ai, oC = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
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
var iC = Ci, aC = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "rw", weekdays: "Ku Cyumweru_Kuwa Mbere_Kuwa Kabiri_Kuwa Gatatu_Kuwa Kane_Kuwa Gatanu_Kuwa Gatandatu".split("_"), months: "Mutarama_Gashyantare_Werurwe_Mata_Gicurasi_Kamena_Nyakanga_Kanama_Nzeri_Ukwakira_Ugushyingo_Ukuboza".split("_"), relativeTime: { future: "mu %s", past: "%s", s: "amasegonda", m: "Umunota", mm: "%d iminota", h: "isaha", hh: "%d amasaha", d: "Umunsi", dd: "%d iminsi", M: "ukwezi", MM: "%d amezi", y: "umwaka", yy: "%d imyaka" }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, ordinal: function(o) {
      return o;
    } };
    return s.default.locale(i, null, !0), i;
  });
})(lC);
var uC = $i, cC = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "sd", weekdays: "آچر_سومر_اڱارو_اربع_خميس_جمع_ڇنڇر".split("_"), months: "جنوري_فيبروري_مارچ_اپريل_مئي_جون_جولاءِ_آگسٽ_سيپٽمبر_آڪٽوبر_نومبر_ڊسمبر".split("_"), weekStart: 1, weekdaysShort: "آچر_سومر_اڱارو_اربع_خميس_جمع_ڇنڇر".split("_"), monthsShort: "جنوري_فيبروري_مارچ_اپريل_مئي_جون_جولاءِ_آگسٽ_سيپٽمبر_آڪٽوبر_نومبر_ڊسمبر".split("_"), weekdaysMin: "آچر_سومر_اڱارو_اربع_خميس_جمع_ڇنڇر".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd، D MMMM YYYY HH:mm" }, relativeTime: { future: "%s پوء", past: "%s اڳ", s: "چند سيڪنڊ", m: "هڪ منٽ", mm: "%d منٽ", h: "هڪ ڪلاڪ", hh: "%d ڪلاڪ", d: "هڪ ڏينهن", dd: "%d ڏينهن", M: "هڪ مهينو", MM: "%d مهينا", y: "هڪ سال", yy: "%d سال" } };
    return s.default.locale(i, null, !0), i;
  });
})(dC);
var fC = Hi, mC = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "se", weekdays: "sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat".split("_"), months: "ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu".split("_"), weekStart: 1, weekdaysShort: "sotn_vuos_maŋ_gask_duor_bear_láv".split("_"), monthsShort: "ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov".split("_"), weekdaysMin: "s_v_m_g_d_b_L".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "MMMM D. [b.] YYYY", LLL: "MMMM D. [b.] YYYY [ti.] HH:mm", LLLL: "dddd, MMMM D. [b.] YYYY [ti.] HH:mm" }, relativeTime: { future: "%s geažes", past: "maŋit %s", s: "moadde sekunddat", m: "okta minuhta", mm: "%d minuhtat", h: "okta diimmu", hh: "%d diimmut", d: "okta beaivi", dd: "%d beaivvit", M: "okta mánnu", MM: "%d mánut", y: "okta jahki", yy: "%d jagit" } };
    return s.default.locale(i, null, !0), i;
  });
})(pC);
var hC = Oi, _C = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "si", weekdays: "ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා".split("_"), months: "දුරුතු_නවම්_මැදින්_බක්_වෙසක්_පොසොන්_ඇසළ_නිකිණි_බිනර_වප්_ඉල්_උඳුවප්".split("_"), weekdaysShort: "ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන".split("_"), monthsShort: "දුරු_නව_මැදි_බක්_වෙස_පොසො_ඇස_නිකි_බින_වප්_ඉල්_උඳු".split("_"), weekdaysMin: "ඉ_ස_අ_බ_බ්‍ර_සි_සෙ".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "a h:mm", LTS: "a h:mm:ss", L: "YYYY/MM/DD", LL: "YYYY MMMM D", LLL: "YYYY MMMM D, a h:mm", LLLL: "YYYY MMMM D [වැනි] dddd, a h:mm:ss" }, relativeTime: { future: "%sකින්", past: "%sකට පෙර", s: "තත්පර කිහිපය", m: "විනාඩිය", mm: "විනාඩි %d", h: "පැය", hh: "පැය %d", d: "දිනය", dd: "දින %d", M: "මාසය", MM: "මාස %d", y: "වසර", yy: "වසර %d" } };
    return s.default.locale(i, null, !0), i;
  });
})(vC);
var gC = Ri, yC = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
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
var bC = Ni, xC = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "sl", weekdays: "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"), months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"), weekStart: 1, weekdaysShort: "ned._pon._tor._sre._čet._pet._sob.".split("_"), monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"), weekdaysMin: "ne_po_to_sr_če_pe_so".split("_"), ordinal: function(o) {
      return o + ".";
    }, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" }, relativeTime: { future: "čez %s", past: "pred %s", s: "nekaj sekund", m: "minuta", mm: "%d minut", h: "ura", hh: "%d ur", d: "dan", dd: "%d dni", M: "mesec", MM: "%d mesecev", y: "leto", yy: "%d let" } };
    return s.default.locale(i, null, !0), i;
  });
})(wC);
var YC = Ii, LC = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "sq", weekdays: "E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split("_"), months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"), weekStart: 1, weekdaysShort: "Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"), monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"), weekdaysMin: "D_H_Ma_Më_E_P_Sh".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, relativeTime: { future: "në %s", past: "%s më parë", s: "disa sekonda", m: "një minutë", mm: "%d minuta", h: "një orë", hh: "%d orë", d: "një ditë", dd: "%d ditë", M: "një muaj", MM: "%d muaj", y: "një vit", yy: "%d vite" } };
    return s.default.locale(i, null, !0), i;
  });
})(SC);
var kC = Fi, DC = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
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
var EC = Vi, jC = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
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
var AC = zi, CC = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "ss", weekdays: "Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"), months: "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"), weekStart: 1, weekdaysShort: "Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"), monthsShort: "Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"), weekdaysMin: "Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, relativeTime: { future: "nga %s", past: "wenteka nga %s", s: "emizuzwana lomcane", m: "umzuzu", mm: "%d emizuzu", h: "lihora", hh: "%d emahora", d: "lilanga", dd: "%d emalanga", M: "inyanga", MM: "%d tinyanga", y: "umnyaka", yy: "%d iminyaka" } };
    return s.default.locale(i, null, !0), i;
  });
})($C);
var HC = Bi, OC = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
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
var NC = Wi, IC = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
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
var VC = Ui, zC = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "sw", weekdays: "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"), weekdaysShort: "Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"), weekdaysMin: "J2_J3_J4_J5_Al_Ij_J1".split("_"), months: "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"), monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"), weekStart: 1, ordinal: function(o) {
      return o;
    }, relativeTime: { future: "%s baadaye", past: "tokea %s", s: "hivi punde", m: "dakika moja", mm: "dakika %d", h: "saa limoja", hh: "masaa %d", d: "siku moja", dd: "masiku %d", M: "mwezi mmoja", MM: "miezi %d", y: "mwaka mmoja", yy: "miaka %d" }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" } };
    return s.default.locale(i, null, !0), i;
  });
})(BC);
var WC = Ki, UC = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "ta", weekdays: "ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"), months: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"), weekdaysShort: "ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"), monthsShort: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"), weekdaysMin: "ஞா_தி_செ_பு_வி_வெ_ச".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, HH:mm", LLLL: "dddd, D MMMM YYYY, HH:mm" }, relativeTime: { future: "%s இல்", past: "%s முன்", s: "ஒரு சில விநாடிகள்", m: "ஒரு நிமிடம்", mm: "%d நிமிடங்கள்", h: "ஒரு மணி நேரம்", hh: "%d மணி நேரம்", d: "ஒரு நாள்", dd: "%d நாட்கள்", M: "ஒரு மாதம்", MM: "%d மாதங்கள்", y: "ஒரு வருடம்", yy: "%d ஆண்டுகள்" } };
    return s.default.locale(i, null, !0), i;
  });
})(KC);
var GC = Gi, JC = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "te", weekdays: "ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం".split("_"), months: "జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జులై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్".split("_"), weekdaysShort: "ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని".split("_"), monthsShort: "జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జులై_ఆగ._సెప్._అక్టో._నవ._డిసె.".split("_"), weekdaysMin: "ఆ_సో_మం_బు_గు_శు_శ".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "A h:mm", LTS: "A h:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm", LLLL: "dddd, D MMMM YYYY, A h:mm" }, relativeTime: { future: "%s లో", past: "%s క్రితం", s: "కొన్ని క్షణాలు", m: "ఒక నిమిషం", mm: "%d నిమిషాలు", h: "ఒక గంట", hh: "%d గంటలు", d: "ఒక రోజు", dd: "%d రోజులు", M: "ఒక నెల", MM: "%d నెలలు", y: "ఒక సంవత్సరం", yy: "%d సంవత్సరాలు" } };
    return s.default.locale(i, null, !0), i;
  });
})(qC);
var XC = Ji, ZC = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "tg", weekdays: "якшанбе_душанбе_сешанбе_чоршанбе_панҷшанбе_ҷумъа_шанбе".split("_"), months: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"), weekStart: 1, weekdaysShort: "яшб_дшб_сшб_чшб_пшб_ҷум_шнб".split("_"), monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"), weekdaysMin: "яш_дш_сш_чш_пш_ҷм_шб".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, relativeTime: { future: "баъди %s", past: "%s пеш", s: "якчанд сония", m: "як дақиқа", mm: "%d дақиқа", h: "як соат", hh: "%d соат", d: "як рӯз", dd: "%d рӯз", M: "як моҳ", MM: "%d моҳ", y: "як сол", yy: "%d сол" } };
    return s.default.locale(i, null, !0), i;
  });
})(QC);
var e$ = qi, t$ = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "th", weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"), weekdaysShort: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"), weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"), months: "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"), monthsShort: "ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split("_"), formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY เวลา H:mm", LLLL: "วันddddที่ D MMMM YYYY เวลา H:mm" }, relativeTime: { future: "อีก %s", past: "%sที่แล้ว", s: "ไม่กี่วินาที", m: "1 นาที", mm: "%d นาที", h: "1 ชั่วโมง", hh: "%d ชั่วโมง", d: "1 วัน", dd: "%d วัน", M: "1 เดือน", MM: "%d เดือน", y: "1 ปี", yy: "%d ปี" }, ordinal: function(o) {
      return o + ".";
    } };
    return s.default.locale(i, null, !0), i;
  });
})(n$);
var r$ = Xi, o$ = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "tk", weekdays: "Ýekşenbe_Duşenbe_Sişenbe_Çarşenbe_Penşenbe_Anna_Şenbe".split("_"), weekdaysShort: "Ýek_Duş_Siş_Çar_Pen_Ann_Şen".split("_"), weekdaysMin: "Ýk_Dş_Sş_Çr_Pn_An_Şn".split("_"), months: "Ýanwar_Fewral_Mart_Aprel_Maý_Iýun_Iýul_Awgust_Sentýabr_Oktýabr_Noýabr_Dekabr".split("_"), monthsShort: "Ýan_Few_Mar_Apr_Maý_Iýn_Iýl_Awg_Sen_Okt_Noý_Dek".split("_"), weekStart: 1, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, relativeTime: { future: "%s soň", past: "%s öň", s: "birnäçe sekunt", m: "bir minut", mm: "%d minut", h: "bir sagat", hh: "%d sagat", d: "bir gün", dd: "%d gün", M: "bir aý", MM: "%d aý", y: "bir ýyl", yy: "%d ýyl" }, ordinal: function(o) {
      return o + ".";
    } };
    return s.default.locale(i, null, !0), i;
  });
})(s$);
var i$ = Zi, a$ = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "tl-ph", weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"), months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"), weekStart: 1, weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"), monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"), weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "MM/D/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY HH:mm", LLLL: "dddd, MMMM DD, YYYY HH:mm" }, relativeTime: { future: "sa loob ng %s", past: "%s ang nakalipas", s: "ilang segundo", m: "isang minuto", mm: "%d minuto", h: "isang oras", hh: "%d oras", d: "isang araw", dd: "%d araw", M: "isang buwan", MM: "%d buwan", y: "isang taon", yy: "%d taon" } };
    return s.default.locale(i, null, !0), i;
  });
})(l$);
var u$ = Qi, c$ = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "tlh", weekdays: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"), months: "tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’".split("_"), weekStart: 1, weekdaysShort: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"), monthsShort: "jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’".split("_"), weekdaysMin: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" } };
    return s.default.locale(i, null, !0), i;
  });
})(d$);
var f$ = ea, m$ = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "tr", weekdays: "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"), weekdaysShort: "Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"), weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"), months: "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"), monthsShort: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"), weekStart: 1, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, relativeTime: { future: "%s sonra", past: "%s önce", s: "birkaç saniye", m: "bir dakika", mm: "%d dakika", h: "bir saat", hh: "%d saat", d: "bir gün", dd: "%d gün", M: "bir ay", MM: "%d ay", y: "bir yıl", yy: "%d yıl" }, ordinal: function(o) {
      return o + ".";
    } };
    return s.default.locale(i, null, !0), i;
  });
})(p$);
var h$ = ta, _$ = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "tzl", weekdays: "Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi".split("_"), months: "Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar".split("_"), weekStart: 1, weekdaysShort: "Súl_Lún_Mai_Már_Xhú_Vié_Sát".split("_"), monthsShort: "Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec".split("_"), weekdaysMin: "Sú_Lú_Ma_Má_Xh_Vi_Sá".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD.MM.YYYY", LL: "D. MMMM [dallas] YYYY", LLL: "D. MMMM [dallas] YYYY HH.mm", LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm" } };
    return s.default.locale(i, null, !0), i;
  });
})(v$);
var g$ = na, y$ = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "tzm-latn", weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"), months: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"), weekStart: 6, weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"), monthsShort: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"), weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, relativeTime: { future: "dadkh s yan %s", past: "yan %s", s: "imik", m: "minuḍ", mm: "%d minuḍ", h: "saɛa", hh: "%d tassaɛin", d: "ass", dd: "%d ossan", M: "ayowr", MM: "%d iyyirn", y: "asgas", yy: "%d isgasn" } };
    return s.default.locale(i, null, !0), i;
  });
})(M$);
var b$ = ra, x$ = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "tzm", weekdays: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"), months: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"), weekStart: 6, weekdaysShort: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"), monthsShort: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"), weekdaysMin: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, relativeTime: { future: "ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s", past: "ⵢⴰⵏ %s", s: "ⵉⵎⵉⴽ", m: "ⵎⵉⵏⵓⴺ", mm: "%d ⵎⵉⵏⵓⴺ", h: "ⵙⴰⵄⴰ", hh: "%d ⵜⴰⵙⵙⴰⵄⵉⵏ", d: "ⴰⵙⵙ", dd: "%d oⵙⵙⴰⵏ", M: "ⴰⵢoⵓⵔ", MM: "%d ⵉⵢⵢⵉⵔⵏ", y: "ⴰⵙⴳⴰⵙ", yy: "%d ⵉⵙⴳⴰⵙⵏ" } };
    return s.default.locale(i, null, !0), i;
  });
})(w$);
var Y$ = oa, L$ = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "ug-cn", weekdays: "يەكشەنبە_دۈشەنبە_سەيشەنبە_چارشەنبە_پەيشەنبە_جۈمە_شەنبە".split("_"), months: "يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split("_"), weekStart: 1, weekdaysShort: "يە_دۈ_سە_چا_پە_جۈ_شە".split("_"), monthsShort: "يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split("_"), weekdaysMin: "يە_دۈ_سە_چا_پە_جۈ_شە".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY-يىلىM-ئاينىڭD-كۈنى", LLL: "YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm", LLLL: "dddd، YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm" }, relativeTime: { future: "%s كېيىن", past: "%s بۇرۇن", s: "نەچچە سېكونت", m: "بىر مىنۇت", mm: "%d مىنۇت", h: "بىر سائەت", hh: "%d سائەت", d: "بىر كۈن", dd: "%d كۈن", M: "بىر ئاي", MM: "%d ئاي", y: "بىر يىل", yy: "%d يىل" } };
    return s.default.locale(i, null, !0), i;
  });
})(S$);
var k$ = sa, D$ = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
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
var E$ = ia, j$ = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "ur", weekdays: "اتوار_پیر_منگل_بدھ_جمعرات_جمعہ_ہفتہ".split("_"), months: "جنوری_فروری_مارچ_اپریل_مئی_جون_جولائی_اگست_ستمبر_اکتوبر_نومبر_دسمبر".split("_"), weekStart: 1, weekdaysShort: "اتوار_پیر_منگل_بدھ_جمعرات_جمعہ_ہفتہ".split("_"), monthsShort: "جنوری_فروری_مارچ_اپریل_مئی_جون_جولائی_اگست_ستمبر_اکتوبر_نومبر_دسمبر".split("_"), weekdaysMin: "اتوار_پیر_منگل_بدھ_جمعرات_جمعہ_ہفتہ".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd، D MMMM YYYY HH:mm" }, relativeTime: { future: "%s بعد", past: "%s قبل", s: "چند سیکنڈ", m: "ایک منٹ", mm: "%d منٹ", h: "ایک گھنٹہ", hh: "%d گھنٹے", d: "ایک دن", dd: "%d دن", M: "ایک ماہ", MM: "%d ماہ", y: "ایک سال", yy: "%d سال" } };
    return s.default.locale(i, null, !0), i;
  });
})(P$);
var A$ = aa, C$ = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "uz-latn", weekdays: "Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba".split("_"), months: "Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr".split("_"), weekStart: 1, weekdaysShort: "Yak_Dush_Sesh_Chor_Pay_Jum_Shan".split("_"), monthsShort: "Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek".split("_"), weekdaysMin: "Ya_Du_Se_Cho_Pa_Ju_Sha".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "D MMMM YYYY, dddd HH:mm" }, relativeTime: { future: "Yaqin %s ichida", past: "Bir necha %s oldin", s: "soniya", m: "bir daqiqa", mm: "%d daqiqa", h: "bir soat", hh: "%d soat", d: "bir kun", dd: "%d kun", M: "bir oy", MM: "%d oy", y: "bir yil", yy: "%d yil" } };
    return s.default.locale(i, null, !0), i;
  });
})($$);
var H$ = la, O$ = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "uz", weekdays: "Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"), months: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"), weekStart: 1, weekdaysShort: "Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"), monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"), weekdaysMin: "Як_Ду_Се_Чо_Па_Жу_Ша".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "D MMMM YYYY, dddd HH:mm" }, relativeTime: { future: "Якин %s ичида", past: "Бир неча %s олдин", s: "фурсат", m: "бир дакика", mm: "%d дакика", h: "бир соат", hh: "%d соат", d: "бир кун", dd: "%d кун", M: "бир ой", MM: "%d ой", y: "бир йил", yy: "%d йил" } };
    return s.default.locale(i, null, !0), i;
  });
})(R$);
var N$ = ua, I$ = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "vi", weekdays: "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"), months: "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"), weekStart: 1, weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"), monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"), weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM [năm] YYYY", LLL: "D MMMM [năm] YYYY HH:mm", LLLL: "dddd, D MMMM [năm] YYYY HH:mm", l: "DD/M/YYYY", ll: "D MMM YYYY", lll: "D MMM YYYY HH:mm", llll: "ddd, D MMM YYYY HH:mm" }, relativeTime: { future: "%s tới", past: "%s trước", s: "vài giây", m: "một phút", mm: "%d phút", h: "một giờ", hh: "%d giờ", d: "một ngày", dd: "%d ngày", M: "một tháng", MM: "%d tháng", y: "một năm", yy: "%d năm" } };
    return s.default.locale(i, null, !0), i;
  });
})(F$);
var V$ = ca, z$ = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "x-pseudo", weekdays: "S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý".split("_"), months: "J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér".split("_"), weekStart: 1, weekdaysShort: "S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát".split("_"), monthsShort: "J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc".split("_"), weekdaysMin: "S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, relativeTime: { future: "í~ñ %s", past: "%s á~gó", s: "á ~féw ~sécó~ñds", m: "á ~míñ~úté", mm: "%d m~íñú~tés", h: "á~ñ hó~úr", hh: "%d h~óúrs", d: "á ~dáý", dd: "%d d~áýs", M: "á ~móñ~th", MM: "%d m~óñt~hs", y: "á ~ýéár", yy: "%d ý~éárs" } };
    return s.default.locale(i, null, !0), i;
  });
})(B$);
var W$ = da, U$ = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "yo", weekdays: "Àìkú_Ajé_Ìsẹ́gun_Ọjọ́rú_Ọjọ́bọ_Ẹtì_Àbámẹ́ta".split("_"), months: "Sẹ́rẹ́_Èrèlè_Ẹrẹ̀nà_Ìgbé_Èbibi_Òkùdu_Agẹmo_Ògún_Owewe_Ọ̀wàrà_Bélú_Ọ̀pẹ̀̀".split("_"), weekStart: 1, weekdaysShort: "Àìk_Ajé_Ìsẹ́_Ọjr_Ọjb_Ẹtì_Àbá".split("_"), monthsShort: "Sẹ́r_Èrl_Ẹrn_Ìgb_Èbi_Òkù_Agẹ_Ògú_Owe_Ọ̀wà_Bél_Ọ̀pẹ̀̀".split("_"), weekdaysMin: "Àì_Aj_Ìs_Ọr_Ọb_Ẹt_Àb".split("_"), ordinal: function(o) {
      return o;
    }, formats: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, relativeTime: { future: "ní %s", past: "%s kọjá", s: "ìsẹjú aayá die", m: "ìsẹjú kan", mm: "ìsẹjú %d", h: "wákati kan", hh: "wákati %d", d: "ọjọ́ kan", dd: "ọjọ́ %d", M: "osù kan", MM: "osù %d", y: "ọdún kan", yy: "ọdún %d" } };
    return s.default.locale(i, null, !0), i;
  });
})(K$);
var G$ = fa, J$ = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
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
var X$ = ma, Z$ = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
    function r(o) {
      return o && typeof o == "object" && "default" in o ? o : { default: o };
    }
    var s = r(n), i = { name: "zh-hk", months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"), monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"), weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"), weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"), weekdaysMin: "日_一_二_三_四_五_六".split("_"), ordinal: function(o, a) {
      return a === "W" ? o + "週" : o + "日";
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY/MM/DD", LL: "YYYY年M月D日", LLL: "YYYY年M月D日 HH:mm", LLLL: "YYYY年M月D日dddd HH:mm" }, relativeTime: { future: "%s內", past: "%s前", s: "幾秒", m: "一分鐘", mm: "%d 分鐘", h: "一小時", hh: "%d 小時", d: "一天", dd: "%d 天", M: "一個月", MM: "%d 個月", y: "一年", yy: "%d 年" } };
    return s.default.locale(i, null, !0), i;
  });
})(Q$);
var eH = pa, tH = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
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
var rH = ha, oH = /* @__PURE__ */ z({
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
    e.exports = r(A);
  })(V, function(n) {
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
var iH = _a, aH = /* @__PURE__ */ z({
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
  const [S, j] = oe({
    startDate: null,
    endDate: null
  }), Y = "en";
  ue(() => {
    j({
      startDate: M || null,
      endDate: M || null
    });
  }, [M]);
  const I = (N) => {
    j(N), e(N.startDate);
  }, k = () => {
    j({
      startDate: null,
      endDate: null
    }), t == null || t();
  }, C = (N) => {
    (N.key === "Backspace" || N.key === "Delete") && t && N.target.value === "" && (j({
      startDate: null,
      endDate: null
    }), t());
  };
  return /* @__PURE__ */ g.jsxs("div", { className: J("max-w-[174px] relative", h), children: [
    i && /* @__PURE__ */ g.jsx("p", { className: "text-sm text-light-dark mb-1", children: i }),
    /* @__PURE__ */ g.jsx("div", { onKeyUp: C, children: /* @__PURE__ */ g.jsx(
      $D,
      {
        readOnly: !1,
        value: S,
        onChange: I,
        disabled: n,
        displayFormat: u,
        startWeekOn: s,
        invalid: r,
        invalidColor: f,
        invalidText: l,
        emptyLabel: o,
        fillLabel: a,
        i18n: c || Y,
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
    t && S.startDate && S.startDate !== "" && /* @__PURE__ */ g.jsx(
      Hv,
      {
        className: "cursor-pointer absolute right-3 top-3",
        height: 16,
        onClick: k
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
var tn = globalThis != null && globalThis.document ? b.useLayoutEffect : () => {
}, fH = b[" useInsertionEffect ".trim().toString()] || tn;
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
    const { scope: _, children: v } = h, M = D.useRef(null), y = D.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ g.jsx(s, { scope: _, itemMap: y, collectionRef: M, children: v });
  };
  o.displayName = t;
  const a = e + "CollectionSlot", l = /* @__PURE__ */ va(a), u = D.forwardRef(
    (h, _) => {
      const { scope: v, children: M } = h, y = i(a, v), x = Je(_, y.collectionRef);
      return /* @__PURE__ */ g.jsx(l, { ref: x, children: M });
    }
  );
  u.displayName = a;
  const c = e + "CollectionItemSlot", d = "data-radix-collection-item", f = /* @__PURE__ */ va(c), m = D.forwardRef(
    (h, _) => {
      const { scope: v, children: M, ...y } = h, x = D.useRef(null), w = Je(_, x), S = i(c, v);
      return D.useEffect(() => (S.itemMap.set(x, { ref: x, ...y }), () => void S.itemMap.delete(x))), /* @__PURE__ */ g.jsx(f, { [d]: "", ref: w, children: M });
    }
  );
  m.displayName = c;
  function p(h) {
    const _ = i(e + "CollectionConsumer", h);
    return D.useCallback(() => {
      const M = _.collectionRef.current;
      if (!M) return [];
      const y = Array.from(M.querySelectorAll(`[${d}]`));
      return Array.from(_.itemMap.values()).sort(
        (S, j) => y.indexOf(S.ref.current) - y.indexOf(j.ref.current)
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
    var j;
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: s,
      onFocusOutside: i,
      onInteractOutside: o,
      onDismiss: a,
      ...l
    } = e, u = b.useContext(Bv), [c, d] = b.useState(null), f = (j = c == null ? void 0 : c.ownerDocument) != null ? j : globalThis == null ? void 0 : globalThis.document, [, m] = b.useState({}), p = Je(t, (Y) => d(Y)), h = Array.from(u.layers), [_] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1), v = h.indexOf(_), M = c ? h.indexOf(c) : -1, y = u.layersWithOutsidePointerEventsDisabled.size > 0, x = M >= v, w = DH((Y) => {
      const I = Y.target, k = [...u.branches].some((C) => C.contains(I));
      !x || k || (s == null || s(Y), o == null || o(Y), Y.defaultPrevented || a == null || a());
    }, f), S = TH((Y) => {
      const I = Y.target;
      [...u.branches].some((C) => C.contains(I)) || (i == null || i(Y), o == null || o(Y), Y.defaultPrevented || a == null || a());
    }, f);
    return xH((Y) => {
      M === u.layers.size - 1 && (r == null || r(Y), !Y.defaultPrevented && a && (Y.preventDefault(), a()));
    }, f), b.useEffect(() => {
      if (c)
        return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Vm = f.body.style.pointerEvents, f.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(c)), u.layers.add(c), zm(), () => {
          n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (f.body.style.pointerEvents = Vm);
        };
    }, [c, f, n, u]), b.useEffect(() => () => {
      c && (u.layers.delete(c), u.layersWithOutsidePointerEventsDisabled.delete(c), zm());
    }, [c, u]), b.useEffect(() => {
      const Y = () => m({});
      return document.addEventListener(Au, Y), () => document.removeEventListener(Au, Y);
    }, []), /* @__PURE__ */ g.jsx(
      Ue.div,
      {
        ...l,
        ref: p,
        style: {
          pointerEvents: y ? x ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: ve(e.onFocusCapture, S.onFocusCapture),
        onBlurCapture: ve(e.onBlurCapture, S.onBlurCapture),
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
  return tn(() => {
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
  return tn(() => {
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
    } = e, _ = Zv(hd, n), [v, M] = b.useState(null), y = Je(t, (lt) => M(lt)), [x, w] = b.useState(null), S = VH(x), j = (W = S == null ? void 0 : S.width) != null ? W : 0, Y = (Q = S == null ? void 0 : S.height) != null ? Q : 0, I = r + (i !== "center" ? "-" + i : ""), k = typeof c == "number" ? c : { top: 0, right: 0, bottom: 0, left: 0, ...c }, C = Array.isArray(u) ? u : [u], N = C.length > 0, U = {
      padding: k,
      boundary: C.filter(KH),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: N
    }, { refs: O, floatingStyles: E, placement: $, isPositioned: R, middlewareData: L } = fh({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: I,
      whileElementsMounted: (...lt) => ch(...lt, {
        animationFrame: m === "always"
      }),
      elements: {
        reference: _.anchor
      },
      middleware: [
        pc({ mainAxis: s + Y, alignmentAxis: o }),
        l && mh({
          mainAxis: !0,
          crossAxis: !1,
          limiter: d === "partial" ? yx() : void 0,
          ...U
        }),
        l && ph({ ...U }),
        hh({
          ...U,
          apply: ({ elements: lt, rects: sr, availableWidth: tl, availableHeight: ce }) => {
            const { width: ie, height: ze } = sr.reference, He = lt.floating.style;
            He.setProperty("--radix-popper-available-width", `${tl}px`), He.setProperty("--radix-popper-available-height", `${ce}px`), He.setProperty("--radix-popper-anchor-width", `${ie}px`), He.setProperty("--radix-popper-anchor-height", `${ze}px`);
          }
        }),
        x && bx({ element: x, padding: a }),
        GH({ arrowWidth: j, arrowHeight: Y }),
        f && Mx({ strategy: "referenceHidden", ...U })
      ]
    }), [P, B] = sg($), T = St(p);
    tn(() => {
      R && (T == null || T());
    }, [R, T]);
    const H = (se = L.arrow) == null ? void 0 : se.x, F = (he = L.arrow) == null ? void 0 : he.y, K = ((le = L.arrow) == null ? void 0 : le.centerOffset) !== 0, [ne, G] = b.useState();
    return tn(() => {
      v && G(window.getComputedStyle(v).zIndex);
    }, [v]), /* @__PURE__ */ g.jsx(
      "div",
      {
        ref: O.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...E,
          transform: R ? E.transform : "translate(0, -200%)",
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
            placedSide: P,
            onArrowChange: w,
            arrowX: H,
            arrowY: F,
            shouldHideArrow: K,
            children: /* @__PURE__ */ g.jsx(
              Ue.div,
              {
                "data-side": P,
                "data-align": B,
                ...h,
                ref: y,
                style: {
                  ...h.style,
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
  tn(() => i(!0), []);
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
  }, [a]), tn(() => {
    const u = r.current, c = s.current;
    if (c !== e) {
      const f = i.current, m = mo(u);
      e ? l("MOUNT") : m === "none" || (u == null ? void 0 : u.display) === "none" ? l("UNMOUNT") : l(c && f !== m ? "ANIMATION_OUT" : "UNMOUNT"), s.current = e;
    }
  }, [e, l]), tn(() => {
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
  }), [v, M] = b.useState(!1), y = St(u), x = lg(n), w = b.useRef(!1), [S, j] = b.useState(0);
  return b.useEffect(() => {
    const Y = f.current;
    if (Y)
      return Y.addEventListener($l, y), () => Y.removeEventListener($l, y);
  }, [y]), /* @__PURE__ */ g.jsx(
    sO,
    {
      scope: n,
      orientation: r,
      dir: p,
      loop: s,
      currentTabStopId: h,
      onItemFocus: b.useCallback(
        (Y) => _(Y),
        [_]
      ),
      onItemShiftTab: b.useCallback(() => M(!0), []),
      onFocusableItemAdd: b.useCallback(
        () => j((Y) => Y + 1),
        []
      ),
      onFocusableItemRemove: b.useCallback(
        () => j((Y) => Y - 1),
        []
      ),
      children: /* @__PURE__ */ g.jsx(
        Ue.div,
        {
          tabIndex: v || S === 0 ? -1 : 0,
          "data-orientation": r,
          ...d,
          ref: m,
          style: { outline: "none", ...e.style },
          onMouseDown: ve(e.onMouseDown, () => {
            w.current = !0;
          }),
          onFocus: ve(e.onFocus, (Y) => {
            const I = !w.current;
            if (Y.target === Y.currentTarget && I && !v) {
              const k = new CustomEvent($l, nO);
              if (Y.currentTarget.dispatchEvent(k), !k.defaultPrevented) {
                const C = x().filter(($) => $.focusable), N = C.find(($) => $.active), U = C.find(($) => $.id === h), E = [N, U, ...C].filter(
                  Boolean
                ).map(($) => $.ref.current);
                mg(E, c);
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
  }), s = r[0], i = r[1], o = e.forwardProps, a = e.children, l = e.className, u = e.removeScrollBar, c = e.enabled, d = e.shards, f = e.sideCar, m = e.noRelative, p = e.noIsolation, h = e.inert, _ = e.allowPinchZoom, v = e.as, M = v === void 0 ? "div" : v, y = e.gapMode, x = hg(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noRelative", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), w = f, S = wO([n, t]), j = vt(vt({}, x), s);
  return b.createElement(
    b.Fragment,
    null,
    c && b.createElement(w, { sideCar: vg, removeScrollBar: u, shards: d, noRelative: m, noIsolation: p, inert: h, setCallbacks: i, allowPinchZoom: !!_, lockRef: n, gapMode: y }),
    o ? b.cloneElement(b.Children.only(a), vt(vt({}, j), { ref: S })) : b.createElement(M, vt({}, j, { className: l, ref: S }), a)
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
    var v = vo(h), M = n.current, y = "deltaX" in h ? h.deltaX : M[0] - v[0], x = "deltaY" in h ? h.deltaY : M[1] - v[1], w, S = h.target, j = Math.abs(y) > Math.abs(x) ? "h" : "v";
    if ("touches" in h && j === "h" && S.type === "range")
      return !1;
    var Y = Xm(j, S);
    if (!Y)
      return !0;
    if (Y ? w = j : (w = j === "v" ? "h" : "v", Y = Xm(j, S)), !Y)
      return !1;
    if (!r.current && "changedTouches" in h && (y || x) && (r.current = w), !w)
      return !0;
    var I = r.current || w;
    return KO(I, _, h, I === "h" ? y : x);
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
]), no = Xv(), Lg = ug(), [Sg, sn] = xn(to), [iR, ro] = xn(to), kg = (e) => {
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
  const { __scopeMenu: t, forceMount: n, children: r, container: s } = e, i = sn(vd, t);
  return /* @__PURE__ */ g.jsx(lR, { scope: t, forceMount: n, children: /* @__PURE__ */ g.jsx(Qr, { present: n || i.open, children: /* @__PURE__ */ g.jsx(ag, { asChild: !0, container: s, children: r }) }) });
};
Tg.displayName = vd;
var it = "MenuContent", [uR, gd] = xn(it), Eg = b.forwardRef(
  (e, t) => {
    const n = Dg(it, e.__scopeMenu), { forceMount: r = n.forceMount, ...s } = e, i = sn(it, e.__scopeMenu), o = ro(it, e.__scopeMenu);
    return /* @__PURE__ */ g.jsx(Or.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ g.jsx(Qr, { present: r || i.open, children: /* @__PURE__ */ g.jsx(Or.Slot, { scope: e.__scopeMenu, children: o.modal ? /* @__PURE__ */ g.jsx(cR, { ...s, ref: t }) : /* @__PURE__ */ g.jsx(dR, { ...s, ref: t }) }) }) });
  }
), cR = b.forwardRef(
  (e, t) => {
    const n = sn(it, e.__scopeMenu), r = b.useRef(null), s = Je(t, r);
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
  const n = sn(it, e.__scopeMenu);
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
    } = e, _ = sn(it, n), v = ro(it, n), M = no(n), y = Lg(n), x = oR(n), [w, S] = b.useState(null), j = b.useRef(null), Y = Je(t, j, _.onContentChange), I = b.useRef(0), k = b.useRef(""), C = b.useRef(0), N = b.useRef(null), U = b.useRef("right"), O = b.useRef(0), E = p ? xg : b.Fragment, $ = p ? { as: fR, allowPinchZoom: !0 } : void 0, R = (P) => {
      var W, Q;
      const B = k.current + P, T = x().filter((se) => !se.disabled), H = document.activeElement, F = (W = T.find((se) => se.ref.current === H)) == null ? void 0 : W.textValue, K = T.map((se) => se.textValue), ne = YR(K, B, F), G = (Q = T.find((se) => se.textValue === ne)) == null ? void 0 : Q.ref.current;
      (function se(he) {
        k.current = he, window.clearTimeout(I.current), he !== "" && (I.current = window.setTimeout(() => se(""), 1e3));
      })(B), G && setTimeout(() => G.focus());
    };
    b.useEffect(() => () => window.clearTimeout(I.current), []), EH();
    const L = b.useCallback((P) => {
      var T, H;
      return U.current === ((T = N.current) == null ? void 0 : T.side) && SR(P, (H = N.current) == null ? void 0 : H.area);
    }, []);
    return /* @__PURE__ */ g.jsx(
      uR,
      {
        scope: n,
        searchRef: k,
        onItemEnter: b.useCallback(
          (P) => {
            L(P) && P.preventDefault();
          },
          [L]
        ),
        onItemLeave: b.useCallback(
          (P) => {
            var B;
            L(P) || ((B = j.current) == null || B.focus(), S(null));
          },
          [L]
        ),
        onTriggerLeave: b.useCallback(
          (P) => {
            L(P) && P.preventDefault();
          },
          [L]
        ),
        pointerGraceTimerRef: C,
        onPointerGraceIntentChange: b.useCallback((P) => {
          N.current = P;
        }, []),
        children: /* @__PURE__ */ g.jsx(E, { ...$, children: /* @__PURE__ */ g.jsx(
          Kv,
          {
            asChild: !0,
            trapped: s,
            onMountAutoFocus: ve(i, (P) => {
              var B;
              P.preventDefault(), (B = j.current) == null || B.focus({ preventScroll: !0 });
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
                    onCurrentTabStopIdChange: S,
                    onEntryFocus: ve(l, (P) => {
                      v.isUsingKeyboardRef.current || P.preventDefault();
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
                        ref: Y,
                        style: { outline: "none", ...h.style },
                        onKeyDown: ve(h.onKeyDown, (P) => {
                          const T = P.target.closest("[data-radix-menu-content]") === P.currentTarget, H = P.ctrlKey || P.altKey || P.metaKey, F = P.key.length === 1;
                          T && (P.key === "Tab" && P.preventDefault(), !H && F && R(P.key));
                          const K = j.current;
                          if (P.target !== K || !tR.includes(P.key)) return;
                          P.preventDefault();
                          const G = x().filter((W) => !W.disabled).map((W) => W.ref.current);
                          wg.includes(P.key) && G.reverse(), xR(G);
                        }),
                        onBlur: ve(e.onBlur, (P) => {
                          P.currentTarget.contains(P.target) || (window.clearTimeout(I.current), k.current = "");
                        }),
                        onPointerMove: ve(
                          e.onPointerMove,
                          Rr((P) => {
                            const B = P.target, T = O.current !== P.clientX;
                            if (P.currentTarget.contains(B) && T) {
                              const H = P.clientX > O.current ? "right" : "left";
                              U.current = H, O.current = P.clientX;
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
  const { __scopeMenu: t, children: n, open: r = !1, onOpenChange: s } = e, i = sn(xd, t), o = no(t), [a, l] = b.useState(null), [u, c] = b.useState(null), d = St(s);
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
    const n = sn(hr, e.__scopeMenu), r = ro(hr, e.__scopeMenu), s = Vg(hr, e.__scopeMenu), i = gd(hr, e.__scopeMenu), o = b.useRef(null), { pointerGraceTimerRef: a, onPointerGraceIntentChange: l } = i, u = { __scopeMenu: e.__scopeMenu }, c = b.useCallback(() => {
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
    const n = Dg(it, e.__scopeMenu), { forceMount: r = n.forceMount, ...s } = e, i = sn(it, e.__scopeMenu), o = ro(it, e.__scopeMenu), a = Vg(Wg, e.__scopeMenu), l = b.useRef(null), u = Je(t, l);
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
          X0,
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
            Un.div,
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
            qt,
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
            Sc,
            {
              className: "absolute scale-[0.4] -translate-y-[7px]",
              innerClassName: "!text-dark"
            }
          )
        ]
      }
    ) }) }),
    /* @__PURE__ */ g.jsx(Zc, { children: u && /* @__PURE__ */ g.jsx(tp, { children: /* @__PURE__ */ g.jsx(
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
          Un.div,
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
}, y2 = D.createContext({}), oy = !0;
function M2({ baseColor: e, highlightColor: t, width: n, height: r, borderRadius: s, circle: i, direction: o, duration: a, enableAnimation: l = oy, customHighlightBackground: u }) {
  const c = {};
  return o === "rtl" && (c["--animation-direction"] = "reverse"), typeof a == "number" && (c["--animation-duration"] = `${a}s`), l || (c["--pseudo-element-display"] = "none"), (typeof n == "string" || typeof n == "number") && (c.width = n), (typeof r == "string" || typeof r == "number") && (c.height = r), (typeof s == "string" || typeof s == "number") && (c.borderRadius = s), i && (c.borderRadius = "50%"), typeof e != "undefined" && (c["--base-color"] = e), typeof t != "undefined" && (c["--highlight-color"] = t), typeof u == "string" && (c["--custom-highlight-background"] = u), c;
}
function Il({ count: e = 1, wrapper: t, className: n, containerClassName: r, containerTestId: s, circle: i = !1, style: o, ...a }) {
  var l, u, c;
  const d = D.useContext(y2), f = { ...a };
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
      const S = (u = x.width) !== null && u !== void 0 ? u : "100%", j = e % 1, Y = typeof S == "number" ? S * j : `calc(${S} * ${j})`;
      x = { ...x, width: Y };
    }
    const w = D.createElement("span", { className: h, style: x, key: y }, "‌");
    _ ? v.push(w) : v.push(D.createElement(
      D.Fragment,
      { key: y },
      w,
      D.createElement("br", null)
    ));
  }
  return D.createElement("span", { className: r, "data-testid": s, "aria-live": "polite", "aria-busy": (c = m.enableAnimation) !== null && c !== void 0 ? c : oy }, t ? v.map((y, x) => D.createElement(t, { key: x }, y)) : v);
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
    for (let S = 0; S < w.length; ++S) {
      const j = w[S];
      o.push(y + j);
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
), uy = () => !1, z2 = (e) => N2.test(e), B2 = (e) => I2.test(e), W2 = (e) => !ee(e) && !te(e), U2 = (e) => rr(e, fy, uy), ee = (e) => ay.test(e), ln = (e) => rr(e, my, V2), Vl = (e) => rr(e, X2, fe), sp = (e) => rr(e, cy, uy), K2 = (e) => rr(e, dy, B2), go = (e) => rr(e, py, z2), te = (e) => ly.test(e), ur = (e) => or(e, my), G2 = (e) => or(e, Z2), ip = (e) => or(e, cy), J2 = (e) => or(e, fy), q2 = (e) => or(e, dy), yo = (e) => or(e, py, !0), rr = (e, t, n) => {
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
  ], w = () => [...x(), te, ee], S = () => ["auto", "hidden", "clip", "visible", "scroll"], j = () => ["auto", "contain", "none"], Y = () => [te, ee, l], I = () => [kn, "full", "auto", ...Y()], k = () => [Bt, "none", "subgrid", te, ee], C = () => ["auto", {
    span: ["full", Bt, te, ee]
  }, Bt, te, ee], N = () => [Bt, "auto", te, ee], U = () => ["auto", "min", "max", "fr", te, ee], O = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], E = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], $ = () => ["auto", ...Y()], R = () => [kn, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...Y()], L = () => [e, te, ee], P = () => [...x(), ip, sp, {
    position: [te, ee]
  }], B = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], T = () => ["auto", "cover", "contain", J2, U2, {
    size: [te, ee]
  }], H = () => [Fl, ur, ln], F = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    u,
    te,
    ee
  ], K = () => ["", fe, ur, ln], ne = () => ["solid", "dashed", "dotted", "double"], G = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], W = () => [fe, Fl, ip, sp], Q = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    p,
    te,
    ee
  ], se = () => ["none", fe, te, ee], he = () => ["none", fe, te, ee], le = () => [fe, te, ee], Ce = () => [kn, "full", ...Y()];
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
        overflow: S()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": S()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": S()
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
        inset: I()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": I()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": I()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: I()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: I()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: I()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: I()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: I()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: I()
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
        basis: [kn, "full", "auto", a, ...Y()]
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
        "grid-cols": k()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: C()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": N()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": N()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": k()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: C()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": N()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": N()
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
        gap: Y()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": Y()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": Y()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...O(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...E(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...E()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...O()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...E(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...E(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": O()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...E(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...E()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: Y()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: Y()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: Y()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: Y()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: Y()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: Y()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: Y()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: Y()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: Y()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: $()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: $()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: $()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: $()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: $()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: $()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: $()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: $()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: $()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": Y()
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
        "space-y": Y()
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
        text: ["base", n, ur, ln]
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
          ...Y()
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
        decoration: [fe, "from-font", "auto", te, ln]
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
        indent: Y()
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
        bg: P()
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
        from: H()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: H()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: H()
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
        rounded: F()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": F()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": F()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": F()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": F()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": F()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": F()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": F()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": F()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": F()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": F()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": F()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": F()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": F()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": F()
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
        outline: ["", fe, ur, ln]
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
        "ring-offset": [fe, ln]
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
        mask: P()
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
        "border-spacing": Y()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": Y()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": Y()
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
        "scroll-m": Y()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": Y()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": Y()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": Y()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": Y()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": Y()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": Y()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": Y()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": Y()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": Y()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": Y()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": Y()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": Y()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": Y()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": Y()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": Y()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": Y()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": Y()
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
        stroke: [fe, ur, ln, Vl]
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
            children: /* @__PURE__ */ g.jsx(Hv, { className: "w-8 stroke-1" })
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
      const v = _.currentTarget, M = v.getBoundingClientRect(), y = v.offsetWidth - v.clientWidth, w = M.right - _.clientX <= Math.max(y, 8) || window.innerWidth - _.clientX <= ap, S = f.current ? f.current.contains(_.target) : !1;
      c.current = { area: S ? "panel" : "overlay", nearEdge: w };
    }, []);
    return /* @__PURE__ */ g.jsx(Ba, { appear: !0, show: n, as: Ae, children: /* @__PURE__ */ g.jsx(Na, { children: /* @__PURE__ */ g.jsxs(
      t0,
      {
        as: "div",
        className: "relative z-[99999]",
        onClose: p,
        children: [
          /* @__PURE__ */ g.jsx(
            Tr,
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
                    Tr,
                    {
                      as: Ae,
                      enter: "ease-out duration-300",
                      enterFrom: "opacity-0 scale-95",
                      enterTo: "opacity-100 scale-100",
                      leave: "ease-in duration-200",
                      leaveFrom: "opacity-100 scale-100",
                      leaveTo: "opacity-0 scale-95",
                      children: /* @__PURE__ */ g.jsxs(
                        Uh,
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
                                children: /* @__PURE__ */ g.jsx(No, { className: "h-7 w-7", "aria-hidden": "true" })
                              }
                            ) : /* @__PURE__ */ g.jsxs("div", { className: "min-h-[62px] bg-light-4-tint py-[10px] px-[20px] rounded-t-[20px] flex items-center justify-between", children: [
                              /* @__PURE__ */ g.jsx("div", { className: "font-bold text-lg md:text-xl text-dark truncate", children: e }),
                              /* @__PURE__ */ g.jsx(
                                "button",
                                {
                                  className: "hover:bg-light-3-tint rounded-full p-[7px] text-dark transition-all duration-100 outline-0",
                                  hidden: !t,
                                  onClick: t,
                                  children: /* @__PURE__ */ g.jsx(No, { className: "h-7 w-7", "aria-hidden": "true" })
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
    actionPosition: S,
    onActionClick: j,
    disabled: Y = !1,
    withoutErrorMessage: I = !1,
    icon: k,
    onIconClick: C,
    readOnly: N,
    warning: U
  }, O) => /* @__PURE__ */ g.jsxs("div", { className: Ld("transition-all max-w-[257px] w-full", e), children: [
    r && /* @__PURE__ */ g.jsxs("div", { className: "flex items-center justify-between gap-2 mb-1.5", children: [
      /* @__PURE__ */ g.jsxs(
        "label",
        {
          htmlFor: i,
          className: J("block text-light-dark text-sm", Y && "!text-light-3"),
          children: [
            r,
            u && /* @__PURE__ */ g.jsx("span", { className: "text-danger", children: " *" })
          ]
        }
      ),
      s && /* @__PURE__ */ g.jsx(
        "span",
        {
          className: J("block text-light text-sm truncate", Y && "!text-light-3"),
          children: s
        }
      )
    ] }),
    /* @__PURE__ */ g.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ g.jsx(
        "input",
        {
          ref: O,
          className: J(
            "peer h-[40px] bg-white border text-[14px] border-light-3 rounded py-[7px] px-[15px] text-dark w-full transition-colors duration-100 !outline-0 !outline-offset-0",
            x && "border-danger outline !outline-[1px] outline-danger",
            "hover:bg-fo-accent-tint hover:border-fo-accent hover:outline hover:!outline-[1px] hover:outline-fo-accent",
            "focus:border-fo-accent focus:outline focus:!outline-[1px] focus:outline-fo-accent",
            Y && "!bg-transparent !border !border-light-3-tint !text-light-3 !py-[7px] !px-[15px] cursor-not-allowed !outline-none",
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
          disabled: Y,
          readOnly: N,
          style: _ ? { paddingLeft: v + 7 } : {}
        }
      ),
      _ && /* @__PURE__ */ g.jsx(
        "div",
        {
          className: J(
            `flex items-center justify-center text-light-dark text-sm absolute top-px left-px h-[38px] bg-light-4-tint rounded-l pointer-events-none transition-all duration-100 overflow-hidden peer-hover:bg-fo-accent-light peer-hover:w-[${v - 2}px] peer-focus:w-[${v - 2}px]`,
            x && `w-[${v - 2}px]`,
            Y && "!bg-transparent opacity-60"
          ),
          style: { width: v },
          children: _
        }
      ),
      k && /* @__PURE__ */ g.jsx(
        "div",
        {
          className: J("absolute z-10 top-2 right-4 cursor-pointer", n),
          onClick: C,
          children: k
        }
      )
    ] }),
    (!I && x || w) && /* @__PURE__ */ g.jsxs("div", { className: "flex items-start justify-between mt-1", children: [
      !I && x && /* @__PURE__ */ g.jsx(
        "div",
        {
          className: J(
            w ? "max-w-[70%]" : "max-w-full",
            S === "left" && "order-last"
          ),
          children: /* @__PURE__ */ g.jsx("p", { className: "text-danger text-xs mt-1 break-all", children: x })
        }
      ),
      w && /* @__PURE__ */ g.jsx(
        "div",
        {
          className: J(
            "flex w-full",
            S === "right" ? "justify-end" : "justify-start"
          ),
          children: /* @__PURE__ */ g.jsx(
            "button",
            {
              onClick: j,
              className: J("text-medium text-sm underline", Y && "!text-light-3"),
              disabled: Y,
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
    /* @__PURE__ */ g.jsx(oN, { children: /* @__PURE__ */ g.jsx(Zc, { children: s && /* @__PURE__ */ g.jsxs(
      Un.div,
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
      H0,
      {
        as: "div",
        name: d,
        disabled: h,
        value: i,
        onChange: l,
        multiple: _,
        children: [
          /* @__PURE__ */ g.jsxs(
            e_,
            {
              className: ({ open: y }) => `relative w-full max-w-[572px] text-[14px] min-h-[40px] border border-light-3 cursor-pointer rounded-[3px] bg-white py-[7px] pl-[15px] text-left transition-colors duration-100 !outline-offset-0 truncate min-w-0
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
                /* @__PURE__ */ g.jsx("span", { className: "absolute inset-y-0 right-0 flex items-center pr-[10px] z-0 pointer-events-none", children: /* @__PURE__ */ g.jsx("span", { children: /* @__PURE__ */ g.jsx(qt, { className: "h-4 w-4" }) }) })
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
            Ba,
            {
              as: Ae,
              leave: "transition ease-in duration-100",
              leaveFrom: "opacity-100",
              leaveTo: "opacity-0",
              children: /* @__PURE__ */ g.jsx(
                t_,
                {
                  className: J(
                    "absolute mt-[1px] z-10 max-w-[572px] max-h-[200px] w-full overflow-auto rounded-b-[3px] bg-white py-2 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
                    r
                  ),
                  children: a.length > 0 ? /* @__PURE__ */ g.jsx(g.Fragment, { children: a.map((y, x) => /* @__PURE__ */ g.jsx(
                    n_,
                    {
                      value: y,
                      title: y.name,
                      disabled: y.unavailable,
                      className: ({ focus: w }) => `relative cursor-pointer select-none text-[14px] py-2 pl-[35px] pr-4 transition-colors duration-100 ${w && "bg-fo-accent-tint"}
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
                            children: /* @__PURE__ */ g.jsx(Ro, { className: "h-4 w-4", "aria-hidden": "true" })
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
            children: /* @__PURE__ */ g.jsx(W1, { className: "w-[16px] h-[16px]" })
          }
        ),
        s && /* @__PURE__ */ g.jsx(
          "span",
          {
            className: "flex items-center text-dark cursor-pointer",
            onClick: s,
            children: /* @__PURE__ */ g.jsx(z1, { className: "w-4 h-4" })
          }
        ),
        o && /* @__PURE__ */ g.jsx(
          sN,
          {
            label: "Save current preferences",
            style: { wordBreak: "break-word" },
            children: /* @__PURE__ */ g.jsx(
              N1,
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
                Q0,
                {
                  className: J(
                    "h-3 w-3 text-light-3",
                    e.state === "asc" && "!text-dark"
                  )
                }
              ),
              /* @__PURE__ */ g.jsx(
                qt,
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
      return /* @__PURE__ */ g.jsx("span", { className: "text-success", children: /* @__PURE__ */ g.jsx(Ro, { className: J("transition h-4 w-4"), "aria-hidden": "true" }) });
    case "warning":
      return /* @__PURE__ */ g.jsx("span", { className: "text-warning", children: /* @__PURE__ */ g.jsx(
        tY,
        {
          className: J("transition h-5 w-5"),
          "aria-hidden": "true"
        }
      ) });
    default:
      return /* @__PURE__ */ g.jsx("span", { className: "text-success", children: /* @__PURE__ */ g.jsx(Ro, { className: J("transition h-4 w-4"), "aria-hidden": "true" }) });
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
          Un.span,
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
}) => /* @__PURE__ */ g.jsxs("div", { className: J("transition-all", e, d && "pointer-events-none"), children: [
  o && /* @__PURE__ */ g.jsxs(
    "label",
    {
      htmlFor: n,
      className: J("block text-light-dark text-sm pb-2", d && "!text-light-3"),
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
        "min-h-[148px] bg-white border text-[14px] border-light-3 rounded py-[7px] px-[15px] text-base text-dark w-full transition-colors duration-100 !outline-offset-0",
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
] }), cN = "@carauktion/component-library", dN = "0.2.0", vy = {
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
  wN as Accordion,
  YN as AccordionGroup,
  LN as AccordionRow,
  fo as Arrow,
  pr as ArrowType,
  bN as Autocomplete,
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
  Sc as Spinner,
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
