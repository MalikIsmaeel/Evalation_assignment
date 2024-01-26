<template>
  <div class="bg-blue main">
    <Header />
    <NuxtPage class="" />
    <TheFooter />
  </div>
</template>
<style>
.main {
  height: fit-content;
}
</style>
<script>
import { mapGetters, mapActions, mapState } from "vuex";

export default {
  data() {
    return { id: "" };
  },
};
</script>
