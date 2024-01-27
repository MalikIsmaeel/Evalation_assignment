<template :style>
  <NuxtPage class="" />
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
