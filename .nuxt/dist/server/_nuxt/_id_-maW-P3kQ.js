import { _ as __nuxt_component_0 } from "./Header-hkd_CPMA.js";
import { mapState, mapGetters, mapActions } from "vuex";
import { useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "./nuxt-link-DG81h8SX.js";
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
    console.log(this.$route.params.id);
  },
  computed: mapState(["posts"]),
  computed: {
    ...mapGetters(["singlePost"])
  },
  created() {
    this.onePosts(this.$route.params.id);
  },
  methods: {
    ...mapActions(["onePosts"])
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Header = __nuxt_component_0;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  _push(`<div class="container" data-v-be4c39ae><div class="row align-items-start" data-v-be4c39ae><div class="col-lg-8 m-15px-tb" data-v-be4c39ae><article class="article" data-v-be4c39ae><div class="article-img" data-v-be4c39ae><img src="https://www.bootdey.com/image/800x350/87CEFA/000000" title="" alt="" data-v-be4c39ae></div><div class="article-title" data-v-be4c39ae><h6 data-v-be4c39ae><a href="#" data-v-be4c39ae></a></h6><h2 data-v-be4c39ae>${ssrInterpolate(_ctx.singlePost.title)}</h2><div class="media" data-v-be4c39ae><div class="avatar" data-v-be4c39ae><img src="https://bootdey.com/img/Content/avatar/avatar1.png" title="" alt="" data-v-be4c39ae></div><div class="media-body" data-v-be4c39ae><label data-v-be4c39ae>${ssrInterpolate(_ctx.singlePost.author)}</label></div></div></div><div class="article-content" data-v-be4c39ae><p data-v-be4c39ae>${ssrInterpolate(_ctx.singlePost.description)}</p></div></article></div><div class="col-lg-4 m-15px-tb blog-aside" data-v-be4c39ae></div></div></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/post/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-be4c39ae"]]);
export {
  _id_ as default
};
//# sourceMappingURL=_id_-maW-P3kQ.js.map
