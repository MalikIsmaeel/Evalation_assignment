import { _ as __nuxt_component_0 } from './Header-hkd_CPMA.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-DG81h8SX.mjs';
import { useSSRContext, withCtx, createVNode, mergeProps } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderAttrs } from 'vue/server-renderer';
import { m as mapState, a as mapGetters, b as mapActions, _ as _export_sfc } from '../server.mjs';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'vue-devtools-stub';
import 'axios';

const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mt-10" }, _attrs))}><footer class="d-flex flex-wrap justify-content-between align-items-center py-1 my-4"></footer></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
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
  const _component_Header = __nuxt_component_0;
  const _component_NuxtLink = __nuxt_component_0$1;
  const _component_TheFooter = __nuxt_component_2;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  _push(`<div class="containerd-flex justify-center"><div class="row"><div class="my-4 mx-1 col-4"></div><div class="col-6"><form class="d-flex justify-center searchform my-4 mx-2 mr-auto" role="search"><input class="form-control search" type="search"${ssrRenderAttr("placeholder", _ctx.$t("search"))} aria-label="Search"><button class="btn btn-outline-primary mx-1" type="submit">${ssrInterpolate(_ctx.$t("seacrh"))}</button></form></div></div><div class="row"><!--[-->`);
  ssrRenderList(_ctx.getPosts, (post) => {
    _push(`<div class="pt-2 col-3"><div class="two"><div class="d-flex justify-content-end px-3 pt-1"><i class="mdi mdi-star-outline pr-1 star"></i><i class="mdi mdi-dots-horizontal dot"></i></div><div class="px-3"><div class="round"><img src="https://img.icons8.com/emoji/48/000000/hedgehog-emoji.png" width="23" class="imgfix"></div></div><div class="px-3 pt-3"><h3 class="name">${ssrInterpolate(post.id)}</h3><p class="quote2">${ssrInterpolate(post.author)}</p></div><div class="d-flex justify-content-start px-3 align-items-center"><i class="mdi mdi-view-comfy task"></i><span class="quote2 pl-2">${ssrInterpolate(post.title)}</span></div><div class="d-flex justify-content-between px-3 align-items-center pb-3"><div class="d-flex justify-content-start align-items-center"><pre class="pl-2 des ll">${ssrInterpolate(post.description)}</pre></div><div class="d-flex justify-content-end m-3">`);
    _push(ssrRenderComponent(_component_NuxtLink, {
      to: "/post/" + post.id,
      class: "btn btn-primary float-end"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<i class="fa-solid fa-arrow-right"${_scopeId}></i>`);
        } else {
          return [
            createVNode("i", { class: "fa-solid fa-arrow-right" })
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</div></div></div></div>`);
  });
  _push(`<!--]--></div></div>`);
  _push(ssrRenderComponent(_component_TheFooter, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-8-PNCZE8.mjs.map
