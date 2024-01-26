<template :style>
  <div class="bg-blue main">
    <Header />
    <div class="containerd-flex justify-center">
      <div class="row">
        <div class="my-4 mx-1 col-4"></div>
        <div class="col-6">
          <form class="d-flex justify-center searchform my-4 mx-2 mr-auto" role="search">
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
    <TheFooter />
  </div>
</template>
<style>
html[lang="ar-SA"] {
  direction: rtl !important;
}
.main {
  height: fit-content;
}
</style>
<script>
import { mapGetters, mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      customStyle: {
        direction: "rtl",
      },
    };
  },
  mounted() {
    console.log(document.body.dir);
  },
};
</script>
