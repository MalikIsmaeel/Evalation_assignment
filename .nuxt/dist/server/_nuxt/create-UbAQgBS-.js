import { mapState, mapGetters, mapActions } from "vuex";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
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
    return {
      postData: {
        author: "",
        title: "",
        description: ""
      }
    };
  },
  mounted() {
  },
  computed: mapState(["posts"]),
  computed: {
    ...mapGetters(["getPosts"])
  },
  methods: {
    ...mapActions(["addPosts"]),
    addpost() {
      this.addPosts(this.postData);
      this.$router.push("/");
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-3e9a5e5a><div class="row" data-v-3e9a5e5a><div class="col-lg-7 mx-auto" data-v-3e9a5e5a><div class="card mt-2 mx-auto p-4 bg-light" data-v-3e9a5e5a><div class="card-body bg-light" data-v-3e9a5e5a><div class="container" data-v-3e9a5e5a><form method="post" data-v-3e9a5e5a><div class="controls" data-v-3e9a5e5a><div class="row m-1" data-v-3e9a5e5a><div class="col-md-6" data-v-3e9a5e5a><div class="form-group" data-v-3e9a5e5a><label for="form_name" data-v-3e9a5e5a>${ssrInterpolate(_ctx.$t("author"))}*</label><input type="text" class="form-control" id="author"${ssrRenderAttr("placeholder", _ctx.$t("author_holder"))} name="author" required${ssrRenderAttr("value", $data.postData.author)} data-v-3e9a5e5a></div></div><div class="col-md-6" data-v-3e9a5e5a><div class="form-group" data-v-3e9a5e5a><label for="form_lastname" data-v-3e9a5e5a>${ssrInterpolate(_ctx.$t("title"))} *</label><input type="text" class="form-control" id="title"${ssrRenderAttr("placeholder", _ctx.$t("title_holder"))} name="title"${ssrRenderAttr("value", $data.postData.title)} required data-v-3e9a5e5a></div></div></div><div class="row m-2" data-v-3e9a5e5a><div class="col-md-12" data-v-3e9a5e5a><div class="form-group" data-v-3e9a5e5a><label for="form_message" data-v-3e9a5e5a>${ssrInterpolate(_ctx.$t("body"))} *</label><textarea id="tt" name="tt" class="form-control"${ssrRenderAttr("placeholder", _ctx.$t("body_holder"))} rows="4" required="required" data-error="Please, leave us a message." data-v-3e9a5e5a>${ssrInterpolate($data.postData.description)}</textarea></div></div><div class="col-md-12 justify-center px-4 mt-1" data-v-3e9a5e5a><input type="submit" class="btn btn-success btn-send pt-2 btn-block"${ssrRenderAttr("value", _ctx.$t("save"))} data-v-3e9a5e5a></div></div></div></form></div></div></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const create = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-3e9a5e5a"]]);
export {
  create as default
};
//# sourceMappingURL=create-UbAQgBS-.js.map
