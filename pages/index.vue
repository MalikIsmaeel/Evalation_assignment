<template>
  <div class="card my-2 col-md-5 mx-3 border" v-for="post in getPosts" :key="post.id">
    <div class="card-body">
      {{ post.title }}
      <h3 class="avatar bg-gray-400 border-1">{{ post.author }}</h3>
      <pre>
            {{ post.description }}
            </pre
      >
    </div>
    <div class="m-2">
      <NuxtLink :to="'/post/' + post.id" class="btn btn-primary float-end"
        ><i class="fa-solid fa-arrow-right"></i
      ></NuxtLink>
    </div>
    <div class="card-footer"></div>
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
