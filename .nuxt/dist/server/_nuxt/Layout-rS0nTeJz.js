import { _ as __nuxt_component_0 } from "./nuxt-link-DG81h8SX.js";
import { _ as _export_sfc, a as __nuxt_component_1 } from "../server.mjs";
import { mapState, mapGetters, mapActions } from "vuex";
import { mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "defu";
import "klona";
import "devalue";
import "@vue/devtools-api";
import "cookie-es";
import "destr";
import "ohash";
import "axios";
const _sfc_main = {
  data() {
    return {};
  },
  mounted() {
  },
  computed: mapState(["posts"]),
  computed: {
    ...mapGetters(["getPosts"])
  },
  created() {
    this.getPost();
  },
  methods: {
    ...mapActions(["getPost"])
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0;
  const _component_NuxtPage = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "containerd-flex justify-center" }, _attrs))} data-v-6a69347a><div class="row" data-v-6a69347a><div class="my-4 mx-2 col-4" data-v-6a69347a>`);
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
  _push(`</div><div class="col-6" data-v-6a69347a><form class="d-flex justify-center searchform my-4 mx-2" role="search" data-v-6a69347a><input class="form-control search" type="search"${ssrRenderAttr("placeholder", _ctx.$t("search"))} aria-label="Search" data-v-6a69347a><button class="btn btn-outline-primary mx-1" type="submit" data-v-6a69347a>${ssrInterpolate(_ctx.$t("seacrh"))}</button></form></div>`);
  _push(ssrRenderComponent(_component_NuxtPage, { class: "" }, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Layout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Layout = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-6a69347a"]]);
export {
  Layout as default
};
//# sourceMappingURL=Layout-rS0nTeJz.js.map
