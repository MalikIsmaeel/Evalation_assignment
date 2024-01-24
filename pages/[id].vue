<template>
  <div class="row mt-2">
    <form class="d-flex justify-center searchform" role="search">
      <input
        class="form-control search"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button class="btn btn-outline-primary" type="submit">Search</button>
    </form>
  </div>
  <div class="my-4 mx-2">
    <NuxtLink to="/create" class="btn btn-primary">New Post</NuxtLink>
  </div>
  <div class="row my-4 mx-2">
    <div class="col-md" v-for="(post, index) in posts" :key="index">
      <div class="card rounded-0 mx-1 mh-10 max-w-100px p-1" style="height: max-content">
        <div class="card-body">
          <h2 class="text-left">{{ post.title }}</h2>
          <pre class="text-truncate">
         {{ post.description }}
        </pre
          >
          <NuxtLink to="/show/{{ key }}" class="btn btn-primary float-end"
            ><i class="fa-solid fa-arrow-right"></i
          ></NuxtLink>
          <h3>{{ post.author }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  inheritAttrs: false,
  name: "Posts",
  data() {
    return {
      posts: {},
    };
  },
  mounted() {
    this.getPosts();
  },
  methods: {
    getPosts() {
      axios
        .get(`http://127.0.0.1:8000/api/posts`)
        .then((res) => {
          this.posts = res.data.Posts;
          console.log(this.posts);
        })
        .catch((err) => {
          alert(6547558758765);
        });
    },
  },
};
</script>
<style scoped>
.card {
  border-left: 2px solid blue;
  min-height: 3rem !important;
  max-height: 10rem !important;
}

h3,
h2 {
  text-align: left;
}
.container-fluid {
  background-color: rgb(146, 136, 136);
  height: 100% !important;
  width: 90%;
}
.topost {
  float: right;
  font-size: 20px;
}

.topost:hover {
  border: 2px solid blue;
  background-color: blue;
  color: white;
  padding-left: 1px;
  padding-right: 1px;
  border-radius: 2px;
}
.search {
  margin-right: 1rem;
  max-width: 15rem;
  justify-content: center;
}
.searchform {
  display: flex;
  justify-content: center;
}
</style>
