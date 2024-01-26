<template>
  <div class="containerd-flex justify-center">
    <div class="row">
      <div class="my-4 mx-2 col-4">
        <NuxtLink to="/create" class="btn btn-primary">New Post</NuxtLink>
      </div>
      <div class="col-6">
        <form class="d-flex justify-center searchform my-4 mx-2" role="search">
          <input
            class="form-control search"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-primary mx-1" type="submit">Search</button>
        </form>
      </div>
      <div
        class="card my-2 col-md-5 mx-3 border-0"
        v-for="post in getPosts"
        :key="post.id"
      >
        <div class="card-header bg-blue"></div>
        <div class="card-body">
          {{ post.title }}
          <h3 class="avatar bg-gray-400 border-1">{{ post.author }}</h3>
          <pre>
          {{ post.description }}
          </pre>
        </div>
        <div class="m-2">
          <NuxtLink :to="'/post/' + post.id" class="btn btn-primary float-end"
            ><i class="fa-solid fa-arrow-right"></i
          ></NuxtLink>
        </div>
        <div class="card-footer"></div>
      </div>
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
