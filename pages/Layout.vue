<template>
  <div class="containerd-flex justify-center">
    <div class="row">
      <div class="my-4 mx-2 col-4">
        <NuxtLink to="/create" class="btn btn-primary">
          {{ $t("create") }}
        </NuxtLink>
      </div>
      <div class="col-6">
        <form class="d-flex justify-center searchform my-4 mx-2" role="search">
          <input
            class="form-control search"
            type="search"
            :placeholder="$t('search')"
            aria-label="Search"
          />
          <button class="btn btn-outline-primary mx-1" type="submit">
            {{ $t("seacrh") }}
          </button>
        </form>
      </div>
      <NuxtPage class="" />
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions, mapState } from "vuex";

export default {
  data() {
    return {};
  },
  mounted() {},
  computed: mapState(["posts"]),

  computed: {
    ...mapGetters(["getPosts"]),
  },
  created() {
    this.getPost();
  },
  methods: {
    ...mapActions(["getPost"]),
  },
};
</script>
<style scoped>
pre {
  overflow-x: hidden;
}
</style>
