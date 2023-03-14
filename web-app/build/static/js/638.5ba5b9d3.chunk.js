"use strict";
(self.webpackChunkweb_app = self.webpackChunkweb_app || []).push([
  [638],
  {
    7638: function (e, o, n) {
      n.r(o),
        n.d(o, {
          default: function () {
            return se;
          },
        });
      var t = n(9439),
        r = n(2791),
        i = n(3366),
        a = n(7462),
        l = n(8182),
        s = n(4419),
        c = n(7630),
        d = n(3736),
        p = n(890),
        u = n(5878),
        m = n(1217);
      function f(e) {
        return (0, m.Z)("MuiDialogContentText", e);
      }
      (0, u.Z)("MuiDialogContentText", ["root"]);
      var v = n(184),
        x = ["children", "className"],
        h = (0, c.ZP)(p.Z, {
          shouldForwardProp: function (e) {
            return (0, c.FO)(e) || "classes" === e;
          },
          name: "MuiDialogContentText",
          slot: "Root",
          overridesResolver: function (e, o) {
            return o.root;
          },
        })({}),
        Z = r.forwardRef(function (e, o) {
          var n = (0, d.Z)({ props: e, name: "MuiDialogContentText" }),
            t = n.className,
            r = (0, i.Z)(n, x),
            c = (function (e) {
              var o = e.classes,
                n = (0, s.Z)({ root: ["root"] }, f, o);
              return (0, a.Z)({}, o, n);
            })(r);
          return (0,
          v.jsx)(h, (0, a.Z)({ component: "p", variant: "body1", color: "text.secondary", ref: o, ownerState: r, className: (0, l.Z)(c.root, t) }, n, { classes: c }));
        }),
        g = n(4740),
        b = n(7995),
        C = n(3302),
        S = n(5952),
        w = n(2880),
        k = n(1413),
        W = n(4942),
        y = n(6248),
        j = n(4036),
        D = n(4082),
        M = n(2003),
        N = n(5527);
      function P(e) {
        return (0, m.Z)("MuiDialog", e);
      }
      var T = (0, u.Z)("MuiDialog", [
        "root",
        "scrollPaper",
        "scrollBody",
        "container",
        "paper",
        "paperScrollPaper",
        "paperScrollBody",
        "paperWidthFalse",
        "paperWidthXs",
        "paperWidthSm",
        "paperWidthMd",
        "paperWidthLg",
        "paperWidthXl",
        "paperFullWidth",
        "paperFullScreen",
      ]);
      var R = (0, r.createContext)({}),
        B = n(2739),
        A = n(3967),
        I = [
          "aria-describedby",
          "aria-labelledby",
          "BackdropComponent",
          "BackdropProps",
          "children",
          "className",
          "disableEscapeKeyDown",
          "fullScreen",
          "fullWidth",
          "maxWidth",
          "onBackdropClick",
          "onClose",
          "open",
          "PaperComponent",
          "PaperProps",
          "scroll",
          "TransitionComponent",
          "transitionDuration",
          "TransitionProps",
        ],
        E = (0, c.ZP)(B.Z, {
          name: "MuiDialog",
          slot: "Backdrop",
          overrides: function (e, o) {
            return o.backdrop;
          },
        })({ zIndex: -1 }),
        F = (0, c.ZP)(D.Z, {
          name: "MuiDialog",
          slot: "Root",
          overridesResolver: function (e, o) {
            return o.root;
          },
        })({ "@media print": { position: "absolute !important" } }),
        z = (0, c.ZP)("div", {
          name: "MuiDialog",
          slot: "Container",
          overridesResolver: function (e, o) {
            var n = e.ownerState;
            return [o.container, o["scroll".concat((0, j.Z)(n.scroll))]];
          },
        })(function (e) {
          var o = e.ownerState;
          return (0,
          a.Z)({ height: "100%", "@media print": { height: "auto" }, outline: 0 }, "paper" === o.scroll && { display: "flex", justifyContent: "center", alignItems: "center" }, "body" === o.scroll && { overflowY: "auto", overflowX: "hidden", textAlign: "center", "&:after": { content: '""', display: "inline-block", verticalAlign: "middle", height: "100%", width: "0" } });
        }),
        L = (0, c.ZP)(N.Z, {
          name: "MuiDialog",
          slot: "Paper",
          overridesResolver: function (e, o) {
            var n = e.ownerState;
            return [
              o.paper,
              o["scrollPaper".concat((0, j.Z)(n.scroll))],
              o["paperWidth".concat((0, j.Z)(String(n.maxWidth)))],
              n.fullWidth && o.paperFullWidth,
              n.fullScreen && o.paperFullScreen,
            ];
          },
        })(function (e) {
          var o = e.theme,
            n = e.ownerState;
          return (0,
          a.Z)({ margin: 32, position: "relative", overflowY: "auto", "@media print": { overflowY: "visible", boxShadow: "none" } }, "paper" === n.scroll && { display: "flex", flexDirection: "column", maxHeight: "calc(100% - 64px)" }, "body" === n.scroll && { display: "inline-block", verticalAlign: "middle", textAlign: "left" }, !n.maxWidth && { maxWidth: "calc(100% - 64px)" }, "xs" === n.maxWidth && (0, W.Z)({ maxWidth: "px" === o.breakpoints.unit ? Math.max(o.breakpoints.values.xs, 444) : "".concat(o.breakpoints.values.xs).concat(o.breakpoints.unit) }, "&.".concat(T.paperScrollBody), (0, W.Z)({}, o.breakpoints.down(Math.max(o.breakpoints.values.xs, 444) + 64), { maxWidth: "calc(100% - 64px)" })), n.maxWidth && "xs" !== n.maxWidth && (0, W.Z)({ maxWidth: "".concat(o.breakpoints.values[n.maxWidth]).concat(o.breakpoints.unit) }, "&.".concat(T.paperScrollBody), (0, W.Z)({}, o.breakpoints.down(o.breakpoints.values[n.maxWidth] + 64), { maxWidth: "calc(100% - 64px)" })), n.fullWidth && { width: "calc(100% - 64px)" }, n.fullScreen && (0, W.Z)({ margin: 0, width: "100%", maxWidth: "100%", height: "100%", maxHeight: "none", borderRadius: 0 }, "&.".concat(T.paperScrollBody), { margin: 0, maxWidth: "100%" }));
        }),
        O = r.forwardRef(function (e, o) {
          var n = (0, d.Z)({ props: e, name: "MuiDialog" }),
            t = (0, A.Z)(),
            c = {
              enter: t.transitions.duration.enteringScreen,
              exit: t.transitions.duration.leavingScreen,
            },
            p = n["aria-describedby"],
            u = n["aria-labelledby"],
            m = n.BackdropComponent,
            f = n.BackdropProps,
            x = n.children,
            h = n.className,
            Z = n.disableEscapeKeyDown,
            g = void 0 !== Z && Z,
            b = n.fullScreen,
            C = void 0 !== b && b,
            S = n.fullWidth,
            w = void 0 !== S && S,
            k = n.maxWidth,
            W = void 0 === k ? "sm" : k,
            D = n.onBackdropClick,
            T = n.onClose,
            B = n.open,
            O = n.PaperComponent,
            H = void 0 === O ? N.Z : O,
            K = n.PaperProps,
            Y = void 0 === K ? {} : K,
            X = n.scroll,
            _ = void 0 === X ? "paper" : X,
            G = n.TransitionComponent,
            q = void 0 === G ? M.Z : G,
            J = n.transitionDuration,
            Q = void 0 === J ? c : J,
            U = n.TransitionProps,
            V = (0, i.Z)(n, I),
            $ = (0, a.Z)({}, n, {
              disableEscapeKeyDown: g,
              fullScreen: C,
              fullWidth: w,
              maxWidth: W,
              scroll: _,
            }),
            ee = (function (e) {
              var o = e.classes,
                n = e.scroll,
                t = e.maxWidth,
                r = e.fullWidth,
                i = e.fullScreen,
                a = {
                  root: ["root"],
                  container: ["container", "scroll".concat((0, j.Z)(n))],
                  paper: [
                    "paper",
                    "paperScroll".concat((0, j.Z)(n)),
                    "paperWidth".concat((0, j.Z)(String(t))),
                    r && "paperFullWidth",
                    i && "paperFullScreen",
                  ],
                };
              return (0, s.Z)(a, P, o);
            })($),
            oe = r.useRef(),
            ne = (0, y.Z)(u),
            te = r.useMemo(
              function () {
                return { titleId: ne };
              },
              [ne]
            );
          return (0, v.jsx)(
            F,
            (0, a.Z)(
              {
                className: (0, l.Z)(ee.root, h),
                closeAfterTransition: !0,
                components: { Backdrop: E },
                componentsProps: {
                  backdrop: (0, a.Z)({ transitionDuration: Q, as: m }, f),
                },
                disableEscapeKeyDown: g,
                onClose: T,
                open: B,
                ref: o,
                onClick: function (e) {
                  oe.current &&
                    ((oe.current = null),
                    D && D(e),
                    T && T(e, "backdropClick"));
                },
                ownerState: $,
              },
              V,
              {
                children: (0, v.jsx)(
                  q,
                  (0, a.Z)(
                    { appear: !0, in: B, timeout: Q, role: "presentation" },
                    U,
                    {
                      children: (0, v.jsx)(z, {
                        className: (0, l.Z)(ee.container),
                        onMouseDown: function (e) {
                          oe.current = e.target === e.currentTarget;
                        },
                        ownerState: $,
                        children: (0, v.jsx)(
                          L,
                          (0, a.Z)(
                            {
                              as: H,
                              elevation: 24,
                              role: "dialog",
                              "aria-describedby": p,
                              "aria-labelledby": ne,
                            },
                            Y,
                            {
                              className: (0, l.Z)(ee.paper, Y.className),
                              ownerState: $,
                              children: (0, v.jsx)(R.Provider, {
                                value: te,
                                children: x,
                              }),
                            }
                          )
                        ),
                      }),
                    }
                  )
                ),
              }
            )
          );
        });
      function H(e) {
        return (0, m.Z)("MuiDialogTitle", e);
      }
      var K = (0, u.Z)("MuiDialogTitle", ["root"]),
        Y = ["className", "id"],
        X = (0, c.ZP)(p.Z, {
          name: "MuiDialogTitle",
          slot: "Root",
          overridesResolver: function (e, o) {
            return o.root;
          },
        })({ padding: "16px 24px", flex: "0 0 auto" }),
        _ = r.forwardRef(function (e, o) {
          var n = (0, d.Z)({ props: e, name: "MuiDialogTitle" }),
            t = n.className,
            c = n.id,
            p = (0, i.Z)(n, Y),
            u = n,
            m = (function (e) {
              var o = e.classes;
              return (0, s.Z)({ root: ["root"] }, H, o);
            })(u),
            f = r.useContext(R).titleId,
            x = void 0 === f ? c : f;
          return (0,
          v.jsx)(X, (0, a.Z)({ component: "h2", className: (0, l.Z)(m.root, t), ownerState: u, ref: o, variant: "h6", id: x }, p));
        });
      function G(e) {
        return (0, m.Z)("MuiDialogContent", e);
      }
      (0, u.Z)("MuiDialogContent", ["root", "dividers"]);
      var q = ["className", "dividers"],
        J = (0, c.ZP)("div", {
          name: "MuiDialogContent",
          slot: "Root",
          overridesResolver: function (e, o) {
            var n = e.ownerState;
            return [o.root, n.dividers && o.dividers];
          },
        })(function (e) {
          var o = e.theme,
            n = e.ownerState;
          return (0,
          a.Z)({ flex: "1 1 auto", WebkitOverflowScrolling: "touch", overflowY: "auto", padding: "20px 24px" }, n.dividers ? { padding: "16px 24px", borderTop: "1px solid ".concat((o.vars || o).palette.divider), borderBottom: "1px solid ".concat((o.vars || o).palette.divider) } : (0, W.Z)({}, ".".concat(K.root, " + &"), { paddingTop: 0 }));
        }),
        Q = r.forwardRef(function (e, o) {
          var n = (0, d.Z)({ props: e, name: "MuiDialogContent" }),
            t = n.className,
            r = n.dividers,
            c = void 0 !== r && r,
            p = (0, i.Z)(n, q),
            u = (0, a.Z)({}, n, { dividers: c }),
            m = (function (e) {
              var o = e.classes,
                n = { root: ["root", e.dividers && "dividers"] };
              return (0, s.Z)(n, G, o);
            })(u);
          return (0,
          v.jsx)(J, (0, a.Z)({ className: (0, l.Z)(m.root, t), ownerState: u, ref: o }, p));
        });
      function U(e) {
        return (0, m.Z)("MuiDialogActions", e);
      }
      (0, u.Z)("MuiDialogActions", ["root", "spacing"]);
      var V = ["className", "disableSpacing"],
        $ = (0, c.ZP)("div", {
          name: "MuiDialogActions",
          slot: "Root",
          overridesResolver: function (e, o) {
            var n = e.ownerState;
            return [o.root, !n.disableSpacing && o.spacing];
          },
        })(function (e) {
          var o = e.ownerState;
          return (0,
          a.Z)({ display: "flex", alignItems: "center", padding: 8, justifyContent: "flex-end", flex: "0 0 auto" }, !o.disableSpacing && { "& > :not(:first-of-type)": { marginLeft: 8 } });
        }),
        ee = r.forwardRef(function (e, o) {
          var n = (0, d.Z)({ props: e, name: "MuiDialogActions" }),
            t = n.className,
            r = n.disableSpacing,
            c = void 0 !== r && r,
            p = (0, i.Z)(n, V),
            u = (0, a.Z)({}, n, { disableSpacing: c }),
            m = (function (e) {
              var o = e.classes,
                n = { root: ["root", !e.disableSpacing && "spacing"] };
              return (0, s.Z)(n, U, o);
            })(u);
          return (0,
          v.jsx)($, (0, a.Z)({ className: (0, l.Z)(m.root, t), ownerState: u, ref: o }, p));
        }),
        oe = n(3400),
        ne = n(9823),
        te = n(1135),
        re = n(5787),
        ie = {
          root: { "& .MuiPaper-root": { padding: "1rem 2rem 2rem 1rem" } },
          title: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          },
          titleText: {
            fontSize: 20,
            fontWeight: 600,
            display: "flex",
            alignItems: "center",
            "& svg": { marginRight: 10 },
            wordBreak: "break-all",
            whiteSpace: "normal",
          },
          closeContainer: {
            "& .MuiIconButton-root": {
              top: -20,
              left: 30,
              position: "relative",
              padding: 1,
              "&:focus, &:hover": { background: "#EAEAEA" },
            },
            "& .min-icon": { height: 16, width: 16 },
          },
        },
        ae = (0, re.Z)(function (e) {
          return (0, te.Z)((0, k.Z)({}, ie));
        })(function (e) {
          var o = e.isOpen,
            n = void 0 !== o && o,
            t = e.onClose,
            r = e.onCancel,
            i = e.onConfirm,
            a = e.classes,
            l = void 0 === a ? {} : a,
            s = e.title,
            c = void 0 === s ? "" : s,
            d = e.isLoading,
            p = e.confirmationContent,
            u = e.cancelText,
            m = void 0 === u ? "Cancel" : u,
            f = e.confirmText,
            x = void 0 === f ? "Confirm" : f,
            h = e.confirmButtonProps,
            Z = void 0 === h ? void 0 : h,
            g = e.cancelButtonProps,
            b = void 0 === g ? void 0 : g,
            C = e.titleIcon,
            w = void 0 === C ? null : C;
          e.confirmationButtonSimple;
          return (0, v.jsxs)(O, {
            open: n,
            onClose: function (e, o) {
              "backdropClick" !== o && t();
            },
            className: l.root,
            sx: { "& .MuiPaper-root": { padding: "1rem 2rem 2rem 1rem" } },
            children: [
              (0, v.jsxs)(_, {
                className: l.title,
                children: [
                  (0, v.jsxs)("div", {
                    className: l.titleText,
                    children: [w, " ", c],
                  }),
                  (0, v.jsx)("div", {
                    className: l.closeContainer,
                    children: (0, v.jsx)(oe.Z, {
                      "aria-label": "close",
                      className: l.closeButton,
                      onClick: t,
                      disableRipple: !0,
                      size: "small",
                      children: (0, v.jsx)(ne.Z, {}),
                    }),
                  }),
                ],
              }),
              (0, v.jsx)(Q, { className: l.content, children: p }),
              (0, v.jsxs)(ee, {
                className: l.actions,
                children: [
                  (0, v.jsx)(
                    S.zxk,
                    (0, k.Z)(
                      (0, k.Z)(
                        { onClick: r || t, disabled: d, type: "button" },
                        b
                      ),
                      {},
                      { variant: "regular", id: "confirm-cancel", label: m }
                    )
                  ),
                  (0, v.jsx)(
                    S.zxk,
                    (0, k.Z)(
                      {
                        id: "confirm-ok",
                        onClick: i,
                        label: x,
                        disabled: d,
                        variant: "secondary",
                      },
                      Z
                    )
                  ),
                ],
              }),
            ],
          });
        }),
        le = (0, re.Z)(function (e) {
          return (0,
          te.Z)({ headerContainer: { backgroundColor: "#e78794", borderRadius: 3, marginBottom: 20, padding: 1, paddingBottom: 15 }, labelHeadline: { color: "#000000", fontSize: 14, marginLeft: 20 }, labelText: { color: "#000000", fontSize: 14, marginLeft: 20, marginRight: 40 } });
        })(function (e) {
          var o = e.classes,
            n = e.label,
            t = e.title;
          return (0,
          v.jsxs)("div", { className: o.headerContainer, children: [(0, v.jsx)("h4", { className: o.labelHeadline, children: t }), (0, v.jsx)("div", { className: o.labelText, children: n })] });
        }),
        se = function (e) {
          var o = e.closeDeleteModalAndRefresh,
            n = e.deleteOpen,
            i = e.withWarning,
            a = e.selectedItem,
            l = e.endpoint,
            s = e.element,
            c = e.label,
            d = (0, g.T)(),
            p = (0, C.Z)(
              function () {
                return o(!0);
              },
              function (e) {
                return d((0, b.Ih)(e));
              }
            ),
            u = (0, t.Z)(p, 2),
            m = u[0],
            f = u[1],
            x = (0, r.useState)(""),
            h = (0, t.Z)(x, 2),
            k = h[0],
            W = h[1];
          if (!a) return null;
          return (0, v.jsx)(ae, {
            title: "Delete ".concat(s),
            confirmText: "Delete",
            isOpen: n,
            titleIcon: (0, v.jsx)(S.NvT, {}),
            isLoading: m,
            onConfirm: function () {
              f("DELETE", "".concat(l).concat(a));
            },
            onClose: function () {
              return o(!1);
            },
            confirmButtonProps: { disabled: k !== a || m },
            confirmationContent: (0, v.jsxs)(Z, {
              children: [
                i &&
                  (0, v.jsx)(S.rjZ, {
                    item: !0,
                    xs: 12,
                    children: (0, v.jsx)(le, { title: "WARNING", label: c }),
                  }),
                "To continue please type ",
                (0, v.jsx)("b", { children: a }),
                " in the box.",
                (0, v.jsx)(S.rjZ, {
                  item: !0,
                  xs: 12,
                  children: (0, v.jsx)(w.Z, {
                    id: "retype-key",
                    name: "retype-key",
                    onChange: function (e) {
                      W(e.target.value);
                    },
                    label: "",
                    value: k,
                  }),
                }),
              ],
            }),
          });
        };
    },
    9823: function (e, o, n) {
      var t = n(4836);
      o.Z = void 0;
      var r = t(n(5649)),
        i = n(184),
        a = (0, r.default)(
          (0, i.jsx)("path", {
            d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
          }),
          "Close"
        );
      o.Z = a;
    },
  },
]);
//# sourceMappingURL=638.5ba5b9d3.chunk.js.map
