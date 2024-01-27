import { _ as __nuxt_component_0$1 } from './nuxt-link-DG81h8SX.mjs';
import { mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<nav${ssrRenderAttrs(mergeProps({ class: "navbar navbar-expand-lg bg-primary text-white" }, _attrs))}><div class="container-fluid"><a class="navbar-brand text-white" href="#">Navbar</a><button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarSupportedContent"><ul class="navbar-nav me-auto mb-2 mb-lg-0"><li class="nav-item">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "btn btn-primary"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("home"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("home")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="nav-item"><li class="nav-item">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/create",
    class: "btn btn-primary"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.$t("create"))}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.$t("create")), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></li></ul></div></div>`);
  if (_ctx.$i18n.locale == "ar") {
    _push(`<span>`);
    _push(ssrRenderComponent(_component_NuxtLink, {
      to: _ctx.switchLocalePath("en"),
      class: "btn nav-link m-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`English`);
        } else {
          return [
            createTextVNode("English")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</span>`);
  } else {
    _push(`<span>`);
    _push(ssrRenderComponent(_component_NuxtLink, {
      to: _ctx.switchLocalePath("ar"),
      class: "btn nav-link m-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`\u0639\u0631\u0628\u064A`);
        } else {
          return [
            createTextVNode("\u0639\u0631\u0628\u064A")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</span>`);
  }
  _push(`</nav>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=Header-hkd_CPMA.mjs.map
